// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames

export class AGI extends Sprite{
      
      private readonly VERSION: string = "1.9.29";
      private readonly MAX_SCORES: number = 25;
      private readonly MAX_SHARES: number = 32;
      private readonly DEFAULT_SCORE_TYPE: string = "[empty]";
      private agui_url: string = "";
      private client: Client;
      private clientDevKey: string = "";
      private clientGameKey: string = "";
      private clientGameName: string = "";
      private clientGameURL: string = "";
      private clientGameURLShort: string = "";
      private agUser: AGUser;
      private ready: boolean = false;
      private connected: boolean = false;
      private connecting: boolean = false;
      private connectionAttempts: number = 0;
      private clientErrorCallback: Function;
      private globalCallback: Function;
      private loginStatusCallback: Function;
      private debugOutputCallback: Function;
      private agui: any;
      private aguiLoader: Loader;
      private aguiParams: Record<string, any>;
      private aguiState: string = "";
      private aguiStateParams: Record<string, any>;
      private aguiInitialized: boolean;
      private scoreTypes: any[];
      private cachedGameShare: Record<string, any>;
      private loginStatus: LoginStatus;
      private avatarLoader: Loader;
      private progress: MovieClip;
      private error: MovieClip;
      private darkBG: MovieClip;
      private closedProgressBar: boolean;
      private displayRoot: DisplayObjectContainer;
      private parentFrameRate: number;
      private callQueue: any[];
      private callRetryCounter: number;
      constructor(){
    super(); // AUTO-INJECTED
         let _loc1_: string = null;
         let _loc2_: boolean = false;
         let _loc3_: TextField = null;
         this.aguiParams = new Object();
         super();
         Security.allowDomain("*");
         Security.allowInsecureDomain("*");
         this.ready = false;
         if(Boolean(stage))
         {
            _loc1_ = unescape(this.loaderInfo.url);
            _loc2_ = _loc1_.lastIndexOf("_debug.swf") != -1;
            _loc3_ = new TextField();
            _loc3_.width = stage.stageWidth;
            _loc3_.text = "Armor Games Interface - Version " + this.VERSION + (_loc2_ ? " debug" : "");
            super.addChild(_loc3_);
         }
      }
public init(param1: string, param2: string, param3: Function = null as any, param4: boolean = false): void
      {
         if(this.ready)
         {
            return;
         }
         if(!stage || !stage.root)
         {
            this.output("AGI Error: AGI requires access to the stage property in order to authenticate. Please add the AGI  as unknown as a child before calling init().");
            return;
         }
         this.callQueue = new Array();
         this.displayRoot = stage;
         this.agui_url = "";
         let _loc5_: string = unescape(this.loaderInfo.url);
         let _loc6_: boolean = _loc5_.lastIndexOf("_debug.swf") != -1;
         let _loc7_: boolean = Boolean(this.getDomain(_loc5_) != "");
         let _loc8_: any[] = _loc7_ ? _loc5_.split("?") : new Array();
         let _loc9_: any[] = _loc5_.split("/");
         let _loc10_: number = 0;
         while(_loc10_ < _loc9_.length - 1)
         {
            this.agui_url += _loc9_[_loc10_] + "/";
            _loc10_++;
         }
         this.agui_url += "AGUI" + (_loc6_ ? "_debug" : "") + ".swf" + (_loc8_.length > 1 ? "?" + _loc8_[1] : "");
         DebugUtil.init("AGI",param4,param4,["OUT","ERROR","WARN"]);
         if(param4)
         {
            DebugUtil.out("Armor Games Interface - Version " + this.VERSION + (_loc6_ ? " debug" : ""));
            if(Capabilities.os.toLowerCase().search("mac") > -1)
            {
               DebugUtil.out("WARNING: Mac developers may experience erratic behaviors with the AGI when testing within the Flash IDE. For best results, test within a browser window instead.");
            }
         }
         else
         {
            this.output("Armor Games Interface - Version " + this.VERSION + (_loc6_ ? " debug" : ""));
            if(Capabilities.os.toLowerCase().search("mac") > -1)
            {
               this.output("WARNING:\n    Mac developers may experience erratic behaviors with the AGI when testing within the Flash IDE.\n    For best results, test within a browser window instead.");
            }
         }
         try
         {
            if(Boolean(stage))
            {
               this.parentFrameRate = stage.frameRate;
            }
            else
            {
               this.parentFrameRate = 30;
            }
         }
         catch (e: any)
         {
         }
         this.clientDevKey = param1;
         this.clientGameKey = param2;
         this.clientErrorCallback = param3;
         this.aguiParams = new Object();
         this.aguiInitialized = false;
         this.connectionAttempts = 0;
         let _loc11_: string = this.displayRoot.root.loaderInfo.parameters["auth_token"];
         this.loaderInfo.addEventListener(Event.UNLOAD, this.handleUnload.bind(this));
         this.ready = true;
         if(Boolean(_loc11_) && _loc11_ != "")
         {
            this.autoLogin(_loc11_);
         }
      }
      
      private handleUnload(param1: Event): void
      {
         this.clearBackground();
         this.destroyAGUI();
         this.agui = null;
         if(Boolean(this.aguiLoader))
         {
            this.aguiLoader.contentLoaderInfo.removeEventListener(Event.COMPLETE, this.handleAGUILoaded.bind(this));
            this.aguiLoader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR, this.handleAGUILoadFailed.bind(this));
            this.aguiLoader.contentLoaderInfo.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, this.handleAGUILoadFailed.bind(this));
            this.aguiLoader.unload();
            this.aguiLoader = null;
         }
         this.clientErrorCallback = null;
         this.globalCallback = null;
         this.loginStatusCallback = null;
         this.debugOutputCallback = null;
         this.clearQueue();
         this.callQueue = null;
         this.displayRoot = null;
         if(Boolean(this.client))
         {
            this.client.destroy();
            this.client = null;
         }
         this.agUser = null;
         this.restoreFrameRate();
         this.ready = false;
      }
public submitScore(param1: string, param2: number, param3: string = null as any, param4: Function = null as any, param5: boolean = true): void
      {
         this.addCallToQueue(this.iSubmitScore,[param1,param2,param3,param4,param5]);
      }
public retrieveScores(param1: Function, param2: string = null as any, param3: string = "alltime", param4: boolean = true): void
      {
         this.addCallToQueue(this.iRetrievePublicScores,[param1,param2,param3,param4,1,false]);
      }
public retrievePublicScores(param1: Function, param2: string = null as any, param3: string = "alltime", param4: boolean = true, param5: number = 1, param6: boolean = false): void
      {
         this.addCallToQueue(this.iRetrievePublicScores,[param1,param2,param3,param4,param5,param6]);
      }
public retrieveUserScores(param1: Function, param2: string = null as any, param3: boolean = true, param4: number = 1): void
      {
         if(!this.agUser)
         {
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "this.error":"User must be logged in before calling retrieveUserScores()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iRetrieveUserScores,[param1,param2,param3,param4]);
      }
public retrieveFriendScores(param1: Function, param2: string = null as any, param3: boolean = true, param4: number = 1): void
      {
         if(!this.agUser)
         {
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "this.error":"User must be logged in before calling retrieveFriendScores()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iRetrieveFriendScores,[param1,param2,param3,param4]);
      }
public shareGameData(param1: string, param2: string, param3: Function = null as any, param4: any = null): void
      {
         this.addCallToQueue(this.iSubmitGameShare,[param1,param2,param3,param4]);
      }
public submitGameShare(param1: string, param2: string, param3: Function = null as any, param4: any = null): void
      {
         this.addCallToQueue(this.iSubmitGameShare,[param1,param2,param3,param4]);
      }
public retrieveGameData(param1: Function): void
      {
         this.isComingFromShareURL(param1);
      }
public isComingFromShareURL(param1: Function): void
      {
         let _loc3_: string = null;
         let _loc4_: string = null;
         if(!this.displayRoot)
         {
            _loc3_ = "AGI Error: AGI requires access to the stage property in order retrieve game data. Please add the AGI  as unknown as a child to your document class before calling isComingFromShareURL().";
            this.output(_loc3_);
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "this.error":_loc3_
               });
            }
            return;
         }
         let _loc2_: string = this.displayRoot.root.loaderInfo.parameters["ag_data_id"];
         if(!_loc2_ || _loc2_ == "")
         {
            _loc4_ = "Game instanceof not being played from a short url, so there instanceof no game data to retrieve.";
            DebugUtil.out(_loc4_);
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "this.error":_loc4_
               });
            }
            return;
         }
         this.addCallToQueue(this.iRetrieveGameShare,[_loc2_,param1]);
         this.addCallToQueue(this.iIncGameShareView,[_loc2_]);
      }
public retrieveGameShare(param1: string, param2: Function): void
      {
         this.addCallToQueue(this.iRetrieveGameShare,[param1,param2]);
      }
public retrieveGameShares(param1: string, param2: string, param3: Function, param4: number = 1): void
      {
         this.addCallToQueue(this.iRetrieveGameShares,[param1,param2,param3,param4]);
      }
public retrieveLatestGameShares(param1: Function, param2: number = 1): void
      {
         this.addCallToQueue(this.iRetrieveLatestGameShares,[param1,param2]);
      }
public retrieveStaffPickedGameShares(param1: Function, param2: number = 1): void
      {
         this.addCallToQueue(this.iRetrieveStaffPickedGameShares,[param1,param2]);
      }
public retrieveUserGameShares(param1: Function, param2: string = "shares", param3: number = 1): void
      {
         if(!this.agUser)
         {
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "this.error":"User must be logged in before calling retrieveUserGameShares()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iRetrieveUserGameShares,[param1,param2,param3]);
      }
public retrieveFriendGameShares(param1: Function, param2: string = "shares", param3: number = 1): void
      {
         if(!this.agUser)
         {
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "this.error":"User must be logged in before calling retrieveFriendGameShares()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iRetrieveFriendGameShares,[param1,param2,param3]);
      }
public retrieveRandomGameShare(param1: Function): void
      {
         this.addCallToQueue(this.iRetrieveRandomGameShare,[param1]);
      }
public rateGameShare(param1: string, param2: number): void
      {
         this.addCallToQueue(this.iRateGameShare,[param1,param2]);
      }
public likeGameShare(param1: string): void
      {
         this.addCallToQueue(this.iRateGameShare,[param1,1]);
      }
public unlikeGameShare(param1: string): void
      {
         this.addCallToQueue(this.iUnlikeGameShare,[param1]);
      }
public incGameShareView(param1: string): void
      {
         this.addCallToQueue(this.iIncGameShareView,[param1]);
      }
public submitPublicData(param1: string, param2: any, param3: Function = null as any): void
      {
         let _loc4_: string = this.convertDataToString(param2);
         if(_loc4_ == null)
         {
            if(param3 != null)
            {
               param3({
                  "success":false,
                  "this.error":"Data type not supported by submitPublicData()"
               });
            }
            return;
         }
         this.addCallToQueue(this.iSubmitGameSave,["game",param1,_loc4_,param3]);
      }
public submitPublicDataObject(param1: Record<string, any>, param2: Function = null as any): void
      {
         let _loc4_: string = null;
         let _loc3_: Record<string, any> = new Object();
         for (let _loc4_ in param1)
         {
            _loc3_[_loc4_] = this.convertDataToString(param1[_loc4_]);
         }
         this.addCallToQueue(this.iSubmitGameSaveObject,["game",_loc3_,param2]);
      }
public retrievePublicData(param1: Function, param2: string = null as any): void
      {
         if(param2 != null && param2 != "")
         {
            this.addCallToQueue(this.iRetrieveGameSave,["game",param2,param1]);
         }
         else
         {
            this.addCallToQueue(this.iRetrieveGameSaveObject,["game",param1]);
         }
      }
public deletePublicData(param1: string = null as any, param2: Function = null as any): void
      {
         if(param1 != null && param1 != "")
         {
            this.addCallToQueue(this.iDeleteGameSave,["game",param1,param2]);
         }
         else
         {
            this.addCallToQueue(this.iDeleteAllGameSaves,["game",param2]);
         }
      }
public incPublicData(param1: string, param2: number = 1, param3: Function = null as any): void
      {
         this.addCallToQueue(this.iIncGameSave,["game",param1,param2,param3]);
      }
public decPublicData(param1: string, param2: number = 1, param3: Function = null as any): void
      {
         this.addCallToQueue(this.iDecGameSave,["game",param1,param2,param3]);
      }
public submitUserData(param1: string, param2: any, param3: Function = null as any): void
      {
         if(!this.agUser)
         {
            if(param3 != null)
            {
               param3({
                  "success":false,
                  "this.error":"User must be logged in before calling submitUserData()."
               });
            }
            return;
         }
         let _loc4_: string = this.convertDataToString(param2);
         if(_loc4_ == null)
         {
            if(param3 != null)
            {
               param3({
                  "success":false,
                  "this.error":"Data type not supported by submitUserData()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iSubmitGameSave,["user-" + this.agUser.user_id,param1,_loc4_,param3]);
      }
public submitUserDataObject(param1: Record<string, any>, param2: Function = null as any): void
      {
         let _loc4_: string = null;
         if(!this.agUser)
         {
            if(param2 != null)
            {
               param2({
                  "success":false,
                  "this.error":"User must be logged in before calling submitUserDataObject()."
               });
            }
            return;
         }
         let _loc3_: Record<string, any> = new Object();
         for (let _loc4_ in param1)
         {
            _loc3_[_loc4_] = this.convertDataToString(param1[_loc4_]);
         }
         this.addCallToQueue(this.iSubmitGameSaveObject,["user-" + this.agUser.user_id,_loc3_,param2]);
      }
public retrieveUserData(param1: Function, param2: string = null as any): void
      {
         if(!this.agUser)
         {
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "this.error":"User must be logged in before calling retrieveUserData()."
               });
            }
            return;
         }
         if(param2 != null)
         {
            this.addCallToQueue(this.iRetrieveGameSave,["user-" + this.agUser.user_id,param2,param1]);
         }
         else
         {
            this.addCallToQueue(this.iRetrieveGameSaveObject,["user-" + this.agUser.user_id,param1]);
         }
      }
public deleteUserData(param1: string = null as any, param2: Function = null as any): void
      {
         if(!this.agUser)
         {
            if(param2 != null)
            {
               param2({
                  "success":false,
                  "this.error":"User must be logged in before calling deleteUserData()."
               });
            }
            return;
         }
         if(param1 != null)
         {
            this.addCallToQueue(this.iDeleteGameSave,["user-" + this.agUser.user_id,param1,param2]);
         }
         else
         {
            this.addCallToQueue(this.iDeleteAllGameSaves,["user-" + this.agUser.user_id,param2]);
         }
      }
public incUserData(param1: string, param2: number = 1, param3: Function = null as any): void
      {
         if(!this.agUser)
         {
            if(param3 != null)
            {
               param3({
                  "success":false,
                  "this.error":"User must be logged in before calling incUserData()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iIncGameSave,["user-" + this.agUser.user_id,param1,param2,param3]);
      }
public decUserData(param1: string, param2: number = 1, param3: Function = null as any): void
      {
         if(!this.agUser)
         {
            if(param3 != null)
            {
               param3({
                  "success":false,
                  "this.error":"User must be logged in before calling decUserData()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iDecGameSave,["user-" + this.agUser.user_id,param1,param2,param3]);
      }
public containsProfanity(param1: string, param2: Function): void
      {
         this.addCallToQueue(this.iContainsProfanity,[param1,param2]);
      }
public filterProfanity(param1: string, param2: Function): void
      {
         this.addCallToQueue(this.iFilterProfanity,[param1,param2]);
      }
public initAGUI(param1: Record<string, any> = null): void
      {
         this.aguiInitialized = true;
         this.aguiParams = param1;
         if(!this.aguiParams)
         {
            this.aguiParams = new Object();
         }
      }
public isAGUIVisible(): boolean
      {
         if(!this.agui)
         {
            return false;
         }
         return Boolean(this.contains(this.agui) && this.agui.curState != AGUIState.SHARE_NAVI);
      }
public closeAGUI(): void
      {
         this.clearBackground();
         this.addCallToQueue(this.killAGUI);
      }
public showLogin(param1: Function = null as any, param2: any = null): void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param2) && param2 instanceof DisplayObjectContainer)
         {
            param2.addChild(this);
         }
         this.showProgress();
         let _loc3_: Record<string, any> = {"onLoginLogout":param1};
         this.addCallToQueue(this.loadAGUI,[AGUIState.LOGIN,_loc3_]);
      }
public showUserProfile(param1: Function = null as any, param2: any = null): void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param2) && param2 instanceof DisplayObjectContainer)
         {
            param2.addChild(this);
         }
         this.showProgress();
         let _loc3_: Record<string, any> = {"onLoginLogout":param1};
         this.addCallToQueue(this.loadAGUI,[AGUIState.USER_PROFILE,_loc3_]);
      }
public showLoginStatus(param1: number = 0, param2: number = 0, param3: Function = null as any, param4: any = null): void
      {
         if(Boolean(param4) && param4 instanceof DisplayObjectContainer)
         {
            param4.addChild(this);
         }
         if(!this.loginStatus)
         {
            this.loginStatus = new LoginStatus();
         }
         this.loginStatus.x = param1;
         this.loginStatus.y = param2;
         super.addChildAt(this.loginStatus,0);
         this.loginStatusCallback = param3;
         this.updateLoginStatus();
      }
public hideLoginStatus(): void
      {
         if(!this.loginStatus)
         {
            return;
         }
         if(this.contains(this.loginStatus))
         {
            super.removeChild(this.loginStatus);
         }
      }
public showScoreboardSubmit(param1: number, param2: string = "", param3: string = null as any, param4: any[] = null as any, param5: any = null): void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param5) && param5 instanceof DisplayObjectContainer)
         {
            param5.addChild(this);
         }
         this.showProgress();
         if(param4 == null)
         {
            this.addCallToQueue(this.iRetrieveScoreTypes);
         }
         let _loc6_: Record<string, any> = {
            "score":param1,
            "name":param2,
            "scoreType":param3,
            "this.scoreTypes":param4
         };
         this.addCallToQueue(this.loadAGUI,[AGUIState.SCORE_SUBMIT,_loc6_]);
      }
public showScoreboardList(param1: any[] = null as any, param2: string = null as any, param3: any = null): void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param3) && param3 instanceof DisplayObjectContainer)
         {
            param3.addChild(this);
         }
         this.showProgress();
         if(param1 == null)
         {
            this.addCallToQueue(this.iRetrieveScoreTypes);
         }
         let _loc4_: Record<string, any> = {
            "this.scoreTypes":param1,
            "defaultScoreType":param2
         };
         this.addCallToQueue(this.loadAGUI,[AGUIState.SCORE_LIST,_loc4_]);
      }
public showScoreboard(param1: Record<string, any> = null, param2: Record<string, any> = null, param3: any = null): void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param3) && param3 instanceof DisplayObjectContainer)
         {
            param3.addChild(this);
         }
         this.showProgress();
         this.initAGUI(param1);
         let _loc4_: Record<string, any> = {"this.scoreTypes":null};
         if(Boolean(param1))
         {
            if(Boolean(param1.scoreTypes))
            {
               _loc4_.scoreTypes = param1.scoreTypes;
            }
         }
         if(Boolean(param2))
         {
            if(!_loc4_.scoreTypes)
            {
               this.addCallToQueue(this.iRetrieveScoreTypes);
            }
            _loc4_.score = param2.score;
            _loc4_.name = param2.name;
            _loc4_.scoreType = param2.scoreType;
            this.addCallToQueue(this.loadAGUI,[AGUIState.SCORE_SUBMIT,_loc4_]);
         }
         else
         {
            if(!_loc4_.scoreTypes)
            {
               this.addCallToQueue(this.iRetrieveScoreTypes);
            }
            this.addCallToQueue(this.loadAGUI,[AGUIState.SCORE_LIST,_loc4_]);
         }
      }
public showGameShareSubmit(param1: string, param2: string = "", param3: any = null, param4: Function = null as any, param5: any = null): void
      {
         let _loc6_: Bitmap = null;
         this.removeAGUIFromScreen();
         if(Boolean(param5) && param5 instanceof DisplayObjectContainer)
         {
            param5.addChild(this);
         }
         this.showProgress();
         if(Boolean(param3) && param3 instanceof DisplayObject)
         {
            _loc6_ = this.getBitmapFromDisplayObject(param3,1000);
         }
         let _loc7_: Record<string, any> = {
            "data":param1,
            "shareName":param2,
            "thumbnail":_loc6_,
            "onShareClicked":param4
         };
         this.addCallToQueue(this.loadAGUI,[AGUIState.SHARE_SUBMIT,_loc7_]);
      }
public showGameShareList(param1: Function = null as any, param2: any = null): void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param2) && param2 instanceof DisplayObjectContainer)
         {
            param2.addChild(this);
         }
         this.showProgress();
         let _loc3_: Record<string, any> = {"onShareClicked":param1};
         this.addCallToQueue(this.loadAGUI,[AGUIState.SHARE_LIST,_loc3_]);
      }
public showGameShareNavi(param1: number = Infinity, param2: number = Infinity, param3: Function = null as any, param4: any = null): void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param4) && param4 instanceof DisplayObjectContainer)
         {
            param4.addChild(this);
         }
         this.showProgress();
         if(!this.aguiParams)
         {
            this.aguiParams = new Object();
         }
         if(param1 != Number.POSITIVE_INFINITY)
         {
            this.aguiParams.naviX = param1;
         }
         if(param2 != Number.POSITIVE_INFINITY)
         {
            this.aguiParams.naviY = param2;
         }
         let _loc5_: Record<string, any> = {"onShareClicked":param3};
         this.addCallToQueue(this.loadAGUI,[AGUIState.SHARE_NAVI,_loc5_]);
      }
public isConnected(): boolean
      {
         return this.connected;
      }
public isLoggedIn(): boolean
      {
         return Boolean(this.agUser);
      }
public getUserProfile(): Record<string, any>
      {
         return this.getUserData();
      }
public getUserData(): Record<string, any>
      {
         if(!this.agUser)
         {
            return null;
         }
         return this.agUser.toObject();
      }
public getUserName(): string
      {
         if(!this.agUser)
         {
            return null;
         }
         return this.agUser.username;
      }
public getVersion(): string
      {
         let _loc1_: string = this.loaderInfo.url;
         let _loc2_: boolean = _loc1_.lastIndexOf("_debug.swf") != -1;
         return "AGI " + this.VERSION + (_loc2_ ? " debug" : "");
      }
public getAGUIVersion(): string
      {
         if(!this.agui)
         {
            return null;
         }
         return this.agui.getVersion();
      }
public __login(param1: string, param2: string, param3: Function): void
      {
         let _loc4_: ByteArray = new ByteArray();
         _loc4_.writeUTFBytes("1ac240b575462c27da90fed5355917a1");
         let _loc5_: ByteArray = new ByteArray();
         _loc5_.writeUTFBytes(param2);
         let _loc6_: ICipher = Crypto.getCipher("rc4",_loc4_);
         _loc6_.encrypt(_loc5_);
         this.addCallToQueue(this.iLogin,[param1,Base64.Encode(_loc5_),param3]);
         _loc6_.dispose();
      }
private autoLogin(param1: string): void
      {
         this.addCallToQueue(this.iAutoLogin,[param1]);
      }
public logout(param1: Function = null as any): void
      {
         this.addCallToQueue(this.iLogout,[param1]);
      }
public setDebugOutputCallback(param1: Function): void
      {
         this.debugOutputCallback = param1;
         DebugUtil.setDebugCallback(this.debugOutputCallback);
      }
      
      private iConnect(): void
      {
         DebugUtil.out("AGI Services this.connecting ...");
         if(Boolean(this.client))
         {
            this.client.destroy();
            this.client = null;
         }
         this.client = new Client(this.clientDevKey,this.clientGameKey,this.displayRoot,this.onClientError);
         this.client.authenticate(this.authenticationSuccess,this.authenticationFailed);
      }
      
      private iLogin(param1: string, param2: string, param3: Function): void
      {
         DebugUtil.out("Logging in ...");
         this.globalCallback = param3;
         this.client.call("members.login",this.handleLoginResult,param1,param2);
         this.updateLoginStatus(true);
      }
      
      private iAutoLogin(param1: string): void
      {
         DebugUtil.out("Auto logging in ...");
         this.client.call("members.verifyAuthToken",this.handleLoginResult,param1);
         this.updateLoginStatus(true);
      }
      
      private iLogout(param1: Function = null as any): void
      {
         let callback: Function = param1;
         DebugUtil.out("Logging out ...");
         this.agUser = null;
         this.updateLoginStatus();
         DebugUtil.out("Log out successful.");
         this.finishCall();
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onLogin != null && this.aguiParams.onLogin instanceof Function)
               {
                  this.aguiParams.onLogin({
                     "success":true,
                     "loggedIn":false
                  });
               }
            }
            catch (e: any)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
         try
         {
            if(callback != null)
            {
               callback({
                  "success":true,
                  "loggedIn":false
               });
            }
         }
         catch (e: any)
         {
            DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
         }
      }
      
      private iSubmitScore(param1: string, param2: number, param3: string = null as any, param4: Function = null as any, param5: boolean = true): void
      {
         this.globalCallback = param4;
         if(param2 > int.MAX_VALUE)
         {
            DebugUtil.error("Score value instanceof too high to submit. Please make sure the value instanceof lower than " + int.MAX_VALUE + ".");
            this.finishCall();
            this.callGlobalCallback({
               "success":false,
               "this.error":"Score value instanceof too high to submit. Please make sure the value instanceof lower than " + int.MAX_VALUE + "."
            });
            return;
         }
         DebugUtil.out("Submitting score ...");
         this.client.call("highscore.put",this.onHighscorePutResult,param1,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID,param2,this.agUser == null ? null : this.agUser.avatar_url,param3 == null ? null : param3.toLowerCase(),param5);
      }
      
      private iRetrievePublicScores(param1: Function, param2: string = null as any, param3: string = "alltime", param4: boolean = true, param5: number = 1, param6: boolean = false): void
      {
         this.globalCallback = param1;
         DebugUtil.out("Retrieving public scores ...");
         if(param5 < 1)
         {
            param5 = 1;
         }
         this.client.call("highscore.getPublicScores",this.onHighscoreGetResult,param6 ? (Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID) : null,param2 == null ? this.DEFAULT_SCORE_TYPE : param2.toLowerCase(),param3.toLowerCase(),param4,this.MAX_SCORES,param5);
      }
      
      private iRetrieveUserScores(param1: Function, param2: string = null as any, param3: boolean = true, param4: number = 1, param5: boolean = false): void
      {
         this.globalCallback = param1;
         DebugUtil.out("Retrieving user scores ...");
         if(param4 < 1)
         {
            param4 = 1;
         }
         this.client.call("highscore.getUserScores",this.onHighscoreGetResult,this.agUser.user_id,param2 == null ? this.DEFAULT_SCORE_TYPE : param2.toLowerCase(),param3,this.MAX_SCORES,param4);
      }
      
      private iRetrieveFriendScores(param1: Function, param2: string = null as any, param3: boolean = true, param4: number = 1, param5: boolean = false): void
      {
         this.globalCallback = param1;
         DebugUtil.out("Retrieving friend scores ...");
         if(param4 < 1)
         {
            param4 = 1;
         }
         this.client.call("highscore.getFriendScores",this.onHighscoreGetResult,this.agUser.user_id,param2 == null ? this.DEFAULT_SCORE_TYPE : param2.toLowerCase(),param3,this.MAX_SCORES,param4);
      }
      
      private iRetrieveScoreTypes(): void
      {
         DebugUtil.out("Retrieving score types ...");
         if(!this.scoreTypes)
         {
            this.client.call("highscore.getScoreTypes",this.onScoreTypesResult);
         }
         else
         {
            this.finishCall();
         }
      }
      
      private iSubmitGameShare(param1: string, param2: string, param3: Function = null as any, param4: any = null): void
      {
         let _loc6_: ByteArray = null;
         let _loc7_: Bitmap = null;
         let _loc8_: JPGEncoder = null;
         DebugUtil.out("Sharing game data ...");
         if(Boolean(param4) && param4 instanceof DisplayObject)
         {
            _loc7_ = this.getBitmapFromDisplayObject(param4,400);
            _loc8_ = new JPGEncoder(80);
            _loc6_ = _loc8_.encode(_loc7_.bitmapData);
         }
         let _loc5_: string = "#~`" + Compressor.compress(param2);
         this.client.call("gameshare.put",this.onSubmitGameShare,param1,_loc5_,_loc6_,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID);
         this.globalCallback = param3;
      }
      
      private iRetrieveGameShare(param1: string, param2: Function): void
      {
         let obj: Record<string, any> = null;
         let shareId: string = param1;
         let callback: Function = param2;
         if(!shareId || shareId == "")
         {
            this.finishCall();
            obj = {
               "success":false,
               "this.error":"Invalid Share ID"
            };
            try
            {
               if(callback != null)
               {
                  callback(obj);
               }
            }
            catch (e: any)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
            return;
         }
         DebugUtil.out("Retrieving Game Data ...");
         this.globalCallback = callback;
         this.client.call("gameshare.get",this.onRetrieveGameShare,shareId);
      }
      
      private iRetrieveGameShares(param1: string, param2: string, param3: Function, param4: number = 1): void
      {
         DebugUtil.out("Retrieving Game Shares list ...");
         this.globalCallback = param3;
         param1 = param1.toLowerCase();
         param2 = param2.toLowerCase();
         if(param4 < 1)
         {
            param4 = 1;
         }
         this.client.call("gameshare.listBy",this.onRetrieveGameShares,param1,param2,this.MAX_SHARES,param4);
      }
      
      private iRetrieveLatestGameShares(param1: Function, param2: number = 1): void
      {
         DebugUtil.out("Retrieving Latest Game Shares List ...");
         this.globalCallback = param1;
         if(param2 < 1)
         {
            param2 = 1;
         }
         this.client.call("gameshare.listLatest",this.onRetrieveLatestGameShares,this.MAX_SHARES,param2);
      }
      
      private iRetrieveStaffPickedGameShares(param1: Function, param2: number = 1): void
      {
         DebugUtil.out("Retrieving Staff Picked Game Shares list ...");
         this.globalCallback = param1;
         if(param2 < 1)
         {
            param2 = 1;
         }
         this.client.call("gameshare.listStaffPicks",this.onRetrieveStaffPickedGameShares,this.MAX_SHARES,param2);
      }
      
      private iRetrieveUserGameShares(param1: Function, param2: string = "shares", param3: number = 1): void
      {
         let obj: Record<string, any> = null;
         let callback: Function = param1;
         let listMetric: string = param2;
         let pageNumber: number = param3;
         DebugUtil.out("Retrieving User Game Shares list ...");
         this.globalCallback = callback;
         listMetric = listMetric.toLowerCase();
         if(pageNumber < 1)
         {
            pageNumber = 1;
         }
         if(listMetric == AGIShareMetric.SHARES)
         {
            this.client.call("gameshare.createdByUser",this.onRetrieveUserGameShares,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID,this.MAX_SHARES,pageNumber);
         }
         else if(listMetric == AGIShareMetric.LIKES)
         {
            this.client.call("gameshare.likedByUser",this.onRetrieveUserGameShareLikes,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID,this.MAX_SHARES,pageNumber);
         }
         else
         {
            this.finishCall();
            obj = {
               "success":false,
               "this.error":"List Metric instanceof unsupported"
            };
            try
            {
               if(callback != null)
               {
                  callback(obj);
               }
            }
            catch (e: any)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private iRetrieveFriendGameShares(param1: Function, param2: string = "shares", param3: number = 1): void
      {
         let obj: Record<string, any> = null;
         let callback: Function = param1;
         let listMetric: string = param2;
         let pageNumber: number = param3;
         DebugUtil.out("Retrieving Friend Game Shares list ...");
         this.globalCallback = callback;
         listMetric = listMetric.toLowerCase();
         if(pageNumber < 1)
         {
            pageNumber = 1;
         }
         if(listMetric == AGIShareMetric.SHARES)
         {
            this.client.call("gameshare.createdByUsersFriends",this.onRetrieveFriendGameShares,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID,this.MAX_SHARES,pageNumber);
         }
         else if(listMetric == AGIShareMetric.LIKES)
         {
            this.client.call("gameshare.likedByUsersFriends",this.onRetrieveFriendGameShareLikes,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID,this.MAX_SHARES,pageNumber);
         }
         else
         {
            this.finishCall();
            obj = {
               "success":false,
               "this.error":"List Metric instanceof unsupported"
            };
            try
            {
               if(callback != null)
               {
                  callback(obj);
               }
            }
            catch (e: any)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private iRetrieveRandomGameShare(param1: Function): void
      {
         DebugUtil.out("Retrieving Random Game Share ...");
         this.globalCallback = param1;
         this.client.call("gameshare.getRandomShare",this.onRetrieveRandomGameShare);
      }
      
      private iRateGameShare(param1: string, param2: number): void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Rating Game Share ...");
         if(param2 > 1)
         {
            param2 = 1;
         }
         if(param2 < 0)
         {
            param2 = 0;
         }
         this.client.call("gameshare.rate",this.onRateGameShare,param1,param2,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID);
      }
      
      private iUnlikeGameShare(param1: string): void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Unliking Game Share ...");
         this.client.call("gameshare.unlikeGameshare",this.onUnlikeGameShare,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID,param1);
      }
      
      private iIncGameShareView(param1: string): void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("View Game Share ...");
         this.client.call("gameshare.incrementView",this.onIncGameShareView,param1,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID);
      }
      
      private iSubmitGameSave(param1: string, param2: string, param3: string, param4: Function = null as any): void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Submit game data ...");
         this.globalCallback = param4;
         this.client.call("gamesave.put",this.onSubmitGameSave,param1,param2,param3);
      }
      
      private iSubmitGameSaveObject(param1: string, param2: Record<string, any>, param3: Function = null as any): void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Submit game data object ...");
         this.globalCallback = param3;
         this.client.call("gamesave.put",this.onSubmitGameSaveObject,param1,param2);
      }
      
      private iRetrieveGameSave(param1: string, param2: string, param3: Function): void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Retrieve game data ...");
         this.globalCallback = param3;
         this.client.call("gamesave.get",this.onRetrieveGameSave,param1,param2);
      }
      
      private iRetrieveGameSaveObject(param1: string, param2: Function): void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Retrieve game data object ...");
         this.globalCallback = param2;
         this.client.call("gamesave.get",this.onRetrieveGameSaveObject,param1);
      }
      
      private iDeleteGameSave(param1: string, param2: string, param3: Function = null as any): void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Delete game data ...");
         this.globalCallback = param3;
         this.client.call("gamesave.delete",this.onDeleteGameSave,param1,param2);
      }
      
      private iDeleteAllGameSaves(param1: string, param2: Function = null as any): void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Delete all game data ...");
         this.globalCallback = param2;
         this.client.call("gamesave.delete",this.onDeleteAllGameData,param1);
      }
      
      private iIncGameSave(param1: string, param2: string, param3: number = 1, param4: Function = null as any): void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Increment game data ...");
         this.globalCallback = param4;
         this.client.call("gamesave.increment",this.onIncrementGameSave,param1,param2,param3);
      }
      
      private iDecGameSave(param1: string, param2: string, param3: number = 1, param4: Function = null as any): void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Decrement game data ...");
         this.globalCallback = param4;
         this.client.call("gamesave.decrement",this.onDecrementGameSave,param1,param2,param3);
      }
      
      private iContainsProfanity(param1: string, param2: Function): void
      {
         DebugUtil.out("Checking contains profanity ...");
         this.globalCallback = param2;
         this.client.call("utils.containsProfanity",this.onContainsProfanity,param1);
      }
      
      private iFilterProfanity(param1: string, param2: Function): void
      {
         DebugUtil.out("Filtering profanity ...");
         this.globalCallback = param2;
         this.client.call("utils.filterProfanity",this.onFilterProfanity,param1);
      }
      
      private authenticationSuccess(param1: Record<string, any>): void
      {
         DebugUtil.out("AGI Services successfully this.connected.");
         this.connected = true;
         this.connecting = false;
         this.clientGameName = param1.gameName;
         this.clientGameURL = param1.gameUrl;
         this.clientGameURLShort = param1.gameUrlShort;
         this.finishCall();
      }
      
      private authenticationFailed(param1: ClientError): void
      {
         DebugUtil.error("AGI Services failed to connect.","(Error",param1.getCode() + ")");
         if(this.retryCall())
         {
            return;
         }
         this.handleConnectionFailed(param1);
      }
      
      private handleConnectionFailed(param1: ClientError): void
      {
         let obj: Record<string, any>;
         let error: ClientError = param1;
         this.connected = false;
         this.connecting = false;
         this.connectionAttempts = 0;
         obj = {"success":false};
         if(Boolean(this.error))
         {
            obj.error = this.error.toString();
         }
         this.removeProgress();
         this.clearBackground();
         this.clearQueue();
         this.showErrorMessage("Sorry but the Armor Games Services are temporarily unavailable. Please try again soon._filter(Error 1)");
         try
         {
            if(this.clientErrorCallback != null)
            {
               this.clientErrorCallback(obj);
            }
         }
         catch (e: any)
         {
            DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
         }
      }
      
      private onClientError(param1: ClientError): void
      {
         let conCall: Record<string, any> = null;
         let obj: Record<string, any> = null;
         let error: ClientError = param1;
         if(this.error.getCode() == ClientError.CLIENT_TIMEOUT_ERROR)
         {
            if(this.connectionAttempts >= 3)
            {
               DebugUtil.error("AGI Services has failed to connect after " + this.connectionAttempts + " attempts.");
               this.handleConnectionFailed(this.error);
               return;
            }
            DebugUtil.error("Client has timed out. Reconnecting now ...");
            ++this.connectionAttempts;
            this.connected = false;
            this.connecting = true;
            conCall = {
               "func":this.iConnect,
               "params":null
            };
            if(Boolean(this.callQueue))
            {
               this.callQueue.unshift(conCall);
            }
            this.callNext();
            return;
         }
         if(!this.connected)
         {
            this.authenticationFailed(this.error);
            return;
         }
         DebugUtil.error("A call has failed.");
         if(this.retryCall())
         {
            return;
         }
         obj = {"success":false};
         if(Boolean(this.error))
         {
            obj.error = this.error.toString();
         }
         this.finishCall();
         this.callGlobalCallback(obj);
         try
         {
            if(this.clientErrorCallback != null)
            {
               this.clientErrorCallback(obj);
            }
         }
         catch (e: any)
         {
            DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
         }
      }
      
      private handleLoginResult(param1: any): void
      {
         let obj: Record<string, any> = null;
         let data: any = param1;
         DebugUtil.out("Login " + (Boolean(data) && Boolean(data.isOk) ? "successful." : "failed."));
         if(!data || !data.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(Boolean(data.isOk) && Boolean(data.value))
         {
            if(data.toObject != null)
            {
               if(!this.agUser)
               {
                  this.agUser = new AGUser();
               }
               this.agUser.fromObject(data.toObject());
               obj = this.agUser.toObject();
               obj.success = true;
               obj.loggedIn = true;
            }
            else
            {
               obj = {
                  "success":false,
                  "this.error":"Invalid callback value."
               };
            }
         }
         else
         {
            obj = {
               "success":false,
               "this.error":data.status
            };
         }
         this.updateLoginStatus();
         this.finishCall();
         this.callGlobalCallback(obj);
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onLogin != null && this.aguiParams.onLogin instanceof Function)
               {
                  this.aguiParams.onLogin(obj);
               }
            }
            catch (e: any)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private onHighscorePutResult(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Submit score " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
            _loc2_.scoreType = Boolean(_loc2_.scoreType == this.DEFAULT_SCORE_TYPE || _loc2_.scoreType == "") ? null : _loc2_.scoreType;
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onHighscoreGetResult(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Retrieve scores " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
            _loc2_.scoreType = Boolean(_loc2_.scoreType == this.DEFAULT_SCORE_TYPE || _loc2_.scoreType == "") ? null : _loc2_.scoreType;
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onScoreTypesResult(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         let _loc3_: Record<string, any> = null;
         let _loc4_: number = 0;
         DebugUtil.out("Retrieve score types " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         this.scoreTypes = new Array();
         if(Boolean(param1.isOk) && param1.toScoreTypeObject != null)
         {
            _loc2_ = param1.toScoreTypeObject();
            _loc4_ = 0;
            while(_loc4_ < _loc2_.list.length)
            {
               _loc3_ = new Object();
               if(_loc2_.list[_loc4_] == this.DEFAULT_SCORE_TYPE || _loc2_.list[_loc4_] == "")
               {
                  _loc3_.type = null;
               }
               else
               {
                  _loc3_.type = _loc2_.list[_loc4_];
               }
               this.scoreTypes.push(_loc3_);
               _loc4_++;
            }
         }
         else
         {
            this.scoreTypes.push(new Object());
         }
         this.finishCall();
      }
      
      private onSubmitGameShare(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Submit game share " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onRetrieveGameShare(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         let _loc3_: string = null;
         DebugUtil.out("Retrieve game share " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         if(Boolean(_loc2_.data))
         {
            _loc3_ = _loc2_.data.substring(0,3);
            if(_loc3_ == "#~`")
            {
               _loc2_.data = Compressor.uncompress(_loc2_.data.substring(3,_loc2_.data.length));
            }
         }
         if(Boolean(_loc2_.success))
         {
            this.cachedGameShare = _loc2_;
         }
         else
         {
            this.cachedGameShare = null;
         }
         if(Boolean(this.agui) && Boolean(this.cachedGameShare) && Boolean(this.cachedGameShare.success))
         {
            this.agui.updateGameShareLoaded(this.cachedGameShare);
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onRetrieveLatestGameShares(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Retrieve latest game shares " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onRetrieveGameShares(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Retrieve game shares " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onRetrieveStaffPickedGameShares(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Retrieve staff picked game shares " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onRetrieveUserGameShares(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Retrieve user game shares " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
            _loc2_.metric = AGIShareMetric.SHARES;
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onRetrieveUserGameShareLikes(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Retrieve user liked game shares " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
            _loc2_.metric = AGIShareMetric.LIKES;
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onRetrieveFriendGameShares(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Retrieve users friends game shares " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
            _loc2_.metric = AGIShareMetric.SHARES;
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onRetrieveFriendGameShareLikes(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Retrieve users friends liked game shares " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
            _loc2_.metric = AGIShareMetric.LIKES;
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onRetrieveRandomGameShare(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         let _loc3_: string = null;
         DebugUtil.out("Retrieve random game shares " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         if(Boolean(_loc2_.data))
         {
            _loc3_ = _loc2_.data.substring(0,3);
            if(_loc3_ == "#~`")
            {
               _loc2_.data = Compressor.uncompress(_loc2_.data.substring(3,_loc2_.data.length));
            }
         }
         if(Boolean(_loc2_.success))
         {
            this.cachedGameShare = _loc2_;
         }
         else
         {
            this.cachedGameShare = null;
         }
         if(Boolean(this.agui) && Boolean(this.cachedGameShare) && Boolean(this.cachedGameShare.success))
         {
            this.agui.updateGameShareLoaded(this.cachedGameShare);
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onRateGameShare(param1: any): void
      {
         DebugUtil.out("Rate game share " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         this.finishCall();
      }
      
      private onUnlikeGameShare(param1: any): void
      {
         DebugUtil.out("Unlike game share " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         this.finishCall();
      }
      
      private onIncGameShareView(param1: any): void
      {
         DebugUtil.out("View game share " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         this.finishCall();
      }
      
      private onSubmitGameSave(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Submit game data " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onSubmitGameSaveObject(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Submit game data object " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onRetrieveGameSave(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Retrieve game data " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         if(Boolean(_loc2_.success))
         {
            _loc2_.data = this.convertStringToData(_loc2_.data);
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onRetrieveGameSaveObject(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         let _loc3_: Record<string, any> = null;
         let _loc4_: string = null;
         DebugUtil.out("Retrieve game data object " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(Boolean(param1.isOk))
         {
            if(param1.toObject != null)
            {
               _loc2_ = param1.toObject();
               _loc3_ = param1.toObject();
               _loc3_.data = new Object();
               for (let _loc4_ in _loc2_.data)
               {
                  _loc3_.data[_loc4_] = this.convertStringToData(_loc2_.data[_loc4_]);
               }
               _loc2_ = _loc3_;
            }
            else
            {
               _loc2_ = {
                  "success":false,
                  "this.error":"Invalid callback value."
               };
            }
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":param1.status
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onDeleteGameSave(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Delete game data " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onDeleteAllGameData(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Delete all game data " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toObject != null)
         {
            _loc2_ = param1.toObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onIncrementGameSave(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Incremement game data " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(Boolean(param1.isOk))
         {
            if(param1.toObject != null)
            {
               _loc2_ = param1.toObject();
               _loc2_.data = this.convertStringToData(_loc2_.data);
            }
            else
            {
               _loc2_ = {
                  "success":false,
                  "this.error":"Invalid callback value."
               };
            }
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":param1.status
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onDecrementGameSave(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Decrement game data " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(Boolean(param1.isOk))
         {
            if(param1.toObject != null)
            {
               _loc2_ = param1.toObject();
               _loc2_.data = this.convertStringToData(_loc2_.data);
            }
            else
            {
               _loc2_ = {
                  "success":false,
                  "this.error":"Invalid callback value."
               };
            }
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":param1.status
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onContainsProfanity(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Check contains profanity " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toContainsProfanityObject != null)
         {
            _loc2_ = param1.toContainsProfanityObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private onFilterProfanity(param1: any): void
      {
         let _loc2_: Record<string, any> = null;
         DebugUtil.out("Filter profanity " + (Boolean(param1) && Boolean(param1.isOk) ? "successful." : "failed."));
         if(!param1 || !param1.isOk)
         {
            if(this.retryCall())
            {
               return;
            }
         }
         if(param1.toFilterProfanityObject != null)
         {
            _loc2_ = param1.toFilterProfanityObject();
         }
         else
         {
            _loc2_ = {
               "success":false,
               "this.error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private addCallToQueue(param1: Function, param2: any[] = null as any): void
      {
         let _loc4_: Record<string, any> = null;
         if(!this.callQueue)
         {
            return;
         }
         this.removeError();
         let _loc3_: Record<string, any> = {
            "func":param1,
            "params":param2
         };
         this.callQueue.push(_loc3_);
         if(!this.connected && !this.connecting)
         {
            if(!this.ready)
            {
               this.output("AGI Error: Please initialize the AGI by calling init(...) before calling any other method.");
               return;
            }
            _loc4_ = {
               "func":this.iConnect,
               "params":null
            };
            this.callQueue.unshift(_loc4_);
            this.connecting = true;
            this.callNext();
            return;
         }
         if(this.callQueue.length == 1)
         {
            if(!Caller.isCalling(this.callNext))
            {
               this.callNext();
            }
         }
      }
      
      private finishCall(): void
      {
         if(!this.callQueue)
         {
            return;
         }
         if(this.callQueue.length > 0)
         {
            this.callQueue.shift();
         }
         if(this.callQueue.length == 0)
         {
            this.connectionAttempts = 0;
         }
         this.callRetryCounter = 0;
         Caller.removeCall(this.callNext);
         Caller.addCall(100,this.callNext);
      }
      
      private callNext(): void
      {
         let _loc1_: Record<string, any> = null;
         if(!this.callQueue)
         {
            return;
         }
         if(this.callQueue.length > 0)
         {
            _loc1_ = this.callQueue[0];
            if(_loc1_.func != null)
            {
               _loc1_.func.apply(this,_loc1_.params == null ? [] : _loc1_.params);
            }
         }
      }
      
      private retryCall(): boolean
      {
         if(this.callRetryCounter < 3)
         {
            ++this.callRetryCounter;
            DebugUtil.out("Retrying call (count=" + this.callRetryCounter + ")...");
            Caller.removeCall(this.callNext);
            Caller.addCall(1000,this.callNext);
            return true;
         }
         return false;
      }
      
      private clearQueue(): void
      {
         if(!this.callQueue)
         {
            return;
         }
         while(this.callQueue.length > 0)
         {
            this.callQueue.shift();
         }
      }
      
      private callGlobalCallback(param1: Record<string, any>): void
      {
         let obj: Record<string, any> = param1;
         try
         {
            if(this.globalCallback != null)
            {
               this.globalCallback(obj);
            }
         }
         catch (e: any)
         {
            DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
         }
      }
      
      private loadAGUI(param1: string, param2: Record<string, any> = null): void
      {
         this.aguiState = param1;
         if(Boolean(param2))
         {
            this.aguiStateParams = param2;
         }
         else
         {
            this.aguiStateParams = new Object();
         }
         if(!this.aguiParams)
         {
            this.aguiParams = new Object();
         }
         this.aguiInitialized = true;
         if(!this.agui)
         {
            if(!this.aguiLoader)
            {
               DebugUtil.out("Loading AGUI ...");
               this.aguiLoader = new Loader();
               this.aguiLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, this.handleAGUILoaded.bind(this));
               this.aguiLoader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR, this.handleAGUILoadFailed.bind(this));
               this.aguiLoader.contentLoaderInfo.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.handleAGUILoadFailed.bind(this));
               this.aguiLoader.load(new URLRequest(this.agui_url),new LoaderContext(true));
            }
            else
            {
               this.handleAGUILoaded();
            }
         }
         else
         {
            this.showAGUI();
         }
      }
      
      private killAGUI(): void
      {
         this.clearBackground();
         this.restoreFrameRate();
         this.destroyAGUI();
         this.finishCall();
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onClose != null && this.aguiParams.onClose instanceof Function)
               {
                  this.aguiParams.onClose();
               }
            }
            catch (e: any)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private destroyAGUI(): void
      {
         this.aguiStateParams = new Object();
         this.aguiState = "";
         if(Boolean(this.agui))
         {
            if(this.contains(this.agui))
            {
               super.removeChild(this.agui);
            }
            this.agui.destroy();
         }
      }
      
      private removeAGUIFromScreen(): void
      {
         this.clearBackground();
         this.destroyAGUI();
         this.removeProgress();
      }
      
      private updateLoginStatus(param1: boolean = false): void
      {
         if(!this.loginStatus)
         {
            return;
         }
         this.loginStatus.update(this.agUser,param1);
         if(!this.loginStatus.hasEventListener(MouseEvent.CLICK))
         {
            this.loginStatus.addEventListener(MouseEvent.CLICK, this.handleLoginStatusClick.bind(this));
         }
      }
      
      private handleLoginStatusClick(param1: MouseEvent): void
      {
         if(!this.loginStatus)
         {
            return;
         }
         this.showLogin(this.loginStatusCallback,this.displayRoot);
      }
      
      private showErrorMessage(param1: string): void
      {
         this.clearBackground();
         this.removeError();
         if(!this.aguiInitialized || this.closedProgressBar)
         {
            return;
         }
         this.error = new ErrorMessage();
         this.error.close_btn.addEventListener(MouseEvent.CLICK, this.handleErrorClose.bind(this));
         this.error.ok_btn.addEventListener(MouseEvent.CLICK, this.handleErrorClose.bind(this));
         this.error.label_txt.htmlText = HTMLTextUtil.bold(param1);
         super.addChild(this.error);
         if(Boolean(this.aguiParams) && Boolean(this.aguiParams.x) && Boolean(this.aguiParams.y))
         {
            this.error.x = this.aguiParams.x + 175;
            this.error.y = this.aguiParams.y + 100;
         }
         else if(Boolean(stage))
         {
            this.error.x = stage.stageWidth * 0.5;
            this.error.y = stage.stageHeight * 0.5;
         }
         else
         {
            this.error.x = 0;
            this.error.y = 0;
         }
      }
      
      private removeError(): void
      {
         if(Boolean(this.error))
         {
            if(this.contains(this.error))
            {
               super.removeChild(this.error);
            }
            this.error = null;
         }
      }
      
      private handleErrorClose(param1: MouseEvent): void
      {
         let e: MouseEvent = param1;
         this.clearBackground();
         this.removeError();
         this.destroyAGUI();
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onClose != null && this.aguiParams.onClose instanceof Function)
               {
                  this.aguiParams.onClose();
               }
            }
            catch (e: any)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private showProgress(): void
      {
         this.changeFrameRate();
         this.progress = new ProgressBar();
         this.progress.close_btn.addEventListener(MouseEvent.CLICK, this.handleProgressClose.bind(this));
         super.addChild(this.progress);
         if(Boolean(this.aguiParams) && Boolean(this.aguiParams.x) && Boolean(this.aguiParams.y))
         {
            this.progress.x = this.aguiParams.x + 100;
            this.progress.y = this.aguiParams.y + 75;
         }
         else if(Boolean(stage))
         {
            this.progress.x = stage.stageWidth * 0.5;
            this.progress.y = stage.stageHeight * 0.5;
         }
         else
         {
            this.progress.x = 0;
            this.progress.y = 0;
         }
         this.closedProgressBar = false;
         this.darkenBackground();
      }
      
      private removeProgress(): void
      {
         this.restoreFrameRate();
         if(Boolean(this.progress))
         {
            if(this.contains(this.progress))
            {
               super.removeChild(this.progress);
            }
            this.progress = null;
         }
      }
      
      private handleProgressClose(param1: MouseEvent): void
      {
         let e: MouseEvent = param1;
         this.closedProgressBar = true;
         this.removeProgress();
         this.clearBackground();
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onClose != null && this.aguiParams.onClose instanceof Function)
               {
                  this.aguiParams.onClose();
               }
            }
            catch (e: any)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private convertDataToString(param1: any): string
      {
         let _loc2_: string = null;
         if(param1 == null)
         {
            return null;
         }
         if(param1 instanceof Number && isNaN(param1))
         {
            return null;
         }
         if(param1 instanceof Array || param1 instanceof Boolean || param1 instanceof Number || param1 instanceof String || param1 instanceof Object)
         {
            _loc2_ = JSON.encode(param1);
            if(!(param1 instanceof Number) && !(param1 instanceof Boolean))
            {
               _loc2_ = "#" + Compressor.compress(_loc2_);
            }
            return _loc2_;
         }
         return null;
      }
      
      private convertStringToData(param1: string): any
      {
         let _loc2_: string = null;
         if(param1 == "" || param1 == null)
         {
            return null;
         }
         if(param1.charAt(0) == "#")
         {
            _loc2_ = Compressor.uncompress(param1.substring(1,param1.length));
         }
         else
         {
            _loc2_ = param1;
         }
         return JSON.decode(_loc2_);
      }
      
      private darkenBackground(): void
      {
         if(Boolean(this.aguiParams))
         {
            if(this.aguiParams.hasOwnProperty("disableDarkBackground") && Boolean(this.aguiParams.disableDarkBackground))
            {
               return;
            }
         }
         this.clearBackground();
         this.darkBG = new DarkBG();
         this.darkBG.alpha = 0.5;
         this.darkBG.x = 0;
         this.darkBG.y = 0;
         this.darkBG.width = 1000;
         this.darkBG.height = 1000;
         super.addChildAt(this.darkBG,0);
         if(Boolean(this.loginStatus) && this.contains(this.loginStatus))
         {
            super.addChildAt(this.loginStatus,0);
         }
      }
      
      private clearBackground(): void
      {
         if(Boolean(this.darkBG))
         {
            if(this.contains(this.darkBG))
            {
               super.removeChild(this.darkBG);
            }
            this.darkBG = null;
         }
      }
      
      private changeFrameRate(): void
      {
         try
         {
            if(Boolean(stage))
            {
               stage.frameRate = 30;
            }
         }
         catch (e: any)
         {
         }
      }
      
      private restoreFrameRate(): void
      {
         try
         {
            if(Boolean(stage))
            {
               stage.frameRate = this.parentFrameRate;
            }
         }
         catch (e: any)
         {
         }
      }
      
      private getDomain(param1: string): string
      {
         let _loc2_: number = param1.indexOf(":/") + 3;
         let _loc3_: number = param1.indexOf("/",_loc2_);
         let _loc4_: string = param1.substring(_loc2_,_loc3_);
         let _loc5_: number = _loc4_.lastIndexOf(".") - 1;
         let _loc6_: number = _loc4_.lastIndexOf(".",_loc5_) + 1;
         return _loc4_.substring(_loc6_,_loc4_.length);
      }
      
      private getBitmapFromDisplayObject(param1: DisplayObject, param2: number = 1000): Bitmap
      {
         let _loc5_: BitmapData = null;
         let _loc3_: number = param2;
         let _loc4_: number = 1;
         if(param1.width > param1.height)
         {
            _loc3_ = param1.width;
            if(param1.width > 1000)
            {
               _loc4_ = 1000 / param1.width;
               _loc3_ = 1000;
            }
            _loc5_ = new BitmapData(_loc3_,param1.height,false,4294967295);
         }
         else
         {
            _loc3_ = param1.height;
            if(param1.height > 1000)
            {
               _loc4_ = 1000 / param1.height;
               _loc3_ = 1000;
            }
            _loc5_ = new BitmapData(param1.width,_loc3_,false,4294967295);
         }
         _loc5_.draw(param1,new Matrix(_loc4_,0,0,_loc4_),param1.transform.colorTransform,param1.blendMode);
         return new Bitmap(_loc5_);
      }
      
      private output(param1: string): void
      {
         console.log(param1);
         if(this.debugOutputCallback != null)
         {
            this.debugOutputCallback(param1);
         }
      }
      
      private handleAGUILoaded(param1: Event = null as any): void
      {
         DebugUtil.out("AGUI load successful.");
         this.agui = this.aguiLoader.content;
         this.showAGUI();
      }
      
      private showAGUI(): void
      {
         let aguiPos: Point;
         let scale: number;
         let data: Record<string, any>;
         let types: any[] = null;
         if(!this.agui || this.closedProgressBar)
         {
            this.finishCall();
            this.removeProgress();
            this.clearBackground();
            return;
         }
         if(!this.aguiParams)
         {
            this.aguiParams = new Object();
         }
         this.aguiInitialized = true;
         this.removeProgress();
         super.addChild(this.agui);
         this.darkenBackground();
         this.changeFrameRate();
         aguiPos = new Point();
         scale = 1;
         if(this.aguiParams.hasOwnProperty("scale"))
         {
            scale = Number(this.aguiParams.scale);
         }
         if(this.aguiParams.hasOwnProperty("x"))
         {
            aguiPos.x = Number(this.aguiParams.x);
         }
         else if(Boolean(stage))
         {
            aguiPos.x = stage.stageWidth * 0.5 - 250 * scale;
         }
         if(this.aguiParams.hasOwnProperty("y"))
         {
            aguiPos.y = this.aguiParams.y;
         }
         else if(Boolean(stage))
         {
            aguiPos.y = stage.stageHeight * 0.5 - 175 * scale;
         }
         data = new Object();
         data.x = aguiPos.x;
         data.y = aguiPos.y;
         data.scale = scale;
         data.gameName = this.clientGameName;
         data.gameURL = this.clientGameURL;
         data.gameShortURL = this.clientGameURLShort;
         data.iconGraphic = this.aguiParams.iconGraphic;
         if(this.aguiParams.hasOwnProperty("naviX"))
         {
            data.naviX = this.aguiParams.naviX;
         }
         if(this.aguiParams.hasOwnProperty("naviY"))
         {
            data.naviY = this.aguiParams.naviY;
         }
         if(this.aguiParams.hasOwnProperty("autoShowNavi"))
         {
            data.autoShowNavi = this.aguiParams.autoShowNavi;
         }
         data.maxScoresPerPage = this.MAX_SCORES;
         data.maxSharesPerPage = this.MAX_SHARES;
         if(Boolean(this.cachedGameShare))
         {
            data.lastGameShare = this.cachedGameShare;
         }
         data.onClose = this.closeAGUI;
         data.onLoginLogout = this.handleAGUILoginLogout;
         data.onShareClicked = this.handleAGUIShareClicked;
         data.clearBackgroundMethod = this.clearBackground;
         data.darkenBackgroundMethod = this.darkenBackground;
         data.changeFrameRateMethod = this.changeFrameRate;
         data.restoreFrameRateMethod = this.restoreFrameRate;
         data.loginMethod = this.__login;
         data.logoutMethod = this.logout;
         this.agui.init(this,data);
         if(this.aguiStateParams.hasOwnProperty("this.scoreTypes") && this.aguiStateParams.scoreTypes != null)
         {
            types = this.aguiStateParams.scoreTypes;
         }
         else
         {
            types = this.scoreTypes;
         }
         if(this.aguiState == AGUIState.LOGIN || this.aguiState == AGUIState.USER_PROFILE)
         {
            if(Boolean(this.agUser))
            {
               this.agui.showUserProfile(this.agUser.toObject());
            }
            else
            {
               this.agui.showLogin();
            }
         }
         else if(this.aguiState == AGUIState.SCORE_SUBMIT)
         {
            this.agui.showScoreboardSubmit(types,this.aguiStateParams.score,this.aguiStateParams.name,this.aguiStateParams.scoreType);
         }
         else if(this.aguiState == AGUIState.SCORE_LIST)
         {
            this.agui.showScoreboardList(types,this.aguiStateParams.defaultScoreType);
         }
         else if(this.aguiState == AGUIState.SHARE_SUBMIT)
         {
            this.agui.showGameShareSubmit(this.aguiStateParams.shareName,this.aguiStateParams.data,this.aguiStateParams.thumbnail);
         }
         else if(this.aguiState == AGUIState.SHARE_LIST)
         {
            this.agui.showGameShareList();
         }
         else if(this.aguiState == AGUIState.SHARE_NAVI)
         {
            this.agui.showGameShareNavi();
         }
         else
         {
            this.agui.showError("The Armor Games Interface has encountered an this.error. Please try again soon");
         }
         this.finishCall();
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onLoad != null && this.aguiParams.onLoad instanceof Function)
               {
                  this.aguiParams.onLoad();
               }
            }
            catch (e: any)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      protected handleAGUILoginLogout(param1: Record<string, any>): void
      {
         let data: Record<string, any> = param1;
         if(Boolean(this.aguiStateParams))
         {
            try
            {
               if(this.aguiStateParams.onLoginLogout != null && this.aguiStateParams.onLoginLogout instanceof Function)
               {
                  this.aguiStateParams.onLoginLogout(data);
               }
            }
            catch (e: any)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      protected handleAGUIShareClicked(param1: Record<string, any>): void
      {
         let data: Record<string, any> = param1;
         if(Boolean(this.aguiStateParams))
         {
            try
            {
               if(this.aguiStateParams.onShareClicked != null && this.aguiStateParams.onShareClicked instanceof Function)
               {
                  this.aguiStateParams.onShareClicked(data);
               }
            }
            catch (e: any)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private handleAGUILoadFailed(param1: Event): void
      {
         let e: Event = param1;
         DebugUtil.error("AGUI failed to load.");
         this.removeProgress();
         this.finishCall();
         this.showErrorMessage("Sorry but the Armor Games Services are temporarily unavailable. Please try again soon._filter(Error 2)");
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onError != null && this.aguiParams.onError instanceof Function)
               {
                  this.aguiParams.onError();
               }
            }
            catch (e: any)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      public get x(): number
      {
         return 0;
      }
      
      public set x(param1: number)
      {
      }
      
      public get y(): number
      {
         return 0;
      }
      
      public set y(param1: number)
      {
      }
      
      public get width(): number
      {
         return 0;
      }
      
      public set width(param1: number)
      {
      }
      
      public get height(): number
      {
         return 0;
      }
      
      public set height(param1: number)
      {
      }
      
      public get rotation(): number
      {
         return 0;
      }
      
      public set rotation(param1: number)
      {
      }
      
      public get scaleX(): number
      {
         return 1;
      }
      
      public set scaleX(param1: number)
      {
      }
      
      public get scaleY(): number
      {
         return 1;
      }
      
      public set scaleY(param1: number)
      {
      }
      
      public get visible(): boolean
      {
         return true;
      }
      
      public set visible(param1: boolean)
      {
      }
      
      public get alpha(): number
      {
         return 1;
      }
      
      public set alpha(param1: number)
      {
      }
      
      public get transform(): Transform
      {
         return null;
      }
      
      public set transform(param1: Transform)
      {
      }
      
      public get mask(): DisplayObject
      {
         return null;
      }
      
      public set mask(param1: DisplayObject)
      {
      }
      
      public get filters(): any[]
      {
         return [];
      }
      
      public set filters(param1: any[])
      {
      }
      
      public get mouseChildren(): boolean
      {
         return true;
      }
      
      public set mouseChildren(param1: boolean)
      {
      }
      
      public get mouseEnabled(): boolean
      {
         return true;
      }
      
      public set mouseEnabled(param1: boolean)
      {
      }
      
      public startDrag(param1: boolean = false, param2: Rectangle = null as any): void
      {
      }
      
      public get parent(): DisplayObjectContainer
      {
         return this.displayRoot;
      }
      
      public get graphics(): Graphics
      {
         return null;
      }
      
      public addChild(param1: DisplayObject): DisplayObject
      {
         return null;
      }
      
      public addChildAt(param1: DisplayObject, param2: number): DisplayObject
      {
         return null;
      }
      
      public removeChild(param1: DisplayObject): DisplayObject
      {
         return null;
      }
      
      public removeChildAt(param1: number): DisplayObject
      {
         return null;
      }
      
      public getObjectsUnderPoint(param1: Point): any[]
      {
         return [];
      }
      
      public addEventListener(param1: string, param2: Function, param3: boolean = false, param4: number = 0, param5: boolean = false): void
      {
      }
      
      public removeEventListener(param1: string, param2: Function, param3: boolean = false): void
      {
      }
   }
