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
