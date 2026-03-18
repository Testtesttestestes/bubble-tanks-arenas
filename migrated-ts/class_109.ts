// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { BTAGameWorld } from './BTAGameWorld';
import { class_113 } from './class_113';
import { class_134 } from './class_134';
import { class_135 } from './class_135';
import { class_136 } from './class_136';
import { class_46 } from './class_46';
import { class_50 } from './class_50';
import { class_6 } from './class_6';
import { class_68 } from './class_68';
import { class_79 } from './class_79';
import { EnemyAI } from './EnemyAI';
import { class_125 } from './package_11/class_125';
import { class_126 } from './package_11/class_126';
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





   export class class_109 extends MovieClip{
  [key: string]: any;
      
      public effectLayer_under_mc!: MovieClip & Record<string, any>;
      public arrEnemies!: any;
      public lifeBubbleLayer_mc!: MovieClip & Record<string, any>;
      public arrBullets!: Array<class_68>;
      private var_28!: Array<MovieClip>;
      private var_115!: any;
      public BF_BG_mc!: MovieClip & Record<string, any>;
      public var_413!: boolean;
      public arrBulletRemoveQueue!: Array<class_68>;
      public effect_mask_under!: MovieClip & Record<string, any>;
      private var_225!: number;
      public var_60!: BTAGameWorld;
      private var_159!: boolean;
      public var_160!: MovieClip & Record<string, any>;
      private var_215!: number;
      private var_191!: any;
      private var_285!: MovieClip & Record<string, any>;
      public var_323!: MovieClip & Record<string, any>;
      public enemyLayer_mc!: MovieClip & Record<string, any>;
      private var_279!: Array<class_113>;
      private var_267!: any;
      public avatarUnderBubble_mc!: MovieClip & Record<string, any>;
      private arrBFEnemyData!: any;
      private mRef!: class_79;
      public BF_over_detail_mc!: MovieClip & Record<string, any>;
      private var_352!: boolean;
      private var_195!: Array<EnemyAI>;
      constructor(){
         var var_191: any, var_115: any, var_195: any, var_279: any, var_28: any, var_267: any, var_352: any, var_285: any, var_159: any, var_413: any, var_323: any, var_225: any, var_215: any;

         // @ts-ignore
         super();
         this.arrBFEnemyData = new (Array as any)();
         this.var_191 = new (Array as any)();
         this.arrEnemies = new (Array as any)();
         this.var_115 = new (Array as any)();
         this.arrBullets = new Array<class_68>();
         this.arrBulletRemoveQueue = new Array<class_68>();
         this.var_195 = new Array<EnemyAI>();
         this.var_279 = new Array<class_113>();
         this.var_28 = new Array<MovieClip>();
         this.var_267 = new (Array as any)();
         this.var_352 = false;
         this.var_285 = null as any;
         this.var_159 = false;
         this.var_413 = false;
         this.var_323 = null as any;
         this.var_225 = -1;
         this.var_215 = -1;
      }
      
      public SaveTankData(): void
      {
         var var_159: any, var_191: any;

         var _loc1_: number = 0;
         if(this.var_159 == false)
         {
            this.method_306();
            this.method_407();
            this.var_191 = new (Array as any)();
            _loc1_ = 0;
            while(_loc1_ < this.arrEnemies.length)
            {
               this.var_191.push({
                  "mc":this.arrEnemies[_loc1_ as any],
                  "xLoc":this.arrEnemies[_loc1_ as any].x,
                  "yLoc":this.arrEnemies[_loc1_ as any].y,
                  "rot":this.arrEnemies[_loc1_ as any].rotation
               } as any);
               this.enemyLayer_mc.removeChild(this.arrEnemies[_loc1_ as any]);
               _loc1_++;
            }
            this.arrEnemies = new (Array as any)();
         }
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0[8]) + param1 - 0[4]);
      }
      
      public method_246(): any
      {
         var var_159: any;

         var _loc1_: number = 0;
         if(this.var_159 == false)
         {
            _loc1_ = 0;
            while(_loc1_ < this.arrBulletRemoveQueue.length)
            {
               this.method_333(this.arrBulletRemoveQueue[_loc1_ as any]);
               _loc1_++;
            }
            this.arrBulletRemoveQueue = new Array<class_68>();
         }
      }
      
      public DeleteEnemiesInArrEnemyDeleteQueue(): any
      {
         var var_159: any, var_195: any;

         var _loc1_: number = 0;
         if(this.var_159 == false)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_195.length)
            {
               this.RemoveEnemy(this.var_195[_loc1_ as any]);
               _loc1_++;
            }
            this.var_195 = new Array<EnemyAI>();
         }
      }
      
      public set method_523(param1: any)
      {
         if(this.var_159 == false)
         {
            this.arrBFEnemyData = new (Array as any)();
            this.arrBFEnemyData = param1;
            this.method_674();
         }
      }
      
      public AddEffectToQueue(param1: MovieClip, param2: number, param3: number, param4: string, param5: boolean, param6: Function = null): void
      {
         var var_60: any, var_320: any, var_267: any;

         if(this.var_60.var_320 == true)
         {
            this.var_267.push({
               "effectClass":param1,
               "xLoc":param2,
               "yLoc":param3,
               "layer":param4,
               "randRotation":param5,
               "EndCallBack":param6
            } as any);
         }
      }
      
      public method_580(param1: MovieClip): void
      {
         var var_28: any, var_60: any;

         var _loc2_: number = 0;
         while(_loc2_ < this.var_28.length)
         {
            if(param1 == this.var_28[_loc2_ as any])
            {
               this.var_60.objAvatarInterface.FullHealthPopUp();
               this.var_60.myAvatar.AddLife(this.var_28[_loc2_ as any].intLifeAmount * (this.var_60.myAvatar.objData.numLife / 100));
               this.var_60.method_573();
               this.var_28.splice(_loc2_,1);
               this.lifeBubbleLayer_mc.removeChild(param1);
               break;
            }
            _loc2_++;
         }
      }
      
      public ReAddAllTanks(): void
      {
         var var_159: any, var_191: any;

         var _loc1_: number = 0;
         var _loc2_: MovieClip = null as any;
         if(this.var_159 == false)
         {
            this.arrEnemies = new (Array as any)();
            _loc1_ = 0;
            while(_loc1_ < this.var_191.length)
            {
               _loc2_ = this.var_191[_loc1_ as any].mc;
               (_loc2_ as any).x = this.var_191[_loc1_ as any].xLoc;
               (_loc2_ as any).y = this.var_191[_loc1_ as any].yLoc;
               (_loc2_ as any).rotation = this.var_191[_loc1_ as any].rot;
               this.enemyLayer_mc.addChild(_loc2_);
               this.arrEnemies.push(_loc2_ as any);
               _loc1_++;
            }
            this.var_191 = new (Array as any)();
         }
      }
      
      public method_235(param1: MovieClip): void
      {
         var var_285: any;

         this.var_285 = param1;
      }
      
      public AreaBurstTest(param1: number, param2: number, param3: number, param4: number): void
      {
         var _loc6_: class_6 = null as any;
         var _loc5_: number = 0;
         _loc5_ = 0;
         while(_loc5_ < this.arrEnemies.length)
         {
            _loc6_ = new (class_6 as any)(this.arrEnemies[_loc5_ as any].x - param1,this.arrEnemies[_loc5_ as any].y - param2);
            if(_loc6_.method_41() <= param3)
            {
               this.arrEnemies[_loc5_ as any].Damage(param4);
            }
            _loc5_++;
         }
         _loc5_ = 0;
         while(_loc5_ < this.arrBullets.length)
         {
            _loc6_ = new (class_6 as any)(this.arrBullets[_loc5_ as any].x - param1,this.arrBullets[_loc5_ as any].y - param2);
            if(this.arrBullets[_loc5_ as any].blnEnemy && this.arrBullets[_loc5_ as any].blnDestroyable)
            {
               if(_loc6_.method_41() <= param3)
               {
                  this.arrBulletRemoveQueue.push(this.arrBullets[_loc5_ as any] as any);
               }
            }
            _loc5_++;
         }
         this.method_246();
         this.DeleteEnemiesInArrEnemyDeleteQueue();
      }
      
      public SpawnNewBullet(param1: class_68, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean = true, param9: any = null, param10: MovieClip = null): class_68
      {
         var var_285: any, var_60: any, var_282: any;

         if(this.var_285 != null)
         {
            if(this.var_60.var_282 == false)
            {
               (param1 as any).x = param2;
               (param1 as any).y = param3;
               (param1 as any).scaleX = (param1 as any).scaleY = param4;
               (param1 as any).rotation = param5;
               this.var_285.addChild(param1);
               param1.Setup(param6,param9,param10,param8,param7,this);
               param1.blnMoveTank = true;
               this.arrBullets.push(param1 as any);
               if(param8 == false)
               {
                  this.var_60.method_460(1);
               }
               else
               {
                  this.var_60.method_460(2);
               }
               if(param8 == false)
               {
                  if(this.var_225 == -1)
                  {
                     this.mRef.SoundCall(new (class_50 as any)());
                     this.var_225 = 5;
                  }
               }
            }
         }
         return param1;
      }
      
      public method_690(): void
      {
         var var_28: any;

         var _loc1_: number = 0;
         while(_loc1_ < this.var_28.length)
         {
            this.var_28[_loc1_ as any].blnCollect = true;
            _loc1_++;
         }
      }
      
      private LifeBubbleCallback(param1: MovieClip): void
      {
         var var_28: any;

         var _loc2_: number = 0;
         while(_loc2_ < this.var_28.length)
         {
            if(param1 == this.var_28[_loc2_ as any])
            {
               this.var_28.splice(_loc2_,1);
               this.lifeBubbleLayer_mc.removeChild(param1);
               break;
            }
            _loc2_++;
         }
      }
      
      public AreaDamageTest(param1: string, param2: MovieClip, param3: class_68, param4: number, param5: number = 0): void
      {
         var _loc6_: number = 0;
         if(param1 == "r")
         {
            _loc6_ = 0;
            _loc6_ = 0;
            while(_loc6_ < this.arrEnemies.length)
            {
               if(param2 != this.arrEnemies[_loc6_ as any])
               {
                  if(this.method_388(this.arrEnemies[_loc6_ as any],param3,param4) == true)
                  {
                     this.arrEnemies[_loc6_ as any].Damage(param5);
                  }
               }
               _loc6_++;
            }
            _loc6_ = 0;
            while(_loc6_ < this.arrBullets.length)
            {
               if(this.arrBullets[_loc6_ as any].blnEnemy && this.arrBullets[_loc6_ as any].blnDestroyable)
               {
                  if(this.method_388(this.arrBullets[_loc6_ as any],param3,param4) == true)
                  {
                     this.arrBulletRemoveQueue.push(this.arrBullets[_loc6_ as any] as any);
                  }
               }
               _loc6_++;
            }
            this.method_246();
            this.DeleteEnemiesInArrEnemyDeleteQueue();
         }
      }
      
      private method_306(): void
      {
         var var_285: any;

         var _loc1_: number = 0;
         while(_loc1_ < this.arrBullets.length)
         {
            this.arrBullets[_loc1_ as any].Deactivate();
            this.var_285.removeChild(this.arrBullets[_loc1_ as any]);
            _loc1_++;
         }
         this.arrBullets = new Array<class_68>();
      }
      
      private method_662(): void
      {
         var var_215: any;

         if(this.var_215 > 0)
         {
            --this.var_215;
         }
         else if(this.var_215 == 0)
         {
            this.var_215 = -1;
         }
      }
      
      public AreaStunTest(param1: number, param2: number, param3: number, param4: number): void
      {
         var _loc6_: class_6 = null as any;
         var _loc5_: number = 0;
         while(_loc5_ < this.arrEnemies.length)
         {
            _loc6_ = new (class_6 as any)(this.arrEnemies[_loc5_ as any].x - param1,this.arrEnemies[_loc5_ as any].y - param2);
            if(_loc6_.method_41() <= param3)
            {
               this.arrEnemies[_loc5_ as any].StunMe(param4);
               this.arrEnemies[_loc5_ as any].EffectMeCrazy("stun",param4,5,false);
            }
            _loc5_++;
         }
      }
      
      private method_649(param1: class_113): void
      {
      }
      
      public Deactivate(): void
      {
         var var_159: any, var_352: any;

         if(this.var_159 == false)
         {
            if(this.var_352 == false)
            {
               this.SaveTankData();
            }
            else
            {
               this.method_306();
               this.method_407();
               this.mRef = null as any;
               this.var_115 = null as any;
               this.arrBFEnemyData = null as any;
               this.var_191 = null as any;
               this.arrEnemies = null as any;
               this.arrBullets = new Array<class_68>();
               this.arrBulletRemoveQueue = new Array<class_68>();
               this.var_195 = null as any;
               this.var_279 = null as any;
               this.var_267 = null as any;
               this.var_28 = new Array<MovieClip>();
               this.var_159 = true;
            }
         }
      }
      
      public SpawnNewEnemy(param1: string, param2: number, param3: number): void
      {
         var var_60: any;

         var _loc4_: TankData = new (TankData as any)();
         _loc4_.ImportTankData(param1);
         var _loc5_: MovieClip = _loc4_.method_61(3,this.var_60);
         (_loc5_ as any).x = param2;
         (_loc5_ as any).y = param3;
         this.enemyLayer_mc.addChild(_loc5_);
         _loc5_.SetCallback(this.TankCallback);
         _loc5_.intState = 1;
         this.arrEnemies.push(_loc5_ as any);
      }
      
      public method_407(): void
      {
         var var_28: any;

         var _loc1_: number = 0;
         while(_loc1_ < this.var_28.length)
         {
            this.lifeBubbleLayer_mc.removeChild(this.var_28[_loc1_ as any]);
            _loc1_++;
         }
         this.var_28 = new Array<MovieClip>();
      }
      
      private method_589(param1: any): void
      {
         var var_60: any, var_320: any;

         if(this.var_60.var_320 == true)
         {
            this.var_60.objEffectsEngine.method_60(param1.effectClass,param1.xLoc,param1.yLoc,param1.layer,param1.randRotation,param1.EndCallBack);
         }
      }
      
      private RemoveEnemy(param1: EnemyAI): void
      {
         var var_115: any;

         var _loc3_: number = 0;
         var _loc2_: number = 0;
         while(_loc2_ < this.arrEnemies.length)
         {
            if(this.arrEnemies[_loc2_ as any] == param1)
            {
               _loc3_ = 0;
               while(_loc3_ < this.var_115.length)
               {
                  if(param1 == this.var_115[_loc3_ as any])
                  {
                     this.var_115.splice(_loc3_,1);
                  }
                  _loc3_++;
               }
               this.arrEnemies.splice(_loc2_,1);
               this.enemyLayer_mc.removeChild(param1);
               break;
            }
            _loc2_++;
         }
      }
      
      public method_333(param1: class_68): void
      {
         var var_115: any;

         var var_106: boolean = false;
         var var_56: number = 0;
         var var_40: number = 0;
         var var_157: number = 0;
         var var_126: class_68 = param1;
         var var_150: number = 0;
         while(var_150 < this.arrBullets.length)
         {
            if(this.arrBullets[var_150 as any] != null && this.arrBullets[var_150 as any] != undefined)
            {
               if(this.arrBullets[var_150 as any] == var_126)
               {
                  if(var_126 != null)
                  {
                     var_106 = false;
                     var_56 = 0;
                     while(var_56 < this.var_115.length)
                     {
                        if(this.var_115[var_56 as any] != null)
                        {
                           try
                           {
                              if(this.var_115[var_56 as any].arrPrimaryWeapons[0] != null)
                              {
                                 var_40 = 0;
                                 while(var_40 < this.var_115[var_56 as any].arrPrimaryWeapons.length)
                                 {
                                    if(this.var_115[var_56 as any].arrPrimaryWeapons[var_40 as any] != null)
                                    {
                                       if(this.var_115[var_56 as any].arrPrimaryWeapons[var_40 as any].blnMineLayer == true)
                                       {
                                          var_157 = 0;
                                          while(var_157 < this.var_115[var_56 as any].arrPrimaryWeapons[var_40 as any].arrMineRefs.length)
                                          {
                                             if(this.var_115[var_56 as any].arrPrimaryWeapons[var_40 as any].arrMineRefs[var_157 as any] != null)
                                             {
                                                if(this.var_115[var_56 as any].arrPrimaryWeapons[var_40 as any].arrMineRefs[var_157 as any].mc.name == var_126.name)
                                                {
                                                   var_106 = true;
                                                   this.var_115[var_56 as any].arrPrimaryWeapons[var_40 as any].arrMineRefs.splice(var_157,1);
                                                   break;
                                                }
                                             }
                                             var_157++;
                                          }
                                       }
                                       if(var_106 == true)
                                       {
                                          break;
                                       }
                                    }
                                    var_40++;
                                 }
                              }
                           }
                           catch (e: any)
                           {
                           }
                           if(var_106 == true)
                           {
                              break;
                           }
                        }
                        var_56++;
                     }
                     this.arrBullets[var_150 as any].Deactivate();
                     this.arrBullets.splice(var_150,1);
                     this.var_285.removeChild(var_126);
                     break;
                  }
               }
            }
            var_150++;
         }
      }
      
      private method_742(): void
      {
         var var_225: any;

         if(this.var_225 > 0)
         {
            --this.var_225;
         }
         else if(this.var_225 == 0)
         {
            this.var_225 = -1;
         }
      }
      
      public Setup(param1: class_79): void
      {
         var var_159: any;

         if(this.var_159 == false)
         {
            this.mRef = param1;
         }
      }
      
      public DroneConversionTest(param1: number, param2: number, param3: boolean): any
      {
         var _loc4_: number = 0;
         while(_loc4_ < this.arrBullets.length)
         {
            if(this.arrBullets[_loc4_ as any].blnEnemy != param3 && this.arrBullets[_loc4_ as any].blnRotateTowardTarget)
            {
               this.arrBulletRemoveQueue.push(this.arrBullets[_loc4_ as any] as any);
               if(param3 == true)
               {
                  this.SpawnNewBullet(new (class_126 as any)(),this.arrBullets[_loc4_ as any].x,this.arrBullets[_loc4_ as any].y,1,this.arrBullets[_loc4_ as any].rotation,5,1,true,null,this.arrEnemies[Math.floor(Math.random() * (this.arrEnemies.length - 1)) as any]);
               }
               else
               {
                  this.SpawnNewBullet(new (class_125 as any)(),this.arrBullets[_loc4_ as any].x,this.arrBullets[_loc4_ as any].y,1,this.arrBullets[_loc4_ as any].rotation,10,15,false,null,this.arrEnemies[Math.floor(Math.random() * (this.arrEnemies.length - 1)) as any]);
               }
            }
            _loc4_++;
         }
         this.method_246();
      }
      
      public LifeBubbleCollisionDetection(): void
      {
         var var_60: any;

         var _loc3_: Point = null as any;
         if(this.var_60 == null)
         {
            return;
         }
         if(this.var_60.myAvatar == null)
         {
            return;
         }
         var _loc1_: number = 0;
         var _loc2_: any = new (Array as any)();
         _loc1_ = 0;
         while(_loc1_ < this.var_28.length)
         {
            if(this.var_28[_loc1_ as any] != null)
            {
               _loc3_ = new (Point as any)(this.var_28[_loc1_ as any].x,this.var_28[_loc1_ as any].y);
               _loc3_ = this.localToGlobal(_loc3_);
               if(Boolean(this.var_28[_loc1_ as any].blnCollected) || this.var_60.myAvatar.hitTestPoint(_loc3_.x,_loc3_.y,true) == true)
               {
                  _loc2_.push(this.var_28[_loc1_ as any] as any);
               }
            }
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ < _loc2_.length)
         {
            if(_loc2_[_loc1_ as any] != null)
            {
               if(this.var_215 == -1)
               {
                  this.mRef.SoundCall(new (class_46 as any)(),0[6]);
                  this.var_215 = 4;
               }
               this.method_580(_loc2_[_loc1_ as any]);
            }
            _loc1_++;
         }
      }
      
      public Run(): void
      {
         var var_159: any, var_195: any;

         var _loc1_: number = 0;
         if(this.var_159 == false)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_195.length)
            {
               this.RemoveEnemy(this.var_195[_loc1_ as any]);
               _loc1_++;
            }
            this.var_195 = new Array<EnemyAI>();
         }
         if(this.arrEnemies != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.arrEnemies.length)
            {
               this.arrEnemies[_loc1_ as any].Run();
               _loc1_++;
            }
         }
         _loc1_ = 0;
         while(_loc1_ < this.arrBullets.length)
         {
            if(_loc1_ < this.arrBullets.length && this.arrBullets[_loc1_ as any] != null)
            {
               if(this.arrBullets[_loc1_ as any].blnReadyForDeleteQueue == true)
               {
                  this.arrBulletRemoveQueue.push(this.arrBullets[_loc1_ as any] as any);
               }
               else if(this.arrBullets[_loc1_ as any].Run() == true)
               {
                  if(_loc1_ < this.arrBullets.length)
                  {
                     this.arrBulletRemoveQueue.push(this.arrBullets[_loc1_ as any] as any);
                  }
               }
            }
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ < this.arrBulletRemoveQueue.length)
         {
            this.method_333(this.arrBulletRemoveQueue[_loc1_ as any]);
            _loc1_++;
         }
         this.arrBulletRemoveQueue = new Array<class_68>();
         if(this.var_159 == false)
         {
            this.LifeBubbleCollisionDetection();
            _loc1_ = 0;
            while(_loc1_ < this.var_28.length)
            {
               this.var_28[_loc1_ as any].Run();
               _loc1_++;
            }
            _loc1_ = 0;
            while(_loc1_ < this.var_279.length)
            {
               this.method_649(this.var_279[_loc1_ as any]);
               _loc1_++;
            }
            this.var_279 = new Array<class_113>();
            this.TestForCompletion();
         }
         _loc1_ = 0;
         while(_loc1_ < this.var_267.length)
         {
            this.method_589(this.var_267[_loc1_ as any]);
            _loc1_++;
         }
         this.var_267 = new (Array as any)();
         this.method_742();
         this.method_662();
      }
      
      private method_388(param1: MovieClip, param2: class_68, param3: number): boolean
      {
         var _loc4_: number = param1.x - param2.x;
         var _loc5_: number = param1.y - param2.y;
         param3 *= 1[15];
         if(_loc4_ * _loc4_ + _loc5_ * _loc5_ < param3 * param3)
         {
            return true;
         }
         return false;
      }
      
      public SpawnLifeBubbles(param1: number, param2: number, param3: number, param4: number = 1, param5: boolean = false): void
      {
         var var_60: any, var_28: any;

         var _loc8_: number = 0;
         var _loc9_: number = 0;
         var _loc10_: number = 0;
         var _loc11_: MovieClip = null as any;
         var _loc12_: number = 0;
         var _loc13_: number = 0;
         var _loc14_: number = 0;
         var _loc6_: number = 0;
         if(param3 < 5)
         {
            _loc6_ = 0;
            while(_loc6_ < param3)
            {
               _loc11_ = new (class_134 as any)();
               (_loc11_ as any).x = param1;
               (_loc11_ as any).y = param2;
               (_loc11_ as any).rotation = this.RandNum(-180,180);
               this.lifeBubbleLayer_mc.addChild(_loc11_);
               _loc11_.Setup(1,this.LifeBubbleCallback,this.var_60.myAvatar);
               this.var_28.push(_loc11_ as any);
               if(param5 == true)
               {
                  this.var_28[this.var_28.length - 1 as any].blnCollect = true;
               }
               _loc6_++;
            }
         }
         else if(param3 < 50)
         {
            _loc8_ = Math.floor(param3 / 5);
            _loc6_ = 0;
            while(_loc6_ < _loc8_)
            {
               _loc11_ = new (class_136 as any)();
               (_loc11_ as any).x = param1;
               (_loc11_ as any).y = param2;
               (_loc11_ as any).rotation = this.RandNum(-180,180);
               this.lifeBubbleLayer_mc.addChild(_loc11_);
               _loc11_.Setup(5,this.LifeBubbleCallback,this.var_60.myAvatar);
               this.var_28.push(_loc11_ as any);
               if(param5 == true)
               {
                  this.var_28[this.var_28.length - 1 as any].blnCollect = true;
               }
               if(_loc8_ > 1)
               {
                  if(_loc6_ == _loc8_ - 2)
                  {
                     if(param3 % 5 >= 5 || param3 % 5 <= 0)
                     {
                        _loc12_ = 0;
                        while(_loc12_ < 5)
                        {
                           _loc11_ = new (class_134 as any)();
                           (_loc11_ as any).x = param1;
                           (_loc11_ as any).y = param2;
                           (_loc11_ as any).rotation = this.RandNum(-180,180);
                           this.lifeBubbleLayer_mc.addChild(_loc11_);
                           _loc11_.Setup(1,this.LifeBubbleCallback,this.var_60.myAvatar);
                           this.var_28.push(_loc11_ as any);
                           if(param5 == true)
                           {
                              this.var_28[this.var_28.length - 1 as any].blnCollect = true;
                           }
                           _loc12_++;
                        }
                        break;
                     }
                  }
               }
               _loc6_++;
            }
            _loc10_ = param3 % 5;
            if(_loc10_ < 5 && _loc10_ > 0)
            {
               _loc6_ = 0;
               while(_loc6_ < _loc10_)
               {
                  _loc11_ = new (class_134 as any)();
                  (_loc11_ as any).x = param1;
                  (_loc11_ as any).y = param2;
                  (_loc11_ as any).rotation = this.RandNum(-180,180);
                  this.lifeBubbleLayer_mc.addChild(_loc11_);
                  _loc11_.Setup(1,this.LifeBubbleCallback,this.var_60.myAvatar);
                  this.var_28.push(_loc11_ as any);
                  if(param5 == true)
                  {
                     this.var_28[this.var_28.length - 1 as any].blnCollect = true;
                  }
                  _loc6_++;
               }
            }
         }
         else
         {
            _loc9_ = Math.floor(param3 / 50);
            _loc6_ = 0;
            while(_loc6_ < _loc9_)
            {
               _loc11_ = new (class_135 as any)();
               (_loc11_ as any).x = param1;
               (_loc11_ as any).y = param2;
               (_loc11_ as any).rotation = this.RandNum(-180,180);
               this.lifeBubbleLayer_mc.addChild(_loc11_);
               _loc11_.Setup(50,this.LifeBubbleCallback,this.var_60.myAvatar);
               this.var_28.push(_loc11_ as any);
               if(param5 == true)
               {
                  this.var_28[this.var_28.length - 1 as any].blnCollect = true;
               }
               _loc6_++;
            }
            _loc10_ = param3 % 50;
            if(_loc10_ < 50 && _loc10_ > 0)
            {
               _loc13_ = Math.floor(_loc10_ / 5);
               _loc6_ = 0;
               while(_loc6_ < _loc13_)
               {
                  _loc11_ = new (class_136 as any)();
                  (_loc11_ as any).x = param1;
                  (_loc11_ as any).y = param2;
                  (_loc11_ as any).rotation = this.RandNum(-180,180);
                  this.lifeBubbleLayer_mc.addChild(_loc11_);
                  _loc11_.Setup(5,this.LifeBubbleCallback,this.var_60.myAvatar);
                  this.var_28.push(_loc11_ as any);
                  if(param5 == true)
                  {
                     this.var_28[this.var_28.length - 1 as any].blnCollect = true;
                  }
                  _loc6_++;
               }
               _loc14_ = _loc13_ % 5;
               if(_loc14_ < 5 && _loc14_ > 0)
               {
                  _loc6_ = 0;
                  while(_loc6_ < _loc14_)
                  {
                     _loc11_ = new (class_134 as any)();
                     (_loc11_ as any).x = param1;
                     (_loc11_ as any).y = param2;
                     (_loc11_ as any).rotation = this.RandNum(-180,180);
                     this.lifeBubbleLayer_mc.addChild(_loc11_);
                     _loc11_.Setup(1,this.LifeBubbleCallback,this.var_60.myAvatar);
                     this.var_28.push(_loc11_ as any);
                     if(param5 == true)
                     {
                        this.var_28[this.var_28.length - 1 as any].blnCollect = true;
                     }
                     _loc6_++;
                  }
               }
            }
         }
      }
      
      public TestForCompletion(): void
      {
         var var_413: any, var_352: any, var_60: any;

         var _loc1_: number = 0;
         if(this.var_413 == false)
         {
            if(this.var_352 == false)
            {
               if(this.arrEnemies.length == 0)
               {
                  this.var_60.method_593();
                  this.method_690();
                  this.var_352 = true;
                  _loc1_ = 0;
                  while(_loc1_ < this.arrBullets.length)
                  {
                     if(this.arrBullets[_loc1_ as any].blnEnemy == true)
                     {
                        if(this.arrBullets[_loc1_ as any].blnEnemyMine == true)
                        {
                           this.arrBullets[_loc1_ as any].blnBulletWipe = true;
                        }
                        if(this.arrBullets[_loc1_ as any].blnSeeker == true)
                        {
                           this.arrBullets[_loc1_ as any].blnBulletWipe = true;
                        }
                     }
                     _loc1_++;
                  }
               }
            }
         }
      }
      
      private TankCallback(param1: class_113, param2: number): void
      {
         var var_60: any, var_195: any;

         if(param2 == 3)
         {
            this.var_60.TanksDefeatedIncr();
            this.var_195.push(param1 as any);
         }
         else if(param2 != 1)
         {
            this.var_279.push(param1 as any);
         }
      }
      
      public set method_452(param1: BTAGameWorld)
      {
         if(this.var_159 == false)
         {
            this.var_60 = param1;
         }
      }
      
      private method_674(): void
      {
         var var_60: any, var_115: any;

         var _loc2_: number = 0;
         var _loc3_: TankData = null as any;
         var _loc4_: MovieClip = null as any;
         var _loc5_: any = null as any;
         var _loc6_: number = 0;
         this.arrEnemies = new (Array as any)();
         var _loc1_: number = 0;
         while(_loc1_ < this.arrBFEnemyData.length)
         {
            _loc2_ = 0;
            while(_loc2_ < this.arrBFEnemyData[_loc1_ as any].AMT)
            {
               _loc3_ = new (TankData as any)();
               _loc3_.ImportTankData(this.arrBFEnemyData[_loc1_ as any].DATA.ExportTankData());
               _loc3_.strID = this.arrBFEnemyData[_loc1_ as any].ID;
               _loc4_ = _loc3_.method_61(3,this.var_60);
               (_loc4_ as any).x = this.RandNum(-250,250);
               (_loc4_ as any).y = this.RandNum(-250,250);
               (_loc4_ as any).rotation = this.RandNum(-180,180);
               this.enemyLayer_mc.addChild(_loc4_);
               _loc4_.SetCallback(this.TankCallback);
               this.arrEnemies.push(_loc4_ as any);
               _loc5_ = _loc3_.arrTankDetails;
               _loc6_ = 0;
               while(_loc6_ < _loc5_.length)
               {
                  if(_loc5_[_loc6_ as any].type == 4009)
                  {
                     this.var_115.push(_loc4_ as any);
                     break;
                  }
                  _loc6_++;
               }
               _loc2_++;
            }
            _loc1_++;
         }
      }
   }
