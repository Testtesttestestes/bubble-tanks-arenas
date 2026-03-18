// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_10

import { class_13 } from '../package_3/class_13';
import { class_27 } from '../package_3/class_27';
import { class_26 } from '../package_9/class_26';
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

   export class class_25{
  [key: string]: any;
      
      public static readonly const_3: number = 30;
      public static readonly const_6: number = 1 << class_25.const_3;
      public static readonly const_5: number = class_25.const_6 - 1;
      public static readonly const_13: number = 52;
      public static readonly const_22: number = Math.pow(2,class_25.const_13);
      public static readonly F1: number = class_25.const_13 - class_25.const_3;
      public static readonly F2: number = 2 * class_25.const_3 - class_25.const_13;
      public static readonly const_9: class_25 = class_25.method_28(0);
      public static readonly const_4: class_25 = class_25.method_28(1);
      public static readonly const_7: any = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509];
      public static readonly const_21: number = (1 << 26) / class_25.const_7[class_25.const_7.length - 1 as any];
      public a!: any;
      public s!: number;
      public t!: number;
      constructor(param1: any = null, param2: number = 0){
         var _loc3_: ByteArray = null as any;
         var _loc4_: number = 0;

         this.a = new (Array as any)();
         if(typeof param1 === "string")
         {
            param1 = class_13.toArray(param1);
            param2 = 0;
         }
         if(param1 instanceof ByteArray)
         {
            _loc3_ = param1  as unknown as ByteArray;
            _loc4_ = int(param2 || int(_loc3_.length - _loc3_.position));
            this.method_52(_loc3_,_loc4_);
         }
      }
      
      public static method_28(param1: number): class_25
      {
         var _loc2_: class_25 = new (class_25 as any)();
         _loc2_.method_194(param1);
         return _loc2_;
      }
      
      public method_798(param1: number): class_25
      {
         return this.method_233(param1,this.method_451);
      }
      
      private method_245(param1: number, param2: number): number
      {
         return param1 | param2;
      }
      
      public method_175(): class_25
      {
         var _loc1_: class_25 = this.method_81();
         class_25.const_9.method_15(this,_loc1_);
         return _loc1_;
      }
      
      public method_828(param1: class_25): class_25
      {
         var _loc2_: class_25 = new (class_25 as any)();
         this.method_116(param1,this.method_451,_loc2_);
         return _loc2_;
      }
      
      public method_102(param1: class_25, param2: class_25): class_25
      {
         var _loc4_: number = 0;
         var _loc6_: IReduction = null as any;
         var _loc12_: number = 0;

         var _loc16_: class_25 = null as any;
         var _loc3_: number = param1.method_298();
         var _loc5_: class_25 = class_25.method_28(1);
         if(_loc3_ <= 0)
         {
            return _loc5_;
         }
         if(_loc3_ < 18)
         {
            _loc4_ = 1;
         }
         else if(_loc3_ < 48)
         {
            _loc4_ = 3;
         }
         else if(_loc3_ < 144)
         {
            _loc4_ = 4;
         }
         else if(_loc3_ < 768)
         {
            _loc4_ = 5;
         }
         else
         {
            _loc4_ = 6;
         }
         if(_loc3_ < 8)
         {
            _loc6_ = new (ClassicReduction as any)(param2);
         }
         else if(param2.method_49())
         {
            _loc6_ = new (BarrettReduction as any)(param2);
         }
         else
         {
            _loc6_ = new (MontgomeryReduction as any)(param2);
         }
         var _loc7_: any = [];
         var _loc8_: any = 3;
         var _loc9_: number = _loc4_ - 1;
         var _loc10_: number = (1 << _loc4_) - 1;
         _loc7_[1] = _loc6_.method_270(this);
         if(_loc4_ > 1)
         {
            _loc16_ = new (class_25 as any)();
            _loc6_.method_131(_loc7_[1],_loc16_);
            while(_loc8_ <= _loc10_)
            {
               _loc7_[_loc8_ as any] = new (class_25 as any)();
               _loc6_.method_244(_loc16_,_loc7_[_loc8_ - 2 as any],_loc7_[_loc8_ as any]);
               _loc8_ += 2;
            }
         }
         var _loc11_: any = int(param1.t - 1);
         var _loc14_: class_25 = new (class_25 as any)();
         _loc3_ = this.method_226(param1.a[_loc11_ as any]) - 1;
         while(_loc11_ >= 0)
         {
            if(_loc3_ >= _loc9_)
            {
               _loc12_ = param1.a[_loc11_ as any] >> _loc3_ - _loc9_ & _loc10_;
            }
            else
            {
               _loc12_ = (param1.a[_loc11_ as any] & (1 << _loc3_ + 1) - 1) << _loc9_ - _loc3_;
               if(_loc11_ > 0)
               {
                  _loc12_ |= param1.a[_loc11_ - 1 as any] >> class_25.const_3 + _loc3_ - _loc9_;
               }
            }
            _loc8_ = _loc4_;
            while((_loc12_ & 1) == 0)
            {
               _loc12_ >>= 1;
               _loc8_--;
            }
            _loc3_ = _loc3_ - _loc8_;
            if(_loc3_ < 0)
            {
               _loc3_ += class_25.const_3;
               _loc11_--;
            }
            _loc7_[_loc12_ as any].copyTo(_loc5_);
            var _loc13_: boolean = false;
            while(_loc11_ >= 0 && (param1.a[_loc11_ as any] & 1 << _loc3_) == 0)
            {
               _loc6_.method_131(_loc5_,_loc14_);
               var _loc15_: class_25 = _loc5_;
               _loc5_ = _loc14_;
               _loc14_ = null as any;
               if(--_loc3_ < 0)
               {
                  _loc3_ = class_25.const_3 - 1;
                  _loc11_--;
               }
            }
         }
         return _loc6_.method_271(_loc5_);
      }
      
      public method_268(param1: number): boolean
      {
         var _loc2_: any = 0;
         var _loc4_: number = 0;
         var _loc5_: any = 0;
         var _loc3_: class_25 = this.abs();
         if(_loc3_.t == 1 && _loc3_.a[0] <= class_25.const_7[class_25.const_7.length - 1 as any])
         {
            _loc2_ = 0;
            while(_loc2_ < class_25.const_7.length)
            {
               if(_loc3_[0] == class_25.const_7[_loc2_ as any])
               {
                  return true;
               }
               _loc2_++;
            }
            return false;
         }
         if(_loc3_.method_49())
         {
            return false;
         }
         _loc2_ = 1;
         while(_loc2_ < class_25.const_7.length)
         {
            _loc4_ = int(class_25.const_7[_loc2_ as any]);
            _loc5_ = int(_loc2_ + 1);
            while(_loc5_ < class_25.const_7.length && _loc4_ < class_25.const_21)
            {
               _loc4_ *= class_25.const_7[_loc5_++ as any];
            }
            _loc4_ = _loc3_.method_683(_loc4_);
            while(_loc2_ < _loc5_)
            {
               if(_loc4_ % class_25.const_7[_loc2_++ as any] == 0)
               {
                  return false;
               }
            }
         }
         return _loc3_.method_655(param1);
      }
      
      public divide(param1: class_25): class_25
      {
         var _loc2_: class_25 = new (class_25 as any)();
         this.divRemTo(param1,_loc2_,null);
         return _loc2_;
      }
      
      public method_76(param1: class_25): class_25
      {
         var _loc2_: class_25 = this.method_81();
         this.abs().divRemTo(param1,null,_loc2_);
         if(this.s < 0 && _loc2_.method_16(class_25.const_9) > 0)
         {
            param1.method_15(_loc2_,_loc2_);
         }
         return _loc2_;
      }
      
      protected method_225(param1: class_25, param2: class_25): void
      {
         var _loc3_: any = 0;
         var _loc4_: number = 0;
         var _loc5_: number = Math.min(param1.t,this.t);
         while(_loc3_ < _loc5_)
         {
            _loc4_ += this.a[_loc3_ as any] + param1.a[_loc3_ as any];
            var _loc6_: number;
            param2.a[_loc6_ = _loc3_++ as any] = _loc4_ & const_5;
            _loc4_ >>= class_25.const_3;
         }
         if(param1.t < this.t)
         {
            _loc4_ += param1.s;
            while(_loc3_ < this.t)
            {
               _loc4_ += this.a[_loc3_ as any];
               param2.a[_loc6_ = _loc3_++ as any] = _loc4_ & const_5;
               _loc4_ >>= class_25.const_3;
            }
            _loc4_ += this.s;
         }
         else
         {
            _loc4_ += this.s;
            while(_loc3_ < param1.t)
            {
               _loc4_ += param1.a[_loc3_ as any];
               param2.a[_loc6_ = _loc3_++ as any] = _loc4_ & const_5;
               _loc4_ >>= class_25.const_3;
            }
            _loc4_ += param1.s;
         }
         param2.s = _loc4_ < 0 ? -1 : 0;
         if(_loc4_ > 0)
         {
            param2.a[_loc6_ = _loc3_++ as any] = _loc4_;
         }
         else if(_loc4_ < -1)
         {
            param2.a[_loc6_ = _loc3_++ as any] = class_25.const_6 + _loc4_;
         }
         param2.t = _loc3_;
         param2.method_45();
      }
      
      protected method_116(param1: class_25, param2: Function, param3: class_25): void
      {
         var _loc4_: number = 0;
         var _loc5_: number = 0;
         var _loc6_: number = Math.min(param1.t,this.t);
         _loc4_ = 0;
         while(_loc4_ < _loc6_)
         {
            param3.a[_loc4_ as any] = param2(this.a[_loc4_ as any],param1.a[_loc4_ as any]);
            _loc4_++;
         }
         if(param1.t < this.t)
         {
            _loc5_ = param1.s & const_5;
            _loc4_ = _loc6_;
            while(_loc4_ < this.t)
            {
               param3.a[_loc4_ as any] = param2(this.a[_loc4_ as any],_loc5_);
               _loc4_++;
            }
            param3.t = this.t;
         }
         else
         {
            _loc5_ = this.s & const_5;
            _loc4_ = _loc6_;
            while(_loc4_ < param1.t)
            {
               param3.a[_loc4_ as any] = param2(_loc5_,param1.a[_loc4_ as any]);
               _loc4_++;
            }
            param3.t = param1.t;
         }
         param3.s = param2(this.s,param1.s);
         param3.method_45();
      }
      
      protected method_683(param1: number): number
      {
         var _loc4_: any = 0;
         if(param1 <= 0)
         {
            return 0;
         }
         var _loc2_: number = class_25.const_6 % param1;
         var _loc3_: number = this.s < 0 ? int(param1 - 1) : 0;
         if(this.t > 0)
         {
            if(_loc2_ == 0)
            {
               _loc3_ = this.a[0] % param1;
            }
            else
            {
               _loc4_ = int(this.t - 1);
               while(_loc4_ >= 0)
               {
                  _loc3_ = (_loc2_ * _loc3_ + this.a[_loc4_ as any]) % param1;
                  _loc4_--;
               }
            }
         }
         return _loc3_;
      }
      
      protected method_468(param1: number): number
      {
         return Math.floor(Math.LN2 * class_25.const_3 / Math.log(param1));
      }
      
      public method_279(param1: class_25): class_25
      {
         var _loc6_: class_25 = null as any;
         var _loc2_: class_25 = this.s < 0 ? this.method_175() : this.clone();
         var _loc3_: class_25 = param1.s < 0 ? param1.method_175() : param1.clone();
         if(_loc2_.method_16(_loc3_) < 0)
         {
            _loc6_ = _loc2_;
            _loc2_ = _loc3_;
            _loc3_ = _loc6_;
         }
         var _loc4_: number = _loc2_.method_150();
         var _loc5_: number = _loc3_.method_150();
         if(_loc5_ < 0)
         {
            return _loc2_;
         }
         if(_loc4_ < _loc5_)
         {
            _loc5_ = _loc4_;
         }
         if(_loc5_ > 0)
         {
            _loc2_.method_42(_loc5_,_loc2_);
            _loc3_.method_42(_loc5_,_loc3_);
         }
         while(_loc2_.sigNum() > 0)
         {
            _loc4_ = _loc2_.method_150();
            if(_loc4_ > 0)
            {
               _loc2_.method_42(_loc4_,_loc2_);
            }
            _loc4_ = _loc3_.method_150();
            if(_loc4_ > 0)
            {
               _loc3_.method_42(_loc4_,_loc3_);
            }
            if(_loc2_.method_16(_loc3_) >= 0)
            {
               _loc2_.method_15(_loc3_,_loc2_);
               _loc2_.method_42(1,_loc2_);
            }
            else
            {
               _loc3_.method_15(_loc2_,_loc3_);
               _loc3_.method_42(1,_loc3_);
            }
         }
         if(_loc5_ > 0)
         {
            _loc3_.method_158(_loc5_,_loc3_);
         }
         return _loc3_;
      }
      
      public method_142(param1: number, param2: number): void
      {
         while(this.t <= param2)
         {
            this.a[this.t++ as any] = 0;
         }
         this.a[param2 as any] += param1;
         while(this.a[param2 as any] >= class_25.const_6)
         {
            this.a[param2 as any] -= class_25.const_6;
            if(++param2 >= this.t)
            {
               this.a[this.t++ as any] = 0;
            }
            ++this.a[param2 as any];
         }
      }
      
      public method_158(param1: number, param2: class_25): void
      {
         var _loc8_: any = 0;
         var _loc3_: number = param1 % class_25.const_3;
         var _loc4_: number = class_25.const_3 - _loc3_;
         var _loc5_: number = (1 << _loc4_) - 1;
         var _loc6_: number = param1 / class_25.const_3;
         var _loc7_: number = this.s << _loc3_ & const_5;
         _loc8_ = int(this.t - 1);
         while(_loc8_ >= 0)
         {
            param2.a[_loc8_ + _loc6_ + 1 as any] = this.a[_loc8_ as any] >> _loc4_ | _loc7_;
            _loc7_ = (this.a[_loc8_ as any] & _loc5_) << _loc3_;
            _loc8_--;
         }
         _loc8_ = int(_loc6_ - 1);
         while(_loc8_ >= 0)
         {
            param2.a[_loc8_ as any] = 0;
            _loc8_--;
         }
         param2.a[_loc6_ as any] = _loc7_;
         param2.t = this.t + _loc6_ + 1;
         param2.s = this.s;
         param2.method_45();
      }
      
      public method_150(): number
      {
         var _loc1_: number = 0;
         while(_loc1_ < this.t)
         {
            if(this.a[_loc1_ as any] != 0)
            {
               return _loc1_ * class_25.const_3 + this.method_749(this.a[_loc1_ as any]);
            }
            _loc1_++;
         }
         if(this.s < 0)
         {
            return this.t * class_25.const_3;
         }
         return -1;
      }
      
      public method_95(param1: class_25): class_25
      {
         var _loc2_: class_25 = new (class_25 as any)();
         this.method_15(param1,_loc2_);
         return _loc2_;
      }
      
      public method_597(param1: number, param2: number): void
      {
         if(!this.method_652(param1 - 1))
         {
            this.method_116(class_25.const_4.shiftLeft(param1 - 1),this.method_245,this);
         }
         if(this.method_49())
         {
            this.method_142(1,0);
         }
         while(!this.method_268(param2))
         {
            this.method_142(2,0);
            while(this.method_298() > param1)
            {
               this.method_15(class_25.const_4.shiftLeft(param1 - 1),this);
            }
         }
      }
      
      public method_691(param1: class_25, param2: number, param3: class_25): void
      {
         var _loc5_: number = 0;
         var _loc4_: number = Math.min(this.t + param1.t,param2);
         param3.s = 0;
         param3.t = _loc4_;
         while(_loc4_ > 0)
         {
            var _loc6_: number;
            param3.a[_loc6_ = --_loc4_ as any] = 0;
         }
         _loc5_ = param3.t - this.t;
         while(_loc4_ < _loc5_)
         {
            param3.a[_loc4_ + this.t as any] = this.method_75(0,param1.a[_loc4_ as any],param3,_loc4_,0,this.t);
            _loc4_++;
         }
         _loc5_ = Math.min(param1.t,param2);
         while(_loc4_ < _loc5_)
         {
            this.method_75(0,param1.a[_loc4_ as any],param3,_loc4_,0,param2 - _loc4_);
            _loc4_++;
         }
         param3.method_45();
      }
      
      public method_361(param1: number, param2: class_25): class_25
      {
         var _loc3_: IReduction = null as any;
         if(param1 < 256 || param2.method_49())
         {
            _loc3_ = new (ClassicReduction as any)(param2);
         }
         else
         {
            _loc3_ = new (MontgomeryReduction as any)(param2);
         }
         return this.method_318(param1,_loc3_);
      }
      
      public method_548(param1: string, param2: number): number
      {
         return parseInt(param1.charAt(param2),36);
      }
      
      public method_652(param1: number): boolean
      {
         var _loc2_: number = Math.floor(param1 / class_25.const_3);
         if(_loc2_ >= this.t)
         {
            return this.s != 0;
         }
         return(this.a[_loc2_] & 1 << param1 % class_25.const_3) != 0;
      }
      
      public method_318(param1: number, param2: IReduction): class_25
      {
         var _loc7_: class_25 = null as any;
         if(param1 > 4294967295 || param1 < 1)
         {
            return class_25.const_4;
         }
         var _loc3_: class_25 = this.method_81();
         var _loc4_: class_25 = this.method_81();
         var _loc5_: class_25 = param2.method_270(this);
         var _loc6_: number = this.method_226(param1) - 1;
         _loc5_.copyTo(_loc3_);
         while(--_loc6_ >= 0)
         {
            param2.method_131(_loc3_,_loc4_);
            if((param1 & 1 << _loc6_) > 0)
            {
               param2.method_244(_loc4_,_loc5_,_loc3_);
            }
            else
            {
               _loc7_ = _loc3_;
               _loc3_ = _loc4_;
               _loc4_ = _loc7_;
            }
         }
         return param2.method_271(_loc3_);
      }
      
      public toArray(param1: ByteArray): number
      {
         int((1 << 8) - 1);
         var _loc4_: number = 0;
         var _loc5_: any = this.t;
         var _loc6_: number = class_25.const_3 - _loc5_ * class_25.const_3 % 8;
         var _loc7_: boolean = false;
         var _loc8_: number = 0;
         if(_loc5_-- > 0)
         {
            if(_loc6_ < class_25.const_3 && (_loc4_ = this.a[_loc5_ as any] >> _loc6_) > 0)
            {
               _loc7_ = true;
               param1.writeByte(_loc4_);
               _loc8_++;
            }
            while(_loc5_ >= 0)
            {
               if(_loc6_ < 8)
               {
                  _loc4_ = (this.a[_loc5_ as any] & (1 << _loc6_) - 1) << 8 - _loc6_;
                  _loc4_ = _loc4_ | this.a[--_loc5_ as any] >> (_loc6_ = _loc6_ + (class_25.const_3 - 8));
               }
               else
               {
                  _loc4_ = this.a[_loc5_ as any] >> (_loc6_ = _loc6_ - 8) & _loc3_;
                  if(_loc6_ <= 0)
                  {
                     _loc6_ += class_25.const_3;
                     _loc5_--;
                  }
               }
               if(_loc4_ > 0)
               {
                  _loc7_ = true;
               }
               if(_loc7_)
               {
                  param1.writeByte(_loc4_);
                  _loc8_++;
               }
            }
         }
         return _loc8_;
      }
      
      public dispose(): void
      {
         var _loc1_: class_26 = new (class_26 as any)();
         var _loc2_: number = 0;
         while(_loc2_ < this.a.length)
         {
            this.a[_loc2_ as any] = _loc1_.method_68();
            delete this.a[_loc2_ as any];
            _loc2_++;
         }
         this.a = null as any;
         this.t = 0;
         this.s = 0;
         class_27.method_59();
      }
      
      private method_749(param1: number): number
      {
         if(param1 == 0)
         {
            return -1;
         }
         var _loc2_: number = 0;
         if((param1 & 0xFFFF) == 0)
         {
            param1 >>= 16;
            _loc2_ += 16;
         }
         if((param1 & 0xFF) == 0)
         {
            param1 >>= 8;
            _loc2_ += 8;
         }
         if((param1 & 0x0F) == 0)
         {
            param1 >>= 4;
            _loc2_ += 4;
         }
         if((param1 & 3) == 0)
         {
            param1 >>= 2;
            _loc2_ += 2;
         }
         if((param1 & 1) == 0)
         {
            _loc2_++;
         }
         return _loc2_;
      }
      
      public divRemTo(param1: class_25, param2: class_25 = null, param3: class_25 = null): void
      {
         var y: class_25;
         var nsh: number;
         var pt: class_25;
         var d1: number;
         var d2: number;
         var y0: number;
         var yt: number;
         var ys: number;
         var e: number;
         var ms: number;
         var j: number;
         var i: number;
         var t: class_25;
         var ts: number;
         var qd: number = 0;
         var m: class_25 = param1;
         var q: class_25 = param2;
         var r: class_25 = param3;
         var pm: class_25 = m.abs();
         if(pm.t <= 0)
         {
            return;
         }
         pt = this.abs();
         if(pt.t < pm.t)
         {
            if(q != null)
            {
               q.method_194(0);
            }
            if(r != null)
            {
               this.copyTo(r);
            }
            return;
         }
         if(r == null)
         {
            r = this.method_81();
         }
         y = this.method_81();
         ts = this.s;
         ms = m.s;
         nsh = class_25.const_3 - this.method_226(pm.a[pm.t - 1 as any]);
         if(nsh > 0)
         {
            pm.method_158(nsh,y);
            pt.method_158(nsh,r);
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
         yt = y0 * (1 << class_25.F1) + (ys > 1 ? y.a[ys - 2 as any] >> F2 : 0);
         d1 = class_25.const_22 / yt;
         d2 = (1 << class_25.F1) / yt;
         e = 1 << class_25.F2;
         i = r.t;
         j = i - ys;
         t = q == null ? this.method_81() : q;
         y.method_144(j,t);
         if(r.method_16(t) >= 0)
         {
            var _loc5_: number;
            r.a[_loc5_ = r.t++ as any] = 1;
            r.method_15(t,r);
         }
         class_25.const_4.method_144(ys,t);
         t.method_15(y,y);
         while(y.t < ys)
         {
            y[++y.t,false as any];
         }
         while(--j >= 0)
         {
            qd = r.a[--i as any] == y0 ? const_5 : int(Number(r.a[i as any]) * d1 + (Number(r.a[i - 1 as any]) + e) * d2);
            if((r.a[i as any] = r.a[i as any] + y.method_75(0,qd,r,j,0,ys)) < qd)
            {
               y.method_144(j,t);
               r.method_15(t,r);
               while(r.a[i as any] < --qd)
               {
                  r.method_15(t,r);
               }
            }
         }
         if(q != null)
         {
            r.method_227(ys,q);
            if(ts != ms)
            {
               class_25.const_9.method_15(q,q);
            }
         }
         r.t = ys;
         r.method_45();
         if(nsh > 0)
         {
            r.method_42(nsh,r);
         }
         if(ts < 0)
         {
            class_25.const_9.method_15(r,r);
         }
      }
      
      public method_841(param1: class_25): class_25
      {
         var _loc2_: class_25 = new (class_25 as any)();
         this.divRemTo(param1,null,_loc2_);
         return _loc2_;
      }
      
      public method_540(param1: class_25, param2: number, param3: class_25): void
      {
         param2--;
         var _loc4_: number = param3.t = this.t + param1.t - param2;
         param3.s = 0;
         while(--_loc4_ >= 0)
         {
            param3.a[_loc4_ as any] = 0;
         }
         _loc4_ = Math.max(param2 - this.t,0);
         while(_loc4_ < param1.t)
         {
            param3.a[this.t + _loc4_ - param2 as any] = this.method_75(param2 - _loc4_,param1.a[_loc4_ as any],param3,0,0,this.t + _loc4_ - param2);
            _loc4_++;
         }
         param3.method_45();
         param3.method_227(1,param3);
      }
      
      public divideAndRemainder(param1: class_25): any
      {
         var _loc2_: class_25 = new (class_25 as any)();
         var _loc3_: class_25 = new (class_25 as any)();
         this.divRemTo(param1,_loc2_,_loc3_);
         return[_loc2_,_loc3_ as any];
      }
      
      public method_839(): number
      {
         var _loc1_: number = 1;
         var _loc2_: number = 0;
         var _loc3_: number = 0;
         while(_loc3_ < this.t)
         {
            _loc2_ += this.a[_loc3_ as any] * _loc1_;
            _loc1_ *= class_25.const_6;
            _loc3_++;
         }
         return _loc2_;
      }
      
      public shiftLeft(param1: number): class_25
      {
         var _loc2_: class_25 = new (class_25 as any)();
         if(param1 < 0)
         {
            this.method_42(-param1,_loc2_);
         }
         else
         {
            this.method_158(param1,_loc2_);
         }
         return _loc2_;
      }
      
      public method_120(param1: class_25): class_25
      {
         var _loc2_: class_25 = new (class_25 as any)();
         this.method_139(param1,_loc2_);
         return _loc2_;
      }
      
      public method_75(param1: number, param2: number, param3: class_25, param4: number, param5: number, param6: number): number
      {
         var _loc9_: number = 0;
         var _loc10_: number = 0;
         var _loc11_: number = 0;
         var _loc7_: number = param2 & 0x7FFF;
         var _loc8_: number = param2 >> 15;
         while(--param6 >= 0)
         {
            _loc9_ = this.a[param1 as any] & 0x7FFF;
            _loc10_ = this.a[param1++ as any] >> 15;
            _loc11_ = _loc8_ * _loc9_ + _loc10_ * _loc7_;
            _loc9_ = _loc7_ * _loc9_ + ((_loc11_ & 0x7FFF) << 15) + param3.a[param4 as any] + (param5 & 0x3FFFFFFF);
            param5 = (_loc9_ >>> 30) + (_loc11_ >>> 15) + _loc8_ * _loc10_ + (param5 >>> 30);
            var _loc12_: number;
            param3.a[_loc12_ = param4++ as any] = _loc9_ & 0x3FFFFFFF;
         }
         return param5;
      }
      
      public method_227(param1: number, param2: class_25): void
      {
         var _loc3_: number = 0;
         _loc3_ = param1;
         while(_loc3_ < this.t)
         {
            param2.a[_loc3_ - param1 as any] = this.a[_loc3_ as any];
            _loc3_++;
         }
         param2.t = Math.max(this.t - param1,0);
         param2.s = this.s;
      }
      
      public add(param1: class_25): class_25
      {
         var _loc2_: class_25 = new (class_25 as any)();
         this.method_225(param1,_loc2_);
         return _loc2_;
      }
      
      protected method_81(): any
      {
         return new (class_25 as any)();
      }
      
      protected method_655(param1: number): boolean
      {
         var _loc7_: class_25 = null as any;
         var _loc8_: any = 0;
         var _loc2_: class_25 = this.method_95(class_25.const_4);
         var _loc3_: number = _loc2_.method_150();
         if(_loc3_ <= 0)
         {
            return false;
         }
         var _loc4_: class_25 = _loc2_.shiftRight(_loc3_);
         param1 = param1 + 1 >> 1;
         if(param1 > class_25.const_7.length)
         {
            param1 = int(class_25.const_7.length);
         }
         var _loc5_: class_25 = new (class_25 as any)();
         var _loc6_: number = 0;
         while(_loc6_ < param1)
         {
            _loc5_.method_194(class_25.const_7[_loc6_ as any]);
            _loc7_ = _loc5_.method_102(_loc4_,this);
            if(_loc7_.method_16(class_25.const_4) != 0 && _loc7_.method_16(_loc2_) != 0)
            {
               _loc8_ = 1;
               while(_loc8_++ < _loc3_ && _loc7_.method_16(_loc2_) != 0)
               {
                  _loc7_ = _loc7_.method_361(2,this);
                  if(_loc7_.method_16(class_25.const_4) == 0)
                  {
                     return false;
                  }
               }
               if(_loc7_.method_16(_loc2_) != 0)
               {
                  return false;
               }
            }
            _loc6_++;
         }
         return true;
      }
      
      public method_353(param1: number): void
      {
         this.a[this.t as any] = this.method_75(0,param1 - 1,this,0,0,this.t);
         ++this.t;
         this.method_45();
      }
      
      private method_451(param1: number, param2: number): number
      {
         return param1 & ~param2;
      }
      
      public method_45(): void
      {
         var _loc1_: number = this.s & const_5;
         while(this.t > 0 && this.a[this.t - 1 as any] == _loc1_)
         {
            --this.t;
         }
      }
      
      public method_561(): number
      {
         if(this.t < 1)
         {
            return 0;
         }
         var _loc1_: number = int(this.a[0]);
         if((_loc1_ & 1) == 0)
         {
            return 0;
         }
         var _loc2_: number = _loc1_ & 3;
         _loc2_ = _loc2_ * (2 - (_loc1_ & 0x0F) * _loc2_) & 0x0F;
         _loc2_ = _loc2_ * (2 - (_loc1_ & 0xFF) * _loc2_) & 0xFF;
         _loc2_ = _loc2_ * (2 - ((_loc1_ & 0xFFFF) * _loc2_ & 0xFFFF)) & 0xFFFF;
         _loc2_ = _loc2_ * (2 - _loc1_ * _loc2_ % class_25.const_6) % class_25.const_6;
         return _loc2_ > 0 ? int(class_25.const_6 - _loc2_) : int(-_loc2_);
      }
      
      protected method_233(param1: number, param2: Function): class_25
      {
         var _loc3_: class_25 = class_25.const_4.shiftLeft(param1);
         this.method_116(_loc3_,param2,_loc3_);
         return _loc3_;
      }
      
      public method_786(param1: class_25): boolean
      {
         return this.method_16(param1) == 0;
      }
      
      public method_16(param1: class_25): number
      {
         var _loc2_: number = this.s - param1.s;
         if(_loc2_ != 0)
         {
            return _loc2_;
         }
         var _loc3_: number = this.t;
         _loc2_ = _loc3_ - param1.t;
         if(_loc2_ != 0)
         {
            return _loc2_;
         }
         while(--_loc3_ >= 0)
         {
            _loc2_ = this.a[_loc3_ as any] - param1.a[_loc3_ as any];
            if(_loc2_ != 0)
            {
               return _loc2_;
            }
         }
         return 0;
      }
      
      public shiftRight(param1: number): class_25
      {
         var _loc2_: class_25 = new (class_25 as any)();
         if(param1 < 0)
         {
            this.method_158(-param1,_loc2_);
         }
         else
         {
            this.method_42(param1,_loc2_);
         }
         return _loc2_;
      }
      
      public method_139(param1: class_25, param2: class_25): void
      {
         var _loc3_: class_25 = this.abs();
         var _loc4_: class_25 = param1.abs();
         var _loc5_: number = _loc3_.t;
         param2.t = _loc5_ + _loc4_.t;
         while(--_loc5_ >= 0)
         {
            param2.a[_loc5_ as any] = 0;
         }
         _loc5_ = 0;
         while(_loc5_ < _loc4_.t)
         {
            param2.a[_loc5_ + _loc3_.t as any] = _loc3_.method_75(0,_loc4_.a[_loc5_ as any],param2,_loc5_,0,_loc3_.t);
            _loc5_++;
         }
         param2.s = 0;
         param2.method_45();
         if(this.s != param1.s)
         {
            class_25.const_9.method_15(param2,param2);
         }
      }
      
      public method_833(): number
      {
         var _loc1_: number = 0;
         var _loc2_: number = this.s & const_5;
         var _loc3_: number = 0;
         while(_loc3_ < this.t)
         {
            _loc1_ += this.method_672(this.a[_loc3_ as any] ^ _loc2_);
            _loc3_++;
         }
         return _loc1_;
      }
      
      protected method_804(param1: number = 10): string
      {
         if(this.sigNum() == 0 || param1 < 2 || param1 > 32)
         {
            return "0";
         }
         var _loc2_: number = this.method_468(param1);
         var _loc3_: number = Math.pow(param1,_loc2_);
         var _loc4_: class_25 = class_25.method_28(_loc3_);
         var _loc5_: class_25 = this.method_81();
         var _loc6_: class_25 = this.method_81();
         var _loc7_: string = "";
         this.divRemTo(_loc4_,_loc5_,_loc6_);
         while(_loc5_.sigNum() > 0)
         {
            _loc7_ = (_loc3_ + _loc6_.method_421()).toString(param1).substr(1) + _loc7_;
            _loc5_.divRemTo(_loc4_,_loc5_,_loc6_);
         }
         return _loc6_.method_421().toString(param1) + _loc7_;
      }
      
      private method_672(param1: number): number
      {
         var _loc2_: number = 0;
         while(param1 != 0)
         {
            param1 &= param1 - 1;
            _loc2_++;
         }
         return _loc2_;
      }
      
      public method_42(param1: number, param2: class_25): void
      {
         var _loc7_: number = 0;
         param2.s = this.s;
         var _loc3_: number = param1 / class_25.const_3;
         if(_loc3_ >= this.t)
         {
            param2.t = 0;
            return;
         }
         var _loc4_: number = param1 % class_25.const_3;
         var _loc5_: number = class_25.const_3 - _loc4_;
         var _loc6_: number = (1 << _loc4_) - 1;
         param2.a[0] = this.a[_loc3_ as any] >> _loc4_;
         _loc7_ = _loc3_ + 1;
         while(_loc7_ < this.t)
         {
            param2.a[_loc7_ - _loc3_ - 1 as any] |= (this.a[_loc7_ as any] & _loc6_) << _loc5_;
            param2.a[_loc7_ - _loc3_ as any] = this.a[_loc7_ as any] >> _loc4_;
            _loc7_++;
         }
         if(_loc4_ > 0)
         {
            param2.a[this.t - _loc3_ - 1 as any] |= (this.s & _loc6_) << _loc5_;
         }
         param2.t = this.t - _loc3_;
         param2.method_45();
      }
      
      public method_319(param1: class_25): class_25
      {
         var _loc2_: boolean = param1.method_49();
         if(this.method_49() && _loc2_ || param1.sigNum() == 0)
         {
            return class_25.const_9;
         }
         var _loc3_: class_25 = param1.clone();
         var _loc4_: class_25 = this.clone();
         var _loc5_: class_25 = class_25.method_28(1);
         var _loc6_: class_25 = class_25.method_28(0);
         var _loc7_: class_25 = class_25.method_28(0);
         var _loc8_: class_25 = class_25.method_28(1);
         while(_loc3_.sigNum() != 0)
         {
            while(_loc3_.method_49())
            {
               _loc3_.method_42(1,_loc3_);
               if(_loc2_)
               {
                  if(!_loc5_.method_49() || !_loc6_.method_49())
                  {
                     _loc5_.method_225(this,_loc5_);
                     _loc6_.method_15(param1,_loc6_);
                  }
                  _loc5_.method_42(1,_loc5_);
               }
               else if(!_loc6_.method_49())
               {
                  _loc6_.method_15(param1,_loc6_);
               }
               _loc6_.method_42(1,_loc6_);
            }
            while(_loc4_.method_49())
            {
               _loc4_.method_42(1,_loc4_);
               if(_loc2_)
               {
                  if(!_loc7_.method_49() || !_loc8_.method_49())
                  {
                     _loc7_.method_225(this,_loc7_);
                     _loc8_.method_15(param1,_loc8_);
                  }
                  _loc7_.method_42(1,_loc7_);
               }
               else if(!_loc8_.method_49())
               {
                  _loc8_.method_15(param1,_loc8_);
               }
               _loc8_.method_42(1,_loc8_);
            }
            if(_loc3_.method_16(_loc4_) >= 0)
            {
               _loc3_.method_15(_loc4_,_loc3_);
               if(_loc2_)
               {
                  _loc5_.method_15(_loc7_,_loc5_);
               }
               _loc6_.method_15(_loc8_,_loc6_);
            }
            else
            {
               _loc4_.method_15(_loc3_,_loc4_);
               if(_loc2_)
               {
                  _loc7_.method_15(_loc5_,_loc7_);
               }
               _loc8_.method_15(_loc6_,_loc8_);
            }
         }
         if(_loc4_.method_16(class_25.const_4) != 0)
         {
            return class_25.const_9;
         }
         if(_loc8_.method_16(param1) >= 0)
         {
            return _loc8_.method_95(param1);
         }
         if(_loc8_.sigNum() < 0)
         {
            _loc8_.method_225(param1,_loc8_);
            if(_loc8_.sigNum() < 0)
            {
               return _loc8_.add(param1);
            }
            return _loc8_;
         }
         return _loc8_;
      }
      
      public method_52(param1: ByteArray, param2: number): void
      {
         var _loc7_: number = 0;
         var _loc3_: number = int(param1.position);
         var _loc4_: number = _loc3_ + param2;
         var _loc5_: number = 0;
         this.t = 0;
         this.s = 0;
         while(--_loc4_ >= _loc3_)
         {
            _loc7_ = _loc4_ < param1.length ? int(param1[_loc4_ as any]) : 0;
            if(_loc5_ == 0)
            {
               var _loc8_: number;
               this.a[_loc8_ = this.t++ as any] = _loc7_;
            }
            else if(_loc5_ + 8 > class_25.const_3)
            {
               this.a[this.t - 1 as any] |= (_loc7_ & (1 << class_25.const_3 - _loc5_) - 1) << _loc5_;
               this.a[_loc8_ = this.t++ as any] = _loc7_ >> class_25.const_3 - _loc5_;
            }
            else
            {
               this.a[this.t - 1 as any] |= _loc7_ << _loc5_;
            }
            _loc5_ += 8;
            if(_loc5_ >= class_25.const_3)
            {
               _loc5_ -= class_25.const_3;
            }
         }
         this.method_45();
         param1.position = Math.min(_loc3_ + param2,param1.length);
      }
      
      public copyTo(param1: class_25): void
      {
         var _loc2_: any = int(this.t - 1);
         while(_loc2_ >= 0)
         {
            param1.a[_loc2_ as any] = this.a[_loc2_ as any];
            _loc2_--;
         }
         param1.t = this.t;
         param1.s = this.s;
      }
      
      public method_421(): number
      {
         if(this.s < 0)
         {
            if(this.t == 1)
            {
               return this.a[0] - class_25.const_6;
            }
            if(this.t == 0)
            {
               return -1;
            }
         }
         else
         {
            if(this.t == 1)
            {
               return this.a[0];
            }
            if(this.t == 0)
            {
               return 0;
            }
         }
         return(this.a[1] & (1 << 32 - class_25.const_3) - 1) << const_3 | this.a[0];
      }
      
      public min(param1: class_25): class_25
      {
         return this.method_16(param1) < 0 ? this : param1;
      }
      
      public method_298(): number
      {
         if(this.t <= 0)
         {
            return 0;
         }
         return class_25.const_3 * (this.t - 1) + this.method_226(this.a[this.t - 1 as any] ^ this.s & const_5);
      }
      
      public method_831(): number
      {
         return this.t == 0 ? this.s : this.a[0] << 16 >> 16;
      }
      
      public method_848(param1: class_25): class_25
      {
         var _loc2_: class_25 = new (class_25 as any)();
         this.method_116(param1,this.method_747,_loc2_);
         return _loc2_;
      }
      
      public method_824(): number
      {
         return this.t == 0 ? this.s : this.a[0] << 24 >> 24;
      }
      
      public method_790(): class_25
      {
         var _loc1_: class_25 = new (class_25 as any)();
         var _loc2_: number = 0;
         while(_loc2_ < this.t)
         {
            _loc1_[_loc2_ as any] = const_5 & ~this.a[_loc2_ as any];
            _loc2_++;
         }
         _loc1_.t = this.t;
         _loc1_.s = ~this.s;
         return _loc1_;
      }
      
      public method_15(param1: class_25, param2: class_25): void
      {
         var _loc3_: any = 0;
         var _loc4_: number = 0;
         var _loc5_: number = Math.min(param1.t,this.t);
         while(_loc3_ < _loc5_)
         {
            _loc4_ += this.a[_loc3_ as any] - param1.a[_loc3_ as any];
            var _loc6_: number;
            param2.a[_loc6_ = _loc3_++ as any] = _loc4_ & const_5;
            _loc4_ >>= class_25.const_3;
         }
         if(param1.t < this.t)
         {
            _loc4_ -= param1.s;
            while(_loc3_ < this.t)
            {
               _loc4_ += this.a[_loc3_ as any];
               param2.a[_loc6_ = _loc3_++ as any] = _loc4_ & const_5;
               _loc4_ >>= class_25.const_3;
            }
            _loc4_ += this.s;
         }
         else
         {
            _loc4_ += this.s;
            while(_loc3_ < param1.t)
            {
               _loc4_ -= param1.a[_loc3_ as any];
               param2.a[_loc6_ = _loc3_++ as any] = _loc4_ & const_5;
               _loc4_ >>= class_25.const_3;
            }
            _loc4_ -= param1.s;
         }
         param2.s = _loc4_ < 0 ? -1 : 0;
         if(_loc4_ < -1)
         {
            param2.a[_loc6_ = _loc3_++ as any] = class_25.const_6 + _loc4_;
         }
         else if(_loc4_ > 0)
         {
            param2.a[_loc6_ = _loc3_++ as any] = _loc4_;
         }
         param2.t = _loc3_;
         param2.method_45();
      }
      
      public clone(): class_25
      {
         var _loc1_: class_25 = new (class_25 as any)();
         this.copyTo(_loc1_);
         return _loc1_;
      }
      
      public pow(param1: number): class_25
      {
         return this.method_318(param1,new (NullReduction as any)());
      }
      
      public method_845(param1: number): class_25
      {
         return this.method_233(param1,this.method_308);
      }
      
      public method_810(param1: class_25): class_25
      {
         var _loc2_: class_25 = new (class_25 as any)();
         this.method_116(param1,this.method_308,_loc2_);
         return _loc2_;
      }
      
      public method_822(param1: class_25): class_25
      {
         var _loc2_: class_25 = new (class_25 as any)();
         this.method_116(param1,this.method_245,_loc2_);
         return _loc2_;
      }
      
      public max(param1: class_25): class_25
      {
         return this.method_16(param1) > 0 ? this : param1;
      }
      
      public method_194(param1: number): void
      {
         this.t = 1;
         this.s = param1 < 0 ? -1 : 0;
         if(param1 > 0)
         {
            this.a[0] = param1;
         }
         else if(param1 < -1)
         {
            this.a[0] = param1 + class_25.const_6;
         }
         else
         {
            this.t = 0;
         }
      }
      
      public method_49(): boolean
      {
         return(this.t > 0 ? this.a[0] & 1 : this.s) == 0;
      }
      
      public toString(param1: number = 16): string
      {
         var _loc2_: number = 0;
         if(this.s < 0)
         {
            return "-" + this.method_175().toString(param1);
         }
         switch(param1)
         {
            case 2:
               _loc2_ = 1;
               break;
            case 4:
               _loc2_ = 2;
               break;
            case 8:
               _loc2_ = 3;
               break;
            case 16:
               _loc2_ = 4;
               break;
            case 32:
               _loc2_ = 5;
         }
         var _loc3_: number = (1 << _loc2_) - 1;
         var _loc4_: number = 0;
         var _loc5_: boolean = false;
         var _loc6_: string = "";
         var _loc7_: any = this.t;
         var _loc8_: number = class_25.const_3 - _loc7_ * class_25.const_3 % _loc2_;
         if(_loc7_-- > 0)
         {
            if(_loc8_ < class_25.const_3 && (_loc4_ = this.a[_loc7_ as any] >> _loc8_) > 0)
            {
               _loc5_ = true;
               _loc6_ = _loc4_.toString(36);
            }
            while(_loc7_ >= 0)
            {
               if(_loc8_ < _loc2_)
               {
                  _loc4_ = (this.a[_loc7_ as any] & (1 << _loc8_) - 1) << _loc2_ - _loc8_;
                  _loc4_ = _loc4_ | this.a[--_loc7_ as any] >> (_loc8_ = _loc8_ + (class_25.const_3 - _loc2_));
               }
               else
               {
                  _loc4_ = this.a[_loc7_ as any] >> (_loc8_ = _loc8_ - _loc2_) & _loc3_;
                  if(_loc8_ <= 0)
                  {
                     _loc8_ += class_25.const_3;
                     _loc7_--;
                  }
               }
               if(_loc4_ > 0)
               {
                  _loc5_ = true;
               }
               if(_loc5_)
               {
                  _loc6_ += _loc4_.toString(36);
               }
            }
         }
         return _loc5_ ? _loc6_ : "0";
      }
      
      public method_823(param1: number): class_25
      {
         return this.method_233(param1,this.method_245);
      }
      
      public abs(): class_25
      {
         return this.s < 0 ? this.method_175() : this;
      }
      
      public method_226(param1: number): number
      {
         var _loc3_: number = 0;
         var _loc2_: number = 1;
         _loc3_ = param1 >>> 16;
         if(_loc3_ != 0)
         {
            param1 = _loc3_;
            _loc2_ += 16;
         }
         _loc3_ = param1 >> 8;
         if(_loc3_ != 0)
         {
            param1 = _loc3_;
            _loc2_ += 8;
         }
         _loc3_ = param1 >> 4;
         if(_loc3_ != 0)
         {
            param1 = _loc3_;
            _loc2_ += 4;
         }
         _loc3_ = param1 >> 2;
         if(_loc3_ != 0)
         {
            param1 = _loc3_;
            _loc2_ += 2;
         }
         _loc3_ = param1 >> 1;
         if(_loc3_ != 0)
         {
            param1 = _loc3_;
            _loc2_ += 1;
         }
         return _loc2_;
      }
      
      public sigNum(): number
      {
         if(this.s < 0)
         {
            return -1;
         }
         if(this.t <= 0 || this.t == 1 && this.a[0] <= 0)
         {
            return 0;
         }
         return 1;
      }
      
      public method_575(): ByteArray
      {
         var _loc4_: number = 0;
         var _loc1_: any = this.t;
         var _loc2_: ByteArray = new (ByteArray as any)();
         _loc2_[0] = this.s;
         var _loc3_: number = class_25.const_3 - _loc1_ * class_25.const_3 % 8;
         var _loc5_: any = 0;
         if(_loc1_-- > 0)
         {
            if(_loc3_ < class_25.const_3 && (_loc4_ = this.a[_loc1_ as any] >> _loc3_) != (this.s & const_5) >> _loc3_)
            {
               var _loc6_: number;
               _loc2_[_loc6_ = _loc5_++ as any] = _loc4_ | this.s << class_25.const_3 - _loc3_;
            }
            while(_loc1_ >= 0)
            {
               if(_loc3_ < 8)
               {
                  _loc4_ = (this.a[_loc1_ as any] & (1 << _loc3_) - 1) << 8 - _loc3_;
                  _loc4_ = _loc4_ | this.a[--_loc1_ as any] >> (_loc3_ = _loc3_ + (class_25.const_3 - 8));
               }
               else
               {
                  _loc4_ = this.a[_loc1_ as any] >> (_loc3_ = _loc3_ - 8) & 0xFF;
                  if(_loc3_ <= 0)
                  {
                     _loc3_ += class_25.const_3;
                     _loc1_--;
                  }
               }
               if((_loc4_ & 0x80) != 0)
               {
                  _loc4_ |= -256;
               }
               if(_loc5_ == 0 && (this.s & 0x80) != (_loc4_ & 0x80))
               {
                  _loc5_++;
               }
               if(_loc5_ > 0 || _loc4_ != this.s)
               {
                  _loc2_[_loc6_ = _loc5_++ as any] = _loc4_;
               }
            }
         }
         return _loc2_;
      }
      
      public method_224(param1: class_25): void
      {
         var _loc4_: number = 0;
         var _loc2_: class_25 = this.abs();
         var _loc3_: number = param1.t = 2 * _loc2_.t;
         while(--_loc3_ >= 0)
         {
            param1.a[_loc3_ as any] = 0;
         }
         _loc3_ = 0;
         while(_loc3_ < _loc2_.t - 1)
         {
            _loc4_ = _loc2_.method_75(_loc3_,_loc2_.a[_loc3_ as any],param1,2 * _loc3_,0,1);
            if((param1.a[_loc3_ + _loc2_.t as any] = param1.a[_loc3_ + _loc2_.t as any] + _loc2_.method_75(_loc3_ + 1,2 * _loc2_.a[_loc3_ as any],param1,2 * _loc3_ + 1,_loc4_,_loc2_.t - _loc3_ - 1)) >= class_25.const_6)
            {
               param1.a[_loc3_ + _loc2_.t as any] -= class_25.const_6;
               param1.a[_loc3_ + _loc2_.t + 1 as any] = 1;
            }
            _loc3_++;
         }
         if(param1.t > 0)
         {
            param1.a[param1.t - 1 as any] += _loc2_.method_75(_loc3_,_loc2_.a[_loc3_ as any],param1,2 * _loc3_,0,1);
         }
         param1.s = 0;
         param1.method_45();
      }
      
      private method_747(param1: number, param2: number): number
      {
         return param1 & param2;
      }
      
      protected method_851(param1: string, param2: number = 10): void
      {
         var _loc9_: number = 0;
         this.method_194(0);
         var _loc3_: number = this.method_468(param2);
         var _loc4_: number = Math.pow(param2,_loc3_);
         var _loc6_: number = 0;
         var _loc7_: number = 0;
         var _loc8_: number = 0;
         while(_loc8_ < param1.length)
         {
            _loc9_ = this.method_548(param1,_loc8_);
            if(_loc9_ < 0)
            {
               if(param1.charAt(_loc8_) == "-" && this.sigNum() == 0)
               {
                  var _loc5_: boolean = true;
               }
            }
            else
            {
               _loc7_ = param2 * _loc7_ + _loc9_;
               if(++_loc6_ >= _loc3_)
               {
                  this.method_353(_loc4_);
                  this.method_142(_loc7_,0);
                  _loc6_ = 0;
                  _loc7_ = 0;
               }
            }
            _loc8_++;
         }
         if(_loc6_ > 0)
         {
            this.method_353(Math.pow(param2,_loc6_));
            this.method_142(_loc7_,0);
         }
      }
      
      public method_144(param1: number, param2: class_25): void
      {
         var _loc3_: any = 0;
         _loc3_ = int(this.t - 1);
         while(_loc3_ >= 0)
         {
            param2.a[_loc3_ + param1 as any] = this.a[_loc3_ as any];
            _loc3_--;
         }
         _loc3_ = int(param1 - 1);
         while(_loc3_ >= 0)
         {
            param2.a[_loc3_ as any] = 0;
            _loc3_--;
         }
         param2.t = this.t + param1;
         param2.s = this.s;
      }
      
      private method_308(param1: number, param2: number): number
      {
         return param1 ^ param2;
      }
   }
