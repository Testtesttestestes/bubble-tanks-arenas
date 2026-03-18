// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

import { KeyframeBase } from './KeyframeBase';
import { MotionBase } from './MotionBase';
import { MotionEvent } from './MotionEvent';

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










   export class AnimatorBase extends EventDispatcher{
  [key: string]: any;
      
      private static _registeredParents: Dictionary = new (Dictionary as any)(true);
      private static enterFrameBeacon: MovieClip & Record<string, any> = new (MovieClip as any)();
      public transformationPoint!: Point;
      protected targetState!: any;
      private _isPlaying: boolean = false;
      private _time: number = -1;
      protected _target!: DisplayObject;
      public repeatCount: number = 1;
      private _lastRenderedTime: number = -1;
      private _spanStart: number = -1;
      public transformationPointZ!: number;
      protected _isAnimator3D!: boolean;
      private _sceneName: string = "";
      public positionMatrix!: Matrix;
      private _frameEvent: string = "enterFrame";
      public autoRewind: boolean = false;
      private _motion!: MotionBase;
      private _targetName: string = "";
      private _useCurrentFrame: boolean = false;
      private playCount: number = 0;
      public orientToPath: boolean = false;
      private targetStateOriginal: any = null as any;
      private _targetState3D: any = null as any;
      private _targetParent: DisplayObjectContainer = null as any;
      constructor(param1: XML = null, param2: DisplayObject = null){
         // @ts-ignore
         super();
         this.target = param2;
         this._isAnimator3D = false;
         this.transformationPoint = new (Point as any)(0[5],0[5]);
         this.transformationPointZ = 0;
         this._sceneName = "";
      }
      
      public static processCurrentFrame(param1: MovieClip, param2: AnimatorBase, param3: boolean, param4: boolean = false): void
      {
         var _loc5_: number = 0;
         var _loc6_: number = 0;
         if(Boolean(param2) && Boolean(param1))
         {
            if(!param1.root)
            {
               if(param2.usingCurrentFrame && !param2.isPlaying && param4)
               {
                  param2.startFrameEvents();
               }
               return;
            }
            if(param2.usingCurrentFrame)
            {
               _loc5_ = param1.currentFrame - 1;
               if(param1.scenes.length > 1)
               {
                  if(param1.currentScene.name != param2.sceneName)
                  {
                     _loc5_ = -1;
                  }
               }
               if(_loc5_ >= param2.spanStart && _loc5_ <= param2.spanEnd)
               {
                  _loc6_ = _loc5_ - param2.spanStart;
                  if(!param2.isPlaying)
                  {
                     param2.play(_loc6_,param3);
                  }
                  else if(!param4)
                  {
                     if(_loc5_ == param2.spanEnd)
                     {
                        param2.handleLastFrame(true,false);
                     }
                     else
                     {
                        param2.time = _loc6_;
                     }
                  }
               }
               else if(param2.isPlaying && !param4)
               {
                  param2.end(true,false);
               }
               else if(!param2.isPlaying && param4)
               {
                  param2.startFrameEvents();
               }
            }
            else if(Boolean(param2.targetParent) && Boolean(param2.targetParent[param2.targetName as any] == null) && param2.targetParent.getChildByName(param2.targetName) == null)
            {
               if(param2.isPlaying)
               {
                  param2.end(true,false);
               }
               else if(param4)
               {
                  param2.startFrameEvents();
               }
            }
            else if(!param2.isPlaying)
            {
               if(param4)
               {
                  param2.play(0,param3);
               }
            }
            else if(!param4)
            {
               param2.nextFrame(false,false);
            }
         }
      }
      
      public static registerParentFrameHandler(param1: MovieClip, param2: AnimatorBase, param3: number, param4: number = 0, param5: boolean = false): void
      {
         var _loc6_: AnimatorParent = AnimatorBase._registeredParents[param1 as any]  as unknown as AnimatorParent;
         if(_loc6_ == null)
         {
            _loc6_ = new (this.AnimatorParent as any)();
            _loc6_.parent = param1;
            AnimatorBase._registeredParents[param1 as any] = _loc6_;
         }
         if(param3 == -1)
         {
            param3 = param1.currentFrame - 1;
         }
         if(param5)
         {
            param2.useCurrentFrame(true,param3);
         }
         else
         {
            param2.repeatCount = param4;
         }
         _loc6_.animators.push(param2 as any);
      }
      
      private static parentEnterFrameHandler(param1: any): void
      {
         var _loc2_: any = undefined;
         var _loc3_: AnimatorParent = null as any;
         var _loc4_: MovieClip = null as any;
         var _loc5_: any = null as any;
         var _loc6_: number = 0;
         var _loc7_: AnimatorBase = null as any;
         for (let _loc2_ in AnimatorBase._registeredParents)
         {
            _loc3_ = AnimatorBase._registeredParents[_loc2_ as any]  as unknown as AnimatorParent;
            if(_loc3_)
            {
               _loc4_ = _loc3_.parent;
               _loc5_ = _loc3_.animators;
               if(!(!_loc4_ || !_loc5_))
               {
                  _loc6_ = 0;
                  while(_loc6_ < _loc5_.length)
                  {
                     _loc7_ = _loc5_[_loc6_ as any]  as unknown as AnimatorBase;
                     if(!_loc7_.usingCurrentFrame || _loc4_.currentFrame != _loc3_.lastFrameHandled)
                     {
                        AnimatorBase.processCurrentFrame(_loc4_,_loc7_,false);
                     }
                     _loc6_++;
                  }
                  _loc3_.lastFrameHandled = _loc4_.currentFrame;
               }
            }
         }
      }
      
      public static registerButtonState(param1: SimpleButton, param2: AnimatorBase, param3: number): void
      {
         var _loc4_: DisplayObject = param1.upState;
         switch(param3)
         {
            case 1:
               _loc4_ = param1.overState;
               break;
            case 2:
               _loc4_ = param1.downState;
               break;
            case 3:
               _loc4_ = param1.hitTestState;
         }
         if(!_loc4_)
         {
            return;
         }
         param2.target = _loc4_;
         param2.time = 0;
      }
      
      private static get hasRegisteredParents(): boolean
      {
         var _loc1_: any = undefined;
         var _loc2_: number = 0;
         var _loc3_: any = AnimatorBase._registeredParents;
         for (let _loc1_ in _loc3_)
         {
            return true;
         }
         return false;
      }
      
      protected setTime3D(param1: number, param2: MotionBase): boolean
      {
         return false;
      }
      
      private handleLastFrame(param1: boolean = false, param2: boolean = true): void
      {
         ++this.playCount;
         if(this.repeatCount == 0 || this.playCount < this.repeatCount)
         {
            this.rewind();
         }
         else
         {
            this.end(param1,param2);
         }
      }
      
      public get targetState3D(): any
      {
         return this._targetState3D;
      }
      
      public get target(): DisplayObject
      {
         return this._target;
      }
      
      private get enterFrameHandler(): Function
      {
         if(AnimatorBase.hasRegisteredParents)
         {
            return AnimatorBase.parentEnterFrameHandler;
         }
         return this.handleEnterFrame;
      }
      
      public get usingCurrentFrame(): boolean
      {
         return this._useCurrentFrame;
      }
      
      public set initialPosition(param1: any)
      {
      }
      
      public useCurrentFrame(param1: boolean, param2: number): void
      {
         this._useCurrentFrame = param1;
         this._spanStart = param2;
      }
      
      public set time(param1: number)
      {


         if(param1 == this._time)
         {
            return;
         }
         var _loc2_: MotionBase = this.motion;
         if(param1 > _loc2_.duration - 1)
         {
            param1 = _loc2_.duration - 1;
         }
         else if(param1 < 0)
         {
            param1 = 0;
         }
         this._time = param1;
         this.dispatchEvent(new (MotionEvent as any)(MotionEvent.TIME_CHANGE));
         var _loc3_: KeyframeBase = _loc2_.getCurrentKeyframe(param1);
         var _loc4_: boolean = _loc3_.index == this._lastRenderedTime && !_loc3_.tweensLength;
         if(_loc4_)
         {
            return;
         }
         (this._target as any).visible = false;
         if(!_loc3_.blank)
         {
            if(this._isAnimator3D)
            {
               this.setTime3D(param1,_loc2_);
            }
            else
            {
               this.setTimeClassic(param1,_loc2_,_loc3_);
            }
            var _loc5_: ColorTransform = _loc2_.getColorTransform(param1);
            if(_loc5_)
            {
               this._target.transform.colorTransform = null as any;
            }
            var _loc6_: any = _loc2_.getFilters(param1);
            if(_loc6_)
            {
               this._target.filters = null as any;
            }
            this._target.blendMode = _loc3_.blendMode;
            (this._target as any).visible = true;
         }
         this._lastRenderedTime = this._time;
         this.dispatchEvent(new (MotionEvent as any)(MotionEvent.MOTION_UPDATE));
      }
      
      public set target(param1: DisplayObject)
      {
         if(!param1)
         {
            return;
         }
         this._target = param1;
         var _loc2_: boolean = false;
         if(Boolean(this.targetParent) && this.targetName != "")
         {
            if(this.targetStateOriginal)
            {
               this.targetState = this.targetStateOriginal;
               return;
            }
            _loc2_ = true;
         }
         this.targetState = {};
         this.setTargetState();
         if(_loc2_)
         {
            this.targetStateOriginal = this.targetState;
         }
      }
      
      public get isPlaying(): boolean
      {
         return this._isPlaying;
      }
      
      public startFrameEvents(): void
      {
         AnimatorBase.enterFrameBeacon.addEventListener(this.frameEvent, this.enterFrameHandler.bind(this));
      }
      
      public get frameEvent(): string
      {
         return this._frameEvent;
      }
      
      public stop(): void
      {
         AnimatorBase.enterFrameBeacon.removeEventListener(this.frameEvent, this.enterFrameHandler.bind(this));
         this._isPlaying = false;
         this.playCount = 0;
         this.rewind();
         this.dispatchEvent(new (MotionEvent as any)(MotionEvent.MOTION_END));
      }
      
      public get spanEnd(): number
      {
         if(Boolean(this._motion) && this._motion.duration > 0)
         {
            return this._spanStart + this._motion.duration - 1;
         }
         return this._spanStart;
      }
      
      public get targetParent(): DisplayObjectContainer
      {
         return this._targetParent;
      }
      
      public get spanStart(): number
      {
         return this._spanStart;
      }
      
      public play(param1: number = -1, param2: boolean = true): void
      {
         if(!this._isPlaying)
         {
            if(Boolean(this._target == null) && Boolean(this._targetParent) && this._targetName != "")
            {
               this.target = this._targetParent[this._targetName as any];
               if(!this.target)
               {
                  this.target = this._targetParent.getChildByName(this._targetName);
               }
            }
            if(param2)
            {
               AnimatorBase.enterFrameBeacon.addEventListener(this.frameEvent, this.enterFrameHandler.bind(this));
            }
            if(!this.target)
            {
               return;
            }
            this._isPlaying = true;
         }
         this.playCount = 0;
         if(param1 > -1)
         {
            this.time = param1;
         }
         else
         {
            this.rewind();
         }
         this.dispatchEvent(new (MotionEvent as any)(MotionEvent.MOTION_START));
      }
      
      public get targetName(): string
      {
         return this._targetName;
      }
      
      public set targetParent(param1: DisplayObjectContainer)
      {
         this._targetParent = param1;
      }
      
      protected setTargetState(): void
      {
      }
      
      protected setTimeClassic(param1: number, param2: MotionBase, param3: KeyframeBase): boolean
      {
         return false;
      }
      
      private handleEnterFrame(param1: any): void
      {
         this.nextFrame();
      }
      
      public get motion(): MotionBase
      {
         return this._motion;
      }
      
      public get sceneName(): string
      {
         return this._sceneName;
      }
      
      public nextFrame(param1: boolean = false, param2: boolean = true): void
      {
         if(this.time >= this.motion.duration - 1)
         {
            this.handleLastFrame(param1,param2);
         }
         else
         {
            ++this.time;
         }
      }
      
      public get time(): number
      {
         return this._time;
      }
      
      public resume(): void
      {
         AnimatorBase.enterFrameBeacon.addEventListener(this.frameEvent, this.enterFrameHandler.bind(this));
         this._isPlaying = true;
      }
      
      public rewind(): void
      {
         this.time = 0;
      }
      
      public set frameEvent(param1: string)
      {
         this._frameEvent = param1;
      }
      
      public set targetState3D(param1: any)
      {
         this._targetState3D = param1;
      }
      
      public end(param1: boolean = false, param2: boolean = true): void
      {
         if(param2)
         {
            AnimatorBase.enterFrameBeacon.removeEventListener(this.frameEvent, this.enterFrameHandler.bind(this));
         }
         this._isPlaying = false;
         this.playCount = 0;
         if(this.autoRewind)
         {
            this.rewind();
         }
         else if(this.time != this.motion.duration - 1)
         {
            this.time = this.motion.duration - 1;
         }
         if(param1)
         {
            if(Boolean(this._targetParent) && this._targetName != "")
            {
               this._target = null as any;
            }
            this._lastRenderedTime = -1;
            this._time = -1;
         }
         this.dispatchEvent(new (MotionEvent as any)(MotionEvent.MOTION_END));
      }
      
      public set motion(param1: MotionBase)
      {
         this._motion = param1;
      }
      
      public set sceneName(param1: string)
      {
         this._sceneName = param1;
      }
      
      public pause(): void
      {
         AnimatorBase.enterFrameBeacon.removeEventListener(this.frameEvent, this.enterFrameHandler.bind(this));
         this._isPlaying = false;
      }
      
      public set targetName(param1: string)
      {
         this._targetName = param1;
      }
   }

// @ts-ignore

export class AnimatorParent{
   
   public parent: MovieClip & Record<string, any> = null as any;
   public lastFrameHandled: number = -1;
   public animators: any = new (Array as any)();
   public AnimatorParent(): void{
      // @ts-ignore
      super();
   }
}
