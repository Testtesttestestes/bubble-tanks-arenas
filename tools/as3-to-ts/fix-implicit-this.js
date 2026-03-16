#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const OBFUSCATED_MEMBER_WHITELIST = /^(var_\d+|int[A-Z]\w*|obj[A-Z]?\w*|bln\w*|str\w*)$/;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const RESERVED_WORDS = new Set([
  'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default',
  'break', 'continue', 'return', 'try', 'catch', 'finally',
  'throw', 'function', 'var', 'let', 'const', 'class', 'extends',
  'implements', 'interface', 'import', 'export', 'new', 'this',
  'super', 'typeof', 'instanceof', 'in', 'delete', 'void', 'yield',
  'await', 'async', 'true', 'false', 'null', 'undefined', 'NaN', 'Infinity',
  'constructor',
  // Built-in globals/types that often appear in casts and should never be prefixed.
  'String', 'Number', 'Boolean', 'Object', 'Array', 'Function', 'Promise', 'RegExp',
  'Date', 'Math', 'JSON', 'Error', 'TypeError', 'Map', 'Set', 'WeakMap', 'WeakSet',
  'Symbol', 'BigInt', 'Uint8Array', 'Int8Array', 'Float32Array', 'Float64Array'
]);

function extractClassScopeMembers(source) {
  const classMatch = source.match(/class\s+(\w+)/);
  const instanceMembers = new Set();
  const staticMembers = new Set();
  if (!classMatch) {
    return { className: null, instanceMembers, staticMembers };
  }

  const className = classMatch[1];
  const memberRegex = /^[ \t]*(public|private|protected)\s+(static\s+)?(?:readonly\s+)?(?:(?:var|let|const|function|get|set)\s+)?([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=[(<:;=!?]|$)/gm;
  let match;
  while ((match = memberRegex.exec(source)) !== null) {
    const isStatic = !!match[2];
    const name = match[3];
    if (name === className || RESERVED_WORDS.has(name)) continue;
    if (isStatic) staticMembers.add(name);
    else instanceMembers.add(name);
  }

  return { className, instanceMembers, staticMembers };
}

function addClassPrefixToMemberUsage(source, memberNames, prefixTarget, options = {}) {
  if (memberNames.size === 0) return source;
  const { excludedNames = new Set() } = options;
  const eligibleNames = Array.from(memberNames).filter((name) => !excludedNames.has(name));
  if (eligibleNames.length === 0) return source;
  const names = eligibleNames.map(escapeRegExp).join('|');
  const regex = new RegExp(`\\b(${names})\\b(?!\\s*:)`, 'g');
  const blockedPrefix = /(?:function|var|let|const|get|set|public|private|protected|static|readonly|catch|as|instanceof)\s+$/;

  return source.replace(regex, (token, name, offset, whole) => {
    const prev = whole[offset - 1];
    if (prev === '.') return token;
    const left = whole.slice(Math.max(0, offset - 80), offset);
    const lineStart = whole.lastIndexOf('\n', offset - 1) + 1;
    const lineLeft = whole.slice(lineStart, offset);
    const right = whole.slice(offset + token.length, Math.min(whole.length, offset + token.length + 20));
    const leftWithSpace = whole.slice(Math.max(0, offset - 80), offset);
    const leftTrimmed = leftWithSpace.trimEnd();
    const prevTypeToken = leftTrimmed[leftTrimmed.length - 1];
    const rightTrimmed = right.trimStart();
    if ([':', '<', '|', '&', ','].includes(prevTypeToken)) return token;
    if (/^(?:>|\[\]|\||&|,|;)/.test(rightTrimmed)) return token;
    if (name === 'type' && /^\s+[A-Za-z_$]/.test(right)) return token;
    if (blockedPrefix.test(left)) return token;
    const classFieldDeclarationPrefix = /^\s*(?:(?:public|private|protected)\s+)?(?:static\s+)?(?:readonly\s+)?$/;
    if (classFieldDeclarationPrefix.test(lineLeft) && /^\s*[!?]?\s*[:;]/.test(right)) return token;
    if (isTypeLikeContext(whole, offset)) return token;
    return `${prefixTarget}.${name}`;
  });
}


function extractClassScopePropertyNames(source) {
  const { instanceMembers } = extractClassScopeMembers(source);
  const properties = new Set();
  instanceMembers.forEach((name) => {
    const methodPattern = new RegExp(`^[ \t]*(?:public|private|protected)\\s+(?:static\\s+)?(?:readonly\\s+)?${escapeRegExp(name)}\\s*\\(`, 'm');
    if (!methodPattern.test(source)) properties.add(name);
  });
  return properties;
}

function addThisToPropertyUsage(source, propertyNames) {
  return addClassPrefixToMemberUsage(source, propertyNames, 'this');
}

function parseImportNames(source) {
  const imports = new Set();
  const importRegex = /^\s*import\s+([^;]+?)\s+from\s+['"][^'"]+['"];?/gm;
  let match;
  while ((match = importRegex.exec(source)) !== null) {
    const clause = match[1].trim();
    const named = clause.match(/\{([^}]+)\}/);
    if (named) {
      named[1].split(',').forEach((entry) => {
        const token = entry.trim();
        if (!token) return;
        const alias = token.match(/\bas\s+([A-Za-z_$][\w$]*)$/);
        imports.add(alias ? alias[1] : token);
      });
    }
    const defaultOrNamespace = clause.replace(/\{[^}]+\}/, '').split(',').map((part) => part.trim()).filter(Boolean);
    defaultOrNamespace.forEach((entry) => {
      const nsMatch = entry.match(/^\*\s+as\s+([A-Za-z_$][\w$]*)$/);
      if (nsMatch) imports.add(nsMatch[1]);
      else if (/^[A-Za-z_$][\w$]*$/.test(entry)) imports.add(entry);
    });
  }
  return imports;
}

function computeLineStarts(source) {
  const starts = [0];
  for (let i = 0; i < source.length; i += 1) {
    if (source[i] === '\n') starts.push(i + 1);
  }
  return starts;
}

function lineColToIndex(lineStarts, line, col) {
  if (line <= 0 || line > lineStarts.length) return -1;
  return lineStarts[line - 1] + Math.max(0, col - 1);
}

function findMatchingBrace(source, openIndex) {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (source[i] === '{') depth += 1;
    else if (source[i] === '}') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function extractClassAndMethodRanges(source) {
  const classMatch = /class\s+\w+[^\{]*\{/.exec(source);
  if (!classMatch) return { classRange: null, methods: [] };

  const classOpen = classMatch.index + classMatch[0].length - 1;
  const classClose = findMatchingBrace(source, classOpen);
  if (classClose === -1) return { classRange: null, methods: [] };

  const classRange = { start: classOpen + 1, end: classClose };
  const methods = [];
  const methodRegex = /^[ \t]*(?:public|private|protected)?\s*(?:static\s+)?(?:readonly\s+)?([A-Za-z_$][\w$]*)\s*\(([^)]*)\)\s*[:\w<>, \[\]\|?]*\{/gm;
  let match;
  while ((match = methodRegex.exec(source)) !== null) {
    const open = methodRegex.lastIndex - 1;
    if (open < classRange.start || open > classRange.end) continue;
    const close = findMatchingBrace(source, open);
    if (close === -1 || close > classRange.end) continue;
    const params = new Set();
    match[2].split(',').forEach((param) => {
      const m = param.trim().match(/^([A-Za-z_$][\w$]*)/);
      if (m) params.add(m[1]);
    });
    methods.push({ start: open + 1, end: close, params });
  }
  return { classRange, methods };
}

function collectLocalsInRange(source, range) {
  const locals = new Set();
  const snippet = source.slice(range.start, range.end);
  const localRegex = /\b(?:let|const|var|function|catch)\s+([A-Za-z_$][\w$]*)/g;
  let match;
  while ((match = localRegex.exec(snippet)) !== null) {
    locals.add(match[1]);
  }
  return locals;
}

function isTypeLikeContext(source, index) {
  const left = source.slice(Math.max(0, index - 40), index);
  const right = source.slice(index, Math.min(source.length, index + 40));
  if (/\b(?:class|interface|type|extends|implements|import|export|new)\s*$/.test(left)) return true;
  if (/:\s*$/.test(left)) return true;
  if (/^\s*<[^>]*>/.test(right)) return true;
  return false;
}

function applyDiagnosticThisFixes(source, diagnostics) {
  if (!diagnostics || diagnostics.length === 0) return source;
  const importedNames = parseImportNames(source);
  const { className } = extractClassScopeMembers(source);
  const { classRange, methods } = extractClassAndMethodRanges(source);
  if (!classRange || !className) return source;

  const lineStarts = computeLineStarts(source);
  const edits = [];
  for (const diagnostic of diagnostics) {
    const hasForcedPrefix = diagnostic.forcePrefix === 'static' || diagnostic.forcePrefix === 'instance';
    if (!hasForcedPrefix && !OBFUSCATED_MEMBER_WHITELIST.test(diagnostic.name)) continue;
    const index = lineColToIndex(lineStarts, diagnostic.line, diagnostic.col);
    if (index < classRange.start || index >= classRange.end) continue;
    const method = methods.find((entry) => index >= entry.start && index < entry.end);
    if (!method && !hasForcedPrefix) continue;
    if (importedNames.has(diagnostic.name)) continue;
    if (method) {
      const locals = collectLocalsInRange(source, method);
      method.params.forEach((name) => locals.add(name));
      if (locals.has(diagnostic.name)) continue;
    }
    const prefixTarget = diagnostic.forcePrefix === 'static' ? `${className}.` : 'this.';
    if (source.slice(Math.max(0, index - prefixTarget.length), index) === prefixTarget) continue;
    if (source[index - 1] === '.') continue;
    if (!new RegExp(`^${escapeRegExp(diagnostic.name)}\\b`).test(source.slice(index))) continue;
    if (isTypeLikeContext(source, index)) continue;
    edits.push({ index, prefixTarget });
  }

  if (edits.length === 0) return source;
  const uniqueEdits = Array.from(new Map(edits.map((edit) => [edit.index, edit])).values()).sort((a, b) => b.index - a.index);
  let converted = source;
  for (const { index, prefixTarget } of uniqueEdits) {
    converted = `${converted.slice(0, index)}${prefixTarget}${converted.slice(index)}`;
  }
  return converted;
}

function parseTscLog(logPath) {
  if (!logPath || !fs.existsSync(logPath)) return new Map();
  const result = new Map();
  const content = fs.readFileSync(logPath, 'utf8');
  const lineRegex = /^(.*)\((\d+),(\d+)\):\s*error\s*TS(2304|2662|2663):\s*(.+)$/gm;
  let match;
  while ((match = lineRegex.exec(content)) !== null) {
    const message = match[5];
    const unresolvedMatch = message.match(/Cannot find name\s*'([^']+)'/);
    if (!unresolvedMatch) continue;
    let name = unresolvedMatch[1];
    let forcePrefix = null;
    const staticSuggestion = message.match(/Did you mean the static member\s*'([^']+)\.([^'.]+)'/);
    if (staticSuggestion) {
      name = staticSuggestion[2];
      forcePrefix = 'static';
    }
    const instanceSuggestion = message.match(/Did you mean the instance member\s*'([^']+)\.([^'.]+)'/);
    if (instanceSuggestion) {
      name = instanceSuggestion[2];
      forcePrefix = 'instance';
    }
    const filePath = path.resolve(match[1].trim());
    const diagnostic = {
      code: Number(match[4]),
      name,
      forcePrefix,
      line: Number(match[2]),
      col: Number(match[3])
    };
    if (!result.has(filePath)) result.set(filePath, []);
    result.get(filePath).push(diagnostic);
  }
  return result;
}

function processFile(filePath, options = {}) {
  const source = fs.readFileSync(filePath, 'utf8');
  const resolvedFilePath = path.resolve(filePath);
  const { diagnosticsByFile = new Map() } = options;
  const importedNames = parseImportNames(source);
  const { className, instanceMembers, staticMembers } = extractClassScopeMembers(source);
  if (!className || (instanceMembers.size === 0 && staticMembers.size === 0)) {
    return { changed: false, replacements: 0 };
  }

  let converted = source;
  converted = addClassPrefixToMemberUsage(converted, instanceMembers, 'this', { excludedNames: importedNames });
  converted = addClassPrefixToMemberUsage(converted, staticMembers, className, { excludedNames: importedNames });

  staticMembers.forEach((name) => {
    const staticMistakeRegex = new RegExp(`\\bthis\\.${escapeRegExp(name)}\\b`, 'g');
    converted = converted.replace(staticMistakeRegex, `${className}.${name}`);
  });

  // Лечим наследуемые обфусцированные переменные на основе tsc-диагностик (2-й проход).
  const diagnostics = diagnosticsByFile.get(resolvedFilePath) || [];
  converted = applyDiagnosticThisFixes(converted, diagnostics);

  if (converted === source) {
    return { changed: false, replacements: 0 };
  }

  const replacementCount = (converted.match(/\bthis\./g) || []).length - (source.match(/\bthis\./g) || []).length;
  fs.writeFileSync(filePath, converted, 'utf8');
  return { changed: true, replacements: replacementCount };
}

function collectTsFiles(inputPath) {
  const stat = fs.statSync(inputPath);
  if (stat.isFile()) return [inputPath];

  const files = [];
  const stack = [inputPath];
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

function parseArgs(argv) {
  const args = { input: null, tscLog: null };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--input' || token === '-i') {
      args.input = argv[++i];
    } else if (token === '--tsc-log') {
      args.tscLog = argv[++i];
    }
  }

  if (!args.input) {
    throw new Error('Usage: node fix-implicit-this.js --input <file-or-dir>');
  }

  return args;
}

function runCli() {
  const args = parseArgs(process.argv);
  const files = collectTsFiles(args.input);
  const diagnosticsByFile = parseTscLog(args.tscLog);
  let changedFiles = 0;

  for (const file of files) {
    const result = processFile(file, { diagnosticsByFile });
    if (!result.changed) continue;
    changedFiles += 1;
  }

  console.log(`updated ${changedFiles}/${files.length}`);
}

module.exports = {
  extractClassScopeMembers,
  addClassPrefixToMemberUsage,
  extractClassScopePropertyNames,
  addThisToPropertyUsage,
  applyDiagnosticThisFixes,
  parseTscLog,
  processFile,
  collectTsFiles
};

if (require.main === module) {
  runCli();
}
