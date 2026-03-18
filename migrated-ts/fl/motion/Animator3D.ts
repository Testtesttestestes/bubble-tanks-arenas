// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

import { AnimatorBase } from './AnimatorBase';
import { MatrixTransformer3D } from './MatrixTransformer3D';
import { MotionBase } from './MotionBase';
import { Tweenables } from './Tweenables';

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





   export class Animator3D extends AnimatorBase{
  [key: string]: any;
      
      protected static readonly EPSILON: number = 1e-8;
      private _initialPosition!: Vector3D;
      private _initialMatrixOfTarget!: Matrix3D;
      constructor(param1: XML = null, param2: DisplayObject = null){
         // @ts-ignore
         super(param1,param2);
         this.transformationPoint = new (Point as any)(0,0);
         this._initialPosition = null as any;
         this._initialMatrixOfTarget = null as any;
         this._isAnimator3D = true;
      }
      
      protected static convertMatrixToMatrix3D(param1: Matrix): Matrix3D
      {
         var _loc2_: Array<Number> = new Array<Number>(16);
         _loc2_[0] = param1.a;
         _loc2_[1] = param1.b;
         _loc2_[2] = 0;
         _loc2_[3] = 0;
         _loc2_[4] = param1.c;
         _loc2_[5] = param1.d;
         _loc2_[6] = 0;
         _loc2_[7] = 0;
         _loc2_[8] = 0;
         _loc2_[9] = 0;
         _loc2_[10] = 1;
         _loc2_[11] = 0;
         _loc2_[12] = param1.tx;
         _loc2_[13] = param1.ty;
         _loc2_[14] = 0;
         _loc2_[15] = 1;
         return new (Matrix3D as any)(_loc2_);
      }
      
      protected static getSign(param1: number): number
      {
         return param1 < -Animator3D.EPSILON ? -1 : (param1 > Animator3D.EPSILON ? 1 : 0);
      }
      
      protected setTime3D(param1: number, param2: MotionBase): boolean
      {
         var _loc4_: Matrix3D = null as any;
         var _loc5_: Matrix3D = null as any;
         var _loc6_: number = NaN;
         var _loc7_: number = NaN;
         var _loc8_: number = NaN;
         var _loc9_: number = NaN;
         var _loc10_: number = NaN;
         var _loc11_: number = NaN;
         var _loc12_: Matrix = null as any;
         var _loc13_: Matrix3D = null as any;
         var _loc3_: Matrix3D = param2.getMatrix3D(param1)  as unknown as Matrix3D;
         if(_loc3_)
         {
            _loc4_ = _loc3_.clone();
            if(this._initialMatrixOfTarget)
            {
               _loc4_.append(this._initialMatrixOfTarget);
            }
            this._target.transform.matrix3D = _loc4_;
            return true;
         }
         if(param2.is3D)
         {
            _loc5_ = new (Matrix3D as any)();
            _loc6_ = param2.getValue(param1,Tweenables.ROTATION_X) * Math.PI / 180;
            _loc7_ = param2.getValue(param1,Tweenables.ROTATION_Y) * Math.PI / 180;
            _loc8_ = param2.getValue(param1,Tweenables.ROTATION_CONCAT) * Math.PI / 180;
            _loc5_.prepend(MatrixTransformer3D.rotateAboutAxis(_loc8_,MatrixTransformer3D.AXIS_Z));
            _loc5_.prepend(MatrixTransformer3D.rotateAboutAxis(_loc7_,MatrixTransformer3D.AXIS_Y));
            _loc5_.prepend(MatrixTransformer3D.rotateAboutAxis(_loc6_,MatrixTransformer3D.AXIS_X));
            _loc9_ = param2.getValue(param1,Tweenables.X);
            _loc10_ = param2.getValue(param1,Tweenables.Y);
            _loc11_ = param2.getValue(param1,Tweenables.Z);
            if(Animator3D.getSign(_loc9_) != 0 || Animator3D.getSign(_loc10_) != 0 || Animator3D.getSign(_loc11_) != 0)
            {
               _loc5_.appendTranslation(_loc9_,_loc10_,_loc11_);
            }
            _loc5_.prependTranslation(-this.transformationPoint.x,-this.transformationPoint.y,-this.transformationPointZ);
            if(this._initialPosition)
            {
               _loc5_.appendTranslation(this._initialPosition.x,this._initialPosition.y,this._initialPosition.z);
            }
            _loc12_ = this.getScaleSkewMatrix(param2,param1,this.transformationPoint.x,this.transformationPoint.y);
            _loc13_ = Animator3D.convertMatrixToMatrix3D(_loc12_);
            _loc5_.prepend(_loc13_);
            if(this._initialMatrixOfTarget)
            {
               _loc5_.append(this._initialMatrixOfTarget);
            }
            this._target.transform.matrix3D = _loc5_;
         }
         return false;
      }
      
      public set initialPosition(param1: any)
      {
         if(param1.length == 3)
         {
            this._initialPosition = new (Vector3D as any)();
            (this._initialPosition as any).x = param1[0];
            (this._initialPosition as any).y = param1[1];
            this._initialPosition.z = param1[2];
         }
      }
      
      protected setTargetState(): void
      {
         if(this._target.transform.matrix != null)
         {
            this._initialMatrixOfTarget = Animator3D.convertMatrixToMatrix3D(this._target.transform.matrix);
         }
      }
      
      private getScaleSkewMatrix(param1: MotionBase, param2: number, param3: number, param4: number): Matrix
      {
         var _loc5_: number = param1.getValue(param2,Tweenables.SCALE_X);
         var _loc6_: number = param1.getValue(param2,Tweenables.SCALE_Y);
         var _loc7_: number = param1.getValue(param2,Tweenables.SKEW_X);
         var _loc8_: number = param1.getValue(param2,Tweenables.SKEW_Y);
         var _loc9_: Matrix = new (Matrix as any)();
         _loc9_.translate(-param3,-param4);
         var _loc10_: Matrix = new (Matrix as any)();
         _loc10_.scale(_loc5_,_loc6_);
         _loc9_.concat(_loc10_);
         var _loc11_: Matrix = new (Matrix as any)();
         _loc11_.a = Math.cos(_loc8_ * (Math.PI / 180));
         _loc11_.b = Math.sin(_loc8_ * (Math.PI / 180));
         _loc11_.c = -Math.sin(_loc7_ * (Math.PI / 180));
         _loc11_.d = Math.cos(_loc7_ * (Math.PI / 180));
         _loc9_.concat(_loc11_);
         _loc9_.translate(param3,param4);
         return _loc9_;
      }
   }
