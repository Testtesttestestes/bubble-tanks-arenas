const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

function read(file) {
  return fs.readFileSync(path.resolve(file), 'utf8');
}

test('[1/5] ErrorMessage.close_btn uses SimpleButton and SimpleButton shim exists', () => {
  const errorMessage = read('migrated-ts/agi/ErrorMessage.ts');
  const shims = read('flash-shims.d.ts');

  assert.match(errorMessage, /public\s+close_btn!:\s*SimpleButton\s*;/);
  assert.match(shims, /declare\s+class\s+SimpleButton\b/);
});

test('[2/5] ErrorMessage.ok_btn uses SimpleButton and SimpleButton shim exists', () => {
  const errorMessage = read('migrated-ts/agi/ErrorMessage.ts');
  const shims = read('flash-shims.d.ts');

  assert.match(errorMessage, /public\s+ok_btn!:\s*SimpleButton\s*;/);
  assert.match(shims, /declare\s+class\s+SimpleButton\b/);
});

test('[3/5] ProgressBar.close_btn uses SimpleButton and SimpleButton shim exists', () => {
  const progressBar = read('migrated-ts/agi/ProgressBar.ts');
  const shims = read('flash-shims.d.ts');

  assert.match(progressBar, /public\s+close_btn!:\s*SimpleButton\s*;/);
  assert.match(shims, /declare\s+class\s+SimpleButton\b/);
});

test('[4/5] AGI imports Client for private client member type', () => {
  const agi = read('migrated-ts/agi/com/armorgames/AGI.ts');

  assert.match(agi, /import\s+\{\s*Client\s*\}\s+from\s+'\.\/services\/Client';/);
  assert.match(agi, /private\s+client!:\s*Client\s*;/);
});

test('[5/5] AGI imports AGUser for private agUser member type', () => {
  const agi = read('migrated-ts/agi/com/armorgames/AGI.ts');

  assert.match(agi, /import\s+\{\s*AGUser\s*\}\s+from\s+'\.\/common\/AGUser';/);
  assert.match(agi, /private\s+agUser!:\s*AGUser\s*;/);
});
