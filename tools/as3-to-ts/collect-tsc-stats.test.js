const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const SCRIPT_PATH = path.join(REPO_ROOT, 'tools/as3-to-ts/collect-tsc-stats.sh');

function writeLines(filePath, lines) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${lines.join('\n')}\n`, 'utf8');
}

test('collect-tsc-stats maps duplicated AS lines to the closest expected line', () => {
  const fixtureRel = '__collect_stats_test__/ArenaCreatorMapping';
  const tsRelPath = `migrated-ts/${fixtureRel}.ts`;
  const asRelPath = `scripts/${fixtureRel}.as`;

  const tsPath = path.join(REPO_ROOT, tsRelPath);
  const asPath = path.join(REPO_ROOT, asRelPath);
  const logPath = path.join(REPO_ROOT, 'tmp', '__collect_stats_test__.log');

  try {
    writeLines(tsPath, [
      '// 1',
      '// 2',
      '// 3',
      'export class ArenaCreatorMapping {',
      '  // 5',
      '  // 6',
      '  // 7',
      '  // 8',
      '  // 9',
      '  // 10',
      '  // 11',
      '  private broken(param1: any): void {',
      '    // 13',
      '    // 14',
      '    // 15',
      '    // 16',
      '    // 17',
      '    // 18',
      '    // 19',
      '    param1.target.scaleX += 0.1;',
      '  }',
      '}'
    ]);

    writeLines(asPath, [
      '// 1',
      '// 2',
      '// 3',
      'public class ArenaCreatorMapping {',
      '   // 5',
      '   // 6',
      '   // 7',
      '   // 8',
      '   private function decoy(param1:Event) : void',
      '   {',
      '      param1.target.scaleX += 0.1;',
      '   }',
      '   // 13',
      '   // 14',
      '   // 15',
      '   // 16',
      '   // 17',
      '   // 18',
      '   // 19',
      '   private function broken(param1:Event) : void',
      '   {',
      '      param1.target.scaleX += 0.1;',
      '   }',
      '}'
    ]);

    writeLines(logPath, [
      `${path.join(REPO_ROOT, tsRelPath)}(20,5): error TS2339: Property 'scaleX' does not exist on type 'EventTarget'.`
    ]);

    const output = execFileSync(
      'bash',
      [SCRIPT_PATH, logPath],
      {
        cwd: REPO_ROOT,
        env: {
          ...process.env,
          ERROR_SLICE_RADIUS: '1',
          MAX_ERROR_CONTEXTS: '1',
          MAX_AGI_ERROR_CONTEXTS: '0',
          MAX_ERROR_MESSAGES_PER_CODE: '1'
        },
        encoding: 'utf8'
      }
    );

    assert.match(output, /\[AS\] scripts\/__collect_stats_test__\/ArenaCreatorMapping\.as \(line 22, context 21-23\):/);
    assert.doesNotMatch(output, /\[AS\] scripts\/__collect_stats_test__\/ArenaCreatorMapping\.as \(line 11,/);
  } finally {
    fs.rmSync(path.join(REPO_ROOT, 'migrated-ts', '__collect_stats_test__'), { recursive: true, force: true });
    fs.rmSync(path.join(REPO_ROOT, 'scripts', '__collect_stats_test__'), { recursive: true, force: true });
    fs.rmSync(path.join(REPO_ROOT, 'tmp', '__collect_stats_test__.log'), { force: true });
  }
});
