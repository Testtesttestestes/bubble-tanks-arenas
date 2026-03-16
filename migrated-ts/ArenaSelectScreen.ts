// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class ArenaSelectScreen extends MovieClip{
      
      private objTutorialButtonController: class_3;
      private var_203: Function;
      private var_256: number;
      private var_362: number;
      private var_52: any[];
      private numSlot2: number;
      private arrSingleArenaID: any[];
      private numSlot3: number;
      private var_258: number;
      private var_476: boolean;
      private var_372: boolean;
      private arenaCompleteTextCounterDelay: number;
      private var_36: number;
      private var_380: number;
      private var_112: any[];
      private objButtonController2: class_3;
      private var_9: any[];
      public inner: MovieClip;
      private arrSearchFilters: any[];
      private var_417: number;
      private urlLoader: URLLoader = new URLLoader();
      private var_322: boolean;
      private blnSingleIDSearch: boolean;
      public var_109: MovieClip;
      private var_143: any[];
      private blnHeroSeverDown: boolean;
      private var_312: boolean;
      private var_363: MovieClip;
      private objButtonController: class_3;
      private blnSelectNewProfile: boolean;
      private var_340: boolean;
      private blnRefreshServerLevelsOnSearch: boolean;
      public var_19: MovieClip;
      private var_423: MovieClip;
      private var_457: any[];
      private var_216: number;
      private strSelectedArenaName: string;
      private var_135: number;
      private var_32: number;
      private arrSearchSorts: any[];
      private strCurrentLevelType: string;
      private var_576: boolean;
      private numStartSection: number;
      private var_443: number;
      private var_516: boolean;
      private mRef: class_79;
      private var_152: boolean;
      private var_283: number;
      public aSlot: MovieClip;
      constructor(){
         super();
         addFrameScript(34,this.frame35);
         this.var_476 = true;
         this.blnRefreshServerLevelsOnSearch = false;
         this.blnSingleIDSearch = false;
         this.var_372 = false;
         this.var_340 = false;
         this.var_322 = true;
         this.blnHeroSeverDown = false;
         this.var_19 = null;
         this.var_216 = 0;
         this.var_36 = 1;
         this.var_32 = 0;
         this.var_256 = -1;
         this.var_135 = 1;
         this.var_258 = -1;
         this.var_443 = 0;
         this.var_417 = 0;
         this.var_283 = 1;
         this.arenaCompleteTextCounterDelay = 7;
         this.strSelectedArenaName = "";
         this.var_52 = new Array();
         this.var_457 = new Array();
         this.arrSingleArenaID = new Array();
      }
      
      private btnUp2(param1: MouseEvent): void
      {
         if(param1.target.name == "search_back_btn")
         {
            this.method_287();
         }
         else if(param1.target.name == "search_btn")
         {
            this.SearchArenas();
         }
         else
         {
            this.method_763(param1.target.name);
         }
      }
      
      public SwitchLevelType(param1: string, param2: boolean = false): void
      {
         this.mRef.gData.var_189 = this.var_112;
         this.mRef.SaveGameData();
         if(this.strCurrentLevelType != param1 || param2 == true)
         {
            this.var_258 = -1;
            this.strCurrentLevelType = param1;
            if(param1 == "bta")
            {
               this.inner.level_connect.y = 226;
               this.inner.right_box.gotoAndStop("bta");
               this.inner.right_box.scrollBar.x = 325;
               this.inner.right_box.scrollBar.y = 27;
               this.inner.right_box.scrollBar.gotoAndStop("off");
               this.inner.right_box.upArrow_mc.gotoAndStop("off");
               this.inner.right_box.downArrow_mc.gotoAndStop("off");
               this.inner.right_box.arenaSlotLoader.x = 8;
               this.inner.right_box.arenaSlotLoader.y = 32;
               this.inner.right_box.upArrow_mc.x = 323;
               this.inner.right_box.downArrow_mc.x = 341;
            }
            else if(param1 == "server")
            {
               this.inner.level_connect.y = 252;
               this.inner.right_box.gotoAndStop("server");
               this.inner.right_box.scrollBar.x = 387;
               this.inner.right_box.scrollBar.y = 27;
               this.inner.right_box.upArrow_mc.x = 1000;
               this.inner.right_box.downArrow_mc.x = 1000;
               this.inner.right_box.arenaSlotLoader.x = 387;
               this.inner.right_box.arenaSlotLoader.y = 63;
            }
            else if(param1 == "local")
            {
               this.inner.level_connect.y = 278;
               this.inner.right_box.gotoAndStop("local");
               this.inner.right_box.scrollBar.x = 325;
               this.inner.right_box.scrollBar.y = 27;
               this.inner.right_box.scrollBar.gotoAndStop("off");
               this.inner.right_box.upArrow_mc.gotoAndStop("off");
               this.inner.right_box.downArrow_mc.gotoAndStop("off");
               this.inner.right_box.arenaSlotLoader.x = 8;
               this.inner.right_box.arenaSlotLoader.y = 32;
            }
            this.inner.right_box.rightWhite.gotoAndPlay("flash");
            this.method_728();
         }
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      private tutUp(param1: MouseEvent): void
      {
         this.objTutorialButtonController.method_10();
         this.removeChild(this.var_19);
      }
      
      private method_209(param1: any[], param2: any[]): void
      {
         let var_126: class_11;
         let var_150: ByteArray;
         let var_157: URLRequest;
         let var_257: URLVariables;
         let var_243: URLLoader;
         let var_411: ByteArray;
         let var_563: class_12;
         let var_572: number;
         let var_562: string;
         let var_587: string;
         let var_549: any[] = null;
         let var_262: any[] = param1;
         let var_56: any[] = param2;
         let var_106: string = "";
         let var_194: string = "";
         let var_307: any[] = new Array();
         let var_40: any[] = new Array();
         let var_346: number = 0;
         while(var_346 < var_262.length)
         {
            var_549 = this.method_571(var_262[var_346]);
            var_106 += var_549[0] + "," + var_549[1] + "," + var_549[2] + ";";
            var_346++;
         }
         var_106 = var_106.substr(0,var_106.length - 1);
         var_572 = 0;
         while(var_572 < var_56.length)
         {
            var_549 = this.method_560(var_56[var_572]);
            var_194 += var_549[0] + "," + var_549[1] + ";";
            var_572++;
         }
         var_194 = var_194.substr(0,var_194.length - 1);
         var_106 += ":" + var_194;
         var_587 = "Jx82is9jAKs786wG";
         var_126 = new PKCS5();
         var_411 = class_13.toArray(class_13.method_22(var_106));
         var_150 = class_13.toArray(class_13.method_22(var_587));
         var_563 = class_14.method_46("aes128-ecb",var_150,var_126);
         var_563.encrypt(var_411);
         var_106 = "" + String(class_13.method_52(var_411));
         var_562 = "http://s1.herointeractive.com/bta/searchArenas.php";
         var_157 = new URLRequest(var_562);
         var_257 = new URLVariables();
         var_257.s = this.var_380;
         var_257.m = "Mode1";
         var_257.q = var_106;
         var_157.data = var_257;
         var_157.method = URLRequestMethod.POST;
         var_243 = new URLLoader();
         var_243 = new URLLoader();
         var_243.dataFormat = URLLoaderDataFormat.TEXT;
         var_243.addEventListener(Event.COMPLETE, this.method_278.bind(this));
         var_243.addEventListener(HTTPStatusEvent.HTTP_STATUS, this.method_280.bind(this));
         var_243.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
         var_243.addEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
         try
         {
            var_243.load(var_157);
         }
         catch (e: any)
         {
         }
      }
      
      private btnUp(param1: MouseEvent): void
      {
         let _loc2_: boolean = false;
         let _loc3_: number = 0;
         let _loc4_: number = 0;
         let _loc5_: number = 0;
         let _loc6_: number = 0;
         let _loc7_: TankData = null;
         let _loc8_: boolean = false;
         let _loc9_: number = 0;
         if(this.var_152 == false)
         {
            _loc2_ = false;
            if(param1.target.name.substr(0,4) == "rate")
            {
               _loc3_ = 0;
               while(_loc3_ < 5)
               {
                  if(Number(param1.target.name.substr(4,1)) == _loc3_ + 1)
                  {
                     _loc4_ = 0;
                     while(_loc4_ < this.var_9.length)
                     {
                        if(this.var_9[_loc4_].mc.hitTestPoint(mouseX,mouseY,true) == true)
                        {
                           if(this.var_9[_loc4_].mc.currentFrame == 41)
                           {
                              return;
                           }
                           if(this.var_312 == true)
                           {
                              _loc5_ = 0;
                              _loc5_ = 0;
                              while(_loc5_ < 5)
                              {
                                 this.var_9[_loc4_].mc["rate" + (_loc5_ + 1)].selected_mc.gotoAndStop("off");
                                 _loc5_++;
                              }
                              _loc5_ = 0;
                              while(_loc5_ < 5)
                              {
                                 this.var_9[_loc4_].mc["rate" + (_loc5_ + 1)].selected_mc.gotoAndStop("on");
                                 if(_loc5_ == _loc3_)
                                 {
                                    break;
                                 }
                                 _loc5_++;
                              }
                              this.RateArena(Number(this.var_9[_loc4_].mc.name.substr(6)) + 1,_loc3_ + 1);
                              return;
                           }
                        }
                        _loc4_++;
                     }
                     break;
                  }
                  _loc3_++;
               }
            }
            else if(param1.target.name.substr(0,5) == "this.aSlot")
            {
               _loc6_ = 0;
               while(_loc6_ < this.var_9.length)
               {
                  if(this.var_9[_loc6_].mc == param1.target)
                  {
                     if(param1.target.currentFrame == 41)
                     {
                        return;
                     }
                     if(this.mRef.blnBTAUnlocked == true || this.var_9[_loc6_].blnLocked == false)
                     {
                        this.SelectArena(_loc6_ + 1);
                     }
                     break;
                  }
                  _loc6_++;
               }
            }
            else if(param1.target.name == "upArrow_mc")
            {
               this.method_186("up");
            }
            else if(param1.target.name == "downArrow_mc")
            {
               this.method_186("down");
            }
            else if(param1.target.name == "mm_btn")
            {
               this.mRef.method_216();
               this.method_97();
            }
            else if(param1.target.name == "changeAvatar_btn")
            {
               this.mRef.method_501();
               this.method_97();
            }
            else if(param1.target.name == "editAvatar_btn")
            {
               _loc7_ = new TankData();
               _loc7_.ImportTankData(this.mRef.objCurrentPlayer.currentAvatar);
               this.mRef.method_355("Avatar",_loc7_,true);
               this.method_97();
            }
            else if(param1.target.name == "BTALevels_btn")
            {
               this.SwitchLevelType("bta");
            }
            else if(param1.target.name == "serverLevels_btn")
            {
               this.SwitchLevelType("server");
            }
            else if(param1.target.name == "localLevels_btn")
            {
               this.SwitchLevelType("local");
            }
            else if(param1.target.name == "createArenas_btn")
            {
               this.mRef.method_348();
               this.method_97();
            }
            else if(param1.target.name == "createEnemy_btn")
            {
               this.mRef.method_355("Enemy");
               this.method_97();
            }
            else if(param1.target.name == "changeProfile_btn")
            {
               if(this.var_32 > 1)
               {
                  if(this.blnSelectNewProfile == false)
                  {
                     _loc2_ = true;
                     this.inner.top_left.gotoAndPlay("toDown");
                     if(this.var_32 == 2)
                     {
                        this.inner.top_left.inside.profile_slots.p_slot1.alpha = 1;
                        this.inner.top_left.inside.profile_slots.v1_txt.text = ">";
                        this.inner.top_left.inside.profile_slots.profileName2_txt.text = this.mRef["objPlayer" + this.numSlot2 + "Profile"].profileName;
                     }
                     else if(this.var_32 == 3)
                     {
                        this.inner.top_left.inside.profile_slots.p_slot1.alpha = 1;
                        this.inner.top_left.inside.profile_slots.p_slot2.alpha = 1;
                        this.inner.top_left.inside.profile_slots.v1_txt.text = ">";
                        this.inner.top_left.inside.profile_slots.v2_txt.text = ">";
                        this.inner.top_left.inside.profile_slots.profileName2_txt.text = this.mRef["objPlayer" + this.numSlot2 + "Profile"].profileName;
                        this.inner.top_left.inside.profile_slots.profileName3_txt.text = this.mRef["objPlayer" + this.numSlot3 + "Profile"].profileName;
                     }
                  }
               }
            }
            else if(param1.target.name == "p_slot1")
            {
               if(this.blnSelectNewProfile == true)
               {
                  this.inner.top_left.gotoAndPlay("toUp");
                  this.blnSelectNewProfile = false;
                  if(this.var_32 == 2)
                  {
                     this.inner.top_left.inside.profile_slots.p_slot1.alpha = 0;
                     this.inner.top_left.inside.profile_slots.v1_txt.text = "";
                     this.inner.top_left.inside.profile_slots.profileName2_txt.text = "";
                  }
                  else if(this.var_32 == 3)
                  {
                     this.inner.top_left.inside.profile_slots.p_slot1.alpha = 0;
                     this.inner.top_left.inside.profile_slots.p_slot2.alpha = 0;
                     this.inner.top_left.inside.profile_slots.v1_txt.text = "";
                     this.inner.top_left.inside.profile_slots.v2_txt.text = "";
                     this.inner.top_left.inside.profile_slots.profileName2_txt.text = "";
                     this.inner.top_left.inside.profile_slots.profileName3_txt.text = "";
                  }
                  this.ChangeProfile(this.numSlot2);
               }
            }
            else if(param1.target.name == "p_slot2")
            {
               if(this.blnSelectNewProfile == true)
               {
                  this.inner.top_left.gotoAndPlay("toUp");
                  this.blnSelectNewProfile = false;
                  if(this.var_32 == 2)
                  {
                     this.inner.top_left.inside.profile_slots.p_slot1.alpha = 0;
                     this.inner.top_left.inside.profile_slots.v1_txt.text = "";
                     this.inner.top_left.inside.profile_slots.profileName2_txt.text = "";
                  }
                  else if(this.var_32 == 3)
                  {
                     this.inner.top_left.inside.profile_slots.p_slot1.alpha = 0;
                     this.inner.top_left.inside.profile_slots.p_slot2.alpha = 0;
                     this.inner.top_left.inside.profile_slots.v1_txt.text = "";
                     this.inner.top_left.inside.profile_slots.v2_txt.text = "";
                     this.inner.top_left.inside.profile_slots.profileName2_txt.text = "";
                     this.inner.top_left.inside.profile_slots.profileName3_txt.text = "";
                  }
                  this.ChangeProfile(this.numSlot3);
               }
            }
            else if(param1.target.name == "searchMenu")
            {
               this.SearchMenu();
            }
            else if(param1.target.name == "search_back_btn")
            {
               this.method_287();
            }
            else if(param1.target.name == "load_ID")
            {
               _loc8_ = false;
               _loc9_ = 0;
               while(_loc9_ < this.inner.right_box.load_id_txt.length)
               {
                  if(this.inner.right_box.load_id_txt.text.substr(_loc9_,1) != "" && this.inner.right_box.load_id_txt.text.substr(_loc9_,1) != " ")
                  {
                     _loc8_ = true;
                  }
                  _loc9_++;
               }
               if(_loc8_ == true && this.inner.right_box.load_id_txt.text != "Enter Valid ID" && this.inner.right_box.load_id_txt.text.substr(0,1) == "G")
               {
                  this.SearchMenu();
                  this.SearchArenas(this.inner.right_box.load_id_txt.text);
               }
               else
               {
                  this.inner.right_box.load_id_txt.text = "Enter Valid ID";
               }
            }
            else if(param1.target.name == "page_up_btn")
            {
               this.method_260(1);
            }
            else if(param1.target.name == "page_down_btn")
            {
               this.method_260(2);
            }
            else if(param1.target.name == "page_top_btn")
            {
               this.method_260(3);
            }
            if(this.blnSelectNewProfile == true)
            {
               if(this.var_32 > 1)
               {
                  if(param1.target.name == "changeProfile_btn")
                  {
                     this.inner.top_left.gotoAndPlay("toUp");
                     this.blnSelectNewProfile = false;
                     if(this.var_32 == 2)
                     {
                        this.inner.top_left.inside.profile_slots.p_slot1.alpha = 0;
                        this.inner.top_left.inside.profile_slots.v1_txt.text = "";
                        this.inner.top_left.inside.profile_slots.profileName2_txt.text = "";
                     }
                     else if(this.var_32 == 3)
                     {
                        this.inner.top_left.inside.profile_slots.p_slot1.alpha = 0;
                        this.inner.top_left.inside.profile_slots.p_slot2.alpha = 0;
                        this.inner.top_left.inside.profile_slots.v1_txt.text = "";
                        this.inner.top_left.inside.profile_slots.v2_txt.text = "";
                        this.inner.top_left.inside.profile_slots.profileName2_txt.text = "";
                        this.inner.top_left.inside.profile_slots.profileName3_txt.text = "";
                     }
                  }
               }
            }
            if(_loc2_ == true)
            {
               this.blnSelectNewProfile = _loc2_;
            }
         }
         this.var_152 = false;
      }
      
      private method_178(param1: FocusEvent): void
      {
         param1.target.text = "";
         param1.target.removeEventListener(FocusEvent.FOCUS_IN, this.method_178.bind(this));
      }
      
      private method_253(param1: SecurityErrorEvent): void
      {
      }
      
      private method_685(): void
      {
         if(this.var_256 > 0)
         {
            --this.var_256;
         }
         else if(this.var_256 == 0)
         {
            this.var_256 = -1;
            this.var_312 = true;
         }
      }
      
      private method_287(): void
      {
         this.inner.search_sort_mc.gotoAndStop("off");
         this.objButtonController2.method_7(this.inner.search_sort_mc.search_back_btn);
         this.objButtonController2.method_7(this.inner.search_sort_mc.diff1);
         this.objButtonController2.method_7(this.inner.search_sort_mc.diff2);
         this.objButtonController2.method_7(this.inner.search_sort_mc.diff3);
         this.objButtonController2.method_7(this.inner.search_sort_mc.diff4);
         this.objButtonController2.method_7(this.inner.search_sort_mc.hi1);
         this.objButtonController2.method_7(this.inner.search_sort_mc.hi2);
         this.objButtonController2.method_7(this.inner.search_sort_mc.fa1);
         this.objButtonController2.method_7(this.inner.search_sort_mc.fa2);
         this.objButtonController2.method_7(this.inner.search_sort_mc.search_btn);
         this.objButtonController2.method_7(this.inner.search_sort_mc.search_btn);
      }
      
      private btnOut2(param1: MouseEvent): void
      {
         if(param1.target.currentFrame != 3)
         {
            param1.target.gotoAndStop("off");
         }
      }
      
      private stageUp(param1: MouseEvent): void
      {
         let _loc2_: number = 0;
         if(param1.target.name == "server_overlay" || param1.target.name == "play_mc" || param1.target.name == "trophy_mc" || param1.target.name == "score_txt" || param1.target.name == "arena_name_txt" || param1.target.name == "difficulty_txt" || param1.target.name == "bubble_fields_txt" || param1.target.name == "total_enemies_txt" || param1.target.name == "rating_txt")
         {
            _loc2_ = 0;
            while(_loc2_ < this.var_9.length)
            {
               if(this.var_9[_loc2_].mc.hitTestPoint(mouseX,mouseY,true) == true)
               {
                  if(this.var_9[_loc2_].mc.currentFrame != 41)
                  {
                     this.SelectArena(_loc2_ + 1);
                     break;
                  }
                  return;
               }
               _loc2_++;
            }
         }
         if(this.var_152 == true)
         {
            if(this.inner.right_box.scrollBar.hitTestPoint(mouseX,mouseY,true) == false)
            {
               this.var_152 = false;
               this.inner.right_box.scrollBar.gotoAndPlay("toOff");
               this.inner.right_box.upArrow_mc.gotoAndStop("off");
               this.inner.right_box.downArrow_mc.gotoAndStop("off");
            }
         }
      }
      
      private method_571(param1: string): any[]
      {
         null;
         let _loc2_: any[] = new Array();
         let _loc5_: number = -1;
         _loc5_ = param1.search(("[=><]" as unknown as RegExp));
         if(_loc5_ != -1)
         {
            let _loc8_: string = param1.substr(_loc5_,1);
            if(_loc8_ == "=")
            {
               let _loc4_: string = "1";
               let _loc6_: string = param1.substr(0,_loc5_);
               let _loc7_: string = param1.substr(_loc5_ + 1);
               if(_loc6_ == "page")
               {
                  let _loc3_: string = "1";
               }
               else if(_loc6_ == "author")
               {
                  _loc3_ = "2";
               }
               else if(_loc6_ == "name")
               {
                  _loc3_ = "3";
               }
               else if(_loc6_ == "id")
               {
                  _loc3_ = "4";
               }
               else if(_loc6_ == "featured")
               {
                  _loc3_ = "5";
               }
               else if(_loc6_ == "HI")
               {
                  _loc3_ = "6";
               }
               else if(_loc6_ == "difficulty")
               {
                  _loc3_ = "7";
               }
               else
               {
                  if(_loc6_ != "rating")
                  {
                     return _loc2_;
                  }
                  _loc3_ = "8";
               }
               _loc2_.push("");
               _loc2_.push("");
               _loc2_.push(_loc7_);
               return _loc2_;
            }
            return _loc2_;
         }
         return _loc2_;
      }
      
      public SearchArenas(param1: string = ""): void
      {
         this.var_457 = this.var_52;
         this.var_52 = new Array();
         this.var_216 = 1;
         this.var_36 = 1;
         this.var_380 = this.RandNum(1,5);
         this.arrSearchFilters = new Array();
         this.arrSearchSorts = new Array();
         this.arrSearchFilters.push("page=" + this.var_216);
         if(param1 != "")
         {
            this.arrSearchFilters.push("id=" + param1);
         }
         if(this.inner.search_sort_mc.diff1.currentFrame == 3)
         {
            this.arrSearchFilters.push("difficulty>" + this.mRef.gData.var_514);
            this.arrSearchFilters.push("difficulty<" + this.mRef.gData.var_468);
         }
         else if(this.inner.search_sort_mc.diff2.currentFrame == 3)
         {
            this.arrSearchFilters.push("difficulty>" + this.mRef.gData.var_468);
            this.arrSearchFilters.push("difficulty<" + this.mRef.gData.var_438);
         }
         else if(this.inner.search_sort_mc.diff3.currentFrame == 3)
         {
            this.arrSearchFilters.push("difficulty>" + this.mRef.gData.var_438);
            this.arrSearchFilters.push("difficulty<" + this.mRef.gData.var_427);
         }
         else if(this.inner.search_sort_mc.diff4.currentFrame == 3)
         {
            this.arrSearchFilters.push("difficulty>" + this.mRef.gData.var_427);
            this.arrSearchFilters.push("difficulty<" + this.mRef.gData.var_525);
         }
         if(this.inner.search_sort_mc.hi1.currentFrame == 3)
         {
            this.arrSearchFilters.push("HI=true");
         }
         else if(this.inner.search_sort_mc.hi2.currentFrame == 3)
         {
            this.arrSearchFilters.push("HI=false");
         }
         if(this.inner.search_sort_mc.fa1.currentFrame == 3)
         {
            this.arrSearchFilters.push("featured=true");
         }
         else if(this.inner.search_sort_mc.fa2.currentFrame == 3)
         {
            this.arrSearchFilters.push("featured=false");
         }
         let _loc2_: boolean = false;
         let _loc3_: number = 0;
         while(_loc3_ < this.inner.search_sort_mc.name_txt.length)
         {
            if(this.inner.search_sort_mc.name_txt.text.substr(_loc3_,1) != "" && this.inner.search_sort_mc.name_txt.text.substr(_loc3_,1) != " ")
            {
               _loc2_ = true;
            }
            _loc3_++;
         }
         if(_loc2_ == true && this.inner.search_sort_mc.name_txt.text != "ENTER NAME")
         {
            this.arrSearchFilters.push("name=" + this.inner.search_sort_mc.name_txt.text);
         }
         _loc2_ = false;
         let _loc4_: number = 0;
         while(_loc4_ < this.inner.search_sort_mc.author_txt.length)
         {
            if(this.inner.search_sort_mc.author_txt.text.substr(_loc4_,1) != "" && this.inner.search_sort_mc.author_txt.text.substr(_loc4_,1) != " ")
            {
               _loc2_ = true;
            }
            _loc4_++;
         }
         if(_loc2_ == true && this.inner.search_sort_mc.author_txt.text != "ENTER AUTHOR")
         {
            this.arrSearchFilters.push("author=" + this.inner.search_sort_mc.author_txt.text);
         }
         this.arrSearchSorts.push("rating descending");
         this.arrSearchSorts.push("id ascending");
         this.blnRefreshServerLevelsOnSearch = true;
         this.inner.slot_cover.gotoAndStop("on");
         this.inner.slot_cover.gotoAndStop("searching");
         this.method_209(this.arrSearchFilters,this.arrSearchSorts);
         this.method_287();
      }
      
      public SearchMenu(): void
      {
         this.mRef.gData.var_189 = this.var_112;
         this.mRef.SaveGameData();
         this.inner.search_sort_mc.gotoAndStop("on");
         this.objButtonController2.method_4(this.inner.search_sort_mc.search_back_btn);
         this.objButtonController2.method_4(this.inner.search_sort_mc.diff1);
         this.objButtonController2.method_4(this.inner.search_sort_mc.diff2);
         this.objButtonController2.method_4(this.inner.search_sort_mc.diff3);
         this.objButtonController2.method_4(this.inner.search_sort_mc.diff4);
         this.objButtonController2.method_4(this.inner.search_sort_mc.hi1);
         this.objButtonController2.method_4(this.inner.search_sort_mc.hi2);
         this.objButtonController2.method_4(this.inner.search_sort_mc.fa1);
         this.objButtonController2.method_4(this.inner.search_sort_mc.fa2);
         this.objButtonController2.method_4(this.inner.search_sort_mc.search_btn);
         this.inner.search_sort_mc.name_txt.text = "ENTER NAME";
         this.inner.search_sort_mc.author_txt.text = "ENTER AUTHOR";
         this.inner.search_sort_mc.name_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_178.bind(this));
         this.inner.search_sort_mc.author_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_178.bind(this));
      }
      
      private scrollBarUp(param1: MouseEvent): void
      {
         this.var_152 = false;
      }
      
      private method_264(param1: number, param2: boolean = false): void
      {
         let _loc3_: number = 0;
         let _loc4_: number = 0;
         param1--;
         if(this.var_52[param1] != null)
         {
            _loc3_ = 0;
            while(_loc3_ < this.var_9.length)
            {
               this.var_9[_loc3_].mc.play_mc.gotoAndStop("off");
               _loc3_++;
            }
            _loc4_ = 0;
            while(_loc4_ < 4)
            {
               if(this.var_52[param1 + _loc4_] != null)
               {
                  if(param2 == false)
                  {
                     this.var_9[_loc4_].mc.gotoAndStop("off");
                     this.method_210(this.var_9[_loc4_].mc,param1 + _loc4_);
                  }
               }
               else if(param2 == false)
               {
                  this.var_9[_loc4_].mc.gotoAndStop("empty");
               }
               _loc4_++;
            }
         }
         else
         {
            this.method_408(false);
            this.var_443 = this.var_52.length;
            this.var_417 = param1;
            this.var_372 = param2;
            this.var_340 = true;
            this.method_360();
         }
      }
      
      private btnOver(param1: MouseEvent): void
      {
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         let _loc4_: number = 0;
         let _loc5_: number = 0;
         0;
         let _loc7_: any[] = null;
         let _loc8_: boolean = false;
         let _loc9_: number = 0;
         let _loc10_: number = 0;
         let _loc11_: number = 0;
         if(param1.target.name == "server_overlay" || param1.target.name == "rate1" || param1.target.name == "rate2" || param1.target.name == "rate3" || param1.target.name == "rate4" || param1.target.name == "rate5" || param1.target.name == "play_mc" || param1.target.name == "trophy_mc" || param1.target.name == "score_txt" || param1.target.name == "arena_name_txt" || param1.target.name == "difficulty_txt" || param1.target.name == "bubble_fields_txt" || param1.target.name == "total_enemies_txt" || param1.target.name == "rating_txt")
         {
            _loc2_ = 0;
            while(_loc2_ < this.var_9.length)
            {
               if(this.var_9[_loc2_].mc.hitTestPoint(mouseX,mouseY,true) == true)
               {
                  _loc3_ = 0;
                  while(_loc3_ < this.var_9.length)
                  {
                     this.var_9[_loc3_].mc.play_mc.gotoAndStop("off");
                     _loc3_++;
                  }
                  if(this.var_9[_loc2_].mc.currentFrame == 41)
                  {
                     return;
                  }
                  this.var_363 = this.var_9[_loc2_].mc;
                  if(param1.target.name.substr(0,4) == "rate")
                  {
                     _loc4_ = 0;
                     while(_loc4_ < 5)
                     {
                        this.var_9[_loc2_].mc["rate" + (_loc4_ + 1)].star.gotoAndStop("on");
                        if(Number(param1.target.name.substr(4,1)) == _loc4_ + 1)
                        {
                           break;
                        }
                        _loc4_++;
                     }
                  }
                  if(this.mRef.blnBTAUnlocked == true || this.var_9[_loc2_].blnLocked == false)
                  {
                     this.var_9[_loc2_].mc.gotoAndStop("on");
                  }
                  this.var_9[_loc2_].mc.play_mc.gotoAndStop("on");
               }
               _loc2_++;
            }
         }
         else if(param1.target.name.substr(0,5) == "this.aSlot")
         {
            if(param1.target.currentFrame == 41)
            {
               return;
            }
            _loc5_ = 0;
            while(_loc5_ < this.var_9.length)
            {
               if(this.var_9[_loc5_].mc == param1.target)
               {
                  this.inner.right_box.arenaSlotLoader.setChildIndex((param1.target as unknown as MovieClip),this.inner.right_box.arenaSlotLoader.numChildren - 1);
                  if(this.mRef.blnBTAUnlocked == true || this.var_9[_loc5_].blnLocked == false)
                  {
                     if(this.var_9[_loc5_].mc.currentFrame != 41)
                     {
                        let _loc6_: number = 0;
                        while(0 < this.var_9.length)
                        {
                           this.var_9[0].mc.play_mc.gotoAndStop("off");
                           _loc6_ = 0 + 1;
                        }
                        if(this.mRef.blnBTAUnlocked == true || this.var_9[_loc5_].blnLocked == false)
                        {
                           this.var_9[_loc5_].mc.gotoAndStop("on");
                        }
                        this.var_9[_loc5_].mc.play_mc.gotoAndStop("on");
                     }
                  }
               }
               else if(this.var_9[_loc5_].mc.currentFrame != 41)
               {
                  if(this.mRef.blnBTAUnlocked == true || this.var_9[_loc5_].blnLocked == false)
                  {
                     this.var_9[_loc5_].mc.gotoAndStop("off");
                  }
                  this.var_9[_loc5_].mc.play_mc.gotoAndStop("off");
               }
               _loc5_++;
            }
         }
         else if(param1.target.name != "this.inner")
         {
            this.var_363 = null;
            if(param1.target.name != "scrollBar")
            {
               if(this.var_152 == true)
               {
                  _loc7_ = new Array();
                  _loc7_.push(this.inner.BTALevels_btn);
                  _loc7_.push(this.inner.serverLevels_btn);
                  _loc7_.push(this.inner.localLevels_btn);
                  _loc7_.push(this.inner.createArenas_btn);
                  _loc7_.push(this.inner.createEnemy_btn);
                  _loc7_.push(this.inner.mm_btn);
                  _loc7_.push(this.inner.right_box.upArrow_mc);
                  _loc7_.push(this.inner.right_box.downArrow_mc);
                  _loc7_.push(this.inner.changeProfile_btn);
                  _loc7_.push(this.inner.top_left.inside.profile_slots.p_slot1);
                  _loc7_.push(this.inner.top_left.inside.profile_slots.p_slot2);
                  _loc7_.push(this.inner.top_left.inside.changeAvatar_btn);
                  _loc7_.push(this.inner.top_left.inside.editAvatar_btn);
                  _loc8_ = true;
                  _loc9_ = 0;
                  while(_loc9_ < _loc7_.length)
                  {
                     if(_loc7_[_loc9_] == param1.target)
                     {
                        _loc8_ = false;
                     }
                     _loc9_++;
                  }
                  _loc7_ = new Array();
                  if(_loc8_ == true)
                  {
                     _loc10_ = 0;
                     while(_loc10_ < this.var_9.length)
                     {
                        _loc11_ = 0;
                        while(_loc11_ < 5)
                        {
                           this.var_9[_loc10_].mc["rate" + (_loc11_ + 1)].selected_mc.gotoAndStop("off");
                           _loc11_++;
                        }
                        this.var_9[_loc10_].mc.play_mc.gotoAndStop("off");
                        _loc10_++;
                     }
                     this.inner.right_box.scrollBar.gotoAndPlay("toOff");
                     this.inner.right_box.upArrow_mc.gotoAndStop("off");
                     this.inner.right_box.downArrow_mc.gotoAndStop("off");
                     this.var_152 = false;
                  }
               }
               param1.target.gotoAndStop("on");
            }
            else if(this.var_152 == false)
            {
               param1.target.gotoAndPlay("toOn");
               this.inner.right_box.upArrow_mc.gotoAndStop("on");
               this.inner.right_box.downArrow_mc.gotoAndStop("on");
            }
         }
      }
      
      private method_560(param1: string): any[]
      {
         let _loc2_: any[] = new Array();
         let _loc3_: number = -1;
         let _loc4_: string = "";
         let _loc5_: string = "";
         _loc3_ = param1.search(" ");
         if(_loc3_ == -1)
         {
            return _loc2_;
         }
         let _loc6_: string = param1.substr(0,_loc3_);
         let _loc7_: string = param1.substr(_loc3_ + 1);
         if(_loc6_ == "id")
         {
            _loc4_ = "1";
         }
         else if(_loc6_ == "difficulty")
         {
            _loc4_ = "2";
         }
         else
         {
            if(_loc6_ != "rating")
            {
               return _loc2_;
            }
            _loc4_ = "3";
         }
         if(_loc7_ == "ascending")
         {
            _loc5_ = "1";
         }
         else
         {
            if(_loc7_ != "descending")
            {
               return _loc2_;
            }
            _loc5_ = "2";
         }
         _loc2_.push(_loc4_);
         _loc2_.push(_loc5_);
         return _loc2_;
      }
      
      private method_408(param1: boolean): void
      {
         if(param1 == false)
         {
            this.objButtonController.method_7(this.inner.right_box.page_down_btn);
            this.inner.right_box.page_down_btn.gotoAndStop("dead");
         }
         else
         {
            this.objButtonController.method_4(this.inner.right_box.page_down_btn);
            this.inner.right_box.page_down_btn.gotoAndStop("off");
         }
      }
      
      public SelectArena(param1: number): void
      {
         this.mRef.gData.var_189 = this.var_112;
         this.mRef.SaveGameData();
         let _loc4_: ArenaData = new ArenaData();
         let _loc6_: any[] = new Array();
         0;
         0;
         0;
         0;
         if(this.strCurrentLevelType == "bta")
         {
            if(this.mRef.gData.var_14[param1 - 1] != null)
            {
               if(this.mRef.blnBTAUnlocked == true || this.mRef.gData.var_14[param1 - 1].blnLocked == false)
               {
                  _loc4_.ImportArenaData(this.mRef.gData.var_14[param1 - 1].arenaData);
                  this.strSelectedArenaName = _loc4_.strName;
                  let _loc2_: string = this.mRef.gData.var_14[param1 - 1].ID;
                  let _loc8_: string = this.mRef.gData.var_14[param1 - 1].AllTanks;
                  let _loc9_: number = 0;
                  while(0 < "".length)
                  {
                     if("".substr(0,1) != ",")
                     {
                        let _loc7_: string = "" + "".substr(0,1);
                     }
                     else
                     {
                        let _loc5_: boolean = false;
                        let _loc10_: number = 0;
                        while(0 < _loc6_.length)
                        {
                           if(_loc6_[0] == "")
                           {
                              _loc5_ = true;
                              break;
                           }
                           _loc10_ = 0 + 1;
                        }
                        _loc6_.push("");
                        _loc7_ = "";
                     }
                     _loc9_ = 0 + 1;
                  }
                  _loc5_ = false;
                  let _loc11_: number = 0;
                  while(0 < _loc6_.length)
                  {
                     if(_loc6_[0] == "")
                     {
                        _loc5_ = true;
                        break;
                     }
                     _loc11_ = 0 + 1;
                  }
                  _loc6_.push("");
                  _loc7_ = "";
                  let _loc12_: number = 0;
                  while(0 < _loc6_.length)
                  {
                     if(0 != _loc6_.length - 1)
                     {
                        _loc7_ = "" + (_loc6_[0] + ",");
                     }
                     else
                     {
                        _loc7_ = "" + _loc6_[0];
                     }
                     _loc12_ = 0 + 1;
                  }
                  this.ArenaApproved("","",true,true);
               }
            }
         }
         else if(this.strCurrentLevelType == "server")
         {
            this.strSelectedArenaName = this.var_52[this.var_36 * 4 - 4 + param1 - 1].name;
            _loc2_ = this.var_52[this.var_36 * 4 - 4 + param1 - 1].id;
            this.ValidateArenaID("");
         }
         else if(this.strCurrentLevelType == "local")
         {
            _loc4_.ImportArenaData(this.var_143[param1 - 1].Data);
            this.strSelectedArenaName = _loc4_.strName;
            _loc2_ = this.var_143[param1 - 1].ID;
            _loc8_ = this.var_143[param1 - 1].AllTanks;
            _loc9_ = 0;
            while(0 < "".length)
            {
               if("".substr(0,1) != ",")
               {
                  _loc7_ = "" + "".substr(0,1);
               }
               else
               {
                  _loc5_ = false;
                  _loc10_ = 0;
                  while(0 < _loc6_.length)
                  {
                     if(_loc6_[0] == "")
                     {
                        _loc5_ = true;
                        break;
                     }
                     _loc10_ = 0 + 1;
                  }
                  _loc6_.push("");
                  _loc7_ = "";
               }
               _loc9_ = 0 + 1;
            }
            _loc5_ = false;
            _loc11_ = 0;
            while(0 < _loc6_.length)
            {
               if(_loc6_[0] == "")
               {
                  _loc5_ = true;
                  break;
               }
               _loc11_ = 0 + 1;
            }
            _loc6_.push("");
            _loc7_ = "";
            _loc12_ = 0;
            while(0 < _loc6_.length)
            {
               if(0 != _loc6_.length - 1)
               {
                  _loc7_ = "" + (_loc6_[0] + ",");
               }
               else
               {
                  _loc7_ = "" + _loc6_[0];
               }
               _loc12_ = 0 + 1;
            }
            this.ArenaApproved("","",true);
         }
      }
      
      public ValidateArenaID(param1: string): void
      {
         this.inner.slot_cover.gotoAndStop("ID");
         this.arrSingleArenaID = new Array();
         this.var_380 = this.RandNum(1,5);
         let _loc2_: any[] = new Array();
         let _loc3_: any[] = new Array();
         _loc2_.push("page=1");
         _loc2_.push("id=" + param1);
         _loc3_.push("id ascending");
         this.blnSingleIDSearch = true;
         this.method_209(_loc2_,_loc3_);
      }
      
      public Setup(param1: class_79, param2: Function, param3: number = 1, param4: boolean = false): void
      {
         this.mRef = param1;
         this.var_203 = param2;
         this.numStartSection = param3;
         this.var_516 = param4;
         if(this.mRef.objCurrentPlayer.var_185 == 0)
         {
            this.mRef.objCurrentPlayer.var_185 = 1;
         }
         if(this.mRef.var_140 == 2)
         {
            this.arrSearchFilters = new Array();
            this.arrSearchSorts = new Array();
            this.arrSearchFilters.push("page=" + this.var_216);
            this.arrSearchSorts.push("rating descending");
            this.arrSearchSorts.push("id ascending");
            if(this.mRef.var_344 == false)
            {
               this.method_360();
            }
         }
         this.strCurrentLevelType = "bta";
         this.blnSelectNewProfile = false;
         this.var_152 = false;
         this.var_312 = true;
         this.var_143 = new Array();
         this.var_9 = new Array();
         this.var_112 = this.mRef.gData.var_189;
         this.inner.top_left.inside.profile_slots.profileName2_txt.text = "";
         this.inner.top_left.inside.profile_slots.profileName3_txt.text = "";
         if(this.mRef.objPlayer1Profile.profileName != "")
         {
            ++this.var_32;
         }
         if(this.mRef.objPlayer2Profile.profileName != "")
         {
            ++this.var_32;
         }
         if(this.mRef.objPlayer3Profile.profileName != "")
         {
            ++this.var_32;
         }
         if(this.mRef.objPlayer1Profile == this.mRef.objCurrentPlayer)
         {
            this.var_135 = 1;
         }
         else if(this.mRef.objPlayer2Profile == this.mRef.objCurrentPlayer)
         {
            this.var_135 = 2;
         }
         else if(this.mRef.objPlayer3Profile == this.mRef.objCurrentPlayer)
         {
            this.var_135 = 3;
         }
         if(this.var_135 == 1)
         {
            if(this.var_32 == 1)
            {
               this.numSlot2 = 0;
               this.numSlot3 = 0;
            }
            else if(this.var_32 == 2)
            {
               this.numSlot2 = 2;
               this.numSlot3 = 0;
            }
            else if(this.var_32 == 3)
            {
               this.numSlot2 = 2;
               this.numSlot3 = 3;
            }
         }
         else if(this.var_135 == 2)
         {
            if(this.var_32 == 2)
            {
               this.numSlot2 = 1;
               y;
               this.numSlot3 = 0;
            }
            else if(this.var_32 == 3)
            {
               this.numSlot2 = 1;
               this.numSlot3 = 3;
            }
         }
         else if(this.var_135 == 3)
         {
            if(this.var_32 == 3)
            {
               this.numSlot2 = 1;
               this.numSlot3 = 2;
            }
         }
         this.var_423 = this.inner.top_left.inside.avatarLoader_mc;
         this.objButtonController = new class_3();
         this.objButtonController.Setup(this.btnUp,this.btnOver,this.btnOut);
         this.objButtonController.method_4(this.inner.mm_btn);
         this.objButtonController.method_4(this.inner.BTALevels_btn);
         this.objButtonController.method_4(this.inner.serverLevels_btn);
         this.objButtonController.method_4(this.inner.localLevels_btn);
         this.objButtonController.method_4(this.inner.createArenas_btn);
         this.objButtonController.method_4(this.inner.createEnemy_btn);
         this.objButtonController.method_4(this.inner.top_left.inside.changeAvatar_btn);
         this.objButtonController.method_4(this.inner.top_left.inside.editAvatar_btn);
         this.objButtonController.method_4(this.inner.changeProfile_btn);
         if(this.var_32 > 1)
         {
            this.objButtonController.method_4(this.inner.top_left.inside.profile_slots.p_slot1);
         }
         if(this.var_32 > 2)
         {
            this.objButtonController.method_4(this.inner.top_left.inside.profile_slots.p_slot2);
         }
         this.objButtonController.method_4(this.inner.right_box.load_ID);
         this.objButtonController.method_4(this.inner.right_box.searchMenu);
         this.objButtonController2 = new class_3();
         this.objButtonController2.Setup(this.btnUp2,this.btnOver2,this.btnOut2);
         this.ChangeProfile(this.var_135);
         this.var_476 = false;
         this.strSelectedArenaName = "";
         if(this.var_516 == true)
         {
            this.inner.right_box.aborted_mc.gotoAndPlay("on");
         }
         this.inner.top_right_info.arenasCompleted_txt.text = "0";
         if(this.mRef.var_400 == true)
         {
            this.mRef.var_400 = false;
            --this.mRef.objCurrentPlayer.var_185;
         }
         if(this.mRef.objCurrentPlayer.var_185 == 1)
         {
            this.mRef.objCurrentPlayer.var_185 = 2;
            this.var_19 = new ArenaSelectScreenTutorial();
            this.var_19.x = this.var_19.y = 0;
            this.addChild(this.var_19);
            this.objTutorialButtonController = new class_3();
            this.objTutorialButtonController.Setup(this.tut2Up);
            this.objTutorialButtonController.method_4(this.var_19.back_mc);
            this.objTutorialButtonController.method_4(this.var_19.next_mc);
            this.var_19.back_mc.gotoAndStop("off");
            this.var_19.next_mc.gotoAndStop("off");
         }
         else if(this.mRef.objCurrentPlayer.var_178 == 1)
         {
            this.mRef.objCurrentPlayer.var_178 = 2;
            this.var_19 = new class_57();
            this.var_19.x = this.var_19.y = 0;
            this.addChild(this.var_19);
            this.objTutorialButtonController = new class_3();
            this.objTutorialButtonController.Setup(this.tutUp);
            this.objTutorialButtonController.method_4(this.var_19.close_mc);
            this.var_19.close_mc.gotoAndStop("off");
         }
      }
      
      private btnOut(param1: MouseEvent): void
      {
         let _loc3_: number = 0;
         let _loc4_: number = 0;
         let _loc5_: number = 0;
         let _loc6_: number = 0;
         if(this.var_363 != null)
         {
            this.var_363.gotoAndStop("off");
         }
         if(param1.target.name == "server_overlay" || param1.target.name == "rate1" || param1.target.name == "rate2" || param1.target.name == "rate3" || param1.target.name == "rate4" || param1.target.name == "rate5" || param1.target.name == "trophy_mc" || param1.target.name == "score_txt" || param1.target.name == "arena_name_txt" || param1.target.name == "difficulty_txt" || param1.target.name == "bubble_fields_txt" || param1.target.name == "total_enemies_txt" || param1.target.name == "rating_txt")
         {
            _loc3_ = 0;
            while(_loc3_ < this.var_9.length)
            {
               if(this.var_9[_loc3_].mc.hitTestPoint(mouseX,mouseY,true) == true)
               {
                  if(this.var_9[_loc3_].mc.currentFrame == 41)
                  {
                     return;
                  }
                  if(param1.target.name.substr(0,4) == "rate")
                  {
                     _loc4_ = 0;
                     while(_loc4_ < 5)
                     {
                        if(this.var_9[_loc3_].mc.currentFrame != 41)
                        {
                           this.var_9[_loc3_].mc["rate" + (_loc4_ + 1)].star.gotoAndStop("off");
                        }
                        _loc4_++;
                     }
                  }
                  if(this.var_9[_loc3_].mc.currentFrame != 41)
                  {
                     this.var_9[_loc3_].mc.play_mc.gotoAndStop("off");
                     if(this.mRef.blnBTAUnlocked == true || this.var_9[_loc3_].blnLocked == false)
                     {
                        this.var_9[_loc3_].mc.gotoAndStop("on");
                     }
                  }
               }
               _loc3_++;
            }
         }
         else if(param1.target.name.substr(0,5) == "this.aSlot")
         {
            if(param1.target.currentFrame == 41)
            {
               return;
            }
            _loc5_ = 0;
            while(_loc5_ < this.var_9.length)
            {
               if(this.var_9[_loc5_].mc == param1.target)
               {
                  if(this.mRef.blnBTAUnlocked == true || this.var_9[_loc5_].blnLocked == false)
                  {
                     this.var_9[_loc5_].mc.gotoAndStop("off");
                     this.var_9[_loc5_].mc.play_mc.gotoAndStop("off");
                  }
                  break;
               }
               _loc5_++;
            }
         }
         else if(param1.target.name == "scrollBar")
         {
            if(this.var_152 == false)
            {
               param1.target.gotoAndPlay("toOff");
               this.inner.right_box.upArrow_mc.gotoAndStop("off");
               this.inner.right_box.downArrow_mc.gotoAndStop("off");
            }
         }
         else
         {
            _loc6_ = 0;
            while(_loc6_ < this.var_9.length)
            {
               this.var_9[_loc6_].mc.play_mc.gotoAndStop("off");
               _loc6_++;
            }
            param1.target.gotoAndStop("off");
         }
         let _loc2_: number = 0;
         while(_loc2_ < this.var_9.length)
         {
            this.var_9[_loc2_].mc.play_mc.gotoAndStop("off");
            _loc2_++;
         }
      }
      
      private ArenaNOTApproved(): void
      {
         this.inner.slot_cover.gotoAndPlay("notFound");
      }
      
      public Run(): void
      {
         this.method_608();
         this.method_685();
         this.ArenasCompletedTextControl();
      }
      
      private method_210(param1: MovieClip, param2: number = 0): void
      {
         let _loc7_: number = 0;
         let _loc8_: string = null;
         let _loc9_: number = 0;
         let _loc10_: number = 0;
         let _loc11_: number = 0;
         let _loc12_: boolean = false;
         let _loc13_: Record<string, any> = null;
         let _loc14_: number = 0;
         let _loc15_: number = 0;
         let _loc16_: number = 0;
         let _loc17_: number = 0;
         let _loc3_: ArenaData = new ArenaData();
         let _loc4_: boolean = false;
         let _loc5_: number = 0;
         let _loc6_: number = 0;
         param1.trophy_mc.gotoAndStop("off");
         if(this.strCurrentLevelType == "bta")
         {
            param1.arena_name_txt.text = this.mRef.gData.var_44[param2].name;
            param1.difficulty_txt.text = this.mRef.gData.var_44[param2].diff;
            param1.bubble_fields_txt.text = this.mRef.gData.var_44[param2].bubblefields;
            param1.total_enemies_txt.text = this.mRef.gData.var_44[param2].numEnemies;
            param1.description_txt.text = this.mRef.gData.var_44[param2].desc;
            _loc6_ = 0;
            while(_loc6_ < this.mRef.objCurrentPlayer.arrBeatArenaIDs.length)
            {
               if(this.mRef.objCurrentPlayer.arrBeatArenaIDs[_loc6_] == this.mRef.gData.var_14[param2].ID)
               {
                  param1.trophy_mc.gotoAndStop("on");
                  break;
               }
               _loc6_++;
            }
            _loc5_ = 0;
            while(_loc5_ < this.mRef.objCurrentPlayer.var_82.length)
            {
               if(this.mRef.objCurrentPlayer.var_82[_loc5_].id == this.mRef.gData.var_14[param2].ID)
               {
                  param1.score_txt.text = this.mRef.objCurrentPlayer.var_82[_loc5_].score.toString();
                  _loc4_ = true;
                  break;
               }
               _loc5_++;
            }
            if(_loc4_ == false)
            {
               param1.score_txt.text = "0";
            }
         }
         else if(this.strCurrentLevelType == "server")
         {
            if(this.var_476 == false)
            {
               if(this.var_52.length != 0)
               {
                  if(this.var_52[param2] != null && this.var_52[param2] != undefined)
                  {
                     param1.gotoAndStop("off");
                     _loc7_ = 0;
                     while(_loc7_ < 5)
                     {
                        param1["rate" + (_loc7_ + 1)].selected_mc.gotoAndStop("off");
                        _loc7_++;
                     }
                     _loc6_ = 0;
                     while(_loc6_ < this.mRef.objCurrentPlayer.arrBeatArenaIDs.length)
                     {
                        if(this.mRef.objCurrentPlayer.arrBeatArenaIDs[_loc6_] == this.var_52[param2].id)
                        {
                           param1.trophy_mc.gotoAndStop("on");
                           break;
                        }
                        _loc6_++;
                     }
                     param1.arena_name_txt.text = "" + this.var_52[param2].name;
                     param1.author_txt.text = "" + this.var_52[param2].author;
                     param1.difficulty_txt.text = "" + this.var_52[param2].difficulty.toString();
                     param1.bubble_fields_txt.text = "" + this.var_52[param2].bubblefields.toString();
                     param1.total_enemies_txt.text = "" + this.var_52[param2].enemies.toString();
                     param1.rating_txt.text = "" + this.var_52[param2].rating.toString();
                     _loc8_ = this.var_52[param2].id;
                     _loc9_ = 0;
                     while(_loc9_ < this.var_112.length)
                     {
                        if(this.var_52[param2] != null)
                        {
                           if(this.var_112[_loc9_].id == _loc8_)
                           {
                              _loc11_ = 0;
                              while(_loc11_ < this.var_112[_loc9_].rating)
                              {
                                 param1["rate" + (_loc11_ + 1)].selected_mc.gotoAndStop("on");
                                 _loc11_++;
                              }
                              break;
                           }
                        }
                        _loc9_++;
                     }
                     _loc10_ = 0;
                     while(_loc10_ < this.mRef.objCurrentPlayer.var_82.length)
                     {
                        if(this.mRef.objCurrentPlayer.var_82[_loc10_].id == this.var_52[param2].id)
                        {
                           param1.score_txt.text = this.mRef.objCurrentPlayer.var_82[_loc10_].score.toString();
                           _loc4_ = true;
                           break;
                        }
                        _loc10_++;
                     }
                     if(_loc4_ == false)
                     {
                        param1.score_txt.text = "0";
                     }
                  }
                  else
                  {
                     param1.gotoAndStop("empty");
                  }
               }
            }
         }
         else if(this.strCurrentLevelType == "local")
         {
            _loc12_ = false;
            _loc14_ = 0;
            while(_loc14_ < this.mRef.var_305.length)
            {
               if(this.mRef.var_305[_loc14_].ID == this.var_143[param2].ID)
               {
                  _loc12_ = true;
                  _loc13_ = this.mRef.var_305[_loc14_];
                  break;
               }
               _loc14_++;
            }
            _loc15_ = 0;
            while(_loc15_ < this.mRef.objCurrentPlayer.arrBeatArenaIDs.length)
            {
               if(this.mRef.objCurrentPlayer.arrBeatArenaIDs[_loc15_] == this.var_143[param2].ID)
               {
                  param1.trophy_mc.gotoAndStop("on");
                  break;
               }
               _loc15_++;
            }
            if(_loc12_ == false)
            {
               _loc3_.ImportArenaData(this.var_143[param2].Data);
               param1.arena_name_txt.text = "" + _loc3_.strName;
               param1.author_txt.text = "" + _loc3_.var_275;
               param1.difficulty_txt.text = "" + _loc3_.var_222.toString();
               param1.bubble_fields_txt.text = "" + _loc3_.var_6.length.toString();
               _loc16_ = 0;
               _loc6_ = 0;
               while(_loc6_ < _loc3_.var_6.length)
               {
                  _loc5_ = 0;
                  while(_loc5_ < _loc3_.var_6[_loc6_].arrEnemies.length)
                  {
                     _loc17_ = Math.floor(_loc3_.var_6[_loc6_].arrEnemies[_loc5_].number);
                     _loc16_ += _loc17_;
                     _loc5_++;
                  }
                  _loc6_++;
               }
               param1.total_enemies_txt.text = "" + _loc16_.toString();
               this.mRef.var_305.push({
                  "ID":this.var_143[param2].ID,
                  "name":param1.arena_name_txt.text,
                  "numEnemies":param1.total_enemies_txt.text,
                  "author":param1.author_txt.text,
                  "diff":param1.difficulty_txt.text,
                  "bubblefields":param1.bubble_fields_txt.text
               });
            }
            else
            {
               param1.arena_name_txt.text = "" + _loc13_.name;
               param1.author_txt.text = "" + _loc13_.author;
               param1.difficulty_txt.text = "" + _loc13_.diff;
               param1.bubble_fields_txt.text = "" + _loc13_.bubblefields;
               param1.total_enemies_txt.text = "" + _loc13_.numEnemies;
            }
            _loc5_ = 0;
            while(_loc5_ < this.mRef.objCurrentPlayer.var_82.length)
            {
               if(this.mRef.objCurrentPlayer.var_82[_loc5_].id == this.var_143[param2].ID)
               {
                  param1.score_txt.text = this.mRef.objCurrentPlayer.var_82[_loc5_].score.toString();
                  _loc4_ = true;
                  break;
               }
               _loc5_++;
            }
            if(_loc4_ == false)
            {
               param1.score_txt.text = "0";
            }
         }
         this.strSelectedArenaName = "";
      }
      
      private tut2Up(param1: MouseEvent): void
      {
         if(param1.target.name == "back_mc")
         {
            this.var_19.prevFrame();
         }
         else if(param1.target.name == "next_mc")
         {
            if(this.var_19.currentFrame == this.var_19.totalFrames)
            {
               this.objTutorialButtonController.method_10();
               this.removeChild(this.var_19);
               if(this.mRef.objCurrentPlayer.var_178 == 1)
               {
                  this.mRef.objCurrentPlayer.var_178 = 2;
                  this.var_19 = new class_57();
                  let _temp_3: any = this.var_19;
                  let _temp_2: any = this.var_19;
                  let _temp_1: any = 0;
                  0;
                  _temp_2.y = _temp_1;
                  _temp_3.x = 0;
                  this.addChild(this.var_19);
                  this.objTutorialButtonController = new class_3();
                  this.objTutorialButtonController.Setup(this.tutUp);
                  this.objTutorialButtonController.method_4(this.var_19.close_mc);
                  this.var_19.close_mc.gotoAndStop("off");
               }
            }
            else
            {
               this.var_19.nextFrame();
            }
         }
      }
      
      private method_254(param1: IOErrorEvent): void
      {
      }
      
      private method_360(): void
      {
         ++this.var_216;
         this.var_380 = this.RandNum(1,5);
         let _loc1_: number = 0;
         while(_loc1_ < this.arrSearchFilters.length)
         {
            if(this.arrSearchFilters[_loc1_].substr(0,4) == "page")
            {
               this.arrSearchFilters[_loc1_] = "page=" + this.var_216;
               break;
            }
            _loc1_++;
         }
         this.method_209(this.arrSearchFilters,this.arrSearchSorts);
      }
      
      private method_391(param1: string, param2: number): void
      {
         let var_40: string;
         let var_56: class_12;
         let var_106: string;
         let var_126: ByteArray;
         let var_157: string;
         let var_194: string;
         let var_262: class_11;
         let var_257: ByteArray;
         let var_243: URLRequest;
         let var_346: URLVariables;
         let var_150: string = param1;
         let var_307: number = param2;
         if(var_307 < 0)
         {
            var_307 = 0;
         }
         else if(var_307 > 5)
         {
            var_307 = 5;
         }
         var_157 = var_150 + "," + var_307;
         var_40 = class_1.method_1(758,768);
         var_262 = new PKCS5();
         var_126 = class_13.toArray(class_13.method_22(var_157));
         var_257 = class_13.toArray(class_13.method_22(var_40));
         var_56 = class_14.method_46("aes128-ecb",var_257,var_262);
         var_56.encrypt(var_126);
         var_106 = "" + String(class_13.method_52(var_126));
         var_194 = "http://s1.herointeractive.com/bta/submitGRating.php";
         var_243 = new URLRequest(var_194);
         var_346 = new URLVariables();
         var_346.r = var_106;
         var_243.data = var_346;
         var_243.method = URLRequestMethod.POST;
         this.urlLoader = new URLLoader();
         this.urlLoader.dataFormat = URLLoaderDataFormat.TEXT;
         this.urlLoader.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
         this.urlLoader.addEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
         try
         {
            this.urlLoader.load(var_243);
         }
         catch (e: any)
         {
         }
      }
      
      private method_719(): void
      {
         let _loc1_: number = 0;
         let _loc2_: number = 0;
         if(this.strCurrentLevelType == "bta")
         {
            _loc1_ = 1;
            _loc2_ = 0;
            while(_loc2_ < this.mRef.gData.var_14.length)
            {
               if(this.mRef.gData.var_14[_loc2_].blnLocked == false)
               {
                  _loc1_ = _loc2_ + 1;
               }
               _loc2_++;
            }
            if(_loc1_ == 1)
            {
               this.inner.right_box.scrollBar.y = 27;
               this.inner.right_box.arenaSlotLoader.y = 32;
            }
            else if(_loc1_ == 2)
            {
               this.inner.right_box.scrollBar.y = 40;
               this.inner.right_box.arenaSlotLoader.y = -101;
            }
            else if(_loc1_ == 3)
            {
               this.inner.right_box.scrollBar.y = 53;
               this.inner.right_box.arenaSlotLoader.y = -234;
            }
            else if(_loc1_ == 4)
            {
               this.inner.right_box.scrollBar.y = 66;
               this.inner.right_box.arenaSlotLoader.y = -367;
            }
            else if(_loc1_ == 5)
            {
               this.inner.right_box.scrollBar.y = 79;
               this.inner.right_box.arenaSlotLoader.y = -500;
            }
            else if(_loc1_ == 6)
            {
               this.inner.right_box.scrollBar.y = 92;
               this.inner.right_box.arenaSlotLoader.y = -633;
            }
            else if(_loc1_ == 7)
            {
               this.inner.right_box.scrollBar.y = 105;
               this.inner.right_box.arenaSlotLoader.y = -766;
            }
            else if(_loc1_ == 8)
            {
               this.inner.right_box.scrollBar.y = 118;
               this.inner.right_box.arenaSlotLoader.y = -899;
            }
            else if(_loc1_ == 9)
            {
               this.inner.right_box.scrollBar.y = 131;
               this.inner.right_box.arenaSlotLoader.y = -1032;
            }
            else if(_loc1_ == 10)
            {
               this.inner.right_box.scrollBar.y = 144;
               this.inner.right_box.arenaSlotLoader.y = -1166;
            }
            else if(_loc1_ == 11)
            {
               this.inner.right_box.scrollBar.y = 157;
               this.inner.right_box.arenaSlotLoader.y = -1299;
            }
            else if(_loc1_ == 12)
            {
               this.inner.right_box.scrollBar.y = 170;
               this.inner.right_box.arenaSlotLoader.y = -1432;
            }
            else if(_loc1_ == 13)
            {
               this.inner.right_box.scrollBar.y = 183;
               this.inner.right_box.arenaSlotLoader.y = -1565;
            }
            else if(_loc1_ == 14)
            {
               this.inner.right_box.scrollBar.y = 196;
               this.inner.right_box.arenaSlotLoader.y = -1698;
            }
            else if(_loc1_ == 15)
            {
               this.inner.right_box.scrollBar.y = 209;
               this.inner.right_box.arenaSlotLoader.y = -1831;
            }
            else if(_loc1_ == 16)
            {
               this.inner.right_box.scrollBar.y = 222;
               this.inner.right_box.arenaSlotLoader.y = -1964;
            }
            else if(_loc1_ == 17)
            {
               this.inner.right_box.scrollBar.y = 235;
               this.inner.right_box.arenaSlotLoader.y = -2097;
            }
            else if(_loc1_ == 18)
            {
               this.inner.right_box.scrollBar.y = 248;
               this.inner.right_box.arenaSlotLoader.y = -2230;
            }
            else if(_loc1_ == 19)
            {
               this.inner.right_box.scrollBar.y = 261;
               this.inner.right_box.arenaSlotLoader.y = -2364;
            }
            else if(_loc1_ == 20)
            {
               this.inner.right_box.scrollBar.y = 274;
               this.inner.right_box.arenaSlotLoader.y = -2497;
            }
            else if(_loc1_ == 21)
            {
               this.inner.right_box.scrollBar.y = 287;
               this.inner.right_box.arenaSlotLoader.y = -2630;
            }
            else if(_loc1_ == 22)
            {
               this.inner.right_box.scrollBar.y = 300;
               this.inner.right_box.arenaSlotLoader.y = -2763;
            }
            else if(_loc1_ == 23)
            {
               this.inner.right_box.scrollBar.y = 311;
               this.inner.right_box.arenaSlotLoader.y = -2876;
            }
            else if(_loc1_ == 24)
            {
               this.inner.right_box.scrollBar.y = 311;
               this.inner.right_box.arenaSlotLoader.y = -2876;
            }
            else if(_loc1_ == 25)
            {
               this.inner.right_box.scrollBar.y = 311;
               this.inner.right_box.arenaSlotLoader.y = -2876;
            }
         }
      }
      
      private method_260(param1: number): void
      {
         this.mRef.gData.var_189 = this.var_112;
         this.mRef.SaveGameData();
         let _loc2_: number = this.var_36;
         if(param1 == 1)
         {
            if(this.var_36 > 1)
            {
               --this.var_36;
            }
         }
         else if(param1 == 2)
         {
            if(this.var_258 != -1)
            {
               if(this.var_36 + 1 < this.var_258)
               {
                  ++this.var_36;
               }
               else
               {
                  this.var_36 = this.var_258;
               }
            }
            else
            {
               ++this.var_36;
            }
         }
         else if(param1 == 3)
         {
            this.var_36 = 1;
         }
         if(_loc2_ != this.var_36)
         {
            this.method_264(Math.floor(this.var_36 * 4 - 3));
            this.method_264(Math.floor((this.var_36 + 1) * 4 - 3),true);
         }
      }
      
      public frame35(): any
      {
         this.stop();
      }
      
      private method_608(): void
      {
         let _loc1_: number = NaN;
         let _loc2_: number = NaN;
         if(this.var_152 == true)
         {
            _loc1_ = mouseY - this.inner.right_box.scrollBar.height / 2;
            if(_loc1_ < 27)
            {
               this.inner.right_box.scrollBar.y = 27;
            }
            else if(_loc1_ > 311)
            {
               this.inner.right_box.scrollBar.y = 311;
            }
            else
            {
               this.inner.right_box.scrollBar.y = _loc1_;
            }
            _loc2_ = (this.inner.right_box.scrollBar.y - 27) / 284;
            this.inner.right_box.arenaSlotLoader.y = Math.floor(32 - this.var_362 * _loc2_);
         }
      }
      
      private method_356(): void
      {
         if(this.var_443 != this.var_52.length)
         {
            if(this.var_372 == false)
            {
               this.method_264(this.var_417);
            }
         }
         else if(this.var_372 == false)
         {
            this.var_258 = this.var_36 - 1;
         }
         else
         {
            this.var_258 = this.var_36;
         }
         this.inner.slot_cover.gotoAndStop("off");
         this.method_408(true);
      }
      
      private method_728(): void
      {
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         let _loc4_: number = 0;
         let _loc5_: number = 0;
         let _loc6_: number = 0;
         let _loc7_: number = 0;
         let _loc8_: number = 0;
         let _loc9_: number = 0;
         let _loc10_: number = 0;
         let _loc11_: number = 0;
         this.var_36 = 1;
         this.inner.right_box.no_connection_found.gotoAndStop("off");
         let _loc1_: number = 0;
         if(this.strCurrentLevelType == "bta")
         {
            _loc2_ = 0;
            while(_loc2_ < this.var_9.length)
            {
               this.objButtonController.method_7(this.var_9[_loc2_].mc);
               this.inner.right_box.arenaSlotLoader.removeChild(this.var_9[_loc2_].mc);
               _loc4_ = 0;
               while(_loc4_ < 5)
               {
                  this.objButtonController.method_7(this.var_9[_loc2_].mc["rate" + (_loc4_ + 1)]);
                  _loc4_++;
               }
               _loc2_++;
            }
            this.var_9 = new Array();
            this.objButtonController.method_7(this.inner.right_box.page_up_btn);
            this.objButtonController.method_7(this.inner.right_box.page_down_btn);
            this.objButtonController.method_7(this.inner.right_box.page_top_btn);
            this.objButtonController.method_7(this.inner.right_box.load_ID);
            this.inner.right_box.no_local_found.alpha = 0;
            _loc3_ = 0;
            while(_loc3_ < this.mRef.gData.var_14.length)
            {
               this.aSlot = new ArenaSlot();
               this.aSlot.x = 0;
               this.aSlot.y = _loc1_;
               this.aSlot.name = "aSlot_" + _loc3_;
               if(this.mRef.blnBTAUnlocked == true || this.mRef.gData.var_14[_loc3_].blnLocked == false)
               {
                  this.method_210(this.aSlot,_loc3_);
               }
               this.inner.right_box.arenaSlotLoader.addChild(this.aSlot);
               _loc1_ += this.aSlot.height + 5;
               this.var_9.push({
                  "mc":this.aSlot,
                  "blnLocked":this.mRef.gData.var_14[_loc3_].blnLocked
               });
               if(this.mRef.blnBTAUnlocked == true || this.mRef.gData.var_14[_loc3_].blnLocked == false)
               {
                  this.objButtonController.method_4(this.var_9[this.var_9.length - 1].mc,true);
               }
               else
               {
                  this.var_9[this.var_9.length - 1].mc.gotoAndStop("locked");
               }
               _loc3_++;
            }
            this.objButtonController.method_7(this.inner.right_box.upArrow_mc);
            this.objButtonController.method_7(this.inner.right_box.downArrow_mc);
            this.objButtonController.method_4(this.inner.right_box.upArrow_mc);
            this.objButtonController.method_4(this.inner.right_box.downArrow_mc);
            this.objButtonController.method_7(this.inner.right_box.scrollBar);
            this.objButtonController.method_4(this.inner.right_box.scrollBar,true,this.scrollBarUp);
            this.inner.right_box.scrollBar.addEventListener(MouseEvent.MOUSE_DOWN, this.scrollBarDown.bind(this));
            this.addEventListener(MouseEvent.MOUSE_UP, this.stageUp.bind(this));
            this.var_362 = Math.floor(32 - (32 - (this.inner.right_box.arenaSlotLoader.height - 410)));
            this.method_719();
         }
         else if(this.strCurrentLevelType == "server")
         {
            _loc5_ = 0;
            while(_loc5_ < this.var_9.length)
            {
               this.objButtonController.method_7(this.var_9[_loc5_].mc);
               this.inner.right_box.arenaSlotLoader.removeChild(this.var_9[_loc5_].mc);
               _loc6_ = 0;
               while(_loc6_ < 5)
               {
                  this.objButtonController.method_7(this.var_9[_loc5_].mc["rate" + (_loc6_ + 1)]);
                  _loc6_++;
               }
               _loc5_++;
            }
            this.var_9 = new Array();
            this.objButtonController.method_7(this.inner.right_box.upArrow_mc);
            this.objButtonController.method_7(this.inner.right_box.downArrow_mc);
            this.objButtonController.method_7(this.inner.right_box.scrollBar);
            this.inner.right_box.scrollBar.removeEventListener(MouseEvent.MOUSE_DOWN, this.scrollBarDown.bind(this));
            this.objButtonController.method_7(this.inner.right_box.page_up_btn);
            this.objButtonController.method_7(this.inner.right_box.page_down_btn);
            this.objButtonController.method_7(this.inner.right_box.page_top_btn);
            this.objButtonController.method_7(this.inner.right_box.load_ID);
            this.inner.removeEventListener(MouseEvent.MOUSE_UP, this.btnUp.bind(this));
            this.inner.right_box.arenaSlotLoader.x = 8;
            this.inner.right_box.no_local_found.alpha = 0;
            if(this.var_52.length != 0)
            {
               _loc7_ = 0;
               while(_loc7_ < 4)
               {
                  this.aSlot = new ArenaSlot2();
                  this.aSlot.x = 0;
                  this.aSlot.y = _loc1_;
                  this.aSlot.name = "aSlot_" + _loc7_;
                  this.method_210(this.aSlot,_loc7_);
                  this.inner.right_box.arenaSlotLoader.addChild(this.aSlot);
                  _loc1_ += this.aSlot.height + 5;
                  this.var_9.push({
                     "mc":this.aSlot,
                     "blnLocked":false
                  });
                  if(this.var_9[this.var_9.length - 1].blnLocked == true)
                  {
                     this.var_9[this.var_9.length - 1].mc.gotoAndStop("locked");
                  }
                  else
                  {
                     _loc8_ = 0;
                     while(_loc8_ < 5)
                     {
                        this.objButtonController.method_4(this.var_9[this.var_9.length - 1].mc["rate" + (_loc8_ + 1)]);
                        _loc8_++;
                     }
                  }
                  this.objButtonController.method_4(this.var_9[this.var_9.length - 1].mc,false);
                  _loc7_++;
               }
               this.objButtonController.method_4(this.inner.right_box.page_up_btn);
               this.objButtonController.method_4(this.inner.right_box.page_down_btn);
               this.objButtonController.method_4(this.inner.right_box.page_top_btn);
               this.objButtonController.method_4(this.inner.right_box.load_ID);
               this.inner.right_box.load_id_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_178.bind(this));
            }
            else
            {
               if(this.blnHeroSeverDown == true)
               {
                  this.inner.right_box.no_connection_found.gotoAndStop("HeroDown");
               }
               else
               {
                  this.inner.right_box.no_connection_found.gotoAndStop("on");
               }
               this.objButtonController.method_7(this.inner.right_box.searchMenu);
            }
         }
         else if(this.strCurrentLevelType == "local")
         {
            _loc9_ = 0;
            while(_loc9_ < this.var_9.length)
            {
               this.objButtonController.method_7(this.var_9[_loc9_].mc);
               this.inner.right_box.arenaSlotLoader.removeChild(this.var_9[_loc9_].mc);
               _loc11_ = 0;
               while(_loc11_ < 5)
               {
                  this.objButtonController.method_7(this.var_9[_loc9_].mc["rate" + (_loc11_ + 1)]);
                  _loc11_++;
               }
               _loc9_++;
            }
            this.var_9 = new Array();
            this.objButtonController.method_7(this.inner.right_box.page_up_btn);
            this.objButtonController.method_7(this.inner.right_box.page_down_btn);
            this.objButtonController.method_7(this.inner.right_box.page_top_btn);
            this.objButtonController.method_7(this.inner.right_box.load_ID);
            if(this.var_143.length != 0)
            {
               this.inner.right_box.no_local_found.alpha = 0;
            }
            else
            {
               this.inner.right_box.no_local_found.alpha = 0.42;
            }
            _loc10_ = 0;
            while(_loc10_ < this.var_143.length)
            {
               this.aSlot = new ArenaSlot3();
               this.aSlot.x = 0;
               this.aSlot.y = _loc1_;
               this.aSlot.name = "aSlot_" + _loc10_;
               this.method_210(this.aSlot,_loc10_);
               this.inner.right_box.arenaSlotLoader.addChild(this.aSlot);
               _loc1_ += this.aSlot.height + 5;
               this.var_9.push({
                  "mc":this.aSlot,
                  "blnLocked":false
               });
               if(this.var_9[this.var_9.length - 1].blnLocked == true)
               {
                  this.var_9[this.var_9.length - 1].mc.gotoAndStop("locked");
               }
               this.objButtonController.method_4(this.var_9[this.var_9.length - 1].mc,true);
               _loc10_++;
            }
            this.objButtonController.method_7(this.inner.right_box.upArrow_mc);
            this.objButtonController.method_7(this.inner.right_box.downArrow_mc);
            this.objButtonController.method_4(this.inner.right_box.upArrow_mc);
            this.objButtonController.method_4(this.inner.right_box.downArrow_mc);
            this.objButtonController.method_7(this.inner.right_box.scrollBar);
            this.objButtonController.method_4(this.inner.right_box.scrollBar,true,this.scrollBarUp);
            this.inner.right_box.scrollBar.addEventListener(MouseEvent.MOUSE_DOWN, this.scrollBarDown.bind(this));
            this.addEventListener(MouseEvent.MOUSE_UP, this.stageUp.bind(this));
            this.var_362 = Math.floor(32 - (32 - (this.inner.right_box.arenaSlotLoader.height - 410)));
            if(this.var_9.length < 5)
            {
               this.inner.right_box.scrollBar.x = 1000;
               this.inner.right_box.upArrow_mc.x = 1000;
               this.inner.right_box.downArrow_mc.x = 1000;
            }
            else
            {
               this.inner.right_box.scrollBar.x = 325;
               this.inner.right_box.upArrow_mc.x = 323;
               this.inner.right_box.downArrow_mc.x = 341;
            }
         }
      }
      
      private PullInProfileTankData(): void
      {
         if(this.var_109 != null)
         {
            this.var_423.removeChild(this.var_109);
            this.var_109 = null;
         }
         let _loc1_: TankData = new TankData();
         _loc1_.ImportTankData(this.mRef.objCurrentPlayer.currentAvatar);
         this.var_109 = _loc1_.method_61();
         let _loc2_: number = _loc1_.method_383() * 2;
         let _loc3_: number = 85 / _loc2_;
         this.var_109.width *= _loc3_;
         this.var_109.height *= _loc3_;
         if(this.var_109.scaleX > 1 || this.var_109.scaleY > 1)
         {
            let _temp_4: any = this.var_109;
            let _temp_3: any = this.var_109;
            let _temp_2: any = 1;
            1;
            _temp_3.scaleY = _temp_2;
            _temp_4.scaleX = 1;
         }
         if(this.var_109.height > this.var_109.width)
         {
            this.var_109.y += 15;
         }
         this.var_423.addChild(this.var_109);
         this.inner.top_left.inside.currentAvatar_txt.text = _loc1_.strTankName;
      }
      
      private method_755(param1: MouseEvent): void
      {
         if(this.strCurrentLevelType == "bta" || this.strCurrentLevelType == "local")
         {
            if(param1.delta == 3)
            {
               this.method_186("up");
            }
            else
            {
               this.method_186("down");
            }
         }
      }
      
      private ArenaApproved(param1: string, param2: string, param3: boolean = false, param4: boolean = false): void
      {
         this.inner.slot_cover.gotoAndStop("off");
         this.mRef.method_402(param1,param2,param3,this.strSelectedArenaName,param4);
         this.method_97();
      }
      
      private ArenasCompletedTextControl(): void
      {
         if(this.var_322 == true)
         {
            if(this.arenaCompleteTextCounterDelay > 0)
            {
               --this.arenaCompleteTextCounterDelay;
            }
            else if(this.arenaCompleteTextCounterDelay == 0)
            {
               if(this.mRef.objCurrentPlayer.arrBeatArenaIDs.length > 0)
               {
                  this.inner.top_right_info.arenasCompleted_txt.text = this.var_283;
                  if(this.var_283 + 1 <= this.mRef.objCurrentPlayer.arrBeatArenaIDs.length)
                  {
                     ++this.var_283;
                  }
                  else
                  {
                     this.var_322 = false;
                  }
               }
               else
               {
                  this.inner.top_right_info.arenasCompleted_txt.text = "0";
                  this.var_322 = false;
               }
               this.arenaCompleteTextCounterDelay = 3;
            }
         }
      }
      
      private method_186(param1: string): void
      {
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         if(param1 == "up")
         {
            _loc2_ = this.inner.right_box.scrollBar.y - 6.2;
         }
         else if(param1 == "down")
         {
            _loc2_ = this.inner.right_box.scrollBar.y + 6.2;
         }
         if(_loc2_ < 27)
         {
            this.inner.right_box.scrollBar.y = 27;
         }
         else if(_loc2_ > 311)
         {
            this.inner.right_box.scrollBar.y = 311;
         }
         else
         {
            this.inner.right_box.scrollBar.y = _loc2_;
         }
         _loc3_ = (this.inner.right_box.scrollBar.y - 27) / 284;
         let _loc4_: number = 32 - this.var_362 * _loc3_;
         this.inner.right_box.arenaSlotLoader.y = _loc4_;
      }
      
      private ChangeProfile(param1: number): void
      {
         let _loc6_: boolean = false;
         let _loc7_: number = 0;
         this.var_32 = 0;
         this.var_283 = 1;
         this.var_322 = true;
         this.mRef.LoadWhichProfileToCurrentProfile(param1);
         this.inner.changeProfile_btn.profileName_txt.text = this.mRef.objCurrentPlayer.profileName;
         this.inner.top_left.inside.profile_slots.profileName2_txt.text = "";
         this.inner.top_left.inside.profile_slots.profileName3_txt.text = "";
         this.inner.right_box.load_id_txt.text = "";
         if(this.mRef.objPlayer1Profile.profileName != "")
         {
            ++this.var_32;
         }
         if(this.mRef.objPlayer2Profile.profileName != "")
         {
            ++this.var_32;
         }
         if(this.mRef.objPlayer3Profile.profileName != "")
         {
            ++this.var_32;
         }
         if(this.mRef.objPlayer1Profile == this.mRef.objCurrentPlayer)
         {
            this.var_135 = 1;
         }
         else if(this.mRef.objPlayer2Profile == this.mRef.objCurrentPlayer)
         {
            this.var_135 = 2;
         }
         else if(this.mRef.objPlayer3Profile == this.mRef.objCurrentPlayer)
         {
            this.var_135 = 3;
         }
         this.var_143 = new Array();
         let _loc2_: number = 0;
         while(_loc2_ < this.mRef.objCurrentPlayer.var_38.length)
         {
            _loc6_ = false;
            _loc7_ = 0;
            while(_loc7_ < this.mRef.gData.var_14.length)
            {
               if(this.mRef.gData.var_14[_loc7_].ID == this.mRef.objCurrentPlayer.var_38[_loc2_].ID)
               {
                  _loc6_ = true;
               }
               _loc7_++;
            }
            if(_loc6_ == false)
            {
               this.var_143.push(this.mRef.objCurrentPlayer.var_38[_loc2_]);
            }
            _loc2_++;
         }
         if(this.var_135 == 1)
         {
            if(this.var_32 == 1)
            {
               this.numSlot2 = 0;
               this.numSlot3 = 0;
            }
            else if(this.var_32 == 2)
            {
               this.numSlot2 = 2;
               this.numSlot3 = 0;
            }
            else if(this.var_32 == 3)
            {
               this.numSlot2 = 2;
               this.numSlot3 = 3;
            }
         }
         else if(this.var_135 == 2)
         {
            if(this.var_32 == 2)
            {
               this.numSlot2 = 1;
               this.numSlot3 = 0;
            }
            else if(this.var_32 == 3)
            {
               this.numSlot2 = 1;
               this.numSlot3 = 3;
            }
         }
         else if(this.var_135 == 3)
         {
            if(this.var_32 == 3)
            {
               this.numSlot2 = 1;
               this.numSlot3 = 2;
            }
         }
         this.inner.top_left.inside.topWhite.gotoAndPlay("flash");
         this.inner.top_left.inside.bottomWhite.gotoAndPlay("flash");
         let _loc3_: number = 0;
         let _loc4_: number = 0;
         let _loc5_: number = 0;
         if(this.mRef.var_139)
         {
            _loc3_ = 12;
         }
         else
         {
            _loc3_ = this.mRef.objCurrentPlayer.gunPointsMax.value;
         }
         if(this.mRef.blnCheatClass)
         {
            _loc4_ = 6;
         }
         else
         {
            _loc4_ = this.mRef.objCurrentPlayer.maxClass.value;
         }
         if(this.mRef.var_132)
         {
            _loc5_ = 100;
         }
         else
         {
            _loc5_ = this.mRef.objCurrentPlayer.bubblePointsMax.value;
         }
         this.inner.top_left.inside.class_txt.text = "" + _loc4_;
         this.inner.top_left.inside.bubblePoints_txt.text = "" + _loc5_;
         this.inner.top_left.inside.gunPoints_txt.text = "" + _loc3_;
         this.PullInProfileTankData();
         stage.addEventListener(MouseEvent.MOUSE_WHEEL, this.method_755.bind(this));
         this.inner.right_box.rightWhite.gotoAndPlay("flash");
         if(this.numStartSection == 1)
         {
            this.SwitchLevelType("bta",true);
         }
         else if(this.numStartSection == 2)
         {
            this.SwitchLevelType("local",true);
         }
      }
      
      private method_763(param1: string): void
      {
         0;
         if(param1.substr(0,2) == "di")
         {
            if(this.inner.search_sort_mc[param1].currentFrame == 3)
            {
               this.inner.search_sort_mc[param1].gotoAndStop("off");
            }
            else
            {
               this.inner.search_sort_mc[param1].gotoAndStop("select");
            }
         }
         else if(param1.substr(0,2) == "hi")
         {
            if(this.inner.search_sort_mc[param1].name == "hi1")
            {
               this.inner.search_sort_mc.hi2.gotoAndStop("off");
            }
            else if(this.inner.search_sort_mc[param1].name == "hi2")
            {
               this.inner.search_sort_mc.hi1.gotoAndStop("off");
            }
            if(this.inner.search_sort_mc[param1].currentFrame == 3)
            {
               this.inner.search_sort_mc[param1].gotoAndStop("off");
            }
            else
            {
               this.inner.search_sort_mc[param1].gotoAndStop("select");
            }
         }
         else if(param1.substr(0,2) == "fa")
         {
            if(this.inner.search_sort_mc[param1].name == "fa1")
            {
               this.inner.search_sort_mc.fa2.gotoAndStop("off");
            }
            else if(this.inner.search_sort_mc[param1].name == "fa2")
            {
               this.inner.search_sort_mc.fa1.gotoAndStop("off");
            }
            if(this.inner.search_sort_mc[param1].currentFrame == 3)
            {
               this.inner.search_sort_mc[param1].gotoAndStop("off");
            }
            else
            {
               this.inner.search_sort_mc[param1].gotoAndStop("select");
            }
         }
      }
      
      private scrollBarDown(param1: MouseEvent): void
      {
         this.var_152 = true;
      }
      
      private method_278(param1: Event): void
      {
         let var_56: number;
         let var_106: string;
         let var_157: URLLoader;
         let var_150: XML = null;
         let var_40: XML = null;
         let var_126: Event = param1;
         this.blnHeroSeverDown = false;
         var_157 = (var_126.target as unknown as URLLoader);
         var_106 = "";
         var_56 = 0;
         try
         {
            var_40 = new XML(var_157.data);
            var_56 = Number(var_40.children()[0].attribute("intStatus"));
         }
         catch (e: any)
         {
            var_56 = 10000;
         }
         if(var_56 == 9300)
         {
            var_106 = "Our servers are currently not responding.  Please try again later.";
            this.blnHeroSeverDown = true;
         }
         if(var_56 >= 9100 && var_56 <= 9199)
         {
            var_106 = "Our servers are currently not responding.  Please try again later.";
         }
         if(var_56 >= 9200 && var_56 <= 9299)
         {
            var_106 = "Our servers are currently not responding.  Please try again later.";
         }
         if(var_56 > 1000)
         {
            this.method_356();
            this.var_340 = false;
            return;
         }
         for (let var_150 of var_40.ARENA)
         {
            if(this.blnSingleIDSearch == false)
            {
               this.var_52.push({
                  "id":var_150.ID,
                  "name":var_150.NAME,
                  "author":var_150.AUTHOR,
                  "difficulty":var_150.DIFFICULTY,
                  "bubblefields":var_150.BUBBLEFIELDS,
                  "enemies":var_150.ENEMIES,
                  "rating":var_150.RATING,
                  "types":var_150.TYPES
               });
            }
            else
            {
               this.arrSingleArenaID.push({
                  "id":var_150.ID,
                  "name":var_150.NAME,
                  "author":var_150.AUTHOR,
                  "difficulty":var_150.DIFFICULTY,
                  "bubblefields":var_150.BUBBLEFIELDS,
                  "enemies":var_150.ENEMIES,
                  "rating":var_150.RATING,
                  "types":var_150.TYPES
               });
            }
         }
         if(this.var_340 == true)
         {
            this.method_356();
            this.var_340 = false;
         }
         else if(this.blnSingleIDSearch == false)
         {
            if(this.var_52.length == 0)
            {
               this.var_52 = this.var_457;
               this.inner.slot_cover.gotoAndPlay("noArenas");
               this.SwitchLevelType("server",true);
               this.var_216 = 1;
               this.var_36 = 1;
            }
            else if(this.blnRefreshServerLevelsOnSearch == true)
            {
               this.SwitchLevelType("server",true);
               this.inner.slot_cover.gotoAndStop("off");
            }
         }
         else if(this.arrSingleArenaID.length != 0)
         {
            this.ArenaApproved(this.arrSingleArenaID[0].id,this.arrSingleArenaID[0].types);
         }
         else
         {
            this.ArenaNOTApproved();
         }
         this.blnRefreshServerLevelsOnSearch = false;
         this.blnSingleIDSearch = false;
      }
      
      private RateArena(param1: number, param2: number): void
      {
         let _loc3_: number = 0;
         let _loc4_: number = NaN;
         let _loc5_: string = null;
         let _loc6_: number = 0;
         let _loc7_: boolean = false;
         let _loc8_: boolean = false;
         if(this.var_312 == true)
         {
            _loc3_ = 0;
            _loc4_ = -1;
            _loc3_ = 0;
            while(_loc3_ < this.var_112.length)
            {
               if(this.var_52[this.var_36 * 4 - 4 + param1 - 1].id == this.var_112[_loc3_].id)
               {
                  _loc4_ = _loc3_;
               }
               _loc3_++;
            }
            _loc5_ = "";
            if(_loc4_ != -1)
            {
               if(param2 == this.var_112[_loc4_].rating)
               {
                  this.var_112.splice(_loc4_,1);
                  _loc6_ = 0;
                  while(_loc6_ < 5)
                  {
                     this.var_9[param1 - 1].mc["rate" + (_loc6_ + 1)].selected_mc.gotoAndStop("off");
                     _loc6_++;
                  }
               }
               else
               {
                  _loc5_ = this.var_52[this.var_36 * 4 - 4 + param1 - 1].id;
                  this.var_112[_loc4_].rating = param2;
                  if(_loc5_.substr(0,1) == "G")
                  {
                     _loc7_ = false;
                     _loc3_ = 0;
                     while(_loc3_ < 5)
                     {
                        if(param2 == _loc3_ + 1)
                        {
                           _loc7_ = true;
                        }
                        _loc3_++;
                     }
                     if(_loc7_ == true)
                     {
                        this.method_391(_loc5_,param2);
                     }
                  }
               }
            }
            else
            {
               _loc5_ = this.var_52[this.var_36 * 4 - 4 + param1 - 1].id;
               this.var_112.push({
                  "arena":param1,
                  "rating":param2,
                  "id":_loc5_
               });
               if(_loc5_.substr(0,1) == "G")
               {
                  _loc8_ = false;
                  _loc3_ = 0;
                  while(_loc3_ < 5)
                  {
                     if(param2 == _loc3_ + 1)
                     {
                        _loc8_ = true;
                     }
                     _loc3_++;
                  }
                  if(_loc8_ == true)
                  {
                     this.method_391(_loc5_,param2);
                  }
               }
            }
            this.var_312 = false;
            this.var_256 = 40;
         }
         this.mRef.gData.var_189 = this.var_112;
         this.mRef.SaveGameData();
      }
      
      private btnOver2(param1: MouseEvent): void
      {
         if(param1.target.currentFrame != 3)
         {
            param1.target.gotoAndStop("on");
         }
      }
      
      public method_97(): void
      {
         this.urlLoader.removeEventListener(Event.COMPLETE, this.method_278.bind(this));
         this.urlLoader.removeEventListener(HTTPStatusEvent.HTTP_STATUS, this.method_280.bind(this));
         this.urlLoader.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
         this.urlLoader.removeEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
         this.mRef.gData.var_189 = this.var_112;
         this.mRef.SaveGameData();
         this.objButtonController.method_10();
         this.objButtonController2.method_10();
         this.mRef.removeChild(this);
      }
      
      private method_280(param1: HTTPStatusEvent): void
      {
      }
   }
