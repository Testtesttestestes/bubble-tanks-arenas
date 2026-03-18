// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { class_2 } from './class_2';
import { class_79 } from './class_79';
import { class_1 } from './package_1/class_1';
import { class_11 } from './package_2/class_11';
import { class_12 } from './package_2/class_12';
import { PKCS5 } from './package_2/PKCS5';
import { class_13 } from './package_3/class_13';
import { class_14 } from './package_4/class_14';
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









   export class ArenaData extends MovieClip{
  [key: string]: any;
      
      public numRating!: number;
      public var_416!: any;
      public var_96!: any;
      public strDescription!: string;
      public strID!: string;
      private strVar2!: string;
      public var_275!: string;
      public var_222!: number;
      public strName!: string;
      public var_299!: number;
      public var_6!: any;
      private mRef!: class_79;
      public objGameObjectLibrary!: class_2;
      public var_431!: number;
      public arrAllEnemiesInArena!: any;
      constructor(){
         var var_275: any, var_431: any, var_222: any, var_299: any, var_6: any, var_416: any, var_96: any;

         // @ts-ignore
         super();
         this.objGameObjectLibrary = class_2.getInstance();
         this.mRef = class_2.method_64();
         this.strName = "";
         this.var_275 = "";
         this.strDescription = "";
         this.strID = "H";
         this.numRating = 0;
         this.var_431 = -1;
         this.var_222 = 0;
         this.var_299 = 0;
         this.strVar2 = class_1.method_1(771,777);
         this.var_6 = new (Array as any)();
         this.arrAllEnemiesInArena = new (Array as any)();
         this.var_416 = new (Array as any)();
         this.var_96 = new (Array as any)();
         var _loc1_: any = new (Array as any)();
         this.var_6.push({"arrEnemies":_loc1_} as any);
         this.method_466();
      }
      
      private method_660(param1: string): string
      {
         var _loc2_: string = "";
         var _loc3_: RegExp = /-%-/g;
         _loc2_ = param1.slice();
         _loc2_ = _loc2_.replace(_loc3_,",");
         _loc3_ = /-#-/g;
         _loc2_ = _loc2_.replace(_loc3_,"\'");
         _loc3_ = /-$-/g;
         _loc2_ = _loc2_.replace(_loc3_,"\"");
         _loc3_ = /-\*-/g;
         return _loc2_.replace(_loc3_,":");
      }
      
      public method_847(param1: number = 1): void
      {
         var var_6: any;

         var _loc2_: any = undefined;
         if(param1 == this.var_6.length - 1)
         {
            _loc2_ = this.var_6.pop();
            _loc2_ = null as any;
            return;
         }
         this.var_6[param1 as any] = this.var_6[this.var_6.length - 1 as any];
         _loc2_ = this.var_6.pop();
         _loc2_ = null as any;
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
      
      public method_781(): number
      {
         var var_6: any;

         var _loc3_: number = 0;
         var _loc4_: number = 0;
         var _loc1_: number = 0;
         var _loc2_: number = 0;
         while(_loc2_ < this.var_6.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.var_6[_loc2_ as any].arrEnemies.length)
            {
               _loc4_ = int(this.var_6[_loc2_ as any].arrEnemies[_loc3_ as any].number);
               _loc1_ += _loc4_;
               _loc3_++;
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      public method_66(param1: number = 1, param2: string = "L1000001", param3: string = "guy"): number
      {
         var var_6: any;

         var _loc5_: boolean = false;
         var _loc4_: number = 0;
         if(this.var_6[param1 as any].arrEnemies.length != 0)
         {
            _loc5_ = true;
            _loc4_ = 0;
            while(_loc4_ < this.var_6[param1 as any].arrEnemies.length)
            {
               if(this.var_6[param1 as any].arrEnemies[_loc4_ as any].ID == param2)
               {
                  this.var_6[param1 as any].arrEnemies[_loc4_ as any].number += 1;
                  _loc5_ = false;
                  return this.var_6[param1 as any].arrEnemies[_loc4_ as any].number;
               }
               _loc4_++;
            }
            if(_loc5_ == true)
            {
               if(this.var_6[param1 as any].arrEnemies.length < 4)
               {
                  this.var_6[param1 as any].arrEnemies.push({
                     "ID":param2,
                     "number":1,
                     "name":param3
                  } as any);
                  _loc5_ = true;
                  _loc4_ = 0;
                  while(_loc4_ < this.arrAllEnemiesInArena.length)
                  {
                     if(this.arrAllEnemiesInArena[_loc4_ as any].ID == param2)
                     {
                        _loc5_ = false;
                     }
                     _loc4_++;
                  }
                  if(_loc5_)
                  {
                     this.arrAllEnemiesInArena.push({
                        "ID":param2,
                        "Name":param3
                     } as any);
                  }
                  return 1;
               }
            }
         }
         else
         {
            this.var_6[param1 as any].arrEnemies.push({
               "ID":param2,
               "number":1,
               "name":param3
            } as any);
            _loc5_ = true;
            _loc4_ = 0;
            while(_loc4_ < this.arrAllEnemiesInArena.length)
            {
               if(this.arrAllEnemiesInArena[_loc4_ as any].ID == param2)
               {
                  _loc5_ = false;
               }
               _loc4_++;
            }
            if(_loc5_ == true)
            {
               this.arrAllEnemiesInArena.push({
                  "ID":param2,
                  "Name":param3
               } as any);
            }
         }
         return 1;
      }
      
      public method_188(param1: number = 1, param2: string = "L1000001"): boolean
      {
         var var_6: any;

         var _loc3_: number = 0;
         while(_loc3_ < this.var_6[param1 as any].arrEnemies.length)
         {
            if(this.var_6[param1 as any].arrEnemies[_loc3_ as any].ID == param2)
            {
               --this.var_6[param1 as any].arrEnemies[_loc3_ as any].number;
               if(this.var_6[param1 as any].arrEnemies[_loc3_ as any].number <= 0)
               {
                  return this.method_152(param1,param2);
               }
               break;
            }
            _loc3_++;
         }
         return false;
      }
      
      public method_152(param1: number = 1, param2: string = "L1000001"): boolean
      {
         var var_6: any;

         var _loc3_: number = 0;
         while(_loc3_ < this.var_6[param1 as any].arrEnemies.length)
         {
            if(this.var_6[param1 as any].arrEnemies[_loc3_ as any].ID == param2)
            {
               if(_loc3_ == this.var_6[param1 as any].arrEnemies.length - 1)
               {
                  var _loc4_: any = this.var_6[param1 as any].arrEnemies.pop();
                  _loc4_ = null as any;
                  break;
               }
               this.var_6[param1 as any].arrEnemies[_loc3_ as any] = this.var_6[param1 as any].arrEnemies[this.var_6[param1 as any].arrEnemies.length - 1];
               _loc4_ = this.var_6[param1 as any].arrEnemies.pop();
               _loc4_ = null as any;
               break;
            }
            _loc3_++;
         }
         if(this.CheckToSeeIfEnemyExistsInArena(param2) == false)
         {
            this.method_590(param2);
            return true;
         }
         return false;
      }
      
      public ImportArenaData(param1: string, param2: boolean = true): boolean
      {
         var var_6: any;

         var pad: class_11;
         var kdata: ByteArray;
         var part1: string;
         var part2: string;
         var strHeader: string;
         var arrData: any;
         var data: ByteArray;
         var strRewards: string;
         var strVar3: any;
         var actualData: string;
         var a: number;
         var strArenaCode: string;
         var myCypher: class_12;
         var arrBubbleFields: any;
         var arrArenaInfo: any;
         var numStringLength: number;
         var arrTempRewards: any = null as any;
         var t: number = 0;
         var arrTempRewardParts: any = null as any;
         var arrEnemies: any = null as any;
         var arrTemp: any = null as any;
         var b: number = 0;
         var arrEnemy: any = null as any;
         var numTemp: number = NaN;
         var blnTemp: boolean = false;
         var c: number = 0;
         var argArenaString: string = param1;
         var argCalcDifficultyRating: boolean = param2;
         this.var_6 = new (Array as any)();
         strArenaCode = argArenaString;
         numStringLength = argArenaString.length;
         part1 = argArenaString.substr(0,3);
         part2 = argArenaString.substr(numStringLength - 3,3);
         actualData = argArenaString.substr(3,numStringLength - 6);
         strVar3 = part1 + part2 + this.strVar2;
         pad = new (PKCS5 as any)();
         data = class_13.toArray(actualData);
         kdata = class_13.toArray(class_13.method_22(strVar3));
         myCypher = class_14.method_46("aes128-ecb",kdata,pad);
         try
         {
            myCypher.decrypt(data);
         }
         catch (e: any)
         {
            return true;
         }
         strHeader = class_13.toString(class_13.method_52(data));
         arrArenaInfo = strHeader.split(":");
         arrData = arrArenaInfo[0].split(",");
         strRewards = arrArenaInfo[1];
         arrBubbleFields = arrArenaInfo[2].split("|");
         this.strName = arrData[0];
         this.var_275 = arrData[1];
         if(arrData[2] != null && arrData[2] != "")
         {
            this.strDescription = this.method_660(arrData[2]);
         }
         else
         {
            this.strDescription = "";
         }
         this.numRating = arrData[3];
         this.var_222 = arrData[4];
         this.var_431 = arrData[5];
         this.strID = arrData[6];
         if(strRewards != null && strRewards != "")
         {
            arrTempRewards = strRewards.split(";");
            t = 0;
            while(t < arrTempRewards.length)
            {
               arrTempRewardParts = arrTempRewards[t as any].split(",");
               this.var_96.push({
                  "Type":arrTempRewardParts[0],
                  "Data":Number(arrTempRewardParts[1])
               } as any);
               t++;
            }
         }
         this.var_299 = 0;
         a = 0;
         while(a < arrBubbleFields.length)
         {
            arrEnemies = arrBubbleFields[a as any].split(";");
            arrTemp = new (Array as any)();
            this.var_6.push({"arrEnemies":arrTemp} as any);
            b = 0;
            while(b < arrEnemies.length)
            {
               arrEnemy = arrEnemies[b as any].split(",");
               this.var_6[a as any].arrEnemies.push({
                  "ID":0,
                  "number":0
               } as any);
               this.var_6[a as any].arrEnemies[b as any].ID = arrEnemy[0];
               this.var_6[a as any].arrEnemies[b as any].number = arrEnemy[1];
               numTemp = Number(arrEnemy[1]);
               this.var_299 += numTemp;
               blnTemp = true;
               c = 0;
               while(c < this.arrAllEnemiesInArena.length)
               {
                  if(arrEnemy[0] == this.arrAllEnemiesInArena[c as any])
                  {
                     blnTemp = false;
                  }
                  c++;
               }
               if(blnTemp == true)
               {
                  this.arrAllEnemiesInArena.push({"ID":arrEnemy[0]} as any);
               }
               b++;
            }
            a++;
         }
         if(argCalcDifficultyRating)
         {
            this.method_466();
         }
         return false;
      }
      
      private method_830(param1: string): string
      {
         var _loc2_: string = "";
         var _loc3_: RegExp = /,/g;
         _loc2_ = param1.slice();
         _loc2_ = _loc2_.replace(_loc3_,"-%-");
         _loc3_ = /'/g;
         _loc2_ = _loc2_.replace(_loc3_,"-#-");
         _loc3_ = /"/g;
         _loc2_ = _loc2_.replace(_loc3_,"-$-");
         _loc3_ = /:/g;
         return _loc2_.replace(_loc3_,"-*-");
      }
      
      public ExportArenaData(): string
      {
         var var_6: any;

         var _loc1_: any = undefined;
         var _loc15_: string = null as any;
         var _loc16_: number = 0;
         if(this.var_6[this.var_6.length - 1 as any].arrEnemies.length == 0)
         {
            _loc1_ = this.var_6.pop();
         }
         _loc1_ = null as any;
         var _loc3_: string = this.strName + "," + this.var_275 + "," + "" + "," + this.numRating + "," + this.var_222 + "," + this.var_431 + "," + this.strID;
         var _loc4_: string = this.method_362();
         var _loc5_: string = this.method_362();
         var _loc6_: string = "" + _loc4_ + _loc5_ + this.strVar2;
         _loc3_ += ":";
         var _loc7_: string = "";
         var _loc8_: number = 0;
         while(_loc8_ < this.var_96.length)
         {
            _loc7_ += this.var_96[_loc8_ as any].Type + "," + this.var_96[_loc8_ as any].Data + ";";
            _loc8_++;
         }
         if(_loc7_ != "")
         {
            _loc7_ = _loc7_.substr(0,-1);
         }
         _loc3_ += _loc7_;
         _loc3_ += ":";
         var _loc9_: string = "";
         0;
         while(0 < this.var_6.length)
         {
            _loc15_ = "";
            _loc16_ = 0;
            while(_loc16_ < this.var_6[0].arrEnemies.length)
            {
               _loc15_ += this.var_6[0].arrEnemies[_loc16_ as any].ID + "," + this.var_6[0].arrEnemies[_loc16_ as any].number + ";";
               _loc16_++;
            }
            if(_loc15_ != "")
            {
               _loc15_ = _loc15_.substr(0,-1);
            }
            _loc9_ += _loc15_ + "|";
            var _loc10_: number = 0 + 1;
         }
         if(_loc9_ != "")
         {
            _loc9_ = _loc9_.substr(0,-1);
         }
         _loc3_ += _loc9_;
         var _loc11_: class_11 = new (PKCS5 as any)();
         var _loc12_: ByteArray = class_13.toArray(class_13.method_22(_loc3_));
         var _loc13_: ByteArray = class_13.toArray(class_13.method_22(_loc6_));
         var _loc14_: class_12 = class_14.method_46("aes128-ecb",_loc13_,_loc11_);
         _loc14_.encrypt(_loc12_);
         return _loc4_ + String(class_13.method_52(_loc12_)) + _loc5_;
      }
      
      public method_553(): boolean
      {
         var var_6: any;

         var _loc1_: any = null as any;
         if(this.var_6.length < 10 && this.var_6[this.var_6.length - 1 as any].arrEnemies.length != 0)
         {
            _loc1_ = new (Array as any)();
            this.var_6.push({"arrEnemies":_loc1_} as any);
            return true;
         }
         return false;
      }
      
      public CheckToSeeIfEnemyExistsInArena(param1: string = "L1000001"): boolean
      {
         var var_6: any;

         var _loc3_: number = 0;
         var _loc2_: number = 0;
         while(_loc2_ < this.var_6.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.var_6[_loc2_ as any].arrEnemies.length)
            {
               if(this.var_6[_loc2_ as any].arrEnemies[_loc3_ as any].ID == param1)
               {
                  return true;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         return false;
      }
      
      public method_590(param1: string = "L1000001"): void
      {
         var _loc2_: number = 0;
         while(_loc2_ < this.arrAllEnemiesInArena.length)
         {
            if(param1 == this.arrAllEnemiesInArena[_loc2_ as any].ID)
            {
               this.arrAllEnemiesInArena.splice(_loc2_,1);
               return;
            }
            _loc2_++;
         }
      }
      
      public method_351(param1: number = 0): any
      {
         var var_6: any;

         var _loc3_: number = 0;
         var _loc2_: any = new (Array as any)();
         if(this.var_6[param1 as any].arrEnemies.length != 0)
         {
            _loc3_ = 0;
            while(_loc3_ < this.var_6[param1 as any].arrEnemies.length)
            {
               _loc2_.push({
                  "IDs":this.var_6[param1 as any].arrEnemies[_loc3_ as any].ID,
                  "Num":this.var_6[param1 as any].arrEnemies[_loc3_ as any].number,
                  "Name":this.var_6[param1 as any].arrEnemies[_loc3_ as any].name
               } as any);
               _loc3_++;
            }
         }
         return _loc2_;
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
      
      private method_466(): number
      {
         var var_6: any, var_222: any;

         var _loc9_: number = 0;
         var _loc10_: TankData = null as any;
         var _loc11_: number = NaN;
         var _loc12_: number = NaN;
         var _loc1_: any = new (Array as any)();
         var _loc2_: number = 0;
         var _loc3_: number = 0;
         var _loc4_: number = 0;
         var _loc5_: number = 0;
         while(_loc5_ < this.var_6.length)
         {
            _loc4_ = 0;
            _loc9_ = 0;
            while(_loc9_ < this.var_6[_loc5_ as any].arrEnemies.length)
            {
               _loc10_ = this.mRef.RetrieveTankDataFromID(this.var_6[_loc5_ as any].arrEnemies[_loc9_ as any].ID);
               if(_loc10_ == null)
               {
                  this.var_222 = 0;
                  return this.var_222;
               }
               _loc11_ = (_loc10_.numDifficultyRating + 4) * this.var_6[_loc5_ as any].arrEnemies[_loc9_ as any].number;
               if(_loc11_ < 0)
               {
                  _loc11_ = 0;
               }
               _loc2_ += _loc11_;
               _loc3_ += _loc10_.numBubblesReturned * this.var_6[_loc5_ as any].arrEnemies[_loc9_ as any].number;
               _loc4_ += this.var_6[_loc5_ as any].arrEnemies[_loc9_ as any].number;
               _loc9_++;
            }
            _loc1_.push({
               "enNum":_loc4_,
               "enDiff":_loc2_,
               "enBReturn":_loc3_
            } as any);
            _loc2_ = 0;
            _loc3_ = 0;
            _loc5_++;
         }
         var _loc6_: any = new (Array as any)();
         var _loc7_: number = 0;
         var _loc8_: number = 0;
         while(_loc8_ < _loc1_.length)
         {
            _loc12_ = Math.floor(_loc1_[_loc8_ as any].enDiff / 5);
            this.var_416.push(_loc12_ as any);
            _loc7_ += _loc12_;
            _loc8_++;
         }
         this.var_222 = Math.floor(1 + _loc7_ / _loc1_.length);
         return this.var_222;
      }
   }
