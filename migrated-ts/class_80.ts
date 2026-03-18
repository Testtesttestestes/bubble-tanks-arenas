// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { class_3 } from './class_3';
import { class_4 } from './class_4';
import { class_7 } from './class_7';
import { class_70 } from './class_70';
import { class_75 } from './class_75';
import { class_79 } from './class_79';
import { Credits } from './Credits';
import { Profile } from './Profile';
import { Settings } from './Settings';
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
export class class_80 extends MovieClip{
  [key: string]: any;
      
      public rollover_txt!: TextField;
      private fadeInSpeed!: number;
      private var_441!: boolean;
      public var_200!: number;
      private var_8!: class_3;
      private var_408!: number;
      private var_171!: number;
      private fadeOutSpeed!: number;
      public credits_btn!: MovieClip & Record<string, any>;
      private var_268!: boolean;
      public ec_btn!: MovieClip & Record<string, any>;
      private var_357: boolean = false;
      public settings_btn!: MovieClip & Record<string, any>;
      private var_66!: any;
      public var_4!: MovieClip & Record<string, any>;
      private var_304!: number;
      public var_46!: MovieClip & Record<string, any>;
      public var_271!: MovieClip & Record<string, any>;
      private var_164!: number;
      private performActionID!: number;
      private var_364: boolean = false;
      private var_182!: boolean;
      public var_42!: MovieClip & Record<string, any>;
      private var_337!: boolean;
      private var_360: boolean = false;
      private var_53!: class_70;
      public bubbleopedia_btn!: MovieClip & Record<string, any>;
      private var_302!: number;
      private var_449: boolean = false;
      public var_72!: MovieClip & Record<string, any>;
      private objHotkeyManager!: class_4;
      public pmg_btn!: MovieClip & Record<string, any>;
      public profile!: MovieClip & Record<string, any>;
      private var_418: boolean = false;
      private var_424!: boolean;
      public Cheat_btn!: MovieClip & Record<string, any>;
      public play_btn!: MovieClip & Record<string, any>;
      private var_499: boolean = false;
      private mRef!: class_79;
      private var_186!: number;
      private const_2!: class_7;
      private var_459!: boolean;
      public var_289!: number;
      constructor(){
         var var_289: any, var_200: any, var_441: any, var_424: any, var_459: any, var_182: any, var_268: any, var_337: any;

         // @ts-ignore
         super();
         this.addFrameScript(178,this.frame179);
         this.var_289 = 0;
         this.var_200 = 0[05];
         this.var_441 = false;
         this.var_424 = false;
         this.var_459 = false;
         this.var_182 = false;
         this.var_268 = false;
         this.var_337 = false;
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0[8]) + param1 - 0[4]);
      }
      
      private method_671(): void
      {
         var var_441: any, var_42: any;

         if(this.var_441 == false)
         {
            if(this.var_42 != null)
            {
               if(this.var_42.alpha < 1)
               {
                  this.var_42.alpha += this.fadeInSpeed;
               }
            }
            if(this.play_btn.alpha < 1)
            {
               this.play_btn.alpha += this.fadeInSpeed;
            }
            if(this.settings_btn.alpha < 1)
            {
               this.settings_btn.alpha += this.fadeInSpeed;
            }
            if(this.bubbleopedia_btn.alpha < 1)
            {
               this.bubbleopedia_btn.alpha += this.fadeInSpeed;
            }
            if(this.credits_btn.alpha < 1)
            {
               this.credits_btn.alpha += this.fadeInSpeed;
            }
            if(this.ec_btn.alpha < 1)
            {
               this.ec_btn.alpha += this.fadeInSpeed;
            }
            if(this.pmg_btn.alpha < 1)
            {
               this.pmg_btn.alpha += this.fadeInSpeed;
            }
            if(this.Cheat_btn.alpha < 1)
            {
               this.Cheat_btn.alpha += this.fadeInSpeed;
            }
            if(this.var_271.alpha < 1)
            {
               this.var_271.alpha += this.fadeInSpeed;
            }
         }
      }
      
      private ProfileCallBack(param1: string, param2: string = "", param3: number = 0): void
      {
         var var_268: any;

         var _loc4_: TankData = null as any;
         if(param1 == "back")
         {
            this.var_268 = true;
            this.profile.RemoveProfileCreator();
            this.method_159();
            this.method_94(0);
         }
         else if(param1 == "new")
         {
            this.mRef.method_600(param2,param3);
         }
         else if(param1 == "load")
         {
            _loc4_ = new (TankData as any)();
            _loc4_.ImportTankData(this.mRef.objCurrentPlayer.currentAvatar);
            if(this.mRef.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(_loc4_) == false || this.mRef.objCurrentPlayer.method_17(_loc4_) == true)
            {
               this.mRef.objCurrentPlayer.currentAvatar = "7d1adbbd72aaa3c8672736b9715f0c5519a5130a78032553eac3337e4074ba671f833edee1f5bb99e490de82d3d15107b465367e32c3ed3f6395d77f8afd6aa01bb70e7a2ea088f18ff25e4d150fba6abbcb73";
               this.mRef.objCurrentPlayer.method_19();
            }
            this.mRef.LoadWhichProfileToCurrentProfile(param3);
            this.mRef.method_155();
         }
      }
      
      private method_596(): void
      {
         var var_499: any;

         this.var_499 = true;
      }
      
      private method_50(param1: any): void
      {
         param1.target.gotoAndStop("off");
         this.rollover_txt.text = "";
      }
      
      private method_526(param1: any): any
      {
         var _loc2_: any = new (Array as any)();
         var _loc3_: GlowFilter = new (GlowFilter as any)(4294967295);
         _loc2_.push(_loc3_ as any);
         param1.target.filters = _loc2_;
      }
      
      private method_103(param1: any): void
      {
         param1.target.gotoAndStop("off");
      }
      
      public method_159(): void
      {
         var var_66: any, var_42: any;

         (this.play_btn as any).x = this.var_66[0].xLoc;
         (this.play_btn as any).y = this.var_66[0].yLoc;
         (this.settings_btn as any).x = this.var_66[1].xLoc;
         (this.settings_btn as any).y = this.var_66[1].yLoc;
         (this.bubbleopedia_btn as any).x = this.var_66[2].xLoc;
         (this.bubbleopedia_btn as any).y = this.var_66[2].yLoc;
         (this.credits_btn as any).x = this.var_66[3].xLoc;
         (this.credits_btn as any).y = this.var_66[3].yLoc;
         (this.ec_btn as any).x = this.var_66[4].xLoc;
         (this.ec_btn as any).y = this.var_66[4].yLoc;
         (this.pmg_btn as any).x = this.var_66[5].xLoc;
         (this.pmg_btn as any).y = this.var_66[5].yLoc;
         (this.Cheat_btn as any).x = this.var_66[6].xLoc;
         (this.Cheat_btn as any).y = this.var_66[6].yLoc;
         if(this.var_42 != null)
         {
            (this.var_42 as any).x = this.var_66[7].xLoc;
            (this.var_42 as any).y = this.var_66[7].yLoc;
         }
      }
      
      private CheatBtnUp(param1: any): any
      {
         var var_53: any;

         if(param1.target.currentFrame == 1)
         {
            if(param1.target == this.var_53.btnClass_mc)
            {
               this.mRef.blnCheatClass = true;
            }
            if(param1.target == this.var_53.btnBubbles_mc)
            {
               this.mRef.var_132 = true;
            }
            if(param1.target == this.var_53.btnGuns_mc)
            {
               this.mRef.var_139 = true;
            }
            if(param1.target == this.var_53.btnUnlockGuns_mc)
            {
               this.mRef.var_224 = true;
            }
            if(param1.target == this.var_53.btnUnlockBTALevels_mc)
            {
               this.mRef.blnBTAUnlocked = true;
            }
            if(param1.target == this.var_53.btn50GunPoints_mc)
            {
               this.mRef.bln50GunPoints = true;
            }
            param1.target.gotoAndStop(2);
            return;
         }
         if(param1.target.currentFrame == 2)
         {
            if(param1.target == this.var_53.btnClass_mc)
            {
               this.mRef.blnCheatClass = false;
            }
            if(param1.target == this.var_53.btnBubbles_mc)
            {
               this.mRef.var_132 = false;
            }
            if(param1.target == this.var_53.btnGuns_mc)
            {
               this.mRef.var_139 = false;
            }
            if(param1.target == this.var_53.btnUnlockGuns_mc)
            {
               this.mRef.var_224 = false;
            }
            if(param1.target == this.var_53.btnUnlockBTALevels_mc)
            {
               this.mRef.blnBTAUnlocked = false;
            }
            if(param1.target == this.var_53.btn50GunPoints_mc)
            {
               this.mRef.bln50GunPoints = false;
            }
            param1.target.gotoAndStop(1);
            return;
         }
      }
      
      private freeUp(param1: any): void
      {
         this.mRef.method_56(4);
      }
      
      private method_143(): void
      {
         var var_268: any, var_337: any, var_140: any, var_4: any, var_164: any;

         if(this.var_268 == false || this.var_337 == true)
         {
            if(this.mRef.var_140 == 2 || this.var_337 == true)
            {
               if(this.var_4 != null)
               {
                  this.var_4.g1.gotoAndStop("off");
                  this.var_4.g2.gotoAndStop("off");
                  this.var_4.g3.gotoAndStop("off");
                  if(this.var_164 == 1)
                  {
                     this.var_4.g1.gotoAndStop("on");
                  }
                  else if(this.var_164 == 2)
                  {
                     this.var_4.g2.gotoAndStop("on");
                  }
                  else if(this.var_164 == 3)
                  {
                     this.var_4.g3.gotoAndStop("on");
                  }
                  this.var_4.m1.gotoAndStop("off");
                  this.var_4.m2.gotoAndStop("off");
                  if(this.mRef.var_220 == true)
                  {
                     this.var_4.m2.gotoAndStop("on");
                  }
                  else
                  {
                     this.var_4.m1.gotoAndStop("on");
                  }
                  this.var_4.s1.gotoAndStop("off");
                  this.var_4.s2.gotoAndStop("off");
                  if(this.mRef.var_214 == true)
                  {
                     this.var_4.s2.gotoAndStop("on");
                  }
                  else
                  {
                     this.var_4.s1.gotoAndStop("on");
                  }
                  this.var_4.gs1.gotoAndStop("off");
                  this.var_4.gs2.gotoAndStop("off");
                  this.var_4.gs3.gotoAndStop("off");
                  if(this.var_171 == 1)
                  {
                     this.var_4.gs1.gotoAndStop("on");
                  }
                  else if(this.var_171 == 2)
                  {
                     this.var_4.gs2.gotoAndStop("on");
                  }
                  else if(this.var_171 == 3)
                  {
                     this.var_4.gs3.gotoAndStop("on");
                  }
                  this.var_4.v1.gotoAndStop("off");
                  this.var_4.v2.gotoAndStop("off");
                  if(this.mRef.blnScreenShake == true)
                  {
                     this.var_4.v2.gotoAndStop("on");
                  }
                  else
                  {
                     this.var_4.v1.gotoAndStop("on");
                  }
                  this.var_4.e1.gotoAndStop("off");
                  this.var_4.e2.gotoAndStop("off");
                  if(this.var_304 == 1)
                  {
                     this.var_4.e1.gotoAndStop("on");
                  }
                  else if(this.var_304 == 2)
                  {
                     this.var_4.e2.gotoAndStop("on");
                  }
               }
            }
         }
         this.var_337 = false;
      }
      
      private method_626(): void
      {
         var var_182: any, var_186: any;

         if(this.var_182 == true)
         {
            if(this.var_186 > 0)
            {
               --this.var_186;
            }
            else if(this.var_186 == 0)
            {
               if(this.performActionID == 1)
               {
                  this.method_455();
               }
               else if(this.performActionID == 2)
               {
                  this.method_159();
                  this.var_268 = false;
               }
               this.var_182 = false;
               this.var_186 = -1;
               this.performActionID = 0;
            }
         }
      }
      
      private method_109(param1: any): void
      {
         param1.target.gotoAndPlay("on");
      }
      
      private method_12(param1: any): void
      {
         var var_4: any;

         param1.target.gotoAndStop("on");
         if(param1.target.name == "gs1")
         {
            this.var_4.fps_txt.text = this.mRef.gData.mainFPS1;
         }
         else if(param1.target.name == "gs2")
         {
            this.var_4.fps_txt.text = this.mRef.gData.mainFPS2;
         }
         else if(param1.target.name == "gs3")
         {
            this.var_4.fps_txt.text = this.mRef.gData.mainFPS3;
         }
      }
      
      private method_312(param1: any): void
      {
         param1.target.gotoAndStop("off");
      }
      
      public frame179(): any
      {
         this.stop();
      }
      
      private RemoveCredits(): void
      {
         var var_46: any;

         if(this.var_46 != null)
         {
            this.var_46.back_btn.removeEventListener("mouseover", this.method_109.bind(this));
            this.var_46.back_btn.removeEventListener("mouseout", this.method_103.bind(this));
            this.var_46.back_btn.removeEventListener("mouseup", this.credUp.bind(this));
            this.var_46.hero_link.removeEventListener("mouseover", this.method_109.bind(this));
            this.var_46.hero_link.removeEventListener("mouseout", this.method_103.bind(this));
            this.var_46.hero_link.removeEventListener("mouseup", this.credUp.bind(this));
            this.var_46.composer_link.removeEventListener("mouseover", this.method_109.bind(this));
            this.var_46.composer_link.removeEventListener("mouseout", this.method_103.bind(this));
            this.var_46.composer_link.removeEventListener("mouseup", this.credUp.bind(this));
            this.removeChild(this.var_46);
         }
         this.var_46 = null as any;
      }
      
      public Setup(param1: class_79): void
      {
         var var_408: any, var_227: any, var_304: any;

         this.mRef = param1;
         this.var_408 = 0;
         if(this.mRef.var_227 != -1)
         {
            this.var_304 = this.mRef.var_227;
         }
         else
         {
            this.var_304 = 1;
         }
         if(this.mRef.mainFPS == this.mRef.gData.mainFPS1)
         {
            this.var_171 = 1;
         }
         else if(this.mRef.mainFPS == this.mRef.gData.mainFPS2)
         {
            this.var_171 = 2;
         }
         else if(this.mRef.mainFPS == this.mRef.gData.mainFPS3)
         {
            this.var_171 = 3;
         }
         this.objHotkeyManager = new (class_4 as any)();
         if(stage.quality == "LOW")
         {
            this.var_164 = 1;
         }
         else if(stage.quality == "MEDIUM")
         {
            this.var_164 = 2;
         }
         else if(stage.quality == "HIGH")
         {
            this.var_164 = 3;
         }
         this.method_502();
         (this.play_btn as any).alpha = 0;
         (this.settings_btn as any).alpha = 0;
         (this.bubbleopedia_btn as any).alpha = 0;
         (this.credits_btn as any).alpha = 0;
         (this.ec_btn as any).alpha = 0;
         (this.pmg_btn as any).alpha = 0;
         (this.Cheat_btn as any).alpha = 0;
         this.var_302 = 95;
         this.fadeInSpeed = 0[05];
         this.fadeOutSpeed = 0[05];
         this.var_186 = -1;
         this.performActionID = 0;
         this.var_66 = new (Array as any)();
         this.var_66.push({
            "xLoc":this.play_btn.x,
            "yLoc":this.play_btn.y
         } as any);
         this.var_66.push({
            "xLoc":this.settings_btn.x,
            "yLoc":this.settings_btn.y
         } as any);
         this.var_66.push({
            "xLoc":this.bubbleopedia_btn.x,
            "yLoc":this.bubbleopedia_btn.y
         } as any);
         this.var_66.push({
            "xLoc":this.credits_btn.x,
            "yLoc":this.credits_btn.y
         } as any);
         this.var_66.push({
            "xLoc":this.ec_btn.x,
            "yLoc":this.ec_btn.y
         } as any);
         this.var_66.push({
            "xLoc":this.pmg_btn.x,
            "yLoc":this.pmg_btn.y
         } as any);
         this.var_66.push({
            "xLoc":this.Cheat_btn.x,
            "yLoc":this.Cheat_btn.y
         } as any);
         if(this.var_42 != null)
         {
            this.var_66.push({
               "xLoc":this.var_42.x,
               "yLoc":this.var_42.y
            } as any);
         }
         this.method_455();
         this.play_btn.addEventListener("mouseover", this.method_48.bind(this));
         this.play_btn.addEventListener("mouseout", this.method_50.bind(this));
         this.play_btn.addEventListener("mouseup", this.mmBtnUp.bind(this));
         var _temp_3: any = this.play_btn;
         var _temp_2: any = this.play_btn;
         var _temp_1: any = true;
         _temp_2.useHandCursor = _temp_1;
         _temp_3.buttonMode = true;
         this.settings_btn.addEventListener("mouseover", this.method_48.bind(this));
         this.settings_btn.addEventListener("mouseout", this.method_50.bind(this));
         this.settings_btn.addEventListener("mouseup", this.mmBtnUp.bind(this));
         var _temp_4: any = this.settings_btn;
         var _loc2_: boolean;
         this.settings_btn.useHandCursor = _loc2_ = true;
         _temp_4.buttonMode = true;
         if(this.mRef.gData.var_298 == false)
         {
            this.bubbleopedia_btn.gotoAndStop("ec");
         }
         this.bubbleopedia_btn.addEventListener("mouseover", this.method_48.bind(this));
         this.bubbleopedia_btn.addEventListener("mouseout", this.method_50.bind(this));
         this.bubbleopedia_btn.addEventListener("mouseup", this.mmBtnUp.bind(this));
         var _temp_5: any = this.bubbleopedia_btn;
         this.bubbleopedia_btn.useHandCursor = _loc2_ = true;
         _temp_5.buttonMode = true;
         this.credits_btn.addEventListener("mouseover", this.method_48.bind(this));
         this.credits_btn.addEventListener("mouseout", this.method_50.bind(this));
         this.credits_btn.addEventListener("mouseup", this.mmBtnUp.bind(this));
         var _temp_6: any = this.credits_btn;
         this.credits_btn.useHandCursor = _loc2_ = true;
         _temp_6.buttonMode = true;
         this.ec_btn.addEventListener("mouseover", this.method_48.bind(this));
         this.ec_btn.addEventListener("mouseout", this.method_50.bind(this));
         this.ec_btn.addEventListener("mouseup", this.mmBtnUp.bind(this));
         var _temp_7: any = this.ec_btn;
         this.ec_btn.useHandCursor = _loc2_ = true;
         _temp_7.buttonMode = true;
         this.pmg_btn.addEventListener("mouseover", this.method_48.bind(this));
         this.pmg_btn.addEventListener("mouseout", this.method_50.bind(this));
         this.pmg_btn.addEventListener("mouseup", this.mmBtnUp.bind(this));
         var _temp_8: any = this.pmg_btn;
         this.pmg_btn.useHandCursor = _loc2_ = true;
         _temp_8.buttonMode = true;
         if(this.mRef.gData.var_298)
         {
            this.const_2 = new (class_7 as any)(this.mRef.stage,false);
            this.const_2.method_111(192,this.method_596);
            this.const_2.method_111(72,this.method_588);
            this.const_2.method_111(69,this.method_729);
            this.const_2.method_111(82,this.method_618);
            this.const_2.method_111(79,this.method_748);
            this.var_8 = new (class_3 as any)();
            this.var_8.Setup(this.CheatBtnUp,this.method_526,this.method_750);
            this.Cheat_btn.addEventListener("mouseover", this.method_48.bind(this));
            this.Cheat_btn.addEventListener("mouseout", this.method_50.bind(this));
            this.Cheat_btn.addEventListener("mouseup", this.mmBtnUp.bind(this));
            var _temp_9: any = this.Cheat_btn;
            this.Cheat_btn.useHandCursor = _loc2_ = true;
            _temp_9.buttonMode = true;
         }
         else
         {
            var _temp_10: any = this.Cheat_btn;
            (this.Cheat_btn as any).visible = _loc2_ = false;
            _temp_10.mouseEnabled = true;
            (this.Cheat_btn as any).alpha = 0;
            (this.Cheat_btn as any).x = -1000;
         }
         this.method_143();
         this.rollover_txt.text = "";
      }
      
      private mmBtnUp(param1: any): void
      {
         var var_182: any, var_186: any;

         this.rollover_txt.text = "";
         if(this.var_182 == false)
         {
            if(param1.target.parent.name == "play_btn")
            {
               this.method_94(1);
               this.method_705();
               this.var_186 = 30;
               this.performActionID = 1;
               this.var_182 = true;
            }
            else if(param1.target.parent.name == "settings_btn")
            {
               this.mRef.method_44("mm_settings_screen","section_visits");
               this.method_94(1);
               this.CreateSettings();
               this.var_186 = 30;
               this.performActionID = 1;
               this.var_182 = true;
            }
            else if(param1.target.parent.name == "credits_btn")
            {
               this.mRef.method_44("credits_screen","section_visits");
               this.method_94(1);
               this.CreateCredits();
               this.var_186 = 30;
               this.performActionID = 1;
               this.var_182 = true;
            }
            else if(param1.target.parent.name == "bubbleopedia_btn")
            {
               if(this.mRef.gData.var_298 == true)
               {
                  this.method_94(1);
                  this.mRef.method_681();
                  this.var_186 = 30;
                  this.performActionID = 1;
                  this.var_182 = true;
               }
               else
               {
                  this.mRef.method_44("mm_BTA_on_armor_link","link_outs");
                  this.mRef.method_56(6);
               }
            }
            else if(param1.target.parent.name == "ec_btn")
            {
               this.mRef.method_56(7);
            }
            else if(param1.target.parent.name == "pmg_btn")
            {
               this.mRef.method_44("mm_pmg_link","link_outs");
               this.mRef.method_56(1);
            }
            else if(param1.target.parent.name == "Cheat_btn")
            {
               this.method_476();
            }
         }
      }
      
      private method_569(param1: string): void
      {
         var var_171: any;

         if(param1 == "gs1")
         {
            this.var_171 = 1;
            this.mRef.stage.frameRate = this.mRef.gData.mainFPS1;
            this.mRef.mainFPS = this.mRef.gData.mainFPS1;
         }
         else if(param1 == "gs2")
         {
            this.var_171 = 2;
            this.mRef.stage.frameRate = this.mRef.gData.mainFPS2;
            this.mRef.mainFPS = this.mRef.gData.mainFPS2;
         }
         else if(param1 == "gs3")
         {
            this.var_171 = 3;
            this.mRef.stage.frameRate = this.mRef.gData.mainFPS3;
            this.mRef.mainFPS = this.mRef.gData.mainFPS3;
         }
         else if(param1 == "g1")
         {
            this.var_164 = 1;
            stage.quality = StageQuality.LOW;
         }
         else if(param1 == "g2")
         {
            this.var_164 = 2;
            stage.quality = StageQuality.MEDIUM;
         }
         else if(param1 == "g3")
         {
            this.var_164 = 3;
            stage.quality = StageQuality.HIGH;
         }
         else if(param1 == "m1")
         {
            this.mRef.method_69(false);
         }
         else if(param1 == "m2")
         {
            this.mRef.method_69(true);
         }
         else if(param1 == "s1")
         {
            this.mRef.method_70(false);
         }
         else if(param1 == "s2")
         {
            this.mRef.method_70(true);
         }
         else if(param1 == "v1")
         {
            this.mRef.sEffects.method_257();
            this.mRef.blnScreenShake = false;
         }
         else if(param1 == "v2")
         {
            this.mRef.sEffects.method_288();
            this.mRef.blnScreenShake = true;
         }
         else if(param1 == "e1")
         {
            this.method_154(false);
         }
         else if(param1 == "e2")
         {
            this.method_154(true);
         }
      }
      
      private method_401(param1: any): void
      {
         param1.target.gotoAndStop("on");
      }
      
      private method_710(): void
      {
         var var_424: any, var_42: any;

         if(this.var_424 == false)
         {
            if(this.var_42 != null)
            {
               if(this.var_42.alpha > 0)
               {
                  this.var_42.alpha -= this.fadeOutSpeed;
               }
            }
            if(this.play_btn.alpha > 0)
            {
               this.play_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.settings_btn.alpha > 0)
            {
               this.settings_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.bubbleopedia_btn.alpha > 0)
            {
               this.bubbleopedia_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.credits_btn.alpha > 0)
            {
               this.credits_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.ec_btn.alpha > 0)
            {
               this.ec_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.pmg_btn.alpha > 0)
            {
               this.pmg_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.Cheat_btn.alpha > 0)
            {
               this.Cheat_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.var_271.alpha > 0)
            {
               this.var_271.alpha -= this.fadeOutSpeed;
            }
         }
      }
      
      public Run(): void
      {
         var var_408: any;

         this.TitleCountdown();
         this.method_626();
         this.PlayButtonEffect();
         switch(this.var_408)
         {
            case 0:
               this.method_671();
               break;
            case 1:
               this.method_710();
         }
      }
      
      private CreateSettings(): void
      {
         var var_4: any, var_268: any, var_337: any;

         this.var_4 = new (Settings as any)();
         (this.var_4 as any).x = 210;
         (this.var_4 as any).y = 90;
         this.addChild(this.var_4);
         this.var_4.hotkeys.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.hotkeys.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.hotkeys.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_3: any = this.var_4.hotkeys;
         var _temp_2: any = this.var_4.hotkeys;
         var _temp_1: any = true;
         _temp_2.useHandCursor = _temp_1;
         _temp_3.buttonMode = true;
         this.var_4.backSettings.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.backSettings.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.backSettings.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_4: any = this.var_4.backSettings;
         var _loc1_: boolean;
         this.var_4.backSettings.useHandCursor = _loc1_ = true;
         _temp_4.buttonMode = true;
         this.var_4.back_btn.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.back_btn.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.back_btn.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_5: any = this.var_4.back_btn;
         this.var_4.back_btn.useHandCursor = _loc1_ = true;
         _temp_5.buttonMode = true;
         this.var_4.gs1.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.gs1.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.gs1.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_6: any = this.var_4.gs1;
         this.var_4.gs1.useHandCursor = _loc1_ = true;
         _temp_6.buttonMode = true;
         this.var_4.gs2.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.gs2.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.gs2.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_7: any = this.var_4.gs2;
         this.var_4.gs2.useHandCursor = _loc1_ = true;
         _temp_7.buttonMode = true;
         this.var_4.gs3.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.gs3.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.gs3.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_8: any = this.var_4.gs3;
         this.var_4.gs3.useHandCursor = _loc1_ = true;
         _temp_8.buttonMode = true;
         this.var_4.g1.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.g1.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.g1.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_9: any = this.var_4.g1;
         this.var_4.g1.useHandCursor = _loc1_ = true;
         _temp_9.buttonMode = true;
         this.var_4.g2.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.g2.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.g2.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_10: any = this.var_4.g2;
         this.var_4.g2.useHandCursor = _loc1_ = true;
         _temp_10.buttonMode = true;
         this.var_4.g3.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.g3.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.g3.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_11: any = this.var_4.g3;
         this.var_4.g3.useHandCursor = _loc1_ = true;
         _temp_11.buttonMode = true;
         this.var_4.m1.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.m1.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.m1.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_12: any = this.var_4.m1;
         this.var_4.m1.useHandCursor = _loc1_ = true;
         _temp_12.buttonMode = true;
         this.var_4.m2.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.m2.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.m2.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_13: any = this.var_4.m2;
         this.var_4.m2.useHandCursor = _loc1_ = true;
         _temp_13.buttonMode = true;
         this.var_4.s1.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.s1.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.s1.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_14: any = this.var_4.s1;
         this.var_4.s1.useHandCursor = _loc1_ = true;
         _temp_14.buttonMode = true;
         this.var_4.s2.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.s2.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.s2.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_15: any = this.var_4.s2;
         this.var_4.s2.useHandCursor = _loc1_ = true;
         _temp_15.buttonMode = true;
         this.var_4.v1.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.v1.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.v1.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_16: any = this.var_4.v1;
         this.var_4.v1.useHandCursor = _loc1_ = true;
         _temp_16.buttonMode = true;
         this.var_4.v2.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.v2.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.v2.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_17: any = this.var_4.v2;
         this.var_4.v2.useHandCursor = _loc1_ = true;
         _temp_17.buttonMode = true;
         this.var_4.e1.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.e1.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.e1.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_18: any = this.var_4.e1;
         this.var_4.v2.useHandCursor = _loc1_ = true;
         _temp_18.buttonMode = true;
         this.var_4.e2.addEventListener("mouseover", this.method_12.bind(this));
         this.var_4.e2.addEventListener("mouseout", this.method_11.bind(this));
         this.var_4.e2.addEventListener("mouseup", this.settUp.bind(this));
         var _temp_19: any = this.var_4.e2;
         this.var_4.v2.useHandCursor = _loc1_ = true;
         _temp_19.buttonMode = true;
         this.var_268 = false;
         this.var_337 = true;
         this.method_143();
      }
      
      private method_705(): void
      {
         this.profile = new (Profile as any)();
         var _temp_3: any = this.profile;
         var _temp_2: any = this.profile;
         var _temp_1: any = 0;
         0;
         (_temp_2 as any).y = _temp_1;
         (_temp_3 as any).x = 0;
         this.addChild(this.profile);
         this.profile.Setup(this.mRef,this.mRef.stage,this,this.ProfileCallBack);
      }
      
      public method_94(param1: number): void
      {
         var var_441: any, var_424: any, var_408: any;

         this.var_441 = false;
         this.var_424 = false;
         this.var_408 = param1;
      }
      
      private method_455(): void
      {
         var var_42: any;

         if(this.var_42 != null)
         {
            (this.var_42 as any).x = (this.var_42 as any).y = -100;
         }
         (this.play_btn as any).x = (this.play_btn as any).y = -100;
         (this.settings_btn as any).x = (this.settings_btn as any).y = -100;
         (this.bubbleopedia_btn as any).x = (this.bubbleopedia_btn as any).y = -100;
         (this.credits_btn as any).x = (this.credits_btn as any).y = -100;
         (this.ec_btn as any).x = (this.ec_btn as any).y = -100;
         (this.pmg_btn as any).x = (this.pmg_btn as any).y = -100;
         (this.Cheat_btn as any).x = (this.Cheat_btn as any).y = -100;
      }
      
      private credUp(param1: any): void
      {
         var var_182: any;

         if(this.var_182 == false)
         {
            if(param1.target.name == "back_btn")
            {
               this.RemoveCredits();
               this.method_159();
               this.method_94(0);
            }
            else if(param1.target.name == "hero_link")
            {
               this.mRef.method_44("credits_hero_interactive_link","link_outs");
               this.mRef.method_56(2);
            }
            else if(param1.target.name == "composer_link")
            {
               this.mRef.method_56(5);
            }
         }
      }
      
      private settUp(param1: any): void
      {
         var var_182: any, var_268: any;

         if(this.var_182 == false)
         {
            if(param1.target.name == "back_btn")
            {
               this.var_268 = true;
               this.RemoveSettings();
               this.method_159();
               this.method_94(0);
            }
            else if(param1.target.name == "hotkeys")
            {
               this.var_4.gotoAndStop("hotkeys");
               this.method_724();
            }
            else if(param1.target.name == "backSettings")
            {
               this.var_4.gotoAndStop("settings");
               this.method_143();
               this.method_595();
            }
            else
            {
               this.method_569(param1.target.name);
            }
         }
         this.method_143();
      }
      
      private method_650(param1: any): any
      {
         var var_8: any;

         this.var_8.method_10();
         if(this.const_2 != null)
         {
            this.const_2.Destroy();
            this.const_2 = null as any;
         }
         this.removeChild(this.var_53);
         this.var_53 = null as any;
         this.var_418 = false;
         this.var_357 = false;
         this.var_364 = false;
         this.var_360 = false;
         this.var_449 = false;
      }
      
      private method_48(param1: any): void
      {
         var var_384: any;

         param1.target.gotoAndPlay("on");
         if(param1.target.parent.name == "play_btn")
         {
            if(this.mRef.gData.var_384 == true)
            {
               this.rollover_txt.text = "Play / Tutorial";
            }
            else
            {
               this.rollover_txt.text = "Play";
            }
         }
         else if(param1.target.parent.name == "settings_btn")
         {
            this.rollover_txt.text = "Settings";
         }
         else if(param1.target.parent.name == "credits_btn")
         {
            this.rollover_txt.text = "Credits";
         }
         else if(param1.target.parent.name == "bubbleopedia_btn")
         {
            if(this.mRef.gData.var_298 == true)
            {
               this.rollover_txt.text = "Tank Viewer";
            }
            else
            {
               this.rollover_txt.text = "Extra Content (Uber Cheats!)";
            }
         }
         else if(param1.target.parent.name == "ec_btn")
         {
            this.rollover_txt.text = "Bubble Tanks Tower Defense 1[5]";
         }
         else if(param1.target.parent.name == "pmg_btn")
         {
            this.rollover_txt.text = "Play More Games!";
         }
         else if(param1.target.parent.name == "Cheat_btn")
         {
            this.rollover_txt.text = "Cheats!!!!";
         }
      }
      
      private method_729(): void
      {
         var var_357: any, var_364: any;

         if(this.var_357)
         {
            this.var_364 = true;
         }
      }
      
      private method_588(): void
      {
         var var_499: any, var_357: any;

         if(this.var_499)
         {
            this.var_357 = true;
         }
      }
      
      private method_618(): void
      {
         var var_364: any, var_360: any;

         if(this.var_364)
         {
            this.var_360 = true;
         }
      }
      
      private method_643(): void
      {
         var var_357: any, var_364: any, var_360: any, var_449: any, var_418: any;

         if(this.var_357 && this.var_364 && this.var_360 && this.var_449)
         {
            if(!this.var_418)
            {
               this.method_476();
            }
            this.var_418 = true;
         }
      }
      
      private method_502(): void
      {
         var var_447: any, var_42: any;

         if(this.mRef.gData.var_447 == true)
         {
            this.var_42 = new (class_75 as any)();
            (this.var_42 as any).x = this.mRef.stage.stageWidth - this.var_42.width - 5;
            (this.var_42 as any).y = this.mRef.stage.stageHeight - this.var_42.height - 8;
            this.addChild(this.var_42);
            this.var_42.addEventListener("mouseover", this.method_401.bind(this));
            this.var_42.addEventListener("mouseout", this.method_312.bind(this));
            this.var_42.addEventListener("mouseup", this.freeUp.bind(this));
            var _temp_3: any = this.var_42;
            var _temp_2: any = this.var_42;
            var _temp_1: any = true;
            _temp_2.useHandCursor = _temp_1;
            _temp_3.buttonMode = true;
         }
      }
      
      private method_11(param1: any): void
      {
         var var_4: any;

         param1.target.gotoAndStop("off");
         this.var_4.fps_txt.text = "";
         this.method_143();
      }
      
      public DeleteMainMenu(): void
      {
         var var_447: any, var_42: any;

         if(this.mRef.gData.var_447 == true)
         {
            this.var_42.removeEventListener("mouseover", this.method_401.bind(this));
            this.var_42.removeEventListener("mouseout", this.method_312.bind(this));
            this.var_42.removeEventListener("mouseup", this.freeUp.bind(this));
         }
         this.RemoveSettings();
         this.RemoveCredits();
         this.play_btn.removeEventListener("mouseover", this.method_48.bind(this));
         this.play_btn.removeEventListener("mouseout", this.method_50.bind(this));
         this.play_btn.removeEventListener("mouseup", this.mmBtnUp.bind(this));
         this.settings_btn.removeEventListener("mouseover", this.method_48.bind(this));
         this.settings_btn.removeEventListener("mouseout", this.method_50.bind(this));
         this.settings_btn.removeEventListener("mouseup", this.mmBtnUp.bind(this));
         this.bubbleopedia_btn.removeEventListener("mouseover", this.method_48.bind(this));
         this.bubbleopedia_btn.removeEventListener("mouseout", this.method_50.bind(this));
         this.bubbleopedia_btn.removeEventListener("mouseup", this.mmBtnUp.bind(this));
         this.credits_btn.removeEventListener("mouseover", this.method_48.bind(this));
         this.credits_btn.removeEventListener("mouseout", this.method_50.bind(this));
         this.credits_btn.removeEventListener("mouseup", this.mmBtnUp.bind(this));
         this.ec_btn.removeEventListener("mouseover", this.method_48.bind(this));
         this.ec_btn.removeEventListener("mouseout", this.method_50.bind(this));
         this.ec_btn.removeEventListener("mouseup", this.mmBtnUp.bind(this));
         this.pmg_btn.removeEventListener("mouseover", this.method_48.bind(this));
         this.pmg_btn.removeEventListener("mouseout", this.method_50.bind(this));
         this.pmg_btn.removeEventListener("mouseup", this.mmBtnUp.bind(this));
         if(this.mRef.gData.var_298)
         {
            this.Cheat_btn.removeEventListener("mouseover", this.method_48.bind(this));
            this.Cheat_btn.removeEventListener("mouseout", this.method_50.bind(this));
            this.Cheat_btn.removeEventListener("mouseup", this.mmBtnUp.bind(this));
            if(this.const_2 != null)
            {
               this.const_2.Destroy();
               this.const_2 = null as any;
            }
         }
         this.mRef.method_611();
         this.mRef.removeChild(this);
      }
      
      private method_748(): void
      {
         var var_360: any, var_449: any;

         if(this.var_360)
         {
            this.var_449 = true;
         }
         this.method_643();
      }
      
      private PlayButtonEffect(): any
      {
         var var_289: any, var_200: any;

         var _loc1_: any = new (Array as any)();
         this.var_289 += this.var_200;
         if(this.var_289 > 2 || this.var_289 < 0)
         {
            this.var_200 *= -1;
         }
         var _loc2_: GlowFilter = new (GlowFilter as any)(4294967295,1,7,7,this.var_289,3);
         _loc1_.push(_loc2_ as any);
         this.play_btn.filters = _loc1_;
      }
      
      private TitleCountdown(): void
      {
         var var_459: any, var_302: any;

         if(this.var_459 == false)
         {
            if(this.var_302 > 0)
            {
               --this.var_302;
            }
            else if(this.var_302 == 0)
            {
               this.var_302 = -1;
               this.var_459 = true;
               this.method_159();
               this.method_94(0);
            }
         }
      }
      
      private method_595(): void
      {
         this.mRef.gData.hot1 = this.objHotkeyManager.method_65("Up");
         this.mRef.gData.hot2 = this.objHotkeyManager.method_65("Down");
         this.mRef.gData.hot3 = this.objHotkeyManager.method_65("Left");
         this.mRef.gData.hot4 = this.objHotkeyManager.method_65("Right");
         this.mRef.gData.hot5 = this.objHotkeyManager.method_65("Pause");
         this.objHotkeyManager.CleanUp();
      }
      
      private CreateCredits(): void
      {
         var var_46: any;

         this.var_46 = new (Credits as any)();
         var _temp_3: any = this.var_46;
         var _temp_2: any = this.var_46;
         var _temp_1: any = 0;
         0;
         (_temp_2 as any).y = _temp_1;
         (_temp_3 as any).x = 0;
         this.addChild(this.var_46);
         this.var_46.back_btn.addEventListener("mouseover", this.method_109.bind(this));
         this.var_46.back_btn.addEventListener("mouseout", this.method_103.bind(this));
         this.var_46.back_btn.addEventListener("mouseup", this.credUp.bind(this));
         var _temp_4: any = this.var_46.back_btn;
         var _loc1_: boolean;
         this.var_46.back_btn.useHandCursor = _loc1_ = true;
         _temp_4.buttonMode = 0;
         this.var_46.hero_link.addEventListener("mouseover", this.method_109.bind(this));
         this.var_46.hero_link.addEventListener("mouseout", this.method_103.bind(this));
         this.var_46.hero_link.addEventListener("mouseup", this.credUp.bind(this));
         var _temp_5: any = this.var_46.hero_link;
         this.var_46.hero_link.useHandCursor = _loc1_ = true;
         _temp_5.buttonMode = 0;
         this.var_46.composer_link.addEventListener("mouseover", this.method_109.bind(this));
         this.var_46.composer_link.addEventListener("mouseout", this.method_103.bind(this));
         this.var_46.composer_link.addEventListener("mouseup", this.credUp.bind(this));
         var _temp_6: any = this.var_46.composer_link;
         this.var_46.composer_link.useHandCursor = _loc1_ = true;
         _temp_6.buttonMode = 0;
      }
      
      public method_154(param1: boolean): void
      {
         var var_164: any, var_171: any, var_304: any, var_227: any;

         if(param1 == true)
         {
            this.mRef.method_44("efficiency_mode_on","settings");
            this.mRef.method_69(false);
            this.mRef.method_70(false);
            stage.quality = StageQuality.LOW;
            this.var_164 = 1;
            stage.frameRate = 90;
            this.var_171 = 3;
            this.mRef.objBackgroundParticles.method_96(true);
            this.mRef.objBackgroundParticles2.method_96(true);
            this.mRef.sEffects.method_257();
            this.mRef.blnScreenShake = false;
            this.var_304 = this.mRef.var_227 = 2;
         }
         else
         {
            this.mRef.method_69(true);
            this.mRef.method_70(true);
            stage.quality = StageQuality.HIGH;
            this.var_164 = 3;
            stage.frameRate = this.mRef.gData.mainFPS2;
            this.var_171 = 2;
            this.mRef.objBackgroundParticles.method_55(true);
            this.mRef.objBackgroundParticles2.method_55(true);
            this.mRef.sEffects.method_288();
            this.mRef.blnScreenShake = true;
            this.var_304 = this.mRef.var_227 = 1;
         }
         this.mRef.SaveGameData();
      }
      
      private method_750(param1: any): any
      {
         var _loc2_: any = new (Array as any)();
         param1.target.filters = _loc2_;
      }
      
      private RemoveSettings(): void
      {
         var var_4: any;

         if(this.var_4 != null)
         {
            this.var_4.backSettings.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.backSettings.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.backSettings.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.hotkeys.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.hotkeys.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.hotkeys.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.back_btn.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.back_btn.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.back_btn.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.gs1.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.gs1.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.gs1.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.gs2.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.gs2.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.gs2.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.gs3.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.gs3.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.gs3.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.g1.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.g1.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.g1.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.g2.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.g2.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.g2.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.g3.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.g3.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.g3.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.m1.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.m1.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.m1.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.m2.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.m2.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.m2.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.s1.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.s1.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.s1.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.s2.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.s2.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.s2.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.v1.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.v1.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.v1.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.v2.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.v2.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.v2.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.e1.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.e1.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.e1.removeEventListener("mouseup", this.settUp.bind(this));
            this.var_4.e2.removeEventListener("mouseover", this.method_12.bind(this));
            this.var_4.e2.removeEventListener("mouseout", this.method_11.bind(this));
            this.var_4.e2.removeEventListener("mouseup", this.settUp.bind(this));
            this.removeChild(this.var_4);
         }
         this.mRef.SaveGameData();
         this.var_4 = null as any;
      }
      
      private method_724(): void
      {
         var var_4: any;

         this.objHotkeyManager.method_369(this.mRef.stage);
         this.objHotkeyManager.method_72("Up",this.var_4.up_mc,this.var_4.up_txt,this.mRef.gData.hot1);
         this.objHotkeyManager.method_72("Down",this.var_4.down_mc,this.var_4.down_txt,this.mRef.gData.hot2);
         this.objHotkeyManager.method_72("Left",this.var_4.left_mc,this.var_4.left_txt,this.mRef.gData.hot3);
         this.objHotkeyManager.method_72("Right",this.var_4.right_mc,this.var_4.right_txt,this.mRef.gData.hot4);
         this.objHotkeyManager.method_72("Pause",this.var_4.pause_mc,this.var_4.pause_txt,this.mRef.gData.hot5);
      }
      
      private method_476(): any
      {
         var var_53: any;

         this.var_53 = new (class_70 as any)();
         this.addChild(this.var_53);
         if(this.mRef.blnCheatClass)
         {
            this.var_53.btnClass_mc.gotoAndStop(2);
         }
         if(this.mRef.var_132)
         {
            this.var_53.btnBubbles_mc.gotoAndStop(2);
         }
         if(this.mRef.var_139)
         {
            this.var_53.btnGuns_mc.gotoAndStop(2);
         }
         if(this.mRef.var_224)
         {
            this.var_53.btnUnlockGuns_mc.gotoAndStop(2);
         }
         if(this.mRef.blnBTAUnlocked)
         {
            this.var_53.btnUnlockBTALevels_mc.gotoAndStop(2);
         }
         if(this.mRef.bln50GunPoints)
         {
            this.var_53.btn50GunPoints_mc.gotoAndStop(2);
         }
         this.var_8.method_4(this.var_53.btnClass_mc,true);
         this.var_8.method_4(this.var_53.btnBubbles_mc,true);
         this.var_8.method_4(this.var_53.btnGuns_mc,true);
         this.var_8.method_4(this.var_53.btnUnlockGuns_mc,true);
         this.var_8.method_4(this.var_53.back_btn,true,this.method_650,this.method_109,this.method_103);
         this.var_8.method_4(this.var_53.btnUnlockBTALevels_mc,true);
         this.var_8.method_4(this.var_53.btn50GunPoints_mc,true);
      }
   }
