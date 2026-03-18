// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

import { Color } from './Color';
import { KeyframeBase } from './KeyframeBase';

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



   export class MotionBase{
  [key: string]: any;
      
      private _is3D: boolean = false;
      public keyframes!: any;
      private _overrideSkew!: boolean;
      private _overrideScale!: boolean;
      private _overrideRotate!: boolean;
      private _duration: number = 0;
      constructor(param1: XML = null){
         var _loc2_: KeyframeBase = null as any;

         this.keyframes = [];
         if(this.duration == 0)
         {
            _loc2_ = this.getNewKeyframe();
            _loc2_.index = 0;
            this.addKeyframe(_loc2_);
         }
         this._overrideScale = false;
         this._overrideSkew = false;
         this._overrideRotate = false;
      }
      
      public addKeyframe(param1: KeyframeBase): void
      {
         this.keyframes[param1.index as any] = param1;
         if(this.duration < this.keyframes.length)
         {
            this.duration = this.keyframes.length;
         }
      }
      
      public initFilters(param1: any, param2: any, param3: number = -1, param4: number = -1): void
      {
         var _loc6_: any = null as any;
         var _loc7_: number = 0;
         var _loc8_: KeyframeBase = null as any;
         var _loc9_: BitmapFilter = null as any;
         var _loc10_: number = 0;
         if(param3 == -1 || param4 == -1)
         {
            param3 = 0;
            param4 = this.duration;
         }
         var _loc5_: number = 0;
         while(_loc5_ < param1.length)
         {
            _loc6_ = getDefinitionByName(param1[_loc5_ as any])  as unknown as Class;
            _loc7_ = param3;
            while(_loc7_ < param4)
            {
               _loc8_ = (this.keyframes[_loc7_ as any] as unknown as KeyframeBase);
               if(_loc8_ == null)
               {
                  _loc8_ = this.getNewKeyframe();
                  _loc8_.index = _loc7_;
                  this.addKeyframe(_loc8_);
               }
               if(Boolean(_loc8_) && _loc8_.filters == null)
               {
                  _loc8_.filters = new (Array as any)();
               }
               if(Boolean(_loc8_) && Boolean(_loc8_.filters))
               {
                  _loc9_ = null as any;
                  switch(param1[_loc5_ as any])
                  {
                     case "flash.filters.GradientBevelFilter":
                     case "flash.filters.GradientGlowFilter":
                        _loc10_ = int(param2[_loc5_ as any]);
                        _loc9_ = (new (_loc6_ as any)(4,45,new (Array as any)(_loc10_),new (Array as any)(_loc10_),new (Array as any)(_loc10_)) as unknown as BitmapFilter);
                        break;
                     default:
                        _loc9_ = (new (_loc6_ as any)() as unknown as BitmapFilter);
                  }
                  if(_loc9_)
                  {
                     _loc8_.filters.push(_loc9_ as any);
                  }
               }
               _loc7_++;
            }
            _loc5_++;
         }
      }
      
      public getCurrentKeyframe(param1: number, param2: string = ""): KeyframeBase
      {
         var _loc4_: KeyframeBase = null as any;
         if(isNaN(param1) || param1 < 0 || param1 > this.duration - 1)
         {
            return null;
         }
         var _loc3_: any = param1;
         while(_loc3_ > 0)
         {
            _loc4_ = this.keyframes[_loc3_ as any];
            if((Boolean(_loc4_)) && _loc4_.affectsTweenable(param2))
            {
               return _loc4_;
            }
            _loc3_--;
         }
         return this.keyframes[0];
      }
      
      public addFilterPropertyArray(param1: number, param2: string, param3: any, param4: number = -1, param5: number = -1): void
      {
         var _loc10_: KeyframeBase = null as any;
         var _loc11_: any = undefined;
         var _loc12_: number = 0;
         var _loc6_: number = int(param3.length);
         var _loc7_: any = null as any;
         var _loc8_: boolean = true;
         if(_loc6_ > 0)
         {
            if(param3[0] instanceof Number)
            {
               _loc8_ = false;
            }
         }
         if(this.duration < _loc6_)
         {
            this.duration = _loc6_;
         }
         if(param4 == -1 || param5 == -1)
         {
            param4 = 0;
            param5 = this.duration;
         }
         var _loc9_: number = param4;
         while(_loc9_ < param5)
         {
            _loc10_ = (this.keyframes[_loc9_ as any] as unknown as KeyframeBase);
            if(_loc10_ == null)
            {
               _loc10_ = this.getNewKeyframe();
               _loc10_.index = _loc9_;
               this.addKeyframe(_loc10_);
            }
            _loc11_ = _loc7_;
            _loc12_ = _loc9_ - param4;
            if(_loc12_ < param3.length)
            {
               if(Boolean(param3[_loc12_ as any]) || !_loc8_)
               {
                  _loc11_ = param3[_loc12_ as any];
               }
            }
            switch (param2 as any)
            {
               case "adjustColorBrightness":
               case "adjustColorContrast":
               case "adjustColorSaturation":
               case "adjustColorHue":
                  _loc10_.setAdjustColorProperty(param1,param2,_loc11_);
                  break;
               default:
                  if(param1 < _loc10_.filters.length)
                  {
                     _loc10_.filters[param1 as any][param2] = _loc11_;
                  }
            }
            _loc7_ = _loc11_;
            _loc9_++;
         }
      }
      
      public get duration(): number
      {
         if(this._duration < this.keyframes.length)
         {
            this._duration = this.keyframes.length;
         }
         return this._duration;
      }
      
      public useRotationConcat(param1: number): boolean
      {
         var _loc2_: KeyframeBase = this.getCurrentKeyframe(param1,"rotationConcat");
         return _loc2_ ? _loc2_.useRotationConcat : false;
      }
      
      public get is3D(): boolean
      {
         return this._is3D;
      }
      
      public getFilters(param1: number): any
      {
         var _loc2_: any = null as any;
         var _loc3_: KeyframeBase = this.getCurrentKeyframe(param1,"filters");
         if(!_loc3_ || Boolean(_loc3_.filters) && Boolean(!_loc3_.filters.length))
         {
            return [];
         }
         var _loc4_: any = _loc3_.filters;
         var _loc5_: number = param1 - _loc3_.index;
         if(_loc5_ == 0)
         {
            _loc2_ = _loc4_;
         }
         return _loc2_;
      }
      
      protected findTweenedValue(param1: number, param2: string, param3: KeyframeBase, param4: number, param5: number): number
      {
         return NaN;
      }
      
      public addPropertyArray(param1: string, param2: any, param3: number = -1, param4: number = -1): void
      {
         var _loc10_: KeyframeBase = null as any;
         var _loc11_: any = undefined;
         var _loc12_: number = 0;
         var _loc13_: any = undefined;
         var _loc5_: number = int(param2.length);
         var _loc6_: any = null as any;
         var _loc7_: boolean = true;
         var _loc8_: number = 0;
         if(_loc5_ > 0)
         {
            if(param2[0] instanceof Number)
            {
               _loc7_ = false;
               if(param2[0] instanceof Number)
               {
                  _loc8_ = Number(param2[0]);
               }
            }
         }
         if(this.duration < _loc5_)
         {
            this.duration = _loc5_;
         }
         if(param3 == -1 || param4 == -1)
         {
            param3 = 0;
            param4 = this.duration;
         }
         var _loc9_: number = param3;
         while(_loc9_ < param4)
         {
            _loc10_ = (this.keyframes[_loc9_ as any] as unknown as KeyframeBase);
            if(_loc10_ == null)
            {
               _loc10_ = this.getNewKeyframe();
               _loc10_.index = _loc9_;
               this.addKeyframe(_loc10_);
            }
            if(Boolean(_loc10_.filters) && _loc10_.filters.length == 0)
            {
               _loc10_.filters = null as any;
            }
            _loc11_ = _loc6_;
            _loc12_ = _loc9_ - param3;
            if(_loc12_ < param2.length)
            {
               if(Boolean(param2[_loc12_ as any]) || !_loc7_)
               {
                  _loc11_ = param2[_loc12_ as any];
               }
            }
            switch (param1 as any)
            {
               case "blendMode":
                  _loc10_.blendMode = _loc11_;
                  break;
               case "matrix3D":
                  _loc10_[param1 as any] = _loc11_;
                  break;
               case "rotationConcat":
                  _loc10_.useRotationConcat = true;
                  if(!this._overrideRotate && !_loc7_)
                  {
                     _loc10_.setValue(param1,(_loc11_ - _loc8_) * Math.PI / 180);
                  }
                  else
                  {
                     _loc10_.setValue(param1,_loc11_ * Math.PI / 180);
                  }
                  break;
               case "brightness":
               case "tintMultiplier":
               case "tintColor":
               case "alphaMultiplier":
               case "alphaOffset":
               case "redMultiplier":
               case "redOffset":
               case "greenMultiplier":
               case "greenOffset":
               case "blueMultiplier":
               case "blueOffset":
                  if(_loc10_.color == null)
                  {
                     _loc10_.color = new (Color as any)();
                  }
                  _loc10_.color[param1 as any] = _loc11_;
                  break;
               case "rotationZ":
                  _loc10_.useRotationConcat = true;
                  this._is3D = true;
                  if(!this._overrideRotate && !_loc7_)
                  {
                     _loc10_.setValue("rotationConcat",_loc11_ - _loc8_);
                  }
                  else
                  {
                     _loc10_.setValue("rotationConcat",_loc11_);
                  }
                  break;
               case "rotationX":
               case "rotationY":
               case "z":
                  this._is3D = true;
                  _loc13_ = _loc11_;
                  if(!_loc7_)
                  {
                     switch (param1 as any)
                     {
                        case "scaleX":
                        case "scaleY":
                           if(!this._overrideScale)
                           {
                              if(_loc8_ == 0)
                              {
                                 _loc13_ = _loc11_ + 1;
                                 break;
                              }
                              _loc13_ = _loc11_ / _loc8_;
                           }
                           break;
                        case "skewX":
                        case "skewY":
                           if(!this._overrideSkew)
                           {
                              _loc13_ = _loc11_ - _loc8_;
                           }
                           break;
                        case "rotationX":
                        case "rotationY":
                           if(!this._overrideRotate)
                           {
                              _loc13_ = _loc11_ - _loc8_;
                           }
                     }
                  }
            }
            _loc10_.setValue(param1,_loc13_);
            _loc6_ = _loc11_;
            _loc9_++;
         }
      }
      
      public getMatrix3D(param1: number): any
      {
         var _loc2_: KeyframeBase = this.getCurrentKeyframe(param1,"matrix3D");
         return _loc2_ ? _loc2_.matrix3D : null;
      }
      
      public setValue(param1: number, param2: string, param3: number): void
      {
         if(param1 == 0)
         {
            return;
         }
         var _loc4_: KeyframeBase = this.keyframes[param1 as any];
         if(!_loc4_)
         {
            _loc4_ = this.getNewKeyframe();
            _loc4_.index = param1;
            this.addKeyframe(_loc4_);
         }
         _loc4_.setValue(param2,param3);
      }
      
      private indexOutOfRange(param1: number): boolean
      {
         return isNaN(param1) || param1 < 0 || param1 > this.duration - 1;
      }
      
      public overrideTargetTransform(param1: boolean = true, param2: boolean = true, param3: boolean = true): void
      {
         this._overrideScale = param1;
         this._overrideSkew = param2;
         this._overrideRotate = param3;
      }
      
      public set duration(param1: number)
      {
         if(param1 < this.keyframes.length)
         {
            param1 = int(this.keyframes.length);
         }
         this._duration = param1;
      }
      
      protected getNewKeyframe(param1: XML = null): KeyframeBase
      {
         return new (KeyframeBase as any)(param1);
      }
      
      public getValue(param1: number, param2: string): number
      {
         var _loc3_: number = NaN;
         var _loc4_: KeyframeBase = this.getCurrentKeyframe(param1,param2);
         if(!_loc4_ || _loc4_.blank)
         {
            return NaN;
         }
         var _loc5_: number = _loc4_.getValue(param2);
         if(isNaN(_loc5_) && _loc4_.index > 0)
         {
            _loc5_ = this.getValue(_loc4_.index - 1,param2);
         }
         if(isNaN(_loc5_))
         {
            return NaN;
         }
         var _loc6_: number = param1 - _loc4_.index;
         if(_loc6_ == 0)
         {
            return _loc5_;
         }
         return this.findTweenedValue(param1,param2,_loc4_,_loc6_,_loc5_);
      }
      
      public set is3D(param1: boolean)
      {
         this._is3D = param1;
      }
      
      public getNextKeyframe(param1: number, param2: string = ""): KeyframeBase
      {
         var _loc4_: KeyframeBase = null as any;
         if(isNaN(param1) || param1 < 0 || param1 > this.duration - 1)
         {
            return null;
         }
         var _loc3_: number = param1 + 1;
         while(_loc3_ < this.keyframes.length)
         {
            _loc4_ = this.keyframes[_loc3_ as any];
            if((Boolean(_loc4_)) && _loc4_.affectsTweenable(param2))
            {
               return _loc4_;
            }
            _loc3_++;
         }
         return null;
      }
      
      public getColorTransform(param1: number): ColorTransform
      {
         var _loc2_: ColorTransform = null as any;
         var _loc3_: KeyframeBase = this.getCurrentKeyframe(param1,"color");
         if(!_loc3_ || !_loc3_.color)
         {
            return null;
         }
         var _loc4_: ColorTransform = _loc3_.color;
         var _loc5_: number = param1 - _loc3_.index;
         if(_loc5_ == 0)
         {
            _loc2_ = _loc4_;
         }
         return _loc2_;
      }
   }
