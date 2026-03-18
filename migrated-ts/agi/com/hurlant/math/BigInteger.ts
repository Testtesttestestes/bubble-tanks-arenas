// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.math

import { Random } from '../crypto/prng/Random';
import { Hex } from '../util/Hex';
import { Memory } from '../util/Memory';
import { BarrettReduction } from './BarrettReduction';
import { ClassicReduction } from './ClassicReduction';
import { IReduction } from './IReduction';
import { MontgomeryReduction } from './MontgomeryReduction';
import { NullReduction } from './NullReduction';

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

   export class BigInteger{
  [key: string]: any;
      
      public static readonly DB: number = 30;
      public static readonly DV: number = 1 << BigInteger.DB;
      public static readonly DM: number = BigInteger.DV - 1;
      public static readonly BI_FP: number = 52;
      public static readonly FV: number = Math.pow(2,BigInteger.BI_FP);
      public static readonly F1: number = BigInteger.BI_FP - BigInteger.DB;
      public static readonly F2: number = 2 * BigInteger.DB - BigInteger.BI_FP;
      public static readonly ZERO: BigInteger = BigInteger.nbv(0);
      public static readonly ONE: BigInteger = BigInteger.nbv(1);
      public static readonly lowprimes: any = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509];
      public static readonly lplim: number = (1 << 26) / BigInteger.lowprimes[BigInteger.lowprimes.length - 1 as any];
      public a!: any;
      public s!: number;
      public t!: number;
      constructor(value: any = null, radix: number = 0){
         var array: ByteArray = null as any;
         var length: number = 0;

         this.a = new (Array as any)();
         if(typeof value === "string")
         {
            value = Hex.toArray(value);
            radix = 0;
         }
         if(value instanceof ByteArray)
         {
            array = value  as unknown as ByteArray;
            length = int(radix || int(array.length - array.position));
            this.fromArray(array,length);
         }
      }
      
      public static nbv(value: number): BigInteger
      {
         var bn: BigInteger = null as any;
         bn = new (BigInteger as any)();
         bn.fromInt(value);
         return bn as any;
      }
      
      public clearBit(n: number): BigInteger
      {
         return this.changeBit(n,this.op_andnot) as any;
      }
      
      public negate(): BigInteger
      {
         var r: BigInteger = null as any;
         r = this.nbi();
         BigInteger.ZERO.subTo(this,r);
         return r as any;
      }
      
      public andNot(a: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         r = new (BigInteger as any)();
         this.bitwiseTo(a,op_andnot,r);
         return r as any;
      }
      
      public modPow(e: BigInteger, m: BigInteger): BigInteger
      {
         var i: number = 0;
         var k: number = 0;
         var r: BigInteger = null as any;
         var z: IReduction = null as any;
         var g: any = null as any;
         var n: number = 0;
         var k1: number = 0;
         var km: number = 0;
         var j: number = 0;
         var w: number = 0;
         var is1: boolean = false;
         var r2: BigInteger = null as any;
         var t: BigInteger = null as any;
         var g2: BigInteger = null as any;
         i = e.bitLength();
         r = BigInteger.nbv(1);
         if(i <= 0)
         {
            return r as any;
         }
         if(i < 18)
         {
            k = 1;
         }
         else if(i < 48)
         {
            k = 3;
         }
         else if(i < 144)
         {
            k = 4;
         }
         else if(i < 768)
         {
            k = 5;
         }
         else
         {
            k = 6;
         }
         if(i < 8)
         {
            z = new (ClassicReduction as any)(m);
         }
         else if(m.isEven())
         {
            z = new (BarrettReduction as any)(m);
         }
         else
         {
            z = new (MontgomeryReduction as any)(m);
         }
         g = [];
         n = 3;
         k1 = k - 1;
         km = (1 << k) - 1;
         g[1] = z.convert(this);
         if(k > 1)
         {
            g2 = new (BigInteger as any)();
            z.sqrTo(g[1],g2);
            while(n <= km)
            {
               g[n as any] = new (BigInteger as any)();
               z.mulTo(g2,g[n - 2 as any],g[n as any]);
               n += 2;
            }
         }
         j = e.t - 1;
         is1 = true;
         r2 = new (BigInteger as any)();
         i = this.nbits(e.a[j as any]) - 1;
         while(j >= 0)
         {
            if(i >= k1)
            {
               w = e.a[j as any] >> i - k1 & km;
            }
            else
            {
               w = (e.a[j as any] & (1 << i + 1) - 1) << k1 - i;
               if(j > 0)
               {
                  w |= e.a[j - 1 as any] >> BigInteger.DB + i - k1;
               }
            }
            n = k;
            while((w & 1) == 0)
            {
               w >>= 1;
               n--;
            }
            i = i - n;
            if(i < 0)
            {
               i += BigInteger.DB;
               j--;
            }
            if(is1)
            {
               g[w as any].copyTo(r);
               is1 = false;
            }
            else
            {
               while(n > 1)
               {
                  z.sqrTo(r,r2);
                  z.sqrTo(r2,r);
                  n -= 2;
               }
               if(n > 0)
               {
                  z.sqrTo(r,r2);
               }
               else
               {
                  t = r;
                  r = r2;
                  r2 = t;
               }
               z.mulTo(r2,g[w as any],r);
            }
            while(j >= 0 && (e.a[j as any] & 1 << i) == 0)
            {
               z.sqrTo(r,r2);
               t = r;
               r = r2;
               r2 = t;
               if(--i < 0)
               {
                  i = BigInteger.DB - 1;
                  j--;
               }
            }
         }
         return z.revert(r) as any;
      }
      
      public isProbablePrime(t: number): boolean
      {
         var i: number = 0;
         var x: BigInteger = null as any;
         var m: number = 0;
         var j: number = 0;
         x = this.abs();
         if(x.t == 1 && x.a[0] <= BigInteger.lowprimes[BigInteger.lowprimes.length - 1 as any])
         {
            for(i = 0; i < BigInteger.lowprimes.length; i++)
            {
               if(x[0] == BigInteger.lowprimes[i as any])
               {
                  return true as any;
               }
            }
            return false as any;
         }
         if(x.isEven())
         {
            return false as any;
         }
         i = 1;
         while(i < BigInteger.lowprimes.length)
         {
            m = int(BigInteger.lowprimes[i as any]);
            j = i + 1;
            while(j < BigInteger.lowprimes.length && m < BigInteger.lplim)
            {
               m *= BigInteger.lowprimes[j++ as any];
            }
            m = x.modInt(m);
            while(i < j)
            {
               if(m % BigInteger.lowprimes[i++ as any] == 0)
               {
                  return false as any;
               }
            }
         }
         return x.millerRabin(t) as any;
      }
      
      private op_or(x: number, y: number): number
      {
         return x | y as any;
      }
      
      public mod(v: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         r = this.nbi();
         this.abs().divRemTo(v,null,r);
         if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
         {
            v.subTo(r,r);
         }
         return r as any;
      }
      
      protected addTo(a: BigInteger, r: BigInteger): void
      {
         var i: number = 0;
         var c: number = 0;
         var m: number = 0;
         i = 0;
         c = 0;
         m = Math.min(a.t,this.t);
         while(i < m)
         {
            c += this.a[i as any] + a.a[i as any];
            r.a[i++ as any] = c & BigInteger.DM;
            c >>= BigInteger.DB;
         }
         if(a.t < this.t)
         {
            c += a.s;
            while(i < this.t)
            {
               c += this.a[i as any];
               r.a[i++ as any] = c & BigInteger.DM;
               c >>= BigInteger.DB;
            }
            c += this.s;
         }
         else
         {
            c += this.s;
            while(i < a.t)
            {
               c += a.a[i as any];
               r.a[i++ as any] = c & BigInteger.DM;
               c >>= BigInteger.DB;
            }
            c += a.s;
         }
         r.s = c < 0 ? -1 : 0;
         if(c > 0)
         {
            r.a[i++ as any] = c;
         }
         else if(c < -1)
         {
            r.a[i++ as any] = BigInteger.DV + c;
         }
         r.t = i;
         r.clamp();
      }
      
      protected bitwiseTo(a: BigInteger, op: Function, r: BigInteger): void
      {
         var i: number = 0;
         var f: number = 0;
         var m: number = 0;
         m = Math.min(a.t,this.t);
         for(i = 0; i < m; i++)
         {
            r.a[i as any] = op(this.a[i as any],a.a[i as any]);
         }
         if(a.t < this.t)
         {
            f = a.s & BigInteger.DM;
            for(i = m; i < this.t; i++)
            {
               r.a[i as any] = op(this.a[i as any],f);
            }
            r.t = this.t;
         }
         else
         {
            f = s & BigInteger.DM;
            for(i = m; i < a.t; i++)
            {
               r.a[i as any] = op(f,a.a[i as any]);
            }
            r.t = a.t;
         }
         r.s = op(s,a.s);
         r.clamp();
      }
      
      protected modInt(n: number): number
      {
         var d: number = 0;
         var r: number = 0;
         var i: number = 0;
         if(n <= 0)
         {
            return 0 as any;
         }
         d = BigInteger.DV % n;
         r = this.s < 0 ? int(n - 1) : 0;
         if(t > 0)
         {
            if(d == 0)
            {
               r = this.a[0] % n;
            }
            else
            {
               for(i = t - 1; i >= 0; i--)
               {
                  r = (d * r + this.a[i as any]) % n;
               }
            }
         }
         return r as any;
      }
      
      protected chunkSize(r: number): number
      {
         return Math.floor(Math.LN2 * BigInteger.DB / Math.log(r)) as any;
      }
      
      public dAddOffset(n: number, w: number): void
      {
         while(t <= w)
         {
            this.a[t++ as any] = 0;
         }
         this.a[w as any] += n;
         while(a[w as any] >= BigInteger.DV)
         {
            a[w as any] -= BigInteger.DV;
            if(++w >= this.t)
            {
               a[this.t++ as any] = 0;
            }
            ++a[w as any];
         }
      }
      
      public lShiftTo(n: number, r: BigInteger): void
      {
         var bs: number = 0;
         var cbs: number = 0;
         var bm: number = 0;
         var ds: number = 0;
         var c: number = 0;
         var i: number = 0;
         bs = n % BigInteger.DB;
         cbs = BigInteger.DB - bs;
         bm = (1 << cbs) - 1;
         ds = n / BigInteger.DB;
         c = this.s << bs & BigInteger.DM;
         for(i = this.t - 1; i >= 0; i--)
         {
            r.a[i + ds + 1 as any] = this.a[i as any] >> cbs | c;
            c = (this.a[i as any] & bm) << bs;
         }
         for(i = ds - 1; i >= 0; i--)
         {
            r.a[i as any] = 0;
         }
         r.a[ds as any] = c;
         r.t = this.t + ds + 1;
         r.s = this.s;
         r.clamp();
      }
      
      public getLowestSetBit(): number
      {
         var i: number = 0;
         for(i = 0; i < this.t; i++)
         {
            if(a[i as any] != 0)
            {
               return i * BigInteger.DB + this.lbit(a[i as any]) as any;
            }
         }
         if(s < 0)
         {
            return this.t * BigInteger.DB as any;
         }
         return -1 as any;
      }
      
      public subtract(a: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         r = new (BigInteger as any)();
         this.subTo(a,r);
         return r as any;
      }
      
      public primify(bits: number, t: number): void
      {
         if(!this.testBit(bits - 1))
         {
            this.bitwiseTo(BigInteger.ONE.shiftLeft(bits - 1),op_or,this);
         }
         if(this.isEven())
         {
            this.dAddOffset(1,0);
         }
         while(!this.isProbablePrime(t))
         {
            for(this.dAddOffset(2,0); this.bitLength() > bits; )
            {
               this.subTo(BigInteger.ONE.shiftLeft(bits - 1),this);
            }
         }
      }
      
      public gcd(a: BigInteger): BigInteger
      {
         var x: BigInteger = null as any;
         var y: BigInteger = null as any;
         var i: number = 0;
         var g: number = 0;
         var t: BigInteger = null as any;
         x = this.s < 0 ? this.negate() : this.clone();
         y = a.s < 0 ? a.negate() : a.clone();
         if(x.compareTo(y) < 0)
         {
            t = x;
            x = y;
            y = t;
         }
         i = x.getLowestSetBit();
         g = y.getLowestSetBit();
         if(g < 0)
         {
            return x as any;
         }
         if(i < g)
         {
            g = i;
         }
         if(g > 0)
         {
            x.rShiftTo(g,x);
            y.rShiftTo(g,y);
         }
         while(x.sigNum() > 0)
         {
            i = x.getLowestSetBit();
            if(i > 0)
            {
               x.rShiftTo(i,x);
            }
            i = y.getLowestSetBit();
            if(i > 0)
            {
               y.rShiftTo(i,y);
            }
            if(x.compareTo(y) >= 0)
            {
               x.subTo(y,x);
               x.rShiftTo(1,x);
            }
            else
            {
               y.subTo(x,y);
               y.rShiftTo(1,y);
            }
         }
         if(g > 0)
         {
            y.lShiftTo(g,y);
         }
         return y as any;
      }
      
      public multiplyLowerTo(a: BigInteger, n: number, r: BigInteger): void
      {
         var i: number = 0;
         var j: number = 0;
         i = Math.min(this.t + a.t,n);
         r.s = 0;
         r.t = i;
         while(i > 0)
         {
            r.a[--i as any] = 0;
         }
         for(j = r.t - this.t; i < j; i++)
         {
            r.a[i + this.t as any] = this.am(0,a.a[i as any],r,i,0,this.t);
         }
         for(j = Math.min(a.t,n); i < j; i++)
         {
            this.am(0,a.a[i],r,i,0,n - i);
         }
         r.clamp();
      }
      
      public modPowInt(e: number, m: BigInteger): BigInteger
      {
         var z: IReduction = null as any;
         if(e < 256 || m.isEven())
         {
            z = new (ClassicReduction as any)(m);
         }
         else
         {
            z = new (MontgomeryReduction as any)(m);
         }
         return this.exp(e,z) as any;
      }
      
      public intAt(str: string, index: number): number
      {
         return parseInt(str.charAt(index),36) as any;
      }
      
      public testBit(n: number): boolean
      {
         var j: number = 0;
         j = Math.floor(n / BigInteger.DB);
         if(j >= this.t)
         {
            return this.s != 0 as any;
         }
         return(this.a[j] & 1 << n % BigInteger.DB) != 0 as any;
      }
      
      public exp(e: number, z: IReduction): BigInteger
      {
         var r: BigInteger = null as any;
         var r2: BigInteger = null as any;
         var g: BigInteger = null as any;
         var i: number = 0;
         var t: BigInteger = null as any;
         if(e > 4294967295 || e < 1)
         {
            return BigInteger.ONE as any;
         }
         r = this.nbi();
         r2 = this.nbi();
         g = z.convert(this);
         i = this.nbits(e) - 1;
         g.copyTo(r);
         while(--i >= 0)
         {
            z.sqrTo(r,r2);
            if((e & 1 << i) > 0)
            {
               z.mulTo(r2,g,r);
            }
            else
            {
               t = r;
               r = r2;
               r2 = t;
            }
         }
         return z.revert(r) as any;
      }
      
      public toArray(array: ByteArray): number
      {
         var k: number = 0;
         var km: number = 0;
         var d: number = 0;
         var i: number = 0;
         var p: number = 0;
         var m: boolean = false;
         var c: number = 0;
         k = 8;
         km = (1 << 8) - 1;
         d = 0;
         i = this.t;
         p = BigInteger.DB - i * BigInteger.DB % k;
         m = false;
         c = 0;
         if(i-- > 0)
         {
            if(p < BigInteger.DB && (d = this.a[i as any] >> p) > 0)
            {
               m = true;
               array.writeByte(d);
               c++;
            }
            while(i >= 0)
            {
               if(p < k)
               {
                  d = (this.a[i as any] & (1 << p) - 1) << k - p;
                  d |= this.a[--i as any] >> (p = p + (BigInteger.DB - k));
               }
               else
               {
                  d = this.a[i as any] >> (p = p - k) & km;
                  if(p <= 0)
                  {
                     p += BigInteger.DB;
                     i--;
                  }
               }
               if(d > 0)
               {
                  m = true;
               }
               if(m)
               {
                  array.writeByte(d);
                  c++;
               }
            }
         }
         return c as any;
      }
      
      public dispose(): void
      {
         var r: Random = null as any;
         var i: number = 0;
         r = new (Random as any)();
         for(i = 0; i < this.a.length; i++)
         {
            this.a[i as any] = r.nextByte();
            delete this.a[i as any];
         }
         this.a = null as any;
         this.t = 0;
         this.s = 0;
         Memory.gc();
      }
      
      private lbit(x: number): number
      {
         var r: number = 0;
         if(x == 0)
         {
            return -1 as any;
         }
         r = 0;
         if((x & 0xFFFF) == 0)
         {
            x >>= 16;
            r += 16;
         }
         if((x & 0xFF) == 0)
         {
            x >>= 8;
            r += 8;
         }
         if((x & 0x0F) == 0)
         {
            x >>= 4;
            r += 4;
         }
         if((x & 3) == 0)
         {
            x >>= 2;
            r += 2;
         }
         if((x & 1) == 0)
         {
            r++;
         }
         return r as any;
      }
      
      public divRemTo(m: BigInteger, q: BigInteger = null, r: BigInteger = null): void
      {
         var pm: BigInteger = null as any;
         var pt: BigInteger = null as any;
         var y: BigInteger = null as any;
         var ts: number = 0;
         var ms: number = 0;
         var nsh: number = 0;
         var ys: number = 0;
         var y0: number = 0;
         var yt: number = NaN;
         var d1: number = NaN;
         var d2: number = NaN;
         var e: number = NaN;
         var i: number = 0;
         var j: number = 0;
         var t: BigInteger = null as any;
         var qd: number = 0;
         pm = m.abs();
         if(pm.t <= 0)
         {
            return;
         }
         pt = this.abs();
         if(pt.t < pm.t)
         {
            if(q != null)
            {
               q.fromInt(0);
            }
            if(r != null)
            {
               this.copyTo(r);
            }
            return;
         }
         if(r == null)
         {
            r = this.nbi();
         }
         y = this.nbi();
         ts = this.s;
         ms = m.s;
         nsh = BigInteger.DB - this.nbits(pm.a[pm.t - 1 as any]);
         if(nsh > 0)
         {
            pm.lShiftTo(nsh,y);
            pt.lShiftTo(nsh,r);
         }
         else
         {
            pm.copyTo(y);
            pt.copyTo(r);
         }
         ys = y.t;
         y0 = int(y.a[ys - 1 as any]);
         if(y0 == 0)
         {
            return;
         }
         yt = y0 * (1 << BigInteger.F1) + (ys > 1 ? y.a[ys - 2 as any] >> F2 : 0);
         d1 = BigInteger.FV / yt;
         d2 = (1 << BigInteger.F1) / yt;
         e = 1 << BigInteger.F2;
         i = r.t;
         j = i - ys;
         t = q == null ? this.nbi() : q;
         y.dlShiftTo(j,t);
         if(r.compareTo(t) >= 0)
         {
            r.a[r.t++ as any] = 1;
            r.subTo(t,r);
         }
         BigInteger.ONE.dlShiftTo(ys,t);
         for(t.subTo(y,y); y.t < ys; )
         {
            y[++y.t,0 as any];
         }
         while(--j >= 0)
         {
            qd = r.a[--i as any] == y0 ? BigInteger.DM : int(Number(r.a[i as any]) * d1 + (Number(r.a[i - 1 as any]) + e) * d2);
            if((r.a[i as any] = r.a[i as any] + y.am(0,qd,r,j,0,ys)) < qd)
            {
               y.dlShiftTo(j,t);
               r.subTo(t,r);
               while(r.a[i as any] < --qd)
               {
                  r.subTo(t,r);
               }
            }
         }
         if(q != null)
         {
            r.drShiftTo(ys,q);
            if(ts != ms)
            {
               BigInteger.ZERO.subTo(q,q);
            }
         }
         r.t = ys;
         r.clamp();
         if(nsh > 0)
         {
            r.rShiftTo(nsh,r);
         }
         if(ts < 0)
         {
            BigInteger.ZERO.subTo(r,r);
         }
      }
      
      public remainder(a: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         r = new (BigInteger as any)();
         this.divRemTo(a,null,r);
         return r as any;
      }
      
      public divide(a: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         r = new (BigInteger as any)();
         this.divRemTo(a,r,null);
         return r as any;
      }
      
      public divideAndRemainder(a: BigInteger): any
      {
         var q: BigInteger = null as any;
         var r: BigInteger = null as any;
         q = new (BigInteger as any)();
         r = new (BigInteger as any)();
         this.divRemTo(a,q,r);
         return[q,r as any] as any;
      }
      
      public valueOf(): number
      {
         var coef: number = NaN;
         var value: number = NaN;
         var i: number = 0;
         coef = 1;
         value = 0;
         for(i = 0; i < this.t; i++)
         {
            value += this.a[i as any] * coef;
            coef *= BigInteger.DV;
         }
         return value as any;
      }
      
      public shiftLeft(n: number): BigInteger
      {
         var r: BigInteger = null as any;
         r = new (BigInteger as any)();
         if(n < 0)
         {
            this.rShiftTo(-n,r);
         }
         else
         {
            this.lShiftTo(n,r);
         }
         return r as any;
      }
      
      public multiply(a: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         r = new (BigInteger as any)();
         this.multiplyTo(a,r);
         return r as any;
      }
      
      public am(i: number, x: number, w: BigInteger, j: number, c: number, n: number): number
      {
         var xl: number = 0;
         var xh: number = 0;
         var l: number = 0;
         var h: number = 0;
         var m: number = 0;
         xl = x & 0x7FFF;
         xh = x >> 15;
         while(--n >= 0)
         {
            l = this.a[i as any] & 0x7FFF;
            h = this.a[i++ as any] >> 15;
            m = xh * l + h * xl;
            l = xl * l + ((m & 0x7FFF) << 15) + w.a[j as any] + (c & 0x3FFFFFFF);
            c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
            w.a[j++ as any] = l & 0x3FFFFFFF;
         }
         return c as any;
      }
      
      public drShiftTo(n: number, r: BigInteger): void
      {
         var i: number = 0;
         for(i = n; i < this.t; i++)
         {
            r.a[i - n as any] = this.a[i as any];
         }
         r.t = Math.max(this.t - n,0);
         r.s = this.s;
      }
      
      public add(a: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         r = new (BigInteger as any)();
         this.addTo(a,r);
         return r as any;
      }
      
      public multiplyUpperTo(a: BigInteger, n: number, r: BigInteger): void
      {
         var i: number = 0;
         n--;
         i = r.t = this.t + a.t - n;
         r.s = 0;
         while(--i >= 0)
         {
            r.a[i as any] = 0;
         }
         for(i = Math.max(n - t,0); i < a.t; i++)
         {
            r.a[this.t + i - n as any] = this.am(n - i,a.a[i as any],r,0,0,this.t + i - n);
         }
         r.clamp();
         r.drShiftTo(1,r);
      }
      
      protected nbi(): any
      {
         return new (BigInteger as any)() as any;
      }
      
      protected millerRabin(t: number): boolean
      {
         var n1: BigInteger = null as any;
         var k: number = 0;
         var r: BigInteger = null as any;
         var a: BigInteger = null as any;
         var i: number = 0;
         var y: BigInteger = null as any;
         var j: number = 0;
         n1 = this.subtract(BigInteger.ONE);
         k = n1.getLowestSetBit();
         if(k <= 0)
         {
            return false as any;
         }
         r = n1.shiftRight(k);
         t = t + 1 >> 1;
         if(t > BigInteger.lowprimes.length)
         {
            t = int(BigInteger.lowprimes.length);
         }
         a = new (BigInteger as any)();
         for(i = 0; i < t; i++)
         {
            a.fromInt(BigInteger.lowprimes[i as any]);
            y = a.modPow(r,this);
            if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0)
            {
               j = 1;
               while(j++ < k && y.compareTo(n1) != 0)
               {
                  y = y.modPowInt(2,this);
                  if(y.compareTo(BigInteger.ONE) == 0)
                  {
                     return false as any;
                  }
               }
               if(y.compareTo(n1) != 0)
               {
                  return false as any;
               }
            }
         }
         return true as any;
      }
      
      public dMultiply(n: number): void
      {
         this.a[this.t as any] = this.am(0,n - 1,this,0,0,this.t);
         ++this.t;
         this.clamp();
      }
      
      private op_andnot(x: number, y: number): number
      {
         return x & ~y as any;
      }
      
      public clamp(): void
      {
         var c: number = 0;
         c = s & BigInteger.DM;
         while(t > 0 && this.a[t - 1 as any] == c)
         {
            --t;
         }
      }
      
      public invDigit(): number
      {
         var x: number = 0;
         var y: number = 0;
         if(t < 1)
         {
            return 0 as any;
         }
         x = int(this.a[0]);
         if((x & 1) == 0)
         {
            return 0 as any;
         }
         y = x & 3;
         y = y * (2 - (x & 0x0F) * y) & 0x0F;
         y = y * (2 - (x & 0xFF) * y) & 0xFF;
         y = y * (2 - ((x & 0xFFFF) * y & 0xFFFF)) & 0xFFFF;
         y = y * (2 - x * y % BigInteger.DV) % BigInteger.DV;
         return y > 0 ? int(BigInteger.DV - y) : int(-y) as any;
      }
      
      protected changeBit(n: number, op: Function): BigInteger
      {
         var r: BigInteger = null as any;
         r = BigInteger.ONE.shiftLeft(n);
         this.bitwiseTo(r,op,r);
         return r as any;
      }
      
      public equals(a: BigInteger): boolean
      {
         return this.compareTo(a) == 0 as any;
      }
      
      public compareTo(v: BigInteger): number
      {
         var r: number = 0;
         var i: number = 0;
         r = this.s - v.s;
         if(r != 0)
         {
            return r as any;
         }
         i = this.t;
         r = i - v.t;
         if(r != 0)
         {
            return r as any;
         }
         while(--i >= 0)
         {
            r = this.a[i as any] - v.a[i as any];
            if(r != 0)
            {
               return r as any;
            }
         }
         return 0 as any;
      }
      
      public shiftRight(n: number): BigInteger
      {
         var r: BigInteger = null as any;
         r = new (BigInteger as any)();
         if(n < 0)
         {
            this.lShiftTo(-n,r);
         }
         else
         {
            this.rShiftTo(n,r);
         }
         return r as any;
      }
      
      public multiplyTo(v: BigInteger, r: BigInteger): void
      {
         var x: BigInteger = null as any;
         var y: BigInteger = null as any;
         var i: number = 0;
         x = this.abs();
         y = v.abs();
         i = x.t;
         r.t = i + y.t;
         while(--i >= 0)
         {
            r.a[i as any] = 0;
         }
         for(i = 0; i < y.t; i++)
         {
            r.a[i + x.t as any] = x.am(0,y.a[i as any],r,i,0,x.t);
         }
         r.s = 0;
         r.clamp();
         if(s != v.s)
         {
            BigInteger.ZERO.subTo(r,r);
         }
      }
      
      public bitCount(): number
      {
         var r: number = 0;
         var x: number = 0;
         var i: number = 0;
         r = 0;
         x = s & BigInteger.DM;
         for(i = 0; i < this.t; i++)
         {
            r += this.cbit(this.a[i as any] ^ x);
         }
         return r as any;
      }
      
      public byteValue(): number
      {
         return this.t == 0 ? s : this.a[0] << 24 >> 24 as any;
      }
      
      private cbit(x: number): number
      {
         var r: number = 0;
         for(r = 0; x != 0; )
         {
            x &= x - 1;
            r++;
         }
         return r as any;
      }
      
      public rShiftTo(n: number, r: BigInteger): void
      {
         var ds: number = 0;
         var bs: number = 0;
         var cbs: number = 0;
         var bm: number = 0;
         var i: number = 0;
         r.s = this.s;
         ds = n / BigInteger.DB;
         if(ds >= this.t)
         {
            r.t = 0;
            return;
         }
         bs = n % BigInteger.DB;
         cbs = BigInteger.DB - bs;
         bm = (1 << bs) - 1;
         r.a[0] = this.a[ds as any] >> bs;
         for(i = ds + 1; i < this.t; i++)
         {
            r.a[i - ds - 1 as any] |= (this.a[i as any] & bm) << cbs;
            r.a[i - ds as any] = this.a[i as any] >> bs;
         }
         if(bs > 0)
         {
            r.a[this.t - ds - 1 as any] |= (s & bm) << cbs;
         }
         r.t = this.t - ds;
         r.clamp();
      }
      
      public modInverse(m: BigInteger): BigInteger
      {
         var ac: boolean = false;
         var u: BigInteger = null as any;
         var v: BigInteger = null as any;
         var a: BigInteger = null as any;
         var b: BigInteger = null as any;
         var c: BigInteger = null as any;
         var d: BigInteger = null as any;
         ac = m.isEven();
         if(this.isEven() && ac || m.sigNum() == 0)
         {
            return BigInteger.ZERO as any;
         }
         u = m.clone();
         v = this.clone();
         a = BigInteger.nbv(1);
         b = BigInteger.nbv(0);
         c = BigInteger.nbv(0);
         d = BigInteger.nbv(1);
         while(u.sigNum() != 0)
         {
            while(u.isEven())
            {
               u.rShiftTo(1,u);
               if(ac)
               {
                  if(!a.isEven() || !b.isEven())
                  {
                     a.addTo(this,a);
                     b.subTo(m,b);
                  }
                  a.rShiftTo(1,a);
               }
               else if(!b.isEven())
               {
                  b.subTo(m,b);
               }
               b.rShiftTo(1,b);
            }
            while(v.isEven())
            {
               v.rShiftTo(1,v);
               if(ac)
               {
                  if(!c.isEven() || !d.isEven())
                  {
                     c.addTo(this,c);
                     d.subTo(m,d);
                  }
                  c.rShiftTo(1,c);
               }
               else if(!d.isEven())
               {
                  d.subTo(m,d);
               }
               d.rShiftTo(1,d);
            }
            if(u.compareTo(v) >= 0)
            {
               u.subTo(v,u);
               if(ac)
               {
                  a.subTo(c,a);
               }
               b.subTo(d,b);
            }
            else
            {
               v.subTo(u,v);
               if(ac)
               {
                  c.subTo(a,c);
               }
               d.subTo(b,d);
            }
         }
         if(v.compareTo(BigInteger.ONE) != 0)
         {
            return BigInteger.ZERO as any;
         }
         if(d.compareTo(m) >= 0)
         {
            return d.subtract(m) as any;
         }
         if(d.sigNum() < 0)
         {
            d.addTo(m,d);
            if(d.sigNum() < 0)
            {
               return d.add(m) as any;
            }
            return d as any;
         }
         return d as any;
      }
      
      public fromArray(value: ByteArray, length: number): void
      {
         var p: number = 0;
         var i: number = 0;
         var sh: number = 0;
         var k: number = 0;
         var x: number = 0;
         p = int(value.position);
         i = p + length;
         sh = 0;
         k = 8;
         this.t = 0;
         this.s = 0;
         while(--i >= p)
         {
            x = i < value.length ? int(value[i as any]) : 0;
            if(sh == 0)
            {
               this.a[this.t++ as any] = x;
            }
            else if(sh + k > BigInteger.DB)
            {
               this.a[this.t - 1 as any] |= (x & (1 << BigInteger.DB - sh) - 1) << sh;
               this.a[this.t++ as any] = x >> BigInteger.DB - sh;
            }
            else
            {
               this.a[this.t - 1 as any] |= x << sh;
            }
            sh += k;
            if(sh >= BigInteger.DB)
            {
               sh -= BigInteger.DB;
            }
         }
         this.clamp();
         value.position = Math.min(p + length,value.length);
      }
      
      public copyTo(r: BigInteger): void
      {
         var i: number = 0;
         for(i = this.t - 1; i >= 0; i--)
         {
            r.a[i as any] = this.a[i as any];
         }
         r.t = this.t;
         r.s = this.s;
      }
      
      public intValue(): number
      {
         if(s < 0)
         {
            if(t == 1)
            {
               return this.a[0] - BigInteger.DV as any;
            }
            if(t == 0)
            {
               return -1 as any;
            }
         }
         else
         {
            if(t == 1)
            {
               return this.a[0] as any;
            }
            if(t == 0)
            {
               return 0 as any;
            }
         }
         return(this.a[1] & (1 << 32 - BigInteger.DB) - 1) << BigInteger.DB | a[0] as any;
      }
      
      public min(a: BigInteger): BigInteger
      {
         return this.compareTo(a) < 0 ? this : a as any;
      }
      
      public bitLength(): number
      {
         if(t <= 0)
         {
            return 0 as any;
         }
         return BigInteger.DB * (this.t - 1) + this.nbits(this.a[this.t - 1 as any] ^ s & BigInteger.DM) as any;
      }
      
      public shortValue(): number
      {
         return this.t == 0 ? s : this.a[0] << 16 >> 16 as any;
      }
      
      public and(a: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         r = new (BigInteger as any)();
         this.bitwiseTo(a,op_and,r);
         return r as any;
      }
      
      protected toRadix(b: number = 10): string
      {
         var cs: number = 0;
         var a: number = NaN;
         var d: BigInteger = null as any;
         var y: BigInteger = null as any;
         var z: BigInteger = null as any;
         var r: string = null as any;
         if(this.sigNum() == 0 || b < 2 || b > 32)
         {
            return "0" as any;
         }
         cs = this.chunkSize(b);
         a = Math.pow(b,cs);
         d = BigInteger.nbv(a);
         y = this.nbi();
         z = this.nbi();
         r = "";
         this.divRemTo(d,y,z);
         while(y.sigNum() > 0)
         {
            r = (a + z.intValue()).toString(b).substr(1) + r;
            y.divRemTo(d,y,z);
         }
         return z.intValue().toString(b) + r as any;
      }
      
      public not(): BigInteger
      {
         var r: BigInteger = null as any;
         var i: number = 0;
         r = new (BigInteger as any)();
         for(i = 0; i < this.t; i++)
         {
            r[i as any] = BigInteger.DM & ~this.a[i as any];
         }
         r.t = this.t;
         r.s = ~this.s;
         return r as any;
      }
      
      public subTo(v: BigInteger, r: BigInteger): void
      {
         var i: number = 0;
         var c: number = 0;
         var m: number = 0;
         i = 0;
         c = 0;
         m = Math.min(v.t,this.t);
         while(i < m)
         {
            c += this.a[i as any] - v.a[i as any];
            r.a[i++ as any] = c & BigInteger.DM;
            c >>= BigInteger.DB;
         }
         if(v.t < this.t)
         {
            c -= v.s;
            while(i < this.t)
            {
               c += this.a[i as any];
               r.a[i++ as any] = c & BigInteger.DM;
               c >>= BigInteger.DB;
            }
            c += this.s;
         }
         else
         {
            c += this.s;
            while(i < v.t)
            {
               c -= v.a[i as any];
               r.a[i++ as any] = c & BigInteger.DM;
               c >>= BigInteger.DB;
            }
            c -= v.s;
         }
         r.s = c < 0 ? -1 : 0;
         if(c < -1)
         {
            r.a[i++ as any] = BigInteger.DV + c;
         }
         else if(c > 0)
         {
            r.a[i++ as any] = c;
         }
         r.t = i;
         r.clamp();
      }
      
      public clone(): BigInteger
      {
         var r: BigInteger = null as any;
         r = new (BigInteger as any)();
         this.copyTo(r);
         return r as any;
      }
      
      public pow(e: number): BigInteger
      {
         return this.exp(e,new (NullReduction as any)()) as any;
      }
      
      public flipBit(n: number): BigInteger
      {
         return this.changeBit(n,this.op_xor) as any;
      }
      
      public xor(a: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         r = new (BigInteger as any)();
         this.bitwiseTo(a,op_xor,r);
         return r as any;
      }
      
      public or(a: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         r = new (BigInteger as any)();
         this.bitwiseTo(a,op_or,r);
         return r as any;
      }
      
      public max(a: BigInteger): BigInteger
      {
         return this.compareTo(a) > 0 ? this : a as any;
      }
      
      public fromInt(value: number): void
      {
         this.t = 1;
         this.s = value < 0 ? -1 : 0;
         if(value > 0)
         {
            this.a[0] = value;
         }
         else if(value < -1)
         {
            this.a[0] = value + BigInteger.DV;
         }
         else
         {
            this.t = 0;
         }
      }
      
      public isEven(): boolean
      {
         return(this.t > 0 ? this.a[0] & 1 : this.s) == 0 as any;
      }
      
      public toString(radix: number = 16): string
      {
         var k: number = 0;
         var km: number = 0;
         var d: number = 0;
         var m: boolean = false;
         var r: string = null as any;
         var i: number = 0;
         var p: number = 0;
         if(s < 0)
         {
            return "-" + this.negate().toString(radix) as any;
         }
         switch(radix)
         {
            case 2:
               k = 1;
               break;
            case 4:
               k = 2;
               break;
            case 8:
               k = 3;
               break;
            case 16:
               k = 4;
               break;
            case 32:
               k = 5;
         }
         km = (1 << k) - 1;
         d = 0;
         m = false;
         r = "";
         i = this.t;
         p = BigInteger.DB - i * BigInteger.DB % k;
         if(i-- > 0)
         {
            if(p < BigInteger.DB && (d = this.a[i as any] >> p) > 0)
            {
               m = true;
               r = d.toString(36);
            }
            while(i >= 0)
            {
               if(p < k)
               {
                  d = (this.a[i as any] & (1 << p) - 1) << k - p;
                  d |= this.a[--i as any] >> (p = p + (BigInteger.DB - k));
               }
               else
               {
                  d = this.a[i as any] >> (p = p - k) & km;
                  if(p <= 0)
                  {
                     p += BigInteger.DB;
                     i--;
                  }
               }
               if(d > 0)
               {
                  m = true;
               }
               if(m)
               {
                  r += d.toString(36);
               }
            }
         }
         return m ? r : "0" as any;
      }
      
      public setBit(n: number): BigInteger
      {
         return this.changeBit(n,this.op_or) as any;
      }
      
      public abs(): BigInteger
      {
         return this.s < 0 ? this.negate() : this as any;
      }
      
      public nbits(x: number): number
      {
         var r: number = 0;
         var t: number = 0;
         r = 1;
         t = x >>> 16;
         if(t != 0)
         {
            x = t;
            r += 16;
         }
         t = x >> 8;
         if(t != 0)
         {
            x = t;
            r += 8;
         }
         t = x >> 4;
         if(t != 0)
         {
            x = t;
            r += 4;
         }
         t = x >> 2;
         if(t != 0)
         {
            x = t;
            r += 2;
         }
         t = x >> 1;
         if(t != 0)
         {
            x = t;
            r += 1;
         }
         return r as any;
      }
      
      public sigNum(): number
      {
         if(s < 0)
         {
            return -1 as any;
         }
         if(t <= 0 || t == 1 && this.a[0] <= 0)
         {
            return 0 as any;
         }
         return 1 as any;
      }
      
      public toByteArray(): ByteArray
      {
         var i: number = 0;
         var r: ByteArray = null as any;
         var p: number = 0;
         var d: number = 0;
         var k: number = 0;
         i = this.t;
         r = new (ByteArray as any)();
         r[0] = this.s;
         p = BigInteger.DB - i * BigInteger.DB % 8;
         k = 0;
         if(i-- > 0)
         {
            if(p < BigInteger.DB && (d = this.a[i as any] >> p) != (s & BigInteger.DM) >> p)
            {
               r[k++ as any] = d | s << BigInteger.DB - p;
            }
            while(i >= 0)
            {
               if(p < 8)
               {
                  d = (this.a[i as any] & (1 << p) - 1) << 8 - p;
                  d |= this.a[--i as any] >> (p = p + (BigInteger.DB - 8));
               }
               else
               {
                  d = this.a[i as any] >> (p = p - 8) & 0xFF;
                  if(p <= 0)
                  {
                     p += BigInteger.DB;
                     i--;
                  }
               }
               if((d & 0x80) != 0)
               {
                  d |= -256;
               }
               if(k == 0 && (s & 0x80) != (d & 0x80))
               {
                  k++;
               }
               if(k > 0 || d != this.s)
               {
                  r[k++ as any] = d;
               }
            }
         }
         return r as any;
      }
      
      public squareTo(r: BigInteger): void
      {
         var x: BigInteger = null as any;
         var i: number = 0;
         var c: number = 0;
         x = this.abs();
         for(i = r.t = 2 * x.t; --i >= 0; )
         {
            r.a[i as any] = 0;
         }
         for(i = 0; i < x.t - 1; i++)
         {
            c = x.am(i,x.a[i as any],r,2 * i,0,1);
            if((r.a[i + x.t as any] = r.a[i + x.t as any] + x.am(i + 1,2 * x.a[i as any],r,2 * i + 1,c,x.t - i - 1)) >= BigInteger.DV)
            {
               r.a[i + x.t as any] -= BigInteger.DV;
               r.a[i + x.t + 1 as any] = 1;
            }
         }
         if(r.t > 0)
         {
            r.a[r.t - 1 as any] += x.am(i,x.a[i as any],r,2 * i,0,1);
         }
         r.s = 0;
         r.clamp();
      }
      
      private op_and(x: number, y: number): number
      {
         return x & y as any;
      }
      
      protected fromRadix(s: string, b: number = 10): void
      {
         var cs: number = 0;
         var d: number = NaN;
         var mi: boolean = false;
         var j: number = 0;
         var w: number = 0;
         var i: number = 0;
         var x: number = 0;
         this.fromInt(0);
         cs = this.chunkSize(b);
         d = Math.pow(b,cs);
         mi = false;
         j = 0;
         w = 0;
         for(i = 0; i < s.length; i++)
         {
            x = this.intAt(s,i);
            if(x < 0)
            {
               if(s.charAt(i) == "-" && this.sigNum() == 0)
               {
                  mi = true;
               }
            }
            else
            {
               w = b * w + x;
               if(++j >= cs)
               {
                  this.dMultiply(d);
                  this.dAddOffset(w,0);
                  j = 0;
                  w = 0;
               }
            }
         }
         if(j > 0)
         {
            this.dMultiply(Math.pow(b,j));
            this.dAddOffset(w,0);
         }
         if(mi)
         {
            BigInteger.ZERO.subTo(this,this);
         }
      }
      
      public dlShiftTo(n: number, r: BigInteger): void
      {
         var i: number = 0;
         for(i = this.t - 1; i >= 0; i--)
         {
            r.a[i + n as any] = this.a[i as any];
         }
         for(i = n - 1; i >= 0; i--)
         {
            r.a[i as any] = 0;
         }
         r.t = this.t + n;
         r.s = this.s;
      }
      
      private op_xor(x: number, y: number): number
      {
         return x ^ y as any;
      }
   }
