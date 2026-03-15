const test = require('node:test');
const assert = require('node:assert/strict');

const { convertAs3ToTs, mapType, convertParams } = require('../tools/as3-to-ts/convert-as3-to-ts');

test('mapType maps primitive ActionScript types', () => {
  assert.equal(mapType('Number'), 'number');
  assert.equal(mapType('int'), 'number');
  assert.equal(mapType('Boolean'), 'boolean');
  assert.equal(mapType('String'), 'string');
  assert.equal(mapType('*'), 'any');
});

test('convertParams converts typed and default params', () => {
  const converted = convertParams('param1:String, param2:Number = 5, ...rest');
  assert.equal(converted, 'param1: string, param2: number = 5, ...rest: any');
});

test('convertAs3ToTs converts EnemyAI-style class shape', () => {
  const input = `package\n{\n   public class EnemyAI extends class_113\n   {\n      internal var var_435:Number;\n\n      public function EnemyAI(param1:TankData)\n      {\n         super(param1);\n      }\n\n      override public function Move() : void\n      {\n         var _loc1_:Number = 10;\n      }\n   }\n}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /export class EnemyAI extends class_113/);
  assert.match(output, /public var_435: number;/);
  assert.match(output, /constructor\(param1: TankData\)/);
  assert.match(output, /override public Move\(\): void/);
  assert.match(output, /let _loc1_: number = 10;/);
});

test('convertAs3ToTs preserves package/import metadata in header', () => {
  const input = `package package_3\n{\n   import flash.utils.ByteArray;\n\n   public class Base64\n   {\n      public static const version:String = \"1.0.0\";\n   }\n}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /Source package: package_3/);
  assert.match(output, /Original imports: flash\.utils\.ByteArray/);
  assert.match(output, /public static readonly version: string = \"1\.0\.0\";/);
});
