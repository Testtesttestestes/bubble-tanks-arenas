// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_11

import { class_6 } from '../class_6';
import { class_66 } from '../class_66';
import { class_68 } from '../class_68';
import { EnemyAI } from '../EnemyAI';
import { class_159 } from '../Parts/class_159';

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
export class class_124 extends class_68{
  [key: string]: any;
      
      public blnHitAvatar!: boolean;
      public myMaster: EnemyAI = null as any;
      public var_261!: number;
      public var_474!: number;
      public var_266!: class_159;
      constructor(param1: class_159){
    var var_261: any, var_266: any;

    // @ts-ignore
    super();
         this.addFrameScript(2,this.frame3,3,this.frame4);
         blnRotateTowardTarget = true;
         this.var_261 = 1;
         this.stop();
         this.gotoAndStop(3);
         this.blnHitAvatar = false;
         this.var_266 = param1;
         blnDestroyable = true;
      }
      
      public RotateTowardTarget(): number
      {
         var var_34: any;

         if(var_34 == null)
         {
            return 0;
         }
         this;
         return 0;
      }
      
      public method_711(): number
      {
         var var_34: any;

         if(var_34 == null)
         {
            return 0;
         }
         if(this.var_266 == null)
         {
            return 0;
         }
         if(this.var_266.parent == null)
         {
            return 0;
         }
         var _loc1_: Point = new (Point as any)(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         var _loc2_: Point = new (Point as any)(this.var_266.x,this.var_266.y);
         _loc2_ = this.var_266.parent.localToGlobal(_loc2_);
         var _loc3_: class_6 = new (class_6 as any)();
         (_loc3_ as any).x = _loc2_.x - _loc1_.x;
         (_loc3_ as any).y = _loc2_.y - _loc1_.y;
         if(_loc3_.method_41() < 5)
         {
            this.blnHitAvatar = true;
         }
         var _loc4_: number = Math.atan2(_loc3_.y,_loc3_.x);
         var _loc5_: number = 360 * _loc4_ / (2 * Math.PI);
         this.cacheAsBitmap = false;
         (this as any).rotation = _loc5_;
         this.cacheAsBitmap = true;
         return _loc5_;
      }
      
      public MoveBullet(): boolean
      {
         var var_31: any;

         if(var_31 == true)
         {
            if(method_35() == true)
            {
               objBFRef.AddEffectToQueue(new (class_66 as any)(),this.x,this.y,"TopEffectsLayer",true);
               var_31 = false;
               return true;
            }
            if(blnRotateTowardTarget == true)
            {
               if(this.var_261 == 1)
               {
                  method_14(this.RotateTowardTarget());
               }
               else if(this.var_261 == 2)
               {
                  method_14(this.method_711());
               }
            }
            if(this.TestForCollision() == true)
            {
               var_31 = false;
               return true;
            }
            this.x += moveX;
            this.y += moveY;
         }
         return false;
      }
      
      public BulletCallCollisionDetected(param1: MovieClip, param2: boolean): void
      {
         objBFRef.AddEffectToQueue(new (class_66 as any)(),this.x,this.y,"TopEffectsLayer",true);
      }
      
      public frame3(): any
      {
         this.stop();
      }
      
      private method_722(): void
      {
         var var_261: any, var_34: any;

         if(this.var_261 == 1)
         {
            var_34 = this.myMaster;
            this.var_261 = 2;
            this.gotoAndStop(2);
            this.blnHitAvatar = false;
            return;
         }
         if(this.var_261 == 2)
         {
            var_34 = objAvatar;
            this.var_261 = 1;
            this.gotoAndStop(3);
            this.blnHitAvatar = false;
            return;
         }
      }
      
      public TestForCollision(): boolean
      {
         var var_474: any;

         var _loc2_: number = 0;
         var _loc3_: Point = null as any;
         if(this.myMaster == null)
         {
            this.myMaster = method_354("myMaster");
            this.var_474 = this.myMaster.intTankLife;
         }
         if(!objBFRef.contains(this.myMaster))
         {
            this.BulletCallCollisionDetected(objBFRef.arrBullets[_loc2_ as any],blnEnemy);
            return true;
         }
         var _loc1_: Point = new (Point as any)(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         _loc2_ = 0;
         while(_loc2_ < objBFRef.arrBullets.length)
         {
            if(objBFRef.arrBullets[_loc2_ as any].blnEnemy == false)
            {
               _loc3_ = new (Point as any)(this.x,this.y);
               _loc3_ = this.parent.localToGlobal(_loc3_);
               if(objBFRef.arrBullets[_loc2_ as any].hitTestPoint(_loc3_.x,_loc3_.y,true) == true || objBFRef.arrBullets[_loc2_ as any].hitTestPoint(_loc3_.x - moveX / 2,_loc3_.y - moveY / 2,true) == true)
               {
                  this.BulletCallCollisionDetected(objBFRef.arrBullets[_loc2_ as any],blnEnemy);
                  return true;
               }
            }
            _loc2_++;
         }
         if(this.blnHitAvatar || var_34.hitTestPoint(_loc1_.x,_loc1_.y,true) == true || var_34.hitTestPoint(_loc1_.x - moveX / 2,_loc1_.y - moveY / 2,true) == true)
         {
            if(var_34 == this.myMaster)
            {
               var_34.intTankLife += 2;
               if(var_34.intTankLife > this.var_474)
               {
                  var_34.intTankLife = this.var_474;
               }
            }
            else
            {
               this.BulletCallCollisionDetected(objAvatar,blnEnemy);
               if(objAvatar.blnShieled)
               {
                  return true;
               }
               objAvatar.Damage(var_168);
            }
            this.method_722();
         }
         return false;
      }
      
      public frame4(): any
      {
         this.stop();
      }
   }
