// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { class_2 } from './class_2';
import { class_6 } from './class_6';
import { class_7 } from './class_7';
import { class_78 } from './class_78';
import { class_79 } from './class_79';
import { class_84 } from './class_84';
import { class_97 } from './class_97';
import { PlayerProfile } from './PlayerProfile';
import { TankData } from './TankData';
import { TankScreens } from './TankScreens';
import { WeaponRolloverIcon } from './WeaponRolloverIcon';

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
export class TankCreatorScreen extends MovieClip{
  [key: string]: any;
      
      private var_336!: number;
      public movTank!: MovieClip & Record<string, any>;
      private var_385!: number;
      public var_394!: number;
      private var_486!: ColorMatrixFilter;
      private var_276!: boolean;
      private var_211!: number;
      public Exit_mc!: MovieClip & Record<string, any>;
      public DeleteButton_mc!: MovieClip & Record<string, any>;
      private var_155!: MovieClip & Record<string, any>;
      private strBuffID!: string;
      public var_86!: Sprite;
      private var_136!: number;
      private var_564!: number;
      public AlignCenter_mc!: MovieClip & Record<string, any>;
      private movDragDelete1!: MovieClip & Record<string, any>;
      private var_146!: string;
      private var_300!: boolean;
      private movDragDelete2!: MovieClip & Record<string, any>;
      private blnAvatarTank!: boolean;
      private var_237!: number;
      private var_127!: boolean;
      public var_75!: Sprite;
      private var_120!: MovieClip & Record<string, any>;
      private var_520: number = -2;
      private var_397!: number;
      private var_453!: number;
      public var_454!: boolean;
      private var_434!: boolean;
      public SymmetricMode_mc!: MovieClip & Record<string, any>;
      private var_79!: MovieClip & Record<string, any>;
      private movDragObj2!: MovieClip & Record<string, any>;
      private movDragObj1!: MovieClip & Record<string, any>;
      public SecondaryStats_mc!: MovieClip & Record<string, any>;
      public Left_mc!: MovieClip & Record<string, any>;
      public Undo_mc!: MovieClip & Record<string, any>;
      public Right_mc!: MovieClip & Record<string, any>;
      private var_573!: Function;
      private var_292!: boolean;
      private arrTankDetails!: any;
      public Details_mc!: MovieClip & Record<string, any>;
      private var_148!: number;
      private var_11!: MovieClip & Record<string, any>;
      public Rotate_mc!: MovieClip & Record<string, any>;
      public Resize_mc!: MovieClip & Record<string, any>;
      private var_369!: TankData;
      private objGameLibrary!: class_2;
      private refMain!: class_79;
      private var_167!: number;
      public BringFront_mc!: MovieClip & Record<string, any>;
      private var_426!: boolean;
      private strTankData!: string;
      private intCurrentClass!: number;
      public var_200!: number;
      public rings_mc!: MovieClip & Record<string, any>;
      private blnLoadedTank!: boolean;
      private var_49!: number;
      private var_92!: any;
      public LoadTank_mc!: MovieClip & Record<string, any>;
      public SendBack_mc!: MovieClip & Record<string, any>;
      private var_445!: number;
      public var_359!: number;
      private var_235!: number;
      private var_33!: any;
      public Stats_mc!: MovieClip & Record<string, any>;
      private var_108!: number;
      private var_7!: any;
      public alert_mc!: MovieClip & Record<string, any>;
      private var_240!: number;
      public tutorial!: MovieClip & Record<string, any>;
      private var_217!: number;
      private var_81!: number;
      private objPlayerProfileStorage!: PlayerProfile;
      private blnMouseDeleteDown!: boolean;
      private var_338!: boolean;
      private var_59!: number;
      private var_392!: number;
      private var_121: string = "??";
      private var_165!: Timer;
      private var_156!: MovieClip & Record<string, any>;
      private objOldPlayerProfile!: PlayerProfile;
      public select_mc!: MovieClip & Record<string, any>;
      private intTankDetailID!: number;
      private var_61!: number;
      public var_395!: number;
      private var_402!: number;
      private var_201!: number;
      private var_328!: boolean;
      private var_91!: Point;
      private const_2!: class_7;
      private var_366!: number;
      public SaveExit_mc!: MovieClip & Record<string, any>;
      constructor(param1: boolean = false, param2: string = "Avatar", param3: Function = null, param4: number = -2){
         var var_434: any, var_426: any, var_121: any, var_573: any, var_520: any, var_366: any, var_397: any, var_402: any;

         // @ts-ignore
         super();
         this.strBuffID = "";
         if(param1)
         {
            this.method_591();
            this.var_434 = false;
            this.var_426 = false;
            this.blnLoadedTank = false;
            this.var_121 = param2;
            this.var_573 = param3;
            this.var_520 = param4;
            this.var_366 = 0;
            this.var_397 = 0;
            this.var_402 = 0;
            if(param2 == "Enemy")
            {
               this.blnAvatarTank = false;
               this.method_359();
               this.method_357();
               this.method_447();
               this.method_445();
               this.method_739();
            }
            else
            {
               this.blnAvatarTank = true;
               this.method_385();
            }
         }
      }
      
      public method_206(param1: any): any
      {
         var var_121: any;

         this.method_236();
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.removeEventListener("mouseover", this.method_173.bind(this));
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.removeEventListener("mouseout", this.method_187.bind(this));
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.removeEventListener("mousedown", this.method_184.bind(this));
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.removeEventListener("mouseover", this.method_220.bind(this));
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.removeEventListener("mouseout", this.method_201.bind(this));
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.removeEventListener("mousedown", this.method_228.bind(this));
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.removeEventListener("mouseover", this.method_222.bind(this));
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.removeEventListener("mouseout", this.method_213.bind(this));
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.removeEventListener("mousedown", this.method_218.bind(this));
         this.SecondaryStats_mc.suggestedBox_mc.removeEventListener("click", this.method_331.bind(this));
         this.Stats_mc.gotoAndStop(1);
         this.SecondaryStats_mc.gotoAndStop(1);
         this.Stats_mc.removeEventListener("click", this.method_206.bind(this));
         this.SecondaryStats_mc.addEventListener("click", this.method_238.bind(this));
         if(this.var_121 == "Enemy")
         {
            this.method_359();
            this.method_357();
            this.method_447();
            this.method_445();
         }
         else
         {
            this.method_385();
         }
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
      }
      
      public method_174(param1: any): void
      {
         var var_11: any;

         this.var_11.Copy_btn.removeEventListener("click", this.method_202.bind(this));
         this.var_11.data_txt.removeEventListener("click", this.method_211.bind(this));
         this.var_11.return_btn.removeEventListener("click", this.method_114.bind(this));
         this.var_11.exit_btn.removeEventListener("click", this.method_110.bind(this));
         this.var_11.share_btn.removeEventListener("click", this.method_174.bind(this));
         this.var_11.gotoAndStop(4);
         if(this.refMain.bln50GunPoints)
         {
            this.method_80(10001);
         }
         else
         {
            this.var_11.cancel_btn.addEventListener("click", this.method_277.bind(this));
            this.var_11.agree_btn.addEventListener("click", this.method_274.bind(this));
         }
      }
      
      private method_718(): void
      {
         var var_7: any;

         var _loc7_: number = NaN;
         var _loc1_: number = 0;
         var _loc2_: number = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc7_ = Number(this.var_7[_loc2_ as any].clip.rotation);
            if(_loc7_ < 0)
            {
               _loc7_ = 360 + _loc7_;
            }
            _loc1_ += _loc7_;
            _loc2_++;
         }
         var _loc3_: number = 0;
         if(this.var_7.length != 0)
         {
            _loc3_ = _loc1_ / this.var_7.length;
         }
         360;
         var _loc5_: number = this.var_201 - this.var_148;
         var _loc6_: number = _loc3_ / 360;
         if(_loc6_ < 0)
         {
            _loc6_ = 0;
         }
         else if(_loc6_ > 1)
         {
            _loc6_ = 1;
         }
         (this.Rotate_mc.rotatehandle_mc as any).x = _loc5_ * _loc6_ + this.var_148;
      }
      
      public method_179(param1: any): void
      {
         var _loc2_: any = null as any;
         var _loc3_: string = null as any;
         var _loc4_: number = 0;
         _loc2_ = param1.target;
         while(_loc2_.name.substr(_loc2_.name.length - 3,3) != "_mc")
         {
            _loc2_ = _loc2_.parent;
         }
         _loc3_ = _loc2_.parent.name;
         _loc4_ = int(_loc3_.substr(4,_loc3_.length - 4));
         _loc2_.gotoAndStop(2);
         if(_loc4_ >= 1000 && _loc4_ <= 1999)
         {
            (_loc2_.circleclip as any).visible = false;
         }
         this.method_252(_loc2_.parent);
      }
      
      private method_311(param1: any): void
      {
         var var_292: any;

         var _loc6_: class_6 = null as any;
         var _loc9_: number = NaN;
         var _loc10_: MovieClip = null as any;
         var _loc11_: number = 0;
         var _loc12_: number = NaN;
         var _loc13_: number = NaN;
         var _loc14_: any = null as any;
         var _loc15_: number = 0;
         var _loc16_: number = 0;
         var _loc17_: any = null as any;
         var _loc18_: number = 0;
         var _loc19_: number = 0;
         if(this.var_292 == false)
         {
            this.StartDrag(param1);
         }
         this.var_292 = true;
         var _loc2_: boolean = false;
         if(this.var_127)
         {
            _loc9_ = 0[5];
            _loc10_ = null as any;
            _loc11_ = 0;
            while(_loc11_ < this.var_7.length)
            {
               if(Math.abs(this.var_7[_loc11_ as any].clip.y) <= this.var_453)
               {
                  if(Math.abs(this.var_7[_loc11_ as any].clip.y) <= _loc9_)
                  {
                     _loc9_ = Math.abs(this.var_7[_loc11_ as any].clip.y);
                     _loc10_ = this.var_7[_loc11_ as any].clip;
                  }
               }
               _loc11_++;
            }
         }
         else
         {
            this.method_688();
         }
         var _loc4_: Point = new (Point as any)(param1.stageX,param1.stageY);
         _loc4_ = this.var_75.globalToLocal(_loc4_);
         var _loc5_: class_6 = new (class_6 as any)(_loc4_.x - this.var_91.x,_loc4_.y - this.var_91.y);
         if(_loc10_ != null)
         {
            if(this.var_338 == false)
            {
               (_loc5_ as any).y = _loc10_.y;
               this.var_338 = true;
               _loc2_ = true;
            }
            else
            {
               _loc12_ = _loc4_.y - this.var_155.y;
               _loc12_ = _loc12_ - this.var_392;
               if(Math.abs(_loc12_) > _loc9_)
               {
                  this.var_338 = false;
                  _loc13_ = _loc4_.y - this.var_392;
                  (_loc5_ as any).y = _loc13_ - this.var_155.y;
                  _loc2_ = true;
               }
               else
               {
                  (_loc5_ as any).y = 0;
               }
            }
         }
         if(this.var_127)
         {
            _loc6_ = new (class_6 as any)(_loc5_.x,_loc5_.y * -1);
         }
         else
         {
            _loc6_ = new (class_6 as any)(_loc5_.x,_loc5_.y);
         }
         var _loc7_: number = 0;
         while(_loc7_ < this.var_7.length)
         {
            if(this.var_7[_loc7_ as any].onSide == true)
            {
               this.var_7[_loc7_ as any].clip.x += _loc5_.x;
               this.var_7[_loc7_ as any].clip.y += _loc5_.y;
            }
            else
            {
               this.var_7[_loc7_ as any].clip.x += _loc6_.x;
               this.var_7[_loc7_ as any].clip.y += _loc6_.y;
            }
            _loc7_++;
         }
         (this.var_91 as any).x = _loc4_.x;
         (this.var_91 as any).y = _loc4_.y;
         if(_loc2_ == true)
         {
            if(this.var_338 == true)
            {
               _loc14_ = new (Array as any)();
               _loc15_ = 0;
               while(_loc15_ < this.var_7.length)
               {
                  if(this.var_7[_loc15_ as any].(clip as any).y = = 0 && this.method_542(this.var_7[_loc15_ as any].clip,_loc14_) == false)
                  {
                     _loc14_.push(this.var_7[_loc15_ as any].clip as any);
                  }
                  _loc15_++;
               }
               _loc16_ = 0;
               while(_loc16_ < _loc14_.length)
               {
                  this.method_381(_loc14_[_loc16_ as any]);
                  _loc16_++;
               }
            }
            else
            {
               _loc17_ = new (Array as any)();
               _loc18_ = 0;
               while(_loc18_ < this.var_7.length)
               {
                  if(this.var_7[_loc18_ as any].clip.y - (_loc5_ as any).y = = 0 || this.var_7[_loc18_ as any].clip.y - (_loc6_ as any).y = = 0)
                  {
                     _loc17_.push(this.var_7[_loc18_ as any].clip as any);
                  }
                  _loc18_++;
               }
               _loc19_ = 0;
               while(_loc19_ < _loc17_.length)
               {
                  if(this.var_127)
                  {
                     this.method_552(_loc17_[_loc19_ as any]);
                  }
                  _loc19_++;
               }
            }
         }
         var _loc8_: number = 0;
         while(_loc8_ < this.var_7.length)
         {
            if(this.method_134(this.var_7[_loc8_ as any].clip) == true)
            {
               this.method_261(this.var_7[_loc8_ as any].clip);
            }
            else
            {
               this.method_145(this.var_7[_loc8_ as any].clip);
            }
            _loc8_++;
         }
      }
      
      public method_432(param1: any): void
      {
         var var_11: any;

         this.var_11.return_btn.removeEventListener("click", this.method_114.bind(this));
         this.var_11.exit_btn.removeEventListener("click", this.method_110.bind(this));
         this.removeChild(this.var_11);
         this.method_138();
      }
      
      public method_39(param1: any): void
      {
         param1.target.gotoAndStop(1);
         Mouse.cursor = MouseCursor.BUTTON;
      }
      
      public method_368(param1: any): void
      {
         var var_148: any;

         var _loc2_: Point = new (Point as any)(param1.stageX,param1.stageY);
         _loc2_ = this.Resize_mc.globalToLocal(_loc2_);
         var _loc3_: number = _loc2_.x;
         if(_loc3_ < this.var_148)
         {
            _loc3_ = this.var_148;
         }
         if(_loc3_ > this.var_201)
         {
            _loc3_ = this.var_201;
         }
         (this.Resize_mc.resizehandle_mc as any).x = _loc3_;
         var _loc4_: number = this.var_445 - this.var_336;
         var _loc5_: number = this.var_201 - this.var_148;
         var _loc6_: number = (_loc3_ - this.var_148) / _loc5_;
         var _loc7_: number = _loc6_ * _loc4_ + this.var_336;
         0;
         while(0 < this.var_7.length)
         {
            this.var_7[0].(clip as any).scaleX = this.var_7[0].(clip as any).scaleY = _loc7_;
            var _loc8_: number = 0 + 1;
         }
         this.method_234();
      }
      
      private UpdateClass(): void
      {
         var _loc4_: number = NaN;
         var _loc5_: number = NaN;
         var _loc6_: number = NaN;
         var _loc7_: any = 0;
         var _loc1_: any = new (Array as any)();
         _loc1_.push({
            "min":-1,
            "max":this.rings_mc.ring1_mc.width / 2
         } as any);
         _loc1_.push({
            "min":this.rings_mc.ring1_mc.width / 2,
            "max":this.rings_mc.ring2_mc.width / 2
         } as any);
         _loc1_.push({
            "min":this.rings_mc.ring2_mc.width / 2,
            "max":this.rings_mc.ring3_mc.width / 2
         } as any);
         _loc1_.push({
            "min":this.rings_mc.ring3_mc.width / 2,
            "max":this.rings_mc.ring4_mc.width / 2
         } as any);
         _loc1_.push({
            "min":this.rings_mc.ring4_mc.width / 2,
            "max":this.rings_mc.ring5_mc.width / 2
         } as any);
         var _loc2_: number = 1;
         var _loc3_: any = int(this.arrTankDetails.length - 1);
         while(_loc3_ >= 0)
         {
            if(_loc2_ == 6)
            {
               break;
            }
            _loc4_ = this.arrTankDetails[_loc3_ as any].clip.x * this.arrTankDetails[_loc3_ as any].clip.x;
            _loc5_ = this.arrTankDetails[_loc3_ as any].clip.y * this.arrTankDetails[_loc3_ as any].clip.y;
            _loc6_ = Math.sqrt(_loc4_ + _loc5_);
            if(this.objGameLibrary.IsObjectAWeapon(this.arrTankDetails[_loc3_ as any].type) == false)
            {
               _loc6_ += this.arrTankDetails[_loc3_ as any].radius * this.arrTankDetails[_loc3_ as any].scale;
            }
            if(_loc6_ > _loc1_[_loc1_.length - 1 as any].max)
            {
               _loc2_ = 6;
               break;
            }
            _loc7_ = int(_loc1_.length - 1);
            while(_loc7_ >= 0)
            {
               if(_loc7_ + 1 <= _loc2_)
               {
                  break;
               }
               if(_loc6_ > _loc1_[_loc7_ as any].min && _loc6_ <= _loc1_[_loc7_ as any].max)
               {
                  if(_loc7_ + 1 > _loc2_)
                  {
                     _loc2_ = _loc7_ + 1;
                  }
                  break;
               }
               _loc7_--;
            }
            _loc3_--;
         }
         this.intCurrentClass = _loc2_;
      }
      
      public method_51(param1: any): void
      {
         var _loc2_: TextField = null as any;
         var _loc3_: RegExp = null as any;
         var _loc4_: number = 0;
         _loc2_ = (param1.target as unknown as TextField);
         _loc3_ = /[^a-zA-Z0-9 _\-']/;
         if(param1.text.search(_loc3_) != -1)
         {
            param1.preventDefault();
            _loc2_.replaceText(_loc2_.caretIndex,_loc2_.caretIndex,"");
            _loc4_ = _loc2_.caretIndex + param1.text.length;
            _loc2_.setSelection(_loc4_,_loc4_);
         }
      }
      
      public method_277(param1: any): void
      {
         var var_11: any;

         this.var_11.cancel_btn.removeEventListener("click", this.method_277.bind(this));
         this.var_11.agree_btn.removeEventListener("click", this.method_274.bind(this));
         this.removeChild(this.var_11);
      }
      
      private method_699(): void
      {
         this.SymmetricMode_mc.addEventListener("click", this.SymmetricModeMouseUp.bind(this));
         this.SymmetricMode_mc.inside_mc.gotoAndStop(1);
         this.LoadTank_mc.addEventListener("click", this.LoadTanksMouseUp.bind(this));
         this.LoadTank_mc.gotoAndStop(1);
         this.SaveExit_mc.addEventListener("click", this.SaveExitMouseUp.bind(this));
         this.SaveExit_mc.gotoAndStop(1);
         this.Exit_mc.addEventListener("click", this.ExitMouseUp.bind(this));
         this.Exit_mc.gotoAndStop(1);
      }
      
      private method_202(param1: any): any
      {
         var var_11: any;

         System.setClipboard(this.var_11.data_txt.text);
      }
      
      public method_376(param1: any): void
      {
         var var_7: any;

         var _loc3_: number = 0;
         stage.removeEventListener("mouseup", this.method_376.bind(this));
         stage.removeEventListener("mousemove", this.method_449.bind(this));
         var _loc2_: number = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_ as any].clip == this.var_7[_loc2_ as any].clip)
               {
                  this.arrTankDetails[_loc3_ as any].rotation = this.var_7[_loc2_ as any].clip.rotation;
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         if(this.method_88() == false)
         {
            this.method_57();
         }
         this.method_85();
      }
      
      public method_211(param1: any): void
      {
         var var_11: any;

         this.var_11.data_txt.setSelection(0,this.var_11.data_txt.text.length);
      }
      
      public method_310(param1: any): void
      {
         var var_11: any, var_59: any, var_81: any, var_61: any, var_369: any;

         var _loc3_: number = 0;
         var _loc2_: TankData = new (TankData as any)();
         _loc2_.strAuthorName = this.var_11.author_txt.text;
         _loc2_.strTankName = this.var_11.tank_txt.text;
         _loc2_.blnAvatarTank = this.blnAvatarTank;
         _loc2_.numLife = this.var_59;
         _loc2_.numBubblesReturned = this.var_81;
         _loc2_.numSpeed = this.var_61;
         _loc2_.numDifficultyRating = 1;
         _loc2_.strID = "L" + this.refMain.intEnemyCountMaster;
         this.refMain.intEnemyCountMaster += 1;
         this.refMain.SaveAllData();
         this.var_369 = _loc2_;
         this.var_11.author_txt.removeEventListener("focusin", this.method_372.bind(this));
         this.var_11.author_txt.removeEventListener("focusout", this.method_433.bind(this));
         this.var_11.author_txt.removeEventListener("textInput", this.method_51.bind(this));
         this.var_11.tank_txt.removeEventListener("textInput", this.method_51.bind(this));
         this.var_11.cancel_btn.removeEventListener("click", this.method_162.bind(this));
         this.var_11.continue_btn.removeEventListener("click", this.method_310.bind(this));
         if(this.arrTankDetails.length <= 0 || _loc2_.strAuthorName == "" || _loc2_.strTankName == "")
         {
            this.method_80(9400);
         }
         else
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               _loc2_.method_467(this.arrTankDetails[_loc3_ as any].name,this.arrTankDetails[_loc3_ as any].type,this.arrTankDetails[_loc3_ as any].twin,this.arrTankDetails[_loc3_ as any].x,this.arrTankDetails[_loc3_ as any].y,this.arrTankDetails[_loc3_ as any].rotation,this.arrTankDetails[_loc3_ as any].scale,this.arrTankDetails[_loc3_ as any].radius);
               _loc3_++;
            }
            this.strTankData = _loc2_.ExportTankData();
            if(this.objOldPlayerProfile == null)
            {
               this.refMain.objCurrentPlayer.method_73(this.strTankData);
            }
            else
            {
               this.objOldPlayerProfile.method_73(this.strTankData);
            }
            this.var_11.gotoAndStop(3);
            this.var_11.data_txt.addEventListener("click", this.method_211.bind(this));
            this.var_11.return_btn.addEventListener("click", this.method_114.bind(this));
            this.var_11.exit_btn.addEventListener("click", this.method_110.bind(this));
            this.var_11.share_btn.addEventListener("click", this.method_174.bind(this));
            this.var_11.Copy_btn.addEventListener("click", this.method_202.bind(this));
            this.var_11.data_txt.text = this.strTankData;
         }
      }
      
      private method_530(param1: any): boolean
      {
         var var_7: any;

         if(this.var_7.length == 0)
         {
            return false;
         }
         var _loc2_: number = 0;
         while(_loc2_ < this.var_7.length)
         {
            if(this.var_7[_loc2_ as any].clip.hitTestPoint(param1.stageX,param1.stageY,true) == true)
            {
               return true;
            }
            _loc2_++;
         }
         return false;
      }
      
      private method_562(param1: any): void
      {
         param1.target.gotoAndStop("on");
      }
      
      private method_482(param1: any): void
      {
         var var_91: any, var_75: any;

         (this.var_91 as any).x = param1.stageX;
         (this.var_91 as any).y = param1.stageY;
         this.var_91 = this.var_75.globalToLocal(this.var_91);
      }
      
      public method_110(param1: any): void
      {
         var var_11: any;

         this.var_11.Copy_btn.removeEventListener("click", this.method_202.bind(this));
         this.var_11.data_txt.removeEventListener("click", this.method_211.bind(this));
         this.var_11.return_btn.removeEventListener("click", this.method_114.bind(this));
         this.var_11.exit_btn.removeEventListener("click", this.method_110.bind(this));
         this.var_11.share_btn.removeEventListener("click", this.method_174.bind(this));
         this.removeChild(this.var_11);
         this.method_138();
      }
      
      public method_413(param1: any): void
      {
         stage.addEventListener("mouseup", this.method_376.bind(this));
         stage.addEventListener("mousemove", this.method_449.bind(this));
      }
      
      public MoveSelectionRight(param1: any): void
      {
         var var_7: any;

         var _loc3_: number = 0;
         var _loc2_: number = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_ as any].clip == this.var_7[_loc2_ as any].clip)
               {
                  this.arrTankDetails[_loc3_ as any].clip.x += 1;
                  this.arrTankDetails[_loc3_ as any].x += 1;
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
         this.method_85();
         this.method_89();
      }
      
      private UpdateLibraryButtonsForAffordability(): void
      {
         var var_146: any, var_83: any;

         var _loc1_: any = null as any;
         var _loc3_: number = NaN;
         this.UpdateAffordableArray();
         if(this.var_146 == "body_mc")
         {
            _loc1_ = this.objGameLibrary.var_83;
         }
         else if(this.var_146 == "primary_mc")
         {
            _loc1_ = this.objGameLibrary.var_50;
         }
         else if(this.var_146 == "secondary_mc")
         {
            _loc1_ = this.objGameLibrary.var_62;
         }
         else if(this.var_146 == "EnemyWeapons_mc")
         {
            _loc1_ = this.objGameLibrary.var_48;
         }
         var _loc2_: number = 0;
         while(_loc2_ < _loc1_.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.var_33.length)
            {
               if("lib_" + _loc1_[_loc2_ as any].intObjID == this.var_33[_loc3_ as any].name)
               {
                  if(_loc1_[_loc2_ as any].intLocked == 0)
                  {
                     if(_loc1_[_loc2_ as any].blnAfford == true)
                     {
                        this.var_33[_loc3_ as any].alpha = 1;
                        break;
                     }
                     this.var_33[_loc3_ as any].alpha = 0[4];
                  }
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
      }
      
      public EndMotionRight(param1: any): void
      {
         if(this.Right_mc.hasEventListener("enterframe"))
         {
            this.Right_mc.removeEventListener("enterframe", this.MoveRight.bind(this));
         }
         if(this.method_88() == false)
         {
            this.method_57();
         }
      }
      
      private method_743(param1: any): void
      {
         var var_120: any;

         if(this.var_120 != null)
         {
            this.method_273(param1);
         }
         var _loc2_: any = param1.target;
         while(_loc2_.name.substr(_loc2_.name.length - 8,8) != "_icon_mc")
         {
            _loc2_ = _loc2_.parent;
         }
         var _loc3_: string = _loc2_.name;
         var _loc4_: number = int(_loc3_.substr(0,_loc3_.length - 8));
         this.var_120 = new (class_97 as any)();
         this.var_86.addChild(this.var_120);
         (this.var_120 as any).x = _loc2_.x;
         (this.var_120 as any).y = _loc2_.y;
         this.var_120.name_txt.text = this.objGameLibrary.method_37(_loc4_,false);
         this.var_120.gunPoints_txt.text = this.objGameLibrary.method_207(_loc4_,true);
         this.var_120.bubblePoints_txt.text = this.objGameLibrary.method_166(_loc4_,true);
         var _loc5_: number = this.objGameLibrary.method_149(_loc4_,true);
         var _loc6_: boolean = this.objGameLibrary.method_240(_loc4_,true);
         if(_loc5_ == 0)
         {
            this.var_120.special_txt.text = "";
         }
         else if(_loc6_ == true)
         {
            if(_loc5_ == 1)
            {
               this.var_120.special_txt.text = "Must be export class 1.";
            }
            else
            {
               this.var_120.special_txt.text = "Must be class " + _loc5_ + " or lower.";
            }
         }
         else if(_loc5_ == 6)
         {
            this.var_120.special_txt.text = "Must be export class 6.";
         }
         else
         {
            this.var_120.special_txt.text = "Must be class " + _loc5_ + " or higher.";
         }
         this.var_120.addEventListener("mouseout", this.method_273.bind(this));
      }
      
      private method_57(): void
      {
         var _loc1_: any = new (Array as any)();
         var _loc2_: number = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc1_.push({
               "name":this.arrTankDetails[_loc2_ as any].name,
               "type":this.arrTankDetails[_loc2_ as any].type,
               "twin":this.arrTankDetails[_loc2_ as any].twin,
               "clip":null,
               "x":this.arrTankDetails[_loc2_ as any].x,
               "y":this.arrTankDetails[_loc2_ as any].y,
               "rotation":this.arrTankDetails[_loc2_ as any].rotation,
               "scale":this.arrTankDetails[_loc2_ as any].scale,
               "radius":this.arrTankDetails[_loc2_ as any].radius
            } as any);
            _loc2_++;
         }
         this.var_92.push(_loc1_ as any);
         if(this.var_92.length > 1)
         {
            this.OpenUndoButton();
         }
      }
      
      public method_477(param1: number): void
      {
         var var_40: number = param1;
         if(var_40 == 1 || var_40 == 3)
         {
            try
            {
               this.Stats_mc.Library_mc.scroll_mc.bar_mc.removeEventListener("mouseover", this.method_425.bind(this));
               this.Stats_mc.Library_mc.scroll_mc.bar_mc.removeEventListener("mouseout", this.method_469.bind(this));
               this.Stats_mc.Library_mc.scroll_mc.bar_mc.removeEventListener("mousedown", this.LibScrollBarDown.bind(this));
               this.Stats_mc.Library_mc.scroll_mc.bar_mc.removeEventListener("mouseup", this.LibScrollBarUp.bind(this));
               this.Stats_mc.Library_mc.scroll_mc.up_mc.removeEventListener("mouseover", this.method_192.bind(this));
               this.Stats_mc.Library_mc.scroll_mc.up_mc.removeEventListener("mouseout", this.method_182.bind(this));
               this.Stats_mc.Library_mc.scroll_mc.up_mc.removeEventListener("mousedown", this.LibScrollArrowDown.bind(this));
               this.Stats_mc.Library_mc.scroll_mc.down_mc.removeEventListener("mouseover", this.method_192.bind(this));
               this.Stats_mc.Library_mc.scroll_mc.down_mc.removeEventListener("mouseout", this.method_182.bind(this));
               this.Stats_mc.Library_mc.scroll_mc.down_mc.removeEventListener("mousedown", this.LibScrollArrowDown.bind(this));
            }
            catch (e: any)
            {
            }
         }
         if(var_40 == 1)
         {
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.gotoAndStop(1);
            (this.Stats_mc.Library_mc.scroll_mc.bar_mc as any).y = 18;
         }
         else if(var_40 == 2)
         {
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.gotoAndStop(2);
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.addEventListener("mouseover", this.method_425.bind(this));
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.addEventListener("mouseout", this.method_469.bind(this));
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.addEventListener("mousedown", this.LibScrollBarDown.bind(this));
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.addEventListener("mouseup", this.LibScrollBarUp.bind(this));
            this.Stats_mc.Library_mc.scroll_mc.up_mc.addEventListener("mouseover", this.method_192.bind(this));
            this.Stats_mc.Library_mc.scroll_mc.up_mc.addEventListener("mouseout", this.method_182.bind(this));
            this.Stats_mc.Library_mc.scroll_mc.up_mc.addEventListener("mousedown", this.LibScrollArrowDown.bind(this));
            this.Stats_mc.Library_mc.scroll_mc.down_mc.addEventListener("mouseover", this.method_192.bind(this));
            this.Stats_mc.Library_mc.scroll_mc.down_mc.addEventListener("mouseout", this.method_182.bind(this));
            this.Stats_mc.Library_mc.scroll_mc.down_mc.addEventListener("mousedown", this.LibScrollArrowDown.bind(this));
         }
         else if(var_40 == 3)
         {
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.gotoAndStop(2);
         }
         this.method_339();
      }
      
      private method_291(param1: boolean = false): void
      {
         (this.DeleteButton_mc as any).visible = true;
         (this.BringFront_mc as any).visible = true;
         (this.SendBack_mc as any).visible = true;
         (this.Resize_mc as any).visible = true;
         (this.Rotate_mc as any).visible = true;
         (this.AlignCenter_mc as any).visible = true;
         (this.Right_mc as any).visible = true;
         (this.Left_mc as any).visible = true;
         this.method_737();
         this.method_718();
         if(param1 == false)
         {
            if(this.DeleteButton_mc.hasEventListener("click") == false)
            {
               this.DeleteButton_mc.addEventListener("mouseup", this.DeleteButtonMouseUp.bind(this));
               this.DeleteButton_mc.addEventListener("mousedown", this.DeleteButtonMouseDown.bind(this));
               this.BringFront_mc.addEventListener("click", this.method_430.bind(this));
               this.SendBack_mc.addEventListener("click", this.method_358.bind(this));
               this.AlignCenter_mc.addEventListener("click", this.method_464.bind(this));
               this.Right_mc.addEventListener("click", this.MoveSelectionRight.bind(this));
               this.Left_mc.addEventListener("click", this.MoveSelectionLeft.bind(this));
               this.Right_mc.addEventListener("mousedown", this.StartMotionRight.bind(this));
               this.Left_mc.addEventListener("mousedown", this.StartMotionLeft.bind(this));
               this.Right_mc.addEventListener("mouseup", this.EndMotionRight.bind(this));
               this.Left_mc.addEventListener("mouseup", this.EndMotionLeft.bind(this));
               this.Right_mc.addEventListener("mouseout", this.EndMotionRight.bind(this));
               this.Left_mc.addEventListener("mouseout", this.EndMotionLeft.bind(this));
               this.Resize_mc.resizehandle_mc.addEventListener("mouseover", this.method_442.bind(this));
               this.Resize_mc.resizehandle_mc.addEventListener("mouseout", this.method_350.bind(this));
               this.Resize_mc.resizehandle_mc.addEventListener("mousedown", this.method_400.bind(this));
               this.Rotate_mc.rotatehandle_mc.addEventListener("mouseover", this.method_439.bind(this));
               this.Rotate_mc.rotatehandle_mc.addEventListener("mouseout", this.method_387.bind(this));
               this.Rotate_mc.rotatehandle_mc.addEventListener("mousedown", this.method_413.bind(this));
            }
         }
      }
      
      public method_411(param1: any): void
      {
         stage.removeEventListener("mouseup", this.method_411.bind(this));
         stage.removeEventListener("mousemove", this.method_403.bind(this));
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateSecondaryStatsPanel();
      }
      
      private method_338(param1: any): void
      {
         var var_300: any, var_75: any, var_91: any;

         this.var_300 = true;
         this.var_75.graphics.clear();
         this.var_75.graphics.lineStyle(1,52223);
         var _loc2_: Point = new (Point as any)(param1.stageX,param1.stageY);
         _loc2_ = this.var_75.globalToLocal(_loc2_);
         var _loc3_: number = _loc2_.y - this.var_91.y;
         var _loc4_: number = _loc2_.x - this.var_91.x;
         this.var_75.graphics.drawRect(this.var_91.x,this.var_91.y,_loc4_,_loc3_);
      }
      
      public StartMotionRight(param1: any): void
      {
         this.Right_mc.addEventListener("enterframe", this.MoveRight.bind(this));
      }
      
      public method_419(): void
      {
         this.method_138();
      }
      
      public method_694(param1: string): void
      {
         var var_11: any;

         this.var_11.gotoAndStop(6);
         this.var_11.id_txt.text = "Tank Id Number: " + param1;
         this.strBuffID = param1;
         this.var_11.return_btn.addEventListener("click", this.method_379.bind(this));
         this.var_11.exit_btn.addEventListener("click", this.method_432.bind(this));
         this.var_11.shareTank_mc.addEventListener("mouseup", this.method_740.bind(this));
         this.var_11.shareTank_mc.addEventListener("mouseover", this.method_562.bind(this));
         this.var_11.shareTank_mc.addEventListener("mouseout", this.method_487.bind(this));
         var _temp_3: any = this.var_11.shareTank_mc;
         var _temp_2: any = this.var_11.shareTank_mc;
         var _temp_1: any = true;
         _temp_2.buttonMode = _temp_1;
         _temp_3.useHandCursor = true;
      }
      
      public method_187(param1: any): void
      {
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.gotoAndStop(1);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      public method_469(param1: any): void
      {
         param1.target.gotoAndStop(2);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      public method_520(param1: any): void
      {
         var _loc2_: any = null as any;
         _loc2_ = param1.target;
         while(_loc2_.name.substr(_loc2_.name.length - 3,3) != "_mc")
         {
            _loc2_ = _loc2_.parent;
         }
         this.method_252(_loc2_.parent,true);
      }
      
      private method_579(param1: any): void
      {
         var var_454: any, var_49: any, var_385: any, var_127: any;

         var _loc2_: any = this.method_108();
         this.var_454 = true;
         var _loc3_: Point = new (Point as any)(param1.stageX,param1.stageY);
         _loc3_ = this.movTank.globalToLocal(_loc3_);
         this.movDragObj1 = new _loc2_[this.ButtonIndex2LibraryIndex(this.var_49) as any].claType();
         (this.movDragObj1 as any).x = _loc3_.x;
         (this.movDragObj1 as any).y = _loc3_.y;
         this.movDragObj1.name = this.intTankDetailID + "_mc";
         this.movDragObj1.intObjID = _loc2_[this.ButtonIndex2LibraryIndex(this.var_49) as any].intObjID;
         this.movTank.addChild(this.movDragObj1);
         this.var_385 = this.movDragObj1.width / 2;
         ++this.intTankDetailID;
         this.method_145(this.movDragObj1);
         if(this.var_127 == true)
         {
            this.movDragObj2 = new _loc2_[this.ButtonIndex2LibraryIndex(this.var_49) as any].claType();
            (this.movDragObj2 as any).alpha = 0[25];
            (this.movDragObj2 as any).x = _loc3_.x;
            (this.movDragObj2 as any).y = -1 * _loc3_.y;
            this.movDragObj2.name = this.intTankDetailID + "_mc";
            this.movDragObj2.intObjID = _loc2_[this.ButtonIndex2LibraryIndex(this.var_49) as any].intObjID;
            ++this.intTankDetailID;
            this.movTank.addChild(this.movDragObj2);
            this.method_145(this.movDragObj2);
         }
      }
      
      private UpdateStatsPanel(): void
      {
         var var_139: any;

         var _loc1_: any = this.objGameLibrary.GetClassData(this.intCurrentClass);
         _loc1_.armor = Math.round(_loc1_.armor * 100);
         _loc1_.speed = Math.round(_loc1_.speed * 100);
         var _loc2_: number = 0;
         if(this.refMain.var_139)
         {
            _loc2_ = 12;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.gunPointsMax.value;
         }
         if(this.var_121 == "Enemy")
         {
            _loc2_ = Math.floor(_loc2_ * 1[5]);
         }
         if(this.refMain.bln50GunPoints)
         {
            _loc2_ = 50;
         }
         var _loc3_: number = 0;
         if(this.refMain.var_132)
         {
            _loc3_ = 100;
         }
         else
         {
            _loc3_ = this.refMain.objCurrentPlayer.bubblePointsMax.value;
         }
         this.Stats_mc.bubblesLeft_txt.text = " " + this.var_167 + " / " + _loc3_;
         this.Stats_mc.gunPoints_txt.text = " " + this.var_108 + " / " + _loc2_;
         this.Stats_mc.class_txt.text = " " + this.intCurrentClass;
         if(this.var_366 != this.var_167)
         {
            this.var_359 = 3;
            this.method_256();
         }
         if(this.var_397 != this.var_108)
         {
            this.var_394 = 3;
            this.method_256();
         }
         if(this.var_402 != this.intCurrentClass)
         {
            this.var_395 = 3;
            this.method_256();
         }
         this.var_366 = this.var_167;
         this.var_397 = this.var_108;
         this.var_402 = this.intCurrentClass;
         if(this.var_121 == "Avatar")
         {
            this.Stats_mc.armor_txt.text = " " + _loc1_.armor + "%";
            this.Stats_mc.speed_txt.text = " " + _loc1_.speed + "%";
         }
         var _loc4_: any = this.method_496();
         if(this.var_121 == "Enemy")
         {
            this.Stats_mc.primary_txt.text = _loc4_.strEnemyWeapons;
            this.Stats_mc.secondary_txt.text = "";
         }
         else
         {
            this.Stats_mc.primary_txt.text = _loc4_.strPrimary;
            this.Stats_mc.secondary_txt.text = _loc4_.strSecondary;
         }
         var _loc5_: number = 0;
         if(this.refMain.blnCheatClass)
         {
            _loc5_ = 6;
         }
         else
         {
            _loc5_ = this.refMain.objCurrentPlayer.maxClass.value;
         }
         this.method_281(this.intCurrentClass,_loc5_);
      }
      
      public method_201(param1: any): void
      {
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.gotoAndStop(1);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      private method_332(param1: any): void
      {
         this.alert_mc.alpha -= 0[01];
         if(this.alert_mc.alpha <= 0)
         {
            (this.alert_mc as any).alpha = 1;
            (this.alert_mc as any).visible = false;
            this.alert_mc.removeEventListener("enterframe", this.method_332.bind(this));
         }
      }
      
      public method_182(param1: any): void
      {
         param1.target.gotoAndStop(1);
      }
      
      private method_737(): void
      {
         var var_7: any;

         var _loc1_: number = 0;
         var _loc2_: number = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc1_ += this.var_7[_loc2_ as any].clip.scaleX;
            _loc2_++;
         }
         var _loc3_: number = 1;
         if(this.var_7.length != 0)
         {
            _loc3_ = _loc1_ / this.var_7.length;
         }
         var _loc4_: number = this.var_445 - this.var_336;
         var _loc5_: number = this.var_201 - this.var_148;
         var _loc6_: number = (_loc3_ - this.var_336) / _loc4_;
         if(_loc6_ < 0)
         {
            _loc6_ = 0;
         }
         else if(_loc6_ > 1)
         {
            _loc6_ = 1;
         }
         (this.Resize_mc.resizehandle_mc as any).x = _loc5_ * _loc6_ + this.var_148;
      }
      
      private method_555(): void
      {
         var var_276: any;

         if(!this.var_276)
         {
            return;
         }
         this.var_59 = (this.var_167 / 2 + this.var_108 * 3) * this.intCurrentClass;
         var _loc1_: number = 0[0005] * this.var_59;
         if(_loc1_ > 0[1])
         {
            _loc1_ = 0[1];
         }
         this.var_81 = Math.round(this.var_59 * (0[3] * ((7 - this.intCurrentClass) / 6) + 0[005] * this.var_108 + 0[1] - _loc1_));
         if(this.var_81 < this.var_136)
         {
            this.var_81 = this.var_136;
         }
         this.var_61 = 3 * ((6 - this.intCurrentClass) / 6) + 0[5] - this.var_108 * 0[1];
         if(this.var_61 < 0[1])
         {
            this.var_61 = 0[1];
         }
         this.var_61 = Math.floor(this.var_61 * 100) / 100;
      }
      
      public DeleteButtonMouseDown(param1: any): void
      {
         this.blnMouseDeleteDown = true;
      }
      
      public DeleteButtonMouseUp(param1: any): void
      {
         var var_7: any;

         var _loc2_: any = null as any;
         var _loc3_: number = 0;
         var _loc4_: number = 0;
         if(this.blnMouseDeleteDown)
         {
            _loc2_ = new (Array as any)();
            _loc3_ = 0;
            while(_loc3_ < this.var_7.length)
            {
               _loc2_.push(this.var_7[_loc3_ as any].clip as any);
               _loc3_++;
            }
            _loc4_ = 0;
            while(_loc4_ < _loc2_.length)
            {
               this.method_132(_loc2_[_loc4_ as any]);
               _loc4_++;
            }
            this.method_85();
            this.method_99();
            this.UpdateClass();
            this.UpdateLibraryButtonsForAffordability();
            this.UpdateStatsPanel();
            this.blnMouseDeleteDown = false;
            if(this.method_88() == false)
            {
               this.method_57();
            }
         }
      }
      
      public method_445(): any
      {
         this.SecondaryStats_mc.addEventListener("click", this.method_238.bind(this));
         this.Stats_mc.PrimarySecondary_txt.text = "Weapons:";
         this.Stats_mc.Speed_txt.text = "";
         this.Stats_mc.speed_txt.text = "";
         this.Stats_mc.Armor_txt.text = "";
         this.Stats_mc.armor_txt.text = "";
      }
      
      private method_713(): void
      {
         var var_454: any, var_49: any, var_385: any;

         this.var_454 = false;
         var _loc1_: any = this.method_108();
         var _loc2_: number = this.arrTankDetails.push({
            "name":this.movDragObj1.name,
            "type":_loc1_[this.ButtonIndex2LibraryIndex(this.var_49) as any].intObjID,
            "twin":"",
            "clip":this.movDragObj1,
            "x":this.movDragObj1.x,
            "y":this.movDragObj1.y,
            "rotation":0,
            "scale":1,
            "radius":this.var_385
         } as any) - 1;
         if(this.var_127 == true)
         {
            if(this.movDragObj2 != null)
            {
               (this.movDragObj2 as any).alpha = 1;
               this.arrTankDetails.push({
                  "name":this.movDragObj2.name,
                  "type":_loc1_[this.ButtonIndex2LibraryIndex(this.var_49) as any].intObjID,
                  "twin":this.movDragObj1.name,
                  "clip":this.movDragObj2,
                  "x":this.movDragObj2.x,
                  "y":this.movDragObj2.y,
                  "rotation":0,
                  "scale":1,
                  "radius":this.var_385
               } as any);
               this.arrTankDetails[_loc2_ as any].twin = this.movDragObj2.name;
            }
         }
         var _loc3_: Point = new (Point as any)(this.movDragObj1.x,this.movDragObj1.y);
         _loc3_ = this.movTank.localToGlobal(_loc3_);
         _loc3_ = this.globalToLocal(_loc3_);
         if(this.select_mc.hitTestPoint(_loc3_.x,_loc3_.y,false) == false)
         {
            this.method_132(this.movDragObj1);
         }
         if(this.method_134(this.movDragObj1) == false)
         {
            this.method_132(this.movDragObj1);
         }
         if(this.movDragObj2 != null)
         {
            (_loc3_ as any).x = this.movDragObj2.x;
            (_loc3_ as any).y = this.movDragObj2.y;
            _loc3_ = this.movTank.localToGlobal(_loc3_);
            _loc3_ = this.globalToLocal(_loc3_);
            if(this.select_mc.hitTestPoint(_loc3_.x,_loc3_.y,false) == false)
            {
               this.method_132(this.movDragObj2);
            }
            if(this.method_134(this.movDragObj2) == false)
            {
               this.method_132(this.movDragObj2);
            }
         }
         this.movDragObj1 = null as any;
         this.movDragObj2 = null as any;
         if(this.method_88() == false)
         {
            this.method_57();
         }
         this.method_99();
         this.UpdateClass();
         this.UpdateLibraryButtonsForAffordability();
         this.UpdateStatsPanel();
      }
      
      public method_712(): void
      {
         var _loc1_: number = this.getChildIndex(this.select_mc);
         this.movTank = new (MovieClip as any)();
         (this.movTank as any).x = this.rings_mc.x;
         (this.movTank as any).y = this.rings_mc.y;
         this.movTank.name = "tank_mc";
         this.addChildAt(this.movTank,_loc1_);
      }
      
      private StopDrag(param1: any): void
      {
         var var_7: any;

         var _loc6_: number = 0;
         this.method_234();
         var _loc2_: any = new (Array as any)();
         var _loc3_: number = 0;
         while(_loc3_ < this.var_7.length)
         {
            if(this.method_134(this.var_7[_loc3_ as any].clip) == false)
            {
               _loc2_.push(this.var_7[_loc3_ as any].clip as any);
            }
            _loc3_++;
         }
         var _loc4_: number = 0;
         while(_loc4_ < _loc2_.length)
         {
            this.method_132(_loc2_[_loc4_ as any]);
            _loc4_++;
         }
         var _loc5_: number = 0;
         while(_loc5_ < this.var_7.length)
         {
            _loc6_ = 0;
            while(_loc6_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc6_ as any].clip == this.var_7[_loc5_ as any].clip)
               {
                  this.arrTankDetails[_loc6_ as any].x = this.var_7[_loc5_ as any].clip.x;
                  this.arrTankDetails[_loc6_ as any].y = this.var_7[_loc5_ as any].clip.y;
                  break;
               }
               _loc6_++;
            }
            _loc5_++;
         }
         if(this.method_88() == false)
         {
            this.method_57();
         }
         this.method_85();
         if(this.var_7.length > 0)
         {
            this.method_291();
         }
         else
         {
            this.method_101();
         }
         this.method_99();
         this.UpdateClass();
         this.UpdateLibraryButtonsForAffordability();
         this.UpdateStatsPanel();
      }
      
      public method_342(param1: any): void
      {
         stage.removeEventListener("mouseup", this.method_342.bind(this));
         stage.removeEventListener("mousemove", this.method_405.bind(this));
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateSecondaryStatsPanel();
      }
      
      public method_430(param1: any): void
      {
         var var_7: any;

         var _loc5_: number = 0;
         var _loc2_: any = new (Array as any)();
         var _loc3_: number = 0;
         while(_loc3_ < this.var_7.length)
         {
            _loc5_ = 0;
            while(_loc5_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc5_ as any].clip == this.var_7[_loc3_ as any].clip)
               {
                  _loc2_.push(this.arrTankDetails[_loc5_ as any] as any);
                  this.arrTankDetails.splice(_loc5_,1);
                  break;
               }
               _loc5_++;
            }
            _loc3_++;
         }
         var _loc4_: number = 0;
         while(_loc4_ < _loc2_.length)
         {
            this.movTank.setChildIndex(_loc2_[_loc4_ as any].clip,this.movTank.numChildren - 1);
            _loc4_++;
         }
         this.arrTankDetails = this.arrTankDetails.concat(_loc2_);
         if(this.method_88() == false)
         {
            this.method_57();
         }
      }
      
      private StartDrag(param1: any): void
      {
         var var_155: any, var_75: any, var_7: any, var_91: any;

         var _loc4_: boolean = false;
         this.var_155 = null as any;
         var _loc2_: Point = new (Point as any)(param1.stageX,param1.stageY);
         _loc2_ = this.var_75.globalToLocal(_loc2_);
         var _loc3_: number = 0;
         while(_loc3_ < this.var_7.length)
         {
            _loc4_ = false;
            if(this.var_91.y >= 0 && this.var_7[_loc3_ as any].clip.y >= 0 || this.var_91.y < 0 && this.var_7[_loc3_ as any].clip.y < 0)
            {
               _loc4_ = true;
            }
            if(_loc4_ == true)
            {
               this.var_7[_loc3_ as any].onSide = true;
               if(this.var_155 == null)
               {
                  this.var_155 = this.var_7[_loc3_ as any].clip;
                  this.var_392 = _loc2_.y - this.var_155.y;
               }
            }
            else
            {
               this.var_7[_loc3_ as any].onSide = false;
            }
            _loc3_++;
         }
         if(this.var_155 == null)
         {
            this.var_155 = this.var_7[0].clip;
            this.var_392 = _loc2_.y - this.var_155.y;
         }
         this.method_185();
      }
      
      public method_275(): void
      {
         var var_235: any, var_211: any, var_61: any;

         var _loc1_: number = this.var_235 - this.var_211;
         var _loc2_: number = Math.sqrt((this.var_61 - this.var_211) / _loc1_) * 110 - 55;
         if(_loc2_ < -55)
         {
            _loc2_ = -55;
         }
         if(_loc2_ > 55)
         {
            _loc2_ = 55;
         }
         (this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc as any).x = _loc2_;
      }
      
      public method_384(param1: any): any
      {
         if(this.SecondaryStats_mc.SpeedCurrent_txt.text.substr(this.SecondaryStats_mc.SpeedCurrent_txt.text.length - 1,1) == ".")
         {
            return;
         }
         var _loc2_: number = Number(this.SecondaryStats_mc.SpeedCurrent_txt.text);
         var _loc3_: string = "" + _loc2_;
         if(_loc3_ == "NaN")
         {
            _loc2_ = this.var_211;
         }
         if(_loc2_ > this.var_235)
         {
            _loc2_ = this.var_235;
         }
         if(_loc2_ < this.var_211)
         {
            _loc2_ = this.var_211;
         }
         this.var_61 = _loc2_;
         this.UpdateSecondaryStatsPanel();
         this.method_275();
      }
      
      private UpdateAffordableArray(): void
      {
         var var_146: any, var_83: any;

         var _loc1_: any = null as any;
         var _loc6_: boolean = false;
         if(this.var_146 == "body_mc")
         {
            _loc1_ = this.objGameLibrary.var_83;
         }
         else if(this.var_146 == "primary_mc")
         {
            _loc1_ = this.objGameLibrary.var_50;
         }
         else if(this.var_146 == "secondary_mc")
         {
            _loc1_ = this.objGameLibrary.var_62;
         }
         else if(this.var_146 == "EnemyWeapons_mc")
         {
            _loc1_ = this.objGameLibrary.var_48;
         }
         var _loc2_: number = 0;
         var _loc3_: number = 0;
         if(this.refMain.var_132)
         {
            _loc2_ = 100;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.bubblePointsMax.value;
         }
         if(this.refMain.var_139)
         {
            _loc3_ = 12;
         }
         else
         {
            _loc3_ = this.refMain.objCurrentPlayer.gunPointsMax.value;
         }
         var _loc4_: number = _loc2_ - this.var_167;
         if(this.var_121 == "Enemy")
         {
            _loc3_ = Math.floor(_loc3_ * 1[5]);
         }
         if(this.refMain.bln50GunPoints)
         {
            _loc3_ = 50;
         }
         var _loc5_: number = _loc3_ - this.var_108;
         var _loc7_: number = 0;
         while(_loc7_ < _loc1_.length)
         {
            _loc6_ = true;
            if(_loc1_[_loc7_ as any].intBubbleCost > _loc4_)
            {
               _loc6_ = false;
            }
            else if(_loc1_[_loc7_ as any].intGunCost > _loc5_)
            {
               _loc6_ = false;
            }
            else if(_loc1_[_loc7_ as any].intClassCost != 0)
            {
               if(_loc1_[_loc7_ as any].blnLower == true)
               {
                  if(this.intCurrentClass > _loc1_[_loc7_ as any].intClassCost)
                  {
                     _loc6_ = false;
                  }
               }
               else if(this.intCurrentClass < _loc1_[_loc7_ as any].intClassCost)
               {
                  _loc6_ = false;
               }
            }
            _loc1_[_loc7_ as any].blnAfford = _loc6_;
            _loc7_++;
         }
      }
      
      public method_464(param1: any): void
      {
         var var_7: any;

         var _loc3_: number = 0;
         var _loc2_: number = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_ as any].clip == this.var_7[_loc2_ as any].clip)
               {
                  this.arrTankDetails[_loc3_ as any].(clip as any).y = 0;
                  this.arrTankDetails[_loc3_ as any].y = 0;
                  if(this.arrTankDetails[_loc3_ as any].twin != "")
                  {
                     this.method_381(this.arrTankDetails[_loc3_ as any].clip);
                  }
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         if(this.method_88() == false)
         {
            this.method_57();
         }
         this.UpdateClass();
         this.UpdateLibraryButtonsForAffordability();
         this.UpdateStatsPanel();
         this.method_85();
         this.method_89();
         this.UpdateStatsPanel();
      }
      
      public MoveRight(param1: any): void
      {
         var var_7: any;

         var _loc3_: number = 0;
         var _loc2_: number = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_ as any].clip == this.var_7[_loc2_ as any].clip)
               {
                  this.arrTankDetails[_loc3_ as any].clip.x += 1;
                  this.arrTankDetails[_loc3_ as any].x += 1;
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
         this.method_85();
         this.method_89();
      }
      
      public method_295(): void
      {
         var var_240: any, var_136: any, var_81: any;

         var _loc1_: number = this.var_240 - this.var_136;
         var _loc2_: number = Math.sqrt((this.var_81 - this.var_136) / _loc1_) * 110 - 55;
         if(_loc2_ < -55)
         {
            _loc2_ = -55;
         }
         if(_loc2_ > 55)
         {
            _loc2_ = 55;
         }
         (this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc as any).x = _loc2_;
      }
      
      private method_89(): void
      {
         var var_7: any, var_86: any;

         var _loc1_: number = 0;
         var _loc2_: number = 0;
         var _loc3_: MovieClip = null as any;
         var _loc4_: any = null as any;
         var _loc5_: Rectangle = null as any;
         this.method_474();
         if(this.var_7.length > 0)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_7.length)
            {
               _loc2_ = 0;
               while(_loc2_ < this.arrTankDetails.length)
               {
                  if(this.arrTankDetails[_loc2_ as any].clip == this.var_7[_loc1_ as any].clip)
                  {
                     if(this.objGameLibrary.IsObjectAWeapon(this.arrTankDetails[_loc2_ as any].type) == true)
                     {
                        _loc3_ = new (WeaponRolloverIcon as any)();
                        this.var_86.addChild(_loc3_);
                        _loc3_.name = this.arrTankDetails[_loc2_ as any].type + "_icon_mc";
                        _loc4_ = this.var_86.getChildByName(this.var_7[_loc1_ as any].clip.name);
                        if(_loc4_ != null)
                        {
                           _loc5_ = _loc4_.getBounds(this.var_86);
                           (_loc3_ as any).y = _loc5_.y;
                           (_loc3_ as any).x = _loc5_.x + _loc5_.width;
                           _loc3_.addEventListener("mouseover", this.method_743.bind(this));
                        }
                     }
                     break;
                  }
                  _loc2_++;
               }
               _loc1_++;
            }
         }
      }
      
      public method_449(param1: any): void
      {
         var var_148: any;

         var _loc2_: Point = new (Point as any)(param1.stageX,param1.stageY);
         _loc2_ = this.Rotate_mc.globalToLocal(_loc2_);
         var _loc3_: number = _loc2_.x;
         if(_loc3_ < this.var_148)
         {
            _loc3_ = this.var_148;
         }
         if(_loc3_ > this.var_201)
         {
            _loc3_ = this.var_201;
         }
         (this.Rotate_mc.rotatehandle_mc as any).x = _loc3_;
         360;
         var _loc5_: number = this.var_201 - this.var_148;
         var _loc6_: number = (_loc3_ - this.var_148) / _loc5_;
         var _loc7_: number = _loc6_ * 360;
         var _loc8_: number = 0;
         while(_loc8_ < this.var_7.length)
         {
            if(this.var_7[_loc8_ as any].clip.y <= 0)
            {
               this.var_7[_loc8_ as any].(clip as any).rotation = _loc7_;
            }
            else
            {
               this.var_7[_loc8_ as any].(clip as any).rotation = 360 - _loc7_;
            }
            _loc8_++;
         }
         this.method_234();
      }
      
      private method_487(param1: any): void
      {
         param1.target.gotoAndStop("off");
      }
      
      public method_170(param1: any): void
      {
         var _loc2_: any = null as any;
         _loc2_ = param1.target;
         while(_loc2_.name.substr(_loc2_.name.length - 3,3) != "_mc")
         {
            _loc2_ = _loc2_.parent;
         }
         this.method_424(_loc2_.parent.name);
      }
      
      public method_842(param1: any): void
      {
      }
      
      private method_815(param1: any): boolean
      {
         var _loc2_: number = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc2_ as any].clip.hitTestPoint(param1.stageX,param1.stageY,true) == true)
            {
               return false;
            }
            _loc2_++;
         }
         return true;
      }
      
      public method_345(param1: any): any
      {
         var var_11: any;

         this.var_11.cancel_btn.removeEventListener("click", this.method_162.bind(this));
         this.var_11.exit_btn.removeEventListener("click", this.method_345.bind(this));
         this.removeChild(this.var_11);
         this.method_138();
      }
      
      private method_261(param1: MovieClip): void
      {
         if(param1.filters.length == 0)
         {
            return;
         }
         param1.filters = [];
      }
      
      public StartMotionLeft(param1: any): void
      {
         this.Left_mc.addEventListener("enterframe", this.MoveLeft.bind(this));
      }
      
      public method_450(param1: any): void
      {
         var var_136: any;

         var _loc2_: number = Number(this.SecondaryStats_mc.BubblesReturnedCurrent_txt.text);
         var _loc3_: string = "" + _loc2_;
         if(_loc3_ == "NaN")
         {
            _loc2_ = this.var_136;
         }
         if(_loc2_ > this.var_240)
         {
            _loc2_ = this.var_240;
         }
         if(_loc2_ < this.var_136)
         {
            _loc2_ = this.var_136;
         }
         this.var_81 = _loc2_;
         this.UpdateSecondaryStatsPanel();
         this.method_295();
      }
      
      public method_58(param1: any): void
      {
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      private IsClipAWeapon(param1: MovieClip): boolean
      {
         var _loc2_: number = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc2_ as any].clip == param1)
            {
               return this.objGameLibrary.IsObjectAWeapon(this.arrTankDetails[_loc2_ as any].type);
            }
            _loc2_++;
         }
         return this.objGameLibrary.IsObjectAWeapon(param1.intObjID);
      }
      
      private method_334(param1: MovieClip, param2: boolean = false): void
      {
         var var_7: any;

         var _loc3_: number = 0;
         while(_loc3_ < this.var_7.length)
         {
            if(param1 == this.var_7[_loc3_ as any].clip)
            {
               this.var_7.splice(_loc3_,1);
               break;
            }
            _loc3_++;
         }
         (param1 as any).alpha = 1;
         var _loc4_: Sprite = (this.var_86.getChildByName(param1.name) as unknown as Sprite);
         _loc4_.graphics.clear();
         this.var_86.removeChild(_loc4_);
         _loc4_ = null as any;
      }
      
      private method_500(): void
      {
         var var_269: any;

         if(this.refMain.objCurrentPlayer.var_269 == false)
         {
            this.refMain.objCurrentPlayer.var_269 = true;
            this.tutorial.back_tut.addEventListener("mouseover", this.method_214.bind(this));
            this.tutorial.back_tut.addEventListener("mouseout", this.method_191.bind(this));
            this.tutorial.back_tut.addEventListener("mouseup", this.tutBtnUp.bind(this));
            this.tutorial.back_tut.buttonMode = this.tutorial.back_tut.useHandCursor = this.tutorial.back_tut.mouseEnabled = true;
            this.tutorial.next_tut.addEventListener("mouseover", this.method_214.bind(this));
            this.tutorial.next_tut.addEventListener("mouseout", this.method_191.bind(this));
            this.tutorial.next_tut.addEventListener("mouseup", this.tutBtnUp.bind(this));
            this.tutorial.next_tut.buttonMode = this.tutorial.next_tut.useHandCursor = this.tutorial.next_tut.mouseEnabled = true;
            this.tutorial.gotoAndStop("tut_1");
         }
      }
      
      private method_394(param1: MovieClip): void
      {
         var var_86: any;

         var _loc2_: Sprite = new (Sprite as any)();
         this.var_86.addChild(_loc2_);
         _loc2_.name = param1.name;
         var _loc3_: Rectangle = param1.getBounds(_loc2_);
         _loc2_.graphics.lineStyle(1,52223);
         _loc2_.graphics.drawRect(_loc3_.x,_loc3_.y,_loc3_.width,_loc3_.height);
      }
      
      private method_531(param1: any, param2: any, param3: any): boolean
      {
         var var_59: any, var_167: any, var_108: any;

         this.var_59 = (this.var_167 / 2 + this.var_108 * 3) * this.intCurrentClass;
         var _loc4_: number = 0[0005] * this.var_59;
         if(_loc4_ > 0[1])
         {
            _loc4_ = 0[1];
         }
         this.var_81 = Math.round(this.var_59 * (0[3] * ((7 - this.intCurrentClass) / 6) + 0[005] * this.var_108 + 0[1] - _loc4_));
         if(this.var_81 < this.var_136)
         {
            this.var_81 = this.var_136;
         }
         this.var_61 = 3 * ((6 - this.intCurrentClass) / 6) + 0[5] - this.var_108 * 0[1];
         if(this.var_61 < 0[1])
         {
            this.var_61 = 0[1];
         }
         this.var_61 = Math.floor(this.var_61 * 100) / 100;
         if(this.var_59 == param1 && this.var_61 == param2 && this.var_81 == param3)
         {
            return true;
         }
         this.var_59 = param1;
         this.var_61 = param2;
         this.var_81 = param3;
         return false;
      }
      
      public ScrollJump2Percentage(param1: number): void
      {
         var _loc2_: number = NaN;
         var _loc3_: number = NaN;
         _loc3_ = this.Stats_mc.Library_mc.inside_mc.height - 9 * 20;
         _loc2_ = -1 * (param1 * _loc3_);
         _loc2_ += 82[95];
         (this.Stats_mc.Library_mc.inside_mc as any).y = _loc2_;
      }
      
      public method_508(): void
      {
         this.setChildIndex(this.Details_mc,this.numChildren - 1);
         (this.Details_mc as any).visible = false;
      }
      
      public method_108(): any
      {
         var var_146: any, var_83: any;

         var _loc1_: any = null as any;
         var _loc3_: any = null as any;
         var _loc5_: number = 0;
         if(this.var_146 == "body_mc")
         {
            _loc1_ = this.objGameLibrary.var_83;
         }
         else if(this.var_146 == "primary_mc")
         {
            _loc1_ = this.objGameLibrary.var_50;
         }
         else if(this.var_146 == "secondary_mc")
         {
            _loc1_ = this.objGameLibrary.var_62;
         }
         else if(this.var_146 == "EnemyWeapons_mc")
         {
            _loc1_ = this.objGameLibrary.var_48;
         }
         var _loc2_: number = 0;
         while(_loc2_ < _loc1_.length)
         {
            _loc1_[_loc2_ as any].intLocked = 1;
            _loc2_++;
         }
         if(this.refMain.var_224)
         {
            _loc3_ = this.refMain.objCurrentPlayer.arrAllObjectIDs;
         }
         else
         {
            _loc3_ = this.refMain.objCurrentPlayer.arrUnlockedObjects;
         }
         var _loc4_: number = 0;
         while(_loc4_ < _loc3_.length)
         {
            _loc5_ = 0;
            while(_loc5_ < _loc1_.length)
            {
               if(_loc1_[_loc5_ as any].intObjID == _loc3_[_loc4_ as any])
               {
                  _loc1_[_loc5_ as any].intLocked = 0;
                  break;
               }
               _loc5_++;
            }
            _loc4_++;
         }
         this.UpdateAffordableArray();
         _loc1_.sortOn(["intLocked","intGunCost","intObjID"]);
         return _loc1_;
      }
      
      public method_162(param1: any): void
      {
         var var_11: any;

         this.var_11.cancel_btn.removeEventListener("click", this.method_162.bind(this));
         this.removeChild(this.var_11);
         this.var_11 = null as any;
      }
      
      public method_591(): any
      {
         var var_336: any, var_445: any, var_148: any, var_201: any, var_300: any, var_292: any, var_338: any, var_155: any, var_453: any, var_564: any, var_61: any, var_81: any, var_59: any, var_127: any, var_328: any, var_92: any, var_167: any, var_108: any, var_33: any, var_7: any, var_165: any;

         this.var_336 = 0[5];
         this.var_445 = 2;
         this.var_148 = -57;
         this.var_201 = 57;
         this.var_300 = false;
         this.var_292 = false;
         this.var_338 = false;
         this.var_155 = null as any;
         this.var_453 = 3;
         this.var_564 = 11;
         this.var_61 = 1;
         this.var_81 = 1;
         this.var_59 = 1;
         this.var_127 = true;
         this.var_328 = false;
         this.arrTankDetails = new (Array as any)();
         this.var_92 = new (Array as any)();
         this.intTankDetailID = 1;
         this.var_167 = 0;
         this.var_108 = 0;
         this.intCurrentClass = 1;
         this.var_33 = new (Array as any)();
         this.var_7 = new (Array as any)();
         this.objGameLibrary = class_2.getInstance();
         this.strTankData = "";
         this.method_699();
         this.CloseUndoButton();
         this.method_431();
         this.method_281(1);
         (this.alert_mc as any).visible = false;
         this.var_165 = new (Timer as any)(2000,1);
         this.var_127 = true;
         this.method_712();
         this.method_508();
         this.method_507();
         this.method_101();
         this.method_57();
      }
      
      public method_204(): void
      {
         var _loc2_: any = undefined;
         this.method_130();
         var _loc1_: number = 0;
         while(_loc1_ < this.arrTankDetails.length)
         {
            this.movTank.removeChild(this.arrTankDetails[_loc1_ as any].clip);
            this.arrTankDetails[_loc1_ as any].clip = null as any;
            _loc1_++;
         }
         while(this.arrTankDetails.length > 0)
         {
            _loc2_ = this.arrTankDetails.pop();
            _loc2_ = null as any;
         }
         this.arrTankDetails.length = 0;
      }
      
      private method_431(): void
      {
         this.Stats_mc.body_mc.gotoAndStop(2);
         if(this.Stats_mc.body_mc.hasEventListener("mouseout"))
         {
            this.Stats_mc.body_mc.removeEventListener("mouseout", this.method_58.bind(this));
         }
         this.Stats_mc.body_mc.addEventListener("mouseover", this.method_39.bind(this));
         this.Stats_mc.body_mc.addEventListener("mouseout", this.method_38.bind(this));
         this.Stats_mc.body_mc.addEventListener("click", this.method_40.bind(this));
         if(this.Stats_mc.primary_mc.hasEventListener("mouseout"))
         {
            this.Stats_mc.primary_mc.removeEventListener("mouseout", this.method_58.bind(this));
         }
         this.Stats_mc.primary_mc.gotoAndStop(2);
         this.Stats_mc.primary_mc.addEventListener("mouseover", this.method_39.bind(this));
         this.Stats_mc.primary_mc.addEventListener("mouseout", this.method_38.bind(this));
         this.Stats_mc.primary_mc.addEventListener("click", this.method_40.bind(this));
         if(this.Stats_mc.secondary_mc.hasEventListener("mouseout"))
         {
            this.Stats_mc.secondary_mc.removeEventListener("mouseout", this.method_58.bind(this));
         }
         this.Stats_mc.secondary_mc.gotoAndStop(2);
         this.Stats_mc.secondary_mc.addEventListener("mouseover", this.method_39.bind(this));
         this.Stats_mc.secondary_mc.addEventListener("mouseout", this.method_38.bind(this));
         this.Stats_mc.secondary_mc.addEventListener("click", this.method_40.bind(this));
         if(this.var_121 == "Enemy")
         {
            if(this.Stats_mc.EnemyWeapons_mc.hasEventListener("mouseout"))
            {
               this.Stats_mc.EnemyWeapons_mc.removeEventListener("mouseout", this.method_58.bind(this));
            }
            this.Stats_mc.EnemyWeapons_mc.gotoAndStop(2);
            this.Stats_mc.EnemyWeapons_mc.addEventListener("mouseover", this.method_39.bind(this));
            this.Stats_mc.EnemyWeapons_mc.addEventListener("mouseout", this.method_38.bind(this));
            this.Stats_mc.EnemyWeapons_mc.addEventListener("click", this.method_40.bind(this));
         }
      }
      
      public method_740(param1: any): void
      {
         this.refMain.method_370();
         this.refMain.method_416(this.strBuffID,this.strBuffID,null,this.refMain.GameShareTankCallback);
      }
      
      public method_278(param1: any): void
      {
         var var_369: any;

         var _loc4_: number = NaN;
         var _loc2_: URLLoader = (param1.target as unknown as URLLoader);
         var _loc3_: URLVariables = new (URLVariables as any)(_loc2_.data);
         if(Number(_loc3_.intResponse) == 1000)
         {
            if(String(_loc3_.strTankId).substr(0,1) == "E" || String(_loc3_.strTankId).substr(0,1) == "A")
            {
               this.var_369.strID = "" + _loc3_.strTankId;
               if(this.objOldPlayerProfile == null)
               {
                  this.refMain.objCurrentPlayer.EditPreviousTankID(this.var_369);
               }
               else
               {
                  this.objOldPlayerProfile.EditPreviousTankID(this.var_369);
               }
               this.refMain.SaveAllData();
            }
            this.method_694(String(_loc3_.strTankId));
         }
         else
         {
            _loc4_ = Number(_loc3_.intResponse);
            this.method_80(_loc4_);
         }
      }
      
      private method_615(param1: string): any
      {
         var var_165: any;

         (this.alert_mc as any).visible = true;
         this.alert_mc.description_txt.text = param1;
         this.var_165.reset();
         if(this.var_165.hasEventListener(TimerEvent.TIMER_COMPLETE) == false)
         {
            this.var_165.addEventListener(TimerEvent.TIMER_COMPLETE, this.method_250.bind(this));
         }
         this.var_165.start();
         this.method_130();
         this.method_101();
         this.RevertTank();
      }
      
      private method_85(): void
      {
         var var_7: any;

         this.method_185();
         var _loc1_: number = 0;
         while(_loc1_ < this.var_7.length)
         {
            this.method_394(this.var_7[_loc1_ as any].clip);
            _loc1_++;
         }
         this.method_89();
      }
      
      private method_252(param1: MovieClip, param2: boolean = false): void
      {
         var var_33: any;

         (this.Details_mc as any).visible = true;
         var _loc3_: string = param1.name;
         var _loc4_: number = int(_loc3_.substr(4,_loc3_.length - 4));
         var _loc5_: any = this.method_108();
         var _loc6_: any = -1;
         var _loc7_: number = 0;
         while(_loc7_ < this.var_33.length)
         {
            if(this.var_33[_loc7_ as any].name == param1.name)
            {
               _loc6_ = _loc7_;
               break;
            }
            _loc7_++;
         }
         var _loc8_: Point = new (Point as any)(param1.x,param1.y);
         _loc8_ = param1.parent.localToGlobal(_loc8_);
         _loc8_ = this.Details_mc.globalToLocal(_loc8_);
         (this.Details_mc.Arrow_mc as any).y = _loc8_.y;
         (this.Details_mc.Arrow_mc as any).alpha = param1.alpha;
         if(param2 == true)
         {
            this.Details_mc.Arrow_mc.gotoAndStop(2);
         }
         else
         {
            this.Details_mc.Arrow_mc.gotoAndStop(1);
         }
         this.Details_mc.name_txt.text = this.objGameLibrary.method_37(_loc4_,false);
         this.Details_mc.gunPoints_txt.text = this.objGameLibrary.method_207(_loc4_,true);
         this.Details_mc.bubblePoints_txt.text = this.objGameLibrary.method_166(_loc4_,true);
         var _loc9_: number = this.objGameLibrary.method_149(_loc4_,true);
         var _loc10_: boolean = this.objGameLibrary.method_240(_loc4_,true);
         if(_loc9_ == 0)
         {
            this.Details_mc.special_txt.text = "";
         }
         else if(_loc10_ == true)
         {
            if(_loc9_ == 1)
            {
               this.Details_mc.special_txt.text = "Must be export class 1.";
            }
            else
            {
               this.Details_mc.special_txt.text = "Must be class " + _loc9_ + " or lower.";
            }
         }
         else if(_loc9_ == 6)
         {
            this.Details_mc.special_txt.text = "Must be export class 6.";
         }
         else
         {
            this.Details_mc.special_txt.text = "Must be class " + _loc9_ + " or higher.";
         }
         this.Details_mc.damage_txt.text = this.objGameLibrary.method_606(_loc4_,true);
         this.Details_mc.summary_txt.text = this.objGameLibrary.method_535(_loc4_,true);
         this.Details_mc.flavor_txt.text = this.objGameLibrary.method_614(_loc4_,true);
         if(this.var_79 != null)
         {
            this.Details_mc.Viewer_mc.removeChild(this.var_79);
            this.var_79 = null as any;
         }
         this.var_79 = new _loc5_[this.ButtonIndex2LibraryIndex(_loc6_) as any].claType();
         if(this.var_79.width >= this.var_79.height)
         {
            if(this.var_79.width > 48)
            {
               (this.var_79 as any).width = 48;
               (this.var_79 as any).scaleY = this.var_79.scaleX;
            }
         }
         else if(this.var_79.height > 48)
         {
            (this.var_79 as any).height = 48;
            (this.var_79 as any).scaleX = this.var_79.scaleY;
         }
         this.Details_mc.Viewer_mc.addChild(this.var_79);
      }
      
      private method_132(param1: MovieClip): void
      {
         var var_7: any;

         var _loc8_: number = 0;
         var _loc2_: number = -1;
         var _loc4_: number = -1;
         var _loc5_: number = -1;
         var _loc6_: number = 0;
         while(_loc6_ < this.var_7.length)
         {
            if(this.var_7[_loc6_ as any].clip == param1)
            {
               _loc2_ = int(_loc6_);
               break;
            }
            _loc6_++;
         }
         var _loc7_: number = 0;
         while(_loc7_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc7_ as any].clip == param1)
            {
               _loc4_ = int(_loc7_);
               break;
            }
            _loc7_++;
         }
         if(_loc4_ == -1)
         {
            return;
         }
         if(this.arrTankDetails[_loc4_ as any].twin != "")
         {
            _loc8_ = 0;
            while(_loc8_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc8_ as any].name == this.arrTankDetails[_loc4_ as any].twin)
               {
                  _loc5_ = int(_loc8_);
                  break;
               }
               _loc8_++;
            }
         }
         if(this.arrTankDetails[_loc4_ as any].twin != "")
         {
            this.arrTankDetails[_loc4_ as any].twin = "";
            if(_loc5_ != -1)
            {
               this.arrTankDetails[_loc5_ as any].twin = "";
            }
         }
         this.movTank.removeChild(this.arrTankDetails[_loc4_ as any].clip);
         this.arrTankDetails[_loc4_ as any].clip = null as any;
         if(_loc2_ != -1)
         {
            this.var_7[_loc2_ as any].clip = null as any;
         }
         this.arrTankDetails.splice(_loc4_,1);
         if(_loc2_ != -1)
         {
            this.var_7.splice(_loc2_,1);
         }
      }
      
      private method_160(param1: MovieClip): boolean
      {
         var var_7: any;

         var _loc2_: number = 0;
         while(_loc2_ < this.var_7.length)
         {
            if(this.var_7[_loc2_ as any].clip.name == param1.name)
            {
               return true;
            }
            _loc2_++;
         }
         return false;
      }
      
      public method_138(): void
      {
         var var_520: any, var_426: any;

         this.method_329();
         this.refMain.TransitionTankCreator2ArenaSelect(this.strTankData,this.var_520,this.var_426);
      }
      
      public LibScrollArrowDown(param1: any): void
      {
         var var_328: any;

         if(this.var_328 == true)
         {
            return;
         }
         if(param1.target.name == "up_mc")
         {
            this.method_347(-1);
         }
         else if(param1.target.name == "down_mc")
         {
            this.method_347(1);
         }
      }
      
      public method_236(): void
      {
         this.SecondaryStats_mc.LifeCurrent_txt.addEventListener("change", this.method_395.bind(this));
         this.SecondaryStats_mc.BubblesReturnedCurrent_txt.addEventListener("change", this.method_450.bind(this));
         this.SecondaryStats_mc.SpeedCurrent_txt.addEventListener("change", this.method_384.bind(this));
         this.SecondaryStats_mc.LifeCurrent_txt.selectable = false;
         this.SecondaryStats_mc.BubblesReturnedCurrent_txt.selectable = false;
         this.SecondaryStats_mc.SpeedCurrent_txt.selectable = false;
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.removeEventListener("mouseover", this.method_173.bind(this));
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.removeEventListener("mouseout", this.method_187.bind(this));
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.removeEventListener("mousedown", this.method_184.bind(this));
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.removeEventListener("mouseover", this.method_220.bind(this));
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.removeEventListener("mouseout", this.method_201.bind(this));
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.removeEventListener("mousedown", this.method_228.bind(this));
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.removeEventListener("mouseover", this.method_222.bind(this));
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.removeEventListener("mouseout", this.method_213.bind(this));
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.removeEventListener("mousedown", this.method_218.bind(this));
      }
      
      private method_688(): void
      {
         var var_7: any;

         var _loc2_: number = 0;
         var _loc3_: number = 0;
         var _loc4_: number = 0;
         var _loc5_: number = 0;
         var _loc1_: number = 0;
         while(_loc1_ < this.var_7.length)
         {
            _loc2_ = -1;
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.var_7[_loc1_ as any].clip == this.arrTankDetails[_loc3_ as any].clip)
               {
                  _loc2_ = int(_loc3_);
                  break;
               }
               _loc3_++;
            }
            if(_loc2_ != -1)
            {
               if(this.arrTankDetails[_loc2_ as any].twin != "")
               {
                  if(this.method_160((this.movTank.getChildByName(this.arrTankDetails[_loc2_ as any].twin) as unknown as MovieClip)) == true)
                  {
                     _loc4_ = -1;
                     _loc5_ = 0;
                     while(_loc5_ < this.arrTankDetails.length)
                     {
                        if(this.arrTankDetails[_loc2_ as any].twin == this.arrTankDetails[_loc5_ as any].name)
                        {
                           _loc4_ = int(_loc5_);
                           break;
                        }
                        _loc5_++;
                     }
                     if(_loc4_ != -1)
                     {
                        this.arrTankDetails[_loc4_ as any].twin = "";
                     }
                     this.arrTankDetails[_loc2_ as any].twin = "";
                  }
               }
            }
            _loc1_++;
         }
      }
      
      public method_222(param1: any): void
      {
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.gotoAndStop(2);
         Mouse.cursor = MouseCursor.HAND;
      }
      
      public method_387(param1: any): void
      {
         this.Rotate_mc.rotatehandle_mc.gotoAndStop(1);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      private method_230(): void
      {
         var var_79: any;

         (this.Details_mc as any).visible = false;
         if(this.var_79 != null)
         {
            this.Details_mc.Viewer_mc.removeChild(this.var_79);
         }
         this.var_79 = null as any;
      }
      
      private method_424(param1: string): void
      {
         var var_156: any;

         var var_106: number;
         var var_126: string = null as any;
         var var_56: number = 0;
         var var_40: string = param1;
         var var_150: any = this.method_108();
         this.method_303();
         if(this.var_156 != null)
         {
            this.Stats_mc.Library_mc.viewer_mc.removeChild(this.var_156);
            this.var_156 = null as any;
         }
         this.var_49 = -1;
         var_106 = 0;
         while(var_106 < this.var_33.length)
         {
            if(this.var_33[var_106 as any].name == var_40)
            {
               this.var_49 = var_106;
               break;
            }
            var_106++;
         }
         if(this.var_49 != -1)
         {
            this.var_33[this.var_49 as any].inside_mc.removeEventListener("mouseover", this.method_179.bind(this));
            this.var_33[this.var_49 as any].inside_mc.removeEventListener("mouseout", this.method_180.bind(this));
            this.var_33[this.var_49 as any].inside_mc.removeEventListener("mouseup", this.method_170.bind(this));
            this.var_33[this.var_49 as any].inside_mc.gotoAndStop(3);
            this.var_33[this.var_49 as any].inside_mc.addEventListener("mouseover", this.method_520.bind(this));
            this.var_33[this.var_49 as any].inside_mc.addEventListener("mouseout", this.method_670.bind(this));
            var_126 = this.var_33[this.var_49 as any].name;
            var_56 = int(var_126.substr(4,var_126.length - 4));
            if(var_56 >= 1000 && var_56 <= 1999)
            {
               this.var_33[this.var_49 as any].(inside_mc.circleclip as any).visible = false;
            }
            this.var_156 = new var_150[this.ButtonIndex2LibraryIndex(this.var_49) as any].claType();
            this.Stats_mc.Library_mc.viewer_mc.addChild(this.var_156);
            try
            {
               this.Stats_mc.Library_mc.clickArea_mc.removeEventListener("mousedown", this.StartLibraryDrag.bind(this));
            }
            catch (e: any)
            {
            }
            this.Stats_mc.Library_mc.clickArea_mc.addEventListener("mousedown", this.StartLibraryDrag.bind(this));
            if(this.var_79 != null)
            {
               this.method_230();
               this.method_252(this.var_33[this.var_49 as any],true);
            }
         }
      }
      
      public YesToSuggestedSettings(param1: any): any
      {
         var var_276: any;

         this.SecondaryStats_mc.ConfirmMenu_mc.btnYes.removeEventListener("click", this.YesToSuggestedSettings.bind(this));
         this.SecondaryStats_mc.ConfirmMenu_mc.btnNo.removeEventListener("click", this.NoToSuggestedSettings.bind(this));
         this.SecondaryStats_mc.ConfirmMenu_mc.play();
         this.var_276 = true;
         this.SecondaryStats_mc.suggestedBox_mc.gotoAndStop(2);
         this.UseSuggestedSettings();
         this.method_236();
      }
      
      public method_274(param1: any): void
      {
         var var_11: any;

         this.var_11.cancel_btn.removeEventListener("click", this.method_277.bind(this));
         this.var_11.agree_btn.removeEventListener("click", this.method_274.bind(this));
         this.var_11.gotoAndStop(5);
         this.method_654();
      }
      
      public method_654(): void
      {
         var var_488: any, var_509: any;

         var var_40: URLLoader;
         var var_56: string = "http://" + this.refMain.gData.var_488 + this.refMain.gData.var_509;
         var var_126: URLRequest = new (URLRequest as any)(var_56);
         var var_106: URLVariables = new (URLVariables as any)();
         var_106.strData = this.strTankData;
         var_126.data = var_106;
         var_126.method = URLRequestMethod.POST;
         var_40 = new (URLLoader as any)();
         var_40 = new (URLLoader as any)();
         var_40.dataFormat = URLLoaderDataFormat.TEXT;
         var_40.addEventListener("complete", this.method_278.bind(this));
         var_40.addEventListener(HTTPStatusEvent.HTTP_STATUS, this.method_280.bind(this));
         var_40.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
         var_40.addEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
         try
         {
            var_40.load(var_126);
         }
         catch (e: any)
         {
         }
      }
      
      private method_371(): void
      {
         var var_156: any;

         var var_40: number;
         try
         {
            if(this.var_156 != null)
            {
               this.Stats_mc.Library_mc.viewer_mc.removeChild(this.var_156);
               this.var_156 = null as any;
            }
         }
         catch (e: any)
         {
         }
         var_40 = 0;
         while(var_40 < this.var_33.length)
         {
            this.var_33[var_40 as any].inside_mc.removeEventListener("mouseover", this.method_179.bind(this));
            this.var_33[var_40 as any].inside_mc.removeEventListener("mouseout", this.method_180.bind(this));
            this.var_33[var_40 as any].inside_mc.removeEventListener("mouseup", this.method_170.bind(this));
            this.Stats_mc.Library_mc.inside_mc.removeChild(this.var_33[var_40 as any]);
            this.var_33[var_40 as any] = null as any;
            var_40++;
         }
         this.var_33 = null as any;
         this.var_33 = new (Array as any)();
      }
      
      public method_439(param1: any): void
      {
         this.Rotate_mc.rotatehandle_mc.gotoAndStop(2);
         Mouse.cursor = MouseCursor.HAND;
      }
      
      private method_357(): any
      {
         this.Stats_mc.secondary_mc.removeEventListener("mouseover", this.method_39.bind(this));
         this.Stats_mc.secondary_mc.removeEventListener("mouseout", this.method_38.bind(this));
         this.Stats_mc.secondary_mc.removeEventListener("click", this.method_40.bind(this));
         this.Stats_mc.removeChild(this.Stats_mc.secondary_mc);
      }
      
      private method_385(): any
      {
         this.removeChild(this.SecondaryStats_mc);
         this.Stats_mc.removeChild(this.Stats_mc.EnemyWeapons_mc);
      }
      
      public ExitMouseUp(param1: any): void
      {
         var var_11: any;

         Mouse.cursor = MouseCursor.AUTO;
         this.var_11 = new (TankScreens as any)();
         this.addChild(this.var_11);
         this.var_11.gotoAndStop(1);
         this.var_11.cancel_btn.addEventListener("click", this.method_162.bind(this));
         this.var_11.exit_btn.addEventListener("click", this.method_345.bind(this));
      }
      
      public method_192(param1: any): void
      {
         param1.target.gotoAndStop(2);
      }
      
      public method_744(param1: TankData, param2: boolean = false): any
      {
         var var_434: any;

         var _loc4_: MovieClip = null as any;
         this.method_204();
         this.var_434 = param2;
         var _loc3_: number = 0;
         while(_loc3_ < param1.arrTankDetails.length)
         {
            this.arrTankDetails.push({
               "name":param1.arrTankDetails[_loc3_ as any].name,
               "type":param1.arrTankDetails[_loc3_ as any].type,
               "twin":param1.arrTankDetails[_loc3_ as any].twin,
               "clip":null,
               "x":param1.arrTankDetails[_loc3_ as any].x,
               "y":param1.arrTankDetails[_loc3_ as any].y,
               "rotation":param1.arrTankDetails[_loc3_ as any].rotation,
               "scale":param1.arrTankDetails[_loc3_ as any].scale,
               "radius":param1.arrTankDetails[_loc3_ as any].radius
            } as any);
            this.intTankDetailID = Math.max(this.intTankDetailID,int(this.arrTankDetails[_loc3_ as any].name.substr(0,this.arrTankDetails[_loc3_ as any].name.search("_"))));
            _loc3_++;
         }
         this.intTankDetailID += 1;
         this.strTankData = param1.ExportTankData();
         0;
         while(0 < this.arrTankDetails.length)
         {
            _loc4_ = this.objGameLibrary.method_123(this.arrTankDetails[0].type);
            (_loc4_ as any).x = this.arrTankDetails[0].x;
            (_loc4_ as any).y = this.arrTankDetails[0].y;
            (_loc4_ as any).scaleX = (_loc4_ as any).scaleY = this.arrTankDetails[0].scale;
            (_loc4_ as any).rotation = this.arrTankDetails[0].rotation;
            _loc4_.name = this.arrTankDetails[0].name;
            this.arrTankDetails[0].clip = _loc4_;
            this.movTank.addChild(_loc4_);
            var _loc5_: number = 0 + 1;
         }
         this.blnLoadedTank = true;
         if(this.var_121 == "Enemy")
         {
            this.var_59 = param1.numLife;
            this.var_61 = param1.numSpeed;
            this.var_81 = param1.numBubblesReturned;
            if(!this.method_531(this.var_59,this.var_61,this.var_81))
            {
               this.var_276 = false;
               this.SecondaryStats_mc.suggestedBox_mc.gotoAndStop(1);
            }
         }
         this.method_99();
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
         this.method_57();
         this.var_366 = this.var_167;
         this.var_397 = this.var_108;
         this.var_402 = this.intCurrentClass;
      }
      
      public StopLibraryDrag(param1: any): void
      {
         this.method_713();
         stage.removeEventListener("mouseup", this.StopLibraryDrag.bind(this));
         stage.removeEventListener("mousemove", this.method_344.bind(this));
         this.method_251();
      }
      
      private method_323(): void
      {
         var var_121: any;

         this.Stats_mc.body_mc.removeEventListener("mouseover", this.method_39.bind(this));
         this.Stats_mc.body_mc.removeEventListener("mouseout", this.method_38.bind(this));
         this.Stats_mc.body_mc.removeEventListener("click", this.method_40.bind(this));
         this.Stats_mc.body_mc.removeEventListener("mouseout", this.method_58.bind(this));
         this.Stats_mc.primary_mc.removeEventListener("mouseover", this.method_39.bind(this));
         this.Stats_mc.primary_mc.removeEventListener("mouseout", this.method_38.bind(this));
         this.Stats_mc.primary_mc.removeEventListener("click", this.method_40.bind(this));
         this.Stats_mc.primary_mc.removeEventListener("mouseout", this.method_58.bind(this));
         this.Stats_mc.secondary_mc.removeEventListener("mouseover", this.method_39.bind(this));
         this.Stats_mc.secondary_mc.removeEventListener("mouseout", this.method_38.bind(this));
         this.Stats_mc.secondary_mc.removeEventListener("click", this.method_40.bind(this));
         this.Stats_mc.secondary_mc.removeEventListener("mouseout", this.method_58.bind(this));
         if(this.var_121 == "Enemy")
         {
            this.Stats_mc.EnemyWeapons_mc.removeEventListener("mouseover", this.method_39.bind(this));
            this.Stats_mc.EnemyWeapons_mc.removeEventListener("mouseout", this.method_38.bind(this));
            this.Stats_mc.EnemyWeapons_mc.removeEventListener("click", this.method_40.bind(this));
            this.Stats_mc.EnemyWeapons_mc.removeEventListener("mouseout", this.method_58.bind(this));
         }
      }
      
      public method_395(param1: any): void
      {
         var var_217: any;

         var _loc2_: number = Number(this.SecondaryStats_mc.LifeCurrent_txt.text);
         var _loc3_: string = "" + _loc2_;
         if(_loc3_ == "NaN")
         {
            _loc2_ = this.var_217;
         }
         if(_loc2_ > this.var_237)
         {
            _loc2_ = this.var_237;
         }
         if(_loc2_ < this.var_217)
         {
            _loc2_ = this.var_217;
         }
         this.var_59 = _loc2_;
         this.UpdateSecondaryStatsPanel();
         this.method_243();
      }
      
      private method_273(param1: any): void
      {
         var var_86: any, var_120: any;

         var var_40: any = param1;
         try
         {
            this.var_86.removeChild(this.var_120);
            this.var_120 = null as any;
         }
         catch (e: any)
         {
         }
      }
      
      public method_339(): void
      {
         var _loc1_: number = NaN;
         _loc1_ = (this.Stats_mc.Library_mc.scroll_mc.bar_mc.y - 18) / 121;
         this.ScrollJump2Percentage(_loc1_);
      }
      
      private method_496(): any
      {
         var _loc9_: string = null as any;
         var _loc10_: number = 0;
         var _loc12_: number = 0;
         var _loc13_: number = 0;
         var _loc14_: number = 0;
         var _loc15_: number = 0;
         var _loc16_: number = 0;
         var _loc1_: string = "";
         var _loc2_: string = "";
         var _loc3_: string = "";
         var _loc4_: any = new (Array as any)();
         var _loc5_: any = new (Array as any)();
         var _loc6_: any = new (Array as any)();
         var _loc7_: number = 0;
         while(_loc7_ < this.arrTankDetails.length)
         {
            _loc12_ = Math.floor(this.arrTankDetails[_loc7_ as any].type / 1000);
            _loc13_ = -1;
            if(_loc12_ == 2)
            {
               _loc14_ = 0;
               while(_loc14_ < _loc4_.length)
               {
                  if(_loc4_[_loc14_ as any].type == this.arrTankDetails[_loc7_ as any].type)
                  {
                     _loc13_ = int(_loc14_);
                     ++_loc4_[_loc14_ as any].amount;
                  }
                  _loc14_++;
               }
               if(_loc13_ == -1)
               {
                  _loc4_.push({
                     "type":this.arrTankDetails[_loc7_ as any].type,
                     "amount":1
                  } as any);
               }
            }
            else if(_loc12_ == 3)
            {
               _loc15_ = 0;
               while(_loc15_ < _loc5_.length)
               {
                  if(_loc5_[_loc15_ as any].type == this.arrTankDetails[_loc7_ as any].type)
                  {
                     _loc13_ = int(_loc15_);
                     ++_loc5_[_loc15_ as any].amount;
                  }
                  _loc15_++;
               }
               if(_loc13_ == -1)
               {
                  _loc5_.push({
                     "type":this.arrTankDetails[_loc7_ as any].type,
                     "amount":1
                  } as any);
               }
            }
            else if(_loc12_ == 4)
            {
               _loc16_ = 0;
               while(_loc16_ < _loc6_.length)
               {
                  if(_loc6_[_loc16_ as any].type == this.arrTankDetails[_loc7_ as any].type)
                  {
                     _loc13_ = int(_loc16_);
                     ++_loc6_[_loc16_ as any].amount;
                  }
                  _loc16_++;
               }
               if(_loc13_ == -1)
               {
                  _loc6_.push({
                     "type":this.arrTankDetails[_loc7_ as any].type,
                     "amount":1
                  } as any);
               }
            }
            _loc7_++;
         }
         _loc4_.sortOn("type");
         _loc5_.sortOn("type");
         _loc6_.sortOn("type");
         var _loc8_: boolean = false;
         if(_loc4_.length > 2)
         {
            _loc8_ = true;
         }
         _loc10_ = 0;
         while(_loc10_ < _loc4_.length)
         {
            if(_loc8_ == true)
            {
               if(_loc4_[_loc10_ as any].amount == 1)
               {
                  _loc9_ = this.objGameLibrary.method_26(_loc4_[_loc10_ as any].type);
                  _loc1_ += "1 " + _loc9_.substr(0,_loc9_.length - 2) + ", ";
               }
               else
               {
                  _loc1_ += _loc4_[_loc10_ as any].amount + " " + this.objGameLibrary.method_26(_loc4_[_loc10_ as any].type) + ", ";
               }
            }
            else if(_loc4_[_loc10_ as any].amount == 1)
            {
               _loc1_ += this.objGameLibrary.method_37(_loc4_[_loc10_ as any].type) + ", ";
            }
            else
            {
               _loc1_ += _loc4_[_loc10_ as any].amount + " " + this.objGameLibrary.method_87(_loc4_[_loc10_ as any].type) + ", ";
            }
            _loc10_++;
         }
         if(_loc5_.length > 2)
         {
            _loc8_ = true;
         }
         else
         {
            _loc8_ = false;
         }
         _loc10_ = 0;
         while(_loc10_ < _loc5_.length)
         {
            if(_loc8_ == true)
            {
               if(_loc5_[_loc10_ as any].amount == 1)
               {
                  _loc9_ = this.objGameLibrary.method_26(_loc5_[_loc10_ as any].type);
                  _loc2_ += "1 " + _loc9_.substr(0,_loc9_.length - 2) + ", ";
               }
               else
               {
                  _loc2_ += _loc5_[_loc10_ as any].amount + " " + this.objGameLibrary.method_26(_loc5_[_loc10_ as any].type) + ", ";
               }
            }
            else if(_loc5_[_loc10_ as any].amount == 1)
            {
               _loc2_ += this.objGameLibrary.method_37(_loc5_[_loc10_ as any].type) + ", ";
            }
            else
            {
               _loc2_ += _loc5_[_loc10_ as any].amount + " " + this.objGameLibrary.method_87(_loc5_[_loc10_ as any].type) + ", ";
            }
            _loc10_++;
         }
         if(_loc6_.length > 2)
         {
            _loc8_ = true;
         }
         else
         {
            _loc8_ = false;
         }
         _loc10_ = 0;
         while(_loc10_ < _loc6_.length)
         {
            if(_loc8_ == true)
            {
               if(_loc6_[_loc10_ as any].amount == 1)
               {
                  _loc9_ = this.objGameLibrary.method_26(_loc6_[_loc10_ as any].type);
                  _loc3_ += "1 " + _loc9_.substr(0,_loc9_.length - 2) + ", ";
               }
               else
               {
                  _loc3_ += _loc6_[_loc10_ as any].amount + " " + this.objGameLibrary.method_26(_loc6_[_loc10_ as any].type) + ", ";
               }
            }
            else if(_loc6_[_loc10_ as any].amount == 1)
            {
               _loc3_ += this.objGameLibrary.method_37(_loc6_[_loc10_ as any].type) + ", ";
            }
            else
            {
               _loc3_ += _loc6_[_loc10_ as any].amount + " " + this.objGameLibrary.method_87(_loc6_[_loc10_ as any].type) + ", ";
            }
            _loc10_++;
         }
         if(_loc1_ == "")
         {
            _loc1_ = "N/A";
         }
         else
         {
            _loc1_ = _loc1_.substr(0,_loc1_.length - 2);
         }
         if(_loc2_ == "")
         {
            _loc2_ = "N/A";
         }
         else
         {
            _loc2_ = _loc2_.substr(0,_loc2_.length - 2);
         }
         if(_loc3_ == "")
         {
            _loc3_ = "N/A";
         }
         else
         {
            _loc3_ = _loc3_.substr(0,_loc3_.length - 2);
         }
         return {
            "strPrimary":_loc1_,
            "strSecondary":_loc2_,
            "strEnemyWeapons":_loc3_
         };
      }
      
      public method_253(param1: any): void
      {
         this.method_80(8000);
      }
      
      private RevertTank(): void
      {
         var var_92: any;

         this.method_204();
         var _loc1_: number = this.var_92.length - 1;
         this.method_305(_loc1_);
         this.method_99();
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
      }
      
      public method_442(param1: any): void
      {
         this.Resize_mc.resizehandle_mc.gotoAndStop(2);
         Mouse.cursor = MouseCursor.HAND;
      }
      
      public method_228(param1: any): void
      {
         stage.addEventListener("mouseup", this.method_317.bind(this));
         stage.addEventListener("mousemove", this.method_328.bind(this));
      }
      
      private method_657(): void
      {
         var var_59: any;

         if(this.intCurrentClass == 1)
         {
            this.var_59 = 100;
         }
         else if(this.intCurrentClass == 2)
         {
            this.var_59 = 110;
         }
         else if(this.intCurrentClass == 3)
         {
            this.var_59 = 120;
         }
         else if(this.intCurrentClass == 4)
         {
            this.var_59 = 200;
         }
         else if(this.intCurrentClass == 5)
         {
            this.var_59 = 250;
         }
         else if(this.intCurrentClass == 6)
         {
            this.var_59 = 300;
         }
      }
      
      public method_379(param1: any): void
      {
         var var_11: any;

         this.var_11.return_btn.removeEventListener("click", this.method_114.bind(this));
         this.var_11.exit_btn.removeEventListener("click", this.method_110.bind(this));
         this.removeChild(this.var_11);
      }
      
      public method_393(): void
      {
         this.SecondaryStats_mc.LifeCurrent_txt.addEventListener("change", this.method_395.bind(this));
         this.SecondaryStats_mc.BubblesReturnedCurrent_txt.addEventListener("change", this.method_450.bind(this));
         this.SecondaryStats_mc.SpeedCurrent_txt.addEventListener("change", this.method_384.bind(this));
         this.SecondaryStats_mc.LifeCurrent_txt.selectable = true;
         this.SecondaryStats_mc.BubblesReturnedCurrent_txt.selectable = true;
         this.SecondaryStats_mc.SpeedCurrent_txt.selectable = true;
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.addEventListener("mouseover", this.method_173.bind(this));
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.addEventListener("mouseout", this.method_187.bind(this));
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.addEventListener("mousedown", this.method_184.bind(this));
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.addEventListener("mouseover", this.method_220.bind(this));
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.addEventListener("mouseout", this.method_201.bind(this));
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.addEventListener("mousedown", this.method_228.bind(this));
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.addEventListener("mouseover", this.method_222.bind(this));
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.addEventListener("mouseout", this.method_213.bind(this));
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.addEventListener("mousedown", this.method_218.bind(this));
      }
      
      private method_344(param1: any): void
      {
         var var_454: any;


         if(this.var_454 == true)
         {
            var _loc2_: Point = new (Point as any)(param1.stageX,param1.stageY);
            _loc2_ = this.movTank.globalToLocal(null);
            if(Math.abs(this.movDragObj1.y) <= 3)
            {
               this.movDragObj1.y = 0;
            }
            (this.movDragObj1 as any).x = this.movDragObj1.x;
            (this.movDragObj1 as any).y = this.movDragObj1.y;
            if(this.var_127 == true)
            {
               if(Math.abs(this.movDragObj1.y) <= this.var_453)
               {
                  if(this.movDragObj2 != null)
                  {
                     this.movTank.removeChild(this.movDragObj2);
                     this.movDragObj2 = null as any;
                     --this.intTankDetailID;
                  }
               }
               else
               {
                  if(this.movDragObj2 == null)
                  {
                     var _loc3_: any = this.method_108();
                     this.movDragObj2 = new (null as any)[this.ButtonIndex2LibraryIndex(this.var_49)].claType();
                     (this.movDragObj2 as any).alpha = 0[25];
                     this.movDragObj2.name = this.intTankDetailID + "_mc";
                     this.movDragObj2.intObjID = (null as any)[this.ButtonIndex2LibraryIndex(this.var_49)].intObjID;
                     ++this.intTankDetailID;
                     this.movTank.addChild(this.movDragObj2);
                  }
                  (this.movDragObj2 as any).x = this.movDragObj1.x;
                  (this.movDragObj2 as any).y = -1 * this.movDragObj1.y;
               }
            }
         }
         if(this.method_134(this.movDragObj1) == true)
         {
            this.method_261(this.movDragObj1);
         }
         else
         {
            this.method_145(this.movDragObj1);
         }
         if(this.movDragObj2 != null)
         {
            if(this.method_134(this.movDragObj2) == true)
            {
               this.method_261(this.movDragObj2);
            }
            else
            {
               this.method_145(this.movDragObj2);
            }
         }
      }
      
      public method_114(param1: any): void
      {
         var var_11: any;

         this.var_11.Copy_btn.removeEventListener("click", this.method_202.bind(this));
         this.var_11.data_txt.removeEventListener("click", this.method_211.bind(this));
         this.var_11.return_btn.removeEventListener("click", this.method_114.bind(this));
         this.var_11.exit_btn.removeEventListener("click", this.method_110.bind(this));
         this.var_11.share_btn.removeEventListener("click", this.method_174.bind(this));
         this.removeChild(this.var_11);
      }
      
      private method_130(): void
      {
         var var_7: any;

         var _loc1_: number = 0;
         while(_loc1_ < this.var_7.length)
         {
            this.var_7[_loc1_ as any].(clip as any).alpha = 1;
            _loc1_++;
         }
         this.var_7.length = 0;
         this.method_185();
      }
      
      public method_281(param1: number, param2: number = 6): void
      {
         (this.rings_mc.class1_txt as any).visible = true;
         (this.rings_mc.class2_txt as any).visible = true;
         (this.rings_mc.class3_txt as any).visible = true;
         (this.rings_mc.class4_txt as any).visible = true;
         (this.rings_mc.class5_txt as any).visible = true;
         (this.rings_mc.class6_txt as any).visible = true;
         (this.rings_mc.ring1_mc as any).visible = true;
         (this.rings_mc.ring2_mc as any).visible = true;
         (this.rings_mc.ring3_mc as any).visible = true;
         (this.rings_mc.ring4_mc as any).visible = true;
         (this.rings_mc.ring5_mc as any).visible = true;
         this.rings_mc.gotoAndStop(param2);
         switch(param2)
         {
            case 1:
               (this.rings_mc.class2_txt as any).visible = false;
               (this.rings_mc.class3_txt as any).visible = false;
               (this.rings_mc.class4_txt as any).visible = false;
               (this.rings_mc.class5_txt as any).visible = false;
               (this.rings_mc.class6_txt as any).visible = false;
               (this.rings_mc.ring2_mc as any).visible = false;
               (this.rings_mc.ring3_mc as any).visible = false;
               (this.rings_mc.ring4_mc as any).visible = false;
               (this.rings_mc.ring5_mc as any).visible = false;
               break;
            case 2:
               (this.rings_mc.class3_txt as any).visible = false;
               (this.rings_mc.class4_txt as any).visible = false;
               (this.rings_mc.class5_txt as any).visible = false;
               (this.rings_mc.class6_txt as any).visible = false;
               (this.rings_mc.ring3_mc as any).visible = false;
               (this.rings_mc.ring4_mc as any).visible = false;
               (this.rings_mc.ring5_mc as any).visible = false;
               break;
            case 3:
               (this.rings_mc.class4_txt as any).visible = false;
               (this.rings_mc.class5_txt as any).visible = false;
               (this.rings_mc.class6_txt as any).visible = false;
               (this.rings_mc.ring4_mc as any).visible = false;
               (this.rings_mc.ring5_mc as any).visible = false;
               break;
            case 4:
               (this.rings_mc.class5_txt as any).visible = false;
               (this.rings_mc.class6_txt as any).visible = false;
               (this.rings_mc.ring5_mc as any).visible = false;
               break;
            case 5:
               (this.rings_mc.class6_txt as any).visible = false;
         }
         (this.rings_mc.class1_txt as any).alpha = 0[1];
         (this.rings_mc.class2_txt as any).alpha = 0[1];
         (this.rings_mc.class3_txt as any).alpha = 0[1];
         (this.rings_mc.class4_txt as any).alpha = 0[1];
         (this.rings_mc.class5_txt as any).alpha = 0[1];
         (this.rings_mc.class6_txt as any).alpha = 0[1];
         (this.rings_mc.ring1_mc as any).alpha = 0[1];
         (this.rings_mc.ring2_mc as any).alpha = 0[1];
         (this.rings_mc.ring3_mc as any).alpha = 0[1];
         (this.rings_mc.ring4_mc as any).alpha = 0[1];
         (this.rings_mc.ring5_mc as any).alpha = 0[1];
         switch(param1)
         {
            case 1:
               (this.rings_mc.class1_txt as any).alpha = 1;
               (this.rings_mc.ring1_mc as any).alpha = 1;
               break;
            case 2:
               (this.rings_mc.class2_txt as any).alpha = 1;
               (this.rings_mc.ring2_mc as any).alpha = 1;
               break;
            case 3:
               (this.rings_mc.class3_txt as any).alpha = 1;
               (this.rings_mc.ring3_mc as any).alpha = 1;
               break;
            case 4:
               (this.rings_mc.class4_txt as any).alpha = 1;
               (this.rings_mc.ring4_mc as any).alpha = 1;
               break;
            case 5:
               (this.rings_mc.class5_txt as any).alpha = 1;
               (this.rings_mc.ring5_mc as any).alpha = 1;
               break;
            case 6:
               (this.rings_mc.class6_txt as any).alpha = 1;
         }
      }
      
      private method_329(): void
      {
         if(this.hasEventListener("enterframe"))
         {
            this.removeEventListener("enterframe", this.method_367.bind(this));
         }
         if(this.objOldPlayerProfile != null)
         {
            this.refMain.objCurrentPlayer = this.objOldPlayerProfile;
         }
         if(this.var_155 != null)
         {
            this.var_155 = null as any;
         }
         if(this.var_79 != null)
         {
            this.Details_mc.Viewer_mc.removeChild(this.var_79);
            this.var_79 = null as any;
         }
         if(this.movDragObj1 != null)
         {
            this.movTank.removeChild(this.movDragObj1);
            this.movDragObj1 = null as any;
         }
         if(this.movDragObj2 != null)
         {
            this.movTank.removeChild(this.movDragObj2);
            this.movDragObj2 = null as any;
         }
         this.method_101();
         this.method_323();
         this.method_10();
         this.method_371();
         this.method_204();
         this.method_273(new (MouseEvent as any)(""));
         this.method_474();
         this.method_185();
      }
      
      private method_794(): void
      {
         var _loc1_: number = 0;
         _loc1_ = 0;
         while(_loc1_ < this.arrTankDetails.length)
         {
            _loc1_++;
         }
      }
      
      private method_359(): any
      {
         this.Stats_mc.primary_mc.removeEventListener("mouseover", this.method_39.bind(this));
         this.Stats_mc.primary_mc.removeEventListener("mouseout", this.method_38.bind(this));
         this.Stats_mc.primary_mc.removeEventListener("click", this.method_40.bind(this));
         this.Stats_mc.removeChild(this.Stats_mc.primary_mc);
      }
      
      private method_846(param1: MovieClip): void
      {
         if((param1 as any).alpha = = 1)
         {
            return;
         }
         var _loc2_: number = -1;
         var _loc4_: number = 0;
         while(_loc4_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc4_ as any].clip == param1)
            {
               _loc2_ = int(_loc4_);
               break;
            }
            _loc4_++;
         }
         if(this.arrTankDetails[_loc2_ as any].twin == "")
         {
            return;
         }
         var _loc5_: number = 0;
         while(_loc5_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc5_ as any].name == this.arrTankDetails[_loc2_ as any].twin)
            {
               var _loc3_: number = int(_loc5_);
               break;
            }
            _loc5_++;
         }
      }
      
      private CloseUndoButton(): void
      {
         this.Undo_mc.gotoAndStop(1);
         if(this.Undo_mc.hasEventListener("click") == false)
         {
            this.Undo_mc.removeEventListener("click", this.method_374.bind(this));
         }
      }
      
      public method_243(): void
      {
         var var_237: any, var_217: any, var_59: any;

         var _loc1_: number = this.var_237 - this.var_217;
         var _loc2_: number = Math.sqrt((this.var_59 - this.var_217) / _loc1_) * 110 - 55;
         if(_loc2_ < -55)
         {
            _loc2_ = -55;
         }
         if(_loc2_ > 55)
         {
            _loc2_ = 55;
         }
         (this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc as any).x = _loc2_;
      }
      
      private method_320(param1: string): void
      {
         var var_146: any;

         this.method_323();
         this.method_431();
         this.method_371();
         this.var_146 = param1;
         if(param1 == "body_mc")
         {
            this.Stats_mc.body_mc.gotoAndStop(1);
            this.Stats_mc.body_mc.removeEventListener("mouseover", this.method_39.bind(this));
            this.Stats_mc.body_mc.removeEventListener("mouseout", this.method_38.bind(this));
            this.Stats_mc.body_mc.removeEventListener("click", this.method_40.bind(this));
            this.Stats_mc.body_mc.addEventListener("mouseout", this.method_58.bind(this));
         }
         else if(param1 == "primary_mc")
         {
            this.Stats_mc.primary_mc.gotoAndStop(1);
            this.Stats_mc.primary_mc.removeEventListener("mouseover", this.method_39.bind(this));
            this.Stats_mc.primary_mc.removeEventListener("mouseout", this.method_38.bind(this));
            this.Stats_mc.primary_mc.removeEventListener("click", this.method_40.bind(this));
            this.Stats_mc.primary_mc.addEventListener("mouseout", this.method_58.bind(this));
         }
         else if(param1 == "secondary_mc")
         {
            this.Stats_mc.secondary_mc.gotoAndStop(1);
            this.Stats_mc.secondary_mc.removeEventListener("mouseover", this.method_39.bind(this));
            this.Stats_mc.secondary_mc.removeEventListener("mouseout", this.method_38.bind(this));
            this.Stats_mc.secondary_mc.removeEventListener("click", this.method_40.bind(this));
            this.Stats_mc.secondary_mc.addEventListener("mouseout", this.method_58.bind(this));
         }
         else if(param1 == "EnemyWeapons_mc")
         {
            this.Stats_mc.EnemyWeapons_mc.gotoAndStop(1);
            this.Stats_mc.EnemyWeapons_mc.removeEventListener("mouseover", this.method_39.bind(this));
            this.Stats_mc.EnemyWeapons_mc.removeEventListener("mouseout", this.method_38.bind(this));
            this.Stats_mc.EnemyWeapons_mc.removeEventListener("click", this.method_40.bind(this));
            this.Stats_mc.EnemyWeapons_mc.addEventListener("mouseout", this.method_58.bind(this));
         }
         this.method_621();
      }
      
      public method_403(param1: any): void
      {
         var _loc2_: Point = new (Point as any)(param1.stageX,param1.stageY);
         _loc2_ = this.SecondaryStats_mc.SpeedSlider_mc.globalToLocal(_loc2_);
         var _loc3_: number = _loc2_.x;
         if(_loc3_ < -55)
         {
            _loc3_ = -55;
         }
         if(_loc3_ > 55)
         {
            _loc3_ = 55;
         }
         (this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc as any).x = _loc3_;
         var _loc4_: number = this.var_235 - this.var_211;
         this.var_61 = this.var_211 + int(_loc4_ * ((_loc3_ + 55) / 110) * ((_loc3_ + 55) / 110) * 10) / 10;
         this.UpdateSecondaryStatsPanel();
      }
      
      public method_456(param1: any): void
      {
         var var_300: any, var_292: any;

         if(this.var_300 == false && this.var_292 == false)
         {
            this.method_680(param1);
         }
         this.var_300 = false;
         this.var_292 = false;
      }
      
      public method_447(): any
      {
         this.Stats_mc.EnemyWeapons_mc.gotoAndStop(2);
         this.Stats_mc.EnemyWeapons_mc.addEventListener("mouseover", this.method_39.bind(this));
         this.Stats_mc.EnemyWeapons_mc.addEventListener("mouseout", this.method_38.bind(this));
         this.Stats_mc.EnemyWeapons_mc.addEventListener("click", this.method_40.bind(this));
      }
      
      private method_101(): void
      {
         (this.DeleteButton_mc as any).visible = false;
         (this.BringFront_mc as any).visible = false;
         (this.SendBack_mc as any).visible = false;
         (this.Resize_mc as any).visible = false;
         (this.Rotate_mc as any).visible = false;
         (this.AlignCenter_mc as any).visible = false;
         (this.Right_mc as any).visible = false;
         (this.Left_mc as any).visible = false;
         if(this.DeleteButton_mc.hasEventListener("click") == true)
         {
            this.DeleteButton_mc.removeEventListener("mouseup", this.DeleteButtonMouseUp.bind(this));
            this.DeleteButton_mc.removeEventListener("mousedown", this.DeleteButtonMouseDown.bind(this));
            this.BringFront_mc.removeEventListener("click", this.method_430.bind(this));
            this.SendBack_mc.removeEventListener("click", this.method_358.bind(this));
            this.AlignCenter_mc.removeEventListener("click", this.method_464.bind(this));
            this.Right_mc.removeEventListener("click", this.MoveSelectionRight.bind(this));
            this.Left_mc.removeEventListener("click", this.MoveSelectionLeft.bind(this));
            this.Right_mc.removeEventListener("mousedown", this.StartMotionRight.bind(this));
            this.Left_mc.removeEventListener("mousedown", this.StartMotionLeft.bind(this));
            this.Right_mc.removeEventListener("mouseup", this.EndMotionRight.bind(this));
            this.Left_mc.removeEventListener("mouseup", this.EndMotionLeft.bind(this));
            this.Right_mc.removeEventListener("mouseout", this.EndMotionRight.bind(this));
            this.Left_mc.removeEventListener("mouseout", this.EndMotionLeft.bind(this));
            this.Resize_mc.resizehandle_mc.removeEventListener("mouseover", this.method_442.bind(this));
            this.Resize_mc.resizehandle_mc.removeEventListener("mouseout", this.method_350.bind(this));
            this.Resize_mc.resizehandle_mc.removeEventListener("mousedown", this.method_400.bind(this));
            this.Rotate_mc.rotatehandle_mc.removeEventListener("mouseover", this.method_439.bind(this));
            this.Rotate_mc.rotatehandle_mc.removeEventListener("mouseout", this.method_387.bind(this));
            this.Rotate_mc.rotatehandle_mc.removeEventListener("mousedown", this.method_413.bind(this));
         }
      }
      
      private method_303(): void
      {
         var var_49: any;

         if(this.var_49 == -1)
         {
            return;
         }
         this.var_33[this.var_49 as any].inside_mc.addEventListener("mouseover", this.method_179.bind(this));
         this.var_33[this.var_49 as any].inside_mc.addEventListener("mouseout", this.method_180.bind(this));
         this.var_33[this.var_49 as any].inside_mc.addEventListener("mouseup", this.method_170.bind(this));
         this.var_33[this.var_49 as any].inside_mc.gotoAndStop(1);
         var _loc1_: string = this.var_33[this.var_49 as any].name;
         var _loc2_: number = int(_loc1_.substr(4,_loc1_.length - 4));
         if(_loc2_ >= 1000 && _loc2_ <= 1999)
         {
            this.var_33[this.var_49 as any].(inside_mc.circleclip as any).visible = false;
         }
         this.var_49 = -1;
         this.Stats_mc.Library_mc.viewer_mc.removeChild(this.var_156);
         this.var_156 = null as any;
      }
      
      public method_328(param1: any): void
      {
         var _loc2_: Point = new (Point as any)(param1.stageX,param1.stageY);
         _loc2_ = this.SecondaryStats_mc.BubblesReturnedSlider_mc.globalToLocal(_loc2_);
         var _loc3_: number = _loc2_.x;
         if(_loc3_ < -55)
         {
            _loc3_ = -55;
         }
         if(_loc3_ > 55)
         {
            _loc3_ = 55;
         }
         (this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc as any).x = _loc3_;
         var _loc4_: number = this.var_240 - this.var_136;
         this.var_81 = this.var_136 + int(_loc4_ * ((_loc3_ + 55) / 110) * ((_loc3_ + 55) / 110));
         this.UpdateSecondaryStatsPanel();
      }
      
      public StartLibraryDrag(param1: any): void
      {
         var var_121: any;

         this.method_579(param1);
         if(this.var_121 == "Enemy")
         {
            if(this.Stats_mc.currentFrame == 2)
            {
               this.method_206(param1);
            }
         }
         stage.addEventListener("mouseup", this.StopLibraryDrag.bind(this));
         stage.addEventListener("mousemove", this.method_344.bind(this));
         this.method_429();
      }
      
      private method_256(): any
      {
         var var_200: any;

         this.var_200 = -0[05];
         if(this.hasEventListener("enterframe") == false)
         {
            this.addEventListener("enterframe", this.method_367.bind(this));
         }
      }
      
      private method_191(param1: any): void
      {
         param1.target.gotoAndStop("off");
      }
      
      private OpenUndoButton(): void
      {
         if(this.Undo_mc.currentFrame != 2)
         {
            this.Undo_mc.gotoAndStop(2);
            if(this.Undo_mc.hasEventListener("click") == false)
            {
               this.Undo_mc.addEventListener("click", this.method_374.bind(this));
            }
         }
      }
      
      public MoveSelectionLeft(param1: any): void
      {
         var var_7: any;

         var _loc3_: number = 0;
         var _loc2_: number = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_ as any].clip == this.var_7[_loc2_ as any].clip)
               {
                  --this.arrTankDetails[_loc3_ as any].clip.x;
                  --this.arrTankDetails[_loc3_ as any].x;
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
         this.method_85();
         this.method_89();
      }
      
      public method_180(param1: any): void
      {
         var _loc2_: any = null as any;
         var _loc3_: string = null as any;
         var _loc4_: number = 0;
         _loc2_ = param1.target;
         while(_loc2_.name.substr(_loc2_.name.length - 3,3) != "_mc")
         {
            _loc2_ = _loc2_.parent;
         }
         _loc2_.gotoAndStop(1);
         _loc3_ = _loc2_.parent.name;
         _loc4_ = int(_loc3_.substr(4,_loc3_.length - 4));
         if(_loc4_ >= 1000 && _loc4_ <= 1999)
         {
            (_loc2_.circleclip as any).visible = false;
         }
         this.method_230();
      }
      
      public method_427(param1: any): void
      {
         var var_328: any;

         if(this.var_328 == true)
         {
            var _loc2_: Point = new (Point as any)(param1.stageX,param1.stageY);
            _loc2_ = this.Stats_mc.Library_mc.scroll_mc.globalToLocal(null);
            this.movDragObj1.y -= Math.round(this.Stats_mc.Library_mc.scroll_mc.bar_mc.height / 2);
            if(this.movDragObj1.y > 138)
            {
               this.movDragObj1.y = 138;
            }
            if(this.movDragObj1.y < 18)
            {
               this.movDragObj1.y = 18;
            }
            (this.Stats_mc.Library_mc.scroll_mc.bar_mc as any).y = this.movDragObj1.y;
            this.method_339();
         }
      }
      
      public method_38(param1: any): void
      {
         param1.target.gotoAndStop(3);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      private method_99(): void
      {
         var _loc1_: number = 0;
         var _loc2_: number = 0;
         var _loc3_: number = 0;
         while(_loc3_ < this.arrTankDetails.length)
         {
            _loc1_ += this.objGameLibrary.method_166(this.arrTankDetails[_loc3_ as any].type);
            _loc2_ += this.objGameLibrary.method_207(this.arrTankDetails[_loc3_ as any].type,true);
            _loc3_++;
         }
         if(_loc1_ < 0)
         {
            _loc1_ = 0;
         }
         if(_loc2_ < 0)
         {
            _loc2_ = 0;
         }
         this.var_167 = _loc1_;
         this.var_108 = _loc2_;
      }
      
      private method_474(): void
      {
         var var_86: any;

         var _loc2_: string = null as any;
         var _loc1_: number = 0;
         while(_loc1_ < this.var_86.numChildren)
         {
            _loc2_ = this.var_86.getChildAt(_loc1_).name;
            if(_loc2_.substr(_loc2_.length - 8,8) == "_icon_mc")
            {
               this.var_86.removeChildAt(_loc1_);
               _loc1_--;
            }
            _loc1_++;
         }
      }
      
      public SaveExitMouseUp(param1: any): void
      {
         var _loc2_: boolean = false;
         var _loc3_: number = 0;
         var _loc4_: TankData = null as any;
         _loc2_ = false;
         _loc3_ = 0;
         while(_loc3_ < this.arrTankDetails.length)
         {
            if(this.objGameLibrary.GetObjectType(this.arrTankDetails[_loc3_ as any].type) > 1)
            {
               _loc2_ = true;
            }
            _loc3_ += 1;
         }
         if(!_loc2_ && this.var_121 == "Avatar")
         {
            this.method_615("You must have at least 1 weapon to save an Avatar tank");
            return;
         }
         if(this.var_121 == "Enemy")
         {
            this.method_555();
         }
         else
         {
            this.method_657();
         }
         this.var_426 = true;
         if(this.var_92.length == 2 && this.blnLoadedTank)
         {
            this.method_419();
            return;
         }
         Mouse.cursor = MouseCursor.AUTO;
         this.var_11 = new (TankScreens as any)();
         this.addChild(this.var_11);
         this.var_11.gotoAndStop(2);
         this.var_11.author_txt.text = this.refMain.objCurrentPlayer.profileName;
         if(this.var_434)
         {
            _loc4_ = new (TankData as any)();
            _loc4_.ImportTankData(this.refMain.objCurrentPlayer.currentAvatar);
            this.var_11.tank_txt.text = _loc4_.strTankName;
         }
         this.var_11.author_txt.addEventListener("focusin", this.method_372.bind(this));
         this.var_11.author_txt.addEventListener("focusout", this.method_433.bind(this));
         this.var_11.author_txt.addEventListener("textInput", this.method_51.bind(this));
         this.var_11.tank_txt.addEventListener("textInput", this.method_51.bind(this));
         this.var_11.cancel_btn.addEventListener("click", this.method_162.bind(this));
         this.var_11.continue_btn.addEventListener("click", this.method_310.bind(this));
      }
      
      private method_621(): void
      {
         var var_33: any;

         var _loc3_: MovieClip = null as any;
         var _loc1_: any = this.method_108();
         var _loc2_: number = 0;
         var _loc4_: number = 0;
         while(_loc4_ < _loc1_.length)
         {
            _loc3_ = new (class_78 as any)();
            this.var_33.push(_loc3_ as any);
            (_loc3_ as any).x = 0;
            (_loc3_ as any).y = _loc2_;
            _loc3_.name = "lib_" + _loc1_[_loc4_ as any].intObjID;
            this.Stats_mc.Library_mc.inside_mc.addChild(_loc3_);
            if(_loc1_[_loc4_ as any].intGunCost > 9)
            {
               _loc3_.inside_mc.cost_txt.x -= 0[5];
            }
            if(_loc1_[_loc4_ as any].intLocked == 0)
            {
               _loc3_.inside_mc.name_txt.text = _loc1_[_loc4_ as any].strName;
               _loc3_.inside_mc.cost_txt.text = _loc1_[_loc4_ as any].intGunCost;
               if(_loc1_[_loc4_ as any].blnAfford == false)
               {
                  (_loc3_ as any).alpha = 0[4];
               }
               else
               {
                  (_loc3_ as any).alpha = 1;
               }
               _loc3_.inside_mc.addEventListener("mouseover", this.method_179.bind(this));
               _loc3_.inside_mc.addEventListener("mouseout", this.method_180.bind(this));
               _loc3_.inside_mc.addEventListener("mouseup", this.method_170.bind(this));
            }
            else
            {
               _loc3_.inside_mc.gotoAndStop(4);
               _loc3_.inside_mc.cost_txt.text = "?";
               _loc3_.inside_mc.name_txt.text = "???";
               (_loc3_.inside_mc.name_txt as any).alpha = 0[5];
               (_loc3_.inside_mc as any).alpha = 0[5];
            }
            if(_loc1_[_loc4_ as any].intObjID >= 1000 && _loc1_[_loc4_ as any].intObjID <= 1999)
            {
               _loc3_.inside_mc.cost_txt.text = "";
               (_loc3_.inside_mc.circleclip as any).visible = false;
            }
            _loc2_ += 20;
            _loc4_++;
         }
         var _loc6_: number = 0;
         while(_loc6_ < _loc1_.length)
         {
            if(_loc1_[_loc6_ as any].intLocked == 0)
            {
               if(_loc1_[_loc6_ as any].blnAfford == true)
               {
                  var _loc5_: number = int(_loc6_);
                  break;
               }
            }
            _loc6_++;
         }
         this.var_49 = -1;
         this.method_682();
         if(this.var_33.length > 9)
         {
            this.method_477(2);
         }
         else
         {
            this.method_477(1);
         }
      }
      
      public method_331(param1: any): any
      {
         if(this.SecondaryStats_mc.suggestedBox_mc.currentFrame == 1)
         {
            this.SecondaryStats_mc.ConfirmMenu_mc.gotoAndPlay(2);
            this.SecondaryStats_mc.ConfirmMenu_mc.btnYes.addEventListener("click", this.YesToSuggestedSettings.bind(this));
            this.SecondaryStats_mc.ConfirmMenu_mc.btnNo.addEventListener("click", this.NoToSuggestedSettings.bind(this));
         }
         else
         {
            this.var_276 = false;
            this.SecondaryStats_mc.suggestedBox_mc.gotoAndStop(1);
            this.method_393();
         }
      }
      
      public method_670(param1: any): void
      {
         var _loc2_: any = null as any;
         _loc2_ = param1.target;
         while(_loc2_.name.substr(_loc2_.name.length - 3,3) != "_mc")
         {
            _loc2_ = _loc2_.parent;
         }
         this.method_230();
      }
      
      private method_542(param1: MovieClip, param2: any): boolean
      {
         var _loc7_: number = 0;
         var _loc3_: number = -1;
         var _loc4_: number = -1;
         var _loc5_: number = 0;
         while(_loc5_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc5_ as any].clip == param1)
            {
               _loc3_ = int(_loc5_);
               break;
            }
            _loc5_++;
         }
         var _loc6_: number = 0;
         while(_loc6_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc6_ as any].name == this.arrTankDetails[_loc3_ as any].twin)
            {
               _loc4_ = int(_loc6_);
               break;
            }
            _loc6_++;
         }
         if(_loc4_ != -1)
         {
            _loc7_ = 0;
            while(_loc7_ < param2.length)
            {
               if(this.arrTankDetails[_loc4_ as any].clip.name == param2[_loc7_ as any].name)
               {
                  return true;
               }
               _loc7_++;
            }
         }
         return false;
      }
      
      public method_739(): any
      {
         var var_217: any, var_237: any, var_59: any, var_136: any, var_240: any, var_81: any, var_211: any, var_235: any, var_61: any, var_276: any;

         this.var_217 = 1;
         this.var_237 = 1000;
         this.var_59 = 20;
         this.var_136 = 1;
         this.var_240 = 500;
         this.var_81 = 20;
         this.var_211 = 0;
         this.var_235 = 4;
         this.var_61 = 2;
         this.var_276 = true;
      }
      
      private method_536(): void
      {
         this.tutorial.back_tut.removeEventListener("mouseover", this.method_214.bind(this));
         this.tutorial.back_tut.removeEventListener("mouseout", this.method_191.bind(this));
         this.tutorial.back_tut.removeEventListener("mouseup", this.tutBtnUp.bind(this));
         this.tutorial.next_tut.removeEventListener("mouseover", this.method_214.bind(this));
         this.tutorial.next_tut.removeEventListener("mouseout", this.method_191.bind(this));
         this.tutorial.next_tut.removeEventListener("mouseup", this.tutBtnUp.bind(this));
         this.tutorial.gotoAndStop("off");
      }
      
      private method_753(param1: MovieClip): number
      {
         var _loc2_: number = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc2_ as any].clip == param1)
            {
               return this.arrTankDetails[_loc2_ as any].radius * this.arrTankDetails[_loc2_ as any].scale;
            }
            _loc2_++;
         }
         if(this.movDragObj1 != null)
         {
            return this.var_385;
         }
         return 0;
      }
      
      public method_819(): DisplayObject
      {
         var _loc1_: MovieClip = new (MovieClip as any)();
         var _temp_3: any = _loc1_;
         var _temp_2: any = _loc1_;
         var _temp_1: any = 0;
         0;
         (_temp_2 as any).y = _temp_1;
         (_temp_3 as any).x = 0;
         (_loc1_ as any).width = 135;
         (_loc1_ as any).height = 90;
         return _loc1_  as unknown as DisplayObject;
      }
      
      private method_552(param1: MovieClip): void
      {
         var var_127: any;

         if(!this.var_127)
         {
            return;
         }
         var _loc2_: number = -1;
         var _loc6_: number = 0;
         while(_loc6_ < this.var_7.length)
         {
            if(this.var_7[_loc6_ as any].clip == param1)
            {
               _loc2_ = int(_loc6_);
               break;
            }
            _loc6_++;
         }
         if(_loc2_ == -1)
         {
            return;
         }
         0;
         while(0 < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[0].clip == param1)
            {
               var _loc3_: number = 0;
               break;
            }
            var _loc7_: number = 0 + 1;
         }
      }
      
      public method_80(param1: number): void
      {
         var var_11: any, var_121: any;

         this.var_11.gotoAndStop(7);
         var _loc3_: string = "An error prevented your tank from being saved.  We apologize for the inconvenience.";
         switch(param1)
         {
            case 8000:
               _loc3_ = "BTA could not properly connect to the server.";
               break;
            case 9400:
               _loc3_ = "You cannot submit tanks with nothing in them.._descendants_Thanks!";
               break;
            case 9300:
               _loc3_ = "The server instanceof currently not accepting " + this.var_121 + " tank submissions, please try again later.  We apologize for the inconvenience.";
               break;
            case 9299:
               _loc3_ = "An invalid Tank name or Author name was used, try changing them and re-submitting";
               break;
            case 10001:
               _loc3_ = "You can not submit a tank while using the 50 gun points cheat";
               break;
            case 9200:
            default:
               _loc3_ = "An invalid tank was submitted to the server.  This includes tanks with invalid characters in the author and tank names.";
         }
         this.var_11.message_txt.text = _loc3_;
         this.var_11.return_btn.addEventListener("click", this.method_379.bind(this));
         this.var_11.exit_btn.addEventListener("click", this.method_432.bind(this));
      }
      
      public SymmetricModeMouseUp(param1: any): void
      {
         var var_127: any;

         if(this.var_127 == true)
         {
            this.var_127 = false;
            this.SymmetricMode_mc.gotoAndStop(2);
         }
         else
         {
            this.var_127 = true;
            this.SymmetricMode_mc.gotoAndStop(1);
         }
         this.method_130();
      }
      
      public method_340(param1: any): void
      {
         var var_7: any;

         var _loc3_: number = 0;
         stage.removeEventListener("mouseup", this.method_340.bind(this));
         stage.removeEventListener("mousemove", this.method_368.bind(this));
         var _loc2_: number = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_ as any].clip == this.var_7[_loc2_ as any].clip)
               {
                  this.arrTankDetails[_loc3_ as any].scale = this.var_7[_loc2_ as any].clip.scaleX;
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         if(this.method_88() == false)
         {
            this.method_57();
         }
         this.method_85();
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
      }
      
      public method_673(param1: class_79): void
      {
         var _loc2_: number = NaN;
         this.refMain = param1;
         this.method_251();
         this.UpdateStatsPanel();
         if(this.refMain.blnCheatClass)
         {
            _loc2_ = 6;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.maxClass.value;
         }
         this.method_281(this.intCurrentClass,_loc2_);
         this.method_320("body_mc");
         this.objOldPlayerProfile = null as any;
         this.const_2 = new (class_7 as any)(this.refMain.stage);
         var _loc3_: boolean = false;
         var _loc4_: number = 0;
         while(_loc4_ < this.refMain.arrMenuNavigation.length)
         {
            if(this.refMain.arrMenuNavigation[_loc4_ as any] == 2 || this.refMain.arrMenuNavigation[_loc4_ as any] == 4)
            {
               _loc3_ = true;
               break;
            }
            _loc4_++;
         }
         if(_loc3_)
         {
            (this.LoadTank_mc as any).alpha = 0;
            this.LoadTank_mc.mouseEnabled = false;
            this.LoadTank_mc.mouseChildren = false;
         }
         this.method_500();
      }
      
      public method_173(param1: any): void
      {
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.gotoAndStop(2);
         Mouse.cursor = MouseCursor.HAND;
      }
      
      private method_156(param1: MovieClip, param2: boolean = false, param3: MovieClip = null): void
      {
         var var_7: any;

         this.method_394(param1);
         this.var_7.push({
            "clip":param1,
            "onSide":false
         } as any);
         if(param2 == true)
         {
            if(this.method_160(param3) == true)
            {
               this.method_334(param3);
            }
            this.method_156(param3);
            (param3 as any).alpha = 0[25];
            this.var_86.getChildByName(param3.name).alpha = 25;
         }
      }
      
      private method_88(param1: boolean = true): boolean
      {
         var _loc3_: string = null as any;
         var _loc2_: number = this.method_697();
         if(_loc2_ != 0)
         {
            _loc3_ = "There was an error.";
            switch(_loc2_)
            {
               case 1:
                  _loc3_ = "You don\'t have enough Bubble Points!";
                  break;
               case 2:
                  _loc3_ = "Not enough Gun Points!";
                  break;
               case 3:
                  _loc3_ = "You must be a smaller export class todo that.";
                  break;
               case 4:
                  _loc3_ = "You must be a larger export class todo that.";
                  break;
               case 5:
                  _loc3_ = "Your max export class sizeinstanceof too small.";
            }
            (this.alert_mc as any).visible = true;
            this.alert_mc.description_txt.text = _loc3_;
            this.var_165.reset();
            if(this.var_165.hasEventListener(TimerEvent.TIMER_COMPLETE) == false)
            {
               this.var_165.addEventListener(TimerEvent.TIMER_COMPLETE, this.method_250.bind(this));
            }
            this.var_165.start();
            this.method_130();
            this.method_101();
            this.RevertTank();
            return true;
         }
         return false;
      }
      
      public method_347(param1: number): void
      {
         var _loc2_: number = NaN;
         var _loc3_: number = NaN;
         var _loc4_: number = NaN;
         var _loc5_: number = NaN;
         var _loc6_: number = NaN;
         _loc2_ = (this.Stats_mc.Library_mc.scroll_mc.bar_mc.y - 18) / 121;
         _loc3_ = this.Stats_mc.Library_mc.inside_mc.height - 9 * 20;
         _loc4_ = -1 * (_loc2_ * _loc3_);
         _loc5_ = -1 * Math.round(_loc4_ / 20);
         if(_loc5_ < 0)
         {
            _loc5_ = 0;
         }
         _loc5_ += param1;
         if(_loc5_ < 0)
         {
            _loc5_ = 0;
         }
         if(_loc5_ > this.var_33.length - 9)
         {
            _loc5_ = this.var_33.length - 9;
         }
         if(_loc5_ == 0)
         {
            (this.Stats_mc.Library_mc.scroll_mc.bar_mc as any).y = 18;
            this.ScrollJump2Percentage(0);
         }
         else
         {
            _loc6_ = this.var_33.length - 9;
            this.ScrollJump2Percentage(_loc5_ / _loc6_);
            (this.Stats_mc.Library_mc.scroll_mc.bar_mc as any).y = 18 + _loc5_ / _loc6_ * 120;
         }
      }
      
      public EventExitFromSharing2(): void
      {
         var var_11: any;

         this.var_11.return_btn.removeEventListener("click", this.method_114.bind(this));
         this.var_11.exit_btn.removeEventListener("click", this.method_110.bind(this));
         this.removeChild(this.var_11);
         this.method_138();
      }
      
      public method_40(param1: any): void
      {
         this.method_320(param1.target.name);
      }
      
      public method_254(param1: any): void
      {
         this.method_80(8000);
      }
      
      public LoadTanksMouseUp(param1: any): void
      {
         var var_121: any;

         this.method_329();
         this.refMain.method_565(this.var_121);
      }
      
      public LibScrollBarDown(param1: any): void
      {
         var var_328: any;

         this.var_328 = true;
         stage.addEventListener("mousemove", this.method_427.bind(this));
         stage.addEventListener("mouseup", this.LibScrollBarUp.bind(this));
         this.method_429();
      }
      
      public method_238(param1: any): any
      {
         var var_59: any, var_237: any, var_81: any, var_240: any, var_61: any, var_235: any, var_276: any;

         this.Stats_mc.gotoAndStop(2);
         this.SecondaryStats_mc.gotoAndStop(2);
         this.SecondaryStats_mc.removeEventListener("click", this.method_238.bind(this));
         this.Stats_mc.addEventListener("click", this.method_206.bind(this));
         this.SecondaryStats_mc.LifeCurrent_txt.text = this.var_59;
         this.SecondaryStats_mc.LifeMax_txt.text = this.var_237;
         this.SecondaryStats_mc.BubblesReturnedCurrent_txt.text = this.var_81;
         this.SecondaryStats_mc.BubblesReturnedMax_txt.text = this.var_240;
         this.SecondaryStats_mc.SpeedCurrent_txt.text = this.var_61;
         this.SecondaryStats_mc.SpeedMax_txt.text = this.var_235;
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.addEventListener("mouseover", this.method_173.bind(this));
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.addEventListener("mouseout", this.method_187.bind(this));
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.addEventListener("mousedown", this.method_184.bind(this));
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.addEventListener("mouseover", this.method_220.bind(this));
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.addEventListener("mouseout", this.method_201.bind(this));
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.addEventListener("mousedown", this.method_228.bind(this));
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.addEventListener("mouseover", this.method_222.bind(this));
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.addEventListener("mouseout", this.method_213.bind(this));
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.addEventListener("mousedown", this.method_218.bind(this));
         this.SecondaryStats_mc.suggestedBox_mc.addEventListener("click", this.method_331.bind(this));
         this.method_243();
         this.method_295();
         this.method_275();
         if(this.var_276)
         {
            this.SecondaryStats_mc.suggestedBox_mc.gotoAndStop(2);
            this.UseSuggestedSettings();
            this.method_236();
         }
         else
         {
            this.SecondaryStats_mc.suggestedBox_mc.gotoAndStop(1);
            this.method_393();
         }
      }
      
      public ButtonIndex2LibraryIndex(param1: number): number
      {
         var var_33: any;

         var _loc2_: string = this.var_33[param1 as any].name;
         var _loc3_: any = this.method_108();
         var _loc4_: number = 0;
         while(_loc4_ < _loc3_.length)
         {
            if("lib_" + _loc3_[_loc4_ as any].intObjID == _loc2_)
            {
               return _loc4_;
            }
            _loc4_++;
         }
         return -1;
      }
      
      public UpdateSecondaryStatsPanel(): void
      {
         var var_59: any, var_237: any, var_81: any, var_240: any, var_61: any, var_235: any;

         this.SecondaryStats_mc.LifeCurrent_txt.text = this.var_59;
         this.SecondaryStats_mc.LifeMax_txt.text = this.var_237;
         this.SecondaryStats_mc.BubblesReturnedCurrent_txt.text = this.var_81;
         this.SecondaryStats_mc.BubblesReturnedMax_txt.text = this.var_240;
         this.SecondaryStats_mc.SpeedCurrent_txt.text = this.var_61;
         this.SecondaryStats_mc.SpeedMax_txt.text = this.var_235;
      }
      
      public method_350(param1: any): void
      {
         this.Resize_mc.resizehandle_mc.gotoAndStop(1);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      public method_425(param1: any): void
      {
         param1.target.gotoAndStop(3);
         Mouse.cursor = MouseCursor.HAND;
      }
      
      public method_400(param1: any): void
      {
         stage.addEventListener("mouseup", this.method_340.bind(this));
         stage.addEventListener("mousemove", this.method_368.bind(this));
      }
      
      public MoveLeft(param1: any): void
      {
         var var_7: any;

         var _loc3_: number = 0;
         var _loc2_: number = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_ as any].clip == this.var_7[_loc2_ as any].clip)
               {
                  --this.arrTankDetails[_loc3_ as any].clip.x;
                  --this.arrTankDetails[_loc3_ as any].x;
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
         this.method_85();
         this.method_89();
      }
      
      public NoToSuggestedSettings(param1: any): any
      {
         this.SecondaryStats_mc.ConfirmMenu_mc.btnYes.removeEventListener("click", this.YesToSuggestedSettings.bind(this));
         this.SecondaryStats_mc.ConfirmMenu_mc.btnNo.removeEventListener("click", this.NoToSuggestedSettings.bind(this));
         this.SecondaryStats_mc.ConfirmMenu_mc.play();
      }
      
      public method_433(param1: any): void
      {
         var var_11: any;

         if(this.var_11.author_txt.text == "")
         {
            this.var_11.author_txt.text = "Type your name...";
         }
      }
      
      private method_185(): void
      {
         var var_86: any;

         while(this.var_86.numChildren > 0)
         {
            (this.var_86.getChildAt(0) as unknown as Sprite).graphics.clear();
            this.var_86.removeChildAt(0);
         }
      }
      
      private method_675(param1: any): void
      {
         var var_91: any, var_75: any;

         (this.var_91 as any).x = param1.stageX;
         (this.var_91 as any).y = param1.stageY;
         this.var_91 = this.var_75.globalToLocal(this.var_91);
      }
      
      private method_367(param1: any): any
      {
         var var_359: any, var_200: any;

         var _loc2_: any = null as any;
         var _loc3_: GlowFilter = null as any;
         if(this.Stats_mc != null)
         {
            if(this.Stats_mc.bubblesLeft_txt != null)
            {
               _loc2_ = new (Array as any)();
               this.var_359 += this.var_200;
               _loc3_ = new (GlowFilter as any)(4294967295,1,8,8,this.var_359,3);
               _loc2_.push(_loc3_ as any);
               this.Stats_mc.bubblesLeft_txt.filters = _loc2_;
            }
            if(this.Stats_mc.gunPoints_txt != null)
            {
               _loc2_ = new (Array as any)();
               this.var_394 += this.var_200;
               _loc3_ = new (GlowFilter as any)(4294967295,1,8,8,this.var_394,3);
               _loc2_.push(_loc3_ as any);
               this.Stats_mc.gunPoints_txt.filters = _loc2_;
            }
            if(this.Stats_mc.class_txt != null)
            {
               _loc2_ = new (Array as any)();
               this.var_395 += this.var_200;
               _loc3_ = new (GlowFilter as any)(4294967295,1,8,8,this.var_395,3);
               _loc2_.push(_loc3_ as any);
               this.Stats_mc.class_txt.filters = _loc2_;
            }
         }
      }
      
      public method_405(param1: any): void
      {
         var _loc2_: Point = new (Point as any)(param1.stageX,param1.stageY);
         _loc2_ = this.SecondaryStats_mc.LifeSlider_mc.globalToLocal(_loc2_);
         var _loc3_: number = _loc2_.x;
         if(_loc3_ < -55)
         {
            _loc3_ = -55;
         }
         if(_loc3_ > 55)
         {
            _loc3_ = 55;
         }
         (this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc as any).x = _loc3_;
         var _loc4_: number = this.var_237 - this.var_217;
         this.var_59 = this.var_217 + int(_loc4_ * ((_loc3_ + 55) / 110) * ((_loc3_ + 55) / 110));
         this.UpdateSecondaryStatsPanel();
      }
      
      public LibScrollBarUp(param1: any): void
      {
         var var_328: any;

         this.var_328 = false;
         stage.removeEventListener("mousemove", this.method_427.bind(this));
         stage.removeEventListener("mouseup", this.LibScrollBarUp.bind(this));
         this.method_251();
      }
      
      private method_234(): void
      {
         var var_7: any;

         var _loc2_: number = 0;
         var _loc3_: number = 0;
         var _loc4_: number = 0;
         var _loc5_: number = 0;
         var _loc1_: number = 0;
         while(_loc1_ < this.var_7.length)
         {
            _loc2_ = -1;
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.var_7[_loc1_ as any].clip == this.arrTankDetails[_loc3_ as any].clip)
               {
                  _loc2_ = int(_loc3_);
                  break;
               }
               _loc3_++;
            }
            if(_loc2_ != -1)
            {
               if(this.arrTankDetails[_loc2_ as any].twin != "")
               {
                  if(this.method_160((this.movTank.getChildByName(this.arrTankDetails[_loc2_ as any].twin) as unknown as MovieClip)) == false)
                  {
                     _loc4_ = -1;
                     _loc5_ = 0;
                     while(_loc5_ < this.arrTankDetails.length)
                     {
                        if(this.arrTankDetails[_loc2_ as any].twin == this.arrTankDetails[_loc5_ as any].name)
                        {
                           _loc4_ = int(_loc5_);
                           break;
                        }
                        _loc5_++;
                     }
                     if(_loc4_ != -1)
                     {
                        this.arrTankDetails[_loc4_ as any].twin = "";
                     }
                     this.arrTankDetails[_loc2_ as any].twin = "";
                  }
               }
            }
            _loc1_++;
         }
      }
      
      private method_381(param1: MovieClip): void
      {
         var var_7: any;

         0;
         0;
         var _loc2_: number = -1;
         var _loc4_: number = -1;
         var _loc6_: number = 0;
         while(_loc6_ < this.var_7.length)
         {
            if(this.var_7[_loc6_ as any].clip == param1)
            {
               _loc2_ = int(_loc6_);
               break;
            }
            _loc6_++;
         }
         if(_loc2_ == -1)
         {
            return;
         }
         var _loc7_: number = 0;
         while(_loc7_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc7_ as any].clip == param1)
            {
               _loc4_ = int(_loc7_);
               break;
            }
            _loc7_++;
         }
         if(this.arrTankDetails[_loc4_ as any].twin == "")
         {
            return;
         }
         var _loc8_: number = 0;
         while(_loc8_ < this.var_7.length)
         {
            if(this.var_7[_loc8_ as any].clip.name == this.arrTankDetails[_loc4_ as any].twin)
            {
               var _loc3_: number = int(_loc8_);
               break;
            }
            _loc8_++;
         }
      }
      
      private method_802(): void
      {
         var var_7: any;

         var _loc1_: number = 0;
         _loc1_ = 0;
         while(_loc1_ < this.var_7.length)
         {
            _loc1_++;
         }
      }
      
      public method_317(param1: any): void
      {
         stage.removeEventListener("mouseup", this.method_317.bind(this));
         stage.removeEventListener("mousemove", this.method_328.bind(this));
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateSecondaryStatsPanel();
      }
      
      private method_682(): void
      {
         var var_156: any;

         this.method_303();
         this.var_156 = new (class_84 as any)();
         this.Stats_mc.Library_mc.viewer_mc.addChild(this.var_156);
         try
         {
            this.Stats_mc.Library_mc.clickArea_mc.removeEventListener("mousedown", this.StartLibraryDrag.bind(this));
         }
         catch (e: any)
         {
         }
      }
      
      private method_251(): void
      {
         var var_75: any, var_86: any;

         if(this.var_75 == null)
         {
            this.var_75 = new (Sprite as any)();
            (this.var_75 as any).x = this.rings_mc.x;
            (this.var_75 as any).y = this.rings_mc.y;
            this.addChild(this.var_75);
            this.var_86 = new (Sprite as any)();
            (this.var_86 as any).x = this.rings_mc.x;
            (this.var_86 as any).y = this.rings_mc.y;
            this.addChild(this.var_86);
         }
         this.select_mc.addEventListener("mousedown", this.method_315.bind(this));
         stage.addEventListener("mouseup", this.method_409.bind(this));
         this.select_mc.addEventListener("click", this.method_456.bind(this));
         this.var_300 = false;
         this.var_91 = new (Point as any)(0,0);
      }
      
      public method_372(param1: any): void
      {
         var var_11: any;

         if(this.var_11.author_txt.text == "Type your name...")
         {
            this.var_11.author_txt.text = "";
         }
      }
      
      private method_214(param1: any): void
      {
         param1.target.gotoAndStop("on");
      }
      
      public UseSuggestedSettings(): void
      {
         var var_59: any, var_167: any, var_108: any;

         this.var_59 = Math.round((this.var_167 / 2 + this.var_108 * 3) * this.intCurrentClass);
         var _loc1_: number = 0[0005] * this.var_59;
         if(_loc1_ > 0[1])
         {
            _loc1_ = 0[1];
         }
         this.var_81 = Math.round(this.var_59 * (0[3] * ((7 - this.intCurrentClass) / 6) + 0[005] * this.var_108 + 0[1] - _loc1_));
         if(this.var_81 < this.var_136)
         {
            this.var_81 = this.var_136;
         }
         this.var_61 = 3 * ((6 - this.intCurrentClass) / 6) + 0[5] - this.var_108 * 0[1];
         if(this.var_61 < 0[1])
         {
            this.var_61 = 0[1];
         }
         this.var_61 = Math.floor(this.var_61 * 100) / 100;
         this.UpdateSecondaryStatsPanel();
         this.method_295();
         this.method_243();
         this.method_275();
      }
      
      private method_145(param1: MovieClip): void
      {
         if(param1.filters.length > 0)
         {
            return;
         }
         param1.filters = [this.var_486];
      }
      
      public method_213(param1: any): void
      {
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.gotoAndStop(1);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      private tutBtnUp(param1: any): void
      {
         if(param1.target.name == "back_tut")
         {
            this.tutorial.prevFrame();
         }
         else if(param1.target.name == "next_tut")
         {
            if(this.tutorial.currentFrame == this.tutorial.totalFrames)
            {
               this.method_536();
            }
            else
            {
               this.tutorial.nextFrame();
            }
         }
      }
      
      private method_429(): void
      {
         this.select_mc.removeEventListener("mousedown", this.method_315.bind(this));
         stage.removeEventListener("mouseup", this.method_409.bind(this));
         this.select_mc.removeEventListener("click", this.method_456.bind(this));
      }
      
      private method_10(): void
      {
         this.SymmetricMode_mc.removeEventListener("click", this.SymmetricModeMouseUp.bind(this));
         this.SymmetricMode_mc.inside_mc.gotoAndStop(2);
         this.LoadTank_mc.removeEventListener("click", this.LoadTanksMouseUp.bind(this));
         this.LoadTank_mc.gotoAndStop(2);
         this.SaveExit_mc.removeEventListener("click", this.SaveExitMouseUp.bind(this));
         this.SaveExit_mc.gotoAndStop(2);
         this.Exit_mc.removeEventListener("click", this.ExitMouseUp.bind(this));
         this.Exit_mc.gotoAndStop(2);
      }
      
      public method_358(param1: any): void
      {
         var var_7: any;

         var _loc5_: number = 0;
         var _loc2_: any = new (Array as any)();
         var _loc3_: number = 0;
         while(_loc3_ < this.var_7.length)
         {
            _loc5_ = 0;
            while(_loc5_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc5_ as any].clip == this.var_7[_loc3_ as any].clip)
               {
                  _loc2_.push(this.arrTankDetails[_loc5_ as any] as any);
                  this.arrTankDetails.splice(_loc5_,1);
                  break;
               }
               _loc5_++;
            }
            _loc3_++;
         }
         var _loc4_: any = int(_loc2_.length - 1);
         while(_loc4_ >= 0)
         {
            this.movTank.setChildIndex(_loc2_[_loc4_ as any].clip,0);
            _loc4_--;
         }
         this.arrTankDetails = _loc2_.concat(this.arrTankDetails);
         this.method_57();
      }
      
      private method_680(param1: any): void
      {
         var var_127: any;

         var _loc3_: any = int(this.arrTankDetails.length - 1);
         while(_loc3_ >= 0)
         {
            if(this.arrTankDetails[_loc3_ as any].clip.hitTestPoint(param1.stageX,param1.stageY,true) == true)
            {
               if(this.method_160(this.arrTankDetails[_loc3_ as any].clip) == false)
               {
                  if(this.arrTankDetails[_loc3_ as any].twin != "" && this.var_127 == true)
                  {
                     this.method_156(this.arrTankDetails[_loc3_ as any].clip,true,(this.movTank.getChildByName(this.arrTankDetails[_loc3_ as any].twin) as unknown as MovieClip));
                  }
                  else
                  {
                     this.method_156(this.arrTankDetails[_loc3_ as any].clip,false);
                  }
               }
               else
               {
                  if(this.arrTankDetails[_loc3_ as any].twin != "" && this.var_127 == true)
                  {
                     var _loc4_: MovieClip = (this.movTank.getChildByName(this.arrTankDetails[_loc3_ as any].twin) as unknown as MovieClip);
                     if((_loc4_ as any).alpha = = 0[25])
                     {
                        (null as any).alpha = 1;
                     }
                  }
                  this.method_334(this.arrTankDetails[_loc3_ as any].clip,false);
               }
               var _loc2_: boolean = true;
               break;
            }
            _loc3_--;
         }
         this.method_130();
         if(this.var_7.length > 0)
         {
            this.method_291();
         }
         else
         {
            this.method_101();
         }
      }
      
      private method_507(): void
      {
         var var_486: any;

         var _loc1_: any = null as any;
         _loc1_ = new (Array as any)();
         _loc1_ = _loc1_.concat([0[3],0[6],0[1],0,0]);
         _loc1_ = _loc1_.concat([0[3],0[6],0[1],0,0]);
         _loc1_ = _loc1_.concat([0[3],0[6],0[1],0,0]);
         _loc1_ = _loc1_.concat([0,0,0,1,0]);
         this.var_486 = new (ColorMatrixFilter as any)(_loc1_);
      }
      
      public method_218(param1: any): void
      {
         stage.addEventListener("mouseup", this.method_411.bind(this));
         stage.addEventListener("mousemove", this.method_403.bind(this));
      }
      
      private method_557(): void
      {
         var var_92: any;

         var _loc2_: any = undefined;
         if(this.var_92.length <= 1)
         {
            return;
         }
         this.method_204();
         var _loc1_: number = this.var_92.length - 1;
         while(this.arrTankDetails.length > 0)
         {
            _loc2_ = this.arrTankDetails.pop();
            _loc2_ = null as any;
         }
         this.arrTankDetails.length = 0;
         this.method_305(_loc1_ - 1);
         _loc2_ = this.var_92.pop();
         _loc2_ = null as any;
         if(this.var_92.length <= 1)
         {
            this.CloseUndoButton();
         }
         this.method_99();
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
      }
      
      private method_305(param1: number): void
      {
         var var_92: any;

         var _loc3_: MovieClip = null as any;
         var _loc2_: number = 0;
         while(_loc2_ < this.var_92[param1 as any].length)
         {
            this.arrTankDetails.push({
               "name":this.var_92[param1 as any][_loc2_].name,
               "type":this.var_92[param1 as any][_loc2_].type,
               "twin":this.var_92[param1 as any][_loc2_].twin,
               "clip":null,
               "x":this.var_92[param1 as any][_loc2_].x,
               "y":this.var_92[param1 as any][_loc2_].y,
               "rotation":this.var_92[param1 as any][_loc2_].rotation,
               "scale":this.var_92[param1 as any][_loc2_].scale,
               "radius":this.var_92[param1 as any][_loc2_].radius
            } as any);
            _loc2_++;
         }
         0;
         while(0 < this.arrTankDetails.length)
         {
            _loc3_ = this.objGameLibrary.method_123(this.arrTankDetails[0].type);
            (_loc3_ as any).x = this.arrTankDetails[0].x;
            (_loc3_ as any).y = this.arrTankDetails[0].y;
            (_loc3_ as any).scaleX = (_loc3_ as any).scaleY = this.arrTankDetails[0].scale;
            (_loc3_ as any).rotation = this.arrTankDetails[0].rotation;
            _loc3_.intObjID = this.arrTankDetails[0].type;
            _loc3_.name = this.arrTankDetails[0].name;
            this.arrTankDetails[0].clip = _loc3_;
            this.movTank.addChild(_loc3_);
            var _loc4_: number = 0 + 1;
         }
      }
      
      private method_250(param1: any): void
      {
         var var_165: any;

         this.var_165.removeEventListener(TimerEvent.TIMER_COMPLETE, this.method_250.bind(this));
         this.var_165.stop();
         if(this.alert_mc.hasEventListener("enterframe") == false)
         {
            this.alert_mc.addEventListener("enterframe", this.method_332.bind(this));
         }
      }
      
      private method_570(param1: any): void
      {
         var var_75: any;

         var _loc2_: Point = new (Point as any)(0,0);
         var _loc3_: number = 0;
         var _loc4_: number = 0;
         var _loc5_: number = 0;
         var _loc6_: boolean = false;
         var _loc7_: number = 0;
         while(_loc7_ < this.arrTankDetails.length)
         {
            (_loc2_ as any).x = this.arrTankDetails[_loc7_ as any].clip.x;
            (_loc2_ as any).y = this.arrTankDetails[_loc7_ as any].clip.y;
            _loc4_ = Number(this.arrTankDetails[_loc7_ as any].radius);
            _loc3_ = Number(this.arrTankDetails[_loc7_ as any].scale);
            _loc5_ = _loc4_ * _loc3_;
            _loc2_ = this.movTank.localToGlobal(_loc2_);
            if(Boolean(this.arrTankDetails[_loc7_ as any].clip.hitTestPoint(param1.stageX,param1.stageY,true) || this.var_75.hitTestPoint(_loc2_.x,_loc2_.y,false) == true || this.var_75.hitTestPoint(_loc2_.x + _loc5_,_loc2_.y,false) == true || this.var_75.hitTestPoint(_loc2_.x - _loc5_,_loc2_.y,false) == true || this.var_75.hitTestPoint(_loc2_.x,_loc2_.y + _loc5_,false) == true || this.var_75.hitTestPoint(_loc2_.x,_loc2_.y - _loc5_,false) == true || this.var_75.hitTestPoint(_loc2_.x + _loc5_ / 2,_loc2_.y,false) == true || this.var_75.hitTestPoint(_loc2_.x - _loc5_ / 2,_loc2_.y,false) == true) || Boolean(this.var_75.hitTestPoint(_loc2_.x,_loc2_.y + _loc5_ / 2,false) == true) || this.var_75.hitTestPoint(_loc2_.x,_loc2_.y + _loc5_ / 2,false) == true)
            {
               if(_loc6_ != true)
               {
                  _loc6_ = true;
               }
               if(this.method_160(this.arrTankDetails[_loc7_ as any].clip) == false)
               {
                  if(this.arrTankDetails[_loc7_ as any].twin != "" && this.var_127 == true)
                  {
                     this.method_156(this.arrTankDetails[_loc7_ as any].clip,true,(this.movTank.getChildByName(this.arrTankDetails[_loc7_ as any].twin) as unknown as MovieClip));
                  }
                  else
                  {
                     this.method_156(this.arrTankDetails[_loc7_ as any].clip,false);
                  }
               }
            }
            _loc7_++;
         }
         if(!_loc6_)
         {
            this.method_130();
         }
         this.var_75.graphics.clear();
         this.method_89();
         if(this.var_7.length > 0)
         {
            this.method_291();
         }
         else
         {
            this.method_101();
         }
      }
      
      private Cheat1(): void
      {
         this.objPlayerProfileStorage = new (PlayerProfile as any)(null);
         this.objPlayerProfileStorage.gunPointsMax.method_21(2);
         this.objPlayerProfileStorage.bubblePointsMax.method_21(15);
         this.objPlayerProfileStorage.maxClass.method_21(1);
         this.objPlayerProfileStorage.arrUnlockedObjects = new (Array as any)(1001,1002,1003,1004,2001,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,3001,3002,3004,3005,3006,3007,3008,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016);
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer1Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer1Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer2Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer2Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer3Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer3Profile;
         }
         this.refMain.objCurrentPlayer = this.objPlayerProfileStorage;
         this.UpdateStatsPanel();
      }
      
      private Cheat2(): void
      {
         this.objPlayerProfileStorage = new (PlayerProfile as any)(null);
         this.objPlayerProfileStorage.gunPointsMax.method_21(3);
         this.objPlayerProfileStorage.bubblePointsMax.method_21(30);
         this.objPlayerProfileStorage.maxClass.method_21(2);
         this.objPlayerProfileStorage.arrUnlockedObjects = new (Array as any)(1001,1002,1003,1004,2001,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,3001,3002,3004,3005,3006,3007,3008,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016);
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer1Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer1Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer2Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer2Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer3Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer3Profile;
         }
         this.refMain.objCurrentPlayer = this.objPlayerProfileStorage;
         this.UpdateStatsPanel();
      }
      
      private Cheat3(): void
      {
         this.objPlayerProfileStorage = new (PlayerProfile as any)(null);
         this.objPlayerProfileStorage.gunPointsMax.method_21(4);
         this.objPlayerProfileStorage.bubblePointsMax.method_21(50);
         this.objPlayerProfileStorage.maxClass.method_21(3);
         this.objPlayerProfileStorage.arrUnlockedObjects = new (Array as any)(1001,1002,1003,1004,2001,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,3001,3002,3004,3005,3006,3007,3008,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016);
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer1Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer1Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer2Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer2Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer3Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer3Profile;
         }
         this.refMain.objCurrentPlayer = this.objPlayerProfileStorage;
         this.UpdateStatsPanel();
      }
      
      private Cheat4(): void
      {
         this.objPlayerProfileStorage = new (PlayerProfile as any)(null);
         this.objPlayerProfileStorage.gunPointsMax.method_21(5);
         this.objPlayerProfileStorage.bubblePointsMax.method_21(75);
         this.objPlayerProfileStorage.maxClass.method_21(4);
         this.objPlayerProfileStorage.arrUnlockedObjects = new (Array as any)(1001,1002,1003,1004,2001,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,3001,3002,3004,3005,3006,3007,3008,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016);
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer1Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer1Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer2Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer2Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer3Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer3Profile;
         }
         this.refMain.objCurrentPlayer = this.objPlayerProfileStorage;
         this.UpdateStatsPanel();
      }
      
      private Cheat5(): void
      {
         this.objPlayerProfileStorage = new (PlayerProfile as any)(null);
         this.objPlayerProfileStorage.gunPointsMax.method_21(6);
         this.objPlayerProfileStorage.bubblePointsMax.method_21(100);
         this.objPlayerProfileStorage.maxClass.method_21(5);
         this.objPlayerProfileStorage.arrUnlockedObjects = new (Array as any)(1001,1002,1003,1004,2001,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,3001,3002,3004,3005,3006,3007,3008,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016);
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer1Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer1Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer2Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer2Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer3Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer3Profile;
         }
         this.refMain.objCurrentPlayer = this.objPlayerProfileStorage;
         this.UpdateStatsPanel();
      }
      
      public method_315(param1: any): void
      {
         if(this.method_530(param1) == false)
         {
            stage.addEventListener("mousemove", this.method_338.bind(this));
            this.method_482(param1);
         }
         else
         {
            stage.addEventListener("mousemove", this.method_311.bind(this));
            this.method_675(param1);
         }
         if(this.var_121 == "Enemy")
         {
            if(this.Stats_mc.currentFrame == 2)
            {
               this.method_206(param1);
            }
         }
      }
      
      private method_545(): number
      {
         var _loc1_: MovieClip = null as any;
         var _loc2_: number = 0;
         if(this.refMain.blnCheatClass)
         {
            _loc2_ = 6;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.maxClass.value;
         }
         switch(_loc2_)
         {
            case 1:
               _loc1_ = this.rings_mc.ring1_mc;
               break;
            case 2:
               _loc1_ = this.rings_mc.ring2_mc;
               break;
            case 3:
               _loc1_ = this.rings_mc.ring3_mc;
               break;
            case 4:
               _loc1_ = this.rings_mc.ring4_mc;
               break;
            case 5:
               _loc1_ = this.rings_mc.ring5_mc;
               break;
            case 6:
               _loc1_ = this.rings_mc;
         }
         return _loc1_.width / 2;
      }
      
      private Cheat6(): void
      {
         this.objPlayerProfileStorage = new (PlayerProfile as any)(null);
         this.objPlayerProfileStorage.gunPointsMax.method_21(7);
         this.objPlayerProfileStorage.bubblePointsMax.method_21(100);
         this.objPlayerProfileStorage.maxClass.method_21(6);
         this.objPlayerProfileStorage.arrUnlockedObjects = new (Array as any)(1001,1002,1003,1004,2001,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,3001,3002,3004,3005,3006,3007,3008,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016);
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer1Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer1Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer2Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer2Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer3Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer3Profile;
         }
         this.refMain.objCurrentPlayer = this.objPlayerProfileStorage;
         this.UpdateStatsPanel();
      }
      
      public method_409(param1: any): void
      {
         var var_40: any = param1;
         try
         {
            stage.removeEventListener("mousemove", this.method_338.bind(this));
         }
         catch (e: any)
         {
         }
         try
         {
            stage.removeEventListener("mousemove", this.method_311.bind(this));
         }
         catch (e: any)
         {
         }
         if(this.var_300 == true)
         {
            this.method_570(var_40);
         }
         if(this.var_292 == true)
         {
            this.StopDrag(var_40);
         }
      }
      
      public method_374(param1: any): void
      {
         this.method_557();
      }
      
      public method_220(param1: any): void
      {
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.gotoAndStop(2);
         Mouse.cursor = MouseCursor.HAND;
      }
      
      public method_184(param1: any): void
      {
         stage.addEventListener("mouseup", this.method_342.bind(this));
         stage.addEventListener("mousemove", this.method_405.bind(this));
      }
      
      public method_280(param1: any): void
      {
      }
      
      private method_697(): number
      {
         var var_132: any;

         this.method_99();
         var _loc1_: number = 0;
         var _loc2_: number = 0;
         var _loc3_: number = 0;
         if(this.refMain.var_132)
         {
            _loc1_ = 100;
         }
         else
         {
            _loc1_ = this.refMain.objCurrentPlayer.bubblePointsMax.value;
         }
         if(this.refMain.blnCheatClass)
         {
            _loc2_ = 100;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.maxClass.method_29();
         }
         var _loc4_: number = _loc1_ - this.var_167;
         if(this.refMain.var_139)
         {
            _loc3_ = 12;
         }
         else
         {
            _loc3_ = this.refMain.objCurrentPlayer.gunPointsMax.value;
         }
         if(this.var_121 == "Enemy")
         {
            _loc3_ = Math.floor(_loc3_ * 1[5]);
         }
         if(this.refMain.bln50GunPoints)
         {
            _loc3_ = 50;
         }
         var _loc5_: number = _loc3_ - this.var_108;
         if(_loc4_ < 0)
         {
            return 1;
         }
         if(_loc5_ < 0)
         {
            return 2;
         }
         this.UpdateClass();
         if(this.intCurrentClass > _loc2_)
         {
            return 5;
         }
         var _loc6_: any = int(this.arrTankDetails.length - 1);
         while(_loc6_ >= 0)
         {
            if(this.objGameLibrary.IsObjectAWeapon(this.arrTankDetails[_loc6_ as any].type) == true)
            {
               if(this.objGameLibrary.method_149(this.arrTankDetails[_loc6_ as any].type) != 0)
               {
                  if(this.objGameLibrary.method_240(this.arrTankDetails[_loc6_ as any].type,true) == true)
                  {
                     if(this.intCurrentClass > this.objGameLibrary.method_149(this.arrTankDetails[_loc6_ as any].type,true))
                     {
                        return 3;
                     }
                  }
                  else if(this.intCurrentClass < this.objGameLibrary.method_149(this.arrTankDetails[_loc6_ as any].type,true))
                  {
                     return 4;
                  }
               }
            }
            _loc6_--;
         }
         return 0;
      }
      
      private method_134(param1: MovieClip): boolean
      {
         var _loc4_: Point = null as any;
         var _loc5_: number = NaN;
         var _loc6_: number = NaN;
         var _loc7_: number = NaN;
         var _loc2_: number = 0;
         if(this.refMain.blnCheatClass)
         {
            _loc2_ = 6;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.maxClass.value;
         }
         var _loc3_: number = this.method_545();
         if(_loc2_ == 6)
         {
            _loc4_ = new (Point as any)(param1.x,param1.y);
            _loc4_ = this.movTank.localToGlobal(_loc4_);
            _loc4_ = this.globalToLocal(_loc4_);
            if(this.select_mc.hitTestPoint(_loc4_.x,_loc4_.y,false) == true)
            {
               return true;
            }
            return false;
         }
         _loc5_ = param1.x * param1.x;
         _loc6_ = param1.y * param1.y;
         _loc7_ = Math.sqrt(_loc5_ + _loc6_);
         if(this.IsClipAWeapon(param1) == true)
         {
            if(_loc7_ > _loc3_)
            {
               return false;
            }
         }
         else if(_loc7_ + this.method_753(param1) > _loc3_)
         {
            return false;
         }
         return true;
      }
      
      public EndMotionLeft(param1: any): void
      {
         if(this.Left_mc.hasEventListener("enterframe"))
         {
            this.Left_mc.removeEventListener("enterframe", this.MoveLeft.bind(this));
         }
         if(this.method_88() == false)
         {
            this.method_57();
         }
      }
   }
