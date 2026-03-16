const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const SCRIPT_INPUT_DIR = path.resolve('scripts');
const AGI_INPUT_DIR = path.resolve('binaryData/AGI decomp/scripts');

let convertedRootDir;
let diagnosticsByFile;
let generatedTsFiles;

function runNode(script, args) {
  execFileSync('node', [path.resolve('tools/as3-to-ts', script), ...args], { stdio: 'inherit' });
}

function runTsc(projectPath, logPath) {
  try {
    execFileSync('npx', ['tsc', '--pretty', 'false', '--project', projectPath], {
      stdio: ['ignore', fs.openSync(logPath, 'w'), fs.openSync(logPath, 'a')]
    });
  } catch {
    // Expected when TypeScript finds diagnostics; logs are still written for parsing.
  }
}

function getAllTsFiles(rootDir) {
  const files = [];

  function walk(currentDir) {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }

      if (entry.isFile() && fullPath.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }

  walk(rootDir);
  return files.sort((a, b) => a.localeCompare(b));
}

function parseDiagnosticsByFile(tscLogPath) {
  const byFile = new Map();
  const lines = fs.readFileSync(tscLogPath, 'utf8').split(/\r?\n/);

  for (const line of lines) {
    const match = line.match(/^(.*\.tsx?)\((\d+),(\d+)\): error (TS\d+):\s*(.*)$/);
    if (!match) {
      continue;
    }

    const [, filePathRaw, lineNo, colNo, code, message] = match;
    const normalizedFilePath = path.resolve(filePathRaw);
    const list = byFile.get(normalizedFilePath) ?? [];
    list.push(`${code} (${lineNo},${colNo}): ${message}`);
    byFile.set(normalizedFilePath, list);
  }

  return byFile;
}

test.before(() => {
  assert.equal(fs.existsSync(SCRIPT_INPUT_DIR), true, `Missing scripts input directory: ${SCRIPT_INPUT_DIR}`);

  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'conversion-pipeline-'));
  convertedRootDir = path.join(tempRoot, 'migrated-ts');
  fs.mkdirSync(convertedRootDir, { recursive: true });

  runNode('convert-as3-to-ts.js', ['--input', SCRIPT_INPUT_DIR, '--output', convertedRootDir]);

  if (fs.existsSync(AGI_INPUT_DIR)) {
    runNode('convert-as3-to-ts.js', ['--input', AGI_INPUT_DIR, '--output', path.join(convertedRootDir, 'agi')]);
  }

  runNode('fix-implicit-this.js', ['--input', convertedRootDir]);
  runNode('heal-signature-params.js', ['--input', convertedRootDir]);
  runNode('fix-class-signatures.js', ['--input', convertedRootDir, '--scope', 'agi']);
  runNode('fix-ts2695-sequences.js', ['--input', convertedRootDir]);
  runNode('resolve-imports.js', ['--input', convertedRootDir]);

  const tsconfigPath = path.join(convertedRootDir, 'tsconfig.json');
  fs.writeFileSync(
    tsconfigPath,
    JSON.stringify({
      compilerOptions: {
        target: 'ES2022',
        module: 'CommonJS',
        strict: false,
        noImplicitAny: false,
        skipLibCheck: true,
        lib: ['ES2022']
      },
      include: ['**/*.ts', '**/*.d.ts']
    }, null, 2),
    'utf8'
  );

  fs.copyFileSync(path.resolve('flash-shims.d.ts'), path.join(convertedRootDir, 'flash-shims.d.ts'));
  fs.copyFileSync(path.resolve('flash-globals.d.ts'), path.join(convertedRootDir, 'flash-globals.d.ts'));

  const tscLogPath = path.join(convertedRootDir, 'tsc_output.log');
  runTsc(tsconfigPath, tscLogPath);

  diagnosticsByFile = parseDiagnosticsByFile(tscLogPath);
  generatedTsFiles = getAllTsFiles(convertedRootDir);
});

test('conversion pipeline creates narrow tsc result tests per generated ts file', async (t) => {
  assert.ok(generatedTsFiles.length > 0, 'No generated .ts files found to validate');

  for (const filePath of generatedTsFiles) {
    const relativePath = path.relative(convertedRootDir, filePath);
    const diagnostics = diagnosticsByFile.get(filePath) ?? [];

    if (diagnostics.length === 0) {
      await t.test(`${relativePath} :: pass`, () => {
        assert.equal(diagnostics.length, 0);
      });
      continue;
    }

    for (const [index, diagnostic] of diagnostics.entries()) {
      await t.test(`${relativePath} :: fail ${index + 1}`, () => {
        assert.fail(`TypeScript diagnostic in ${relativePath}: ${diagnostic}`);
      });
    }
  }
});
