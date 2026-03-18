// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.rsa

import { class_25 } from '../../../../package_10/class_25';
import { class_27 } from '../../../../package_3/class_27';
import { class_26 } from '../../../../package_9/class_26';

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




   export class class_19{
  [key: string]: any;
      
      public dmp1!: class_25;
      protected var_515!: boolean;
      public d!: class_25;
      public e!: number;
      public dmq1!: class_25;
      public n!: class_25;
      public p!: class_25;
      public q!: class_25;
      protected var_489!: boolean;
      public var_327!: class_25;
      constructor(param1: class_25, param2: number, param3: class_25 = null, param4: class_25 = null, param5: class_25 = null, param6: class_25 = null, param7: class_25 = null, param8: class_25 = null){

         var var_327: any, var_489: any, var_515: any;


         this.n = param1;
         this.e = param2;
         this.d = param3;
         this.p = param4;
         this.q = param5;
         this.dmp1 = param6;
         this.dmq1 = param7;
         this.var_327 = param8;
         this.var_489 = this.n != null && this.e != 0;
         this.var_515 = this.var_489 && this.d != null as any;
      }
      
      protected static method_219(param1: number, param2: class_26): class_25
      {
         if(param1 < 2)
         {
            return class_25.method_28(1);
         }
         var _loc3_: ByteArray = new (ByteArray as any)();
         param2.method_473(_loc3_,param1 >> 3);
         _loc3_.position = 0;
         var _loc4_: class_25 = new (class_25 as any)(_loc3_);
         _loc4_.method_597(param1,1);
         return _loc4_;
      }
      
      public static method_659(param1: string, param2: string): class_19
      {
         return new (class_19 as any)(new (class_25 as any)(param1,16),parseInt(param2,16));
      }
      
      public static generate(param1: number, param2: string): class_19
      {
         var _loc7_: class_25 = null as any;
         var _loc8_: class_25 = null as any;
         var _loc9_: class_25 = null as any;
         var _loc10_: class_25 = null as any;
         var _loc3_: class_26 = new (class_26 as any)();
         var _loc4_: number = uint(param1 >> 1);
         var _loc5_: class_19 = new (class_19 as any)(null,0,null);
         _loc5_.e = parseInt(param2,16);
         var _loc6_: class_25 = new (class_25 as any)(param2,16);
         while(true)
         {
            _loc5_.p = class_19.method_219(param1 - _loc4_,_loc3_);
            if(_loc5_.p.method_95(class_25.const_4).method_279(_loc6_).method_16(class_25.const_4) == 0 && _loc5_.p.method_268(10))
            {
               do
               {
                  _loc5_.q = class_19.method_219(_loc4_,_loc3_);
               }
               while(!(_loc5_.q.method_95(class_25.const_4).method_279(_loc6_).method_16(class_25.const_4) == 0 && _loc5_.q.method_268(10)));
               if(_loc5_.p.method_16(_loc5_.q) <= 0)
               {
                  _loc10_ = _loc5_.p;
                  _loc5_.p = _loc5_.q;
                  _loc5_.q = _loc10_;
               }
               _loc7_ = _loc5_.p.method_95(class_25.const_4);
               _loc8_ = _loc5_.q.method_95(class_25.const_4);
               _loc9_ = _loc7_.method_120(_loc8_);
               if(_loc9_.method_279(_loc6_).method_16(class_25.const_4) == 0)
               {
                  break;
               }
            }
         }
         _loc5_.n = _loc5_.p.method_120(_loc5_.q);
         _loc5_.d = _loc6_.method_319(_loc9_);
         _loc5_.dmp1 = _loc5_.d.method_76(_loc7_);
         _loc5_.dmq1 = _loc5_.d.method_76(_loc8_);
         _loc5_.var_327 = _loc5_.q.method_319(_loc5_.p);
         return _loc5_;
      }
      
      public static method_838(param1: string, param2: string, param3: string, param4: string = null, param5: string = null, param6: string = null, param7: string = null, param8: string = null): class_19
      {
         if(param4 == null)
         {
            return new (class_19 as any)(new (class_25 as any)(param1,16),parseInt(param2,16),new (class_25 as any)(param3,16));
         }
         return new (class_19 as any)(new (class_25 as any)(param1,16),parseInt(param2,16),new (class_25 as any)(param3,16),new (class_25 as any)(param4,16),new (class_25 as any)(param5,16),new (class_25 as any)(param6,16),new (class_25 as any)(param7),new (class_25 as any)(param8));
      }
      
      public method_850(param1: ByteArray, param2: ByteArray, param3: number, param4: Function = null): void
      {
         this.method_435(this.method_324,param1,param2,param3,param4,1);
      }
      
      protected doPrivate2(param1: class_25): class_25
      {
         if(this.p == null && this.q == null)
         {
            return param1.method_102(this.d,this.n);
         }
         var _loc2_: class_25 = param1.method_76(this.p).method_102(this.dmp1,this.p);
         var _loc3_: class_25 = param1.method_76(this.q).method_102(this.dmq1,this.q);
         while(_loc2_.method_16(_loc3_) < 0)
         {
            _loc2_ = _loc2_.add(this.p);
         }
         return _loc2_.method_95(_loc3_).method_120(this.var_327).method_76(this.p).method_120(this.q).add(_loc3_);
      }
      
      public method_852(): string
      {
         var var_515: any, var_327: any;

         var _loc1_: string = "N=" + this.n.toString(16) + "\n" + "E=" + this.e.toString(16) + "\n";
         if(this.var_515)
         {
            _loc1_ += "D=" + this.d.toString(16) + "\n";
            if(this.p != null && this.q != null)
            {
               _loc1_ += "P=" + this.p.toString(16) + "\n";
               _loc1_ += "Q=" + this.q.toString(16) + "\n";
               _loc1_ += "DMP1=" + this.dmp1.toString(16) + "\n";
               _loc1_ += "DMQ1=" + this.dmq1.toString(16) + "\n";
               _loc1_ += "IQMP=" + this.var_327.toString(16) + "\n";
            }
         }
         return _loc1_;
      }
      
      public decrypt(param1: ByteArray, param2: ByteArray, param3: number, param4: Function = null): void
      {
         this.method_435(this.doPrivate2,param1,param2,param3,param4,2);
      }
      
      private method_435(param1: Function, param2: ByteArray, param3: ByteArray, param4: number, param5: Function, param6: number): void
      {
         var _loc9_: class_25 = null as any;
         var _loc10_: class_25 = null as any;
         var _loc11_: ByteArray = null as any;
         if(param5 == null)
         {
            param5 = this.pkcs1unpad;
         }
         if(param2.position >= param2.length)
         {
            param2.position = 0;
         }
         var _loc7_: number = this.method_53();
         var _loc8_: number = param2.position + param4;
         while(param2.position < _loc8_)
         {
            _loc9_ = new (class_25 as any)(param2,param4);
            _loc10_ = param1(_loc9_);
            _loc11_ = param5(_loc10_,_loc7_);
            param3.writeBytes(_loc11_);
         }
      }
      
      protected method_324(param1: class_25): class_25
      {
         return param1.method_361(this.e,this.n);
      }
      
      public dispose(): void
      {
         this.e = 0;
         this.n.dispose();
         this.n = null as any;
         class_27.method_59();
      }
      
      private method_412(param1: Function, param2: ByteArray, param3: ByteArray, param4: number, param5: Function, param6: number): void
      {
         var _loc9_: class_25 = null as any;
         var _loc10_: class_25 = null as any;
         if(param5 == null)
         {
            param5 = this.pkcs1pad;
         }
         if(param2.position >= param2.length)
         {
            param2.position = 0;
         }
         var _loc7_: number = this.method_53();
         var _loc8_: number = param2.position + param4;
         while(param2.position < _loc8_)
         {
            _loc9_ = new (class_25 as any)(param5(param2,_loc8_,_loc7_,param6),_loc7_);
            _loc10_ = param1(_loc9_);
            _loc10_.toArray(param3);
         }
      }
      
      private method_807(param1: ByteArray, param2: number, param3: number): ByteArray
      {
         return param1;
      }
      
      public encrypt(param1: ByteArray, param2: ByteArray, param3: number, param4: Function = null): void
      {
         this.method_412(this.method_324,param1,param2,param3,param4,2);
      }
      
      private pkcs1pad(param1: ByteArray, param2: number, param3: number, param4: number = 2): ByteArray
      {
         var _loc9_: number = 0;
         var _loc5_: ByteArray = new (ByteArray as any)();
         var _loc6_: number = param1.position;
         param2 = Math.min(param2,param1.length,_loc6_ + param3 - 11);
         param1.position = param2;
         var _loc7_: any = int(param2 - 1);
         while(_loc7_ >= _loc6_ && param3 > 11)
         {
            var _loc10_: number;
            _loc5_[_loc10_ = --param3 as any] = param1[_loc7_-- as any];
         }
         _loc5_[_loc10_ = --param3 as any] = 0;
         var _loc8_: class_26 = new (class_26 as any)();
         while(param3 > 2)
         {
            _loc9_ = 0;
            while(_loc9_ == 0)
            {
               _loc9_ = param4 == 2 ? _loc8_.method_68() : 255;
            }
            var _loc11_: number;
            _loc5_[_loc11_ = --param3 as any] = _loc9_;
         }
         _loc5_[_loc11_ = --param3 as any] = param4;
         var _loc12_: number;
         _loc5_[_loc12_ = --param3 as any] = 0;
         return _loc5_;
      }
      
      private pkcs1unpad(param1: class_25, param2: number, param3: number = 2): ByteArray
      {
         var _loc4_: ByteArray = param1.method_575();
         var _loc5_: ByteArray = new (ByteArray as any)();
         var _loc6_: number = 0;
         while(_loc6_ < _loc4_.length && _loc4_[_loc6_ as any] == 0)
         {
            _loc6_++;
         }
         if(_loc4_.length - _loc6_ != param2 - 1 || _loc4_[_loc6_ as any] > 2)
         {
            return null;
         }
         _loc6_++;
         while(_loc4_[_loc6_ as any] != 0)
         {
            if(++_loc6_ >= _loc4_.length)
            {
               return null;
            }
         }
         while(++_loc6_ < _loc4_.length)
         {
            _loc5_.writeByte(_loc4_[_loc6_ as any]);
         }
         _loc5_.position = 0;
         return _loc5_;
      }
      
      public method_53(): number
      {
         return(this.n.method_298() + 7) / 8;
      }
      
      public toString(): string
      {
         return "rsa";
      }
      
      public method_779(param1: ByteArray, param2: ByteArray, param3: number, param4: Function = null): void
      {
         this.method_412(this.doPrivate2,param1,param2,param3,param4,1);
      }
      
      protected method_840(param1: class_25): class_25
      {
         if(this.p == null || this.q == null)
         {
            return param1.method_102(this.d,this.n);
         }
         var _loc2_: class_25 = param1.method_76(this.p).method_102(this.dmp1,this.p);
         var _loc3_: class_25 = param1.method_76(this.q).method_102(this.dmq1,this.q);
         while(_loc2_.method_16(_loc3_) < 0)
         {
            _loc2_ = _loc2_.add(this.p);
         }
         return _loc2_.method_95(_loc3_).method_120(this.var_327).method_76(this.p).method_120(this.q).add(_loc3_);
      }
   }
