const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const { convertAs3ToTs, mapType, convertParams } = require('../tools/as3-to-ts/convert-as3-to-ts');
const { extractClassScopePropertyNames, addThisToPropertyUsage, processFile } = require('../tools/as3-to-ts/fix-implicit-this');
const { applyImports, buildSymbolMap } = require('../tools/as3-to-ts/resolve-imports');

const { healFunctionParamThisPrefixes } = require('../tools/as3-to-ts/heal-signature-params');

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

test('convertParams strips decompiler this. prefixes from parameter names', () => {
  const converted = convertParams('this.hash:IHash, this.bits:uint = 0');
  assert.equal(converted, 'hash: IHash, bits: number = 0');
});

test('convertParams coerces null defaults for number/boolean params', () => {
  const converted = convertParams('this.n:int = null, this.flag:Boolean = null');
  assert.equal(converted, 'n: number = 0 /* null */, flag: boolean = 0 /* null */');
});

test('convertAs3ToTs converts EnemyAI-style class shape', () => {
  const input = `package\n{\n   public class EnemyAI extends class_113\n   {\n      internal var var_435:Number;\n\n      public function EnemyAI(param1:TankData)\n      {\n         super(param1);\n      }\n\n      override public function Move() : void\n      {\n         var _loc1_:Number = 10;\n      }\n   }\n}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /export class EnemyAI extends class_113/);
  assert.match(output, /public var_435!?\: number;/);
  assert.match(output, /constructor\(param1: TankData\)/);
  assert.match(output, /public Move\(\): void/);
  assert.match(output, /var _loc1_: number = 10;/);
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

test('convertAs3ToTs strips this. prefixes from function declarations and constructor params', () => {
  const input = `package
{
   public class HMAC
   {
      public function this.HMAC(this.hash:IHash, this.bits:uint = 0)
      {
      }

      override public function this.compute(this.value:String) : String
      {
         return this.value;
      }
   }
}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /constructor\(hash: IHash, bits: number = 0\)/);
  assert.match(output, /public compute\(value: string\): string/);
  assert.doesNotMatch(output, /constructor\(this\./);
  assert.doesNotMatch(output, /function this\./);
});

test('convertAs3ToTs prefixes frequent Flash API calls with this', () => {
  const input = `package\n{\n   public class Hud extends MovieClip\n   {\n      public function Hud()\n      {\n         addChild(inner);\n         gotoAndStop(2);\n         this.stop();\n      }\n   }\n}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /this\.addChild\(inner\);/);
  assert.match(output, /this\.gotoAndStop\(2\);/);
  assert.match(output, /this\.stop\(\);/);
});

test('convertAs3ToTs rewrites AS3 casts and int/uint casts', () => {
  const input = `package\n{\n   public class Hud extends MovieClip\n   {\n      public function Hud()\n      {\n         var x:Number = int(scaleX);\n         var y:Number = uint(scaleY);\n         var p:MovieClip = MovieClip(parent);
         var a:Array = Array(buffer);
         var n:Number = Number(scaleX);\n      }\n   }\n}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /var x: number = Math\.floor\(scaleX\);/);
  assert.match(output, /var y: number = Math\.floor\(scaleY\);/);
  assert.match(output, /var p: MovieClip = \(parent as unknown as MovieClip\);/);
  assert.match(output, /var a: any\[] = \([^)]*as unknown as any\[]\);/);
  assert.match(output, /var n: number = Number\(scaleX\);/);
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
  assert.match(output, /var nums: any\[] = \[1, 2, 3\];/);
  assert.match(output, /var data: Record<string, any> = \(buffer[\s\S]*as any\[]\);/);
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

test('convertAs3ToTs rewrites fully-qualified event constants with optional spacing', () => {
  const input = `package
{
   public class Events
   {
      public function hook(target:MovieClip) : void
      {
         target.addEventListener(flash.events.MouseEvent . CLICK, onClick);
         target.addEventListener(flash.events.FocusEvent.FOCUS_IN, onFocus);
         target.addEventListener(flash.events.Event.ENTER_FRAME, onFrame);
      }
   }
}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /addEventListener\("click", onClick\.bind\(this\)\)/);
  assert.match(output, /addEventListener\("focusin", onFocus\.bind\(this\)\)/);
  assert.match(output, /addEventListener\("enterframe", onFrame\.bind\(this\)\)/);
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


test('convertAs3ToTs does not rewrite uppercase method calls as class casts', () => {
  const input = `package
{
   public class BlowFishKey
   {
      public function x() : void
      {
         var xr:Number = 0;
         var xl:Number = 0;
         xr ^= F(xl);
      }

      public function F(v:Number) : Number
      {
         return v;
      }
   }
}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /F\(xl\)/);
  assert.doesNotMatch(output, /as unknown as F/);
});

test('resolve-imports handles CRLF files and preserves line endings', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'resolve-imports-'));
  const provider = path.join(tmp, 'TankData.ts');
  const consumer = path.join(tmp, 'Viewer.ts');

  fs.writeFileSync(provider, 'export class TankData {}\r\n', 'utf8');
  fs.writeFileSync(consumer, 'export class Viewer {\r\n  public data: TankData;\r\n}\r\n', 'utf8');

  const files = [provider, consumer];
  const symbolMap = buildSymbolMap(files);
  const changed = applyImports(consumer, symbolMap);
  const updated = fs.readFileSync(consumer, 'utf8');

  assert.equal(changed, true);
  assert.match(updated, /import \{ TankData \} from '\.\/TankData';\r\n\r\nexport class Viewer/);
  assert.match(updated, /\r\n/g);
});


test('convertAs3ToTs rewrites JSON package edge cases and primitive casts', () => {
  const input = `package com.adobe.serialization.json
{
   public class Helper
   {
      public function read(value:*) : void
      {
         var arr:Array = value as Array;
         if (this.ch == "e" || this.ch != "+")
         {
         }
         if (value instanceof String)
         {
         }
         var s:String = value as String;
         var n:Number = value as Number;
         var b:Boolean = value as Boolean;
         var t:JSONToken;
         var d:JSONDecoder;
      }
   }
}`;

  const output = convertAs3ToTs(input);
  assert.match(output, /import \{ JSONToken \} from "\.\/JSONToken";/);
  assert.match(output, /import \{ JSONDecoder \} from "\.\/JSONDecoder";/);
  assert.match(output, /var arr: any\[] = value\s+as any\[];/);
  assert.match(output, /String\(this\.ch\) == "e"/);
  assert.match(output, /String\(this\.ch\) != "\+"/);
  assert.match(output, /typeof value === "string"/);
  assert.match(output, /value\s+as string/);
  assert.match(output, /value\s+as number/);
  assert.match(output, /value\s+as boolean/);
});

test('healFunctionParamThisPrefixes removes this. from function signatures only', () => {
  const input = `export class HMAC {
  constructor(this.hash: IHash, this.bits: number = 0) {
    this.hash = this.hash;
  }
}`;

  const output = healFunctionParamThisPrefixes(input);
  assert.match(output, /constructor\(hash: IHash, bits: number = 0\)/);
  assert.match(output, /this\.hash = this\.hash;/);
});


test('fix-implicit-this does not prefix obfuscated class field declarations with this', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fix-implicit-this-'));
  const file = path.join(dir, 'Sample.ts');
  fs.writeFileSync(file, `export class Sample {
  var_388!: number;

  public tick(): void {
    var_388 = 1;
  }
}
`);

  processFile(file);
  const fixed = fs.readFileSync(file, 'utf8');

  assert.match(fixed, /var_388!: number;/);
  assert.match(fixed, /this\.var_388 = 1;/);
  assert.doesNotMatch(fixed, /this\.var_388!: number;/);
});
