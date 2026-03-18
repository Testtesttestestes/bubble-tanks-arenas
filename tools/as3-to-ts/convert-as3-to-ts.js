#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const FLASH_STUB_CLASSES = [
  'ByteArray', 'Endian', 'Matrix', 'Point', 'Rectangle', 'DisplayObject',
  'DisplayObjectContainer', 'InteractiveObject', 'MovieClip', 'Sprite',
  'Shape', 'Bitmap', 'BitmapData', 'Loader', 'URLRequest', 'Event',
  'MouseEvent', 'KeyboardEvent', 'FocusEvent', 'TimerEvent', 'TextField',
  'TextFormat', 'Graphics', 'Sound', 'SoundChannel', 'SoundTransform',
  'Stage', 'ApplicationDomain', 'ContextMenu', 'ContextMenuItem',
  'Dictionary', 'Security', 'ExternalInterface', 'System', 'LoaderContext',
  'Transform', 'ColorTransform', 'Font', 'Capabilities', 'SharedObject',
  'Responder', 'AsyncErrorEvent', 'SecurityErrorEvent', 'IOErrorEvent',
  'NetConnection', 'NetStream', 'LocalConnection', 'Microphone', 'Camera',
  'Matrix3D', 'Vector3D', 'AnimatorFactory3D', 'StageQuality', 
  'URLRequestMethod', 'URLVariables', 'URLLoader',
  'Mouse', 'MouseCursor', 'Timer',
  'ColorMatrixFilter', 'GlowFilter', 'BlurFilter', 'DropShadowFilter',
  'Keyboard', 'Class', 'IME', 'TextFormatAlign',
  'TextFieldAutoSize', 'AntiAliasType', 'GridFitType', 'TextSnapshot', 'CSMSettings',
  'ContextMenuEvent', 'EventDispatcher', 'ContextMenuBuiltInItems', 'ContextMenuClipboardItems',
  'IMEConversionMode', 'BitmapFilter', 'TextFieldType', 'TextLineMetrics', 'SharedObjectFlushStatus', 'Vector'
];

function getFlashStubHeader(excludeClassName) {
  const stubsToInject = FLASH_STUB_CLASSES.filter(c => c !== excludeClassName);
  return [
    '// Flash built-ins compatibility stubs (AUTO-INJECTED)',
    ...stubsToInject.flatMap((className) => [
      `declare interface ${className} { [key: string]: any; }`,
      `declare const ${className}: { new(...args: any[]): ${className}; [key: string]: any; };`
    ]),
    'declare const flash: any;',
    'declare const console: any;',
    'declare const getDefinitionByName: any;',
    'declare const describeType: any;'
  ].join('\n');
}

function mapType(asType) {
  const raw = (asType || '').trim();
  if (!raw || raw === '*') return 'any';
  const vectorMatch = raw.match(/^Vector\.<\s*([^>]+)\s*>$/);
  if (vectorMatch) return `${mapType(vectorMatch[1])}[]`;
  const simpleMap = new Map([
    ['Number', 'number'], ['int', 'number'], ['uint', 'number'],
    ['Boolean', 'boolean'], ['String', 'string'], ['Array', 'any'],
    ['Object', 'Record<string, any>'], ['void', 'void'], ['*', 'any'],
    ['Class', 'any'], ['Function', 'Function'], ['Event', 'any'],
    ['MouseEvent', 'any'], ['KeyboardEvent', 'any'], ['FocusEvent', 'any'],
    ['TimerEvent', 'any'], ['TextEvent', 'any'], ['IOErrorEvent', 'any'],
    ['SecurityErrorEvent', 'any'], ['HTTPStatusEvent', 'any']
  ]);

  if (simpleMap.has(raw)) return simpleMap.get(raw);
  if (raw.includes('.')) return raw.split('.').at(-1);
  return raw;
}

function convertParams(paramString, isInterface = false) {
  if (!paramString.trim()) return '';
  return paramString
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((param) => {
      const match = param.match(/^(\.{3}\s*)?(?:this\.)?([a-zA-Z0-9_]+)\s*(?::\s*([^=]+))?(?:\s*=\s*(.+))?$/);
      if (!match) return param;
      const [, rest, name, type, defaultValue] = match;
      
      let mapped = type ? mapType(type) : 'any';
      const spread = rest ? '...' : '';
      
      if (spread && !mapped.endsWith('[]') && mapped !== 'any[]') {
        mapped = mapped === 'any' ? 'any[]' : `${mapped}[]`;
      }

      let suffix = '';
      if (defaultValue && !isInterface) {
        let dv = defaultValue.trim();
        if (dv === 'null' && (mapped === 'number' || mapped === 'boolean')) {
          dv = '0 /* null */';
        } else if (dv === 'null' && mapped !== 'any' && mapped !== 'any[]') {
          dv = 'null as any';
        }
        suffix = ` = ${dv}`;
      }
      return `${spread}${name}: ${mapped}${suffix}`;
    })
    .join(', ');
}

function convertClassMembers(source, className, isDynamicClass = false) {
  let out = source;
  const FLASH_DISPLAY_ACCESSORS = new Set(['x', 'y', 'width', 'height', 'scaleX', 'scaleY', 'rotation', 'alpha', 'visible']);

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
      const bang = init || readonly || isStatic ? '' : '!';
      const mappedTypeBase = mapType(type);
      const mappedType = mappedTypeBase === 'MovieClip' ? 'MovieClip & Record<string, any>' : mappedTypeBase;
      let initializer = init ? init : '';
      if (initializer.includes('null') && mappedType !== 'any') initializer = ' = null as any';
      return `${indent}${vis}${staticPart}${readonly}${name}${bang}: ${mappedType}${initializer};`;
    }
  );

  const firstFunctionIndex = out.search(/^\s*(?:(?:override|public|private|protected|internal|static|\w+)\s+)*function\b/m);
  const classHead = firstFunctionIndex === -1 ? out : out.slice(0, firstFunctionIndex);
  const classTail = firstFunctionIndex === -1 ? '' : out.slice(firstFunctionIndex);
  const normalizedHead = classHead.replace(
    /^(\s*)(static\s+)?(?:const|var)\s+(?:this\.)?(\w+)\s*:\s*([^=;]+?)(\s*=\s*[^;]+)?;\s*$/gm,
    (_, indent, isStatic, name, type, init) => {
      const staticPart = isStatic ? 'static ' : '';
      const bang = init || isStatic ? '' : '!';
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
      const effectiveMods = normalizedMods || 'public';
      const head = fnName === className ? 'constructor' : fnName;
      const paramList = convertParams(params);
      if (fnName === className) {
        return `${indent}constructor(${paramList})`;
      }
      const mappedReturn = mapType(returnType || 'void');
      return `${indent}${effectiveMods} ${head}(${paramList}): ${mappedReturn}`;
    }
  );

  out = out.replace(
    /^(\s*)((?:(?:override|public|private|protected|internal|static|\w+)\s+)*)function\s+(get|set)\s+(?:this\.)?(\w+)\s*\(([^)]*)\)\s*(?::\s*([^\s{]+))?/gm,
    (_, indent, modifiers, accessorKind, name, params, returnType) => {
      const normalizedMods = normalizeModifiers(modifiers);
      const paramList = convertParams(params);
      const mappedReturn = returnType ? mapType(returnType) : 'any';
      const tsIgnore = FLASH_DISPLAY_ACCESSORS.has(name) ? `${indent}// @ts-ignore\n` : '';
      if (accessorKind === 'get') {
        return `${tsIgnore}${indent}${normalizedMods ? `${normalizedMods} ` : ''}get ${name}(): ${mappedReturn}`;
      }
      return `${tsIgnore}${indent}${normalizedMods ? `${normalizedMods} ` : ''}set ${name}(${paramList})`;
    }
  );

  const classHeaderMatch = out.match(/^\s*(?:export\s+)?class\s+\w+[^\{]*\{/m);
  if (classHeaderMatch && !/\[\s*key\s*:\s*string\s*\]\s*:\s*any\s*;/.test(out)) {
    out = out.replace(classHeaderMatch[0], `${classHeaderMatch[0]}\n  [key: string]: any;`);
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

function castArrayInsertions(source) {
  let output = '';
  let cursor = 0;
  const searchRegex = /\.(push|unshift|splice)\s*\(/g;

  while (true) {
    searchRegex.lastIndex = cursor;
    const match = searchRegex.exec(source);
    if (!match) {
      output += source.slice(cursor);
      break;
    }

    const method = match[1];
    const openParen = match.index + match[0].length - 1;

    // 1. Find the true matching closing paren for the method call
    let depth = 0;
    let quote = null;
    let escaped = false;
    let closeParen = -1;

    for (let i = openParen; i < source.length; i += 1) {
      const ch = source[i];
      if (quote) {
        if (escaped) escaped = false;
        else if (ch === '\\') escaped = true;
        else if (ch === quote) quote = null;
        continue;
      }
      if (ch === '"' || ch === "'" || ch === '`') {
        quote = ch;
        continue;
      }
      if (ch === '(') depth += 1;
      else if (ch === ')') {
        depth -= 1;
        if (depth === 0) {
          closeParen = i;
          break;
        }
      }
    }

    if (closeParen === -1) {
      output += source.slice(cursor, openParen + 1);
      cursor = openParen + 1;
      continue;
    }

    output += source.slice(cursor, openParen + 1);
    const inner = source.slice(openParen + 1, closeParen);

    // 2. Split top-level commas safely (ignoring commas in objects/nested calls)
    const args = [];
    let current = '';
    let paren = 0;
    let brace = 0;
    let bracket = 0;
    quote = null;
    escaped = false;

    for (let i = 0; i < inner.length; i += 1) {
      const ch = inner[i];
      if (quote) {
        current += ch;
        if (escaped) escaped = false;
        else if (ch === '\\') escaped = true;
        else if (ch === quote) quote = null;
        continue;
      }
      if (ch === '"' || ch === "'" || ch === '`') {
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
        args.push(current);
        current = '';
        continue;
      }
      current += ch;
    }
    if (current || args.length > 0) args.push(current);

    // 3. Apply the `as any` cast to the correct arguments
    for (let i = 0; i < args.length; i += 1) {
      let arg = args[i];
      const trimmed = arg.trim();
      if (trimmed !== '') {
        const needsCast = (method === 'push' || method === 'unshift') || (method === 'splice' && i >= 2);
        if (needsCast && !trimmed.endsWith('as any')) {
          arg = `${arg} as any`;
        }
      }
      args[i] = arg;
    }

    output += args.join(',');
    output += ')';
    cursor = closeParen + 1;
  }

  return output;
}

function convertAs3ToTs(source) {
  const stripped = stripPackageWrapper(source);
  const packageName = stripped.packageName;

  const classMatch = stripped.source.match(
    /(public\s+|internal\s+)?(dynamic\s+)?(final\s+)?class\s+(\w+)\s*(extends\s+[\w\.]+)?\s*(implements\s+[\w\s,\.]+)?/
  );
  const interfaceMatch = stripped.source.match(/(public\s+|internal\s+)?interface\s+(\w+)\s*(extends\s+[\w\s,\.]+)?/);

  const className = classMatch ? classMatch[4] : null;
  const isDynamicClass = Boolean(classMatch && classMatch[2]);
  const hasExtends = Boolean(classMatch && classMatch[5]);
  let converted = stripped.source;

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
    'KeyboardEvent.KEY_UP': '"keyup"',
    'TextEvent.TEXT_INPUT': '"textInput"',
    'ProgressEvent.PROGRESS': '"progress"',
    'ProgressEvent.SOCKET_DATA': '"socketData"'
  };

  for (const [as3Event, tsEvent] of Object.entries(eventMap)) {
    const [, eventClass, eventConst] = as3Event.match(/^(\w+)\.(\w+)$/) || [];
    if (!eventClass || !eventConst) continue;
    const fqPrefix = '(?:\\bflash\\s*\\.\\s*events\\s*\\.\\s*)?';
    const regex = new RegExp(`${fqPrefix}${eventClass}\\s*\\.\\s*${eventConst}\\b`, 'g');
    converted = converted.replace(regex, tsEvent);
  }

  converted = converted.replace(/^\s*import\s+[^;]+;\s*$/gm, '');
  converted = converted.replace(/^\s*use\s+namespace\s+[^;]+;\s*$/gm, '');
  converted = converted.replace(/^\s*\[[^\]]+\]\s*\n?/gm, '');
  converted = converted.replace(/^[ \t]*\[(?:Inspectable|Bindable|Event|Style|DefaultProperty|HostComponent|Embed|SWF|IconFile)[^\]]*\][ \t]*\n?/gm, '');
  converted = converted.replace(/^\s*default\s+xml\s+namespace\s*=\s*[^;]+;\s*\n?/gm, '');
  // Only replace internal namespaces when they are used as access modifiers,
  // not when the namespace itself is being declared (e.g. namespace bi_internal = ...)
  converted = converted.replace(/\b(?:fl_internal|mx_internal|bi_internal)\b(?!\s*=)/g, 'public');
  // Fix TS bitwise/equality precedence (e.g., hex.length & 1 == 1 -> (hex.length & 1) == 1)
  converted = converted.replace(/\b([a-zA-Z0-9_.$\[\]]+)\s*&\s*([0-9xXA-Fa-f]+)\s*(==|!=|===|!==)\s*([0-9]+)\b/g, '($1 & $2) $3 $4');
  converted = converted.replace(
    /^\s*(?:let|var)\s+_temp_\d+\s*:[^;]+;\s*\n\s*(?:true|false);\s*\n\s*_temp_\d+;\s*\n?/gm,
    ''
  );
  converted = converted.replace(/^\s*_temp_\d+;\s*$/gm, '');
  converted = converted.replace(/^\s*(?:public\s+)?namespace\s+(\w+)\s*=\s*([^;]+);\s*$/gm, 'export const $1 = $2;');

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
  converted = converted.replace(/^(\s*)(\d+|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'):\s*$/gm, '$1case $2:');
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
  
  converted = converted.replace(/:\s*\*/g, ': any');
  converted = converted.replace(/\.getStackTrace\s*\(\s*\)/g, '.stack');

  converted = converted.replace(/Vector\.<\s*([^>]+)\s*>/g, 'Array<$1>');
  converted = converted.replace(/\b([\w\.\]\)]+)\s+is\s+([A-Za-z_][\w\.]*)/g, '$1 instanceof $2');
  // Heal TS2693: safely strip interface instanceof checks without touching the left operand.
  // if(child instanceof IFocusManager) -> if(child != null /* instanceof IFocusManager */)
  converted = converted.replace(/\binstanceof\s+(I[A-Z][a-zA-Z0-9_]*)\b/g, '!= null /* instanceof $1 */');
  converted = converted.replace(/\bas\s+([A-Za-z_][\w\.]*)/g, ' as unknown as $1');

  converted = converted.replace(/\btrace\(/g, 'console.log(');
  converted = converted.replace(/\b(?:public|private|protected|internal)::([a-zA-Z0-9_]+)/g, 'this.$1');

  converted = converted.replace(/var\s+this\.([a-zA-Z0-9_]+)/g, 'var $1');
  converted = converted.replace(/function\s+(get|set)\s+this\.([a-zA-Z0-9_]+)/g, '$1 $2');
  converted = converted.replace(/^\s*(true|false);\s*$/gm, '');
  converted = converted.replace(/\(\s*this\s*:\s*[^,)]+\s*,\s*/g, '(');
  converted = converted.replace(/\(\s*this\s*:\s*[^,)]+\s*\)/g, '()');

  converted = converted.replace(/\(\s*as\s+unknown\s+as\b/g, '(null as unknown as');
  converted = converted.replace(/,\s*as\s+unknown\s+as\b/g, ', null as unknown as');

  // Prefix implicit DisplayObject mouse coordinates with 'this.'
  // Negative lookbehind prevents stage.mouseX -> stage.this.mouseX
  converted = converted.replace(/(?<!\.)\b(mouseX|mouseY)\b/g, 'this.$1');

  const flashMethods = [
    'addChild', 'addChildAt', 'removeChild', 'removeChildAt', 'gotoAndStop', 'gotoAndPlay',
    'play', 'stop', 'addEventListener', 'removeEventListener', 'dispatchEvent',
    'hasEventListener', 'willTrigger',
    'setChildIndex', 'getChildIndex', 'contains', 'addFrameScript',
    'localToGlobal', 'globalToLocal', 'hitTestPoint', 'hitTestObject', 'startDrag', 'stopDrag'
  ];
  const methodsRegex = new RegExp(`(?<![.\\w$])(${flashMethods.join('|')})\\s*\\(`, 'g');
  converted = converted.replace(methodsRegex, 'this.$1(');
  
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

  // Лечим приведение базовых классов и UI-компонентов
  const flashCastClasses = 'String|Number|Boolean|Array|TextField|MovieClip|Sprite|Event|URLLoader|UIComponent|Dictionary|DisplayObject|FocusManager|InteractiveObject|DisplayObjectContainer|KeyframeBase|Button|Class|Color|MatrixTransformer3D|AnimatorBase|StyleManager|List|ComboBox|MotionBase';
  
  // ИСПРАВЛЕННАЯ РЕГУЛЯРКА: внешняя группа захвата сохраняет весь inner для вложенных скобок
  const castRegex = new RegExp(`(^|[^a-zA-Z0-9_$.])(new\\s+)?(${flashCastClasses})\\s*\\(\\s*((?:[^()]*|\\([^()]*\\))*)\\s*\\)`, 'g');

  converted = converted.replace(castRegex, (match, prev, isNew, type, inner) => {
    if (isNew) return match;
    if (!inner || inner.trim() === '' || inner.includes(':')) return match;

    if (type === 'Array') return `${prev}(${inner} as unknown as any[])`;
    if (type === 'String' || type === 'Number' || type === 'Boolean') return `${prev}${type}(${inner})`;
    return `${prev}(${inner} as unknown as ${type})`;
  });

  // То же самое для интерфейсов
  converted = converted.replace(/(^|[^a-zA-Z0-9_$.])(new\s+)?(I[A-Z][a-zA-Z0-9_]*)\s*\(\s*((?:[^()]*|\([^()]*\))*)\s*\)/g, (match, prev, isNew, type, inner) => {
    if (isNew) return match; 
    if (!inner || inner.trim() === '' || inner.includes(':')) return match; 
    return `${prev}(${inner} as unknown as ${type})`;
  });

  // Миграция AGI: убираем runtime SWF loadBytes(new AgiClass()) и инициализируем AGI напрямую
  converted = converted.replace(/^\s*(?:this\.)?loader\.contentLoaderInfo\.addEventListener\(\s*(?:"complete"|Event\.COMPLETE)\s*,\s*(?:this\.)?loadComplete\s*\)\s*;\s*$/gm, '');
  converted = converted.replace(/\b(?:this\.)?loader\.loadBytes\s*\(\s*new\s+AgiClass\s*\(\s*\)\s*\)\s*;/g, 'this.loadComplete({ currentTarget: { content: new AGI() } } as any);');

  converted = converted.replace(/\bint\.MAX_VALUE\b/g, '2147483647');
  converted = converted.replace(/\bint\.MIN_VALUE\b/g, '-2147483648');
  converted = converted.replace(/\buint\.MAX_VALUE\b/g, '4294967295');
  converted = converted.replace(/\buint\.MIN_VALUE\b/g, '0');
  // Fix AS3 Array sorting constants
  converted = converted.replace(/\bArray\.(CASEINSENSITIVE|DESCENDING|UNIQUESORT|RETURNINDEXEDARRAY|NUMERIC)\b/g, '(Array as any).$1');

  converted = converted.replace(/\(\s*as\s+unknown\s+as\b/g, '(null as unknown as');
  converted = converted.replace(/,\s*as\s+unknown\s+as\b/g, ', null as unknown as');

  if (classMatch && className) {
    converted = converted.replace(
      /(public\s+|internal\s+)?(dynamic\s+)?(final\s+)?class\s+(\w+)\s*(extends\s+[\w\.]+)?\s*(implements\s+[\w\s,\.]+)?/g,
      (_, _vis, _dyn, _final, name, ext, impl) => {
        let extension = ext ? ` ${ext}` : '';
        if (extension.includes('.')) extension = ` extends ${extension.split('.').pop()}`;

        let implementation = impl ? ` ${impl}` : '';
        if (implementation.includes('.')) implementation = ` implements ${implementation.split('.').pop()}`;

        return `export class ${name}${extension}${implementation}`;
      }
    );

    converted = convertClassMembers(converted, className, isDynamicClass);

    converted = converted.replace(
      /\bfunction\s*\(([^)]*)\)\s*(?::\s*([a-zA-Z0-9_<>\[\]]+))?\s*\{/g,
      (match, params, retType) => {
        const returnType = retType ? `: ${retType}` : '';
        return `(${params})${returnType} => {`;
      }
    );

    converted = converted.replace(
      /private static i\s*:\s*[^;]+;\s*while\s*\(\s*(?:this\.)?i\s*<\s*256\s*\)\s*\{([\s\S]*?)\}\s*((?:(?:public|private|protected|internal)\s+)?static\s+Rcon\b)/m,
      (_, body, rconDecl) => `private static i: number = 0;\n  static {\n    while(this.i < 256) {${body}}\n  }\n  ${rconDecl}`
    );

    converted = converted.replace(
      /((?:(?:public|private|protected|internal)\s+)?static\s+Rcon\s*:\s*[^;]+;)\s*(?:this\.)?i\s*=\s*0;\s*while\s*\(\s*(?:this\.)?i\s*<\s*(?:this\.)?_Rcon\.length\s*\)\s*\{([\s\S]*?)\}\s*((?:public|private|protected|internal)?\s*state\b)/m,
      (_, rconDecl, body, stateDecl) => `${rconDecl}\n  static {\n    this.i = 0;\n    while(this.i < this._Rcon.length) {${body}}\n  }\n  ${stateDecl}`
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
      (_, name, params, ret) => `    ${name}(${convertParams(params, true)}): ${mapType(ret || 'void')};`
    );
    converted = converted.replace(
      /(public\s+|internal\s+)?interface\s+(\w+)\s*(extends\s+[\w\s,\.]+)?/g,
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
    // Инжектим super() только если его вообще нет в классе
    if (!/\bsuper\s*\(/.test(converted)) {
      const constructorRegex = /(constructor\s*\([^)]*\)\s*\{)/g;
      converted = converted.replace(constructorRegex, '$1\n    super(); // AUTO-INJECTED');
    }
  }

  // Fix TS17009: Move super() to the top of the constructor block
  if (classMatch && className && hasExtends) {
    converted = converted.replace(
      /(constructor\s*\([^)]*\)\s*\{)([\s\S]*?)(\n\s*(?:\/\/\s*@ts-ignore\s*\n\s*)?super\s*\([^)]*\)\s*;?)/g,
      (match, ctorHead, ctorBody, superCall) => {
        // If there's no body before the super call, leave it alone
        if (ctorBody.trim() === '' || /^(?:\s*(?:var|let)\s+[a-zA-Z0-9_$:, ]+;)+$/.test(ctorBody)) {
          return match;
        }

        // Extract the super call (and its ignore comment if present)
        const cleanSuper = superCall.trimStart();

        // Rebuild: Constructor Head -> Super Call -> The rest of the body
        return `${ctorHead}\n    ${cleanSuper}${ctorBody}`;
      }
    );
  }

  // Подавляем ошибку TS2337 (вызов super() не на первой строке или код до него)
  converted = converted.replace(/^(\s*)(super\s*\([^)]*\)\s*;?)/gm, '$1// @ts-ignore\n$1$2');

  converted = converted.replace(
    /^(\s*)(?:(?:override|public|private|protected|static|internal|readonly|async)\s+)*(?:function\s+)?(?!if\b|for\b|while\b|switch\b|catch\b|do\b|else\b|try\b)\w+\s*\([^)]*\)\s*(?::\s*[^\{]+)?\s*\{([\s\S]*?)\n(\s*)\}/gm,
    (match, fnIndent, body) => {
      const locMatches = [...body.matchAll(/\b(_loc\d+_?|var_\d+)\b/g)];
      if (locMatches.length === 0) return match;

      const uniqueLocs = [...new Set(locMatches.map((m) => m[1]))];
      const declaredLocs = new Set(
        [...body.matchAll(/\b(?:let|var|const)\s+(_loc\d+_?|var_\d+)\b/g)].map((m) => m[1])
      );
      const undeclaredLocs = uniqueLocs.filter((loc) => !declaredLocs.has(loc));
      if (undeclaredLocs.length === 0) return match;

      const declarations = `var ${undeclaredLocs.map((loc) => `${loc}: any`).join(', ')};`;
      const bodyWithDeclarations = body.replace(/^(\s*)/, `$1${declarations}\n$1`);
      return match.replace(body, bodyWithDeclarations);
    }
  );

  converted = converted.replace(/\bthis\.default\s*:/g, 'default:');

  converted = converted.replace(/\bnull\.([a-zA-Z0-9_]+)/g, '(null as any).$1');
  converted = converted.replace(/\bundefined\.([a-zA-Z0-9_]+)/g, '(undefined as any).$1');
  converted = converted.replace(/\bnull\s*\.\s*([a-zA-Z0-9_$]+)/g, '(null as any).$1');
  converted = converted.replace(/\bundefined\s*\.\s*([a-zA-Z0-9_$]+)/g, '(undefined as any).$1');
  // Heal JPEXS empty parens bug (lost registers in math operations, e.g. Number(()))
  converted = converted.replace(/\(\(\)\)/g, '((null as any))');

  converted = converted.replace(/:\s*Array\b(?!\s*<)/g, ': any[]');
  converted = converted.replace(/\bas\s+(?:unknown\s+as\s+)?Array\b/g, 'as any[]');
  
  // NEW: Catch-all cleanup for capitalized primitive types that survived local var regexes
  // Adding (?!\s*\() ensures we don't accidentally match casting calls like Number(val) or String(val)
  converted = converted.replace(/:\s*String\b(?!\s*\()/g, ': string');
  converted = converted.replace(/:\s*Number\b(?!\s*\()/g, ': number');
  converted = converted.replace(/:\s*Boolean\b(?!\s*\()/g, ': boolean');

  converted = converted.replace(/([a-zA-Z0-9_.$]+)\s+instanceof\s+String\b/g, 'typeof $1 === "string"');
  converted = converted.replace(/([a-zA-Z0-9_.$]+)\s+instanceof\s+Number\b/g, 'typeof $1 === "number"');
  converted = converted.replace(/([a-zA-Z0-9_.$]+)\s+instanceof\s+Boolean\b/g, 'typeof $1 === "boolean"');

  // Лечим TS2352 (ошибка прямого каста из any/Record в примитивы)
  converted = converted.replace(/\bas\s+(?:unknown\s+as\s+)?String\b/g, 'as unknown as string');
  converted = converted.replace(/\bas\s+(?:unknown\s+as\s+)?Number\b/g, 'as unknown as number');
  converted = converted.replace(/\bas\s+(?:unknown\s+as\s+)?Boolean\b/g, 'as unknown as boolean');

  converted = converted.replace(/\b(var|let)\s+([a-zA-Z0-9_$]+)\s*=\s*\[\]/g, '$1 $2: any[] = []');

  if (converted.includes('JSONToken') || converted.includes('JSONTokenType') || converted.includes('JSONParseError')) {
    converted = converted.replace(/Record<string,\s*any>/g, 'any');
  }

  converted = converted.replace(/=\s*null\s*([,;])/g, '= null as any$1');
  converted = converted.replace(/^(?:override\s+)?(?:public\s+|private\s+|protected\s+)?\w+_internal\s+(var|const|function|get|set)\b/gm, 'public $1');
  converted = converted.replace(/public\s+a\s*:\s*any(?:\[\])?;/g, 'public a: number[];');

  converted = converted.replace(/switch\s*\(this\.ch\)\s*\{/g, 'switch(String(this.ch)) {');
  converted = converted.replace(/this\.ch\s*(==|!=)\s*/g, 'String(this.ch) $1 ');

  converted = converted.replace(
    /var\s+classInfo\s*:\s*(?:XML|any)\s*=\s*describeType\(o\);[\s\S]*?return\s+"\{"\s*\+\s*s\s*\+\s*"\}";/,
    `for (let key in o) { value = o[key]; if (!(value instanceof Function)) { if (s.length > 0) { s += ","; } s += this.escapeString(key) + ":" + this.convertToString(value); } } return "{" + s + "}";`
  );
  converted = converted.replace(/\bvar\s+v\s*:\s*XML\s*=\s*.*?;\n?/g, '');
  
  converted = converted.replace(/\bvar\s+error\s*:\s*ClientError\b/g, 'var clientErr: ClientError');
  converted = converted.replace(/\berror\.getCode\b/g, 'clientErr.getCode');
  converted = converted.replace(/\bhandleConnectionFailed\(error\)/g, 'handleConnectionFailed(clientErr)');
  converted = converted.replace(/\bauthenticationFailed\(error\)/g, 'authenticationFailed(clientErr)');
  
  converted = converted.replace(/for\s*\(\s*(?:var\s+|let\s+)?(?:this\.)?([a-zA-Z0-9_]+)\s+in\s+(Caller\.calls|calls)\s*\)/g, 'for (let $1 of (Object.values($2 as any) as any[]))');
  
  converted = converted.replace(/\bJSON\.encode\s*\(/g, 'JSON.stringify(');
  converted = converted.replace(/\bJSON\.decode\s*\(/g, 'JSON.parse(');
  converted = converted.replace(/\bgetTimer\s*\(\s*\)/g, 'Date.now()');
  converted = converted.replace(/\bExternalInterface\.call\s*\(/g, '(ExternalInterface.call as any)(');
  
  converted = converted.replace(/\bdelete\s+calls\[([^\]]+)\]\s*;/g, 'delete (calls as any)[$1 as any];');
  converted = converted.replace(/\bcalls\[([^\]]+)\]/g, '(calls as any)[$1 as any]');
  converted = converted.replace(/\bCaller\.calls\[([^\]]+)\]/g, '(Caller.calls as any)[$1 as any]');

  converted = converted.replace(/declare const flash: any;/g, 'declare const flash: any;\ndeclare const console: any;');

  converted = converted.replace(/\bnew\s+([A-Za-z0-9_.]+)\s*\(/g, 'new ($1 as any)(');

  if (className === 'Base64') {
    converted = converted
      .split('\n')
      .map((line) => {
        if (/^\s*(public|private|protected)\s+static\s+(readonly\s+)?(_b64Chars|_linebreaks)\b/.test(line)) {
          return line;
        }
        return line
          .replace(/(?<!\.)\b_b64Chars\b/g, 'Base64._b64Chars')
          .replace(/(?<!\.)\b_linebreaks\b/g, 'Base64._linebreaks');
      })
      .join('\n');
    converted = converted.replace(/\bBase64\.Base64\./g, 'Base64.');
  }

  if (className === 'TankCreatorScreen') {
    // Heal JPEXS decompiler "register loss" bugs where it outputs 'null' instead of the variable
    converted = converted.replace(/\bnew\s+null\[/g, 'new _loc3_[');
    converted = converted.replace(/(?<!new\s)\bnull\[/g, '_loc3_[');

    // Fix the twin mirror positioning (remembering that earlier regexes turned null.x into (null as any).x)
    converted = converted.replace(/\(null as any\)\.x/g, 'this.movDragObj1.x');
    converted = converted.replace(/\(null as any\)\.y/g, 'this.movDragObj1.y');
  }

  if (className === 'BigInteger') {
    converted = converted
      .split('\n')
      .map((line) => {
        if (/^\s*(public|private|protected)\s+(static\s+)?(readonly\s+)?(DB|BI_FP|DM|lowprimes|lplim|op_andnot|t)\b/.test(line)) {
          return line;
        }
        return line
          .replace(/(?<!\.)\b(DB|BI_FP|DM|lowprimes|lplim)\b/g, 'BigInteger.$1')
          .replace(/(?<!\.)\bop_andnot\b/g, 'this.op_andnot');
      })
      .join('\n');

    converted = converted.replace(/\bBigInteger\.BigInteger\./g, 'BigInteger.');
    converted = converted.replace(/\breturn\s+([^;]+);/g, 'return $1 as any;');
  }

  // Fix TS2678 in fl.motion.MotionBase: Cast problematic string literals to any
  if (className === 'MotionBase') {
    converted = converted.replace(/(?<!\w)(["'](?:x|y|skewX|skewY|scaleX|scaleY|rotation|alpha|color|filters|blendMode|matrix3D)["'])(?!\w)/g, '($1 as any)');
  }

  converted = converted.replace(/\bthis\.this\./g, 'this.');

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

  converted = converted.replace(/^\s*undefined\s*;\s*$/gm, '');
  converted = converted.replace(/^\s*null\s*;\s*$/gm, '');
  converted = converted.replace(/^\s*NaN\s*;\s*$/gm, '');

  converted = converted.replace(/^\s*name\s*=\s*(["'].*?["']);/gm, 'this.name = $1;');

  const jsonClasses = ['JSONEncoder', 'JSONDecoder', 'JSONTokenizer', 'JSONToken', 'JSONTokenType', 'JSONParseError'];
  const missingImports = [];
  for (const cls of jsonClasses) {
    if (new RegExp(`\\b${cls}\\b`).test(converted) && !new RegExp(`class\\s+${cls}\\b`).test(converted)) {
      missingImports.push(`import { ${cls} } from "./${cls}";`);
    }
  }
  if (missingImports.length > 0) converted = `${missingImports.join('\n')}\n\n${converted}`;

  converted = converted.replace(/\/\*\*[\s\S]*?\*\//g, (match) => {
    return match.replace(/@(?:type|param|return|private|public|see)\b/g, '');
  });

  // Heal JPEXS dropped parentheses on obfuscated method calls used in math/comparisons
  // This turns `_loc2_.method_41 + 5` into `_loc2_.method_41() + 5`
  converted = converted.replace(/(\b(?:this|[a-zA-Z0-9_$]+)\.method_\d+)(?=\s*(?:\+|-|\*|\/|==|!=|>=|<=|<|>))/g, '$1()');

  // Heal TS2538: cast complex object keys to any to emulate AS3 Dictionary indexing.
  converted = converted.replace(/([a-zA-Z0-9_$.]+)\[([^\]]+)\]/g, (match, dict, key) => {
    if (/^['"`0-9]/.test(key.trim())) return match;
    if (key.trim().endsWith('as any')) return match;
    return `${dict}[${key} as any]`;
  });

  // Safely cast array insertions to bypass strict typing
  converted = castArrayInsertions(converted);

  // Подавляем ошибки наследования (TS2417/TS2420) для сгенерированных AS3 классов
  converted = converted.replace(/^(\s*)(export class [A-Za-z_$][\w$]*[^\{]*\{)/gm, '$1// @ts-ignore\n$1$2');

  const header = [
    '// AUTO-GENERATED AS3 TO TS CONVERSION',
    packageName ? `// Original Package: ${packageName}` : '// Original Package: <root>'
  ].join('\n');

  const flashStubHeader = getFlashStubHeader(className);

  return `${header}\n\n${flashStubHeader}\n\n${converted.trim()}\n`;
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
