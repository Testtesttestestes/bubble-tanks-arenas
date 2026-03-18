// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { ArenaCreatorBubblefield } from './ArenaCreatorBubblefield';
import { BTAGameWorld } from './BTAGameWorld';
import { class_2 } from './class_2';
import { class_3 } from './class_3';
import { class_4 } from './class_4';
import { class_44 } from './class_44';
import { class_51 } from './class_51';
import { PausedMenuButtons } from './PausedMenuButtons';
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
export class PauseMenu extends Sprite{
  [key: string]: any;
      
      public var_187: number = 0;
      public var_45!: any;
      public var_439!: Sprite;
      public var_8!: class_3;
      public objHotkeyManager!: class_4;
      public arenaProgressButtonManager!: class_3;
      public var_114!: any;
      public var_69!: any;
      public var_16!: any;
      public var_580: number = 0;
      public var_284: number = 0;
      public var_442: number = 0;
      public var_1!: PausedMenuButtons;
      public btaGameWorld!: BTAGameWorld;
      public var_74!: any;
      public var_65!: any;
      public settingsButtonManager!: class_3;
      public var_123!: class_51;
      public var_68!: any;
      public var_63!: any;
      public intState: number = 0;
      public arrBubbleFields!: any;
      public var_204!: any;
      public var_274!: boolean;
      public var_315!: class_3;
      public objGameObjectLibrary!: class_2;
      public var_318!: class_3;
      constructor(param1: BTAGameWorld = null){
    var var_204: any, var_439: any, var_65: any, var_45: any, var_68: any, var_69: any, var_63: any, var_114: any, var_74: any, var_274: any;

    // @ts-ignore
    super();
         var _loc2_: number = 0;
         var _loc3_: class_51 = null as any;
         var _loc4_: ArenaCreatorBubblefield = null as any;
         if(param1 != null)
         {
            this.var_204 = new (Array as any)();
            this.var_439 = new (Sprite as any)();
            this.var_65 = new (Array as any)();
            this.var_45 = new (Array as any)();
            this.var_68 = new (Array as any)();
            this.var_69 = new (Array as any)();
            this.var_63 = new (Array as any)();
            this.var_114 = new (Array as any)();
            this.var_74 = new (Array as any)();
            this.objGameObjectLibrary = class_2.getInstance();
            this.var_274 = false;
            _loc2_ = 0;
            while(_loc2_ < 30)
            {
               _loc3_ = new (class_51 as any)(550,450);
               this.var_204.push(_loc3_ as any);
               this.var_439.addChild(this.var_204[_loc2_ as any]);
               this.var_204[_loc2_ as any].SetBlur();
               _loc2_ += 1;
            }
            this.btaGameWorld = param1;
            this.var_8 = new (class_3 as any)();
            this.var_8.Setup(this.BtnUp,this.method_107,this.method_112);
            this.settingsButtonManager = new (class_3 as any)();
            this.settingsButtonManager.Setup(this.BtnSettingsUp,this.method_107,this.method_112);
            this.var_318 = new (class_3 as any)();
            this.var_318.Setup(this.BtnKeyboardUp,this.method_107,this.method_112);
            this.arenaProgressButtonManager = new (class_3 as any)();
            this.arenaProgressButtonManager.Setup(this.method_702,this.method_107,this.method_112);
            this.var_315 = new (class_3 as any)();
            this.var_315.Setup(this.method_563,this.method_107,this.method_112);
            this.var_123 = new (class_51 as any)(550,450);
            this.addChild(this.var_123);
            this.var_123.SetBlur();
            this.var_123.Draw(param1.parent);
            this.var_1 = new (PausedMenuButtons as any)();
            this.btaGameWorld.mRef.addChild(this.var_1);
            (this.var_1 as any).alpha = 0;
            this.var_65.push({
               "x":this.var_1.btnPlay_mc.x,
               "y":this.var_1.btnPlay_mc.y
            } as any);
            this.var_65.push({
               "x":this.var_1.btnSettings_mc.x,
               "y":this.var_1.btnSettings_mc.y
            } as any);
            this.var_65.push({
               "x":this.var_1.btn3_mc.x,
               "y":this.var_1.btn3_mc.y
            } as any);
            this.var_65.push({
               "x":this.var_1.btn4_mc.x,
               "y":this.var_1.btn4_mc.y
            } as any);
            this.var_65.push({
               "x":this.var_1.btn5_mc.x,
               "y":this.var_1.btn5_mc.y
            } as any);
            this.var_65.push({
               "x":this.var_1.btnPlayMoreGames_mc.x,
               "y":this.var_1.btnPlayMoreGames_mc.y
            } as any);
            this.var_65.push({
               "x":this.var_1.flag_mc.x,
               "y":this.var_1.flag_mc.y
            } as any);
            (this.var_1.btnPlay_mc as any).x = this.var_1.Button1Out_mc.x;
            (this.var_1.btnPlay_mc as any).y = this.var_1.Button1Out_mc.y;
            (this.var_1.btnSettings_mc as any).x = this.var_1.Button2Out_mc.x;
            (this.var_1.btnSettings_mc as any).y = this.var_1.Button2Out_mc.y;
            (this.var_1.btn3_mc as any).x = this.var_1.Button3Out_mc.x;
            (this.var_1.btn3_mc as any).y = this.var_1.Button3Out_mc.y;
            (this.var_1.btn4_mc as any).x = this.var_1.Button4Out_mc.x;
            (this.var_1.btn4_mc as any).y = this.var_1.Button4Out_mc.y;
            (this.var_1.btn5_mc as any).x = this.var_1.Button5Out_mc.x;
            (this.var_1.btn5_mc as any).y = this.var_1.Button5Out_mc.y;
            (this.var_1.btnPlayMoreGames_mc as any).x = this.var_1.Button6Out_mc.x;
            (this.var_1.btnPlayMoreGames_mc as any).y = this.var_1.Button6Out_mc.y;
            (this.var_1.flag_mc as any).x = this.var_1.TankInfo_mc.ButtonTopOut_mc.x;
            (this.var_1.flag_mc as any).y = this.var_1.TankInfo_mc.ButtonTopOut_mc.y;
            this.var_74.push({
               "btn":this.var_1.btnPlay_mc,
               "txt":"Continue Playing"
            } as any);
            this.var_74.push({
               "btn":this.var_1.btnSettings_mc,
               "txt":"Settings"
            } as any);
            this.var_74.push({
               "btn":this.var_1.btn3_mc,
               "txt":"Back to Arena Selection"
            } as any);
            this.var_74.push({
               "btn":this.var_1.btn4_mc,
               "txt":"Arena Progress"
            } as any);
            this.var_74.push({
               "btn":this.var_1.btn5_mc,
               "txt":"Tank Information"
            } as any);
            this.var_74.push({
               "btn":this.var_1.btnPlayMoreGames_mc,
               "txt":"Play More Games!"
            } as any);
            this.var_74.push({
               "btn":this.var_1.Settings_mc.btnBack_mc,
               "txt":""
            } as any);
            this.var_74.push({
               "btn":this.var_1.ArenaProgress_mc.btnBack_mc,
               "txt":""
            } as any);
            this.var_74.push({
               "btn":this.var_1.TankInfo_mc.btnBack_mc,
               "txt":""
            } as any);
            this.var_74.push({
               "btn":this.var_1.flag_mc,
               "txt":"Flag this arena for inappropriate content"
            } as any);
            _loc2_ = 0;
            while(_loc2_ < this.var_74.length)
            {
               this.var_74[_loc2_ as any].btn.OverMe = false;
               _loc2_ += 1;
            }
            this.method_165();
            this.var_45.push({
               "x":this.var_1.Settings_mc.Title_mc.x,
               "y":this.var_1.Settings_mc.Title_mc.y
            } as any);
            this.var_45.push({
               "x":this.var_1.Settings_mc.FrameRate_mc.x,
               "y":this.var_1.Settings_mc.FrameRate_mc.y
            } as any);
            this.var_45.push({
               "x":this.var_1.Settings_mc.Quality_mc.x,
               "y":this.var_1.Settings_mc.Quality_mc.y
            } as any);
            this.var_45.push({
               "x":this.var_1.Settings_mc.Music_mc.x,
               "y":this.var_1.Settings_mc.Music_mc.y
            } as any);
            this.var_45.push({
               "x":this.var_1.Settings_mc.Sounds_mc.x,
               "y":this.var_1.Settings_mc.Sounds_mc.y
            } as any);
            this.var_45.push({
               "x":this.var_1.Settings_mc.ScreenShake_mc.x,
               "y":this.var_1.Settings_mc.ScreenShake_mc.y
            } as any);
            this.var_45.push({
               "x":this.var_1.Settings_mc.btnBack_mc.x,
               "y":this.var_1.Settings_mc.btnBack_mc.y
            } as any);
            this.var_45.push({
               "x":this.var_1.Settings_mc.btnHotkeys_mc.x,
               "y":this.var_1.Settings_mc.btnHotkeys_mc.y
            } as any);
            this.var_45.push({
               "x":this.var_1.Settings_mc.EfficientMode_mc.x,
               "y":this.var_1.Settings_mc.EfficientMode_mc.y
            } as any);
            (this.var_1.Settings_mc.Title_mc as any).y = this.var_1.Settings_mc.ButtonSettingsOut_mc.y;
            (this.var_1.Settings_mc.FrameRate_mc as any).y = this.var_1.Settings_mc.ButtonSettingsOut_mc.y;
            (this.var_1.Settings_mc.Quality_mc as any).y = this.var_1.Settings_mc.ButtonSettingsOut_mc.y;
            (this.var_1.Settings_mc.Music_mc as any).y = this.var_1.Settings_mc.ButtonSettingsOut_mc.y;
            (this.var_1.Settings_mc.Sounds_mc as any).y = this.var_1.Settings_mc.ButtonSettingsOut_mc.y;
            (this.var_1.Settings_mc.ScreenShake_mc as any).y = this.var_1.Settings_mc.ButtonSettingsOut_mc.y;
            (this.var_1.Settings_mc.btnBack_mc as any).y = this.var_1.Settings_mc.ButtonSettingsOut2_mc.y;
            (this.var_1.Settings_mc.btnHotkeys_mc as any).y = this.var_1.Settings_mc.ButtonSettingsOut_mc.y;
            (this.var_1.Settings_mc.EfficientMode_mc as any).y = this.var_1.Settings_mc.ButtonSettingsOut_mc.y;
            this.var_68.push({
               "x":this.var_1.HotKeys_mc.Title_mc.x,
               "y":this.var_1.HotKeys_mc.Title_mc.y
            } as any);
            this.var_68.push({
               "x":this.var_1.HotKeys_mc.Up_mc.x,
               "y":this.var_1.HotKeys_mc.Up_mc.y
            } as any);
            this.var_68.push({
               "x":this.var_1.HotKeys_mc.Down_mc.x,
               "y":this.var_1.HotKeys_mc.Down_mc.y
            } as any);
            this.var_68.push({
               "x":this.var_1.HotKeys_mc.Left_mc.x,
               "y":this.var_1.HotKeys_mc.Left_mc.y
            } as any);
            this.var_68.push({
               "x":this.var_1.HotKeys_mc.Right_mc.x,
               "y":this.var_1.HotKeys_mc.Right_mc.y
            } as any);
            this.var_68.push({
               "x":this.var_1.HotKeys_mc.Paused_mc.x,
               "y":this.var_1.HotKeys_mc.Paused_mc.y
            } as any);
            this.var_68.push({
               "x":this.var_1.HotKeys_mc.btnBack_mc.x,
               "y":this.var_1.HotKeys_mc.btnBack_mc.y
            } as any);
            (this.var_1.HotKeys_mc.Title_mc as any).y = this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y;
            (this.var_1.HotKeys_mc.btnBack_mc as any).y = this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y;
            (this.var_1.HotKeys_mc.Up_mc as any).y = this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y;
            (this.var_1.HotKeys_mc.Down_mc as any).y = this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y;
            (this.var_1.HotKeys_mc.Left_mc as any).y = this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y;
            (this.var_1.HotKeys_mc.Right_mc as any).y = this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y;
            (this.var_1.HotKeys_mc.Paused_mc as any).y = this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y;
            _loc2_ = 0;
            while(_loc2_ < this.var_1.ArenaProgress_mc.ArenaBubbleFieldLocations_mc.numChildren)
            {
               this.var_69.push({
                  "x":this.var_1.ArenaProgress_mc.ArenaBubbleFieldLocations_mc.getChildAt(_loc2_).x,
                  "y":this.var_1.ArenaProgress_mc.ArenaBubbleFieldLocations_mc.getChildAt(_loc2_).y
               } as any);
               _loc2_ += 1;
            }
            this.var_1.ArenaProgress_mc.removeChild(this.var_1.ArenaProgress_mc.ArenaBubbleFieldLocations_mc);
            this.var_69.sortOn("x",(Array as any).NUMERIC);
            _loc2_ = 0;
            while(_loc2_ < this.btaGameWorld.objCurrentArenaData.var_6.length)
            {
               _loc4_ = new (ArenaCreatorBubblefield as any)();
               this.var_1.ArenaProgress_mc.addChild(_loc4_);
               (_loc4_ as any).width = 30;
               (_loc4_ as any).height = 30;
               (_loc4_ as any).x = this.var_69[_loc2_ + 4 - (Math.floor(this.btaGameWorld.objCurrentArenaData.var_6.length / 2) - 1) as any].x;
               (_loc4_ as any).y = this.var_69[_loc2_ + 4 - (Math.floor(this.btaGameWorld.objCurrentArenaData.var_6.length / 2) - 1) as any].y;
               _loc4_.txtBubbleFieldNum_txt.text = "";
               this.var_63.push(_loc4_ as any);
               _loc2_ += 1;
            }
            this.var_69.push({
               "x":this.var_1.ArenaProgress_mc.Title_mc.x,
               "y":this.var_1.ArenaProgress_mc.Title_mc.y
            } as any);
            this.var_69.push({
               "x":this.var_1.ArenaProgress_mc.Arrow_mc.x,
               "y":this.var_1.ArenaProgress_mc.Arrow_mc.y
            } as any);
            this.var_69.push({
               "x":this.var_1.ArenaProgress_mc.PercentComplete_mc.x,
               "y":this.var_1.ArenaProgress_mc.PercentComplete_mc.y
            } as any);
            this.var_69.push({
               "x":this.var_1.ArenaProgress_mc.BubblesCollected_mc.x,
               "y":this.var_1.ArenaProgress_mc.BubblesCollected_mc.y
            } as any);
            this.var_69.push({
               "x":this.var_1.ArenaProgress_mc.EnemiesKilled_mc.x,
               "y":this.var_1.ArenaProgress_mc.EnemiesKilled_mc.y
            } as any);
            this.var_69.push({
               "x":this.var_1.ArenaProgress_mc.btnBack_mc.x,
               "y":this.var_1.ArenaProgress_mc.btnBack_mc.y
            } as any);
            (this.var_1.ArenaProgress_mc.Title_mc as any).y = this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y;
            (this.var_1.ArenaProgress_mc.Arrow_mc as any).y = this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y;
            (this.var_1.ArenaProgress_mc.PercentComplete_mc as any).y = this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y;
            (this.var_1.ArenaProgress_mc.BubblesCollected_mc as any).y = this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y;
            (this.var_1.ArenaProgress_mc.EnemiesKilled_mc as any).y = this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y;
            (this.var_1.ArenaProgress_mc.btnBack_mc as any).y = this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y;
            this.var_1.BlankArena_mc.active = false;
            (this.var_1.BlankArena_mc as any).alpha = 0;
            this.var_1.BlankArena_mc.mouseEnabled = false;
            this.var_1.BlankArena_mc.mouseChildren = false;
            _loc2_ = 0;
            while(_loc2_ < this.var_63.length)
            {
               this.var_63[_loc2_ as any].y = this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y;
               _loc2_ += 1;
            }
            this.var_1.rollover_txt.text = "";
            this.var_114.push({
               "x":this.var_1.TankInfo_mc.Title_mc.x,
               "y":this.var_1.TankInfo_mc.Title_mc.y
            } as any);
            this.var_114.push({
               "x":this.var_1.TankInfo_mc.ClassHealth_mc.x,
               "y":this.var_1.TankInfo_mc.ClassHealth_mc.y
            } as any);
            this.var_114.push({
               "x":this.var_1.TankInfo_mc.TankImage_mc.x,
               "y":this.var_1.TankInfo_mc.TankImage_mc.y
            } as any);
            this.var_114.push({
               "x":this.var_1.TankInfo_mc.PrimaryWeapons_mc.x,
               "y":this.var_1.TankInfo_mc.PrimaryWeapons_mc.y
            } as any);
            this.var_114.push({
               "x":this.var_1.TankInfo_mc.SecondaryWeapons_mc.x,
               "y":this.var_1.TankInfo_mc.SecondaryWeapons_mc.y
            } as any);
            this.var_114.push({
               "x":this.var_1.TankInfo_mc.btnBack_mc.x,
               "y":this.var_1.TankInfo_mc.btnBack_mc.y
            } as any);
            (this.var_1.TankInfo_mc.Title_mc as any).y = this.var_1.TankInfo_mc.ButtonTopOut_mc.y;
            (this.var_1.TankInfo_mc.ClassHealth_mc as any).y = this.var_1.TankInfo_mc.ButtonTopOut_mc.y;
            (this.var_1.TankInfo_mc.PrimaryWeapons_mc as any).x = this.var_1.TankInfo_mc.ButtonLeftOut_mc.x;
            (this.var_1.TankInfo_mc.SecondaryWeapons_mc as any).x = this.var_1.TankInfo_mc.ButtonLeftOut_mc.x;
            (this.var_1.TankInfo_mc.btnBack_mc as any).x = this.var_1.TankInfo_mc.ButtonLeftOut_mc.x;
            (this.var_1.TankInfo_mc.TankImage_mc as any).x = this.var_1.TankInfo_mc.ButtonTankOut_mc.x;
         }
      }
      
      private method_658(): void
      {
         var var_1: any;

         var _loc1_: number = 0;
         if(this.var_1.BlankArena_mc.active)
         {
            if(this.var_1.BlankArena_mc.alpha < 1)
            {
               this.var_1.BlankArena_mc.alpha += 0[05];
            }
         }
         (this.var_1.ArenaProgress_mc.Title_mc as any).y = this.var_1.ArenaProgress_mc.Title_mc.y * 0[9] + this.var_69[10].y * 0[1];
         if(this.var_1.ArenaProgress_mc.Title_mc.y < 400)
         {
            (this.var_1.ArenaProgress_mc.Arrow_mc as any).y = this.var_1.ArenaProgress_mc.Arrow_mc.y * 0[9] + this.var_69[11].y * 0[1];
         }
         if(this.var_1.ArenaProgress_mc.Arrow_mc.y < 400)
         {
            this.var_63[0].x = this.var_63[0].x * 0[9] + this.var_69[_loc1_ + 4 - (Math.floor(this.btaGameWorld.objCurrentArenaData.var_6.length / 2) - 1) as any].x * 0[1];
            this.var_63[0].y = this.var_63[0].y * 0[9] + this.var_69[_loc1_ + 4 - (Math.floor(this.btaGameWorld.objCurrentArenaData.var_6.length / 2) - 1) as any].y * 0[1];
         }
         _loc1_ = 1;
         while(_loc1_ < this.var_63.length)
         {
            if(this.var_63[_loc1_ - 1 as any].y < 400)
            {
               this.var_63[_loc1_ as any].x = this.var_63[_loc1_ as any].x * 0[9] + this.var_69[_loc1_ + 4 - (Math.floor(this.btaGameWorld.objCurrentArenaData.var_6.length / 2) - 1) as any].x * 0[1];
               this.var_63[_loc1_ as any].y = this.var_63[_loc1_ as any].y * 0[9] + this.var_69[_loc1_ + 4 - (Math.floor(this.btaGameWorld.objCurrentArenaData.var_6.length / 2) - 1) as any].y * 0[1];
            }
            _loc1_ += 1;
         }
         if(this.var_63[this.var_63.length - 1 as any].y < 400)
         {
            (this.var_1.ArenaProgress_mc.PercentComplete_mc as any).y = this.var_1.ArenaProgress_mc.PercentComplete_mc.y * 0[9] + this.var_69[12].y * 0[1];
         }
         if(this.var_1.ArenaProgress_mc.PercentComplete_mc.y < 350)
         {
            (this.var_1.ArenaProgress_mc.BubblesCollected_mc as any).y = this.var_1.ArenaProgress_mc.BubblesCollected_mc.y * 0[9] + this.var_69[13].y * 0[1];
         }
         if(this.var_1.ArenaProgress_mc.BubblesCollected_mc.y < 375)
         {
            (this.var_1.ArenaProgress_mc.EnemiesKilled_mc as any).y = this.var_1.ArenaProgress_mc.EnemiesKilled_mc.y * 0[9] + this.var_69[14].y * 0[1];
         }
         if(this.var_1.ArenaProgress_mc.EnemiesKilled_mc.y < 400)
         {
            (this.var_1.ArenaProgress_mc.btnBack_mc as any).y = this.var_1.ArenaProgress_mc.btnBack_mc.y * 0[9] + this.var_69[15].y * 0[1];
         }
      }
      
      public Run(): void
      {
         var var_274: any, var_187: any, var_123: any, var_204: any, var_284: any;

         var _loc1_: number = 0;
         if(this.var_274)
         {
            this.method_153();
            if(this.var_187 >= 0)
            {
               --this.var_187;
               if(this.var_187 / 2 == int(this.var_187 / 2))
               {
                  this.var_123.Draw(this.var_204[this.var_284 as any]);
                  --this.var_284;
               }
            }
            else
            {
               this.btaGameWorld.PauseMenuDestroy();
            }
         }
         else
         {
            if(this.var_187 < 39)
            {
               this.var_187 += 1;
               if(this.var_187 / 2 == int(this.var_187 / 2))
               {
                  this.var_204[this.var_284 as any].Draw(this.var_123);
                  this.var_123.method_290();
                  this.var_284 += 1;
               }
            }
            _loc1_ = 0;
            while(_loc1_ < this.var_74.length)
            {
               if(this.var_74[_loc1_ as any].btn.OverMe)
               {
                  if(this.var_74[_loc1_ as any].btn.scaleX < 1[5])
                  {
                     this.var_74[_loc1_ as any].(btn as any).scaleX = this.var_74[_loc1_ as any].(btn as any).scaleY = this.var_74[_loc1_ as any].btn.scaleX * 0[8] + 1[25] * 0[2];
                  }
                  this.var_1.rollover_txt.text = this.var_74[_loc1_ as any].txt;
               }
               else
               {
                  this.var_74[_loc1_ as any].(btn as any).scaleX = this.var_74[_loc1_ as any].(btn as any).scaleY = this.var_74[_loc1_ as any].btn.scaleX * 0[8] + 1 * 0[2];
               }
               _loc1_ += 1;
            }
            switch(this.intState)
            {
               case 0:
                  this.method_167();
                  break;
               case 1:
                  this.method_153();
                  break;
               case 2:
                  this.method_153();
                  this.method_443();
                  break;
               case 3:
                  this.method_167();
                  this.method_458();
                  break;
               case 4:
                  this.method_153();
                  this.method_658();
                  break;
               case 5:
                  this.method_167();
                  this.method_511();
                  break;
               case 6:
                  this.method_153();
                  this.method_762();
                  break;
               case 7:
                  this.method_167();
                  this.method_604();
                  break;
               case 8:
                  this.method_458();
                  this.method_695();
                  break;
               case 9:
                  this.method_443();
                  this.method_768();
            }
         }
      }
      
      private method_443(): void
      {
         var var_1: any, var_45: any;

         (this.var_1.Settings_mc.Title_mc as any).x = this.var_1.Settings_mc.Title_mc.x * 0[9] + this.var_45[0].x * 0[1];
         (this.var_1.Settings_mc.Title_mc as any).y = this.var_1.Settings_mc.Title_mc.y * 0[9] + this.var_45[0].y * 0[1];
         if(this.var_1.Settings_mc.Title_mc.y < 200)
         {
            (this.var_1.Settings_mc.FrameRate_mc as any).x = this.var_1.Settings_mc.FrameRate_mc.x * 0[9] + this.var_45[1].x * 0[1];
            (this.var_1.Settings_mc.FrameRate_mc as any).y = this.var_1.Settings_mc.FrameRate_mc.y * 0[9] + this.var_45[1].y * 0[1];
         }
         if(this.var_1.Settings_mc.FrameRate_mc.y < 200)
         {
            (this.var_1.Settings_mc.Quality_mc as any).x = this.var_1.Settings_mc.Quality_mc.x * 0[9] + this.var_45[2].x * 0[1];
            (this.var_1.Settings_mc.Quality_mc as any).y = this.var_1.Settings_mc.Quality_mc.y * 0[9] + this.var_45[2].y * 0[1];
         }
         if(this.var_1.Settings_mc.Quality_mc.y < 200)
         {
            (this.var_1.Settings_mc.Music_mc as any).x = this.var_1.Settings_mc.Music_mc.x * 0[9] + this.var_45[3].x * 0[1];
            (this.var_1.Settings_mc.Music_mc as any).y = this.var_1.Settings_mc.Music_mc.y * 0[9] + this.var_45[3].y * 0[1];
         }
         if(this.var_1.Settings_mc.Music_mc.y < 200)
         {
            (this.var_1.Settings_mc.Sounds_mc as any).x = this.var_1.Settings_mc.Sounds_mc.x * 0[9] + this.var_45[4].x * 0[1];
            (this.var_1.Settings_mc.Sounds_mc as any).y = this.var_1.Settings_mc.Sounds_mc.y * 0[9] + this.var_45[4].y * 0[1];
         }
         if(this.var_1.Settings_mc.Sounds_mc.y < 200)
         {
            (this.var_1.Settings_mc.ScreenShake_mc as any).x = this.var_1.Settings_mc.ScreenShake_mc.x * 0[9] + this.var_45[5].x * 0[1];
            (this.var_1.Settings_mc.ScreenShake_mc as any).y = this.var_1.Settings_mc.ScreenShake_mc.y * 0[9] + this.var_45[5].y * 0[1];
         }
         if(this.var_1.Settings_mc.ScreenShake_mc.y < 200)
         {
            (this.var_1.Settings_mc.EfficientMode_mc as any).x = this.var_1.Settings_mc.EfficientMode_mc.x * 0[9] + this.var_45[8].x * 0[1];
            (this.var_1.Settings_mc.EfficientMode_mc as any).y = this.var_1.Settings_mc.EfficientMode_mc.y * 0[9] + this.var_45[8].y * 0[1];
         }
         if(this.var_1.Settings_mc.EfficientMode_mc.y < 200)
         {
            (this.var_1.Settings_mc.btnHotkeys_mc as any).x = this.var_1.Settings_mc.btnHotkeys_mc.x * 0[9] + this.var_45[7].x * 0[1];
            (this.var_1.Settings_mc.btnHotkeys_mc as any).y = this.var_1.Settings_mc.btnHotkeys_mc.y * 0[9] + this.var_45[7].y * 0[1];
         }
         if(this.var_1.Settings_mc.btnHotkeys_mc.y < 200)
         {
            (this.var_1.Settings_mc.btnBack_mc as any).x = this.var_1.Settings_mc.btnBack_mc.x * 0[9] + this.var_45[6].x * 0[1];
            (this.var_1.Settings_mc.btnBack_mc as any).y = this.var_1.Settings_mc.btnBack_mc.y * 0[9] + this.var_45[6].y * 0[1];
         }
      }
      
      private method_458(): void
      {
         var var_1: any;

         (this.var_1.Settings_mc.Title_mc as any).y = this.var_1.Settings_mc.Title_mc.y * 0[93] + this.var_1.Settings_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.Settings_mc.FrameRate_mc as any).y = this.var_1.Settings_mc.FrameRate_mc.y * 0[93] + this.var_1.Settings_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.Settings_mc.Quality_mc as any).y = this.var_1.Settings_mc.Quality_mc.y * 0[93] + this.var_1.Settings_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.Settings_mc.Music_mc as any).y = this.var_1.Settings_mc.Music_mc.y * 0[93] + this.var_1.Settings_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.Settings_mc.Sounds_mc as any).y = this.var_1.Settings_mc.Sounds_mc.y * 0[93] + this.var_1.Settings_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.Settings_mc.ScreenShake_mc as any).y = this.var_1.Settings_mc.ScreenShake_mc.y * 0[93] + this.var_1.Settings_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.Settings_mc.btnBack_mc as any).y = this.var_1.Settings_mc.btnBack_mc.y * 0[93] + this.var_1.Settings_mc.ButtonSettingsOut2_mc.y * 0[07];
         (this.var_1.Settings_mc.btnHotkeys_mc as any).y = this.var_1.Settings_mc.btnHotkeys_mc.y * 0[93] + this.var_1.Settings_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.Settings_mc.EfficientMode_mc as any).y = this.var_1.Settings_mc.EfficientMode_mc.y * 0[93] + this.var_1.Settings_mc.ButtonSettingsOut_mc.y * 0[07];
      }
      
      public method_112(param1: any): void
      {
         if(!param1.target.selected)
         {
            param1.target.gotoAndStop(1);
         }
         this.var_1.rollover_txt.text = "";
         param1.target.OverMe = false;
      }
      
      private method_165(): void
      {
         var var_8: any, var_1: any;

         this.var_8.method_4(this.var_1.btnPlay_mc,true);
         this.var_8.method_4(this.var_1.btnSettings_mc,true);
         this.var_8.method_4(this.var_1.btn3_mc,true);
         this.var_8.method_4(this.var_1.btn4_mc,true);
         this.var_8.method_4(this.var_1.btn5_mc,true);
         this.var_8.method_4(this.var_1.btnPlayMoreGames_mc,true);
         this.var_8.method_4(this.var_1.flag_mc,true);
      }
      
      private method_511(): void
      {
         var var_1: any;

         if(this.var_1.BlankArena_mc.active)
         {
            if(this.var_1.BlankArena_mc.alpha > 0)
            {
               this.var_1.BlankArena_mc.alpha *= 0[8];
            }
         }
         var _loc1_: number = 0;
         while(_loc1_ < this.var_63.length)
         {
            this.var_63[_loc1_ as any].x = this.var_63[_loc1_ as any].x * 0[93] + this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.x * 0[07];
            this.var_63[_loc1_ as any].y = this.var_63[_loc1_ as any].y * 0[93] + this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y * 0[07];
            _loc1_ += 1;
         }
         (this.var_1.ArenaProgress_mc.Title_mc as any).y = this.var_1.ArenaProgress_mc.Title_mc.y * 0[93] + this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.ArenaProgress_mc.Arrow_mc as any).y = this.var_1.ArenaProgress_mc.Arrow_mc.y * 0[93] + this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.ArenaProgress_mc.PercentComplete_mc as any).y = this.var_1.ArenaProgress_mc.PercentComplete_mc.y * 0[93] + this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.ArenaProgress_mc.BubblesCollected_mc as any).y = this.var_1.ArenaProgress_mc.BubblesCollected_mc.y * 0[93] + this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.ArenaProgress_mc.EnemiesKilled_mc as any).y = this.var_1.ArenaProgress_mc.EnemiesKilled_mc.y * 0[93] + this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.ArenaProgress_mc.btnBack_mc as any).y = this.var_1.ArenaProgress_mc.btnBack_mc.y * 0[93] + this.var_1.ArenaProgress_mc.ButtonSettingsOut_mc.y * 0[07];
      }
      
      private BtnUp(param1: any): void
      {
         var var_1: any, var_274: any, var_8: any;

         param1.target.OverMe = false;
         this.var_1.rollover_txt.text = "";
         if(param1.target == this.var_1.btnPlay_mc)
         {
            this.var_274 = true;
            this.var_8.method_10();
         }
         else if(param1.target == this.var_1.btnSettings_mc)
         {
            this.btaGameWorld.mRef.method_44("pm_settings_screen","section_visits");
            this.var_8.method_10();
            this.method_309();
            this.intState = 2;
         }
         else if(param1.target == this.var_1.btn3_mc)
         {
            this.btaGameWorld.mRef.method_169(new (class_44 as any)(),0[8]);
            this.Destroy();
            this.btaGameWorld.mRef.objBackgroundParticles.method_55();
            this.btaGameWorld.mRef.objBackgroundParticles2.method_55();
            this.btaGameWorld.Deactivate();
         }
         else if(param1.target == this.var_1.btn4_mc)
         {
            this.btaGameWorld.mRef.method_44("pm_arena_progress_screen","section_visits");
            this.var_8.method_10();
            this.method_648();
            this.intState = 4;
         }
         else if(param1.target == this.var_1.btn5_mc)
         {
            this.btaGameWorld.mRef.method_44("pm_tank_info_screen","section_visits");
            this.var_8.method_10();
            this.method_524();
            this.intState = 6;
         }
         else if(param1.target == this.var_1.btnPlayMoreGames_mc)
         {
            this.btaGameWorld.mRef.method_44("pm_pmg_link","link_outs");
            this.btaGameWorld.mRef.method_56(1);
         }
         else if(param1.target == this.var_1.flag_mc)
         {
            this.btaGameWorld.mRef.FlagAnID(this.btaGameWorld.strArenaID);
         }
      }
      
      private BtnSettingsUp(param1: any): void
      {
         var var_1: any;

         param1.target.OverMe = false;
         this.var_1.rollover_txt.text = "";
         if(param1.target == this.var_1.Settings_mc.btnBack_mc)
         {
            this.method_165();
            this.settingsButtonManager.method_10();
            this.intState = 3;
         }
         else if(param1.target == this.var_1.Settings_mc.FrameRate_mc.gs1)
         {
            this.btaGameWorld.mRef.stage.frameRate = this.btaGameWorld.mRef.gData.mainFPS1;
            this.btaGameWorld.mRef.mainFPS = this.btaGameWorld.mRef.gData.mainFPS1;
         }
         else if(param1.target == this.var_1.Settings_mc.FrameRate_mc.gs2)
         {
            this.btaGameWorld.mRef.stage.frameRate = this.btaGameWorld.mRef.gData.mainFPS2;
            this.btaGameWorld.mRef.mainFPS = this.btaGameWorld.mRef.gData.mainFPS2;
         }
         else if(param1.target == this.var_1.Settings_mc.FrameRate_mc.gs3)
         {
            this.btaGameWorld.mRef.stage.frameRate = this.btaGameWorld.mRef.gData.mainFPS3;
            this.btaGameWorld.mRef.mainFPS = this.btaGameWorld.mRef.gData.mainFPS3;
         }
         else if(param1.target == this.var_1.Settings_mc.Quality_mc.g1)
         {
            this.btaGameWorld.mRef.stage.quality = StageQuality.LOW;
         }
         else if(param1.target == this.var_1.Settings_mc.Quality_mc.g2)
         {
            this.btaGameWorld.mRef.stage.quality = StageQuality.MEDIUM;
         }
         else if(param1.target == this.var_1.Settings_mc.Quality_mc.g3)
         {
            this.btaGameWorld.mRef.stage.quality = StageQuality.HIGH;
         }
         else if(param1.target == this.var_1.Settings_mc.Music_mc.m1)
         {
            this.btaGameWorld.mRef.method_69(false);
         }
         else if(param1.target == this.var_1.Settings_mc.Music_mc.m2)
         {
            this.btaGameWorld.mRef.method_69(true);
         }
         else if(param1.target == this.var_1.Settings_mc.Sounds_mc.s1)
         {
            this.btaGameWorld.mRef.method_70(false);
         }
         else if(param1.target == this.var_1.Settings_mc.Sounds_mc.s2)
         {
            this.btaGameWorld.mRef.method_70(true);
         }
         else if(param1.target == this.var_1.Settings_mc.ScreenShake_mc.v1)
         {
            this.btaGameWorld.mRef.blnScreenShake = false;
         }
         else if(param1.target == this.var_1.Settings_mc.ScreenShake_mc.v2)
         {
            this.btaGameWorld.mRef.blnScreenShake = true;
         }
         else if(param1.target == this.var_1.Settings_mc.EfficientMode_mc.v1)
         {
            this.method_154(true);
         }
         else if(param1.target == this.var_1.Settings_mc.EfficientMode_mc.v2)
         {
            this.method_154(false);
         }
         else if(param1.target == this.var_1.Settings_mc.btnHotkeys_mc)
         {
            this.settingsButtonManager.method_10();
            this.method_633();
            this.intState = 8;
         }
         if(param1.target != this.var_1.Settings_mc.btnHotkeys_mc)
         {
            this.method_143();
         }
      }
      
      private method_167(): void
      {
         var var_1: any;

         if(this.var_1.alpha < 1)
         {
            this.var_1.alpha += 0[05];
         }
         if(!this.var_274)
         {
            if(this.var_1.Paused_mc.alpha < 1)
            {
               this.var_1.Paused_mc.alpha += 0[1];
            }
         }
         (this.var_1.btnPlay_mc as any).x = this.var_1.btnPlay_mc.x * 0[9] + this.var_65[0].x * 0[1];
         (this.var_1.btnPlay_mc as any).y = this.var_1.btnPlay_mc.y * 0[9] + this.var_65[0].y * 0[1];
         (this.var_1.btnSettings_mc as any).x = this.var_1.btnSettings_mc.x * 0[9] + this.var_65[1].x * 0[1];
         (this.var_1.btnSettings_mc as any).y = this.var_1.btnSettings_mc.y * 0[9] + this.var_65[1].y * 0[1];
         (this.var_1.btn3_mc as any).x = this.var_1.btn3_mc.x * 0[9] + this.var_65[2].x * 0[1];
         (this.var_1.btn3_mc as any).y = this.var_1.btn3_mc.y * 0[9] + this.var_65[2].y * 0[1];
         (this.var_1.btn4_mc as any).x = this.var_1.btn4_mc.x * 0[9] + this.var_65[3].x * 0[1];
         (this.var_1.btn4_mc as any).y = this.var_1.btn4_mc.y * 0[9] + this.var_65[3].y * 0[1];
         (this.var_1.btn5_mc as any).x = this.var_1.btn5_mc.x * 0[9] + this.var_65[4].x * 0[1];
         (this.var_1.btn5_mc as any).y = this.var_1.btn5_mc.y * 0[9] + this.var_65[4].y * 0[1];
         (this.var_1.btnPlayMoreGames_mc as any).x = this.var_1.btnPlayMoreGames_mc.x * 0[9] + this.var_65[5].x * 0[1];
         (this.var_1.btnPlayMoreGames_mc as any).y = this.var_1.btnPlayMoreGames_mc.y * 0[9] + this.var_65[5].y * 0[1];
         if(!this.btaGameWorld.blnBTA)
         {
            (this.var_1.flag_mc as any).x = this.var_1.flag_mc.x * 0[9] + this.var_65[6].x * 0[1];
            (this.var_1.flag_mc as any).y = this.var_1.flag_mc.y * 0[9] + this.var_65[6].y * 0[1];
         }
      }
      
      private method_496(param1: any): any
      {
         var _loc10_: string = null as any;
         var _loc11_: number = 0;
         var _loc13_: number = 0;
         var _loc14_: number = 0;
         var _loc15_: number = 0;
         var _loc16_: number = 0;
         var _loc17_: number = 0;
         var _loc2_: string = "";
         var _loc3_: string = "";
         var _loc4_: string = "";
         var _loc5_: any = new (Array as any)();
         var _loc6_: any = new (Array as any)();
         var _loc7_: any = new (Array as any)();
         var _loc8_: number = 0;
         while(_loc8_ < param1.length)
         {
            _loc13_ = Math.floor(param1[_loc8_ as any].type / 1000);
            _loc14_ = -1;
            if(_loc13_ == 2)
            {
               _loc15_ = 0;
               while(_loc15_ < _loc5_.length)
               {
                  if(_loc5_[_loc15_ as any].type == param1[_loc8_ as any].type)
                  {
                     _loc14_ = int(_loc15_);
                     ++_loc5_[_loc15_ as any].amount;
                  }
                  _loc15_++;
               }
               if(_loc14_ == -1)
               {
                  _loc5_.push({
                     "type":param1[_loc8_ as any].type,
                     "amount":1
                  } as any);
               }
            }
            else if(_loc13_ == 3)
            {
               _loc16_ = 0;
               while(_loc16_ < _loc6_.length)
               {
                  if(_loc6_[_loc16_ as any].type == param1[_loc8_ as any].type)
                  {
                     _loc14_ = int(_loc16_);
                     ++_loc6_[_loc16_ as any].amount;
                  }
                  _loc16_++;
               }
               if(_loc14_ == -1)
               {
                  _loc6_.push({
                     "type":param1[_loc8_ as any].type,
                     "amount":1
                  } as any);
               }
            }
            else if(_loc13_ == 4)
            {
               _loc17_ = 0;
               while(_loc17_ < _loc7_.length)
               {
                  if(_loc7_[_loc17_ as any].type == param1[_loc8_ as any].type)
                  {
                     _loc14_ = int(_loc17_);
                     ++_loc7_[_loc17_ as any].amount;
                  }
                  _loc17_++;
               }
               if(_loc14_ == -1)
               {
                  _loc7_.push({
                     "type":param1[_loc8_ as any].type,
                     "amount":1
                  } as any);
               }
            }
            _loc8_++;
         }
         _loc5_.sortOn("type");
         _loc6_.sortOn("type");
         _loc7_.sortOn("type");
         var _loc9_: boolean = false;
         if(_loc5_.length > 2)
         {
            _loc9_ = true;
         }
         _loc11_ = 0;
         while(_loc11_ < _loc5_.length)
         {
            if(_loc9_ == true)
            {
               if(_loc5_[_loc11_ as any].amount == 1)
               {
                  _loc10_ = this.objGameObjectLibrary.method_26(_loc5_[_loc11_ as any].type);
                  _loc2_ += "1 " + _loc10_.substr(0,_loc10_.length - 2) + ", ";
               }
               else
               {
                  _loc2_ += _loc5_[_loc11_ as any].amount + " " + this.objGameObjectLibrary.method_26(_loc5_[_loc11_ as any].type) + ", ";
               }
            }
            else if(_loc5_[_loc11_ as any].amount == 1)
            {
               _loc2_ += this.objGameObjectLibrary.method_37(_loc5_[_loc11_ as any].type) + ", ";
            }
            else
            {
               _loc2_ += _loc5_[_loc11_ as any].amount + " " + this.objGameObjectLibrary.method_87(_loc5_[_loc11_ as any].type) + ", ";
            }
            _loc11_++;
         }
         if(_loc6_.length > 2)
         {
            _loc9_ = true;
         }
         else
         {
            _loc9_ = false;
         }
         _loc11_ = 0;
         while(_loc11_ < _loc6_.length)
         {
            if(_loc9_ == true)
            {
               if(_loc6_[_loc11_ as any].amount == 1)
               {
                  _loc10_ = this.objGameObjectLibrary.method_26(_loc6_[_loc11_ as any].type);
                  _loc3_ += "1 " + _loc10_.substr(0,_loc10_.length - 2) + ", ";
               }
               else
               {
                  _loc3_ += _loc6_[_loc11_ as any].amount + " " + this.objGameObjectLibrary.method_26(_loc6_[_loc11_ as any].type) + ", ";
               }
            }
            else if(_loc6_[_loc11_ as any].amount == 1)
            {
               _loc3_ += this.objGameObjectLibrary.method_37(_loc6_[_loc11_ as any].type) + ", ";
            }
            else
            {
               _loc3_ += _loc6_[_loc11_ as any].amount + " " + this.objGameObjectLibrary.method_87(_loc6_[_loc11_ as any].type) + ", ";
            }
            _loc11_++;
         }
         if(_loc7_.length > 2)
         {
            _loc9_ = true;
         }
         else
         {
            _loc9_ = false;
         }
         _loc11_ = 0;
         while(_loc11_ < _loc7_.length)
         {
            if(_loc9_ == true)
            {
               if(_loc7_[_loc11_ as any].amount == 1)
               {
                  _loc10_ = this.objGameObjectLibrary.method_26(_loc7_[_loc11_ as any].type);
                  _loc4_ += "1 " + _loc10_.substr(0,_loc10_.length - 2) + ", ";
               }
               else
               {
                  _loc4_ += _loc7_[_loc11_ as any].amount + " " + this.objGameObjectLibrary.method_26(_loc7_[_loc11_ as any].type) + ", ";
               }
            }
            else if(_loc7_[_loc11_ as any].amount == 1)
            {
               _loc4_ += this.objGameObjectLibrary.method_37(_loc7_[_loc11_ as any].type) + ", ";
            }
            else
            {
               _loc4_ += _loc7_[_loc11_ as any].amount + " " + this.objGameObjectLibrary.method_87(_loc7_[_loc11_ as any].type) + ", ";
            }
            _loc11_++;
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
         if(_loc4_ == "")
         {
            _loc4_ = "N/A";
         }
         else
         {
            _loc4_ = _loc4_.substr(0,_loc4_.length - 2);
         }
         return {
            "strPrimary":_loc2_,
            "strSecondary":_loc3_,
            "strEnemyWeapons":_loc4_
         };
      }
      
      private method_563(param1: any): void
      {
         var var_1: any, var_315: any, var_442: any;

         param1.target.OverMe = false;
         this.var_1.rollover_txt.text = "";
         if(param1.target == this.var_1.TankInfo_mc.btnBack_mc)
         {
            this.var_315.method_10();
            this.method_165();
            this.intState = 7;
            this.btaGameWorld.addChildAt(this.btaGameWorld.myAvatar,this.var_442);
         }
      }
      
      private method_695(): void
      {
         var var_1: any, var_68: any;

         (this.var_1.HotKeys_mc.Title_mc as any).x = this.var_1.HotKeys_mc.Title_mc.x * 0[9] + this.var_68[0].x * 0[1];
         (this.var_1.HotKeys_mc.Title_mc as any).y = this.var_1.HotKeys_mc.Title_mc.y * 0[9] + this.var_68[0].y * 0[1];
         if(this.var_1.HotKeys_mc.Title_mc.y < 400)
         {
            (this.var_1.HotKeys_mc.Up_mc as any).x = this.var_1.HotKeys_mc.Up_mc.x * 0[9] + this.var_68[1].x * 0[1];
            (this.var_1.HotKeys_mc.Up_mc as any).y = this.var_1.HotKeys_mc.Up_mc.y * 0[9] + this.var_68[1].y * 0[1];
         }
         if(this.var_1.HotKeys_mc.Up_mc.y < 400)
         {
            (this.var_1.HotKeys_mc.Down_mc as any).x = this.var_1.HotKeys_mc.Down_mc.x * 0[9] + this.var_68[2].x * 0[1];
            (this.var_1.HotKeys_mc.Down_mc as any).y = this.var_1.HotKeys_mc.Down_mc.y * 0[9] + this.var_68[2].y * 0[1];
         }
         if(this.var_1.HotKeys_mc.Down_mc.y < 400)
         {
            (this.var_1.HotKeys_mc.Left_mc as any).x = this.var_1.HotKeys_mc.Left_mc.x * 0[9] + this.var_68[3].x * 0[1];
            (this.var_1.HotKeys_mc.Left_mc as any).y = this.var_1.HotKeys_mc.Left_mc.y * 0[9] + this.var_68[3].y * 0[1];
         }
         if(this.var_1.HotKeys_mc.Left_mc.y < 400)
         {
            (this.var_1.HotKeys_mc.Right_mc as any).x = this.var_1.HotKeys_mc.Right_mc.x * 0[9] + this.var_68[4].x * 0[1];
            (this.var_1.HotKeys_mc.Right_mc as any).y = this.var_1.HotKeys_mc.Right_mc.y * 0[9] + this.var_68[4].y * 0[1];
         }
         if(this.var_1.HotKeys_mc.Right_mc.y < 400)
         {
            (this.var_1.HotKeys_mc.Paused_mc as any).x = this.var_1.HotKeys_mc.Paused_mc.x * 0[9] + this.var_68[5].x * 0[1];
            (this.var_1.HotKeys_mc.Paused_mc as any).y = this.var_1.HotKeys_mc.Paused_mc.y * 0[9] + this.var_68[5].y * 0[1];
         }
         if(this.var_1.HotKeys_mc.Paused_mc.y < 400)
         {
            (this.var_1.HotKeys_mc.btnBack_mc as any).x = this.var_1.HotKeys_mc.btnBack_mc.x * 0[9] + this.var_68[6].x * 0[1];
            (this.var_1.HotKeys_mc.btnBack_mc as any).y = this.var_1.HotKeys_mc.btnBack_mc.y * 0[9] + this.var_68[6].y * 0[1];
         }
      }
      
      private method_768(): void
      {
         var var_1: any;

         (this.var_1.HotKeys_mc.Title_mc as any).y = this.var_1.HotKeys_mc.Title_mc.y * 0[93] + this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.HotKeys_mc.btnBack_mc as any).y = this.var_1.HotKeys_mc.btnBack_mc.y * 0[93] + this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.HotKeys_mc.Up_mc as any).y = this.var_1.HotKeys_mc.Up_mc.y * 0[93] + this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.HotKeys_mc.Down_mc as any).y = this.var_1.HotKeys_mc.Down_mc.y * 0[93] + this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.HotKeys_mc.Left_mc as any).y = this.var_1.HotKeys_mc.Left_mc.y * 0[93] + this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.HotKeys_mc.Right_mc as any).y = this.var_1.HotKeys_mc.Right_mc.y * 0[93] + this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y * 0[07];
         (this.var_1.HotKeys_mc.Paused_mc as any).y = this.var_1.HotKeys_mc.Paused_mc.y * 0[93] + this.var_1.HotKeys_mc.ButtonSettingsOut_mc.y * 0[07];
      }
      
      private method_143(): void
      {
         var var_227: any, var_1: any;

         if(this.btaGameWorld.mRef.var_227 == 2)
         {
            this.var_1.Settings_mc.EfficientMode_mc.v1.gotoAndStop("on");
            this.var_1.Settings_mc.EfficientMode_mc.v1.selected = true;
            this.var_1.Settings_mc.EfficientMode_mc.v2.gotoAndStop("off");
            this.var_1.Settings_mc.EfficientMode_mc.v2.selected = false;
         }
         else
         {
            this.var_1.Settings_mc.EfficientMode_mc.v2.gotoAndStop("on");
            this.var_1.Settings_mc.EfficientMode_mc.v2.selected = true;
            this.var_1.Settings_mc.EfficientMode_mc.v1.gotoAndStop("off");
            this.var_1.Settings_mc.EfficientMode_mc.v1.selected = false;
         }
         if(this.btaGameWorld.mRef.mainFPS == this.btaGameWorld.mRef.gData.mainFPS1)
         {
            this.var_1.Settings_mc.FrameRate_mc.gs1.gotoAndStop(2);
            this.var_1.Settings_mc.FrameRate_mc.gs1.selected = true;
         }
         else
         {
            this.var_1.Settings_mc.FrameRate_mc.gs1.gotoAndStop(1);
            this.var_1.Settings_mc.FrameRate_mc.gs1.selected = false;
         }
         if(this.btaGameWorld.mRef.mainFPS == this.btaGameWorld.mRef.gData.mainFPS2)
         {
            this.var_1.Settings_mc.FrameRate_mc.gs2.gotoAndStop(2);
            this.var_1.Settings_mc.FrameRate_mc.gs2.selected = true;
         }
         else
         {
            this.var_1.Settings_mc.FrameRate_mc.gs2.gotoAndStop(1);
            this.var_1.Settings_mc.FrameRate_mc.gs2.selected = false;
         }
         if(this.btaGameWorld.mRef.mainFPS == this.btaGameWorld.mRef.gData.mainFPS3)
         {
            this.var_1.Settings_mc.FrameRate_mc.gs3.gotoAndStop(2);
            this.var_1.Settings_mc.FrameRate_mc.gs3.selected = true;
         }
         else
         {
            this.var_1.Settings_mc.FrameRate_mc.gs3.gotoAndStop(1);
            this.var_1.Settings_mc.FrameRate_mc.gs3.selected = false;
         }
         if(this.btaGameWorld.mRef.stage.quality == "LOW")
         {
            this.var_1.Settings_mc.Quality_mc.g1.gotoAndStop(2);
            this.var_1.Settings_mc.Quality_mc.g1.selected = true;
         }
         else
         {
            this.var_1.Settings_mc.Quality_mc.g1.gotoAndStop(1);
            this.var_1.Settings_mc.Quality_mc.g1.selected = false;
         }
         if(this.btaGameWorld.mRef.stage.quality == "MEDIUM")
         {
            this.var_1.Settings_mc.Quality_mc.g2.gotoAndStop(2);
            this.var_1.Settings_mc.Quality_mc.g2.selected = true;
         }
         else
         {
            this.var_1.Settings_mc.Quality_mc.g2.gotoAndStop(1);
            this.var_1.Settings_mc.Quality_mc.g2.selected = false;
         }
         if(this.btaGameWorld.mRef.stage.quality == "HIGH")
         {
            this.var_1.Settings_mc.Quality_mc.g3.gotoAndStop(2);
            this.var_1.Settings_mc.Quality_mc.g3.selected = true;
         }
         else
         {
            this.var_1.Settings_mc.Quality_mc.g3.gotoAndStop(1);
            this.var_1.Settings_mc.Quality_mc.g3.selected = false;
         }
         if(this.btaGameWorld.mRef.var_220 == true)
         {
            this.var_1.Settings_mc.Music_mc.m2.gotoAndStop("on");
            this.var_1.Settings_mc.Music_mc.m2.selected = true;
            this.var_1.Settings_mc.Music_mc.m1.gotoAndStop("off");
            this.var_1.Settings_mc.Music_mc.m1.selected = false;
         }
         else
         {
            this.var_1.Settings_mc.Music_mc.m1.gotoAndStop("on");
            this.var_1.Settings_mc.Music_mc.m1.selected = true;
            this.var_1.Settings_mc.Music_mc.m2.gotoAndStop("off");
            this.var_1.Settings_mc.Music_mc.m2.selected = false;
         }
         if(this.btaGameWorld.mRef.var_214 == true)
         {
            this.var_1.Settings_mc.Sounds_mc.s2.gotoAndStop("on");
            this.var_1.Settings_mc.Sounds_mc.s2.selected = true;
            this.var_1.Settings_mc.Sounds_mc.s1.gotoAndStop("off");
            this.var_1.Settings_mc.Sounds_mc.s1.selected = false;
         }
         else
         {
            this.var_1.Settings_mc.Sounds_mc.s1.gotoAndStop("on");
            this.var_1.Settings_mc.Sounds_mc.s1.selected = true;
            this.var_1.Settings_mc.Sounds_mc.s2.gotoAndStop("off");
            this.var_1.Settings_mc.Sounds_mc.s2.selected = false;
         }
         if(this.btaGameWorld.mRef.blnScreenShake == true)
         {
            this.var_1.Settings_mc.ScreenShake_mc.v2.gotoAndStop("on");
            this.var_1.Settings_mc.ScreenShake_mc.v2.selected = true;
            this.var_1.Settings_mc.ScreenShake_mc.v1.gotoAndStop("off");
            this.var_1.Settings_mc.ScreenShake_mc.v1.selected = false;
         }
         else
         {
            this.var_1.Settings_mc.ScreenShake_mc.v1.gotoAndStop("on");
            this.var_1.Settings_mc.ScreenShake_mc.v1.selected = true;
            this.var_1.Settings_mc.ScreenShake_mc.v2.gotoAndStop("off");
            this.var_1.Settings_mc.ScreenShake_mc.v2.selected = false;
         }
      }
      
      private method_524(): void
      {
         var var_315: any, var_1: any, var_442: any;

         this.var_315.method_4(this.var_1.TankInfo_mc.btnBack_mc,true);
         this.var_442 = this.btaGameWorld.getChildIndex(this.btaGameWorld.myAvatar);
         this.var_1.TankInfo_mc.TankImage_mc.addChild(this.btaGameWorld.myAvatar);
         var _loc1_: TankData = new (TankData as any)();
         _loc1_.ImportTankData(this.btaGameWorld.mRef.objCurrentPlayer.currentAvatar);
         var _loc2_: any = this.method_496(_loc1_.arrTankDetails);
         this.var_1.TankInfo_mc.PrimaryWeapons_mc.txtPrimaryWeapons_txt.text = _loc2_.strPrimary;
         this.var_1.TankInfo_mc.SecondaryWeapons_mc.txtSecondaryWeapons_txt.text = _loc2_.strSecondary;
         this.var_1.TankInfo_mc.ClassHealth_mc.txtClass_txt.text = _loc1_.numClass.toString();
         this.var_1.TankInfo_mc.ClassHealth_mc.txtSpeed_txt.text = this.objGameObjectLibrary.arrClassData[_loc1_.numClass - 1 as any].intSpeed;
         this.var_1.TankInfo_mc.ClassHealth_mc.txtArmor_txt.text = "" + this.objGameObjectLibrary.arrClassData[_loc1_.numClass - 1 as any].intArmor * 100 + "%";
      }
      
      private method_604(): void
      {
         var var_1: any;

         (this.var_1.TankInfo_mc.Title_mc as any).y = this.var_1.TankInfo_mc.Title_mc.y * 0[93] + this.var_1.TankInfo_mc.ButtonTopOut_mc.y * 0[07];
         (this.var_1.TankInfo_mc.ClassHealth_mc as any).y = this.var_1.TankInfo_mc.ClassHealth_mc.y * 0[93] + this.var_1.TankInfo_mc.ButtonTopOut_mc.y * 0[07];
         (this.var_1.TankInfo_mc.TankImage_mc as any).x = this.var_1.TankInfo_mc.TankImage_mc.x * 0[93] + this.var_1.TankInfo_mc.ButtonTankOut_mc.x * 0[07];
         (this.var_1.TankInfo_mc.PrimaryWeapons_mc as any).x = this.var_1.TankInfo_mc.PrimaryWeapons_mc.x * 0[93] + this.var_1.TankInfo_mc.ButtonLeftOut_mc.x * 0[07];
         (this.var_1.TankInfo_mc.SecondaryWeapons_mc as any).x = this.var_1.TankInfo_mc.SecondaryWeapons_mc.x * 0[93] + this.var_1.TankInfo_mc.ButtonLeftOut_mc.x * 0[07];
         (this.var_1.TankInfo_mc.btnBack_mc as any).x = this.var_1.TankInfo_mc.btnBack_mc.x * 0[93] + this.var_1.TankInfo_mc.ButtonLeftOut_mc.x * 0[07];
      }
      
      private BtnKeyboardUp(param1: any): void
      {
         var var_1: any, var_318: any;

         param1.target.OverMe = false;
         this.var_1.rollover_txt.text = "";
         if(param1.target == this.var_1.HotKeys_mc.btnBack_mc)
         {
            this.var_318.method_10();
            this.method_595();
            this.method_309();
            this.intState = 9;
            this.btaGameWorld.const_2.method_111(this.btaGameWorld.mRef.gData.hot5,this.btaGameWorld.PauseMenuSetup);
         }
      }
      
      private method_595(): void
      {
         this.btaGameWorld.mRef.gData.hot1 = this.objHotkeyManager.method_65("Up");
         this.btaGameWorld.mRef.gData.hot2 = this.objHotkeyManager.method_65("Down");
         this.btaGameWorld.mRef.gData.hot3 = this.objHotkeyManager.method_65("Left");
         this.btaGameWorld.mRef.gData.hot4 = this.objHotkeyManager.method_65("Right");
         this.btaGameWorld.mRef.gData.hot5 = this.objHotkeyManager.method_65("Pause");
         this.objHotkeyManager.CleanUp();
         this.btaGameWorld.objAvatarInterface.UpdateAvatarHotkeys();
      }
      
      private method_309(): void
      {
         var var_1: any;

         this.settingsButtonManager.method_4(this.var_1.Settings_mc.btnBack_mc,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.btnHotkeys_mc,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.FrameRate_mc.gs1,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.FrameRate_mc.gs2,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.FrameRate_mc.gs3,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.Quality_mc.g1,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.Quality_mc.g2,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.Quality_mc.g3,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.Music_mc.m1,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.Music_mc.m2,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.Sounds_mc.s1,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.Sounds_mc.s2,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.ScreenShake_mc.v1,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.ScreenShake_mc.v2,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.EfficientMode_mc.v1,true);
         this.settingsButtonManager.method_4(this.var_1.Settings_mc.EfficientMode_mc.v2,true);
         this.method_143();
      }
      
      public Destroy(): void
      {
         var var_1: any, var_442: any;

         var _loc1_: class_51 = null as any;
         if(this.var_1.TankInfo_mc.TankImage_mc.contains(this.btaGameWorld.myAvatar))
         {
            this.btaGameWorld.addChildAt(this.btaGameWorld.myAvatar,this.var_442);
         }
         this.var_8.method_10();
         this.settingsButtonManager.method_10();
         this.arenaProgressButtonManager.method_10();
         this.var_318.method_10();
         this.var_315.method_10();
         if(this.objHotkeyManager != null)
         {
            this.objHotkeyManager.CleanUp();
         }
         this.var_123.Destroy();
         this.var_123 = null as any;
         this.btaGameWorld.mRef.removeChild(this.var_1);
         this.var_1 = null as any;
         while(numChildren > 0)
         {
            this.removeChildAt(0);
         }
         this.var_439 = null as any;
         while(this.var_204.length > 0)
         {
            _loc1_ = this.var_204.pop();
            _loc1_.Destroy();
            _loc1_ = null as any;
         }
         this.var_204 = null as any;
         if(this.var_63 != null)
         {
            this.var_63.length = 0;
         }
         if(this.var_69 != null)
         {
            this.var_69.length = 0;
         }
         if(this.var_16 != null)
         {
            this.var_16.length = 0;
         }
         if(this.arrBubbleFields != null)
         {
            this.arrBubbleFields.length = 0;
         }
         if(this.var_65 != null)
         {
            this.var_65.length = 0;
         }
         if(this.var_68 != null)
         {
            this.var_68.length = 0;
         }
         if(this.var_45 != null)
         {
            this.var_45.length = 0;
         }
         if(this.var_114 != null)
         {
            this.var_114.length = 0;
         }
         this.var_63 = null as any;
         this.var_69 = null as any;
         this.var_16 = null as any;
         this.arrBubbleFields = null as any;
         this.var_65 = null as any;
         this.var_68 = null as any;
         this.var_45 = null as any;
         this.var_114 = null as any;
      }
      
      public method_154(param1: boolean): void
      {
         var var_227: any;

         if(param1 == true)
         {
            this.btaGameWorld.mRef.method_69(false);
            this.btaGameWorld.mRef.method_70(false);
            stage.quality = StageQuality.LOW;
            stage.frameRate = 90;
            this.btaGameWorld.mRef.objBackgroundParticles.method_96(true);
            this.btaGameWorld.mRef.objBackgroundParticles2.method_96(true);
            this.btaGameWorld.mRef.sEffects.method_257();
            this.btaGameWorld.mRef.blnScreenShake = false;
            this.btaGameWorld.mRef.var_227 = 2;
         }
         else
         {
            this.btaGameWorld.mRef.method_69(true);
            this.btaGameWorld.mRef.method_70(true);
            stage.quality = StageQuality.HIGH;
            stage.frameRate = this.btaGameWorld.mRef.gData.mainFPS2;
            this.btaGameWorld.mRef.objBackgroundParticles.method_55(true);
            this.btaGameWorld.mRef.objBackgroundParticles2.method_55(true);
            this.btaGameWorld.mRef.sEffects.method_288();
            this.btaGameWorld.mRef.blnScreenShake = true;
            this.btaGameWorld.mRef.var_227 = 1;
         }
         this.btaGameWorld.mRef.SaveGameData();
      }
      
      private method_762(): void
      {
         var var_1: any, var_114: any;

         (this.var_1.TankInfo_mc.Title_mc as any).y = this.var_1.TankInfo_mc.Title_mc.y * 0[9] + this.var_114[0].y * 0[1];
         if(this.var_1.TankInfo_mc.Title_mc.y > 10)
         {
            (this.var_1.TankInfo_mc.ClassHealth_mc as any).y = this.var_1.TankInfo_mc.ClassHealth_mc.y * 0[9] + this.var_114[1].y * 0[1];
         }
         if(this.var_1.TankInfo_mc.ClassHealth_mc.y > 10)
         {
            (this.var_1.TankInfo_mc.TankImage_mc as any).x = this.var_1.TankInfo_mc.TankImage_mc.x * 0[9] + this.var_114[2].x * 0[1];
         }
         if(this.var_1.TankInfo_mc.TankImage_mc.x < 500)
         {
            (this.var_1.TankInfo_mc.PrimaryWeapons_mc as any).x = this.var_1.TankInfo_mc.PrimaryWeapons_mc.x * 0[9] + this.var_114[3].x * 0[1];
         }
         if(this.var_1.TankInfo_mc.PrimaryWeapons_mc.x > 30)
         {
            (this.var_1.TankInfo_mc.SecondaryWeapons_mc as any).x = this.var_1.TankInfo_mc.SecondaryWeapons_mc.x * 0[9] + this.var_114[4].x * 0[1];
         }
         if(this.var_1.TankInfo_mc.SecondaryWeapons_mc.x > 30)
         {
            (this.var_1.TankInfo_mc.btnBack_mc as any).x = this.var_1.TankInfo_mc.btnBack_mc.x * 0[9] + this.var_114[5].x * 0[1];
         }
      }
      
      private method_153(): void
      {
         var var_274: any, var_1: any;

         if(this.var_274)
         {
            if(this.var_1.alpha > 0)
            {
               this.var_1.alpha -= 0[05];
            }
         }
         else if(this.var_1.Paused_mc.alpha > 0)
         {
            this.var_1.Paused_mc.alpha -= 0[1];
         }
         (this.var_1.btnPlay_mc as any).x = this.var_1.btnPlay_mc.x * 0[93] + this.var_1.Button1Out_mc.x * 0[07];
         (this.var_1.btnPlay_mc as any).y = this.var_1.btnPlay_mc.y * 0[93] + this.var_1.Button1Out_mc.y * 0[07];
         (this.var_1.btnSettings_mc as any).x = this.var_1.btnSettings_mc.x * 0[93] + this.var_1.Button2Out_mc.x * 0[07];
         (this.var_1.btnSettings_mc as any).y = this.var_1.btnSettings_mc.y * 0[93] + this.var_1.Button2Out_mc.y * 0[07];
         (this.var_1.btn3_mc as any).x = this.var_1.btn3_mc.x * 0[93] + this.var_1.Button3Out_mc.x * 0[07];
         (this.var_1.btn3_mc as any).y = this.var_1.btn3_mc.y * 0[93] + this.var_1.Button3Out_mc.y * 0[07];
         (this.var_1.btn4_mc as any).x = this.var_1.btn4_mc.x * 0[93] + this.var_1.Button4Out_mc.x * 0[07];
         (this.var_1.btn4_mc as any).y = this.var_1.btn4_mc.y * 0[93] + this.var_1.Button4Out_mc.y * 0[07];
         (this.var_1.btn5_mc as any).x = this.var_1.btn5_mc.x * 0[93] + this.var_1.Button5Out_mc.x * 0[07];
         (this.var_1.btn5_mc as any).y = this.var_1.btn5_mc.y * 0[93] + this.var_1.Button5Out_mc.y * 0[07];
         (this.var_1.btnPlayMoreGames_mc as any).x = this.var_1.btnPlayMoreGames_mc.x * 0[93] + this.var_1.Button6Out_mc.x * 0[07];
         (this.var_1.btnPlayMoreGames_mc as any).y = this.var_1.btnPlayMoreGames_mc.y * 0[93] + this.var_1.Button6Out_mc.y * 0[07];
         (this.var_1.flag_mc as any).x = this.var_1.flag_mc.x * 0[93] + this.var_1.TankInfo_mc.ButtonTopOut_mc.x * 0[07];
         (this.var_1.flag_mc as any).y = this.var_1.flag_mc.y * 0[93] + this.var_1.TankInfo_mc.ButtonTopOut_mc.y * 0[07];
      }
      
      private method_633(): void
      {
         var var_318: any, var_1: any;

         this.var_318.method_4(this.var_1.HotKeys_mc.btnBack_mc,true);
         this.objHotkeyManager = new (class_4 as any)();
         this.objHotkeyManager.method_369(this.btaGameWorld.mRef.stage);
         this.btaGameWorld.const_2.method_389(this.btaGameWorld.mRef.gData.hot5);
         this.objHotkeyManager.method_72("Up",this.var_1.HotKeys_mc.Up_mc.up_mc,this.var_1.HotKeys_mc.Up_mc.up_txt,this.btaGameWorld.mRef.gData.hot1);
         this.objHotkeyManager.method_72("Down",this.var_1.HotKeys_mc.Down_mc.down_mc,this.var_1.HotKeys_mc.Down_mc.down_txt,this.btaGameWorld.mRef.gData.hot2);
         this.objHotkeyManager.method_72("Left",this.var_1.HotKeys_mc.Left_mc.left_mc,this.var_1.HotKeys_mc.Left_mc.left_txt,this.btaGameWorld.mRef.gData.hot3);
         this.objHotkeyManager.method_72("Right",this.var_1.HotKeys_mc.Right_mc.right_mc,this.var_1.HotKeys_mc.Right_mc.right_txt,this.btaGameWorld.mRef.gData.hot4);
         this.objHotkeyManager.method_72("Pause",this.var_1.HotKeys_mc.Paused_mc.pause_mc,this.var_1.HotKeys_mc.Paused_mc.pause_txt,this.btaGameWorld.mRef.gData.hot5);
      }
      
      public method_107(param1: any): void
      {
         param1.target.gotoAndStop(2);
         param1.target.OverMe = true;
      }
      
      private method_648(): void
      {
         var var_71: any, var_1: any, var_69: any, var_6: any, var_63: any;

         if(this.btaGameWorld.var_71 != -1)
         {
            (this.var_1.ArenaProgress_mc.Arrow_mc as any).x = this.var_69[this.btaGameWorld.var_71 + 4 - (Math.floor(this.btaGameWorld.objCurrentArenaData.var_6.length / 2) - 1) as any].x;
            var _temp_3: any = this.var_63[this.btaGameWorld.var_71 as any];
            var _temp_2: any = this.var_63[this.btaGameWorld.var_71 as any];
            var _temp_1: any = 40;
            40;
            (_temp_2 as any).height = _temp_1;
            (_temp_3 as any).width = 40;
            this.var_1.BlankArena_mc.active = false;
         }
         else
         {
            (this.var_1.ArenaProgress_mc.Arrow_mc as any).alpha = 0;
            this.var_1.BlankArena_mc.active = true;
         }
         this.var_1.ArenaProgress_mc.PercentComplete_mc.PercentCollected_mc.gotoAndStop(Math.floor(this.btaGameWorld.var_206 / this.btaGameWorld.objCurrentArenaData.var_6.length * 100) + 1);
         this.var_1.ArenaProgress_mc.PercentComplete_mc.txtPercentComplete_txt.text = "" + Math.floor(this.btaGameWorld.var_206 / this.btaGameWorld.objCurrentArenaData.var_6.length * 100) + "%";
         this.var_1.ArenaProgress_mc.BubblesCollected_mc.BubblesCollected_mc.gotoAndStop(this.btaGameWorld.var_277 / this.btaGameWorld.var_259);
         this.var_1.ArenaProgress_mc.BubblesCollected_mc.txtBubblesCollected_txt.text = "" + this.btaGameWorld.var_277;
         this.var_1.ArenaProgress_mc.EnemiesKilled_mc.EnemiesKilled_mc.gotoAndStop(1 + Math.floor(100 * (this.btaGameWorld.var_259 / this.btaGameWorld.objCurrentArenaData.var_299)));
         this.var_1.ArenaProgress_mc.EnemiesKilled_mc.txtEnemiesKilled_txt.text = "" + this.btaGameWorld.var_259 + " / " + this.btaGameWorld.objCurrentArenaData.var_299;
         this.arenaProgressButtonManager.method_4(this.var_1.ArenaProgress_mc.btnBack_mc,true);
      }
      
      private method_702(param1: any): void
      {
         var var_1: any;

         param1.target.OverMe = false;
         this.var_1.rollover_txt.text = "";
         if(param1.target == this.var_1.ArenaProgress_mc.btnBack_mc)
         {
            this.arenaProgressButtonManager.method_10();
            this.method_165();
            this.intState = 5;
         }
      }
   }
