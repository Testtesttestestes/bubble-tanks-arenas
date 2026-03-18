// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

import { BTAGameWorld } from './BTAGameWorld';
import { class_113 } from './class_113';
import { class_2 } from './class_2';
import { EnemyAI } from './EnemyAI';
import { class_1 } from './package_1/class_1';
import { class_11 } from './package_2/class_11';
import { class_12 } from './package_2/class_12';
import { PKCS5 } from './package_2/PKCS5';
import { class_13 } from './package_3/class_13';
import { class_14 } from './package_4/class_14';

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










   export class TankData extends Sprite{
  [key: string]: any;
      
      public numBubbles: number = 0;
      public strID!: string;
      public numClass: number = 0;
      public movTank!: MovieClip & Record<string, any>;
      public numLife!: number;
      public numRating!: number;
      public strAuthorName!: string;
      public var_558: string = "";
      public intType!: number;
      public tankType: number = 4;
      private strVar2!: string;
      public arrTankDetails!: any;
      public objWorld!: BTAGameWorld;
      public numGunPoints: number = 0;
      public numDifficultyRating!: number;
      public numSpeed!: number;
      public var_455!: number;
      public strTankName!: string;
      public blnAvatarTank!: boolean;
      public numBubblesReturned!: number;
      public objGameObjectLibrary!: class_2;
      constructor(){
         var var_455: any;

         // @ts-ignore
         super();
         this.strAuthorName = "";
         this.strTankName = "";
         this.strID = "";
         this.numRating = 0;
         this.var_455 = 1;
         this.blnAvatarTank = false;
         this.numLife = 1;
         this.numBubblesReturned = 0;
         this.numSpeed = 0;
         this.numDifficultyRating = 0;
         this.arrTankDetails = new (Array as any)();
         this.objGameObjectLibrary = class_2.getInstance();
         this.strVar2 = class_1.method_1(761,771);
      }
      
      public method_799(): void
      {
         this.arrTankDetails = null as any;
         this.objWorld = null as any;
         this.objGameObjectLibrary = null as any;
         if(this.movTank != null)
         {
            this.movTank = null as any;
         }
      }
      
      public GetLargestXDistanceFromRegistration(): number
      {
         var _loc1_: number = 0;
         var _loc2_: any = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc1_ = Math.max(_loc1_,Math.abs(this.arrTankDetails[_loc2_ as any].x));
            _loc2_ += 1;
         }
         return _loc1_;
      }
      
      public GetLargestYDistanceFromRegistration(): number
      {
         var _loc1_: number = 0;
         var _loc2_: any = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc1_ = Math.max(_loc1_,Math.abs(this.arrTankDetails[_loc2_ as any].y));
            _loc2_ += 1;
         }
         return _loc1_;
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
      
      public Deactivate(): void
      {
         this.arrTankDetails = null as any;
         this.objWorld = null as any;
         this.objGameObjectLibrary = null as any;
         this.WipeTank();
      }
      
      public GetLargestRadiusFromRegistration(): number
      {
         var _loc4_: number = NaN;
         var _loc6_: number = NaN;
         var _loc1_: number = 0;
         var _loc2_: number = 0;
         var _loc3_: number = 0;
         var _loc5_: any = 0;
         while(_loc5_ < this.movTank.numChildren)
         {
            _loc6_ = 0;
            _loc1_ = Math.max(_loc1_,Math.abs(this.movTank.getChildAt(_loc5_).x));
            _loc2_ = Math.max(_loc2_,Math.abs(this.movTank.getChildAt(_loc5_).y));
            _loc6_ = Math.max(_loc1_,_loc2_);
            if(_loc6_ > _loc3_)
            {
               _loc3_ = _loc6_;
               _loc4_ = Math.sqrt(this.movTank.getChildAt(_loc5_).width / 1[25] * (this.movTank.getChildAt(_loc5_).width / 1[25]) + this.movTank.getChildAt(_loc5_).height / 1[25] * (this.movTank.getChildAt(_loc5_).height / 1[25]));
            }
            _loc5_ += 1;
         }
         return _loc3_ + _loc4_;
      }
      
      public ImportTankData(param1: string): boolean
      {
         var var_558: any, var_455: any;

         var numStringLength: number = NaN;
         var part1: string = null as any;
         var part2: string = null as any;
         var actualData: string = null as any;
         var strVar3: any = undefined;
         var pad: class_11 = null as any;
         var data: ByteArray = null as any;
         var kdata: ByteArray = null as any;
         var myCypher: class_12 = null as any;
         var strHeader: string = null as any;
         var arrTankInfo: any = null as any;
         var basicData: any = null as any;
         var intAvatarTank: number = 0;
         var arrRow: any = null as any;
         var a: any = undefined;
         var strTank: string = param1;
         try
         {
            this.var_558 = strTank;
            numStringLength = strTank.length;
            part1 = strTank.substr(0,3);
            part2 = strTank.substr(numStringLength - 3,3);
            actualData = strTank.substr(3,numStringLength - 6);
            strVar3 = part1 + part2 + this.strVar2;
            pad = new (PKCS5 as any)();
            data = class_13.toArray(actualData);
            kdata = class_13.toArray(class_13.method_22(strVar3));
            myCypher = class_14.method_46("aes128-ecb",kdata,pad);
            myCypher.decrypt(data);
            strHeader = class_13.toString(class_13.method_52(data));
            arrTankInfo = strHeader.split(";");
            basicData = arrTankInfo[0].split(",");
            this.strAuthorName = basicData[0];
            this.strTankName = basicData[1];
            this.var_455 = int(basicData[2]);
            intAvatarTank = int(basicData[3]);
            this.blnAvatarTank = false;
            if(intAvatarTank == 1)
            {
               this.blnAvatarTank = true;
            }
            this.numLife = Number(basicData[4]);
            this.numBubblesReturned = Number(basicData[5]);
            this.numSpeed = Number(basicData[6]);
            this.numDifficultyRating = Number(basicData[7]);
            this.strID = String(basicData[8]);
            this.numRating = Number(basicData[9]);
            arrRow = new (Array as any)();
            a = 1;
            while(a < arrTankInfo.length)
            {
               arrRow = arrTankInfo[a as any].split(",");
               this.method_467(arrRow[0],arrRow[1],arrRow[2],arrRow[3],arrRow[4],arrRow[5],arrRow[6],arrRow[7]);
               a += 1;
            }
            this.numBubbles = this.method_636();
            this.numGunPoints = this.method_510();
            this.numClass = this.method_640();
            this.numDifficultyRating = this.method_549();
            if(this.blnAvatarTank == true)
            {
               this.numSpeed = this.objGameObjectLibrary.arrClassData[this.numClass - 1 as any].intSpeed;
            }
         }
         catch(e: any)
         {
            return false;
         }
         return true;
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
      
      private method_640(): number
      {
         var var_40: any = null as any;
         var var_56: number = 0;
         var var_106: number = 0;
         var var_194: number = NaN;
         var var_126: number = NaN;
         var var_157: number = NaN;
         var var_150: number = 0;
         try
         {
            var_40 = new (Array as any)();
            var_40.push({
               "min":-1,
               "max":70 / 2
            } as any);
            var_40.push({
               "min":70 / 2,
               "max":110 / 2
            } as any);
            var_40.push({
               "min":110 / 2,
               "max":150 / 2
            } as any);
            var_40.push({
               "min":150 / 2,
               "max":200 / 2
            } as any);
            var_40.push({
               "min":200 / 2,
               "max":275 / 2
            } as any);
         }
         catch(e: any)
         {
         }
         try
         {
            var_56 = 1;
            var_106 = this.arrTankDetails.length - 1;
            while(var_106 >= 0)
            {
               if(var_56 == 6)
               {
                  break;
               }
               var_194 = this.arrTankDetails[var_106 as any].x * this.arrTankDetails[var_106 as any].x;
               var_126 = this.arrTankDetails[var_106 as any].y * this.arrTankDetails[var_106 as any].y;
               var_157 = Math.sqrt(var_194 + var_126);
               if(this.objGameObjectLibrary.IsObjectAWeapon(this.arrTankDetails[var_106 as any].type) == false)
               {
                  var_157 += this.arrTankDetails[var_106 as any].radius * this.arrTankDetails[var_106 as any].scale;
               }
               if(var_157 > var_40[var_40.length - 1 as any].max)
               {
                  var_56 = 6;
                  break;
               }
               var_150 = var_40.length - 1;
               while(var_150 >= 0)
               {
                  if(var_150 + 1 <= var_56)
                  {
                     break;
                  }
                  if(var_157 > var_40[var_150 as any].min && var_157 <= var_40[var_150 as any].max)
                  {
                     if(var_150 + 1 > var_56)
                     {
                        var_56 = var_150 + 1;
                     }
                     break;
                  }
                  var_150--;
               }
               var_106--;
            }
         }
         catch(e: any)
         {
         }
         return var_56;
      }
      
      public ExportTankData(): string
      {
         var _loc1_: number = 0;
         if(this.blnAvatarTank == true)
         {
            _loc1_ = 1;
         }
         var _loc2_: string = this.strAuthorName + "," + this.strTankName + "," + this.var_455 + "," + _loc1_ + "," + this.numLife + "," + this.numBubblesReturned + "," + this.numSpeed + "," + this.numDifficultyRating + "," + this.strID + "," + this.numRating;
         var _loc3_: string = this.method_362();
         var _loc4_: string = this.method_362();
         var _loc5_: string = "" + _loc3_ + _loc4_ + this.strVar2;
         var _loc6_: number = 0;
         while(_loc6_ < this.arrTankDetails.length)
         {
            _loc2_ += ";" + this.arrTankDetails[_loc6_ as any].name + "," + this.arrTankDetails[_loc6_ as any].type + "," + this.arrTankDetails[_loc6_ as any].twin + "," + this.arrTankDetails[_loc6_ as any].x + "," + this.arrTankDetails[_loc6_ as any].y + "," + this.arrTankDetails[_loc6_ as any].rotation + "," + this.arrTankDetails[_loc6_ as any].scale + "," + this.arrTankDetails[_loc6_ as any].radius;
            _loc6_++;
         }
         var _loc7_: class_11 = new (PKCS5 as any)();
         var _loc8_: ByteArray = class_13.toArray(class_13.method_22(_loc2_));
         var _loc9_: ByteArray = class_13.toArray(class_13.method_22(_loc5_));
         var _loc10_: class_12 = class_14.method_46("aes128-ecb",_loc9_,_loc7_);
         _loc10_.encrypt(_loc8_);
         return _loc3_ + String(class_13.method_52(_loc8_)) + _loc4_;
      }
      
      private method_636(): number
      {
         var _loc1_: number = 0;
         var _loc2_: any = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc1_ += this.objGameObjectLibrary.method_166(this.arrTankDetails[_loc2_ as any].type);
            _loc2_ += 1;
         }
         return _loc1_;
      }
      
      public method_467(param1: string, param2: number, param3: string, param4: number, param5: number, param6: number, param7: number, param8: number): void
      {
         this.arrTankDetails.push({
            "name":param1,
            "type":param2,
            "twin":param3,
            "x":param4,
            "y":param5,
            "rotation":param6,
            "scale":param7,
            "radius":param8
         } as any);
      }
      
      public method_616(): Point
      {
         var _loc4_: number = NaN;
         var _loc5_: number = NaN;
         var _loc6_: number = NaN;
         var _loc1_: number = 1000;
         var _loc2_: Point = new (Point as any)();
         var _loc3_: number = 0;
         while(_loc3_ < this.arrTankDetails.length)
         {
            _loc4_ = 0 - this.arrTankDetails[_loc3_ as any].x;
            _loc5_ = 0 - this.arrTankDetails[_loc3_ as any].y;
            _loc6_ = Math.sqrt(_loc4_ * _loc4_ + _loc5_ * _loc5_);
            if(_loc6_ < _loc1_)
            {
               _loc1_ = _loc6_;
               (_loc2_ as any).x = this.arrTankDetails[_loc3_ as any].x;
               (_loc2_ as any).y = this.arrTankDetails[_loc3_ as any].y;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public method_61(param1: number = 0, param2: BTAGameWorld = null): MovieClip
      {
         this.WipeTank();
         switch(param1)
         {
            case 0:
               this.movTank = new (MovieClip as any)();
               break;
            case 1:
               this.movTank = new (class_113 as any)(this);
               break;
            case 2:
               this.movTank = new (class_113 as any)(this);
               break;
            case 3:
               this.movTank = new (EnemyAI as any)(this);
         }
         this.intType = param1;
         this.objWorld = param2;
         var _loc3_: MovieClip = new (MovieClip as any)();
         0;
         while(0 < this.arrTankDetails.length)
         {
            _loc3_ = this.objGameObjectLibrary.method_123(this.arrTankDetails[0].type);
            (_loc3_ as any).x = this.arrTankDetails[0].x;
            (_loc3_ as any).y = this.arrTankDetails[0].y;
            (_loc3_ as any).scaleX = (_loc3_ as any).scaleY = this.arrTankDetails[0].scale;
            (_loc3_ as any).rotation = this.arrTankDetails[0].rotation;
            _loc3_.name = this.arrTankDetails[0].name;
            this.movTank.addChild(_loc3_);
            var _loc5_: number = this.objGameObjectLibrary.GetObjectType(this.arrTankDetails[0].type);
            switch(this.intType)
            {
            }
            var _loc4_: number = 0 + 1;
         }
         if(param1 == 1)
         {
            this.movTank.CheckForTeleports();
         }
         if(param1 > 0)
         {
            if(this.movTank.SetupClosestBubbleToCenterPoint != null)
            {
               this.movTank.SetupClosestBubbleToCenterPoint();
            }
         }
         return this.movTank;
      }
      
      public method_383(): number
      {
         var _loc3_: number = NaN;
         var _loc4_: number = NaN;
         var _loc5_: number = NaN;
         var _loc1_: number = 0;
         var _loc2_: number = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc3_ = 0 - this.arrTankDetails[_loc2_ as any].x;
            _loc4_ = 0 - this.arrTankDetails[_loc2_ as any].y;
            _loc5_ = Math.sqrt(_loc3_ * _loc3_ + _loc4_ * _loc4_);
            _loc5_ = _loc5_ + this.arrTankDetails[_loc2_ as any].radius;
            if(_loc5_ > _loc1_)
            {
               _loc1_ = _loc5_;
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      private method_510(): number
      {
         0;
         var _loc2_: any = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            if(this.objGameObjectLibrary.IsObjectAWeapon(this.arrTankDetails[_loc2_ as any].type))
            {
               var _loc1_: number = 0 + this.objGameObjectLibrary.method_207(this.arrTankDetails[_loc2_ as any].type);
            }
            _loc2_ += 1;
         }
         return 0;
      }
      
      public method_549(): number
      {
         var _loc1_: number = 1 / (5 - this.numSpeed) + 1;
         var _loc2_: number = this.numGunPoints / 2 - 0[2];
         return Math.round(_loc1_ * _loc2_ + Math.sqrt(this.numLife) / 10 - this.numBubblesReturned / this.numLife + 0[4]);
      }
      
      public WipeTank(): void
      {
         var _loc1_: any = undefined;
         if(this.movTank == null)
         {
            return;
         }
         while(this.movTank.numChildren > 0)
         {
            _loc1_ = this.movTank.getChildAt(0);
            if(_loc1_.intObjID != null)
            {
               if(_loc1_.intObjID > 1999)
               {
                  _loc1_.Deactivate();
               }
            }
            this.movTank.removeChildAt(0);
         }
         this.movTank = null as any;
      }
   }
