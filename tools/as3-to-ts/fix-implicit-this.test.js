const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const { parseTscLog, processFile } = require('./fix-implicit-this');

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

