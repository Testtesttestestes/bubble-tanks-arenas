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
    ['void', 'void'],
    ['*', 'any'],
    ['Class', 'any'],
    ['Function', 'Function'],
    ['Event', 'any'],
    ['MouseEvent', 'any'],
    ['KeyboardEvent', 'any'],
    ['FocusEvent', 'any'],
    ['TimerEvent', 'any'],
    ['TextEvent', 'any'],
    ['IOErrorEvent', 'any'],
    ['SecurityErrorEvent', 'any'],
    ['HTTPStatusEvent', 'any']
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
      // Aggressively consume `this.` prefixes from decompiled AS3 parameter names.
      const match = param.match(/^(\.{3})?(?:this\.)?([a-zA-Z0-9_]+)\s*(?::\s*([^=]+))?(?:\s*=\s*(.+))?$/);
      if (!match) return param;
      const [, rest, name, type, defaultValue] = match;
      const mapped = type ? mapType(type) : 'any';
      const spread = rest ? '...' : '';
      let suffix = '';
      if (defaultValue) {
        let dv = defaultValue.trim();
        if (dv === 'null' && (mapped === 'number' || mapped === 'boolean')) {
          dv = '0 /* null */';
        } else if (dv === 'null' && mapped !== 'any') {
          dv = 'null as any';
        }
        suffix = ` = ${dv}`;
      }
      return `${spread}${name}: ${mapped}${suffix}`;
    })
    .join(', ');
}

function convertClassMembers(source, className) {
  let out = source;

  const normalizeModifiers = (modifiers) => {
    const allowed = new Set(['public', 'private', 'protected', 'static', 'readonly']);
    return (modifiers || '')
      .replace(/\binternal\b/g, 'public')
      .replace(/\boverride\b/g, '')
      .split(/\s+/)
      .filter(Boolean)
      .filter((token) => allowed.has(token))
      .join(' ')
      .trim();
  };

  out = out.replace(
    /^(\s*)(public|private|protected|internal)\s+(static\s+)?(const|var)\s+(?:this\.)?(\w+)\s*:\s*([^=;]+?)(\s*=\s*[^;]+)?;\s*$/gm,
    (_, indent, visibility, isStatic, kind, name, type, init) => {
      const vis = visibility !== 'internal' ? `${visibility} ` : 'public ';
      const staticPart = isStatic ? 'static ' : '';
      const readonly = kind === 'const' ? 'readonly ' : '';
      const bang = init || readonly ? '' : '!';
      const mappedTypeBase = mapType(type);
      const mappedType = mappedTypeBase === 'MovieClip' ? 'MovieClip & Record<string, any>' : mappedTypeBase;
      let initializer = init ? init : '';
      if (initializer.includes('null') && mappedType !== 'any') initializer = ' = null as any';
      return `${indent}${vis}${staticPart}${readonly}${name}${bang}: ${mappedType}${initializer};`;
    }
  );

  // Fix class fields without explicit access modifier (var a:Array -> public a: any[]).
  // Limit scope to class-header section before first method to avoid rewriting local vars.
  const firstFunctionIndex = out.search(/^\s*(?:(?:override|public|private|protected|internal|static|\w+)\s+)*function\b/m);
  const classHead = firstFunctionIndex === -1 ? out : out.slice(0, firstFunctionIndex);
  const classTail = firstFunctionIndex === -1 ? '' : out.slice(firstFunctionIndex);
  const normalizedHead = classHead.replace(
    /^(\s*)(static\s+)?(?:const|var)\s+(?:this\.)?(\w+)\s*:\s*([^=;]+?)(\s*=\s*[^;]+)?;\s*$/gm,
    (_, indent, isStatic, name, type, init) => {
      const staticPart = isStatic ? 'static ' : '';
      const bang = init ? '' : '!';
      const mappedTypeBase = mapType(type);
      const mappedType = mappedTypeBase === 'MovieClip' ? 'MovieClip & Record<string, any>' : mappedTypeBase;
      let initializer = init ? init : '';
      if (initializer.includes('null') && mappedType !== 'any') initializer = ' = null as any';
      return `${indent}public ${staticPart}${name}${bang}: ${mappedType}${initializer};`;
    }
  );
  out = normalizedHead + classTail;

  out = out.replace(
    /^(\s*)((?:(?:override|public|private|protected|internal|static|\w+)\s+)*)function\s+(?:this\.)?(\w+)\s*\(([^)]*)\)\s*(?::\s*([^\s{]+))?/gm,
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
    /^(\s*)((?:(?:override|public|private|protected|internal|static|\w+)\s+)*)function\s+(get|set)\s+(?:this\.)?(\w+)\s*\(([^)]*)\)\s*(?::\s*([^\s{]+))?/gm,
    (_, indent, modifiers, accessorKind, name, params, returnType) => {
      const normalizedMods = normalizeModifiers(modifiers);
      const paramList = convertParams(params);
      const mappedReturn = returnType ? mapType(returnType) : 'any';
      if (accessorKind === 'get') {
        return `${indent}${normalizedMods ? `${normalizedMods} ` : ''}get ${name}(): ${mappedReturn}`;
      }
      return `${indent}${normalizedMods ? `${normalizedMods} ` : ''}set ${name}(${paramList})`;
    }
  );

  // Keep migrated classes "dynamic"-friendly: timeline/decompiler code often writes
  // undeclared fields directly on `this` (e.g. `this.var_3`, `this.btnX_mc`).
  // Inject a permissive index signature once per class body to avoid TS2339 floods.
  const classBodyMatch = out.match(/export\s+class\s+\w+[^\{]*\{/);
  if (classBodyMatch && !/\[\s*key\s*:\s*string\s*\]\s*:\s*any\s*;/.test(out)) {
    out = out.replace(classBodyMatch[0], `${classBodyMatch[0]}\n  [key: string]: any;`);
  }

  return out;
}

function stripPackageWrapper(source) {
  const pkg = source.match(/^\s*package\s*([\w\.]+)?\s*\{/m);
  if (!pkg) return { source, packageName: null };
  const packageName = pkg[1] || null;
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

  const classMatch = stripped.source.match(
    /(public\s+|internal\s+)?(dynamic\s+)?(final\s+)?class\s+(\w+)\s*(extends\s+[\w\.]+)?\s*(implements\s+[\w\s,\.]+)?/
  );
  const interfaceMatch = stripped.source.match(/(public\s+|internal\s+)?interface\s+(\w+)\s*(extends\s+[\w\s,\.]+)?/);

  const className = classMatch ? classMatch[4] : null;
  const hasExtends = Boolean(classMatch && classMatch[5]);
  let converted = stripped.source;

  // Превращаем константы событий в строковые литералы
  const eventMap = {
    'MouseEvent.CLICK': '"click"',
    'MouseEvent.DOUBLE_CLICK': '"dblclick"',
    'MouseEvent.MOUSE_DOWN': '"mousedown"',
    'MouseEvent.MOUSE_UP': '"mouseup"',
    'MouseEvent.MOUSE_MOVE': '"mousemove"',
    'MouseEvent.MOUSE_OVER': '"mouseover"',
    'MouseEvent.MOUSE_OUT': '"mouseout"',
    'MouseEvent.ROLL_OVER': '"mouseover"',
    'MouseEvent.ROLL_OUT': '"mouseout"',
    'FocusEvent.FOCUS_IN': '"focusin"',
    'FocusEvent.FOCUS_OUT': '"focusout"',
    'Event.ENTER_FRAME': '"enterframe"',
    'Event.COMPLETE': '"complete"',
    'Event.ADDED_TO_STAGE': '"addedtostage"',
    'Event.REMOVED_FROM_STAGE': '"removedfromstage"',
    'Event.CHANGE': '"change"',
    'KeyboardEvent.KEY_DOWN': '"keydown"',
    'KeyboardEvent.KEY_UP': '"keyup"'
  };

  for (const [as3Event, tsEvent] of Object.entries(eventMap)) {
    const regex = new RegExp(`\\b${as3Event.replace(/\\./g, '\\\\.')}\\b`, 'g');
    converted = converted.replace(regex, tsEvent);
  }

  converted = converted.replace(/^\s*import\s+[^;]+;\s*$/gm, '');
  converted = converted.replace(/^\s*use\s+namespace\s+[^;]+;\s*$/gm, '');
  converted = converted.replace(/^\s*\[[^\]]+\]\s*\n?/gm, '');
  converted = converted.replace(/^[ \t]*\[(?:Inspectable|Bindable|Event|Style|DefaultProperty|HostComponent|Embed|SWF|IconFile)[^\]]*\][ \t]*\n?/gm, '');
  converted = converted.replace(/^\s*default\s+xml\s+namespace\s*=\s*[^;]+;\s*\n?/gm, '');
  converted = converted.replace(/\b(?:fl_internal|mx_internal|bi_internal)\b/g, 'public');
  converted = converted.replace(
    /^\s*(?:let|var)\s+_temp_\d+\s*:[^;]+;\s*\n\s*(?:true|false);\s*\n\s*_temp_\d+;\s*\n?/gm,
    ''
  );
  converted = converted.replace(/^\s*_temp_\d+;\s*$/gm, '');
  converted = converted.replace(/^\s*(?:public\s+)?namespace\s+(\w+)\s*=\s*([^;]+);\s*$/gm, 'export const $1 = $2;');

  // E4X parsing stabilization. Safely transform node selection properties into explicit functions
  converted = converted.replace(/\.\.\*\.\s*\(/g, '._descendants_star_filter(');
  converted = converted.replace(/\.\.\*/g, '._descendants_star');
  converted = converted.replace(/\.\.([a-zA-Z_]\w*)\.\s*\(/g, '._descendants_filter_$1(');
  converted = converted.replace(/\.@([a-zA-Z_]\w*)/g, '._attr_$1');
  converted = converted.replace(/\.\.([a-zA-Z_]\w*)/g, '._descendants_$1');

  converted = converted.replace(
    /\bfor\s+each\s*\(\s*(?:var\s+|let\s+)?(?:this\.)?([a-zA-Z0-9_]+)(?:\s*:\s*[a-zA-Z0-9_.*<>]+)?\s+in\s+([^\)]+)\)/g,
    'for (let $1 of $2)'
  );
  converted = converted.replace(/\bfor\s*\(\s*(?:var\s+|let\s+)?(?:this\.)?([a-zA-Z0-9_]+)(?:\s*:\s*[a-zA-Z0-9_.*<>]+)?\s+in\s+([^\)]+)\)/g, 'for (let $1 in $2)');
  converted = converted.replace(/\.\*/g, '._star');
  converted = converted.replace(/\*\./g, '_star.');
  converted = converted.replace(/^(\s*)(\d+|"[^"]+"|'[^']+'):\s*$/gm, '$1case $2:');
  converted = converted.replace(/\(\s*as\s+unknown\s+as\b/g, '(null as unknown as');
  converted = converted.replace(/,\s*as\s+unknown\s+as\b/g, ', null as unknown as');
  converted = converted.replace(/\b(this|_[a-zA-Z0-9_]+)\.\s*\(/g, '$1._missingMethod(');
  converted = converted.replace(/\.\s*\(/g, '._filter(');
  converted = converted.replace(/(\w+)\.\(([^)]*)\)/g, '$1["$2"]');
  converted = converted.replace(/\bcatch\s*\(\s*(?:this\.)?([a-zA-Z0-9_]+)\s*:\s*[a-zA-Z0-9_.]+\s*\)/g, 'catch ($1: any)');
  converted = converted.replace(/^\s*include\s+"[^"]+"\s*;/gm, '// include removed');
  converted = converted.replace(/new\s+<[\w\.]+>\s*\[/g, '[');
  converted = converted.replace(/:\s*Object\b/g, ': Record<string, any>');
  converted = converted.replace(/(?<!function\s+|new\s+)\bArray\(([^)]+)\)/g, '($1 as unknown as any[])');

  converted = converted.replace(/Vector\.<\s*([^>]+)\s*>/g, 'Array<$1>');
  converted = converted.replace(/\b([\w\.\]\)]+)\s+is\s+([A-Za-z_][\w\.]*)/g, '$1 instanceof $2');
  converted = converted.replace(/\bas\s+([A-Za-z_][\w\.]*)/g, ' as unknown as $1');

  converted = converted.replace(/\btrace\(/g, 'console.log(');
  converted = converted.replace(/\b(?:public|private|protected|internal)::([a-zA-Z0-9_]+)/g, 'this.$1');

  // BigInteger/decompiler artifacts: normalize malformed this.-prefixed locals/accessors.
  converted = converted.replace(/var\s+this\.([a-zA-Z0-9_]+)/g, 'var $1');
  converted = converted.replace(/function\s+(get|set)\s+this\.([a-zA-Z0-9_]+)/g, '$1 $2');
  converted = converted.replace(/^\s*(true|false);\s*$/gm, '');
  converted = converted.replace(/\(\s*this\s*:\s*[^,)]+\s*,\s*/g, '(');
  converted = converted.replace(/\(\s*this\s*:\s*[^,)]+\s*\)/g, '()');

  // Some decompiled casts arrive as empty constructor/call args: `foo( as T)`.
  // Normalize them after cast expansion so TS parser remains valid.
  converted = converted.replace(/\(\s*as\s+unknown\s+as\b/g, '(null as unknown as');
  converted = converted.replace(/,\s*as\s+unknown\s+as\b/g, ', null as unknown as');

  const flashMethods = [
    'addChild',
    'addChildAt',
    'removeChild',
    'removeChildAt',
    'gotoAndStop',
    'gotoAndPlay',
    'play',
    'stop',
    'addEventListener',
    'removeEventListener',
    'dispatchEvent',
    'setChildIndex',
    'getChildIndex',
    'contains',
    'addFrameScript'
  ];
  const methodsRegex = new RegExp(`(^|[^.\\w$])(${flashMethods.join('|')})\\s*\\(`, 'gm');
  converted = converted.replace(methodsRegex, '$1this.$2(');

  // Remove accidentally-prefixed declarations (e.g. `private function this.foo(...)`).
  converted = converted.replace(/\b(function|get|set|public|private|protected|static|override)\s+this\./g, '$1 ');

  converted = converted.replace(
    /(\b[\w$.]+\.)?(addEventListener|removeEventListener)\s*\(([^,]+),\s*([a-zA-Z0-9_$.]+)(?:\s*,[^)]*)?\)/g,
    (match, receiver = '', method, eventType, callback) => {
      if (callback.includes('function') || callback.includes('bind(') || callback.includes('=>')) {
        return match;
      }
      return `${receiver || ''}${method}(${eventType}, ${callback}.bind(this))`;
    }
  );

  // Keep casting rewrites narrow: broad `ClassName(x)` rewrites break legitimate
  // crypto/math calls such as `F(xl)` or `MontgomeryReduction(...)`.
  converted = converted.replace(/\b(String|Number|Boolean|Array|TextField|MovieClip|Sprite|Event)\(([^)]+)\)/g, (match, type, inner) => {
    if (type === 'Array') return `(${inner} as unknown as any[])`;
    if (type === 'String' || type === 'Number' || type === 'Boolean') return `${type}(${inner})`;
    return `(${inner} as unknown as ${type})`;
  });

  converted = converted.replace(/\b(?:int|uint)\(([^)]+)\)/g, 'Math.floor($1)');

  // Some decompiled casts arrive as empty constructor/call args: `foo( as T)`.
  // Normalize them after all cast rewrites so TS parser remains valid.
  converted = converted.replace(/\(\s*as\s+unknown\s+as\b/g, '(null as unknown as');
  converted = converted.replace(/,\s*as\s+unknown\s+as\b/g, ', null as unknown as');

  if (classMatch && className) {
    converted = converted.replace(
      /(public\s+|internal\s+)?(dynamic\s+)?(final\s+)?class\s+(\w+)\s*(extends\s+[\w\.]+)?\s*(implements\s+[\w\s,\.]+)?/,
      (_, _vis, _dyn, _final, name, ext, impl) => {
        let extension = ext ? ` ${ext}` : '';
        if (extension.includes('.')) extension = ` extends ${extension.split('.').pop()}`;

        let implementation = impl ? ` ${impl}` : '';
        if (implementation.includes('.')) implementation = ` implements ${implementation.split('.').pop()}`;

        return `export class ${name}${extension}${implementation}`;
      }
    );

    converted = convertClassMembers(converted, className);

    // Provide robust handling for generic class-level static initialization loops (found in AESKey)
    converted = converted.replace(
      /private static i\s*:\s*[^;]+;\s*while\s*\(\s*(?:this\.)?i\s*<\s*256\s*\)\s*\{([\s\S]*?)\}\s*((?:(?:public|private|protected|internal)\s+)?static\s+Rcon\b)/m,
      (_, body, rconDecl) => `private static i: number = 0;

  static {
    while(this.i < 256) {${body}}
  }

  ${rconDecl}`
    );

    converted = converted.replace(
      /((?:(?:public|private|protected|internal)\s+)?static\s+Rcon\s*:\s*[^;]+;)\s*(?:this\.)?i\s*=\s*0;\s*while\s*\(\s*(?:this\.)?i\s*<\s*(?:this\.)?_Rcon\.length\s*\)\s*\{([\s\S]*?)\}\s*((?:public|private|protected|internal)?\s*state\b)/m,
      (_, rconDecl, body, stateDecl) => `${rconDecl}

  static {
    this.i = 0;
    while(this.i < this._Rcon.length) {${body}}
  }

  ${stateDecl}`
    );
  }

  if (interfaceMatch) {
    converted = converted.replace(
      /^\s*(?:public\s+)?function\s+get\s+(\w+)\s*\([^)]*\)\s*(?:\:\s*([^\s;{]+(?:<[^>]+>)?[^\s;{]*))?\s*;/gm,
      (_, name, ret) => `    ${name}: ${mapType(ret || 'any')};`
    );
    converted = converted.replace(
      /^\s*(?:public\s+)?function\s+set\s+(\w+)\s*\([^)]*\)\s*(?::\s*([^\s;{]+))?\s*;/gm,
      '    /* set $1 */'
    );
    converted = converted.replace(
      /^\s*(?:public\s+)?function\s+(\w+)\s*\(([^)]*)\)\s*(?::\s*([^\s;{]+))?\s*;/gm,
      (_, name, params, ret) => `    ${name}(${convertParams(params)}): ${mapType(ret || 'void')};`
    );
    converted = converted.replace(
      /(public\s+|internal\s+)?interface\s+(\w+)\s*(extends\s+[\w\s,\.]+)?/,
      (_, _vis, name, ext) => {
        let extension = ext ? ` ${ext}` : '';
        if (extension.includes('.')) extension = ` extends ${extension.split('.').pop()}`;
        return `export interface ${name}${extension}`;
      }
    );
  }

  converted = converted.replace(
    /^(\s*)var\s+(?:this\.)?(\w+)\s*:\s*([^=;]+?)(\s*=\s*[^;]+)?;\s*$/gm,
    (_, indent, name, type, init) => {
      const mappedType = mapType(type);
      let initializer = init || '';
      if (/=\s*null\b/.test(initializer)) {
        initializer = ' = null as any';
      }
      return `${indent}var ${name}: ${mappedType}${initializer};`;
    }
  );
  converted = converted.replace(/\b(let|const)\s+this\./g, '$1 ');

  if (classMatch && className && !hasExtends) {
    converted = converted.replace(/^\s*super\s*\([^)]*\)\s*;/gm, '');
  }

  if (classMatch && className && hasExtends) {
    const constructorRegex = /(constructor\s*\([^)]*\)\s*\{)(?!\s*super\s*\()/g;
    converted = converted.replace(constructorRegex, '$1\n    super(); // AUTO-INJECTED');
  }

  // Inject undeclared local variables produced by AS3 decompilers (_loc1_, _loc2_, ...).
  converted = converted.replace(
    /^(\s*)(?:(?:override|public|private|protected|static|internal)\s+)*function\s+\w+\s*\([^)]*\)\s*(?::\s*[^\{]+)?\s*\{([\s\S]*?)\n(\s*)\}/gm,
    (match, fnIndent, body) => {
      const locMatches = [...body.matchAll(/\b(_loc\d+_)\b/g)];
      if (locMatches.length === 0) return match;

      const uniqueLocs = [...new Set(locMatches.map((m) => m[1]))];
      const declaredLocs = new Set(
        [...body.matchAll(/\b(?:let|var|const)\s+(_loc\d+_)\b/g)].map((m) => m[1])
      );
      const undeclaredLocs = uniqueLocs.filter((loc) => !declaredLocs.has(loc));
      if (undeclaredLocs.length === 0) return match;

      const declarations = `var ${undeclaredLocs.map((loc) => `${loc}: any`).join(', ')};`;
      const bodyWithDeclarations = body.replace(/^(\s*)/, `$1${declarations}\n$1`);
      return match.replace(body, bodyWithDeclarations);
    }
  );

  // Repair malformed switch labels produced by downstream rewrites.
  converted = converted.replace(/\bthis\.default\s*:/g, 'default:');

  // Treat decompiler garbage member-access chains as `any` to keep TS parser/type-checker moving.
  converted = converted.replace(/\bnull\.([a-zA-Z0-9_]+)/g, '(null as any).$1');
  converted = converted.replace(/\bundefined\.([a-zA-Z0-9_]+)/g, '(undefined as any).$1');

  // Чиним null.property и undefined.property (Ошибки декомпилятора)
  converted = converted.replace(/\bnull\s*\.\s*([a-zA-Z0-9_$]+)/g, '(null as any).$1');
  converted = converted.replace(/\bundefined\s*\.\s*([a-zA-Z0-9_$]+)/g, '(undefined as any).$1');

  // Убиваем TS2314: Array без типов
  converted = converted.replace(/:\s*Array\b(?!\s*<)/g, ': any[]');

  // Лечим TS2314: Array без типов в as-кастах
  converted = converted.replace(/\bas\s+(?:unknown\s+as\s+)?Array\b/g, 'as any[]');

  // Лечим typeof касты для примитивов (исправляем instanceof String/Number/Boolean)
  converted = converted.replace(/([a-zA-Z0-9_.$]+)\s+instanceof\s+String\b/g, 'typeof $1 === "string"');
  converted = converted.replace(/([a-zA-Z0-9_.$]+)\s+instanceof\s+Number\b/g, 'typeof $1 === "number"');
  converted = converted.replace(/([a-zA-Z0-9_.$]+)\s+instanceof\s+Boolean\b/g, 'typeof $1 === "boolean"');

  // Лечим as-касты для примитивов (исправляем TS2345 Argument of type 'String' is not assignable to 'string')
  converted = converted.replace(/\bas\s+(?:unknown\s+as\s+)?String\b/g, 'as string');
  converted = converted.replace(/\bas\s+(?:unknown\s+as\s+)?Number\b/g, 'as number');
  converted = converted.replace(/\bas\s+(?:unknown\s+as\s+)?Boolean\b/g, 'as boolean');

  // JSON objects as primitives
  if (converted.includes('JSONToken') || converted.includes('JSONTokenType') || converted.includes('JSONParseError')) {
    converted = converted.replace(/Record<string,\s*any>/g, 'any');
  }

  // Убиваем TS2322: жесткое приведение ВСЕХ null-инициализаций
  converted = converted.replace(/=\s*null\s*([,;])/g, '= null as any$1');

  // Раскрываем внутренние неймспейсы (актуально для BigInteger/bi_internal)
  converted = converted.replace(/^(?:override\s+)?(?:public\s+|private\s+|protected\s+)?\w+_internal\s+(var|const|function|get|set)\b/gm, 'public $1');

  // Принудительно задаем тип для массива 'a' в BigInteger, чтобы TS понимал индексацию
  converted = converted.replace(/public\s+a\s*:\s*any(?:\[\])?;/g, 'public a: number[];');

  // Лечим switch-касты в JSONTokenizer
  converted = converted.replace(/switch\s*\(this\.ch\)\s*\{/g, 'switch(String(this.ch)) {');

  // Лечим if-касты в JSONTokenizer (TS2367 narrow type inference bug)
  converted = converted.replace(/this\.ch\s*(==|!=)\s*/g, 'String(this.ch) $1 ');

  // Полностью переписываем objectToString в JSONEncoder, чтобы убрать E4X, XML и describeType (TS2304 / TS2349)
  converted = converted.replace(
    /var\s+classInfo\s*:\s*(?:XML|any)\s*=\s*describeType\(o\);[\s\S]*?return\s+"\{"\s*\+\s*s\s*\+\s*"\}";/,
    `for (let key in o) {
            value = o[key];
            if (!(value instanceof Function)) {
               if (s.length > 0) {
                  s += ",";
               }
               s += this.escapeString(key) + ":" + this.convertToString(value);
            }
         }
         return "{" + s + "}";`
  );
  converted = converted.replace(/\bvar\s+v\s*:\s*XML\s*=\s*.*?;\n?/g, '');

  // --- ТЕРМИНАТОР СИНТАКСИСА ---
  // Лечим дикие подстановки 'this.' к зарезервированным словам, которые могли проскочить
  converted = converted.replace(/\bthis\.if\b/g, 'if');
  converted = converted.replace(/\bthis\.while\b/g, 'while');
  converted = converted.replace(/\bthis\.switch\b/g, 'switch');
  converted = converted.replace(/\bthis\.for\b/g, 'for');
  converted = converted.replace(/\bthis\.catch\b/g, 'catch');
  converted = converted.replace(/\bthis\.return\b/g, 'return');
  converted = converted.replace(/\bthis\.super\b/g, 'super');
  converted = converted.replace(/\bthis\.public\b/g, 'public');
  converted = converted.replace(/\bthis\.private\b/g, 'private');
  converted = converted.replace(/\bthis\.protected\b/g, 'protected');

  // Лечим баг декомпилятора с пустыми/мусорными стейтментами
  converted = converted.replace(/^\s*undefined\s*;\s*$/gm, '');
  converted = converted.replace(/^\s*null\s*;\s*$/gm, '');
  converted = converted.replace(/^\s*NaN\s*;\s*$/gm, '');

  // Защита от Error.name (TS2588)
  converted = converted.replace(/^\s*name\s*=\s*(["'].*?["']);/gm, 'this.name = $1;');

  // Устраняем внутрипакетные проблемы импортов com.adobe.serialization.json
  const jsonClasses = ['JSONEncoder', 'JSONDecoder', 'JSONTokenizer', 'JSONToken', 'JSONTokenType', 'JSONParseError'];
  const missingImports = [];
  for (const cls of jsonClasses) {
    if (new RegExp(`\\b${cls}\\b`).test(converted) && !new RegExp(`class\\s+${cls}\\b`).test(converted)) {
      missingImports.push(`import { ${cls} } from "./${cls}";`);
    }
  }
  if (missingImports.length > 0) converted = `${missingImports.join('\n')}\n\n${converted}`;

  const header = [
    '// AUTO-GENERATED AS3 TO TS CONVERSION',
    packageName ? `// Original Package: ${packageName}` : '// Original Package: <root>'
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
      if (entry.isDirectory()) stack.push(fullPath);
      else if (entry.isFile() && entry.name.endsWith('.as')) files.push(fullPath);
    }
  }

  return files.sort();
}

function parseArgs(argv) {
  const args = { input: null, output: null };

  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--input' || token === '-i') {
      args.input = argv[++i];
    } else if (token === '--output' || token === '-o') {
      args.output = argv[++i];
    }
  }

  if (!args.input || !args.output) {
    throw new Error('Usage: node convert-as3-to-ts.js --input <dir> --output <dir>');
  }

  return args;
}

function runCli() {
  const args = parseArgs(process.argv);
  const files = collectAsFiles(args.input);

  if (files.length === 0) {
    console.log('No .as files found.');
    return;
  }

  fs.mkdirSync(args.output, { recursive: true });

  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    const converted = convertAs3ToTs(source);
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
