package com.armorgames.services
{
   import com.armorgames.debug.*;
   import com.armorgames.services.VO.*;
   import com.armorgames.services.encryption.*;
   import flash.display.*;
   import flash.events.*;
   import flash.net.*;
   import flash.system.*;
   
   public class Client
   {
      
      private const SERVICE_URI:String = "http://services.armorgames.com/services/amf";
      
      private var apikey:String = null;
      
      private var gamekey:String = null;
      
      private var authToken:String;
      
      private var displayRoot:DisplayObject;
      
      private var netConn:NetConnection;
      
      private var errorHandler:Function;
      
      public var clientID:String;
      
      private var sharedObject:SharedObject;
      
      private var isAuthenticated:Boolean = false;
      
      public function Client(param1:String, param2:String, param3:DisplayObject, param4:Function)
      {
         var data:Boolean;
         var prop:String = null;
         var apikey:String = param1;
         var gamekey:String = param2;
         var displayRoot:DisplayObject = param3;
         var errorCallback:Function = param4;
         super();
         this.apikey = apikey;
         this.gamekey = gamekey;
         this.displayRoot = displayRoot;
         this.errorHandler = errorCallback;
         this.sharedObject = SharedObject.getLocal(apikey + gamekey);
         data = false;
         for(prop in this.sharedObject.data)
         {
            data = true;
         }
         if(data)
         {
            this.clientID = this.sharedObject.data.clientID;
         }
         else
         {
            this.clientID = MD5.hex_md5(Capabilities.serverString + new Date().time + Math.random());
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
         this.netConn = new NetConnection();
         this.netConn.objectEncoding = ObjectEncoding.AMF3;
         this.netConn.addEventListener(NetStatusEvent.NET_STATUS,this.netStatusHandler,false,0,true);
         this.netConn.addEventListener(SecurityErrorEvent.SECURITY_ERROR,this.securityErrorHandler,false,0,true);
         this.netConn.addEventListener(AsyncErrorEvent.ASYNC_ERROR,this.asyncErrorHandler,false,0,true);
         this.netConn.addEventListener(IOErrorEvent.IO_ERROR,this.ioErrorHandler,false,0,true);
         try
         {
            this.netConn.addHeader("Credentials",false,{
               "userid":apikey,
               "password":gamekey
            });
            this.netConn.connect(this.SERVICE_URI);
         }
         catch(error:Error)
         {
            DebugUtil.error("Client: Unable to connect to \'" + this.SERVICE_URI + "\'");
            if(errorHandler != null)
            {
               errorHandler(new ClientError("Unable to connect to \'" + this.SERVICE_URI + "\'",ClientError.CLIENT_CONNECT_ERROR,error));
            }
         }
      }
      
      [SecureSWF(rename="false")]
      private function registerClass(param1:String, param2:Class) : void
      {
         var name:String = param1;
         var classRef:Class = param2;
         try
         {
            if(getClassByAlias(name) == null)
            {
               registerClassAlias(name,classRef);
            }
         }
         catch(e:Error)
         {
            registerClassAlias(name,classRef);
         }
      }
      
      public function destroy() : void
      {
         if(Boolean(this.netConn))
         {
            this.netConn.removeEventListener(NetStatusEvent.NET_STATUS,this.netStatusHandler);
            this.netConn.removeEventListener(SecurityErrorEvent.SECURITY_ERROR,this.securityErrorHandler);
            this.netConn.removeEventListener(AsyncErrorEvent.ASYNC_ERROR,this.asyncErrorHandler);
            this.netConn.removeEventListener(IOErrorEvent.IO_ERROR,this.ioErrorHandler);
            this.netConn.close();
            this.netConn = null;
         }
         this.displayRoot = null;
         this.errorHandler = null;
         this.sharedObject = null;
      }
      
      public function getIsAuthenticated() : Boolean
      {
         return this.isAuthenticated;
      }
      
      public function authenticate(param1:Function, param2:Function) : void
      {
         var bytesTotal:String = null;
         var sameDomain:String = null;
         var callback:Function = param1;
         var errorCallback:Function = param2;
         try
         {
            this.netConn.addHeader("authenticate",true,true);
            bytesTotal = new String(this.displayRoot.root.loaderInfo.bytesTotal);
            sameDomain = "1";
            this.netConn.addHeader("signature",true,MD5.hex_hmac_md5("na_P#@F*~P" + this.apikey + this.gamekey + "<-:[ 72VfV",this.apikey + this.gamekey + bytesTotal + sameDomain));
            this.netConn.call("auth.authenticate",new Responder(function(param1:*):void
            {
               authenticationHandler(param1,callback,errorCallback);
            },this.statusHandler),this.apikey,this.gamekey,bytesTotal,sameDomain);
         }
         catch(error:Error)
         {
            DebugUtil.error(DebugUtil.getDebugInfo(),"Client: Authentication Failed: " + error.message);
            if(errorCallback != null)
            {
               errorCallback(new ClientError("Authentication Errored: " + error.message,ClientError.AUTH_ERROR,error));
            }
         }
      }
      
      protected function authenticationHandler(param1:*, param2:Function, param3:Function) : void
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
               param3(new ClientError("Authentication Failed: ",ClientError.AUTH_FAILED,param1));
            }
         }
      }
      
      public function call(param1:String, param2:Function, ... rest) : void
      {
         var command:String = param1;
         var targetHandler:Function = param2;
         var args:Array = rest;
         if(!this.isAuthenticated)
         {
            DebugUtil.error("Client not authenticated (try authenticate() first)");
            if(this.errorHandler != null)
            {
               this.errorHandler(new ClientError("Client not authenticated (try authenticate() first)",ClientError.NOT_AUTHENTICATED,{
                  "command":command,
                  "args":args
               }));
            }
            return;
         }
         try
         {
            this.netConn.addHeader("signature",true,this.calculateSignature(command,args));
            args.unshift(new Responder(function(param1:*):void
            {
               resultHandler(param1,targetHandler);
            },this.statusHandler));
            args.unshift(command);
            this.netConn.call.apply(this,args);
         }
         catch(error:Error)
         {
            DebugUtil.error("Client: Call Execution Error: " + error.message);
            if(errorHandler != null)
            {
               errorHandler(new ClientError("Call Error: " + error.message,ClientError.CALL_ERROR,error));
            }
         }
      }
      
      protected function calculateSignature(param1:String, param2:Array) : String
      {
         var _loc3_:Array = [param1];
         var _loc4_:Number = 0;
         while(_loc4_ < param2.length)
         {
            switch(typeof param2[_loc4_])
            {
               case "boolean":
                  _loc3_.push(Boolean(param2[_loc4_]) ? "1" : "0");
                  break;
               case "number":
               case "string":
                  _loc3_.push(new String(param2[_loc4_]));
                  break;
               default:
                  _loc3_.push("?");
            }
            _loc4_++;
         }
         var _loc5_:String = MD5.hex_hmac_md5(this.authToken,_loc3_.join(""));
         DebugUtil.info("Client: Sig: " + _loc5_ + ", pieces: " + _loc3_.join(", "));
         return _loc5_;
      }
      
      protected function resultHandler(param1:*, param2:Function) : void
      {
         if(param2 != null)
         {
            param2(param1);
         }
      }
      
      protected function statusHandler(param1:Object) : void
      {
         DebugUtil.error("Client: Status Error, Description: (" + param1.code + ") " + param1.description);
         if(param1.code == 2)
         {
            if(this.errorHandler != null)
            {
               this.errorHandler(new ClientError("Status Error: timeout",ClientError.CLIENT_TIMEOUT_ERROR,param1));
            }
         }
         else if(this.errorHandler != null)
         {
            this.errorHandler(new ClientError("Status Error: general",ClientError.STATUS_ERROR,param1));
         }
      }
      
      private function netStatusHandler(param1:NetStatusEvent) : void
      {
         var _loc2_:String = "";
         if(Boolean(param1.info))
         {
            _loc2_ = param1.info.hasOwnProperty("code") ? String(param1.info.code) : "";
         }
         DebugUtil.error("Client: Network Status Error - " + _loc2_);
         if(this.errorHandler != null)
         {
            this.errorHandler(new ClientError("Network Status Error - " + _loc2_,ClientError.NETWORK_STATUS_ERROR,param1));
         }
      }
      
      private function securityErrorHandler(param1:SecurityErrorEvent) : void
      {
         DebugUtil.error("Client: Security Error");
         if(this.errorHandler != null)
         {
            this.errorHandler(new ClientError("Security Error",ClientError.SECURITY_ERROR,param1));
         }
      }
      
      private function asyncErrorHandler(param1:AsyncErrorEvent) : void
      {
         DebugUtil.error("Client: Async Error");
         if(this.errorHandler != null)
         {
            this.errorHandler(new ClientError("Async Error",ClientError.ASYNC_ERROR,param1));
         }
      }
      
      private function ioErrorHandler(param1:IOErrorEvent) : void
      {
         DebugUtil.error("Client: IO Error");
         if(this.errorHandler != null)
         {
            this.errorHandler(new ClientError("IO Error",ClientError.IO_ERROR,param1));
         }
      }
   }
}

