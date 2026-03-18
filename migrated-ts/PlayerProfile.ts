// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { ArenaData } from './ArenaData';
import { class_2 } from './class_2';
import { class_79 } from './class_79';
import { DataObject } from './DataObject';
import { class_1 } from './package_1/class_1';
import { class_11 } from './package_2/class_11';
import { class_12 } from './package_2/class_12';
import { PKCS5 } from './package_2/PKCS5';
import { class_13 } from './package_3/class_13';
import { class_14 } from './package_4/class_14';
import { class_22 } from './package_8/class_22';
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











   export class PlayerProfile{
  [key: string]: any;
      
      public var_269!: boolean;
      public var_234!: boolean;
      public arrUnlockedObjects!: any;
      private strFirstPart!: string;
      public var_260!: boolean;
      public var_38!: any;
      public gunPointsMax!: DataObject;
      public var_82!: any;
      private var_183!: SharedObject;
      public currentAvatar!: string;
      public var_185!: number;
      public arrBeatArenaIDs!: any;
      public arrSavedTanks!: any;
      public var_253!: boolean;
      public var_579!: string;
      public profileName!: string;
      public bubblePointsMax!: DataObject;
      public arenasCompleted!: DataObject;
      public var_226!: boolean;
      public objGameObjectLibrary!: class_2;
      public maxClass!: DataObject;
      public arrAllObjectIDs!: any;
      public var_178!: number;
      constructor(param1: SharedObject){

         var var_269: any, var_253: any, var_234: any, var_178: any, var_185: any, var_260: any, var_226: any, var_183: any, var_82: any;


         this.objGameObjectLibrary = class_2.getInstance();
         this.var_269 = false;
         this.var_253 = false;
         this.var_234 = false;
         this.var_178 = 0;
         this.var_185 = 0;
         this.var_260 = false;
         this.var_226 = true;
         this.var_183 = param1;
         this.strFirstPart = class_1.method_1(759,765);
         this.profileName = "";
         this.gunPointsMax = new (DataObject as any)(459812,false,false,459813);
         this.bubblePointsMax = new (DataObject as any)(9246,false,false,9249);
         this.maxClass = new (DataObject as any)(2113,false,false,2114);
         this.arenasCompleted = new (DataObject as any)(0);
         this.currentAvatar = "7d1adbbd72aaa3c8672736b9715f0c5519a5130a78032553eac3337e4074ba671f833edee1f5bb99e490de82d3d15107b465367e32c3ed3f6395d77f8afd6aa01bb70e7a2ea088f18ff25e4d150fba6abbcb73";
         this.arrSavedTanks = new (Array as any)();
         this.arrBeatArenaIDs = new (Array as any)();
         this.var_82 = new (Array as any)();
         this.arrSavedTanks.push({
            "Data":"empty",
            "ID":"none",
            "blnShowInSearch":"true"
         } as any);
         this.arrAllObjectIDs = new (Array as any)();
         this.var_38 = new (Array as any)();
         var _loc2_: string = class_1.method_1(772,778);
         this.arrUnlockedObjects = _loc2_.split(",");
         this.arrAllObjectIDs = new (Array as any)();
         var _loc3_: number = 0;
         while(_loc3_ < this.objGameObjectLibrary.var_83.length)
         {
            this.arrAllObjectIDs.push(this.objGameObjectLibrary.var_83[_loc3_ as any].intObjID as any);
            _loc3_++;
         }
         _loc3_ = 0;
         while(_loc3_ < this.objGameObjectLibrary.var_50.length)
         {
            this.arrAllObjectIDs.push(this.objGameObjectLibrary.var_50[_loc3_ as any].intObjID as any);
            _loc3_++;
         }
         _loc3_ = 0;
         while(_loc3_ < this.objGameObjectLibrary.var_62.length)
         {
            this.arrAllObjectIDs.push(this.objGameObjectLibrary.var_62[_loc3_ as any].intObjID as any);
            _loc3_++;
         }
         _loc3_ = 0;
         while(_loc3_ < this.objGameObjectLibrary.var_48.length)
         {
            this.arrAllObjectIDs.push(this.objGameObjectLibrary.var_48[_loc3_ as any].intObjID as any);
            _loc3_++;
         }
         this.method_609();
         this.method_302();
         this.method_471();
      }
      
      public static onFlushStatus(param1: NetStatusEvent): void
      {
         if(param1.info.code != "SharedObject.Flush.Success")
         {
            if(param1.info.code == "SharedObject.Flush.Failed")
            {
               class_2.getInstance().method_316();
            }
         }
      }
      
      public EditTankIDFromID(param1: string, param2: string): boolean
      {
         var _loc4_: TankData = null as any;
         var _loc3_: number = 0;
         while(_loc3_ < this.arrSavedTanks.length)
         {
            if(param1 == this.arrSavedTanks[_loc3_ as any].ID)
            {
               _loc4_ = new (TankData as any)();
               _loc4_.ImportTankData(this.arrSavedTanks[_loc3_ as any].Data);
               _loc4_.strID = param2;
               this.arrSavedTanks[_loc3_ as any].Data = _loc4_.ExportTankData();
               this.arrSavedTanks[_loc3_ as any].ID = param2;
               this.arrSavedTanks[_loc3_ as any].blnShowInSearch = "true";
               return true;
            }
            _loc3_++;
         }
         return false;
      }
      
      public DeletePrevArena(): void
      {
         var var_38: any;

         this.var_38.splice(this.var_38.length - 1,1);
         this.method_19();
      }
      
      public DoesProfileHaveAllThePartsForTank(param1: TankData = null): boolean
      {
         var var_224: any;

         var _loc3_: any = null as any;
         var _loc6_: boolean = false;
         var _loc7_: number = 0;
         var _loc2_: class_79 = class_2.method_64();
         if(_loc2_.var_224)
         {
            _loc3_ = this.arrAllObjectIDs;
         }
         else
         {
            _loc3_ = this.arrUnlockedObjects;
         }
         var _loc4_: boolean = true;
         var _loc5_: number = 0;
         while(_loc5_ < param1.arrTankDetails.length)
         {
            if(param1.objGameObjectLibrary.IsObjectAWeapon(param1.arrTankDetails[_loc5_ as any].type))
            {
               _loc6_ = false;
               _loc7_ = 0;
               while(_loc7_ < _loc3_.length)
               {
                  if(param1.arrTankDetails[_loc5_ as any].type == _loc3_[_loc7_ as any])
                  {
                     _loc6_ = true;
                  }
                  _loc7_++;
               }
               if(_loc6_ == false)
               {
                  _loc4_ = false;
               }
            }
            _loc5_++;
         }
         return _loc4_;
      }
      
      public method_176(): void
      {
         var var_183: any;

         var var_56: string = null as any;
         var var_40: string = null as any;
         var var_150: string = null as any;
         var var_157: string = null as any;
         var var_307: string = null as any;
         var var_262: class_11 = null as any;
         var var_106: ByteArray = null as any;
         var var_257: ByteArray = null as any;
         var var_194: class_12 = null as any;
         var var_346: string = null as any;
         var var_243: any = null as any;
         var var_126: string = "";
         if(this.var_183.size == 0)
         {
            return;
         }
         var_126 = this.method_559(this.method_706(this.var_183.data.strCompressed));
         try
         {
            var_56 = var_126;
            var_40 = this.strFirstPart;
            var_150 = var_56.substr(0,3);
            var_157 = var_56.substr(-3,3);
            var_56 = var_56.substr(3,var_56.length - 6);
            var_307 = "" + var_150 + var_157 + var_40;
            var_262 = new (PKCS5 as any)();
            var_106 = class_13.toArray(var_56);
            var_257 = class_13.toArray(class_13.method_22(var_307));
            var_194 = class_14.method_46("aes128-ecb",var_257,var_262);
            var_194.decrypt(var_106);
            var_346 = class_13.toString(class_13.method_52(var_106));
            var_243 = var_346.split(",");
            this.profileName = var_243[0];
            this.gunPointsMax.value = Number(var_243[1]);
            this.bubblePointsMax.value = Number(var_243[2]);
            this.maxClass.value = Number(var_243[3]);
            this.CheckToHasPart();
         }
         catch(e: any)
         {
         }
      }
      
      public method_471(): void
      {
         var var_14: any, var_38: any;

         var _loc4_: ArenaData = null as any;
         var _loc6_: number = 0;
         var _loc1_: class_79 = class_2.method_64();
         var _loc2_: boolean = false;
         var _loc5_: number = 0;
         while(_loc5_ < _loc1_.gData.var_14.length)
         {
            _loc6_ = 0;
            while(_loc6_ < this.var_38.length)
            {
               if(this.var_38[_loc6_ as any].ID == _loc1_.gData.var_14[_loc5_ as any].ID)
               {
                  _loc2_ = true;
                  break;
               }
               _loc6_++;
            }
            if(_loc2_ == false)
            {
               _loc4_ = new (ArenaData as any)();
               _loc4_.ImportArenaData(_loc1_.gData.var_14[_loc5_ as any].arenaData,false);
               this.method_631(_loc4_);
            }
            _loc5_++;
         }
      }
      
      private method_525(param1: string = ""): string
      {
         var var_38: any;

         var _loc15_: number = 0;
         var _loc2_: string = "";
         var _loc3_: string = "";
         var _loc4_: string = "";
         var _loc5_: string = "";
         var _loc6_: string = "";
         var _loc7_: string = "";
         var _loc8_: string = "";
         var _loc9_: string = "";
         var _loc10_: string = "";
         var _loc11_: string = "";
         var _loc12_: string = "";
         var _loc13_: number = 0;
         while(_loc13_ < this.var_38.length)
         {
            _loc2_ += "" + this.var_38[_loc13_ as any].Data + ";" + this.var_38[_loc13_ as any].ID + ";";
            _loc12_ = "";
            _loc15_ = 0;
            while(_loc15_ < this.var_38[_loc13_ as any].AllTanks.length)
            {
               _loc2_ += _loc12_ + this.var_38[_loc13_ as any].AllTanks[_loc15_ as any];
               _loc12_ = "|";
               _loc15_++;
            }
            _loc2_ += ",";
            _loc13_++;
         }
         _loc2_ = _loc2_.substr(0,-1);
         _loc13_ = 0;
         while(_loc13_ < this.arrBeatArenaIDs.length)
         {
            _loc3_ += "" + this.arrBeatArenaIDs[_loc13_ as any] + ";";
            _loc13_++;
         }
         _loc3_ = _loc3_.substr(0,-1);
         _loc13_ = 0;
         while(_loc13_ < this.var_82.length)
         {
            _loc4_ += "" + this.var_82[_loc13_ as any].id + ";" + this.var_82[_loc13_ as any].score + "|";
            _loc13_++;
         }
         _loc4_ = _loc4_.substr(0,-1);
         _loc13_ = 0;
         while(_loc13_ < this.arrSavedTanks.length)
         {
            _loc5_ += this.arrSavedTanks[_loc13_ as any].Data + ";" + this.arrSavedTanks[_loc13_ as any].ID + ";" + this.arrSavedTanks[_loc13_ as any].blnShowInSearch + "|";
            _loc13_++;
         }
         _loc5_ = _loc5_.substr(0,-1);
         _loc13_ = 0;
         while(_loc13_ < this.arrUnlockedObjects.length)
         {
            _loc6_ += "" + this.arrUnlockedObjects[_loc13_ as any] + ";";
            _loc13_++;
         }
         _loc6_ = _loc6_.substr(0,-1);
         if(this.var_234)
         {
            _loc7_ = "true";
         }
         else
         {
            _loc7_ = "false";
         }
         _loc8_ = "" + this.var_178;
         _loc9_ = "" + this.var_185;
         if(this.var_260)
         {
            _loc10_ = "true";
         }
         else
         {
            _loc10_ = "false";
         }
         var _loc14_: string = "";
         if(this.var_253)
         {
            _loc14_ = "true";
         }
         else
         {
            _loc14_ = "false";
         }
         return _loc2_ + "~" + _loc3_ + "~" + _loc4_ + "~" + _loc5_ + "~" + param1 + "~" + this.currentAvatar + "~" + _loc6_ + "~" + this.var_269 + "~" + _loc7_ + "~" + _loc8_ + "~" + _loc9_ + "~" + _loc10_ + "~" + _loc14_;
      }
      
      private method_656(): string
      {
         var _loc1_: number = Math.round(Math.random() * 15);
         var _loc2_: string = "";
         switch(_loc1_)
         {
            case 10:
               _loc2_ = "a";
               break;
            case 11:
               _loc2_ = "b";
               break;
            case 12:
               _loc2_ = "c";
               break;
            case 13:
               _loc2_ = "d";
               break;
            case 14:
               _loc2_ = "e";
               break;
            case 15:
               _loc2_ = "f";
               break;
            default:
               _loc2_ += _loc1_;
         }
         return _loc2_;
      }
      
      public SetNewProfileData(param1: string): void
      {
         if(param1 != "")
         {
            this.profileName = param1;
         }
      }
      
      public method_302(): void
      {
         var var_12: any;

         var _loc2_: number = NaN;
         var _loc3_: TankData = null as any;
         var _loc4_: string = null as any;
         var _loc1_: number = 0;
         while(_loc1_ < this.objGameObjectLibrary.var_12.length)
         {
            _loc2_ = 10000120 + _loc1_;
            _loc3_ = new (TankData as any)();
            _loc4_ = "";
            _loc3_.ImportTankData(this.objGameObjectLibrary.var_12[_loc1_ as any]);
            if(_loc3_.blnAvatarTank)
            {
               _loc4_ = "A" + _loc2_;
            }
            else
            {
               _loc4_ = "E" + _loc2_;
            }
            _loc4_ = _loc3_.strID;
            this.arrSavedTanks.push({
               "Data":this.objGameObjectLibrary.var_12[_loc1_ as any],
               "ID":_loc4_,
               "blnShowInSearch":"true"
            } as any);
            _loc1_ += 1;
         }
      }
      
      public method_283(param1: ArenaData): void
      {
         var _loc2_: string = param1.ExportArenaData();
         var _loc3_: string = param1.strID;
         var _loc4_: any = new (Array as any)();
         var _loc5_: number = 0;
         while(_loc5_ < param1.arrAllEnemiesInArena.length)
         {
            _loc4_.push(param1.arrAllEnemiesInArena[_loc5_ as any].ID as any);
            _loc5_++;
         }
         this.var_38.push({
            "Data":_loc2_,
            "ID":_loc3_,
            "AllTanks":_loc4_
         } as any);
         this.method_19();
      }
      
      private method_706(param1: string = ""): string
      {
         return class_22.uncompress(param1);
      }
      
      public EditPreviousTankID(param1: TankData): void
      {
         this.arrSavedTanks[this.arrSavedTanks.length - 1 as any].Data = param1.ExportTankData();
         this.arrSavedTanks[this.arrSavedTanks.length - 1 as any].ID = param1.strID;
         this.method_19();
      }
      
      private CheckToHasPart(): void
      {
         var _loc4_: number = 0;
         var _loc1_: boolean = false;
         var _loc2_: boolean = true;
         var _loc3_: number = 0;
         while(_loc3_ < this.arrBeatArenaIDs.length)
         {
            if(this.arrBeatArenaIDs[_loc3_ as any] == "G90000216")
            {
               _loc4_ = 0;
               while(_loc4_ < this.arrUnlockedObjects.length)
               {
                  if(this.arrUnlockedObjects[_loc4_ as any] == 2014)
                  {
                     _loc2_ = false;
                     _loc1_ = true;
                     break;
                  }
                  _loc4_ += 1;
               }
               if(_loc2_)
               {
                  this.arrUnlockedObjects.push(2014 as any);
                  _loc1_ = true;
               }
            }
            if(_loc1_)
            {
               break;
            }
            _loc3_ += 1;
         }
         if(_loc2_)
         {
            this.method_19();
         }
      }
      
      private method_609(): void
      {
         this.strFirstPart += "4HPmN";
      }
      
      public method_19(): void
      {
         var var_226: any;

         var var_262: string = null as any;
         var var_40: string = null as any;
         var var_150: string = null as any;
         var var_157: string = null as any;
         var var_307: string = null as any;
         var var_194: class_11 = null as any;
         var var_126: ByteArray = null as any;
         var var_257: ByteArray = null as any;
         var var_106: class_12 = null as any;
         var var_243: string = null as any;
         var var_56: string = null as any;
         if(this.var_226 == false)
         {
            return;
         }
         this.var_183.clear();
         if(this.var_183.hasEventListener(NetStatusEvent.NET_STATUS) == false)
         {
            this.var_183.addEventListener(NetStatusEvent.NET_STATUS, PlayerProfile.onFlushStatus.bind(this));
         }
         try
         {
            var_262 = this.profileName + "," + this.gunPointsMax.value + "," + this.bubblePointsMax.value + "," + this.maxClass.value;
            var_40 = this.strFirstPart;
            var_150 = this.method_362();
            var_157 = this.method_362();
            var_307 = "" + var_150 + var_157 + var_40;
            var_194 = new (PKCS5 as any)();
            var_126 = class_13.toArray(class_13.method_22(var_262));
            var_257 = class_13.toArray(class_13.method_22(var_307));
            var_106 = class_14.method_46("aes128-ecb",var_257,var_194);
            var_106.encrypt(var_126);
            var_243 = var_150 + String(class_13.method_52(var_126)) + var_157;
            this.var_183.data.strCompressed = this.method_767(this.method_525(var_243));
            var_56 = null as any;
         }
         catch (e: any)
         {
         }
         try
         {
            var_56 = this.var_183.flush();
         }
         catch (error: any)
         {
            var_226 = false;
         }
         if(var_56 != null)
         {
            switch(var_56)
            {
            }
         }
         else
         {
            this.var_226 = false;
         }
      }
      
      public method_27(param1: TankData = null): string
      {
         var var_139: any;

         var _loc2_: string = "";
         var _loc3_: class_79 = class_2.method_64();
         var _loc4_: number = 0;
         var _loc5_: number = 0;
         var _loc6_: number = 0;
         if(_loc3_.var_139)
         {
            _loc4_ = 12;
         }
         else
         {
            _loc4_ = this.gunPointsMax.method_29();
         }
         if(_loc3_.blnCheatClass)
         {
            _loc5_ = 6;
         }
         else
         {
            _loc5_ = this.maxClass.method_29();
         }
         if(_loc3_.var_132)
         {
            _loc6_ = 100;
         }
         else
         {
            _loc6_ = this.bubblePointsMax.method_29();
         }
         if(param1.numGunPoints > _loc4_)
         {
            _loc2_ = "Gun Points";
         }
         if(param1.numClass > _loc5_)
         {
            if(_loc2_ == "")
            {
               _loc2_ = "Class";
            }
            else
            {
               _loc2_ += ", Class";
            }
         }
         if(param1.numBubbles > _loc6_)
         {
            if(_loc2_ == "")
            {
               _loc2_ = "Bubbles Points";
            }
            else
            {
               _loc2_ += ", and Bubbles Points";
            }
         }
         return _loc2_;
      }
      
      private method_362(): string
      {
         var _loc1_: string = "";
         var _loc2_: number = 0;
         while(_loc2_ < 3)
         {
            _loc1_ += this.method_656();
            _loc2_++;
         }
         return _loc1_;
      }
      
      public RetrieveTankBasedOnID(param1: string): TankData
      {
         var _loc3_: TankData = null as any;
         var _loc2_: number = 0;
         while(_loc2_ < this.arrSavedTanks.length)
         {
            if(param1 == this.arrSavedTanks[_loc2_ as any].ID)
            {
               _loc3_ = new (TankData as any)();
               _loc3_.ImportTankData(this.arrSavedTanks[_loc2_ as any].Data);
               return _loc3_;
            }
            _loc2_++;
         }
         return null;
      }
      
      private method_559(param1: string = ""): string
      {
         var var_38: any, var_82: any;

         var _loc6_: any = null as any;
         var _loc7_: any = null as any;
         var _loc8_: any = undefined;
         var _loc9_: any = null as any;
         var _loc10_: any = undefined;
         var _loc11_: any = null as any;
         this.var_38 = new (Array as any)();
         this.var_82 = new (Array as any)();
         this.arrBeatArenaIDs = new (Array as any)();
         this.arrSavedTanks = new (Array as any)();
         var _loc2_: number = 0;
         var _loc3_: string = "";
         var _loc4_: any = param1.split("~");
         var _loc5_: any = _loc4_[0].split(",");
         _loc2_ = 0;
         while(_loc2_ < _loc5_.length)
         {
            _loc6_ = _loc5_[_loc2_ as any].split(";");
            _loc7_ = _loc6_[2].split("|");
            this.var_38.push({
               "Data":_loc6_[0],
               "ID":_loc6_[1],
               "AllTanks":_loc7_
            } as any);
            _loc2_++;
         }
         if(_loc4_[1] != null)
         {
            this.arrBeatArenaIDs = _loc4_[1].split(";");
         }
         if(_loc4_[2] != null)
         {
            _loc8_ = _loc4_[2].split("|");
            _loc2_ = 0;
            while(_loc2_ < _loc8_.length)
            {
               _loc9_ = _loc8_[_loc2_ as any].split(";");
               this.var_82.push({
                  "id":_loc9_[0],
                  "score":_loc9_[1]
               } as any);
               _loc2_++;
            }
         }
         if(_loc4_[3] != null)
         {
            _loc10_ = _loc4_[3].split("|");
            _loc2_ = 0;
            while(_loc2_ < _loc10_.length)
            {
               _loc11_ = _loc10_[_loc2_ as any].split(";");
               this.arrSavedTanks.push({
                  "Data":_loc11_[0],
                  "ID":_loc11_[1],
                  "blnShowInSearch":_loc11_[2]
               } as any);
               _loc2_++;
            }
         }
         if(_loc4_[4] != null)
         {
            _loc3_ = _loc4_[4];
         }
         if(_loc4_[5] != null)
         {
            this.currentAvatar = _loc4_[5];
         }
         if(_loc4_[6] != null)
         {
            this.arrUnlockedObjects = _loc4_[6].split(";");
         }
         if(_loc4_[7] != null)
         {
            this.var_269 = _loc4_[7];
         }
         if(_loc4_[8] != null)
         {
            if(_loc4_[8] == "true")
            {
               this.var_234 = true;
            }
            else
            {
               this.var_234 = false;
            }
         }
         if(_loc4_[9] != null)
         {
            this.var_178 = _loc4_[9];
         }
         if(_loc4_[10] != null)
         {
            this.var_185 = _loc4_[10];
         }
         if(_loc4_[11] != null)
         {
            if(_loc4_[11] == "true")
            {
               this.var_260 = true;
            }
            else
            {
               this.var_260 = false;
            }
         }
         if(_loc4_[12] != null)
         {
            if(_loc4_[12] == "true")
            {
               this.var_253 = true;
            }
            else
            {
               this.var_253 = false;
            }
         }
         return _loc3_;
      }
      
      public method_832(param1: SharedObject): void
      {
         var var_183: any;

         this.var_183 = param1;
      }
      
      public EditPreviousArenaID(param1: ArenaData): void
      {
         var var_38: any;

         this.var_38[this.var_38.length - 1 as any].Data = param1.ExportArenaData();
         this.var_38[this.var_38.length - 1 as any].ID = param1.strID;
         this.method_19();
      }
      
      public method_17(param1: TankData = null, param2: boolean = false): boolean
      {
         var var_139: any;

         var _loc3_: boolean = false;
         var _loc4_: class_79 = class_2.method_64();
         var _loc5_: number = 0;
         var _loc6_: number = 0;
         var _loc7_: number = 0;
         if(_loc4_.var_139)
         {
            _loc5_ = 12;
         }
         else
         {
            _loc5_ = this.gunPointsMax.method_29();
         }
         if(_loc4_.blnCheatClass)
         {
            _loc6_ = 6;
         }
         else
         {
            _loc6_ = this.maxClass.method_29();
         }
         if(_loc4_.var_132)
         {
            _loc7_ = 100;
         }
         else
         {
            _loc7_ = this.bubblePointsMax.method_29();
         }
         if(_loc4_.bln50GunPoints)
         {
            _loc5_ = 50;
         }
         if(param2 || param1.strID.substr(0,1) == "E")
         {
            _loc5_ = Math.floor(_loc5_ * 1[5]);
         }
         if(param1.numGunPoints > _loc5_)
         {
            _loc3_ = true;
         }
         else if(param1.numClass > _loc6_)
         {
            _loc3_ = true;
         }
         else if(param1.numBubbles > _loc7_)
         {
            _loc3_ = true;
         }
         return _loc3_;
      }
      
      public DeleteProfile(): void
      {
         var var_183: any;

         this.var_183.clear();
         this.method_509();
      }
      
      public method_73(param1: string): void
      {
         var _loc2_: TankData = new (TankData as any)();
         _loc2_.ImportTankData(param1);
         this.arrSavedTanks.push({
            "Data":param1,
            "ID":_loc2_.strID,
            "blnShowInSearch":"true"
         } as any);
         this.method_19();
         _loc2_ = null as any;
      }
      
      private method_767(param1: string = ""): string
      {
         return class_22.compress(param1);
      }
      
      public method_631(param1: ArenaData): void
      {
         var _loc2_: string = param1.ExportArenaData();
         var _loc3_: string = param1.strID;
         var _loc4_: any = new (Array as any)();
         var _loc5_: number = 0;
         while(_loc5_ < param1.arrAllEnemiesInArena.length)
         {
            _loc4_.push(param1.arrAllEnemiesInArena[_loc5_ as any].ID as any);
            _loc5_++;
         }
         this.var_38.push({
            "Data":_loc2_,
            "ID":_loc3_,
            "AllTanks":_loc4_
         } as any);
      }
      
      public method_509(): void
      {
         var var_269: any, var_253: any, var_234: any, var_178: any, var_185: any, var_260: any, var_82: any;

         this.profileName = "";
         this.var_269 = false;
         this.var_253 = false;
         this.var_234 = false;
         this.var_178 = 0;
         this.var_185 = 0;
         this.var_260 = false;
         this.gunPointsMax = new (DataObject as any)(459812,false,false,459813);
         this.bubblePointsMax = new (DataObject as any)(9246,false,false,9249);
         this.maxClass = new (DataObject as any)(2113,false,false,2114);
         this.arenasCompleted = new (DataObject as any)(0);
         this.currentAvatar = "7d1adbbd72aaa3c8672736b9715f0c5519a5130a78032553eac3337e4074ba671f833edee1f5bb99e490de82d3d15107b465367e32c3ed3f6395d77f8afd6aa01bb70e7a2ea088f18ff25e4d150fba6abbcb73";
         this.arrSavedTanks = new (Array as any)();
         this.arrBeatArenaIDs = new (Array as any)();
         this.var_82 = new (Array as any)();
         this.arrSavedTanks.push({
            "Data":"empty",
            "ID":"none",
            "blnShowInSearch":"true"
         } as any);
         this.var_38 = new (Array as any)();
         var _loc1_: string = class_1.method_1(772,778);
         this.arrUnlockedObjects = _loc1_.split(",");
         this.method_302();
         this.method_471();
      }
   }
