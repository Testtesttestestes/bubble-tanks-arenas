#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

function findMatchingParen(source, openIndex) {
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = openIndex; i < source.length; i += 1) {
    const ch = source[i];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === quote) {
        quote = null;
      }
      continue;
    }

    if (ch === '"' || ch === '\'' || ch === '`') {
      quote = ch;
      continue;
    }

    if (ch === '(') depth += 1;
    else if (ch === ')') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }

  return -1;
}

function splitTopLevelComma(expression) {
  const parts = [];
  let current = '';
  let paren = 0;
  let brace = 0;
  let bracket = 0;
  let quote = null;
  let escaped = false;

  for (let i = 0; i < expression.length; i += 1) {
    const ch = expression[i];

    if (quote) {
      current += ch;
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === quote) {
        quote = null;
      }
      continue;
    }

    if (ch === '"' || ch === '\'' || ch === '`') {
      quote = ch;
      current += ch;
      continue;
    }

    if (ch === '(') paren += 1;
    else if (ch === ')') paren -= 1;
    else if (ch === '{') brace += 1;
    else if (ch === '}') brace -= 1;
    else if (ch === '[') bracket += 1;
    else if (ch === ']') bracket -= 1;

    if (ch === ',' && paren === 0 && brace === 0 && bracket === 0) {
      parts.push(current.trim());
      current = '';
      continue;
    }

    current += ch;
  }

  if (current.trim()) parts.push(current.trim());
  return parts;
}

function splitSequenceAndCast(innerExpression) {
  const castMatch = innerExpression.match(/\s+as\s+unknown\s+as\s+[^]+$/);
  if (castMatch) {
    const start = castMatch.index;
    return {
      sequence: innerExpression.slice(0, start).trim(),
      castSuffix: innerExpression.slice(start)
    };
  }
  return { sequence: innerExpression.trim(), castSuffix: '' };
}

function buildIifeReplacement(expressions, castSuffix, indent, tempName) {
  const lines = [];
  lines.push('(() => {');
  lines.push(`${indent}  let ${tempName}: any;`);
  for (const expression of expressions) {
    lines.push(`${indent}  ${tempName} = ${expression};`);
  }
  lines.push(`${indent}  return new (${tempName}${castSuffix});`);
  lines.push(`${indent}})()`);
  return lines.join('\n');
}

function transformTs2695Sequences(source) {
  let cursor = 0;
  let output = '';
  let tempCounter = 0;
  let replacements = 0;

  while (cursor < source.length) {
    const newIndex = source.indexOf('new (', cursor);
    if (newIndex === -1) {
      output += source.slice(cursor);
      break;
    }

    const openParen = newIndex + 'new '.length;
    const closeParen = findMatchingParen(source, openParen);
    if (closeParen === -1) {
      output += source.slice(cursor);
      break;
    }

    const inner = source.slice(openParen + 1, closeParen);
    const { sequence, castSuffix } = splitSequenceAndCast(inner);
    const expressions = splitTopLevelComma(sequence);

    if (expressions.length < 2) {
      output += source.slice(cursor, closeParen + 1);
      cursor = closeParen + 1;
      continue;
    }

    const lineStart = source.lastIndexOf('\n', newIndex) + 1;
    const indent = source.slice(lineStart, newIndex).match(/^\s*/)?.[0] ?? '';
    const tempName = `__ts2695Tmp${tempCounter++}`;
    const replacement = buildIifeReplacement(expressions, castSuffix, indent, tempName);

    output += source.slice(cursor, newIndex);
    output += replacement;
    cursor = closeParen + 1;
    replacements += 1;
  }

  return { content: output, replacements };
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
      if (entry.isDirectory()) stack.push(fullPath);
      else if (entry.isFile() && entry.name.endsWith('.ts')) files.push(fullPath);
    }
  }

  return files.sort();
}

function processFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, replacements } = transformTs2695Sequences(source);
  if (content === source) return { changed: false, replacements: 0 };
  fs.writeFileSync(filePath, content, 'utf8');
  return { changed: true, replacements };
}

function parseArgs(argv) {
  const args = { input: null };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--input' || token === '-i') args.input = argv[++i];
  }
  if (!args.input) throw new Error('Usage: node fix-ts2695-sequences.js --input <file-or-dir>');
  return args;
}

function runCli() {
  const args = parseArgs(process.argv);
  const files = collectTsFiles(args.input);
  let changedFiles = 0;
  let totalReplacements = 0;

  for (const file of files) {
    const result = processFile(file);
    if (!result.changed) continue;
    changedFiles += 1;
    totalReplacements += result.replacements;
  }

  console.log(`fixed ts2695 sequences in ${changedFiles}/${files.length} files (${totalReplacements} replacements)`);
}

module.exports = {
  findMatchingParen,
  splitTopLevelComma,
  splitSequenceAndCast,
  transformTs2695Sequences,
  collectTsFiles,
  processFile
};

if (require.main === module) {
  runCli();
}
