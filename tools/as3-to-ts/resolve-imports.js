#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const BUILTIN_GLOBALS = new Set([
  'Array', 'Boolean', 'Date', 'Error', 'Function', 'JSON', 'Math', 'Number', 'Object', 'Promise', 'RegExp', 'String',
  'Map', 'Set', 'WeakMap', 'WeakSet', 'Symbol', 'console', 'window', 'document', 'globalThis', 'parseInt', 'parseFloat',
  'isNaN', 'undefined', 'Infinity', 'NaN'
]);

const TS_KEYWORDS = new Set([
  'export', 'default', 'class', 'interface', 'type', 'extends', 'implements', 'new', 'return', 'if', 'else', 'for', 'while',
  'switch', 'case', 'break', 'continue', 'throw', 'try', 'catch', 'finally', 'const', 'let', 'var', 'function', 'constructor',
  'public', 'private', 'protected', 'static', 'readonly', 'get', 'set', 'in', 'of', 'as', 'unknown', 'any', 'void', 'null',
  'true', 'false', 'this', 'super', 'typeof', 'instanceof', 'delete', 'await', 'async', 'from', 'import', 'declare'
]);

const FLASH_TYPES = new Set([
  'MovieClip', 'DisplayObject', 'DisplayObjectContainer', 'Sprite', 'Shape', 'Bitmap', 'SimpleButton', 'TextField',
  'Event', 'MouseEvent', 'KeyboardEvent', 'TimerEvent', 'Point', 'Rectangle', 'Matrix', 'ColorTransform', 'Sound',
  'URLRequest', 'Loader', 'ByteArray', 'Dictionary', 'XML', 'XMLList'
]);

function collectTsFiles(inputPath) {
  const stat = fs.statSync(inputPath);
  if (stat.isFile()) return [inputPath];

  const files = [];
  const stack = [inputPath];
  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(fullPath);
      else if (entry.isFile() && entry.name.endsWith('.ts')) files.push(fullPath);
    }
  }

  return files.sort();
}

function buildSymbolMap(files) {
  const map = new Map();
  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    const matches = source.matchAll(/^\s*export\s+(?:class|interface|type|enum)\s+([A-Za-z_$][\w$]*)\b/gm);
    for (const match of matches) {
      const name = match[1];
      if (!map.has(name)) map.set(name, []);
      map.get(name).push(file);
    }
  }
  return map;
}

function getDeclaredNames(source) {
  const declared = new Set();

  for (const m of source.matchAll(/^\s*import\s+\{([^}]+)\}\s+from\s+['"][^'"]+['"];?\s*$/gm)) {
    m[1].split(',').map((v) => v.trim()).filter(Boolean).forEach((n) => declared.add(n));
  }
  for (const m of source.matchAll(/^\s*import\s+([A-Za-z_$][\w$]*)\s+from\s+['"][^'"]+['"];?\s*$/gm)) {
    declared.add(m[1]);
  }

  const patterns = [
    /^\s*export\s+(?:class|interface|type|enum)\s+([A-Za-z_$][\w$]*)\b/gm,
    /^\s*(?:class|interface|type|enum)\s+([A-Za-z_$][\w$]*)\b/gm,
    /\b(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)\b/gm,
    /\b(?:public|private|protected)?\s*(?:static\s+)?(?:readonly\s+)?([A-Za-z_$][\w$]*)\s*:/gm,
    /\b(?:public|private|protected)?\s*(?:static\s+)?(?:readonly\s+)?([A-Za-z_$][\w$]*)\s*\(/gm,
    /\b(?:constructor)\s*\(([^)]*)\)/gm
  ];

  for (const p of patterns) {
    for (const m of source.matchAll(p)) {
      if (p.source.includes('constructor')) {
        const params = (m[1] || '').split(',');
        for (const raw of params) {
          const mm = raw.trim().match(/^\.{0,3}([A-Za-z_$][\w$]*)/);
          if (mm) declared.add(mm[1]);
        }
      } else {
        declared.add(m[1]);
      }
    }
  }

  return declared;
}

function getUsedIdentifiers(source) {
  const stripped = source
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\/\/.*$/gm, ' ')
    .replace(/(['"`])(?:\\.|(?!\1)[^\\])*\1/g, ' ');

  const used = new Set();
  const re = /\b([A-Za-z_$][\w$]*)\b/g;
  for (const m of stripped.matchAll(re)) {
    const id = m[1];
    if (TS_KEYWORDS.has(id) || BUILTIN_GLOBALS.has(id) || FLASH_TYPES.has(id)) continue;
    used.add(id);
  }
  return used;
}

function relativeImport(fromFile, toFile) {
  let rel = path.relative(path.dirname(fromFile), toFile).replace(/\\/g, '/');
  rel = rel.replace(/\.ts$/i, '');
  if (!rel.startsWith('.')) rel = `./${rel}`;
  return rel;
}

function applyImports(file, symbolMap) {
  const source = fs.readFileSync(file, 'utf8');
  const declared = getDeclaredNames(source);
  const used = getUsedIdentifiers(source);
  const needed = [];

  for (const id of used) {
    if (declared.has(id)) continue;
    const providers = symbolMap.get(id);
    if (!providers || providers.length === 0) continue;
    const target = providers.find((p) => p !== file);
    if (!target) continue;
    needed.push({ id, from: relativeImport(file, target) });
  }

  if (needed.length === 0) return false;

  const grouped = new Map();
  for (const item of needed) {
    if (!grouped.has(item.from)) grouped.set(item.from, new Set());
    grouped.get(item.from).add(item.id);
  }

  const importLines = [...grouped.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([from, names]) => `import { ${[...names].sort().join(', ')} } from '${from}';`)
    .join('\n');

  const hasHeader = source.startsWith('// AUTO-GENERATED AS3 TO TS CONVERSION');
  let updated;
  if (hasHeader) {
    const m = source.match(/^(\/\/ AUTO-GENERATED AS3 TO TS CONVERSION\n\/\/[^\n]*\n\n)/);
    if (m) {
      updated = `${m[1]}${importLines}\n\n${source.slice(m[1].length)}`;
    } else {
      updated = `${importLines}\n\n${source}`;
    }
  } else {
    updated = `${importLines}\n\n${source}`;
  }

  fs.writeFileSync(file, updated, 'utf8');
  return true;
}

function parseArgs(argv) {
  const args = { input: null };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--input' || token === '-i') args.input = argv[++i];
  }
  if (!args.input) throw new Error('Usage: node resolve-imports.js --input <file-or-dir>');
  return args;
}

function runCli() {
  const args = parseArgs(process.argv);
  const files = collectTsFiles(args.input);
  const symbolMap = buildSymbolMap(files);
  let changed = 0;
  for (const file of files) {
    if (applyImports(file, symbolMap)) changed += 1;
  }
  console.log(`resolved imports in ${changed}/${files.length}`);
}

if (require.main === module) {
  runCli();
}

module.exports = { collectTsFiles, buildSymbolMap, applyImports };
