const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const { parseTscLog, processFile, extractClassScopeMembers } = require('./fix-implicit-this');

function lineColAt(source, needle) {
  const index = source.indexOf(needle);
  assert.notEqual(index, -1, `Cannot find needle: ${needle}`);
  const line = source.slice(0, index).split('\n').length;
  const lineStart = source.lastIndexOf('\n', index - 1) + 1;
  const col = index - lineStart + 1;
  return { line, col };
}

test('second pass applies this. for TS2304 identifiers from migrated Parts sample and is idempotent', () => {
  const source = fs.readFileSync(path.resolve('migrated-ts/Parts/AGun3ShotSpread.ts'), 'utf8');
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
