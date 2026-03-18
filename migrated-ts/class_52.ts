// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { class_3 } from './class_3';
import { class_77 } from './class_77';
import { class_79 } from './class_79';
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
export class class_52 extends Sprite{
  [key: string]: any;
      
      public btnCreateATank_mc!: MovieClip & Record<string, any>;
      public btnTank3_mc!: MovieClip & Record<string, any>;
      public btnTank1_mc!: MovieClip & Record<string, any>;
      public txtTank1Name_txt!: TextField;
      public var_158: number = 0;
      public txtTank3Name_txt!: TextField;
      public txtTank2Name_txt!: TextField;
      public btnTank2_mc!: MovieClip & Record<string, any>;
      public refMain!: class_79;
      public btnSearchForTanks_mc!: MovieClip & Record<string, any>;
      public btnBack_mc!: MovieClip & Record<string, any>;
      public var_8!: class_3;
      public var_35!: any;
      constructor(param1: number = 1, param2: class_79 = null){
    var var_35: any, var_8: any, var_14: any, var_158: any;

    // @ts-ignore
    super();
         var _loc3_: number = NaN;

         0;






         this.var_35 = new (Array as any)();
         if(param2 != null)
         {
            this.refMain = param2;
            this.var_8 = new (class_3 as any)();
            this.var_8.Setup(null,this.method_107,this.method_112);
            this.method_584();
            _loc3_ = 0;
            var _loc4_: any = new (Array as any)();
            var _loc5_: number = this.refMain.gData.var_14.length - 1;
            if(this.var_158 < 0)
            {
               this.var_158 = 0;
            }
            else if(this.var_158 > 25)
            {
               this.var_158 = 25;
            }
            var _loc6_: TankData = this.refMain.RetrieveTankDataFromID(this.var_35[this.var_158 as any].strTank1);
            var _loc7_: MovieClip = _loc6_.method_61();
            this.btnTank1_mc.addChild(null);
            this.txtTank1Name_txt.text = (null as any).strTankName;
            this.method_300(null,this.btnTank1_mc,null);
            var _loc8_: TankData = this.refMain.RetrieveTankDataFromID(this.var_35[this.var_158 as any].strTank2);
            var _loc9_: MovieClip = _loc8_.method_61();
            this.btnTank2_mc.addChild(null);
            this.txtTank2Name_txt.text = (null as any).strTankName;
            this.method_300(null,this.btnTank2_mc,null);
            var _loc10_: TankData = this.refMain.RetrieveTankDataFromID(this.var_35[this.var_158 as any].strTank3);
            var _loc11_: MovieClip = _loc10_.method_61();
            this.btnTank3_mc.addChild(null);
            this.txtTank3Name_txt.text = (null as any).strTankName;
            this.method_300(null,this.btnTank3_mc,null);
            (this.btnTank1_mc.highlight as any).alpha = 0;
            (this.btnTank2_mc.highlight as any).alpha = 0;
            (this.btnTank3_mc.highlight as any).alpha = 0;
            this.var_8.method_4(this.btnTank1_mc,true,this.Tank1Pressed,this.method_265,this.method_231);
            this.var_8.method_4(this.btnTank2_mc,true,this.Tank2Pressed,this.method_265,this.method_231);
            this.var_8.method_4(this.btnTank3_mc,true,this.Tank3Pressed,this.method_265,this.method_231);
            this.var_8.method_4(this.btnCreateATank_mc,true,this.CreateATank);
            this.var_8.method_4(this.btnSearchForTanks_mc,true,this.SearchForTanks);
            this.var_8.method_4(this.btnBack_mc,true,this.method_582);
         }
      }
      
      private SearchForTanks(param1: any): any
      {
         this.refMain.TransitionQuickTanksToSeachForATank();
      }
      
      private method_107(param1: any): any
      {
         param1.target.gotoAndStop(2);
      }
      
      private method_231(param1: any): any
      {
         (param1.target.highlight as any).alpha = 0;
      }
      
      private method_265(param1: any): any
      {
         (param1.target.highlight as any).alpha = 1;
      }
      
      private method_300(param1: TankData, param2: Sprite, param3: MovieClip): void
      {
         var _loc5_: number = NaN;
         var _loc6_: MovieClip = null as any;
         var _loc8_: MovieClip = null as any;
         var _loc9_: MovieClip = null as any;
         var _loc11_: MovieClip = null as any;
         var _loc12_: MovieClip = null as any;
         var _loc4_: number = param2.height - 80;
         _loc5_ = param2.width - 80;
         _loc6_ = new (class_77 as any)();
         param3.addChild(_loc6_);
         (_loc6_ as any).alpha = 0;
         var _loc7_: number = param1.GetLargestXDistanceFromRegistration();
         _loc8_ = new (class_77 as any)();
         param3.addChild(_loc8_);
         (_loc8_ as any).x = _loc7_;
         (_loc8_ as any).alpha = 0;
         _loc9_ = new (class_77 as any)();
         param3.addChild(_loc9_);
         (_loc9_ as any).x = -1 * _loc7_;
         (_loc9_ as any).alpha = 0;
         var _loc10_: number = param1.GetLargestYDistanceFromRegistration();
         _loc11_ = new (class_77 as any)();
         param3.addChild(_loc11_);
         (_loc11_ as any).y = _loc10_;
         (_loc11_ as any).alpha = 0;
         _loc12_ = new (class_77 as any)();
         param3.addChild(_loc12_);
         (_loc12_ as any).y = -1 * _loc10_;
         (_loc12_ as any).alpha = 0;
         if(param3.width >= _loc5_)
         {
            (param3 as any).width = _loc5_;
            (param3 as any).scaleY = param3.scaleX;
         }
         if(param3.height >= _loc4_)
         {
            (param3 as any).height = _loc4_;
            (param3 as any).scaleX = param3.scaleY;
         }
      }
      
      private Tank2Pressed(param1: any): any
      {
         var var_35: any, var_158: any;

         this.refMain.method_181(this.refMain.RetrieveTankDataFromID(this.var_35[this.var_158 as any].strTank2).ExportTankData());
      }
      
      public method_584(): void
      {
         var var_35: any;

         this.var_35.push({
            "strTank1":"A10000181",
            "strTank2":"A10000181",
            "strTank3":"A10000181"
         } as any);
         this.var_35.push({
            "strTank1":"A10000182",
            "strTank2":"A10000181",
            "strTank3":"A10000183"
         } as any);
         this.var_35.push({
            "strTank1":"A10000184",
            "strTank2":"A10000185",
            "strTank3":"A10000186"
         } as any);
         this.var_35.push({
            "strTank1":"A10000187",
            "strTank2":"A10000185",
            "strTank3":"A10000186"
         } as any);
         this.var_35.push({
            "strTank1":"A10000187",
            "strTank2":"A10000189",
            "strTank3":"A10000190"
         } as any);
         this.var_35.push({
            "strTank1":"A10000191",
            "strTank2":"A10000192",
            "strTank3":"A10000193"
         } as any);
         this.var_35.push({
            "strTank1":"A10000191",
            "strTank2":"A10000192",
            "strTank3":"A10000193"
         } as any);
         this.var_35.push({
            "strTank1":"A10000191",
            "strTank2":"A10000192",
            "strTank3":"A10000193"
         } as any);
         this.var_35.push({
            "strTank1":"A10000194",
            "strTank2":"A10000195",
            "strTank3":"A10000196"
         } as any);
         this.var_35.push({
            "strTank1":"A10000194",
            "strTank2":"A10000195",
            "strTank3":"A10000196"
         } as any);
         this.var_35.push({
            "strTank1":"A10000194",
            "strTank2":"A10000195",
            "strTank3":"A10000196"
         } as any);
         this.var_35.push({
            "strTank1":"A10000197",
            "strTank2":"A10000198",
            "strTank3":"A10000199"
         } as any);
         this.var_35.push({
            "strTank1":"A10000197",
            "strTank2":"A10000198",
            "strTank3":"A10000199"
         } as any);
         this.var_35.push({
            "strTank1":"A10000197",
            "strTank2":"A10000198",
            "strTank3":"A10000199"
         } as any);
         this.var_35.push({
            "strTank1":"A10000200",
            "strTank2":"A10000201",
            "strTank3":"A10000202"
         } as any);
         this.var_35.push({
            "strTank1":"A10000200",
            "strTank2":"A10000201",
            "strTank3":"A10000202"
         } as any);
         this.var_35.push({
            "strTank1":"A10000203",
            "strTank2":"A10000204",
            "strTank3":"A10000205"
         } as any);
         this.var_35.push({
            "strTank1":"A10000203",
            "strTank2":"A10000204",
            "strTank3":"A10000205"
         } as any);
         this.var_35.push({
            "strTank1":"A10000207",
            "strTank2":"A10000208",
            "strTank3":"A10000209"
         } as any);
         this.var_35.push({
            "strTank1":"A10000207",
            "strTank2":"A10000208",
            "strTank3":"A10000209"
         } as any);
         this.var_35.push({
            "strTank1":"A10000210",
            "strTank2":"A10000211",
            "strTank3":"A10000212"
         } as any);
         this.var_35.push({
            "strTank1":"A10000210",
            "strTank2":"A10000211",
            "strTank3":"A10000212"
         } as any);
         this.var_35.push({
            "strTank1":"A10000213",
            "strTank2":"A10000214",
            "strTank3":"A10000215"
         } as any);
         this.var_35.push({
            "strTank1":"A10000213",
            "strTank2":"A10000214",
            "strTank3":"A10000215"
         } as any);
         this.var_35.push({
            "strTank1":"A10000216",
            "strTank2":"A10000217",
            "strTank3":"A10000219"
         } as any);
         this.var_35.push({
            "strTank1":"A10000222",
            "strTank2":"A10000221",
            "strTank3":"A10000220"
         } as any);
      }
      
      public Destroy(): any
      {
         var var_8: any, var_35: any;

         this.var_8.method_10();
         this.var_35.length = 0;
         this.var_35 = null as any;
         while(numChildren > 0)
         {
            this.removeChildAt(0);
         }
      }
      
      private method_112(param1: any): any
      {
         param1.target.gotoAndStop(1);
      }
      
      private Tank3Pressed(param1: any): any
      {
         var var_35: any, var_158: any;

         this.refMain.method_181(this.refMain.RetrieveTankDataFromID(this.var_35[this.var_158 as any].strTank3).ExportTankData());
      }
      
      private Tank1Pressed(param1: any): any
      {
         var var_35: any, var_158: any;

         this.refMain.method_181(this.refMain.RetrieveTankDataFromID(this.var_35[this.var_158 as any].strTank1).ExportTankData());
      }
      
      private method_582(param1: any): any
      {
         this.refMain.method_181();
      }
      
      private CreateATank(param1: any): any
      {
         this.refMain.TransitionQuickTanksToCreateATank();
      }
   }
