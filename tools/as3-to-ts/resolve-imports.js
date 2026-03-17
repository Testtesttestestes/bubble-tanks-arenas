#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const BUILTIN_GLOBALS = new Set([
  'Array', 'Boolean', 'Date', 'Error', 'Function', 'JSON', 'Math', 'Number', 'Object', 'Promise', 'RegExp', 'String',
  'Map', 'Set', 'WeakMap', 'WeakSet', 'Symbol', 'console', 'window', 'document', 'globalThis', 'parseInt', 'parseFloat',
  'isNaN', 'undefined', 'Infinity', 'NaN', 'MD5'
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

const PSEUDO_TYPES = new Set(['int', 'uint']);

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
    const matches = source.matchAll(/^\s*(?:export\s+)?(?:class|interface|type|enum|function|const|let|var)\s+([A-Za-z_$][\w$]*)\b/gm);
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
    m[1]
      .split(',')
      .map((v) => v.trim())
      .filter(Boolean)
      .forEach((n) => {
        const aliasMatch = n.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/i);
        declared.add(aliasMatch ? aliasMatch[2] : n);
      });
  }
  for (const m of source.matchAll(/^\s*import\s+([A-Za-z_$][\w$]*)\s+from\s+['"][^'"]+['"];?\s*$/gm)) {
    declared.add(m[1]);
  }

  const patterns = [
    /^\s*export\s+(?:class|interface|type|enum)\s+([A-Za-z_$][\w$]*)\b/gm,
    /^\s*(?:class|interface|type|enum)\s+([A-Za-z_$][\w$]*)\b/gm,
    /\b(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)\b/gm,
    /\b(?:public|private|protected)?\s*(?:static\s+)?(?:readonly\s+)?([A-Za-z_$][\w$]*)\s*!?\s*:/gm,
    /^\s*(?:public|private|protected)?\s*(?:static\s+)?(?:get|set)\s+([A-Za-z_$][\w$]*)\b/gm,
    /^\s*(?:public|private|protected)?\s*(?:static\s+)?(?:readonly\s+)?([A-Za-z_$][\w$]*)\s*\([^)]*\)\s*(?::\s*[^\s{]+)?\s*\{/gm,
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

  const usageRegex = /(?:new\s+|:\s*|extends\s+|implements\s+|\b)([A-Z]\w*|class_\d+)\b/g;
  for (const m of stripped.matchAll(usageRegex)) {
    const id = m[1];
    if (TS_KEYWORDS.has(id) || BUILTIN_GLOBALS.has(id) || FLASH_TYPES.has(id)) continue;
    used.add(id);
  }

  const re = /\b([A-Za-z_$][\w$]*)\b/g;
  for (const m of stripped.matchAll(re)) {
    const id = m[1];
    if (id.length <= 1) continue; // FIX: ignore single-letter identifiers for imports
    const startIndex = m.index ?? 0;
    const prevChar = stripped[startIndex - 1];
    if (prevChar === '.') continue;
    if (TS_KEYWORDS.has(id) || BUILTIN_GLOBALS.has(id) || FLASH_TYPES.has(id)) continue;
    used.add(id);
  }
  return used;
}

function normalizeLineEndings(source) {
  return {
    hasCrlf: source.includes('\r\n'),
    text: source.replace(/\r\n/g, '\n')
  };
}

function collectKnownMembers(source) {
  const known = new Set();
  // Only treat properties starting with lowercase or underscore as members
  // to avoid masking static Class names (like DebugUtil) from being imported.
  for (const m of source.matchAll(/\b(?:this|[A-Za-z_$][\w$]*)\.([a-z_][\w$]*)\b/g)) {
    known.add(m[1]);
  }
  return known;
}

function relativeImport(fromFile, toFile) {
  let rel = path.relative(path.dirname(fromFile), toFile).replace(/\\/g, '/');
  rel = rel.replace(/\.ts$/i, '');
  if (!rel.startsWith('.')) rel = `./${rel}`;
  return rel;
}

function chooseProvider(file, id, providers, existingImports) {
  const existingProvider = [...existingImports.keys()].find((from) => existingImports.get(from)?.has(id));
  if (existingProvider) {
    const abs = path.resolve(path.dirname(file), `${existingProvider}.ts`);
    if (providers.includes(abs)) return abs;
  }

  const nonSelfProviders = providers.filter((p) => p !== file);
  if (nonSelfProviders.length === 0) return null;

  const fileSegments = path.dirname(file).split(path.sep);
  const commonPrefixLen = (providerPath) => {
    const providerSegments = path.dirname(providerPath).split(path.sep);
    let i = 0;
    while (i < fileSegments.length && i < providerSegments.length && fileSegments[i] === providerSegments[i]) i += 1;
    return i;
  };

  return nonSelfProviders
    .slice()
    .sort((a, b) => {
      const commonA = commonPrefixLen(a);
      const commonB = commonPrefixLen(b);
      if (commonA !== commonB) return commonB - commonA;

      const relA = relativeImport(file, a);
      const relB = relativeImport(file, b);
      const depthA = relA.split('/').length;
      const depthB = relB.split('/').length;
      if (depthA !== depthB) return depthA - depthB;
      return relA.localeCompare(relB);
    })[0];
}

function analyzeFile(file, symbolMap) {
  const originalSource = fs.readFileSync(file, 'utf8');
  const normalized = normalizeLineEndings(originalSource);
  const source = normalized.text;

  const declared = getDeclaredNames(source);
  const used = getUsedIdentifiers(source);
  const knownMembers = collectKnownMembers(source);

  const existingImports = new Map();
  for (const m of source.matchAll(/^\s*import\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"];?\s*$/gm)) {
    const names = m[1]
      .split(',')
      .map((v) => v.trim())
      .filter(Boolean)
      .map((n) => {
        const aliasMatch = n.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/i);
        return aliasMatch ? aliasMatch[2] : n;
      });
    const from = m[2];
    if (!existingImports.has(from)) existingImports.set(from, new Set());
    for (const n of names) existingImports.get(from).add(n);
  }

  const needed = [];
  const unresolved = [];
  const seen = new Set();

  for (const id of used) {
    if (PSEUDO_TYPES.has(id)) continue;
    if (declared.has(id) || knownMembers.has(id)) continue;
    const providers = symbolMap.get(id) || [];
    const target = chooseProvider(file, id, providers, existingImports);

    if (!target) {
      unresolved.push({ id, providers });
      continue;
    }

    const from = relativeImport(file, target);
    if (existingImports.get(from)?.has(id)) continue;

    const key = `${from}::${id}`;
    if (seen.has(key)) continue;
    seen.add(key);
    needed.push({ id, from, providers });
  }

  return { originalSource, normalized, source, existingImports, needed, unresolved };
}

function applyImports(file, symbolMap) {
  const { normalized, source, existingImports, needed } = analyzeFile(file, symbolMap);

  if (needed.length === 0) return false;

  const grouped = new Map();
  for (const item of needed) {
    if (!grouped.has(item.from)) grouped.set(item.from, new Set(existingImports.get(item.from) || []));
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

  const finalText = normalized.hasCrlf ? updated.replace(/\n/g, '\r\n') : updated;
  fs.writeFileSync(file, finalText, 'utf8');
  return true;
}

function parseArgs(argv) {
  const args = { input: null, debug: false, debugFile: null };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--input' || token === '-i') args.input = argv[++i];
    if (token === '--debug') args.debug = true;
    if (token === '--debug-file') args.debugFile = path.resolve(argv[++i]);
  }
  if (!args.input) throw new Error('Usage: node resolve-imports.js --input <file-or-dir> [--debug] [--debug-file <file>]');
  return args;
}

function printDiagnostics(file, analysis) {
  const relevantNeeded = analysis.needed.map((n) => ({
    id: n.id,
    selectedFrom: n.from,
    providers: n.providers.map((p) => relativeImport(file, p))
  }));
  const unresolved = analysis.unresolved.map((item) => ({
    id: item.id,
    providers: item.providers.map((p) => relativeImport(file, p))
  }));

  console.log(`\n[resolve-imports:debug] ${file}`);
  console.log(`  unresolved identifiers (${unresolved.length}):`);
  for (const item of unresolved.sort((a, b) => a.id.localeCompare(b.id))) {
    const providers = item.providers.length ? item.providers.join(', ') : '(none)';
    console.log(`    - ${item.id} | providers: ${providers}`);
  }

  console.log(`  auto-resolved identifiers (${relevantNeeded.length}):`);
  for (const item of relevantNeeded.sort((a, b) => a.id.localeCompare(b.id))) {
    console.log(`    - ${item.id} -> ${item.selectedFrom} | providers: ${item.providers.join(', ')}`);
  }
}

function runCli() {
  const args = parseArgs(process.argv);
  const files = collectTsFiles(args.input);
  const symbolMap = buildSymbolMap(files);
  let changed = 0;
  for (const file of files) {
    if (args.debug && (!args.debugFile || args.debugFile === path.resolve(file))) {
      printDiagnostics(file, analyzeFile(file, symbolMap));
    }
    if (applyImports(file, symbolMap)) changed += 1;
  }
  console.log(`resolved imports in ${changed}/${files.length}`);
}

if (require.main === module) {
  runCli();
}

module.exports = { collectTsFiles, buildSymbolMap, applyImports, analyzeFile, getDeclaredNames, getUsedIdentifiers };