// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

import { Memory } from '../../util/Memory';
import { ISymmetricKey } from './ISymmetricKey';

// Flash built-ins compatibility stubs (AUTO-INJECTED)
declare interface ByteArray { [key: string]: any; }
declare const ByteArray: { new(...args: any[]): ByteArray; [key: string]: any; };
declare interface Endian { [key: string]: any; }
declare const Endian: { new(...args: any[]): Endian; [key: string]: any; };
declare interface Matrix { [key: string]: any; }
declare const Matrix: { new(...args: any[]): Matrix; [key: string]: any; };
declare interface Point { [key: string]: any; }
declare const Point: { new(...args: any[]): Point; [key: string]: any; };
declare interface Rectangle { [key: string]: any; }
declare const Rectangle: { new(...args: any[]): Rectangle; [key: string]: any; };
declare interface DisplayObject { [key: string]: any; }
declare const DisplayObject: { new(...args: any[]): DisplayObject; [key: string]: any; };
declare interface DisplayObjectContainer { [key: string]: any; }
declare const DisplayObjectContainer: { new(...args: any[]): DisplayObjectContainer; [key: string]: any; };
declare interface InteractiveObject { [key: string]: any; }
declare const InteractiveObject: { new(...args: any[]): InteractiveObject; [key: string]: any; };
declare interface MovieClip { [key: string]: any; }
declare const MovieClip: { new(...args: any[]): MovieClip; [key: string]: any; };
declare interface Sprite { [key: string]: any; }
declare const Sprite: { new(...args: any[]): Sprite; [key: string]: any; };
declare interface Shape { [key: string]: any; }
declare const Shape: { new(...args: any[]): Shape; [key: string]: any; };
declare interface Bitmap { [key: string]: any; }
declare const Bitmap: { new(...args: any[]): Bitmap; [key: string]: any; };
declare interface BitmapData { [key: string]: any; }
declare const BitmapData: { new(...args: any[]): BitmapData; [key: string]: any; };
declare interface Loader { [key: string]: any; }
declare const Loader: { new(...args: any[]): Loader; [key: string]: any; };
declare interface URLRequest { [key: string]: any; }
declare const URLRequest: { new(...args: any[]): URLRequest; [key: string]: any; };
declare interface Event { [key: string]: any; }
declare const Event: { new(...args: any[]): Event; [key: string]: any; };
declare interface MouseEvent { [key: string]: any; }
declare const MouseEvent: { new(...args: any[]): MouseEvent; [key: string]: any; };
declare interface KeyboardEvent { [key: string]: any; }
declare const KeyboardEvent: { new(...args: any[]): KeyboardEvent; [key: string]: any; };
declare interface FocusEvent { [key: string]: any; }
declare const FocusEvent: { new(...args: any[]): FocusEvent; [key: string]: any; };
declare interface TimerEvent { [key: string]: any; }
declare const TimerEvent: { new(...args: any[]): TimerEvent; [key: string]: any; };
declare interface TextField { [key: string]: any; }
declare const TextField: { new(...args: any[]): TextField; [key: string]: any; };
declare interface TextFormat { [key: string]: any; }
declare const TextFormat: { new(...args: any[]): TextFormat; [key: string]: any; };
declare interface Graphics { [key: string]: any; }
declare const Graphics: { new(...args: any[]): Graphics; [key: string]: any; };
declare interface Sound { [key: string]: any; }
declare const Sound: { new(...args: any[]): Sound; [key: string]: any; };
declare interface SoundChannel { [key: string]: any; }
declare const SoundChannel: { new(...args: any[]): SoundChannel; [key: string]: any; };
declare interface SoundTransform { [key: string]: any; }
declare const SoundTransform: { new(...args: any[]): SoundTransform; [key: string]: any; };
declare interface Stage { [key: string]: any; }
declare const Stage: { new(...args: any[]): Stage; [key: string]: any; };
declare interface ApplicationDomain { [key: string]: any; }
declare const ApplicationDomain: { new(...args: any[]): ApplicationDomain; [key: string]: any; };
declare interface ContextMenu { [key: string]: any; }
declare const ContextMenu: { new(...args: any[]): ContextMenu; [key: string]: any; };
declare interface ContextMenuItem { [key: string]: any; }
declare const ContextMenuItem: { new(...args: any[]): ContextMenuItem; [key: string]: any; };
declare interface Dictionary { [key: string]: any; }
declare const Dictionary: { new(...args: any[]): Dictionary; [key: string]: any; };
declare interface Security { [key: string]: any; }
declare const Security: { new(...args: any[]): Security; [key: string]: any; };
declare interface ExternalInterface { [key: string]: any; }
declare const ExternalInterface: { new(...args: any[]): ExternalInterface; [key: string]: any; };
declare interface System { [key: string]: any; }
declare const System: { new(...args: any[]): System; [key: string]: any; };
declare interface LoaderContext { [key: string]: any; }
declare const LoaderContext: { new(...args: any[]): LoaderContext; [key: string]: any; };
declare interface Transform { [key: string]: any; }
declare const Transform: { new(...args: any[]): Transform; [key: string]: any; };
declare interface ColorTransform { [key: string]: any; }
declare const ColorTransform: { new(...args: any[]): ColorTransform; [key: string]: any; };
declare interface Font { [key: string]: any; }
declare const Font: { new(...args: any[]): Font; [key: string]: any; };
declare interface Capabilities { [key: string]: any; }
declare const Capabilities: { new(...args: any[]): Capabilities; [key: string]: any; };
declare interface SharedObject { [key: string]: any; }
declare const SharedObject: { new(...args: any[]): SharedObject; [key: string]: any; };
declare interface Responder { [key: string]: any; }
declare const Responder: { new(...args: any[]): Responder; [key: string]: any; };
declare interface AsyncErrorEvent { [key: string]: any; }
declare const AsyncErrorEvent: { new(...args: any[]): AsyncErrorEvent; [key: string]: any; };
declare interface SecurityErrorEvent { [key: string]: any; }
declare const SecurityErrorEvent: { new(...args: any[]): SecurityErrorEvent; [key: string]: any; };
declare interface IOErrorEvent { [key: string]: any; }
declare const IOErrorEvent: { new(...args: any[]): IOErrorEvent; [key: string]: any; };
declare interface NetConnection { [key: string]: any; }
declare const NetConnection: { new(...args: any[]): NetConnection; [key: string]: any; };
declare interface NetStream { [key: string]: any; }
declare const NetStream: { new(...args: any[]): NetStream; [key: string]: any; };
declare interface LocalConnection { [key: string]: any; }
declare const LocalConnection: { new(...args: any[]): LocalConnection; [key: string]: any; };
declare interface Microphone { [key: string]: any; }
declare const Microphone: { new(...args: any[]): Microphone; [key: string]: any; };
declare interface Camera { [key: string]: any; }
declare const Camera: { new(...args: any[]): Camera; [key: string]: any; };
declare interface Matrix3D { [key: string]: any; }
declare const Matrix3D: { new(...args: any[]): Matrix3D; [key: string]: any; };
declare interface Vector3D { [key: string]: any; }
declare const Vector3D: { new(...args: any[]): Vector3D; [key: string]: any; };
declare interface AnimatorFactory3D { [key: string]: any; }
declare const AnimatorFactory3D: { new(...args: any[]): AnimatorFactory3D; [key: string]: any; };
declare interface StageQuality { [key: string]: any; }
declare const StageQuality: { new(...args: any[]): StageQuality; [key: string]: any; };
declare interface URLRequestMethod { [key: string]: any; }
declare const URLRequestMethod: { new(...args: any[]): URLRequestMethod; [key: string]: any; };
declare interface URLVariables { [key: string]: any; }
declare const URLVariables: { new(...args: any[]): URLVariables; [key: string]: any; };
declare interface URLLoader { [key: string]: any; }
declare const URLLoader: { new(...args: any[]): URLLoader; [key: string]: any; };
declare interface Mouse { [key: string]: any; }
declare const Mouse: { new(...args: any[]): Mouse; [key: string]: any; };
declare interface MouseCursor { [key: string]: any; }
declare const MouseCursor: { new(...args: any[]): MouseCursor; [key: string]: any; };
declare interface Timer { [key: string]: any; }
declare const Timer: { new(...args: any[]): Timer; [key: string]: any; };
declare interface ColorMatrixFilter { [key: string]: any; }
declare const ColorMatrixFilter: { new(...args: any[]): ColorMatrixFilter; [key: string]: any; };
declare interface GlowFilter { [key: string]: any; }
declare const GlowFilter: { new(...args: any[]): GlowFilter; [key: string]: any; };
declare interface BlurFilter { [key: string]: any; }
declare const BlurFilter: { new(...args: any[]): BlurFilter; [key: string]: any; };
declare interface DropShadowFilter { [key: string]: any; }
declare const DropShadowFilter: { new(...args: any[]): DropShadowFilter; [key: string]: any; };
declare interface Keyboard { [key: string]: any; }
declare const Keyboard: { new(...args: any[]): Keyboard; [key: string]: any; };
declare interface Class { [key: string]: any; }
declare const Class: { new(...args: any[]): Class; [key: string]: any; };
declare interface IME { [key: string]: any; }
declare const IME: { new(...args: any[]): IME; [key: string]: any; };
declare interface TextFormatAlign { [key: string]: any; }
declare const TextFormatAlign: { new(...args: any[]): TextFormatAlign; [key: string]: any; };
declare interface TextFieldAutoSize { [key: string]: any; }
declare const TextFieldAutoSize: { new(...args: any[]): TextFieldAutoSize; [key: string]: any; };
declare interface AntiAliasType { [key: string]: any; }
declare const AntiAliasType: { new(...args: any[]): AntiAliasType; [key: string]: any; };
declare interface GridFitType { [key: string]: any; }
declare const GridFitType: { new(...args: any[]): GridFitType; [key: string]: any; };
declare interface TextSnapshot { [key: string]: any; }
declare const TextSnapshot: { new(...args: any[]): TextSnapshot; [key: string]: any; };
declare interface CSMSettings { [key: string]: any; }
declare const CSMSettings: { new(...args: any[]): CSMSettings; [key: string]: any; };
declare interface ContextMenuEvent { [key: string]: any; }
declare const ContextMenuEvent: { new(...args: any[]): ContextMenuEvent; [key: string]: any; };
declare interface EventDispatcher { [key: string]: any; }
declare const EventDispatcher: { new(...args: any[]): EventDispatcher; [key: string]: any; };
declare interface ContextMenuBuiltInItems { [key: string]: any; }
declare const ContextMenuBuiltInItems: { new(...args: any[]): ContextMenuBuiltInItems; [key: string]: any; };
declare interface ContextMenuClipboardItems { [key: string]: any; }
declare const ContextMenuClipboardItems: { new(...args: any[]): ContextMenuClipboardItems; [key: string]: any; };
declare interface IMEConversionMode { [key: string]: any; }
declare const IMEConversionMode: { new(...args: any[]): IMEConversionMode; [key: string]: any; };
declare interface BitmapFilter { [key: string]: any; }
declare const BitmapFilter: { new(...args: any[]): BitmapFilter; [key: string]: any; };
declare interface TextFieldType { [key: string]: any; }
declare const TextFieldType: { new(...args: any[]): TextFieldType; [key: string]: any; };
declare interface TextLineMetrics { [key: string]: any; }
declare const TextLineMetrics: { new(...args: any[]): TextLineMetrics; [key: string]: any; };
declare interface SharedObjectFlushStatus { [key: string]: any; }
declare const SharedObjectFlushStatus: { new(...args: any[]): SharedObjectFlushStatus; [key: string]: any; };
declare interface Vector { [key: string]: any; }
declare const Vector: { new(...args: any[]): Vector; [key: string]: any; };
declare interface BlendMode { [key: string]: any; }
declare const BlendMode: { new(...args: any[]): BlendMode; [key: string]: any; };
declare const flash: any;
declare const console: any;
declare const getDefinitionByName: any;
declare const getQualifiedClassName: any;
declare const getQualifiedSuperclassName: any;
declare const describeType: any;
declare const getTimer: any;

// @ts-ignore


   export class DESKey implements ISymmetricKey
   {
  [key: string]: any;
      
      private static readonly Df_Key: any = [1,35,69,103,137,171,205,239,254,220,186,152,118,84,50,16,137,171,205,239,1,35,69,103];
      private static readonly bytebit: any = [128,64,32,16,8,4,2,1];
      private static readonly bigbyte: any = [8388608,4194304,2097152,1048576,524288,262144,131072,65536,32768,16384,8192,4096,2048,1024,512,256,128,64,32,16,8,4,2,1];
      private static readonly pc1: any = [56,48,40,32,24,16,8,0,57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,60,52,44,36,28,20,12,4,27,19,11,3];
      private static readonly totrot: any = [1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28];
      private static readonly pc2: any = [13,16,10,23,0,4,2,27,14,5,20,9,22,18,11,3,25,7,15,6,26,19,12,1,40,51,30,36,46,54,29,39,50,44,32,47,43,48,38,55,33,52,45,41,49,35,28,31];
      private static readonly SP1: any = [16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756];
      private static readonly SP2: any = [2148565024,2147516416,32768,1081376,1048576,32,2148532256,2147516448,2147483680,2148565024,2148564992,2147483648,2147516416,1048576,32,2148532256,1081344,1048608,2147516448,0,2147483648,32768,1081376,2148532224,1048608,2147483680,0,1081344,32800,2148564992,2148532224,32800,0,1081376,2148532256,1048576,2147516448,2148532224,2148564992,32768,2148532224,2147516416,32,2148565024,1081376,32,32768,2147483648,32800,2148564992,1048576,2147483680,1048608,2147516448,2147483680,1048608,1081344,0,2147516416,32800,2147483648,2148532256,2148565024,1081344];
      private static readonly SP3: any = [520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584];
      private static readonly SP4: any = [8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928];
      private static readonly SP5: any = [256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080];
      private static readonly SP6: any = [536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312];
      private static readonly SP7: any = [2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154];
      private static readonly SP8: any = [268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696];
      protected encKey!: any;
      protected key!: ByteArray;
      protected decKey!: any;
      constructor(key: ByteArray){

         this.key = key;
         this.encKey = this.generateWorkingKey(true,key,0);
         this.decKey = this.generateWorkingKey(false,key,0);
      }
      
      protected generateWorkingKey(encrypting: boolean, key: ByteArray, off: number): any
      {
         var newKey: any = null as any;
         var pc1m: ByteArray = null as any;
         var pcr: ByteArray = null as any;
         var l: number = 0;
         var j: number = 0;
         var i: number = 0;
         var m: number = 0;
         var n: number = 0;
         var i1: number = 0;
         var i2: number = 0;
         newKey = [];
         pc1m = new (ByteArray as any)();
         pcr = new (ByteArray as any)();
         for(j = 0; j < 56; j++)
         {
            l = uint(DESKey.pc1[j as any]);
            pc1m[j as any] = (key[off + (l >>> 3) as any] & bytebit[l & 7 as any]) != 0;
         }
         for(i = 0; i < 16; i++)
         {
            if(encrypting)
            {
               m = uint(i << 1);
            }
            else
            {
               m = uint(15 - i << 1);
            }
            n = m + 1;
            newKey[m as any] = newKey[n as any] = 0;
            for(j = 0; j < 28; j++)
            {
               l = j + DESKey.totrot[i as any];
               if(l < 28)
               {
                  pcr[j as any] = pc1m[l as any];
               }
               else
               {
                  pcr[j as any] = pc1m[l - 28 as any];
               }
            }
            for(j = 28; j < 56; j++)
            {
               l = j + DESKey.totrot[i as any];
               if(l < 56)
               {
                  pcr[j as any] = pc1m[l as any];
               }
               else
               {
                  pcr[j as any] = pc1m[l - 28 as any];
               }
            }
            for(j = 0; j < 24; j++)
            {
               if(Boolean(pcr[DESKey.pc2[j as any]]))
               {
                  newKey[m as any] |= DESKey.bigbyte[j as any];
               }
               if(Boolean(pcr[DESKey.pc2[j + 24 as any]]))
               {
                  newKey[n as any] |= DESKey.bigbyte[j as any];
               }
            }
         }
         for(i = 0; i != 32; i += 2)
         {
            i1 = uint(newKey[i as any]);
            i2 = uint(newKey[i + 1 as any]);
            newKey[i as any] = (i1 & 0xFC0000) << 6 | (i1 & 0x0FC0) << 10 | (i2 & 0xFC0000) >>> 10 | (i2 & 0x0FC0) >>> 6;
            newKey[i + 1 as any] = (i1 & 0x03F000) << 12 | (i1 & 0x3F) << 16 | (i2 & 0x03F000) >>> 4 | i2 & 0x3F;
         }
         return newKey;
      }
      
      public encrypt(block: ByteArray, index: number = 0): void
      {
         this.desFunc(encKey,block,index,block,index);
      }
      
      public decrypt(block: ByteArray, index: number = 0): void
      {
         this.desFunc(decKey,block,index,block,index);
      }
      
      public dispose(): void
      {
         var i: number = 0;
         i = 0;
         i = 0;
         while(i < this.encKey.length)
         {
            this.encKey[i as any] = 0;
            i++;
         }
         i = 0;
         while(i < this.decKey.length)
         {
            this.decKey[i as any] = 0;
            i++;
         }
         this.encKey = null as any;
         this.decKey = null as any;
         i = 0;
         while(i < this.key.length)
         {
            this.key[i as any] = 0;
            i++;
         }
         this.key.length = 0;
         this.key = null as any;
         Memory.gc();
      }
      
      protected desFunc(wKey: any, inp: ByteArray, inOff: number, out: ByteArray, outOff: number): void
      {
         var work: number = 0;
         var right: number = 0;
         var left: number = 0;
         var round: number = 0;
         var fval: number = 0;
         left = uint((inp[inOff + 0 as any] & 0xFF) << 24);
         left |= (inp[inOff + 1 as any] & 0xFF) << 16;
         left |= (inp[inOff + 2 as any] & 0xFF) << 8;
         left |= inp[inOff + 3 as any] & 0xFF;
         right = uint((inp[inOff + 4 as any] & 0xFF) << 24);
         right |= (inp[inOff + 5 as any] & 0xFF) << 16;
         right |= (inp[inOff + 6 as any] & 0xFF) << 8;
         right |= inp[inOff + 7 as any] & 0xFF;
         work = uint((left >>> 4 ^ right) & 0x0F0F0F0F);
         right ^= work;
         left ^= work << 4;
         work = uint((left >>> 16 ^ right) & 0xFFFF);
         right ^= work;
         left ^= work << 16;
         work = uint((right >>> 2 ^ left) & 0x33333333);
         left ^= work;
         right ^= work << 2;
         work = uint((right >>> 8 ^ left) & 0xFF00FF);
         left ^= work;
         right ^= work << 8;
         right = uint((right << 1 | right >>> 31 & 1) & 0xFFFFFFFF);
         work = uint((left ^ right) & 0xAAAAAAAA);
         left ^= work;
         right ^= work;
         left = uint((left << 1 | left >>> 31 & 1) & 0xFFFFFFFF);
         for(round = 0; round < 8; round++)
         {
            work = uint(right << 28 | right >>> 4);
            work ^= wKey[round * 4 + 0 as any];
            fval = uint(DESKey.SP7[work & 0x3F as any]);
            fval |= DESKey.SP5[work >>> 8 & 0x3F as any];
            fval |= DESKey.SP3[work >>> 16 & 0x3F as any];
            fval |= DESKey.SP1[work >>> 24 & 0x3F as any];
            work = uint(right ^ wKey[round * 4 + 1 as any]);
            fval |= DESKey.SP8[work & 0x3F as any];
            fval |= DESKey.SP6[work >>> 8 & 0x3F as any];
            fval |= DESKey.SP4[work >>> 16 & 0x3F as any];
            fval |= DESKey.SP2[work >>> 24 & 0x3F as any];
            left ^= fval;
            work = uint(left << 28 | left >>> 4);
            work ^= wKey[round * 4 + 2 as any];
            fval = uint(DESKey.SP7[work & 0x3F as any]);
            fval |= DESKey.SP5[work >>> 8 & 0x3F as any];
            fval |= DESKey.SP3[work >>> 16 & 0x3F as any];
            fval |= DESKey.SP1[work >>> 24 & 0x3F as any];
            work = uint(left ^ wKey[round * 4 + 3 as any]);
            fval |= DESKey.SP8[work & 0x3F as any];
            fval |= DESKey.SP6[work >>> 8 & 0x3F as any];
            fval |= DESKey.SP4[work >>> 16 & 0x3F as any];
            fval |= DESKey.SP2[work >>> 24 & 0x3F as any];
            right ^= fval;
         }
         right = uint(right << 31 | right >>> 1);
         work = uint((left ^ right) & 0xAAAAAAAA);
         left ^= work;
         right ^= work;
         left = uint(left << 31 | left >>> 1);
         work = uint((left >>> 8 ^ right) & 0xFF00FF);
         right ^= work;
         left ^= work << 8;
         work = uint((left >>> 2 ^ right) & 0x33333333);
         right ^= work;
         left ^= work << 2;
         work = uint((right >>> 16 ^ left) & 0xFFFF);
         left ^= work;
         right ^= work << 16;
         work = uint((right >>> 4 ^ left) & 0x0F0F0F0F);
         left ^= work;
         right ^= work << 4;
         out[outOff + 0 as any] = right >>> 24 & 0xFF;
         out[outOff + 1 as any] = right >>> 16 & 0xFF;
         out[outOff + 2 as any] = right >>> 8 & 0xFF;
         out[outOff + 3 as any] = right & 0xFF;
         out[outOff + 4 as any] = left >>> 24 & 0xFF;
         out[outOff + 5 as any] = left >>> 16 & 0xFF;
         out[outOff + 6 as any] = left >>> 8 & 0xFF;
         out[outOff + 7 as any] = left & 0xFF;
      }
      
      public toString(): string
      {
         return "des";
      }
      
      public getBlockSize(): number
      {
         return 8;
      }
   }
