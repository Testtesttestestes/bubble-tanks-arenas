// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.rsa

import { BigInteger } from '../../math/BigInteger';
import { Memory } from '../../util/Memory';
import { Random } from '../prng/Random';

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




   export class RSAKey{
  [key: string]: any;
      
      public dmp1!: BigInteger;
      protected canDecrypt!: boolean;
      public d!: BigInteger;
      public e!: number;
      public dmq1!: BigInteger;
      public n!: BigInteger;
      public p!: BigInteger;
      public q!: BigInteger;
      protected canEncrypt!: boolean;
      public coeff!: BigInteger;
      constructor(N: BigInteger, E: number, D: BigInteger = null, P: BigInteger = null, Q: BigInteger = null, DP: BigInteger = null, DQ: BigInteger = null, C: BigInteger = null){

         this.n = N;
         this.e = E;
         this.d = D;
         this.p = P;
         this.q = Q;
         this.dmp1 = DP;
         this.dmq1 = DQ;
         this.coeff = C;
         this.canEncrypt = this.n != null && this.e != 0;
         this.canDecrypt = this.canEncrypt && this.d != null as any;
      }
      
      protected static bigRandom(bits: number, rnd: Random): BigInteger
      {
         var x: ByteArray = null as any;
         var b: BigInteger = null as any;
         if(bits < 2)
         {
            return BigInteger.nbv(1);
         }
         x = new (ByteArray as any)();
         rnd.nextBytes(x,bits >> 3);
         x.position = 0;
         b = new (BigInteger as any)(x);
         b.primify(bits,1);
         return b;
      }
      
      public static parsePublicKey(N: string, E: string): RSAKey
      {
         return new (RSAKey as any)(new (BigInteger as any)(N,16),parseInt(E,16));
      }
      
      public static generate(B: number, E: string): RSAKey
      {
         var rng: Random = null as any;
         var qs: number = 0;
         var key: RSAKey = null as any;
         var ee: BigInteger = null as any;
         var p1: BigInteger = null as any;
         var q1: BigInteger = null as any;
         var phi: BigInteger = null as any;
         var t: BigInteger = null as any;
         rng = new (Random as any)();
         qs = uint(B >> 1);
         key = new (RSAKey as any)(null,0,null);
         key.e = parseInt(E,16);
         for(ee = new (BigInteger as any)(E,16); true; )
         {
            while(true)
            {
               key.p = RSAKey.bigRandom(B - qs,rng);
               if(key.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && key.p.isProbablePrime(10))
               {
                  break;
               }
            }
            while(true)
            {
               key.q = RSAKey.bigRandom(qs,rng);
               if(key.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && key.q.isProbablePrime(10))
               {
                  break;
               }
            }
            if(key.p.compareTo(key.q) <= 0)
            {
               t = key.p;
               key.p = key.q;
               key.q = t;
            }
            p1 = key.p.subtract(BigInteger.ONE);
            q1 = key.q.subtract(BigInteger.ONE);
            phi = p1.multiply(q1);
            if(phi.gcd(ee).compareTo(BigInteger.ONE) == 0)
            {
               key.n = key.p.multiply(key.q);
               key.d = ee.modInverse(phi);
               key.dmp1 = key.d.mod(p1);
               key.dmq1 = key.d.mod(q1);
               key.coeff = key.q.modInverse(key.p);
               break;
            }
         }
         return key;
      }
      
      public static parsePrivateKey(N: string, E: string, D: string, P: string = null, Q: string = null, DMP1: string = null, DMQ1: string = null, IQMP: string = null): RSAKey
      {
         if(P == null)
         {
            return new (RSAKey as any)(new (BigInteger as any)(N,16),parseInt(E,16),new (BigInteger as any)(D,16));
         }
         return new (RSAKey as any)(new (BigInteger as any)(N,16),parseInt(E,16),new (BigInteger as any)(D,16),new (BigInteger as any)(P,16),new (BigInteger as any)(Q,16),new (BigInteger as any)(DMP1,16),new (BigInteger as any)(DMQ1),new (BigInteger as any)(IQMP));
      }
      
      public verify(src: ByteArray, dst: ByteArray, length: number, pad: Function = null): void
      {
         this._decrypt(doPublic,src,dst,length,pad,1);
      }
      
      public dump(): string
      {
         var s: string = null as any;
         s = "N=" + this.n.toString(16) + "\n" + "E=" + this.e.toString(16) + "\n";
         if(canDecrypt)
         {
            s += "D=" + this.d.toString(16) + "\n";
            if(p != null && this.q != null)
            {
               s += "P=" + p.toString(16) + "\n";
               s += "Q=" + this.q.toString(16) + "\n";
               s += "DMP1=" + this.dmp1.toString(16) + "\n";
               s += "DMQ1=" + this.dmq1.toString(16) + "\n";
               s += "IQMP=" + this.coeff.toString(16) + "\n";
            }
         }
         return s;
      }
      
      protected doPrivate2(x: BigInteger): BigInteger
      {
         var xp: BigInteger = null as any;
         var xq: BigInteger = null as any;
         var r: BigInteger = null as any;
         if(p == null && this.q == null)
         {
            return x.modPow(d,this.n);
         }
         xp = x.mod(this.p).modPow(dmp1,this.p);
         xq = x.mod(this.q).modPow(dmq1,this.q);
         while(xp.compareTo(xq) < 0)
         {
            xp = xp.add(this.p);
         }
         return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
      }
      
      public decrypt(src: ByteArray, dst: ByteArray, length: number, pad: Function = null): void
      {
         this._decrypt(doPrivate2,src,dst,length,pad,2);
      }
      
      private _decrypt(op: Function, src: ByteArray, dst: ByteArray, length: number, pad: Function, padType: number): void
      {
         var bl: number = 0;
         var end: number = 0;
         var block: BigInteger = null as any;
         var chunk: BigInteger = null as any;
         var b: ByteArray = null as any;
         if(pad == null)
         {
            pad = this.pkcs1unpad;
         }
         if(src.position >= src.length)
         {
            src.position = 0;
         }
         bl = this.getBlockSize();
         end = src.position + length;
         while(src.position < end)
         {
            block = new (BigInteger as any)(src,length);
            chunk = op(block);
            b = pad(chunk,bl);
            dst.writeBytes(b);
         }
      }
      
      protected doPublic(x: BigInteger): BigInteger
      {
         return x.modPowInt(e,this.n);
      }
      
      public dispose(): void
      {
         this.e = 0;
         this.n.dispose();
         this.n = null as any;
         Memory.gc();
      }
      
      private _encrypt(op: Function, src: ByteArray, dst: ByteArray, length: number, pad: Function, padType: number): void
      {
         var bl: number = 0;
         var end: number = 0;
         var block: BigInteger = null as any;
         var chunk: BigInteger = null as any;
         if(pad == null)
         {
            pad = this.pkcs1pad;
         }
         if(src.position >= src.length)
         {
            src.position = 0;
         }
         bl = this.getBlockSize();
         end = src.position + length;
         while(src.position < end)
         {
            block = new (BigInteger as any)(pad(src,end,bl,padType),bl);
            chunk = op(block);
            chunk.toArray(dst);
         }
      }
      
      private rawpad(src: ByteArray, end: number, n: number): ByteArray
      {
         return src;
      }
      
      public encrypt(src: ByteArray, dst: ByteArray, length: number, pad: Function = null): void
      {
         this._encrypt(doPublic,src,dst,length,pad,2);
      }
      
      private pkcs1pad(src: ByteArray, end: number, n: number, type: number = 2): ByteArray
      {
         var out: ByteArray = null as any;
         var p: number = 0;
         var i: number = 0;
         var rng: Random = null as any;
         var x: number = 0;
         out = new (ByteArray as any)();
         p = src.position;
         end = Math.min(end,src.length,p + n - 11);
         src.position = end;
         i = end - 1;
         while(i >= p && n > 11)
         {
            out[--n as any] = src[i-- as any];
         }
         out[--n as any] = 0;
         rng = new (Random as any)();
         while(n > 2)
         {
            for(x = 0; x == 0; )
            {
               x = type == 2 ? rng.nextByte() : 255;
            }
            out[--n as any] = x;
         }
         out[--n as any] = type;
         out[--n as any] = 0;
         return out;
      }
      
      private pkcs1unpad(src: BigInteger, n: number, type: number = 2): ByteArray
      {
         var b: ByteArray = null as any;
         var out: ByteArray = null as any;
         var i: number = 0;
         b = src.toByteArray();
         out = new (ByteArray as any)();
         i = 0;
         while(i < b.length && b[i as any] == 0)
         {
            i++;
         }
         if(b.length - i != n - 1 || b[i as any] > 2)
         {
            console.log("PKCS#1 unpad: i=" + i + ", expected b[i as any]==[0,1,2], got b[i as any]=" + b[i as any].toString(16));
            return null;
         }
         i++;
         while(b[i as any] != 0)
         {
            if(++i >= b.length)
            {
               console.log("PKCS#1 unpad: i=" + i + ", b[i-1 as any]!=0 (=" + b[i - 1 as any].toString(16) + ")");
               return null;
            }
         }
         while(++i < b.length)
         {
            out.writeByte(b[i as any]);
         }
         out.position = 0;
         return out;
      }
      
      public getBlockSize(): number
      {
         return(this.n.bitLength() + 7) / 8;
      }
      
      public toString(): string
      {
         return "rsa";
      }
      
      public sign(src: ByteArray, dst: ByteArray, length: number, pad: Function = null): void
      {
         this._encrypt(doPrivate2,src,dst,length,pad,1);
      }
      
      protected doPrivate(x: BigInteger): BigInteger
      {
         var xp: BigInteger = null as any;
         var xq: BigInteger = null as any;
         if(p == null || this.q == null)
         {
            return x.modPow(d,this.n);
         }
         xp = x.mod(this.p).modPow(dmp1,this.p);
         xq = x.mod(this.q).modPow(dmq1,this.q);
         while(xp.compareTo(xq) < 0)
         {
            xp = xp.add(this.p);
         }
         return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
      }
   }
