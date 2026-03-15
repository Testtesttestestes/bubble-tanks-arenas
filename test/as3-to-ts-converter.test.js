const test = require('node:test');
const assert = require('node:assert/strict');

const { convertAs3ToTs, mapType, convertParams } = require('../tools/as3-to-ts/convert-as3-to-ts');
const { extractClassScopePropertyNames, addThisToPropertyUsage } = require('../tools/as3-to-ts/fix-implicit-this');

test('mapType maps primitive and special ActionScript types', () => {
  assert.equal(mapType('Number'), 'number');
  assert.equal(mapType('int'), 'number');
  assert.equal(mapType('Boolean'), 'boolean');
  assert.equal(mapType('String'), 'string');
  assert.equal(mapType('*'), 'any');
  assert.equal(mapType('Class'), 'any');
});

test('convertParams converts typed and default params with null coercion', () => {
  const converted = convertParams('param1:String, param2:Number = 5, optional:MovieClip = null, ...rest');
  assert.equal(converted, 'param1: string, param2: number = 5, optional: MovieClip = null as any, ...rest: any');
});

test('convertAs3ToTs converts EnemyAI-style class shape', () => {
  const input = `package\n{\n   public class EnemyAI extends class_113\n   {\n      internal var var_435:Number;\n\n      public function EnemyAI(param1:TankData)\n      {\n         super(param1);\n      }\n\n      override public function Move() : void\n      {\n         var _loc1_:Number = 10;\n      }\n   }\n}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /export class EnemyAI extends class_113/);
  assert.match(output, /public var_435: number;/);
  assert.match(output, /constructor\(param1: TankData\)/);
  assert.match(output, /public Move\(\): void/);
  assert.match(output, /let _loc1_: number = 10;/);
});

test('convertAs3ToTs writes package header', () => {
  const input = `package package_3\n{\n   import flash.utils.ByteArray;\n\n   public class Base64\n   {\n      public static const version:String = "1.0.0";\n   }\n}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /AUTO-GENERATED AS3 TO TS CONVERSION/);
  assert.match(output, /Original Package: package_3/);
  assert.match(output, /public static readonly version: string = "1\.0\.0";/);
});

test('convertAs3ToTs strips imports and emits constructor without access modifier', () => {
  const input = `package\n{\n   import flash.display.MovieClip;\n\n   public class ArenaData extends MovieClip\n   {\n      public function ArenaData()\n      {\n      }\n   }\n}`;

  const output = convertAs3ToTs(input);
  assert.doesNotMatch(output, /^import\s+/m);
  assert.match(output, /constructor\(\)/);
  assert.doesNotMatch(output, /public constructor\(\)/);
});

test('convertAs3ToTs prefixes frequent Flash API calls with this', () => {
  const input = `package\n{\n   public class Hud extends MovieClip\n   {\n      public function Hud()\n      {\n         addChild(inner);\n         gotoAndStop(2);\n         this.stop();\n      }\n   }\n}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /this\.addChild\(inner\);/);
  assert.match(output, /this\.gotoAndStop\(2\);/);
  assert.match(output, /this\.stop\(\);/);
});

test('convertAs3ToTs rewrites AS3 casts and int/uint casts', () => {
  const input = `package\n{\n   public class Hud extends MovieClip\n   {\n      public function Hud()\n      {\n         var x:Number = int(scaleX);\n         var y:Number = uint(scaleY);\n         var p:MovieClip = MovieClip(parent);\n      }\n   }\n}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /let x: number = Math\.floor\(scaleX\);/);
  assert.match(output, /let y: number = Math\.floor\(scaleY\);/);
  assert.match(output, /let p: MovieClip = \(parent as unknown as MovieClip\);/);
});



test('convertAs3ToTs applies parser-stabilization rewrites for E4X and vector artifacts', () => {
  const input = `package
{
   public class WeirdSyntax
   {
      public function WeirdSyntax()
      {
         var xml:XML;
         var id:String = xml.@id;
         var node:XMLList = xml..node;
         for each (item in list)
         {
         }
         var nums:Array = new <int>[1, 2, 3];
         var data:Object = Array(buffer);
      }
   }
}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /xml\._attr_id/);
  assert.match(output, /xml\._descendants_node/);
  assert.match(output, /for \(let item of list\)/);
  assert.match(output, /let nums: any\[] = \[1, 2, 3\];/);
  assert.match(output, /let data: Record<string, any> = \(buffer[\s\S]*as any\[]\);/);
});

test('convertAs3ToTs rewrites typed for-each, bi_internal, catch typing, and include directives', () => {
  const input = `package
{
   public class CryptoLike
   {
      include "../core/Version.as";

      bi_internal var t:int = 0;

      public function parse(list:Array) : void
      {
         for each (var comp:IFocusManagerComponent in list)
         {
         }

         try
         {
         }
         catch (e:Error)
         {
         }
      }
   }
}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /\/\/ include removed/);
  assert.match(output, /public t: number = 0;/);
  assert.match(output, /for \(let comp of list\)/);
  assert.match(output, /catch \(e: any\)/);
});

test('convertAs3ToTs rewrites E4X wildcard and filter notations', () => {
  const input = `package
{
   public class TankViewerScreen
   {
      public function TankViewerScreen(xml:XML) : void
      {
         var a:XMLList = xml.*;
         var b:XMLList = *.xml;
         var c:XMLList = xml.(id == 1);
      }
   }
}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /xml\._star/);
  assert.match(output, /_star\.xml/);
  assert.match(output, /xml\._filter\(id == 1\)/);
});

test('convertAs3ToTs normalizes interface getter signatures with space before type colon', () => {
  const input = `package fl.controls.listClasses
{
   public interface ICellRenderer
   {
      function get data() : Object;
   }
}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /export interface ICellRenderer/);
  assert.match(output, /data: Record<string, any>;/);
  assert.doesNotMatch(output, /function get data\(\)/);
});

test('convertAs3ToTs repairs accidental this.default switch labels', () => {
  const input = `package
{
   public class class_14
   {
      public function f() : void
      {
         switch(x)
         {
            this.default:
               return;
         }
      }
   }
}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /default:/);
  assert.doesNotMatch(output, /this\.default:/);
});

test('fix-implicit-this extracts class properties and prefixes usages', () => {
  const input = `export class ArenaData extends MovieClip {\n  public x: number = 0;\n  private alpha: number = 1;\n\n  public move(): void {\n    x += 10;\n    alpha = 0.5;\n  }\n}`;

  const props = extractClassScopePropertyNames(input);
  assert.deepEqual([...props].sort(), ['alpha', 'x']);

  const fixed = addThisToPropertyUsage(input, props);
  assert.match(fixed, /this\.x \+= 10;/);
  assert.match(fixed, /this\.alpha = 0\.5;/);
});
