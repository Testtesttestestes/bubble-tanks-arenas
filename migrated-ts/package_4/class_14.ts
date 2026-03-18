// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_4

import { class_19 } from '../com/hurlant/crypto/rsa/class_19';
import { CFB8Mode } from '../package_2/CFB8Mode';
import { class_11 } from '../package_2/class_11';
import { class_12 } from '../package_2/class_12';
import { class_18 } from '../package_2/class_18';
import { class_23 } from '../package_2/class_23';
import { class_28 } from '../package_2/class_28';
import { class_29 } from '../package_2/class_29';
import { class_32 } from '../package_2/class_32';
import { class_33 } from '../package_2/class_33';
import { class_34 } from '../package_2/class_34';
import { class_35 } from '../package_2/class_35';
import { class_36 } from '../package_2/class_36';
import { class_37 } from '../package_2/class_37';
import { class_38 } from '../package_2/class_38';
import { class_39 } from '../package_2/class_39';
import { class_40 } from '../package_2/class_40';
import { class_41 } from '../package_2/class_41';
import { class_42 } from '../package_2/class_42';
import { PKCS5 } from '../package_2/PKCS5';
import { Base64 } from '../package_3/Base64';
import { class_17 } from '../package_7/class_17';
import { class_20 } from '../package_7/class_20';
import { MD2 } from '../package_7/MD2';
import { MD5 } from '../package_7/MD5';
import { SHA1 } from '../package_7/SHA1';
import { SHA224 } from '../package_7/SHA224';
import { SHA256 } from '../package_7/SHA256';
import { ARC4 } from '../package_9/ARC4';

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






























   export class class_14{
  [key: string]: any;
      
      private b64!: Base64;
      constructor(){

      }
      
      public static method_46(param1: string, param2: ByteArray, param3: class_11 = null): class_12
      {
         var _loc5_: class_12 = null as any;
         var _loc4_: any = param1.split("-");
         switch(_loc4_[0])
         {
            case "simple":
               _loc4_.shift();
               param1 = _loc4_.join("-");
               _loc5_ = class_14.method_46(param1,param2,param3);
               if(_loc5_ instanceof class_23)
               {
                  return new (class_41 as any)(_loc5_  as unknown as class_23);
               }
               return _loc5_;
               break;
            case "aes":
            case "aes128":
            case "aes192":
            case "aes256":
               _loc4_.shift();
               if(param2.length * 8 == _loc4_[0])
               {
                  _loc4_.shift();
               }
               return class_14.method_74(_loc4_[0],new (class_32 as any)(param2),param3);
            case "bf":
            case "blowfish":
               _loc4_.shift();
               return class_14.method_74(_loc4_[0],new (class_33 as any)(param2),param3);
            case "des":
               _loc4_.shift();
               if(_loc4_[0] != "ede" && _loc4_[0] != "ede3")
               {
                  return class_14.method_74(_loc4_[0],new (class_34 as any)(param2),param3);
               }
               if(_loc4_.length == 1)
               {
                  _loc4_.push("ecb" as any);
               }
               break;
            case "3des":
            case "des3":
               break;
            case "xtea":
               _loc4_.shift();
               return class_14.method_74(_loc4_[0],new (class_35 as any)(param2),param3);
            case "rc4":
               _loc4_.shift();
               return new (ARC4 as any)(param2);
            default:
               return null;
         }
         _loc4_.shift();
         return class_14.method_74(_loc4_[0],new (class_42 as any)(param2),param3);
      }
      
      public static method_301(param1: string): class_17
      {
         switch(param1)
         {
            case "md2":
               return new (MD2 as any)();
            case "md5":
               return new (MD5 as any)();
            case "sha":
            case "sha1":
               return new (SHA1 as any)();
            case "sha224":
               return new (SHA224 as any)();
            case "sha256":
               return new (SHA256 as any)();
            default:
               return null;
         }
      }
      
      public static method_783(param1: string, param2: string): class_19
      {
         return class_19.method_659(param2,param1);
      }
      
      private static method_74(param1: string, param2: class_18, param3: class_11 = null): class_29
      {
         switch(param1)
         {
            case "ecb":
               return new (class_37 as any)(param2,param3);
            case "cfb":
               return new (class_40 as any)(param2,param3);
            case "cfb8":
               return new (CFB8Mode as any)(param2,param3);
            case "ofb":
               return new (class_38 as any)(param2,param3);
            case "ctr":
               return new (class_36 as any)(param2,param3);
            case "cbc":
            default:
               return new (class_39 as any)(param2,param3);
         }
      }
      
      public static method_378(param1: string): number
      {
         var _loc2_: any = param1.split("-");
         switch(_loc2_[0])
         {
            case "simple":
               _loc2_.shift();
               return class_14.method_378(_loc2_.join("-"));
            case "aes128":
               return 16;
            case "aes192":
               return 24;
            case "aes256":
               return 32;
            case "aes":
               _loc2_.shift();
               return parseInt(_loc2_[0]) / 8;
            case "bf":
            case "blowfish":
               return 16;
            case "des":
               _loc2_.shift();
               switch(_loc2_[0])
               {
                  case "ede":
                     return 16;
                  case "ede3":
                     return 24;
                  default:
                     return 8;
               }
               break;
            case "3des":
            case "des3":
               return 24;
            case "xtea":
               return 8;
            case "rc4":
               if(parseInt(_loc2_[1]) > 0)
               {
                  return parseInt(_loc2_[1]) / 8;
               }
               return 16;
               break;
            default:
               return 0;
         }
      }
      
      public static method_829(param1: string): class_11
      {
         switch(param1)
         {
            case "null":
               return new (class_28 as any)();
            case "pkcs5":
            default:
               return new (PKCS5 as any)();
         }
      }
      
      public static method_843(param1: string): class_20
      {
         var _loc2_: any = param1.split("-");
         if(_loc2_[0] == "hmac")
         {
            _loc2_.shift();
         }
         var _loc3_: number = 0;
         if(_loc2_.length > 1)
         {
            _loc3_ = parseInt(_loc2_[1]);
         }
         return new (class_20 as any)(class_14.method_301(_loc2_[0]),_loc3_);
      }
   }
