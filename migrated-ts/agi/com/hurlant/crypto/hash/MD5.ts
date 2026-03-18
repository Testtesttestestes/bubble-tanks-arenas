// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.hash

import { IHash } from './IHash';

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


   export class MD5 implements IHash
   {
  [key: string]: any;
      
      public static readonly HASH_SIZE: number = 16;
      constructor(){

      }
      
      private ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number
      {
         return this.cmn(b & c | ~b & d,a,b,x,s,t);
      }
      
      private hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number
      {
         return this.cmn(b ^ c ^ d,a,b,x,s,t);
      }
      
      private cmn(q: number, a: number, b: number, x: number, s: number, t: number): number
      {
         return this.rol(a + q + x + t,s) + b;
      }
      
      public getHashSize(): number
      {
         return MD5.HASH_SIZE;
      }
      
      private ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number
      {
         return this.cmn(c ^ (b | ~d),a,b,x,s,t);
      }
      
      private rol(num: number, cnt: number): number
      {
         return num << cnt | num >>> 32 - cnt;
      }
      
      public toString(): string
      {
         return "md5";
      }
      
      public getInputSize(): number
      {
         return 64;
      }
      
      private gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number
      {
         return this.cmn(b & d | c & ~d,a,b,x,s,t);
      }
      
      public hash(src: ByteArray): ByteArray
      {
         var len: number = 0;
         var savedEndian: string = null as any;
         var a: any = null as any;
         var i: number = 0;
         var h: any = null as any;
         var out: ByteArray = null as any;
         len = src.length * 8;
         savedEndian = src.endian;
         while(src.length % 4 != 0)
         {
            src[src.length as any] = 0;
         }
         src.position = 0;
         a = [];
         src.endian = Endian.LITTLE_ENDIAN;
         for(i = 0; i < src.length; i += 4)
         {
            a.push(src.readUnsignedInt() as any);
         }
         h = this.core_md5(a,len);
         out = new (ByteArray as any)();
         out.endian = Endian.LITTLE_ENDIAN;
         for(i = 0; i < 4; i++)
         {
            out.writeUnsignedInt(this.h[i as any]);
         }
         src.length = len / 8;
         src.endian = savedEndian;
         return out;
      }
      
      private core_md5(x: any, len: number): any
      {
         var a: number = 0;
         var b: number = 0;
         var c: number = 0;
         var d: number = 0;
         var i: number = 0;
         var olda: number = 0;
         var oldb: number = 0;
         var oldc: number = 0;
         var oldd: number = 0;
         x[len >> 5 as any] |= 128 << len % 32;
         x[(len + 64 >>> 9 << 4) + 14 as any] = len;
         a = 1732584193;
         b = 4023233417;
         c = 2562383102;
         d = 271733878;
         for(i = 0; i < x.length; i += 16)
         {
            x[i as any] = x[i as any] || 0;
            x[i + 1 as any] = x[i + 1 as any] || 0;
            x[i + 2 as any] = x[i + 2 as any] || 0;
            x[i + 3 as any] = x[i + 3 as any] || 0;
            x[i + 4 as any] = x[i + 4 as any] || 0;
            x[i + 5 as any] = x[i + 5 as any] || 0;
            x[i + 6 as any] = x[i + 6 as any] || 0;
            x[i + 7 as any] = x[i + 7 as any] || 0;
            x[i + 8 as any] = x[i + 8 as any] || 0;
            x[i + 9 as any] = x[i + 9 as any] || 0;
            x[i + 10 as any] = x[i + 10 as any] || 0;
            x[i + 11 as any] = x[i + 11 as any] || 0;
            x[i + 12 as any] = x[i + 12 as any] || 0;
            x[i + 13 as any] = x[i + 13 as any] || 0;
            x[i + 14 as any] = x[i + 14 as any] || 0;
            x[i + 15 as any] = x[i + 15 as any] || 0;
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;
            a = this.ff(a,b,c,d,x[i + 0 as any],7,3614090360);
            d = this.ff(d,a,b,c,x[i + 1 as any],12,3905402710);
            c = this.ff(c,d,a,b,x[i + 2 as any],17,606105819);
            b = this.ff(b,c,d,a,x[i + 3 as any],22,3250441966);
            a = this.ff(a,b,c,d,x[i + 4 as any],7,4118548399);
            d = this.ff(d,a,b,c,x[i + 5 as any],12,1200080426);
            c = this.ff(c,d,a,b,x[i + 6 as any],17,2821735955);
            b = this.ff(b,c,d,a,x[i + 7 as any],22,4249261313);
            a = this.ff(a,b,c,d,x[i + 8 as any],7,1770035416);
            d = this.ff(d,a,b,c,x[i + 9 as any],12,2336552879);
            c = this.ff(c,d,a,b,x[i + 10 as any],17,4294925233);
            b = this.ff(b,c,d,a,x[i + 11 as any],22,2304563134);
            a = this.ff(a,b,c,d,x[i + 12 as any],7,1804603682);
            d = this.ff(d,a,b,c,x[i + 13 as any],12,4254626195);
            c = this.ff(c,d,a,b,x[i + 14 as any],17,2792965006);
            b = this.ff(b,c,d,a,x[i + 15 as any],22,1236535329);
            a = this.gg(a,b,c,d,x[i + 1 as any],5,4129170786);
            d = this.gg(d,a,b,c,x[i + 6 as any],9,3225465664);
            c = this.gg(c,d,a,b,x[i + 11 as any],14,643717713);
            b = this.gg(b,c,d,a,x[i + 0 as any],20,3921069994);
            a = this.gg(a,b,c,d,x[i + 5 as any],5,3593408605);
            d = this.gg(d,a,b,c,x[i + 10 as any],9,38016083);
            c = this.gg(c,d,a,b,x[i + 15 as any],14,3634488961);
            b = this.gg(b,c,d,a,x[i + 4 as any],20,3889429448);
            a = this.gg(a,b,c,d,x[i + 9 as any],5,568446438);
            d = this.gg(d,a,b,c,x[i + 14 as any],9,3275163606);
            c = this.gg(c,d,a,b,x[i + 3 as any],14,4107603335);
            b = this.gg(b,c,d,a,x[i + 8 as any],20,1163531501);
            a = this.gg(a,b,c,d,x[i + 13 as any],5,2850285829);
            d = this.gg(d,a,b,c,x[i + 2 as any],9,4243563512);
            c = this.gg(c,d,a,b,x[i + 7 as any],14,1735328473);
            b = this.gg(b,c,d,a,x[i + 12 as any],20,2368359562);
            a = this.hh(a,b,c,d,x[i + 5 as any],4,4294588738);
            d = this.hh(d,a,b,c,x[i + 8 as any],11,2272392833);
            c = this.hh(c,d,a,b,x[i + 11 as any],16,1839030562);
            b = this.hh(b,c,d,a,x[i + 14 as any],23,4259657740);
            a = this.hh(a,b,c,d,x[i + 1 as any],4,2763975236);
            d = this.hh(d,a,b,c,x[i + 4 as any],11,1272893353);
            c = this.hh(c,d,a,b,x[i + 7 as any],16,4139469664);
            b = this.hh(b,c,d,a,x[i + 10 as any],23,3200236656);
            a = this.hh(a,b,c,d,x[i + 13 as any],4,681279174);
            d = this.hh(d,a,b,c,x[i + 0 as any],11,3936430074);
            c = this.hh(c,d,a,b,x[i + 3 as any],16,3572445317);
            b = this.hh(b,c,d,a,x[i + 6 as any],23,76029189);
            a = this.hh(a,b,c,d,x[i + 9 as any],4,3654602809);
            d = this.hh(d,a,b,c,x[i + 12 as any],11,3873151461);
            c = this.hh(c,d,a,b,x[i + 15 as any],16,530742520);
            b = this.hh(b,c,d,a,x[i + 2 as any],23,3299628645);
            a = this.ii(a,b,c,d,x[i + 0 as any],6,4096336452);
            d = this.ii(d,a,b,c,x[i + 7 as any],10,1126891415);
            c = this.ii(c,d,a,b,x[i + 14 as any],15,2878612391);
            b = this.ii(b,c,d,a,x[i + 5 as any],21,4237533241);
            a = this.ii(a,b,c,d,x[i + 12 as any],6,1700485571);
            d = this.ii(d,a,b,c,x[i + 3 as any],10,2399980690);
            c = this.ii(c,d,a,b,x[i + 10 as any],15,4293915773);
            b = this.ii(b,c,d,a,x[i + 1 as any],21,2240044497);
            a = this.ii(a,b,c,d,x[i + 8 as any],6,1873313359);
            d = this.ii(d,a,b,c,x[i + 15 as any],10,4264355552);
            c = this.ii(c,d,a,b,x[i + 6 as any],15,2734768916);
            b = this.ii(b,c,d,a,x[i + 13 as any],21,1309151649);
            a = this.ii(a,b,c,d,x[i + 4 as any],6,4149444226);
            d = this.ii(d,a,b,c,x[i + 11 as any],10,3174756917);
            c = this.ii(c,d,a,b,x[i + 2 as any],15,718787259);
            b = this.ii(b,c,d,a,x[i + 9 as any],21,3951481745);
            a += olda;
            b += oldb;
            c += oldc;
            d += oldd;
         }
         return[a,b,c,d as any];
      }
   }
