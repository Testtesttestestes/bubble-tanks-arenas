package
{
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.*;
   import flash.filters.GlowFilter;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol1886")]
   public class class_53 extends Sprite
   {
      
      private var var_26:class_99;
      
      public var txtRollOver2_txt:TextField;
      
      public var btnScoreSummary_mc:MovieClip;
      
      public var ButtonRight_mc:class_77;
      
      private var var_180:Number;
      
      private var var_190:Array;
      
      private var funChallangeAFriend:Function;
      
      public var Bulletsfired_mc:MovieClip;
      
      public var btnPlayMoreGames_mc:MovieClip;
      
      private var var_8:class_3;
      
      public var ButtonLeft_mc:class_77;
      
      private var funRetryArena:Function;
      
      public var ShotsMissed_mc:MovieClip;
      
      private var var_198:Array;
      
      private var var_25:Array;
      
      public var ArenaStatsBackground_mc:MovieClip;
      
      private var btaGameWorld:BTAGameWorld;
      
      public var btnContinue_mc:MovieClip;
      
      public var BuubleScore_mc:MovieClip;
      
      private var var_163:Array;
      
      private var var_430:Boolean;
      
      public var BubbleDifficulty_mc:MovieClip;
      
      private var var_498:Function;
      
      private var var_30:Array;
      
      private var var_199:class_100;
      
      private var var_475:Boolean;
      
      private var arrBubbleFields:Array;
      
      public var CompletedHealth_mc:MovieClip;
      
      public var objGameObjectLibrary:class_2;
      
      public var TanksDefeated_mc:MovieClip;
      
      public var Accuracy_mc:MovieClip;
      
      public var TotalTime_mc:MovieClip;
      
      public var ArenaStatistics_mc:MovieClip;
      
      public var BubbleFields_mc:MovieClip;
      
      public var RollOverText_mc:MovieClip;
      
      public var btnRetryArena_mc:MovieClip;
      
      public var var_354:int;
      
      private var var_99:Array;
      
      public var BubblesGained_mc:MovieClip;
      
      public var ButtonTopOut_mc:class_77;
      
      public var txtRollOver_txt:TextField;
      
      public var BubblefieldStat_mc:MovieClip;
      
      private var var_58:Array;
      
      private var var_518:Function;
      
      public var SSBackground_mc:MovieClip;
      
      public var SSTime_mc:MovieClip;
      
      private var currentArenaData:ArenaData;
      
      public var FinalScore_mc:MovieClip;
      
      public var intState:Number;
      
      private var var_218:Number = 0;
      
      public var DamageDone_mc:MovieClip;
      
      public var ButtonBottomDeep_mc:class_77;
      
      public var Summary_mc:MovieClip;
      
      private var var_161:Array;
      
      public var BubblesCompleted_mc:MovieClip;
      
      public var btnArenaMenu_mc:MovieClip;
      
      public var ButtonBottom_mc:class_77;
      
      public var btnBack_mc:MovieClip;
      
      private var var_54:Array;
      
      public function class_53(param1:Boolean = false, param2:Function = null, param3:Function = null, param4:Function = null, param5:Function = null, param6:ArenaData = null, param7:BTAGameWorld = null)
      {
         super();
         if(param1)
         {
            this.funRetryArena = param2;
            this.var_518 = param3;
            this.funChallangeAFriend = param4;
            this.var_498 = param5;
            this.currentArenaData = param6;
            this.btaGameWorld = param7;
            this.intState = 0;
            this.var_180 = 0;
            this.var_430 = false;
            this.method_725();
         }
      }
      
      private function UnHighlightButton(param1:MovieClip) : *
      {
         var _loc2_:Array = new Array();
         param1.filters = _loc2_;
      }
      
      private function method_480(param1:Number) : String
      {
         var _loc2_:String = "";
         var _loc3_:Number = 0;
         var _loc5_:String = "";
         while(param1 >= 60)
         {
            param1 -= 60;
            _loc3_ += 1;
         }
         if(_loc3_ > 0)
         {
            var _loc4_:String = "" + _loc3_ + " Mins, ";
         }
         _loc5_ = "" + param1 + " Secs";
         return "" + "" + _loc5_;
      }
      
      private function method_855(param1:Event) : *
      {
      }
      
      private function method_725() : void
      {
         var _loc2_:String = null;
         var _loc8_:Number = NaN;
         var _loc9_:Number = NaN;
         var _loc10_:Number = NaN;
         var _loc11_:Number = NaN;
         var _loc12_:PauseMenuBubblefield = null;
         this.var_475 = false;
         this.objGameObjectLibrary = class_2.getInstance();
         this.var_54 = new Array();
         this.var_30 = new Array();
         this.var_161 = new Array();
         this.arrBubbleFields = new Array();
         this.var_163 = new Array();
         this.var_99 = new Array();
         this.var_190 = new Array();
         this.var_8 = new class_3();
         this.var_8.Setup(null,this.method_107,this.method_112);
         this.var_8.method_4(this.btnRetryArena_mc,true,this.RetryTheArena);
         this.var_8.method_4(this.btnArenaMenu_mc,true,this.method_758);
         this.var_8.method_4(this.btnPlayMoreGames_mc,true,this.PlayMoreGames);
         this.var_8.method_4(this.btnScoreSummary_mc,true,this.method_676);
         this.var_8.method_4(this.btnContinue_mc,true,this.method_678);
         this.var_8.method_4(this.btnBack_mc,true,this.method_703);
         this.var_30.push({
            "x":this.ArenaStatistics_mc.x,
            "y":this.ArenaStatistics_mc.y
         });
         this.var_30.push({
            "x":this.BubblesCompleted_mc.x,
            "y":this.BubblesCompleted_mc.y
         });
         this.var_30.push({
            "x":this.TanksDefeated_mc.x,
            "y":this.TanksDefeated_mc.y
         });
         this.var_30.push({
            "x":this.BubblesGained_mc.x,
            "y":this.BubblesGained_mc.y
         });
         this.var_30.push({
            "x":this.DamageDone_mc.x,
            "y":this.DamageDone_mc.y
         });
         this.var_30.push({
            "x":this.TotalTime_mc.x,
            "y":this.TotalTime_mc.y
         });
         this.var_30.push({
            "x":this.Bulletsfired_mc.x,
            "y":this.Bulletsfired_mc.y
         });
         this.var_30.push({
            "x":this.Accuracy_mc.x,
            "y":this.Accuracy_mc.y
         });
         this.var_30.push({
            "x":this.ShotsMissed_mc.x,
            "y":this.ShotsMissed_mc.y
         });
         this.var_30.push({
            "x":this.FinalScore_mc.x,
            "y":this.FinalScore_mc.y
         });
         this.var_30.push({
            "x":this.ArenaStatsBackground_mc.x,
            "y":this.ArenaStatsBackground_mc.y
         });
         this.var_30.push({
            "x":this.btnScoreSummary_mc.x,
            "y":this.btnScoreSummary_mc.y
         });
         this.var_30.push({
            "x":this.btnContinue_mc.x,
            "y":this.btnContinue_mc.y
         });
         this.BubblesCompleted_mc.txtOutput_txt.text = "" + this.btaGameWorld.var_206 + " / " + this.currentArenaData.var_6.length;
         this.BubblesCompleted_mc.PercentBar_mc.gotoAndStop(Math.floor(this.btaGameWorld.var_206 / this.currentArenaData.var_6.length * 100));
         this.TanksDefeated_mc.txtOutput_txt.text = "" + this.btaGameWorld.var_259;
         this.BubblesGained_mc.txtOutput_txt.text = "" + this.btaGameWorld.var_277;
         this.DamageDone_mc.txtOutput_txt.text = "" + this.btaGameWorld.var_406;
         this.Bulletsfired_mc.txtOutput_txt.text = "" + this.btaGameWorld.var_281;
         var _loc1_:Number = Math.floor((this.btaGameWorld.var_281 - this.btaGameWorld.var_343) / this.btaGameWorld.var_281 * 100);
         if(_loc1_.toString() == "NaN")
         {
            _loc2_ = "---";
         }
         else
         {
            _loc2_ = "" + _loc1_ + "%";
         }
         this.Accuracy_mc.txtOutput_txt.text = "" + _loc2_;
         this.ShotsMissed_mc.txtOutput_txt.text = "" + this.btaGameWorld.var_343;
         this.var_198 = new Array();
         var _loc3_:Number = 0;
         var _loc4_:Number = 0;
         var _loc5_:Boolean = true;
         var _loc6_:uint = 0;
         while(_loc6_ < this.btaGameWorld.objCurrentArenaData.var_6.length)
         {
            _loc3_ = 0;
            _loc3_ += this.btaGameWorld.objCurrentArenaData.var_416[_loc6_ + 1];
            _loc3_ = Math.round(_loc3_);
            if(this.btaGameWorld.var_245.length > _loc6_ + 2 && this.btaGameWorld.var_95.length > _loc6_ + 1)
            {
               _loc8_ = this.btaGameWorld.var_245[_loc6_ + 2] / this.btaGameWorld.var_245[0];
               _loc8_ = Math.floor(_loc8_ * 100);
               if(_loc8_ > 0)
               {
                  _loc9_ = Number(this.btaGameWorld.var_95[_loc6_ + 1]);
                  _loc9_ = Math.round(_loc9_ / 1000);
                  _loc10_ = 60 - _loc9_;
                  if(_loc10_ <= 0)
                  {
                     _loc10_ = 0;
                  }
                  else
                  {
                     _loc10_ = _loc10_ / 60 * 100;
                  }
                  _loc4_ += Math.floor(_loc3_ * 25 * Math.sqrt(_loc8_ / 100) + _loc10_);
                  this.var_198.push({
                     "intDifficulty":_loc3_,
                     "time":_loc9_,
                     "LifePercent":_loc8_
                  });
               }
               else
               {
                  _loc5_ = false;
               }
            }
            _loc6_ += 1;
         }
         this.SetSummaryData();
         this.FinalScore_mc.txtOutput_txt.text = "Final Score: " + _loc4_;
         this.var_354 = _loc4_;
         this.ArenaStatistics_mc.y = this.ButtonBottom_mc.y;
         this.BubblesCompleted_mc.y = this.ButtonBottom_mc.y;
         this.TanksDefeated_mc.y = this.ButtonBottom_mc.y;
         this.BubblesGained_mc.y = this.ButtonBottom_mc.y;
         this.DamageDone_mc.y = this.ButtonBottom_mc.y;
         this.Bulletsfired_mc.y = this.ButtonBottom_mc.y;
         this.Accuracy_mc.y = this.ButtonBottom_mc.y;
         this.ShotsMissed_mc.y = this.ButtonBottom_mc.y;
         this.TotalTime_mc.y = this.ButtonBottom_mc.y;
         this.FinalScore_mc.y = this.ButtonBottom_mc.y;
         this.ArenaStatsBackground_mc.y = this.ButtonBottom_mc.y;
         this.btnScoreSummary_mc.y = this.ButtonBottom_mc.y;
         this.btnContinue_mc.y = this.ButtonBottom_mc.y;
         this.var_54.push({
            "x":this.Summary_mc.x,
            "y":this.Summary_mc.y
         });
         this.var_54.push({
            "x":this.RollOverText_mc.x,
            "y":this.RollOverText_mc.y
         });
         this.var_54.push({
            "x":this.BubbleDifficulty_mc.x,
            "y":this.BubbleDifficulty_mc.y
         });
         this.var_54.push({
            "x":this.CompletedHealth_mc.x,
            "y":this.CompletedHealth_mc.y
         });
         this.var_54.push({
            "x":this.SSTime_mc.x,
            "y":this.SSTime_mc.y
         });
         this.var_54.push({
            "x":this.BuubleScore_mc.x,
            "y":this.BuubleScore_mc.y
         });
         this.var_54.push({
            "x":this.SSBackground_mc.x,
            "y":this.SSBackground_mc.y
         });
         this.var_54.push({
            "x":this.btnBack_mc.x,
            "y":this.btnBack_mc.y
         });
         this.var_54.push({
            "x":this.BubblefieldStat_mc.x,
            "y":this.BubblefieldStat_mc.y
         });
         this.Summary_mc.y = this.ButtonBottom_mc.y;
         this.RollOverText_mc.y = this.ButtonBottom_mc.y;
         this.BubbleDifficulty_mc.y = this.ButtonBottom_mc.y;
         this.CompletedHealth_mc.y = this.ButtonBottom_mc.y;
         this.SSTime_mc.y = this.ButtonBottom_mc.y;
         this.BuubleScore_mc.y = this.ButtonBottom_mc.y;
         this.SSBackground_mc.y = this.ButtonBottom_mc.y;
         this.btnBack_mc.y = this.ButtonBottom_mc.y;
         this.BubblefieldStat_mc.y = this.ButtonBottom_mc.y;
         var _loc7_:uint = 0;
         while(_loc7_ < this.BubbleFields_mc.numChildren)
         {
            this.var_161.push({
               "x":this.BubbleFields_mc.getChildAt(_loc7_).x,
               "y":this.BubbleFields_mc.getChildAt(_loc7_).y
            });
            _loc7_ += 1;
         }
         this.var_161.sortOn("x",Array.NUMERIC);
         if(this.currentArenaData.var_6.length / 2 != Math.floor(this.currentArenaData.var_6.length / 2))
         {
            _loc11_ = (this.var_161[1].x - this.var_161[0].x) / 2;
            _loc7_ = 0;
            while(_loc7_ < this.var_161.length)
            {
               this.var_161[_loc7_].x -= _loc11_;
               _loc7_ += 1;
            }
         }
         while(this.BubbleFields_mc.numChildren > 0)
         {
            this.BubbleFields_mc.removeChildAt(0);
         }
         _loc7_ = 0;
         while(_loc7_ < this.currentArenaData.var_6.length)
         {
            _loc12_ = new PauseMenuBubblefield();
            addChild(_loc12_);
            this.arrBubbleFields.push(_loc12_);
            _loc7_ += 1;
         }
         this.arrBubbleFields.sortOn("x",Array.NUMERIC);
         _loc7_ = 0;
         while(_loc7_ < this.arrBubbleFields.length)
         {
            this.arrBubbleFields[_loc7_].x = this.ButtonBottom_mc.x;
            this.arrBubbleFields[_loc7_].y = this.ButtonBottom_mc.y;
            this.arrBubbleFields[_loc7_].name = "bb" + _loc7_;
            _loc7_ += 1;
         }
         this.var_163.push({
            "x":this.btnPlayMoreGames_mc.x,
            "y":this.btnPlayMoreGames_mc.y
         });
         this.var_163.push({
            "x":this.btnArenaMenu_mc.x,
            "y":this.btnArenaMenu_mc.y
         });
         this.var_163.push({
            "x":0,
            "y":0
         });
         this.var_163.push({
            "x":this.btnRetryArena_mc.x,
            "y":this.btnRetryArena_mc.y
         });
         this.btnPlayMoreGames_mc.y = this.ButtonBottom_mc.y;
         this.btnArenaMenu_mc.y = this.ButtonBottom_mc.y;
         this.btnRetryArena_mc.y = this.ButtonBottom_mc.y;
         _loc12_ = null;
         if(_loc5_ && this.currentArenaData.var_96.length > 0)
         {
            this.var_430 = true;
         }
         if(_loc5_)
         {
            this.intState = -2;
            this.method_773();
         }
         else
         {
            this.intState = -3;
            this.method_490();
         }
         this.txtRollOver_txt.text = "";
         this.txtRollOver_txt.alpha = 0.7;
         this.txtRollOver2_txt.text = "";
         this.txtRollOver2_txt.alpha = 0.7;
      }
      
      private function method_262() : void
      {
         this.ArenaStatistics_mc.y = this.ArenaStatistics_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.BubblesCompleted_mc.y = this.BubblesCompleted_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.TanksDefeated_mc.y = this.TanksDefeated_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.BubblesGained_mc.y = this.BubblesGained_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.DamageDone_mc.y = this.DamageDone_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.Bulletsfired_mc.y = this.Bulletsfired_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.Accuracy_mc.y = this.Accuracy_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.ShotsMissed_mc.y = this.ShotsMissed_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.TotalTime_mc.y = this.TotalTime_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.FinalScore_mc.y = this.FinalScore_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         if(this.ArenaStatsBackground_mc.currentFrame != 1)
         {
            this.ArenaStatsBackground_mc.gotoAndStop(this.ArenaStatsBackground_mc.currentFrame - 1);
         }
         this.btnScoreSummary_mc.y = this.btnScoreSummary_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.btnContinue_mc.y = this.btnContinue_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
      }
      
      private function method_693() : void
      {
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         var _loc1_:uint = 0;
         while(_loc1_ < this.arrBubbleFields.length)
         {
            _loc2_ = this.arrBubbleFields[_loc1_].x - stage.mouseX;
            _loc3_ = this.arrBubbleFields[_loc1_].y - stage.mouseY;
            if(Math.sqrt(_loc2_ * _loc2_ + _loc3_ * _loc3_) < 60)
            {
               this.arrBubbleFields[_loc1_].width = this.arrBubbleFields[_loc1_].height = 20 + 40 * ((60 - Math.sqrt(_loc2_ * _loc2_ + _loc3_ * _loc3_)) / 60);
               if(Math.sqrt(_loc2_ * _loc2_ + _loc3_ * _loc3_) < 25)
               {
                  this.HighLightButton(this.arrBubbleFields[_loc1_]);
               }
               else
               {
                  this.UnHighlightButton(this.arrBubbleFields[_loc1_]);
               }
            }
            else
            {
               this.UnHighlightButton(this.arrBubbleFields[_loc1_]);
               this.arrBubbleFields[_loc1_].width = this.arrBubbleFields[_loc1_].height = this.arrBubbleFields[_loc1_].height * 0.8 + 20 * 0.2;
            }
            _loc1_ += 1;
         }
         this.Summary_mc.x = this.Summary_mc.x * 0.9 + this.var_54[0].x * 0.1;
         this.Summary_mc.y = this.Summary_mc.y * 0.9 + this.var_54[0].y * 0.1;
         if(this.Summary_mc.y < 500)
         {
            this.RollOverText_mc.x = this.RollOverText_mc.x * 0.9 + this.var_54[1].x * 0.1;
            this.RollOverText_mc.y = this.RollOverText_mc.y * 0.9 + this.var_54[1].y * 0.1;
         }
         if(this.RollOverText_mc.y < 500)
         {
            this.arrBubbleFields[0].x = this.arrBubbleFields[0].x * 0.9 + this.var_161[0 + 4 - (Math.floor(this.arrBubbleFields.length / 2) - 1)].x * 0.1;
            this.arrBubbleFields[0].y = this.arrBubbleFields[0].y * 0.9 + this.var_161[0 + 4 - (Math.floor(this.arrBubbleFields.length / 2) - 1)].y * 0.1;
            _loc1_ = 1;
            while(_loc1_ < this.arrBubbleFields.length)
            {
               if(this.arrBubbleFields[_loc1_ - 1].y < 400)
               {
                  this.arrBubbleFields[_loc1_].x = this.arrBubbleFields[_loc1_].x * 0.9 + this.var_161[_loc1_ + 4 - (Math.floor(this.arrBubbleFields.length / 2) - 1)].x * 0.1;
                  this.arrBubbleFields[_loc1_].y = this.arrBubbleFields[_loc1_].y * 0.9 + this.var_161[_loc1_ + 4 - (Math.floor(this.arrBubbleFields.length / 2) - 1)].y * 0.1;
               }
               _loc1_ += 1;
            }
         }
         if(this.arrBubbleFields[this.arrBubbleFields.length - 1].y < 500)
         {
            this.BubblefieldStat_mc.x = this.BubblefieldStat_mc.x * 0.9 + this.var_54[8].x * 0.1;
            this.BubblefieldStat_mc.y = this.BubblefieldStat_mc.y * 0.9 + this.var_54[8].y * 0.1;
         }
         if(this.BubblefieldStat_mc.y < 500)
         {
            this.BubbleDifficulty_mc.x = this.BubbleDifficulty_mc.x * 0.9 + this.var_54[2].x * 0.1;
            this.BubbleDifficulty_mc.y = this.BubbleDifficulty_mc.y * 0.9 + this.var_54[2].y * 0.1;
         }
         if(this.BubbleDifficulty_mc.y < 500)
         {
            this.CompletedHealth_mc.x = this.CompletedHealth_mc.x * 0.9 + this.var_54[3].x * 0.1;
            this.CompletedHealth_mc.y = this.CompletedHealth_mc.y * 0.9 + this.var_54[3].y * 0.1;
         }
         if(this.CompletedHealth_mc.y < 500)
         {
            this.SSTime_mc.x = this.SSTime_mc.x * 0.9 + this.var_54[4].x * 0.1;
            this.SSTime_mc.y = this.SSTime_mc.y * 0.9 + this.var_54[4].y * 0.1;
         }
         if(this.SSTime_mc.y < 500)
         {
            this.BuubleScore_mc.x = this.BuubleScore_mc.x * 0.9 + this.var_54[5].x * 0.1;
            this.BuubleScore_mc.y = this.BuubleScore_mc.y * 0.9 + this.var_54[5].y * 0.1;
         }
         if(this.BuubleScore_mc.y < 500)
         {
            this.SSBackground_mc.x = this.var_54[6].x;
            this.SSBackground_mc.y = this.var_54[6].y;
            if(this.SSBackground_mc.currentFrame != this.SSBackground_mc.totalFrames)
            {
               this.SSBackground_mc.gotoAndStop(this.SSBackground_mc.currentFrame + 1);
            }
         }
         if(this.SSBackground_mc.currentFrame == this.SSBackground_mc.totalFrames)
         {
            this.btnBack_mc.x = this.btnBack_mc.x * 0.9 + this.var_54[7].x * 0.1;
            this.btnBack_mc.y = this.btnBack_mc.y * 0.9 + this.var_54[7].y * 0.1;
         }
      }
      
      private function method_758(param1:Event) : void
      {
         this.Destroy();
         this.var_518();
      }
      
      private function method_667() : *
      {
         if(this.var_190 == null || this.var_190.length == 0)
         {
            return;
         }
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_190.length)
         {
            if(this.var_190[_loc1_].alpha > 0)
            {
               this.var_190[_loc1_].alpha -= 0.03;
            }
            else
            {
               this.var_190[_loc1_].alpha == 0;
            }
            _loc1_ += 1;
         }
      }
      
      private function method_414() : *
      {
         var _loc1_:uint = 0;
         if(this.var_199 != null)
         {
            this.var_199.alpha -= 0.1;
         }
         if(this.var_26 != null)
         {
            this.var_26.alpha -= 0.1;
         }
         if(this.var_58 != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_58.length)
            {
               this.var_58[_loc1_].obj.alpha -= 0.1;
               _loc1_++;
            }
         }
         if(this.var_199 != null)
         {
            if(this.var_199.alpha <= 0)
            {
               removeChild(this.var_199);
               this.var_199 = null;
               _loc1_ = 0;
               while(_loc1_ < this.var_58.length)
               {
                  removeChild(this.var_58[_loc1_].obj);
                  _loc1_++;
               }
               this.var_58.length = 0;
               if(this.var_475)
               {
                  this.method_567();
               }
               else
               {
                  this.intState = 0;
               }
            }
         }
         if(this.var_26 != null)
         {
            if(this.var_26.alpha <= 0)
            {
               removeChild(this.var_26);
               this.var_26 = null;
               this.var_25.length = 0;
               this.intState = 0;
            }
         }
      }
      
      public function Run(param1:Event) : void
      {
         switch(this.intState)
         {
            case -3:
               this.YouLoseMotion();
               break;
            case -2:
               this.method_397();
               break;
            case -1:
               this.method_397();
               break;
            case 0:
               this.method_667();
               this.method_418();
               break;
            case 1:
               this.method_262();
               break;
            case 2:
               this.method_693();
               this.method_262();
               break;
            case 3:
               this.method_771();
               this.method_418();
               break;
            case 4:
               this.method_262();
               this.method_485();
               break;
            case 5:
               this.method_756();
         }
      }
      
      private function PlayMoreGames(param1:Event) : void
      {
         this.var_498();
      }
      
      private function YouLoseMotion() : void
      {
         if(this.var_218 >= 140)
         {
            this.method_414();
            return;
         }
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_25.length)
         {
            this.var_25[_loc1_].clip.x = this.var_25[_loc1_].clip.x * 0.9 + this.var_25[_loc1_].x * 0.1;
            this.var_25[_loc1_].clip.y = this.var_25[_loc1_].clip.y * 0.9 + this.var_25[_loc1_].y * 0.1;
            this.var_25[_loc1_].clip.rotation = this.var_25[_loc1_].clip.rotation * 0.9 + this.var_25[_loc1_].rot * 0.1;
            _loc1_++;
         }
         ++this.var_218;
      }
      
      private function method_703(param1:Event) : void
      {
         this.intState = 3;
      }
      
      private function ChallangeAFriend(param1:Event) : void
      {
         this.intState = 5;
         this.funChallangeAFriend();
      }
      
      private function method_489() : *
      {
         var _loc4_:PartsUnlockedScreen = null;
         var _loc5_:Number = NaN;
         var _loc1_:Number = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.currentArenaData.var_96.length)
         {
            this.var_99.push({
               "type":this.currentArenaData.var_96[_loc2_].Type,
               "data":this.currentArenaData.var_96[_loc2_].Data
            });
            _loc2_ += 1;
         }
         if(this.currentArenaData.strID == "G90000168" && class_2.method_64().gData.var_473 == true)
         {
            _loc1_ = 1;
            class_2.method_64().gData.var_473 = false;
         }
         if(this.currentArenaData.strID == "G90000178" && class_2.method_64().gData.blnShowAwards2Tutorial == true)
         {
            _loc1_ = 2;
            class_2.method_64().gData.blnShowAwards2Tutorial = false;
         }
         var _loc3_:String = "";
         if(this.var_99[0].type == "Part")
         {
            _loc5_ = Number(this.var_99[0].data);
            if(_loc5_ >= 4000)
            {
               _loc3_ = "You got an Enemy Part";
            }
            else
            {
               _loc3_ = "You got an Avatar Part";
            }
            _loc4_ = new PartsUnlockedScreen(true,this.objGameObjectLibrary.method_37(this.var_99[0].data),this.objGameObjectLibrary.method_123(this.var_99[0].data),1,this.NextPart,_loc3_,_loc1_);
         }
         else if(this.var_99[0].type == "BubblePoint")
         {
            _loc4_ = new PartsUnlockedScreen(true,"Bubble Point",new BubblePointsIcon(),1,this.NextPart,"You got Bubble Points!",_loc1_);
         }
         else if(this.var_99[0].type == "Class")
         {
            _loc4_ = new PartsUnlockedScreen(true,"Class Point",new ClassPointIcon(),1,this.NextPart,"You got a new class size!",_loc1_);
         }
         else if(this.var_99[0].type == "GunPoint")
         {
            _loc4_ = new PartsUnlockedScreen(true,"Gun Point",new GunPointsIcon(),1,this.NextPart,"You got Gun Points!",_loc1_);
         }
         addChild(_loc4_);
         this.var_190.push(_loc4_);
      }
      
      private function NextPart(param1:Number, param2:Number = 0, param3:Number = 1) : *
      {
         var _loc4_:PartsUnlockedScreen = null;
         var _loc5_:String = null;
         var _loc6_:Number = NaN;
         if(param1 < this.var_99.length)
         {
            _loc5_ = "";
            if(this.var_99[param1].type == "Part")
            {
               _loc6_ = Number(this.var_99[param1].data);
               if(_loc6_ >= 4000)
               {
                  _loc5_ = "You got an Enemy Part";
               }
               else
               {
                  _loc5_ = "You got an Avatar Part";
               }
               _loc4_ = new PartsUnlockedScreen(true,this.objGameObjectLibrary.method_37(this.var_99[param1].data),this.objGameObjectLibrary.method_123(this.var_99[param1].data),param1 + 1,this.NextPart,_loc5_,param2,param3);
            }
            else if(this.var_99[param1].type == "BubblePoint")
            {
               _loc4_ = new PartsUnlockedScreen(true,"Bubble Point",new BubblePointsIcon(),param1 + 1,this.NextPart,"You got Bubble Points!",param2,param3);
            }
            else if(this.var_99[param1].type == "Class")
            {
               _loc4_ = new PartsUnlockedScreen(true,"Class Point",new ClassPointIcon(),param1 + 1,this.NextPart,"You got a new class size!",param2,param3);
            }
            else if(this.var_99[param1].type == "GunPoint")
            {
               _loc4_ = new PartsUnlockedScreen(true,"Gun Point",new GunPointsIcon(),param1 + 1,this.NextPart,"You got Gun Points!",param2,param3);
            }
            addChild(_loc4_);
            this.var_190.push(_loc4_);
         }
         else
         {
            this.intState = 0;
         }
      }
      
      private function method_397() : *
      {
         if(this.var_218 >= 140)
         {
            this.method_414();
            return;
         }
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_58.length)
         {
            this.var_58[_loc1_].x += this.var_58[_loc1_].xvel;
            this.var_58[_loc1_].y += this.var_58[_loc1_].yvel;
            this.var_58[_loc1_].yvel += 0.25;
            this.var_58[_loc1_].rot += this.var_58[_loc1_].rotVel;
            this.var_58[_loc1_].obj.x = this.var_58[_loc1_].x;
            this.var_58[_loc1_].obj.y = this.var_58[_loc1_].y;
            this.var_58[_loc1_].obj.rotation = this.var_58[_loc1_].rot;
            _loc1_++;
         }
         ++this.var_218;
      }
      
      private function method_485() : *
      {
         this.btnArenaMenu_mc.x = this.btnArenaMenu_mc.x * 0.9 + this.var_163[1].x * 0.1;
         this.btnArenaMenu_mc.y = this.btnArenaMenu_mc.y * 0.9 + this.var_163[1].y * 0.1;
         if(this.btnArenaMenu_mc.y < 400)
         {
            this.btnRetryArena_mc.x = this.btnRetryArena_mc.x * 0.9 + this.var_163[3].x * 0.1;
            this.btnRetryArena_mc.y = this.btnRetryArena_mc.y * 0.9 + this.var_163[3].y * 0.1;
         }
         if(this.btnRetryArena_mc.y < 400)
         {
            this.btnPlayMoreGames_mc.x = this.btnPlayMoreGames_mc.x * 0.9 + this.var_163[0].x * 0.1;
            this.btnPlayMoreGames_mc.y = this.btnPlayMoreGames_mc.y * 0.9 + this.var_163[0].y * 0.1;
         }
      }
      
      private function method_676(param1:Event) : void
      {
         this.intState = 2;
      }
      
      private function method_787(param1:Number = 0) : Number
      {
         param1 = Math.floor(param1);
         var _loc2_:Number = 0;
         return 0x0A ^ param1.toString.length;
      }
      
      private function method_418() : void
      {
         this.ArenaStatistics_mc.x = this.ArenaStatistics_mc.x * 0.9 + this.var_30[0].x * 0.1;
         this.ArenaStatistics_mc.y = this.ArenaStatistics_mc.y * 0.9 + this.var_30[0].y * 0.1;
         if(this.ArenaStatistics_mc.y < 500)
         {
            this.BubblesCompleted_mc.x = this.BubblesCompleted_mc.x * 0.9 + this.var_30[1].x * 0.1;
            this.BubblesCompleted_mc.y = this.BubblesCompleted_mc.y * 0.9 + this.var_30[1].y * 0.1;
         }
         if(this.BubblesCompleted_mc.y < 500)
         {
            this.TanksDefeated_mc.x = this.TanksDefeated_mc.x * 0.9 + this.var_30[2].x * 0.1;
            this.TanksDefeated_mc.y = this.TanksDefeated_mc.y * 0.9 + this.var_30[2].y * 0.1;
         }
         if(this.TanksDefeated_mc.y < 400)
         {
            this.DamageDone_mc.x = this.DamageDone_mc.x * 0.9 + this.var_30[4].x * 0.1;
            this.DamageDone_mc.y = this.DamageDone_mc.y * 0.9 + this.var_30[4].y * 0.1;
         }
         if(this.DamageDone_mc.y < 400)
         {
            this.BubblesGained_mc.x = this.BubblesGained_mc.x * 0.9 + this.var_30[3].x * 0.1;
            this.BubblesGained_mc.y = this.BubblesGained_mc.y * 0.9 + this.var_30[3].y * 0.1;
         }
         if(this.BubblesGained_mc.y < 400)
         {
            this.TotalTime_mc.x = this.TotalTime_mc.x * 0.9 + this.var_30[5].x * 0.1;
            this.TotalTime_mc.y = this.TotalTime_mc.y * 0.9 + this.var_30[5].y * 0.1;
         }
         if(this.TotalTime_mc.y < 400)
         {
            this.Bulletsfired_mc.x = this.Bulletsfired_mc.x * 0.9 + this.var_30[6].x * 0.1;
            this.Bulletsfired_mc.y = this.Bulletsfired_mc.y * 0.9 + this.var_30[6].y * 0.1;
         }
         if(this.Bulletsfired_mc.y < 400)
         {
            this.Accuracy_mc.x = this.Accuracy_mc.x * 0.9 + this.var_30[7].x * 0.1;
            this.Accuracy_mc.y = this.Accuracy_mc.y * 0.9 + this.var_30[7].y * 0.1;
         }
         if(this.Accuracy_mc.y < 400)
         {
            this.ShotsMissed_mc.x = this.ShotsMissed_mc.x * 0.9 + this.var_30[8].x * 0.1;
            this.ShotsMissed_mc.y = this.ShotsMissed_mc.y * 0.9 + this.var_30[8].y * 0.1;
         }
         if(this.ShotsMissed_mc.y < 400)
         {
            this.FinalScore_mc.x = this.FinalScore_mc.x * 0.9 + this.var_30[9].x * 0.1;
            this.FinalScore_mc.y = this.FinalScore_mc.y * 0.9 + this.var_30[9].y * 0.1;
         }
         if(this.FinalScore_mc.y < 500)
         {
            this.ArenaStatsBackground_mc.x = this.var_30[10].x;
            this.ArenaStatsBackground_mc.y = this.var_30[10].y;
            if(this.ArenaStatsBackground_mc.currentFrame != this.ArenaStatsBackground_mc.totalFrames)
            {
               this.ArenaStatsBackground_mc.gotoAndStop(this.ArenaStatsBackground_mc.currentFrame + 1);
            }
         }
         if(this.ArenaStatsBackground_mc.currentFrame == this.ArenaStatsBackground_mc.totalFrames)
         {
            this.btnScoreSummary_mc.x = this.btnScoreSummary_mc.x * 0.9 + this.var_30[11].x * 0.1;
            this.btnScoreSummary_mc.y = this.btnScoreSummary_mc.y * 0.9 + this.var_30[11].y * 0.1;
         }
         if(this.btnScoreSummary_mc.y < 500)
         {
            this.btnContinue_mc.x = this.btnContinue_mc.x * 0.9 + this.var_30[12].x * 0.1;
            this.btnContinue_mc.y = this.btnContinue_mc.y * 0.9 + this.var_30[12].y * 0.1;
         }
      }
      
      private function RetryTheArena(param1:Event) : void
      {
         this.Destroy();
         this.funRetryArena();
      }
      
      private function method_773() : *
      {
         var _loc2_:class_88 = null;
         this.var_218 = 0;
         this.var_199 = new class_100();
         addChild(this.var_199);
         this.var_58 = new Array();
         var _loc1_:uint = 0;
         while(_loc1_ < 15)
         {
            _loc2_ = new class_88();
            this.var_58.push({
               "x":10 + Math.random() * 530,
               "y":470,
               "rot":Math.random() * 360,
               "xvel":2 - Math.random() * 4,
               "yvel":-1 * Math.random() * 15,
               "rotVel":4 - Math.random() * 8,
               "obj":_loc2_
            });
            addChild(_loc2_);
            _loc1_++;
         }
      }
      
      private function HighLightButton(param1:MovieClip) : *
      {
         var _loc2_:Array = new Array();
         var _loc3_:GlowFilter = new GlowFilter(16777215,8,30,30,1,2);
         _loc2_.push(_loc3_);
         param1.filters = _loc2_;
         this.var_180 = new Number(param1.name.substr(2,1));
         this.SetSummaryData();
      }
      
      private function SetSummaryData() : *
      {
         var _loc1_:Number = NaN;
         if(this.var_198.length > this.var_180)
         {
            this.BubbleDifficulty_mc.txtOutput_txt.text = "" + this.var_198[this.var_180].intDifficulty;
            _loc1_ = 60 - this.var_198[this.var_180].time;
            if(_loc1_ <= 0)
            {
               _loc1_ = 0;
            }
            else
            {
               _loc1_ = _loc1_ / 60 * 100;
            }
            this.BuubleScore_mc.txtOutput_txt.text = "Bubblefield Score: " + Math.floor(this.var_198[this.var_180].intDifficulty * 25 * Math.sqrt(this.var_198[this.var_180].LifePercent / 100) + _loc1_);
            this.CompletedHealth_mc.txtOutput_txt.text = "" + this.var_198[this.var_180].LifePercent + "%";
            this.SSTime_mc.txtOutput_txt.text = this.method_480(this.var_198[this.var_180].time);
            this.BubblefieldStat_mc.txtOutput_txt.text = "" + (this.var_180 + 1);
            this.BubbleDifficulty_mc.alpha = 1;
            this.BuubleScore_mc.alpha = 1;
            this.CompletedHealth_mc.alpha = 1;
            this.SSTime_mc.alpha = 1;
            this.BubblefieldStat_mc.alpha = 1;
            this.SSBackground_mc.Warning_mc.alpha = 0;
         }
         else
         {
            this.BubbleDifficulty_mc.alpha = 0;
            this.BuubleScore_mc.alpha = 0;
            this.CompletedHealth_mc.alpha = 0;
            this.SSTime_mc.alpha = 0;
            this.BubblefieldStat_mc.alpha = 0;
            this.SSBackground_mc.Warning_mc.alpha = 1;
         }
      }
      
      public function method_686() : void
      {
         this.var_475 = true;
      }
      
      public function method_567() : void
      {
         if(this.var_430)
         {
            this.intState = 1;
            this.method_489();
         }
         else
         {
            this.intState = 0;
         }
      }
      
      private function method_771() : void
      {
         this.Summary_mc.y = this.Summary_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.RollOverText_mc.y = this.RollOverText_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.SSBackground_mc.Warning_mc.alpha *= 0.8;
         var _loc1_:uint = 0;
         while(_loc1_ < this.arrBubbleFields.length)
         {
            this.arrBubbleFields[_loc1_].x = this.arrBubbleFields[_loc1_].x * 0.93 + this.ButtonBottom_mc.x * 0.07;
            this.arrBubbleFields[_loc1_].y = this.arrBubbleFields[_loc1_].y * 0.93 + this.ButtonBottom_mc.y * 0.07;
            _loc1_ += 1;
         }
         this.BubbleDifficulty_mc.y = this.BubbleDifficulty_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.CompletedHealth_mc.y = this.CompletedHealth_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.SSTime_mc.y = this.SSTime_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.BuubleScore_mc.y = this.BuubleScore_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.BubblefieldStat_mc.y = this.BubblefieldStat_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         if(this.SSBackground_mc.currentFrame != 1)
         {
            this.SSBackground_mc.gotoAndStop(this.SSBackground_mc.currentFrame - 1);
         }
         this.btnBack_mc.y = this.btnBack_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
      }
      
      private function method_756() : *
      {
         this.btnPlayMoreGames_mc.y = this.btnPlayMoreGames_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.btnArenaMenu_mc.y = this.btnArenaMenu_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.btnRetryArena_mc.y = this.btnRetryArena_mc.y * 0.93 + this.ButtonBottom_mc.y * 0.07;
         this.txtRollOver_txt.text = "";
         this.txtRollOver2_txt.text = "";
      }
      
      private function method_107(param1:Event) : void
      {
         param1.target.gotoAndStop(2);
         if(param1.target == this.btnPlayMoreGames_mc)
         {
            this.txtRollOver_txt.text = "Check out our sponsor\'s site!";
         }
         if(param1.target == this.btnArenaMenu_mc)
         {
            this.txtRollOver_txt.text = "This takes you to a screen where you can select other arenas to play!";
         }
         if(param1.target == this.btnRetryArena_mc)
         {
            this.txtRollOver_txt.text = "You will play the arena you just played again.";
         }
      }
      
      private function method_112(param1:Event) : void
      {
         this.txtRollOver_txt.text = "";
         this.txtRollOver2_txt.text = "";
         param1.target.gotoAndStop(1);
      }
      
      public function Destroy() : void
      {
         this.var_8.method_10();
      }
      
      private function method_678(param1:Event) : void
      {
         this.intState = 4;
      }
      
      private function method_490() : *
      {
         this.var_218 = 0;
         this.var_26 = new class_99();
         addChild(this.var_26);
         this.var_25 = new Array();
         this.var_25.push({
            "x":this.var_26.Y_mc.x,
            "y":this.var_26.Y_mc.y,
            "rot":this.var_26.Y_mc.rotation,
            "clip":this.var_26.Y_mc
         });
         this.var_25.push({
            "x":this.var_26.O_mc.x,
            "y":this.var_26.O_mc.y,
            "rot":this.var_26.O_mc.rotation,
            "clip":this.var_26.O_mc
         });
         this.var_25.push({
            "x":this.var_26.U_mc.x,
            "y":this.var_26.U_mc.y,
            "rot":this.var_26.U_mc.rotation,
            "clip":this.var_26.U_mc
         });
         this.var_25.push({
            "x":this.var_26.L_mc.x,
            "y":this.var_26.L_mc.y,
            "rot":this.var_26.L_mc.rotation,
            "clip":this.var_26.L_mc
         });
         this.var_25.push({
            "x":this.var_26.O2_mc.x,
            "y":this.var_26.O2_mc.y,
            "rot":this.var_26.O2_mc.rotation,
            "clip":this.var_26.O2_mc
         });
         this.var_25.push({
            "x":this.var_26.P2_mc.x,
            "y":this.var_26.P2_mc.y,
            "rot":this.var_26.P2_mc.rotation,
            "clip":this.var_26.P2_mc
         });
         this.var_25.push({
            "x":this.var_26.P_mc.x,
            "y":this.var_26.P_mc.y,
            "rot":this.var_26.P_mc.rotation,
            "clip":this.var_26.P_mc
         });
         this.var_25.push({
            "x":this.var_26.S_mc.x,
            "y":this.var_26.S_mc.y,
            "rot":this.var_26.S_mc.rotation,
            "clip":this.var_26.S_mc
         });
         this.var_25.push({
            "x":this.var_26.E_mc.x,
            "y":this.var_26.E_mc.y,
            "rot":this.var_26.E_mc.rotation,
            "clip":this.var_26.E_mc
         });
         this.var_25[0].clip.x = -100;
         this.var_25[0].clip.y = -100;
         this.var_25[0].clip.rotation = 180 - Math.random() * 360;
         this.var_25[1].clip.x = 275;
         this.var_25[1].clip.y = -100;
         this.var_25[1].clip.rotation = 180 - Math.random() * 360;
         this.var_25[2].clip.x = 650;
         this.var_25[2].clip.y = -100;
         this.var_25[2].clip.rotation = 180 - Math.random() * 360;
         this.var_25[3].clip.x = -100;
         this.var_25[3].clip.y = 225;
         this.var_25[3].clip.rotation = 180 - Math.random() * 360;
         this.var_25[4].clip.x = -100;
         this.var_25[4].clip.y = 550;
         this.var_25[4].clip.rotation = 180 - Math.random() * 360;
         this.var_25[5].clip.x = 275;
         this.var_25[5].clip.y = 550;
         this.var_25[5].clip.rotation = 180 - Math.random() * 360;
         this.var_25[6].clip.x = 650;
         this.var_25[6].clip.y = 550;
         this.var_25[6].clip.rotation = 180 - Math.random() * 360;
         this.var_25[7].clip.x = 650;
         this.var_25[7].clip.y = 225;
         this.var_25[7].clip.rotation = 180 - Math.random() * 360;
         this.var_25[8].clip.x = 650;
         this.var_25[8].clip.y = 100;
         this.var_25[8].clip.rotation = 180 - Math.random() * 360;
      }
   }
}

