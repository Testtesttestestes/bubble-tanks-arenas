// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class BTAGameWorld extends MovieClip{
      
      public strArenaName: string;
      private objTutorialButtonController: class_3;
      private var_203: Function;
      private var_519: number;
      public var_487: number;
      public var_142: class_109;
      public var_259: number;
      public myAvatar: MovieClip;
      private objCurrentPlayerProfile: PlayerProfile;
      private var_403: number;
      public var_281: number;
      private var_176: number;
      public var_245: any[];
      private movJumpLocation: MovieClip;
      public var_95: any[];
      public objEffectsEngine: class_5;
      public currEffectLayer2: MovieClip;
      private var_244: any[];
      public blnBTA: boolean;
      public var_124: MovieClip;
      public var_348: string;
      public var_277: number;
      private strNextBFDirection: string;
      public var_371: boolean;
      private var_110: MovieClip;
      public var_291: number;
      private var_113: MovieClip;
      private var_169: number;
      public var_320: boolean;
      public currentBFTarget: class_109;
      private var_118: PauseMenu;
      public var_223: number;
      public var_470: number;
      public var_111: MovieClip;
      public intHitTimer: number;
      public nextEffectLayer2: MovieClip;
      private var_482: number;
      public var_467: number;
      private var_379: number;
      private binSearch: BinarySearch = new BinarySearch();
      public var_19: MovieClip;
      public var_71: number;
      public var_406: number;
      private moveX: number;
      private moveY: number;
      public var_534: number;
      public var_282: boolean;
      private arrBFData: any[];
      public var_101: MovieClip;
      public var_386: number;
      public var_159: boolean;
      private var_407: boolean;
      public var_206: number;
      public var_98: MovieClip;
      public mRef: class_79;
      public var_13: class_109;
      public objAvatarInterface: AvatarInterface;
      private var_466: number;
      public strArenaID: string;
      public const_2: class_7;
      public objCurrentArenaData: ArenaData = new ArenaData();
      public var_343: number;
      constructor(){
         super();
         this.strArenaID = "";
         this.strArenaName = "";
         this.arrBFData = new Array();
         this.var_244 = new Array();
         this.var_71 = -1;
         this.var_223 = 0;
         this.var_379 = 0;
         this.var_466 = 0;
         this.var_291 = 70;
         this.var_259 = 0;
         this.var_277 = 0;
         this.var_281 = 0;
         this.var_343 = 0;
         this.var_470 = 0;
         this.var_406 = 0;
         this.intHitTimer = -1;
         this.var_169 = 0;
         this.var_176 = 0;
         this.moveX = 0;
         this.moveY = 0;
         this.var_206 = 0;
         this.var_403 = 100000000;
         this.currentBFTarget = null;
         this.var_13 = null;
         this.movJumpLocation = null;
         this.var_407 = false;
         this.var_282 = false;
         this.var_371 = false;
         this.var_110 = null;
         this.var_113 = null;
         this.var_101 = null;
         this.var_124 = null;
         this.currEffectLayer2 = null;
         this.nextEffectLayer2 = null;
         this.var_19 = null;
         this.var_98 = null;
         this.var_111 = null;
         this.var_534 = 0;
         this.var_320 = true;
         this.var_159 = false;
         this.blnBTA = false;
         this.var_245 = new Array();
         this.var_95 = new Array();
      }
      
      public AvatarCallback(param1: class_113, param2: number = 1): void
      {
         this.method_404();
      }
      
      public method_460(param1: number = 1): void
      {
         if(param1 == 1)
         {
            ++this.var_281;
         }
         else if(param1 == 2)
         {
            ++this.var_487;
         }
      }
      
      private method_644(param1: number, param2: number): void
      {
         let _loc3_: class_6 = new class_6();
         let _loc4_: Point = this.var_13.BF_over_detail_mc.localToGlobal(new Point(this.movJumpLocation.x,this.movJumpLocation.y));
         _loc4_ = globalToLocal(_loc4_);
         param2 = this.method_632(this.myAvatar.x,this.myAvatar.y,_loc4_.x,_loc4_.y) / 10 * 0.9;
         _loc3_.x = Math.cos(Math.PI * param1 / 180) * param2;
         _loc3_.y = Math.sin(Math.PI * param1 / 180) * param2;
         this.moveX = _loc3_.x;
         this.moveY = _loc3_.y;
      }
      
      private method_641(): number
      {
         let _loc1_: Point = this.var_13.BF_over_detail_mc.localToGlobal(new Point(this.movJumpLocation.x,this.movJumpLocation.y));
         _loc1_ = globalToLocal(_loc1_);
         let _loc2_: class_6 = new class_6();
         _loc2_.x = _loc1_.x - this.myAvatar.x;
         _loc2_.y = _loc1_.y - this.myAvatar.y;
         let _loc3_: number = Math.atan2(_loc2_.y,_loc2_.x);
         return 360 * Math.atan2(_loc2_.y,_loc2_.x) / (2 * Math.PI);
      }
      
      private method_253(param1: SecurityErrorEvent): void
      {
      }
      
      private PlaceAvatar(): void
      {
         let _loc1_: TankData = new TankData();
         _loc1_.ImportTankData(this.mRef.objCurrentPlayer.currentAvatar);
         this.myAvatar = _loc1_.method_61(1,this);
         let _temp_3: any = this.myAvatar;
         let _temp_2: any = this.myAvatar;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.var_482 = _loc1_.method_383() * 2;
         this.objAvatarInterface.method_720 = this.var_482;
         this.addChild(this.myAvatar);
         this.myAvatar.SetCallback(this.AvatarCallback);
         this.myAvatar.intState = 1;
         this.objAvatarInterface.UpdateAvatar(this,this.myAvatar,this.mRef.objCurrentPlayer);
         this.myAvatar.AvatarLifeCorrect();
         this.var_110 = new class_61();
         this.var_110.x = this.var_142.x;
         this.var_110.y = this.var_142.y;
         this.addChild(this.var_110);
         if(this.myAvatar.arrSecondaryWeapons.length > 0 && this.mRef.objCurrentPlayer.var_234 == false)
         {
            this.mRef.objCurrentPlayer.var_234 = true;
            this.var_169 = 1;
            this.var_19 = new class_87();
            this.var_19.x = this.var_19.width / 2 * -1;
            this.var_19.y = this.var_19.height / 2 * -1;
            this.addChild(this.var_19);
            this.objTutorialButtonController = new class_3();
            this.objTutorialButtonController.Setup(this.btnUp,this.btnOver,this.btnOut);
            this.objTutorialButtonController.method_4(this.var_19.close_mc);
            this.var_19.close_mc.gotoAndStop("off");
         }
      }
      
      private method_583(param1: string, param2: any[]): void
      {
         let var_56: URLRequest;
         let var_157: URLVariables;
         let var_243: URLLoader;
         let var_307: string;
         let var_40: string = param1;
         let var_262: any[] = param2;
         let var_194: string = var_262.join(",");
         var var_106:String = var_40 + ";" + var_194;
         let var_411: string = class_1.method_1(769,779);
         let var_126: class_11 = new PKCS5();
         let var_346: ByteArray = class_13.toArray(class_13.method_22(var_106));
         let var_150: ByteArray = class_13.toArray(class_13.method_22(var_411));
         let var_257: class_12 = class_14.method_46("aes128-ecb",var_150,var_126);
         var_257.encrypt(var_346);
         var_106 = "" + String(class_13.method_52(var_346));
         var_307 = "http://s1.herointeractive.com/bta/loadArena.php";
         var_56 = new URLRequest(var_307);
         var_157 = new URLVariables();
         var_157.q = var_106;
         var_56.data = var_157;
         var_56.method = URLRequestMethod.POST;
         var_243 = new URLLoader();
         var_243 = new URLLoader();
         var_243.dataFormat = URLLoaderDataFormat.TEXT;
         var_243.addEventListener(Event.COMPLETE, this.method_278.bind(this));
         var_243.addEventListener(HTTPStatusEvent.HTTP_STATUS, this.method_280.bind(this));
         var_243.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
         var_243.addEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
         try
         {
            var_243.load(var_56);
         }
         catch (e: any)
         {
         }
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      private method_684(): void
      {
         if(this.var_379 != -1)
         {
            this.var_244[this.var_379].arrY[this.var_466].bfRef = this.currentBFTarget;
         }
         if(this.currentBFTarget != null)
         {
            this.objEffectsEngine.method_232();
            this.objEffectsEngine.method_297("TopEffectsLayer");
            this.objEffectsEngine.method_297("BottomEffectsLayer");
            this.currentBFTarget.Deactivate();
            this.removeChild(this.var_98);
            this.removeChild(this.var_101);
            this.currentBFTarget.effectLayer_under_mc.removeChild(this.currEffectLayer2);
            this.removeChild(this.currentBFTarget);
         }
         this.currentBFTarget = this.var_13;
         this.var_98 = this.var_111;
         this.currentBFTarget.method_235(this.var_98);
         this.var_101 = this.var_124;
         this.currEffectLayer2 = this.nextEffectLayer2;
         this.objEffectsEngine.method_119("TopEffectsLayer",this.var_101);
         this.objEffectsEngine.method_119("BottomEffectsLayer",this.currEffectLayer2);
         this.var_13 = null;
         this.var_111 = null;
         this.var_124 = null;
         this.nextEffectLayer2 = null;
         this.removeChild(this.var_110);
         this.var_110 = this.var_113;
         this.var_113 = null;
      }
      
      public PauseMenuSetup(): void
      {
         if(this.var_169 == 0)
         {
            if(this.var_118 == null)
            {
               this.var_118 = new PauseMenu(this);
               this.addChild(this.var_118);
               this.var_118.x = -275;
               this.var_118.y = -225;
               this.var_169 = 1;
               this.mRef.objBackgroundParticles.method_96();
               this.mRef.objBackgroundParticles2.method_96();
            }
         }
         else if(this.var_118 != null)
         {
            this.var_118.var_274 = true;
         }
      }
      
      private btnUp(param1: MouseEvent): void
      {
         if(param1.target.name == "close_mc")
         {
            this.objTutorialButtonController.method_10();
            this.objTutorialButtonController = null;
            if(this.var_19 != null)
            {
               this.removeChild(this.var_19);
            }
            this.var_169 = 0;
         }
      }
      
      private RetrieveAllArenaData(): void
      {
         let _loc6_: any[] = null;
         let _loc7_: any[] = null;
         let _loc8_: number = 0;
         let _loc1_: number = 0;
         let _loc2_: number = 0;
         let _loc3_: string = "";
         let _loc4_: any[] = new Array();
         let _loc5_: boolean = false;
         if(this.blnBTA == true)
         {
            _loc1_ = 0;
            while(_loc1_ < this.mRef.gData.var_14.length)
            {
               if(this.strArenaID == this.mRef.gData.var_14[_loc1_].ID)
               {
                  this.objCurrentArenaData = new ArenaData();
                  this.objCurrentArenaData.ImportArenaData(this.mRef.gData.var_14[_loc1_].arenaData);
                  break;
               }
               _loc1_++;
            }
         }
         else if(this.var_371 == false)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_348.length)
            {
               if(this.var_348.substr(_loc1_,1) == ",")
               {
                  this.arrBFData.push(_loc3_);
                  _loc3_ = "";
               }
               else
               {
                  _loc3_ += this.var_348.substr(_loc1_,1);
               }
               _loc1_++;
            }
            this.arrBFData.push(_loc3_);
            _loc1_ = 0;
            while(_loc1_ < this.arrBFData.length)
            {
               _loc5_ = false;
               _loc2_ = 0;
               while(_loc2_ < this.objCurrentPlayerProfile.arrSavedTanks.length)
               {
                  if(this.objCurrentPlayerProfile.arrSavedTanks[_loc2_].ID == this.arrBFData[_loc1_])
                  {
                     _loc5_ = true;
                  }
                  _loc2_++;
               }
               if(_loc5_ == false)
               {
                  _loc4_.push(this.arrBFData[_loc1_]);
               }
               _loc1_++;
            }
            this.method_583(this.strArenaID,_loc4_);
         }
         else
         {
            _loc6_ = this.mRef.objCurrentPlayer.var_38;
            _loc7_ = this.mRef.objCurrentPlayer.arrSavedTanks;
            _loc1_ = 0;
            while(_loc1_ < _loc6_.length)
            {
               if(_loc6_[_loc1_].ID == this.strArenaID)
               {
                  _loc2_ = 0;
                  while(_loc2_ < _loc6_[_loc1_].AllTanks.length)
                  {
                     _loc8_ = 0;
                     while(_loc8_ < _loc7_.length)
                     {
                        if(_loc7_[_loc8_].ID == _loc6_[_loc1_].AllTanks[_loc2_])
                        {
                           _loc7_[_loc8_].blnShowInSearch = "true";
                           break;
                        }
                        _loc8_++;
                     }
                     _loc2_++;
                  }
                  this.objCurrentArenaData = new ArenaData();
                  this.objCurrentArenaData.ImportArenaData(_loc6_[_loc1_].Data);
                  break;
               }
               _loc1_++;
            }
         }
      }
      
      private method_100(param1: MovieClip): number
      {
         let _loc2_: Point = new Point(this.myAvatar.x - this.currentBFTarget.x,this.myAvatar.y - this.currentBFTarget.y);
         let _loc3_: number = _loc2_.x - param1.x;
         let _loc4_: number = _loc2_.y - param1.y;
         return Math.sqrt(_loc3_ * _loc3_ + _loc4_ * _loc4_);
      }
      
      private MoveAvatarToNewBubblefieldLocation(): void
      {
         let _loc2_: number = 0;
         let _loc3_: Point = null;
         let _loc1_: Point = this.var_13.BF_over_detail_mc.localToGlobal(new Point(this.movJumpLocation.x,this.movJumpLocation.y));
         _loc1_ = globalToLocal(_loc1_);
         if(this.method_515(this.myAvatar.x,this.myAvatar.y,_loc1_.x,_loc1_.y) == true)
         {
            this.method_684();
            this.method_612();
            this.objAvatarInterface.method_708();
            this.objAvatarInterface.method_386 = true;
            this.method_294();
            this.var_282 = false;
            this.var_169 = 0;
            this.var_245.push(this.myAvatar.intTankLife);
            _loc2_ = 0;
            while(_loc2_ < this.myAvatar.arrPrimaryWeapons.length)
            {
               this.myAvatar.arrPrimaryWeapons[_loc2_].intCounter = 0;
               _loc2_++;
            }
            this.var_95.push(this.var_386 - this.var_467);
            if(this.var_95.length >= 2)
            {
               this.var_95[this.var_95.length - 1] -= this.var_95[this.var_95.length - 2];
            }
         }
         else
         {
            this.method_644(this.method_641(),5);
            this.currentBFTarget.x -= this.moveX;
            this.currentBFTarget.y -= this.moveY;
            this.currentBFTarget.avatarUnderBubble_mc.x += this.moveX;
            this.currentBFTarget.avatarUnderBubble_mc.y += this.moveY;
            this.mRef.objBackgroundParticles.method_215(this.moveX,this.moveY);
            this.mRef.objBackgroundParticles2.method_215(this.moveX,this.moveY);
            if(this.var_13 != null)
            {
               if(this.strNextBFDirection == "up")
               {
                  this.var_13.x = this.currentBFTarget.x;
                  this.var_13.y = this.currentBFTarget.y - this.var_13.var_160.height - this.var_176 + 4;
               }
               else if(this.strNextBFDirection == "down")
               {
                  this.var_13.x = this.currentBFTarget.x;
                  this.var_13.y = this.currentBFTarget.y + this.var_13.var_160.height + this.var_176 - 4;
               }
               else if(this.strNextBFDirection == "right")
               {
                  this.var_13.x = this.currentBFTarget.x + this.var_13.var_160.width + this.var_176 - 4;
                  this.var_13.y = this.currentBFTarget.y;
               }
               else if(this.strNextBFDirection == "left")
               {
                  this.var_13.x = this.currentBFTarget.x - this.var_13.var_160.width - this.var_176 + 4;
                  this.var_13.y = this.currentBFTarget.y;
               }
               _loc3_ = new Point(this.myAvatar.x - this.var_13.x,this.myAvatar.y - this.var_13.y);
               this.var_13.avatarUnderBubble_mc.x = _loc3_.x;
               this.var_13.avatarUnderBubble_mc.y = _loc3_.y;
               this.objAvatarInterface.method_382();
            }
            if(this.var_110 != null)
            {
               this.var_110.x = this.currentBFTarget.x;
               this.var_110.y = this.currentBFTarget.y;
            }
            if(this.var_98 != null)
            {
               this.var_98.x = this.currentBFTarget.x;
               this.var_98.y = this.currentBFTarget.y;
            }
            if(this.var_101 != null)
            {
               this.var_101.x = this.currentBFTarget.x;
               this.var_101.y = this.currentBFTarget.y;
            }
            if(this.var_113 != null)
            {
               this.var_113.x = this.var_13.x;
               this.var_113.y = this.var_13.y;
            }
            if(this.var_111 != null)
            {
               this.var_111.x = this.var_13.x;
               this.var_111.y = this.var_13.y;
            }
            if(this.var_124 != null)
            {
               this.var_124.x = this.var_13.x;
               this.var_124.y = this.var_13.y;
            }
            this.method_294();
         }
      }
      
      public method_573(): void
      {
         ++this.var_277;
      }
      
      private method_486(): void
      {
         this.var_142 = new class_133();
         let _temp_3: any = this.var_142;
         let _temp_2: any = this.var_142;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.addChild(this.var_142);
         this.var_142.var_413 = true;
         let _loc1_: MovieClip = new bfStartDisplay();
         let _temp_4: any = _loc1_;
         let _loc2_: number;
         _loc1_.y = _loc2_ = 0;
         _temp_4.x = 0;
         this.var_142.var_323 = _loc1_;
         this.var_142.addChild(_loc1_);
         if(this.strArenaID == "G90000168")
         {
            _loc1_.gotoAndStop("tut_1");
         }
         else
         {
            _loc1_.gotoAndStop("tutorial");
            _loc1_.arena_name_txt.text = this.strArenaName;
         }
         this.var_142.method_452 = this;
         this.var_142.Setup(this.mRef);
         this.currentBFTarget = this.var_142;
         this.currentBFTarget.var_160.rotation = 180;
         this.var_403 = this.currentBFTarget.BF_BG_mc.width / 2 * (this.currentBFTarget.BF_BG_mc.width / 2);
         this.var_98 = this.method_461();
         this.var_101 = this.method_326();
         this.currEffectLayer2 = this.method_415();
         this.currentBFTarget.method_235(this.var_98);
         this.objEffectsEngine.method_119("TopEffectsLayer",this.var_101);
         this.objEffectsEngine.method_119("BottomEffectsLayer",this.currEffectLayer2);
         stage.focus = stage;
      }
      
      private method_585(): void
      {
         if(this.intHitTimer > 0)
         {
            --this.intHitTimer;
         }
         else if(this.intHitTimer == 0)
         {
            this.intHitTimer = -1;
         }
      }
      
      private method_612(): void
      {
         let _loc1_: Point = this.localToGlobal(new Point(this.myAvatar.x,this.myAvatar.y));
         _loc1_ = this.currentBFTarget.globalToLocal(_loc1_);
         this.currentBFTarget.avatarUnderBubble_mc.x = _loc1_.x;
         this.currentBFTarget.avatarUnderBubble_mc.y = _loc1_.y;
         this.var_403 = this.currentBFTarget.BF_BG_mc.width / 2 * (this.currentBFTarget.BF_BG_mc.width / 2);
      }
      
      private method_632(param1: number, param2: number, param3: number, param4: number): number
      {
         let _loc5_: number = param1 - param3;
         let _loc6_: number = param2 - param4;
         return Math.sqrt(_loc5_ * _loc5_ + _loc6_ * _loc6_);
      }
      
      private btnOut(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("off");
      }
      
      public method_321(param1: number = 1): void
      {
         if(param1 == 1)
         {
            ++this.var_343;
         }
         else if(param1 == 2)
         {
            ++this.var_470;
         }
      }
      
      public Setup(param1: class_79, param2: Function, param3: PlayerProfile, param4: string, param5: string, param6: boolean = false, param7: string = "", param8: boolean = false): void
      {
         this.mRef = param1;
         this.var_371 = param6;
         this.blnBTA = param8;
         this.mRef.gData.var_67 = new Array();
         this.mRef.gData.var_67.push("right");
         this.objEffectsEngine = new class_5(this.mRef);
         this.var_203 = param2;
         this.objCurrentPlayerProfile = param3;
         this.strArenaName = param7;
         this.strArenaID = param4;
         this.var_348 = param5;
         this.RetrieveAllArenaData();
         this.const_2 = new class_7(this.mRef.stage);
         this.const_2.method_111(this.mRef.gData.hot5,this.PauseMenuSetup);
         this.method_486();
         this.method_529();
         this.PlaceAvatar();
         this.method_426();
         if(this.myAvatar.arrSecondaryWeapons.length > 0)
         {
            if(this.var_19 != null)
            {
               this.setChildIndex(this.var_19,numChildren - 1);
            }
         }
         this.var_519 = this.currentBFTarget.BF_BG_mc.width / 2;
         stage.focus = stage;
         this.var_467 = getTimer();
         this.var_386 = 0;
         this.var_245.push(this.myAvatar.intTankLife);
      }
      
      private btnOver(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("on");
      }
      
      public Run(): void
      {
         this.var_386 = getTimer();
         switch(this.var_169)
         {
            case 0:
               this.method_537();
               if(this.objAvatarInterface != null)
               {
                  this.objAvatarInterface.Run();
               }
               if(this.currentBFTarget != null)
               {
                  this.currentBFTarget.Run();
               }
               if(this.var_13 != null)
               {
                  this.var_13.Run();
               }
               if(this.myAvatar != null)
               {
                  this.myAvatar.Run();
               }
               if(this.objEffectsEngine != null)
               {
                  this.objEffectsEngine.Run();
               }
               this.method_692();
               break;
            case 1:
               if(this.var_118 != null)
               {
                  this.var_118.Run();
               }
               break;
            case 2:
               if(this.objAvatarInterface != null)
               {
                  this.objAvatarInterface.Run();
               }
               if(this.currentBFTarget != null)
               {
                  this.currentBFTarget.Run();
               }
               if(this.var_13 != null)
               {
                  this.var_13.Run();
               }
               if(this.objEffectsEngine != null)
               {
                  this.objEffectsEngine.Run();
               }
               this.MoveAvatarToNewBubblefieldLocation();
         }
         this.method_585();
      }
      
      private method_692(): void
      {
         if(this.var_159 == true)
         {
            if(this.var_291 > 0)
            {
               --this.var_291;
            }
            else if(this.var_291 == 0)
            {
               this.method_404();
               this.var_159 = false;
               this.var_291 = 0;
            }
         }
      }
      
      public AdjustBubblefieldObjects(param1: class_6): void
      {
         this.currentBFTarget.x -= param1.x;
         this.currentBFTarget.y -= param1.y;
         this.currentBFTarget.avatarUnderBubble_mc.x += param1.x;
         this.currentBFTarget.avatarUnderBubble_mc.y += param1.y;
         this.mRef.objBackgroundParticles.method_215(param1.x,param1.y);
         this.mRef.objBackgroundParticles2.method_215(param1.x,param1.y);
         if(this.var_110 != null)
         {
            this.var_110.x = this.currentBFTarget.x;
            this.var_110.y = this.currentBFTarget.y;
         }
         if(this.var_98 != null)
         {
            this.var_98.x = this.currentBFTarget.x;
            this.var_98.y = this.currentBFTarget.y;
         }
         if(this.var_101 != null)
         {
            this.var_101.x = this.currentBFTarget.x;
            this.var_101.y = this.currentBFTarget.y;
         }
         if(this.var_113 != null)
         {
            this.var_113.x = this.var_13.x;
            this.var_113.y = this.var_13.y;
         }
         if(this.var_111 != null)
         {
            this.var_111.x = this.var_13.x;
            this.var_111.y = this.var_13.y;
         }
         if(this.var_124 != null)
         {
            this.var_124.x = this.var_13.x;
            this.var_124.y = this.var_13.y;
         }
         this.method_294();
      }
      
      private method_404(): void
      {
         if(this.var_320 == true)
         {
            this.var_245.push(this.myAvatar.intTankLife);
            this.var_95.push(this.var_386 - this.var_467);
            this.var_95[this.var_95.length - 1] -= this.var_95[this.var_95.length - 2];
            this.var_169 = 1;
            this.mRef.objBackgroundParticles.method_96();
            this.mRef.objBackgroundParticles2.method_96();
            this.mRef.method_404(this.strArenaID);
            this.var_320 = false;
         }
      }
      
      private method_254(param1: IOErrorEvent): void
      {
      }
      
      private method_529(): void
      {
         this.objAvatarInterface = new AvatarInterface();
         this.objAvatarInterface.x = -275;
         this.objAvatarInterface.y = -225;
         this.addChild(this.objAvatarInterface);
         this.objAvatarInterface.Setup(this.mRef,this.mRef.stage,this.AvatarInterfaceCallback,this.AdjustBubblefieldObjects);
      }
      
      private method_820(): number
      {
         let _loc1_: number = this.RandNum(6,22);
         return _loc1_ * 0.1;
      }
      
      public Deactivate(param1: boolean = true, param2: boolean = false): void
      {
         if(this.var_98 != null)
         {
            this.removeChild(this.var_98);
         }
         this.var_98 = null;
         if(this.var_111 != null)
         {
            this.removeChild(this.var_111);
         }
         this.var_111 = null;
         if(this.var_101 != null)
         {
            this.removeChild(this.var_101);
         }
         this.var_101 = null;
         if(this.currEffectLayer2 != null)
         {
            this.currentBFTarget.effectLayer_under_mc.removeChild(this.currEffectLayer2);
         }
         this.currEffectLayer2 = null;
         if(this.var_124 != null)
         {
            this.removeChild(this.var_124);
         }
         this.var_124 = null;
         if(this.nextEffectLayer2 != null)
         {
            this.var_13.effectLayer_under_mc.removeChild(this.nextEffectLayer2);
         }
         this.nextEffectLayer2 = null;
         if(this.currentBFTarget != null)
         {
            this.removeChild(this.currentBFTarget);
         }
         this.currentBFTarget = null;
         if(this.var_13 != null)
         {
            this.removeChild(this.var_13);
         }
         this.var_13 = null;
         if(this.myAvatar != null)
         {
            this.removeChild(this.myAvatar);
         }
         this.myAvatar = null;
         this.var_244 = null;
         this.const_2.method_389(this.mRef.gData.hot5);
         this.mRef = null;
         this.objCurrentPlayerProfile = null;
         if(this.var_118 != null)
         {
            this.removeChild(this.var_118);
         }
         this.var_118 = null;
         this.objCurrentArenaData = null;
         this.binSearch = null;
         this.objEffectsEngine = null;
         if(this.objAvatarInterface != null)
         {
            this.removeChild(this.objAvatarInterface);
         }
         this.objAvatarInterface = null;
         this.const_2 = null;
         this.var_142 = null;
         this.movJumpLocation = null;
         this.var_110 = null;
         this.var_113 = null;
         this.arrBFData = null;
         if(param1)
         {
            this.var_203(param2);
         }
         this.var_203 = null;
      }
      
      public method_593(): void
      {
         let _loc1_: boolean = false;
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         let _loc4_: number = 0;
         if(this.objCurrentArenaData.var_6[this.var_71 + 1] != null)
         {
            this.mRef.gData.var_67.push("right");
         }
         ++this.var_206;
         if(this.var_206 >= this.objCurrentArenaData.var_6.length)
         {
            if(this.mRef.blnBTAUnlocked == false)
            {
               _loc1_ = false;
               _loc2_ = 0;
               while(_loc2_ < this.mRef.objCurrentPlayer.arrBeatArenaIDs.length)
               {
                  if(this.mRef.objCurrentPlayer.arrBeatArenaIDs[_loc2_] == this.strArenaID)
                  {
                     _loc1_ = true;
                     break;
                  }
                  _loc2_++;
               }
               if(_loc1_ == false)
               {
                  this.mRef.objCurrentPlayer.arrBeatArenaIDs.push(this.strArenaID);
               }
               if(this.blnBTA == true)
               {
                  _loc3_ = 0;
                  while(_loc3_ < this.mRef.gData.var_14.length)
                  {
                     if(this.strArenaID == this.mRef.gData.var_14[_loc3_].ID)
                     {
                        _loc4_ = 0;
                        while(_loc4_ < this.mRef.gData.var_14[_loc3_].arrLevels.length)
                        {
                           if(this.mRef.gData.var_14[this.mRef.gData.var_14[_loc3_].arrLevels[_loc4_] - 1] != null)
                           {
                              this.mRef.gData.var_14[this.mRef.gData.var_14[_loc3_].arrLevels[_loc4_] - 1].blnLocked = false;
                           }
                           _loc4_++;
                        }
                        break;
                     }
                     _loc3_++;
                  }
               }
            }
            this.var_159 = true;
            this.objAvatarInterface.var_472 = true;
            if(this.blnBTA == true)
            {
               if(this.mRef.objCurrentPlayer.var_178 == 0)
               {
                  this.mRef.objCurrentPlayer.var_178 = 1;
               }
            }
         }
         else if(this.strArenaID != "G90000168")
         {
            this.currentBFTarget.var_323.gotoAndPlay("complete");
         }
         else if(this.var_71 == 3)
         {
            this.currentBFTarget.var_323.gotoAndPlay("complete");
         }
      }
      
      private UpdateJumpLocation(param1: MovieClip): void
      {
         if(param1.name == "BFPoint_left_mc")
         {
            this.movJumpLocation = this.var_13.BF_over_detail_mc[this.var_13.BF_over_detail_mc.BFPoint_right_mc.name];
         }
         else if(param1.name == "BFPoint_right_mc")
         {
            this.movJumpLocation = this.var_13.BF_over_detail_mc[this.var_13.BF_over_detail_mc.BFPoint_left_mc.name];
         }
         else if(param1.name == "BFPoint_top_mc")
         {
            this.movJumpLocation = this.var_13.BF_over_detail_mc[this.var_13.BF_over_detail_mc.BFPoint_bottom_mc.name];
         }
         else if(param1.name == "BFPoint_bottom_mc")
         {
            this.movJumpLocation = this.var_13.BF_over_detail_mc[this.var_13.BF_over_detail_mc.BFPoint_top_mc.name];
         }
      }
      
      private method_415(): MovieClip
      {
         let _loc1_: MovieClip = new class_116();
         if(this.var_13 != null)
         {
            _loc1_.x = this.var_13.effectLayer_under_mc.x;
            _loc1_.y = this.var_13.effectLayer_under_mc.y;
            this.var_13.effectLayer_under_mc.addChild(_loc1_);
         }
         else
         {
            _loc1_.x = this.currentBFTarget.x;
            _loc1_.y = this.currentBFTarget.y;
            this.currentBFTarget.effectLayer_under_mc.addChild(_loc1_);
         }
         return _loc1_;
      }
      
      private method_294(): void
      {
         let _loc2_: Point = null;
         let _loc1_: Point = new Point(this.myAvatar.x - this.currentBFTarget.x,this.myAvatar.y - this.currentBFTarget.y);
         if(this.var_13 != null)
         {
            _loc2_ = new Point(this.myAvatar.x - this.var_13.x,this.myAvatar.y - this.var_13.y);
         }
         if(this.var_13 != null)
         {
            if(_loc2_.x > 0)
            {
               this.var_13.var_160.rotation = 0;
            }
            else
            {
               this.var_13.var_160.rotation = 180;
            }
         }
         if(this.var_407 == false)
         {
            if(_loc1_.x > 0)
            {
               this.currentBFTarget.var_160.rotation = 0;
               this.var_407 = true;
            }
         }
         else if(_loc1_.x <= 0)
         {
            this.currentBFTarget.var_160.rotation = 180;
            this.var_407 = false;
         }
      }
      
      public DamageDoneIncr(param1: number): void
      {
         this.var_406 += param1;
      }
      
      private AvatarInterfaceCallback(): void
      {
         if(this.objAvatarInterface != null)
         {
            this.removeChild(this.objAvatarInterface);
         }
         this.objAvatarInterface = null;
      }
      
      public method_392(): MovieClip
      {
         let _loc1_: MovieClip = this.currentBFTarget.BF_over_detail_mc.BFPoint_left_mc;
         let _loc2_: number = this.method_100(this.currentBFTarget.BF_over_detail_mc.BFPoint_left_mc);
         if(this.method_100(this.currentBFTarget.BF_over_detail_mc.BFPoint_right_mc) < _loc2_)
         {
            _loc1_ = this.currentBFTarget.BF_over_detail_mc.BFPoint_right_mc;
            _loc2_ = this.method_100(this.currentBFTarget.BF_over_detail_mc.BFPoint_right_mc);
         }
         if(this.method_100(this.currentBFTarget.BF_over_detail_mc.BFPoint_top_mc) < _loc2_)
         {
            _loc1_ = this.currentBFTarget.BF_over_detail_mc.BFPoint_top_mc;
            _loc2_ = this.method_100(this.currentBFTarget.BF_over_detail_mc.BFPoint_top_mc);
         }
         if(this.method_100(this.currentBFTarget.BF_over_detail_mc.BFPoint_bottom_mc) < _loc2_)
         {
            _loc1_ = this.currentBFTarget.BF_over_detail_mc.BFPoint_bottom_mc;
            _loc2_ = this.method_100(this.currentBFTarget.BF_over_detail_mc.BFPoint_bottom_mc);
         }
         return _loc1_;
      }
      
      private method_537(): void
      {
         let _loc1_: MovieClip = null;
         let _loc2_: number = NaN;
         let _loc3_: boolean = false;
         let _loc4_: number = 0;
         if(this.var_282 == false)
         {
            if(this.method_704() == true)
            {
               _loc1_ = this.method_392();
               _loc2_ = 0;
               _loc3_ = false;
               _loc4_ = 0;
               if(_loc1_.name == "BFPoint_left_mc")
               {
                  _loc4_ = 0;
                  while(_loc4_ < this.mRef.gData.var_67.length)
                  {
                     if(this.mRef.gData.var_67[_loc4_] == "left")
                     {
                        _loc3_ = true;
                        _loc2_ = 1;
                        break;
                     }
                     _loc4_++;
                  }
               }
               else if(_loc1_.name == "BFPoint_right_mc")
               {
                  _loc4_ = 0;
                  while(_loc4_ < this.mRef.gData.var_67.length)
                  {
                     if(this.mRef.gData.var_67[_loc4_] == "right")
                     {
                        _loc3_ = true;
                        _loc2_ = 2;
                        break;
                     }
                     _loc4_++;
                  }
               }
               else if(_loc1_.name == "BFPoint_top_mc")
               {
                  _loc4_ = 0;
                  while(_loc4_ < this.mRef.gData.var_67.length)
                  {
                     if(this.mRef.gData.var_67[_loc4_] == "up")
                     {
                        _loc3_ = true;
                        _loc2_ = 3;
                        break;
                     }
                     _loc4_++;
                  }
               }
               else if(_loc1_.name == "BFPoint_bottom_mc")
               {
                  _loc4_ = 0;
                  while(_loc4_ < this.mRef.gData.var_67.length)
                  {
                     if(this.mRef.gData.var_67[_loc4_] == "down")
                     {
                        _loc3_ = true;
                        _loc2_ = 4;
                        break;
                     }
                     _loc4_++;
                  }
               }
               if(_loc3_ == true)
               {
                  if(_loc2_ == 1)
                  {
                     this.method_195("left",1);
                  }
                  else if(_loc2_ == 2)
                  {
                     this.method_195("right",1);
                  }
                  else if(_loc2_ == 3)
                  {
                     this.method_195("up",1);
                  }
                  else if(_loc2_ == 4)
                  {
                     this.method_195("down",1);
                  }
                  this.var_282 = true;
                  this.objAvatarInterface.method_386 = false;
                  this.UpdateJumpLocation(_loc1_);
                  this.var_169 = 2;
               }
               else
               {
                  this.objAvatarInterface.method_349();
               }
            }
         }
      }
      
      private method_326(): MovieClip
      {
         let _loc1_: MovieClip = new class_93();
         _loc1_.x = this.currentBFTarget.x;
         _loc1_.y = this.currentBFTarget.y;
         this.addChild(_loc1_);
         return _loc1_;
      }
      
      public method_426(): void
      {
         if(this.myAvatar != null)
         {
            this.setChildIndex(this.myAvatar,numChildren - 1);
         }
         if(this.var_98 != null)
         {
            this.setChildIndex(this.var_98,numChildren - 1);
         }
         if(this.var_111 != null)
         {
            this.setChildIndex(this.var_111,numChildren - 1);
         }
         if(this.var_101 != null)
         {
            this.setChildIndex(this.var_101,numChildren - 1);
         }
         if(this.var_124 != null)
         {
            this.setChildIndex(this.var_124,numChildren - 1);
         }
         if(this.var_110 != null)
         {
            this.setChildIndex(this.var_110,numChildren - 1);
         }
         if(this.var_113 != null)
         {
            this.setChildIndex(this.var_113,numChildren - 1);
         }
         if(this.objAvatarInterface != null)
         {
            this.setChildIndex(this.objAvatarInterface,numChildren - 1);
         }
      }
      
      public TanksDefeatedIncr(): void
      {
         ++this.var_259;
      }
      
      private method_704(): boolean
      {
         let _loc1_: number = this.myAvatar.x - this.currentBFTarget.x;
         let _loc2_: number = this.myAvatar.y - this.currentBFTarget.y;
         if(_loc1_ * _loc1_ + _loc2_ * _loc2_ > this.var_403)
         {
            return true;
         }
         return false;
      }
      
      private method_278(param1: Event): void
      {
         let var_157: XML = null;
         let var_243: XML = null;
         let var_126: XML = null;
         let var_411: TankData = null;
         let var_106: boolean = false;
         let var_257: number = 0;
         let var_346: any[] = null;
         let var_307: number = 0;
         let var_150: TankData = null;
         let var_262: number = 0;
         let var_194: Event = param1;
         let var_56: URLLoader = (var_194.target as unknown as URLLoader);
         let var_40: number = 0;
         try
         {
            var_126 = new XML(var_56.data);
            var_40 = Number(var_126.children()[0].attribute("intStatus"));
         }
         catch (e: any)
         {
            var_40 = 0;
         }
         if(var_40 != 1000)
         {
         }
         for (let var_157 of var_126.TANK)
         {
            var_411 = new TankData();
            var_411.ImportTankData(var_157.DATA);
            var_411.strID = var_157.ID;
            this.mRef.objCurrentPlayer.method_73(var_411.ExportTankData());
         }
         for (let var_243 of var_126.ARENA)
         {
            var_106 = false;
            var_257 = 0;
            while(var_257 < this.mRef.objCurrentPlayer.var_38.length)
            {
               if(this.mRef.objCurrentPlayer.var_38[var_257].ID == var_243.ID)
               {
                  var_106 = true;
               }
               var_257++;
            }
            if(this.objCurrentArenaData.ImportArenaData(var_243.DATA) == true)
            {
               this.AbortArena();
               return;
            }
            this.objCurrentArenaData.strID = var_243.ID;
            if(var_106 == false)
            {
               this.mRef.objCurrentPlayer.method_283(this.objCurrentArenaData);
            }
            var_346 = new Array();
            var_307 = 0;
            while(var_307 < this.objCurrentArenaData.var_6[0].arrEnemies.length)
            {
               var_150 = this.mRef.objCurrentPlayer.RetrieveTankBasedOnID(this.objCurrentArenaData.var_6[0].arrEnemies[var_307].ID);
               var_346.push({
                  "ID":this.objCurrentArenaData.var_6[0].arrEnemies[var_307].ID,
                  "AMT":this.objCurrentArenaData.var_6[0].arrEnemies[var_307].number,
                  "DATA":var_150
               });
               var_307++;
            }
         }
         if(this.objCurrentArenaData.var_6.length == 0)
         {
            var_262 = 0;
            while(var_262 < this.mRef.gData.var_67.length)
            {
               if(this.mRef.gData.var_67[var_262] == "right")
               {
                  this.mRef.gData.var_67.splice(var_262,1);
               }
               var_262++;
            }
         }
         this.mRef.SaveAllData();
         this.mRef.SaveGameData();
      }
      
      public PauseMenuDestroy(): void
      {
         if(this.var_169 == 1)
         {
            if(this.var_118 != null)
            {
               this.var_118.Destroy();
               this.removeChild(this.var_118);
               this.var_118 = null;
               this.var_169 = 0;
               this.mRef.objBackgroundParticles.method_55();
               this.mRef.objBackgroundParticles2.method_55();
            }
         }
         stage.focus = stage;
      }
      
      private method_515(param1: number, param2: number, param3: number, param4: number): boolean
      {
         let _loc5_: number = param1 - param3;
         let _loc6_: number = param2 - param4;
         if(_loc5_ * _loc5_ + _loc6_ * _loc6_ < 25)
         {
            return true;
         }
         return false;
      }
      
      private method_195(param1: string, param2: number = 1): void
      {
         let _loc6_: MovieClip = null;
         null;
         0;
         null;
         let _loc3_: number = 0;
         let _loc4_: number = 0;
         this.var_379 = this.var_71;
         this.var_466 = this.var_223;
         if(param1 == "up")
         {
            --this.var_223;
         }
         else if(param1 == "down")
         {
            ++this.var_223;
         }
         else if(param1 == "right")
         {
            ++this.var_71;
         }
         else if(param1 == "left")
         {
            --this.var_71;
         }
         let _loc5_: class_109 = this.binSearch.bSearch(this.var_244,this.var_71,this.var_223);
         if(this.var_244[this.var_71] == null || this.var_244[this.var_71] == undefined)
         {
            this.var_244.push({
               "xVal":this.var_71,
               "arrY":[{
                  "yVal":this.var_223,
                  "bfRef":_loc5_
               }]
            });
            if(this.objCurrentArenaData.var_6[this.var_71] != null)
            {
               _loc6_ = new bfStartDisplay();
               _loc6_.x = _loc6_.y = 0;
               _loc5_.var_323 = _loc6_;
               _loc5_.enemyLayer_mc.addChild(_loc6_);
               if(this.strArenaID == "G90000168")
               {
                  if(this.var_71 == 0)
                  {
                     _loc6_.gotoAndStop("tut_2");
                  }
                  else if(this.var_71 == 1)
                  {
                     _loc6_.gotoAndStop("tut_3");
                  }
                  else if(this.var_71 == 2)
                  {
                     _loc6_.gotoAndStop("tut_4");
                  }
                  else
                  {
                     _loc6_.gotoAndStop("ag");
                  }
               }
               else
               {
                  _loc6_.gotoAndStop("ag");
               }
               let _loc7_: any[] = new Array();
               let _loc8_: number = 0;
               while(0 < this.objCurrentArenaData.var_6[this.var_71].arrEnemies.length)
               {
                  let _loc9_: TankData = this.mRef.objCurrentPlayer.RetrieveTankBasedOnID(this.objCurrentArenaData.var_6[this.var_71].arrEnemies[0].ID);
                  null.push({
                     "ID":this.objCurrentArenaData.var_6[this.var_71].arrEnemies[0].ID,
                     "AMT":this.objCurrentArenaData.var_6[this.var_71].arrEnemies[0].number,
                     "DATA":null
                  });
                  _loc8_ = 0 + 1;
               }
               _loc5_.method_452 = this;
               _loc5_.method_523 = null;
            }
         }
         else
         {
            _loc5_.ReAddAllTanks();
         }
         this.mRef.gData.var_67 = new Array();
         this.strNextBFDirection = param1;
         if(param2 != 1)
         {
            _loc5_.effect_mask_under.scaleX = _loc5_.effect_mask_under.scaleY = param2;
            _loc5_.var_160.scaleX = _loc5_.var_160.scaleY = param2;
            _loc5_.BF_over_detail_mc.scaleX = _loc5_.BF_over_detail_mc.scaleY = param2;
            _loc5_.BF_BG_mc.scaleX = _loc5_.BF_BG_mc.scaleY = param2;
            this.var_519 = _loc5_.BF_BG_mc.width / 2;
         }
         this.var_176 = Math.floor((this.currentBFTarget.width - _loc5_.width) / 2);
         if(param1 == "up")
         {
            _loc4_ = this.currentBFTarget.y - _loc5_.height - this.var_176 + 4;
         }
         else if(param1 == "down")
         {
            _loc4_ = this.currentBFTarget.y + _loc5_.height + this.var_176 - 4;
         }
         else if(param1 == "right")
         {
            _loc3_ = this.currentBFTarget.x + _loc5_.width + this.var_176 - 4;
         }
         else if(param1 == "left")
         {
            _loc3_ = this.currentBFTarget.x - _loc5_.width - this.var_176 + 4;
         }
         _loc5_.x = _loc3_;
         _loc5_.y = _loc4_;
         this.addChild(_loc5_);
         _loc5_.var_160.rotation = 180;
         _loc5_.Setup(this.mRef);
         this.var_13 = _loc5_;
         this.var_113 = new class_61();
         this.var_113.x = this.var_13.x;
         this.var_113.y = this.var_13.y;
         this.addChild(this.var_113);
         this.var_111 = this.method_461();
         this.var_124 = this.method_326();
         this.nextEffectLayer2 = this.method_415();
         this.var_13.method_235(this.var_111);
         this.method_426();
         stage.focus = stage;
      }
      
      private AbortArena(): void
      {
         this.Deactivate(true,true);
      }
      
      private method_461(): MovieClip
      {
         let _loc1_: MovieClip = new class_69();
         _loc1_.x = this.currentBFTarget.x;
         _loc1_.y = this.currentBFTarget.y;
         this.addChild(_loc1_);
         return _loc1_;
      }
      
      private method_280(param1: HTTPStatusEvent): void
      {
      }
   }
