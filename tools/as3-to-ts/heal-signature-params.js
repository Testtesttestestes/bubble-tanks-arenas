#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

function healFunctionParamThisPrefixes(source) {
  return source.replace(
    /((?:constructor|function|get|set)(?:\s+[a-zA-Z0-9_]+)?\s*\()([^)]+)(\))/g,
    (match, prefix, params, suffix) => {
      const healedParams = params.replace(/\bthis\.([a-zA-Z0-9_]+)/g, '$1');
      return `${prefix}${healedParams}${suffix}`;
    }
  );
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

function processFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const healed = healFunctionParamThisPrefixes(source);
  if (healed === source) return false;
  fs.writeFileSync(filePath, healed, 'utf8');
  return true;
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
    throw new Error('Usage: node heal-signature-params.js --input <file-or-dir>');
  }

  return args;
}

function runCli() {
  const args = parseArgs(process.argv);
  const files = collectTsFiles(args.input);
  let changedFiles = 0;

  for (const file of files) {
    if (processFile(file)) changedFiles += 1;
  }

  console.log(`healed ${changedFiles}/${files.length}`);
}

module.exports = {
  healFunctionParamThisPrefixes,
  collectTsFiles,
  processFile
};

if (require.main === module) {
  runCli();
}
