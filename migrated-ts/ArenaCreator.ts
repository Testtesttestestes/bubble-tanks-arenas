// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { ArenaCreatorBubblefield } from './ArenaCreatorBubblefield';
import { ArenaCreatorBubblefieldFlash } from './ArenaCreatorBubblefieldFlash';
import { ArenaCreatorTutorial } from './ArenaCreatorTutorial';
import { ArenaData } from './ArenaData';
import { class_3 } from './class_3';
import { class_5 } from './class_5';
import { class_51 } from './class_51';
import { class_77 } from './class_77';
import { class_79 } from './class_79';
import { class_96 } from './class_96';
import { ShareArena } from './ShareArena';
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
export class ArenaCreator extends MovieClip{
  [key: string]: any;
      
      public btnDelete1_mc!: MovieClip & Record<string, any>;
      public currentArena!: ArenaData;
      private var_117!: class_96;
      public btnQuickTank10_mc!: MovieClip & Record<string, any>;
      public txtNumber2_mc!: MovieClip & Record<string, any>;
      public btnQuickTank3_mc!: MovieClip & Record<string, any>;
      private var_8!: class_3;
      public txtTank1_txt!: TextField;
      public btnTank2_mc!: MovieClip & Record<string, any>;
      public txtTank3_txt!: TextField;
      public txtButtonRollOverSetting_txt!: TextField;
      public btnDelete4_mc!: MovieClip & Record<string, any>;
      private var_41!: any;
      private var_16!: any;
      public btnMinus2_mc!: MovieClip & Record<string, any>;
      private var_103!: any;
      public btnLeftArrow_mc!: MovieClip & Record<string, any>;
      public btnQuickTank6_mc!: MovieClip & Record<string, any>;
      public btnAdd3_mc!: MovieClip & Record<string, any>;
      private var_437!: Sprite;
      private var_209!: class_5;
      private var_10!: any;
      public btnMoveBblFieldRight_mc!: MovieClip & Record<string, any>;
      private objTutorialButtonControl!: class_3;
      public btnQuickTank1_mc!: MovieClip & Record<string, any>;
      private funCallBackButton!: Function;
      public btnDelete2_mc!: MovieClip & Record<string, any>;
      private arrBubbleFields!: any;
      public btnQuickTank9_mc!: MovieClip & Record<string, any>;
      public complexity_mc!: MovieClip & Record<string, any>;
      private var_531!: boolean;
      public txtNumber3_mc!: MovieClip & Record<string, any>;
      public btnQuickTank4_mc!: MovieClip & Record<string, any>;
      private var_77!: any;
      public btnSubmitArena_mc!: MovieClip & Record<string, any>;
      private var_192!: boolean;
      public btnTank3_mc!: MovieClip & Record<string, any>;
      public btnAdd1_mc!: MovieClip & Record<string, any>;
      private var_27!: any;
      public btnMinus3_mc!: MovieClip & Record<string, any>;
      public btnQuickTank7_mc!: MovieClip & Record<string, any>;
      public var_19!: MovieClip & Record<string, any>;
      public ComplexityRollOver_mc!: MovieClip & Record<string, any>;
      public txtTank2_txt!: TextField;
      public txtTank4_txt!: TextField;
      public btnAdd4_mc!: MovieClip & Record<string, any>;
      public btnMoveBblFieldLeft_mc!: MovieClip & Record<string, any>;
      private ShareArena_mc!: ShareArena;
      public txtNumber1_mc!: MovieClip & Record<string, any>;
      public btnQuickTank2_mc!: MovieClip & Record<string, any>;
      public btnDelete3_mc!: MovieClip & Record<string, any>;
      public btnTank1_mc!: MovieClip & Record<string, any>;
      public btnRightArrow_mc!: MovieClip & Record<string, any>;
      public btnMinus1_mc!: MovieClip & Record<string, any>;
      public txtNumber4_mc!: MovieClip & Record<string, any>;
      public btnQuickTank5_mc!: MovieClip & Record<string, any>;
      public BubbleFieldLocations_mc!: MovieClip & Record<string, any>;
      public btnTank4_mc!: MovieClip & Record<string, any>;
      public btnAdd2_mc!: MovieClip & Record<string, any>;
      private refMain!: class_79;
      public var_5!: number;
      public btnBack_mc!: MovieClip & Record<string, any>;
      public btnMinus4_mc!: MovieClip & Record<string, any>;
      public btnQuickTank8_mc!: MovieClip & Record<string, any>;
      constructor(param1: boolean = false, param2: class_79 = null, param3: Function = null){
    var var_19: any, var_192: any, var_531: any, var_16: any, var_27: any, var_103: any, var_41: any, var_77: any, var_10: any, var_437: any, var_209: any, var_5: any;

    // @ts-ignore
    super();
         var _loc4_: ArenaCreatorBubblefield = null as any;
         var _loc5_: number = 0;
         this.addFrameScript(0,this.frame1);
         if(param1 == true)
         {
            this.var_19 = null as any;
            this.refMain = param2;
            this.funCallBackButton = param3;
            this.var_192 = false;
            this.var_531 = false;
            this.var_16 = new (Array as any)();
            this.arrBubbleFields = new (Array as any)();
            this.var_27 = new (Array as any)();
            this.var_103 = new (Array as any)();
            this.var_41 = new (Array as any)();
            this.var_77 = new (Array as any)();
            this.var_10 = new (Array as any)();
            this.var_437 = new (Sprite as any)();
            this.var_209 = new (class_5 as any)(this.refMain);
            this.var_209.method_119("mainEffects",this.var_437);
            this.var_5 = 0;
            this.var_16.push(new (Point as any)(this.BubbleFieldLocations_mc.BubbleFieldLocationN5_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocationN5_mc.y) as any);
            this.var_16.push(new (Point as any)(this.BubbleFieldLocations_mc.BubbleFieldLocationN4_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocationN4_mc.y) as any);
            this.var_16.push(new (Point as any)(this.BubbleFieldLocations_mc.BubbleFieldLocationN3_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocationN3_mc.y) as any);
            this.var_16.push(new (Point as any)(this.BubbleFieldLocations_mc.BubbleFieldLocationN2_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocationN2_mc.y) as any);
            this.var_16.push(new (Point as any)(this.BubbleFieldLocations_mc.BubbleFieldLocationN1_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocationN1_mc.y) as any);
            this.var_16.push(new (Point as any)(this.BubbleFieldLocations_mc.BubbleFieldLocation0_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocation0_mc.y) as any);
            this.var_16.push(new (Point as any)(this.BubbleFieldLocations_mc.BubbleFieldLocation1_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocation1_mc.y) as any);
            this.var_16.push(new (Point as any)(this.BubbleFieldLocations_mc.BubbleFieldLocation2_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocation2_mc.y) as any);
            this.var_16.push(new (Point as any)(this.BubbleFieldLocations_mc.BubbleFieldLocation3_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocation3_mc.y) as any);
            this.var_16.push(new (Point as any)(this.BubbleFieldLocations_mc.BubbleFieldLocation4_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocation4_mc.y) as any);
            this.var_16.push(new (Point as any)(this.BubbleFieldLocations_mc.BubbleFieldLocation5_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocation5_mc.y) as any);
            this.var_27.push(this.btnQuickTank1_mc as any);
            this.var_27.push(this.btnQuickTank2_mc as any);
            this.var_27.push(this.btnQuickTank3_mc as any);
            this.var_27.push(this.btnQuickTank4_mc as any);
            this.var_27.push(this.btnQuickTank5_mc as any);
            this.var_27.push(this.btnQuickTank6_mc as any);
            this.var_27.push(this.btnQuickTank7_mc as any);
            this.var_27.push(this.btnQuickTank8_mc as any);
            this.var_27.push(this.btnQuickTank9_mc as any);
            this.var_27.push(this.btnQuickTank10_mc as any);
            this.var_103.push(this.txtNumber1_mc as any);
            this.var_103.push(this.txtNumber2_mc as any);
            this.var_103.push(this.txtNumber3_mc as any);
            this.var_103.push(this.txtNumber4_mc as any);
            _loc5_ = 0;
            _loc5_ = 0;
            while(_loc5_ < this.var_27.length)
            {
               this.var_27[_loc5_ as any].(line_mc as any).alpha = 0;
               this.var_27[_loc5_ as any].empty = true;
               this.var_27[_loc5_ as any].ID = -1;
               this.var_27[_loc5_ as any].StrName = "guy";
               _loc5_++;
            }
            _loc5_ = 0;
            while(_loc5_ < this.var_103.length)
            {
               this.var_103[_loc5_ as any].alpha = 0;
               _loc5_++;
            }
            _loc4_ = new (ArenaCreatorBubblefield as any)();
            this.addChild(_loc4_);
            this.arrBubbleFields.push(_loc4_ as any);
            this.arrBubbleFields[0].txtBubbleFieldNum_txt.text = "1";
            this.arrBubbleFields[0].x = this.var_16[5].x;
            this.arrBubbleFields[0].y = this.var_16[5].y;
            this.arrBubbleFields[0].tweenX = this.arrBubbleFields[0].x;
            this.arrBubbleFields[0].tweenY = this.arrBubbleFields[0].y;
            this.currentArena = new (ArenaData as any)();
            this.var_8 = new (class_3 as any)();
            this.var_8.Setup(null,this.method_107,this.method_112);
            _loc5_ = 0;
            while(_loc5_ < this.var_27.length)
            {
               this.var_8.method_4(this.var_27[_loc5_ as any],true,this.method_628,this.method_484,this.method_733);
               _loc5_++;
            }
            this.var_8.method_4(this.btnRightArrow_mc,true,this.method_293);
            this.var_8.method_4(this.btnLeftArrow_mc,true,this.method_465);
            this.var_8.method_4(this.btnMoveBblFieldLeft_mc,true,this.MoveCurrentBubblefieldLeft);
            this.var_8.method_4(this.btnMoveBblFieldRight_mc,true,this.MoveCurrentBubblefieldRight);
            this.var_8.method_4(this.btnSubmitArena_mc,true,this.method_679);
            this.var_8.method_4(this.btnBack_mc,true,this.CallCallbackFunction);
            this.btnTank1_mc.numOldX = this.btnTank1_mc.x;
            this.btnTank2_mc.numOldX = this.btnTank2_mc.x;
            (this.btnTank2_mc as any).x = 275;
            this.btnTank3_mc.numOldX = this.btnTank3_mc.x;
            (this.btnTank3_mc as any).x = 275;
            this.btnTank4_mc.numOldX = this.btnTank4_mc.x;
            (this.btnTank4_mc as any).x = 275;
            this.txtButtonRollOverSetting_txt.text = "";
            (this.txtButtonRollOverSetting_txt as any).alpha = 0[35];
            this.method_325();
            this.addChild(this.var_437);
            (this.complexity_mc as any).scaleX = 0;
            (this.ComplexityRollOver_mc as any).alpha = 0;
            this.var_8.method_4(this.ComplexityRollOver_mc,true,this.method_613);
            this.method_669();
         }
      }
      
      private AddTankSelectButton(param1: MovieClip): void
      {
         var var_8: any;

         this.var_8.method_4(param1,true,this.method_436);
         param1.txtButton_txt.text = "Add Enemy Tank";
         (param1 as any).x = 275;
      }
      
      private UpdateArenaBubbles(): any
      {
         var _loc1_: any = undefined;
         var _loc3_: ArenaCreatorBubblefield = null as any;
         var _loc2_: number = this.arrBubbleFields.length;
         var _loc4_: number = 0;
         _loc4_ = 0;
         while(_loc4_ < _loc2_)
         {
            if(this.contains(this.arrBubbleFields[0]))
            {
               this.removeChild(this.arrBubbleFields[0]);
            }
            _loc1_ = this.arrBubbleFields.shift();
            _loc1_ = null as any;
            _loc4_++;
         }
         this.arrBubbleFields.length = 0;
         _loc4_ = 0;
         while(_loc4_ < this.currentArena.var_6.length)
         {
            _loc3_ = new (ArenaCreatorBubblefield as any)();
            this.addChild(_loc3_);
            this.arrBubbleFields.push(_loc3_ as any);
            this.arrBubbleFields[_loc4_ as any].txtBubbleFieldNum_txt.text = int(_loc4_ + 1).toString();
            if(_loc4_ + 5 < this.var_16.length - 1)
            {
               this.arrBubbleFields[_loc4_ as any].x = this.var_16[_loc4_ + 5 as any].x;
               this.arrBubbleFields[_loc4_ as any].y = this.var_16[_loc4_ + 5 as any].y;
            }
            else
            {
               this.arrBubbleFields[_loc4_ as any].x = this.var_16[this.var_16.length - 1 as any].x;
               this.arrBubbleFields[_loc4_ as any].y = this.var_16[this.var_16.length - 1 as any].y;
            }
            this.arrBubbleFields[_loc4_ as any].tweenX = this.arrBubbleFields[_loc4_ as any].x;
            this.arrBubbleFields[_loc4_ as any].tweenY = this.arrBubbleFields[_loc4_ as any].y;
            if(this.var_5 == _loc4_)
            {
               this.arrBubbleFields[_loc4_ as any].height = 91;
               this.arrBubbleFields[_loc4_ as any].width = 91;
            }
            else
            {
               this.arrBubbleFields[_loc4_ as any].height = 37;
               this.arrBubbleFields[_loc4_ as any].width = 37;
            }
            _loc4_++;
         }
      }
      
      public method_51(param1: any): void
      {
         var _loc4_: number = 0;
         var _loc2_: TextField = (param1.target as unknown as TextField);
         var _loc3_: RegExp = /[^a-zA-Z0-9 _\-']/;
         if(param1.text.search(_loc3_) != -1)
         {
            param1.preventDefault();
            _loc2_.replaceText(_loc2_.caretIndex,_loc2_.caretIndex,"");
            _loc4_ = _loc2_.caretIndex + param1.text.length;
            _loc2_.setSelection(_loc4_,_loc4_);
         }
      }
      
      private UpdateComplexityBar(): any
      {
         var var_6: any, var_5: any;

         var _loc1_: number = 0;
         var _loc2_: number = 0;
         while(_loc2_ < this.currentArena.var_6[this.var_5 as any].arrEnemies.length)
         {
            _loc1_ += 5;
            _loc1_ += this.refMain.RetrieveTankDataFromID(this.currentArena.var_6[this.var_5 as any].arrEnemies[_loc2_ as any].ID).numBubbles * this.currentArena.var_6[this.var_5 as any].arrEnemies[_loc2_ as any].number;
            _loc2_++;
         }
         if(_loc1_ >= 200)
         {
            _loc1_ = 200;
            this.var_192 = true;
         }
         else
         {
            this.var_192 = false;
         }
         (this.complexity_mc as any).scaleX = _loc1_ / 200;
      }
      
      private method_661(param1: any): void
      {
         param1.target.scaleX += 0[1];
         param1.target.scaleY += 0[1];
         this.txtButtonRollOverSetting_txt.text = "Click the bubble field to switch to that one";
      }
      
      private method_436(param1: any): void
      {
         var var_10: any, var_192: any;

         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.var_8.method_10();
         this.refMain.method_634();
      }
      
      private method_679(param1: any): any
      {
         if(this.currentArena.method_351(0).length == 0)
         {
            this.txtButtonRollOverSetting_txt.text = "You have to have an enemy to submit";
            return;
         }
         this.ShareArena_mc = new (ShareArena as any)();
         this.addChild(this.ShareArena_mc);
         (this.ShareArena_mc as any).x = 550 / 2;
         (this.ShareArena_mc as any).y = 450 / 2;
         (this.ShareArena_mc as any).alpha = 0;
         this.ShareArena_mc.gotoAndStop(5);
         this.ShareArena_mc.mouseChildren = true;
         this.ShareArena_mc.mouseEnabled = true;
         this.ShareArena_mc.nextAlpha = 1;
         this.ShareArena_mc.blnRemoveMe = false;
         this.method_113(this.ShareArena_mc);
         this.var_8.method_4(this.ShareArena_mc.btnServer_mc,true,this.SaveToServerAuthorName);
         this.var_8.method_4(this.ShareArena_mc.btnLocal_mc,true,this.SaveToLocalAuthorName);
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_564);
      }
      
      private AddToTank3(param1: any): void
      {
         var var_10: any, var_192: any;

         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.currentArena.method_66(this.var_5,this.currentArena.var_6[this.var_5 as any].arrEnemies[2].ID);
         this.UpdateEnemyButtons();
      }
      
      private ConfirmSubmitArena(param1: any): any
      {
         var var_8: any, var_275: any;

         this.ShareArena_mc.author_txt.removeEventListener("focusin", this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.removeEventListener("focusin", this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.removeEventListener("textInput", this.method_51.bind(this));
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
         this.var_8.method_7(this.ShareArena_mc.btnContinue_mc);
         this.currentArena.var_275 = this.ShareArena_mc.author_txt.text;
         this.currentArena.strName = this.ShareArena_mc.tank_txt.text;
         this.currentArena.strID = "H" + this.refMain.intArenaCountMaster.toString();
         this.ShareArena_mc.gotoAndStop(7);
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_541);
         this.var_8.method_4(this.ShareArena_mc.agree_btn,true,this.method_516);
      }
      
      private method_122(param1: TankData, param2: TankData): boolean
      {
         if(param1.arrTankDetails.length != param2.arrTankDetails.length)
         {
            return false;
         }
         if(param1.strAuthorName != param2.strAuthorName)
         {
            return false;
         }
         if(param1.strTankName != param2.strTankName)
         {
            return false;
         }
         var _loc3_: number = param1.arrTankDetails.length;
         var _loc4_: number = 0;
         while(_loc4_ < _loc3_)
         {
            if(param1.arrTankDetails[_loc4_ as any].name != param2.arrTankDetails[_loc4_ as any].name)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_ as any].type != param2.arrTankDetails[_loc4_ as any].type)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_ as any].twin != param2.arrTankDetails[_loc4_ as any].twin)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_ as any].x != param2.arrTankDetails[_loc4_ as any].x)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_ as any].y != param2.arrTankDetails[_loc4_ as any].y)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_ as any].rotation != param2.arrTankDetails[_loc4_ as any].rotation)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_ as any].scale != param2.arrTankDetails[_loc4_ as any].scale)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_ as any].radius != param2.arrTankDetails[_loc4_ as any].radius)
            {
               return false;
            }
            _loc4_++;
         }
         return true;
      }
      
      private method_267(param1: any): any
      {
         var var_8: any;

         this.ShareArena_mc.author_txt.removeEventListener("focusin", this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.removeEventListener("focusin", this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.removeEventListener("textInput", this.method_51.bind(this));
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
         this.var_8.method_7(this.ShareArena_mc.btnContinue_mc);
      }
      
      private method_564(param1: any): any
      {
         var var_8: any;

         this.var_8.method_7(this.ShareArena_mc.btnServer_mc);
         this.var_8.method_7(this.ShareArena_mc.btnLocal_mc);
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0[8]) + param1 - 0[4]);
      }
      
      private AddToTank1(param1: any): void
      {
         var var_10: any, var_192: any;

         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.currentArena.method_66(this.var_5,this.currentArena.var_6[this.var_5 as any].arrEnemies[0].ID);
         this.UpdateEnemyButtons();
      }
      
      private tutUp(param1: any): void
      {
         var var_19: any;

         if(param1.target.name == "back_mc")
         {
            this.var_19.prevFrame();
         }
         else if(param1.target.name == "next_mc")
         {
            if(this.var_19.currentFrame == this.var_19.totalFrames)
            {
               this.objTutorialButtonControl.method_10();
               this.removeChild(this.var_19);
            }
            else
            {
               this.var_19.nextFrame();
            }
         }
      }
      
      private method_733(param1: any): void
      {
         (param1.target.line_mc as any).alpha = 0;
         this.txtButtonRollOverSetting_txt.text = "";
      }
      
      private method_253(param1: any): void
      {
         this.method_80(8000);
      }
      
      private method_577(): void
      {
         var var_5: any, var_8: any;

         var _loc1_: number = 0;
         while(_loc1_ < this.arrBubbleFields.length)
         {
            if(this.var_5 != _loc1_)
            {
               this.var_8.method_4(this.arrBubbleFields[_loc1_ as any],true,this.method_721,this.method_661,this.method_617);
            }
            _loc1_++;
         }
      }
      
      private AddToTank4(param1: any): void
      {
         var var_10: any, var_192: any;

         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.currentArena.method_66(this.var_5,this.currentArena.var_6[this.var_5 as any].arrEnemies[3].ID);
         this.UpdateEnemyButtons();
      }
      
      private method_93(param1: MovieClip, param2: string = "fuggly", param3: number = 1): void
      {
         var var_8: any;

         if(param1 == this.btnTank1_mc)
         {
            (this.btnMinus1_mc as any).alpha = 1;
            (this.btnAdd1_mc as any).alpha = 1;
            (this.btnDelete1_mc as any).alpha = 1;
            this.txtTank1_txt.text = "x " + param3.toString();
            this.btnTank1_mc.txtButton_txt.text = param2;
            (this.btnTank1_mc as any).x = this.btnTank1_mc.numOldX;
            this.var_8.method_4(this.btnMinus1_mc,true,this.MinusToTank1);
            this.var_8.method_4(this.btnAdd1_mc,true,this.AddToTank1);
            this.var_8.method_4(this.btnDelete1_mc,true,this.DeleteTank1);
         }
         if(param1 == this.btnTank2_mc)
         {
            (this.btnMinus2_mc as any).alpha = 1;
            (this.btnAdd2_mc as any).alpha = 1;
            (this.btnDelete2_mc as any).alpha = 1;
            this.txtTank2_txt.text = "x " + param3.toString();
            this.btnTank2_mc.txtButton_txt.text = param2;
            (this.btnTank2_mc as any).x = this.btnTank2_mc.numOldX;
            this.var_8.method_4(this.btnMinus2_mc,true,this.MinusToTank2);
            this.var_8.method_4(this.btnAdd2_mc,true,this.AddToTank2);
            this.var_8.method_4(this.btnDelete2_mc,true,this.DeleteTank2);
         }
         if(param1 == this.btnTank3_mc)
         {
            (this.btnMinus3_mc as any).alpha = 1;
            (this.btnAdd3_mc as any).alpha = 1;
            (this.btnDelete3_mc as any).alpha = 1;
            this.txtTank3_txt.text = "x " + param3.toString();
            this.btnTank3_mc.txtButton_txt.text = param2;
            (this.btnTank3_mc as any).x = this.btnTank3_mc.numOldX;
            this.var_8.method_4(this.btnMinus3_mc,true,this.MinusToTank3);
            this.var_8.method_4(this.btnAdd3_mc,true,this.AddToTank3);
            this.var_8.method_4(this.btnDelete3_mc,true,this.DeleteTank3);
         }
         if(param1 == this.btnTank4_mc)
         {
            (this.btnMinus4_mc as any).alpha = 1;
            (this.btnAdd4_mc as any).alpha = 1;
            (this.btnDelete4_mc as any).alpha = 1;
            this.txtTank4_txt.text = "x " + param3.toString();
            this.btnTank4_mc.txtButton_txt.text = param2;
            (this.btnTank4_mc as any).x = this.btnTank4_mc.numOldX;
            this.var_8.method_4(this.btnMinus4_mc,true,this.MinusToTank4);
            this.var_8.method_4(this.btnAdd4_mc,true,this.AddToTank4);
            this.var_8.method_4(this.btnDelete4_mc,true,this.DeleteTank4);
         }
      }
      
      public ReturnToArenaSelectScreenAfterSubmit2(): void
      {
         var var_8: any;

         this.var_8.method_7(this.ShareArena_mc.btnExit_mc);
         this.var_8.method_7(this.ShareArena_mc.share_btn);
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
         this.var_8.method_10();
         this.funCallBackButton();
      }
      
      public method_314(param1: any): void
      {
         var var_8: any;

         this.var_8.method_7(this.ShareArena_mc.btnExit_mc);
         this.var_8.method_7(this.ShareArena_mc.share_btn);
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
         this.CallCallbackFunction(param1);
      }
      
      private MoveCurrentBubblefieldRight(param1: any): any
      {
         var var_5: any, var_6: any;

         var _loc2_: any = undefined;
         var _loc3_: Point = null as any;
         var _loc4_: number = NaN;
         var _loc5_: number = NaN;
         var _loc6_: number = NaN;
         if(this.var_5 < this.currentArena.var_6.length - 1 && this.currentArena.var_6[this.var_5 as any].arrEnemies.length > 0 && this.currentArena.var_6[this.var_5 + 1 as any].arrEnemies.length > 0)
         {
            _loc2_ = this.currentArena.var_6[this.var_5 as any];
            this.currentArena.var_6[this.var_5 as any] = this.currentArena.var_6[this.var_5 + 1 as any];
            this.currentArena.var_6[this.var_5 + 1 as any] = _loc2_;
            if(this.method_221(this.arrBubbleFields[this.var_5 as any]) && this.method_221(this.arrBubbleFields[this.var_5 + 1 as any]))
            {
               _loc3_ = new (Point as any)(this.arrBubbleFields[this.var_5 as any].x / 2 + this.arrBubbleFields[this.var_5 + 1 as any].x / 2,this.arrBubbleFields[this.var_5 as any].y);
               this.arrBubbleFields[this.var_5 as any].centerPointX = _loc3_.x;
               this.arrBubbleFields[this.var_5 as any].centerPointY = _loc3_.y;
               this.arrBubbleFields[this.var_5 as any].intDivider = 280;
               this.arrBubbleFields[this.var_5 as any].scaleTween = 37;
               this.arrBubbleFields[this.var_5 as any].blnLeft = false;
               this.arrBubbleFields[this.var_5 as any].objSister = this.arrBubbleFields[this.var_5 + 1 as any];
               this.arrBubbleFields[this.var_5 as any].distance = Math.abs(this.arrBubbleFields[this.var_5 as any].centerPointX - this.arrBubbleFields[this.var_5 as any].x);
               this.arrBubbleFields[this.var_5 + 1 as any].centerPointX = _loc3_.x;
               this.arrBubbleFields[this.var_5 + 1 as any].centerPointY = _loc3_.y;
               this.arrBubbleFields[this.var_5 + 1 as any].intDivider = 280;
               this.arrBubbleFields[this.var_5 + 1 as any].scaleTween = 91;
               this.arrBubbleFields[this.var_5 + 1 as any].blnLeft = false;
               this.arrBubbleFields[this.var_5 + 1 as any].objSister = this.arrBubbleFields[this.var_5 as any];
               this.arrBubbleFields[this.var_5 + 1 as any].distance = Math.abs(this.arrBubbleFields[this.var_5 + 1 as any].centerPointX - this.arrBubbleFields[this.var_5 + 1 as any].x);
               _loc4_ = _loc3_.x - this.arrBubbleFields[this.var_5 as any].x;
               _loc5_ = _loc3_.y - this.arrBubbleFields[this.var_5 as any].y;
               _loc6_ = Math.atan2(_loc5_,_loc4_);
               _loc6_ = _loc6_ - Math.PI / 2;
               this.arrBubbleFields[this.var_5 as any].angle = this.arrBubbleFields[this.var_5 as any].StartAngle = _loc6_;
               _loc4_ = _loc3_.x - this.arrBubbleFields[this.var_5 + 1 as any].x;
               _loc5_ = _loc3_.y - this.arrBubbleFields[this.var_5 + 1 as any].y;
               _loc6_ = Math.atan2(_loc5_,_loc4_);
               _loc6_ = _loc6_ - Math.PI / 2;
               this.arrBubbleFields[this.var_5 + 1 as any].angle = this.arrBubbleFields[this.var_5 + 1 as any].StartAngle = _loc6_;
            }
         }
         else
         {
            this.txtButtonRollOverSetting_txt.text = "You can\'t switch with an empty Bubblefield";
         }
      }
      
      private method_632(param1: number = 0, param2: number = 0, param3: number = 0, param4: number = 0, param5: number = 0, param6: number = 0): number
      {
         param5 = param1 - param3;
         param6 = param2 - param4;
         return Math.sqrt(param5 * param5 + param6 * param6);
      }
      
      private method_782(param1: MovieClip, param2: string = "", param3: string = "guy"): void
      {
         var var_5: any, var_8: any;

         1;
         if(param1 == this.btnTank1_mc)
         {
            var _loc4_: number = this.currentArena.method_66(this.var_5,param2,param3);
            (this.btnTank2_mc as any).alpha = 1;
            this.AddTankSelectButton(this.btnTank2_mc);
            this.var_8.method_7(this.btnTank1_mc);
            this.method_93(this.btnTank1_mc,param3,1);
         }
         else if(param1 == this.btnTank2_mc)
         {
            _loc4_ = this.currentArena.method_66(this.var_5,param2,param3);
            (this.btnTank3_mc as any).alpha = 1;
            this.AddTankSelectButton(this.btnTank3_mc);
            this.var_8.method_7(this.btnTank2_mc);
            this.method_93(this.btnTank2_mc,param3,1);
         }
         else if(param1 == this.btnTank3_mc)
         {
            _loc4_ = this.currentArena.method_66(this.var_5,param2,param3);
            (this.btnTank4_mc as any).alpha = 1;
            this.AddTankSelectButton(this.btnTank4_mc);
            this.var_8.method_7(this.btnTank3_mc);
            this.method_93(this.btnTank3_mc,param3,1);
         }
         else if(param1 == this.btnTank4_mc)
         {
            _loc4_ = this.currentArena.method_66(this.var_5,param2,param3);
            this.var_8.method_7(this.btnTank4_mc);
            this.method_93(this.btnTank4_mc,param3,1);
         }
      }
      
      private MinusToTank1(param1: any): void
      {
         var var_10: any;

         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_: boolean = false;
         if(this.currentArena.method_188(this.var_5,this.currentArena.var_6[this.var_5 as any].arrEnemies[0].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private method_113(param1: any): void
      {
         var var_77: any;

         var _loc2_: boolean = true;
         var _loc3_: number = 0;
         while(_loc3_ < this.var_77.length)
         {
            if(this.var_77[_loc3_ as any] == param1)
            {
               _loc2_ = false;
            }
            _loc3_++;
         }
         if(_loc2_ == true)
         {
            this.var_77.push(param1 as any);
         }
      }
      
      private UpdateEnemyButtons(): void
      {
         var var_5: any;

         this.method_325();
         this.UpdateComplexityBar();
         var _loc1_: any = this.currentArena.method_351(this.var_5);
         if(_loc1_.length > 0)
         {
            if(_loc1_[0] == null)
            {
               return;
            }
            this.method_177(this.btnTank1_mc,_loc1_[0].IDs,_loc1_[0].Num,_loc1_[0].Name);
            this.var_103[0].alpha = 1;
            if(_loc1_[1] == null)
            {
               return;
            }
            this.method_177(this.btnTank2_mc,_loc1_[1].IDs,_loc1_[1].Num,_loc1_[1].Name);
            this.var_103[1].alpha = 1;
            if(_loc1_[2] == null)
            {
               return;
            }
            this.var_103[2].alpha = 1;
            this.method_177(this.btnTank3_mc,_loc1_[2].IDs,_loc1_[2].Num,_loc1_[2].Name);
            if(_loc1_[3] == null)
            {
               return;
            }
            this.var_103[3].alpha = 1;
            this.method_177(this.btnTank4_mc,_loc1_[3].IDs,_loc1_[3].Num,_loc1_[3].Name);
         }
      }
      
      public frame1(): any
      {
         this.stop();
      }
      
      private MinusToTank2(param1: any): void
      {
         var var_10: any;

         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_: boolean = false;
         if(this.currentArena.method_188(this.var_5,this.currentArena.var_6[this.var_5 as any].arrEnemies[1].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private SaveToLocalAuthorName(param1: any): any
      {
         var var_8: any;

         this.var_8.method_7(this.ShareArena_mc.btnServer_mc);
         this.var_8.method_7(this.ShareArena_mc.btnLocal_mc);
         this.ShareArena_mc.gotoAndStop(6);
         this.ShareArena_mc.author_txt.text = this.refMain.objCurrentPlayer.profileName;
         this.ShareArena_mc.author_txt.addEventListener("focusin", this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.addEventListener("focusin", this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.addEventListener("textInput", this.method_51.bind(this));
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_267);
         this.var_8.method_4(this.ShareArena_mc.btnContinue_mc,true,this.method_716);
      }
      
      private method_198(param1: any): void
      {
         var var_41: any;

         var _loc2_: boolean = true;
         var _loc3_: number = 0;
         while(_loc3_ < this.var_41.length)
         {
            if(this.var_41[_loc3_ as any] == param1)
            {
               _loc2_ = false;
            }
            _loc3_++;
         }
         if(_loc2_ == true)
         {
            this.var_41.push(param1 as any);
         }
      }
      
      private MinusToTank3(param1: any): void
      {
         var var_10: any;

         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_: boolean = false;
         if(this.currentArena.method_188(this.var_5,this.currentArena.var_6[this.var_5 as any].arrEnemies[2].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private DeleteTank3(param1: any): void
      {
         var var_10: any;

         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_: boolean = false;
         if(this.currentArena.method_152(this.var_5,this.currentArena.var_6[this.var_5 as any].arrEnemies[2].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_ == true)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private AddToTank2(param1: any): void
      {
         var var_10: any, var_192: any;

         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.currentArena.method_66(this.var_5,this.currentArena.var_6[this.var_5 as any].arrEnemies[1].ID);
         this.UpdateEnemyButtons();
      }
      
      private SaveToServerAuthorName(param1: any): any
      {
         var var_8: any;

         this.var_8.method_7(this.ShareArena_mc.btnServer_mc);
         this.var_8.method_7(this.ShareArena_mc.btnLocal_mc);
         this.ShareArena_mc.gotoAndStop(6);
         this.ShareArena_mc.author_txt.text = this.refMain.objCurrentPlayer.profileName;
         this.ShareArena_mc.author_txt.addEventListener("focusin", this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.addEventListener("focusin", this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.addEventListener("textInput", this.method_51.bind(this));
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_267);
         this.var_8.method_4(this.ShareArena_mc.btnContinue_mc,true,this.ConfirmSubmitArena);
      }
      
      private method_721(param1: any): void
      {
         var var_5: any;

         var _loc4_: number = NaN;
         0;
         var _loc2_: Function = this.method_465;
         var _loc3_: number = 0;
         while(_loc3_ < this.arrBubbleFields.length)
         {
            if(param1.currentTarget == this.arrBubbleFields[_loc3_ as any])
            {
               if(_loc3_ > this.var_5)
               {
                  _loc2_ = this.method_293;
               }
               _loc4_ = Math.abs(this.var_5 - _loc3_);
               var _loc5_: number = 0;
               while(0 < _loc4_)
               {
                  _loc2_(param1);
                  _loc5_ = 0 + 1;
               }
               break;
            }
            _loc3_++;
         }
         this.UpdateComplexityBar();
      }
      
      private DeleteTank2(param1: any): void
      {
         var var_10: any;

         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_: boolean = false;
         if(this.currentArena.method_152(this.var_5,this.currentArena.var_6[this.var_5 as any].arrEnemies[1].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_ == true)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      public method_80(param1: number): void
      {
         var _loc2_: string = "An error prevented your arena from being saved.  We apologize for the inconvenience.";
         switch(param1)
         {
            case 8000:
               _loc2_ = "BTA could not properly connect to the server.";
               break;
            case 9300:
               _loc2_ = "Our servers currently are not allowing arena submissions.  Please try again later.";
               break;
            case 9299:
               _loc2_ = "An invalid arena name or Author name was used, try changing them and re-submitting";
               break;
            case 9202:
               _loc2_ = "An invalid arena name or Author name was used, try changing them and re-submitting";
               break;
            case 9200:
               _loc2_ = "An invalid arena was submitted to the server.  This includes arena with invalid characters in the author and tank names.";
               break;
            default:
               _loc2_ = "An invalid arena was submitted to the server.  This includes arena with invalid characters in the author and tank names.";
         }
         this.ShareArena_mc.message_txt.text = _loc2_;
      }
      
      private method_20(param1: any): void
      {
         param1.target.text = "";
         param1.target.removeEventListener("focusin", this.method_20.bind(this));
      }
      
      private method_221(param1: ArenaCreatorBubblefield): boolean
      {
         var var_10: any;

         var _loc2_: boolean = true;
         var _loc3_: number = 0;
         _loc3_ = 0;
         while(_loc3_ < this.var_10.length)
         {
            if(this.var_10[_loc3_ as any] == param1)
            {
               _loc2_ = false;
               break;
            }
            _loc3_++;
         }
         if(_loc2_ == true)
         {
            this.var_10.push(param1 as any);
            _loc3_ = 0;
            while(_loc3_ < this.var_41.length)
            {
               if(param1 == this.var_41[_loc3_ as any])
               {
                  this.var_41.splice(_loc3_,1);
                  break;
               }
               _loc3_++;
            }
            _loc3_ = 0;
            while(_loc3_ < this.var_77.length)
            {
               if(param1 == this.var_77[_loc3_ as any])
               {
                  this.var_77.splice(_loc3_,1);
                  break;
               }
               _loc3_++;
            }
         }
         return _loc2_;
      }
      
      private method_553(): boolean
      {
         var var_5: any, var_16: any;

         var _loc1_: ArenaCreatorBubblefield = null as any;
         if(this.currentArena.method_553())
         {
            _loc1_ = new (ArenaCreatorBubblefield as any)();
            this.addChild(_loc1_);
            this.arrBubbleFields.push(_loc1_ as any);
            this.arrBubbleFields[this.arrBubbleFields.length - 1 as any].txtBubbleFieldNum_txt.text = int(this.var_5 + 2).toString();
            this.arrBubbleFields[this.arrBubbleFields.length - 1 as any].x = this.var_16[6].x;
            this.arrBubbleFields[this.arrBubbleFields.length - 1 as any].y = this.var_16[6].y;
            this.arrBubbleFields[this.arrBubbleFields.length - 1 as any].tweenX = this.arrBubbleFields[this.arrBubbleFields.length - 1 as any].x;
            this.arrBubbleFields[this.arrBubbleFields.length - 1 as any].tweenY = this.arrBubbleFields[this.arrBubbleFields.length - 1 as any].y;
            this.arrBubbleFields[this.arrBubbleFields.length - 1 as any].height = 37;
            this.arrBubbleFields[this.arrBubbleFields.length - 1 as any].width = 37;
            return true;
         }
         return false;
      }
      
      private method_628(param1: any): void
      {
         var var_10: any, var_192: any;

         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         if(!param1.target.empty)
         {
            this.currentArena.method_66(this.var_5,param1.target.ID,param1.target.StrName);
            this.UpdateEnemyButtons();
         }
      }
      
      private method_465(param1: any): void
      {
         var var_10: any;

         var _loc2_: number = 0;
         if(this.var_10.length > 0)
         {
            return;
         }
         if(this.var_5 > 0)
         {
            --this.var_5;
            _loc2_ = 0;
            while(_loc2_ < this.arrBubbleFields.length)
            {
               if(_loc2_ + 5 - this.var_5 <= this.var_16.length - 1 && _loc2_ + 5 - this.var_5 >= 0)
               {
                  this.arrBubbleFields[_loc2_ as any].tweenX = this.var_16[_loc2_ + 5 - this.var_5 as any].x;
                  this.arrBubbleFields[_loc2_ as any].tweenY = this.var_16[_loc2_ + 5 - this.var_5 as any].y;
                  this.method_198(this.arrBubbleFields[_loc2_ as any]);
               }
               _loc2_++;
            }
            this.UpdateEnemyButtons();
         }
         else if(this.var_5 < 0)
         {
            this.var_5 = 0;
         }
      }
      
      private DeleteTank4(param1: any): void
      {
         var var_10: any;

         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_: boolean = false;
         if(this.currentArena.method_152(this.var_5,this.currentArena.var_6[this.var_5 as any].arrEnemies[3].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_ == true)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private method_669(): void
      {
         var var_260: any, var_19: any;

         if(this.refMain.objCurrentPlayer.var_260 == false)
         {
            this.refMain.objCurrentPlayer.var_260 = true;
            this.var_19 = new (ArenaCreatorTutorial as any)();
            var _temp_3: any = this.var_19;
            var _temp_2: any = this.var_19;
            var _temp_1: any = 0;
            0;
            (_temp_2 as any).y = _temp_1;
            (_temp_3 as any).x = 0;
            this.addChild(this.var_19);
            this.objTutorialButtonControl = new (class_3 as any)();
            this.objTutorialButtonControl.Setup(this.tutUp);
            this.objTutorialButtonControl.method_4(this.var_19.back_mc);
            this.objTutorialButtonControl.method_4(this.var_19.next_mc);
            this.var_19.back_mc.gotoAndStop("off");
            this.var_19.next_mc.gotoAndStop("off");
         }
      }
      
      private method_572(param1: any): void
      {
         var var_8: any;

         this.var_8.method_7(this.ShareArena_mc.btnExit_mc);
         this.var_8.method_7(this.ShareArena_mc.share_btn);
         this.method_314(new (Event as any)("bay"));
      }
      
      private DeleteTank1(param1: any): void
      {
         var var_10: any;

         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_: boolean = false;
         if(this.currentArena.method_152(this.var_5,this.currentArena.var_6[this.var_5 as any].arrEnemies[0].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_ == true)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private method_716(param1: any): any
      {
         var var_8: any, var_275: any;

         this.ShareArena_mc.author_txt.removeEventListener("focusin", this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.removeEventListener("focusin", this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.removeEventListener("textInput", this.method_51.bind(this));
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
         this.var_8.method_7(this.ShareArena_mc.btnContinue_mc);
         this.currentArena.var_275 = this.ShareArena_mc.author_txt.text;
         this.currentArena.strName = this.ShareArena_mc.tank_txt.text;
         this.currentArena.strID = "H" + this.refMain.intArenaCountMaster.toString();
         this.refMain.intArenaCountMaster += 1;
         this.refMain.SaveGameData();
         this.refMain.objCurrentPlayer.method_283(this.currentArena);
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
         this.CallCallbackFunction(param1);
      }
      
      private UpdateAreanBubbleLocation(): void
      {
         var var_5: any, var_16: any;

         var _loc2_: number = 0;
         while(_loc2_ < this.arrBubbleFields.length)
         {
            if(_loc2_ + 5 - this.var_5 > 0 && _loc2_ + 5 - this.var_5 < this.var_16.length - 1)
            {
               this.arrBubbleFields[_loc2_ as any].tweenX = this.var_16[_loc2_ + 5 - this.var_5 as any].x;
               this.arrBubbleFields[_loc2_ as any].tweenY = this.var_16[_loc2_ + 5 - this.var_5 as any].y;
               this.arrBubbleFields[_loc2_ as any].x = this.var_16[_loc2_ + 5 - this.var_5 as any].x;
               this.arrBubbleFields[_loc2_ as any].y = this.var_16[_loc2_ + 5 - this.var_5 as any].y;
               this.method_198(this.arrBubbleFields[_loc2_ as any]);
            }
            else
            {
               if(_loc2_ + 5 - this.var_5 <= 0)
               {
                  this.arrBubbleFields[_loc2_ as any].x = this.var_16[0].x;
                  this.arrBubbleFields[_loc2_ as any].y = this.var_16[0].y;
                  this.arrBubbleFields[_loc2_ as any].tweenX = this.var_16[0].x;
                  this.arrBubbleFields[_loc2_ as any].tweenY = this.var_16[0].y;
               }
               else if(_loc2_ + 5 - this.var_5 >= this.var_16.length - 1)
               {
                  this.arrBubbleFields[_loc2_ as any].x = this.var_16[this.var_16.length - 1 as any].x;
                  this.arrBubbleFields[_loc2_ as any].y = this.var_16[this.var_16.length - 1 as any].y;
                  this.arrBubbleFields[_loc2_ as any].tweenX = this.var_16[this.var_16.length - 1 as any].x;
                  this.arrBubbleFields[_loc2_ as any].tweenY = this.var_16[this.var_16.length - 1 as any].y;
               }
               this.method_198(this.arrBubbleFields[_loc2_ as any]);
            }
            _loc2_++;
         }
      }
      
      private method_541(param1: any): any
      {
         var var_8: any;

         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
         this.var_8.method_7(this.ShareArena_mc.agree_btn);
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
      }
      
      private MinusToTank4(param1: any): void
      {
         var var_10: any;

         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_: boolean = false;
         if(this.currentArena.method_188(this.var_5,this.currentArena.var_6[this.var_5 as any].arrEnemies[3].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private method_493(param1: any): void
      {
         var var_117: any;

         var var_40: string;
         var var_56: any;
         var var_126: URLLoader;
         var var_150: URLRequest;
         var var_157: string;
         var var_194: URLVariables;
         var var_106: any = param1;
         this.var_117 = new (class_96 as any)();
         this.addChild(this.var_117);
         (this.var_117 as any).x = 550 / 2;
         (this.var_117 as any).y = 450 / 2;
         this.var_117.txtLoading_txt.text = "Saving Arena";
         var_40 = this.currentArena.ExportArenaData();
         var_157 = "http://s1.herointeractive.com/bta/submitArena.php";
         var_150 = new (URLRequest as any)(var_157);
         var_194 = new (URLVariables as any)();
         var_194.s = var_40;
         var_194.t = "";
         var_56 = 0;
         while(var_56 < this.currentArena.arrAllEnemiesInArena.length)
         {
            if(this.currentArena.arrAllEnemiesInArena[var_56 as any].ID.substr(0,1) == "L")
            {
               if(var_194.t == "")
               {
                  var_194.t = this.refMain.RetrieveTankDataFromID(this.currentArena.arrAllEnemiesInArena[var_56 as any].ID).ExportTankData();
               }
               else
               {
                  var_194.t += "-" + this.refMain.RetrieveTankDataFromID(this.currentArena.arrAllEnemiesInArena[var_56 as any].ID).ExportTankData();
               }
            }
            var_56 += 1;
         }
         var_150.data = var_194;
         var_150.method = URLRequestMethod.POST;
         var_126 = new (URLLoader as any)();
         var_126 = new (URLLoader as any)();
         var_126.dataFormat = URLLoaderDataFormat.TEXT;
         var_126.addEventListener("complete", this.method_278.bind(this));
         var_126.addEventListener(HTTPStatusEvent.HTTP_STATUS, this.method_280.bind(this));
         var_126.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
         var_126.addEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
         try
         {
            var_126.load(var_150);
         }
         catch (e: any)
         {
         }
      }
      
      private method_617(param1: any): void
      {
         param1.target.scaleX -= 0[1];
         param1.target.scaleY -= 0[1];
         this.txtButtonRollOverSetting_txt.text = "";
      }
      
      private method_254(param1: any): void
      {
         this.method_80(8000);
      }
      
      public method_598(param1: any): void
      {
         this.refMain.method_370();
         this.refMain.method_416(this.currentArena.strID,this.currentArena.strID,null,this.refMain.GameShareArenaCallback);
      }
      
      private method_92(): any
      {
         var var_6: any, var_5: any;

         var _loc2_: number = 0;
         while(_loc2_ < this.currentArena.var_6.length - 1)
         {
            if(this.currentArena.var_6[_loc2_ as any].arrEnemies.length == 0)
            {
               this.currentArena.var_6[_loc2_ as any] = this.currentArena.var_6[this.currentArena.var_6.length - 1 as any];
               var _loc1_: any = this.currentArena.var_6.pop();
               _loc1_ = null as any;
               if(this.var_5 > this.currentArena.var_6.length - 1)
               {
                  this.var_5 = this.currentArena.var_6.length - 1;
               }
               break;
            }
            _loc2_++;
         }
      }
      
      private method_544(): void
      {
         var var_8: any;

         var _loc1_: number = 0;
         while(_loc1_ < this.arrBubbleFields.length)
         {
            this.var_8.method_7(this.arrBubbleFields[_loc1_ as any]);
            _loc1_++;
         }
      }
      
      private method_516(param1: any): any
      {
         var var_8: any;

         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
         this.var_8.method_7(this.ShareArena_mc.agree_btn);
         this.refMain.intArenaCountMaster += 1;
         this.refMain.SaveGameData();
         this.refMain.objCurrentPlayer.method_283(this.currentArena);
         this.method_493(param1);
      }
      
      private method_325(): void
      {
         var var_8: any, var_103: any;

         this.method_544();
         (this.btnTank1_mc as any).alpha = 1;
         (this.btnTank2_mc as any).alpha = 0;
         (this.btnTank3_mc as any).alpha = 0;
         (this.btnTank4_mc as any).alpha = 0;
         this.txtTank1_txt.selectable = false;
         this.txtTank2_txt.selectable = false;
         this.txtTank3_txt.selectable = false;
         this.txtTank4_txt.selectable = false;
         (this.btnMinus1_mc as any).alpha = 0;
         (this.btnAdd1_mc as any).alpha = 0;
         (this.btnDelete1_mc as any).alpha = 0;
         this.txtTank1_txt.text = "";
         this.var_8.method_7(this.btnMinus1_mc);
         this.var_8.method_7(this.btnAdd1_mc);
         this.var_8.method_7(this.btnDelete1_mc);
         this.var_8.method_7(this.btnTank1_mc);
         this.var_8.method_32(this.btnMinus1_mc);
         this.var_8.method_32(this.btnAdd1_mc);
         this.var_8.method_32(this.btnDelete1_mc);
         this.var_8.method_32(this.btnTank1_mc);
         (this.btnMinus2_mc as any).alpha = 0;
         (this.btnAdd2_mc as any).alpha = 0;
         (this.btnDelete2_mc as any).alpha = 0;
         this.txtTank2_txt.text = "";
         this.var_8.method_7(this.btnTank2_mc);
         this.var_8.method_7(this.btnMinus2_mc);
         this.var_8.method_7(this.btnAdd2_mc);
         this.var_8.method_7(this.btnDelete2_mc);
         this.var_8.method_32(this.btnTank2_mc);
         this.var_8.method_32(this.btnMinus2_mc);
         this.var_8.method_32(this.btnAdd2_mc);
         this.var_8.method_32(this.btnDelete2_mc);
         (this.btnMinus3_mc as any).alpha = 0;
         (this.btnAdd3_mc as any).alpha = 0;
         (this.btnDelete3_mc as any).alpha = 0;
         this.txtTank3_txt.text = "";
         this.var_8.method_7(this.btnTank3_mc);
         this.var_8.method_7(this.btnMinus3_mc);
         this.var_8.method_7(this.btnAdd3_mc);
         this.var_8.method_7(this.btnDelete3_mc);
         this.var_8.method_32(this.btnTank3_mc);
         this.var_8.method_32(this.btnMinus3_mc);
         this.var_8.method_32(this.btnAdd3_mc);
         this.var_8.method_32(this.btnDelete3_mc);
         (this.btnMinus4_mc as any).alpha = 0;
         (this.btnAdd4_mc as any).alpha = 0;
         (this.btnDelete4_mc as any).alpha = 0;
         this.txtTank4_txt.text = "";
         this.var_8.method_7(this.btnTank4_mc);
         this.var_8.method_7(this.btnMinus4_mc);
         this.var_8.method_7(this.btnAdd4_mc);
         this.var_8.method_7(this.btnDelete4_mc);
         this.var_8.method_32(this.btnTank4_mc);
         this.var_8.method_32(this.btnMinus4_mc);
         this.var_8.method_32(this.btnAdd4_mc);
         this.var_8.method_32(this.btnDelete4_mc);
         this.btnTank1_mc.txtButton_txt.text = "Add Enemy Tank";
         (this.btnTank1_mc as any).x = 275;
         this.var_8.method_4(this.btnTank1_mc,true,this.method_436);
         this.btnTank2_mc.txtButton_txt.text = "Add Enemy Tank";
         (this.btnTank2_mc as any).x = 275;
         this.btnTank3_mc.txtButton_txt.text = "Add Enemy Tank";
         (this.btnTank3_mc as any).x = 275;
         this.btnTank4_mc.txtButton_txt.text = "Add Enemy Tank";
         (this.btnTank4_mc as any).x = 275;
         this.var_103[0].alpha = 0;
         this.var_103[1].alpha = 0;
         this.var_103[2].alpha = 0;
         this.var_103[3].alpha = 0;
         this.method_577();
      }
      
      private method_107(param1: any): void
      {
         if(param1.target == this.btnMinus1_mc || param1.target == this.btnMinus2_mc || param1.target == this.btnMinus3_mc || param1.target == this.btnMinus4_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Subtract 1 of this tank";
         }
         if(param1.target == this.btnAdd1_mc || param1.target == this.btnAdd2_mc || param1.target == this.btnAdd3_mc || param1.target == this.btnAdd4_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Add 1 of this tank";
         }
         if(param1.target == this.btnDelete1_mc || param1.target == this.btnDelete2_mc || param1.target == this.btnDelete3_mc || param1.target == this.btnDelete4_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Delete this tank";
         }
         if(param1.target == this.btnRightArrow_mc || param1.target == this.btnLeftArrow_mc)
         {
            if(param1.target == this.btnRightArrow_mc && this.btnRightArrow_mc.ArrowPlusSign_mc.currentFrame == 2)
            {
               this.txtButtonRollOverSetting_txt.text = "Add another bubblefield";
            }
            else
            {
               this.txtButtonRollOverSetting_txt.text = "Navigate the bubblefields";
            }
         }
         if(param1.target == this.btnTank1_mc || param1.target == this.btnTank2_mc || param1.target == this.btnTank3_mc || param1.target == this.btnTank4_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "You can have four enemy tank types per bubblefied";
         }
         if(param1.target == this.btnMoveBblFieldLeft_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Swap with Left Bubblefield";
         }
         if(param1.target == this.btnMoveBblFieldRight_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Swap with Right Bubblefield";
         }
         if(param1.target == this.btnBack_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Return to previous screen";
         }
         if(param1.target == this.btnSubmitArena_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Save your Arena!";
         }
         if(param1.target == this.ComplexityRollOver_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "There instanceof a max complexity for each bubblefield.";
         }
         param1.target.gotoAndStop(2);
      }
      
      public method_177(param1: MovieClip, param2: string = "", param3: number = 1, param4: string = "guy"): void
      {
         var var_8: any;

         if(param2 != "")
         {
            if(param1 == this.btnTank1_mc)
            {
               (this.btnTank2_mc as any).alpha = 1;
               this.AddTankSelectButton(this.btnTank2_mc);
               this.var_8.method_7(this.btnTank1_mc);
               this.method_93(this.btnTank1_mc,param4,param3);
            }
            else if(param1 == this.btnTank2_mc)
            {
               (this.btnTank3_mc as any).alpha = 1;
               this.AddTankSelectButton(this.btnTank3_mc);
               this.var_8.method_7(this.btnTank2_mc);
               this.method_93(this.btnTank2_mc,param4,param3);
            }
            else if(param1 == this.btnTank3_mc)
            {
               (this.btnTank4_mc as any).alpha = 1;
               this.AddTankSelectButton(this.btnTank4_mc);
               this.var_8.method_7(this.btnTank3_mc);
               this.method_93(this.btnTank3_mc,param4,param3);
            }
            else if(param1 == this.btnTank4_mc)
            {
               this.var_8.method_7(this.btnTank4_mc);
               this.method_93(this.btnTank4_mc,param4,param3);
            }
         }
      }
      
      private UpdateQuickKeyButtons(): void
      {
         var var_27: any;

         var _loc2_: number = NaN;
         var _loc3_: number = NaN;

         var _loc7_: number = NaN;


         var _loc10_: number = NaN;




         var _loc1_: number = 0;
         _loc1_ = 0;
         while(_loc1_ < this.var_27.length)
         {
            if(_loc1_ < this.currentArena.arrAllEnemiesInArena.length)
            {
               this.var_27[_loc1_ as any].empty = false;
               this.var_27[_loc1_ as any].ID = this.currentArena.arrAllEnemiesInArena[_loc1_ as any].ID;
               this.var_27[_loc1_ as any].StrName = this.currentArena.arrAllEnemiesInArena[_loc1_ as any].Name;
            }
            else
            {
               this.var_27[_loc1_ as any].empty = true;
               this.var_27[_loc1_ as any].ID = -1;
               this.var_27[_loc1_ as any].StrName = "guy";
            }
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ < this.var_27.length)
         {
            while(this.var_27[_loc1_ as any].getChildAt(this.var_27[_loc1_ as any].numChildren - 1) != this.var_27[_loc1_ as any].line_mc)
            {
               this.var_27[_loc1_ as any].removeChildAt(this.var_27[_loc1_ as any].numChildren - 1);
            }
            if(this.var_27[_loc1_ as any].ID != -1)
            {
               _loc2_ = this.var_27[_loc1_ as any].height - 20;
               _loc3_ = this.var_27[_loc1_ as any].width - 10;
               var _loc4_: TankData = this.refMain.RetrieveTankDataFromID(this.var_27[_loc1_ as any].ID);
               if(_loc4_ == null)
               {
               }
               var _loc5_: any = null as any;
               this.var_27[_loc1_ as any].addChild(undefined);
               var _loc6_: MovieClip = new (class_77 as any)();
               (_loc6_ as any).alpha = 0;
               (undefined as any).addChild(null);
               _loc7_ = Number((null as any).GetLargestXDistanceFromRegistration());
               var _loc8_: MovieClip = new (class_77 as any)();
               (_loc8_ as any).x = _loc7_;
               (null as any).alpha = 0;
               (undefined as any).addChild(null);
               var _loc9_: MovieClip = new (class_77 as any)();
               (_loc9_ as any).x = -1 * _loc7_;
               (null as any).alpha = 0;
               (undefined as any).addChild(null);
               _loc10_ = Number((null as any).GetLargestYDistanceFromRegistration());
               var _loc11_: MovieClip = new (class_77 as any)();
               (_loc11_ as any).y = _loc10_;
               (null as any).alpha = 0;
               (undefined as any).addChild(null);
               var _loc12_: MovieClip = new (class_77 as any)();
               (_loc12_ as any).y = -1 * _loc10_;
               (null as any).alpha = 0;
               (undefined as any).addChild(null);
               if((undefined as any).width >= _loc3_)
               {
                  (undefined as any).width = _loc3_;
                  (undefined as any).scaleY = (undefined as any).scaleX;
               }
               if((undefined as any).height >= _loc2_)
               {
                  (undefined as any).height = _loc2_;
                  (undefined as any).scaleX = (undefined as any).scaleY;
               }
               var _loc13_: Sprite = new (Sprite as any)();
               var _loc14_: class_51 = new (class_51 as any)(this.var_27[_loc1_ as any].width,this.var_27[_loc1_ as any].height);
               this.var_27[_loc1_ as any].removeChild(undefined);
               (null as any).addChild(undefined);
               (undefined as any).x = this.var_27[_loc1_ as any].width / 2;
               (undefined as any).y = this.var_27[_loc1_ as any].height / 2;
               (null as any).Draw(null);
               this.var_27[_loc1_ as any].addChild(null);
               (null as any).x -= (null as any).width / 2;
               (null as any).y -= (null as any).height / 2;
               _loc5_ = null as any;
               _loc13_ = null as any;
            }
            _loc1_++;
         }
         this.UpdateComplexityBar();
      }
      
      private method_112(param1: any): void
      {
         this.txtButtonRollOverSetting_txt.text = "";
         param1.target.gotoAndStop(1);
      }
      
      private MoveCurrentBubblefieldLeft(param1: any): void
      {
         var var_5: any, var_6: any;

         var _loc2_: any = undefined;
         var _loc3_: Point = null as any;
         var _loc4_: number = NaN;
         var _loc5_: number = NaN;
         var _loc6_: number = NaN;
         if(this.var_5 > 0 && this.currentArena.var_6[this.var_5 as any].arrEnemies.length > 0 && this.currentArena.var_6[this.var_5 - 1 as any].arrEnemies.length > 0)
         {
            _loc2_ = this.currentArena.var_6[this.var_5 as any];
            this.currentArena.var_6[this.var_5 as any] = this.currentArena.var_6[this.var_5 - 1 as any];
            this.currentArena.var_6[this.var_5 - 1 as any] = _loc2_;
            if(this.method_221(this.arrBubbleFields[this.var_5 as any]) && this.method_221(this.arrBubbleFields[this.var_5 - 1 as any]))
            {
               _loc3_ = new (Point as any)(this.arrBubbleFields[this.var_5 as any].x / 2 + this.arrBubbleFields[this.var_5 - 1 as any].x / 2,this.arrBubbleFields[this.var_5 as any].y);
               this.arrBubbleFields[this.var_5 as any].centerPointX = _loc3_.x;
               this.arrBubbleFields[this.var_5 as any].centerPointY = _loc3_.y;
               this.arrBubbleFields[this.var_5 as any].intDivider = 280;
               this.arrBubbleFields[this.var_5 as any].scaleTween = 37;
               this.arrBubbleFields[this.var_5 as any].blnLeft = true;
               this.arrBubbleFields[this.var_5 as any].objSister = this.arrBubbleFields[this.var_5 - 1 as any];
               this.arrBubbleFields[this.var_5 as any].distance = Math.abs(this.arrBubbleFields[this.var_5 as any].centerPointX - this.arrBubbleFields[this.var_5 as any].x);
               this.arrBubbleFields[this.var_5 - 1 as any].centerPointX = _loc3_.x;
               this.arrBubbleFields[this.var_5 - 1 as any].centerPointY = _loc3_.y;
               this.arrBubbleFields[this.var_5 - 1 as any].intDivider = 280;
               this.arrBubbleFields[this.var_5 - 1 as any].scaleTween = 91;
               this.arrBubbleFields[this.var_5 - 1 as any].blnLeft = true;
               this.arrBubbleFields[this.var_5 - 1 as any].objSister = this.arrBubbleFields[this.var_5 as any];
               this.arrBubbleFields[this.var_5 - 1 as any].distance = Math.abs(this.arrBubbleFields[this.var_5 - 1 as any].centerPointX - this.arrBubbleFields[this.var_5 - 1 as any].x);
               _loc4_ = _loc3_.x - this.arrBubbleFields[this.var_5 as any].x;
               _loc5_ = _loc3_.y - this.arrBubbleFields[this.var_5 as any].y;
               _loc6_ = Math.atan2(_loc5_,_loc4_);
               _loc6_ = _loc6_ - Math.PI / 2;
               this.arrBubbleFields[this.var_5 as any].angle = this.arrBubbleFields[this.var_5 as any].StartAngle = _loc6_;
               _loc4_ = _loc3_.x - this.arrBubbleFields[this.var_5 - 1 as any].x;
               _loc5_ = _loc3_.y - this.arrBubbleFields[this.var_5 - 1 as any].y;
               _loc6_ = Math.atan2(_loc5_,_loc4_);
               _loc6_ = _loc6_ - Math.PI / 2;
               this.arrBubbleFields[this.var_5 - 1 as any].angle = this.arrBubbleFields[this.var_5 - 1 as any].StartAngle = _loc6_;
            }
         }
         else
         {
            this.txtButtonRollOverSetting_txt.text = "You can\'t switch with an empty Bubblefield";
         }
      }
      
      private method_484(param1: any): void
      {
         if(param1.target.ID != -1)
         {
            (param1.target.line_mc as any).alpha = 1;
         }
         this.txtButtonRollOverSetting_txt.text = "Tanks in your arena, max of 10";
      }
      
      private method_293(param1: any): void
      {
         var var_10: any;

         var _loc2_: number = 0;
         if(this.var_10.length > 0)
         {
            return;
         }
         if(this.var_5 < this.arrBubbleFields.length - 1)
         {
            this.var_5 += 1;
            _loc2_ = 0;
            while(_loc2_ < this.arrBubbleFields.length)
            {
               if(_loc2_ + 5 - this.var_5 >= 0 && _loc2_ + 5 - this.var_5 <= this.var_16.length - 1)
               {
                  this.arrBubbleFields[_loc2_ as any].tweenX = this.var_16[_loc2_ + 5 - this.var_5 as any].x;
                  this.arrBubbleFields[_loc2_ as any].tweenY = this.var_16[_loc2_ + 5 - this.var_5 as any].y;
                  this.method_198(this.arrBubbleFields[_loc2_ as any]);
               }
               _loc2_++;
            }
            this.UpdateEnemyButtons();
         }
         else if(!this.method_553())
         {
            if(this.var_5 > this.arrBubbleFields.length - 1)
            {
               this.var_5 = this.arrBubbleFields.length - 1;
            }
            this.txtButtonRollOverSetting_txt.text = "You need at least 1 enemy to add a bubblefield";
         }
         else
         {
            this.method_293(param1);
         }
      }
      
      public Destroy(): void
      {
         var var_5: any, var_16: any, var_27: any, var_103: any, var_41: any, var_8: any, var_209: any;

         this.currentArena = null as any;
         this.var_5 = 0;
         this.var_16.length = 0;
         this.var_16 = null as any;
         this.arrBubbleFields.length = 0;
         this.arrBubbleFields = null as any;
         this.var_27.length = 0;
         this.var_27 = null as any;
         this.var_103.length = 0;
         this.var_103 = null as any;
         this.var_41.length = 0;
         this.var_41 = null as any;
         this.var_8.method_10();
         this.var_8 = null as any;
         this.refMain = null as any;
         this.var_209.method_232();
         this.var_209.method_297("mainEffects");
         this.var_209.method_417();
         while(this.numChildren > 0)
         {
            this.removeChildAt(0);
         }
      }
      
      public Update(): void
      {
         var var_531: any, var_117: any;

         var _loc4_: string = null as any;
         var _loc5_: number = NaN;
         var _loc6_: number = NaN;
         var _loc7_: number = 0;
         var _loc8_: ArenaCreatorBubblefield = null as any;
         var _loc9_: MovieClip = null as any;
         var _loc10_: MovieClip = null as any;
         var _loc11_: ArenaCreatorBubblefield = null as any;
         var _loc12_: number = 0;
         if(this.var_531)
         {
            this.var_117.alpha -= 0[05];
         }
         if(this.currentArena.var_6.length - 1 == this.var_5)
         {
            this.btnRightArrow_mc.ArrowPlusSign_mc.gotoAndStop(2);
         }
         else
         {
            this.btnRightArrow_mc.ArrowPlusSign_mc.gotoAndStop(1);
         }
         this.var_209.Run();
         var _loc1_: boolean = true;
         var _loc2_: number = 0;
         while(_loc2_ < this.var_41.length)
         {
            _loc1_ = true;
            if(Math.abs(this.var_41[_loc2_ as any].x - this.var_41[_loc2_ as any].tweenX) > 1[5])
            {
               this.var_41[_loc2_ as any].x = this.var_41[_loc2_ as any].x * 0[9] + this.var_41[_loc2_ as any].tweenX * 0[1];
               _loc1_ = false;
            }
            if(Math.abs(this.var_41[_loc2_ as any].y - this.var_41[_loc2_ as any].tweenY) > 1[5])
            {
               this.var_41[_loc2_ as any].x = this.var_41[_loc2_ as any].y * 0[9] + this.var_41[_loc2_ as any].tweenY * 0[1];
               _loc1_ = false;
            }
            if(this.var_41[_loc2_ as any].tweenX == this.var_16[5].x && this.var_41[_loc2_ as any].tweenY == this.var_16[5].y)
            {
               this.var_41[_loc2_ as any].height = this.var_41[_loc2_ as any].height * 0[9] + 91 * 0[1];
               this.var_41[_loc2_ as any].width = this.var_41[_loc2_ as any].width * 0[9] + 91 * 0[1];
            }
            else
            {
               this.var_41[_loc2_ as any].height = this.var_41[_loc2_ as any].height * 0[9] + 37 * 0[1];
               this.var_41[_loc2_ as any].width = this.var_41[_loc2_ as any].width * 0[9] + 37 * 0[1];
            }
            if(_loc1_ == true)
            {
               this.var_41.splice(_loc2_,1);
            }
            _loc2_++;
         }
         var _loc3_: number = 0;
         _loc3_ = 0;
         while(_loc3_ < this.var_77.length)
         {
            _loc1_ = true;
            if(Math.abs(this.var_77[_loc3_ as any].alpha - this.var_77[_loc3_ as any].nextAlpha) > 0[01])
            {
               if(this.var_117 != this.var_77[_loc3_ as any])
               {
                  this.var_77[_loc3_ as any].alpha = this.var_77[_loc3_ as any].alpha * 0[9] + this.var_77[_loc3_ as any].nextAlpha * 0[1];
               }
               else
               {
                  this.var_77[_loc3_ as any].alpha = this.var_77[_loc3_ as any].alpha * 0[98] + this.var_77[_loc3_ as any].nextAlpha * 0[02];
               }
               _loc1_ = false;
            }
            if(_loc1_ == true)
            {
               if(this.var_77[_loc3_ as any].blnRemoveMe)
               {
                  if(this.var_77[_loc3_ as any] != null)
                  {
                     this.removeChild(this.var_77[_loc3_ as any]);
                     this.var_77[_loc3_ as any] = null as any;
                  }
               }
               this.var_77.splice(_loc3_,1);
            }
            _loc3_++;
         }
         _loc3_ = 0;
         while(_loc3_ < this.var_10.length)
         {
            _loc1_ = true;
            this.var_10[_loc3_ as any].x = this.var_10[_loc3_ as any].centerPointX + Math.sin(this.var_10[_loc3_ as any].angle) * this.var_10[_loc3_ as any].distance;
            this.var_10[_loc3_ as any].y = this.var_10[_loc3_ as any].centerPointY + Math.cos(this.var_10[_loc3_ as any].angle) * this.var_10[_loc3_ as any].distance;
            this.var_10[_loc3_ as any].width = this.var_10[_loc3_ as any].width * 0[95] + this.var_10[_loc3_ as any].scaleTween * 0[05];
            this.var_10[_loc3_ as any].height = this.var_10[_loc3_ as any].height * 0[95] + this.var_10[_loc3_ as any].scaleTween * 0[05];
            if(Boolean(this.var_10[_loc3_ as any].StartAngle + Math.PI > this.var_10[_loc3_ as any].angle) && Boolean(this.var_10[_loc3_ as any].blnLeft) || this.var_10[_loc3_ as any].StartAngle - Math.PI < this.var_10[_loc3_ as any].angle && !this.var_10[_loc3_ as any].blnLeft)
            {
               _loc1_ = false;
               if(this.var_10[_loc3_ as any].blnLeft)
               {
                  this.var_10[_loc3_ as any].angle += Math.PI / this.var_10[_loc3_ as any].intDivider;
               }
               else
               {
                  this.var_10[_loc3_ as any].angle -= Math.PI / this.var_10[_loc3_ as any].intDivider;
               }
               if(Boolean(this.var_10[_loc3_ as any].StartAngle + Math.PI / 2 > this.var_10[_loc3_ as any].angle) && Boolean(this.var_10[_loc3_ as any].blnLeft) || this.var_10[_loc3_ as any].StartAngle - Math.PI / 2 < this.var_10[_loc3_ as any].angle && !this.var_10[_loc3_ as any].blnLeft)
               {
                  this.var_10[_loc3_ as any].intDivider = 1 + this.var_10[_loc3_ as any].intDivider * 0[8];
               }
               else if(this.var_10[_loc3_ as any].intDivider < 280)
               {
                  --this.var_10[_loc3_ as any].intDivider;
                  this.var_10[_loc3_ as any].intDivider *= 1[25];
               }
            }
            else
            {
               this.var_10[_loc3_ as any].x = this.var_10[_loc3_ as any].centerPointX + Math.sin(this.var_10[_loc3_ as any].StartAngle + Math.PI) * this.var_10[_loc3_ as any].distance;
               this.var_10[_loc3_ as any].y = this.var_10[_loc3_ as any].centerPointY + Math.cos(this.var_10[_loc3_ as any].StartAngle + Math.PI) * this.var_10[_loc3_ as any].distance;
            }
            if(_loc1_ == true)
            {
               this.var_10[_loc3_ as any].(objSister as any).x = this.var_10[_loc3_ as any].objSister.centerPointX + Math.sin(this.var_10[_loc3_ as any].objSister.StartAngle + Math.PI) * this.var_10[_loc3_ as any].objSister.distance;
               this.var_10[_loc3_ as any].(objSister as any).y = this.var_10[_loc3_ as any].objSister.centerPointY + Math.cos(this.var_10[_loc3_ as any].objSister.StartAngle + Math.PI) * this.var_10[_loc3_ as any].objSister.distance;
               _loc4_ = this.var_10[_loc3_ as any].objSister.txtBubbleFieldNum_txt.text;
               this.var_10[_loc3_ as any].objSister.txtBubbleFieldNum_txt.text = this.var_10[_loc3_ as any].txtBubbleFieldNum_txt.text;
               this.var_10[_loc3_ as any].txtBubbleFieldNum_txt.text = _loc4_;
               _loc7_ = 0;
               while(_loc7_ < this.arrBubbleFields.length)
               {
                  if(this.arrBubbleFields[_loc7_ as any] == this.var_10[_loc3_ as any])
                  {
                     _loc5_ = _loc7_;
                  }
                  if(this.arrBubbleFields[_loc7_ as any] == this.var_10[_loc3_ as any].objSister)
                  {
                     _loc6_ = _loc7_;
                  }
                  _loc7_++;
               }
               _loc8_ = this.arrBubbleFields[_loc5_ as any];
               this.arrBubbleFields[_loc5_ as any] = this.arrBubbleFields[_loc6_ as any];
               this.arrBubbleFields[_loc6_ as any] = _loc8_;
               _loc9_ = this.var_209.method_60(new (ArenaCreatorBubblefieldFlash as any)(),this.var_10[_loc3_ as any].x,this.var_10[_loc3_ as any].y,"mainEffects");
               _loc10_ = this.var_209.method_60(new (ArenaCreatorBubblefieldFlash as any)(),this.var_10[_loc3_ as any].objSister.x,this.var_10[_loc3_ as any].objSister.y,"mainEffects");
               (_loc9_ as any).width = this.var_10[_loc3_ as any].width;
               (_loc9_ as any).height = this.var_10[_loc3_ as any].height;
               (_loc10_ as any).width = this.var_10[_loc3_ as any].objSister.width;
               (_loc10_ as any).height = this.var_10[_loc3_ as any].objSister.height;
               _loc11_ = this.var_10[_loc3_ as any].objSister;
               this.var_10.splice(_loc3_,1);
               _loc12_ = 0;
               while(_loc12_ < this.var_10.length)
               {
                  if(this.var_10[_loc12_ as any] == _loc11_)
                  {
                     this.var_10.splice(_loc12_,1);
                     break;
                  }
                  _loc12_++;
               }
               this.UpdateEnemyButtons();
            }
            _loc3_++;
         }
      }
      
      private method_278(param1: any): void
      {
         var _loc5_: any = null as any;
         var _loc6_: any = undefined;
         var _loc7_: any = null as any;
         var _loc2_: URLLoader = (param1.target as unknown as URLLoader);
         var _loc3_: URLVariables = new (URLVariables as any)(_loc2_.data);
         var _loc4_: number = Number(_loc3_.intResponse);
         if(_loc4_ == 1000)
         {
            if(_loc3_.intTankResponse != "")
            {
               _loc5_ = _loc3_.intTankResponse.split(",");
               _loc6_ = 0;
               while(_loc6_ < _loc5_.length)
               {
                  _loc7_ = _loc5_[_loc6_ as any].split("-");
                  if(_loc7_[1].substr(0,1) == "E")
                  {
                     this.refMain.EditTankID(_loc7_[0],_loc7_[1]);
                  }
                  _loc6_ += 1;
               }
            }
            if(_loc3_.strArenaId.substr(0,1) == "G")
            {
               this.currentArena.strID = _loc3_.strArenaId;
               this.refMain.objCurrentPlayer.EditPreviousArenaID(this.currentArena);
            }
            this.refMain.SaveAllData();
            this.refMain.SaveGameData();
            if(this.var_117 != null)
            {
               if(this.contains(this.var_117))
               {
                  this.removeChild(this.var_117);
                  this.var_117 = null as any;
               }
            }
            this.ShareArena_mc.gotoAndStop(8);
            this.ShareArena_mc.data_txt.text = this.currentArena.strID;
            this.var_8.method_4(this.ShareArena_mc.btnExit_mc,true,this.method_314);
            this.var_8.method_4(this.ShareArena_mc.share_btn,true,this.method_598);
         }
         else
         {
            if(this.var_117 != null)
            {
               if(this.contains(this.var_117))
               {
                  this.removeChild(this.var_117);
                  this.var_117 = null as any;
               }
            }
            this.var_8.method_7(this.ShareArena_mc.btnExit_mc);
            this.var_8.method_7(this.ShareArena_mc.share_btn);
            this.ShareArena_mc.gotoAndStop(9);
            this.method_80(_loc4_);
            this.var_8.method_4(this.ShareArena_mc.return_btn,true,this.method_566);
            this.var_8.method_4(this.ShareArena_mc.exit_btn,true,this.method_572);
            this.refMain.objCurrentPlayer.DeletePrevArena();
         }
      }
      
      private method_566(param1: any): void
      {
         var var_8: any;

         this.var_8.method_7(this.ShareArena_mc.btnExit_mc);
         this.var_8.method_7(this.ShareArena_mc.share_btn);
         this.ShareArena_mc.gotoAndStop(6);
         this.ShareArena_mc.author_txt.text = this.refMain.objCurrentPlayer.profileName;
         this.ShareArena_mc.author_txt.addEventListener("focusin", this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.addEventListener("focusin", this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.addEventListener("textInput", this.method_51.bind(this));
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_267);
         this.var_8.method_4(this.ShareArena_mc.btnContinue_mc,true,this.ConfirmSubmitArena);
      }
      
      private CallCallbackFunction(param1: any): any
      {
         var var_8: any;

         this.var_8.method_10();
         this.funCallBackButton();
      }
      
      public LoadAnArena(param1: ArenaData, param2: number, param3: string = null): void
      {
         var var_5: any, var_6: any;

         var a: number;
         var tempBubbleFields: ArenaCreatorBubblefield = null as any;
         var tankData: TankData = null as any;
         var blnNotSaved: boolean = false;
         var TankDataSavedList: TankData = null as any;
         var argArena: ArenaData = param1;
         var currentBubbleField: number = param2;
         var argStrEnemyTank: string = param3;
         this.currentArena = argArena;
         this.var_5 = currentBubbleField;
         a = 0;
         this.removeChild(this.arrBubbleFields[0]);
         this.arrBubbleFields.pop();
         this.arrBubbleFields.length = 0;
         try
         {
            a = 0;
            while(a < this.currentArena.var_6.length)
            {
               tempBubbleFields = new (ArenaCreatorBubblefield as any)();
               this.addChild(tempBubbleFields);
               this.arrBubbleFields.push(tempBubbleFields as any);
               this.arrBubbleFields[a as any].txtBubbleFieldNum_txt.text = int(a + 1).toString();
               this.arrBubbleFields[a as any].height = 37;
               this.arrBubbleFields[a as any].width = 37;
               if(a == this.var_5)
               {
                  this.arrBubbleFields[a as any].height = 91;
                  this.arrBubbleFields[a as any].width = 91;
               }
               if(a + 5 - this.var_5 > 0 && a + 5 < this.var_16.length - 1)
               {
                  this.arrBubbleFields[a as any].x = this.var_16[a + 5 as any].x;
                  this.arrBubbleFields[a as any].y = this.var_16[a + 5 as any].y;
                  this.arrBubbleFields[a as any].tweenX = this.arrBubbleFields[a as any].x;
                  this.arrBubbleFields[a as any].tweenY = this.arrBubbleFields[a as any].y;
               }
               else if(a + 5 - this.var_5 <= 0)
               {
                  this.arrBubbleFields[a as any].x = this.var_16[0].x;
                  this.arrBubbleFields[a as any].y = this.var_16[0].y;
                  this.arrBubbleFields[a as any].tweenX = this.arrBubbleFields[a as any].x;
                  this.arrBubbleFields[a as any].tweenY = this.arrBubbleFields[a as any].y;
               }
               else
               {
                  this.arrBubbleFields[a as any].x = this.var_16[this.var_16.length - 1 as any].x;
                  this.arrBubbleFields[a as any].y = this.var_16[this.var_16.length - 1 as any].y;
                  this.arrBubbleFields[a as any].tweenX = this.arrBubbleFields[a as any].x;
                  this.arrBubbleFields[a as any].tweenY = this.arrBubbleFields[a as any].y;
               }
               a++;
            }
         }
         catch(e: any)
         {
         }
         if(argStrEnemyTank != null)
         {
            tankData = new (TankData as any)();
            if(tankData.ImportTankData(argStrEnemyTank))
            {
               blnNotSaved = true;
               a = 0;
               while(a < this.refMain.objCurrentPlayer.arrSavedTanks.length)
               {
                  TankDataSavedList = new (TankData as any)();
                  TankDataSavedList.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[a as any].Data);
                  if(this.method_122(tankData,TankDataSavedList))
                  {
                     blnNotSaved = false;
                     break;
                  }
                  a++;
               }
               if(blnNotSaved)
               {
                  this.refMain.objCurrentPlayer.method_73(argStrEnemyTank);
               }
               this.currentArena.method_66(this.var_5,tankData.strID,tankData.strTankName);
            }
         }
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         this.UpdateQuickKeyButtons();
      }
      
      private method_613(): void
      {
      }
      
      private method_280(param1: any): void
      {
      }
   }
