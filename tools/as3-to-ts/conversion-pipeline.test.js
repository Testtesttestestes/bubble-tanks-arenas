const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

function runNode(script, args) {
  execFileSync('node', [path.resolve('tools/as3-to-ts', script), ...args], { stdio: 'pipe' });
}

function runTsc(projectPath, logPath) {
  try {
    execFileSync('npx', ['tsc', '--pretty', 'false', '--project', projectPath], {
      stdio: ['ignore', fs.openSync(logPath, 'w'), fs.openSync(logPath, 'a')]
    });
  } catch {
    // Expected when TypeScript finds diagnostics; logs are still written for stats parsing.
  }
}

test('conversion pipeline runs end-to-end and collect-tsc-stats analyzes generated log', () => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'conversion-pipeline-'));
  const inputDir = path.join(tempRoot, 'as3-input');
  const outputDir = path.join(tempRoot, 'migrated-ts');

  fs.mkdirSync(inputDir, { recursive: true });

  const as3Source = [
    'package {',
    '  public class PipelineSample {',
    '    public var value:int = 0;',
    '    public function PipelineSample() {',
    '    }',
    '    public function tick():void {',
    '      value = value + 1;',
    '    }',
    '  }',
    '}'
  ].join('\n');

  fs.writeFileSync(path.join(inputDir, 'PipelineSample.as'), as3Source, 'utf8');

  runNode('convert-as3-to-ts.js', ['--input', inputDir, '--output', outputDir]);
  runNode('fix-implicit-this.js', ['--input', outputDir]);
  runNode('heal-signature-params.js', ['--input', outputDir]);
  runNode('fix-class-signatures.js', ['--input', outputDir, '--scope', 'agi']);

  const malformedTsPath = path.join(outputDir, 'ManualMalformed.ts');
  fs.writeFileSync(
    malformedTsPath,
    [
      'export class ManualMalformed {',
      '  public {',
      '    return 1;',
      '  }',
      '}'
    ].join('\n'),
    'utf8'
  );

  runNode('fix-class-signatures.js', ['--input', outputDir, '--scope', 'agi']);
  const fixedManualMalformed = fs.readFileSync(malformedTsPath, 'utf8');
  assert.match(fixedManualMalformed, /public __fixedSignature\(\): any \{/);

  runNode('fix-ts2695-sequences.js', ['--input', outputDir]);
  runNode('resolve-imports.js', ['--input', outputDir]);

  const convertedPath = path.join(outputDir, 'PipelineSample.ts');
  assert.equal(fs.existsSync(convertedPath), true);

  const converted = fs.readFileSync(convertedPath, 'utf8');
  assert.match(converted, /export class PipelineSample/);
  assert.match(converted, /(this\.)?value\s*=\s*(this\.)?value\s*\+\s*1/);

  const tsconfigPath = path.join(outputDir, 'tsconfig.json');
  fs.writeFileSync(
    tsconfigPath,
    JSON.stringify({
      compilerOptions: {
        target: 'ES2022',
        module: 'CommonJS',
        strict: false,
        skipLibCheck: true
      },
      include: ['**/*.ts']
    }, null, 2),
    'utf8'
  );

  const tscLogPath = path.join(outputDir, 'tsc_output.log');
  runTsc(tsconfigPath, tscLogPath);

  const statsOutput = execFileSync('bash', [path.resolve('tools/as3-to-ts/collect-tsc-stats.sh'), tscLogPath], {
    env: { ...process.env, TSC_PROJECT: tsconfigPath },
    encoding: 'utf8'
  });

  assert.match(statsOutput, /Total errors:\s*0/);
  assert.match(statsOutput, /Top error codes:/);
  assert.match(statsOutput, /Detailed TS\/AS error contexts/);

  fs.writeFileSync(
    path.join(outputDir, 'Broken.ts'),
    'export const broken: number = missingIdentifier;\n',
    'utf8'
  );

  runTsc(tsconfigPath, tscLogPath);

  const statsOutputWithError = execFileSync('bash', [path.resolve('tools/as3-to-ts/collect-tsc-stats.sh'), tscLogPath], {
    env: { ...process.env, TSC_PROJECT: tsconfigPath },
    encoding: 'utf8'
  });

  assert.match(statsOutputWithError, /Total errors:\s*[1-9][0-9]*/);
  assert.match(statsOutputWithError, /TS2304/);
});
