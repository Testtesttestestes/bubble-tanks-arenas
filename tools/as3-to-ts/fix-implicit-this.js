#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

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
  const memberRegex = /^[ \t]*(public|private|protected)\s+(static\s+)?(?:readonly\s+)?(?:(?:var|let|const|function|get|set)\s+)?([a-zA-Z0-9_$]+)/gm;
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

function addClassPrefixToMemberUsage(source, memberNames, prefixTarget) {
  if (memberNames.size === 0) return source;
  const names = Array.from(memberNames).map(escapeRegExp).join('|');
  const regex = new RegExp(`\\b(${names})\\b(?!\\s*:)`, 'g');
  const blockedPrefix = /(?:function|var|let|const|get|set|public|private|protected|static|readonly|catch|as|instanceof)\s+$/;

  return source.replace(regex, (token, name, offset, whole) => {
    const prev = whole[offset - 1];
    if (prev === '.') return token;
    const left = whole.slice(Math.max(0, offset - 80), offset);
    if (blockedPrefix.test(left)) return token;
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

function processFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const { className, instanceMembers, staticMembers } = extractClassScopeMembers(source);
  if (!className || (instanceMembers.size === 0 && staticMembers.size === 0)) {
    return { changed: false, replacements: 0 };
  }

  let converted = source;
  converted = addClassPrefixToMemberUsage(converted, instanceMembers, 'this');
  converted = addClassPrefixToMemberUsage(converted, staticMembers, className);

  staticMembers.forEach((name) => {
    const staticMistakeRegex = new RegExp(`\\bthis\\.${escapeRegExp(name)}\\b`, 'g');
    converted = converted.replace(staticMistakeRegex, `${className}.${name}`);
  });

  // Лечим наследуемые обфусцированные переменные и методы
  converted = converted.replace(/(?<!\.|[a-zA-Z0-9_$]|function\s+|class\s+|var\s+|let\s+|const\s+|:\s*)(var_\d+|method_\d+)\b(?!\s*!?\s*:)/g, 'this.$1');

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
  const args = { input: null };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--input' || token === '-i') {
      args.input = argv[++i];
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
  let changedFiles = 0;

  for (const file of files) {
    const result = processFile(file);
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
  processFile,
  collectTsFiles
};

if (require.main === module) {
  runCli();
}
