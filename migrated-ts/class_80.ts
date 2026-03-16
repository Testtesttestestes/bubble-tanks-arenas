// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_80 extends MovieClip{
      
      public rollover_txt: TextField;
      private fadeInSpeed: number;
      private var_441: boolean;
      public var_200: number;
      private var_8: class_3;
      private var_408: number;
      private var_171: number;
      private fadeOutSpeed: number;
      public credits_btn: MovieClip;
      private var_268: boolean;
      public ec_btn: MovieClip;
      private var_357: boolean = false;
      public settings_btn: MovieClip;
      private var_66: any[];
      public var_4: MovieClip;
      private var_304: number;
      public var_46: MovieClip;
      public var_271: MovieClip;
      private var_164: number;
      private performActionID: number;
      private var_364: boolean = false;
      private var_182: boolean;
      public var_42: MovieClip;
      private var_337: boolean;
      private var_360: boolean = false;
      private var_53: class_70;
      public bubbleopedia_btn: MovieClip;
      private var_302: number;
      private var_449: boolean = false;
      public var_72: MovieClip;
      private objHotkeyManager: class_4;
      public pmg_btn: MovieClip;
      public profile: MovieClip;
      private var_418: boolean = false;
      private var_424: boolean;
      public Cheat_btn: MovieClip;
      public play_btn: MovieClip;
      private var_499: boolean = false;
      private mRef: class_79;
      private var_186: number;
      private const_2: class_7;
      private var_459: boolean;
      public var_289: number;
      constructor(){
         super();
         addFrameScript(178,this.frame179);
         this.var_289 = 0;
         this.var_200 = 0.05;
         this.var_441 = false;
         this.var_424 = false;
         this.var_459 = false;
         this.var_182 = false;
         this.var_268 = false;
         this.var_337 = false;
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      private method_671(): void
      {
         if(this.var_441 == false)
         {
            if(this.var_42 != null)
            {
               if(this.var_42.alpha < 1)
               {
                  this.var_42.alpha += this.fadeInSpeed;
               }
            }
            if(this.play_btn.alpha < 1)
            {
               this.play_btn.alpha += this.fadeInSpeed;
            }
            if(this.settings_btn.alpha < 1)
            {
               this.settings_btn.alpha += this.fadeInSpeed;
            }
            if(this.bubbleopedia_btn.alpha < 1)
            {
               this.bubbleopedia_btn.alpha += this.fadeInSpeed;
            }
            if(this.credits_btn.alpha < 1)
            {
               this.credits_btn.alpha += this.fadeInSpeed;
            }
            if(this.ec_btn.alpha < 1)
            {
               this.ec_btn.alpha += this.fadeInSpeed;
            }
            if(this.pmg_btn.alpha < 1)
            {
               this.pmg_btn.alpha += this.fadeInSpeed;
            }
            if(this.Cheat_btn.alpha < 1)
            {
               this.Cheat_btn.alpha += this.fadeInSpeed;
            }
            if(this.var_271.alpha < 1)
            {
               this.var_271.alpha += this.fadeInSpeed;
            }
         }
      }
      
      private ProfileCallBack(param1: string, param2: string = "", param3: number = 0): void
      {
         let _loc4_: TankData = null;
         if(param1 == "back")
         {
            this.var_268 = true;
            this.profile.RemoveProfileCreator();
            this.method_159();
            this.method_94(0);
         }
         else if(param1 == "new")
         {
            this.mRef.method_600(param2,param3);
         }
         else if(param1 == "load")
         {
            _loc4_ = new TankData();
            _loc4_.ImportTankData(this.mRef.objCurrentPlayer.currentAvatar);
            if(this.mRef.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(_loc4_) == false || this.mRef.objCurrentPlayer.method_17(_loc4_) == true)
            {
               this.mRef.objCurrentPlayer.currentAvatar = "7d1adbbd72aaa3c8672736b9715f0c5519a5130a78032553eac3337e4074ba671f833edee1f5bb99e490de82d3d15107b465367e32c3ed3f6395d77f8afd6aa01bb70e7a2ea088f18ff25e4d150fba6abbcb73";
               this.mRef.objCurrentPlayer.method_19();
            }
            this.mRef.LoadWhichProfileToCurrentProfile(param3);
            this.mRef.method_155();
         }
      }
      
      private method_596(): void
      {
         this.var_499 = true;
      }
      
      private method_50(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("off");
         this.rollover_txt.text = "";
      }
      
      private method_526(param1: Event): any
      {
         let _loc2_: any[] = new Array();
         let _loc3_: GlowFilter = new GlowFilter(4294967295);
         _loc2_.push(_loc3_);
         param1.target.filters = _loc2_;
      }
      
      private method_103(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("off");
      }
      
      public method_159(): void
      {
         this.play_btn.x = this.var_66[0].xLoc;
         this.play_btn.y = this.var_66[0].yLoc;
         this.settings_btn.x = this.var_66[1].xLoc;
         this.settings_btn.y = this.var_66[1].yLoc;
         this.bubbleopedia_btn.x = this.var_66[2].xLoc;
         this.bubbleopedia_btn.y = this.var_66[2].yLoc;
         this.credits_btn.x = this.var_66[3].xLoc;
         this.credits_btn.y = this.var_66[3].yLoc;
         this.ec_btn.x = this.var_66[4].xLoc;
         this.ec_btn.y = this.var_66[4].yLoc;
         this.pmg_btn.x = this.var_66[5].xLoc;
         this.pmg_btn.y = this.var_66[5].yLoc;
         this.Cheat_btn.x = this.var_66[6].xLoc;
         this.Cheat_btn.y = this.var_66[6].yLoc;
         if(this.var_42 != null)
         {
            this.var_42.x = this.var_66[7].xLoc;
            this.var_42.y = this.var_66[7].yLoc;
         }
      }
      
      private CheatBtnUp(param1: Event): any
      {
         if(param1.target.currentFrame == 1)
         {
            if(param1.target == this.var_53.btnClass_mc)
            {
               this.mRef.blnCheatClass = true;
            }
            if(param1.target == this.var_53.btnBubbles_mc)
            {
               this.mRef.var_132 = true;
            }
            if(param1.target == this.var_53.btnGuns_mc)
            {
               this.mRef.var_139 = true;
            }
            if(param1.target == this.var_53.btnUnlockGuns_mc)
            {
               this.mRef.var_224 = true;
            }
            if(param1.target == this.var_53.btnUnlockBTALevels_mc)
            {
               this.mRef.blnBTAUnlocked = true;
            }
            if(param1.target == this.var_53.btn50GunPoints_mc)
            {
               this.mRef.bln50GunPoints = true;
            }
            param1.target.gotoAndStop(2);
            return;
         }
         if(param1.target.currentFrame == 2)
         {
            if(param1.target == this.var_53.btnClass_mc)
            {
               this.mRef.blnCheatClass = false;
            }
            if(param1.target == this.var_53.btnBubbles_mc)
            {
               this.mRef.var_132 = false;
            }
            if(param1.target == this.var_53.btnGuns_mc)
            {
               this.mRef.var_139 = false;
            }
            if(param1.target == this.var_53.btnUnlockGuns_mc)
            {
               this.mRef.var_224 = false;
            }
            if(param1.target == this.var_53.btnUnlockBTALevels_mc)
            {
               this.mRef.blnBTAUnlocked = false;
            }
            if(param1.target == this.var_53.btn50GunPoints_mc)
            {
               this.mRef.bln50GunPoints = false;
            }
            param1.target.gotoAndStop(1);
            return;
         }
      }
      
      private freeUp(param1: MouseEvent): void
      {
         this.mRef.method_56(4);
      }
      
      private method_143(): void
      {
         if(this.var_268 == false || this.var_337 == true)
         {
            if(this.mRef.var_140 == 2 || this.var_337 == true)
            {
               if(this.var_4 != null)
               {
                  this.var_4.g1.gotoAndStop("off");
                  this.var_4.g2.gotoAndStop("off");
                  this.var_4.g3.gotoAndStop("off");
                  if(this.var_164 == 1)
                  {
                     this.var_4.g1.gotoAndStop("on");
                  }
                  else if(this.var_164 == 2)
                  {
                     this.var_4.g2.gotoAndStop("on");
                  }
                  else if(this.var_164 == 3)
                  {
                     this.var_4.g3.gotoAndStop("on");
                  }
                  this.var_4.m1.gotoAndStop("off");
                  this.var_4.m2.gotoAndStop("off");
                  if(this.mRef.var_220 == true)
                  {
                     this.var_4.m2.gotoAndStop("on");
                  }
                  else
                  {
                     this.var_4.m1.gotoAndStop("on");
                  }
                  this.var_4.s1.gotoAndStop("off");
                  this.var_4.s2.gotoAndStop("off");
                  if(this.mRef.var_214 == true)
                  {
                     this.var_4.s2.gotoAndStop("on");
                  }
                  else
                  {
                     this.var_4.s1.gotoAndStop("on");
                  }
                  this.var_4.gs1.gotoAndStop("off");
                  this.var_4.gs2.gotoAndStop("off");
                  this.var_4.gs3.gotoAndStop("off");
                  if(this.var_171 == 1)
                  {
                     this.var_4.gs1.gotoAndStop("on");
                  }
                  else if(this.var_171 == 2)
                  {
                     this.var_4.gs2.gotoAndStop("on");
                  }
                  else if(this.var_171 == 3)
                  {
                     this.var_4.gs3.gotoAndStop("on");
                  }
                  this.var_4.v1.gotoAndStop("off");
                  this.var_4.v2.gotoAndStop("off");
                  if(this.mRef.blnScreenShake == true)
                  {
                     this.var_4.v2.gotoAndStop("on");
                  }
                  else
                  {
                     this.var_4.v1.gotoAndStop("on");
                  }
                  this.var_4.e1.gotoAndStop("off");
                  this.var_4.e2.gotoAndStop("off");
                  if(this.var_304 == 1)
                  {
                     this.var_4.e1.gotoAndStop("on");
                  }
                  else if(this.var_304 == 2)
                  {
                     this.var_4.e2.gotoAndStop("on");
                  }
               }
            }
         }
         this.var_337 = false;
      }
      
      private method_626(): void
      {
         if(this.var_182 == true)
         {
            if(this.var_186 > 0)
            {
               --this.var_186;
            }
            else if(this.var_186 == 0)
            {
               if(this.performActionID == 1)
               {
                  this.method_455();
               }
               else if(this.performActionID == 2)
               {
                  this.method_159();
                  this.var_268 = false;
               }
               this.var_182 = false;
               this.var_186 = -1;
               this.performActionID = 0;
            }
         }
      }
      
      private method_109(param1: MouseEvent): void
      {
         param1.target.gotoAndPlay("on");
      }
      
      private method_12(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("on");
         if(param1.target.name == "gs1")
         {
            this.var_4.fps_txt.text = this.mRef.gData.mainFPS1;
         }
         else if(param1.target.name == "gs2")
         {
            this.var_4.fps_txt.text = this.mRef.gData.mainFPS2;
         }
         else if(param1.target.name == "gs3")
         {
            this.var_4.fps_txt.text = this.mRef.gData.mainFPS3;
         }
      }
      
      private method_312(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("off");
      }
      
      public frame179(): any
      {
         this.stop();
      }
      
      private RemoveCredits(): void
      {
         if(this.var_46 != null)
         {
            this.var_46.back_btn.removeEventListener(MouseEvent.MOUSE_OVER, this.method_109.bind(this));
            this.var_46.back_btn.removeEventListener(MouseEvent.MOUSE_OUT, this.method_103.bind(this));
            this.var_46.back_btn.removeEventListener(MouseEvent.MOUSE_UP, this.credUp.bind(this));
            this.var_46.hero_link.removeEventListener(MouseEvent.MOUSE_OVER, this.method_109.bind(this));
            this.var_46.hero_link.removeEventListener(MouseEvent.MOUSE_OUT, this.method_103.bind(this));
            this.var_46.hero_link.removeEventListener(MouseEvent.MOUSE_UP, this.credUp.bind(this));
            this.var_46.composer_link.removeEventListener(MouseEvent.MOUSE_OVER, this.method_109.bind(this));
            this.var_46.composer_link.removeEventListener(MouseEvent.MOUSE_OUT, this.method_103.bind(this));
            this.var_46.composer_link.removeEventListener(MouseEvent.MOUSE_UP, this.credUp.bind(this));
            this.removeChild(this.var_46);
         }
         this.var_46 = null;
      }
      
      public Setup(param1: class_79): void
      {
         this.mRef = param1;
         this.var_408 = 0;
         if(this.mRef.var_227 != -1)
         {
            this.var_304 = this.mRef.var_227;
         }
         else
         {
            this.var_304 = 1;
         }
         if(this.mRef.mainFPS == this.mRef.gData.mainFPS1)
         {
            this.var_171 = 1;
         }
         else if(this.mRef.mainFPS == this.mRef.gData.mainFPS2)
         {
            this.var_171 = 2;
         }
         else if(this.mRef.mainFPS == this.mRef.gData.mainFPS3)
         {
            this.var_171 = 3;
         }
         this.objHotkeyManager = new class_4();
         if(stage.quality == "LOW")
         {
            this.var_164 = 1;
         }
         else if(stage.quality == "MEDIUM")
         {
            this.var_164 = 2;
         }
         else if(stage.quality == "HIGH")
         {
            this.var_164 = 3;
         }
         this.method_502();
         this.play_btn.alpha = 0;
         this.settings_btn.alpha = 0;
         this.bubbleopedia_btn.alpha = 0;
         this.credits_btn.alpha = 0;
         this.ec_btn.alpha = 0;
         this.pmg_btn.alpha = 0;
         this.Cheat_btn.alpha = 0;
         this.var_302 = 95;
         this.fadeInSpeed = 0.05;
         this.fadeOutSpeed = 0.05;
         this.var_186 = -1;
         this.performActionID = 0;
         this.var_66 = new Array();
         this.var_66.push({
            "xLoc":this.play_btn.x,
            "yLoc":this.play_btn.y
         });
         this.var_66.push({
            "xLoc":this.settings_btn.x,
            "yLoc":this.settings_btn.y
         });
         this.var_66.push({
            "xLoc":this.bubbleopedia_btn.x,
            "yLoc":this.bubbleopedia_btn.y
         });
         this.var_66.push({
            "xLoc":this.credits_btn.x,
            "yLoc":this.credits_btn.y
         });
         this.var_66.push({
            "xLoc":this.ec_btn.x,
            "yLoc":this.ec_btn.y
         });
         this.var_66.push({
            "xLoc":this.pmg_btn.x,
            "yLoc":this.pmg_btn.y
         });
         this.var_66.push({
            "xLoc":this.Cheat_btn.x,
            "yLoc":this.Cheat_btn.y
         });
         if(this.var_42 != null)
         {
            this.var_66.push({
               "xLoc":this.var_42.x,
               "yLoc":this.var_42.y
            });
         }
         this.method_455();
         this.play_btn.addEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
         this.play_btn.addEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
         this.play_btn.addEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
         let _temp_3: any = this.play_btn;
         let _temp_2: any = this.play_btn;
         let _temp_1: any = true;
         true;
         _temp_2.useHandCursor = _temp_1;
         _temp_3.buttonMode = true;
         this.settings_btn.addEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
         this.settings_btn.addEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
         this.settings_btn.addEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
         let _temp_4: any = this.settings_btn;
         let _loc2_: boolean;
         this.settings_btn.useHandCursor = _loc2_ = true;
         _temp_4.buttonMode = true;
         if(this.mRef.gData.var_298 == false)
         {
            this.bubbleopedia_btn.gotoAndStop("ec");
         }
         this.bubbleopedia_btn.addEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
         this.bubbleopedia_btn.addEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
         this.bubbleopedia_btn.addEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
         let _temp_5: any = this.bubbleopedia_btn;
         this.bubbleopedia_btn.useHandCursor = _loc2_ = true;
         _temp_5.buttonMode = true;
         this.credits_btn.addEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
         this.credits_btn.addEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
         this.credits_btn.addEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
         let _temp_6: any = this.credits_btn;
         this.credits_btn.useHandCursor = _loc2_ = true;
         _temp_6.buttonMode = true;
         this.ec_btn.addEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
         this.ec_btn.addEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
         this.ec_btn.addEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
         let _temp_7: any = this.ec_btn;
         this.ec_btn.useHandCursor = _loc2_ = true;
         _temp_7.buttonMode = true;
         this.pmg_btn.addEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
         this.pmg_btn.addEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
         this.pmg_btn.addEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
         let _temp_8: any = this.pmg_btn;
         this.pmg_btn.useHandCursor = _loc2_ = true;
         _temp_8.buttonMode = true;
         if(this.mRef.gData.var_298)
         {
            this.const_2 = new class_7(this.mRef.stage,false);
            this.const_2.method_111(192,this.method_596);
            this.const_2.method_111(72,this.method_588);
            this.const_2.method_111(69,this.method_729);
            this.const_2.method_111(82,this.method_618);
            this.const_2.method_111(79,this.method_748);
            this.var_8 = new class_3();
            this.var_8.Setup(this.CheatBtnUp,this.method_526,this.method_750);
            this.Cheat_btn.addEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
            this.Cheat_btn.addEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
            this.Cheat_btn.addEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
            let _temp_9: any = this.Cheat_btn;
            this.Cheat_btn.useHandCursor = _loc2_ = true;
            _temp_9.buttonMode = true;
         }
         else
         {
            let _temp_10: any = this.Cheat_btn;
            this.Cheat_btn.visible = _loc2_ = false;
            _temp_10.mouseEnabled = true;
            this.Cheat_btn.alpha = 0;
            this.Cheat_btn.x = -1000;
         }
         this.method_143();
         this.rollover_txt.text = "";
      }
      
      private mmBtnUp(param1: MouseEvent): void
      {
         this.rollover_txt.text = "";
         if(this.var_182 == false)
         {
            if(param1.target.parent.name == "this.play_btn")
            {
               this.method_94(1);
               this.method_705();
               this.var_186 = 30;
               this.performActionID = 1;
               this.var_182 = true;
            }
            else if(param1.target.parent.name == "this.settings_btn")
            {
               this.mRef.method_44("mm_settings_screen","section_visits");
               this.method_94(1);
               this.CreateSettings();
               this.var_186 = 30;
               this.performActionID = 1;
               this.var_182 = true;
            }
            else if(param1.target.parent.name == "this.credits_btn")
            {
               this.mRef.method_44("credits_screen","section_visits");
               this.method_94(1);
               this.CreateCredits();
               this.var_186 = 30;
               this.performActionID = 1;
               this.var_182 = true;
            }
            else if(param1.target.parent.name == "this.bubbleopedia_btn")
            {
               if(this.mRef.gData.var_298 == true)
               {
                  this.method_94(1);
                  this.mRef.method_681();
                  this.var_186 = 30;
                  this.performActionID = 1;
                  this.var_182 = true;
               }
               else
               {
                  this.mRef.method_44("mm_BTA_on_armor_link","link_outs");
                  this.mRef.method_56(6);
               }
            }
            else if(param1.target.parent.name == "this.ec_btn")
            {
               this.mRef.method_56(7);
            }
            else if(param1.target.parent.name == "this.pmg_btn")
            {
               this.mRef.method_44("mm_pmg_link","link_outs");
               this.mRef.method_56(1);
            }
            else if(param1.target.parent.name == "this.Cheat_btn")
            {
               this.method_476();
            }
         }
      }
      
      private method_569(param1: string): void
      {
         if(param1 == "gs1")
         {
            this.var_171 = 1;
            this.mRef.stage.frameRate = this.mRef.gData.mainFPS1;
            this.mRef.mainFPS = this.mRef.gData.mainFPS1;
         }
         else if(param1 == "gs2")
         {
            this.var_171 = 2;
            this.mRef.stage.frameRate = this.mRef.gData.mainFPS2;
            this.mRef.mainFPS = this.mRef.gData.mainFPS2;
         }
         else if(param1 == "gs3")
         {
            this.var_171 = 3;
            this.mRef.stage.frameRate = this.mRef.gData.mainFPS3;
            this.mRef.mainFPS = this.mRef.gData.mainFPS3;
         }
         else if(param1 == "g1")
         {
            this.var_164 = 1;
            stage.quality = StageQuality.LOW;
         }
         else if(param1 == "g2")
         {
            this.var_164 = 2;
            stage.quality = StageQuality.MEDIUM;
         }
         else if(param1 == "g3")
         {
            this.var_164 = 3;
            stage.quality = StageQuality.HIGH;
         }
         else if(param1 == "m1")
         {
            this.mRef.method_69(false);
         }
         else if(param1 == "m2")
         {
            this.mRef.method_69(true);
         }
         else if(param1 == "s1")
         {
            this.mRef.method_70(false);
         }
         else if(param1 == "s2")
         {
            this.mRef.method_70(true);
         }
         else if(param1 == "v1")
         {
            this.mRef.sEffects.method_257();
            this.mRef.blnScreenShake = false;
         }
         else if(param1 == "v2")
         {
            this.mRef.sEffects.method_288();
            this.mRef.blnScreenShake = true;
         }
         else if(param1 == "e1")
         {
            this.method_154(false);
         }
         else if(param1 == "e2")
         {
            this.method_154(true);
         }
      }
      
      private method_401(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("on");
      }
      
      private method_710(): void
      {
         if(this.var_424 == false)
         {
            if(this.var_42 != null)
            {
               if(this.var_42.alpha > 0)
               {
                  this.var_42.alpha -= this.fadeOutSpeed;
               }
            }
            if(this.play_btn.alpha > 0)
            {
               this.play_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.settings_btn.alpha > 0)
            {
               this.settings_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.bubbleopedia_btn.alpha > 0)
            {
               this.bubbleopedia_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.credits_btn.alpha > 0)
            {
               this.credits_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.ec_btn.alpha > 0)
            {
               this.ec_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.pmg_btn.alpha > 0)
            {
               this.pmg_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.Cheat_btn.alpha > 0)
            {
               this.Cheat_btn.alpha -= this.fadeOutSpeed;
            }
            if(this.var_271.alpha > 0)
            {
               this.var_271.alpha -= this.fadeOutSpeed;
            }
         }
      }
      
      public Run(): void
      {
         this.TitleCountdown();
         this.method_626();
         this.PlayButtonEffect();
         switch(this.var_408)
         {
            case 0:
               this.method_671();
               break;
            case 1:
               this.method_710();
         }
      }
      
      private CreateSettings(): void
      {
         this.var_4 = new Settings();
         this.var_4.x = 210;
         this.var_4.y = 90;
         this.addChild(this.var_4);
         this.var_4.hotkeys.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.hotkeys.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.hotkeys.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_3: any = this.var_4.hotkeys;
         let _temp_2: any = this.var_4.hotkeys;
         let _temp_1: any = true;
         true;
         _temp_2.useHandCursor = _temp_1;
         _temp_3.buttonMode = true;
         this.var_4.backSettings.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.backSettings.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.backSettings.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_4: any = this.var_4.backSettings;
         let _loc1_: boolean;
         this.var_4.backSettings.useHandCursor = _loc1_ = true;
         _temp_4.buttonMode = true;
         this.var_4.back_btn.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.back_btn.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.back_btn.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_5: any = this.var_4.back_btn;
         this.var_4.back_btn.useHandCursor = _loc1_ = true;
         _temp_5.buttonMode = true;
         this.var_4.gs1.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.gs1.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.gs1.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_6: any = this.var_4.gs1;
         this.var_4.gs1.useHandCursor = _loc1_ = true;
         _temp_6.buttonMode = true;
         this.var_4.gs2.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.gs2.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.gs2.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_7: any = this.var_4.gs2;
         this.var_4.gs2.useHandCursor = _loc1_ = true;
         _temp_7.buttonMode = true;
         this.var_4.gs3.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.gs3.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.gs3.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_8: any = this.var_4.gs3;
         this.var_4.gs3.useHandCursor = _loc1_ = true;
         _temp_8.buttonMode = true;
         this.var_4.g1.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.g1.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.g1.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_9: any = this.var_4.g1;
         this.var_4.g1.useHandCursor = _loc1_ = true;
         _temp_9.buttonMode = true;
         this.var_4.g2.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.g2.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.g2.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_10: any = this.var_4.g2;
         this.var_4.g2.useHandCursor = _loc1_ = true;
         _temp_10.buttonMode = true;
         this.var_4.g3.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.g3.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.g3.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_11: any = this.var_4.g3;
         this.var_4.g3.useHandCursor = _loc1_ = true;
         _temp_11.buttonMode = true;
         this.var_4.m1.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.m1.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.m1.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_12: any = this.var_4.m1;
         this.var_4.m1.useHandCursor = _loc1_ = true;
         _temp_12.buttonMode = true;
         this.var_4.m2.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.m2.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.m2.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_13: any = this.var_4.m2;
         this.var_4.m2.useHandCursor = _loc1_ = true;
         _temp_13.buttonMode = true;
         this.var_4.s1.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.s1.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.s1.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_14: any = this.var_4.s1;
         this.var_4.s1.useHandCursor = _loc1_ = true;
         _temp_14.buttonMode = true;
         this.var_4.s2.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.s2.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.s2.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_15: any = this.var_4.s2;
         this.var_4.s2.useHandCursor = _loc1_ = true;
         _temp_15.buttonMode = true;
         this.var_4.v1.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.v1.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.v1.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_16: any = this.var_4.v1;
         this.var_4.v1.useHandCursor = _loc1_ = true;
         _temp_16.buttonMode = true;
         this.var_4.v2.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.v2.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.v2.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_17: any = this.var_4.v2;
         this.var_4.v2.useHandCursor = _loc1_ = true;
         _temp_17.buttonMode = true;
         this.var_4.e1.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.e1.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.e1.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_18: any = this.var_4.e1;
         this.var_4.v2.useHandCursor = _loc1_ = true;
         _temp_18.buttonMode = true;
         this.var_4.e2.addEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
         this.var_4.e2.addEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
         this.var_4.e2.addEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
         let _temp_19: any = this.var_4.e2;
         this.var_4.v2.useHandCursor = _loc1_ = true;
         _temp_19.buttonMode = true;
         this.var_268 = false;
         this.var_337 = true;
         this.method_143();
      }
      
      private method_705(): void
      {
         this.profile = new Profile();
         let _temp_3: any = this.profile;
         let _temp_2: any = this.profile;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.addChild(this.profile);
         this.profile.Setup(this.mRef,this.mRef.stage,this,this.ProfileCallBack);
      }
      
      public method_94(param1: number): void
      {
         this.var_441 = false;
         this.var_424 = false;
         this.var_408 = param1;
      }
      
      private method_455(): void
      {
         if(this.var_42 != null)
         {
            this.var_42.x = this.var_42.y = -100;
         }
         this.play_btn.x = this.play_btn.y = -100;
         this.settings_btn.x = this.settings_btn.y = -100;
         this.bubbleopedia_btn.x = this.bubbleopedia_btn.y = -100;
         this.credits_btn.x = this.credits_btn.y = -100;
         this.ec_btn.x = this.ec_btn.y = -100;
         this.pmg_btn.x = this.pmg_btn.y = -100;
         this.Cheat_btn.x = this.Cheat_btn.y = -100;
      }
      
      private credUp(param1: MouseEvent): void
      {
         if(this.var_182 == false)
         {
            if(param1.target.name == "back_btn")
            {
               this.RemoveCredits();
               this.method_159();
               this.method_94(0);
            }
            else if(param1.target.name == "hero_link")
            {
               this.mRef.method_44("credits_hero_interactive_link","link_outs");
               this.mRef.method_56(2);
            }
            else if(param1.target.name == "composer_link")
            {
               this.mRef.method_56(5);
            }
         }
      }
      
      private settUp(param1: MouseEvent): void
      {
         if(this.var_182 == false)
         {
            if(param1.target.name == "back_btn")
            {
               this.var_268 = true;
               this.RemoveSettings();
               this.method_159();
               this.method_94(0);
            }
            else if(param1.target.name == "hotkeys")
            {
               this.var_4.gotoAndStop("hotkeys");
               this.method_724();
            }
            else if(param1.target.name == "backSettings")
            {
               this.var_4.gotoAndStop("settings");
               this.method_143();
               this.method_595();
            }
            else
            {
               this.method_569(param1.target.name);
            }
         }
         this.method_143();
      }
      
      private method_650(param1: Event): any
      {
         this.var_8.method_10();
         if(this.const_2 != null)
         {
            this.const_2.Destroy();
            this.const_2 = null;
         }
         this.removeChild(this.var_53);
         this.var_53 = null;
         this.var_418 = false;
         this.var_357 = false;
         this.var_364 = false;
         this.var_360 = false;
         this.var_449 = false;
      }
      
      private method_48(param1: MouseEvent): void
      {
         param1.target.gotoAndPlay("on");
         if(param1.target.parent.name == "this.play_btn")
         {
            if(this.mRef.gData.var_384 == true)
            {
               this.rollover_txt.text = "Play / Tutorial";
            }
            else
            {
               this.rollover_txt.text = "Play";
            }
         }
         else if(param1.target.parent.name == "this.settings_btn")
         {
            this.rollover_txt.text = "Settings";
         }
         else if(param1.target.parent.name == "this.credits_btn")
         {
            this.rollover_txt.text = "Credits";
         }
         else if(param1.target.parent.name == "this.bubbleopedia_btn")
         {
            if(this.mRef.gData.var_298 == true)
            {
               this.rollover_txt.text = "Tank Viewer";
            }
            else
            {
               this.rollover_txt.text = "Extra Content (Uber Cheats!)";
            }
         }
         else if(param1.target.parent.name == "this.ec_btn")
         {
            this.rollover_txt.text = "Bubble Tanks Tower Defense 1.5";
         }
         else if(param1.target.parent.name == "this.pmg_btn")
         {
            this.rollover_txt.text = "Play More Games!";
         }
         else if(param1.target.parent.name == "this.Cheat_btn")
         {
            this.rollover_txt.text = "Cheats!!!!";
         }
      }
      
      private method_729(): void
      {
         if(this.var_357)
         {
            this.var_364 = true;
         }
      }
      
      private method_588(): void
      {
         if(this.var_499)
         {
            this.var_357 = true;
         }
      }
      
      private method_618(): void
      {
         if(this.var_364)
         {
            this.var_360 = true;
         }
      }
      
      private method_643(): void
      {
         if(this.var_357 && this.var_364 && this.var_360 && this.var_449)
         {
            if(!this.var_418)
            {
               this.method_476();
            }
            this.var_418 = true;
         }
      }
      
      private method_502(): void
      {
         if(this.mRef.gData.var_447 == true)
         {
            this.var_42 = new class_75();
            this.var_42.x = this.mRef.stage.stageWidth - this.var_42.width - 5;
            this.var_42.y = this.mRef.stage.stageHeight - this.var_42.height - 8;
            this.addChild(this.var_42);
            this.var_42.addEventListener(MouseEvent.MOUSE_OVER, this.method_401.bind(this));
            this.var_42.addEventListener(MouseEvent.MOUSE_OUT, this.method_312.bind(this));
            this.var_42.addEventListener(MouseEvent.MOUSE_UP, this.freeUp.bind(this));
            let _temp_3: any = this.var_42;
            let _temp_2: any = this.var_42;
            let _temp_1: any = true;
            true;
            _temp_2.useHandCursor = _temp_1;
            _temp_3.buttonMode = true;
         }
      }
      
      private method_11(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("off");
         this.var_4.fps_txt.text = "";
         this.method_143();
      }
      
      public DeleteMainMenu(): void
      {
         if(this.mRef.gData.var_447 == true)
         {
            this.var_42.removeEventListener(MouseEvent.MOUSE_OVER, this.method_401.bind(this));
            this.var_42.removeEventListener(MouseEvent.MOUSE_OUT, this.method_312.bind(this));
            this.var_42.removeEventListener(MouseEvent.MOUSE_UP, this.freeUp.bind(this));
         }
         this.RemoveSettings();
         this.RemoveCredits();
         this.play_btn.removeEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
         this.play_btn.removeEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
         this.play_btn.removeEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
         this.settings_btn.removeEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
         this.settings_btn.removeEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
         this.settings_btn.removeEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
         this.bubbleopedia_btn.removeEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
         this.bubbleopedia_btn.removeEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
         this.bubbleopedia_btn.removeEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
         this.credits_btn.removeEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
         this.credits_btn.removeEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
         this.credits_btn.removeEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
         this.ec_btn.removeEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
         this.ec_btn.removeEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
         this.ec_btn.removeEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
         this.pmg_btn.removeEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
         this.pmg_btn.removeEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
         this.pmg_btn.removeEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
         if(this.mRef.gData.var_298)
         {
            this.Cheat_btn.removeEventListener(MouseEvent.MOUSE_OVER, this.method_48.bind(this));
            this.Cheat_btn.removeEventListener(MouseEvent.MOUSE_OUT, this.method_50.bind(this));
            this.Cheat_btn.removeEventListener(MouseEvent.MOUSE_UP, this.mmBtnUp.bind(this));
            if(this.const_2 != null)
            {
               this.const_2.Destroy();
               this.const_2 = null;
            }
         }
         this.mRef.method_611();
         this.mRef.removeChild(this);
      }
      
      private method_748(): void
      {
         if(this.var_360)
         {
            this.var_449 = true;
         }
         this.method_643();
      }
      
      private PlayButtonEffect(): any
      {
         let _loc1_: any[] = new Array();
         this.var_289 += this.var_200;
         if(this.var_289 > 2 || this.var_289 < 0)
         {
            this.var_200 *= -1;
         }
         let _loc2_: GlowFilter = new GlowFilter(4294967295,1,7,7,this.var_289,3);
         _loc1_.push(_loc2_);
         this.play_btn.filters = _loc1_;
      }
      
      private TitleCountdown(): void
      {
         if(this.var_459 == false)
         {
            if(this.var_302 > 0)
            {
               --this.var_302;
            }
            else if(this.var_302 == 0)
            {
               this.var_302 = -1;
               this.var_459 = true;
               this.method_159();
               this.method_94(0);
            }
         }
      }
      
      private method_595(): void
      {
         this.mRef.gData.hot1 = this.objHotkeyManager.method_65("Up");
         this.mRef.gData.hot2 = this.objHotkeyManager.method_65("Down");
         this.mRef.gData.hot3 = this.objHotkeyManager.method_65("Left");
         this.mRef.gData.hot4 = this.objHotkeyManager.method_65("Right");
         this.mRef.gData.hot5 = this.objHotkeyManager.method_65("Pause");
         this.objHotkeyManager.CleanUp();
      }
      
      private CreateCredits(): void
      {
         this.var_46 = new Credits();
         let _temp_3: any = this.var_46;
         let _temp_2: any = this.var_46;
         let _temp_1: any = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         this.addChild(this.var_46);
         this.var_46.back_btn.addEventListener(MouseEvent.MOUSE_OVER, this.method_109.bind(this));
         this.var_46.back_btn.addEventListener(MouseEvent.MOUSE_OUT, this.method_103.bind(this));
         this.var_46.back_btn.addEventListener(MouseEvent.MOUSE_UP, this.credUp.bind(this));
         let _temp_4: any = this.var_46.back_btn;
         let _loc1_: boolean;
         this.var_46.back_btn.useHandCursor = _loc1_ = true;
         _temp_4.buttonMode = 0;
         this.var_46.hero_link.addEventListener(MouseEvent.MOUSE_OVER, this.method_109.bind(this));
         this.var_46.hero_link.addEventListener(MouseEvent.MOUSE_OUT, this.method_103.bind(this));
         this.var_46.hero_link.addEventListener(MouseEvent.MOUSE_UP, this.credUp.bind(this));
         let _temp_5: any = this.var_46.hero_link;
         this.var_46.hero_link.useHandCursor = _loc1_ = true;
         _temp_5.buttonMode = 0;
         this.var_46.composer_link.addEventListener(MouseEvent.MOUSE_OVER, this.method_109.bind(this));
         this.var_46.composer_link.addEventListener(MouseEvent.MOUSE_OUT, this.method_103.bind(this));
         this.var_46.composer_link.addEventListener(MouseEvent.MOUSE_UP, this.credUp.bind(this));
         let _temp_6: any = this.var_46.composer_link;
         this.var_46.composer_link.useHandCursor = _loc1_ = true;
         _temp_6.buttonMode = 0;
      }
      
      public method_154(param1: boolean): void
      {
         if(param1 == true)
         {
            this.mRef.method_44("efficiency_mode_on","settings");
            this.mRef.method_69(false);
            this.mRef.method_70(false);
            stage.quality = StageQuality.LOW;
            this.var_164 = 1;
            stage.frameRate = 90;
            this.var_171 = 3;
            this.mRef.objBackgroundParticles.method_96(true);
            this.mRef.objBackgroundParticles2.method_96(true);
            this.mRef.sEffects.method_257();
            this.mRef.blnScreenShake = false;
            this.var_304 = this.mRef.var_227 = 2;
         }
         else
         {
            this.mRef.method_69(true);
            this.mRef.method_70(true);
            stage.quality = StageQuality.HIGH;
            this.var_164 = 3;
            stage.frameRate = this.mRef.gData.mainFPS2;
            this.var_171 = 2;
            this.mRef.objBackgroundParticles.method_55(true);
            this.mRef.objBackgroundParticles2.method_55(true);
            this.mRef.sEffects.method_288();
            this.mRef.blnScreenShake = true;
            this.var_304 = this.mRef.var_227 = 1;
         }
         this.mRef.SaveGameData();
      }
      
      private method_750(param1: Event): any
      {
         let _loc2_: any[] = new Array();
         param1.target.filters = _loc2_;
      }
      
      private RemoveSettings(): void
      {
         if(this.var_4 != null)
         {
            this.var_4.backSettings.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.backSettings.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.backSettings.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.hotkeys.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.hotkeys.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.hotkeys.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.back_btn.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.back_btn.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.back_btn.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.gs1.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.gs1.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.gs1.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.gs2.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.gs2.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.gs2.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.gs3.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.gs3.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.gs3.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.g1.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.g1.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.g1.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.g2.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.g2.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.g2.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.g3.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.g3.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.g3.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.m1.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.m1.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.m1.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.m2.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.m2.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.m2.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.s1.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.s1.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.s1.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.s2.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.s2.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.s2.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.v1.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.v1.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.v1.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.v2.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.v2.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.v2.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.e1.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.e1.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.e1.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.var_4.e2.removeEventListener(MouseEvent.MOUSE_OVER, this.method_12.bind(this));
            this.var_4.e2.removeEventListener(MouseEvent.MOUSE_OUT, this.method_11.bind(this));
            this.var_4.e2.removeEventListener(MouseEvent.MOUSE_UP, this.settUp.bind(this));
            this.removeChild(this.var_4);
         }
         this.mRef.SaveGameData();
         this.var_4 = null;
      }
      
      private method_724(): void
      {
         this.objHotkeyManager.method_369(this.mRef.stage);
         this.objHotkeyManager.method_72("Up",this.var_4.up_mc,this.var_4.up_txt,this.mRef.gData.hot1);
         this.objHotkeyManager.method_72("Down",this.var_4.down_mc,this.var_4.down_txt,this.mRef.gData.hot2);
         this.objHotkeyManager.method_72("Left",this.var_4.left_mc,this.var_4.left_txt,this.mRef.gData.hot3);
         this.objHotkeyManager.method_72("Right",this.var_4.right_mc,this.var_4.right_txt,this.mRef.gData.hot4);
         this.objHotkeyManager.method_72("Pause",this.var_4.pause_mc,this.var_4.pause_txt,this.mRef.gData.hot5);
      }
      
      private method_476(): any
      {
         this.var_53 = new class_70();
         this.addChild(this.var_53);
         if(this.mRef.blnCheatClass)
         {
            this.var_53.btnClass_mc.gotoAndStop(2);
         }
         if(this.mRef.var_132)
         {
            this.var_53.btnBubbles_mc.gotoAndStop(2);
         }
         if(this.mRef.var_139)
         {
            this.var_53.btnGuns_mc.gotoAndStop(2);
         }
         if(this.mRef.var_224)
         {
            this.var_53.btnUnlockGuns_mc.gotoAndStop(2);
         }
         if(this.mRef.blnBTAUnlocked)
         {
            this.var_53.btnUnlockBTALevels_mc.gotoAndStop(2);
         }
         if(this.mRef.bln50GunPoints)
         {
            this.var_53.btn50GunPoints_mc.gotoAndStop(2);
         }
         this.var_8.method_4(this.var_53.btnClass_mc,true);
         this.var_8.method_4(this.var_53.btnBubbles_mc,true);
         this.var_8.method_4(this.var_53.btnGuns_mc,true);
         this.var_8.method_4(this.var_53.btnUnlockGuns_mc,true);
         this.var_8.method_4(this.var_53.back_btn,true,this.method_650,this.method_109,this.method_103);
         this.var_8.method_4(this.var_53.btnUnlockBTALevels_mc,true);
         this.var_8.method_4(this.var_53.btn50GunPoints_mc,true);
      }
   }
