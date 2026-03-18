const test = require('node:test');
const assert = require('node:assert/strict');

const { convertAs3ToTs } = require('./convert-as3-to-ts');

test('functions without visibility are emitted as public methods', () => {
  const input = [
    'package {',
    '  public class Sample {',
    '    function calc(a:Number):Number {',
    '      return a;',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /public calc\(a: number\): number/);
});

test('injects Flash built-in stubs into each converted file', () => {
  const input = [
    'package {',
    '  public class Sample {',
    '    public function f():void {}',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /declare const ByteArray:/);
  assert.match(output, /declare const Sprite:/);
  assert.match(output, /declare const ContextMenuEvent:/);
  assert.match(output, /declare const EventDispatcher:/);
});



test('does not inject global hacks for flash/console/MD5 reflection helpers', () => {
  const input = [
    'package {',
    '  public class Sample {',
    '    public function f():void {}',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.doesNotMatch(output, /declare const flash: any;/);
  assert.doesNotMatch(output, /declare const console: any;/);
  assert.doesNotMatch(output, /declare const getDefinitionByName: any;/);
  assert.doesNotMatch(output, /declare const describeType: any;/);
  assert.doesNotMatch(output, /declare const MD5: any;/);
});
test('maps AS3 Array types to any to support dynamic property access patterns', () => {
  const input = [
    'package {',
    '  public class Sample {',
    '    public var data:Array;',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /public data!: any;/);
});

test('adds ts-ignore for accessors overriding core Flash display properties', () => {
  const input = [
    'package {',
    '  public class Sample extends Sprite {',
    '    public function get x():Number {',
    '      return 1;',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /@ts-ignore - AS3 override of Flash display property accessor/);
  assert.match(output, /get x\(\): number/);
});

test('prefixes implicit DisplayObject coordinate and hit-test methods with this', () => {
  const input = [
    'package {',
    '  public class Sample extends Sprite {',
    '    public function f():void {',
    '      globalToLocal(localToGlobal(hitTestPoint(10, 20) ? new Point() : new Point()));',
    '      this.movTank.localToGlobal(new Point());',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /this\.globalToLocal\(this\.localToGlobal\(this\.hitTestPoint\(10, 20\)/);
  assert.match(output, /this\.movTank\.localToGlobal\(new\s+\(Point as any\)\(\)\)/);
});

test('prefixes implicit EventDispatcher methods with this', () => {
  const input = [
    'package {',
    '  public class Sample extends Sprite {',
    '    public function f():Boolean {',
    '      return hasEventListener(Event.COMPLETE) && willTrigger(Event.CHANGE);',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /return this\.hasEventListener\("complete"\) && this\.willTrigger\("change"\);/);
});

test('casts push/unshift and splice insertions to any for AS3-style loose arrays', () => {
  const input = [
    'package {',
    '  public class Sample {',
    '    public var arr:Array;',
    '    public function f(param1:MovieClip, param2:Sprite, param3:DisplayObject):void {',
    '      this.arr.push(param1);',
    '      this.arr.unshift(param2 as any);',
    '      this.arr.splice(0, 0, param3);',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /this\.arr\.push\(param1 as any\);/);
  assert.match(output, /this\.arr\.unshift\(param2\s+as (?:unknown as )?any\);/);
  assert.match(output, /this\.arr\.splice\(0, 0, param3 as any\);/);
});

test('converts AS3 cast calls for fl classes and interface-like symbols', () => {
  const input = [
    'package {',
    '  public class Sample {',
    '    public function f(item:Object, child:Object):void {',
    '      var a:Object = UIComponent(item);',
    '      var b:Object = Dictionary(item);',
    '      var c:Object = IFocusManagerComponent(child);',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /var a: Record<string, any> = \(item as unknown as UIComponent\);/);
  assert.match(output, /var b: Record<string, any> = \(item as unknown as Dictionary\);/);
  assert.match(output, /var c: Record<string, any> = \(child as unknown as IFocusManagerComponent\);/);
});

test('replaces instanceof interface checks with != null guards', () => {
  const input = [
    'package {',
    '  public class Sample {',
    '    public function f(child:Object):Boolean {',
    '      return child is IFocusManager;',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /return child != null \/\* instanceof IFocusManager \*\//);
});

test('casts non-literal index keys to any for dictionary-like indexing', () => {
  const input = [
    'package {',
    '  public class Sample {',
    '    public function f(dict:Object, spr:Object):void {',
    '      dict[spr] = true;',
    '      dict["ok"] = true;',
    '      dict[7] = true;',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /dict\[spr as any\] = true;/);
  assert.match(output, /dict\["ok"\] = true;/);
  assert.match(output, /dict\[7\] = true;/);
});

test('does not rewrite decimal literals while healing numeric property access', () => {
  const input = [
    'package {',
    '  public class Sample {',
    '    public function f():Number {',
    '      var value:Number = 0.9 + 0.1;',
    '      return value;',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /0\.9 \+ 0\.1/);
  assert.doesNotMatch(output, /0\[9\]|0\[1\]/);
});

test('keeps chained member access valid when casting layout property assignments', () => {
  const input = [
    'package {',
    '  public class Sample {',
    '    public function f(param1:Object):void {',
    '      this.var_80[param1].mc.alpha = 0.5;',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /\(this\.var_80\[param1 as any\]\.mc as any\)\.alpha = 0\.5;/);
  assert.doesNotMatch(output, /\.?\(mc as any\)\.alpha/);
});

test('maps ProgressEvent constants to DOM-style event string literals', () => {
  const input = [
    'package {',
    '  public class Sample extends Sprite {',
    '    public function f():void {',
    '      addEventListener(ProgressEvent.PROGRESS, onProgress);',
    '      addEventListener(ProgressEvent.SOCKET_DATA, onSocketData);',
    '    }',
    '    public function onProgress(e:Event):void {}',
    '    public function onSocketData(e:Event):void {}',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /this\.addEventListener\("progress", onProgress\.bind\(this\)\);/);
  assert.match(output, /this\.addEventListener\("socketData", onSocketData\.bind\(this\)\);/);
});


test('injects additional Flash globals used by AGI (Security, ExternalInterface, System)', () => {
  const input = [
    'package {',
    '  public class Sample {',
    '    public function f():void {}',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /declare const Security:/);
  assert.match(output, /declare const ExternalInterface:/);
  assert.match(output, /declare const System:/);
});

test('injects undeclared decompiler locals for var_ and _loc patterns', () => {
  const input = [
    'package {',
    '  public class AGI {',
    '    public function f():void {',
    '      _loc1 = 2;',
    '      var_7 = _loc1 + 3;',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /var _loc1: any, var_7: any;/);
});

test('adds index signature even when class declaration is non-export at transform stage', () => {
  const input = [
    'package {',
    '  dynamic class Sample {',
    '    function f():void {',
    '      this.anyField = 1;',
    '    }',
    '  }',
    '}'
  ].join('\n');

  const output = convertAs3ToTs(input);
  assert.match(output, /\[key: string\]: any;/);
});


test('converts decompiled JSONTokenizer-style labels into case clauses (including escaped strings)', () => {
  const fs = require('node:fs');
  const path = require('node:path');

  const input = fs.readFileSync(
    path.resolve(__dirname, '../../binaryData/AGI decomp/scripts/com/adobe/serialization/json/JSONTokenizer.as'),
    'utf8'
  );

  const decompiledLikeInput = input.replace(
    /^(\s*)case\s+(\d+|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'):\s*$/gm,
    '$1$2:'
  );

  const output = convertAs3ToTs(decompiledLikeInput);

  assert.ok(output.includes('case "\\\\":'));
  assert.ok(output.includes('case "\\\"":'));

  const bareStringLabels = output
    .split('\n')
    .filter((line) => /^\s*".*":\s*$/.test(line) && !/^\s*case\s+/.test(line));
  assert.equal(bareStringLabels.length, 0);
});
