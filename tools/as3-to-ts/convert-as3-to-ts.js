#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

function mapType(asType) {
  const raw = (asType || '').trim();
  if (!raw || raw === '*') return 'any';
  const vectorMatch = raw.match(/^Vector\.<\s*([^>]+)\s*>$/);
  if (vectorMatch) return `${mapType(vectorMatch[1])}[]`;
  const simpleMap = new Map([
    ['Number', 'number'],
    ['int', 'number'],
    ['uint', 'number'],
    ['Boolean', 'boolean'],
    ['String', 'string'],
    ['Array', 'any[]'],
    ['Object', 'Record<string, any>'],
    ['void', 'void']
  ]);

  if (simpleMap.has(raw)) return simpleMap.get(raw);
  if (raw.includes('.')) return raw.split('.').at(-1);
  return raw;
}

function convertParams(paramString) {
  if (!paramString.trim()) return '';
  return paramString
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((param) => {
      const match = param.match(/^(\.{3})?(\w+)(?:\s*:\s*([^=]+?))?(?:\s*=\s*(.+))?$/);
      if (!match) return param;
      const [, rest, name, type, defaultValue] = match;
      const mapped = type ? mapType(type) : 'any';
      const spread = rest ? '...' : '';
      const suffix = defaultValue ? ` = ${defaultValue.trim()}` : '';
      return `${spread}${name}: ${mapped}${suffix}`;
    })
    .join(', ');
}

function convertClassMembers(source, className) {
  let out = source;
  const normalizeModifiers = (modifiers, keepOverride = true) => {
    const allowed = new Set(['public', 'private', 'protected', 'static', 'override']);
    return (modifiers || '')
      .replace(/\binternal\b/g, 'public')
      .split(/\s+/)
      .filter(Boolean)
      .filter((token) => allowed.has(token))
      .filter((token) => keepOverride || token !== 'override')
      .join(' ')
      .trim();
  };

  out = out.replace(
    /^(\s*)(public|private|protected|internal)\s+(static\s+)?(const|var)\s+(\w+)\s*:\s*([^=;]+?)(\s*=\s*[^;]+)?;\s*$/gm,
    (_, indent, visibility, isStatic, kind, name, type, init) => {
      const vis = visibility !== 'internal' ? `${visibility} ` : 'public ';
      const staticPart = isStatic ? 'static ' : '';
      const readonly = kind === 'const' ? 'readonly ' : '';
      const mappedType = mapType(type);
      const initializer = init ? init : '';
      return `${indent}${vis}${staticPart}${readonly}${name}: ${mappedType}${initializer};`;
    }
  );


  out = out.replace(
    /^(\s*)(\w+)\s+(static\s+)?(const|var)\s+(\w+)\s*:\s*([^=;]+?)(\s*=\s*[^;]+)?;\s*$/gm,
    (_, indent, _ns, isStatic, kind, name, type, init) => {
      const staticPart = isStatic ? 'static ' : '';
      const readonly = kind === 'const' ? 'readonly ' : '';
      const mappedType = mapType(type);
      const initializer = init ? init : '';
      return `${indent}public ${staticPart}${readonly}${name}: ${mappedType}${initializer};`;
    }
  );

  out = out.replace(
    /^(\s{6})(const|var)\s+(\w+)\s*:\s*([^=;]+?)(\s*=\s*[^;]+)?;\s*$/gm,
    (_, indent, kind, name, type, init) => {
      const readonly = kind === 'const' ? 'readonly ' : '';
      const mappedType = mapType(type);
      const initializer = init ? init : '';
      return `${indent}public ${readonly}${name}: ${mappedType}${initializer};`;
    }
  );

  out = out.replace(
    /^(\s*)((?:(?:override|public|private|protected|internal|\w+)\s+)*(?:static\s+)?)function\s+(\w+)\s*\(([^)]*)\)\s*(?::\s*([^\s{]+))?/gm,
    (_, indent, modifiers, fnName, params, returnType) => {
      const normalizedMods = normalizeModifiers(modifiers);
      const head = fnName === className ? 'constructor' : fnName;
      const paramList = convertParams(params);
      if (fnName === className) {
        return `${indent}constructor(${paramList})`;
      }
      const mappedReturn = mapType(returnType || 'void');
      return `${indent}${normalizedMods ? `${normalizedMods} ` : ''}${head}(${paramList}): ${mappedReturn}`;
    }
  );

  out = out.replace(
    /^(\s*)((?:(?:override|public|private|protected|internal|\w+)\s+)*(?:static\s+)?)function\s+(get|set)\s+(\w+)\s*\(([^)]*)\)\s*(?::\s*([^\s{]+))?/gm,
    (_, indent, modifiers, accessorKind, name, params, returnType) => {
      const normalizedMods = normalizeModifiers(modifiers, false);
      const paramList = convertParams(params);
      const mappedReturn = returnType ? mapType(returnType) : 'any';
      if (accessorKind === 'get') {
        return `${indent}${normalizedMods ? `${normalizedMods} ` : ''}get ${name}(): ${mappedReturn}`;
      }
      return `${indent}${normalizedMods ? `${normalizedMods} ` : ''}set ${name}(${paramList})`;
    }
  );

  out = out.replace(
    /^(\s{8,})var\s+(\w+)\s*:\s*([^=;]+?)(\s*=\s*[^;]+)?;\s*$/gm,
    (_, indent, name, type, init) => `${indent}let ${name}: ${mapType(type)}${init || ''};`
  );

  return out;
}


function stripPackageWrapper(source) {
  const pkg = source.match(/^\s*package\s*[\w\.]*\s*\{/m);
  if (!pkg) return { source, packageName: null };
  const packageNameMatch = source.match(/package\s*([\w\.]+)?\s*\{/);
  const packageName = packageNameMatch && packageNameMatch[1] ? packageNameMatch[1] : null;
  const openIndex = source.indexOf('{', pkg.index);
  let depth = 0;
  let closeIndex = -1;
  for (let i = openIndex; i < source.length; i += 1) {
    const ch = source[i];
    if (ch === '{') depth += 1;
    else if (ch === '}') {
      depth -= 1;
      if (depth === 0) {
        closeIndex = i;
        break;
      }
    }
  }
  if (closeIndex === -1) return { source, packageName };
  const prefixRemoved = source.slice(0, pkg.index) + source.slice(openIndex + 1, closeIndex) + source.slice(closeIndex + 1);
  return { source: prefixRemoved, packageName };
}

function convertAs3ToTs(source) {
  const stripped = stripPackageWrapper(source);
  const packageName = stripped.packageName;
  const imports = [...source.matchAll(/^\s*import\s+([\w\.]+);\s*$/gm)].map((m) => m[1]);

  const classMatch = source.match(
    /(public\s+|internal\s+)?(dynamic\s+)?(final\s+)?class\s+(\w+)\s*(extends\s+\w+)?\s*(implements\s+[\w\s,]+)?/
  );
  const interfaceMatch = source.match(/(public\s+|internal\s+)?interface\s+(\w+)\s*(extends\s+[\w\s,]+)?/);

  const className = classMatch ? classMatch[4] : null;
  let converted = stripped.source;

  converted = converted.replace(/^\s*import\s+[^;]+;\s*\n?/gm, '');
  converted = converted.replace(/^\s*(?:public\s+)?namespace\s+(\w+)\s*=\s*([^;]+);\s*$/gm, 'export const $1 = $2;');
  converted = converted.replace(/^\s*use\s+namespace\s+\w+;\s*\n?/gm, '');
  converted = converted.replace(/^\s*\[[^\]]+\]\s*\n?/gm, '');
  converted = converted.replace(/^\s*(?:let|var)\s+_temp_\d+\s*:[^;]+;\s*\n\s*(?:true|false);\s*\n\s*_temp_\d+;\s*\n?/gm, '');
  converted = converted.replace(/^\s*_temp_\d+;\s*$/gm, '');
  converted = converted.split('\n').filter((line) => !/^\s*import\s+/.test(line)).join('\n');
  converted = converted.replace(/Vector\.<\s*([^>]+)\s*>/g, 'Array<$1>');
  converted = converted.replace(/\.\*/g, '');
  converted = converted.replace(/(\w+)\.\(([^)]*)\)/g, '$1["$2"]');
  converted = converted.replace(/\*\./g, '.');
  converted = converted.replace(/^(\s*)bi_internal\s+/gm, '$1');
  converted = converted.replace(/\bfor\s+each\s*\(\s*var\s+(\w+)\s+in\s+([^\)]+)\)/g, 'for (const $1 of $2)');
  converted = converted.replace(/\bfor\s+each\s*\(\s*(\w+)\s+in\s+([^\)]+)\)/g, 'for (const $1 of $2)');
  converted = converted.replace(/\b([\w\.\]\)]+)\s+is\s+([A-Za-z_]\w*)/g, '$1 instanceof $2');

  if (classMatch && className) {
    converted = converted.replace(
      /(public\s+|internal\s+)?(dynamic\s+)?(final\s+)?class\s+(\w+)\s*(extends\s+\w+)?\s*(implements\s+[\w\s,]+)?/,
      (_, _vis, _dyn, _final, name, ext, impl) => {
        const extension = ext ? ` ${ext}` : '';
        const implText = impl ? ` ${impl}` : '';
        return `export class ${name}${extension}${implText}`;
      }
    );

    converted = convertClassMembers(converted, className);

    if (className === 'class_32') {
      converted = converted.replace(
        /private static i:[^;]+;\s*\n\s*while\(i < 256\)\s*\{([\s\S]*?)\n\s*\}\s*\n\s*private static Rcon:/m,
        (_, body) => `private static i: number = 0;\n\n      static {\n         while(i < 256) {${body}\n         }\n      }\n\n      private static Rcon:`
      );
      converted = converted.replace(
        /private static Rcon:[^;]+;\s*\n\s*i\s*=\s*0;\s*\n\s*while\(i < _Rcon\.length\)\s*\{([\s\S]*?)\n\s*\}\s*\n\s*private state:/m,
        (_, body) => `private static Rcon: ByteArray = new ByteArray();\n\n      static {\n         i = 0;\n         while(i < _Rcon.length) {${body}\n         }\n      }\n\n      private state:`
      );
    }
  }

  if (interfaceMatch) {
    converted = converted.replace(
      /(public\s+|internal\s+)?interface\s+(\w+)\s*(extends\s+[\w\s,]+)?/,
      (_, _vis, name, ext) => `export interface ${name}${ext ? ` ${ext}` : ''}`
    );
  }

  converted = converted.replace(
    /^(\s*)function\s+set\s+(\w+)\s*\(([^)]*)\)\s*(?::\s*([^\s;{]+))?\s*;/gm,
    (_, indent, name, params) => `${indent}set ${name}(${convertParams(params)});`
  );
  converted = converted.replace(
    /^(\s*)function\s+get\s+(\w+)\s*\(([^)]*)\)\s*(?::\s*([^\s;{]+))?\s*;/gm,
    (_, indent, name, _params, type) => `${indent}get ${name}(): ${mapType(type || 'any')};`
  );
  converted = converted.replace(
    /^(\s*)function\s+(\w+)\s*\(([^)]*)\)\s*(?::\s*([^\s;{]+))?\s*;/gm,
    (_, indent, name, params, type) => `${indent}${name}(${convertParams(params)}): ${mapType(type || 'void')};`
  );


  const header = [
    '// AUTO-GENERATED by tools/as3-to-ts/convert-as3-to-ts.js',
    packageName ? `// Source package: ${packageName}` : '// Source package: <root>',
    imports.length ? `// Original imports: ${imports.join(', ')}` : '// Original imports: <none>'
  ].join('\n');

  return `${header}\n\n${converted.trim()}\n`;
}

function collectAsFiles(inputPath) {
  const stat = fs.statSync(inputPath);
  if (stat.isFile()) return [inputPath];

  const files = [];
  const stack = [inputPath];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.as')) {
        files.push(fullPath);
      }
    }
  }

  return files.sort();
}

function parseArgs(argv) {
  const args = { input: null, output: null, dryRun: false };

  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--input' || token === '-i') {
      args.input = argv[++i];
    } else if (token === '--output' || token === '-o') {
      args.output = argv[++i];
    } else if (token === '--dry-run') {
      args.dryRun = true;
    }
  }

  if (!args.input) throw new Error('Missing --input path.');
  if (!args.dryRun && !args.output) throw new Error('Missing --output path (or pass --dry-run).');
  return args;
}

function runCli() {
  const args = parseArgs(process.argv);
  const files = collectAsFiles(args.input);

  if (files.length === 0) {
    console.log('No .as files found.');
    return;
  }

  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    const converted = convertAs3ToTs(source);

    if (args.dryRun) {
      console.log(`--- ${file} ---`);
      console.log(converted.slice(0, 300));
      continue;
    }

    const rel = path.relative(args.input, file);
    const target = path.join(args.output, rel).replace(/\.as$/i, '.ts');
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, converted, 'utf8');
    console.log(`Converted: ${file} -> ${target}`);
  }
}

module.exports = {
  convertAs3ToTs,
  mapType,
  convertParams,
  collectAsFiles
};

if (require.main === module) {
  runCli();
}
