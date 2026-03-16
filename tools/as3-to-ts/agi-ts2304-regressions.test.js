const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const ts = require('typescript');

const AGI_INPUT_DIR = path.resolve('binaryData/AGI decomp/scripts');
let convertedAgiDir;

function read(file) {
  return fs.readFileSync(path.resolve(file), 'utf8');
}

function getTs2304Names(file) {
  const program = ts.createProgram([
    path.resolve(file),
    path.resolve('flash-shims.d.ts'),
    path.resolve('flash-globals.d.ts')
  ], {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    skipLibCheck: true,
    noEmit: true
  });

  const filename = path.basename(file);
  const diagnostics = ts.getPreEmitDiagnostics(program)
    .filter((diag) => diag.code === 2304 && diag.file && path.basename(diag.file.fileName) === filename)
    .map((diag) => ts.flattenDiagnosticMessageText(diag.messageText, '\n'));

  return diagnostics.map((message) => {
    const match = message.match(/Cannot find name '([^']+)'/);
    return match ? match[1] : null;
  }).filter(Boolean);
}

test.before(() => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'agi-regression-'));
  const outputDir = path.join(tempRoot, 'migrated-ts');
  const converterDir = path.resolve('tools/as3-to-ts');

  execFileSync('node', [path.join(converterDir, 'convert-as3-to-ts.js'), '--input', AGI_INPUT_DIR, '--output', outputDir], { stdio: 'inherit' });
  execFileSync('node', [path.join(converterDir, 'fix-implicit-this.js'), '--input', outputDir], { stdio: 'inherit' });
  execFileSync('node', [path.join(converterDir, 'heal-signature-params.js'), '--input', outputDir], { stdio: 'inherit' });
  execFileSync('node', [path.join(converterDir, 'fix-class-signatures.js'), '--input', outputDir, '--scope', 'agi'], { stdio: 'inherit' });
  execFileSync('node', [path.join(converterDir, 'fix-ts2695-sequences.js'), '--input', outputDir], { stdio: 'inherit' });
  execFileSync('node', [path.join(converterDir, 'resolve-imports.js'), '--input', outputDir], { stdio: 'inherit' });

  convertedAgiDir = outputDir;
});

test('[1/5] ErrorMessage.close_btn uses SimpleButton and emits no TS2304 for SimpleButton', () => {
  const errorMessage = read(path.join(convertedAgiDir, 'ErrorMessage.ts'));
  const shims = read('flash-shims.d.ts');

  assert.match(errorMessage, /public\s+close_btn!:\s*SimpleButton\s*;/);
  assert.match(shims, /declare\s+class\s+SimpleButton\b/);

  const unresolved = getTs2304Names(path.join(convertedAgiDir, 'ErrorMessage.ts'));
  assert.equal(unresolved.includes('SimpleButton'), false);
});

test('[2/5] ErrorMessage.ok_btn uses SimpleButton and emits no TS2304 for SimpleButton', () => {
  const errorMessage = read(path.join(convertedAgiDir, 'ErrorMessage.ts'));
  const shims = read('flash-shims.d.ts');

  assert.match(errorMessage, /public\s+ok_btn!:\s*SimpleButton\s*;/);
  assert.match(shims, /declare\s+class\s+SimpleButton\b/);

  const unresolved = getTs2304Names(path.join(convertedAgiDir, 'ErrorMessage.ts'));
  assert.equal(unresolved.includes('SimpleButton'), false);
});

test('[3/5] ProgressBar.close_btn uses SimpleButton and emits no TS2304 for SimpleButton', () => {
  const progressBar = read(path.join(convertedAgiDir, 'ProgressBar.ts'));
  const shims = read('flash-shims.d.ts');

  assert.match(progressBar, /public\s+close_btn!:\s*SimpleButton\s*;/);
  assert.match(shims, /declare\s+class\s+SimpleButton\b/);

  const unresolved = getTs2304Names(path.join(convertedAgiDir, 'ProgressBar.ts'));
  assert.equal(unresolved.includes('SimpleButton'), false);
});

test('[4/5] AGI imports Client for private client member type and emits no TS2304 for Client', () => {
  const agi = read(path.join(convertedAgiDir, 'com/armorgames/AGI.ts'));

  assert.match(agi, /import\s+\{\s*Client\s*\}\s+from\s+'\.\/services\/Client';/);
  assert.match(agi, /private\s+client!:\s*Client\s*;/);

  const unresolved = getTs2304Names(path.join(convertedAgiDir, 'com/armorgames/AGI.ts'));
  assert.equal(unresolved.includes('Client'), false);
});

test('[5/5] AGI imports AGUser for private agUser member type and emits no TS2304 for AGUser', () => {
  const agi = read(path.join(convertedAgiDir, 'com/armorgames/AGI.ts'));

  assert.match(agi, /import\s+\{\s*AGUser\s*\}\s+from\s+'\.\/common\/AGUser';/);
  assert.match(agi, /private\s+agUser!:\s*AGUser\s*;/);

  const unresolved = getTs2304Names(path.join(convertedAgiDir, 'com/armorgames/AGI.ts'));
  assert.equal(unresolved.includes('AGUser'), false);
});
