// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { class_2 } from './class_2';
import { class_3 } from './class_3';
import { class_5 } from './class_5';
import { class_56 } from './class_56';
import { class_60 } from './class_60';
import { class_79 } from './class_79';
import { class_96 } from './class_96';
import { class_1 } from './package_1/class_1';
import { class_11 } from './package_2/class_11';
import { class_12 } from './package_2/class_12';
import { PKCS5 } from './package_2/PKCS5';
import { class_13 } from './package_3/class_13';
import { class_14 } from './package_4/class_14';
import { PlayerProfile } from './PlayerProfile';
import { TankData } from './TankData';
import { TankLoadingBox } from './TankLoadingBox';

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
export class TankViewerScreen extends MovieClip{
  [key: string]: any;
      
      public btnFirst_mc!: MovieClip & Record<string, any>;
      public btnCreateATank_mc!: MovieClip & Record<string, any>;
      private var_297: boolean = false;
      public btnEnterTankID_mc!: MovieClip & Record<string, any>;
      private var_544!: Point;
      public DetailedTank_mc!: class_56;
      private var_8!: class_3;
      private var_131!: Point;
      public TankLoad3_mc!: TankLoadingBox;
      private pntTank3Screen!: Point;
      private var_36: number = 1;
      public txtPageNumCurrent_txt!: TextField;
      private var_380!: number;
      private var_574!: Point;
      public var_333!: class_3;
      private arrSearchFilters!: any;
      private urlLoader!: URLLoader;
      public btnNext_mc!: MovieClip & Record<string, any>;
      private var_23: Function = null as any;
      public btnMainMenu_mc!: MovieClip & Record<string, any>;
      public TankLoad4_mc!: TankLoadingBox;
      private var_130!: any;
      public var_174!: boolean;
      private arrSearchSorts!: any;
      private var_490!: Function;
      public txtExplination_txt!: TextField;
      private intCurrentLocationInTanksQueue: number = 0;
      public NotifyScreen_mc!: MovieClip & Record<string, any>;
      public selectTankScreen_mc!: MovieClip & Record<string, any>;
      private refMain!: class_79;
      private var_70: string = null as any;
      public btnSearchForTanks_mc!: MovieClip & Record<string, any>;
      private pntTank2Screen!: Point;
      public btnLoadCurrentProfile_mc!: MovieClip & Record<string, any>;
      private arrTanksInqueue!: any;
      public btnSortTanks_mc!: MovieClip & Record<string, any>;
      private var_117!: class_96;
      private var_492: boolean = false;
      public btnPrev_mc!: MovieClip & Record<string, any>;
      private var_39!: any;
      private strSortType: string = "Avatar";
      private var_542!: Point;
      private strLargeTankData: string = "";
      public btnEnterTankCode_mc!: MovieClip & Record<string, any>;
      private objGameObjectLibrary!: class_2;
      public TankLoad1_mc!: TankLoadingBox;
      public btnCurrentPoints_mc!: MovieClip & Record<string, any>;
      private var_581!: Point;
      private strViewerType: string = "AvatarLocal";
      private pntTank4Screen!: Point;
      private var_129!: any;
      private var_444!: Sprite;
      private var_116!: any;
      private var_577!: Point;
      private var_166: number = 1;
      public btnViewLocalTanks_mc!: MovieClip & Record<string, any>;
      private var_76: boolean = false;
      private pntTank1Screen!: Point;
      public SearchForTanksScreen_mc!: MovieClip & Record<string, any>;
      private var_254: string = "";
      public TankLoad2_mc!: TankLoadingBox;
      private strPrimarySecondary: string = "";
      private var_154!: class_5;
      public var_22: boolean = false;
      public btnMyAvatar_mc!: MovieClip & Record<string, any>;
      public Tutorial_mc!: MovieClip & Record<string, any>;
      constructor(param1: class_79 = null, param2: boolean = false, param3: Function = null, param4: any = "", param5: Function = null, param6: boolean = true, param7: string = null, param8: any = null){
    var var_39: any, var_129: any, var_130: any, var_116: any, var_174: any, var_23: any, var_254: any, var_297: any, var_492: any, var_490: any, var_70: any;

    // @ts-ignore
    super();
         var _loc9_: boolean = false;
         var _loc10_: number = 0;
         this.arrTanksInqueue = new (Array as any)();
         this.arrSearchFilters = new (Array as any)();
         this.arrSearchSorts = new (Array as any)();
         this.urlLoader = new (URLLoader as any)();
         this.var_39 = new (Array as any)();
         if(param2)
         {
            this.var_129 = new (Array as any)();
            this.var_130 = new (Array as any)();
            this.var_116 = new (Array as any)();
            this.var_174 = false;
            this.refMain = param1;
            this.var_23 = param3;
            this.var_254 = param4;
            this.var_297 = param6;
            this.var_492 = param6;
            this.var_490 = param5;
            this.var_70 = param7;
            if(this.refMain.arrMenuNavigation[this.refMain.arrMenuNavigation.length - 1 as any] == 4 && this.refMain.arrMenuNavigation[this.refMain.arrMenuNavigation.length - 2 as any] == 4 && this.refMain.arrMenuNavigation[this.refMain.arrMenuNavigation.length - 3 as any] == 6 && this.refMain.arrMenuNavigation[this.refMain.arrMenuNavigation.length - 4 as any] == 1)
            {
               this.var_174 = true;
            }
            _loc9_ = false;
            if(this.refMain.arrMenuNavigation.length == 1)
            {
               this.var_22 = true;
            }
            _loc10_ = 0;
            while(_loc10_ < this.refMain.arrMenuNavigation.length)
            {
               if(this.refMain.arrMenuNavigation[_loc10_ as any] == 3 || this.refMain.arrMenuNavigation[_loc10_ as any] == 5)
               {
                  this.var_22 = true;
               }
               _loc10_ += 1;
            }
            (this.btnLoadCurrentProfile_mc as any).alpha = 0;
            this.btnLoadCurrentProfile_mc.mouseEnabled = false;
            this.btnLoadCurrentProfile_mc.mouseChildren = false;
            if(this.var_23 == null)
            {
               (this.btnCreateATank_mc as any).alpha = 0;
               this.btnCreateATank_mc.mouseEnabled = false;
               this.btnCreateATank_mc.mouseChildren = false;
               (this.btnMyAvatar_mc as any).alpha = 0;
               this.btnMyAvatar_mc.mouseEnabled = false;
               this.btnMyAvatar_mc.mouseChildren = false;
            }
            else if(this.var_22)
            {
               (this.btnCreateATank_mc as any).alpha = 0;
               this.btnCreateATank_mc.mouseEnabled = false;
               this.btnCreateATank_mc.mouseChildren = false;
            }
            this.objGameObjectLibrary = class_2.getInstance();
            this.var_8 = new (class_3 as any)();
            this.var_8.Setup(null,this.method_107,this.method_112);
            this.var_131 = new (Point as any)(501[6],269[2]);
            (this.btnSortTanks_mc as any).x = 616[55];
            this.strPrimarySecondary = this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.PrimarySecondary_txt.text;
            if(param7 == null)
            {
               this.strViewerType = "AvatarLocal";
               this.method_86();
            }
            else if(param7 == "Avatar")
            {
               this.strViewerType = "AvatarLocal";
               this.method_86();
            }
            else if(param7 == "Enemy")
            {
               this.strViewerType = "EnemyLocal";
               this.method_86();
            }
            if(param8 != null)
            {
               if(param8.length != 0 && param8[param8.length - 1 as any].arrTanksInqueue.length > 0)
               {
                  this.arrSearchFilters = param8[param8.length - 1 as any].arrSearchFilters;
                  this.arrSearchSorts = param8[param8.length - 1 as any].arrSearchSorts;
                  this.arrTanksInqueue = param8[param8.length - 1 as any].arrTanksInqueue;
                  this.intCurrentLocationInTanksQueue = param8[param8.length - 1 as any].intCurrentLocationInTanksQueue;
               }
            }
            this.method_23();
            this.method_24();
            (this.btnSortTanks_mc as any).x = this.var_131.x;
            this.txtExplination_txt.text = "";
            this.pntTank1Screen = new (Point as any)(this.TankLoad1_mc.x,this.TankLoad1_mc.y);
            this.pntTank2Screen = new (Point as any)(this.TankLoad2_mc.x,this.TankLoad2_mc.y);
            this.pntTank3Screen = new (Point as any)(this.TankLoad3_mc.x,this.TankLoad3_mc.y);
            this.pntTank4Screen = new (Point as any)(this.TankLoad4_mc.x,this.TankLoad4_mc.y);
            this.var_544 = new (Point as any)(this.btnFirst_mc.x,this.btnFirst_mc.y);
            this.var_574 = new (Point as any)(this.btnNext_mc.x,this.btnNext_mc.y);
            this.var_542 = new (Point as any)(this.btnPrev_mc.x,this.btnPrev_mc.y);
            (this.DetailedTank_mc as any).alpha = 0;
            (this.DetailedTank_mc.var_2 as any).alpha = 0;
            this.DetailedTank_mc.mouseEnabled = false;
            this.DetailedTank_mc.mouseChildren = false;
            (this.SearchForTanksScreen_mc as any).alpha = 0;
            this.SearchForTanksScreen_mc.mouseEnabled = false;
            this.SearchForTanksScreen_mc.mouseChildren = false;
            (this.NotifyScreen_mc as any).alpha = 0;
            this.NotifyScreen_mc.mouseEnabled = false;
            this.NotifyScreen_mc.mouseChildren = false;
            this.NotifyScreen_mc.txtDisplayMessage_txt.selectable = false;
            this.NotifyScreen_mc.txtDisplayMessage_txt.mouseEnabled = false;
            this.GreyOutBackButton();
            this.GreyOutFirstButton();
            (this.selectTankScreen_mc as any).alpha = 0;
            this.selectTankScreen_mc.mouseEnabled = false;
            this.selectTankScreen_mc.mouseChildren = false;
            (this.TankLoad1_mc.lines_mc as any).alpha = 0;
            (this.TankLoad2_mc.lines_mc as any).alpha = 0;
            (this.TankLoad3_mc.lines_mc as any).alpha = 0;
            (this.TankLoad4_mc.lines_mc as any).alpha = 0;
            this.var_154 = new (class_5 as any)(this.refMain);
            this.var_444 = new (Sprite as any)();
            this.addChild(this.var_444);
            this.var_154.method_119("mainEffects",this.var_444);
            this.method_33();
            if(!this.refMain.objCurrentPlayer.var_253)
            {
               this.var_333 = new (class_3 as any)();
               this.var_333.Setup();
               this.var_333.method_4(this.Tutorial_mc.next_mc,true,this.method_444);
               this.var_333.method_4(this.Tutorial_mc.back_mc,true,this.method_377);
               this.method_78();
            }
            else
            {
               (this.Tutorial_mc as any).alpha = 0;
               this.Tutorial_mc.mouseEnabled = false;
               this.Tutorial_mc.mouseChildren = false;
            }
         }
      }
      
      private HIYesDown(param1: any): void
      {
         this.SelectableDown(param1);
         this.SearchForTanksScreen_mc.btnNo_mc.gotoAndStop(1);
      }
      
      private method_837(param1: number, param2: number, param3: number, param4: number, param5: any = 0, param6: any = 0): number
      {
         param5 = param1 - param3;
         param6 = param2 - param4;
         return Math.sqrt(param5 * param5 + param6 * param6);
      }
      
      private RateTank(param1: string, param2: number): void
      {
         var strRating: string = null as any;
         var strK: string = null as any;
         var pad: class_11 = null as any;
         var data: ByteArray = null as any;
         var kdata: ByteArray = null as any;
         var myCypher: class_12 = null as any;
         var strRatingRequest: string = null as any;
         var url: string = null as any;
         var request: URLRequest = null as any;
         var requestVars: URLVariables = null as any;
         var urlLoader: URLLoader = null as any;
         var argAvatarID: string = param1;
         var argRating: number = param2;
         this.refMain.AddTankRating(argAvatarID,argRating);
         if(argAvatarID.substr(0,1) != "A" && argAvatarID.substr(0,1) != "E")
         {
            return;
         }
         if(argRating < 0)
         {
            argRating = 0;
         }
         else if(argRating > 5)
         {
            argRating = 5;
         }
         strRating = argAvatarID + "," + argRating;
         strK = class_1.method_1(758,768);
         pad = new (PKCS5 as any)();
         data = class_13.toArray(class_13.method_22(strRating));
         kdata = class_13.toArray(class_13.method_22(strK));
         myCypher = class_14.method_46("aes128-ecb",kdata,pad);
         myCypher.encrypt(data);
         strRatingRequest = "" + String(class_13.method_52(data));
         url = "http://s1.herointeractive.com/bta/submit" + argAvatarID.substr(0,1) + "Rating.php";
         request = new (URLRequest as any)(url);
         requestVars = new (URLVariables as any)();
         requestVars.r = strRatingRequest;
         request.data = requestVars;
         request.method = URLRequestMethod.POST;
         urlLoader = new (URLLoader as any)();
         urlLoader = new (URLLoader as any)();
         urlLoader.dataFormat = URLLoaderDataFormat.TEXT;
         try
         {
            urlLoader.load(request);
         }
         catch (e: any)
         {
         }
      }
      
      private method_313(param1: any): void
      {
         if(param1.target.currentFrame == 1)
         {
            param1.target.gotoAndStop(2);
         }
         if(param1.target.currentFrame == 3)
         {
            param1.target.gotoAndStop(4);
         }
         var _loc2_: any = 0;
         while(_loc2_ < this.var_39.length)
         {
            if(param1.target == this.var_39[_loc2_ as any].btn)
            {
               this.txtExplination_txt.text = this.var_39[_loc2_ as any].DescText;
            }
            _loc2_ += 1;
         }
      }
      
      private method_117(param1: any): void
      {
         var var_36: any;

         this.method_47();
         this.intCurrentLocationInTanksQueue = int(this.intCurrentLocationInTanksQueue / 4) * 4;
         this.var_36 = 1 + this.intCurrentLocationInTanksQueue / 4;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.method_9(this.DetailedTank_mc);
         if(this.var_36 == 1)
         {
            this.GreyOutBackButton();
            this.GreyOutFirstButton();
         }
         else
         {
            this.method_43();
         }
         this.method_33();
      }
      
      private ShowCurrentAvatar(param1: any): any
      {
         var _loc8_: any = undefined;
         var _loc9_: number = NaN;
         this.method_18();
         var _loc2_: TankData = new (TankData as any)();
         _loc2_.ImportTankData(this.refMain.objCurrentPlayer.currentAvatar);
         this.DetailedTank_mc.CopyTankData(_loc2_);
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.method_5(this.DetailedTank_mc);
         (this.DetailedTank_mc.largeTankStats_mc as any).alpha = 1;
         (this.DetailedTank_mc.btnLargeDelete_mc as any).alpha = 1;
         (this.DetailedTank_mc.btnLargeBack_mc as any).alpha = 1;
         (this.DetailedTank_mc.btnLargeDelete_mc as any).alpha = 0;
         this.txtPageNumCurrent_txt.text = "";
         var _loc3_: any = new (Array as any)();
         var _loc4_: any = new (Array as any)();
         var _loc5_: any = new (Array as any)();
         var _loc6_: any = 0;
         while(_loc6_ < this.DetailedTank_mc.sprTankData.arrTankDetails.length)
         {
            _loc3_.push(this.objGameObjectLibrary.method_37(this.DetailedTank_mc.sprTankData.arrTankDetails[_loc6_ as any].type) as any);
            _loc6_ += 1;
         }
         var _loc7_: boolean = true;
         _loc6_ = 0;
         while(_loc6_ < _loc3_.length)
         {
            _loc7_ = true;
            _loc8_ = 0;
            while(_loc8_ < _loc4_.length)
            {
               if(_loc3_[_loc6_ as any] == _loc4_[_loc8_ as any])
               {
                  _loc5_[_loc8_ as any] += 1;
                  _loc7_ = false;
                  break;
               }
               _loc8_ += 1;
            }
            if(_loc7_)
            {
               _loc4_.push(_loc3_[_loc6_ as any] as any);
               _loc5_.push(1 as any);
            }
            _loc6_ += 1;
         }
         this.strLargeTankData = "";
         _loc6_ = 0;
         while(_loc6_ < _loc4_.length)
         {
            this.strLargeTankData = "" + this.strLargeTankData + "" + _loc5_[_loc6_ as any] + " x " + _loc4_[_loc6_ as any] + "\n";
            _loc6_ += 1;
         }
         this.DetailedTank_mc.txtTankData_txt.text = this.strLargeTankData;
         (this.DetailedTank_mc.txtTankData_txt as any).alpha = 0[8];
         if(this.refMain.RetrieveTankLocalRating(this.DetailedTank_mc.sprTankData.strID) == -1)
         {
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 1)
            {
               this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 2)
            {
               this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 3)
            {
               this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 4)
            {
               this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 5)
            {
               this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
            }
         }
         else
         {
            _loc9_ = this.refMain.RetrieveTankLocalRating(this.DetailedTank_mc.sprTankData.strID);
            _loc9_ = Math.round(_loc9_);
            if(_loc9_ >= 1)
            {
               this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 2)
            {
               this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 3)
            {
               this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 4)
            {
               this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 5)
            {
               this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
            }
         }
         this.method_157();
         this.txtPageNumCurrent_txt.text = "";
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.GreyOutNextButton();
         this.method_237();
      }
      
      private ReturnToFirstTank(param1: any): void
      {
         this.DetailedTank_mc.btnCopy_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnCopy_mc.mouseEnabled = true;
         this.intCurrentLocationInTanksQueue = 0;
         this.TankLoad1_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]);
         this.DetailTheTank(this.TankLoad1_mc);
         (this.TankLoad1_mc as any).alpha = 0;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad1_mc.mouseEnabled = false;
         this.method_148();
         this.GreyOutFirstButton();
         this.GreyOutBackButton();
         if(this.arrTanksInqueue.length > 1)
         {
            this.UnGreyOutNextButton();
         }
         else
         {
            this.GreyOutNextButton();
         }
      }
      
      private method_730(): any
      {
         var var_39: any;

         this.DetailedTank_mc.mouseEnabled = true;
         this.DetailedTank_mc.mouseChildren = true;
         this.DetailedTank_mc.largeTankStats_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.addEventListener("mouseover", this.method_118.bind(this));
         this.DetailedTank_mc.largeTankStats_mc.addEventListener("mouseout", this.method_136.bind(this));
         this.var_39.push({
            "btn":this.DetailedTank_mc.largeTankStats_mc,
            "DescText":"All the detailed information for the tank"
         } as any);
         if(this.var_22)
         {
            (this.DetailedTank_mc.btnLargeEdit_mc as any).alpha = 0;
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.method_3(this.btnFirst_mc,"Return to first page tanks");
         }
         else
         {
            this.btnFirst_mc.gotoAndStop(5);
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.method_3(this.btnPrev_mc,"Return to previous page tanks");
         }
         else
         {
            this.btnPrev_mc.gotoAndStop(5);
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.method_3(this.btnNext_mc,"Go to next page of tanks");
         }
         else
         {
            this.btnNext_mc.gotoAndStop(5);
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.btnFirst_mc.addEventListener("click", this.ReturnToFirstTank.bind(this));
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.btnPrev_mc.addEventListener("click", this.GoBackATank.bind(this));
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.btnNext_mc.addEventListener("click", this.GoToNextTank.bind(this));
         }
         if(this.var_23 == null)
         {
            this.method_3(this.btnMainMenu_mc,"Return to the Main Menu");
            this.btnMainMenu_mc.addEventListener("click", this.ReturnToMainMenuFromLargeView.bind(this));
         }
         else
         {
            this.method_3(this.btnMainMenu_mc,this.var_254);
            this.btnMainMenu_mc.addEventListener("click", this.method_127.bind(this));
         }
         this.method_3(this.btnEnterTankID_mc,"Enter an existing tank ID");
         this.method_3(this.btnEnterTankCode_mc,"View tank from tank code");
         this.method_3(this.btnSearchForTanks_mc,"Search for bubble tanks");
         this.btnEnterTankID_mc.addEventListener("click", this.EnterLargeTankID.bind(this));
         this.btnEnterTankCode_mc.addEventListener("click", this.method_135.bind(this));
         this.btnSearchForTanks_mc.addEventListener("click", this.method_434.bind(this));
         (this.btnMyAvatar_mc as any).alpha = 0;
         this.var_8.method_4(this.btnViewLocalTanks_mc,true,this.method_532);
         this.var_39.push({
            "btn":this.btnViewLocalTanks_mc,
            "DescText":"Lets you view all tanks on all profiles"
         } as any);
         if((this.DetailedTank_mc.btnLargeDelete_mc as any).alpha = = 1)
         {
            this.method_3(this.DetailedTank_mc.btnLargeDelete_mc,"Delete this tank");
            this.DetailedTank_mc.btnLargeDelete_mc.addEventListener("click", this.DeleteLargeScreenTank.bind(this));
         }
         this.method_3(this.DetailedTank_mc.btnLargeBack_mc,"Return to small view");
         this.DetailedTank_mc.btnLargeBack_mc.addEventListener("click", this.method_117.bind(this));
         if(!this.var_22)
         {
            this.method_3(this.DetailedTank_mc.btnLargeEdit_mc,"Edit this tank!");
         }
         this.method_3(this.DetailedTank_mc.btnLargeSave,"Save this tank to your computer");
         this.method_3(this.DetailedTank_mc.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.DetailedTank_mc.btnLargeSave.addEventListener("click", this.SaveLargeTank.bind(this));
         if(!this.var_22)
         {
            this.DetailedTank_mc.btnLargeEdit_mc.addEventListener("click", this.EditLargeTank.bind(this));
         }
         this.DetailedTank_mc.btnCopy_mc.addEventListener("click", this.CopyLargeTank.bind(this));
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar1_mc.addEventListener("mouseover", this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.addEventListener("mouseout", this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.addEventListener("click", this.SelectStar1.bind(this));
         var _temp_3: any = this.DetailedTank_mc.btnStar1_mc;
         var _temp_2: any = this.DetailedTank_mc.btnStar1_mc;
         var _temp_1: any = true;
         _temp_2.buttonMode = _temp_1;
         _temp_3.useHandCursor = true;
         this.DetailedTank_mc.btnStar1_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar2_mc.addEventListener("mouseover", this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.addEventListener("mouseout", this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.addEventListener("click", this.SelectStar2.bind(this));
         var _temp_4: any = this.DetailedTank_mc.btnStar2_mc;
         var _loc1_: boolean;
         this.DetailedTank_mc.btnStar2_mc.buttonMode = _loc1_ = true;
         _temp_4.useHandCursor = true;
         this.DetailedTank_mc.btnStar2_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar3_mc.addEventListener("mouseover", this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.addEventListener("mouseout", this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.addEventListener("click", this.SelectStar3.bind(this));
         var _temp_5: any = this.DetailedTank_mc.btnStar3_mc;
         this.DetailedTank_mc.btnStar3_mc.buttonMode = _loc1_ = true;
         _temp_5.useHandCursor = true;
         this.DetailedTank_mc.btnStar3_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar4_mc.addEventListener("mouseover", this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.addEventListener("mouseout", this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.addEventListener("click", this.SelectStar4.bind(this));
         var _temp_6: any = this.DetailedTank_mc.btnStar4_mc;
         this.DetailedTank_mc.btnStar4_mc.buttonMode = _loc1_ = true;
         _temp_6.useHandCursor = true;
         this.DetailedTank_mc.btnStar4_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar5_mc.addEventListener("mouseover", this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.addEventListener("mouseout", this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.addEventListener("click", this.SelectStar5.bind(this));
         var _temp_7: any = this.DetailedTank_mc.btnStar5_mc;
         this.DetailedTank_mc.btnStar5_mc.buttonMode = _loc1_ = true;
         _temp_7.useHandCursor = true;
         this.DetailedTank_mc.btnStar5_mc.mouseChildren = false;
      }
      
      private Highlight1(param1: any): void
      {
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(3);
      }
      
      private method_495(param1: any): void
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener("click", this.method_171.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener("click", this.method_200.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private Highlight4(param1: any): void
      {
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(3);
      }
      
      private Highlight5(param1: any): void
      {
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(3);
      }
      
      private GoBackATank(param1: any): void
      {
         this.DetailedTank_mc.btnCopy_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnCopy_mc.mouseEnabled = true;
         if(this.intCurrentLocationInTanksQueue >= 1)
         {
            --this.intCurrentLocationInTanksQueue;
         }
         this.TankLoad1_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]);
         this.DetailTheTank(this.TankLoad1_mc);
         (this.TankLoad1_mc as any).alpha = 0;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad1_mc.mouseEnabled = false;
         this.method_148();
         if(this.intCurrentLocationInTanksQueue <= 0)
         {
            this.GreyOutBackButton();
            this.GreyOutFirstButton();
         }
         if(this.arrTanksInqueue.length > 1)
         {
            this.UnGreyOutNextButton();
         }
      }
      
      private method_23(): void
      {
         var var_166: any;

         this.var_166 = int(this.arrTanksInqueue.length / 4);
         if(int(this.arrTanksInqueue.length / 4) != this.arrTanksInqueue.length / 4)
         {
            this.var_166 += 1;
         }
         this.txtPageNumCurrent_txt.text = "Page: " + this.var_36 + " out of: " + this.var_166;
         if(this.var_166 == 1)
         {
            this.GreyOutBackButton();
            this.GreyOutFirstButton();
            this.GreyOutNextButton();
         }
         if(this.var_36 == 1 && this.var_166 > 1)
         {
            this.UnGreyOutFirstButton();
         }
      }
      
      private Highlight3(param1: any): void
      {
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(3);
      }
      
      private method_666(): any
      {
         var var_2: any, var_23: any;

         this.txtExplination_txt.text = "";
         this.method_6(this.TankLoad1_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad1_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad1_mc.var_2.btnDelete_mc);
         this.TankLoad1_mc.var_2.btnDetails_mc.removeEventListener("click", this.Details1.bind(this));
         this.TankLoad1_mc.var_2.btnEdit_mc.removeEventListener("click", this.Edit1.bind(this));
         this.TankLoad1_mc.var_2.btnDelete_mc.removeEventListener("click", this.DeleteTank1.bind(this));
         this.method_6(this.TankLoad2_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad2_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad2_mc.var_2.btnDelete_mc);
         this.TankLoad2_mc.var_2.btnDetails_mc.removeEventListener("click", this.Details2.bind(this));
         this.TankLoad2_mc.var_2.btnEdit_mc.removeEventListener("click", this.Edit2.bind(this));
         this.TankLoad2_mc.var_2.btnDelete_mc.removeEventListener("click", this.DeleteTank2.bind(this));
         this.method_6(this.TankLoad3_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad3_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad3_mc.var_2.btnDelete_mc);
         this.TankLoad3_mc.var_2.btnDetails_mc.removeEventListener("click", this.Details3.bind(this));
         this.TankLoad3_mc.var_2.btnEdit_mc.removeEventListener("click", this.Edit3.bind(this));
         this.TankLoad3_mc.var_2.btnDelete_mc.removeEventListener("click", this.DeleteTank3.bind(this));
         this.method_6(this.TankLoad4_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad4_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad4_mc.var_2.btnDelete_mc);
         this.TankLoad4_mc.var_2.btnDetails_mc.removeEventListener("click", this.Details4.bind(this));
         this.TankLoad4_mc.var_2.btnEdit_mc.removeEventListener("click", this.Edit4.bind(this));
         this.TankLoad4_mc.var_2.btnDelete_mc.removeEventListener("click", this.DeleteTank4.bind(this));
         this.method_6(this.btnFirst_mc);
         this.method_6(this.btnPrev_mc);
         this.method_6(this.btnNext_mc);
         this.btnFirst_mc.removeEventListener("click", this.method_128.bind(this));
         this.btnPrev_mc.removeEventListener("click", this.method_124.bind(this));
         this.btnNext_mc.removeEventListener("click", this.method_105.bind(this));
         this.method_6(this.btnMainMenu_mc);
         this.method_6(this.btnSearchForTanks_mc);
         this.method_6(this.btnSortTanks_mc);
         this.method_6(this.btnEnterTankID_mc);
         this.method_6(this.btnEnterTankCode_mc);
         if(this.var_23 == null)
         {
            this.btnMainMenu_mc.removeEventListener("click", this.method_133.bind(this));
         }
         else
         {
            this.btnMainMenu_mc.removeEventListener("click", this.method_126.bind(this));
         }
         this.btnSearchForTanks_mc.removeEventListener("click", this.SearchForEnemySelectTanks.bind(this));
         this.btnSortTanks_mc.removeEventListener("click", this.method_125.bind(this));
         this.btnEnterTankID_mc.removeEventListener("click", this.EnterTankID.bind(this));
         this.btnEnterTankCode_mc.removeEventListener("click", this.method_129.bind(this));
         this.var_8.method_10();
         this.var_39.length = 0;
         this.method_78();
      }
      
      private method_5(param1: any): any
      {
         var var_129: any;

         this.method_223(param1);
         this.var_129.push(param1 as any);
      }
      
      private method_223(param1: any): any
      {
         var var_129: any;

         var _loc2_: any = 0;
         while(_loc2_ < this.var_129.length)
         {
            if(this.var_129[_loc2_ as any] == param1)
            {
               this.var_129.splice(_loc2_,1);
               break;
            }
            _loc2_ += 1;
         }
         _loc2_ = 0;
         while(_loc2_ < this.var_130.length)
         {
            if(this.var_130[_loc2_ as any] == param1)
            {
               this.var_130.splice(_loc2_,1);
               break;
            }
            _loc2_ += 1;
         }
         _loc2_ = 0;
         while(_loc2_ < this.var_116.length)
         {
            if(this.var_116[_loc2_ as any] == param1)
            {
               this.var_116[_loc2_ as any].DeleteTank();
               this.var_116.splice(_loc2_,1);
               break;
            }
            _loc2_ += 1;
         }
      }
      
      private method_164(param1: any): void
      {
         var _loc2_: TankData = null as any;
         this.method_6(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.SearchForTanksScreen_mc.btnSubmit_mc.removeEventListener("click", this.method_164.bind(this));
         this.SearchForTanksScreen_mc.btnBack_mc.removeEventListener("click", this.method_247.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.removeEventListener("focusin", this.method_20.bind(this));
         this.arrTanksInqueue = new (Array as any)();
         _loc2_ = new (TankData as any)();
         if(_loc2_.ImportTankData(this.SearchForTanksScreen_mc.txtEnterID_txt.text))
         {
            this.arrTanksInqueue.push(_loc2_ as any);
         }
         else
         {
            this.method_83(true);
         }
         this.ReturnToViewTanksFromSearch();
      }
      
      private method_237(param1: boolean = false): void
      {
         var var_8: any, var_139: any;

         this.method_3(this.btnCurrentPoints_mc,"Your current profile stats and points");
         this.method_3(this.DetailedTank_mc.btnFlag_mc,"Is this tank inappropriate?  Flag it!");
         this.var_8.method_4(this.DetailedTank_mc.btnFlag_mc,true,this.FlagThisTank);
         var _loc2_: number = 0;
         var _loc3_: number = 0;
         var _loc4_: number = 0;
         if(this.refMain.var_139)
         {
            _loc2_ = 12;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.gunPointsMax.method_29();
         }
         if(this.refMain.blnCheatClass)
         {
            _loc3_ = 6;
         }
         else
         {
            _loc3_ = this.refMain.objCurrentPlayer.maxClass.method_29();
         }
         if(this.refMain.var_132)
         {
            _loc4_ = 100;
         }
         else
         {
            _loc4_ = this.refMain.objCurrentPlayer.bubblePointsMax.method_29();
         }
         this.btnCurrentPoints_mc.txtClass_txt.text = _loc3_;
         this.btnCurrentPoints_mc.txtBBL_txt.text = _loc4_;
         this.btnCurrentPoints_mc.txtGP_txt.text = _loc2_;
         this.method_2(this.btnCreateATank_mc);
         if(this.var_70 == null)
         {
            this.method_689(param1);
            return;
         }
         if(this.var_70 == "Avatar")
         {
            this.method_730();
            return;
         }
         if(this.var_70 == "Enemy")
         {
            this.method_522();
            return;
         }
      }
      
      private GreyOutBackButton(): void
      {
         this.btnPrev_mc.mouseEnabled = false;
         this.btnPrev_mc.gotoAndStop(5);
      }
      
      private Save2(param1: any): void
      {
         var var_2: any;

         var _loc3_: any = undefined;
         var _loc4_: TankData = null as any;
         this.TankLoad2_mc.var_2.btnSave_mc.gotoAndStop(3);
         this.TankLoad2_mc.var_2.btnSave_mc.mouseEnabled = false;
         var _loc2_: TankData = new (TankData as any)();
         if(_loc2_.ImportTankData(this.TankLoad2_mc.sprTankData.ExportTankData()))
         {
            _loc3_ = 0;
            while(_loc3_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               _loc4_ = new (TankData as any)();
               _loc4_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_ as any].Data);
               if(this.method_122(_loc2_,_loc4_))
               {
                  return;
               }
               _loc3_ += 1;
            }
            this.refMain.objCurrentPlayer.method_73(this.TankLoad2_mc.sprTankData.ExportTankData());
         }
         else
         {
            this.method_83(true);
         }
      }
      
      private Save4(param1: any): void
      {
         var var_2: any;

         var _loc3_: any = undefined;
         var _loc4_: TankData = null as any;
         this.TankLoad4_mc.var_2.btnSave_mc.gotoAndStop(3);
         this.TankLoad4_mc.var_2.btnSave_mc.mouseEnabled = false;
         var _loc2_: TankData = new (TankData as any)();
         if(_loc2_.ImportTankData(this.TankLoad4_mc.sprTankData.ExportTankData()))
         {
            _loc3_ = 0;
            while(_loc3_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               _loc4_ = new (TankData as any)();
               _loc4_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_ as any].Data);
               if(this.method_122(_loc2_,_loc4_))
               {
                  return;
               }
               _loc3_ += 1;
            }
            this.refMain.objCurrentPlayer.method_73(this.TankLoad4_mc.sprTankData.ExportTankData());
         }
         else
         {
            this.method_83(true);
         }
      }
      
      private SelectableDown(param1: any): void
      {
         if(param1.target.currentFrame == 2)
         {
            param1.target.gotoAndStop(4);
         }
         else if(param1.target.currentFrame == 4)
         {
            param1.target.gotoAndStop(2);
         }
      }
      
      private method_785(param1: any): void
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener("click", this.method_190.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener("click", this.method_212.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private method_2(param1: any): any
      {
         var var_130: any;

         this.method_223(param1);
         this.var_130.push(param1 as any);
      }
      
      private method_98(): void
      {
         var var_297: any, var_15: any;

         this.addEventListener("enterframe", this.method_91.bind(this));
         if(this.var_297)
         {
            if(this.TankLoad1_mc.var_15 != null)
            {
               this.TankLoad1_mc.btnTankSelect_mc.addEventListener("click", this.SelectTankToReturn1.bind(this));
               this.TankLoad1_mc.btnTankSelect_mc.useHandCursor = true;
               this.TankLoad1_mc.btnTankSelect_mc.buttonMode = true;
            }
            if(this.TankLoad2_mc.var_15 != null)
            {
               this.TankLoad2_mc.btnTankSelect_mc.addEventListener("click", this.SelectTankToReturn2.bind(this));
               this.TankLoad2_mc.btnTankSelect_mc.useHandCursor = true;
               this.TankLoad2_mc.btnTankSelect_mc.buttonMode = true;
            }
            if(this.TankLoad3_mc.var_15 != null)
            {
               this.TankLoad3_mc.btnTankSelect_mc.addEventListener("click", this.SelectTankToReturn3.bind(this));
               this.TankLoad3_mc.btnTankSelect_mc.useHandCursor = true;
               this.TankLoad3_mc.btnTankSelect_mc.buttonMode = true;
            }
            if(this.TankLoad4_mc.var_15 != null)
            {
               this.TankLoad4_mc.btnTankSelect_mc.addEventListener("click", this.SelectTankToReturn4.bind(this));
               this.TankLoad4_mc.btnTankSelect_mc.useHandCursor = true;
               this.TankLoad4_mc.btnTankSelect_mc.buttonMode = true;
            }
         }
      }
      
      private method_6(param1: any): void
      {
         var var_39: any;

         param1.gotoAndStop(1);
         param1.removeEventListener("mouseover", this.method_107.bind(this));
         param1.removeEventListener("mouseout", this.method_112.bind(this));
         param1.mouseChildren = true;
         param1.buttonMode = false;
         param1.useHandCursor = false;
         this.var_39 = new (Array as any)();
      }
      
      private Highlight2(param1: any): void
      {
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(3);
      }
      
      private method_9(param1: any): any
      {
         var var_116: any;

         this.method_223(param1);
         this.var_116.push(param1 as any);
      }
      
      private Save3(param1: any): void
      {
         var var_2: any;

         var _loc3_: any = undefined;
         var _loc4_: TankData = null as any;
         this.TankLoad3_mc.var_2.btnSave_mc.gotoAndStop(3);
         this.TankLoad3_mc.var_2.btnSave_mc.mouseEnabled = false;
         var _loc2_: TankData = new (TankData as any)();
         if(_loc2_.ImportTankData(this.TankLoad3_mc.sprTankData.ExportTankData()))
         {
            _loc3_ = 0;
            while(_loc3_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               _loc4_ = new (TankData as any)();
               _loc4_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_ as any].Data);
               if(this.method_122(_loc2_,_loc4_))
               {
                  return;
               }
               _loc3_ += 1;
            }
            this.refMain.objCurrentPlayer.method_73(this.TankLoad3_mc.sprTankData.ExportTankData());
         }
         else
         {
            this.method_83(true);
         }
      }
      
      private SearchForAvatarSelectTanks(param1: any): any
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.strSortType = "Avatar";
         this.method_147(param1);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private AvatarTanksButton(param1: any): void
      {
         this.strSortType = "Avatar";
         this.method_147(param1);
      }
      
      private method_282(param1: any): any
      {
         (this.SearchForTanksScreen_mc as any).alpha = 0;
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener("click", this.method_263.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener("click", this.method_282.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.refMain.TransitionTankViewer2TankCreator(null,"Enemy");
         this.Destroy();
      }
      
      private method_212(param1: any): void
      {
         var var_23: any;

         this.method_43();
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener("click", this.method_190.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener("click", this.method_212.bind(this));
         this.strViewerType = "EnemyLocal";
         this.arrTanksInqueue = new (Array as any)();
         this.method_121();
         this.method_5(this.btnFirst_mc);
         this.method_5(this.btnPrev_mc);
         this.method_5(this.btnNext_mc);
         this.method_5(this.btnSearchForTanks_mc);
         this.method_5(this.btnEnterTankCode_mc);
         this.method_5(this.btnEnterTankID_mc);
         this.method_5(this.btnSortTanks_mc);
         this.method_5(this.btnMainMenu_mc);
         this.method_5(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_5(this.btnMyAvatar_mc);
         }
         if(!this.var_22)
         {
            this.method_5(this.btnCreateATank_mc);
         }
         this.method_5(this.btnCurrentPoints_mc);
         this.method_2(this.SearchForTanksScreen_mc);
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.TankLoad1_mc.mouseEnabled = true;
            this.TankLoad1_mc.mouseChildren = true;
            this.method_5(this.TankLoad1_mc);
         }
         else
         {
            this.TankLoad1_mc.mouseEnabled = false;
            this.TankLoad1_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.TankLoad2_mc.mouseEnabled = true;
            this.TankLoad2_mc.mouseChildren = true;
            this.method_5(this.TankLoad2_mc);
         }
         else
         {
            this.TankLoad2_mc.mouseEnabled = false;
            this.TankLoad2_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.TankLoad3_mc.mouseEnabled = true;
            this.TankLoad3_mc.mouseChildren = true;
            this.method_5(this.TankLoad3_mc);
         }
         else
         {
            this.TankLoad3_mc.mouseEnabled = false;
            this.TankLoad3_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.TankLoad4_mc.mouseEnabled = true;
            this.TankLoad4_mc.mouseChildren = true;
            this.method_5(this.TankLoad4_mc);
         }
         else
         {
            this.TankLoad4_mc.mouseEnabled = false;
            this.TankLoad4_mc.mouseChildren = false;
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         (this.btnSortTanks_mc as any).x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      private Details1(param1: any): void
      {
         var var_15: any;

         (this.TankLoad1_mc.lines_mc as any).alpha = 0;
         this.TankLoad1_mc.var_15.filters = new (Array as any)();
         this.DetailTheTank(this.TankLoad1_mc);
      }
      
      private Details2(param1: any): void
      {
         var var_15: any;

         (this.TankLoad2_mc.lines_mc as any).alpha = 0;
         this.TankLoad2_mc.var_15.filters = new (Array as any)();
         this.intCurrentLocationInTanksQueue += 1;
         this.DetailTheTank(this.TankLoad2_mc);
      }
      
      private Details3(param1: any): void
      {
         var var_15: any;

         (this.TankLoad3_mc.lines_mc as any).alpha = 0;
         this.TankLoad3_mc.var_15.filters = new (Array as any)();
         this.intCurrentLocationInTanksQueue += 2;
         this.DetailTheTank(this.TankLoad3_mc);
      }
      
      private Details4(param1: any): void
      {
         var var_15: any;

         (this.TankLoad4_mc.lines_mc as any).alpha = 0;
         this.TankLoad4_mc.var_15.filters = new (Array as any)();
         this.intCurrentLocationInTanksQueue += 3;
         this.DetailTheTank(this.TankLoad4_mc);
      }
      
      private ReturnToViewTanksFromSearch(): void
      {
         var var_76: any;

         this.var_76 = false;
         this.UnGreyOutNextButton();
         if(this.SearchForTanksScreen_mc.currentFrame == 2)
         {
            this.method_6(this.SearchForTanksScreen_mc.btnSearch_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnClass1_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnClass2_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnClass3_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnClass4_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnClass5_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnClass6_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnYes_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnNo_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnFeaturedYes_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnFeaturedNo_mc);
            this.SearchForTanksScreen_mc.btnFeaturedYes_mc.removeEventListener("click", this.FeaturedYesDown.bind(this));
            this.SearchForTanksScreen_mc.btnFeaturedNo_mc.removeEventListener("click", this.FeaturedNoDown.bind(this));
            this.SearchForTanksScreen_mc.btnSearch_mc.removeEventListener("click", this.SearchForATank.bind(this));
            this.SearchForTanksScreen_mc.btnClass1_mc.removeEventListener("click", this.SelectableDown.bind(this));
            this.SearchForTanksScreen_mc.btnClass2_mc.removeEventListener("click", this.SelectableDown.bind(this));
            this.SearchForTanksScreen_mc.btnClass3_mc.removeEventListener("click", this.SelectableDown.bind(this));
            this.SearchForTanksScreen_mc.btnClass4_mc.removeEventListener("click", this.SelectableDown.bind(this));
            this.SearchForTanksScreen_mc.btnClass5_mc.removeEventListener("click", this.SelectableDown.bind(this));
            this.SearchForTanksScreen_mc.btnClass6_mc.removeEventListener("click", this.SelectableDown.bind(this));
            this.SearchForTanksScreen_mc.btnYes_mc.removeEventListener("click", this.HIYesDown.bind(this));
            this.SearchForTanksScreen_mc.btnNo_mc.removeEventListener("click", this.HINoDown.bind(this));
         }
         else if(this.SearchForTanksScreen_mc.currentFrame == 3)
         {
            this.method_6(this.SearchForTanksScreen_mc.btnSubmit_mc);
            this.SearchForTanksScreen_mc.btnSubmit_mc.removeEventListener("click", this.SubmitTankID.bind(this));
         }
         else if(this.SearchForTanksScreen_mc.currentFrame == 4)
         {
            this.method_6(this.SearchForTanksScreen_mc.btnSubmit_mc);
            this.SearchForTanksScreen_mc.btnSubmit_mc.removeEventListener("click", this.SubmitTankID.bind(this));
         }
         (this.btnSortTanks_mc as any).x = 616[55];
         this.method_5(this.btnFirst_mc);
         this.method_5(this.btnPrev_mc);
         this.method_5(this.btnNext_mc);
         this.method_5(this.btnSearchForTanks_mc);
         this.method_5(this.btnEnterTankCode_mc);
         this.method_5(this.btnEnterTankID_mc);
         this.method_5(this.btnSortTanks_mc);
         this.method_5(this.btnMainMenu_mc);
         this.method_5(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_5(this.btnMyAvatar_mc);
         }
         if(!this.var_22)
         {
            this.method_5(this.btnCreateATank_mc);
         }
         this.method_5(this.btnCurrentPoints_mc);
         this.method_2(this.SearchForTanksScreen_mc);
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         if(this.arrTanksInqueue.length != 0)
         {
            this.method_24();
         }
         else
         {
            this.method_83(false);
         }
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.TankLoad1_mc.mouseEnabled = true;
            this.TankLoad1_mc.mouseChildren = true;
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.TankLoad2_mc.mouseEnabled = true;
            this.TankLoad2_mc.mouseChildren = true;
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.TankLoad3_mc.mouseEnabled = true;
            this.TankLoad3_mc.mouseChildren = true;
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.TankLoad4_mc.mouseEnabled = true;
            this.TankLoad4_mc.mouseChildren = true;
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         if(this.arrTanksInqueue.length > 1)
         {
            this.UnGreyOutNextButton();
         }
         this.method_33();
      }
      
      private FlagThisTank(param1: any): any
      {
         var var_8: any;

         this.DetailedTank_mc.btnFlag_mc.gotoAndStop(3);
         this.refMain.FlagAnID(this.DetailedTank_mc.sprTankData.strID);
         this.var_8.method_7(this.DetailedTank_mc.btnFlag_mc);
      }
      
      private EnterTankID(param1: any): void
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(3);
         this.method_5(this.SearchForTanksScreen_mc);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnBack_mc);
         this.SearchForTanksScreen_mc.btnSubmit_mc.addEventListener("click", this.SubmitTankID.bind(this));
         this.SearchForTanksScreen_mc.btnBack_mc.addEventListener("click", this.method_161.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.addEventListener("focusin", this.method_20.bind(this));
      }
      
      private method_834(param1: any): void
      {
         var var_76: any, var_36: any;

         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.txtPageNumCurrent_txt.text = "";
         this.method_43();
         this.strViewerType = "AvatarLocal";
         this.arrTanksInqueue = new (Array as any)();
         this.method_121();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         (this.btnSortTanks_mc as any).x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      private Save1(param1: any): void
      {
         var var_2: any;

         var _loc3_: any = undefined;
         var _loc4_: TankData = null as any;
         this.TankLoad1_mc.var_2.btnSave_mc.gotoAndStop(3);
         this.TankLoad1_mc.var_2.btnSave_mc.mouseEnabled = false;
         var _loc2_: TankData = new (TankData as any)();
         if(_loc2_.ImportTankData(this.TankLoad1_mc.sprTankData.ExportTankData()))
         {
            _loc3_ = 0;
            while(_loc3_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               _loc4_ = new (TankData as any)();
               _loc4_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_ as any].Data);
               if(this.method_122(_loc2_,_loc4_))
               {
                  return;
               }
               _loc3_ += 1;
            }
            this.refMain.objCurrentPlayer.method_73(this.TankLoad1_mc.sprTankData.ExportTankData());
         }
         else
         {
            this.method_83(true);
         }
      }
      
      private SelectStar1(param1: any): void
      {
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.RateTank(this.DetailedTank_mc.sprTankData.strID,1);
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseover", this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseout", this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("click", this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseover", this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseout", this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("click", this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseover", this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseout", this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("click", this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseover", this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseout", this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("click", this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseover", this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseout", this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("click", this.SelectStar5.bind(this));
      }
      
      private method_24(param1: number = 1): void
      {
         var _loc2_: MovieClip = new (MovieClip as any)();
         var _loc3_: boolean = false;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.TankLoad1_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]);
            _loc3_ = true;
         }
         else
         {
            this.TankLoad1_mc.DeleteTank();
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.TankLoad2_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]);
            _loc3_ = true;
         }
         else
         {
            this.TankLoad2_mc.DeleteTank();
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.TankLoad3_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]);
            _loc3_ = true;
         }
         else
         {
            this.TankLoad3_mc.DeleteTank();
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.TankLoad4_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]);
            _loc3_ = true;
         }
         else
         {
            this.TankLoad4_mc.DeleteTank();
         }
         if(!_loc3_)
         {
            if(param1 == 1)
            {
               this.method_83(true);
            }
            else if(param1 == 2)
            {
               if(this.var_36 <= 1)
               {
                  this.method_83(true);
               }
            }
         }
      }
      
      private SelectStar5(param1: any): void
      {
         this.RateTank(this.DetailedTank_mc.sprTankData.strID,5);
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseover", this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseout", this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("click", this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseover", this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseout", this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("click", this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseover", this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseout", this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("click", this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseover", this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseout", this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("click", this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseover", this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseout", this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("click", this.SelectStar5.bind(this));
      }
      
      private method_543(): any
      {
         var var_22: any, var_2: any;

         if(this.var_22)
         {
            (this.TankLoad1_mc.var_2.btnEdit_mc as any).alpha = 0;
            (this.TankLoad2_mc.var_2.btnEdit_mc as any).alpha = 0;
            (this.TankLoad3_mc.var_2.btnEdit_mc as any).alpha = 0;
            (this.TankLoad4_mc.var_2.btnEdit_mc as any).alpha = 0;
         }
         if(!this.var_22)
         {
            this.method_3(this.TankLoad1_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad1_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad1_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad1_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad1_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad1_mc.var_2.btnDetails_mc.addEventListener("click", this.Details1.bind(this));
         if(!this.var_22)
         {
            this.TankLoad1_mc.var_2.btnEdit_mc.addEventListener("click", this.Edit1.bind(this));
         }
         this.TankLoad1_mc.var_2.btnDelete_mc.addEventListener("click", this.DeleteTank1.bind(this));
         this.TankLoad1_mc.var_2.btnSave_mc.addEventListener("click", this.Save1.bind(this));
         this.TankLoad1_mc.var_2.btnCopy_mc.addEventListener("click", this.Copy1.bind(this));
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(!this.var_22)
         {
            this.method_3(this.TankLoad2_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad2_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad2_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad2_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad2_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad2_mc.var_2.btnDetails_mc.addEventListener("click", this.Details2.bind(this));
         if(!this.var_22)
         {
            this.TankLoad2_mc.var_2.btnEdit_mc.addEventListener("click", this.Edit2.bind(this));
         }
         this.TankLoad2_mc.var_2.btnDelete_mc.addEventListener("click", this.DeleteTank2.bind(this));
         this.TankLoad2_mc.var_2.btnSave_mc.addEventListener("click", this.Save2.bind(this));
         this.TankLoad2_mc.var_2.btnCopy_mc.addEventListener("click", this.Copy2.bind(this));
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(!this.var_22)
         {
            this.method_3(this.TankLoad3_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad3_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad3_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad3_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad3_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad3_mc.var_2.btnDetails_mc.addEventListener("click", this.Details3.bind(this));
         if(!this.var_22)
         {
            this.TankLoad3_mc.var_2.btnEdit_mc.addEventListener("click", this.Edit3.bind(this));
         }
         this.TankLoad3_mc.var_2.btnDelete_mc.addEventListener("click", this.DeleteTank3.bind(this));
         this.TankLoad3_mc.var_2.btnSave_mc.addEventListener("click", this.Save3.bind(this));
         this.TankLoad3_mc.var_2.btnCopy_mc.addEventListener("click", this.Copy3.bind(this));
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(!this.var_22)
         {
            this.method_3(this.TankLoad4_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad4_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad4_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad4_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad4_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad4_mc.var_2.btnDetails_mc.addEventListener("click", this.Details4.bind(this));
         if(!this.var_22)
         {
            this.TankLoad4_mc.var_2.btnEdit_mc.addEventListener("click", this.Edit4.bind(this));
         }
         this.TankLoad4_mc.var_2.btnDelete_mc.addEventListener("click", this.DeleteTank4.bind(this));
         this.TankLoad4_mc.var_2.btnSave_mc.addEventListener("click", this.Save4.bind(this));
         this.TankLoad4_mc.var_2.btnCopy_mc.addEventListener("click", this.Copy4.bind(this));
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.method_3(this.btnFirst_mc,"Return to first page tanks");
         }
         else
         {
            this.btnFirst_mc.gotoAndStop(5);
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.method_3(this.btnPrev_mc,"Return to previous page tanks");
         }
         else
         {
            this.btnPrev_mc.gotoAndStop(5);
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.method_3(this.btnNext_mc,"Go to next page of tanks");
         }
         else
         {
            this.btnNext_mc.gotoAndStop(5);
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.btnFirst_mc.addEventListener("click", this.method_128.bind(this));
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.btnPrev_mc.addEventListener("click", this.method_124.bind(this));
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.btnNext_mc.addEventListener("click", this.method_105.bind(this));
         }
         if(this.var_23 == null)
         {
            this.method_3(this.btnMainMenu_mc,"Return to the Main Menu");
            this.btnMainMenu_mc.addEventListener("click", this.method_133.bind(this));
         }
         else
         {
            this.method_3(this.btnMainMenu_mc,this.var_254);
            this.btnMainMenu_mc.addEventListener("click", this.method_126.bind(this));
         }
         this.method_3(this.btnSearchForTanks_mc,"Search for Avatar tanks");
         this.method_3(this.btnSortTanks_mc,"Sort your list of tanks by...");
         this.method_3(this.btnEnterTankID_mc,"Enter an existing tank ID");
         this.method_3(this.btnEnterTankCode_mc,"View tank from tank code");
         this.btnSearchForTanks_mc.addEventListener("click", this.SearchForAvatarSelectTanks.bind(this));
         this.btnSortTanks_mc.addEventListener("click", this.method_125.bind(this));
         this.btnEnterTankID_mc.addEventListener("click", this.EnterTankID.bind(this));
         this.btnEnterTankCode_mc.addEventListener("click", this.method_129.bind(this));
         this.var_8.method_4(this.btnViewLocalTanks_mc,true,this.ViewAllLocalAvatarSelectTanks);
         this.var_39.push({
            "btn":this.btnViewLocalTanks_mc,
            "DescText":"Lets you view all tanks on all profiles"
         } as any);
         if(this.var_23 != null)
         {
            if(!this.var_22)
            {
               this.var_8.method_4(this.btnCreateATank_mc,true,this.method_289);
            }
            if(!this.var_22)
            {
               this.var_39.push({
                  "btn":this.btnCreateATank_mc,
                  "DescText":"Create a new tank!"
               } as any);
            }
            this.var_8.method_4(this.btnMyAvatar_mc,true,this.ShowCurrentAvatar);
            this.var_39.push({
               "btn":this.btnMyAvatar_mc,
               "DescText":"See your currently selected player tank"
            } as any);
            this.method_5(this.btnMyAvatar_mc);
         }
         this.method_98();
      }
      
      private HINoDown(param1: any): void
      {
         this.SelectableDown(param1);
         this.SearchForTanksScreen_mc.btnYes_mc.gotoAndStop(1);
      }
      
      private method_620(param1: any): void
      {
         var var_76: any, var_36: any;

         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.txtPageNumCurrent_txt.text = "";
         this.method_43();
         this.strViewerType = "EnemyLocal";
         this.arrTanksInqueue = new (Array as any)();
         this.method_86();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         (this.btnSortTanks_mc as any).x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      private SelectStar4(param1: any): void
      {
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.RateTank(this.DetailedTank_mc.sprTankData.strID,4);
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseover", this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseout", this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("click", this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseover", this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseout", this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("click", this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseover", this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseout", this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("click", this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseover", this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseout", this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("click", this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseover", this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseout", this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("click", this.SelectStar5.bind(this));
      }
      
      private method_444(param1: any): any
      {
         if(this.Tutorial_mc.currentFrame != this.Tutorial_mc.totalFrames)
         {
            this.Tutorial_mc.gotoAndStop(this.Tutorial_mc.currentFrame + 1);
         }
         else
         {
            this.Tutorial_mc.next_mc.removeEventListener("mouseup", this.method_444.bind(this));
            this.Tutorial_mc.back_mc.removeEventListener("mouseup", this.method_377.bind(this));
            (this.Tutorial_mc as any).alpha = 0;
            this.Tutorial_mc.mouseEnabled = false;
            this.Tutorial_mc.mouseChildren = false;
            this.refMain.objCurrentPlayer.var_253 = true;
            this.refMain.objCurrentPlayer.method_19();
            this.method_98();
            this.var_333.method_10();
         }
      }
      
      private method_289(param1: any): any
      {
         var var_76: any, var_23: any;

         var _loc2_: TankData = null as any;
         this.var_76 = true;
         this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
         if(this.var_70 == "")
         {
            this.SearchForTanksScreen_mc.gotoAndStop(1);
            this.method_5(this.SearchForTanksScreen_mc);
            this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
            this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
            this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener("click", this.method_263.bind(this));
            this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener("click", this.method_282.bind(this));
            this.SearchForTanksScreen_mc.mouseEnabled = true;
            this.SearchForTanksScreen_mc.mouseChildren = true;
         }
         else if(this.var_70 == "Avatar")
         {
            _loc2_ = new (TankData as any)();
            _loc2_.ImportTankData(this.refMain.objCurrentPlayer.currentAvatar);
            this.refMain.TransitionTankViewer2TankCreator(_loc2_,"Avatar");
            this.Destroy();
         }
         else if(this.var_70 == "Enemy")
         {
            this.refMain.TransitionTankViewer2TankCreator(null,"Enemy");
            this.Destroy();
         }
         else
         {
            this.refMain.TransitionTankViewer2TankCreator();
            this.Destroy();
         }
      }
      
      private method_522(): any
      {
         var var_39: any;

         this.DetailedTank_mc.mouseEnabled = true;
         this.DetailedTank_mc.mouseChildren = true;
         this.DetailedTank_mc.largeTankStats_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.addEventListener("mouseover", this.method_118.bind(this));
         this.DetailedTank_mc.largeTankStats_mc.addEventListener("mouseout", this.method_136.bind(this));
         this.var_39.push({
            "btn":this.DetailedTank_mc.largeTankStats_mc,
            "DescText":"All the detailed information for the tank"
         } as any);
         if(this.var_22)
         {
            (this.DetailedTank_mc.btnLargeEdit_mc as any).alpha = 0;
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.method_3(this.btnFirst_mc,"Return to first page tanks");
         }
         else
         {
            this.btnFirst_mc.gotoAndStop(5);
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.method_3(this.btnPrev_mc,"Return to previous page tanks");
         }
         else
         {
            this.btnPrev_mc.gotoAndStop(5);
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.method_3(this.btnNext_mc,"Go to next page of tanks");
         }
         else
         {
            this.btnNext_mc.gotoAndStop(5);
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.btnFirst_mc.addEventListener("click", this.ReturnToFirstTank.bind(this));
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.btnPrev_mc.addEventListener("click", this.GoBackATank.bind(this));
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.btnNext_mc.addEventListener("click", this.GoToNextTank.bind(this));
         }
         if(this.var_23 == null)
         {
            this.method_3(this.btnMainMenu_mc,"Return to the Main Menu");
            this.btnMainMenu_mc.addEventListener("click", this.ReturnToMainMenuFromLargeView.bind(this));
         }
         else
         {
            this.method_3(this.btnMainMenu_mc,this.var_254);
            this.btnMainMenu_mc.addEventListener("click", this.method_127.bind(this));
         }
         this.method_3(this.btnEnterTankID_mc,"Enter an existing tank ID");
         this.method_3(this.btnEnterTankCode_mc,"View tank from tank code");
         this.method_3(this.btnSearchForTanks_mc,"Search for bubble tanks");
         (this.btnMyAvatar_mc as any).alpha = 0;
         this.btnEnterTankID_mc.addEventListener("click", this.EnterLargeTankID.bind(this));
         this.btnEnterTankCode_mc.addEventListener("click", this.method_135.bind(this));
         this.btnSearchForTanks_mc.addEventListener("click", this.method_410.bind(this));
         this.var_8.method_4(this.btnViewLocalTanks_mc,true,this.method_620);
         this.var_39.push({
            "btn":this.btnViewLocalTanks_mc,
            "DescText":"Lets you view all tanks on all profiles"
         } as any);
         if((this.DetailedTank_mc.btnLargeDelete_mc as any).alpha = = 1)
         {
            this.method_3(this.DetailedTank_mc.btnLargeDelete_mc,"Delete this tank");
            this.DetailedTank_mc.btnLargeDelete_mc.addEventListener("click", this.DeleteLargeScreenTank.bind(this));
         }
         this.method_3(this.DetailedTank_mc.btnLargeBack_mc,"Return to small view");
         this.DetailedTank_mc.btnLargeBack_mc.addEventListener("click", this.method_117.bind(this));
         if(!this.var_22)
         {
            this.method_3(this.DetailedTank_mc.btnLargeEdit_mc,"Edit this tank!");
         }
         this.method_3(this.DetailedTank_mc.btnLargeSave,"Save this tank to your computer");
         this.method_3(this.DetailedTank_mc.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.DetailedTank_mc.btnLargeSave.addEventListener("click", this.SaveLargeTank.bind(this));
         if(!this.var_22)
         {
            this.DetailedTank_mc.btnLargeEdit_mc.addEventListener("click", this.EditLargeTank.bind(this));
         }
         this.DetailedTank_mc.btnCopy_mc.addEventListener("click", this.CopyLargeTank.bind(this));
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar1_mc.addEventListener("mouseover", this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.addEventListener("mouseout", this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.addEventListener("click", this.SelectStar1.bind(this));
         var _temp_3: any = this.DetailedTank_mc.btnStar1_mc;
         var _temp_2: any = this.DetailedTank_mc.btnStar1_mc;
         var _temp_1: any = true;
         _temp_2.buttonMode = _temp_1;
         _temp_3.useHandCursor = true;
         this.DetailedTank_mc.btnStar1_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar2_mc.addEventListener("mouseover", this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.addEventListener("mouseout", this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.addEventListener("click", this.SelectStar2.bind(this));
         var _temp_4: any = this.DetailedTank_mc.btnStar2_mc;
         var _loc1_: boolean;
         this.DetailedTank_mc.btnStar2_mc.buttonMode = _loc1_ = true;
         _temp_4.useHandCursor = true;
         this.DetailedTank_mc.btnStar2_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar3_mc.addEventListener("mouseover", this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.addEventListener("mouseout", this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.addEventListener("click", this.SelectStar3.bind(this));
         var _temp_5: any = this.DetailedTank_mc.btnStar3_mc;
         this.DetailedTank_mc.btnStar3_mc.buttonMode = _loc1_ = true;
         _temp_5.useHandCursor = true;
         this.DetailedTank_mc.btnStar3_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar4_mc.addEventListener("mouseover", this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.addEventListener("mouseout", this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.addEventListener("click", this.SelectStar4.bind(this));
         var _temp_6: any = this.DetailedTank_mc.btnStar4_mc;
         this.DetailedTank_mc.btnStar4_mc.buttonMode = _loc1_ = true;
         _temp_6.useHandCursor = true;
         this.DetailedTank_mc.btnStar4_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar5_mc.addEventListener("mouseover", this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.addEventListener("mouseout", this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.addEventListener("click", this.SelectStar5.bind(this));
         var _temp_7: any = this.DetailedTank_mc.btnStar5_mc;
         this.DetailedTank_mc.btnStar5_mc.buttonMode = _loc1_ = true;
         _temp_7.useHandCursor = true;
         this.DetailedTank_mc.btnStar5_mc.mouseChildren = false;
      }
      
      private method_127(param1: any): void
      {
         var var_23: any;

         this.method_47();
         this.Destroy();
         this.var_23();
      }
      
      private method_135(param1: any): void
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(4);
         this.method_5(this.SearchForTanksScreen_mc);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCurrentPoints_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnBack_mc);
         this.SearchForTanksScreen_mc.btnSubmit_mc.addEventListener("click", this.method_164.bind(this));
         this.SearchForTanksScreen_mc.btnBack_mc.addEventListener("click", this.method_247.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.addEventListener("focusin", this.method_20.bind(this));
      }
      
      private method_20(param1: any): void
      {
         param1.target.text = "";
         param1.target.removeEventListener("focusin", this.method_20.bind(this));
      }
      
      private SelectStar2(param1: any): void
      {
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.RateTank(this.DetailedTank_mc.sprTankData.strID,2);
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseover", this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseout", this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("click", this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseover", this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseout", this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("click", this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseover", this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseout", this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("click", this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseover", this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseout", this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("click", this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseover", this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseout", this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("click", this.SelectStar5.bind(this));
      }
      
      private SelectStar3(param1: any): void
      {
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.RateTank(this.DetailedTank_mc.sprTankData.strID,3);
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseover", this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseout", this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("click", this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseover", this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseout", this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("click", this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseover", this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseout", this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("click", this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseover", this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseout", this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("click", this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseover", this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseout", this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("click", this.SelectStar5.bind(this));
      }
      
      private ViewCurrentProfileAvatarSelectTanks(param1: any): any
      {
         var var_76: any, var_36: any;

         this.method_43();
         this.var_76 = true;
         this.txtPageNumCurrent_txt.text = "";
         this.strViewerType = "AvatarLocal";
         this.arrTanksInqueue = new (Array as any)();
         this.method_121();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.TankLoad1_mc.mouseEnabled = true;
            this.TankLoad1_mc.mouseChildren = true;
            this.method_5(this.TankLoad1_mc);
         }
         else
         {
            this.TankLoad1_mc.mouseEnabled = false;
            this.TankLoad1_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.TankLoad2_mc.mouseEnabled = true;
            this.TankLoad2_mc.mouseChildren = true;
            this.method_5(this.TankLoad2_mc);
         }
         else
         {
            this.TankLoad2_mc.mouseEnabled = false;
            this.TankLoad2_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.TankLoad3_mc.mouseEnabled = true;
            this.TankLoad3_mc.mouseChildren = true;
            this.method_5(this.TankLoad3_mc);
         }
         else
         {
            this.TankLoad3_mc.mouseEnabled = false;
            this.TankLoad3_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.TankLoad4_mc.mouseEnabled = true;
            this.TankLoad4_mc.mouseChildren = true;
            this.method_5(this.TankLoad4_mc);
         }
         else
         {
            this.TankLoad4_mc.mouseEnabled = false;
            this.TankLoad4_mc.mouseChildren = false;
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         (this.btnSortTanks_mc as any).x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
      }
      
      private SelectTankToReturn1(param1: any): void
      {
         var var_70: any, var_174: any, var_15: any;

         var _loc2_: MovieClip = null as any;
         if(this.var_70 == "Enemy" && this.var_174 || !this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]))
         {
            this.removeEventListener("enterframe", this.method_91.bind(this));
            (this.TankLoad1_mc.lines_mc as any).alpha = 0;
            this.TankLoad1_mc.var_15.filters = new (Array as any)();
            this.method_163(this.TankLoad1_mc.sprTankData);
         }
         else
         {
            _loc2_ = this.var_154.method_60(new (class_60 as any)(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]);
               }
            }
         }
      }
      
      private SelectTankToReturn3(param1: any): void
      {
         var var_70: any, var_174: any, var_15: any;

         var _loc2_: MovieClip = null as any;
         if(this.var_70 == "Enemy" && this.var_174 || !this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]))
         {
            this.method_163(this.TankLoad3_mc.sprTankData);
            (this.TankLoad3_mc.lines_mc as any).alpha = 0;
            this.TankLoad3_mc.var_15.filters = new (Array as any)();
            this.removeEventListener("enterframe", this.method_91.bind(this));
         }
         else
         {
            _loc2_ = this.var_154.method_60(new (class_60 as any)(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]);
               }
            }
         }
      }
      
      private method_247(param1: any): void
      {
         this.method_6(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnBack_mc);
         this.SearchForTanksScreen_mc.btnSubmit_mc.removeEventListener("click", this.method_164.bind(this));
         this.SearchForTanksScreen_mc.btnBack_mc.removeEventListener("click", this.method_247.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.removeEventListener("focusin", this.method_20.bind(this));
         this.ReturnToViewTanksFromSearch();
      }
      
      private method_481(): void
      {
         var var_2: any, var_23: any;

         this.txtExplination_txt.text = "";
         this.method_6(this.TankLoad1_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad1_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad1_mc.var_2.btnDelete_mc);
         this.TankLoad1_mc.var_2.btnDetails_mc.removeEventListener("click", this.Details1.bind(this));
         this.TankLoad1_mc.var_2.btnEdit_mc.removeEventListener("click", this.Edit1.bind(this));
         this.TankLoad1_mc.var_2.btnDelete_mc.removeEventListener("click", this.DeleteTank1.bind(this));
         this.method_6(this.TankLoad2_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad2_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad2_mc.var_2.btnDelete_mc);
         this.TankLoad2_mc.var_2.btnDetails_mc.removeEventListener("click", this.Details2.bind(this));
         this.TankLoad2_mc.var_2.btnEdit_mc.removeEventListener("click", this.Edit2.bind(this));
         this.TankLoad2_mc.var_2.btnDelete_mc.removeEventListener("click", this.DeleteTank2.bind(this));
         this.method_6(this.TankLoad3_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad3_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad3_mc.var_2.btnDelete_mc);
         this.TankLoad3_mc.var_2.btnDetails_mc.removeEventListener("click", this.Details3.bind(this));
         this.TankLoad3_mc.var_2.btnEdit_mc.removeEventListener("click", this.Edit3.bind(this));
         this.TankLoad3_mc.var_2.btnDelete_mc.removeEventListener("click", this.DeleteTank3.bind(this));
         this.method_6(this.TankLoad4_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad4_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad4_mc.var_2.btnDelete_mc);
         this.TankLoad4_mc.var_2.btnDetails_mc.removeEventListener("click", this.Details4.bind(this));
         this.TankLoad4_mc.var_2.btnEdit_mc.removeEventListener("click", this.Edit4.bind(this));
         this.TankLoad4_mc.var_2.btnDelete_mc.removeEventListener("click", this.DeleteTank4.bind(this));
         this.method_6(this.btnFirst_mc);
         this.method_6(this.btnPrev_mc);
         this.method_6(this.btnNext_mc);
         this.btnFirst_mc.removeEventListener("click", this.method_128.bind(this));
         this.btnPrev_mc.removeEventListener("click", this.method_124.bind(this));
         this.btnNext_mc.removeEventListener("click", this.method_105.bind(this));
         this.method_6(this.btnMainMenu_mc);
         this.method_6(this.btnSearchForTanks_mc);
         this.method_6(this.btnSortTanks_mc);
         this.method_6(this.btnEnterTankID_mc);
         this.method_6(this.btnEnterTankCode_mc);
         if(this.var_23 == null)
         {
            this.btnMainMenu_mc.removeEventListener("click", this.method_133.bind(this));
         }
         else
         {
            this.btnMainMenu_mc.removeEventListener("click", this.method_126.bind(this));
         }
         this.btnSearchForTanks_mc.removeEventListener("click", this.SearchForTanks.bind(this));
         this.btnSortTanks_mc.removeEventListener("click", this.method_125.bind(this));
         this.btnEnterTankID_mc.removeEventListener("click", this.EnterTankID.bind(this));
         this.btnEnterTankCode_mc.removeEventListener("click", this.method_129.bind(this));
         this.var_8.method_10();
         this.var_39.length = 0;
         this.method_78();
      }
      
      private SearchForEnemySelectTanks(param1: any): any
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.strSortType = "Enemy";
         this.method_147(param1);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private method_735(param1: any): void
      {
         if(param1.target.currentFrame != param1.target.totalFrames)
         {
            param1.target.gotoAndStop(param1.target.currentFrame + 1);
         }
         else
         {
            param1.target.gotoAndStop(1);
         }
      }
      
      private method_83(param1: boolean): void
      {
         var var_297: any;

         var _loc2_: string = "";
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.GreyOutNextButton();
         this.NotifyScreen_mc.mouseEnabled = true;
         _loc2_ = "The tank(s) you\'ve requested could not be loaded.";
         this.method_5(this.NotifyScreen_mc);
         this.NotifyScreen_mc.txtDisplayMessage_txt.text = _loc2_;
         this.NotifyScreen_mc.addEventListener("click", this.method_475.bind(this));
         this.NotifyScreen_mc.mouseChildren = false;
         this.var_297 = false;
      }
      
      private method_157(): void
      {
         var _loc1_: any = this.method_496(this.DetailedTank_mc.sprTankData.arrTankDetails);
         this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.bubblesLeft_txt.text = this.DetailedTank_mc.sprTankData.numBubbles;
         this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.gunPoints_txt.text = this.DetailedTank_mc.sprTankData.numGunPoints;
         this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.class_txt.text = this.DetailedTank_mc.sprTankData.numClass;
         if(this.DetailedTank_mc.sprTankData.blnAvatarTank == false)
         {
            this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.primary_txt.text = _loc1_.strEnemyWeapons;
            this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.PrimarySecondary_txt.text = "Enemy Weapons";
            this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.secondary_txt.text = "";
            this.DetailedTank_mc.txtBubblesReturned_txt.text = "Bubbles Returned: " + this.DetailedTank_mc.sprTankData.numBubblesReturned;
            this.DetailedTank_mc.txtHealth_txt.text = "Health: " + this.DetailedTank_mc.sprTankData.numLife;
            this.DetailedTank_mc.txtSpeed_txt.text = "Speed: " + this.DetailedTank_mc.sprTankData.numSpeed;
            this.DetailedTank_mc.txtDiffRating_txt.text = "Difficulty Rating: " + this.DetailedTank_mc.sprTankData.numDifficultyRating;
         }
         else
         {
            this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.primary_txt.text = _loc1_.strPrimary;
            this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.secondary_txt.text = _loc1_.strSecondary;
            this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.PrimarySecondary_txt.text = this.strPrimarySecondary;
            this.DetailedTank_mc.txtBubblesReturned_txt.text = "";
            this.DetailedTank_mc.txtHealth_txt.text = "";
            this.DetailedTank_mc.txtSpeed_txt.text = "";
            this.DetailedTank_mc.txtDiffRating_txt.text = "";
         }
         this.DetailedTank_mc.txtTankID_txt.text = "Tank ID: " + this.DetailedTank_mc.sprTankData.strID;
      }
      
      private method_91(param1: any): void
      {
         var var_297: any, var_15: any;

         if(this.var_297)
         {
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
            {
               if(this.TankLoad1_mc.hitTestPoint(stage.mouseX,stage.mouseY,true))
               {
                  if(this.TankLoad1_mc.lines_mc.alpha != 1)
                  {
                     (this.TankLoad1_mc.lines_mc as any).alpha = 1;
                     this.TankLoad1_mc.var_15.filters = new (Array as any)(new (GlowFilter as any)(16777215,0[1],28,28,3,3));
                  }
                  if(this.TankLoad1_mc.var_250 == false)
                  {
                     if(!this.var_174)
                     {
                        if(this.TankLoad1_mc.var_2.CautionSign_mc.alpha < 0[9])
                        {
                           this.TankLoad1_mc.var_2.CautionSign_mc.alpha += 0[05];
                        }
                     }
                  }
               }
               else
               {
                  if(this.TankLoad1_mc.lines_mc.alpha != 0)
                  {
                     (this.TankLoad1_mc.lines_mc as any).alpha = 0;
                     this.TankLoad1_mc.var_15.filters = new (Array as any)();
                  }
                  if(this.TankLoad1_mc.var_2.CautionSign_mc.alpha > 0)
                  {
                     this.TankLoad1_mc.var_2.CautionSign_mc.alpha -= 0[1];
                  }
               }
            }
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
            {
               if(this.TankLoad2_mc.hitTestPoint(stage.mouseX,stage.mouseY,true))
               {
                  if(this.TankLoad2_mc.lines_mc.alpha != 1)
                  {
                     (this.TankLoad2_mc.lines_mc as any).alpha = 1;
                     this.TankLoad2_mc.var_15.filters = new (Array as any)(new (GlowFilter as any)(16777215,0[1],28,28,3,3));
                  }
                  if(this.TankLoad2_mc.var_250 == false)
                  {
                     if(!this.var_174)
                     {
                        if(!this.var_174)
                        {
                           if(this.TankLoad2_mc.var_2.CautionSign_mc.alpha < 0[9])
                           {
                              this.TankLoad2_mc.var_2.CautionSign_mc.alpha += 0[05];
                           }
                        }
                     }
                  }
               }
               else
               {
                  if(this.TankLoad2_mc.lines_mc.alpha != 0)
                  {
                     (this.TankLoad2_mc.lines_mc as any).alpha = 0;
                     this.TankLoad2_mc.var_15.filters = new (Array as any)();
                  }
                  if(this.TankLoad2_mc.var_2.CautionSign_mc.alpha > 0)
                  {
                     this.TankLoad2_mc.var_2.CautionSign_mc.alpha -= 0[1];
                  }
               }
            }
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
            {
               if(this.TankLoad3_mc.hitTestPoint(stage.mouseX,stage.mouseY,true))
               {
                  if(this.TankLoad3_mc.lines_mc.alpha != 1)
                  {
                     (this.TankLoad3_mc.lines_mc as any).alpha = 1;
                     this.TankLoad3_mc.var_15.filters = new (Array as any)(new (GlowFilter as any)(16777215,0[1],28,28,3,3));
                  }
                  if(this.TankLoad3_mc.var_250 == false)
                  {
                     if(!this.var_174)
                     {
                        if(this.TankLoad3_mc.var_2.CautionSign_mc.alpha < 0[9])
                        {
                           this.TankLoad3_mc.var_2.CautionSign_mc.alpha += 0[05];
                        }
                     }
                  }
               }
               else
               {
                  if(this.TankLoad3_mc.lines_mc.alpha != 0)
                  {
                     (this.TankLoad3_mc.lines_mc as any).alpha = 0;
                     this.TankLoad3_mc.var_15.filters = new (Array as any)();
                  }
                  if(this.TankLoad3_mc.var_2.CautionSign_mc.alpha > 0)
                  {
                     this.TankLoad3_mc.var_2.CautionSign_mc.alpha -= 0[1];
                  }
               }
            }
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
            {
               if(this.TankLoad4_mc.hitTestPoint(stage.mouseX,stage.mouseY,true))
               {
                  if(this.TankLoad4_mc.lines_mc.alpha != 1)
                  {
                     (this.TankLoad4_mc.lines_mc as any).alpha = 1;
                     this.TankLoad4_mc.var_15.filters = new (Array as any)(new (GlowFilter as any)(16777215,0[1],28,28,3,3));
                  }
                  if(this.TankLoad4_mc.var_250 == false)
                  {
                     if(!this.var_174)
                     {
                        if(this.TankLoad4_mc.var_2.CautionSign_mc.alpha < 0[9])
                        {
                           this.TankLoad4_mc.var_2.CautionSign_mc.alpha += 0[05];
                        }
                     }
                  }
               }
               else
               {
                  if(this.TankLoad4_mc.lines_mc.alpha != 0)
                  {
                     (this.TankLoad4_mc.lines_mc as any).alpha = 0;
                     this.TankLoad4_mc.var_15.filters = new (Array as any)();
                  }
                  if(this.TankLoad4_mc.var_2.CautionSign_mc.alpha > 0)
                  {
                     this.TankLoad4_mc.var_2.CautionSign_mc.alpha -= 0[1];
                  }
               }
            }
         }
      }
      
      private UnGreyOutBackButton(): void
      {
         this.btnPrev_mc.mouseEnabled = true;
         this.btnPrev_mc.gotoAndStop(1);
         this.btnPrev_mc.buttonMode = true;
         this.btnPrev_mc.useHandCursor = true;
      }
      
      private method_77(param1: any): void
      {
         var var_39: any;

         param1.gotoAndStop(1);
         param1.removeEventListener("mouseover", this.method_313.bind(this));
         param1.removeEventListener("mouseout", this.method_420.bind(this));
         param1.mouseChildren = true;
         param1.buttonMode = false;
         param1.useHandCursor = false;
         this.var_39 = new (Array as any)();
      }
      
      private SelectTankToReturn4(param1: any): void
      {
         var var_70: any, var_174: any, var_15: any;

         var _loc2_: MovieClip = null as any;
         if(this.var_70 == "Enemy" && this.var_174 || !this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]))
         {
            this.method_163(this.TankLoad4_mc.sprTankData);
            (this.TankLoad4_mc.lines_mc as any).alpha = 0;
            this.TankLoad4_mc.var_15.filters = new (Array as any)();
            this.removeEventListener("enterframe", this.method_91.bind(this));
         }
         else
         {
            _loc2_ = this.var_154.method_60(new (class_60 as any)(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]);
               }
            }
         }
      }
      
      private method_86(): void
      {
         var _loc1_: number = NaN;

         0;
         this.PullTanksFromCurrentPlayerProfile();
      }
      
      private method_811(param1: TankData, param2: number): void
      {
         var _loc3_: PlayerProfile = null as any;

         var _loc5_: TankData = null as any;
         var _loc6_: any = undefined;
         var _loc7_: any = undefined;
         _loc3_ = this.refMain.objCurrentPlayer;
         _loc6_ = 0;
         while(_loc6_ < _loc3_.arrSavedTanks.length)
         {
            _loc5_ = new (TankData as any)();
            _loc5_.ImportTankData(_loc3_.arrSavedTanks[_loc6_ as any].Data);
            if(this.method_122(_loc5_,param1))
            {
               _loc3_.arrSavedTanks[_loc6_ as any].blnShowInSearch = "false";
               break;
            }
            _loc6_ += 1;
         }
         if(param1.strID.substr(0,1) == "L")
         {
            _loc6_ = 0;
            while(_loc6_ < _loc3_.var_38.length)
            {
               if(_loc3_.var_38[_loc6_ as any].ID.substr(0,1) == "H")
               {
                  _loc7_ = 0;
                  while(_loc7_ < _loc3_.var_38[_loc6_ as any].AllTanks.length)
                  {
                     if(param1.strID == _loc3_.var_38[_loc6_ as any].AllTanks[_loc7_ as any])
                     {
                        _loc3_.var_38.splice(_loc6_,1);
                        break;
                     }
                     _loc7_++;
                  }
               }
               _loc6_++;
            }
         }
         _loc3_.method_19();
      }
      
      private SelectTankToReturn2(param1: any): void
      {
         var var_70: any, var_174: any, var_15: any;

         var _loc2_: MovieClip = null as any;
         if(this.var_70 == "Enemy" && this.var_174 || !this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]))
         {
            this.method_163(this.TankLoad2_mc.sprTankData);
            (this.TankLoad2_mc.lines_mc as any).alpha = 0;
            this.TankLoad2_mc.var_15.filters = new (Array as any)();
            this.removeEventListener("enterframe", this.method_91.bind(this));
         }
         else
         {
            _loc2_ = this.var_154.method_60(new (class_60 as any)(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]);
               }
            }
         }
      }
      
      private CopyLargeTank(param1: any): void
      {
         System.setClipboard(this.DetailedTank_mc.sprTankData.ExportTankData());
         this.DetailedTank_mc.btnCopy_mc.gotoAndStop(5);
         this.DetailedTank_mc.btnCopy_mc.mouseEnabled = false;
      }
      
      private method_835(param1: any): void
      {
         var var_76: any, var_36: any;

         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.txtPageNumCurrent_txt.text = "";
         this.method_43();
         this.strViewerType = "EnemyLocal";
         this.arrTanksInqueue = new (Array as any)();
         this.method_121();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         (this.btnSortTanks_mc as any).x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      private GreyOutFirstButton(): void
      {
         this.btnFirst_mc.mouseEnabled = false;
         this.btnFirst_mc.gotoAndStop(5);
      }
      
      private method_689(param1: boolean = false): any
      {
         var var_39: any;

         this.DetailedTank_mc.mouseEnabled = true;
         this.DetailedTank_mc.mouseChildren = true;
         this.DetailedTank_mc.largeTankStats_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.addEventListener("mouseover", this.method_118.bind(this));
         this.DetailedTank_mc.largeTankStats_mc.addEventListener("mouseout", this.method_136.bind(this));
         this.var_39.push({
            "btn":this.DetailedTank_mc.largeTankStats_mc,
            "DescText":"All the detailed information for the tank"
         } as any);
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.method_3(this.btnFirst_mc,"Return to first page tanks");
         }
         else
         {
            this.btnFirst_mc.gotoAndStop(5);
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.method_3(this.btnPrev_mc,"Return to previous page tanks");
         }
         else
         {
            this.btnPrev_mc.gotoAndStop(5);
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.method_3(this.btnNext_mc,"Go to next page of tanks");
         }
         else
         {
            this.btnNext_mc.gotoAndStop(5);
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.btnFirst_mc.addEventListener("click", this.ReturnToFirstTank.bind(this));
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.btnPrev_mc.addEventListener("click", this.GoBackATank.bind(this));
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.btnNext_mc.addEventListener("click", this.GoToNextTank.bind(this));
         }
         if(param1 || this.var_23 == null)
         {
            this.method_3(this.btnMainMenu_mc,"Return to the Main Menu");
            this.btnMainMenu_mc.addEventListener("click", this.ReturnToMainMenuFromLargeView.bind(this));
         }
         else
         {
            this.method_3(this.btnMainMenu_mc,this.var_254);
            this.btnMainMenu_mc.addEventListener("click", this.method_127.bind(this));
         }
         this.method_3(this.btnEnterTankID_mc,"Enter an existing tank ID");
         this.method_3(this.btnEnterTankCode_mc,"View tank from tank code");
         this.method_3(this.btnSearchForTanks_mc,"Search for bubble tanks");
         (this.btnMyAvatar_mc as any).alpha = 0;
         this.btnEnterTankID_mc.addEventListener("click", this.EnterLargeTankID.bind(this));
         this.btnEnterTankCode_mc.addEventListener("click", this.method_135.bind(this));
         this.btnSearchForTanks_mc.addEventListener("click", this.method_364.bind(this));
         this.var_8.method_4(this.btnViewLocalTanks_mc,true,this.method_495);
         this.var_39.push({
            "btn":this.btnViewLocalTanks_mc,
            "DescText":"Lets you view all tanks on all profiles"
         } as any);
         if((this.DetailedTank_mc.btnLargeDelete_mc as any).alpha = = 1)
         {
            this.method_3(this.DetailedTank_mc.btnLargeDelete_mc,"Delete this tank");
            this.DetailedTank_mc.btnLargeDelete_mc.addEventListener("click", this.DeleteLargeScreenTank.bind(this));
         }
         this.method_3(this.DetailedTank_mc.btnLargeBack_mc,"Return to small view");
         this.DetailedTank_mc.btnLargeBack_mc.addEventListener("click", this.method_117.bind(this));
         if(this.var_23 == null || this.var_22)
         {
            (this.DetailedTank_mc.btnLargeEdit_mc as any).alpha = 0;
         }
         if(this.var_23 != null && !this.var_22)
         {
            this.method_3(this.DetailedTank_mc.btnLargeEdit_mc,"Edit this tank!");
         }
         this.method_3(this.DetailedTank_mc.btnLargeSave,"Save this tank to your computer");
         this.method_3(this.DetailedTank_mc.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.DetailedTank_mc.btnLargeSave.addEventListener("click", this.SaveLargeTank.bind(this));
         if(this.var_23 != null && !this.var_22)
         {
            this.DetailedTank_mc.btnLargeEdit_mc.addEventListener("click", this.EditLargeTank.bind(this));
         }
         this.DetailedTank_mc.btnCopy_mc.addEventListener("click", this.CopyLargeTank.bind(this));
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar1_mc.addEventListener("mouseover", this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.addEventListener("mouseout", this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.addEventListener("click", this.SelectStar1.bind(this));
         var _temp_7: any = this.DetailedTank_mc.btnStar1_mc;
         var _temp_6: any = this.DetailedTank_mc.btnStar1_mc;
         var _temp_5: any = true;
         _temp_6.buttonMode = _temp_5;
         _temp_7.useHandCursor = true;
         this.DetailedTank_mc.btnStar1_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar2_mc.addEventListener("mouseover", this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.addEventListener("mouseout", this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.addEventListener("click", this.SelectStar2.bind(this));
         var _temp_8: any = this.DetailedTank_mc.btnStar2_mc;
         var _loc2_: boolean;
         this.DetailedTank_mc.btnStar2_mc.buttonMode = _loc2_ = true;
         _temp_8.useHandCursor = true;
         this.DetailedTank_mc.btnStar2_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar3_mc.addEventListener("mouseover", this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.addEventListener("mouseout", this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.addEventListener("click", this.SelectStar3.bind(this));
         var _temp_9: any = this.DetailedTank_mc.btnStar3_mc;
         this.DetailedTank_mc.btnStar3_mc.buttonMode = _loc2_ = true;
         _temp_9.useHandCursor = true;
         this.DetailedTank_mc.btnStar3_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar4_mc.addEventListener("mouseover", this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.addEventListener("mouseout", this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.addEventListener("click", this.SelectStar4.bind(this));
         var _temp_10: any = this.DetailedTank_mc.btnStar4_mc;
         this.DetailedTank_mc.btnStar4_mc.buttonMode = _loc2_ = true;
         _temp_10.useHandCursor = true;
         this.DetailedTank_mc.btnStar4_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar5_mc.addEventListener("mouseover", this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.addEventListener("mouseout", this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.addEventListener("click", this.SelectStar5.bind(this));
         var _temp_11: any = this.DetailedTank_mc.btnStar5_mc;
         this.DetailedTank_mc.btnStar5_mc.buttonMode = _loc2_ = true;
         _temp_11.useHandCursor = true;
         this.DetailedTank_mc.btnStar5_mc.mouseChildren = false;
      }
      
      private method_125(param1: any): void
      {
         var _loc2_: any = new (Array as any)();
         var _loc3_: TankData = new (TankData as any)();
         var _loc4_: number = 0;
         if(this.btnSortTanks_mc.containerButtons_mc.btnSortByName_mc.hitTestPoint(stage.mouseX,stage.mouseY))
         {
            _loc4_ = 0;
            while(_loc4_ < this.arrTanksInqueue.length)
            {
               _loc3_ = this.arrTanksInqueue[_loc4_ as any];
               _loc2_.push({
                  "intLoc":_loc4_,
                  "data":_loc3_.strTankName
               } as any);
               _loc4_ += 1;
            }
            _loc2_.sortOn("data",(Array as any).CASEINSENSITIVE);
         }
         else if(this.btnSortTanks_mc.containerButtons_mc.btnSortByAuthor_mc.hitTestPoint(stage.mouseX,stage.mouseY))
         {
            _loc4_ = 0;
            while(_loc4_ < this.arrTanksInqueue.length)
            {
               _loc3_ = this.arrTanksInqueue[_loc4_ as any];
               _loc2_.push({
                  "intLoc":_loc4_,
                  "data":_loc3_.strAuthorName
               } as any);
               _loc4_ += 1;
            }
            _loc2_.sortOn("data",(Array as any).CASEINSENSITIVE);
         }
         else if(this.btnSortTanks_mc.containerButtons_mc.btnSortByClass_mc.hitTestPoint(stage.mouseX,stage.mouseY))
         {
            _loc4_ = 0;
            while(_loc4_ < this.arrTanksInqueue.length)
            {
               _loc3_ = this.arrTanksInqueue[_loc4_ as any];
               _loc2_.push({
                  "intLoc":_loc4_,
                  "data":_loc3_.numClass
               } as any);
               _loc4_ += 1;
            }
            _loc2_.sortOn("data",(Array as any).NUMERIC);
         }
         else if(this.btnSortTanks_mc.containerButtons_mc.btnSortByGuns_mc.hitTestPoint(stage.mouseX,stage.mouseY))
         {
            _loc4_ = 0;
            while(_loc4_ < this.arrTanksInqueue.length)
            {
               _loc3_ = this.arrTanksInqueue[_loc4_ as any];
               _loc2_.push({
                  "intLoc":_loc4_,
                  "data":_loc3_.numGunPoints
               } as any);
               _loc4_ += 1;
            }
            _loc2_.sortOn("data",(Array as any).NUMERIC);
         }
         else
         {
            if(!this.btnSortTanks_mc.containerButtons_mc.btnSortByBubbles_mc.hitTestPoint(stage.mouseX,stage.mouseY))
            {
               return;
            }
            _loc4_ = 0;
            while(_loc4_ < this.arrTanksInqueue.length)
            {
               _loc3_ = this.arrTanksInqueue[_loc4_ as any];
               _loc2_.push({
                  "intLoc":_loc4_,
                  "data":_loc3_.numBubbles
               } as any);
               _loc4_ += 1;
            }
            _loc2_.sortOn("data",(Array as any).NUMERIC);
         }
         var _loc5_: any = new (Array as any)();
         _loc4_ = 0;
         while(_loc4_ < _loc2_.length)
         {
            _loc5_.push(this.arrTanksInqueue[_loc2_[_loc4_ as any].intLoc] as any);
            _loc4_ += 1;
         }
         this.arrTanksInqueue = _loc5_;
         this.method_43();
         this.var_36 = 1;
         this.intCurrentLocationInTanksQueue = 0;
         this.method_24();
         this.method_23();
      }
      
      private method_190(param1: any): void
      {
         var var_23: any;

         this.method_43();
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener("click", this.method_190.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener("click", this.method_212.bind(this));
         this.strViewerType = "AvatarLocal";
         this.arrTanksInqueue = new (Array as any)();
         this.method_121();
         this.method_5(this.btnFirst_mc);
         this.method_5(this.btnPrev_mc);
         this.method_5(this.btnNext_mc);
         this.method_5(this.btnSearchForTanks_mc);
         this.method_5(this.btnEnterTankCode_mc);
         this.method_5(this.btnEnterTankID_mc);
         this.method_5(this.btnSortTanks_mc);
         this.method_5(this.btnMainMenu_mc);
         this.method_5(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_5(this.btnMyAvatar_mc);
         }
         if(!this.var_22)
         {
            this.method_5(this.btnCreateATank_mc);
         }
         this.method_5(this.btnCurrentPoints_mc);
         this.method_2(this.SearchForTanksScreen_mc);
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.TankLoad1_mc.mouseEnabled = true;
            this.TankLoad1_mc.mouseChildren = true;
            this.method_5(this.TankLoad1_mc);
         }
         else
         {
            this.TankLoad1_mc.mouseEnabled = false;
            this.TankLoad1_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.TankLoad2_mc.mouseEnabled = true;
            this.TankLoad2_mc.mouseChildren = true;
            this.method_5(this.TankLoad2_mc);
         }
         else
         {
            this.TankLoad2_mc.mouseEnabled = false;
            this.TankLoad2_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.TankLoad3_mc.mouseEnabled = true;
            this.TankLoad3_mc.mouseChildren = true;
            this.method_5(this.TankLoad3_mc);
         }
         else
         {
            this.TankLoad3_mc.mouseEnabled = false;
            this.TankLoad3_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.TankLoad4_mc.mouseEnabled = true;
            this.TankLoad4_mc.mouseChildren = true;
            this.method_5(this.TankLoad4_mc);
         }
         else
         {
            this.TankLoad4_mc.mouseEnabled = false;
            this.TankLoad4_mc.mouseChildren = false;
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.method_33();
         (this.btnSortTanks_mc as any).x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
      }
      
      private ViewCurrentProfileEnemySelectTanks(param1: any): any
      {
         var var_36: any;

         this.method_43();
         this.strViewerType = "EnemyLocal";
         this.arrTanksInqueue = new (Array as any)();
         this.method_121();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.TankLoad1_mc.mouseEnabled = true;
            this.TankLoad1_mc.mouseChildren = true;
            this.method_5(this.TankLoad1_mc);
         }
         else
         {
            this.TankLoad1_mc.mouseEnabled = false;
            this.TankLoad1_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.TankLoad2_mc.mouseEnabled = true;
            this.TankLoad2_mc.mouseChildren = true;
            this.method_5(this.TankLoad2_mc);
         }
         else
         {
            this.TankLoad2_mc.mouseEnabled = false;
            this.TankLoad2_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.TankLoad3_mc.mouseEnabled = true;
            this.TankLoad3_mc.mouseChildren = true;
            this.method_5(this.TankLoad3_mc);
         }
         else
         {
            this.TankLoad3_mc.mouseEnabled = false;
            this.TankLoad3_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.TankLoad4_mc.mouseEnabled = true;
            this.TankLoad4_mc.mouseChildren = true;
            this.method_5(this.TankLoad4_mc);
         }
         else
         {
            this.TankLoad4_mc.mouseEnabled = false;
            this.TankLoad4_mc.mouseChildren = false;
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         (this.btnSortTanks_mc as any).x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
      }
      
      private RecieveTank(param1: string): void
      {
         var _loc2_: TankData = null as any;
         _loc2_ = new (TankData as any)();
         if(_loc2_.ImportTankData(param1))
         {
            this.refMain.TransitionTankViewer2TankCreator(_loc2_,"Avatar");
         }
         else
         {
            _loc2_ = null as any;
         }
      }
      
      private EnterLargeTankID(param1: any): void
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(3);
         this.method_5(this.SearchForTanksScreen_mc);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnBack_mc);
         this.SearchForTanksScreen_mc.btnSubmit_mc.addEventListener("click", this.SubmitTankID.bind(this));
         this.SearchForTanksScreen_mc.btnBack_mc.addEventListener("click", this.method_161.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.addEventListener("focusin", this.method_20.bind(this));
      }
      
      private method_25(param1: any): void
      {
         param1.mouseChildren = false;
         param1.useHandCursor = true;
         param1.buttonMode = true;
         param1.addEventListener("mouseover", this.method_653.bind(this));
         param1.addEventListener("mouseout", this.method_629.bind(this));
         param1.addEventListener("click", this.method_735.bind(this));
      }
      
      public method_375(param1: string = ""): any
      {
         var _loc8_: any = undefined;
         var _loc9_: number = NaN;
         if(param1 == "")
         {
            return;
         }
         this.method_18();
         var _loc2_: TankData = this.refMain.RetrieveTankDataFromID(param1);
         this.DetailedTank_mc.CopyTankData(_loc2_);
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.method_5(this.DetailedTank_mc);
         (this.DetailedTank_mc.largeTankStats_mc as any).alpha = 1;
         (this.DetailedTank_mc.btnLargeDelete_mc as any).alpha = 1;
         (this.DetailedTank_mc.btnLargeBack_mc as any).alpha = 1;
         (this.DetailedTank_mc.btnLargeDelete_mc as any).alpha = 0;
         this.txtPageNumCurrent_txt.text = "";
         var _loc3_: any = new (Array as any)();
         var _loc4_: any = new (Array as any)();
         var _loc5_: any = new (Array as any)();
         var _loc6_: any = 0;
         while(_loc6_ < this.DetailedTank_mc.sprTankData.arrTankDetails.length)
         {
            _loc3_.push(this.objGameObjectLibrary.method_37(this.DetailedTank_mc.sprTankData.arrTankDetails[_loc6_ as any].type) as any);
            _loc6_ += 1;
         }
         var _loc7_: boolean = true;
         _loc6_ = 0;
         while(_loc6_ < _loc3_.length)
         {
            _loc7_ = true;
            _loc8_ = 0;
            while(_loc8_ < _loc4_.length)
            {
               if(_loc3_[_loc6_ as any] == _loc4_[_loc8_ as any])
               {
                  _loc5_[_loc8_ as any] += 1;
                  _loc7_ = false;
                  break;
               }
               _loc8_ += 1;
            }
            if(_loc7_)
            {
               _loc4_.push(_loc3_[_loc6_ as any] as any);
               _loc5_.push(1 as any);
            }
            _loc6_ += 1;
         }
         this.strLargeTankData = "";
         _loc6_ = 0;
         while(_loc6_ < _loc4_.length)
         {
            this.strLargeTankData = "" + this.strLargeTankData + "" + _loc5_[_loc6_ as any] + " x " + _loc4_[_loc6_ as any] + "\n";
            _loc6_ += 1;
         }
         this.DetailedTank_mc.txtTankData_txt.text = this.strLargeTankData;
         (this.DetailedTank_mc.txtTankData_txt as any).alpha = 0[8];
         if(this.refMain.RetrieveTankLocalRating(this.DetailedTank_mc.sprTankData.strID) == -1)
         {
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 1)
            {
               this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 2)
            {
               this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 3)
            {
               this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 4)
            {
               this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 5)
            {
               this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
            }
         }
         else
         {
            _loc9_ = this.refMain.RetrieveTankLocalRating(this.DetailedTank_mc.sprTankData.strID);
            _loc9_ = Math.round(_loc9_);
            if(_loc9_ >= 1)
            {
               this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 2)
            {
               this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 3)
            {
               this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 4)
            {
               this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 5)
            {
               this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
            }
         }
         this.method_157();
         this.txtPageNumCurrent_txt.text = "";
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.GreyOutNextButton();
         this.method_237(true);
      }
      
      private method_129(param1: any): void
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(4);
         this.method_5(this.SearchForTanksScreen_mc);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnBack_mc);
         this.SearchForTanksScreen_mc.btnSubmit_mc.addEventListener("click", this.method_164.bind(this));
         this.SearchForTanksScreen_mc.btnBack_mc.addEventListener("click", this.method_161.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.addEventListener("focusin", this.method_20.bind(this));
      }
      
      private method_107(param1: any): void
      {
         var var_39: any, var_2: any;

         var _loc2_: any = undefined;
         var _loc3_: number = NaN;
         if(param1.target.currentFrame != 5)
         {
            param1.target.gotoAndStop(2);
            _loc2_ = 0;
            while(_loc2_ < this.var_39.length)
            {
               if(param1.target == this.var_39[_loc2_ as any].btn)
               {
                  if(this.TankLoad1_mc.var_2.btnEdit_mc == param1.target || this.TankLoad2_mc.var_2.btnEdit_mc == param1.target || this.TankLoad3_mc.var_2.btnEdit_mc == param1.target || this.TankLoad4_mc.var_2.btnEdit_mc == param1.target)
                  {
                     _loc3_ = 0;
                     if(this.TankLoad2_mc.var_2.btnEdit_mc == param1.target)
                     {
                        _loc3_ = 1;
                     }
                     else if(this.TankLoad3_mc.var_2.btnEdit_mc == param1.target)
                     {
                        _loc3_ = 2;
                     }
                     else if(this.TankLoad4_mc.var_2.btnEdit_mc == param1.target)
                     {
                        _loc3_ = 3;
                     }
                     this.txtExplination_txt.text = "";
                     if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + _loc3_ as any]))
                     {
                        this.txtExplination_txt.text = "Exceeds your Class, Gun, or Bubble Points";
                     }
                     if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + _loc3_ as any]))
                     {
                        if(this.txtExplination_txt.text == "")
                        {
                           this.txtExplination_txt.text = "Do not have all the parts for this tank";
                        }
                        else
                        {
                           this.txtExplination_txt.text = "Exceeds Parts, and Class, Gun, or Bubble Points";
                        }
                     }
                     if(this.txtExplination_txt.text == "")
                     {
                        this.txtExplination_txt.text = this.var_39[_loc2_ as any].DescText;
                        break;
                     }
                     param1.target.gotoAndStop(3);
                     break;
                  }
                  this.txtExplination_txt.text = this.var_39[_loc2_ as any].DescText;
                  break;
               }
               _loc2_ += 1;
            }
         }
      }
      
      private ViewAllLocalEnemySelectTanks(param1: any): any
      {
         var var_36: any;

         this.method_43();
         this.strViewerType = "EnemyLocal";
         this.arrTanksInqueue = new (Array as any)();
         this.method_86();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         (this.btnSortTanks_mc as any).x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
      }
      
      private EnemyTanksButton(param1: any): void
      {
         this.strSortType = "Enemy";
         this.method_147(param1);
      }
      
      private PullTanksFromCurrentPlayerProfile(): void
      {
         var _loc1_: number = NaN;
         var _loc2_: boolean = false;
         var _loc3_: any = undefined;
         var _loc4_: TankData = null as any;
         0;
         this.arrTanksInqueue = new (Array as any)();
         _loc1_ = this.refMain.objCurrentPlayer.arrSavedTanks.length;
         _loc2_ = true;
         _loc3_ = 0;
         while(_loc3_ < _loc1_)
         {
            if(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_ as any].blnShowInSearch == "true")
            {
               _loc4_ = new (TankData as any)();
               if(_loc4_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_ as any].Data))
               {
                  _loc2_ = true;
                  var _loc5_: number = 0;
                  while(0 < this.arrTanksInqueue.length)
                  {
                     if(this.arrTanksInqueue[0].strID == _loc4_.strID)
                     {
                        _loc2_ = false;
                        break;
                     }
                     _loc5_ = 0 + 1;
                  }
                  if(_loc2_)
                  {
                     if(this.strViewerType == "AvatarLocal" && _loc4_.blnAvatarTank)
                     {
                        this.arrTanksInqueue.push(_loc4_ as any);
                     }
                     if(this.strViewerType == "EnemyLocal" && !_loc4_.blnAvatarTank)
                     {
                        this.arrTanksInqueue.push(_loc4_ as any);
                     }
                     if(this.strViewerType == "AvatarLocal" && _loc4_.blnAvatarTank || this.strViewerType == "EnemyLocal" && !_loc4_.blnAvatarTank)
                     {
                        this.arrTanksInqueue[this.arrTanksInqueue.length - 1 as any].tankType = 1;
                     }
                  }
               }
               _loc4_ = null as any;
            }
            _loc3_ += 1;
         }
      }
      
      private method_278(param1: any): void
      {
         var var_157: URLLoader = null as any;
         var var_56: number = NaN;
         var var_40: XML = null as any;
         var var_150: XML = null as any;
         var var_106: TankData = null as any;
         var var_126: any = param1;
         var_157 = (var_126.target as unknown as URLLoader);
         var_56 = 0;
         try
         {
            var_40 = new (XML as any)(var_157.data);
            var_56 = Number(var_40.children()[0].attribute("intStatus"));
         }
         catch (e: any)
         {
            var_56 = 0;
         }
         if(var_56 != 0)
         {
            for (let var_150 of var_40.TANK)
            {
               var_106 = new (TankData as any)();
               if(var_106.ImportTankData(var_150.DATA))
               {
                  var_106.strID = var_150.ID;
                  var_106.numRating = var_150.RATING;
                  this.arrTanksInqueue.push(var_106 as any);
               }
            }
            if(this.var_117 != null)
            {
               if(this.contains(this.var_117))
               {
                  this.removeChild(this.var_117);
                  this.var_117 = null as any;
               }
            }
            this.urlLoader.removeEventListener("complete", this.method_278.bind(this));
            this.urlLoader.removeEventListener(HTTPStatusEvent.HTTP_STATUS, this.method_280.bind(this));
            this.urlLoader.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
            this.urlLoader.removeEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
            if(this.var_76)
            {
               this.ReturnToViewTanksFromSearch();
            }
            else
            {
               this.UnGreyOutBackButton();
               this.UnGreyOutFirstButton();
               this.UnGreyOutNextButton();
               if((this.DetailedTank_mc as any).alpha = = 1)
               {
                  this.method_148();
                  if(this.btnNext_mc.mouseEnabled)
                  {
                     this.btnNext_mc.addEventListener("click", this.GoToNextTank.bind(this));
                  }
               }
               else
               {
                  this.method_23();
                  if(this.btnNext_mc.mouseEnabled)
                  {
                     this.btnNext_mc.addEventListener("click", this.method_105.bind(this));
                  }
               }
            }
         }
         else if(this.var_117 != null)
         {
            if(this.contains(this.var_117))
            {
               this.removeChild(this.var_117);
               this.var_117 = null as any;
            }
         }
      }
      
      private method_105(param1: any): void
      {
         var var_2: any, var_36: any, var_166: any;

         this.method_78();
         this.TankLoad1_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad1_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad2_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad2_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad3_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad3_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad4_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad4_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad1_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad2_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad3_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad4_mc.var_2.btnCopy_mc.gotoAndStop(1);
         if(this.intCurrentLocationInTanksQueue + 4 <= this.arrTanksInqueue.length - 4)
         {
            this.intCurrentLocationInTanksQueue += 4;
            this.var_36 += 1;
            if(this.var_36 == this.var_166 && Math.ceil(this.var_166 / 3) == this.var_166 / 3)
            {
               if(this.strViewerType == "AvatarSearch" || this.strViewerType == "EnemySearch")
               {
                  this.arrSearchFilters[0] = "page=" + int(int(this.var_36 / 3) + 1);
                  this.method_209(this.arrSearchFilters,this.arrSearchSorts);
               }
            }
         }
         else if(this.var_36 != this.var_166)
         {
            this.intCurrentLocationInTanksQueue += 4;
            this.var_36 = this.var_166;
         }
         if(this.intCurrentLocationInTanksQueue + 3 >= this.arrTanksInqueue.length - 1)
         {
            this.GreyOutNextButton();
         }
         this.UnGreyOutBackButton();
         this.UnGreyOutFirstButton();
         this.method_24();
         this.method_23();
         this.method_98();
         this.method_18();
         this.method_33();
      }
      
      private method_147(param1: any): void
      {
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener("click", this.AvatarTanksButton.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener("click", this.EnemyTanksButton.bind(this));
         this.SearchForTanksScreen_mc.gotoAndStop(2);
         if(this.strSortType == "Avatar")
         {
            (this.SearchForTanksScreen_mc.diffRatingBG_mc as any).alpha = 0;
            this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.text = "";
            this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.selectable = false;
            this.SearchForTanksScreen_mc.txtDiffRating_txt.text = "";
            this.SearchForTanksScreen_mc.txtDiffRating_txt.selectable = false;
            (this.SearchForTanksScreen_mc.btnSortDiffRating_mc as any).alpha = 0;
            this.SearchForTanksScreen_mc.btnSortDiffRating_mc.mouseEnabled = false;
            (this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc as any).alpha = 0;
            this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.mouseEnabled = false;
         }
         else
         {
            (this.SearchForTanksScreen_mc.diffRatingBG_mc as any).alpha = 1;
            this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.text = "Difficulty Rating";
            this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.selectable = false;
            this.SearchForTanksScreen_mc.txtDiffRating_txt.text = "Type number here";
            this.SearchForTanksScreen_mc.txtDiffRating_txt.selectable = true;
            (this.SearchForTanksScreen_mc.btnSortDiffRating_mc as any).alpha = 1;
            this.SearchForTanksScreen_mc.btnSortDiffRating_mc.mouseEnabled = true;
            (this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc as any).alpha = 1;
            this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.mouseEnabled = true;
            this.method_25(this.SearchForTanksScreen_mc.btnSortDiffRating_mc);
            this.method_25(this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc);
            this.SearchForTanksScreen_mc.txtDiffRating_txt.addEventListener("focusin", this.method_20.bind(this));
         }
         this.var_36 = 1;
         this.method_3(this.SearchForTanksScreen_mc.btnSearch_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass1_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass2_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass3_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass4_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass5_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass6_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnYes_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnNo_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnFeaturedYes_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnFeaturedNo_mc);
         this.SearchForTanksScreen_mc.btnFeaturedYes_mc.addEventListener("click", this.FeaturedYesDown.bind(this));
         this.SearchForTanksScreen_mc.btnFeaturedNo_mc.addEventListener("click", this.FeaturedNoDown.bind(this));
         this.SearchForTanksScreen_mc.btnSearch_mc.addEventListener("click", this.SearchForATank.bind(this));
         this.SearchForTanksScreen_mc.btnClass1_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass2_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass3_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass4_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass5_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass6_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnYes_mc.addEventListener("click", this.HIYesDown.bind(this));
         this.SearchForTanksScreen_mc.btnNo_mc.addEventListener("click", this.HINoDown.bind(this));
         this.SearchForTanksScreen_mc.txtName_txt.addEventListener("focusin", this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtAuthor_txt.addEventListener("focusin", this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtGunPoints_txt.addEventListener("focusin", this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtBubblePoints_txt.addEventListener("focusin", this.method_20.bind(this));
         this.method_25(this.SearchForTanksScreen_mc.btnSortClass_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnSortGunPoints_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnSortBubblePoints_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorGP_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorBP_mc);
      }
      
      private method_171(param1: any): void
      {
         var var_22: any;

         this.method_43();
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener("click", this.method_171.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener("click", this.method_200.bind(this));
         this.strViewerType = "AvatarLocal";
         this.arrTanksInqueue = new (Array as any)();
         this.method_86();
         this.method_5(this.btnFirst_mc);
         this.method_5(this.btnPrev_mc);
         this.method_5(this.btnNext_mc);
         this.method_5(this.btnSearchForTanks_mc);
         this.method_5(this.btnEnterTankCode_mc);
         this.method_5(this.btnEnterTankID_mc);
         this.method_5(this.btnSortTanks_mc);
         this.method_5(this.btnMainMenu_mc);
         this.method_5(this.btnViewLocalTanks_mc);
         if(!this.var_22)
         {
            this.method_5(this.btnCreateATank_mc);
         }
         this.method_5(this.btnCurrentPoints_mc);
         if(this.var_23 != null)
         {
            this.method_5(this.btnMyAvatar_mc);
         }
         this.method_2(this.SearchForTanksScreen_mc);
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         (this.btnSortTanks_mc as any).x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      public Update(): any
      {
         var var_154: any, var_129: any;

         this.var_154.Run();
         var _loc1_: any = 0;
         while(_loc1_ < this.var_129.length)
         {
            this.var_129[_loc1_ as any].mouseEnabled = true;
            if(this.var_129[_loc1_ as any].alpha < 1)
            {
               this.var_129[_loc1_ as any].alpha += 0[2];
            }
            else
            {
               if(this.var_129[_loc1_ as any].alpha != 1)
               {
                  this.var_129[_loc1_ as any].alpha = 1;
               }
               this.var_129.splice(_loc1_,1);
            }
            _loc1_ += 1;
         }
         _loc1_ = 0;
         while(_loc1_ < this.var_130.length)
         {
            this.var_130[_loc1_ as any].mouseEnabled = false;
            if(this.var_130[_loc1_ as any].alpha > 0)
            {
               this.var_130[_loc1_ as any].alpha -= 0[2];
            }
            else
            {
               if(this.var_130[_loc1_ as any].alpha != 0)
               {
                  this.var_130[_loc1_ as any].alpha = 0;
               }
               this.var_130.splice(_loc1_,1);
            }
            _loc1_ += 1;
         }
         _loc1_ = 0;
         while(_loc1_ < this.var_116.length)
         {
            if(this.var_116[_loc1_ as any].alpha > 0)
            {
               this.var_116[_loc1_ as any].alpha -= 0[2];
            }
            else
            {
               if(this.var_116[_loc1_ as any].alpha != 0)
               {
                  this.var_116[_loc1_ as any].alpha = 0;
               }
               this.var_116[_loc1_ as any].DeleteTank();
               this.var_116.splice(_loc1_,1);
            }
            _loc1_ += 1;
         }
      }
      
      private method_126(param1: any): void
      {
         var var_23: any;

         this.method_18();
         this.Destroy();
         this.var_23();
      }
      
      private ReturnToMainMenuFromLargeView(param1: any): void
      {
         this.method_47();
         this.refMain.TransitionTankViewer2MainMenu();
      }
      
      private method_491(): any
      {
         var var_22: any, var_2: any;

         if(this.var_22)
         {
            (this.TankLoad1_mc.var_2.btnEdit_mc as any).alpha = 0;
            (this.TankLoad2_mc.var_2.btnEdit_mc as any).alpha = 0;
            (this.TankLoad3_mc.var_2.btnEdit_mc as any).alpha = 0;
            (this.TankLoad4_mc.var_2.btnEdit_mc as any).alpha = 0;
         }
         if(!this.var_22)
         {
            this.method_3(this.TankLoad1_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad1_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad1_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad1_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad1_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad1_mc.var_2.btnDetails_mc.addEventListener("click", this.Details1.bind(this));
         if(!this.var_22)
         {
            this.TankLoad1_mc.var_2.btnEdit_mc.addEventListener("click", this.Edit1.bind(this));
         }
         this.TankLoad1_mc.var_2.btnDelete_mc.addEventListener("click", this.DeleteTank1.bind(this));
         this.TankLoad1_mc.var_2.btnSave_mc.addEventListener("click", this.Save1.bind(this));
         this.TankLoad1_mc.var_2.btnCopy_mc.addEventListener("click", this.Copy1.bind(this));
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(!this.var_22)
         {
            this.method_3(this.TankLoad2_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad2_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad2_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad2_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad2_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad2_mc.var_2.btnDetails_mc.addEventListener("click", this.Details2.bind(this));
         if(!this.var_22)
         {
            this.TankLoad2_mc.var_2.btnEdit_mc.addEventListener("click", this.Edit2.bind(this));
         }
         this.TankLoad2_mc.var_2.btnDelete_mc.addEventListener("click", this.DeleteTank2.bind(this));
         this.TankLoad2_mc.var_2.btnSave_mc.addEventListener("click", this.Save2.bind(this));
         this.TankLoad2_mc.var_2.btnCopy_mc.addEventListener("click", this.Copy2.bind(this));
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(!this.var_22)
         {
            this.method_3(this.TankLoad3_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad3_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad3_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad3_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad3_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad3_mc.var_2.btnDetails_mc.addEventListener("click", this.Details3.bind(this));
         if(!this.var_22)
         {
            this.TankLoad3_mc.var_2.btnEdit_mc.addEventListener("click", this.Edit3.bind(this));
         }
         this.TankLoad3_mc.var_2.btnDelete_mc.addEventListener("click", this.DeleteTank3.bind(this));
         this.TankLoad3_mc.var_2.btnSave_mc.addEventListener("click", this.Save3.bind(this));
         this.TankLoad3_mc.var_2.btnCopy_mc.addEventListener("click", this.Copy3.bind(this));
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(!this.var_22)
         {
            this.method_3(this.TankLoad4_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad4_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad4_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad4_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad4_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad4_mc.var_2.btnDetails_mc.addEventListener("click", this.Details4.bind(this));
         if(!this.var_22)
         {
            this.TankLoad4_mc.var_2.btnEdit_mc.addEventListener("click", this.Edit4.bind(this));
         }
         this.TankLoad4_mc.var_2.btnDelete_mc.addEventListener("click", this.DeleteTank4.bind(this));
         this.TankLoad4_mc.var_2.btnSave_mc.addEventListener("click", this.Save4.bind(this));
         this.TankLoad4_mc.var_2.btnCopy_mc.addEventListener("click", this.Copy4.bind(this));
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.method_3(this.btnFirst_mc,"Return to first page tanks");
         }
         else
         {
            this.btnFirst_mc.gotoAndStop(5);
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.method_3(this.btnPrev_mc,"Return to previous page tanks");
         }
         else
         {
            this.btnPrev_mc.gotoAndStop(5);
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.method_3(this.btnNext_mc,"Go to next page of tanks");
         }
         else
         {
            this.btnNext_mc.gotoAndStop(5);
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.btnFirst_mc.addEventListener("click", this.method_128.bind(this));
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.btnPrev_mc.addEventListener("click", this.method_124.bind(this));
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.btnNext_mc.addEventListener("click", this.method_105.bind(this));
         }
         if(this.var_23 == null)
         {
            this.method_3(this.btnMainMenu_mc,"Return to the Main Menu");
            this.btnMainMenu_mc.addEventListener("click", this.method_133.bind(this));
         }
         else
         {
            this.method_3(this.btnMainMenu_mc,this.var_254);
            this.btnMainMenu_mc.addEventListener("click", this.method_126.bind(this));
         }
         this.method_3(this.btnSearchForTanks_mc,"Search for Enemy tanks");
         this.method_3(this.btnSortTanks_mc,"Sort your list of tanks by...");
         this.method_3(this.btnEnterTankID_mc,"Enter an existing tank ID");
         this.method_3(this.btnEnterTankCode_mc,"View tank from tank code");
         this.method_223(this.btnMyAvatar_mc);
         (this.btnMyAvatar_mc as any).alpha = 0;
         this.btnSearchForTanks_mc.addEventListener("click", this.SearchForEnemySelectTanks.bind(this));
         this.btnSortTanks_mc.addEventListener("click", this.method_125.bind(this));
         this.btnEnterTankID_mc.addEventListener("click", this.EnterTankID.bind(this));
         this.btnEnterTankCode_mc.addEventListener("click", this.method_129.bind(this));
         this.var_8.method_4(this.btnViewLocalTanks_mc,true,this.ViewAllLocalEnemySelectTanks);
         this.var_39.push({
            "btn":this.btnViewLocalTanks_mc,
            "DescText":"Lets you view all tanks on all profiles"
         } as any);
         if(!this.var_22)
         {
            this.var_8.method_4(this.btnCreateATank_mc,true,this.method_289);
         }
         if(!this.var_22)
         {
            this.var_39.push({
               "btn":this.btnCreateATank_mc,
               "DescText":"Create a new tank!"
            } as any);
         }
         if(this.var_70 == "Avatar")
         {
         }
         (this.btnMyAvatar_mc as any).alpha = 0;
         this.method_98();
      }
      
      private method_209(param1: any, param2: any): void
      {
         var var_380: any;

         var var_40: any;
         var var_243: any;
         var var_106: string = null as any;
         var var_194: string = null as any;
         var var_572: any = null as any;
         var var_307: number = 0;
         var var_563: number = 0;
         var var_562: string = null as any;
         var var_126: class_11 = null as any;
         var var_346: ByteArray = null as any;
         var var_150: ByteArray = null as any;
         var var_411: class_12 = null as any;
         var var_549: string = null as any;
         var var_157: URLRequest = null as any;
         var var_257: URLVariables = null as any;
         var var_262: any = param1;
         var var_56: any = param2;
         this.var_380 = this.RandNum(1,5);
         var_106 = "";
         var_194 = "";
         var_243 = new (Array as any)();
         var_40 = new (Array as any)();
         var_307 = 0;
         while(var_307 < var_262.length)
         {
            var_572 = this.method_571(var_262[var_307 as any]);
            var_106 += var_572[0] + "," + var_572[1] + "," + var_572[2] + ";";
            var_307++;
         }
         var_106 = var_106.substr(0,var_106.length - 1);
         var_563 = 0;
         while(var_563 < var_56.length)
         {
            var_572 = this.method_560(var_56[var_563 as any]);
            var_194 += var_572[0] + "," + var_572[1] + ";";
            var_563++;
         }
         var_194 = var_194.substr(0,var_194.length - 1);
         var_106 += ":" + var_194;
         var_562 = class_1.method_1(764,770);
         var_126 = new (PKCS5 as any)();
         var_346 = class_13.toArray(class_13.method_22(var_106));
         var_150 = class_13.toArray(class_13.method_22(var_562));
         var_411 = class_14.method_46("aes128-ecb",var_150,var_126);
         var_411.encrypt(var_346);
         var_106 = "" + String(class_13.method_52(var_346));
         var_549 = "http://s1.herointeractive.com/bta/searchTanks.php";
         var_157 = new (URLRequest as any)(var_549);
         var_257 = new (URLVariables as any)();
         var_257.s = this.var_380;
         var_257.m = "Mode1";
         var_257.q = var_106;
         var_157.data = var_257;
         var_157.method = URLRequestMethod.POST;
         this.urlLoader = new (URLLoader as any)();
         this.urlLoader.dataFormat = URLLoaderDataFormat.TEXT;
         this.urlLoader.addEventListener("complete", this.method_278.bind(this));
         this.urlLoader.addEventListener(HTTPStatusEvent.HTTP_STATUS, this.method_280.bind(this));
         this.urlLoader.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
         this.urlLoader.addEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
         try
         {
            this.urlLoader.load(var_157);
         }
         catch (e: any)
         {
         }
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0[8]) + param1 - 0[4]);
      }
      
      private method_43(): void
      {
         this.UnGreyOutBackButton();
         this.UnGreyOutFirstButton();
         this.UnGreyOutNextButton();
      }
      
      private method_677(param1: any): any
      {
         var var_38: any;

         var _loc2_: number = 0;
         var _loc3_: any = undefined;
         if(this.selectTankScreen_mc.objTankData.strID.substr(0,1) == "L")
         {
            _loc2_ = 0;
            while(_loc2_ < this.refMain.objCurrentPlayer.var_38.length)
            {
               if(this.refMain.objCurrentPlayer.var_38[_loc2_ as any].ID.substr(0,1) == "H")
               {
                  _loc3_ = 0;
                  while(_loc3_ < this.refMain.objCurrentPlayer.var_38[_loc2_ as any].AllTanks.length)
                  {
                     if(this.selectTankScreen_mc.objTankData.strID == this.refMain.objCurrentPlayer.var_38[_loc2_ as any].AllTanks[_loc3_ as any])
                     {
                        this.refMain.objCurrentPlayer.var_38.splice(_loc2_,1);
                        break;
                     }
                     _loc3_++;
                  }
               }
               _loc2_++;
            }
            _loc2_ = 0;
            while(_loc2_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               if(this.refMain.objCurrentPlayer.arrSavedTanks[_loc2_ as any].ID == this.selectTankScreen_mc.objTankData.strID)
               {
                  this.refMain.objCurrentPlayer.arrSavedTanks.splice(_loc2_,1);
                  break;
               }
               _loc2_++;
            }
         }
         else
         {
            _loc2_ = 0;
            while(_loc2_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               if(this.refMain.objCurrentPlayer.arrSavedTanks[_loc2_ as any].ID == this.selectTankScreen_mc.objTankData.strID)
               {
                  this.refMain.objCurrentPlayer.arrSavedTanks[_loc2_ as any].blnShowInSearch = "false";
                  break;
               }
               _loc2_++;
            }
         }
         this.refMain.objCurrentPlayer.method_19();
         this.method_229(param1);
         this.method_18();
         this.method_33();
         this.PullTanksFromCurrentPlayerProfile();
         this.method_24(2);
      }
      
      private method_148(): void
      {
         var _loc1_: number = this.intCurrentLocationInTanksQueue + 1;
         this.txtPageNumCurrent_txt.text = "Tank: " + _loc1_ + " out of: " + this.arrTanksInqueue.length;
      }
      
      private method_653(param1: any): void
      {
         param1.target.background_mc.gotoAndStop(2);
      }
      
      private method_776(param1: any): void
      {
         param1.target.mouseEnabled = false;
         if(param1.target.alpha > 0)
         {
            param1.target.alpha -= 0[2];
         }
         else if(param1.target.alpha != 0)
         {
            (param1.target as any).alpha = 0;
         }
      }
      
      private method_496(param1: any): any
      {
         var _loc2_: string = null as any;
         var _loc3_: string = null as any;
         var _loc4_: string = null as any;
         var _loc5_: any = null as any;
         var _loc6_: any = null as any;
         var _loc7_: any = null as any;
         var _loc8_: number = 0;
         var _loc9_: boolean = false;
         var _loc10_: string = null as any;
         var _loc11_: number = 0;
         var _loc12_: any = null as any;
         var _loc13_: number = 0;
         var _loc14_: number = 0;
         var _loc15_: number = 0;
         var _loc16_: number = 0;
         var _loc17_: number = 0;
         _loc2_ = "";
         _loc3_ = "";
         _loc4_ = "";
         _loc5_ = new (Array as any)();
         _loc6_ = new (Array as any)();
         _loc7_ = new (Array as any)();
         _loc8_ = 0;
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
         _loc9_ = false;
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
      
      private method_122(param1: TankData, param2: TankData): boolean
      {
         var _loc3_: number = NaN;
         var _loc4_: any = undefined;
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
         _loc3_ = param1.arrTankDetails.length;
         _loc4_ = 0;
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
            _loc4_ += 1;
         }
         return true;
      }
      
      private CallSelectableCallBackFunction(param1: any): void
      {
         var var_490: any;

         this.refMain.WipeArrTankViewerData();
         this.removeEventListener("enterframe", this.method_91.bind(this));
         this.method_18();
         this.Destroy();
         this.var_490(this.selectTankScreen_mc.objTankData.ExportTankData());
      }
      
      private method_792(param1: any): void
      {
         param1.target.mouseEnabled = true;
         if(param1.target.alpha < 1)
         {
            param1.target.alpha += 0[2];
         }
         else if(param1.target.alpha != 1)
         {
            (param1.target as any).alpha = 1;
         }
      }
      
      private method_253(param1: any): void
      {
      }
      
      private UnGreyOutFirstButton(): void
      {
         this.btnFirst_mc.mouseEnabled = true;
         this.btnFirst_mc.gotoAndStop(1);
         this.btnFirst_mc.buttonMode = true;
         this.btnFirst_mc.useHandCursor = true;
      }
      
      private method_377(param1: any): any
      {
         this.Tutorial_mc.gotoAndStop(this.Tutorial_mc.currentFrame - 1);
      }
      
      private alphaOutThenDeleteTankData(param1: any): void
      {
         if(param1.target.alpha > 0)
         {
            param1.target.alpha -= 0[2];
         }
         else
         {
            if(param1.target.alpha != 0)
            {
               (param1.target as any).alpha = 0;
            }
            param1.target.DeleteTank();
         }
      }
      
      private GreyOutNextButton(): void
      {
         this.btnNext_mc.mouseEnabled = false;
         this.btnNext_mc.gotoAndStop(5);
      }
      
      private method_629(param1: any): void
      {
         param1.target.background_mc.gotoAndStop(1);
      }
      
      private method_420(param1: any): void
      {
         if(param1.target.currentFrame == 2)
         {
            param1.target.gotoAndStop(1);
         }
         if(param1.target.currentFrame == 4)
         {
            param1.target.gotoAndStop(3);
         }
         this.txtExplination_txt.text = "";
      }
      
      private method_200(param1: any): void
      {
         var var_23: any;

         this.method_43();
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener("click", this.method_171.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener("click", this.method_200.bind(this));
         this.strViewerType = "EnemyLocal";
         this.arrTanksInqueue = new (Array as any)();
         this.method_86();
         this.method_5(this.btnFirst_mc);
         this.method_5(this.btnPrev_mc);
         this.method_5(this.btnNext_mc);
         this.method_5(this.btnSearchForTanks_mc);
         this.method_5(this.btnEnterTankCode_mc);
         this.method_5(this.btnEnterTankID_mc);
         this.method_5(this.btnSortTanks_mc);
         this.method_5(this.btnMainMenu_mc);
         this.method_5(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_5(this.btnMyAvatar_mc);
         }
         if(!this.var_22)
         {
            this.method_5(this.btnCreateATank_mc);
         }
         this.method_5(this.btnCurrentPoints_mc);
         this.method_2(this.SearchForTanksScreen_mc);
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         (this.btnSortTanks_mc as any).x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      private method_571(param1: string): any
      {
         var _loc2_: any = null as any;
         var _loc3_: string = null as any;
         var _loc4_: string = null as any;
         var _loc5_: number = 0;



         _loc2_ = new (Array as any)();
         _loc3_ = "";
         _loc4_ = "";
         _loc5_ = -1;
         _loc5_ = param1.search(RegExp("[=><]"));
         if(_loc5_ != -1)
         {
            var _loc8_: string = param1.substr(_loc5_,1);
            if(_loc8_ == "=")
            {
               _loc4_ = "1";
               var _loc6_: string = param1.substr(0,_loc5_);
               var _loc7_: string = param1.substr(_loc5_ + 1);
               return _loc2_;
            }
            return _loc2_;
         }
         return _loc2_;
      }
      
      private Copy1(param1: any): void
      {
         var var_2: any;

         System.setClipboard(this.TankLoad1_mc.sprTankData.ExportTankData());
         this.TankLoad1_mc.var_2.btnCopy_mc.gotoAndStop(5);
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = false;
      }
      
      private Copy2(param1: any): void
      {
         var var_2: any;

         System.setClipboard(this.TankLoad2_mc.sprTankData.ExportTankData());
         this.TankLoad2_mc.var_2.btnCopy_mc.gotoAndStop(5);
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = false;
      }
      
      private Copy3(param1: any): void
      {
         var var_2: any;

         System.setClipboard(this.TankLoad3_mc.sprTankData.ExportTankData());
         this.TankLoad3_mc.var_2.btnCopy_mc.gotoAndStop(5);
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = false;
      }
      
      private Copy4(param1: any): void
      {
         var var_2: any;

         System.setClipboard(this.TankLoad4_mc.sprTankData.ExportTankData());
         this.TankLoad4_mc.var_2.btnCopy_mc.gotoAndStop(5);
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = false;
      }
      
      private GoToNextTank(param1: any): void
      {
         this.DetailedTank_mc.btnCopy_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnCopy_mc.mouseEnabled = true;
         if(this.intCurrentLocationInTanksQueue < this.arrTanksInqueue.length - 1)
         {
            this.intCurrentLocationInTanksQueue += 1;
            this.UnGreyOutBackButton();
            this.UnGreyOutFirstButton();
         }
         if(this.intCurrentLocationInTanksQueue == this.arrTanksInqueue.length - 5)
         {
            if(this.strViewerType == "AvatarSearch" || this.strViewerType == "EnemySearch")
            {
               this.var_36 = 1 + int(this.intCurrentLocationInTanksQueue / 4);
               this.arrSearchFilters[0] = "page=" + int(int(this.var_36 / 3) + 1);
               this.method_209(this.arrSearchFilters,this.arrSearchSorts);
            }
         }
         this.TankLoad1_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]);
         this.DetailTheTank(this.TankLoad1_mc);
         (this.TankLoad1_mc as any).alpha = 0;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad1_mc.mouseEnabled = false;
         this.method_148();
         this.DetailedTank_mc.btnLargeSave.gotoAndStop(1);
         if(this.intCurrentLocationInTanksQueue == this.arrTanksInqueue.length - 1)
         {
            this.GreyOutNextButton();
         }
      }
      
      private method_364(param1: any): void
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener("click", this.AvatarTanksButton.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener("click", this.EnemyTanksButton.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private Edit1(param1: any): void
      {
         var _loc2_: MovieClip = null as any;
         if(!this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]))
         {
            this.method_18();
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any].blnAvatarTank)
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any],"Avatar");
            }
            else
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any],"Enemy");
            }
         }
         else
         {
            _loc2_ = this.var_154.method_60(new (class_60 as any)(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]);
               }
            }
         }
      }
      
      private Edit2(param1: any): void
      {
         var _loc2_: MovieClip = null as any;
         if(!this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]))
         {
            this.method_18();
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any].blnAvatarTank)
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any],"Avatar");
            }
            else
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any],"Enemy");
            }
         }
         else
         {
            _loc2_ = this.var_154.method_60(new (class_60 as any)(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]);
               }
            }
         }
      }
      
      private DetailTheTank(param1: TankLoadingBox): void
      {
         var _loc7_: any = undefined;
         var _loc8_: number = NaN;
         this.method_18();
         this.DetailedTank_mc.method_488(param1);
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.method_5(this.DetailedTank_mc);
         (this.DetailedTank_mc.largeTankStats_mc as any).alpha = 1;
         (this.DetailedTank_mc.btnLargeDelete_mc as any).alpha = 1;
         (this.DetailedTank_mc.btnLargeBack_mc as any).alpha = 1;
         if(param1.sprTankData.tankType == 4)
         {
            (this.DetailedTank_mc.btnLargeDelete_mc as any).alpha = 0;
         }
         this.txtPageNumCurrent_txt.text = "";
         var _loc2_: any = new (Array as any)();
         var _loc3_: any = new (Array as any)();
         var _loc4_: any = new (Array as any)();
         var _loc5_: any = 0;
         while(_loc5_ < this.DetailedTank_mc.sprTankData.arrTankDetails.length)
         {
            _loc2_.push(this.objGameObjectLibrary.method_37(this.DetailedTank_mc.sprTankData.arrTankDetails[_loc5_ as any].type) as any);
            _loc5_ += 1;
         }
         var _loc6_: boolean = true;
         _loc5_ = 0;
         while(_loc5_ < _loc2_.length)
         {
            _loc6_ = true;
            _loc7_ = 0;
            while(_loc7_ < _loc3_.length)
            {
               if(_loc2_[_loc5_ as any] == _loc3_[_loc7_ as any])
               {
                  _loc4_[_loc7_ as any] += 1;
                  _loc6_ = false;
                  break;
               }
               _loc7_ += 1;
            }
            if(_loc6_)
            {
               _loc3_.push(_loc2_[_loc5_ as any] as any);
               _loc4_.push(1 as any);
            }
            _loc5_ += 1;
         }
         this.strLargeTankData = "";
         _loc5_ = 0;
         while(_loc5_ < _loc3_.length)
         {
            this.strLargeTankData = "" + this.strLargeTankData + "" + _loc4_[_loc5_ as any] + " x " + _loc3_[_loc5_ as any] + "\n";
            _loc5_ += 1;
         }
         this.DetailedTank_mc.txtTankData_txt.text = this.strLargeTankData;
         (this.DetailedTank_mc.txtTankData_txt as any).alpha = 0[8];
         this.method_157();
         if(this.intCurrentLocationInTanksQueue != 0)
         {
            this.method_43();
         }
         else
         {
            this.UnGreyOutNextButton();
            this.GreyOutBackButton();
            this.GreyOutFirstButton();
         }
         this.method_148();
         this.method_237();
         if(this.refMain.RetrieveTankLocalRating(this.DetailedTank_mc.sprTankData.strID) == -1)
         {
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 1)
            {
               this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 2)
            {
               this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 3)
            {
               this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 4)
            {
               this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 5)
            {
               this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
            }
         }
         else
         {
            _loc8_ = this.refMain.RetrieveTankLocalRating(this.DetailedTank_mc.sprTankData.strID);
            _loc8_ = Math.round(_loc8_);
            this.DetailedTank_mc.sprTankData.numRating = _loc8_;
            if(_loc8_ >= 1)
            {
               this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
            }
            if(_loc8_ >= 2)
            {
               this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
            }
            if(_loc8_ >= 3)
            {
               this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
            }
            if(_loc8_ >= 4)
            {
               this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
            }
            if(_loc8_ >= 5)
            {
               this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
            }
         }
      }
      
      private method_560(param1: string): any
      {
         var _loc2_: any = null as any;
         var _loc3_: number = 0;
         var _loc4_: string = null as any;
         var _loc5_: string = null as any;
         var _loc6_: string = null as any;
         var _loc7_: string = null as any;
         _loc2_ = new (Array as any)();
         _loc3_ = -1;
         _loc4_ = "";
         _loc5_ = "";
         _loc3_ = param1.search(" ");
         if(_loc3_ == -1)
         {
            return _loc2_;
         }
         _loc6_ = param1.substr(0,_loc3_);
         _loc7_ = param1.substr(_loc3_ + 1);
         if(_loc6_ == "class")
         {
            _loc4_ = "1";
         }
         else if(_loc6_ == "gunPoints")
         {
            _loc4_ = "2";
         }
         else if(_loc6_ == "bubblePoints")
         {
            _loc4_ = "3";
         }
         else if(_loc6_ == "difficulty")
         {
            _loc4_ = "4";
         }
         else if(_loc6_ == "id")
         {
            _loc4_ = "5";
         }
         else
         {
            if(_loc6_ != "rating")
            {
               return _loc2_;
            }
            _loc4_ = "6";
         }
         if(_loc7_ == "ascending")
         {
            _loc5_ = "1";
         }
         else
         {
            if(_loc7_ != "descending")
            {
               return _loc2_;
            }
            _loc5_ = "2";
         }
         _loc2_.push(_loc4_ as any);
         _loc2_.push(_loc5_ as any);
         return _loc2_;
      }
      
      private method_746(): any
      {
         var var_23: any;

         this.txtExplination_txt.text = "";
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.removeEventListener("mouseover", this.method_118.bind(this));
         this.DetailedTank_mc.largeTankStats_mc.removeEventListener("mouseout", this.method_136.bind(this));
         this.method_6(this.btnFirst_mc);
         this.method_6(this.btnPrev_mc);
         this.method_6(this.btnNext_mc);
         this.btnFirst_mc.removeEventListener("click", this.ReturnToFirstTank.bind(this));
         this.btnPrev_mc.removeEventListener("click", this.GoBackATank.bind(this));
         this.btnNext_mc.removeEventListener("click", this.GoToNextTank.bind(this));
         this.method_6(this.btnMainMenu_mc);
         this.method_6(this.btnEnterTankID_mc);
         this.method_6(this.btnEnterTankCode_mc);
         this.method_6(this.btnSearchForTanks_mc);
         if(this.var_23 != null)
         {
            this.method_6(this.btnMyAvatar_mc);
         }
         if(this.var_23 == null)
         {
            this.btnMainMenu_mc.removeEventListener("click", this.ReturnToMainMenuFromLargeView.bind(this));
         }
         else
         {
            this.btnMainMenu_mc.removeEventListener("click", this.method_127.bind(this));
         }
         this.btnEnterTankID_mc.removeEventListener("click", this.EnterLargeTankID.bind(this));
         this.btnEnterTankCode_mc.removeEventListener("click", this.method_135.bind(this));
         this.btnSearchForTanks_mc.removeEventListener("click", this.method_410.bind(this));
         this.var_8.method_10();
         this.method_6(this.DetailedTank_mc.btnLargeDelete_mc);
         this.method_6(this.DetailedTank_mc.btnLargeBack_mc);
         this.DetailedTank_mc.btnLargeDelete_mc.removeEventListener("click", this.DeleteLargeScreenTank.bind(this));
         this.DetailedTank_mc.btnLargeBack_mc.removeEventListener("click", this.method_117.bind(this));
         this.method_3(this.DetailedTank_mc.btnLargeEdit_mc);
         this.method_3(this.DetailedTank_mc.btnLargeSave);
         this.DetailedTank_mc.btnLargeSave.addEventListener("click", this.SaveLargeTank.bind(this));
         this.DetailedTank_mc.btnLargeEdit_mc.addEventListener("click", this.EditLargeTank.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseover", this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseout", this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("click", this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseover", this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseout", this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("click", this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseover", this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseout", this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("click", this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseover", this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseout", this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("click", this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseover", this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseout", this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("click", this.SelectStar5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.method_78();
      }
      
      private Edit3(param1: any): void
      {
         var _loc2_: MovieClip = null as any;
         if(!this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]))
         {
            this.method_18();
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any].blnAvatarTank)
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any],"Avatar");
            }
            else
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any],"Enemy");
            }
         }
         else
         {
            _loc2_ = this.var_154.method_60(new (class_60 as any)(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]);
               }
            }
         }
      }
      
      private Edit4(param1: any): void
      {
         var _loc2_: MovieClip = null as any;
         if(!this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]))
         {
            this.method_18();
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any].blnAvatarTank)
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any],"Avatar");
            }
            else
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any],"Enemy");
            }
         }
         else
         {
            _loc2_ = this.var_154.method_60(new (class_60 as any)(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]);
               }
            }
         }
      }
      
      private method_475(param1: any): void
      {
         var var_297: any, var_492: any;

         this.NotifyScreen_mc.removeEventListener("click", this.method_475.bind(this));
         this.method_2(this.NotifyScreen_mc);
         this.NotifyScreen_mc.mouseEnabled = false;
         this.var_297 = this.var_492;
      }
      
      private SearchForTanks(param1: any): void
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener("click", this.AvatarTanksButton.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener("click", this.EnemyTanksButton.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private method_78(): void
      {
         var var_297: any, var_15: any;

         if(this.var_297)
         {
            if(this.TankLoad1_mc.var_15 != null)
            {
               this.TankLoad1_mc.btnTankSelect_mc.removeEventListener("click", this.SelectTankToReturn1.bind(this));
            }
            if(this.TankLoad2_mc.var_15 != null)
            {
               this.TankLoad2_mc.btnTankSelect_mc.removeEventListener("click", this.SelectTankToReturn2.bind(this));
            }
            if(this.TankLoad3_mc.var_15 != null)
            {
               this.TankLoad3_mc.btnTankSelect_mc.removeEventListener("click", this.SelectTankToReturn3.bind(this));
            }
            if(this.TankLoad4_mc.var_15 != null)
            {
               this.TankLoad4_mc.btnTankSelect_mc.removeEventListener("click", this.SelectTankToReturn4.bind(this));
            }
         }
         this.removeEventListener("enterframe", this.method_91.bind(this));
      }
      
      private DeleteTank1(param1: any): void
      {
         this.method_141(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]);
      }
      
      private DeleteTank3(param1: any): void
      {
         this.method_141(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any]);
      }
      
      private DeleteTank4(param1: any): void
      {
         this.method_141(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any]);
      }
      
      private method_229(param1: any): void
      {
         var var_8: any;

         this.addEventListener("enterframe", this.method_91.bind(this));
         this.method_2(this.selectTankScreen_mc);
         this.selectTankScreen_mc.mouseEnabled = false;
         this.selectTankScreen_mc.mouseChildren = false;
         this.selectTankScreen_mc.removeChildAt(1);
         this.var_8.method_7(this.selectTankScreen_mc.btnYes_mc);
         this.var_8.method_7(this.selectTankScreen_mc.btnNo_mc);
         this.selectTankScreen_mc.gotoAndStop(1);
      }
      
      private method_770(): any
      {
         var var_23: any, var_22: any, var_2: any;

         if(this.var_23 == null || this.var_22)
         {
            (this.TankLoad1_mc.var_2.btnEdit_mc as any).alpha = 0;
            (this.TankLoad2_mc.var_2.btnEdit_mc as any).alpha = 0;
            (this.TankLoad3_mc.var_2.btnEdit_mc as any).alpha = 0;
            (this.TankLoad4_mc.var_2.btnEdit_mc as any).alpha = 0;
         }
         if(this.var_23 != null && !this.var_22)
         {
            this.method_3(this.TankLoad1_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad1_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad1_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad1_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad1_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad1_mc.var_2.btnDetails_mc.addEventListener("click", this.Details1.bind(this));
         if(this.var_23 != null && !this.var_22)
         {
            this.TankLoad1_mc.var_2.btnEdit_mc.addEventListener("click", this.Edit1.bind(this));
         }
         this.TankLoad1_mc.var_2.btnDelete_mc.addEventListener("click", this.DeleteTank1.bind(this));
         this.TankLoad1_mc.var_2.btnSave_mc.addEventListener("click", this.Save1.bind(this));
         this.TankLoad1_mc.var_2.btnCopy_mc.addEventListener("click", this.Copy1.bind(this));
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(this.var_23 != null && !this.var_22)
         {
            this.method_3(this.TankLoad2_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad2_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad2_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad2_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad2_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad2_mc.var_2.btnDetails_mc.addEventListener("click", this.Details2.bind(this));
         if(this.var_23 != null && !this.var_22)
         {
            this.TankLoad2_mc.var_2.btnEdit_mc.addEventListener("click", this.Edit2.bind(this));
         }
         this.TankLoad2_mc.var_2.btnDelete_mc.addEventListener("click", this.DeleteTank2.bind(this));
         this.TankLoad2_mc.var_2.btnSave_mc.addEventListener("click", this.Save2.bind(this));
         this.TankLoad2_mc.var_2.btnCopy_mc.addEventListener("click", this.Copy2.bind(this));
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(this.var_23 != null && !this.var_22)
         {
            this.method_3(this.TankLoad3_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad3_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad3_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad3_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad3_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad3_mc.var_2.btnDetails_mc.addEventListener("click", this.Details3.bind(this));
         if(this.var_23 != null && !this.var_22)
         {
            this.TankLoad3_mc.var_2.btnEdit_mc.addEventListener("click", this.Edit3.bind(this));
         }
         this.TankLoad3_mc.var_2.btnDelete_mc.addEventListener("click", this.DeleteTank3.bind(this));
         this.TankLoad3_mc.var_2.btnSave_mc.addEventListener("click", this.Save3.bind(this));
         this.TankLoad3_mc.var_2.btnCopy_mc.addEventListener("click", this.Copy3.bind(this));
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(this.var_23 != null && !this.var_22)
         {
            this.method_3(this.TankLoad4_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad4_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad4_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad4_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad4_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad4_mc.var_2.btnDetails_mc.addEventListener("click", this.Details4.bind(this));
         if(this.var_23 != null && !this.var_22)
         {
            this.TankLoad4_mc.var_2.btnEdit_mc.addEventListener("click", this.Edit4.bind(this));
         }
         this.TankLoad4_mc.var_2.btnDelete_mc.addEventListener("click", this.DeleteTank4.bind(this));
         this.TankLoad4_mc.var_2.btnSave_mc.addEventListener("click", this.Save4.bind(this));
         this.TankLoad4_mc.var_2.btnCopy_mc.addEventListener("click", this.Copy4.bind(this));
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.method_3(this.btnFirst_mc,"Return to first page tanks");
         }
         else
         {
            this.btnFirst_mc.gotoAndStop(5);
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.method_3(this.btnPrev_mc,"Return to previous page tanks");
         }
         else
         {
            this.btnPrev_mc.gotoAndStop(5);
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.method_3(this.btnNext_mc,"Go to next page of tanks");
         }
         else
         {
            this.btnNext_mc.gotoAndStop(5);
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.btnFirst_mc.addEventListener("click", this.method_128.bind(this));
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.btnPrev_mc.addEventListener("click", this.method_124.bind(this));
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.btnNext_mc.addEventListener("click", this.method_105.bind(this));
         }
         if(this.var_23 == null)
         {
            this.method_3(this.btnMainMenu_mc,"Return to the Main Menu");
            this.btnMainMenu_mc.addEventListener("click", this.method_133.bind(this));
         }
         else
         {
            this.method_3(this.btnMainMenu_mc,this.var_254);
            this.btnMainMenu_mc.addEventListener("click", this.method_126.bind(this));
         }
         this.method_3(this.btnSearchForTanks_mc,"Search for bubble tanks");
         this.method_3(this.btnSortTanks_mc,"Sort your list of tanks by...");
         this.method_3(this.btnEnterTankID_mc,"Enter an existing tank ID");
         this.method_3(this.btnEnterTankCode_mc,"View tank from tank code");
         this.btnSearchForTanks_mc.addEventListener("click", this.SearchForTanks.bind(this));
         this.btnSortTanks_mc.addEventListener("click", this.method_125.bind(this));
         this.btnEnterTankID_mc.addEventListener("click", this.EnterTankID.bind(this));
         this.btnEnterTankCode_mc.addEventListener("click", this.method_129.bind(this));
         this.var_8.method_4(this.btnViewLocalTanks_mc,true,this.ViewAllLocalTanks);
         this.var_39.push({
            "btn":this.btnViewLocalTanks_mc,
            "DescText":"Lets you view all tanks on all profiles"
         } as any);
         if(!this.var_22)
         {
            this.var_8.method_4(this.btnCreateATank_mc,true,this.method_289);
         }
         if(!this.var_22)
         {
            this.var_39.push({
               "btn":this.btnCreateATank_mc,
               "DescText":"Create a new tank!"
            } as any);
         }
         if(this.var_70 == "Avatar")
         {
            this.var_8.method_4(this.btnMyAvatar_mc,true,this.ShowCurrentAvatar);
            this.var_39.push({
               "btn":this.btnMyAvatar_mc,
               "DescText":"See your currently selected player tank"
            } as any);
            this.method_5(this.btnMyAvatar_mc);
         }
         this.method_98();
      }
      
      private SearchForATank(param1: any): void
      {
         var var_36: any;

         var _loc2_: number = NaN;
         var _loc3_: string = null as any;
         var _loc4_: string = null as any;
         var _loc5_: string = null as any;
         var _loc6_: any = undefined;
         this.strViewerType = this.strSortType + "Search";
         this.arrTanksInqueue = new (Array as any)();
         this.arrSearchFilters = new (Array as any)();
         _loc2_ = int(int(this.var_36 / 3) + 1);
         this.arrSearchFilters.push("page=" + _loc2_ as any);
         this.arrSearchFilters.push("type=" + this.strSortType as any);
         if(this.SearchForTanksScreen_mc.btnClass1_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("class=1" as any);
         }
         if(this.SearchForTanksScreen_mc.btnClass2_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("class=2" as any);
         }
         if(this.SearchForTanksScreen_mc.btnClass3_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("class=3" as any);
         }
         if(this.SearchForTanksScreen_mc.btnClass4_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("class=4" as any);
         }
         if(this.SearchForTanksScreen_mc.btnClass5_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("class=5" as any);
         }
         if(this.SearchForTanksScreen_mc.btnClass6_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("class=6" as any);
         }
         if(this.SearchForTanksScreen_mc.btnYes_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("HI=true" as any);
         }
         if(this.SearchForTanksScreen_mc.btnNo_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("HI=false" as any);
         }
         if(this.SearchForTanksScreen_mc.btnFeaturedYes_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("featured=true" as any);
         }
         if(this.SearchForTanksScreen_mc.btnFeaturedNo_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("featured=false" as any);
         }
         _loc3_ = "=";
         _loc4_ = "=";
         _loc5_ = "=";
         if(this.SearchForTanksScreen_mc.btnOperatorGP_mc.currentFrame == 2)
         {
            _loc3_ = ">";
         }
         if(this.SearchForTanksScreen_mc.btnOperatorGP_mc.currentFrame == 3)
         {
            _loc3_ = "<";
         }
         if(this.SearchForTanksScreen_mc.btnOperatorBP_mc.currentFrame == 2)
         {
            _loc4_ = ">";
         }
         if(this.SearchForTanksScreen_mc.btnOperatorBP_mc.currentFrame == 3)
         {
            _loc4_ = "<";
         }
         if(this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.currentFrame == 2)
         {
            _loc5_ = ">";
         }
         if(this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.currentFrame == 3)
         {
            _loc5_ = "<";
         }
         if(this.SearchForTanksScreen_mc.txtName_txt.text != "Type name here" && this.SearchForTanksScreen_mc.txtName_txt.text != "")
         {
            this.arrSearchFilters.push("name=" + this.SearchForTanksScreen_mc.txtName_txt.text as any);
         }
         if(this.SearchForTanksScreen_mc.txtAuthor_txt.text != "Type author here" && this.SearchForTanksScreen_mc.txtAuthor_txt.text != "")
         {
            this.arrSearchFilters.push("author=" + this.SearchForTanksScreen_mc.txtAuthor_txt.text as any);
         }
         if(this.SearchForTanksScreen_mc.txtGunPoints_txt.text != "Type number here" && this.SearchForTanksScreen_mc.txtGunPoints_txt.text != "")
         {
            this.arrSearchFilters.push("gunPoints" + _loc3_ + this.SearchForTanksScreen_mc.txtGunPoints_txt.text as any);
         }
         if(this.SearchForTanksScreen_mc.txtBubblePoints_txt.text != "Type number here" && this.SearchForTanksScreen_mc.txtBubblePoints_txt.text != "")
         {
            this.arrSearchFilters.push("bubblePoints" + _loc4_ + this.SearchForTanksScreen_mc.txtBubblePoints_txt.text as any);
         }
         if(this.strSortType == "Enemy" && this.SearchForTanksScreen_mc.txtDiffRating_txt.text != "Type number here" && this.SearchForTanksScreen_mc.txtDiffRating_txt.text != "")
         {
            this.arrSearchFilters.push("difficulty" + _loc5_ + this.SearchForTanksScreen_mc.txtDiffRating_txt.text as any);
         }
         this.arrSearchSorts = new (Array as any)();
         this.arrSearchSorts.push("rating descending" as any);
         if(this.SearchForTanksScreen_mc.btnSortClass_mc.currentFrame == 1 && this.SearchForTanksScreen_mc.btnSortGunPoints_mc.currentFrame == 1 && this.SearchForTanksScreen_mc.btnSortBubblePoints_mc.currentFrame == 1)
         {
            this.arrSearchSorts.push("export class ascending" as any);
            this.arrSearchSorts.push("id descending" as any);
         }
         else
         {
            if(this.SearchForTanksScreen_mc.btnSortClass_mc.currentFrame == 2)
            {
               this.arrSearchSorts.push("export class descending" as any);
            }
            if(this.SearchForTanksScreen_mc.btnSortClass_mc.currentFrame == 3)
            {
               this.arrSearchSorts.push("export class ascending" as any);
            }
            if(this.SearchForTanksScreen_mc.btnSortGunPoints_mc.currentFrame == 2)
            {
               this.arrSearchSorts.push("gunPoints descending" as any);
            }
            if(this.SearchForTanksScreen_mc.btnSortGunPoints_mc.currentFrame == 3)
            {
               this.arrSearchSorts.push("gunPoints ascending" as any);
            }
            if(this.SearchForTanksScreen_mc.btnSortBubblePoints_mc.currentFrame == 2)
            {
               this.arrSearchSorts.push("bubblePoints descending" as any);
            }
            if(this.SearchForTanksScreen_mc.btnSortBubblePoints_mc.currentFrame == 3)
            {
               this.arrSearchSorts.push("bubblePoints ascending" as any);
            }
         }
         if(this.strSortType == "Enemy")
         {
            if(this.SearchForTanksScreen_mc.btnSortDiffRating_mc.currentFrame == 2)
            {
               this.arrSearchSorts.push("difficulty descending" as any);
            }
            if(this.SearchForTanksScreen_mc.btnSortDiffRating_mc.currentFrame == 3)
            {
               this.arrSearchSorts.push("difficulty ascending" as any);
            }
         }
         this.var_117 = new (class_96 as any)();
         this.addChild(this.var_117);
         (this.var_117 as any).x = 550 / 2;
         (this.var_117 as any).y = 450 / 2;
         _loc6_ = 0;
         while(_loc6_ < this.arrSearchFilters.length)
         {
            _loc6_ += 1;
         }
         this.method_209(this.arrSearchFilters,this.arrSearchSorts);
      }
      
      private method_121(): boolean
      {
         var _loc1_: number = NaN;
         var _loc2_: TankData = null as any;
         var _loc3_: any = undefined;
         this.arrTanksInqueue = new (Array as any)();
         _loc1_ = this.refMain.objCurrentPlayer.arrSavedTanks.length;
         _loc3_ = 0;
         while(_loc3_ < _loc1_)
         {
            if(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_ as any].blnShowInSearch == "true")
            {
               _loc2_ = new (TankData as any)();
               if(_loc2_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_ as any].Data))
               {
                  if(this.strViewerType == "AvatarLocal" && _loc2_.blnAvatarTank)
                  {
                     this.arrTanksInqueue.push(_loc2_ as any);
                  }
                  if(this.strViewerType == "EnemyLocal" && !_loc2_.blnAvatarTank)
                  {
                     this.arrTanksInqueue.push(_loc2_ as any);
                  }
                  if(this.strViewerType == "AvatarLocal" && _loc2_.blnAvatarTank || this.strViewerType == "EnemyLocal" && !_loc2_.blnAvatarTank)
                  {
                     this.arrTanksInqueue[this.arrTanksInqueue.length - 1 as any].tankType = 1;
                  }
               }
               _loc2_ = null as any;
            }
            _loc3_ += 1;
         }
         if(_loc1_ == 0)
         {
            return false;
         }
         return true;
      }
      
      private DeleteTank2(param1: any): void
      {
         this.method_141(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any]);
      }
      
      private method_13(param1: any, param2: string = ""): void
      {
         var var_39: any;

         param1.gotoAndStop(1);
         param1.addEventListener("mouseover", this.method_313.bind(this));
         param1.addEventListener("mouseout", this.method_420.bind(this));
         param1.mouseChildren = false;
         param1.buttonMode = true;
         param1.useHandCursor = true;
         this.var_39.push({
            "btn":param1,
            "DescText":param2
         } as any);
      }
      
      private method_141(param1: TankData): any
      {
         var _loc2_: TankData = null as any;
         this.selectTankScreen_mc.gotoAndStop(2);
         (this.selectTankScreen_mc as any).alpha = 0;
         this.selectTankScreen_mc.objTankData = param1;
         this.method_5(this.selectTankScreen_mc);
         this.selectTankScreen_mc.mouseEnabled = true;
         this.selectTankScreen_mc.mouseChildren = true;
         _loc2_ = new (TankData as any)();
         _loc2_.ImportTankData(param1.ExportTankData());
         if(_loc2_.strID.substr(0,1) == "L")
         {
            (this.selectTankScreen_mc.LocalDeleteTank_mc as any).alpha = 1;
         }
         else
         {
            (this.selectTankScreen_mc.LocalDeleteTank_mc as any).alpha = 0;
         }
         this.selectTankScreen_mc.addChildAt(_loc2_.method_61(),1);
         this.var_8.method_4(this.selectTankScreen_mc.btnYes_mc,true,this.method_677);
         this.var_8.method_4(this.selectTankScreen_mc.btnNo_mc,true,this.method_229);
      }
      
      private UnHighlight1(param1: any): void
      {
         if(this.DetailedTank_mc.sprTankData.numRating < 1)
         {
            this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         }
      }
      
      private UnHighlight2(param1: any): void
      {
         if(this.DetailedTank_mc.sprTankData.numRating < 1)
         {
            this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 2)
         {
            this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         }
         else
         {
            this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
         }
      }
      
      private method_263(param1: any): any
      {
         (this.SearchForTanksScreen_mc as any).alpha = 0;
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener("click", this.method_263.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener("click", this.method_282.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.refMain.TransitionTankViewer2TankCreator();
         this.Destroy();
      }
      
      private UnGreyOutNextButton(): void
      {
         this.btnNext_mc.mouseEnabled = true;
         this.btnNext_mc.gotoAndStop(1);
         this.btnNext_mc.buttonMode = true;
         this.btnNext_mc.useHandCursor = true;
      }
      
      private method_646(): any
      {
         var var_23: any;

         this.txtExplination_txt.text = "";
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.removeEventListener("mouseover", this.method_118.bind(this));
         this.DetailedTank_mc.largeTankStats_mc.removeEventListener("mouseout", this.method_136.bind(this));
         this.method_6(this.btnFirst_mc);
         this.method_6(this.btnPrev_mc);
         this.method_6(this.btnNext_mc);
         this.btnFirst_mc.removeEventListener("click", this.ReturnToFirstTank.bind(this));
         this.btnPrev_mc.removeEventListener("click", this.GoBackATank.bind(this));
         this.btnNext_mc.removeEventListener("click", this.GoToNextTank.bind(this));
         this.method_6(this.btnMainMenu_mc);
         this.method_6(this.btnEnterTankID_mc);
         this.method_6(this.btnEnterTankCode_mc);
         this.method_6(this.btnSearchForTanks_mc);
         if(this.var_23 != null)
         {
            this.method_6(this.btnMyAvatar_mc);
         }
         if(this.var_23 == null)
         {
            this.btnMainMenu_mc.removeEventListener("click", this.ReturnToMainMenuFromLargeView.bind(this));
         }
         else
         {
            this.btnMainMenu_mc.removeEventListener("click", this.method_127.bind(this));
         }
         this.btnEnterTankID_mc.removeEventListener("click", this.EnterLargeTankID.bind(this));
         this.btnEnterTankCode_mc.removeEventListener("click", this.method_135.bind(this));
         this.btnSearchForTanks_mc.removeEventListener("click", this.method_434.bind(this));
         this.var_8.method_10();
         this.method_6(this.DetailedTank_mc.btnLargeDelete_mc);
         this.method_6(this.DetailedTank_mc.btnLargeBack_mc);
         this.DetailedTank_mc.btnLargeDelete_mc.removeEventListener("click", this.DeleteLargeScreenTank.bind(this));
         this.DetailedTank_mc.btnLargeBack_mc.removeEventListener("click", this.method_117.bind(this));
         this.method_3(this.DetailedTank_mc.btnLargeEdit_mc);
         this.method_3(this.DetailedTank_mc.btnLargeSave);
         this.DetailedTank_mc.btnLargeSave.addEventListener("click", this.SaveLargeTank.bind(this));
         this.DetailedTank_mc.btnLargeEdit_mc.addEventListener("click", this.EditLargeTank.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseover", this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseout", this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("click", this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseover", this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseout", this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("click", this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseover", this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseout", this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("click", this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseover", this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseout", this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("click", this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseover", this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseout", this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("click", this.SelectStar5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.method_78();
      }
      
      private method_532(param1: any): void
      {
         var var_76: any, var_36: any;

         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.txtPageNumCurrent_txt.text = "";
         this.method_43();
         this.strViewerType = "AvatarLocal";
         this.arrTanksInqueue = new (Array as any)();
         this.method_86();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         (this.btnSortTanks_mc as any).x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      private UnHighlight4(param1: any): void
      {
         if(this.DetailedTank_mc.sprTankData.numRating < 1)
         {
            this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 2)
         {
            this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 3)
         {
            this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 4)
         {
            this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         }
         else
         {
            this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
         }
      }
      
      private UnHighlight5(param1: any): void
      {
         if(this.DetailedTank_mc.sprTankData.numRating < 1)
         {
            this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 2)
         {
            this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 3)
         {
            this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 4)
         {
            this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 5)
         {
            this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         }
         else
         {
            this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
         }
      }
      
      private method_254(param1: any): void
      {
      }
      
      private ViewAllLocalAvatarSelectTanks(param1: any): any
      {
         var var_76: any, var_36: any;

         this.var_76 = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_43();
         this.strViewerType = "AvatarLocal";
         this.arrTanksInqueue = new (Array as any)();
         this.method_86();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         (this.TankLoad1_mc as any).alpha = 0;
         (this.TankLoad2_mc as any).alpha = 0;
         (this.TankLoad3_mc as any).alpha = 0;
         (this.TankLoad4_mc as any).alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1 as any] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2 as any] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3 as any] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         (this.btnSortTanks_mc as any).x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.UnGreyOutNextButton();
         this.method_18();
         this.method_33();
      }
      
      private UnHighlight3(param1: any): void
      {
         if(this.DetailedTank_mc.sprTankData.numRating < 1)
         {
            this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 2)
         {
            this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 3)
         {
            this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         }
         else
         {
            this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
         }
      }
      
      private SaveLargeTank(param1: any): void
      {
         var _loc3_: any = undefined;
         var _loc4_: TankData = null as any;
         var _loc2_: TankData = new (TankData as any)();
         if(_loc2_.ImportTankData(this.DetailedTank_mc.sprTankData.ExportTankData()))
         {
            this.method_6(this.DetailedTank_mc.btnLargeSave);
            this.DetailedTank_mc.btnLargeSave.removeEventListener("click", this.SaveLargeTank.bind(this));
            _loc3_ = 0;
            while(_loc3_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               _loc4_ = new (TankData as any)();
               _loc4_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_ as any].Data);
               if(this.method_122(_loc2_,_loc4_))
               {
                  this.DetailedTank_mc.btnLargeSave.gotoAndStop(4);
                  return;
               }
               _loc3_ += 1;
            }
            this.DetailedTank_mc.btnLargeSave.gotoAndStop(3);
            this.refMain.objCurrentPlayer.method_73(this.DetailedTank_mc.sprTankData.ExportTankData());
         }
         else
         {
            this.method_83(true);
         }
      }
      
      private method_47(): void
      {
         var var_70: any;

         this.method_6(this.btnCurrentPoints_mc);
         if(this.var_70 == null)
         {
            this.method_599();
            return;
         }
         if(this.var_70 == "Avatar")
         {
            this.method_646();
            return;
         }
         if(this.var_70 == "Enemy")
         {
            this.method_746();
            return;
         }
      }
      
      private method_18(): void
      {
         var var_70: any;

         this.method_6(this.btnCurrentPoints_mc);
         if(this.var_70 == null)
         {
            this.method_481();
            return;
         }
         if(this.var_70 == "Avatar")
         {
            this.method_506();
            return;
         }
         if(this.var_70 == "Enemy")
         {
            this.method_666();
            return;
         }
      }
      
      private method_118(param1: any): void
      {
         var var_39: any;

         var _loc2_: any = undefined;
         param1.target.gotoAndStop(2);
         this.method_157();
         _loc2_ = 0;
         while(_loc2_ < this.var_39.length)
         {
            if(param1.target == this.var_39[_loc2_ as any].btn)
            {
               this.txtExplination_txt.text = this.var_39[_loc2_ as any].DescText;
            }
            _loc2_ += 1;
         }
      }
      
      private ViewCurrentProfileTanks(param1: any): void
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener("click", this.method_190.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener("click", this.method_212.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private EditLargeTank(param1: any): void
      {
         var _loc2_: MovieClip = null as any;
         if(!this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]))
         {
            this.method_18();
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any].blnAvatarTank)
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any],"Avatar");
            }
            else
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any],"Enemy");
            }
         }
         else
         {
            _loc2_ = this.var_154.method_60(new (class_60 as any)(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]);
               }
            }
         }
      }
      
      private method_506(): any
      {
         var var_2: any, var_23: any;

         this.txtExplination_txt.text = "";
         this.method_6(this.TankLoad1_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad1_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad1_mc.var_2.btnDelete_mc);
         this.TankLoad1_mc.var_2.btnDetails_mc.removeEventListener("click", this.Details1.bind(this));
         this.TankLoad1_mc.var_2.btnEdit_mc.removeEventListener("click", this.Edit1.bind(this));
         this.TankLoad1_mc.var_2.btnDelete_mc.removeEventListener("click", this.DeleteTank1.bind(this));
         this.method_6(this.TankLoad2_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad2_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad2_mc.var_2.btnDelete_mc);
         this.TankLoad2_mc.var_2.btnDetails_mc.removeEventListener("click", this.Details2.bind(this));
         this.TankLoad2_mc.var_2.btnEdit_mc.removeEventListener("click", this.Edit2.bind(this));
         this.TankLoad2_mc.var_2.btnDelete_mc.removeEventListener("click", this.DeleteTank2.bind(this));
         this.method_6(this.TankLoad3_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad3_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad3_mc.var_2.btnDelete_mc);
         this.TankLoad3_mc.var_2.btnDetails_mc.removeEventListener("click", this.Details3.bind(this));
         this.TankLoad3_mc.var_2.btnEdit_mc.removeEventListener("click", this.Edit3.bind(this));
         this.TankLoad3_mc.var_2.btnDelete_mc.removeEventListener("click", this.DeleteTank3.bind(this));
         this.method_6(this.TankLoad4_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad4_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad4_mc.var_2.btnDelete_mc);
         this.TankLoad4_mc.var_2.btnDetails_mc.removeEventListener("click", this.Details4.bind(this));
         this.TankLoad4_mc.var_2.btnEdit_mc.removeEventListener("click", this.Edit4.bind(this));
         this.TankLoad4_mc.var_2.btnDelete_mc.removeEventListener("click", this.DeleteTank4.bind(this));
         this.method_6(this.btnFirst_mc);
         this.method_6(this.btnPrev_mc);
         this.method_6(this.btnNext_mc);
         this.btnFirst_mc.removeEventListener("click", this.method_128.bind(this));
         this.btnPrev_mc.removeEventListener("click", this.method_124.bind(this));
         this.btnNext_mc.removeEventListener("click", this.method_105.bind(this));
         this.method_6(this.btnMainMenu_mc);
         this.method_6(this.btnSearchForTanks_mc);
         this.method_6(this.btnSortTanks_mc);
         this.method_6(this.btnEnterTankID_mc);
         this.method_6(this.btnEnterTankCode_mc);
         if(this.var_23 == null)
         {
            this.btnMainMenu_mc.removeEventListener("click", this.method_133.bind(this));
         }
         else
         {
            this.btnMainMenu_mc.removeEventListener("click", this.method_126.bind(this));
         }
         this.btnSearchForTanks_mc.removeEventListener("click", this.SearchForAvatarSelectTanks.bind(this));
         this.btnSortTanks_mc.removeEventListener("click", this.method_125.bind(this));
         this.btnEnterTankID_mc.removeEventListener("click", this.EnterTankID.bind(this));
         this.btnEnterTankCode_mc.removeEventListener("click", this.method_129.bind(this));
         this.var_8.method_10();
         this.var_39.length = 0;
         this.method_78();
      }
      
      private method_133(param1: any): void
      {
         this.method_18();
         this.refMain.WipeArrTankViewerData();
         this.refMain.TransitionTankViewer2MainMenu();
      }
      
      private method_128(param1: any): void
      {
         var var_2: any, var_36: any;

         this.method_78();
         this.TankLoad1_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad1_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad2_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad2_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad3_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad3_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad4_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad4_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad1_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad2_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad3_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad4_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_24();
         this.GreyOutFirstButton();
         this.GreyOutBackButton();
         if(this.arrTanksInqueue.length > 4)
         {
            this.UnGreyOutNextButton();
         }
         else
         {
            this.GreyOutNextButton();
         }
         this.method_23();
         this.method_18();
         this.method_33();
         this.method_98();
      }
      
      private method_124(param1: any): void
      {
         var var_2: any, var_36: any;

         this.method_78();
         this.TankLoad1_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad1_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad2_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad2_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad3_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad3_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad4_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad4_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad1_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad2_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad3_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad4_mc.var_2.btnCopy_mc.gotoAndStop(1);
         if(this.intCurrentLocationInTanksQueue - 4 >= 0)
         {
            this.intCurrentLocationInTanksQueue -= 4;
            --this.var_36;
         }
         else
         {
            this.intCurrentLocationInTanksQueue = 0;
            this.var_36 = 1;
         }
         this.method_24();
         if(this.arrTanksInqueue.length > 4)
         {
            this.UnGreyOutNextButton();
         }
         else
         {
            this.GreyOutNextButton();
         }
         if(this.intCurrentLocationInTanksQueue <= 0)
         {
            this.GreyOutBackButton();
            this.GreyOutFirstButton();
         }
         this.method_23();
         this.method_18();
         this.method_33();
         this.method_98();
      }
      
      private method_33(): void
      {
         var var_139: any;

         this.method_3(this.btnCurrentPoints_mc,"Your current profile stats and points");
         var _loc1_: number = 0;
         var _loc2_: number = 0;
         var _loc3_: number = 0;
         if(this.refMain.var_139)
         {
            _loc1_ = 12;
         }
         else
         {
            _loc1_ = this.refMain.objCurrentPlayer.gunPointsMax.method_29();
         }
         if(this.refMain.blnCheatClass)
         {
            _loc2_ = 6;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.maxClass.method_29();
         }
         if(this.refMain.var_132)
         {
            _loc3_ = 100;
         }
         else
         {
            _loc3_ = this.refMain.objCurrentPlayer.bubblePointsMax.method_29();
         }
         this.btnCurrentPoints_mc.txtClass_txt.text = _loc2_;
         this.btnCurrentPoints_mc.txtBBL_txt.text = _loc3_;
         this.btnCurrentPoints_mc.txtGP_txt.text = _loc1_;
         if(this.var_70 == null)
         {
            (this.btnCreateATank_mc as any).alpha = 0;
            this.method_770();
            return;
         }
         if(this.var_70 == "Avatar")
         {
            if(!this.var_22)
            {
               this.method_5(this.btnCreateATank_mc);
            }
            this.method_543();
            return;
         }
         if(this.var_70 == "Enemy")
         {
            if(!this.var_22)
            {
               this.method_5(this.btnCreateATank_mc);
            }
            this.method_491();
            return;
         }
      }
      
      private method_112(param1: any): void
      {
         if(param1.target.mouseEnabled == true)
         {
            param1.target.gotoAndStop(1);
         }
         this.txtExplination_txt.text = "";
      }
      
      private Destroy(): void
      {
         this.urlLoader.removeEventListener("complete", this.method_278.bind(this));
         this.urlLoader.removeEventListener(HTTPStatusEvent.HTTP_STATUS, this.method_280.bind(this));
         this.urlLoader.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
         this.urlLoader.removeEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
         while(this.numChildren > 0)
         {
            this.removeChildAt(0);
         }
         this.objGameObjectLibrary = null as any;
         this.var_129.length = 0;
         this.var_130.length = 0;
         this.var_116.length = 0;
         this.var_39.length = 0;
         this.arrSearchFilters.length = 0;
         this.arrSearchSorts.length = 0;
         this.arrTanksInqueue.length = 0;
         this.var_129 = null as any;
         this.var_130 = null as any;
         this.var_116 = null as any;
         this.var_39 = null as any;
         this.arrSearchFilters = null as any;
         this.arrSearchSorts = null as any;
         this.arrTanksInqueue = null as any;
      }
      
      private method_3(param1: any, param2: string = ""): void
      {
         var var_39: any;

         param1.gotoAndStop(1);
         param1.addEventListener("mouseover", this.method_107.bind(this));
         param1.addEventListener("mouseout", this.method_112.bind(this));
         param1.mouseChildren = false;
         param1.buttonMode = true;
         param1.useHandCursor = true;
         this.var_39.push({
            "btn":param1,
            "DescText":param2
         } as any);
      }
      
      private SubmitTankID(param1: any): void
      {
         var var_70: any;

         var _loc2_: string = null as any;
         this.method_6(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.SearchForTanksScreen_mc.btnBack_mc.removeEventListener("click", this.method_161.bind(this));
         this.SearchForTanksScreen_mc.btnSubmit_mc.removeEventListener("click", this.SubmitTankID.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.removeEventListener("focusin", this.method_20.bind(this));
         this.arrTanksInqueue = new (Array as any)();
         this.arrSearchFilters = new (Array as any)();
         this.arrSearchFilters.push("page=1" as any);
         _loc2_ = "Enemy";
         if(this.var_70 == null)
         {
            _loc2_ = "Enemy";
            if(String(this.SearchForTanksScreen_mc.txtEnterID_txt.text).substr(0,1) == "A")
            {
               _loc2_ = "Avatar";
            }
            this.arrSearchFilters.push("type=" + _loc2_ as any);
            this.arrSearchFilters.push("id=" + this.SearchForTanksScreen_mc.txtEnterID_txt.text as any);
         }
         else
         {
            if(String(this.SearchForTanksScreen_mc.txtEnterID_txt.text).substr(0,1) != this.var_70.substr(0,1))
            {
               this.ReturnToViewTanksFromSearch();
               return;
            }
            _loc2_ = "Enemy";
            if(String(this.SearchForTanksScreen_mc.txtEnterID_txt.text).substr(0,1) == "A")
            {
               _loc2_ = "Avatar";
            }
            this.arrSearchFilters.push("type=" + _loc2_ as any);
            this.arrSearchFilters.push("id=" + this.SearchForTanksScreen_mc.txtEnterID_txt.text as any);
         }
         this.arrSearchSorts = new (Array as any)();
         this.arrSearchSorts.push("id descending" as any);
         this.method_209(this.arrSearchFilters,this.arrSearchSorts);
      }
      
      private method_163(param1: TankData): void
      {
         var var_8: any;

         var _loc2_: TankData = null as any;
         (this.selectTankScreen_mc as any).alpha = 0;
         this.selectTankScreen_mc.objTankData = param1;
         this.method_5(this.selectTankScreen_mc);
         this.selectTankScreen_mc.mouseEnabled = true;
         this.selectTankScreen_mc.mouseChildren = true;
         _loc2_ = new (TankData as any)();
         _loc2_.ImportTankData(param1.ExportTankData());
         this.selectTankScreen_mc.addChildAt(_loc2_.method_61(),1);
         this.var_8.method_4(this.selectTankScreen_mc.btnYes_mc,true,this.CallSelectableCallBackFunction);
         this.var_8.method_4(this.selectTankScreen_mc.btnNo_mc,true,this.method_229);
      }
      
      private ViewAllLocalTanks(param1: any): void
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener("click", this.method_171.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener("click", this.method_200.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private method_161(param1: any): void
      {
         this.method_6(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnBack_mc);
         this.SearchForTanksScreen_mc.btnBack_mc.removeEventListener("click", this.method_161.bind(this));
         this.SearchForTanksScreen_mc.btnSubmit_mc.removeEventListener("click", this.SubmitTankID.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.removeEventListener("focusin", this.method_20.bind(this));
         this.ReturnToViewTanksFromSearch();
      }
      
      private method_434(param1: any): void
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(2);
         this.method_5(this.SearchForTanksScreen_mc);
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
         this.strSortType = "Avatar";
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         (this.SearchForTanksScreen_mc.diffRatingBG_mc as any).alpha = 0;
         this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.text = "";
         this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.selectable = false;
         this.SearchForTanksScreen_mc.txtDiffRating_txt.text = "";
         this.SearchForTanksScreen_mc.txtDiffRating_txt.selectable = false;
         (this.SearchForTanksScreen_mc.btnSortDiffRating_mc as any).alpha = 0;
         this.SearchForTanksScreen_mc.btnSortDiffRating_mc.mouseEnabled = false;
         (this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc as any).alpha = 0;
         this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.mouseEnabled = false;
         this.var_36 = 1;
         this.method_3(this.SearchForTanksScreen_mc.btnSearch_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass1_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass2_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass3_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass4_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass5_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass6_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnYes_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnNo_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnFeaturedYes_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnFeaturedNo_mc);
         this.SearchForTanksScreen_mc.btnFeaturedYes_mc.addEventListener("click", this.FeaturedYesDown.bind(this));
         this.SearchForTanksScreen_mc.btnFeaturedNo_mc.addEventListener("click", this.FeaturedNoDown.bind(this));
         this.SearchForTanksScreen_mc.btnSearch_mc.addEventListener("click", this.SearchForATank.bind(this));
         this.SearchForTanksScreen_mc.btnClass1_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass2_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass3_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass4_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass5_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass6_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnYes_mc.addEventListener("click", this.HIYesDown.bind(this));
         this.SearchForTanksScreen_mc.btnNo_mc.addEventListener("click", this.HINoDown.bind(this));
         this.SearchForTanksScreen_mc.txtName_txt.addEventListener("focusin", this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtAuthor_txt.addEventListener("focusin", this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtGunPoints_txt.addEventListener("focusin", this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtBubblePoints_txt.addEventListener("focusin", this.method_20.bind(this));
         this.method_25(this.SearchForTanksScreen_mc.btnSortClass_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnSortGunPoints_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnSortBubblePoints_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorGP_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorBP_mc);
      }
      
      private FeaturedNoDown(param1: any): void
      {
         this.SelectableDown(param1);
         this.SearchForTanksScreen_mc.btnFeaturedYes_mc.gotoAndStop(1);
      }
      
      private method_599(): any
      {
         var var_23: any;

         this.txtExplination_txt.text = "";
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.removeEventListener("mouseover", this.method_118.bind(this));
         this.DetailedTank_mc.largeTankStats_mc.removeEventListener("mouseout", this.method_136.bind(this));
         this.method_6(this.btnFirst_mc);
         this.method_6(this.btnPrev_mc);
         this.method_6(this.btnNext_mc);
         this.btnFirst_mc.removeEventListener("click", this.ReturnToFirstTank.bind(this));
         this.btnPrev_mc.removeEventListener("click", this.GoBackATank.bind(this));
         this.btnNext_mc.removeEventListener("click", this.GoToNextTank.bind(this));
         this.method_6(this.btnMainMenu_mc);
         this.method_6(this.btnEnterTankID_mc);
         this.method_6(this.btnEnterTankCode_mc);
         this.method_6(this.btnSearchForTanks_mc);
         if(this.var_23 != null)
         {
            this.method_6(this.btnMyAvatar_mc);
         }
         if(this.var_23 == null)
         {
            this.btnMainMenu_mc.removeEventListener("click", this.ReturnToMainMenuFromLargeView.bind(this));
         }
         else
         {
            this.btnMainMenu_mc.removeEventListener("click", this.method_127.bind(this));
         }
         this.btnEnterTankID_mc.removeEventListener("click", this.EnterLargeTankID.bind(this));
         this.btnEnterTankCode_mc.removeEventListener("click", this.method_135.bind(this));
         this.btnSearchForTanks_mc.removeEventListener("click", this.method_364.bind(this));
         this.var_8.method_10();
         this.method_6(this.DetailedTank_mc.btnLargeDelete_mc);
         this.method_6(this.DetailedTank_mc.btnLargeBack_mc);
         this.DetailedTank_mc.btnLargeDelete_mc.removeEventListener("click", this.DeleteLargeScreenTank.bind(this));
         this.DetailedTank_mc.btnLargeBack_mc.removeEventListener("click", this.method_117.bind(this));
         this.method_3(this.DetailedTank_mc.btnLargeEdit_mc);
         this.method_3(this.DetailedTank_mc.btnLargeSave);
         this.DetailedTank_mc.btnLargeSave.addEventListener("click", this.SaveLargeTank.bind(this));
         this.DetailedTank_mc.btnLargeEdit_mc.addEventListener("click", this.EditLargeTank.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseover", this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("mouseout", this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener("click", this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseover", this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("mouseout", this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener("click", this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseover", this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("mouseout", this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener("click", this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseover", this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("mouseout", this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener("click", this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseover", this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("mouseout", this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener("click", this.SelectStar5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.method_78();
      }
      
      private DeleteLargeScreenTank(param1: any): void
      {
         this.method_141(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue as any]);
      }
      
      private method_410(param1: any): void
      {
         var var_76: any, var_23: any;

         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_147(param1);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
         this.strSortType = "Enemy";
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         (this.SearchForTanksScreen_mc.diffRatingBG_mc as any).alpha = 1;
         this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.text = "Difficulty Rating";
         this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.selectable = false;
         this.SearchForTanksScreen_mc.txtDiffRating_txt.text = "Type number here";
         this.SearchForTanksScreen_mc.txtDiffRating_txt.selectable = true;
         (this.SearchForTanksScreen_mc.btnSortDiffRating_mc as any).alpha = 1;
         this.SearchForTanksScreen_mc.btnSortDiffRating_mc.mouseEnabled = true;
         (this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc as any).alpha = 1;
         this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.mouseEnabled = true;
         this.method_25(this.SearchForTanksScreen_mc.btnSortDiffRating_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc);
         this.SearchForTanksScreen_mc.txtDiffRating_txt.addEventListener("focusin", this.method_20.bind(this));
         this.var_36 = 1;
         this.method_3(this.SearchForTanksScreen_mc.btnSearch_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass1_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass2_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass3_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass4_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass5_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass6_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnYes_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnNo_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnFeaturedYes_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnFeaturedNo_mc);
         this.SearchForTanksScreen_mc.btnFeaturedYes_mc.addEventListener("click", this.FeaturedYesDown.bind(this));
         this.SearchForTanksScreen_mc.btnFeaturedNo_mc.addEventListener("click", this.FeaturedNoDown.bind(this));
         this.SearchForTanksScreen_mc.btnSearch_mc.addEventListener("click", this.SearchForATank.bind(this));
         this.SearchForTanksScreen_mc.btnClass1_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass2_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass3_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass4_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass5_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass6_mc.addEventListener("click", this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnYes_mc.addEventListener("click", this.HIYesDown.bind(this));
         this.SearchForTanksScreen_mc.btnNo_mc.addEventListener("click", this.HINoDown.bind(this));
         this.SearchForTanksScreen_mc.txtName_txt.addEventListener("focusin", this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtAuthor_txt.addEventListener("focusin", this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtGunPoints_txt.addEventListener("focusin", this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtBubblePoints_txt.addEventListener("focusin", this.method_20.bind(this));
         this.method_25(this.SearchForTanksScreen_mc.btnSortClass_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnSortGunPoints_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnSortBubblePoints_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorGP_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorBP_mc);
      }
      
      private method_136(param1: any): void
      {
         param1.target.gotoAndStop(1);
         this.method_157();
         this.txtExplination_txt.text = "";
      }
      
      private FeaturedYesDown(param1: any): void
      {
         this.SelectableDown(param1);
         this.SearchForTanksScreen_mc.btnFeaturedNo_mc.gotoAndStop(1);
      }
      
      private method_280(param1: any): void
      {
      }
   }
