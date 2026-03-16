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
  assert.match(output, /type ByteArray = any;/);
  assert.match(output, /type Sprite = any;/);
  assert.match(output, /declare const flash: any;/);
});
