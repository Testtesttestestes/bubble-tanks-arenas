// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto

import { Base64 } from '../util/Base64';
import { HMAC } from './hash/HMAC';
import { IHash } from './hash/IHash';
import { MD2 } from './hash/MD2';
import { MD5 } from './hash/MD5';
import { SHA1 } from './hash/SHA1';
import { SHA224 } from './hash/SHA224';
import { SHA256 } from './hash/SHA256';
import { ARC4 } from './prng/ARC4';
import { RSAKey } from './rsa/RSAKey';
import { AESKey } from './symmetric/AESKey';
import { BlowFishKey } from './symmetric/BlowFishKey';
import { CBCMode } from './symmetric/CBCMode';
import { CFB8Mode } from './symmetric/CFB8Mode';
import { CFBMode } from './symmetric/CFBMode';
import { CTRMode } from './symmetric/CTRMode';
import { DESKey } from './symmetric/DESKey';
import { ECBMode } from './symmetric/ECBMode';
import { ICipher } from './symmetric/ICipher';
import { IMode } from './symmetric/IMode';
import { IPad } from './symmetric/IPad';
import { ISymmetricKey } from './symmetric/ISymmetricKey';
import { IVMode } from './symmetric/IVMode';
import { NullPad } from './symmetric/NullPad';
import { OFBMode } from './symmetric/OFBMode';
import { PKCS5 } from './symmetric/PKCS5';
import { SimpleIVMode } from './symmetric/SimpleIVMode';
import { TripleDESKey } from './symmetric/TripleDESKey';
import { XTeaKey } from './symmetric/XTeaKey';

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






























   export class Crypto{
  [key: string]: any;
      
      private b64!: Base64;
      constructor(){

      }
      
      public static getCipher(name: string, key: ByteArray, pad: IPad = null): ICipher
      {
         var keys: any = null as any;
         var cipher: ICipher = null as any;
         keys = name.split("-");
         switch(keys[0])
         {
            case "simple":
               keys.shift();
               name = keys.join("-");
               cipher = Crypto.getCipher(name,key,pad);
               if(cipher != null /* instanceof IVMode */)
               {
                  return new (SimpleIVMode as any)(cipher  as unknown as IVMode);
               }
               return cipher;
               break;
            case "aes":
            case "aes128":
            case "aes192":
            case "aes256":
               keys.shift();
               if(key.length * 8 == keys[0])
               {
                  keys.shift();
               }
               return Crypto.getMode(keys[0],new (AESKey as any)(key),pad);
            case "bf":
            case "blowfish":
               keys.shift();
               return Crypto.getMode(keys[0],new (BlowFishKey as any)(key),pad);
            case "des":
               keys.shift();
               if(keys[0] != "ede" && keys[0] != "ede3")
               {
                  return Crypto.getMode(keys[0],new (DESKey as any)(key),pad);
               }
               if(keys.length == 1)
               {
                  keys.push("ecb" as any);
               }
               break;
            case "3des":
            case "des3":
               break;
            case "xtea":
               keys.shift();
               return Crypto.getMode(keys[0],new (XTeaKey as any)(key),pad);
            case "rc4":
               keys.shift();
               return new (ARC4 as any)(key);
            default:
               return null;
         }
         keys.shift();
         return Crypto.getMode(keys[0],new (TripleDESKey as any)(key),pad);
      }
      
      public static getHash(name: string): IHash
      {
         switch(name)
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
      
      public static getRSA(E: string, M: string): RSAKey
      {
         return RSAKey.parsePublicKey(M,E);
      }
      
      private static getMode(name: string, alg: ISymmetricKey, padding: IPad = null): IMode
      {
         switch(name)
         {
            case "ecb":
               return new (ECBMode as any)(alg,padding);
            case "cfb":
               return new (CFBMode as any)(alg,padding);
            case "cfb8":
               return new (CFB8Mode as any)(alg,padding);
            case "ofb":
               return new (OFBMode as any)(alg,padding);
            case "ctr":
               return new (CTRMode as any)(alg,padding);
            case "cbc":
         }
         return new (CBCMode as any)(alg,padding);
      }
      
      public static getKeySize(name: string): number
      {
         var keys: any = null as any;
         keys = name.split("-");
         switch(keys[0])
         {
            case "simple":
               keys.shift();
               return Crypto.getKeySize(keys.join("-"));
            case "aes128":
               return 16;
            case "aes192":
               return 24;
            case "aes256":
               return 32;
            case "aes":
               keys.shift();
               return parseInt(keys[0]) / 8;
            case "bf":
            case "blowfish":
               return 16;
            case "des":
               keys.shift();
               switch(keys[0])
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
               if(parseInt(keys[1]) > 0)
               {
                  return parseInt(keys[1]) / 8;
               }
               return 16;
               break;
            default:
               return 0;
         }
      }
      
      public static getPad(name: string): IPad
      {
         switch(name)
         {
            case "null":
               return new (NullPad as any)();
            case "pkcs5":
         }
         return new (PKCS5 as any)();
      }
      
      public static getHMAC(name: string): HMAC
      {
         var keys: any = null as any;
         var bits: number = 0;
         keys = name.split("-");
         if(keys[0] == "hmac")
         {
            keys.shift();
         }
         bits = 0;
         if(keys.length > 1)
         {
            bits = parseInt(keys[1]);
         }
         return new (HMAC as any)(Crypto.getHash(keys[0]),bits);
      }
   }
