#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

function fixClassSignatures(source) {
  let content = source;

  // Remove invalid `this.` prefixes in type positions.
  content = content.replace(/(:\s*)this\.([A-Za-z_$][\w$.]*)/g, '$1$2');
  content = content.replace(/(\bas\s+(?:unknown\s+as\s+)?)this\.([A-Za-z_$][\w$.]*)/g, '$1$2');
  const flashGlobals = ['getQualifiedClassName', 'getQualifiedSuperclassName', 'getDefinitionByName', 'getTimer', 'describeType'];
  const globalsRegex = new RegExp(`\\bthis\\.(${flashGlobals.join('|')})\\b`, 'g');
  content = content.replace(globalsRegex, '$1');

  // Heal constructors missing parameter list.
  content = content.replace(
    /^(\s*(?:(?:public|private|protected|readonly|override|abstract)\s+)*)constructor\s*\{/gm,
    '$1constructor() {'
  );

  // Heal malformed class members where access modifier is followed by `{`.
  content = content.replace(
    /^(\s*)(public|private|protected)\s*\{/gm,
    '$1$2 __fixedSignature(): any {'
  );

  // Heal SHA256 specific naming collision where local scalar `h` shadows class array `this.h`.
  // Converts `h[...]` array accesses back to `this.h[...]`, while ignoring already prefixed cases.
  content = content.replace(/(?<!\.)\bh\[([^\]]+)\]/g, 'this.h[$1]');

  // Heal ISymmetricKey (and similar interfaces) missing optional parameter modifiers.
  // Enforces `?: number` for interfaces (ending in ;) and `: number = 0` for class methods (ending in {).
  content = content.replace(
    /(\b(?:encrypt|decrypt)\s*\(\s*[a-zA-Z0-9_$]+\s*:\s*ByteArray\s*,\s*[a-zA-Z0-9_$]+)\s*[!?]?\s*:\s*number\s*(?:=\s*0\s*)?\)(\s*(?::\s*[A-Za-z0-9_$]+\s*)?;)/g,
    '$1?: number)$2'
  );
  content = content.replace(
    /(\b(?:encrypt|decrypt)\s*\(\s*[a-zA-Z0-9_$]+\s*:\s*ByteArray\s*,\s*[a-zA-Z0-9_$]+)\s*[!?]?\s*:\s*number\s*(?:=\s*0\s*)?\)(\s*(?::\s*[A-Za-z0-9_$]+\s*)?\{)/g,
    '$1: number = 0)$2'
  );

  return content;
}

function collectTsFiles(inputPath, scope) {
  const targetPath = scope ? path.join(inputPath, scope) : inputPath;
  const effectivePath = (!scope || fs.existsSync(targetPath)) ? targetPath : inputPath;
  if (!fs.existsSync(effectivePath)) return [];

  const stat = fs.statSync(effectivePath);
  if (stat.isFile()) return [effectivePath];

  const files = [];
  const stack = [effectivePath];

  while (stack.length > 0) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }

  return files.sort();
}

function processFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const fixed = fixClassSignatures(source);
  if (fixed === source) return false;
  fs.writeFileSync(filePath, fixed, 'utf8');
  return true;
}

function parseArgs(argv) {
  const args = { input: null, scope: null };

  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--input' || token === '-i') {
      args.input = argv[++i];
    } else if (token === '--scope') {
      args.scope = argv[++i];
    }
  }

  if (!args.input) {
    throw new Error('Usage: node fix-class-signatures.js --input <file-or-dir> [--scope <subdir>]');
  }

  return args;
}

function runCli() {
  const args = parseArgs(process.argv);
  const files = collectTsFiles(args.input, args.scope);
  let changedFiles = 0;

  for (const file of files) {
    if (processFile(file)) changedFiles += 1;
  }

  console.log(`fixed-signatures ${changedFiles}/${files.length}`);
}

module.exports = {
  fixClassSignatures,
  collectTsFiles,
  processFile
};

if (require.main === module) {
  runCli();
}
