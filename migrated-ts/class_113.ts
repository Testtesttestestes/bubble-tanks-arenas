// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { class_106 } from './class_106';
import { class_45 } from './class_45';
import { class_47 } from './class_47';
import { class_48 } from './class_48';
import { class_6 } from './class_6';
import { class_68 } from './class_68';
import { class_73 } from './class_73';
import { class_89 } from './class_89';
import { class_90 } from './class_90';
import { TankData } from './TankData';
import { Weapon } from './Weapon';

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



   export class class_113 extends MovieClip{
  [key: string]: any;
      
      private intHitTimer!: number;
      public pntHitDetailLocation!: Point;
      public var_232!: number;
      public var_248!: Array<MovieClip>;
      public arrSeekerCarrierRefs!: Array<Weapon>;
      public var_410!: boolean;
      public objMovementData!: any;
      public intTankLife!: number;
      public movShieldHit!: class_106;
      private var_532!: boolean;
      public arrPrimaryWeapons!: Array<Weapon>;
      public var_345!: boolean;
      public objData!: TankData;
      public arrSecondaryWeapons!: Array<Weapon>;
      public blnShieled!: boolean;
      public blnOkToTeleport!: boolean;
      private var_306!: Sprite;
      public intState!: number;
      public funCallback!: Function;
      public var_349!: number;
      constructor(param1: TankData){
         // @ts-ignore
         super();
         this.Setup(param1);
      }
      
      public method_472(): void
      {
         var var_232: any;

         if(this.var_232 > 0)
         {
            --this.var_232;
         }
         else if(this.var_232 == 0)
         {
            this.method_440();
            this.var_232 = -1;
         }
      }
      
      public method_556(): boolean
      {
         var _loc1_: class_6 = new (class_6 as any)();
         var _loc2_: number = this.width;
         if(this.height > this.width)
         {
            _loc2_ = this.height;
         }
         _loc1_.method_217(this.rotation);
         _loc1_.method_84(30 * this.objData.numSpeed + _loc2_);
         _loc1_.method_741(this.x,this.y);
         if(this.var_532 == true)
         {
            if(this.var_306 == null)
            {
               this.var_306 = new (class_73 as any)();
               this.parent.addChild(this.var_306);
            }
            (this.var_306 as any).x = _loc1_.x;
            (this.var_306 as any).y = _loc1_.y;
         }
         if(_loc1_.method_41() > this.parent.parent["BF_BG_mc"].width / 2)
         {
            return true;
         }
         return false;
      }
      
      public Damage(param1: number, param2: class_68 = null): void
      {



         if(this.blnShieled == true)
         {
            if(param2 != null)
            {
               this;
               return;
            }
            return;
         }
         this.intTankLife -= param1;
         if(this.intTankLife <= 0)
         {
            this.intTankLife = 0;
            if(this.objData == null)
            {
               return;
            }
            if(this.objData.objWorld == null)
            {
               return;
            }
            if(this.objData.objWorld.currentBFTarget == null)
            {
               return;
            }
            if(this.objData.intType == 1)
            {
               this.objData.objWorld.mRef.SoundCall(new (class_47 as any)());
            }
            else if(this.objData.intType == 2)
            {
               this.objData.objWorld.mRef.SoundCall(new (class_47 as any)());
            }
            else if(this.objData.intType == 3)
            {
               this.objData.objWorld.currentBFTarget.SpawnLifeBubbles(this.x,this.y,this.objData.numBubblesReturned);
               this.objData.objWorld.mRef.SoundCall(new (class_48 as any)());
            }
            this.Deactivate();
         }
         else if(this.objData.intType == 1)
         {
            if(this.intHitTimer == -1)
            {
               this.objData.objWorld.mRef.SoundCall(new (class_45 as any)(),0[9]);
               this.intHitTimer = 7;
            }
         }
      }
      
      public StunMe(param1: number = 0): any
      {
         var var_345: any, var_349: any;

         if(param1 > 0)
         {
            this.var_345 = true;
            this.var_349 = param1;
            this.intState = 2;
         }
      }
      
      private Deactivate(): void
      {
         var _loc1_: number = 0;
         var _loc2_: number = this.objData.intType;
         _loc1_ = 0;
         while(_loc1_ < this.arrPrimaryWeapons.length)
         {
            this.arrPrimaryWeapons[_loc1_ as any].Deactivate();
            _loc1_++;
         }
         this.arrPrimaryWeapons = null as any;
         _loc1_ = 0;
         while(_loc1_ < this.arrSecondaryWeapons.length)
         {
            this.arrSecondaryWeapons[_loc1_ as any].Deactivate();
            _loc1_++;
         }
         this.arrSecondaryWeapons = null as any;
         this.objData.Deactivate();
         this.objData = null as any;
         this.objMovementData = null as any;
         this.var_306 = null as any;
         this.var_410 = true;
         this.funCallback(this,_loc2_);
      }
      
      public AddLife(param1: number): void
      {
         this.intTankLife += param1;
         if(this.intTankLife > this.objData.numLife)
         {
            this.intTankLife = this.objData.numLife;
         }
      }
      
      public MoveWanderSetup(): void
      {
         this.objMovementData = {
            "intFramesToTurn":0,
            "intMinFramesToHoldTurning":0,
            "numAmountToTurn":0,
            "blnSafetyTurn":false,
            "numLastAngle":this.method_286()
         };
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0[8]) + param1 - 0[4]);
      }
      
      public AvatarLifeCorrect(): void
      {
      }
      
      public SetCallback(param1: Function): void
      {
         this.funCallback = param1;
      }
      
      public SetupClosestBubbleToCenterPoint(): void
      {
         this.pntHitDetailLocation = this.objData.method_616();
      }
      
      public RegisterPrimaryWeapon(param1: MovieClip): void
      {
         var argClip: MovieClip = param1;
         this.arrPrimaryWeapons.push(argClip as any);
         argClip.Setup(this);
         try
         {
            if(argClip.blnSeekerCarrier != null)
            {
               this.arrSeekerCarrierRefs.push(argClip as any);
            }
         }
         catch (e: any)
         {
         }
      }
      
      private method_585(): void
      {
         if(this.intHitTimer > 0)
         {
            --this.intHitTimer;
         }
         else if(this.intHitTimer == 0)
         {
            this.intHitTimer = -1;
         }
      }
      
      public method_586(): boolean
      {
         var _loc1_: number = this.width;
         if(this.height > this.width)
         {
            _loc1_ = this.height;
         }
         var _loc2_: class_6 = new (class_6 as any)(this.x,this.y);
         var _loc3_: number = this.parent.parent["BF_BG_mc"].width / 2 * 0[75];
         var _loc4_: number = _loc2_.method_41() + _loc1_ / 2;
         if(_loc4_ > _loc3_)
         {
            return true;
         }
         return false;
      }
      
      public GetHitLocation(): Point
      {
         return this.localToGlobal(this.pntHitDetailLocation);
      }
      
      public method_642(): void
      {
         var _loc1_: number = 0;
         while(_loc1_ < this.arrPrimaryWeapons.length)
         {
            this.arrPrimaryWeapons[_loc1_ as any].Run();
            _loc1_++;
         }
      }
      
      private method_637(): void
      {
         var var_345: any, var_349: any;

         if(this.var_345 == true)
         {
            if(this.var_349 <= 0)
            {
               this.intState = 1;
               this.var_345 = false;
            }
            else
            {
               --this.var_349;
            }
         }
         else
         {
            this.intState = 1;
         }
      }
      
      public method_286(): number
      {
         var _loc1_: class_6 = new (class_6 as any)(this.x,this.y);
         return _loc1_.method_90();
      }
      
      public Setup(param1: TankData): void
      {
         var var_410: any, var_248: any, var_532: any, var_232: any, var_345: any, var_349: any;

         this.intState = 0;
         this.intHitTimer = -1;
         this.var_410 = false;
         this.objData = param1;
         this.intTankLife = this.objData.numLife;
         this.arrPrimaryWeapons = new Array<Weapon>();
         this.arrSecondaryWeapons = new Array<Weapon>();
         this.arrSeekerCarrierRefs = new Array<Weapon>();
         this.var_248 = new Array<MovieClip>();
         this.var_532 = false;
         this.blnShieled = false;
         this.var_232 = -1;
         this.blnOkToTeleport = true;
         this.var_345 = false;
         this.var_349 = 0;
      }
      
      public CheckForTeleports(): void
      {
         var _loc1_: Weapon = null as any;
         var _loc2_: number = 0;
         while(_loc2_ < this.arrSecondaryWeapons.length)
         {
            if(this.arrSecondaryWeapons[_loc2_ as any].intObjID == 3011 && _loc2_ != 0)
            {
               _loc1_ = this.arrSecondaryWeapons[0];
               this.arrSecondaryWeapons[0] = this.arrSecondaryWeapons[_loc2_ as any];
               this.arrSecondaryWeapons[_loc2_ as any] = _loc1_;
            }
            if(this.arrSecondaryWeapons[_loc2_ as any].intObjID == 3012 && _loc2_ != this.arrSecondaryWeapons.length - 1)
            {
               _loc1_ = this.arrSecondaryWeapons[this.arrSecondaryWeapons.length - 1 as any];
               this.arrSecondaryWeapons[this.arrSecondaryWeapons.length - 1 as any] = this.arrSecondaryWeapons[_loc2_ as any];
               this.arrSecondaryWeapons[_loc2_ as any] = _loc1_;
            }
            _loc2_++;
         }
      }
      
      public EffectMeCrazy(param1: string, param2: number = 80, param3: number = 5, param4: boolean = true): void
      {
         var var_232: any;

         var _loc6_: MovieClip = null as any;
         var _loc7_: number = 0;
         this.method_440();
         this.var_232 = param2;
         var _loc5_: number = 0;
         if(this.objData.arrTankDetails.length < param3)
         {
            _loc5_ = 0;
            while(_loc5_ < this.objData.arrTankDetails.length)
            {
               if(param1 == "sticky")
               {
                  _loc6_ = new (class_90 as any)();
               }
               else if(param1 == "stun")
               {
                  _loc6_ = new (class_89 as any)();
               }
               (_loc6_ as any).x = this.objData.arrTankDetails[_loc5_ as any].x;
               (_loc6_ as any).y = this.objData.arrTankDetails[_loc5_ as any].y;
               (_loc6_ as any).rotation = this.RandNum(-180,180);
               if(param4 == true)
               {
                  _loc6_.gotoAndStop(this.RandNum(1,4));
               }
               else
               {
                  _loc6_.gotoAndPlay(this.RandNum(1,4));
               }
               this.addChild(_loc6_);
               this.var_248.push(_loc6_ as any);
               _loc5_++;
            }
         }
         else
         {
            _loc5_ = 0;
            while(_loc5_ < param3)
            {
               if(param1 == "sticky")
               {
                  _loc6_ = new (class_90 as any)();
               }
               else if(param1 == "stun")
               {
                  _loc6_ = new (class_89 as any)();
               }
               _loc7_ = this.RandNum(0,this.objData.arrTankDetails.length - 1);
               (_loc6_ as any).x = this.objData.arrTankDetails[_loc7_ as any].x;
               (_loc6_ as any).y = this.objData.arrTankDetails[_loc7_ as any].y;
               (_loc6_ as any).rotation = this.RandNum(-180,180);
               if(param4 == true)
               {
                  _loc6_.gotoAndStop(this.RandNum(1,4));
               }
               else
               {
                  _loc6_.gotoAndPlay(this.RandNum(1,4));
               }
               this.addChild(_loc6_);
               this.var_248.push(_loc6_ as any);
               _loc5_++;
            }
         }
      }
      
      public method_440(): void
      {
         var var_248: any;

         var _loc1_: number = 0;
         while(_loc1_ < this.var_248.length)
         {
            if(this.var_248[_loc1_ as any].parent != null)
            {
               this.removeChild(this.var_248[_loc1_ as any]);
            }
            _loc1_++;
         }
         this.var_248 = new Array<MovieClip>();
      }
      
      public Run(): void
      {
         switch(this.intState)
         {
            case 1:
               this.blnOkToTeleport = true;
               this.Move();
               this.method_642();
               this.method_472();
               break;
            case 2:
               this.method_637();
               this.method_472();
         }
         this.method_585();
      }
      
      public RegisterSecondaryWeapon(param1: MovieClip): void
      {
         this.arrSecondaryWeapons.push(param1 as any);
         param1.Setup(this);
      }
      
      public Move(): void
      {
      }
      
      public GetDataRef(): TankData
      {
         return this.objData;
      }
      
      public method_406(): void
      {
         var _loc3_: number = NaN;
         var _loc4_: number = NaN;
         var _loc5_: class_6 = null as any;
         var _loc1_: boolean = this.method_556();
         var _loc2_: class_6 = new (class_6 as any)();
         _loc2_.method_217(this.rotation);
         _loc2_.method_84(this.objData.numSpeed);
         this.x += _loc2_.x;
         this.y += _loc2_.y;
         if(this.objMovementData.intFramesToTurn == 0 || _loc1_ == true && this.objMovementData.blnSafetyTurn == false)
         {
            if(_loc1_ == true)
            {
               _loc3_ = this.method_286();
               if(Math.abs(_loc3_) > 90)
               {
                  if(_loc3_ > 0 && this.objMovementData.numLastAngle < 0)
                  {
                     this.objMovementData.numLastAngle = 360;
                  }
                  else if(_loc3_ < 0 && this.objMovementData.numLastAngle > 0)
                  {
                     this.objMovementData.numLastAngle = -360;
                  }
               }
               if(_loc3_ < 0)
               {
                  if(_loc3_ < this.objMovementData.numLastAngle)
                  {
                     this.objMovementData.numAmountToTurn = this.RandNum(-120,-180);
                  }
                  else
                  {
                     this.objMovementData.numAmountToTurn = this.RandNum(120,180);
                  }
               }
               else if(_loc3_ > this.objMovementData.numLastAngle)
               {
                  this.objMovementData.numAmountToTurn = this.RandNum(120,180);
               }
               else
               {
                  this.objMovementData.numAmountToTurn = this.RandNum(-120,-180);
               }
               this.objMovementData.intFramesToTurn = Math.round(Math.abs(this.objMovementData.numAmountToTurn) / (this.objData.numSpeed * 1[5]));
               this.objMovementData.numAmountToTurn = this.objData.numSpeed * 1[5] * (this.objMovementData.numAmountToTurn / Math.abs(this.objMovementData.numAmountToTurn));
               this.objMovementData.intMinFramesToHoldTurning = 90;
               this.objMovementData.blnSafetyTurn = true;
               this.objMovementData.numLastAngle = _loc3_;
            }
         }
         else
         {
            --this.objMovementData.intFramesToTurn;
            this.rotation += this.objMovementData.numAmountToTurn;
            this.objMovementData.numLastAngle = this.method_286();
         }
         if(this.objMovementData.intMinFramesToHoldTurning > 0)
         {
            --this.objMovementData.intMinFramesToHoldTurning;
         }
         else if(this.objMovementData.intFramesToTurn == 0)
         {
            if(this.RandNum(0,1000) < 20)
            {
               _loc4_ = 0;
               if(this.method_586() == true)
               {
                  _loc5_ = new (class_6 as any)(this.x * -1,this.y * -1);
                  _loc4_ = this.RandNum(-30,30) + _loc5_.method_90() - this.rotation;
               }
               else
               {
                  _loc4_ = this.RandNum(-100,100);
               }
               this.objMovementData.intFramesToTurn = Math.round(Math.abs(_loc4_) / (this.objData.numSpeed * 1[5]));
               this.objMovementData.numAmountToTurn = this.objData.numSpeed * 1[5] * (_loc4_ / Math.abs(_loc4_));
               this.objMovementData.blnSafetyTurn = false;
            }
         }
      }
      
      public PredictTargetLocation(param1: number): Point
      {
         var var_410: any;

         if(this.var_410 == true)
         {
            return null;
         }
         var _loc2_: class_6 = new (class_6 as any)();
         if(this.var_345 == false)
         {
            _loc2_.method_217(this.rotation);
            _loc2_.method_84(this.objData.numSpeed);
            _loc2_.method_84(param1);
         }
         return new (Point as any)(_loc2_.x + this.x,_loc2_.y + this.y);
      }
   }
