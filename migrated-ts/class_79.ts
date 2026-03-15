// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_79 extends MovieClip{
      
      public objCurrentPlayer: PlayerProfile;
      public bln50GunPoints: boolean;
      public arenaCreatorTemporaryArenaData: ArenaData;
      private var_526: string;
      public var_220: boolean;
      private loader: Loader = new Loader();
      public var_133: class_53;
      private var_491: URLRequest;
      public arrTankViewerData: any[];
      public var_344: boolean;
      private agi_url: string = "http://agi.armorgames.com/assets/agi/AGI.swf";
      public var_184: string;
      public Player1Profile: SharedObject;
      public intArenaCreatorTemporaryArenaBubbleFieldLocatrion: number = 0;
      public sharedObj: SharedObject;
      private strArmorData: string;
      public blnBTAUnlocked: boolean;
      public var_238: boolean;
      private urlLoader: URLLoader = new URLLoader();
      public var_382: any[];
      public var_140: number;
      public mainFPS: number;
      public preloader: MovieClip;
      public var_153: MovieClip;
      public preload_container_mc: MovieClip;
      public objBackgroundParticles2: class_117;
      private intArmorTier: number;
      public var_582: number = 1;
      public mainmenu: MovieClip;
      private var_448: string;
      public var_249: class_52;
      public var_151: class_51;
      public var_132: boolean;
      public var_358: boolean;
      public objPlayer3Profile: PlayerProfile;
      public objBackgroundParticles: class_117;
      public gData: GameData = new GameData();
      public objUrlLocking: class_9;
      public var_543: class_4;
      public intArenaCountMaster: number;
      public arenaSelect: ArenaSelectScreen;
      private var_471: string;
      private fps: class_8;
      public var_214: boolean;
      public objPlayer1Profile: PlayerProfile;
      private var_415: string;
      public blnCheatClass: boolean;
      public var_479: DisplayObject;
      public agi: DisplayObject;
      private var_510: string;
      public sEffects: class_10;
      public var_583: number = 0;
      public arenaCreator: ArenaCreator;
      public Player2Profile: SharedObject;
      public var_401: ContextMenu = new ContextMenu();
      public sPlayer: SoundPlayer;
      public var_139: boolean;
      public var_565: MovieClip;
      public var_213: class_114 = new class_114();
      public var_560: boolean;
      private var_433: boolean;
      public menuItem1: ContextMenuItem = new ContextMenuItem("Made by Hero Interactive");
      public arenaCreatorTemporaryArenaDataEnemyCreate: ArenaData;
      public var_296: MovieClip;
      public objGameObjectLibrary: class_2;
      public objGameWorld: BTAGameWorld;
      public arrLocalRatings: any[];
      public var_251: any[];
      public arrMenuNavigation: any[];
      public var_72: TankViewerScreen;
      public var_125: boolean;
      public var_224: boolean;
      public var_227: number;
      public movShareArenaTank: ShareArenaTank;
      public mcBubbleBg: class_115;
      public mPlayer: MusicPlayer;
      public var_197: MovieClip;
      private intArmorProgressState: number;
      public intEnemyCountMaster: number;
      public movStartNotification: MovieClip;
      public var_400: boolean;
      private blnSavedData: boolean;
      public objPlayer2Profile: PlayerProfile;
      private currentArenaData: ArenaData;
      public var_586: class_8;
      public var_305: any[];
      private var_287: number;
      private var_541: number;
      public blnScreenShake: boolean;
      public Player3Profile: SharedObject;
      public var_193: MovieClip;
      public var_90: TankCreatorScreen;
      constructor(){
    super(); // AUTO-INJECTED
         this.var_491 = new URLRequest(this.agi_url);
         super();
         addFrameScript(0,this.frame1,1,this.frame2);
         class_15.View(492,"190d74f0-70e0-4b9d-aac2-940b413d28e6",root.loaderInfo.loaderURL);
         this.var_382 = new Array();
         this.var_251 = new Array();
         this.var_344 = false;
         this.var_400 = false;
         this.var_238 = false;
         this.var_560 = false;
         this.blnSavedData = false;
         tabEnabled = false;
         this.blnBTAUnlocked = false;
         this.var_227 = -1;
         this.intArmorProgressState = 0;
         this.strArmorData = "";
         let _loc1_: number = 0;
         while(_loc1_ < 100)
         {
            tabIndex = _loc1_;
            _loc1_++;
         }
         this.blnCheatClass = false;
         this.var_132 = false;
         this.var_139 = false;
         this.var_224 = false;
         this.bln50GunPoints = false;
         this.intArmorTier = -1;
         this.movStartNotification = null;
         this.var_193 = null;
         this.var_565 = null;
         Security.allowDomain(this.agi_url);
         this.var_526 = "0e7119b0e84444cfdd62a971cf60d6c4";
         this.var_510 = "bta";
         this.loader.contentLoaderInfo.addEventListener(Event.COMPLETE, this.loadComplete.bind(this));
         this.loader.loadBytes(new AgiClass());
         this.objGameObjectLibrary = class_2.getInstance();
         class_2.method_592(this);
         this.method_574();
         this.var_471 = "";
         this.var_448 = "";
         this.var_433 = false;
         this.var_415 = "";
         this.sEffects = new class_10(this,stage);
         this.objUrlLocking = new class_9(stage,true,false,false);
         this.mPlayer = new MusicPlayer(stage);
         this.sPlayer = new SoundPlayer();
         this.var_543 = new class_4();
         this.arrLocalRatings = new Array();
         this.var_125 = true;
         this.sharedObj = SharedObject.getLocal("BTA");
         this.Player1Profile = SharedObject.getLocal("Player1Profile");
         this.Player2Profile = SharedObject.getLocal("Player2Profile");
         this.Player3Profile = SharedObject.getLocal("Player3Profile");
         this.objPlayer1Profile = new PlayerProfile(this.Player1Profile);
         this.objPlayer2Profile = new PlayerProfile(this.Player2Profile);
         this.objPlayer3Profile = new PlayerProfile(this.Player3Profile);
         this.objCurrentPlayer = this.objPlayer1Profile;
         this.var_401.hideBuiltInItems();
         this.menuItem1.addEventListener(ContextMenuEvent.MENU_ITEM_SELECT, this.method_513.bind(this));
         this.var_401.customItems.push(this.menuItem1);
         contextMenu = this.var_401;
         this.mainFPS = this.gData.mainFPS2;
         this.var_140 = 0;
         this.intEnemyCountMaster = 10000001;
         this.intArenaCountMaster = 90000001;
         this.var_358 = false;
         this.blnScreenShake = true;
         this.var_220 = true;
         this.var_214 = true;
         let _loc2_: number = 0;
         while(_loc2_ < this.gData.var_313.length)
         {
            this.objUrlLocking.AddAllowableDomain(this.gData.var_313[_loc2_]);
            _loc2_++;
         }
         let _loc3_: number = 0;
         while(_loc3_ < this.gData.var_177.length)
         {
            this.objUrlLocking.AddAdFreeDomain(this.gData.var_177[_loc3_]);
            _loc3_++;
         }
         let _loc4_: number = 0;
         while(_loc4_ < this.gData.var_404.length)
         {
            this.objUrlLocking.AddECDomain(this.gData.var_404[_loc4_]);
            _loc4_++;
         }
         let _loc5_: number = 0;
         while(_loc5_ < this.gData.var_374.length)
         {
            this.objUrlLocking.AddBlockedDomain(this.gData.var_374[_loc5_]);
            _loc5_++;
         }
         this.gData.var_298 = this.objUrlLocking.method_668();
         if((this.objUrlLocking.method_106("kongregate.com") || this.objUrlLocking.method_106("kongregatetrunk.com") || this.objUrlLocking.method_106("andkon.com")) == true)
         {
            this.var_184 = "kongregate";
         }
         if(this.objUrlLocking.method_106(class_1.method_1(770,780)) == true)
         {
            this.var_184 = "armorgames";
         }
         if(this.objUrlLocking.method_106(class_1.method_1(760,766)) == true)
         {
            this.var_184 = "herointeractive";
         }
         if(this.objUrlLocking.method_106("candystand.com") == true)
         {
            this.var_184 = "candystand";
         }
         if(this.objUrlLocking.method_106("newgrounds.com") == true)
         {
            this.var_184 = "newgrounds";
         }
         if(this.gData.var_511 == true)
         {
            if(this.objUrlLocking.method_772() == true)
            {
               this.method_554();
            }
            else
            {
               this.method_239();
            }
         }
         else
         {
            this.method_239();
         }
         this.addEventListener(Event.ENTER_FRAME, this.Run.bind(this));
         this.LoadOtherGameData();
         this.LoadAllData();
         this.BTALevelHandler();
         if(this.gData.var_501 == true)
         {
            this.fps = new class_8(this,stage);
         }
         this.arrMenuNavigation = new Array();
         this.arrMenuNavigation.push(-1);
         this.addEventListener(Event.ADDED_TO_STAGE, this.method_723.bind(this));
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
      
      public method_809(param1: any[] = null as any, param2: string = ""): void
      {
         let _loc3_: number = 0;
         while(_loc3_ < param1.length)
         {
            _loc3_ += 1;
         }
      }
      
      public method_169(param1: Sound, param2: number = 1): void
      {
         if(this.var_220 == true)
         {
            this.mPlayer.PlayMusic(param1,param2);
         }
      }
      
      public method_634(): void
      {
         this.arenaCreatorTemporaryArenaData = this.arenaCreator.currentArena;
         this.intArenaCreatorTemporaryArenaBubbleFieldLocatrion = this.arenaCreator.var_5;
         this.method_343();
         this.arrMenuNavigation.push(4);
         this.arrMenuNavigation.push(this.arrMenuNavigation[this.arrMenuNavigation.length - 2]);
         this.method_54();
      }
      
      private method_751(): number
      {
         let _loc1_: string = Capabilities.version;
         let _loc2_: any[] = _loc1_.split(",");
         let _loc3_: number = _loc2_.length;
         let _loc4_: any[] = _loc2_[0].split(" ");
         let _loc5_: number = parseInt(_loc4_[1]);
         let _loc6_: number = parseInt(_loc2_[1]);
         let _loc7_: number = parseInt(_loc2_[2]);
         return _loc5_;
      }
      
      private SendEmailsArena(param1: any[] = null as any): void
      {
         let _loc2_: number = 0;
         if(param1 != null)
         {
            _loc2_ = 0;
            while(_loc2_ < param1.length)
            {
               _loc2_ += 1;
            }
         }
         this.removeChild(this.movShareArenaTank);
         this.movShareArenaTank = null;
         this.var_133.intState = 4;
      }
      
      public method_681(): void
      {
         this.mainmenu.DeleteMainMenu();
         this.method_82();
      }
      
      private method_778(param1: Record<string, any>): void
      {
      }
      
      public method_769(): void
      {
         this.mainmenu.profile.inner.submit_btn.alpha = 1;
         this.mainmenu.profile.inner.sub_text_bg.alpha = 1;
         this.mainmenu.profile.inner.create_txt.alpha = 1;
         this.mainmenu.profile.inner.profile_name_txt.alpha = 0.62;
         this.mainmenu.profile.inner.or_mc.alpha = 1;
         this.mainmenu.profile.inner.cancel_btn.x = -200;
         this.mainmenu.profile.inner.cancel_btn.y = -200;
         this.mainmenu.profile.inner.load_overwrite.gotoAndPlay("load");
         this.mainmenu.profile.inner.darkness.gotoAndPlay("toOff");
         this.mainmenu.profile.blnOverwriteMode = false;
      }
      
      private loadComplete(param1: Event): void
      {
         this.method_715(param1.currentTarget.content);
         this.addChild(this.agi);
         this["agi"].init(this.var_526,this.var_510);
         this["agi"].retrieveGameData(this.method_635);
         let _loc2_: Record<string, any> = new Object();
         _loc2_.naviX = -500;
         _loc2_.naviY = -500;
         this["agi"].initAGUI(_loc2_);
      }
      
      private LoadStartUpTank(param1: string): void
      {
         this.method_82();
         this.var_72.method_375(param1);
      }
      
      public method_664(): void
      {
         this.method_343();
         this.var_140 = 2;
         this.method_54();
      }
      
      private ArenaSelectCallBack(param1: string): void
      {
      }
      
      private method_518(): void
      {
         this.method_44("halt_screen","section_visits");
         this.method_56(6);
         let _loc1_: MovieClip = new class_74();
         let _temp_3: any = _loc1_;
         let _temp_2: any = _loc1_;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.addChild(_loc1_);
         this.removeEventListener(Event.ENTER_FRAME, this.Run.bind(this));
      }
      
      private ChalangeYourFriend(): void
      {
         this.movShareArenaTank = new ShareArenaTank("Arena",this.SendEmailsArena);
         this.addChild(this.movShareArenaTank);
      }
      
      public EditTankID(param1: string, param2: string): void
      {
         if(this.objPlayer1Profile.EditTankIDFromID(param1,param2))
         {
            return;
         }
         if(this.objPlayer2Profile.EditTankIDFromID(param1,param2))
         {
            return;
         }
         if(this.objPlayer3Profile.EditTankIDFromID(param1,param2))
         {
            return;
         }
      }
      
      public method_348(): void
      {
         this.arrMenuNavigation.push(6);
         this.arenaCreator = new ArenaCreator(true,this,this.method_664);
         let _temp_3: any = this.arenaCreator;
         let _temp_2: any = this.arenaCreator;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.addChild(this.arenaCreator);
      }
      
      private method_759(): void
      {
         this.objBackgroundParticles = new class_117(stage,this);
         let _temp_3: any = this.objBackgroundParticles;
         let _temp_2: any = this.objBackgroundParticles;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.addChild(this.objBackgroundParticles);
         this.objBackgroundParticles2 = new class_117(stage,this,true);
         let _temp_4: any = this.objBackgroundParticles2;
         let _loc1_: number;
         this.objBackgroundParticles.y = _loc1_ = 0;
         _temp_4.x = 0;
         this.addChild(this.objBackgroundParticles2);
      }
      
      public LoadWhichProfileToCurrentProfile(param1: number = 1): void
      {
         switch(param1)
         {
            case 1:
               this.objCurrentPlayer = this.objPlayer1Profile;
               break;
            case 2:
               this.objCurrentPlayer = this.objPlayer2Profile;
               break;
            case 3:
               this.objCurrentPlayer = this.objPlayer3Profile;
         }
         this.BTALevelHandler();
      }
      
      private Run(param1: Event): void
      {
         this.method_505();
         switch(this.var_140)
         {
            case 2:
               if(this.mainmenu != null)
               {
                  this.mainmenu.Run();
               }
               if(this.arenaSelect != null)
               {
                  this.arenaSelect.Run();
               }
               if(this.arenaCreator != null)
               {
                  this.arenaCreator.Update();
               }
               if(this.var_72 != null)
               {
                  this.var_72.Update();
               }
               break;
            case 3:
               if(this.objGameWorld != null)
               {
                  this.objGameWorld.Run();
               }
               break;
            case 6:
               this.var_133.Run(param1);
               if(this.var_287 < 60)
               {
                  if(this.var_287 / 2 == Math.ceil(this.var_287 / 2))
                  {
                     this.var_151.method_290();
                  }
                  this.var_287 += 1;
               }
         }
      }
      
      public Setup(): void
      {
         if(this.currentFrame != 1)
         {
            this.gotoAndStop("main");
         }
         this.CreateStartNotification();
      }
      
      public method_565(param1: string = "Avatar"): void
      {
         if(this.var_90 != null)
         {
            this.removeChild(this.var_90);
         }
         this.var_90 = null;
         if(param1 == "Avatar")
         {
            this.arrMenuNavigation.push(2);
            this.arrMenuNavigation.push(1);
         }
         else
         {
            this.arrMenuNavigation.push(4);
            if(this.arrMenuNavigation[this.arrMenuNavigation.length - 2] == 5)
            {
               this.arrMenuNavigation.push(6);
            }
            else
            {
               this.arrMenuNavigation.push(this.arrMenuNavigation[this.arrMenuNavigation.length - 2]);
            }
         }
         this.method_54();
      }
      
      public frame2(): any
      {
         this.gotoAndStop("main");
      }
      
      public frame1(): any
      {
         this.stop();
      }
      
      private method_390(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("off");
      }
      
      public GameShareArenaCallback(param1: Record<string, any>): void
      {
         if(this.arenaCreator != null)
         {
            this.arenaCreator.ReturnToArenaSelectScreenAfterSubmit2();
         }
         this.method_137();
         this.arenaSelect.ValidateArenaID(param1.data);
      }
      
      public DropInTankData(param1: TankData, param2: boolean = false): void
      {
         this.var_90.method_744(param1,param2);
      }
      
      private method_726(): void
      {
         this.var_153 = new class_94();
         this.var_153.x = stage.stageWidth - this.var_153.width - 10;
         this.var_153.y = 10;
         let _loc1_: string = "";
         if(this.var_184 == "kongregate")
         {
            _loc1_ = " K";
         }
         if(this.var_184 == "armorgames")
         {
            _loc1_ = " AG";
         }
         if(this.var_184 == "herointeractive")
         {
            _loc1_ = " HI";
         }
         if(this.var_184 == "candystand")
         {
            _loc1_ = " CS";
         }
         if(this.var_184 == "newgrounds")
         {
            _loc1_ = " NG";
         }
         this.var_153.vTxt.text = this.gData.var_153 + _loc1_;
         this.addChild(this.var_153);
      }
      
      private LoadOtherGameData(): void
      {
         let blnFlushMe: boolean;
         if(this.var_125 == false && this.sharedObj.size == 0)
         {
            return;
         }
         if(this.sharedObj.hasEventListener(NetStatusEvent.NET_STATUS) == false)
         {
            this.sharedObj.addEventListener(NetStatusEvent.NET_STATUS, onFlushStatus.bind(this));
         }
         blnFlushMe = false;
         if(this.sharedObj.data.q == undefined)
         {
            this.sharedObj.data.q = StageQuality.HIGH;
            blnFlushMe = true;
         }
         if(this.sharedObj.data.s == undefined)
         {
            this.sharedObj.data.s = true;
            blnFlushMe = true;
         }
         if(this.sharedObj.data.m == undefined)
         {
            this.sharedObj.data.m = true;
            blnFlushMe = true;
         }
         if(this.sharedObj.data.ss == undefined)
         {
            this.sharedObj.data.ss = true;
            blnFlushMe = true;
         }
         if(this.sharedObj.data.f == undefined)
         {
            this.sharedObj.data.f = this.gData.mainFPS2;
            blnFlushMe = true;
         }
         if(this.sharedObj.data.h1 == undefined)
         {
            this.sharedObj.data.h1 = this.gData.prehot1;
            blnFlushMe = true;
         }
         if(this.sharedObj.data.h2 == undefined)
         {
            this.sharedObj.data.h2 = this.gData.prehot2;
            blnFlushMe = true;
         }
         if(this.sharedObj.data.h3 == undefined)
         {
            this.sharedObj.data.h3 = this.gData.prehot3;
            blnFlushMe = true;
         }
         if(this.sharedObj.data.h4 == undefined)
         {
            this.sharedObj.data.h4 = this.gData.prehot4;
            blnFlushMe = true;
         }
         if(this.sharedObj.data.h5 == undefined)
         {
            this.sharedObj.data.h5 = this.gData.prehot5;
            blnFlushMe = true;
         }
         if(this.sharedObj.data.arrLocalRatings == undefined)
         {
            this.sharedObj.data.arrLocalRatings = this.arrLocalRatings;
            blnFlushMe = true;
         }
         if(this.sharedObj.data.assr == undefined)
         {
            this.sharedObj.data.assr = new Array();
            blnFlushMe = true;
         }
         if(this.sharedObj.data.la == undefined)
         {
            this.sharedObj.data.la = new Array();
            blnFlushMe = true;
         }
         if(blnFlushMe == true)
         {
            try
            {
               this.sharedObj.flush();
            }
            catch (e: any)
            {
               var_125 = false;
               return;
            }
         }
         this.var_214 = this.sharedObj.data.s;
         this.var_220 = this.sharedObj.data.m;
         stage.quality = this.sharedObj.data.q;
         this.mainFPS = this.sharedObj.data.f;
         this.blnScreenShake = this.sharedObj.data.ss;
         this.arrLocalRatings = this.sharedObj.data.arrLocalRatings;
         this.gData.var_189 = this.sharedObj.data.assr;
         this.var_305 = this.sharedObj.data.la;
         this.gData.hot1 = this.sharedObj.data.h1;
         this.gData.hot2 = this.sharedObj.data.h2;
         this.gData.hot3 = this.sharedObj.data.h3;
         this.gData.hot4 = this.sharedObj.data.h4;
         this.gData.hot5 = this.sharedObj.data.h5;
         if(this.var_214 == true)
         {
            this.method_70(true);
         }
         else
         {
            this.method_70(false);
         }
         if(this.var_220 == true)
         {
            this.method_69(true);
         }
         else
         {
            this.method_69(false);
         }
      }
      
      public WipeArrTankViewerData(): void
      {
         if(this.arrTankViewerData != null)
         {
            this.arrTankViewerData.length = 0;
            this.arrTankViewerData = null;
         }
      }
      
      public AddTankRating(param1: string = "", param2: number = 0): void
      {
         if(param1 == "" || param2 == 0)
         {
            return;
         }
         let _loc4_: any = 0;
         while(_loc4_ < this.arrLocalRatings.length)
         {
            if(this.arrLocalRatings[_loc4_].TankID == param1)
            {
               this.arrLocalRatings[_loc4_].Rating = param2;
               let _loc3_: boolean = false;
               break;
            }
            _loc4_ += 1;
         }
         this.arrLocalRatings.push({
            "TankID":param1,
            "Rating":param2
         });
      }
      
      private method_513(param1: ContextMenuEvent): void
      {
         this.method_56(2);
      }
      
      public SaveAllData(): void
      {
         let flushStatus: string;
         if(this.var_125 == false)
         {
            return;
         }
         this.blnSavedData = true;
         this.objPlayer1Profile.method_19();
         this.objPlayer2Profile.method_19();
         this.objPlayer3Profile.method_19();
         this.sharedObj.data.SavedData = this.blnSavedData;
         this.sharedObj.data.intEnemyCountMaster = this.intEnemyCountMaster;
         this.sharedObj.data.intArenaCountMaster = this.intArenaCountMaster;
         flushStatus = null;
         try
         {
            flushStatus = this.sharedObj.flush();
         }
         catch (error: any)
         {
            var_125 = false;
         }
         if(flushStatus != null)
         {
            switch(flushStatus)
            {
               case SharedObjectFlushStatus.FLUSHED:
                  this.var_125 = true;
            }
         }
         else
         {
            this.var_125 = false;
         }
      }
      
      private LoadStartUpArena(param1: string): void
      {
         this.method_137();
         this.arenaSelect.SwitchLevelType("server");
         this.arenaSelect.SearchMenu();
         this.arenaSelect.SearchArenas(param1);
      }
      
      public RetrieveTankDataFromID(param1: string): TankData
      {
         let _loc2_: TankData = this.objPlayer1Profile.RetrieveTankBasedOnID(param1);
         if(_loc2_ != null)
         {
            return _loc2_;
         }
         _loc2_ = this.objPlayer2Profile.RetrieveTankBasedOnID(param1);
         if(_loc2_ != null)
         {
            return _loc2_;
         }
         _loc2_ = this.objPlayer3Profile.RetrieveTankBasedOnID(param1);
         if(_loc2_ != null)
         {
            return _loc2_;
         }
         return null;
      }
      
      public method_151(param1: number): void
      {
         this.var_140 = param1;
      }
      
      public method_423(): void
      {
         try
         {
            if(this.var_197 != null)
            {
               this.removeChild(this.var_197);
            }
            this.var_197 = null;
         }
         catch (e: any)
         {
         }
      }
      
      public method_600(param1: string = "", param2: number = 0): void
      {
         if(param2 == 0)
         {
            if(this.objPlayer1Profile.profileName == "")
            {
               this.DeleteProfile(1);
               this.LoadWhichProfileToCurrentProfile(1);
               this.objCurrentPlayer.SetNewProfileData(param1);
               this.objCurrentPlayer.method_19();
               this.method_155();
               this.StartFirstArenaOnNewProfile();
            }
            else if(this.objPlayer2Profile.profileName == "")
            {
               this.DeleteProfile(2);
               this.LoadWhichProfileToCurrentProfile(2);
               this.objCurrentPlayer.SetNewProfileData(param1);
               this.objCurrentPlayer.method_19();
               this.method_155();
               this.StartFirstArenaOnNewProfile();
            }
            else if(this.objPlayer3Profile.profileName == "")
            {
               this.DeleteProfile(3);
               this.LoadWhichProfileToCurrentProfile(3);
               this.objCurrentPlayer.SetNewProfileData(param1);
               this.objCurrentPlayer.method_19();
               this.method_155();
               this.StartFirstArenaOnNewProfile();
            }
            else
            {
               this.mainmenu.profile.blnOverwriteMode = true;
               this.mainmenu.profile.inner.submit_btn.alpha = 0.1;
               this.mainmenu.profile.inner.sub_text_bg.alpha = 0.1;
               this.mainmenu.profile.inner.create_txt.alpha = 0.1;
               this.mainmenu.profile.inner.profile_name_txt.alpha = 0.05;
               this.mainmenu.profile.inner.or_mc.alpha = 0.1;
               this.mainmenu.profile.inner.cancel_btn.x = 185;
               this.mainmenu.profile.inner.cancel_btn.y = 17;
               this.mainmenu.profile.inner.load_overwrite.gotoAndPlay("overwrite");
               this.mainmenu.profile.inner.darkness.gotoAndPlay("toOn");
            }
         }
         else
         {
            this.DeleteProfile(param2);
            this.LoadWhichProfileToCurrentProfile(param2);
            this.objCurrentPlayer.SetNewProfileData(param1);
            this.objCurrentPlayer.method_19();
            this.method_155();
            this.StartFirstArenaOnNewProfile();
         }
         this.BTALevelHandler();
      }
      
      private method_272(): void
      {
         if(this.var_249 != null)
         {
            this.var_249.Destroy();
            if(this.contains(this.var_249))
            {
               this.removeChild(this.var_249);
            }
            this.var_249 = null;
         }
      }
      
      private method_239(): void
      {
         this.preloader = new class_163();
         this.preloader.x = stage.stageWidth / 2 - this.preloader.width / 2;
         if(this.var_358 == false)
         {
            this.preloader.y = stage.stageHeight / 2 - this.preloader.height / 2 - 15;
         }
         else
         {
            this.preloader.y = stage.stageHeight / 2 - this.preloader.height / 2 + 140;
         }
         this.preloader.name = "preloader";
         this.addChild(this.preloader);
         this.preloader.Setup(this);
         this.preloader.PL_Listeners();
      }
      
      private CreateStartNotification(): void
      {
         if(this.movStartNotification == null)
         {
            this.movStartNotification = new StartNotification();
            let _temp_3: any = this.movStartNotification;
            let _temp_2: any = this.movStartNotification;
            let _temp_1: any = 0;
            0;
            _temp_2.y = _temp_1;
            _temp_3.x = 0;
            this.addChild(this.movStartNotification);
            this.movStartNotification.next_mc.addEventListener(MouseEvent.MOUSE_OVER, this.method_453.bind(this));
            this.movStartNotification.next_mc.addEventListener(MouseEvent.MOUSE_OUT, this.method_390.bind(this));
            this.movStartNotification.next_mc.addEventListener(MouseEvent.MOUSE_UP, this.startNotUp.bind(this));
            let _temp_5: any = this.movStartNotification.next_mc;
            let _temp_4: any = this.movStartNotification.next_mc;
            let _loc1_: any;
            this.movStartNotification.next_mc.buttonMode = _loc1_ = true;
            _temp_4.mouseEnabled = _loc1_ = 0;
            _temp_5.useHandCursor = 0;
            this.movStartNotification.next_mc.gotoAndStop("off");
         }
      }
      
      public method_181(param1: string = ""): void
      {
         if(param1 != "")
         {
            this.objCurrentPlayer.currentAvatar = param1;
            this.objCurrentPlayer.method_19();
         }
         this.arrMenuNavigation.push(1);
         this.method_272();
         this.var_140 = 2;
         this.method_54();
      }
      
      private method_242(param1: string): void
      {
         let var_40: URLVariables;
         let var_150: string;
         let var_157: string;
         let var_257: URLRequest;
         let var_126: string = param1;
         let var_243: string = class_1.method_1(767,773);
         let var_194: class_11 = new PKCS5();
         let var_106: ByteArray = class_13.toArray(class_13.method_22(var_126));
         let var_262: ByteArray = class_13.toArray(class_13.method_22(var_243));
         let var_56: class_12 = class_14.method_46("aes128-ecb",var_262,var_194);
         var_56.encrypt(var_106);
         var_157 = "" + String(class_13.method_52(var_106));
         var_150 = "http://s1.herointeractive.com/bta/flag.php";
         var_257 = new URLRequest(var_150);
         var_40 = new URLVariables();
         var_40.f = var_157;
         var_257.data = var_40;
         var_257.method = URLRequestMethod.POST;
         this.urlLoader = new URLLoader();
         this.urlLoader.dataFormat = URLLoaderDataFormat.TEXT;
         this.urlLoader.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
         this.urlLoader.addEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
         try
         {
            this.urlLoader.load(var_257);
         }
         catch (e: any)
         {
         }
      }
      
      private method_734(): void
      {
         let _loc1_: MovieClip = new class_95();
         let _temp_3: any = _loc1_;
         let _temp_2: any = _loc1_;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.addChild(_loc1_);
      }
      
      private method_519(): void
      {
         this.removeChild(this.var_151);
         this.var_151.method_276();
         this.var_151.Destroy();
         this.var_151 = null;
         this.var_133.Destroy();
         this.removeChild(this.var_133);
         this.var_133 = null;
         this.var_140 = 2;
         this.objBackgroundParticles.method_55();
         this.objBackgroundParticles2.method_55();
         this.arrMenuNavigation.length = 0;
         this.arrMenuNavigation.push(-1);
         this.method_137();
         this.method_169(new class_44(),0.8);
      }
      
      public GameShareTankCallback(param1: Record<string, any>): void
      {
         if(this.var_90 != null)
         {
            this.var_90.EventExitFromSharing2();
         }
         if(this.arenaSelect != null)
         {
            this.arenaSelect.method_97();
         }
         this.method_82();
         this.var_72.method_375(param1.data);
      }
      
      public method_416(param1: string, param2: string, param3: DisplayObject = null as any, param4: Function = null as any): void
      {
         this.intArmorTier = 0;
         this["agi"].showGameShareSubmit(param2,param1,param3,param4);
      }
      
      public method_355(param1: string = "Avatar", param2: TankData = null as any, param3: boolean = false): void
      {
         if(param1 == "Avatar")
         {
            this.arrMenuNavigation.push(3);
         }
         else
         {
            this.arrMenuNavigation.push(5);
         }
         this.arrMenuNavigation.push(this.arrMenuNavigation[this.arrMenuNavigation.length - 2]);
         this.method_54();
         if(param2 != null)
         {
            this.var_238 = true;
            this.DropInTankData(param2,param3);
         }
         else
         {
            this.var_238 = false;
         }
      }
      
      private method_554(): void
      {
         this.var_358 = true;
         this.var_197 = new class_58();
         this.var_197.x = 125;
         this.var_197.y = 15;
         this.addChild(this.var_197);
         this.method_239();
         try
         {
            this.var_479 = class_16.method_492(Math.floor(1052),Math.floor(13));
            this.var_197.addChild(this.var_479);
         }
         catch (e: any)
         {
         }
      }
      
      private BTALevelHandler(): void
      {
         let _loc3_: number = 0;
         let _loc1_: number = 0;
         while(_loc1_ < this.gData.var_14.length)
         {
            this.gData.var_14[_loc1_].blnLocked = true;
            _loc1_++;
         }
         let _loc2_: number = 0;
         while(_loc2_ < this.objCurrentPlayer.arrBeatArenaIDs.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.gData.var_14.length)
            {
               if(this.objCurrentPlayer.arrBeatArenaIDs[_loc2_] == this.gData.var_14[_loc3_].ID)
               {
                  this.gData.var_14[_loc3_].blnLocked = false;
                  if(this.gData.var_14[_loc3_ + 1] != null)
                  {
                     this.gData.var_14[_loc3_ + 1].blnLocked = false;
                  }
               }
               _loc3_++;
            }
            _loc2_++;
         }
         this.gData.var_14[0].blnLocked = false;
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public method_402(param1: string, param2: string, param3: boolean = false, param4: string = "", param5: boolean = false): void
      {
         class_15.Play();
         this.objGameWorld = new BTAGameWorld();
         this.objGameWorld.x = stage.stageWidth / 2;
         this.objGameWorld.y = stage.stageHeight / 2;
         this.addChild(this.objGameWorld);
         this.objGameWorld.Setup(this,this.GameWorldCallback,this.objCurrentPlayer,param1,param2,param3,param4,param5);
         this.var_140 = 3;
         this.sEffects.FLASH(16777215);
         this.method_169(new class_43(),0.8);
      }
      
      public GameWorldCallback(param1: boolean = false): void
      {
         if(this.objGameWorld != null)
         {
            this.removeChild(this.objGameWorld);
         }
         this.objGameWorld = null;
         this.var_140 = 2;
         this.arrMenuNavigation.length = 0;
         this.arrMenuNavigation.push(-1);
         this.method_137(1,param1);
      }
      
      public method_370(): void
      {
         if(this.agi != null)
         {
            this.setChildIndex(this.agi,numChildren - 1);
         }
      }
      
      public method_497(param1: number): number
      {
         0;
         if(this["objPlayer" + param1 + "Profile"] != null)
         {
            let _loc2_: number = (this["objPlayer" + param1 + "Profile"].arrUnlockedObjects.length - 6) / this.gData.var_495;
         }
         return Math.floor(0 * 100);
      }
      
      private method_122(param1: TankData, param2: TankData): boolean
      {
         if(param1.arrTankDetails.length != param2.arrTankDetails.length)
         {
            return false;
         }
         if(param1.strAuthorName != param2.strAuthorName)
         {
            return false;
         }
         if(param1.strTankName != param2.strTankName)
         {
            return false;
         }
         let _loc3_: number = param1.arrTankDetails.length;
         let _loc4_: number = 0;
         while(_loc4_ < _loc3_)
         {
            if(param1.arrTankDetails[_loc4_].name != param2.arrTankDetails[_loc4_].name)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].type != param2.arrTankDetails[_loc4_].type)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].twin != param2.arrTankDetails[_loc4_].twin)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].x != param2.arrTankDetails[_loc4_].x)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].y != param2.arrTankDetails[_loc4_].y)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].rotation != param2.arrTankDetails[_loc4_].rotation)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].scale != param2.arrTankDetails[_loc4_].scale)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].radius != param2.arrTankDetails[_loc4_].radius)
            {
               return false;
            }
            _loc4_++;
         }
         return true;
      }
      
      public LoadAllData(): void
      {
         if(this.var_125 == false && this.sharedObj.size == 0)
         {
            return;
         }
         this.blnSavedData = this.sharedObj.data.SavedData;
         this.objPlayer1Profile.method_176();
         this.objPlayer2Profile.method_176();
         this.objPlayer3Profile.method_176();
         let _loc1_: TankData = new TankData();
         _loc1_.ImportTankData(this.objPlayer1Profile.currentAvatar);
         if(this.objPlayer1Profile.DoesProfileHaveAllThePartsForTank(_loc1_) == false || this.objPlayer1Profile.method_17(_loc1_) == true)
         {
            this.objPlayer1Profile.currentAvatar = "7d1adbbd72aaa3c8672736b9715f0c5519a5130a78032553eac3337e4074ba671f833edee1f5bb99e490de82d3d15107b465367e32c3ed3f6395d77f8afd6aa01bb70e7a2ea088f18ff25e4d150fba6abbcb73";
            this.objPlayer1Profile.method_19();
         }
         _loc1_ = new TankData();
         _loc1_.ImportTankData(this.objPlayer2Profile.currentAvatar);
         if(this.objPlayer2Profile.DoesProfileHaveAllThePartsForTank(_loc1_) == false || this.objPlayer2Profile.method_17(_loc1_) == true)
         {
            this.objPlayer2Profile.currentAvatar = "7d1adbbd72aaa3c8672736b9715f0c5519a5130a78032553eac3337e4074ba671f833edee1f5bb99e490de82d3d15107b465367e32c3ed3f6395d77f8afd6aa01bb70e7a2ea088f18ff25e4d150fba6abbcb73";
            this.objPlayer2Profile.method_19();
         }
         _loc1_ = new TankData();
         _loc1_.ImportTankData(this.objPlayer3Profile.currentAvatar);
         if(this.objPlayer3Profile.DoesProfileHaveAllThePartsForTank(_loc1_) == false || this.objPlayer3Profile.method_17(_loc1_) == true)
         {
            this.objPlayer3Profile.currentAvatar = "7d1adbbd72aaa3c8672736b9715f0c5519a5130a78032553eac3337e4074ba671f833edee1f5bb99e490de82d3d15107b465367e32c3ed3f6395d77f8afd6aa01bb70e7a2ea088f18ff25e4d150fba6abbcb73";
            this.objPlayer3Profile.method_19();
         }
         if(this.sharedObj.data.intEnemyCountMaster != undefined && this.sharedObj.data.intEnemyCountMaster != 0)
         {
            this.intEnemyCountMaster = this.sharedObj.data.intEnemyCountMaster;
         }
         if(!(this.sharedObj.data.intArenaCountMaster == undefined || this.sharedObj.data.intArenaCountMaster == 0 || this.sharedObj.data.intArenaCountMaster == null))
         {
            this.intArenaCountMaster = this.sharedObj.data.intArenaCountMaster;
         }
      }
      
      public TransitionTankCreator2ArenaSelect(param1: string = "", param2: number = -2, param3: boolean = false): void
      {
         if(this.var_238)
         {
            if(param1 != "")
            {
               this.objCurrentPlayer.currentAvatar = param1;
               this.objCurrentPlayer.method_19();
            }
            this.var_238 = false;
         }
         if(this.var_90 != null)
         {
            this.removeChild(this.var_90);
         }
         this.var_90 = null;
         this.var_140 = 2;
         if(param2 == 1 && param3)
         {
            param2 = this.arrMenuNavigation.pop();
         }
         this.method_54(param2);
      }
      
      private method_635(param1: Record<string, any>): void
      {
         if(param1.success == true)
         {
            this.var_344 = true;
            this.strArmorData = param1.data;
         }
      }
      
      private method_253(param1: SecurityErrorEvent): void
      {
      }
      
      public method_780(param1: any[] = null as any, param2: string = ""): void
      {
         let _loc3_: number = 0;
         while(_loc3_ < param1.length)
         {
            _loc3_ += 1;
         }
      }
      
      private method_505(): void
      {
         let var_126: boolean = false;
         let var_106: number = 0;
         let var_56: number = 0;
         let var_40: number = 0;
         if(this["agi"] != null && this.intArmorTier >= 0)
         {
            var_126 = true;
            var_106 = 0;
            while(var_106 < this["agi"].numChildren)
            {
               var_126 = false;
               try
               {
                  var_56 = 0;
                  while(var_56 < this["agi"].getChildAt(var_106).numChildren)
                  {
                     try
                     {
                        var_40 = 0;
                        while(var_40 < this["agi"].getChildAt(var_106).getChildAt(var_56).numChildren)
                        {
                           if(this["agi"].getChildAt(var_106).getChildAt(var_56).getChildAt(var_40).name == "title_txt" && this.intArmorTier == 0)
                           {
                              this.var_193 = new class_98();
                              this.var_193.x = 280;
                              this.var_193.y = 310;
                              this.addChild(this.var_193);
                              ++this.intArmorTier;
                           }
                           if(this["agi"].getChildAt(var_106).getChildAt(var_56).getChildAt(var_40).name == "copy_btn" && this.intArmorTier == 1)
                           {
                              this.var_193.x = 197;
                              this.var_193.y = 341;
                              ++this.intArmorTier;
                           }
                           var_40++;
                        }
                     }
                     catch (e: any)
                     {
                     }
                     var_56++;
                  }
               }
               catch (e: any)
               {
               }
               var_106++;
            }
            if(var_126 == true)
            {
               if(this.var_193 != null)
               {
                  this.removeChild(this.var_193);
               }
               if(this.arenaCreator != null)
               {
                  this.arenaCreator.ReturnToArenaSelectScreenAfterSubmit2();
               }
               if(this.var_90 != null)
               {
                  this.var_90.method_419();
               }
               this["agi"].closeAGUI();
               this.intArmorTier = -1;
            }
         }
      }
      
      public TransitionQuickTanksToCreateATank(): void
      {
         this.method_272();
         this.arrMenuNavigation.push(3);
         this.arrMenuNavigation.push(this.arrMenuNavigation[this.arrMenuNavigation.length - 2]);
         this.method_54();
      }
      
      public method_44(param1: string, param2: string = null as any): void
      {
         class_15.CustomMetric(param1,param2);
      }
      
      public method_292(param1: string = "Avatar", param2: Function = null as any): void
      {
         if(param1 == "Avatar")
         {
            this.arrMenuNavigation.push(3);
            this.var_238 = true;
         }
         else
         {
            this.var_238 = false;
            this.arrMenuNavigation.push(5);
         }
         this.var_90 = new TankCreatorScreen(true,param1,param2,this.arrMenuNavigation[this.arrMenuNavigation.length - 4]);
         let _temp_3: any = this.var_90;
         let _temp_2: any = this.var_90;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.addChild(this.var_90);
         this.var_90.method_673(this);
      }
      
      public method_723(param1: Event): void
      {
         root.transform.perspectiveProjection.fieldOfView = 55;
         root.transform.perspectiveProjection.projectionCenter = new Point(275,200);
      }
      
      public TransitionTankViewer2MainMenu(): void
      {
         if(this.var_72 != null)
         {
            this.removeChild(this.var_72);
         }
         this.var_72 = null;
         this.method_216();
      }
      
      public method_56(param1: number): void
      {
         if(param1 == 1)
         {
            this.var_213.method_104(this.gData.var_528,"_blank");
         }
         else if(param1 == 2)
         {
            this.var_213.method_104(this.gData.var_536,"_blank");
         }
         else if(param1 == 3)
         {
            this.var_213.method_104(this.gData.var_522,"_blank");
         }
         else if(param1 == 4)
         {
            this.var_213.method_104(this.gData.var_535,"_blank");
         }
         else if(param1 == 5)
         {
            this.var_213.method_104(this.gData.var_533,"_blank");
         }
         else if(param1 == 6)
         {
            this.var_213.method_104(this.gData.var_527,"_blank");
         }
         else if(param1 == 7)
         {
            this.method_44("bttd_main_menu_link","link_outs");
            this.var_213.method_104(this.gData.var_502,"_blank");
         }
      }
      
      public method_70(param1: boolean): void
      {
         this.sPlayer.method_454 = this.var_214 = param1;
      }
      
      public method_501(): void
      {
         this.var_249 = new class_52(this.objCurrentPlayer.gunPointsMax.method_29(),this);
         this.addChild(this.var_249);
      }
      
      public method_285(param1: string = null as any): void
      {
         null;
         0;
         null;
         let _loc6_: TankData = null;
         if(this.var_72 != null)
         {
            this.removeChild(this.var_72);
         }
         this.var_72 = null;
         if(param1 != null)
         {
            if(this.arrMenuNavigation[this.arrMenuNavigation.length - 1] == 2)
            {
               this.objCurrentPlayer.currentAvatar = param1;
               this.objCurrentPlayer.method_19();
               let _loc2_: TankData = new TankData();
               if(null.ImportTankData(param1))
               {
                  let _loc3_: boolean = true;
                  let _loc4_: number = 0;
                  while(0 < this.objCurrentPlayer.arrSavedTanks.length)
                  {
                     let _loc5_: TankData = new TankData();
                     _loc5_.ImportTankData(this.objCurrentPlayer.arrSavedTanks[0].Data);
                     if(this.method_122(null,null))
                     {
                        _loc3_ = false;
                        break;
                     }
                     _loc4_ = 0 + 1;
                  }
               }
            }
         }
         this.var_140 = 2;
         this.method_54();
         if(param1 != null)
         {
            if(this.arrMenuNavigation[this.arrMenuNavigation.length - 1] == 3)
            {
               _loc6_ = new TankData();
               _loc6_.ImportTankData(param1);
               this.DropInTankData(_loc6_);
            }
         }
      }
      
      private method_717(): void
      {
         let _loc1_: MovieClip = null;
         if(this.var_197 != null)
         {
            this.method_423();
         }
         if(stage.frameRate != this.mainFPS)
         {
            stage.frameRate = this.mainFPS;
         }
         if(this.gData.var_517 == true)
         {
            this.method_568();
         }
         if(this.gData.var_529 == true)
         {
            this.method_759();
         }
         if(this.method_751() < 10)
         {
            this.method_734();
            this.method_151(11);
            return;
         }
         if(this.objUrlLocking.method_527() == true)
         {
            this.method_151(11);
            this.method_518();
            return;
         }
         _loc1_ = new class_164();
         _loc1_.x = 75;
         _loc1_.y = 70;
         this.addChild(_loc1_);
         _loc1_.Setup(this);
         this.method_151(1);
      }
      
      public DeleteProfile(param1: number = 0): void
      {
         switch(param1)
         {
            case 1:
               this.objPlayer1Profile.DeleteProfile();
               break;
            case 2:
               this.objPlayer2Profile.DeleteProfile();
               break;
            case 3:
               this.objPlayer3Profile.DeleteProfile();
         }
      }
      
      private method_574(): void
      {
         this.var_296 = new class_59();
         let _temp_3: any = this.var_296;
         let _temp_2: any = this.var_296;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.addChild(this.var_296);
         this.var_296.cacheAsBitmap = true;
         this.var_296.stop();
      }
      
      public method_404(param1: string = ""): void
      {
         let _loc7_: number = 0;
         this.GrabRetryInformation();
         this.var_151 = new class_51(550,450);
         this.addChild(this.var_151);
         this.var_151.SetBlur();
         this.var_151.Draw(this);
         this.var_133 = new class_53(true,this.RetryCurrentArena,this.method_519,this.ChalangeYourFriend,this.PlayMoreGames,this.objGameWorld.objCurrentArenaData,this.objGameWorld);
         this.addChild(this.var_133);
         let _loc2_: boolean = false;
         let _loc3_: number = 0;
         while(_loc3_ < this.objCurrentPlayer.var_82.length)
         {
            if(this.objCurrentPlayer.var_82[_loc3_].id == param1)
            {
               if(this.var_132 || this.blnCheatClass || this.blnBTAUnlocked || this.var_139 || this.var_224 || this.bln50GunPoints)
               {
                  _loc2_ = true;
                  break;
               }
               if(this.objCurrentPlayer.var_82[_loc3_].score < this.var_133.var_354)
               {
                  this.objCurrentPlayer.var_82[_loc3_].score = this.var_133.var_354;
               }
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         let _loc4_: number = this.var_133.var_354;
         let _loc5_: string = param1;
         let _loc6_: boolean = false;
         if(this.var_132 || this.blnCheatClass || this.blnBTAUnlocked || this.var_139 || this.var_224 || this.bln50GunPoints)
         {
            _loc2_ = true;
         }
         if(_loc2_ == false)
         {
            if(this.objGameWorld.var_159)
            {
               _loc6_ = true;
               this.objCurrentPlayer.var_82.push({
                  "id":_loc5_,
                  "score":_loc4_
               });
            }
         }
         this.currentArenaData = this.objGameWorld.objCurrentArenaData;
         this.var_541 = this.objGameWorld.var_534;
         if(_loc6_)
         {
            _loc7_ = 0;
            while(_loc7_ < this.currentArenaData.var_96.length)
            {
               if(this.currentArenaData.var_96[_loc7_].Type == "Part")
               {
                  this.objCurrentPlayer.arrUnlockedObjects.push(this.currentArenaData.var_96[_loc7_].Data);
               }
               else if(this.currentArenaData.var_96[_loc7_].Type == "BubblePoint")
               {
                  this.objCurrentPlayer.bubblePointsMax.Add(this.currentArenaData.var_96[_loc7_].Data);
               }
               else if(this.currentArenaData.var_96[_loc7_].Type == "Class")
               {
                  this.objCurrentPlayer.maxClass.method_21(Math.max(this.objCurrentPlayer.maxClass.value,this.currentArenaData.var_96[_loc7_].Data));
               }
               else if(this.currentArenaData.var_96[_loc7_].Type == "GunPoint")
               {
                  this.objCurrentPlayer.gunPointsMax.Add(this.currentArenaData.var_96[_loc7_].Data);
               }
               _loc7_ += 1;
            }
            this.var_133.method_686();
         }
         this.objCurrentPlayer.method_19();
         this.objGameWorld.Deactivate(false);
         if(this.objGameWorld != null)
         {
            this.removeChild(this.objGameWorld);
         }
         this.objGameWorld = null;
         this.var_140 = 6;
         this.var_287 = 0;
      }
      
      public method_155(): void
      {
         this.mainmenu.profile.RemoveProfileCreator();
         this.mainmenu.DeleteMainMenu();
         this.var_140 = 2;
         this.method_137();
      }
      
      public method_54(param1: number = -2): void
      {
         let _loc2_: number = NaN;
         _loc2_ = this.arrMenuNavigation.pop();
         if(param1 != -2)
         {
            _loc2_ = param1;
         }
         switch(this.arrMenuNavigation[this.arrMenuNavigation.length - 1])
         {
            case 1:
               this.method_137();
               break;
            case 2:
               if(_loc2_ == 1)
               {
                  this.method_82(true);
                  break;
               }
               if(_loc2_ == 6)
               {
                  this.method_82(false,true);
                  break;
               }
               if(_loc2_ == 5 || _loc2_ == 3)
               {
                  this.method_82(false,false,true);
               }
               break;
            case 3:
               if(_loc2_ == 1)
               {
                  this.method_292("Avatar",this.TransitionTankCreator2ArenaSelect);
                  break;
               }
               this.method_292("Avatar",this.method_54);
               break;
            case 4:
               if(_loc2_ == 1)
               {
                  this.method_82(true);
                  break;
               }
               if(_loc2_ == 6)
               {
                  this.method_82(false,true);
                  break;
               }
               if(_loc2_ == 5 || _loc2_ == 3)
               {
                  this.method_82(false,false,true);
               }
               break;
            case 5:
               this.method_292("Enemy",this.method_54);
               break;
            case 6:
               this.method_348();
         }
         _loc2_ = this.arrMenuNavigation.pop();
         _loc2_ = 0;
      }
      
      private method_715(param1: DisplayObject): void
      {
         this.agi = param1;
      }
      
      public method_137(param1: number = 1, param2: boolean = false): void
      {
         this.arrMenuNavigation.push(1);
         this.arenaSelect = new ArenaSelectScreen();
         let _temp_3: any = this.arenaSelect;
         let _temp_2: any = this.arenaSelect;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.addChild(this.arenaSelect);
         this.arenaSelect.Setup(this,this.ArenaSelectCallBack,param1,param2);
      }
      
      private PlayMoreGames(): void
      {
         this.method_56(1);
      }
      
      public SaveGameData(): void
      {
         if(this.var_125 == false)
         {
            return;
         }
         this.sharedObj.data.q = stage.quality;
         this.sharedObj.data.s = this.var_214;
         this.sharedObj.data.m = this.var_220;
         this.sharedObj.data.f = this.mainFPS;
         this.sharedObj.data.ss = this.blnScreenShake;
         this.sharedObj.data.intEnemyCountMaster = this.intEnemyCountMaster;
         this.sharedObj.data.intArenaCountMaster = this.intArenaCountMaster;
         this.sharedObj.data.arrLocalRatings = this.arrLocalRatings;
         this.sharedObj.data.assr = this.gData.var_189;
         this.sharedObj.data.la = this.var_305;
         this.sharedObj.data.h1 = this.gData.hot1;
         this.sharedObj.data.h2 = this.gData.hot2;
         this.sharedObj.data.h3 = this.gData.hot3;
         this.sharedObj.data.h4 = this.gData.hot4;
         this.sharedObj.data.h5 = this.gData.hot5;
         try
         {
            this.sharedObj.flush();
            this.var_125 = true;
         }
         catch (e: any)
         {
            var_125 = false;
         }
      }
      
      private method_254(param1: IOErrorEvent): void
      {
      }
      
      private method_453(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("on");
      }
      
      public TransitionQuickTanksToSeachForATank(): void
      {
         this.method_272();
         this.arrMenuNavigation.push(2);
         this.arrMenuNavigation.push(this.arrMenuNavigation[this.arrMenuNavigation.length - 2]);
         this.method_54();
      }
      
      public method_546(): void
      {
         this.var_125 = false;
         this.objPlayer1Profile.var_226 = false;
         this.objPlayer2Profile.var_226 = false;
         this.objPlayer3Profile.var_226 = false;
      }
      
      private startNotUp(param1: MouseEvent): void
      {
         if(this.movStartNotification.currentFrame == this.movStartNotification.totalFrames)
         {
            this.DestroyStartNotification();
         }
         else
         {
            this.movStartNotification.nextFrame();
         }
      }
      
      public method_69(param1: boolean): void
      {
         this.mPlayer.method_352 = this.var_220 = param1;
      }
      
      public RetrieveTankLocalRating(param1: string = ""): number
      {
         let _loc3_: any = 0;
         while(_loc3_ < this.arrLocalRatings.length)
         {
            if(this.arrLocalRatings[_loc3_].TankID == param1)
            {
               return this.arrLocalRatings[_loc3_].Rating;
            }
            _loc3_ += 1;
         }
         return -1;
      }
      
      private DestroyStartNotification(): void
      {
         if(this.movStartNotification != null)
         {
            this.movStartNotification.next_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.method_453.bind(this));
            this.movStartNotification.next_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.method_390.bind(this));
            this.movStartNotification.next_mc.removeEventListener(MouseEvent.MOUSE_UP, this.startNotUp.bind(this));
            this.removeChild(this.movStartNotification);
            this.movStartNotification = null;
            this.method_717();
         }
      }
      
      public method_327(param1: string = null as any): void
      {
         let _loc2_: TankData = null;
         if(this.var_72 != null)
         {
            this.removeChild(this.var_72);
         }
         this.var_72 = null;
         this.method_54();
         if(this.arrMenuNavigation[this.arrMenuNavigation.length - 1] == 6)
         {
            if(param1 != null)
            {
               this.arenaCreator.LoadAnArena(this.arenaCreatorTemporaryArenaData,this.intArenaCreatorTemporaryArenaBubbleFieldLocatrion,param1);
            }
            else
            {
               this.arenaCreator.LoadAnArena(this.arenaCreatorTemporaryArenaData,this.intArenaCreatorTemporaryArenaBubbleFieldLocatrion);
            }
         }
         else if(this.arrMenuNavigation[this.arrMenuNavigation.length - 1] == 5)
         {
            if(param1 != null)
            {
               _loc2_ = new TankData();
               _loc2_.ImportTankData(param1);
               this.DropInTankData(_loc2_);
            }
         }
      }
      
      private RetryCurrentArena(): void
      {
         this.removeChild(this.var_151);
         this.var_151.method_276();
         this.var_151.Destroy();
         this.var_151 = null;
         this.var_133.Destroy();
         this.removeChild(this.var_133);
         this.var_133 = null;
         this.method_402(this.var_471,this.var_448,this.var_433,this.var_415);
         this.objBackgroundParticles.method_55();
         this.objBackgroundParticles2.method_55();
      }
      
      public TransitionTankViewer2TankCreator(param1: TankData = null as any, param2: string = "Avatar", param3: boolean = false): void
      {
         if(this.var_72 != null)
         {
            this.removeChild(this.var_72);
         }
         this.var_72 = null;
         if(param2 == "Avatar")
         {
            this.arrMenuNavigation.push(3);
         }
         else
         {
            this.arrMenuNavigation.push(5);
         }
         this.arrMenuNavigation.push(this.arrMenuNavigation[this.arrMenuNavigation.length - 2]);
         this.method_54();
         if(param1 != null)
         {
            this.DropInTankData(param1,param3);
         }
      }
      
      public StoreViewerSearch(param1: any, param2: any, param3: any, param4: any): void
      {
         this.arrTankViewerData = new Array();
         this.arrTankViewerData.push({
            "arrSearchFilters":param1,
            "arrSearchSorts":param2,
            "arrTanksInqueue":param3,
            "intCurrentLocationInTanksQueue":param4
         });
      }
      
      public FlagAnID(param1: string): void
      {
         let _loc2_: string = param1.substr(0,1);
         let _loc3_: boolean = false;
         let _loc4_: number = 0;
         if(_loc2_ == "E")
         {
            _loc4_ = 0;
            while(_loc4_ < this.var_251.length)
            {
               if(param1 == this.var_251[_loc4_])
               {
                  _loc3_ = true;
               }
               _loc4_++;
            }
            if(_loc3_ == false)
            {
               this.method_242(param1);
               this.var_251.push(param1);
            }
         }
         else if(_loc2_ == "A")
         {
            _loc4_ = 0;
            while(_loc4_ < this.var_251.length)
            {
               if(param1 == this.var_251[_loc4_])
               {
                  _loc3_ = true;
               }
               _loc4_++;
            }
            if(_loc3_ == false)
            {
               this.method_242(param1);
               this.var_251.push(param1);
            }
         }
         else if(_loc2_ != "L")
         {
            if(_loc2_ == "G")
            {
               _loc4_ = 0;
               while(_loc4_ < this.var_382.length)
               {
                  if(param1 == this.var_382[_loc4_])
                  {
                     _loc3_ = true;
                  }
                  _loc4_++;
               }
               if(_loc3_ == false)
               {
                  this.method_242(param1);
                  this.var_382.push(param1);
               }
            }
            else if(_loc2_ == "H")
            {
            }
         }
      }
      
      private method_568(): void
      {
         this.mcBubbleBg = new class_115();
         let _temp_3: any = this.mcBubbleBg;
         let _temp_2: any = this.mcBubbleBg;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.addChild(this.mcBubbleBg);
         this.mcBubbleBg.method_624(this);
      }
      
      public method_788(): void
      {
         if(this.var_90 != null)
         {
            this.removeChild(this.var_90);
         }
         this.var_90 = null;
         this.method_216();
      }
      
      public method_82(param1: boolean = false, param2: boolean = false, param3: boolean = false): void
      {
         if(param3)
         {
            this.arrMenuNavigation.push(2);
            this.var_72 = new TankViewerScreen(this,true,this.method_285,"Return to Arena Select",null,false,null,this.arrTankViewerData);
         }
         else if(param2)
         {
            this.arrMenuNavigation.push(4);
            this.var_72 = new TankViewerScreen(this,true,this.method_327,"Return to Arena Creator",this.method_327,true,"Enemy",this.arrTankViewerData);
         }
         else if(param1)
         {
            this.arrMenuNavigation.push(2);
            this.var_72 = new TankViewerScreen(this,true,this.method_285,"Return to Arena Select",this.method_285,true,"Avatar",this.arrTankViewerData);
         }
         else
         {
            this.var_72 = new TankViewerScreen(this,true,null,"",null,false,null,this.arrTankViewerData);
         }
         let _temp_3: any = this.var_72;
         let _temp_2: any = this.var_72;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.addChild(this.var_72);
      }
      
      private StartFirstArenaOnNewProfile(): void
      {
         this.var_400 = true;
         this.arenaSelect.SelectArena(1);
      }
      
      public SoundCall(param1: Sound, param2: number = 1, param3: boolean = false): void
      {
         if(this.var_214 == true)
         {
            if(param3 == false)
            {
               this.sPlayer.PlaySound(param1,param2);
            }
            else
            {
               this.sPlayer.PlaySound(param1,param2,"interface");
            }
         }
      }
      
      public method_343(): void
      {
         if(this.arenaCreator != null)
         {
            this.arenaCreator.Destroy();
            if(this.contains(this.arenaCreator))
            {
               this.removeChild(this.arenaCreator);
            }
            this.arenaCreator = null;
         }
      }
      
      public method_216(): void
      {
         let _loc1_: number = NaN;
         this.method_169(new class_44(),0.8);
         if(this.var_344 == false)
         {
            this.mainmenu = new class_132();
            let _temp_3: any = this.mainmenu;
            let _temp_2: any = this.mainmenu;
            let _temp_1: any = 0;
            0;
            _temp_2.y = _temp_1;
            _temp_3.x = 0;
            this.addChild(this.mainmenu);
            this.mainmenu.Setup(this);
            this.method_151(2);
            if(this.gData.var_478 == true)
            {
               this.method_726();
            }
            _loc1_ = 0;
            if(this.objPlayer1Profile.profileName != "")
            {
               _loc1_++;
            }
            if(this.objPlayer2Profile.profileName != "")
            {
               _loc1_++;
            }
            if(this.objPlayer3Profile.profileName != "")
            {
               _loc1_++;
            }
            if(_loc1_ == 0)
            {
               this.gData.var_384 = true;
            }
            else
            {
               this.gData.var_384 = false;
            }
         }
         else
         {
            this.method_151(2);
            if(this.strArmorData.substr(0,1) == "G")
            {
               this.LoadStartUpArena(this.strArmorData);
            }
            else if(this.strArmorData.substr(0,1) == "A")
            {
               this.LoadStartUpTank(this.strArmorData);
            }
            else if(this.strArmorData.substr(0,1) == "E")
            {
               this.LoadStartUpTank(this.strArmorData);
            }
            this.var_344 = false;
         }
      }
      
      public method_611(): void
      {
         try
         {
            if(this.var_153 != null)
            {
               this.removeChild(this.var_153);
            }
            this.var_153 = null;
         }
         catch (e: any)
         {
         }
      }
      
      private GrabRetryInformation(): void
      {
         this.var_471 = this.objGameWorld.strArenaID;
         this.var_448 = this.objGameWorld.var_348;
         this.var_433 = this.objGameWorld.var_371;
         this.var_415 = this.objGameWorld.strArenaName;
      }
   }
