// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { class_2 } from './class_2';
import { class_77 } from './class_77';
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
export class TankLoadingBox extends Sprite{
  [key: string]: any;
      
      public var_250!: boolean;
      public sprTankData!: TankData;
      public btnStar2_mc!: MovieClip & Record<string, any>;
      public largeName_txt!: TextField;
      public largeTankStats_mc!: MovieClip & Record<string, any>;
      public txtHealth_txt!: TextField;
      public var_2!: MovieClip & Record<string, any>;
      public btnCopy_mc!: MovieClip & Record<string, any>;
      public btnLargeDelete_mc!: MovieClip & Record<string, any>;
      public btnLargeEdit_mc!: MovieClip & Record<string, any>;
      public btnStar5_mc!: MovieClip & Record<string, any>;
      public btnLargeBack_mc!: MovieClip & Record<string, any>;
      public btnStar1_mc!: MovieClip & Record<string, any>;
      public txtDiffRating_txt!: TextField;
      public txtTankID_txt!: TextField;
      public btnFlag_mc!: MovieClip & Record<string, any>;
      public btnStar4_mc!: MovieClip & Record<string, any>;
      public lines_mc!: MovieClip & Record<string, any>;
      public largeAuthor_txt!: TextField;
      public btnLargeSave!: MovieClip & Record<string, any>;
      public txtSpeed_txt!: TextField;
      public var_15!: MovieClip & Record<string, any>;
      public pntDeleteButtonLocation: Point = new (Point as any)();
      public btnStar3_mc!: MovieClip & Record<string, any>;
      public objGameObjectLibrary!: class_2;
      public txtTankData_txt!: TextField;
      public txtBubblesReturned_txt!: TextField;
      public btnTankSelect_mc!: MovieClip & Record<string, any>;
      constructor(){
         var var_2: any;

         // @ts-ignore
         super();
         if(this.var_2.btnDelete_mc != null)
         {
            (this.pntDeleteButtonLocation as any).x = this.var_2.btnDelete_mc.x;
         }
         if(this.var_2.btnDelete_mc != null)
         {
            (this.pntDeleteButtonLocation as any).y = this.var_2.btnDelete_mc.y;
         }
         if(this.largeTankStats_mc != null)
         {
            (this.largeTankStats_mc as any).alpha = 0;
         }
         if(this.btnLargeDelete_mc != null)
         {
            (this.btnLargeDelete_mc as any).alpha = 0;
         }
         if(this.btnLargeBack_mc != null)
         {
            (this.btnLargeBack_mc as any).alpha = 0;
         }
         if(this.largeName_txt != null)
         {
            this.largeName_txt.text = "";
         }
         if(this.largeAuthor_txt != null)
         {
            this.largeAuthor_txt.text = "";
         }
         this.var_250 = false;
      }
      
      public method_488(param1: TankLoadingBox, param2: number = 1): any
      {
         var var_15: any;

         mouseEnabled = true;
         mouseChildren = true;
         if(this.var_15 != null)
         {
            this.addChild(this.var_15);
            this.removeChild(this.var_15);
            this.var_15 = null as any;
         }
         this.sprTankData = param1.sprTankData;
         this.var_15 = param1.var_15;
         this.addChildAt(this.var_15,1);
         if(param2 != -1)
         {
            (this.var_15 as any).scaleX = (this.var_15 as any).scaleY = param2;
         }
         if(this.largeName_txt != null)
         {
            this.largeName_txt.text = this.sprTankData.strTankName;
         }
         if(this.largeAuthor_txt != null)
         {
            this.largeAuthor_txt.text = "By " + this.sprTankData.strAuthorName;
         }
      }
      
      public DeleteTank(): any
      {
         var var_15: any;

         alpha = 0;
         if(this.var_15 != null)
         {
            if(this.contains(this.var_15))
            {
               this.removeChild(this.var_15);
            }
            this.var_15 = null as any;
         }
         this.var_2.txtTankName_txt.text = "";
         this.var_2.txtClass_txt.text = "";
         this.var_2.txtBubbles_txt.text = "";
         this.var_2.txtGP_txt.text = "";
         mouseEnabled = false;
         mouseChildren = false;
      }
      
      public CopyTankData(param1: TankData): any
      {
         var var_15: any;

         mouseEnabled = true;
         mouseChildren = true;
         if(this.var_15 != null)
         {
            this.addChild(this.var_15);
            this.removeChild(this.var_15);
            this.var_15 = null as any;
         }
         this.sprTankData = param1;
         this.var_15 = this.sprTankData.method_61();
         this.addChildAt(this.var_15,1);
         if(this.largeName_txt != null)
         {
            this.largeName_txt.text = this.sprTankData.strTankName;
         }
         if(this.largeAuthor_txt != null)
         {
            this.largeAuthor_txt.text = "By " + this.sprTankData.strAuthorName;
         }
      }
      
      public Setup(param1: TankData): any
      {
         var _loc9_: MovieClip = null as any;
         var _loc11_: MovieClip = null as any;
         var _loc12_: MovieClip = null as any;
         var _loc14_: MovieClip = null as any;
         var _loc15_: MovieClip = null as any;
         alpha = 1;
         mouseEnabled = true;
         mouseChildren = true;
         var _loc2_: boolean = false;
         var _loc3_: any = new (Array as any)();
         _loc3_.push(param1.strID.substr(1,param1.strID.length - 1) as any);
         var _loc4_: number = Number(_loc3_[0]);
         var _loc5_: string = param1.strID.substr(0,1);
         if(_loc4_ >= 10000120 && _loc4_ <= 10000145 && _loc5_ == "E")
         {
            _loc2_ = true;
         }
         if(_loc4_ >= 10000181 && _loc4_ <= 10000221 && _loc5_ == "A")
         {
            _loc2_ = true;
         }
         this.var_250 = false;
         var _loc6_: boolean = false;
         if(_loc5_ == "E")
         {
            _loc6_ = true;
         }
         if(!class_2.method_64().objCurrentPlayer.method_17(param1,_loc6_) && class_2.method_64().objCurrentPlayer.DoesProfileHaveAllThePartsForTank(param1))
         {
            this.var_250 = true;
         }
         (this.var_2.CautionSign_mc as any).alpha = 0;
         if(_loc2_ || param1.tankType == 4)
         {
            (this.var_2.btnDelete_mc as any).alpha = 0;
            this.var_2.btnDelete_mc.mouseEnabled = false;
         }
         else
         {
            (this.var_2.btnDelete_mc as any).alpha = 1;
            this.var_2.btnDelete_mc.mouseEnabled = true;
         }
         if(param1.tankType == 1)
         {
            (this.var_2.btnSave_mc as any).alpha = 0;
            this.var_2.btnSave_mc.mouseEnabled = false;
            if(this.btnLargeSave != null)
            {
               (this.btnLargeSave as any).alpha = 0;
               this.btnLargeSave.mouseEnabled = false;
            }
         }
         else
         {
            (this.var_2.btnSave_mc as any).alpha = 1;
            this.var_2.btnSave_mc.mouseEnabled = true;
            if(this.btnLargeSave != null)
            {
               (this.btnLargeSave as any).alpha = 1;
               this.btnLargeSave.mouseEnabled = true;
            }
         }
         if(this.var_15 != null)
         {
            this.addChild(this.var_15);
            this.removeChild(this.var_15);
            this.var_15 = null as any;
         }
         this.var_15 = new (MovieClip as any)();
         this.objGameObjectLibrary = class_2.getInstance();
         this.sprTankData = param1;
         var _loc7_: number = height - 80;
         var _loc8_: number = width - 50;
         this.var_15 = this.sprTankData.method_61();
         this.addChildAt(this.var_15,1);
         _loc9_ = new (class_77 as any)();
         this.var_15.addChild(_loc9_);
         (_loc9_ as any).alpha = 0;
         var _loc10_: number = this.sprTankData.GetLargestXDistanceFromRegistration();
         _loc11_ = new (class_77 as any)();
         this.var_15.addChild(_loc11_);
         (_loc11_ as any).x = _loc10_;
         (_loc11_ as any).alpha = 0;
         _loc12_ = new (class_77 as any)();
         this.var_15.addChild(_loc12_);
         (_loc12_ as any).x = -1 * _loc10_;
         (_loc12_ as any).alpha = 0;
         var _loc13_: number = this.sprTankData.GetLargestYDistanceFromRegistration();
         _loc14_ = new (class_77 as any)();
         this.var_15.addChild(_loc14_);
         (_loc14_ as any).y = _loc13_;
         (_loc14_ as any).alpha = 0;
         _loc15_ = new (class_77 as any)();
         this.var_15.addChild(_loc15_);
         (_loc15_ as any).y = -1 * _loc13_;
         (_loc15_ as any).alpha = 0;
         if(this.var_15.width >= _loc8_)
         {
            (this.var_15 as any).width = _loc8_;
            (this.var_15 as any).scaleY = this.var_15.scaleX;
         }
         if(this.var_15.height >= _loc7_)
         {
            (this.var_15 as any).height = _loc7_;
            (this.var_15 as any).scaleX = this.var_15.scaleY;
         }
         this.var_2.txtTankName_txt.text = this.sprTankData.strTankName;
         this.var_2.txtClass_txt.text = "Class: " + this.sprTankData.numClass;
         this.var_2.txtBubbles_txt.text = this.sprTankData.numBubbles;
         this.var_2.txtGP_txt.text = this.sprTankData.numGunPoints;
         this.var_2.addChild(this.var_2.CautionSign_mc);
      }
   }
