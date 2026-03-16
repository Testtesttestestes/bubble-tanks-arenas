#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

function isIdentifier(word) {
  return /^[A-Za-z_$][\w$]*$/.test(word);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractClassScopeMembers(source) {
  const instanceMembers = new Set();
  const staticMembers = new Set();
  const forbiddenNames = new Set(['public', 'private', 'protected', 'static', 'readonly', 'constructor']);
  const classBodyMatch = source.match(/\bclass\s+(\w+)[^{]*\{([\s\S]*)\}\s*$/m);
  if (!classBodyMatch) {
    return { className: null, instanceMembers, staticMembers };
  }

  const className = classBodyMatch[1];
  const classBody = classBodyMatch[2];

  const addMember = (name, isStatic) => {
    if (!isIdentifier(name) || forbiddenNames.has(name)) return;
    if (isStatic) staticMembers.add(name);
    else instanceMembers.add(name);
  };

  for (const line of classBody.split('\n')) {
    const fieldMatch = line.match(/^\s*(?:public|private|protected)\s+(static\s+)?(?:readonly\s+)?([A-Za-z_$][\w$]*)\s*:/);
    if (fieldMatch) {
      addMember(fieldMatch[2], Boolean(fieldMatch[1]));
      continue;
    }

    const methodMatch = line.match(/^\s*(?:public|private|protected)\s+(static\s+)?(?:(?:get|set)\s+)?([A-Za-z_$][\w$]*)\s*\(/);
    if (methodMatch) {
      addMember(methodMatch[2], Boolean(methodMatch[1]));
    }
  }

  return { className, instanceMembers, staticMembers };
}

function addClassPrefixToMemberUsage(source, memberNames, prefixTarget) {
  let fixed = source;
  for (const memberName of memberNames) {
    const re = new RegExp(`(^|[^.\\w$])(${escapeRegExp(memberName)})\\b`, 'gm');
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
      return `${prefix}${prefixTarget}.${token}`;
    });
  }

  return fixed;
}

function processFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const { className, instanceMembers, staticMembers } = extractClassScopeMembers(source);
  if (!className || (instanceMembers.size === 0 && staticMembers.size === 0)) {
    return { changed: false, replacements: 0 };
  }

  let updated = addClassPrefixToMemberUsage(source, instanceMembers, 'this');
  updated = addClassPrefixToMemberUsage(updated, staticMembers, className);
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
  extractClassScopeMembers,
  addClassPrefixToMemberUsage,
  processFile,
  collectTsFiles
};

if (require.main === module) {
  runCli();
}
