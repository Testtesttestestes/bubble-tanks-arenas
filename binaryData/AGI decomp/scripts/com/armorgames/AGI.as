package com.armorgames
{
   import com.adobe.serialization.json.*;
   import com.armorgames.common.*;
   import com.armorgames.debug.*;
   import com.armorgames.display.*;
   import com.armorgames.enum.*;
   import com.armorgames.services.*;
   import com.armorgames.services.VO.*;
   import com.armorgames.services.compression.*;
   import com.armorgames.services.images.*;
   import com.hurlant.crypto.*;
   import com.hurlant.crypto.symmetric.*;
   import com.hurlant.crypto.tls.*;
   import com.hurlant.util.*;
   import flash.display.*;
   import flash.events.*;
   import flash.geom.*;
   import flash.net.*;
   import flash.system.*;
   import flash.text.*;
   import flash.utils.*;
   
   public class AGI extends Sprite
   {
      
      private const VERSION:String = "1.9.29";
      
      private const MAX_SCORES:uint = 25;
      
      private const MAX_SHARES:uint = 32;
      
      private const DEFAULT_SCORE_TYPE:String = "[empty]";
      
      private var agui_url:String = "";
      
      private var client:Client;
      
      private var clientDevKey:String = "";
      
      private var clientGameKey:String = "";
      
      private var clientGameName:String = "";
      
      private var clientGameURL:String = "";
      
      private var clientGameURLShort:String = "";
      
      private var agUser:AGUser;
      
      private var ready:Boolean = false;
      
      private var connected:Boolean = false;
      
      private var connecting:Boolean = false;
      
      private var connectionAttempts:int = 0;
      
      private var clientErrorCallback:Function;
      
      private var globalCallback:Function;
      
      private var loginStatusCallback:Function;
      
      private var debugOutputCallback:Function;
      
      private var agui:*;
      
      private var aguiLoader:Loader;
      
      private var aguiParams:Object;
      
      private var aguiState:String = "";
      
      private var aguiStateParams:Object;
      
      private var aguiInitialized:Boolean;
      
      private var scoreTypes:Array;
      
      private var cachedGameShare:Object;
      
      private var loginStatus:LoginStatus;
      
      private var avatarLoader:Loader;
      
      private var progress:MovieClip;
      
      private var error:MovieClip;
      
      private var darkBG:MovieClip;
      
      private var closedProgressBar:Boolean;
      
      private var displayRoot:DisplayObjectContainer;
      
      private var parentFrameRate:uint;
      
      private var callQueue:Array;
      
      private var callRetryCounter:uint;
      
      public function AGI()
      {
         var _loc1_:String = null;
         var _loc2_:Boolean = false;
         var _loc3_:TextField = null;
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
      
      [SecureSWF(rename="false")]
      public function init(param1:String, param2:String, param3:Function = null, param4:Boolean = false) : void
      {
         if(this.ready)
         {
            return;
         }
         if(!stage || !stage.root)
         {
            this.output("AGI Error: AGI requires access to the stage property in order to authenticate. Please add the AGI as a child before calling init().");
            return;
         }
         this.callQueue = new Array();
         this.displayRoot = stage;
         this.agui_url = "";
         var _loc5_:String = unescape(this.loaderInfo.url);
         var _loc6_:Boolean = _loc5_.lastIndexOf("_debug.swf") != -1;
         var _loc7_:Boolean = Boolean(this.getDomain(_loc5_) != "");
         var _loc8_:Array = _loc7_ ? _loc5_.split("?") : new Array();
         var _loc9_:Array = _loc5_.split("/");
         var _loc10_:int = 0;
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
         catch(e:Error)
         {
         }
         this.clientDevKey = param1;
         this.clientGameKey = param2;
         this.clientErrorCallback = param3;
         this.aguiParams = new Object();
         this.aguiInitialized = false;
         this.connectionAttempts = 0;
         var _loc11_:String = this.displayRoot.root.loaderInfo.parameters["auth_token"];
         this.loaderInfo.addEventListener(Event.UNLOAD,this.handleUnload,false,0,true);
         this.ready = true;
         if(Boolean(_loc11_) && _loc11_ != "")
         {
            this.autoLogin(_loc11_);
         }
      }
      
      private function handleUnload(param1:Event) : void
      {
         this.clearBackground();
         this.destroyAGUI();
         this.agui = null;
         if(Boolean(this.aguiLoader))
         {
            this.aguiLoader.contentLoaderInfo.removeEventListener(Event.COMPLETE,this.handleAGUILoaded);
            this.aguiLoader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR,this.handleAGUILoadFailed);
            this.aguiLoader.contentLoaderInfo.removeEventListener(SecurityErrorEvent.SECURITY_ERROR,this.handleAGUILoadFailed);
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
      
      [SecureSWF(rename="false")]
      public function submitScore(param1:String, param2:uint, param3:String = null, param4:Function = null, param5:Boolean = true) : void
      {
         this.addCallToQueue(this.iSubmitScore,[param1,param2,param3,param4,param5]);
      }
      
      [SecureSWF(rename="false")]
      public function retrieveScores(param1:Function, param2:String = null, param3:String = "alltime", param4:Boolean = true) : void
      {
         this.addCallToQueue(this.iRetrievePublicScores,[param1,param2,param3,param4,1,false]);
      }
      
      [SecureSWF(rename="false")]
      public function retrievePublicScores(param1:Function, param2:String = null, param3:String = "alltime", param4:Boolean = true, param5:int = 1, param6:Boolean = false) : void
      {
         this.addCallToQueue(this.iRetrievePublicScores,[param1,param2,param3,param4,param5,param6]);
      }
      
      [SecureSWF(rename="false")]
      public function retrieveUserScores(param1:Function, param2:String = null, param3:Boolean = true, param4:int = 1) : void
      {
         if(!this.agUser)
         {
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "error":"User must be logged in before calling retrieveUserScores()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iRetrieveUserScores,[param1,param2,param3,param4]);
      }
      
      [SecureSWF(rename="false")]
      public function retrieveFriendScores(param1:Function, param2:String = null, param3:Boolean = true, param4:int = 1) : void
      {
         if(!this.agUser)
         {
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "error":"User must be logged in before calling retrieveFriendScores()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iRetrieveFriendScores,[param1,param2,param3,param4]);
      }
      
      [SecureSWF(rename="false")]
      public function shareGameData(param1:String, param2:String, param3:Function = null, param4:* = null) : void
      {
         this.addCallToQueue(this.iSubmitGameShare,[param1,param2,param3,param4]);
      }
      
      [SecureSWF(rename="false")]
      public function submitGameShare(param1:String, param2:String, param3:Function = null, param4:* = null) : void
      {
         this.addCallToQueue(this.iSubmitGameShare,[param1,param2,param3,param4]);
      }
      
      [SecureSWF(rename="false")]
      public function retrieveGameData(param1:Function) : void
      {
         this.isComingFromShareURL(param1);
      }
      
      [SecureSWF(rename="false")]
      public function isComingFromShareURL(param1:Function) : void
      {
         var _loc3_:String = null;
         var _loc4_:String = null;
         if(!this.displayRoot)
         {
            _loc3_ = "AGI Error: AGI requires access to the stage property in order retrieve game data. Please add the AGI as a child to your document class before calling isComingFromShareURL().";
            this.output(_loc3_);
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "error":_loc3_
               });
            }
            return;
         }
         var _loc2_:String = this.displayRoot.root.loaderInfo.parameters["ag_data_id"];
         if(!_loc2_ || _loc2_ == "")
         {
            _loc4_ = "Game is not being played from a short url, so there is no game data to retrieve.";
            DebugUtil.out(_loc4_);
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "error":_loc4_
               });
            }
            return;
         }
         this.addCallToQueue(this.iRetrieveGameShare,[_loc2_,param1]);
         this.addCallToQueue(this.iIncGameShareView,[_loc2_]);
      }
      
      [SecureSWF(rename="false")]
      public function retrieveGameShare(param1:String, param2:Function) : void
      {
         this.addCallToQueue(this.iRetrieveGameShare,[param1,param2]);
      }
      
      [SecureSWF(rename="false")]
      public function retrieveGameShares(param1:String, param2:String, param3:Function, param4:int = 1) : void
      {
         this.addCallToQueue(this.iRetrieveGameShares,[param1,param2,param3,param4]);
      }
      
      [SecureSWF(rename="false")]
      public function retrieveLatestGameShares(param1:Function, param2:int = 1) : void
      {
         this.addCallToQueue(this.iRetrieveLatestGameShares,[param1,param2]);
      }
      
      [SecureSWF(rename="false")]
      public function retrieveStaffPickedGameShares(param1:Function, param2:int = 1) : void
      {
         this.addCallToQueue(this.iRetrieveStaffPickedGameShares,[param1,param2]);
      }
      
      [SecureSWF(rename="false")]
      public function retrieveUserGameShares(param1:Function, param2:String = "shares", param3:int = 1) : void
      {
         if(!this.agUser)
         {
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "error":"User must be logged in before calling retrieveUserGameShares()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iRetrieveUserGameShares,[param1,param2,param3]);
      }
      
      [SecureSWF(rename="false")]
      public function retrieveFriendGameShares(param1:Function, param2:String = "shares", param3:int = 1) : void
      {
         if(!this.agUser)
         {
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "error":"User must be logged in before calling retrieveFriendGameShares()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iRetrieveFriendGameShares,[param1,param2,param3]);
      }
      
      [SecureSWF(rename="false")]
      public function retrieveRandomGameShare(param1:Function) : void
      {
         this.addCallToQueue(this.iRetrieveRandomGameShare,[param1]);
      }
      
      [SecureSWF(rename="false")]
      public function rateGameShare(param1:String, param2:Number) : void
      {
         this.addCallToQueue(this.iRateGameShare,[param1,param2]);
      }
      
      [SecureSWF(rename="false")]
      public function likeGameShare(param1:String) : void
      {
         this.addCallToQueue(this.iRateGameShare,[param1,1]);
      }
      
      [SecureSWF(rename="false")]
      public function unlikeGameShare(param1:String) : void
      {
         this.addCallToQueue(this.iUnlikeGameShare,[param1]);
      }
      
      [SecureSWF(rename="false")]
      public function incGameShareView(param1:String) : void
      {
         this.addCallToQueue(this.iIncGameShareView,[param1]);
      }
      
      [SecureSWF(rename="false")]
      public function submitPublicData(param1:String, param2:*, param3:Function = null) : void
      {
         var _loc4_:String = this.convertDataToString(param2);
         if(_loc4_ == null)
         {
            if(param3 != null)
            {
               param3({
                  "success":false,
                  "error":"Data type not supported by submitPublicData()"
               });
            }
            return;
         }
         this.addCallToQueue(this.iSubmitGameSave,["game",param1,_loc4_,param3]);
      }
      
      [SecureSWF(rename="false")]
      public function submitPublicDataObject(param1:Object, param2:Function = null) : void
      {
         var _loc4_:String = null;
         var _loc3_:Object = new Object();
         for(_loc4_ in param1)
         {
            _loc3_[_loc4_] = this.convertDataToString(param1[_loc4_]);
         }
         this.addCallToQueue(this.iSubmitGameSaveObject,["game",_loc3_,param2]);
      }
      
      [SecureSWF(rename="false")]
      public function retrievePublicData(param1:Function, param2:String = null) : void
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
      
      [SecureSWF(rename="false")]
      public function deletePublicData(param1:String = null, param2:Function = null) : void
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
      
      [SecureSWF(rename="false")]
      public function incPublicData(param1:String, param2:int = 1, param3:Function = null) : void
      {
         this.addCallToQueue(this.iIncGameSave,["game",param1,param2,param3]);
      }
      
      [SecureSWF(rename="false")]
      public function decPublicData(param1:String, param2:int = 1, param3:Function = null) : void
      {
         this.addCallToQueue(this.iDecGameSave,["game",param1,param2,param3]);
      }
      
      [SecureSWF(rename="false")]
      public function submitUserData(param1:String, param2:*, param3:Function = null) : void
      {
         if(!this.agUser)
         {
            if(param3 != null)
            {
               param3({
                  "success":false,
                  "error":"User must be logged in before calling submitUserData()."
               });
            }
            return;
         }
         var _loc4_:String = this.convertDataToString(param2);
         if(_loc4_ == null)
         {
            if(param3 != null)
            {
               param3({
                  "success":false,
                  "error":"Data type not supported by submitUserData()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iSubmitGameSave,["user-" + this.agUser.user_id,param1,_loc4_,param3]);
      }
      
      [SecureSWF(rename="false")]
      public function submitUserDataObject(param1:Object, param2:Function = null) : void
      {
         var _loc4_:String = null;
         if(!this.agUser)
         {
            if(param2 != null)
            {
               param2({
                  "success":false,
                  "error":"User must be logged in before calling submitUserDataObject()."
               });
            }
            return;
         }
         var _loc3_:Object = new Object();
         for(_loc4_ in param1)
         {
            _loc3_[_loc4_] = this.convertDataToString(param1[_loc4_]);
         }
         this.addCallToQueue(this.iSubmitGameSaveObject,["user-" + this.agUser.user_id,_loc3_,param2]);
      }
      
      [SecureSWF(rename="false")]
      public function retrieveUserData(param1:Function, param2:String = null) : void
      {
         if(!this.agUser)
         {
            if(param1 != null)
            {
               param1({
                  "success":false,
                  "error":"User must be logged in before calling retrieveUserData()."
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
      
      [SecureSWF(rename="false")]
      public function deleteUserData(param1:String = null, param2:Function = null) : void
      {
         if(!this.agUser)
         {
            if(param2 != null)
            {
               param2({
                  "success":false,
                  "error":"User must be logged in before calling deleteUserData()."
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
      
      [SecureSWF(rename="false")]
      public function incUserData(param1:String, param2:int = 1, param3:Function = null) : void
      {
         if(!this.agUser)
         {
            if(param3 != null)
            {
               param3({
                  "success":false,
                  "error":"User must be logged in before calling incUserData()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iIncGameSave,["user-" + this.agUser.user_id,param1,param2,param3]);
      }
      
      [SecureSWF(rename="false")]
      public function decUserData(param1:String, param2:int = 1, param3:Function = null) : void
      {
         if(!this.agUser)
         {
            if(param3 != null)
            {
               param3({
                  "success":false,
                  "error":"User must be logged in before calling decUserData()."
               });
            }
            return;
         }
         this.addCallToQueue(this.iDecGameSave,["user-" + this.agUser.user_id,param1,param2,param3]);
      }
      
      [SecureSWF(rename="false")]
      public function containsProfanity(param1:String, param2:Function) : void
      {
         this.addCallToQueue(this.iContainsProfanity,[param1,param2]);
      }
      
      [SecureSWF(rename="false")]
      public function filterProfanity(param1:String, param2:Function) : void
      {
         this.addCallToQueue(this.iFilterProfanity,[param1,param2]);
      }
      
      [SecureSWF(rename="false")]
      public function initAGUI(param1:Object = null) : void
      {
         this.aguiInitialized = true;
         this.aguiParams = param1;
         if(!this.aguiParams)
         {
            this.aguiParams = new Object();
         }
      }
      
      [SecureSWF(rename="false")]
      public function isAGUIVisible() : Boolean
      {
         if(!this.agui)
         {
            return false;
         }
         return Boolean(contains(this.agui) && this.agui.curState != AGUIState.SHARE_NAVI);
      }
      
      [SecureSWF(rename="false")]
      public function closeAGUI() : void
      {
         this.clearBackground();
         this.addCallToQueue(this.killAGUI);
      }
      
      [SecureSWF(rename="false")]
      public function showLogin(param1:Function = null, param2:* = null) : void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param2) && param2 is DisplayObjectContainer)
         {
            param2.addChild(this);
         }
         this.showProgress();
         var _loc3_:Object = {"onLoginLogout":param1};
         this.addCallToQueue(this.loadAGUI,[AGUIState.LOGIN,_loc3_]);
      }
      
      [SecureSWF(rename="false")]
      public function showUserProfile(param1:Function = null, param2:* = null) : void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param2) && param2 is DisplayObjectContainer)
         {
            param2.addChild(this);
         }
         this.showProgress();
         var _loc3_:Object = {"onLoginLogout":param1};
         this.addCallToQueue(this.loadAGUI,[AGUIState.USER_PROFILE,_loc3_]);
      }
      
      [SecureSWF(rename="false")]
      public function showLoginStatus(param1:Number = 0, param2:Number = 0, param3:Function = null, param4:* = null) : void
      {
         if(Boolean(param4) && param4 is DisplayObjectContainer)
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
      
      [SecureSWF(rename="false")]
      public function hideLoginStatus() : void
      {
         if(!this.loginStatus)
         {
            return;
         }
         if(contains(this.loginStatus))
         {
            super.removeChild(this.loginStatus);
         }
      }
      
      [SecureSWF(rename="false")]
      public function showScoreboardSubmit(param1:uint, param2:String = "", param3:String = null, param4:Array = null, param5:* = null) : void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param5) && param5 is DisplayObjectContainer)
         {
            param5.addChild(this);
         }
         this.showProgress();
         if(param4 == null)
         {
            this.addCallToQueue(this.iRetrieveScoreTypes);
         }
         var _loc6_:Object = {
            "score":param1,
            "name":param2,
            "scoreType":param3,
            "scoreTypes":param4
         };
         this.addCallToQueue(this.loadAGUI,[AGUIState.SCORE_SUBMIT,_loc6_]);
      }
      
      [SecureSWF(rename="false")]
      public function showScoreboardList(param1:Array = null, param2:String = null, param3:* = null) : void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param3) && param3 is DisplayObjectContainer)
         {
            param3.addChild(this);
         }
         this.showProgress();
         if(param1 == null)
         {
            this.addCallToQueue(this.iRetrieveScoreTypes);
         }
         var _loc4_:Object = {
            "scoreTypes":param1,
            "defaultScoreType":param2
         };
         this.addCallToQueue(this.loadAGUI,[AGUIState.SCORE_LIST,_loc4_]);
      }
      
      [SecureSWF(rename="false")]
      public function showScoreboard(param1:Object = null, param2:Object = null, param3:* = null) : void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param3) && param3 is DisplayObjectContainer)
         {
            param3.addChild(this);
         }
         this.showProgress();
         this.initAGUI(param1);
         var _loc4_:Object = {"scoreTypes":null};
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
      
      [SecureSWF(rename="false")]
      public function showGameShareSubmit(param1:String, param2:String = "", param3:* = null, param4:Function = null, param5:* = null) : void
      {
         var _loc6_:Bitmap = null;
         this.removeAGUIFromScreen();
         if(Boolean(param5) && param5 is DisplayObjectContainer)
         {
            param5.addChild(this);
         }
         this.showProgress();
         if(Boolean(param3) && param3 is DisplayObject)
         {
            _loc6_ = this.getBitmapFromDisplayObject(param3,1000);
         }
         var _loc7_:Object = {
            "data":param1,
            "shareName":param2,
            "thumbnail":_loc6_,
            "onShareClicked":param4
         };
         this.addCallToQueue(this.loadAGUI,[AGUIState.SHARE_SUBMIT,_loc7_]);
      }
      
      [SecureSWF(rename="false")]
      public function showGameShareList(param1:Function = null, param2:* = null) : void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param2) && param2 is DisplayObjectContainer)
         {
            param2.addChild(this);
         }
         this.showProgress();
         var _loc3_:Object = {"onShareClicked":param1};
         this.addCallToQueue(this.loadAGUI,[AGUIState.SHARE_LIST,_loc3_]);
      }
      
      [SecureSWF(rename="false")]
      public function showGameShareNavi(param1:Number = Infinity, param2:Number = Infinity, param3:Function = null, param4:* = null) : void
      {
         this.removeAGUIFromScreen();
         if(Boolean(param4) && param4 is DisplayObjectContainer)
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
         var _loc5_:Object = {"onShareClicked":param3};
         this.addCallToQueue(this.loadAGUI,[AGUIState.SHARE_NAVI,_loc5_]);
      }
      
      [SecureSWF(rename="false")]
      public function isConnected() : Boolean
      {
         return this.connected;
      }
      
      [SecureSWF(rename="false")]
      public function isLoggedIn() : Boolean
      {
         return Boolean(this.agUser);
      }
      
      [SecureSWF(rename="false")]
      public function getUserProfile() : Object
      {
         return this.getUserData();
      }
      
      [SecureSWF(rename="false")]
      public function getUserData() : Object
      {
         if(!this.agUser)
         {
            return null;
         }
         return this.agUser.toObject();
      }
      
      [SecureSWF(rename="false")]
      public function getUserName() : String
      {
         if(!this.agUser)
         {
            return null;
         }
         return this.agUser.username;
      }
      
      [SecureSWF(rename="false")]
      public function getVersion() : String
      {
         var _loc1_:String = this.loaderInfo.url;
         var _loc2_:Boolean = _loc1_.lastIndexOf("_debug.swf") != -1;
         return "AGI " + this.VERSION + (_loc2_ ? " debug" : "");
      }
      
      [SecureSWF(rename="false")]
      public function getAGUIVersion() : String
      {
         if(!this.agui)
         {
            return null;
         }
         return this.agui.getVersion();
      }
      
      [SecureSWF(rename="false")]
      public function __login(param1:String, param2:String, param3:Function) : void
      {
         var _loc4_:ByteArray = new ByteArray();
         _loc4_.writeUTFBytes("1ac240b575462c27da90fed5355917a1");
         var _loc5_:ByteArray = new ByteArray();
         _loc5_.writeUTFBytes(param2);
         var _loc6_:ICipher = Crypto.getCipher("rc4",_loc4_);
         _loc6_.encrypt(_loc5_);
         this.addCallToQueue(this.iLogin,[param1,Base64.Encode(_loc5_),param3]);
         _loc6_.dispose();
      }
      
      [SecureSWF(rename="false")]
      private function autoLogin(param1:String) : void
      {
         this.addCallToQueue(this.iAutoLogin,[param1]);
      }
      
      [SecureSWF(rename="false")]
      public function logout(param1:Function = null) : void
      {
         this.addCallToQueue(this.iLogout,[param1]);
      }
      
      [SecureSWF(rename="false")]
      public function setDebugOutputCallback(param1:Function) : void
      {
         this.debugOutputCallback = param1;
         DebugUtil.setDebugCallback(this.debugOutputCallback);
      }
      
      private function iConnect() : void
      {
         DebugUtil.out("AGI Services connecting ...");
         if(Boolean(this.client))
         {
            this.client.destroy();
            this.client = null;
         }
         this.client = new Client(this.clientDevKey,this.clientGameKey,this.displayRoot,this.onClientError);
         this.client.authenticate(this.authenticationSuccess,this.authenticationFailed);
      }
      
      private function iLogin(param1:String, param2:String, param3:Function) : void
      {
         DebugUtil.out("Logging in ...");
         this.globalCallback = param3;
         this.client.call("members.login",this.handleLoginResult,param1,param2);
         this.updateLoginStatus(true);
      }
      
      private function iAutoLogin(param1:String) : void
      {
         DebugUtil.out("Auto logging in ...");
         this.client.call("members.verifyAuthToken",this.handleLoginResult,param1);
         this.updateLoginStatus(true);
      }
      
      private function iLogout(param1:Function = null) : void
      {
         var callback:Function = param1;
         DebugUtil.out("Logging out ...");
         this.agUser = null;
         this.updateLoginStatus();
         DebugUtil.out("Log out successful.");
         this.finishCall();
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onLogin != null && this.aguiParams.onLogin is Function)
               {
                  this.aguiParams.onLogin({
                     "success":true,
                     "loggedIn":false
                  });
               }
            }
            catch(e:Error)
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
         catch(e:Error)
         {
            DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
         }
      }
      
      private function iSubmitScore(param1:String, param2:uint, param3:String = null, param4:Function = null, param5:Boolean = true) : void
      {
         this.globalCallback = param4;
         if(param2 > int.MAX_VALUE)
         {
            DebugUtil.error("Score value is too high to submit. Please make sure the value is lower than " + int.MAX_VALUE + ".");
            this.finishCall();
            this.callGlobalCallback({
               "success":false,
               "error":"Score value is too high to submit. Please make sure the value is lower than " + int.MAX_VALUE + "."
            });
            return;
         }
         DebugUtil.out("Submitting score ...");
         this.client.call("highscore.put",this.onHighscorePutResult,param1,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID,param2,this.agUser == null ? null : this.agUser.avatar_url,param3 == null ? null : param3.toLowerCase(),param5);
      }
      
      private function iRetrievePublicScores(param1:Function, param2:String = null, param3:String = "alltime", param4:Boolean = true, param5:int = 1, param6:Boolean = false) : void
      {
         this.globalCallback = param1;
         DebugUtil.out("Retrieving public scores ...");
         if(param5 < 1)
         {
            param5 = 1;
         }
         this.client.call("highscore.getPublicScores",this.onHighscoreGetResult,param6 ? (Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID) : null,param2 == null ? this.DEFAULT_SCORE_TYPE : param2.toLowerCase(),param3.toLowerCase(),param4,this.MAX_SCORES,param5);
      }
      
      private function iRetrieveUserScores(param1:Function, param2:String = null, param3:Boolean = true, param4:int = 1, param5:Boolean = false) : void
      {
         this.globalCallback = param1;
         DebugUtil.out("Retrieving user scores ...");
         if(param4 < 1)
         {
            param4 = 1;
         }
         this.client.call("highscore.getUserScores",this.onHighscoreGetResult,this.agUser.user_id,param2 == null ? this.DEFAULT_SCORE_TYPE : param2.toLowerCase(),param3,this.MAX_SCORES,param4);
      }
      
      private function iRetrieveFriendScores(param1:Function, param2:String = null, param3:Boolean = true, param4:int = 1, param5:Boolean = false) : void
      {
         this.globalCallback = param1;
         DebugUtil.out("Retrieving friend scores ...");
         if(param4 < 1)
         {
            param4 = 1;
         }
         this.client.call("highscore.getFriendScores",this.onHighscoreGetResult,this.agUser.user_id,param2 == null ? this.DEFAULT_SCORE_TYPE : param2.toLowerCase(),param3,this.MAX_SCORES,param4);
      }
      
      private function iRetrieveScoreTypes() : void
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
      
      private function iSubmitGameShare(param1:String, param2:String, param3:Function = null, param4:* = null) : void
      {
         var _loc6_:ByteArray = null;
         var _loc7_:Bitmap = null;
         var _loc8_:JPGEncoder = null;
         DebugUtil.out("Sharing game data ...");
         if(Boolean(param4) && param4 is DisplayObject)
         {
            _loc7_ = this.getBitmapFromDisplayObject(param4,400);
            _loc8_ = new JPGEncoder(80);
            _loc6_ = _loc8_.encode(_loc7_.bitmapData);
         }
         var _loc5_:String = "#~`" + Compressor.compress(param2);
         this.client.call("gameshare.put",this.onSubmitGameShare,param1,_loc5_,_loc6_,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID);
         this.globalCallback = param3;
      }
      
      private function iRetrieveGameShare(param1:String, param2:Function) : void
      {
         var obj:Object = null;
         var shareId:String = param1;
         var callback:Function = param2;
         if(!shareId || shareId == "")
         {
            this.finishCall();
            obj = {
               "success":false,
               "error":"Invalid Share ID"
            };
            try
            {
               if(callback != null)
               {
                  callback(obj);
               }
            }
            catch(e:Error)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
            return;
         }
         DebugUtil.out("Retrieving Game Data ...");
         this.globalCallback = callback;
         this.client.call("gameshare.get",this.onRetrieveGameShare,shareId);
      }
      
      private function iRetrieveGameShares(param1:String, param2:String, param3:Function, param4:int = 1) : void
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
      
      private function iRetrieveLatestGameShares(param1:Function, param2:int = 1) : void
      {
         DebugUtil.out("Retrieving Latest Game Shares List ...");
         this.globalCallback = param1;
         if(param2 < 1)
         {
            param2 = 1;
         }
         this.client.call("gameshare.listLatest",this.onRetrieveLatestGameShares,this.MAX_SHARES,param2);
      }
      
      private function iRetrieveStaffPickedGameShares(param1:Function, param2:int = 1) : void
      {
         DebugUtil.out("Retrieving Staff Picked Game Shares list ...");
         this.globalCallback = param1;
         if(param2 < 1)
         {
            param2 = 1;
         }
         this.client.call("gameshare.listStaffPicks",this.onRetrieveStaffPickedGameShares,this.MAX_SHARES,param2);
      }
      
      private function iRetrieveUserGameShares(param1:Function, param2:String = "shares", param3:int = 1) : void
      {
         var obj:Object = null;
         var callback:Function = param1;
         var listMetric:String = param2;
         var pageNumber:int = param3;
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
               "error":"List Metric is unsupported"
            };
            try
            {
               if(callback != null)
               {
                  callback(obj);
               }
            }
            catch(e:Error)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private function iRetrieveFriendGameShares(param1:Function, param2:String = "shares", param3:int = 1) : void
      {
         var obj:Object = null;
         var callback:Function = param1;
         var listMetric:String = param2;
         var pageNumber:int = param3;
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
               "error":"List Metric is unsupported"
            };
            try
            {
               if(callback != null)
               {
                  callback(obj);
               }
            }
            catch(e:Error)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private function iRetrieveRandomGameShare(param1:Function) : void
      {
         DebugUtil.out("Retrieving Random Game Share ...");
         this.globalCallback = param1;
         this.client.call("gameshare.getRandomShare",this.onRetrieveRandomGameShare);
      }
      
      private function iRateGameShare(param1:String, param2:Number) : void
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
      
      private function iUnlikeGameShare(param1:String) : void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Unliking Game Share ...");
         this.client.call("gameshare.unlikeGameshare",this.onUnlikeGameShare,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID,param1);
      }
      
      private function iIncGameShareView(param1:String) : void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("View Game Share ...");
         this.client.call("gameshare.incrementView",this.onIncGameShareView,param1,Boolean(this.agUser) ? this.agUser.user_id : this.client.clientID);
      }
      
      private function iSubmitGameSave(param1:String, param2:String, param3:String, param4:Function = null) : void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Submit game data ...");
         this.globalCallback = param4;
         this.client.call("gamesave.put",this.onSubmitGameSave,param1,param2,param3);
      }
      
      private function iSubmitGameSaveObject(param1:String, param2:Object, param3:Function = null) : void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Submit game data object ...");
         this.globalCallback = param3;
         this.client.call("gamesave.put",this.onSubmitGameSaveObject,param1,param2);
      }
      
      private function iRetrieveGameSave(param1:String, param2:String, param3:Function) : void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Retrieve game data ...");
         this.globalCallback = param3;
         this.client.call("gamesave.get",this.onRetrieveGameSave,param1,param2);
      }
      
      private function iRetrieveGameSaveObject(param1:String, param2:Function) : void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Retrieve game data object ...");
         this.globalCallback = param2;
         this.client.call("gamesave.get",this.onRetrieveGameSaveObject,param1);
      }
      
      private function iDeleteGameSave(param1:String, param2:String, param3:Function = null) : void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Delete game data ...");
         this.globalCallback = param3;
         this.client.call("gamesave.delete",this.onDeleteGameSave,param1,param2);
      }
      
      private function iDeleteAllGameSaves(param1:String, param2:Function = null) : void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Delete all game data ...");
         this.globalCallback = param2;
         this.client.call("gamesave.delete",this.onDeleteAllGameData,param1);
      }
      
      private function iIncGameSave(param1:String, param2:String, param3:int = 1, param4:Function = null) : void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Increment game data ...");
         this.globalCallback = param4;
         this.client.call("gamesave.increment",this.onIncrementGameSave,param1,param2,param3);
      }
      
      private function iDecGameSave(param1:String, param2:String, param3:int = 1, param4:Function = null) : void
      {
         if(!param1 || param1 == "")
         {
            return;
         }
         DebugUtil.out("Decrement game data ...");
         this.globalCallback = param4;
         this.client.call("gamesave.decrement",this.onDecrementGameSave,param1,param2,param3);
      }
      
      private function iContainsProfanity(param1:String, param2:Function) : void
      {
         DebugUtil.out("Checking contains profanity ...");
         this.globalCallback = param2;
         this.client.call("utils.containsProfanity",this.onContainsProfanity,param1);
      }
      
      private function iFilterProfanity(param1:String, param2:Function) : void
      {
         DebugUtil.out("Filtering profanity ...");
         this.globalCallback = param2;
         this.client.call("utils.filterProfanity",this.onFilterProfanity,param1);
      }
      
      private function authenticationSuccess(param1:Object) : void
      {
         DebugUtil.out("AGI Services successfully connected.");
         this.connected = true;
         this.connecting = false;
         this.clientGameName = param1.gameName;
         this.clientGameURL = param1.gameUrl;
         this.clientGameURLShort = param1.gameUrlShort;
         this.finishCall();
      }
      
      private function authenticationFailed(param1:ClientError) : void
      {
         DebugUtil.error("AGI Services failed to connect.","(Error",param1.getCode() + ")");
         if(this.retryCall())
         {
            return;
         }
         this.handleConnectionFailed(param1);
      }
      
      private function handleConnectionFailed(param1:ClientError) : void
      {
         var obj:Object;
         var error:ClientError = param1;
         this.connected = false;
         this.connecting = false;
         this.connectionAttempts = 0;
         obj = {"success":false};
         if(Boolean(error))
         {
            obj.error = error.toString();
         }
         this.removeProgress();
         this.clearBackground();
         this.clearQueue();
         this.showErrorMessage("Sorry but the Armor Games Services are temporarily unavailable. Please try again soon. (Error 1)");
         try
         {
            if(this.clientErrorCallback != null)
            {
               this.clientErrorCallback(obj);
            }
         }
         catch(e:Error)
         {
            DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
         }
      }
      
      private function onClientError(param1:ClientError) : void
      {
         var conCall:Object = null;
         var obj:Object = null;
         var error:ClientError = param1;
         if(error.getCode() == ClientError.CLIENT_TIMEOUT_ERROR)
         {
            if(this.connectionAttempts >= 3)
            {
               DebugUtil.error("AGI Services has failed to connect after " + this.connectionAttempts + " attempts.");
               this.handleConnectionFailed(error);
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
            this.authenticationFailed(error);
            return;
         }
         DebugUtil.error("A call has failed.");
         if(this.retryCall())
         {
            return;
         }
         obj = {"success":false};
         if(Boolean(error))
         {
            obj.error = error.toString();
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
         catch(e:Error)
         {
            DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
         }
      }
      
      private function handleLoginResult(param1:*) : void
      {
         var obj:Object = null;
         var data:* = param1;
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
                  "error":"Invalid callback value."
               };
            }
         }
         else
         {
            obj = {
               "success":false,
               "error":data.status
            };
         }
         this.updateLoginStatus();
         this.finishCall();
         this.callGlobalCallback(obj);
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onLogin != null && this.aguiParams.onLogin is Function)
               {
                  this.aguiParams.onLogin(obj);
               }
            }
            catch(e:Error)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private function onHighscorePutResult(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onHighscoreGetResult(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onScoreTypesResult(param1:*) : void
      {
         var _loc2_:Object = null;
         var _loc3_:Object = null;
         var _loc4_:int = 0;
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
      
      private function onSubmitGameShare(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onRetrieveGameShare(param1:*) : void
      {
         var _loc2_:Object = null;
         var _loc3_:String = null;
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
               "error":"Invalid callback value."
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
      
      private function onRetrieveLatestGameShares(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onRetrieveGameShares(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onRetrieveStaffPickedGameShares(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onRetrieveUserGameShares(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onRetrieveUserGameShareLikes(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onRetrieveFriendGameShares(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onRetrieveFriendGameShareLikes(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onRetrieveRandomGameShare(param1:*) : void
      {
         var _loc2_:Object = null;
         var _loc3_:String = null;
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
               "error":"Invalid callback value."
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
      
      private function onRateGameShare(param1:*) : void
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
      
      private function onUnlikeGameShare(param1:*) : void
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
      
      private function onIncGameShareView(param1:*) : void
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
      
      private function onSubmitGameSave(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onSubmitGameSaveObject(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onRetrieveGameSave(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         if(Boolean(_loc2_.success))
         {
            _loc2_.data = this.convertStringToData(_loc2_.data);
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onRetrieveGameSaveObject(param1:*) : void
      {
         var _loc2_:Object = null;
         var _loc3_:Object = null;
         var _loc4_:String = null;
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
               for(_loc4_ in _loc2_.data)
               {
                  _loc3_.data[_loc4_] = this.convertStringToData(_loc2_.data[_loc4_]);
               }
               _loc2_ = _loc3_;
            }
            else
            {
               _loc2_ = {
                  "success":false,
                  "error":"Invalid callback value."
               };
            }
         }
         else
         {
            _loc2_ = {
               "success":false,
               "error":param1.status
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onDeleteGameSave(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onDeleteAllGameData(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onIncrementGameSave(param1:*) : void
      {
         var _loc2_:Object = null;
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
                  "error":"Invalid callback value."
               };
            }
         }
         else
         {
            _loc2_ = {
               "success":false,
               "error":param1.status
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onDecrementGameSave(param1:*) : void
      {
         var _loc2_:Object = null;
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
                  "error":"Invalid callback value."
               };
            }
         }
         else
         {
            _loc2_ = {
               "success":false,
               "error":param1.status
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onContainsProfanity(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function onFilterProfanity(param1:*) : void
      {
         var _loc2_:Object = null;
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
               "error":"Invalid callback value."
            };
         }
         this.finishCall();
         this.callGlobalCallback(_loc2_);
      }
      
      private function addCallToQueue(param1:Function, param2:Array = null) : void
      {
         var _loc4_:Object = null;
         if(!this.callQueue)
         {
            return;
         }
         this.removeError();
         var _loc3_:Object = {
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
      
      private function finishCall() : void
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
      
      private function callNext() : void
      {
         var _loc1_:Object = null;
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
      
      private function retryCall() : Boolean
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
      
      private function clearQueue() : void
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
      
      private function callGlobalCallback(param1:Object) : void
      {
         var obj:Object = param1;
         try
         {
            if(this.globalCallback != null)
            {
               this.globalCallback(obj);
            }
         }
         catch(e:Error)
         {
            DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
         }
      }
      
      private function loadAGUI(param1:String, param2:Object = null) : void
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
               this.aguiLoader.contentLoaderInfo.addEventListener(Event.COMPLETE,this.handleAGUILoaded,false,0,true);
               this.aguiLoader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,this.handleAGUILoadFailed,false,0,true);
               this.aguiLoader.contentLoaderInfo.addEventListener(SecurityErrorEvent.SECURITY_ERROR,this.handleAGUILoadFailed,false,0,true);
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
      
      private function killAGUI() : void
      {
         this.clearBackground();
         this.restoreFrameRate();
         this.destroyAGUI();
         this.finishCall();
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onClose != null && this.aguiParams.onClose is Function)
               {
                  this.aguiParams.onClose();
               }
            }
            catch(e:Error)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private function destroyAGUI() : void
      {
         this.aguiStateParams = new Object();
         this.aguiState = "";
         if(Boolean(this.agui))
         {
            if(contains(this.agui))
            {
               super.removeChild(this.agui);
            }
            this.agui.destroy();
         }
      }
      
      private function removeAGUIFromScreen() : void
      {
         this.clearBackground();
         this.destroyAGUI();
         this.removeProgress();
      }
      
      private function updateLoginStatus(param1:Boolean = false) : void
      {
         if(!this.loginStatus)
         {
            return;
         }
         this.loginStatus.update(this.agUser,param1);
         if(!this.loginStatus.hasEventListener(MouseEvent.CLICK))
         {
            this.loginStatus.addEventListener(MouseEvent.CLICK,this.handleLoginStatusClick,false,0,true);
         }
      }
      
      private function handleLoginStatusClick(param1:MouseEvent) : void
      {
         if(!this.loginStatus)
         {
            return;
         }
         this.showLogin(this.loginStatusCallback,this.displayRoot);
      }
      
      private function showErrorMessage(param1:String) : void
      {
         this.clearBackground();
         this.removeError();
         if(!this.aguiInitialized || this.closedProgressBar)
         {
            return;
         }
         this.error = new ErrorMessage();
         this.error.close_btn.addEventListener(MouseEvent.CLICK,this.handleErrorClose,false,0,true);
         this.error.ok_btn.addEventListener(MouseEvent.CLICK,this.handleErrorClose,false,0,true);
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
      
      private function removeError() : void
      {
         if(Boolean(this.error))
         {
            if(contains(this.error))
            {
               super.removeChild(this.error);
            }
            this.error = null;
         }
      }
      
      private function handleErrorClose(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         this.clearBackground();
         this.removeError();
         this.destroyAGUI();
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onClose != null && this.aguiParams.onClose is Function)
               {
                  this.aguiParams.onClose();
               }
            }
            catch(e:Error)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private function showProgress() : void
      {
         this.changeFrameRate();
         this.progress = new ProgressBar();
         this.progress.close_btn.addEventListener(MouseEvent.CLICK,this.handleProgressClose,false,0,true);
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
      
      private function removeProgress() : void
      {
         this.restoreFrameRate();
         if(Boolean(this.progress))
         {
            if(contains(this.progress))
            {
               super.removeChild(this.progress);
            }
            this.progress = null;
         }
      }
      
      private function handleProgressClose(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         this.closedProgressBar = true;
         this.removeProgress();
         this.clearBackground();
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onClose != null && this.aguiParams.onClose is Function)
               {
                  this.aguiParams.onClose();
               }
            }
            catch(e:Error)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private function convertDataToString(param1:*) : String
      {
         var _loc2_:String = null;
         if(param1 == null)
         {
            return null;
         }
         if(param1 is Number && isNaN(param1))
         {
            return null;
         }
         if(param1 is Array || param1 is Boolean || param1 is Number || param1 is String || param1 is Object)
         {
            _loc2_ = JSON.encode(param1);
            if(!(param1 is Number) && !(param1 is Boolean))
            {
               _loc2_ = "#" + Compressor.compress(_loc2_);
            }
            return _loc2_;
         }
         return null;
      }
      
      private function convertStringToData(param1:String) : *
      {
         var _loc2_:String = null;
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
      
      private function darkenBackground() : void
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
         if(Boolean(this.loginStatus) && contains(this.loginStatus))
         {
            super.addChildAt(this.loginStatus,0);
         }
      }
      
      private function clearBackground() : void
      {
         if(Boolean(this.darkBG))
         {
            if(contains(this.darkBG))
            {
               super.removeChild(this.darkBG);
            }
            this.darkBG = null;
         }
      }
      
      private function changeFrameRate() : void
      {
         try
         {
            if(Boolean(stage))
            {
               stage.frameRate = 30;
            }
         }
         catch(e:Error)
         {
         }
      }
      
      private function restoreFrameRate() : void
      {
         try
         {
            if(Boolean(stage))
            {
               stage.frameRate = this.parentFrameRate;
            }
         }
         catch(e:Error)
         {
         }
      }
      
      private function getDomain(param1:String) : String
      {
         var _loc2_:int = param1.indexOf(":/") + 3;
         var _loc3_:int = param1.indexOf("/",_loc2_);
         var _loc4_:String = param1.substring(_loc2_,_loc3_);
         var _loc5_:int = _loc4_.lastIndexOf(".") - 1;
         var _loc6_:int = _loc4_.lastIndexOf(".",_loc5_) + 1;
         return _loc4_.substring(_loc6_,_loc4_.length);
      }
      
      private function getBitmapFromDisplayObject(param1:DisplayObject, param2:Number = 1000) : Bitmap
      {
         var _loc5_:BitmapData = null;
         var _loc3_:Number = param2;
         var _loc4_:Number = 1;
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
      
      private function output(param1:String) : void
      {
         trace(param1);
         if(this.debugOutputCallback != null)
         {
            this.debugOutputCallback(param1);
         }
      }
      
      private function handleAGUILoaded(param1:Event = null) : void
      {
         DebugUtil.out("AGUI load successful.");
         this.agui = this.aguiLoader.content;
         this.showAGUI();
      }
      
      private function showAGUI() : void
      {
         var aguiPos:Point;
         var scale:Number;
         var data:Object;
         var types:Array = null;
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
         if(this.aguiStateParams.hasOwnProperty("scoreTypes") && this.aguiStateParams.scoreTypes != null)
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
            this.agui.showError("The Armor Games Interface has encountered an error. Please try again soon");
         }
         this.finishCall();
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onLoad != null && this.aguiParams.onLoad is Function)
               {
                  this.aguiParams.onLoad();
               }
            }
            catch(e:Error)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      protected function handleAGUILoginLogout(param1:Object) : void
      {
         var data:Object = param1;
         if(Boolean(this.aguiStateParams))
         {
            try
            {
               if(this.aguiStateParams.onLoginLogout != null && this.aguiStateParams.onLoginLogout is Function)
               {
                  this.aguiStateParams.onLoginLogout(data);
               }
            }
            catch(e:Error)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      protected function handleAGUIShareClicked(param1:Object) : void
      {
         var data:Object = param1;
         if(Boolean(this.aguiStateParams))
         {
            try
            {
               if(this.aguiStateParams.onShareClicked != null && this.aguiStateParams.onShareClicked is Function)
               {
                  this.aguiStateParams.onShareClicked(data);
               }
            }
            catch(e:Error)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      private function handleAGUILoadFailed(param1:Event) : void
      {
         var e:Event = param1;
         DebugUtil.error("AGUI failed to load.");
         this.removeProgress();
         this.finishCall();
         this.showErrorMessage("Sorry but the Armor Games Services are temporarily unavailable. Please try again soon. (Error 2)");
         if(Boolean(this.aguiParams))
         {
            try
            {
               if(this.aguiParams.onError != null && this.aguiParams.onError is Function)
               {
                  this.aguiParams.onError();
               }
            }
            catch(e:Error)
            {
               DebugUtil.error("A callback failed.",e.message,e.getStackTrace());
            }
         }
      }
      
      override public function get x() : Number
      {
         return 0;
      }
      
      override public function set x(param1:Number) : void
      {
      }
      
      override public function get y() : Number
      {
         return 0;
      }
      
      override public function set y(param1:Number) : void
      {
      }
      
      override public function get width() : Number
      {
         return 0;
      }
      
      override public function set width(param1:Number) : void
      {
      }
      
      override public function get height() : Number
      {
         return 0;
      }
      
      override public function set height(param1:Number) : void
      {
      }
      
      override public function get rotation() : Number
      {
         return 0;
      }
      
      override public function set rotation(param1:Number) : void
      {
      }
      
      override public function get scaleX() : Number
      {
         return 1;
      }
      
      override public function set scaleX(param1:Number) : void
      {
      }
      
      override public function get scaleY() : Number
      {
         return 1;
      }
      
      override public function set scaleY(param1:Number) : void
      {
      }
      
      override public function get visible() : Boolean
      {
         return true;
      }
      
      override public function set visible(param1:Boolean) : void
      {
      }
      
      override public function get alpha() : Number
      {
         return 1;
      }
      
      override public function set alpha(param1:Number) : void
      {
      }
      
      override public function get transform() : Transform
      {
         return null;
      }
      
      override public function set transform(param1:Transform) : void
      {
      }
      
      override public function get mask() : DisplayObject
      {
         return null;
      }
      
      override public function set mask(param1:DisplayObject) : void
      {
      }
      
      override public function get filters() : Array
      {
         return [];
      }
      
      override public function set filters(param1:Array) : void
      {
      }
      
      override public function get mouseChildren() : Boolean
      {
         return true;
      }
      
      override public function set mouseChildren(param1:Boolean) : void
      {
      }
      
      override public function get mouseEnabled() : Boolean
      {
         return true;
      }
      
      override public function set mouseEnabled(param1:Boolean) : void
      {
      }
      
      override public function startDrag(param1:Boolean = false, param2:Rectangle = null) : void
      {
      }
      
      override public function get parent() : DisplayObjectContainer
      {
         return this.displayRoot;
      }
      
      override public function get graphics() : Graphics
      {
         return null;
      }
      
      override public function addChild(param1:DisplayObject) : DisplayObject
      {
         return null;
      }
      
      override public function addChildAt(param1:DisplayObject, param2:int) : DisplayObject
      {
         return null;
      }
      
      override public function removeChild(param1:DisplayObject) : DisplayObject
      {
         return null;
      }
      
      override public function removeChildAt(param1:int) : DisplayObject
      {
         return null;
      }
      
      override public function getObjectsUnderPoint(param1:Point) : Array
      {
         return [];
      }
      
      override public function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
      }
      
      override public function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
      }
   }
}

