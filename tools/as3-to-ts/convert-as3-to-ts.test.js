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
  assert.match(output, /declare const ByteArray: any;/);
  assert.match(output, /declare const Sprite: any;/);
  assert.match(output, /declare const flash: any;/);
  assert.match(output, /declare const DebugUtil: any;/);
  assert.match(output, /declare const Client: any;/);
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
