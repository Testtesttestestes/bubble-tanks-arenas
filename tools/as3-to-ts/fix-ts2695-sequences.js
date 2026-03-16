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


function buildGenericIifeReplacement(expressions, indent, tempName) {
  const lines = [];
  lines.push('(() => {');
  lines.push(`${indent}  let ${tempName}: any;`);
  for (const expression of expressions) {
    lines.push(`${indent}  ${tempName} = ${expression};`);
  }
  lines.push(`${indent}  return ${tempName};`);
  lines.push(`${indent}})()`);
  return lines.join('\n');
}

function isLikelyParameterList(source, openParen, closeParen) {
  const left = source.slice(0, openParen).trimEnd();
  const right = source.slice(closeParen + 1).trimStart();
  if (right.startsWith('=>')) return true;

  const prev = left[left.length - 1] || '';
  const wordMatch = left.match(/([A-Za-z_$][\w$]*)$/);
  const prevWord = wordMatch ? wordMatch[1] : '';

  if (/^(if|for|while|switch|catch|function)$/.test(prevWord)) return true;
  if (prevWord === 'new') return false;
  if (/[A-Za-z0-9_$\]\)]/.test(prev)) return true;

  return false;
}

function transformTs2695Sequences(source) {
  let cursor = 0;
  let output = '';
  let tempCounter = 0;
  let replacements = 0;

  while (cursor < source.length) {
    const openParen = source.indexOf('(', cursor);
    if (openParen === -1) {
      output += source.slice(cursor);
      break;
    }

    const closeParen = findMatchingParen(source, openParen);
    if (closeParen === -1) {
      output += source.slice(cursor);
      break;
    }

    const inner = source.slice(openParen + 1, closeParen);
    const expressions = splitTopLevelComma(inner);
    if (expressions.length < 2 || isLikelyParameterList(source, openParen, closeParen)) {
      output += source.slice(cursor, closeParen + 1);
      cursor = closeParen + 1;
      continue;
    }

    const newCandidate = source.slice(Math.max(0, openParen - 4), openParen);
    const isNewSequence = /new\s+$/.test(newCandidate);
    const lineStart = source.lastIndexOf('\n', openParen) + 1;
    const indent = source.slice(lineStart, openParen).match(/^\s*/)?.[0] ?? '';
    const tempName = `__ts2695Tmp${tempCounter++}`;

    let replacement;
    if (isNewSequence) {
      const { sequence, castSuffix } = splitSequenceAndCast(inner);
      const sequenceExpressions = splitTopLevelComma(sequence);
      if (sequenceExpressions.length < 2) {
        output += source.slice(cursor, closeParen + 1);
        cursor = closeParen + 1;
        continue;
      }
      replacement = buildIifeReplacement(sequenceExpressions, castSuffix, indent, tempName);
      output += source.slice(cursor, openParen - 'new '.length);
    } else {
      replacement = buildGenericIifeReplacement(expressions, indent, tempName);
      output += source.slice(cursor, openParen);
    }

    output += replacement;
    cursor = closeParen + 1;
    replacements += 1;
  }

  return { content: output, replacements };
}

function hasAssignmentLikeExpression(expression) {
  return /(^|[^=!<>])=(?!=)/.test(expression) || /\+\+|--/.test(expression);
}

function transformBase64CommaAssignments(source) {
  const pattern = /\(([^()]*)\)/g;
  let output = source;
  let replacements = 0;
  let tempCounter = 0;
  let changed = true;

  while (changed) {
    changed = false;
    output = output.replace(pattern, (match, inner, offset, fullSource) => {
      const expressions = splitTopLevelComma(inner);
      if (expressions.length < 2) return match;

      if (!expressions.some(hasAssignmentLikeExpression)) return match;

      const openParen = offset;
      const closeParen = offset + match.length - 1;
      if (isLikelyParameterList(fullSource, openParen, closeParen)) return match;

      const lineStart = fullSource.lastIndexOf('\n', openParen) + 1;
      const indent = fullSource.slice(lineStart, openParen).match(/^\s*/)?.[0] ?? '';
      const tempName = `__base64Ts2695Tmp${tempCounter++}`;
      replacements += 1;
      changed = true;
      return buildGenericIifeReplacement(expressions, indent, tempName);
    });
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
  const primary = transformTs2695Sequences(source);
  let content = primary.content;
  let replacements = primary.replacements;

  if (path.basename(filePath) === 'Base64.ts') {
    const fallback = transformBase64CommaAssignments(content);
    content = fallback.content;
    replacements += fallback.replacements;
  }

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
  transformBase64CommaAssignments,
  collectTsFiles,
  processFile
};

if (require.main === module) {
  runCli();
}
