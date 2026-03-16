// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services

export class Client{
      
      private readonly SERVICE_URI: string = "http://services.armorgames.com/services/amf";
      private apikey: string = null as any;
      private gamekey: string = null as any;
      private authToken: string;
      private displayRoot: DisplayObject;
      private netConn: NetConnection;
      private errorHandler: Function;
      public clientID: string;
      private sharedObject: SharedObject;
      private isAuthenticated: boolean = false;
      constructor(param1: string, param2: string, param3: DisplayObject, param4: Function){
         let data: boolean;
         let prop: string = null;
         let apikey: string = param1;
         let gamekey: string = param2;
         let displayRoot: DisplayObject = param3;
         let errorCallback: Function = param4;
         super();
         this.apikey = this.apikey;
         this.gamekey = this.gamekey;
         this.displayRoot = this.displayRoot;
         this.errorHandler = errorCallback;
         this.sharedObject = SharedObject.getLocal(this.apikey + this.gamekey);
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
         this.netConn.addEventListener(NetStatusEvent.NET_STATUS, this.netStatusHandler.bind(this));
         this.netConn.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.securityErrorHandler.bind(this));
         this.netConn.addEventListener(AsyncErrorEvent.ASYNC_ERROR, this.asyncErrorHandler.bind(this));
         this.netConn.addEventListener(IOErrorEvent.IO_ERROR, this.ioErrorHandler.bind(this));
         try
         {
            this.netConn.addHeader("Credentials",false,{
               "userid":this.apikey,
               "password":this.gamekey
            });
            this.netConn.connect(this.SERVICE_URI);
         }
         catch (error: any)
         {
            DebugUtil.error("Client: Unable to connect to \'" + this.SERVICE_URI + "\'");
            if(this.errorHandler != null)
            {
               this.errorHandler(new ClientError("Unable to connect to \'" + this.SERVICE_URI + "\'",ClientError.CLIENT_CONNECT_ERROR,error));
            }
         }
      }
private registerClass(param1: string, param2: any): void
      {
         let name: string = param1;
         let classRef: any = param2;
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
            this.netConn = null;
         }
         this.displayRoot = null;
         this.errorHandler = null;
         this.sharedObject = null;
      }
      
      public getIsAuthenticated(): boolean
      {
         return this.isAuthenticated;
      }
      
      public authenticate(param1: Function, param2: Function): void
      {
         let bytesTotal: string = null;
         let sameDomain: string = null;
         let callback: Function = param1;
         let errorCallback: Function = param2;
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
         catch (error: any)
         {
            DebugUtil.error(DebugUtil.getDebugInfo(),"Client: Authentication Failed: " + error.message);
            if(errorCallback != null)
            {
               errorCallback(new ClientError("Authentication Errored: " + error.message,ClientError.AUTH_ERROR,error));
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
               param3(new ClientError("Authentication Failed: ",ClientError.AUTH_FAILED,param1));
            }
         }
      }
      
      public call(param1: string, param2: Function, ... rest): void
      {
         let command: string = param1;
         let targetHandler: Function = param2;
         let args: any[] = rest;
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
         catch (error: any)
         {
            DebugUtil.error("Client: Call Execution Error: " + error.message);
            if(this.errorHandler != null)
            {
               this.errorHandler(new ClientError("Call Error: " + error.message,ClientError.CALL_ERROR,error));
            }
         }
      }
      
      protected calculateSignature(param1: string, param2: any[]): string
      {
         let _loc3_: any[] = [param1];
         let _loc4_: number = 0;
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
         let _loc5_: string = MD5.hex_hmac_md5(this.authToken,_loc3_.join(""));
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
      
      protected statusHandler(param1: Record<string, any>): void
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
      
      private netStatusHandler(param1: NetStatusEvent): void
      {
         let _loc2_: string = "";
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
      
      private securityErrorHandler(param1: SecurityErrorEvent): void
      {
         DebugUtil.error("Client: Security Error");
         if(this.errorHandler != null)
         {
            this.errorHandler(new ClientError("Security Error",ClientError.SECURITY_ERROR,param1));
         }
      }
      
      private asyncErrorHandler(param1: AsyncErrorEvent): void
      {
         DebugUtil.error("Client: Async Error");
         if(this.errorHandler != null)
         {
            this.errorHandler(new ClientError("Async Error",ClientError.ASYNC_ERROR,param1));
         }
      }
      
      private ioErrorHandler(param1: IOErrorEvent): void
      {
         DebugUtil.error("Client: IO Error");
         if(this.errorHandler != null)
         {
            this.errorHandler(new ClientError("IO Error",ClientError.IO_ERROR,param1));
         }
      }
   }
