// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { BTAGameWorld } from './BTAGameWorld';
import { class_109 } from './class_109';
import { class_113 } from './class_113';
import { class_49 } from './class_49';
import { class_6 } from './class_6';
import { class_66 } from './class_66';

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
export class class_68 extends MovieClip{
  [key: string]: any;
      
      public var_465!: number;
      public blnEnemy!: boolean;
      public objSpecialData!: any;
      public objBFRef!: class_109;
      public blnReadyForDeleteQueue!: boolean;
      public moveX!: number;
      public moveY!: number;
      public blnSeeker!: boolean;
      public var_188!: number;
      public objAvatar!: MovieClip & Record<string, any>;
      public var_168!: number;
      public var_229!: boolean;
      public var_334!: Array<class_113>;
      public var_34!: MovieClip & Record<string, any>;
      public var_31!: boolean;
      public blnDestroyable!: boolean;
      public objWorld!: BTAGameWorld;
      public intState!: number;
      public blnRotateTowardTarget!: boolean;
      public blnBulletWipe!: boolean;
      public r!: number;
      public blnEnemyMine!: boolean;
      constructor(){
         var var_334: any, var_31: any, var_229: any, var_168: any, var_188: any;

         // @ts-ignore
         super();
         this.addFrameScript(0,this.frame1);
         this.var_334 = new Array<class_113>();
         this.var_31 = false;
         this.blnRotateTowardTarget = false;
         this.var_229 = false;
         this.blnEnemyMine = false;
         this.blnBulletWipe = false;
         this.blnDestroyable = false;
         this.blnSeeker = false;
         this.blnReadyForDeleteQueue = false;
         this.moveX = 0;
         this.moveY = 0;
         this.intState = 1;
         this.var_168 = 1;
         this.var_188 = 0;
      }
      
      public RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0[8]) + param1 - 0[4]);
      }
      
      public method_193(param1: string): number
      {
         var var_40: string = param1;
         if(this.objSpecialData == null)
         {
            return -1;
         }
         try
         {
            return this.objSpecialData[var_40 as any];
         }
         catch (e: any)
         {
            return -1;
         }
      }
      
      public method_14(param1: number): void
      {
         var var_465: any;

         var _loc2_: class_6 = new (class_6 as any)();
         (_loc2_ as any).x = Math.cos(Math.PI * param1 / 180) * this.var_465;
         (_loc2_ as any).y = Math.sin(Math.PI * param1 / 180) * this.var_465;
         this.moveX = _loc2_.x;
         this.moveY = _loc2_.y;
      }
      
      public RotateTowardTarget(): number
      {
         var var_34: any;

         if(this.var_34 == null)
         {
            return 0;
         }
         this;
         return 0;
      }
      
      public BulletCallCollisionDetected(param1: MovieClip, param2: boolean): void
      {
         if(param2 == true)
         {
            this.objBFRef.AddEffectToQueue(new (class_66 as any)(),this.x,this.y,"TopEffectsLayer",true);
         }
         else
         {
            this.objBFRef.AddEffectToQueue(new (class_66 as any)(),this.x,this.y,"TopEffectsLayer",true);
            if(this.objWorld.intHitTimer == -1)
            {
               if(param2 == false)
               {
                  this.objWorld.mRef.SoundCall(new (class_49 as any)());
               }
               this.objWorld.intHitTimer = 4;
            }
         }
      }
      
      public Deactivate(): void
      {
         var var_334: any, var_34: any;

         this.var_334 = null as any;
         this.objWorld = null as any;
         this.objBFRef = null as any;
         this.var_34 = null as any;
         this.objSpecialData = null as any;
         this.objAvatar = null as any;
      }
      
      public TestForCollision(): boolean
      {
         0;
         0;
         0;
         0;
         if(this.objBFRef == null)
         {
            return false;
         }
         if(this.objBFRef.arrEnemies == null)
         {
            return false;
         }
         if(this.objBFRef.arrEnemies.length <= 0)
         {
            return false;
         }
         this;
         return false;
      }
      
      public method_354(param1: string): any
      {
         return this.objSpecialData[param1 as any];
      }
      
      public set blnMoveTank(param1: boolean)
      {
         this.var_31 = param1;
      }
      
      public MoveBullet(): boolean
      {
         var var_31: any;

         if(this.var_31 == true)
         {
            if(this.method_35() == true)
            {
               this.objBFRef.AddEffectToQueue(new (class_66 as any)(),this.x,this.y,"TopEffectsLayer",true);
               this.var_31 = false;
               return true;
            }
            if(this.blnRotateTowardTarget == true)
            {
               this.method_14(this.RotateTowardTarget());
            }
            if(this.TestForCollision() == true)
            {
               this.var_31 = false;
               return true;
            }
            this.x += this.moveX;
            this.y += this.moveY;
         }
         return false;
      }
      
      public method_248(param1: class_113): boolean
      {
         var var_334: any;

         var _loc2_: number = 0;
         while(_loc2_ < this.var_334.length)
         {
            if(this.var_334[_loc2_ as any] == param1)
            {
               return true;
            }
            _loc2_++;
         }
         return false;
      }
      
      public method_35(): boolean
      {
         var var_229: any;

         if(this.x * this.x + this.y * this.y > 172225)
         {
            if(this.var_229 == false)
            {
               if(this.blnEnemy == false)
               {
                  this.objWorld.method_321(1);
               }
               else
               {
                  this.objWorld.method_321(2);
               }
            }
            return true;
         }
         return false;
      }
      
      public Run(): boolean
      {
         var var_31: any;

         switch(this.intState)
         {
            case 1:
               return this.MoveBullet();
            case 2:
               x += this.moveX;
               y += this.moveY;
               if(this.var_31 == true)
               {
                  if(this.method_35() == true)
                  {
                     this.objBFRef.AddEffectToQueue(new (class_66 as any)(),this.x,this.y,"TopEffectsLayer",true);
                     this.var_31 = false;
                     return true;
                  }
               }
               return false;
            default:
               return true;
         }
      }
      
      public Setup(param1: number, param2: any, param3: MovieClip, param4: boolean, param5: number, param6: class_109): void
      {
         var var_465: any, var_34: any, var_168: any, var_60: any;

         this.cacheAsBitmap = true;
         this.var_465 = param1;
         this.objSpecialData = param2;
         this.var_34 = param3;
         this.blnEnemy = param4;
         this.objBFRef = param6;
         this.var_168 = param5;
         this.objAvatar = this.objBFRef.var_60.myAvatar;
         this.objWorld = this.objBFRef.var_60;
         if(this.blnRotateTowardTarget == true)
         {
            this.method_14(this.RotateTowardTarget());
         }
         else
         {
            this.method_14(this.rotation);
         }
      }
      
      public frame1(): any
      {
         this.r = Math.round(Math.random() * 10);
         this.gotoAndPlay(this.r);
      }
      
      public method_140(param1: class_113): void
      {
         var var_334: any;

         this.var_334.push(param1 as any);
      }
   }
