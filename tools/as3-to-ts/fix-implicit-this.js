#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

function isIdentifier(word) {
  return /^[A-Za-z_$][\w$]*$/.test(word);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractClassScopePropertyNames(source) {
  const props = new Set();
  const forbiddenNames = new Set(['public', 'private', 'protected', 'static', 'readonly', 'constructor']);
  const classBodyMatch = source.match(/\bclass\s+\w+[^{]*\{([\s\S]*)\}\s*$/m);
  if (!classBodyMatch) return props;

  for (const line of classBodyMatch[1].split('\n')) {
    const match = line.match(/^\s*(?:public|private|protected)?\s*(?:static\s+)?(?:readonly\s+)?([A-Za-z_$][\w$]*)\s*:/);
    if (!match) continue;
    const propName = match[1];
    if (!isIdentifier(propName) || forbiddenNames.has(propName)) continue;
    props.add(propName);
  }

  return props;
}

function addThisToPropertyUsage(source, propertyNames) {
  let fixed = source;
  for (const propertyName of propertyNames) {
    const re = new RegExp(`(^|[^.\\w$])(${escapeRegExp(propertyName)})\\b`, 'gm');
    fixed = fixed.replace(re, (match, prefix, token, offset, whole) => {
      const before = whole.slice(Math.max(0, offset - 40), offset + prefix.length);
      const lineStart = whole.lastIndexOf('\n', offset) + 1;
      const linePrefix = whole.slice(lineStart, offset + prefix.length);
      if (/\b(?:const|let|var|function|class|interface|type|new|import|export|extends|implements)\s*$/.test(before)) {
        return match;
      }
      if (/\b(?:public|private|protected|readonly|static)\s*$/.test(before)) {
        return match;
      }
      if (/\b(?:constructor|function|get|set)\b[^\n{]*$/.test(linePrefix)) {
        return match;
      }
      return `${prefix}this.${token}`;
    });
  }

  return fixed;
}

function processFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const propertyNames = extractClassScopePropertyNames(source);
  if (propertyNames.size === 0) {
    return { changed: false, replacements: 0 };
  }

  const updated = addThisToPropertyUsage(source, propertyNames);
  if (updated === source) {
    return { changed: false, replacements: 0 };
  }

  const replacementCount = (updated.match(/\bthis\./g) || []).length - (source.match(/\bthis\./g) || []).length;
  fs.writeFileSync(filePath, updated, 'utf8');
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
  extractClassScopePropertyNames,
  addThisToPropertyUsage,
  processFile,
  collectTsFiles
};

if (require.main === module) {
  runCli();
}
