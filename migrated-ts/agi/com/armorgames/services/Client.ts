// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services

import { DebugUtil } from '../debug/DebugUtil';
import { ClientError } from './ClientError';
import { MD5 } from './encryption/MD5';
import { AmfAuthenticationVO } from './VO/AmfAuthenticationVO';
import { GameSaveVO } from './VO/GameSaveVO';
import { GameShareListVO } from './VO/GameShareListVO';
import { GameShareVO } from './VO/GameShareVO';
import { HighscoreListVO } from './VO/HighscoreListVO';
import { HighscoreRankVO } from './VO/HighscoreRankVO';
import { HighscoreVO } from './VO/HighscoreVO';
import { MemberVO } from './VO/MemberVO';
import { UtilsVO } from './VO/UtilsVO';

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







   export class Client{
  [key: string]: any;
      
      private readonly SERVICE_URI: string = "http://services.armorgames.com/services/amf";
      private apikey: string = null as any;
      private gamekey: string = null as any;
      private authToken!: string;
      private displayRoot!: DisplayObject;
      private netConn!: NetConnection;
      private errorHandler!: Function;
      public clientID!: string;
      private sharedObject!: SharedObject;
      private isAuthenticated: boolean = false;
      constructor(param1: string, param2: string, param3: DisplayObject, param4: Function){
         var data: boolean;
         var prop: string = null as any;
         var apikey: string = param1;
         var gamekey: string = param2;
         var displayRoot: DisplayObject = param3;
         var errorCallback: Function = param4;

         this.apikey = apikey;
         this.gamekey = gamekey;
         this.displayRoot = displayRoot;
         this.errorHandler = errorCallback;
         this.sharedObject = SharedObject.getLocal(apikey + gamekey);
         data = false;
         for (let prop in this.sharedObject.data)
         {
            data = true;
         }
         if(data)
         {
            this.clientID = this.sharedObject.data.clientID;
         }
         else
         {
            this.clientID = MD5.hex_md5(Capabilities.serverString + new (Date as any)().time + Math.random());
            this.sharedObject.data.clientID = this.clientID;
            this.sharedObject.flush();
         }
         this.registerClass("AmfAuthenticationVO",AmfAuthenticationVO);
         this.registerClass("HighscoreListVO",HighscoreListVO);
         this.registerClass("HighscoreVO",HighscoreVO);
         this.registerClass("HighscoreRankVO",HighscoreRankVO);
         this.registerClass("GameShareVO",GameShareVO);
         this.registerClass("GameShareListVO",GameShareListVO);
         this.registerClass("GameSaveVO",GameSaveVO);
         this.registerClass("MemberVO",MemberVO);
         this.registerClass("UtilsVO",UtilsVO);
         this.netConn = new (NetConnection as any)();
         this.netConn.objectEncoding = ObjectEncoding.AMF3;
         this.netConn.addEventListener(NetStatusEvent.NET_STATUS, this.netStatusHandler.bind(this));
         this.netConn.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.securityErrorHandler.bind(this));
         this.netConn.addEventListener(AsyncErrorEvent.ASYNC_ERROR, this.asyncErrorHandler.bind(this));
         this.netConn.addEventListener(IOErrorEvent.IO_ERROR, this.ioErrorHandler.bind(this));
         try
         {
            this.netConn.addHeader("Credentials",false,{
               "userid":apikey,
               "password":gamekey
            });
            this.netConn.connect(this.SERVICE_URI);
         }
         catch (error: any)
         {
            DebugUtil.error("Client: Unable to connect to \'" + this.SERVICE_URI + "\'");
            if(errorHandler != null)
            {
               errorHandler(new (ClientError)("Unable to connect to \'" + this.SERVICE_URI + "\'",ClientError.CLIENT_CONNECT_ERROR,error));
            }
         }
      }
private registerClass(param1: string, param2: any): void
      {
         var name: string = param1;
         var classRef: any = param2;
         try
         {
            if(getClassByAlias(name) == null)
            {
               registerClassAlias(name,classRef);
            }
         }
         catch (e: any)
         {
            registerClassAlias(name,classRef);
         }
      }
      
      public destroy(): void
      {
         if(Boolean(this.netConn))
         {
            this.netConn.removeEventListener(NetStatusEvent.NET_STATUS, this.netStatusHandler.bind(this));
            this.netConn.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, this.securityErrorHandler.bind(this));
            this.netConn.removeEventListener(AsyncErrorEvent.ASYNC_ERROR, this.asyncErrorHandler.bind(this));
            this.netConn.removeEventListener(IOErrorEvent.IO_ERROR, this.ioErrorHandler.bind(this));
            this.netConn.close();
            this.netConn = null as any;
         }
         this.displayRoot = null as any;
         this.errorHandler = null as any;
         this.sharedObject = null as any;
      }
      
      public getIsAuthenticated(): boolean
      {
         return this.isAuthenticated;
      }
      
      public authenticate(param1: Function, param2: Function): void
      {
         var bytesTotal: string = null as any;
         var sameDomain: string = null as any;
         var callback: Function = param1;
         var errorCallback: Function = param2;
         try
         {
            this.netConn.addHeader("authenticate",true,true);
            bytesTotal = new (String as any)(this.displayRoot.root.loaderInfo.bytesTotal);
            sameDomain = "1";
            this.netConn.addHeader("signature",true,MD5.hex_hmac_md5("na_P#@F*~P" + this.apikey + this.gamekey + "<-:[ 72VfV",this.apikey + this.gamekey + bytesTotal + sameDomain));
            this.netConn.call("auth.authenticate",new (Responder as any)((param1: any): void => {
               this.authenticationHandler(param1,callback,errorCallback);
            },this.statusHandler),this.apikey,this.gamekey,bytesTotal,sameDomain);
         }
         catch (error: any)
         {
            DebugUtil.error(DebugUtil.getDebugInfo(),"Client: Authentication Failed: " + error.message);
            if(errorCallback != null)
            {
               errorCallback(new (ClientError)("Authentication Errored: " + error.message,ClientError.AUTH_ERROR,error));
            }
         }
      }
      
      protected authenticationHandler(param1: any, param2: Function, param3: Function): void
      {
         if(Boolean(param1))
         {
            this.netConn.addHeader("authenticate",false,null);
            this.authToken = param1.token;
            this.isAuthenticated = true;
            if(param2 != null)
            {
               param2(param1.toObject());
            }
         }
         else
         {
            DebugUtil.error("Client: Authentication Handler Failed.");
            if(param3 != null)
            {
               param3(new (ClientError)("Authentication Failed: ",ClientError.AUTH_FAILED,param1));
            }
         }
      }
      
      public call(param1: string, param2: Function, ...rest: any[]): void
      {
         var command: string = param1;
         var targetHandler: Function = param2;
         var args: any = rest;
         if(!this.isAuthenticated)
         {
            DebugUtil.error("Client not authenticated (try authenticate() first)");
            if(this.errorHandler != null)
            {
               this.errorHandler(new (ClientError as any)("Client not authenticated (try authenticate() first)",ClientError.NOT_AUTHENTICATED,{
                  "command":command,
                  "args":args
               }));
            }
            return;
         }
         try
         {
            this.netConn.addHeader("signature",true,this.calculateSignature(command,args));
            args.unshift(new (Responder as any)((param1: any): void => {
               this.resultHandler(param1,targetHandler);
            },this.statusHandler) as any);
            args.unshift(command as any);
            this.netConn.call.apply(this,args);
         }
         catch (error: any)
         {
            DebugUtil.error("Client: Call Execution Error: " + error.message);
            if(errorHandler != null)
            {
               errorHandler(new (ClientError)("Call Error: " + error.message,ClientError.CALL_ERROR,error));
            }
         }
      }
      
      protected calculateSignature(param1: string, param2: any): string
      {
         var _loc3_: any = [param1];
         var _loc4_: number = 0;
         while(_loc4_ < param2.length)
         {
            switch(typeof param2[_loc4_ as any])
            {
               case "boolean":
                  _loc3_.push(Boolean(param2[_loc4_ as any]) ? "1" : "0" as any);
                  break;
               case "number":
               case "string":
                  _loc3_.push(new (String as any)(param2[_loc4_ as any]) as any);
                  break;
               default:
                  _loc3_.push("?" as any);
            }
            _loc4_++;
         }
         var _loc5_: string = MD5.hex_hmac_md5(this.authToken,_loc3_.join(""));
         DebugUtil.info("Client: Sig: " + _loc5_ + ", pieces: " + _loc3_.join(", "));
         return _loc5_;
      }
      
      protected resultHandler(param1: any, param2: Function): void
      {
         if(param2 != null)
         {
            param2(param1);
         }
      }
      
      protected statusHandler(param1: any): void
      {
         DebugUtil.error("Client: Status Error, Description: (" + param1.code + ") " + param1.description);
         if(param1.code == 2)
         {
            if(this.errorHandler != null)
            {
               this.errorHandler(new (ClientError as any)("Status Error: timeout",ClientError.CLIENT_TIMEOUT_ERROR,param1));
            }
         }
         else if(this.errorHandler != null)
         {
            this.errorHandler(new (ClientError as any)("Status Error: general",ClientError.STATUS_ERROR,param1));
         }
      }
      
      private netStatusHandler(param1: NetStatusEvent): void
      {
         var _loc2_: string = "";
         if(Boolean(param1.info))
         {
            _loc2_ = param1.info.hasOwnProperty("code") ? String(param1.info.code) : "";
         }
         DebugUtil.error("Client: Network Status Error - " + _loc2_);
         if(this.errorHandler != null)
         {
            this.errorHandler(new (ClientError as any)("Network Status Error - " + _loc2_,ClientError.NETWORK_STATUS_ERROR,param1));
         }
      }
      
      private securityErrorHandler(param1: any): void
      {
         DebugUtil.error("Client: Security Error");
         if(this.errorHandler != null)
         {
            this.errorHandler(new (ClientError as any)("Security Error",ClientError.SECURITY_ERROR,param1));
         }
      }
      
      private asyncErrorHandler(param1: AsyncErrorEvent): void
      {
         DebugUtil.error("Client: Async Error");
         if(this.errorHandler != null)
         {
            this.errorHandler(new (ClientError as any)("Async Error",ClientError.ASYNC_ERROR,param1));
         }
      }
      
      private ioErrorHandler(param1: any): void
      {
         DebugUtil.error("Client: IO Error");
         if(this.errorHandler != null)
         {
            this.errorHandler(new (ClientError as any)("IO Error",ClientError.IO_ERROR,param1));
         }
      }
   }
