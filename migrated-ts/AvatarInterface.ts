// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { BTAGameWorld } from './BTAGameWorld';
import { class_2 } from './class_2';
import { class_6 } from './class_6';
import { class_79 } from './class_79';
import { PlayerProfile } from './PlayerProfile';
import { TankData } from './TankData';

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
export class AvatarInterface extends MovieClip{
  [key: string]: any;
      
      private var_388!: number;
      private var_203!: Function;
      private blnMoveAvatar!: boolean;
      private var_316!: Stage;
      private arrKeysDown!: any;
      public var_472!: boolean;
      private var_554!: boolean;
      public fireRate_mc!: MovieClip & Record<string, any>;
      private var_355!: Function;
      private var_460!: Point;
      private var_396!: boolean;
      private var_329!: number;
      private var_20!: class_6;
      private var_294!: number;
      private hot_DOWN!: number;
      private var_303!: number;
      private var_149!: any;
      private var_231!: number;
      public objGameObjectLibrary!: class_2;
      private var_37!: MovieClip & Record<string, any>;
      private var_570!: number;
      private var_341!: MovieClip & Record<string, any>;
      private var_356!: boolean;
      private hot_RIGHT!: number;
      private currentPlayerProfile!: PlayerProfile;
      private var_147!: number;
      private numAvatarFriction!: number;
      private var_205!: number;
      private var_97!: BTAGameWorld;
      private var_419!: Point;
      private var_377!: Point;
      private var_559!: number;
      private var_332!: number;
      public life_mc!: MovieClip & Record<string, any>;
      private hot_LEFT!: number;
      private var_440!: number;
      private numSecondaryFirerate!: number;
      private hot_UP!: number;
      private var_383!: boolean;
      private numPrimaryFirerate!: number;
      private mRef!: class_79;
      private var_405!: boolean;
      private var_55!: TankData;
      constructor(){
         var var_37: any, var_356: any, var_405: any, var_554: any, var_383: any, var_396: any, var_472: any, var_570: any, var_205: any, var_303: any, var_332: any, var_231: any, var_294: any, var_329: any, var_147: any, var_388: any, var_341: any, var_20: any, var_419: any, var_460: any, var_149: any, var_377: any;

         // @ts-ignore
         super();
         this.objGameObjectLibrary = class_2.getInstance();
         this.var_37 = null as any;
         this.var_356 = false;
         this.var_405 = false;
         this.var_554 = false;
         this.var_383 = false;
         this.var_396 = true;
         this.blnMoveAvatar = true;
         this.var_472 = false;
         this.numPrimaryFirerate = 20;
         this.numSecondaryFirerate = 40;
         this.var_570 = 0;
         this.var_205 = 0;
         this.var_303 = 75;
         this.var_332 = 75;
         this.var_231 = -1;
         this.var_294 = 0;
         this.hot_UP = 0;
         this.hot_DOWN = 0;
         this.hot_RIGHT = 0;
         this.hot_LEFT = 0;
         this.var_329 = 0[6];
         this.var_147 = 6;
         this.var_388 = this.var_147;
         this.numAvatarFriction = 0[09];
         this.var_341 = null as any;
         this.var_20 = new (class_6 as any)();
         this.var_419 = new (Point as any)(this.life_mc.x,this.life_mc.y + 0[2]);
         this.var_460 = new (Point as any)(this.fireRate_mc.x,this.fireRate_mc.y);
         this.life_mc.y += 100;
         this.fireRate_mc.y -= 100;
         this.arrKeysDown = new (Array as any)();
         this.var_149 = new (Array as any)();
         this.var_377 = new (Point as any)(this.mouseX,this.mouseY);
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0[8]) + param1 - 0[4]);
      }
      
      private method_558(): void
      {
         var var_231: any;

         if(this.var_231 > 0)
         {
            --this.var_231;
         }
         else if(this.var_231 == 0)
         {
            this.var_147 = this.var_388;
            this.var_388 = this.var_147;
            this.var_231 = -1;
         }
      }
      
      private ControlAvatarDirection(): void
      {
         var var_37: any, var_55: any, var_377: any;

         var _loc1_: class_6 = null as any;
         var _loc2_: number = NaN;
         if(this.var_37 != null)
         {
            _loc1_ = new (class_6 as any)();
            if(this.var_55.numClass <= 3)
            {
               this.var_377 = this.localToGlobal(new (Point as any)(this.mouseX,this.mouseY));
               (_loc1_ as any).x = this.var_377.x - (this.var_37.x + 275);
               (_loc1_ as any).y = this.var_377.y - (this.var_37.y + 225);
               (this.var_37 as any).rotation = _loc1_.method_90();
            }
            else
            {
               _loc2_ = this.var_20.method_503(this.var_37.rotation,this.var_20.method_41() / 2,0[5]);
               this.var_37.rotation += _loc2_;
            }
         }
      }
      
      private method_494(): void
      {
         var var_383: any, var_396: any, var_37: any;

         var _loc1_: number = 0;
         if(this.var_383 == true && this.var_396 == true)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_37.arrSecondaryWeapons.length)
            {
               this.var_37.arrSecondaryWeapons[_loc1_ as any].PartCallTrigger();
               _loc1_++;
            }
            this.var_205 = this.numSecondaryFirerate;
            this.var_383 = false;
            this.var_303 = 0;
         }
      }
      
      private InterfaceMotion(): void
      {
         var var_332: any, var_419: any;

         if(this.var_332 < 75)
         {
            ++this.var_332;
            (this.life_mc as any).y = this.life_mc.y * 0[8] + this.var_419.y * 0[2];
         }
         else
         {
            (this.life_mc as any).y = this.life_mc.y * 0[8] + (this.var_419.y + 100) * 0[2];
         }
         if(this.var_303 < 75)
         {
            ++this.var_303;
            (this.fireRate_mc as any).y = this.fireRate_mc.y * 0[8] + this.var_460.y * 0[2];
         }
         else
         {
            (this.fireRate_mc as any).y = this.fireRate_mc.y * 0[8] + (this.var_460.y - (100 + this.fireRate_mc.height)) * 0[2];
         }
      }
      
      private mouseUp(param1: any): void
      {
         var var_356: any;

         this.var_356 = false;
      }
      
      public method_708(): void
      {
         var var_20: any;

         var _temp_3: any = this.var_20;
         var _temp_2: any = this.var_20;
         var _temp_1: any = 0;
         0;
         (_temp_2 as any).y = _temp_1;
         (_temp_3 as any).x = 0;
      }
      
      public method_533(): void
      {
         var var_97: any, var_355: any;

         var _loc1_: class_6 = new (class_6 as any)(this.var_97.currentBFTarget.x,this.var_97.currentBFTarget.y);
         if(_loc1_.method_41() > this.var_97.currentBFTarget.BF_BG_mc.width / 2)
         {
            _loc1_.method_189();
            _loc1_.method_84(this.var_97.currentBFTarget.BF_BG_mc.width / 2);
            (_loc1_ as any).x = this.var_97.currentBFTarget.x - _loc1_.x;
            (_loc1_ as any).y = this.var_97.currentBFTarget.y - _loc1_.y;
            this.var_355(_loc1_);
         }
      }
      
      private method_547(): void
      {
         var var_97: any, var_282: any, var_20: any, var_329: any, var_55: any, var_147: any;

         var _loc1_: number = 0;
         var _loc2_: boolean = false;
         var _loc3_: boolean = false;
         var _loc4_: class_6 = null as any;
         var _loc5_: boolean = false;
         var _loc6_: number = 0;
         var _loc7_: number = NaN;
         var _loc8_: number = NaN;
         var _loc9_: MovieClip = null as any;
         var _loc10_: boolean = false;
         if(this.var_97.var_282 == false)
         {
            _loc1_ = 0;
            _loc2_ = false;
            _loc3_ = false;
            _loc4_ = new (class_6 as any)(this.var_20.x,this.var_20.y);
            _loc1_ = 0;
            while(_loc1_ < this.arrKeysDown.length)
            {
               if(this.arrKeysDown[_loc1_ as any] == this.hot_UP)
               {
                  _loc2_ = true;
                  this.var_20.y -= this.var_329 * this.var_55.numSpeed;
                  if(this.var_20.y < this.var_147 * -1 * this.var_55.numSpeed)
                  {
                     (this.var_20 as any).y = this.var_147 * -1 * this.var_55.numSpeed;
                  }
               }
               else if(this.arrKeysDown[_loc1_ as any] == this.hot_DOWN)
               {
                  _loc2_ = true;
                  this.var_20.y += this.var_329 * this.var_55.numSpeed;
                  if(this.var_20.y > this.var_147 * this.var_55.numSpeed)
                  {
                     (this.var_20 as any).y = this.var_147 * this.var_55.numSpeed;
                  }
               }
               if(this.arrKeysDown[_loc1_ as any] == this.hot_LEFT)
               {
                  _loc3_ = true;
                  this.var_20.x -= this.var_329 * this.var_55.numSpeed;
                  if(this.var_20.x < this.var_147 * -1 * this.var_55.numSpeed)
                  {
                     (this.var_20 as any).x = this.var_147 * -1 * this.var_55.numSpeed;
                  }
               }
               else if(this.arrKeysDown[_loc1_ as any] == this.hot_RIGHT)
               {
                  _loc3_ = true;
                  this.var_20.x += this.var_329 * this.var_55.numSpeed;
                  if(this.var_20.x > this.var_147 * this.var_55.numSpeed)
                  {
                     (this.var_20 as any).x = this.var_147 * this.var_55.numSpeed;
                  }
               }
               else if(this.arrKeysDown[_loc1_ as any] == 32)
               {
                  this.var_405 = true;
               }
               _loc1_++;
            }
            _loc5_ = false;
            _loc6_ = 0;
            while(_loc6_ < this.arrKeysDown.length)
            {
               if(this.arrKeysDown[_loc6_ as any] == 32)
               {
                  _loc5_ = true;
               }
               _loc6_++;
            }
            if(_loc5_ == false)
            {
               this.var_405 = false;
            }
            if(_loc2_ == false)
            {
               if(this.var_20.y > 0)
               {
                  this.var_20.y -= this.numAvatarFriction;
                  if(Math.abs(this.var_20.y) < 0[5])
                  {
                     (this.var_20 as any).y = 0;
                  }
               }
               else
               {
                  this.var_20.y += this.numAvatarFriction;
                  if(Math.abs(this.var_20.y) < 0[5])
                  {
                     (this.var_20 as any).y = 0;
                  }
               }
            }
            if(_loc3_ == false)
            {
               if(this.var_20.x > 0)
               {
                  this.var_20.x -= this.numAvatarFriction;
                  if(Math.abs(this.var_20.x) < 0[5])
                  {
                     (this.var_20 as any).x = 0;
                  }
               }
               else
               {
                  this.var_20.x += this.numAvatarFriction;
                  if(Math.abs(this.var_20.x) < 0[5])
                  {
                     (this.var_20 as any).x = 0;
                  }
               }
            }
            _loc7_ = this.var_97.currentBFTarget.x - _loc4_.x;
            _loc8_ = this.var_97.currentBFTarget.y - _loc4_.y;
            if(Math.sqrt(_loc7_ * _loc7_ + _loc8_ * _loc8_) >= this.var_97.currentBFTarget.BF_BG_mc.width / 2)
            {
               _loc9_ = this.var_97.method_392();
               _loc10_ = true;
               if(_loc9_.name == "BFPoint_left_mc")
               {
                  _loc1_ = 0;
                  while(_loc1_ < this.mRef.gData.var_67.length)
                  {
                     if(this.mRef.gData.var_67[_loc1_ as any] == "left")
                     {
                        _loc10_ = false;
                     }
                     _loc1_++;
                  }
               }
               else if(_loc9_.name == "BFPoint_right_mc")
               {
                  _loc1_ = 0;
                  while(_loc1_ < this.mRef.gData.var_67.length)
                  {
                     if(this.mRef.gData.var_67[_loc1_ as any] == "right")
                     {
                        _loc10_ = false;
                     }
                     _loc1_++;
                  }
               }
               else if(_loc9_.name == "BFPoint_top_mc")
               {
                  _loc1_ = 0;
                  while(_loc1_ < this.mRef.gData.var_67.length)
                  {
                     if(this.mRef.gData.var_67[_loc1_ as any] == "up")
                     {
                        _loc10_ = false;
                     }
                     _loc1_++;
                  }
               }
               else if(_loc9_.name == "BFPoint_bottom_mc")
               {
                  _loc1_ = 0;
                  while(_loc1_ < this.mRef.gData.var_67.length)
                  {
                     if(this.mRef.gData.var_67[_loc1_ as any] == "down")
                     {
                        _loc10_ = false;
                     }
                     _loc1_++;
                  }
               }
               if(_loc10_ == true)
               {
                  this.method_349();
                  this.method_533();
                  this.var_355(this.var_20);
                  this.var_20.x *= 0[9];
                  this.var_20.y *= 0[9];
               }
            }
         }
      }
      
      private keyUp(param1: any): void
      {
         var _loc2_: number = 0;
         while(_loc2_ < this.arrKeysDown.length)
         {
            if(param1.keyCode == this.arrKeysDown[_loc2_ as any])
            {
               this.arrKeysDown.splice(_loc2_,1);
            }
            _loc2_++;
         }
      }
      
      public Setup(param1: class_79, param2: Stage, param3: Function, param4: Function): void
      {
         var var_316: any, var_203: any, var_355: any;

         this.mRef = param1;
         this.var_316 = param2;
         this.var_203 = param3;
         this.var_355 = param4;
         this.var_316.addEventListener("mousedown", this.mouseDown.bind(this));
         this.var_316.addEventListener("mouseup", this.mouseUp.bind(this));
         this.var_316.addEventListener("keydown", this.keyDown.bind(this));
         this.var_316.addEventListener("keyup", this.keyUp.bind(this));
      }
      
      public method_349(): void
      {
         var var_97: any, var_20: any;

         var _loc1_: number = this.var_97.currentBFTarget.x - 0;
         var _loc2_: number = this.var_97.currentBFTarget.y - 0;
         var _loc3_: number = Math.atan2(_loc2_,_loc1_);
         var _loc4_: number = Math.atan2(this.var_20.y,this.var_20.x);
         var _loc5_: number = _loc4_ - _loc3_;
         var _loc6_: number = Math.cos(_loc5_);
         var _loc7_: number = Math.sin(_loc5_) * -1;
         _loc5_ = Math.atan2(-1 * _loc7_,-1 * _loc6_) + _loc3_;
         var _loc8_: number = Math.sqrt(this.var_20.x * this.var_20.x + this.var_20.y * this.var_20.y);
         (this.var_20 as any).x = _loc8_ * Math.cos(_loc5_);
         (this.var_20 as any).y = _loc8_ * Math.sin(_loc5_);
      }
      
      public Run(): void
      {
         var var_37: any, var_396: any;

         this.var_37.blnOkToTeleport = true;
         this.ControlAvatarDirection();
         this.method_547();
         this.MoveAvatar();
         if(this.var_396 == true)
         {
            this.AvatarShootCounter();
         }
         this.AvatarShootTest();
         this.InterfaceMotion();
         this.method_700();
         this.method_558();
      }
      
      private method_498(): void
      {
         var var_37: any;

         var _loc1_: number = 0;
         while(_loc1_ < this.var_37.arrPrimaryWeapons.length)
         {
            this.var_37.arrPrimaryWeapons[_loc1_ as any].PartCallTrigger();
            _loc1_++;
         }
         this.var_303 = 0;
      }
      
      private method_700(): void
      {
         var var_149: any;

         var _loc1_: number = 0;
         var _loc2_: number = NaN;
         if(this.var_149.length > 0)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_149.length)
            {
               _loc2_ = (this.var_149[_loc1_ as any].intFireRate - this.var_149[_loc1_ as any].intCounter) / this.var_149[_loc1_ as any].intFireRate;
               if(_loc2_ > 1)
               {
                  _loc2_ = 1;
               }
               if(_loc2_ < 0)
               {
                  _loc2_ = 0;
               }
               this.fireRate_mc["insidePrimary" + (_loc1_ + 1) + "_mc"].scaleX = _loc2_;
               _loc1_++;
            }
            if(this.var_37.arrSecondaryWeapons.length > 0)
            {
               (this.fireRate_mc.Secondary_mc.insidePrimary1_mc as any).scaleX = (this.numSecondaryFirerate - this.var_205) / this.numSecondaryFirerate;
            }
         }
         else
         {
            (this.fireRate_mc.insidePrimary1_mc as any).scaleX = (this.numSecondaryFirerate - this.var_205) / this.numSecondaryFirerate;
         }
         (this.life_mc.inside as any).scaleX = this.var_37.intTankLife / this.var_55.numLife;
         this.life_mc.left_txt.text = "" + this.var_37.intTankLife + " Life left";
         if(this.var_440 != this.var_37.intTankLife)
         {
            this.var_332 = 0;
         }
         this.var_440 = this.var_37.intTankLife;
      }
      
      public method_382(): void
      {
         var var_341: any, var_294: any;

         if(this.var_341 != null)
         {
            (this.var_341 as any).width = this.var_294;
            (this.var_341 as any).height = this.var_294;
         }
         if(this.var_97.var_13 != null)
         {
            (this.var_97.var_13.avatarUnderBubble_mc as any).width = this.var_294;
            (this.var_97.var_13.avatarUnderBubble_mc as any).height = this.var_294;
         }
      }
      
      public UpdateAvatar(param1: BTAGameWorld, param2: MovieClip, param3: PlayerProfile): void
      {
         var var_37: any, var_55: any, var_97: any;

         var _loc7_: boolean = false;
         var _loc8_: number = NaN;
         var _loc9_: number = 0;
         var _loc10_: number = 0;
         var _loc11_: string = null as any;
         this.var_37 = param2;
         this.var_55 = this.var_37.GetDataRef();
         this.var_97 = param1;
         this.currentPlayerProfile = param3;
         if(this.var_55.numClass == 1)
         {
            this.var_37.intTankLife = this.var_55.numLife = 100;
         }
         else if(this.var_55.numClass == 2)
         {
            this.var_37.intTankLife = this.var_55.numLife = 110;
         }
         else if(this.var_55.numClass == 3)
         {
            this.var_37.intTankLife = this.var_55.numLife = 120;
         }
         else if(this.var_55.numClass == 4)
         {
            this.var_37.intTankLife = this.var_55.numLife = 200;
         }
         else if(this.var_55.numClass == 5)
         {
            this.var_37.intTankLife = this.var_55.numLife = 250;
         }
         else if(this.var_55.numClass == 6)
         {
            this.var_37.intTankLife = this.var_55.numLife = 300;
         }
         this.var_559 = this.var_97.currentBFTarget.BF_BG_mc.width;
         this.fireRate_mc.gotoAndStop(this.var_37.arrPrimaryWeapons.length);
         var _loc4_: number = 0;
         var _loc5_: any = new (Array as any)();
         _loc4_ = 0;
         while(_loc4_ < this.var_37.arrPrimaryWeapons.length)
         {
            _loc7_ = true;
            _loc8_ = 0;
            _loc9_ = 0;
            while(_loc9_ < this.var_149.length)
            {
               if(this.var_149[_loc9_ as any].intObjID == this.var_37.arrPrimaryWeapons[_loc4_ as any].intObjID)
               {
                  _loc7_ = false;
                  _loc8_ = _loc9_;
                  break;
               }
               _loc9_++;
            }
            if(_loc7_ == true)
            {
               _loc10_ = this.var_149.push(this.var_37.arrPrimaryWeapons[_loc4_ as any] as any);
               _loc5_.push(1 as any);
            }
            else
            {
               ++_loc5_[_loc8_ as any];
            }
            _loc4_++;
         }
         var _loc6_: number = 0;
         if(this.var_37.arrSecondaryWeapons.length > 0)
         {
            _loc6_ = 1;
         }
         this.fireRate_mc.gotoAndStop(this.var_149.length);
         if(this.var_149.length > 0)
         {
            _loc4_ = 0;
            while(_loc4_ < this.var_149.length)
            {
               _loc11_ = this.objGameObjectLibrary.method_26(this.var_149[_loc4_ as any].intObjID);
               if(_loc5_[_loc4_ as any] < 2)
               {
                  _loc11_ = _loc11_.substr(0,-2);
               }
               this.fireRate_mc["txtPrimary" + (_loc4_ + 1) + "_txt"].text = _loc11_;
               _loc4_++;
            }
            if(_loc6_ >= 1)
            {
               this.fireRate_mc.Secondary_mc.txtPrimary1_txt.text = "2nd";
            }
            else
            {
               (this.fireRate_mc.Secondary_mc as any).alpha = 0;
            }
         }
         else
         {
            (this.fireRate_mc.Secondary_mc as any).alpha = 0;
            this.fireRate_mc.txtPrimary1_txt.text = "2nd";
         }
         this.hot_UP = this.mRef.gData.hot1;
         this.hot_DOWN = this.mRef.gData.hot2;
         this.hot_LEFT = this.mRef.gData.hot3;
         this.hot_RIGHT = this.mRef.gData.hot4;
         this.var_341 = param1.currentBFTarget.avatarUnderBubble_mc;
         this.method_382();
         this.life_mc.state_txt.text = this.var_55.strTankName;
         this.numSecondaryFirerate = this.RetrieveSlowestSecondaryFirerate();
         if(this.numSecondaryFirerate == 0)
         {
            this.var_396 = false;
         }
      }
      
      public set method_386(param1: boolean)
      {
         this.blnMoveAvatar = param1;
      }
      
      private MoveAvatar(): void
      {
         var var_37: any, var_355: any, var_20: any;

         if(this.blnMoveAvatar == true)
         {
            if(this.var_37 != null)
            {
               this.var_355(this.var_20);
            }
         }
      }
      
      private Deactivate(): void
      {
         var var_203: any;

         this.var_203();
      }
      
      public FullHealthPopUp(): void
      {
         var var_440: any;

         this.var_440 = 0;
      }
      
      public UpdateAvatarHotkeys(): void
      {
         this.hot_UP = this.mRef.gData.hot1;
         this.hot_DOWN = this.mRef.gData.hot2;
         this.hot_LEFT = this.mRef.gData.hot3;
         this.hot_RIGHT = this.mRef.gData.hot4;
      }
      
      private RetrieveSlowestSecondaryFirerate(): number
      {
         var var_37: any;

         var _loc2_: number = 0;
         while(_loc2_ < this.var_37.arrSecondaryWeapons.length)
         {
            if(this.var_37.arrSecondaryWeapons[_loc2_ as any].intFireRate > 0)
            {
               var _loc1_: number = int(this.var_37.arrSecondaryWeapons[_loc2_ as any].intFireRate);
            }
            _loc2_++;
         }
         return 0;
      }
      
      public AvatarSticky(): void
      {
         var var_147: any, var_388: any, var_231: any;

         this.var_147 = this.var_388 * 0[3];
         this.var_231 = 80;
      }
      
      private keyDown(param1: any): void
      {
         var _loc2_: boolean = false;
         var _loc3_: number = 0;
         while(_loc3_ < this.arrKeysDown.length)
         {
            if(param1.keyCode == this.arrKeysDown[_loc3_ as any])
            {
               _loc2_ = true;
            }
            _loc3_++;
         }
         if(_loc2_ == false)
         {
            this.arrKeysDown.push(param1.keyCode as any);
         }
      }
      
      private AvatarShootTest(): void
      {
         var var_472: any, var_356: any;

         if(this.var_472 == false)
         {
            if(this.var_356 == true)
            {
               this.method_498();
            }
            if(this.var_405 == true)
            {
               this.method_494();
            }
         }
      }
      
      private mouseDown(param1: any): void
      {
         var var_356: any;

         this.var_356 = true;
      }
      
      private method_844(param1: number): number
      {
         while(param1 < 0)
         {
            param1 += 360;
         }
         while(param1 > 360)
         {
            param1 += 360;
         }
         return param1;
      }
      
      private AvatarShootCounter(): void
      {
         var var_205: any;

         if(this.var_205 > 0)
         {
            --this.var_205;
         }
         else if(this.var_205 == 0)
         {
            this.var_383 = true;
            this.var_205 = -1;
         }
      }
      
      public set method_720(param1: number)
      {
         this.var_294 = param1 + 45;
      }
   }
