const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const { parseTscLog, processFile, extractClassScopeMembers } = require('./fix-implicit-this');


const SCRIPT_INPUT_DIR = path.resolve('scripts');
let convertedScriptsDir;

test.before(() => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-converted-'));
  const outputDir = path.join(tempRoot, 'migrated-ts');
  const converterDir = path.resolve('tools/as3-to-ts');

  execFileSync('node', [path.join(converterDir, 'convert-as3-to-ts.js'), '--input', SCRIPT_INPUT_DIR, '--output', outputDir], { stdio: 'inherit' });
  execFileSync('node', [path.join(converterDir, 'fix-implicit-this.js'), '--input', outputDir], { stdio: 'inherit' });
  execFileSync('node', [path.join(converterDir, 'heal-signature-params.js'), '--input', outputDir], { stdio: 'inherit' });
  execFileSync('node', [path.join(converterDir, 'fix-ts2695-sequences.js'), '--input', outputDir], { stdio: 'inherit' });
  execFileSync('node', [path.join(converterDir, 'resolve-imports.js'), '--input', outputDir], { stdio: 'inherit' });

  convertedScriptsDir = outputDir;
});

function lineColAt(source, needle) {
  const index = source.indexOf(needle);
  assert.notEqual(index, -1, `Cannot find needle: ${needle}`);
  const line = source.slice(0, index).split('\n').length;
  const lineStart = source.lastIndexOf('\n', index - 1) + 1;
  const col = index - lineStart + 1;
  return { line, col };
}

test('second pass applies this. for TS2304 identifiers from migrated Parts sample and is idempotent', () => {
  const source = fs.readFileSync(path.join(convertedScriptsDir, 'Parts/AGun3ShotSpread.ts'), 'utf8');
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'AGun3ShotSpread.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const varPos = lineColAt(source, 'var_3.objData');
  const ratePos = lineColAt(source, 'intFireRate = 13;');
  const logPath = path.join(tempDir, 'tsc.log');
  fs.writeFileSync(
    logPath,
    [
      `${samplePath}(${varPos.line},${varPos.col}): error TS2304: Cannot find name 'var_3'.`,
      `${samplePath}(${ratePos.line},${ratePos.col}): error TS2304: Cannot find name 'intFireRate'.`
    ].join('\n'),
    'utf8'
  );

  const diagnosticsByFile = parseTscLog(logPath);
  const first = processFile(samplePath, { diagnosticsByFile });
  assert.equal(first.changed, true);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.match(updated, /this\.var_3\.objData/);
  assert.match(updated, /this\.intFireRate = 13;/);
  assert.doesNotMatch(updated, /this\.this\./);

  const second = processFile(samplePath, { diagnosticsByFile });
  assert.equal(second.changed, false);
  const rerun = fs.readFileSync(samplePath, 'utf8');
  assert.equal(rerun, updated);
});

test('member extraction ignores local variables without visibility modifiers', () => {
  const source = [
    'export class Sample {',
    '  public var_3: any;',
    '  public tick(): void {',
    '    var localThing = 0;',
    '    for (let i = 0; i < 3; i++) {',
    '      localThing += i;',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const { instanceMembers, staticMembers } = extractClassScopeMembers(source);
  assert.equal(instanceMembers.has('var_3'), true);
  assert.equal(instanceMembers.has('tick'), true);
  assert.equal(instanceMembers.has('localThing'), false);
  assert.equal(instanceMembers.has('i'), false);
  assert.equal(staticMembers.size, 0);
});


test('prefixes static members in boolean expressions with || and &&', () => {
  const source = [
    'export class DebugUtil {',
    '  public static ON: boolean = true;',
    '  public static EXTERN: boolean = false;',
    '  public static _filters: any[] = [];',
    '  public static output(param1: string): void {',
    '    if (!ON || _filters.indexOf(param1) === -1) {',
    '      return;',
    '    }',
    '    if (EXTERN && ON) {',
    '      return;',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'DebugUtil.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const result = processFile(samplePath);
  assert.equal(result.changed, true);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.match(updated, /!DebugUtil\.ON \|\| DebugUtil\._filters\.indexOf\(param1\) === -1/);
  assert.match(updated, /DebugUtil\.EXTERN && DebugUtil\.ON/);
});

test('parseTscLog captures TS2662/TS2663 suggestions and applies forced prefixes', () => {
  const source = [
    'export class BigInteger {',
    '  public static DB: number = 0;',
    '  public test(): void {',
    '    DB = 28;',
    '    data = 1;',
    '  }',
    '  public data: number = 0;',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'BigInteger.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const staticPos = lineColAt(source, 'DB = 28;');
  const instancePos = lineColAt(source, 'data = 1;');
  const logPath = path.join(tempDir, 'tsc.log');
  fs.writeFileSync(
    logPath,
    [
      `${samplePath}(${staticPos.line},${staticPos.col}): error TS2662: Cannot find name 'DB'. Did you mean the static member 'BigInteger.DB'?`,
      `${samplePath}(${instancePos.line},${instancePos.col}): error TS2663: Cannot find name 'data'. Did you mean the instance member 'BigInteger.data'?`
    ].join('\n'),
    'utf8'
  );

  const diagnosticsByFile = parseTscLog(logPath);
  const first = processFile(samplePath, { diagnosticsByFile });
  assert.equal(first.changed, true);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.match(updated, /BigInteger\.DB = 28;/);
  assert.match(updated, /this\.data = 1;/);
});

test('TS2662/TS2663 forced prefixes are applied outside methods (e.g. static blocks)', () => {
  const source = [
    'export class BigInteger {',
    '  public static DB: number = 0;',
    '  public static t: number = 0;',
    '  static {',
    '    DB = 28;',
    '    t = 52;',
    '  }',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'BigInteger.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const dbPos = lineColAt(source, 'DB = 28;');
  const tPos = lineColAt(source, 't = 52;');
  const logPath = path.join(tempDir, 'tsc.log');
  fs.writeFileSync(
    logPath,
    [
      `${samplePath}(${dbPos.line},${dbPos.col}): error TS2662: Cannot find name 'DB'. Did you mean the static member 'BigInteger.DB'?`,
      `${samplePath}(${tPos.line},${tPos.col}): error TS2662: Cannot find name 't'. Did you mean the static member 'BigInteger.t'?`
    ].join('\n'),
    'utf8'
  );

  const diagnosticsByFile = parseTscLog(logPath);
  const result = processFile(samplePath, { diagnosticsByFile });
  assert.equal(result.changed, true);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.match(updated, /BigInteger\.DB = 28;/);
  assert.match(updated, /BigInteger\.t = 52;/);
});

test('TS2304 obfuscated members are fixed inside getter methods', () => {
  const source = [
    'export class BigInteger {',
    '  public var_3: number = 0;',
    '  public get value(): number {',
    '    return var_3;',
    '  }',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'BigInteger.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const tPos = lineColAt(source, 'var_3;');
  const logPath = path.join(tempDir, 'tsc.log');
  fs.writeFileSync(
    logPath,
    `${samplePath}(${tPos.line},${tPos.col}): error TS2304: Cannot find name 'var_3'.`,
    'utf8'
  );

  const diagnosticsByFile = parseTscLog(logPath);
  const result = processFile(samplePath, { diagnosticsByFile });
  assert.equal(result.changed, true);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.match(updated, /return this\.var_3;/);
});


test('does not prefix type keyword in type alias declarations but prefixes member usage named type', () => {
  const source = [
    'export class Sample {',
    '  public type: number = 0;',
    '  public tick(): void {',
    '    type Example = string;',
    '    type = 1;',
    '  }',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'Sample.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const result = processFile(samplePath);
  assert.equal(result.changed, true);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.match(updated, /type Example = string;/);
  assert.match(updated, /this\.type = 1;/);
  assert.doesNotMatch(updated, /this\.type Example = string;/);
});




test('does not treat switch case/default labels as type contexts', () => {
  const source = [
    'export class Sample {',
    '  public tokenizer: number = 1;',
    '  public pick(value: number): number {',
    '    switch (value) {',
    '      case 0:',
    '        return tokenizer;',
    '      default:',
    '        return tokenizer + 1;',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'Sample.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const result = processFile(samplePath);
  assert.equal(result.changed, true);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.match(updated, /return this\.tokenizer;/);
  assert.match(updated, /return this\.tokenizer \+ 1;/);
});

test('does not treat ternary colon as a type annotation context for diagnostic fixes', () => {
  const source = [
    'export class Sample {',
    '  public client: number = 1;',
    '  public agUser: number = 2;',
    '  public flag(v: boolean): number {',
    '    return v ? client : agUser;',
    '  }',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'Sample.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const clientPos = lineColAt(source, 'client :');
  const agUserPos = lineColAt(source, 'agUser;');
  const logPath = path.join(tempDir, 'tsc.log');
  fs.writeFileSync(
    logPath,
    [
      `${samplePath}(${clientPos.line},${clientPos.col}): error TS2304: Cannot find name 'client'.`,
      `${samplePath}(${agUserPos.line},${agUserPos.col}): error TS2304: Cannot find name 'agUser'.`
    ].join('\n'),
    'utf8'
  );

  const diagnosticsByFile = parseTscLog(logPath);
  const result = processFile(samplePath, { diagnosticsByFile });
  assert.equal(result.changed, true);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.match(updated, /return v \? this\.client : this\.agUser;/);
});


test('diagnostic fixes all occurrences of the same identifier on one line', () => {
  const source = [
    'export class HMAC {',
    '  public bits: number = 0;',
    '  public check(outerHash: number[]): boolean {',
    '    return bits > 0 && bits < 8 * outerHash.length;',
    '  }',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'HMAC.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const bitsPos = lineColAt(source, 'bits > 0');
  const logPath = path.join(tempDir, 'tsc.log');
  fs.writeFileSync(
    logPath,
    `${samplePath}(${bitsPos.line},${bitsPos.col}): error TS2663: Cannot find name 'bits'. Did you mean the instance member 'HMAC.bits'?`,
    'utf8'
  );

  const diagnosticsByFile = parseTscLog(logPath);
  const result = processFile(samplePath, { diagnosticsByFile });
  assert.equal(result.changed, true);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.match(updated, /return this\.bits > 0 && this\.bits < 8 \* outerHash\.length;/);
});

test('diagnostic pass does not prefix PascalCase unresolved names that are not instance members', () => {
  const source = [
    'export class Client {',
    '  public run(): void {',
    '    DebugUtil.error(DebugUtil.getDebugInfo(), "boom");',
    '  }',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'Client.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const debugPos = lineColAt(source, 'DebugUtil.error');
  const logPath = path.join(tempDir, 'tsc.log');
  fs.writeFileSync(
    logPath,
    `${samplePath}(${debugPos.line},${debugPos.col}): error TS2304: Cannot find name 'DebugUtil'.`,
    'utf8'
  );

  const diagnosticsByFile = parseTscLog(logPath);
  const result = processFile(samplePath, { diagnosticsByFile });
  assert.equal(result.changed, false);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.doesNotMatch(updated, /this\.DebugUtil/);
});
test('diagnostic column targeting fixes the intended token in dense expressions', () => {
  const source = [
    'export class MontgomeryReduction {',
    '  public mp: number = 0;',
    '  public run(v: number): number {',
    '    return ((mp = (v + 1)), mp);',
    '  }',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'MontgomeryReduction.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const firstMp = lineColAt(source, 'mp = (v + 1)');
  const logPath = path.join(tempDir, 'tsc.log');
  fs.writeFileSync(
    logPath,
    `${samplePath}(${firstMp.line},${firstMp.col}): error TS2663: Cannot find name 'mp'. Did you mean the instance member 'MontgomeryReduction.mp'?`,
    'utf8'
  );

  const diagnosticsByFile = parseTscLog(logPath);
  const result = processFile(samplePath, { diagnosticsByFile });
  assert.equal(result.changed, true);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.match(updated, /\(\(this\.mp = \(v \+ 1\)\), this\.mp\)/);
});


test('does not prefix shadowed locals or params that match class member names', () => {
  const source = [
    'export class RSAKey {',
    '  public n: number = 0;',
    '  public p: number = 0;',
    '  public pkcs1pad(n: number): number {',
    '    let p = n;',
    '    p = p + 1;',
    '    return p + n;',
    '  }',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'RSAKey.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const result = processFile(samplePath);
  assert.equal(result.changed, false);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.doesNotMatch(updated, /this\.p = this\.p \+ 1;/);
  assert.doesNotMatch(updated, /return this\.p \+ this\.n;/);
  assert.match(updated, /let p = n;/);
  assert.match(updated, /return p \+ n;/);
});


test('member extraction supports definite and optional TS property assertions', () => {
  const source = [
    'export class ARC4 {',
    '  private S!: ByteArray;',
    '  protected i?: number;',
    '  public static TABLE?: number[];',
    '  public static CACHE!: Map<string, number>;',
    '}'
  ].join('\n');

  const { instanceMembers, staticMembers } = extractClassScopeMembers(source);
  assert.equal(instanceMembers.has('S'), true);
  assert.equal(instanceMembers.has('i'), true);
  assert.equal(staticMembers.has('TABLE'), true);
  assert.equal(staticMembers.has('CACHE'), true);
});

test('member extraction supports static readonly TS fields and static methods', () => {
  const source = [
    'export class AESKey {',
    '  public static readonly Nb: number = 4;',
    '  private static readonly ROUNDS: number = 14;',
    '  public static getTables(): any {',
    '    return null;',
    '  }',
    '}'
  ].join('\n');

  const { staticMembers } = extractClassScopeMembers(source);
  assert.equal(staticMembers.has('Nb'), true);
  assert.equal(staticMembers.has('ROUNDS'), true);
  assert.equal(staticMembers.has('getTables'), true);
});

test('member extraction supports untyped static/instance fields initialized with =', () => {
  const source = [
    'export class AESKey {',
    '  private Nr = 10;',
    '  private static readonly Nb = 4;',
    '  private static P_SZ = 18;',
    '}'
  ].join('\n');

  const { instanceMembers, staticMembers } = extractClassScopeMembers(source);
  assert.equal(instanceMembers.has('Nr'), true);
  assert.equal(staticMembers.has('Nb'), true);
  assert.equal(staticMembers.has('P_SZ'), true);
});

test('prefixes PascalCase static members in math and array expressions', () => {
  const source = [
    'export class AESKey {',
    '  private Nr: number = 10;',
    '  public static readonly Nb = 4;',
    '  public static readonly P: number[] = [1,2,3,4];',
    '  public static readonly P_SZ = 4;',
    '  public run(): number {',
    '    const words = Nb * (this.Nr + 1);',
    '    return P[0] + P_SZ + words;',
    '  }',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'AESKey.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const result = processFile(samplePath);
  assert.equal(result.changed, true);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.match(updated, /const words = AESKey\.Nb \* \(this\.Nr \+ 1\);/);
  assert.match(updated, /return AESKey\.P\[0\] \+ AESKey\.P_SZ \+ words;/);
});

test('known inherited members are prefixed as instance usage', () => {
  const source = [
    'export class CBCMode {',
    '  public run(): number {',
    '    return blockSize;',
    '  }',
    '}'
  ].join('\n');

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const samplePath = path.join(tempDir, 'CBCMode.ts');
  fs.writeFileSync(samplePath, source, 'utf8');

  const result = processFile(samplePath);
  assert.equal(result.changed, true);

  const updated = fs.readFileSync(samplePath, 'utf8');
  assert.match(updated, /return this\.blockSize;/);
});
