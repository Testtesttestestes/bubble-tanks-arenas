package
{
   import flash.display.*;
   import flash.events.*;
   import flash.filters.ColorMatrixFilter;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.net.*;
   import flash.system.*;
   import flash.text.TextField;
   import flash.ui.Mouse;
   import flash.ui.MouseCursor;
   import flash.utils.Timer;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol847")]
   public class TankCreatorScreen extends MovieClip
   {
      
      private var var_336:Number;
      
      public var movTank:MovieClip;
      
      private var var_385:Number;
      
      internal var var_394:Number;
      
      private var var_486:ColorMatrixFilter;
      
      private var var_276:Boolean;
      
      private var var_211:Number;
      
      public var Exit_mc:MovieClip;
      
      public var DeleteButton_mc:MovieClip;
      
      private var var_155:MovieClip;
      
      private var strBuffID:String;
      
      public var var_86:Sprite;
      
      private var var_136:Number;
      
      private var var_564:int;
      
      public var AlignCenter_mc:MovieClip;
      
      private var movDragDelete1:MovieClip;
      
      private var var_146:String;
      
      private var var_300:Boolean;
      
      private var movDragDelete2:MovieClip;
      
      private var blnAvatarTank:Boolean;
      
      private var var_237:Number;
      
      private var var_127:Boolean;
      
      public var var_75:Sprite;
      
      private var var_120:MovieClip;
      
      private var var_520:Number = -2;
      
      private var var_397:Number;
      
      private var var_453:Number;
      
      public var var_454:Boolean;
      
      private var var_434:Boolean;
      
      public var SymmetricMode_mc:MovieClip;
      
      private var var_79:MovieClip;
      
      private var movDragObj2:MovieClip;
      
      private var movDragObj1:MovieClip;
      
      public var SecondaryStats_mc:MovieClip;
      
      public var Left_mc:MovieClip;
      
      public var Undo_mc:MovieClip;
      
      public var Right_mc:MovieClip;
      
      private var var_573:Function;
      
      private var var_292:Boolean;
      
      private var arrTankDetails:Array;
      
      public var Details_mc:MovieClip;
      
      private var var_148:Number;
      
      private var var_11:MovieClip;
      
      public var Rotate_mc:MovieClip;
      
      public var Resize_mc:MovieClip;
      
      private var var_369:TankData;
      
      private var objGameLibrary:class_2;
      
      private var refMain:class_79;
      
      private var var_167:int;
      
      public var BringFront_mc:MovieClip;
      
      private var var_426:Boolean;
      
      private var strTankData:String;
      
      private var intCurrentClass:int;
      
      internal var var_200:Number;
      
      public var rings_mc:MovieClip;
      
      private var blnLoadedTank:Boolean;
      
      private var var_49:int;
      
      private var var_92:Array;
      
      public var LoadTank_mc:MovieClip;
      
      public var SendBack_mc:MovieClip;
      
      private var var_445:Number;
      
      internal var var_359:Number;
      
      private var var_235:Number;
      
      private var var_33:Array;
      
      public var Stats_mc:MovieClip;
      
      private var var_108:int;
      
      private var var_7:Array;
      
      public var alert_mc:MovieClip;
      
      private var var_240:Number;
      
      public var tutorial:MovieClip;
      
      private var var_217:Number;
      
      private var var_81:Number;
      
      private var objPlayerProfileStorage:PlayerProfile;
      
      private var blnMouseDeleteDown:Boolean;
      
      private var var_338:Boolean;
      
      private var var_59:Number;
      
      private var var_392:Number;
      
      private var var_121:String = "??";
      
      private var var_165:Timer;
      
      private var var_156:MovieClip;
      
      private var objOldPlayerProfile:PlayerProfile;
      
      public var select_mc:MovieClip;
      
      private var intTankDetailID:int;
      
      private var var_61:Number;
      
      internal var var_395:Number;
      
      private var var_402:Number;
      
      private var var_201:Number;
      
      private var var_328:Boolean;
      
      private var var_91:Point;
      
      private var const_2:class_7;
      
      private var var_366:Number;
      
      public var SaveExit_mc:MovieClip;
      
      public function TankCreatorScreen(param1:Boolean = false, param2:String = "Avatar", param3:Function = null, param4:Number = -2)
      {
         super();
         this.strBuffID = "";
         if(param1)
         {
            this.method_591();
            this.var_434 = false;
            this.var_426 = false;
            this.blnLoadedTank = false;
            this.var_121 = param2;
            this.var_573 = param3;
            this.var_520 = param4;
            this.var_366 = 0;
            this.var_397 = 0;
            this.var_402 = 0;
            if(param2 == "Enemy")
            {
               this.blnAvatarTank = false;
               this.method_359();
               this.method_357();
               this.method_447();
               this.method_445();
               this.method_739();
            }
            else
            {
               this.blnAvatarTank = true;
               this.method_385();
            }
         }
      }
      
      internal function method_206(param1:*) : *
      {
         this.method_236();
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_173);
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_187);
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.method_184);
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_220);
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_201);
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.method_228);
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_222);
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_213);
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.method_218);
         this.SecondaryStats_mc.suggestedBox_mc.removeEventListener(MouseEvent.CLICK,this.method_331);
         this.Stats_mc.gotoAndStop(1);
         this.SecondaryStats_mc.gotoAndStop(1);
         this.Stats_mc.removeEventListener(MouseEvent.CLICK,this.method_206);
         this.SecondaryStats_mc.addEventListener(MouseEvent.CLICK,this.method_238);
         if(this.var_121 == "Enemy")
         {
            this.method_359();
            this.method_357();
            this.method_447();
            this.method_445();
         }
         else
         {
            this.method_385();
         }
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
      }
      
      public function method_174(param1:MouseEvent) : void
      {
         this.var_11.Copy_btn.removeEventListener(MouseEvent.CLICK,this.method_202);
         this.var_11.data_txt.removeEventListener(MouseEvent.CLICK,this.method_211);
         this.var_11.return_btn.removeEventListener(MouseEvent.CLICK,this.method_114);
         this.var_11.exit_btn.removeEventListener(MouseEvent.CLICK,this.method_110);
         this.var_11.share_btn.removeEventListener(MouseEvent.CLICK,this.method_174);
         this.var_11.gotoAndStop(4);
         if(this.refMain.bln50GunPoints)
         {
            this.method_80(10001);
         }
         else
         {
            this.var_11.cancel_btn.addEventListener(MouseEvent.CLICK,this.method_277);
            this.var_11.agree_btn.addEventListener(MouseEvent.CLICK,this.method_274);
         }
      }
      
      private function method_718() : void
      {
         var _loc7_:Number = NaN;
         var _loc1_:Number = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc7_ = Number(this.var_7[_loc2_].clip.rotation);
            if(_loc7_ < 0)
            {
               _loc7_ = 360 + _loc7_;
            }
            _loc1_ += _loc7_;
            _loc2_++;
         }
         var _loc3_:Number = 0;
         if(this.var_7.length != 0)
         {
            _loc3_ = _loc1_ / this.var_7.length;
         }
         360;
         var _loc5_:Number = this.var_201 - this.var_148;
         var _loc6_:Number = _loc3_ / 360;
         if(_loc6_ < 0)
         {
            _loc6_ = 0;
         }
         else if(_loc6_ > 1)
         {
            _loc6_ = 1;
         }
         this.Rotate_mc.rotatehandle_mc.x = _loc5_ * _loc6_ + this.var_148;
      }
      
      public function method_179(param1:Event) : void
      {
         var _loc2_:Object = null;
         var _loc3_:String = null;
         var _loc4_:int = 0;
         _loc2_ = param1.target;
         while(_loc2_.name.substr(_loc2_.name.length - 3,3) != "_mc")
         {
            _loc2_ = _loc2_.parent;
         }
         _loc3_ = _loc2_.parent.name;
         _loc4_ = int(_loc3_.substr(4,_loc3_.length - 4));
         _loc2_.gotoAndStop(2);
         if(_loc4_ >= 1000 && _loc4_ <= 1999)
         {
            _loc2_.circleclip.visible = false;
         }
         this.method_252(_loc2_.parent);
      }
      
      private function method_311(param1:MouseEvent) : void
      {
         null;
         var _loc6_:class_6 = null;
         var _loc9_:Number = NaN;
         var _loc10_:MovieClip = null;
         var _loc11_:uint = 0;
         var _loc12_:Number = NaN;
         var _loc13_:Number = NaN;
         var _loc14_:Array = null;
         var _loc15_:uint = 0;
         var _loc16_:uint = 0;
         var _loc17_:Array = null;
         var _loc18_:uint = 0;
         var _loc19_:uint = 0;
         if(this.var_292 == false)
         {
            this.StartDrag(param1);
         }
         this.var_292 = true;
         var _loc2_:Boolean = false;
         if(this.var_127)
         {
            _loc9_ = 0.5;
            _loc10_ = null;
            _loc11_ = 0;
            while(_loc11_ < this.var_7.length)
            {
               if(Math.abs(this.var_7[_loc11_].clip.y) <= this.var_453)
               {
                  if(Math.abs(this.var_7[_loc11_].clip.y) <= _loc9_)
                  {
                     _loc9_ = Math.abs(this.var_7[_loc11_].clip.y);
                     _loc10_ = this.var_7[_loc11_].clip;
                  }
               }
               _loc11_++;
            }
         }
         else
         {
            this.method_688();
         }
         var _loc4_:Point = new Point(param1.stageX,param1.stageY);
         _loc4_ = this.var_75.globalToLocal(_loc4_);
         var _loc5_:class_6 = new class_6(_loc4_.x - this.var_91.x,_loc4_.y - this.var_91.y);
         if(_loc10_ != null)
         {
            if(this.var_338 == false)
            {
               _loc5_.y = _loc10_.y;
               this.var_338 = true;
               _loc2_ = true;
            }
            else
            {
               _loc12_ = _loc4_.y - this.var_155.y;
               _loc12_ = _loc12_ - this.var_392;
               if(Math.abs(_loc12_) > _loc9_)
               {
                  this.var_338 = false;
                  _loc13_ = _loc4_.y - this.var_392;
                  _loc5_.y = _loc13_ - this.var_155.y;
                  _loc2_ = true;
               }
               else
               {
                  _loc5_.y = 0;
               }
            }
         }
         if(this.var_127)
         {
            _loc6_ = new class_6(_loc5_.x,_loc5_.y * -1);
         }
         else
         {
            _loc6_ = new class_6(_loc5_.x,_loc5_.y);
         }
         var _loc7_:uint = 0;
         while(_loc7_ < this.var_7.length)
         {
            if(this.var_7[_loc7_].onSide == true)
            {
               this.var_7[_loc7_].clip.x += _loc5_.x;
               this.var_7[_loc7_].clip.y += _loc5_.y;
            }
            else
            {
               this.var_7[_loc7_].clip.x += _loc6_.x;
               this.var_7[_loc7_].clip.y += _loc6_.y;
            }
            _loc7_++;
         }
         this.var_91.x = _loc4_.x;
         this.var_91.y = _loc4_.y;
         if(_loc2_ == true)
         {
            if(this.var_338 == true)
            {
               _loc14_ = new Array();
               _loc15_ = 0;
               while(_loc15_ < this.var_7.length)
               {
                  if(this.var_7[_loc15_].clip.y == 0 && this.method_542(this.var_7[_loc15_].clip,_loc14_) == false)
                  {
                     _loc14_.push(this.var_7[_loc15_].clip);
                  }
                  _loc15_++;
               }
               _loc16_ = 0;
               while(_loc16_ < _loc14_.length)
               {
                  this.method_381(_loc14_[_loc16_]);
                  _loc16_++;
               }
            }
            else
            {
               _loc17_ = new Array();
               _loc18_ = 0;
               while(_loc18_ < this.var_7.length)
               {
                  if(this.var_7[_loc18_].clip.y - _loc5_.y == 0 || this.var_7[_loc18_].clip.y - _loc6_.y == 0)
                  {
                     _loc17_.push(this.var_7[_loc18_].clip);
                  }
                  _loc18_++;
               }
               _loc19_ = 0;
               while(_loc19_ < _loc17_.length)
               {
                  if(this.var_127)
                  {
                     this.method_552(_loc17_[_loc19_]);
                  }
                  _loc19_++;
               }
            }
         }
         var _loc8_:uint = 0;
         while(_loc8_ < this.var_7.length)
         {
            if(this.method_134(this.var_7[_loc8_].clip) == true)
            {
               this.method_261(this.var_7[_loc8_].clip);
            }
            else
            {
               this.method_145(this.var_7[_loc8_].clip);
            }
            _loc8_++;
         }
      }
      
      public function method_432(param1:MouseEvent) : void
      {
         this.var_11.return_btn.removeEventListener(MouseEvent.CLICK,this.method_114);
         this.var_11.exit_btn.removeEventListener(MouseEvent.CLICK,this.method_110);
         removeChild(this.var_11);
         this.method_138();
      }
      
      public function method_39(param1:Event) : void
      {
         param1.target.gotoAndStop(1);
         Mouse.cursor = MouseCursor.BUTTON;
      }
      
      public function method_368(param1:MouseEvent) : void
      {
         var _loc2_:Point = new Point(param1.stageX,param1.stageY);
         _loc2_ = this.Resize_mc.globalToLocal(_loc2_);
         var _loc3_:Number = _loc2_.x;
         if(_loc3_ < this.var_148)
         {
            _loc3_ = this.var_148;
         }
         if(_loc3_ > this.var_201)
         {
            _loc3_ = this.var_201;
         }
         this.Resize_mc.resizehandle_mc.x = _loc3_;
         var _loc4_:Number = this.var_445 - this.var_336;
         var _loc5_:Number = this.var_201 - this.var_148;
         var _loc6_:Number = (_loc3_ - this.var_148) / _loc5_;
         var _loc7_:Number = _loc6_ * _loc4_ + this.var_336;
         0;
         while(0 < this.var_7.length)
         {
            this.var_7[0].clip.scaleX = this.var_7[0].clip.scaleY = _loc7_;
            var _loc8_:uint = 0 + 1;
         }
         this.method_234();
      }
      
      private function UpdateClass() : void
      {
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc7_:* = 0;
         var _loc1_:Array = new Array();
         _loc1_.push({
            "min":-1,
            "max":this.rings_mc.ring1_mc.width / 2
         });
         _loc1_.push({
            "min":this.rings_mc.ring1_mc.width / 2,
            "max":this.rings_mc.ring2_mc.width / 2
         });
         _loc1_.push({
            "min":this.rings_mc.ring2_mc.width / 2,
            "max":this.rings_mc.ring3_mc.width / 2
         });
         _loc1_.push({
            "min":this.rings_mc.ring3_mc.width / 2,
            "max":this.rings_mc.ring4_mc.width / 2
         });
         _loc1_.push({
            "min":this.rings_mc.ring4_mc.width / 2,
            "max":this.rings_mc.ring5_mc.width / 2
         });
         var _loc2_:uint = 1;
         var _loc3_:* = int(this.arrTankDetails.length - 1);
         while(_loc3_ >= 0)
         {
            if(_loc2_ == 6)
            {
               break;
            }
            _loc4_ = this.arrTankDetails[_loc3_].clip.x * this.arrTankDetails[_loc3_].clip.x;
            _loc5_ = this.arrTankDetails[_loc3_].clip.y * this.arrTankDetails[_loc3_].clip.y;
            _loc6_ = Math.sqrt(_loc4_ + _loc5_);
            if(this.objGameLibrary.IsObjectAWeapon(this.arrTankDetails[_loc3_].type) == false)
            {
               _loc6_ += this.arrTankDetails[_loc3_].radius * this.arrTankDetails[_loc3_].scale;
            }
            if(_loc6_ > _loc1_[_loc1_.length - 1].max)
            {
               _loc2_ = 6;
               break;
            }
            _loc7_ = int(_loc1_.length - 1);
            while(_loc7_ >= 0)
            {
               if(_loc7_ + 1 <= _loc2_)
               {
                  break;
               }
               if(_loc6_ > _loc1_[_loc7_].min && _loc6_ <= _loc1_[_loc7_].max)
               {
                  if(_loc7_ + 1 > _loc2_)
                  {
                     _loc2_ = _loc7_ + 1;
                  }
                  break;
               }
               _loc7_--;
            }
            _loc3_--;
         }
         this.intCurrentClass = _loc2_;
      }
      
      public function method_51(param1:TextEvent) : void
      {
         var _loc2_:TextField = null;
         var _loc3_:RegExp = null;
         var _loc4_:int = 0;
         _loc2_ = TextField(param1.target);
         _loc3_ = /[^a-zA-Z0-9 _\-']/;
         if(param1.text.search(_loc3_) != -1)
         {
            param1.preventDefault();
            _loc2_.replaceText(_loc2_.caretIndex,_loc2_.caretIndex,"");
            _loc4_ = _loc2_.caretIndex + param1.text.length;
            _loc2_.setSelection(_loc4_,_loc4_);
         }
      }
      
      public function method_277(param1:MouseEvent) : void
      {
         this.var_11.cancel_btn.removeEventListener(MouseEvent.CLICK,this.method_277);
         this.var_11.agree_btn.removeEventListener(MouseEvent.CLICK,this.method_274);
         removeChild(this.var_11);
      }
      
      private function method_699() : void
      {
         this.SymmetricMode_mc.addEventListener(MouseEvent.CLICK,this.SymmetricModeMouseUp);
         this.SymmetricMode_mc.inside_mc.gotoAndStop(1);
         this.LoadTank_mc.addEventListener(MouseEvent.CLICK,this.LoadTanksMouseUp);
         this.LoadTank_mc.gotoAndStop(1);
         this.SaveExit_mc.addEventListener(MouseEvent.CLICK,this.SaveExitMouseUp);
         this.SaveExit_mc.gotoAndStop(1);
         this.Exit_mc.addEventListener(MouseEvent.CLICK,this.ExitMouseUp);
         this.Exit_mc.gotoAndStop(1);
      }
      
      private function method_202(param1:Event) : *
      {
         System.setClipboard(this.var_11.data_txt.text);
      }
      
      public function method_376(param1:MouseEvent) : void
      {
         var _loc3_:uint = 0;
         stage.removeEventListener(MouseEvent.MOUSE_UP,this.method_376);
         stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.method_449);
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_].clip == this.var_7[_loc2_].clip)
               {
                  this.arrTankDetails[_loc3_].rotation = this.var_7[_loc2_].clip.rotation;
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         if(this.method_88() == false)
         {
            this.method_57();
         }
         this.method_85();
      }
      
      public function method_211(param1:MouseEvent) : void
      {
         this.var_11.data_txt.setSelection(0,this.var_11.data_txt.text.length);
      }
      
      public function method_310(param1:MouseEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc2_:TankData = new TankData();
         _loc2_.strAuthorName = this.var_11.author_txt.text;
         _loc2_.strTankName = this.var_11.tank_txt.text;
         _loc2_.blnAvatarTank = this.blnAvatarTank;
         _loc2_.numLife = this.var_59;
         _loc2_.numBubblesReturned = this.var_81;
         _loc2_.numSpeed = this.var_61;
         _loc2_.numDifficultyRating = 1;
         _loc2_.strID = "L" + this.refMain.intEnemyCountMaster;
         this.refMain.intEnemyCountMaster += 1;
         this.refMain.SaveAllData();
         this.var_369 = _loc2_;
         this.var_11.author_txt.removeEventListener(FocusEvent.FOCUS_IN,this.method_372);
         this.var_11.author_txt.removeEventListener(FocusEvent.FOCUS_OUT,this.method_433);
         this.var_11.author_txt.removeEventListener(TextEvent.TEXT_INPUT,this.method_51);
         this.var_11.tank_txt.removeEventListener(TextEvent.TEXT_INPUT,this.method_51);
         this.var_11.cancel_btn.removeEventListener(MouseEvent.CLICK,this.method_162);
         this.var_11.continue_btn.removeEventListener(MouseEvent.CLICK,this.method_310);
         if(this.arrTankDetails.length <= 0 || _loc2_.strAuthorName == "" || _loc2_.strTankName == "")
         {
            this.method_80(9400);
         }
         else
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               _loc2_.method_467(this.arrTankDetails[_loc3_].name,this.arrTankDetails[_loc3_].type,this.arrTankDetails[_loc3_].twin,this.arrTankDetails[_loc3_].x,this.arrTankDetails[_loc3_].y,this.arrTankDetails[_loc3_].rotation,this.arrTankDetails[_loc3_].scale,this.arrTankDetails[_loc3_].radius);
               _loc3_++;
            }
            this.strTankData = _loc2_.ExportTankData();
            if(this.objOldPlayerProfile == null)
            {
               this.refMain.objCurrentPlayer.method_73(this.strTankData);
            }
            else
            {
               this.objOldPlayerProfile.method_73(this.strTankData);
            }
            this.var_11.gotoAndStop(3);
            this.var_11.data_txt.addEventListener(MouseEvent.CLICK,this.method_211);
            this.var_11.return_btn.addEventListener(MouseEvent.CLICK,this.method_114);
            this.var_11.exit_btn.addEventListener(MouseEvent.CLICK,this.method_110);
            this.var_11.share_btn.addEventListener(MouseEvent.CLICK,this.method_174);
            this.var_11.Copy_btn.addEventListener(MouseEvent.CLICK,this.method_202);
            this.var_11.data_txt.text = this.strTankData;
         }
      }
      
      private function method_530(param1:MouseEvent) : Boolean
      {
         if(this.var_7.length == 0)
         {
            return false;
         }
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_7.length)
         {
            if(this.var_7[_loc2_].clip.hitTestPoint(param1.stageX,param1.stageY,true) == true)
            {
               return true;
            }
            _loc2_++;
         }
         return false;
      }
      
      private function method_562(param1:MouseEvent) : void
      {
         param1.target.gotoAndStop("on");
      }
      
      private function method_482(param1:MouseEvent) : void
      {
         this.var_91.x = param1.stageX;
         this.var_91.y = param1.stageY;
         this.var_91 = this.var_75.globalToLocal(this.var_91);
      }
      
      public function method_110(param1:MouseEvent) : void
      {
         this.var_11.Copy_btn.removeEventListener(MouseEvent.CLICK,this.method_202);
         this.var_11.data_txt.removeEventListener(MouseEvent.CLICK,this.method_211);
         this.var_11.return_btn.removeEventListener(MouseEvent.CLICK,this.method_114);
         this.var_11.exit_btn.removeEventListener(MouseEvent.CLICK,this.method_110);
         this.var_11.share_btn.removeEventListener(MouseEvent.CLICK,this.method_174);
         removeChild(this.var_11);
         this.method_138();
      }
      
      public function method_413(param1:MouseEvent) : void
      {
         stage.addEventListener(MouseEvent.MOUSE_UP,this.method_376);
         stage.addEventListener(MouseEvent.MOUSE_MOVE,this.method_449);
      }
      
      public function MoveSelectionRight(param1:MouseEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_].clip == this.var_7[_loc2_].clip)
               {
                  this.arrTankDetails[_loc3_].clip.x += 1;
                  this.arrTankDetails[_loc3_].x += 1;
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
         this.method_85();
         this.method_89();
      }
      
      private function UpdateLibraryButtonsForAffordability() : void
      {
         var _loc1_:Array = null;
         var _loc3_:Number = NaN;
         this.UpdateAffordableArray();
         if(this.var_146 == "body_mc")
         {
            _loc1_ = this.objGameLibrary.var_83;
         }
         else if(this.var_146 == "primary_mc")
         {
            _loc1_ = this.objGameLibrary.var_50;
         }
         else if(this.var_146 == "secondary_mc")
         {
            _loc1_ = this.objGameLibrary.var_62;
         }
         else if(this.var_146 == "EnemyWeapons_mc")
         {
            _loc1_ = this.objGameLibrary.var_48;
         }
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.var_33.length)
            {
               if("lib_" + _loc1_[_loc2_].intObjID == this.var_33[_loc3_].name)
               {
                  if(_loc1_[_loc2_].intLocked == 0)
                  {
                     if(_loc1_[_loc2_].blnAfford == true)
                     {
                        this.var_33[_loc3_].alpha = 1;
                        break;
                     }
                     this.var_33[_loc3_].alpha = 0.4;
                  }
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
      }
      
      internal function EndMotionRight(param1:*) : void
      {
         if(this.Right_mc.hasEventListener(Event.ENTER_FRAME))
         {
            this.Right_mc.removeEventListener(Event.ENTER_FRAME,this.MoveRight);
         }
         if(this.method_88() == false)
         {
            this.method_57();
         }
      }
      
      private function method_743(param1:MouseEvent) : void
      {
         if(this.var_120 != null)
         {
            this.method_273(param1);
         }
         var _loc2_:Object = param1.target;
         while(_loc2_.name.substr(_loc2_.name.length - 8,8) != "_icon_mc")
         {
            _loc2_ = _loc2_.parent;
         }
         var _loc3_:String = _loc2_.name;
         var _loc4_:int = int(_loc3_.substr(0,_loc3_.length - 8));
         this.var_120 = new class_97();
         this.var_86.addChild(this.var_120);
         this.var_120.x = _loc2_.x;
         this.var_120.y = _loc2_.y;
         this.var_120.name_txt.text = this.objGameLibrary.method_37(_loc4_,false);
         this.var_120.gunPoints_txt.text = this.objGameLibrary.method_207(_loc4_,true);
         this.var_120.bubblePoints_txt.text = this.objGameLibrary.method_166(_loc4_,true);
         var _loc5_:int = this.objGameLibrary.method_149(_loc4_,true);
         var _loc6_:Boolean = this.objGameLibrary.method_240(_loc4_,true);
         if(_loc5_ == 0)
         {
            this.var_120.special_txt.text = "";
         }
         else if(_loc6_ == true)
         {
            if(_loc5_ == 1)
            {
               this.var_120.special_txt.text = "Must be class 1.";
            }
            else
            {
               this.var_120.special_txt.text = "Must be class " + _loc5_ + " or lower.";
            }
         }
         else if(_loc5_ == 6)
         {
            this.var_120.special_txt.text = "Must be class 6.";
         }
         else
         {
            this.var_120.special_txt.text = "Must be class " + _loc5_ + " or higher.";
         }
         this.var_120.addEventListener(MouseEvent.ROLL_OUT,this.method_273);
      }
      
      private function method_57() : void
      {
         var _loc1_:Array = new Array();
         var _loc2_:uint = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc1_.push({
               "name":this.arrTankDetails[_loc2_].name,
               "type":this.arrTankDetails[_loc2_].type,
               "twin":this.arrTankDetails[_loc2_].twin,
               "clip":null,
               "x":this.arrTankDetails[_loc2_].x,
               "y":this.arrTankDetails[_loc2_].y,
               "rotation":this.arrTankDetails[_loc2_].rotation,
               "scale":this.arrTankDetails[_loc2_].scale,
               "radius":this.arrTankDetails[_loc2_].radius
            });
            _loc2_++;
         }
         this.var_92.push(_loc1_);
         if(this.var_92.length > 1)
         {
            this.OpenUndoButton();
         }
      }
      
      public function method_477(param1:int) : void
      {
         var var_40:int = param1;
         if(var_40 == 1 || var_40 == 3)
         {
            try
            {
               this.Stats_mc.Library_mc.scroll_mc.bar_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_425);
               this.Stats_mc.Library_mc.scroll_mc.bar_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_469);
               this.Stats_mc.Library_mc.scroll_mc.bar_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.LibScrollBarDown);
               this.Stats_mc.Library_mc.scroll_mc.bar_mc.removeEventListener(MouseEvent.MOUSE_UP,this.LibScrollBarUp);
               this.Stats_mc.Library_mc.scroll_mc.up_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_192);
               this.Stats_mc.Library_mc.scroll_mc.up_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_182);
               this.Stats_mc.Library_mc.scroll_mc.up_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.LibScrollArrowDown);
               this.Stats_mc.Library_mc.scroll_mc.down_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_192);
               this.Stats_mc.Library_mc.scroll_mc.down_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_182);
               this.Stats_mc.Library_mc.scroll_mc.down_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.LibScrollArrowDown);
            }
            catch(e:Error)
            {
            }
         }
         if(var_40 == 1)
         {
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.gotoAndStop(1);
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.y = 18;
         }
         else if(var_40 == 2)
         {
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.gotoAndStop(2);
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_425);
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_469);
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.LibScrollBarDown);
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.addEventListener(MouseEvent.MOUSE_UP,this.LibScrollBarUp);
            this.Stats_mc.Library_mc.scroll_mc.up_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_192);
            this.Stats_mc.Library_mc.scroll_mc.up_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_182);
            this.Stats_mc.Library_mc.scroll_mc.up_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.LibScrollArrowDown);
            this.Stats_mc.Library_mc.scroll_mc.down_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_192);
            this.Stats_mc.Library_mc.scroll_mc.down_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_182);
            this.Stats_mc.Library_mc.scroll_mc.down_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.LibScrollArrowDown);
         }
         else if(var_40 == 3)
         {
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.gotoAndStop(2);
         }
         this.method_339();
      }
      
      private function method_291(param1:Boolean = false) : void
      {
         this.DeleteButton_mc.visible = true;
         this.BringFront_mc.visible = true;
         this.SendBack_mc.visible = true;
         this.Resize_mc.visible = true;
         this.Rotate_mc.visible = true;
         this.AlignCenter_mc.visible = true;
         this.Right_mc.visible = true;
         this.Left_mc.visible = true;
         this.method_737();
         this.method_718();
         if(param1 == false)
         {
            if(this.DeleteButton_mc.hasEventListener(MouseEvent.CLICK) == false)
            {
               this.DeleteButton_mc.addEventListener(MouseEvent.MOUSE_UP,this.DeleteButtonMouseUp);
               this.DeleteButton_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.DeleteButtonMouseDown);
               this.BringFront_mc.addEventListener(MouseEvent.CLICK,this.method_430);
               this.SendBack_mc.addEventListener(MouseEvent.CLICK,this.method_358);
               this.AlignCenter_mc.addEventListener(MouseEvent.CLICK,this.method_464);
               this.Right_mc.addEventListener(MouseEvent.CLICK,this.MoveSelectionRight);
               this.Left_mc.addEventListener(MouseEvent.CLICK,this.MoveSelectionLeft);
               this.Right_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.StartMotionRight);
               this.Left_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.StartMotionLeft);
               this.Right_mc.addEventListener(MouseEvent.MOUSE_UP,this.EndMotionRight);
               this.Left_mc.addEventListener(MouseEvent.MOUSE_UP,this.EndMotionLeft);
               this.Right_mc.addEventListener(MouseEvent.MOUSE_OUT,this.EndMotionRight);
               this.Left_mc.addEventListener(MouseEvent.MOUSE_OUT,this.EndMotionLeft);
               this.Resize_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_442);
               this.Resize_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_350);
               this.Resize_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.method_400);
               this.Rotate_mc.rotatehandle_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_439);
               this.Rotate_mc.rotatehandle_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_387);
               this.Rotate_mc.rotatehandle_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.method_413);
            }
         }
      }
      
      public function method_411(param1:MouseEvent) : void
      {
         stage.removeEventListener(MouseEvent.MOUSE_UP,this.method_411);
         stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.method_403);
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateSecondaryStatsPanel();
      }
      
      private function method_338(param1:MouseEvent) : void
      {
         this.var_300 = true;
         this.var_75.graphics.clear();
         this.var_75.graphics.lineStyle(1,52223);
         var _loc2_:Point = new Point(param1.stageX,param1.stageY);
         _loc2_ = this.var_75.globalToLocal(_loc2_);
         var _loc3_:Number = _loc2_.y - this.var_91.y;
         var _loc4_:Number = _loc2_.x - this.var_91.x;
         this.var_75.graphics.drawRect(this.var_91.x,this.var_91.y,_loc4_,_loc3_);
      }
      
      internal function StartMotionRight(param1:*) : void
      {
         this.Right_mc.addEventListener(Event.ENTER_FRAME,this.MoveRight);
      }
      
      public function method_419() : void
      {
         this.method_138();
      }
      
      public function method_694(param1:String) : void
      {
         this.var_11.gotoAndStop(6);
         this.var_11.id_txt.text = "Tank Id Number: " + param1;
         this.strBuffID = param1;
         this.var_11.return_btn.addEventListener(MouseEvent.CLICK,this.method_379);
         this.var_11.exit_btn.addEventListener(MouseEvent.CLICK,this.method_432);
         this.var_11.shareTank_mc.addEventListener(MouseEvent.MOUSE_UP,this.method_740);
         this.var_11.shareTank_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_562);
         this.var_11.shareTank_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_487);
         var _temp_3:* = this.var_11.shareTank_mc;
         var _temp_2:* = this.var_11.shareTank_mc;
         var _temp_1:* = true;
         true;
         _temp_2.buttonMode = _temp_1;
         _temp_3.useHandCursor = true;
      }
      
      public function method_187(param1:MouseEvent) : void
      {
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.gotoAndStop(1);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      public function method_469(param1:Event) : void
      {
         param1.target.gotoAndStop(2);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      public function method_520(param1:Event) : void
      {
         var _loc2_:Object = null;
         _loc2_ = param1.target;
         while(_loc2_.name.substr(_loc2_.name.length - 3,3) != "_mc")
         {
            _loc2_ = _loc2_.parent;
         }
         this.method_252(_loc2_.parent,true);
      }
      
      private function method_579(param1:MouseEvent) : void
      {
         var _loc2_:Array = this.method_108();
         this.var_454 = true;
         var _loc3_:Point = new Point(param1.stageX,param1.stageY);
         _loc3_ = this.movTank.globalToLocal(_loc3_);
         this.movDragObj1 = new _loc2_[this.ButtonIndex2LibraryIndex(this.var_49)].claType();
         this.movDragObj1.x = _loc3_.x;
         this.movDragObj1.y = _loc3_.y;
         this.movDragObj1.name = this.intTankDetailID + "_mc";
         this.movDragObj1.intObjID = _loc2_[this.ButtonIndex2LibraryIndex(this.var_49)].intObjID;
         this.movTank.addChild(this.movDragObj1);
         this.var_385 = this.movDragObj1.width / 2;
         ++this.intTankDetailID;
         this.method_145(this.movDragObj1);
         if(this.var_127 == true)
         {
            this.movDragObj2 = new _loc2_[this.ButtonIndex2LibraryIndex(this.var_49)].claType();
            this.movDragObj2.alpha = 0.25;
            this.movDragObj2.x = _loc3_.x;
            this.movDragObj2.y = -1 * _loc3_.y;
            this.movDragObj2.name = this.intTankDetailID + "_mc";
            this.movDragObj2.intObjID = _loc2_[this.ButtonIndex2LibraryIndex(this.var_49)].intObjID;
            ++this.intTankDetailID;
            this.movTank.addChild(this.movDragObj2);
            this.method_145(this.movDragObj2);
         }
      }
      
      private function UpdateStatsPanel() : void
      {
         var _loc1_:Object = this.objGameLibrary.GetClassData(this.intCurrentClass);
         _loc1_.armor = Math.round(_loc1_.armor * 100);
         _loc1_.speed = Math.round(_loc1_.speed * 100);
         var _loc2_:Number = 0;
         if(this.refMain.var_139)
         {
            _loc2_ = 12;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.gunPointsMax.value;
         }
         if(this.var_121 == "Enemy")
         {
            _loc2_ = Math.floor(_loc2_ * 1.5);
         }
         if(this.refMain.bln50GunPoints)
         {
            _loc2_ = 50;
         }
         var _loc3_:Number = 0;
         if(this.refMain.var_132)
         {
            _loc3_ = 100;
         }
         else
         {
            _loc3_ = this.refMain.objCurrentPlayer.bubblePointsMax.value;
         }
         this.Stats_mc.bubblesLeft_txt.text = " " + this.var_167 + " / " + _loc3_;
         this.Stats_mc.gunPoints_txt.text = " " + this.var_108 + " / " + _loc2_;
         this.Stats_mc.class_txt.text = " " + this.intCurrentClass;
         if(this.var_366 != this.var_167)
         {
            this.var_359 = 3;
            this.method_256();
         }
         if(this.var_397 != this.var_108)
         {
            this.var_394 = 3;
            this.method_256();
         }
         if(this.var_402 != this.intCurrentClass)
         {
            this.var_395 = 3;
            this.method_256();
         }
         this.var_366 = this.var_167;
         this.var_397 = this.var_108;
         this.var_402 = this.intCurrentClass;
         if(this.var_121 == "Avatar")
         {
            this.Stats_mc.armor_txt.text = " " + _loc1_.armor + "%";
            this.Stats_mc.speed_txt.text = " " + _loc1_.speed + "%";
         }
         var _loc4_:Object = this.method_496();
         if(this.var_121 == "Enemy")
         {
            this.Stats_mc.primary_txt.text = _loc4_.strEnemyWeapons;
            this.Stats_mc.secondary_txt.text = "";
         }
         else
         {
            this.Stats_mc.primary_txt.text = _loc4_.strPrimary;
            this.Stats_mc.secondary_txt.text = _loc4_.strSecondary;
         }
         var _loc5_:Number = 0;
         if(this.refMain.blnCheatClass)
         {
            _loc5_ = 6;
         }
         else
         {
            _loc5_ = this.refMain.objCurrentPlayer.maxClass.value;
         }
         this.method_281(this.intCurrentClass,_loc5_);
      }
      
      public function method_201(param1:MouseEvent) : void
      {
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.gotoAndStop(1);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      private function method_332(param1:Event) : void
      {
         this.alert_mc.alpha -= 0.01;
         if(this.alert_mc.alpha <= 0)
         {
            this.alert_mc.alpha = 1;
            this.alert_mc.visible = false;
            this.alert_mc.removeEventListener(Event.ENTER_FRAME,this.method_332);
         }
      }
      
      public function method_182(param1:Event) : void
      {
         param1.target.gotoAndStop(1);
      }
      
      private function method_737() : void
      {
         var _loc1_:Number = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc1_ += this.var_7[_loc2_].clip.scaleX;
            _loc2_++;
         }
         var _loc3_:Number = 1;
         if(this.var_7.length != 0)
         {
            _loc3_ = _loc1_ / this.var_7.length;
         }
         var _loc4_:Number = this.var_445 - this.var_336;
         var _loc5_:Number = this.var_201 - this.var_148;
         var _loc6_:Number = (_loc3_ - this.var_336) / _loc4_;
         if(_loc6_ < 0)
         {
            _loc6_ = 0;
         }
         else if(_loc6_ > 1)
         {
            _loc6_ = 1;
         }
         this.Resize_mc.resizehandle_mc.x = _loc5_ * _loc6_ + this.var_148;
      }
      
      private function method_555() : void
      {
         if(!this.var_276)
         {
            return;
         }
         this.var_59 = (this.var_167 / 2 + this.var_108 * 3) * this.intCurrentClass;
         var _loc1_:Number = 0.0005 * this.var_59;
         if(_loc1_ > 0.1)
         {
            _loc1_ = 0.1;
         }
         this.var_81 = Math.round(this.var_59 * (0.3 * ((7 - this.intCurrentClass) / 6) + 0.005 * this.var_108 + 0.1 - _loc1_));
         if(this.var_81 < this.var_136)
         {
            this.var_81 = this.var_136;
         }
         this.var_61 = 3 * ((6 - this.intCurrentClass) / 6) + 0.5 - this.var_108 * 0.1;
         if(this.var_61 < 0.1)
         {
            this.var_61 = 0.1;
         }
         this.var_61 = Math.floor(this.var_61 * 100) / 100;
      }
      
      public function DeleteButtonMouseDown(param1:MouseEvent) : void
      {
         this.blnMouseDeleteDown = true;
      }
      
      public function DeleteButtonMouseUp(param1:MouseEvent) : void
      {
         var _loc2_:Array = null;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         if(this.blnMouseDeleteDown)
         {
            _loc2_ = new Array();
            _loc3_ = 0;
            while(_loc3_ < this.var_7.length)
            {
               _loc2_.push(this.var_7[_loc3_].clip);
               _loc3_++;
            }
            _loc4_ = 0;
            while(_loc4_ < _loc2_.length)
            {
               this.method_132(_loc2_[_loc4_]);
               _loc4_++;
            }
            this.method_85();
            this.method_99();
            this.UpdateClass();
            this.UpdateLibraryButtonsForAffordability();
            this.UpdateStatsPanel();
            this.blnMouseDeleteDown = false;
            if(this.method_88() == false)
            {
               this.method_57();
            }
         }
      }
      
      internal function method_445() : *
      {
         this.SecondaryStats_mc.addEventListener(MouseEvent.CLICK,this.method_238);
         this.Stats_mc.PrimarySecondary_txt.text = "Weapons:";
         this.Stats_mc.Speed_txt.text = "";
         this.Stats_mc.speed_txt.text = "";
         this.Stats_mc.Armor_txt.text = "";
         this.Stats_mc.armor_txt.text = "";
      }
      
      private function method_713() : void
      {
         this.var_454 = false;
         var _loc1_:Array = this.method_108();
         var _loc2_:int = this.arrTankDetails.push({
            "name":this.movDragObj1.name,
            "type":_loc1_[this.ButtonIndex2LibraryIndex(this.var_49)].intObjID,
            "twin":"",
            "clip":this.movDragObj1,
            "x":this.movDragObj1.x,
            "y":this.movDragObj1.y,
            "rotation":0,
            "scale":1,
            "radius":this.var_385
         }) - 1;
         if(this.var_127 == true)
         {
            if(this.movDragObj2 != null)
            {
               this.movDragObj2.alpha = 1;
               this.arrTankDetails.push({
                  "name":this.movDragObj2.name,
                  "type":_loc1_[this.ButtonIndex2LibraryIndex(this.var_49)].intObjID,
                  "twin":this.movDragObj1.name,
                  "clip":this.movDragObj2,
                  "x":this.movDragObj2.x,
                  "y":this.movDragObj2.y,
                  "rotation":0,
                  "scale":1,
                  "radius":this.var_385
               });
               this.arrTankDetails[_loc2_].twin = this.movDragObj2.name;
            }
         }
         var _loc3_:Point = new Point(this.movDragObj1.x,this.movDragObj1.y);
         _loc3_ = this.movTank.localToGlobal(_loc3_);
         _loc3_ = globalToLocal(_loc3_);
         if(this.select_mc.hitTestPoint(_loc3_.x,_loc3_.y,false) == false)
         {
            this.method_132(this.movDragObj1);
         }
         if(this.method_134(this.movDragObj1) == false)
         {
            this.method_132(this.movDragObj1);
         }
         if(this.movDragObj2 != null)
         {
            _loc3_.x = this.movDragObj2.x;
            _loc3_.y = this.movDragObj2.y;
            _loc3_ = this.movTank.localToGlobal(_loc3_);
            _loc3_ = globalToLocal(_loc3_);
            if(this.select_mc.hitTestPoint(_loc3_.x,_loc3_.y,false) == false)
            {
               this.method_132(this.movDragObj2);
            }
            if(this.method_134(this.movDragObj2) == false)
            {
               this.method_132(this.movDragObj2);
            }
         }
         this.movDragObj1 = null;
         this.movDragObj2 = null;
         if(this.method_88() == false)
         {
            this.method_57();
         }
         this.method_99();
         this.UpdateClass();
         this.UpdateLibraryButtonsForAffordability();
         this.UpdateStatsPanel();
      }
      
      public function method_712() : void
      {
         var _loc1_:int = getChildIndex(this.select_mc);
         this.movTank = new MovieClip();
         this.movTank.x = this.rings_mc.x;
         this.movTank.y = this.rings_mc.y;
         this.movTank.name = "tank_mc";
         addChildAt(this.movTank,_loc1_);
      }
      
      private function StopDrag(param1:MouseEvent) : void
      {
         var _loc6_:uint = 0;
         this.method_234();
         var _loc2_:Array = new Array();
         var _loc3_:uint = 0;
         while(_loc3_ < this.var_7.length)
         {
            if(this.method_134(this.var_7[_loc3_].clip) == false)
            {
               _loc2_.push(this.var_7[_loc3_].clip);
            }
            _loc3_++;
         }
         var _loc4_:uint = 0;
         while(_loc4_ < _loc2_.length)
         {
            this.method_132(_loc2_[_loc4_]);
            _loc4_++;
         }
         var _loc5_:uint = 0;
         while(_loc5_ < this.var_7.length)
         {
            _loc6_ = 0;
            while(_loc6_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc6_].clip == this.var_7[_loc5_].clip)
               {
                  this.arrTankDetails[_loc6_].x = this.var_7[_loc5_].clip.x;
                  this.arrTankDetails[_loc6_].y = this.var_7[_loc5_].clip.y;
                  break;
               }
               _loc6_++;
            }
            _loc5_++;
         }
         if(this.method_88() == false)
         {
            this.method_57();
         }
         this.method_85();
         if(this.var_7.length > 0)
         {
            this.method_291();
         }
         else
         {
            this.method_101();
         }
         this.method_99();
         this.UpdateClass();
         this.UpdateLibraryButtonsForAffordability();
         this.UpdateStatsPanel();
      }
      
      public function method_342(param1:MouseEvent) : void
      {
         stage.removeEventListener(MouseEvent.MOUSE_UP,this.method_342);
         stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.method_405);
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateSecondaryStatsPanel();
      }
      
      public function method_430(param1:MouseEvent) : void
      {
         var _loc5_:uint = 0;
         var _loc2_:Array = new Array();
         var _loc3_:uint = 0;
         while(_loc3_ < this.var_7.length)
         {
            _loc5_ = 0;
            while(_loc5_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc5_].clip == this.var_7[_loc3_].clip)
               {
                  _loc2_.push(this.arrTankDetails[_loc5_]);
                  this.arrTankDetails.splice(_loc5_,1);
                  break;
               }
               _loc5_++;
            }
            _loc3_++;
         }
         var _loc4_:uint = 0;
         while(_loc4_ < _loc2_.length)
         {
            this.movTank.setChildIndex(_loc2_[_loc4_].clip,this.movTank.numChildren - 1);
            _loc4_++;
         }
         this.arrTankDetails = this.arrTankDetails.concat(_loc2_);
         if(this.method_88() == false)
         {
            this.method_57();
         }
      }
      
      private function StartDrag(param1:MouseEvent) : void
      {
         var _loc4_:Boolean = false;
         this.var_155 = null;
         var _loc2_:Point = new Point(param1.stageX,param1.stageY);
         _loc2_ = this.var_75.globalToLocal(_loc2_);
         var _loc3_:uint = 0;
         while(_loc3_ < this.var_7.length)
         {
            _loc4_ = false;
            if(this.var_91.y >= 0 && this.var_7[_loc3_].clip.y >= 0 || this.var_91.y < 0 && this.var_7[_loc3_].clip.y < 0)
            {
               _loc4_ = true;
            }
            if(_loc4_ == true)
            {
               this.var_7[_loc3_].onSide = true;
               if(this.var_155 == null)
               {
                  this.var_155 = this.var_7[_loc3_].clip;
                  this.var_392 = _loc2_.y - this.var_155.y;
               }
            }
            else
            {
               this.var_7[_loc3_].onSide = false;
            }
            _loc3_++;
         }
         if(this.var_155 == null)
         {
            this.var_155 = this.var_7[0].clip;
            this.var_392 = _loc2_.y - this.var_155.y;
         }
         this.method_185();
      }
      
      public function method_275() : void
      {
         var _loc1_:Number = this.var_235 - this.var_211;
         var _loc2_:Number = Math.sqrt((this.var_61 - this.var_211) / _loc1_) * 110 - 55;
         if(_loc2_ < -55)
         {
            _loc2_ = -55;
         }
         if(_loc2_ > 55)
         {
            _loc2_ = 55;
         }
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.x = _loc2_;
      }
      
      internal function method_384(param1:Event) : *
      {
         if(this.SecondaryStats_mc.SpeedCurrent_txt.text.substr(this.SecondaryStats_mc.SpeedCurrent_txt.text.length - 1,1) == ".")
         {
            return;
         }
         var _loc2_:Number = Number(this.SecondaryStats_mc.SpeedCurrent_txt.text);
         var _loc3_:String = "" + _loc2_;
         if(_loc3_ == "NaN")
         {
            _loc2_ = this.var_211;
         }
         if(_loc2_ > this.var_235)
         {
            _loc2_ = this.var_235;
         }
         if(_loc2_ < this.var_211)
         {
            _loc2_ = this.var_211;
         }
         this.var_61 = _loc2_;
         this.UpdateSecondaryStatsPanel();
         this.method_275();
      }
      
      private function UpdateAffordableArray() : void
      {
         var _loc1_:Array = null;
         var _loc6_:Boolean = false;
         if(this.var_146 == "body_mc")
         {
            _loc1_ = this.objGameLibrary.var_83;
         }
         else if(this.var_146 == "primary_mc")
         {
            _loc1_ = this.objGameLibrary.var_50;
         }
         else if(this.var_146 == "secondary_mc")
         {
            _loc1_ = this.objGameLibrary.var_62;
         }
         else if(this.var_146 == "EnemyWeapons_mc")
         {
            _loc1_ = this.objGameLibrary.var_48;
         }
         var _loc2_:Number = 0;
         var _loc3_:Number = 0;
         if(this.refMain.var_132)
         {
            _loc2_ = 100;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.bubblePointsMax.value;
         }
         if(this.refMain.var_139)
         {
            _loc3_ = 12;
         }
         else
         {
            _loc3_ = this.refMain.objCurrentPlayer.gunPointsMax.value;
         }
         var _loc4_:int = _loc2_ - this.var_167;
         if(this.var_121 == "Enemy")
         {
            _loc3_ = Math.floor(_loc3_ * 1.5);
         }
         if(this.refMain.bln50GunPoints)
         {
            _loc3_ = 50;
         }
         var _loc5_:int = _loc3_ - this.var_108;
         var _loc7_:uint = 0;
         while(_loc7_ < _loc1_.length)
         {
            _loc6_ = true;
            if(_loc1_[_loc7_].intBubbleCost > _loc4_)
            {
               _loc6_ = false;
            }
            else if(_loc1_[_loc7_].intGunCost > _loc5_)
            {
               _loc6_ = false;
            }
            else if(_loc1_[_loc7_].intClassCost != 0)
            {
               if(_loc1_[_loc7_].blnLower == true)
               {
                  if(this.intCurrentClass > _loc1_[_loc7_].intClassCost)
                  {
                     _loc6_ = false;
                  }
               }
               else if(this.intCurrentClass < _loc1_[_loc7_].intClassCost)
               {
                  _loc6_ = false;
               }
            }
            _loc1_[_loc7_].blnAfford = _loc6_;
            _loc7_++;
         }
      }
      
      public function method_464(param1:MouseEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_].clip == this.var_7[_loc2_].clip)
               {
                  this.arrTankDetails[_loc3_].clip.y = 0;
                  this.arrTankDetails[_loc3_].y = 0;
                  if(this.arrTankDetails[_loc3_].twin != "")
                  {
                     this.method_381(this.arrTankDetails[_loc3_].clip);
                  }
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         if(this.method_88() == false)
         {
            this.method_57();
         }
         this.UpdateClass();
         this.UpdateLibraryButtonsForAffordability();
         this.UpdateStatsPanel();
         this.method_85();
         this.method_89();
         this.UpdateStatsPanel();
      }
      
      internal function MoveRight(param1:*) : void
      {
         var _loc3_:uint = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_].clip == this.var_7[_loc2_].clip)
               {
                  this.arrTankDetails[_loc3_].clip.x += 1;
                  this.arrTankDetails[_loc3_].x += 1;
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
         this.method_85();
         this.method_89();
      }
      
      public function method_295() : void
      {
         var _loc1_:Number = this.var_240 - this.var_136;
         var _loc2_:Number = Math.sqrt((this.var_81 - this.var_136) / _loc1_) * 110 - 55;
         if(_loc2_ < -55)
         {
            _loc2_ = -55;
         }
         if(_loc2_ > 55)
         {
            _loc2_ = 55;
         }
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.x = _loc2_;
      }
      
      private function method_89() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:uint = 0;
         var _loc3_:MovieClip = null;
         var _loc4_:Object = null;
         var _loc5_:Rectangle = null;
         this.method_474();
         if(this.var_7.length > 0)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_7.length)
            {
               _loc2_ = 0;
               while(_loc2_ < this.arrTankDetails.length)
               {
                  if(this.arrTankDetails[_loc2_].clip == this.var_7[_loc1_].clip)
                  {
                     if(this.objGameLibrary.IsObjectAWeapon(this.arrTankDetails[_loc2_].type) == true)
                     {
                        _loc3_ = new WeaponRolloverIcon();
                        this.var_86.addChild(_loc3_);
                        _loc3_.name = this.arrTankDetails[_loc2_].type + "_icon_mc";
                        _loc4_ = this.var_86.getChildByName(this.var_7[_loc1_].clip.name);
                        if(_loc4_ != null)
                        {
                           _loc5_ = _loc4_.getBounds(this.var_86);
                           _loc3_.y = _loc5_.y;
                           _loc3_.x = _loc5_.x + _loc5_.width;
                           _loc3_.addEventListener(MouseEvent.ROLL_OVER,this.method_743);
                        }
                     }
                     break;
                  }
                  _loc2_++;
               }
               _loc1_++;
            }
         }
      }
      
      public function method_449(param1:MouseEvent) : void
      {
         var _loc2_:Point = new Point(param1.stageX,param1.stageY);
         _loc2_ = this.Rotate_mc.globalToLocal(_loc2_);
         var _loc3_:Number = _loc2_.x;
         if(_loc3_ < this.var_148)
         {
            _loc3_ = this.var_148;
         }
         if(_loc3_ > this.var_201)
         {
            _loc3_ = this.var_201;
         }
         this.Rotate_mc.rotatehandle_mc.x = _loc3_;
         360;
         var _loc5_:Number = this.var_201 - this.var_148;
         var _loc6_:Number = (_loc3_ - this.var_148) / _loc5_;
         var _loc7_:Number = _loc6_ * 360;
         var _loc8_:uint = 0;
         while(_loc8_ < this.var_7.length)
         {
            if(this.var_7[_loc8_].clip.y <= 0)
            {
               this.var_7[_loc8_].clip.rotation = _loc7_;
            }
            else
            {
               this.var_7[_loc8_].clip.rotation = 360 - _loc7_;
            }
            _loc8_++;
         }
         this.method_234();
      }
      
      private function method_487(param1:MouseEvent) : void
      {
         param1.target.gotoAndStop("off");
      }
      
      public function method_170(param1:Event) : void
      {
         var _loc2_:Object = null;
         _loc2_ = param1.target;
         while(_loc2_.name.substr(_loc2_.name.length - 3,3) != "_mc")
         {
            _loc2_ = _loc2_.parent;
         }
         this.method_424(_loc2_.parent.name);
      }
      
      public function method_842(param1:FocusEvent) : void
      {
      }
      
      private function method_815(param1:MouseEvent) : Boolean
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc2_].clip.hitTestPoint(param1.stageX,param1.stageY,true) == true)
            {
               return false;
            }
            _loc2_++;
         }
         return true;
      }
      
      public function method_345(param1:MouseEvent) : *
      {
         this.var_11.cancel_btn.removeEventListener(MouseEvent.CLICK,this.method_162);
         this.var_11.exit_btn.removeEventListener(MouseEvent.CLICK,this.method_345);
         removeChild(this.var_11);
         this.method_138();
      }
      
      private function method_261(param1:MovieClip) : void
      {
         if(param1.filters.length == 0)
         {
            return;
         }
         param1.filters = [];
      }
      
      internal function StartMotionLeft(param1:*) : void
      {
         this.Left_mc.addEventListener(Event.ENTER_FRAME,this.MoveLeft);
      }
      
      internal function method_450(param1:Event) : void
      {
         var _loc2_:Number = Number(this.SecondaryStats_mc.BubblesReturnedCurrent_txt.text);
         var _loc3_:String = "" + _loc2_;
         if(_loc3_ == "NaN")
         {
            _loc2_ = this.var_136;
         }
         if(_loc2_ > this.var_240)
         {
            _loc2_ = this.var_240;
         }
         if(_loc2_ < this.var_136)
         {
            _loc2_ = this.var_136;
         }
         this.var_81 = _loc2_;
         this.UpdateSecondaryStatsPanel();
         this.method_295();
      }
      
      public function method_58(param1:Event) : void
      {
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      private function IsClipAWeapon(param1:MovieClip) : Boolean
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc2_].clip == param1)
            {
               return this.objGameLibrary.IsObjectAWeapon(this.arrTankDetails[_loc2_].type);
            }
            _loc2_++;
         }
         return this.objGameLibrary.IsObjectAWeapon(param1.intObjID);
      }
      
      private function method_334(param1:MovieClip, param2:Boolean = false) : void
      {
         var _loc3_:uint = 0;
         while(_loc3_ < this.var_7.length)
         {
            if(param1 == this.var_7[_loc3_].clip)
            {
               this.var_7.splice(_loc3_,1);
               break;
            }
            _loc3_++;
         }
         param1.alpha = 1;
         var _loc4_:Sprite = Sprite(this.var_86.getChildByName(param1.name));
         _loc4_.graphics.clear();
         this.var_86.removeChild(_loc4_);
         _loc4_ = null;
      }
      
      private function method_500() : void
      {
         if(this.refMain.objCurrentPlayer.var_269 == false)
         {
            this.refMain.objCurrentPlayer.var_269 = true;
            this.tutorial.back_tut.addEventListener(MouseEvent.MOUSE_OVER,this.method_214);
            this.tutorial.back_tut.addEventListener(MouseEvent.MOUSE_OUT,this.method_191);
            this.tutorial.back_tut.addEventListener(MouseEvent.MOUSE_UP,this.tutBtnUp);
            this.tutorial.back_tut.buttonMode = this.tutorial.back_tut.useHandCursor = this.tutorial.back_tut.mouseEnabled = true;
            this.tutorial.next_tut.addEventListener(MouseEvent.MOUSE_OVER,this.method_214);
            this.tutorial.next_tut.addEventListener(MouseEvent.MOUSE_OUT,this.method_191);
            this.tutorial.next_tut.addEventListener(MouseEvent.MOUSE_UP,this.tutBtnUp);
            this.tutorial.next_tut.buttonMode = this.tutorial.next_tut.useHandCursor = this.tutorial.next_tut.mouseEnabled = true;
            this.tutorial.gotoAndStop("tut_1");
         }
      }
      
      private function method_394(param1:MovieClip) : void
      {
         var _loc2_:Sprite = new Sprite();
         this.var_86.addChild(_loc2_);
         _loc2_.name = param1.name;
         var _loc3_:Rectangle = param1.getBounds(_loc2_);
         _loc2_.graphics.lineStyle(1,52223);
         _loc2_.graphics.drawRect(_loc3_.x,_loc3_.y,_loc3_.width,_loc3_.height);
      }
      
      private function method_531(param1:*, param2:*, param3:*) : Boolean
      {
         this.var_59 = (this.var_167 / 2 + this.var_108 * 3) * this.intCurrentClass;
         var _loc4_:Number = 0.0005 * this.var_59;
         if(_loc4_ > 0.1)
         {
            _loc4_ = 0.1;
         }
         this.var_81 = Math.round(this.var_59 * (0.3 * ((7 - this.intCurrentClass) / 6) + 0.005 * this.var_108 + 0.1 - _loc4_));
         if(this.var_81 < this.var_136)
         {
            this.var_81 = this.var_136;
         }
         this.var_61 = 3 * ((6 - this.intCurrentClass) / 6) + 0.5 - this.var_108 * 0.1;
         if(this.var_61 < 0.1)
         {
            this.var_61 = 0.1;
         }
         this.var_61 = Math.floor(this.var_61 * 100) / 100;
         if(this.var_59 == param1 && this.var_61 == param2 && this.var_81 == param3)
         {
            return true;
         }
         this.var_59 = param1;
         this.var_61 = param2;
         this.var_81 = param3;
         return false;
      }
      
      public function ScrollJump2Percentage(param1:Number) : void
      {
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         _loc3_ = this.Stats_mc.Library_mc.inside_mc.height - 9 * 20;
         _loc2_ = -1 * (param1 * _loc3_);
         _loc2_ += 82.95;
         this.Stats_mc.Library_mc.inside_mc.y = _loc2_;
      }
      
      public function method_508() : void
      {
         setChildIndex(this.Details_mc,this.numChildren - 1);
         this.Details_mc.visible = false;
      }
      
      public function method_108() : Array
      {
         var _loc1_:Array = null;
         var _loc3_:Array = null;
         var _loc5_:uint = 0;
         if(this.var_146 == "body_mc")
         {
            _loc1_ = this.objGameLibrary.var_83;
         }
         else if(this.var_146 == "primary_mc")
         {
            _loc1_ = this.objGameLibrary.var_50;
         }
         else if(this.var_146 == "secondary_mc")
         {
            _loc1_ = this.objGameLibrary.var_62;
         }
         else if(this.var_146 == "EnemyWeapons_mc")
         {
            _loc1_ = this.objGameLibrary.var_48;
         }
         var _loc2_:uint = 0;
         while(_loc2_ < _loc1_.length)
         {
            _loc1_[_loc2_].intLocked = 1;
            _loc2_++;
         }
         if(this.refMain.var_224)
         {
            _loc3_ = this.refMain.objCurrentPlayer.arrAllObjectIDs;
         }
         else
         {
            _loc3_ = this.refMain.objCurrentPlayer.arrUnlockedObjects;
         }
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_.length)
         {
            _loc5_ = 0;
            while(_loc5_ < _loc1_.length)
            {
               if(_loc1_[_loc5_].intObjID == _loc3_[_loc4_])
               {
                  _loc1_[_loc5_].intLocked = 0;
                  break;
               }
               _loc5_++;
            }
            _loc4_++;
         }
         this.UpdateAffordableArray();
         _loc1_.sortOn(["intLocked","intGunCost","intObjID"]);
         return _loc1_;
      }
      
      public function method_162(param1:MouseEvent) : void
      {
         this.var_11.cancel_btn.removeEventListener(MouseEvent.CLICK,this.method_162);
         removeChild(this.var_11);
         this.var_11 = null;
      }
      
      internal function method_591() : *
      {
         this.var_336 = 0.5;
         this.var_445 = 2;
         this.var_148 = -57;
         this.var_201 = 57;
         this.var_300 = false;
         this.var_292 = false;
         this.var_338 = false;
         this.var_155 = null;
         this.var_453 = 3;
         this.var_564 = 11;
         this.var_61 = 1;
         this.var_81 = 1;
         this.var_59 = 1;
         this.var_127 = true;
         this.var_328 = false;
         this.arrTankDetails = new Array();
         this.var_92 = new Array();
         this.intTankDetailID = 1;
         this.var_167 = 0;
         this.var_108 = 0;
         this.intCurrentClass = 1;
         this.var_33 = new Array();
         this.var_7 = new Array();
         this.objGameLibrary = class_2.getInstance();
         this.strTankData = "";
         this.method_699();
         this.CloseUndoButton();
         this.method_431();
         this.method_281(1);
         this.alert_mc.visible = false;
         this.var_165 = new Timer(2000,1);
         this.var_127 = true;
         this.method_712();
         this.method_508();
         this.method_507();
         this.method_101();
         this.method_57();
      }
      
      public function method_204() : void
      {
         var _loc2_:* = undefined;
         this.method_130();
         var _loc1_:uint = 0;
         while(_loc1_ < this.arrTankDetails.length)
         {
            this.movTank.removeChild(this.arrTankDetails[_loc1_].clip);
            this.arrTankDetails[_loc1_].clip = null;
            _loc1_++;
         }
         while(this.arrTankDetails.length > 0)
         {
            _loc2_ = this.arrTankDetails.pop();
            _loc2_ = null;
         }
         this.arrTankDetails.length = 0;
      }
      
      private function method_431() : void
      {
         this.Stats_mc.body_mc.gotoAndStop(2);
         if(this.Stats_mc.body_mc.hasEventListener(MouseEvent.MOUSE_OUT))
         {
            this.Stats_mc.body_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_58);
         }
         this.Stats_mc.body_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_39);
         this.Stats_mc.body_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_38);
         this.Stats_mc.body_mc.addEventListener(MouseEvent.CLICK,this.method_40);
         if(this.Stats_mc.primary_mc.hasEventListener(MouseEvent.MOUSE_OUT))
         {
            this.Stats_mc.primary_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_58);
         }
         this.Stats_mc.primary_mc.gotoAndStop(2);
         this.Stats_mc.primary_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_39);
         this.Stats_mc.primary_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_38);
         this.Stats_mc.primary_mc.addEventListener(MouseEvent.CLICK,this.method_40);
         if(this.Stats_mc.secondary_mc.hasEventListener(MouseEvent.MOUSE_OUT))
         {
            this.Stats_mc.secondary_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_58);
         }
         this.Stats_mc.secondary_mc.gotoAndStop(2);
         this.Stats_mc.secondary_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_39);
         this.Stats_mc.secondary_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_38);
         this.Stats_mc.secondary_mc.addEventListener(MouseEvent.CLICK,this.method_40);
         if(this.var_121 == "Enemy")
         {
            if(this.Stats_mc.EnemyWeapons_mc.hasEventListener(MouseEvent.MOUSE_OUT))
            {
               this.Stats_mc.EnemyWeapons_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_58);
            }
            this.Stats_mc.EnemyWeapons_mc.gotoAndStop(2);
            this.Stats_mc.EnemyWeapons_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_39);
            this.Stats_mc.EnemyWeapons_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_38);
            this.Stats_mc.EnemyWeapons_mc.addEventListener(MouseEvent.CLICK,this.method_40);
         }
      }
      
      public function method_740(param1:MouseEvent) : void
      {
         this.refMain.method_370();
         this.refMain.method_416(this.strBuffID,this.strBuffID,null,this.refMain.GameShareTankCallback);
      }
      
      public function method_278(param1:Event) : void
      {
         var _loc4_:Number = NaN;
         var _loc2_:URLLoader = URLLoader(param1.target);
         var _loc3_:URLVariables = new URLVariables(_loc2_.data);
         if(Number(_loc3_.intResponse) == 1000)
         {
            if(String(_loc3_.strTankId).substr(0,1) == "E" || String(_loc3_.strTankId).substr(0,1) == "A")
            {
               this.var_369.strID = "" + _loc3_.strTankId;
               if(this.objOldPlayerProfile == null)
               {
                  this.refMain.objCurrentPlayer.EditPreviousTankID(this.var_369);
               }
               else
               {
                  this.objOldPlayerProfile.EditPreviousTankID(this.var_369);
               }
               this.refMain.SaveAllData();
            }
            this.method_694(String(_loc3_.strTankId));
         }
         else
         {
            _loc4_ = Number(_loc3_.intResponse);
            this.method_80(_loc4_);
         }
      }
      
      private function method_615(param1:String) : *
      {
         this.alert_mc.visible = true;
         this.alert_mc.description_txt.text = param1;
         this.var_165.reset();
         if(this.var_165.hasEventListener(TimerEvent.TIMER_COMPLETE) == false)
         {
            this.var_165.addEventListener(TimerEvent.TIMER_COMPLETE,this.method_250);
         }
         this.var_165.start();
         this.method_130();
         this.method_101();
         this.RevertTank();
      }
      
      private function method_85() : void
      {
         this.method_185();
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_7.length)
         {
            this.method_394(this.var_7[_loc1_].clip);
            _loc1_++;
         }
         this.method_89();
      }
      
      private function method_252(param1:MovieClip, param2:Boolean = false) : void
      {
         this.Details_mc.visible = true;
         var _loc3_:String = param1.name;
         var _loc4_:int = int(_loc3_.substr(4,_loc3_.length - 4));
         var _loc5_:Array = this.method_108();
         var _loc6_:* = -1;
         var _loc7_:Number = 0;
         while(_loc7_ < this.var_33.length)
         {
            if(this.var_33[_loc7_].name == param1.name)
            {
               _loc6_ = _loc7_;
               break;
            }
            _loc7_++;
         }
         var _loc8_:Point = new Point(param1.x,param1.y);
         _loc8_ = param1.parent.localToGlobal(_loc8_);
         _loc8_ = this.Details_mc.globalToLocal(_loc8_);
         this.Details_mc.Arrow_mc.y = _loc8_.y;
         this.Details_mc.Arrow_mc.alpha = param1.alpha;
         if(param2 == true)
         {
            this.Details_mc.Arrow_mc.gotoAndStop(2);
         }
         else
         {
            this.Details_mc.Arrow_mc.gotoAndStop(1);
         }
         this.Details_mc.name_txt.text = this.objGameLibrary.method_37(_loc4_,false);
         this.Details_mc.gunPoints_txt.text = this.objGameLibrary.method_207(_loc4_,true);
         this.Details_mc.bubblePoints_txt.text = this.objGameLibrary.method_166(_loc4_,true);
         var _loc9_:int = this.objGameLibrary.method_149(_loc4_,true);
         var _loc10_:Boolean = this.objGameLibrary.method_240(_loc4_,true);
         if(_loc9_ == 0)
         {
            this.Details_mc.special_txt.text = "";
         }
         else if(_loc10_ == true)
         {
            if(_loc9_ == 1)
            {
               this.Details_mc.special_txt.text = "Must be class 1.";
            }
            else
            {
               this.Details_mc.special_txt.text = "Must be class " + _loc9_ + " or lower.";
            }
         }
         else if(_loc9_ == 6)
         {
            this.Details_mc.special_txt.text = "Must be class 6.";
         }
         else
         {
            this.Details_mc.special_txt.text = "Must be class " + _loc9_ + " or higher.";
         }
         this.Details_mc.damage_txt.text = this.objGameLibrary.method_606(_loc4_,true);
         this.Details_mc.summary_txt.text = this.objGameLibrary.method_535(_loc4_,true);
         this.Details_mc.flavor_txt.text = this.objGameLibrary.method_614(_loc4_,true);
         if(this.var_79 != null)
         {
            this.Details_mc.Viewer_mc.removeChild(this.var_79);
            this.var_79 = null;
         }
         this.var_79 = new _loc5_[this.ButtonIndex2LibraryIndex(_loc6_)].claType();
         if(this.var_79.width >= this.var_79.height)
         {
            if(this.var_79.width > 48)
            {
               this.var_79.width = 48;
               this.var_79.scaleY = this.var_79.scaleX;
            }
         }
         else if(this.var_79.height > 48)
         {
            this.var_79.height = 48;
            this.var_79.scaleX = this.var_79.scaleY;
         }
         this.Details_mc.Viewer_mc.addChild(this.var_79);
      }
      
      private function method_132(param1:MovieClip) : void
      {
         var _loc8_:uint = 0;
         var _loc2_:int = -1;
         var _loc4_:int = -1;
         var _loc5_:int = -1;
         var _loc6_:uint = 0;
         while(_loc6_ < this.var_7.length)
         {
            if(this.var_7[_loc6_].clip == param1)
            {
               _loc2_ = int(_loc6_);
               break;
            }
            _loc6_++;
         }
         var _loc7_:uint = 0;
         while(_loc7_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc7_].clip == param1)
            {
               _loc4_ = int(_loc7_);
               break;
            }
            _loc7_++;
         }
         if(_loc4_ == -1)
         {
            return;
         }
         if(this.arrTankDetails[_loc4_].twin != "")
         {
            _loc8_ = 0;
            while(_loc8_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc8_].name == this.arrTankDetails[_loc4_].twin)
               {
                  _loc5_ = int(_loc8_);
                  break;
               }
               _loc8_++;
            }
         }
         if(this.arrTankDetails[_loc4_].twin != "")
         {
            this.arrTankDetails[_loc4_].twin = "";
            if(_loc5_ != -1)
            {
               this.arrTankDetails[_loc5_].twin = "";
            }
         }
         this.movTank.removeChild(this.arrTankDetails[_loc4_].clip);
         this.arrTankDetails[_loc4_].clip = null;
         if(_loc2_ != -1)
         {
            this.var_7[_loc2_].clip = null;
         }
         this.arrTankDetails.splice(_loc4_,1);
         if(_loc2_ != -1)
         {
            this.var_7.splice(_loc2_,1);
         }
      }
      
      private function method_160(param1:MovieClip) : Boolean
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_7.length)
         {
            if(this.var_7[_loc2_].clip.name == param1.name)
            {
               return true;
            }
            _loc2_++;
         }
         return false;
      }
      
      public function method_138() : void
      {
         this.method_329();
         this.refMain.TransitionTankCreator2ArenaSelect(this.strTankData,this.var_520,this.var_426);
      }
      
      public function LibScrollArrowDown(param1:Event) : void
      {
         if(this.var_328 == true)
         {
            return;
         }
         if(param1.target.name == "up_mc")
         {
            this.method_347(-1);
         }
         else if(param1.target.name == "down_mc")
         {
            this.method_347(1);
         }
      }
      
      internal function method_236() : void
      {
         this.SecondaryStats_mc.LifeCurrent_txt.addEventListener(Event.CHANGE,this.method_395);
         this.SecondaryStats_mc.BubblesReturnedCurrent_txt.addEventListener(Event.CHANGE,this.method_450);
         this.SecondaryStats_mc.SpeedCurrent_txt.addEventListener(Event.CHANGE,this.method_384);
         this.SecondaryStats_mc.LifeCurrent_txt.selectable = false;
         this.SecondaryStats_mc.BubblesReturnedCurrent_txt.selectable = false;
         this.SecondaryStats_mc.SpeedCurrent_txt.selectable = false;
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_173);
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_187);
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.method_184);
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_220);
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_201);
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.method_228);
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_222);
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_213);
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.method_218);
      }
      
      private function method_688() : void
      {
         var _loc2_:int = 0;
         var _loc3_:uint = 0;
         var _loc4_:int = 0;
         var _loc5_:uint = 0;
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_7.length)
         {
            _loc2_ = -1;
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.var_7[_loc1_].clip == this.arrTankDetails[_loc3_].clip)
               {
                  _loc2_ = int(_loc3_);
                  break;
               }
               _loc3_++;
            }
            if(_loc2_ != -1)
            {
               if(this.arrTankDetails[_loc2_].twin != "")
               {
                  if(this.method_160(MovieClip(this.movTank.getChildByName(this.arrTankDetails[_loc2_].twin))) == true)
                  {
                     _loc4_ = -1;
                     _loc5_ = 0;
                     while(_loc5_ < this.arrTankDetails.length)
                     {
                        if(this.arrTankDetails[_loc2_].twin == this.arrTankDetails[_loc5_].name)
                        {
                           _loc4_ = int(_loc5_);
                           break;
                        }
                        _loc5_++;
                     }
                     if(_loc4_ != -1)
                     {
                        this.arrTankDetails[_loc4_].twin = "";
                     }
                     this.arrTankDetails[_loc2_].twin = "";
                  }
               }
            }
            _loc1_++;
         }
      }
      
      public function method_222(param1:MouseEvent) : void
      {
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.gotoAndStop(2);
         Mouse.cursor = MouseCursor.HAND;
      }
      
      public function method_387(param1:MouseEvent) : void
      {
         this.Rotate_mc.rotatehandle_mc.gotoAndStop(1);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      private function method_230() : void
      {
         this.Details_mc.visible = false;
         if(this.var_79 != null)
         {
            this.Details_mc.Viewer_mc.removeChild(this.var_79);
         }
         this.var_79 = null;
      }
      
      private function method_424(param1:String) : void
      {
         var var_106:Number;
         var var_126:String = null;
         var var_56:int = 0;
         var var_40:String = param1;
         var var_150:Array = this.method_108();
         this.method_303();
         if(this.var_156 != null)
         {
            this.Stats_mc.Library_mc.viewer_mc.removeChild(this.var_156);
            this.var_156 = null;
         }
         this.var_49 = -1;
         var_106 = 0;
         while(var_106 < this.var_33.length)
         {
            if(this.var_33[var_106].name == var_40)
            {
               this.var_49 = var_106;
               break;
            }
            var_106++;
         }
         if(this.var_49 != -1)
         {
            this.var_33[this.var_49].inside_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_179);
            this.var_33[this.var_49].inside_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_180);
            this.var_33[this.var_49].inside_mc.removeEventListener(MouseEvent.MOUSE_UP,this.method_170);
            this.var_33[this.var_49].inside_mc.gotoAndStop(3);
            this.var_33[this.var_49].inside_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_520);
            this.var_33[this.var_49].inside_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_670);
            var_126 = this.var_33[this.var_49].name;
            var_56 = int(var_126.substr(4,var_126.length - 4));
            if(var_56 >= 1000 && var_56 <= 1999)
            {
               this.var_33[this.var_49].inside_mc.circleclip.visible = false;
            }
            this.var_156 = new var_150[this.ButtonIndex2LibraryIndex(this.var_49)].claType();
            this.Stats_mc.Library_mc.viewer_mc.addChild(this.var_156);
            try
            {
               this.Stats_mc.Library_mc.clickArea_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.StartLibraryDrag);
            }
            catch(e:Error)
            {
            }
            this.Stats_mc.Library_mc.clickArea_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.StartLibraryDrag);
            if(this.var_79 != null)
            {
               this.method_230();
               this.method_252(this.var_33[this.var_49],true);
            }
         }
      }
      
      internal function YesToSuggestedSettings(param1:*) : *
      {
         this.SecondaryStats_mc.ConfirmMenu_mc.btnYes.removeEventListener(MouseEvent.CLICK,this.YesToSuggestedSettings);
         this.SecondaryStats_mc.ConfirmMenu_mc.btnNo.removeEventListener(MouseEvent.CLICK,this.NoToSuggestedSettings);
         this.SecondaryStats_mc.ConfirmMenu_mc.play();
         this.var_276 = true;
         this.SecondaryStats_mc.suggestedBox_mc.gotoAndStop(2);
         this.UseSuggestedSettings();
         this.method_236();
      }
      
      public function method_274(param1:MouseEvent) : void
      {
         this.var_11.cancel_btn.removeEventListener(MouseEvent.CLICK,this.method_277);
         this.var_11.agree_btn.removeEventListener(MouseEvent.CLICK,this.method_274);
         this.var_11.gotoAndStop(5);
         this.method_654();
      }
      
      public function method_654() : void
      {
         var var_40:URLLoader;
         var var_56:String = "http://" + this.refMain.gData.var_488 + this.refMain.gData.var_509;
         var var_126:URLRequest = new URLRequest(var_56);
         var var_106:URLVariables = new URLVariables();
         var_106.strData = this.strTankData;
         var_126.data = var_106;
         var_126.method = URLRequestMethod.POST;
         var_40 = new URLLoader();
         var_40 = new URLLoader();
         var_40.dataFormat = URLLoaderDataFormat.TEXT;
         var_40.addEventListener(Event.COMPLETE,this.method_278);
         var_40.addEventListener(HTTPStatusEvent.HTTP_STATUS,this.method_280);
         var_40.addEventListener(SecurityErrorEvent.SECURITY_ERROR,this.method_253);
         var_40.addEventListener(IOErrorEvent.IO_ERROR,this.method_254);
         try
         {
            var_40.load(var_126);
         }
         catch(e:Error)
         {
         }
      }
      
      private function method_371() : void
      {
         var var_40:Number;
         try
         {
            if(this.var_156 != null)
            {
               this.Stats_mc.Library_mc.viewer_mc.removeChild(this.var_156);
               this.var_156 = null;
            }
         }
         catch(e:Error)
         {
         }
         var_40 = 0;
         while(var_40 < this.var_33.length)
         {
            this.var_33[var_40].inside_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_179);
            this.var_33[var_40].inside_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_180);
            this.var_33[var_40].inside_mc.removeEventListener(MouseEvent.MOUSE_UP,this.method_170);
            this.Stats_mc.Library_mc.inside_mc.removeChild(this.var_33[var_40]);
            this.var_33[var_40] = null;
            var_40++;
         }
         this.var_33 = null;
         this.var_33 = new Array();
      }
      
      public function method_439(param1:MouseEvent) : void
      {
         this.Rotate_mc.rotatehandle_mc.gotoAndStop(2);
         Mouse.cursor = MouseCursor.HAND;
      }
      
      private function method_357() : *
      {
         this.Stats_mc.secondary_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_39);
         this.Stats_mc.secondary_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_38);
         this.Stats_mc.secondary_mc.removeEventListener(MouseEvent.CLICK,this.method_40);
         this.Stats_mc.removeChild(this.Stats_mc.secondary_mc);
      }
      
      private function method_385() : *
      {
         removeChild(this.SecondaryStats_mc);
         this.Stats_mc.removeChild(this.Stats_mc.EnemyWeapons_mc);
      }
      
      public function ExitMouseUp(param1:Event) : void
      {
         Mouse.cursor = MouseCursor.AUTO;
         this.var_11 = new TankScreens();
         addChild(this.var_11);
         this.var_11.gotoAndStop(1);
         this.var_11.cancel_btn.addEventListener(MouseEvent.CLICK,this.method_162);
         this.var_11.exit_btn.addEventListener(MouseEvent.CLICK,this.method_345);
      }
      
      public function method_192(param1:Event) : void
      {
         param1.target.gotoAndStop(2);
      }
      
      public function method_744(param1:TankData, param2:Boolean = false) : *
      {
         var _loc4_:MovieClip = null;
         this.method_204();
         this.var_434 = param2;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.arrTankDetails.length)
         {
            this.arrTankDetails.push({
               "name":param1.arrTankDetails[_loc3_].name,
               "type":param1.arrTankDetails[_loc3_].type,
               "twin":param1.arrTankDetails[_loc3_].twin,
               "clip":null,
               "x":param1.arrTankDetails[_loc3_].x,
               "y":param1.arrTankDetails[_loc3_].y,
               "rotation":param1.arrTankDetails[_loc3_].rotation,
               "scale":param1.arrTankDetails[_loc3_].scale,
               "radius":param1.arrTankDetails[_loc3_].radius
            });
            this.intTankDetailID = Math.max(this.intTankDetailID,int(this.arrTankDetails[_loc3_].name.substr(0,this.arrTankDetails[_loc3_].name.search("_"))));
            _loc3_++;
         }
         this.intTankDetailID += 1;
         this.strTankData = param1.ExportTankData();
         0;
         while(0 < this.arrTankDetails.length)
         {
            _loc4_ = this.objGameLibrary.method_123(this.arrTankDetails[0].type);
            _loc4_.x = this.arrTankDetails[0].x;
            _loc4_.y = this.arrTankDetails[0].y;
            _loc4_.scaleX = _loc4_.scaleY = this.arrTankDetails[0].scale;
            _loc4_.rotation = this.arrTankDetails[0].rotation;
            _loc4_.name = this.arrTankDetails[0].name;
            this.arrTankDetails[0].clip = _loc4_;
            this.movTank.addChild(_loc4_);
            var _loc5_:uint = 0 + 1;
         }
         this.blnLoadedTank = true;
         if(this.var_121 == "Enemy")
         {
            this.var_59 = param1.numLife;
            this.var_61 = param1.numSpeed;
            this.var_81 = param1.numBubblesReturned;
            if(!this.method_531(this.var_59,this.var_61,this.var_81))
            {
               this.var_276 = false;
               this.SecondaryStats_mc.suggestedBox_mc.gotoAndStop(1);
            }
         }
         this.method_99();
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
         this.method_57();
         this.var_366 = this.var_167;
         this.var_397 = this.var_108;
         this.var_402 = this.intCurrentClass;
      }
      
      public function StopLibraryDrag(param1:Event) : void
      {
         this.method_713();
         stage.removeEventListener(MouseEvent.MOUSE_UP,this.StopLibraryDrag);
         stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.method_344);
         this.method_251();
      }
      
      private function method_323() : void
      {
         this.Stats_mc.body_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_39);
         this.Stats_mc.body_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_38);
         this.Stats_mc.body_mc.removeEventListener(MouseEvent.CLICK,this.method_40);
         this.Stats_mc.body_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_58);
         this.Stats_mc.primary_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_39);
         this.Stats_mc.primary_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_38);
         this.Stats_mc.primary_mc.removeEventListener(MouseEvent.CLICK,this.method_40);
         this.Stats_mc.primary_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_58);
         this.Stats_mc.secondary_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_39);
         this.Stats_mc.secondary_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_38);
         this.Stats_mc.secondary_mc.removeEventListener(MouseEvent.CLICK,this.method_40);
         this.Stats_mc.secondary_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_58);
         if(this.var_121 == "Enemy")
         {
            this.Stats_mc.EnemyWeapons_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_39);
            this.Stats_mc.EnemyWeapons_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_38);
            this.Stats_mc.EnemyWeapons_mc.removeEventListener(MouseEvent.CLICK,this.method_40);
            this.Stats_mc.EnemyWeapons_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_58);
         }
      }
      
      internal function method_395(param1:Event) : void
      {
         var _loc2_:Number = Number(this.SecondaryStats_mc.LifeCurrent_txt.text);
         var _loc3_:String = "" + _loc2_;
         if(_loc3_ == "NaN")
         {
            _loc2_ = this.var_217;
         }
         if(_loc2_ > this.var_237)
         {
            _loc2_ = this.var_237;
         }
         if(_loc2_ < this.var_217)
         {
            _loc2_ = this.var_217;
         }
         this.var_59 = _loc2_;
         this.UpdateSecondaryStatsPanel();
         this.method_243();
      }
      
      private function method_273(param1:MouseEvent) : void
      {
         var var_40:MouseEvent = param1;
         try
         {
            this.var_86.removeChild(this.var_120);
            this.var_120 = null;
         }
         catch(e:Error)
         {
         }
      }
      
      public function method_339() : void
      {
         var _loc1_:Number = NaN;
         _loc1_ = (this.Stats_mc.Library_mc.scroll_mc.bar_mc.y - 18) / 121;
         this.ScrollJump2Percentage(_loc1_);
      }
      
      private function method_496() : Object
      {
         var _loc9_:String = null;
         var _loc10_:uint = 0;
         var _loc12_:int = 0;
         var _loc13_:int = 0;
         var _loc14_:uint = 0;
         var _loc15_:uint = 0;
         var _loc16_:uint = 0;
         var _loc1_:String = "";
         var _loc2_:String = "";
         var _loc3_:String = "";
         var _loc4_:Array = new Array();
         var _loc5_:Array = new Array();
         var _loc6_:Array = new Array();
         var _loc7_:uint = 0;
         while(_loc7_ < this.arrTankDetails.length)
         {
            _loc12_ = Math.floor(this.arrTankDetails[_loc7_].type / 1000);
            _loc13_ = -1;
            if(_loc12_ == 2)
            {
               _loc14_ = 0;
               while(_loc14_ < _loc4_.length)
               {
                  if(_loc4_[_loc14_].type == this.arrTankDetails[_loc7_].type)
                  {
                     _loc13_ = int(_loc14_);
                     ++_loc4_[_loc14_].amount;
                  }
                  _loc14_++;
               }
               if(_loc13_ == -1)
               {
                  _loc4_.push({
                     "type":this.arrTankDetails[_loc7_].type,
                     "amount":1
                  });
               }
            }
            else if(_loc12_ == 3)
            {
               _loc15_ = 0;
               while(_loc15_ < _loc5_.length)
               {
                  if(_loc5_[_loc15_].type == this.arrTankDetails[_loc7_].type)
                  {
                     _loc13_ = int(_loc15_);
                     ++_loc5_[_loc15_].amount;
                  }
                  _loc15_++;
               }
               if(_loc13_ == -1)
               {
                  _loc5_.push({
                     "type":this.arrTankDetails[_loc7_].type,
                     "amount":1
                  });
               }
            }
            else if(_loc12_ == 4)
            {
               _loc16_ = 0;
               while(_loc16_ < _loc6_.length)
               {
                  if(_loc6_[_loc16_].type == this.arrTankDetails[_loc7_].type)
                  {
                     _loc13_ = int(_loc16_);
                     ++_loc6_[_loc16_].amount;
                  }
                  _loc16_++;
               }
               if(_loc13_ == -1)
               {
                  _loc6_.push({
                     "type":this.arrTankDetails[_loc7_].type,
                     "amount":1
                  });
               }
            }
            _loc7_++;
         }
         _loc4_.sortOn("type");
         _loc5_.sortOn("type");
         _loc6_.sortOn("type");
         var _loc8_:Boolean = false;
         if(_loc4_.length > 2)
         {
            _loc8_ = true;
         }
         _loc10_ = 0;
         while(_loc10_ < _loc4_.length)
         {
            if(_loc8_ == true)
            {
               if(_loc4_[_loc10_].amount == 1)
               {
                  _loc9_ = this.objGameLibrary.method_26(_loc4_[_loc10_].type);
                  _loc1_ += "1 " + _loc9_.substr(0,_loc9_.length - 2) + ", ";
               }
               else
               {
                  _loc1_ += _loc4_[_loc10_].amount + " " + this.objGameLibrary.method_26(_loc4_[_loc10_].type) + ", ";
               }
            }
            else if(_loc4_[_loc10_].amount == 1)
            {
               _loc1_ += this.objGameLibrary.method_37(_loc4_[_loc10_].type) + ", ";
            }
            else
            {
               _loc1_ += _loc4_[_loc10_].amount + " " + this.objGameLibrary.method_87(_loc4_[_loc10_].type) + ", ";
            }
            _loc10_++;
         }
         if(_loc5_.length > 2)
         {
            _loc8_ = true;
         }
         else
         {
            _loc8_ = false;
         }
         _loc10_ = 0;
         while(_loc10_ < _loc5_.length)
         {
            if(_loc8_ == true)
            {
               if(_loc5_[_loc10_].amount == 1)
               {
                  _loc9_ = this.objGameLibrary.method_26(_loc5_[_loc10_].type);
                  _loc2_ += "1 " + _loc9_.substr(0,_loc9_.length - 2) + ", ";
               }
               else
               {
                  _loc2_ += _loc5_[_loc10_].amount + " " + this.objGameLibrary.method_26(_loc5_[_loc10_].type) + ", ";
               }
            }
            else if(_loc5_[_loc10_].amount == 1)
            {
               _loc2_ += this.objGameLibrary.method_37(_loc5_[_loc10_].type) + ", ";
            }
            else
            {
               _loc2_ += _loc5_[_loc10_].amount + " " + this.objGameLibrary.method_87(_loc5_[_loc10_].type) + ", ";
            }
            _loc10_++;
         }
         if(_loc6_.length > 2)
         {
            _loc8_ = true;
         }
         else
         {
            _loc8_ = false;
         }
         _loc10_ = 0;
         while(_loc10_ < _loc6_.length)
         {
            if(_loc8_ == true)
            {
               if(_loc6_[_loc10_].amount == 1)
               {
                  _loc9_ = this.objGameLibrary.method_26(_loc6_[_loc10_].type);
                  _loc3_ += "1 " + _loc9_.substr(0,_loc9_.length - 2) + ", ";
               }
               else
               {
                  _loc3_ += _loc6_[_loc10_].amount + " " + this.objGameLibrary.method_26(_loc6_[_loc10_].type) + ", ";
               }
            }
            else if(_loc6_[_loc10_].amount == 1)
            {
               _loc3_ += this.objGameLibrary.method_37(_loc6_[_loc10_].type) + ", ";
            }
            else
            {
               _loc3_ += _loc6_[_loc10_].amount + " " + this.objGameLibrary.method_87(_loc6_[_loc10_].type) + ", ";
            }
            _loc10_++;
         }
         if(_loc1_ == "")
         {
            _loc1_ = "N/A";
         }
         else
         {
            _loc1_ = _loc1_.substr(0,_loc1_.length - 2);
         }
         if(_loc2_ == "")
         {
            _loc2_ = "N/A";
         }
         else
         {
            _loc2_ = _loc2_.substr(0,_loc2_.length - 2);
         }
         if(_loc3_ == "")
         {
            _loc3_ = "N/A";
         }
         else
         {
            _loc3_ = _loc3_.substr(0,_loc3_.length - 2);
         }
         return {
            "strPrimary":_loc1_,
            "strSecondary":_loc2_,
            "strEnemyWeapons":_loc3_
         };
      }
      
      public function method_253(param1:SecurityErrorEvent) : void
      {
         this.method_80(8000);
      }
      
      private function RevertTank() : void
      {
         this.method_204();
         var _loc1_:int = this.var_92.length - 1;
         this.method_305(_loc1_);
         this.method_99();
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
      }
      
      public function method_442(param1:MouseEvent) : void
      {
         this.Resize_mc.resizehandle_mc.gotoAndStop(2);
         Mouse.cursor = MouseCursor.HAND;
      }
      
      internal function method_228(param1:MouseEvent) : void
      {
         stage.addEventListener(MouseEvent.MOUSE_UP,this.method_317);
         stage.addEventListener(MouseEvent.MOUSE_MOVE,this.method_328);
      }
      
      private function method_657() : void
      {
         if(this.intCurrentClass == 1)
         {
            this.var_59 = 100;
         }
         else if(this.intCurrentClass == 2)
         {
            this.var_59 = 110;
         }
         else if(this.intCurrentClass == 3)
         {
            this.var_59 = 120;
         }
         else if(this.intCurrentClass == 4)
         {
            this.var_59 = 200;
         }
         else if(this.intCurrentClass == 5)
         {
            this.var_59 = 250;
         }
         else if(this.intCurrentClass == 6)
         {
            this.var_59 = 300;
         }
      }
      
      public function method_379(param1:MouseEvent) : void
      {
         this.var_11.return_btn.removeEventListener(MouseEvent.CLICK,this.method_114);
         this.var_11.exit_btn.removeEventListener(MouseEvent.CLICK,this.method_110);
         removeChild(this.var_11);
      }
      
      internal function method_393() : void
      {
         this.SecondaryStats_mc.LifeCurrent_txt.addEventListener(Event.CHANGE,this.method_395);
         this.SecondaryStats_mc.BubblesReturnedCurrent_txt.addEventListener(Event.CHANGE,this.method_450);
         this.SecondaryStats_mc.SpeedCurrent_txt.addEventListener(Event.CHANGE,this.method_384);
         this.SecondaryStats_mc.LifeCurrent_txt.selectable = true;
         this.SecondaryStats_mc.BubblesReturnedCurrent_txt.selectable = true;
         this.SecondaryStats_mc.SpeedCurrent_txt.selectable = true;
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_173);
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_187);
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.method_184);
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_220);
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_201);
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.method_228);
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_222);
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_213);
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.method_218);
      }
      
      private function method_344(param1:MouseEvent) : void
      {
         null;
         null;
         if(this.var_454 == true)
         {
            var _loc2_:Point = new Point(param1.stageX,param1.stageY);
            _loc2_ = this.movTank.globalToLocal(null);
            if(Math.abs(null.y) <= 3)
            {
               null.y = 0;
            }
            this.movDragObj1.x = null.x;
            this.movDragObj1.y = null.y;
            if(this.var_127 == true)
            {
               if(Math.abs(null.y) <= this.var_453)
               {
                  if(this.movDragObj2 != null)
                  {
                     this.movTank.removeChild(this.movDragObj2);
                     this.movDragObj2 = null;
                     --this.intTankDetailID;
                  }
               }
               else
               {
                  if(this.movDragObj2 == null)
                  {
                     var _loc3_:Array = this.method_108();
                     this.movDragObj2 = new null[this.ButtonIndex2LibraryIndex(this.var_49)].claType();
                     this.movDragObj2.alpha = 0.25;
                     this.movDragObj2.name = this.intTankDetailID + "_mc";
                     this.movDragObj2.intObjID = null[this.ButtonIndex2LibraryIndex(this.var_49)].intObjID;
                     ++this.intTankDetailID;
                     this.movTank.addChild(this.movDragObj2);
                  }
                  this.movDragObj2.x = null.x;
                  this.movDragObj2.y = -1 * null.y;
               }
            }
         }
         if(this.method_134(this.movDragObj1) == true)
         {
            this.method_261(this.movDragObj1);
         }
         else
         {
            this.method_145(this.movDragObj1);
         }
         if(this.movDragObj2 != null)
         {
            if(this.method_134(this.movDragObj2) == true)
            {
               this.method_261(this.movDragObj2);
            }
            else
            {
               this.method_145(this.movDragObj2);
            }
         }
      }
      
      public function method_114(param1:MouseEvent) : void
      {
         this.var_11.Copy_btn.removeEventListener(MouseEvent.CLICK,this.method_202);
         this.var_11.data_txt.removeEventListener(MouseEvent.CLICK,this.method_211);
         this.var_11.return_btn.removeEventListener(MouseEvent.CLICK,this.method_114);
         this.var_11.exit_btn.removeEventListener(MouseEvent.CLICK,this.method_110);
         this.var_11.share_btn.removeEventListener(MouseEvent.CLICK,this.method_174);
         removeChild(this.var_11);
      }
      
      private function method_130() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_7.length)
         {
            this.var_7[_loc1_].clip.alpha = 1;
            _loc1_++;
         }
         this.var_7.length = 0;
         this.method_185();
      }
      
      public function method_281(param1:int, param2:int = 6) : void
      {
         this.rings_mc.class1_txt.visible = true;
         this.rings_mc.class2_txt.visible = true;
         this.rings_mc.class3_txt.visible = true;
         this.rings_mc.class4_txt.visible = true;
         this.rings_mc.class5_txt.visible = true;
         this.rings_mc.class6_txt.visible = true;
         this.rings_mc.ring1_mc.visible = true;
         this.rings_mc.ring2_mc.visible = true;
         this.rings_mc.ring3_mc.visible = true;
         this.rings_mc.ring4_mc.visible = true;
         this.rings_mc.ring5_mc.visible = true;
         this.rings_mc.gotoAndStop(param2);
         switch(param2)
         {
            case 1:
               this.rings_mc.class2_txt.visible = false;
               this.rings_mc.class3_txt.visible = false;
               this.rings_mc.class4_txt.visible = false;
               this.rings_mc.class5_txt.visible = false;
               this.rings_mc.class6_txt.visible = false;
               this.rings_mc.ring2_mc.visible = false;
               this.rings_mc.ring3_mc.visible = false;
               this.rings_mc.ring4_mc.visible = false;
               this.rings_mc.ring5_mc.visible = false;
               break;
            case 2:
               this.rings_mc.class3_txt.visible = false;
               this.rings_mc.class4_txt.visible = false;
               this.rings_mc.class5_txt.visible = false;
               this.rings_mc.class6_txt.visible = false;
               this.rings_mc.ring3_mc.visible = false;
               this.rings_mc.ring4_mc.visible = false;
               this.rings_mc.ring5_mc.visible = false;
               break;
            case 3:
               this.rings_mc.class4_txt.visible = false;
               this.rings_mc.class5_txt.visible = false;
               this.rings_mc.class6_txt.visible = false;
               this.rings_mc.ring4_mc.visible = false;
               this.rings_mc.ring5_mc.visible = false;
               break;
            case 4:
               this.rings_mc.class5_txt.visible = false;
               this.rings_mc.class6_txt.visible = false;
               this.rings_mc.ring5_mc.visible = false;
               break;
            case 5:
               this.rings_mc.class6_txt.visible = false;
         }
         this.rings_mc.class1_txt.alpha = 0.1;
         this.rings_mc.class2_txt.alpha = 0.1;
         this.rings_mc.class3_txt.alpha = 0.1;
         this.rings_mc.class4_txt.alpha = 0.1;
         this.rings_mc.class5_txt.alpha = 0.1;
         this.rings_mc.class6_txt.alpha = 0.1;
         this.rings_mc.ring1_mc.alpha = 0.1;
         this.rings_mc.ring2_mc.alpha = 0.1;
         this.rings_mc.ring3_mc.alpha = 0.1;
         this.rings_mc.ring4_mc.alpha = 0.1;
         this.rings_mc.ring5_mc.alpha = 0.1;
         switch(param1)
         {
            case 1:
               this.rings_mc.class1_txt.alpha = 1;
               this.rings_mc.ring1_mc.alpha = 1;
               break;
            case 2:
               this.rings_mc.class2_txt.alpha = 1;
               this.rings_mc.ring2_mc.alpha = 1;
               break;
            case 3:
               this.rings_mc.class3_txt.alpha = 1;
               this.rings_mc.ring3_mc.alpha = 1;
               break;
            case 4:
               this.rings_mc.class4_txt.alpha = 1;
               this.rings_mc.ring4_mc.alpha = 1;
               break;
            case 5:
               this.rings_mc.class5_txt.alpha = 1;
               this.rings_mc.ring5_mc.alpha = 1;
               break;
            case 6:
               this.rings_mc.class6_txt.alpha = 1;
         }
      }
      
      private function method_329() : void
      {
         if(hasEventListener(Event.ENTER_FRAME))
         {
            removeEventListener(Event.ENTER_FRAME,this.method_367);
         }
         if(this.objOldPlayerProfile != null)
         {
            this.refMain.objCurrentPlayer = this.objOldPlayerProfile;
         }
         if(this.var_155 != null)
         {
            this.var_155 = null;
         }
         if(this.var_79 != null)
         {
            this.Details_mc.Viewer_mc.removeChild(this.var_79);
            this.var_79 = null;
         }
         if(this.movDragObj1 != null)
         {
            this.movTank.removeChild(this.movDragObj1);
            this.movDragObj1 = null;
         }
         if(this.movDragObj2 != null)
         {
            this.movTank.removeChild(this.movDragObj2);
            this.movDragObj2 = null;
         }
         this.method_101();
         this.method_323();
         this.method_10();
         this.method_371();
         this.method_204();
         this.method_273(new MouseEvent(""));
         this.method_474();
         this.method_185();
      }
      
      private function method_794() : void
      {
         var _loc1_:uint = 0;
         _loc1_ = 0;
         while(_loc1_ < this.arrTankDetails.length)
         {
            _loc1_++;
         }
      }
      
      private function method_359() : *
      {
         this.Stats_mc.primary_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_39);
         this.Stats_mc.primary_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_38);
         this.Stats_mc.primary_mc.removeEventListener(MouseEvent.CLICK,this.method_40);
         this.Stats_mc.removeChild(this.Stats_mc.primary_mc);
      }
      
      private function method_846(param1:MovieClip) : void
      {
         if(param1.alpha == 1)
         {
            return;
         }
         var _loc2_:int = -1;
         var _loc4_:uint = 0;
         while(_loc4_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc4_].clip == param1)
            {
               _loc2_ = int(_loc4_);
               break;
            }
            _loc4_++;
         }
         if(this.arrTankDetails[_loc2_].twin == "")
         {
            return;
         }
         var _loc5_:uint = 0;
         while(_loc5_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc5_].name == this.arrTankDetails[_loc2_].twin)
            {
               var _loc3_:int = int(_loc5_);
               break;
            }
            _loc5_++;
         }
      }
      
      private function CloseUndoButton() : void
      {
         this.Undo_mc.gotoAndStop(1);
         if(this.Undo_mc.hasEventListener(MouseEvent.CLICK) == false)
         {
            this.Undo_mc.removeEventListener(MouseEvent.CLICK,this.method_374);
         }
      }
      
      public function method_243() : void
      {
         var _loc1_:Number = this.var_237 - this.var_217;
         var _loc2_:Number = Math.sqrt((this.var_59 - this.var_217) / _loc1_) * 110 - 55;
         if(_loc2_ < -55)
         {
            _loc2_ = -55;
         }
         if(_loc2_ > 55)
         {
            _loc2_ = 55;
         }
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.x = _loc2_;
      }
      
      private function method_320(param1:String) : void
      {
         this.method_323();
         this.method_431();
         this.method_371();
         this.var_146 = param1;
         if(param1 == "body_mc")
         {
            this.Stats_mc.body_mc.gotoAndStop(1);
            this.Stats_mc.body_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_39);
            this.Stats_mc.body_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_38);
            this.Stats_mc.body_mc.removeEventListener(MouseEvent.CLICK,this.method_40);
            this.Stats_mc.body_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_58);
         }
         else if(param1 == "primary_mc")
         {
            this.Stats_mc.primary_mc.gotoAndStop(1);
            this.Stats_mc.primary_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_39);
            this.Stats_mc.primary_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_38);
            this.Stats_mc.primary_mc.removeEventListener(MouseEvent.CLICK,this.method_40);
            this.Stats_mc.primary_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_58);
         }
         else if(param1 == "secondary_mc")
         {
            this.Stats_mc.secondary_mc.gotoAndStop(1);
            this.Stats_mc.secondary_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_39);
            this.Stats_mc.secondary_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_38);
            this.Stats_mc.secondary_mc.removeEventListener(MouseEvent.CLICK,this.method_40);
            this.Stats_mc.secondary_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_58);
         }
         else if(param1 == "EnemyWeapons_mc")
         {
            this.Stats_mc.EnemyWeapons_mc.gotoAndStop(1);
            this.Stats_mc.EnemyWeapons_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_39);
            this.Stats_mc.EnemyWeapons_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_38);
            this.Stats_mc.EnemyWeapons_mc.removeEventListener(MouseEvent.CLICK,this.method_40);
            this.Stats_mc.EnemyWeapons_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_58);
         }
         this.method_621();
      }
      
      public function method_403(param1:MouseEvent) : void
      {
         var _loc2_:Point = new Point(param1.stageX,param1.stageY);
         _loc2_ = this.SecondaryStats_mc.SpeedSlider_mc.globalToLocal(_loc2_);
         var _loc3_:Number = _loc2_.x;
         if(_loc3_ < -55)
         {
            _loc3_ = -55;
         }
         if(_loc3_ > 55)
         {
            _loc3_ = 55;
         }
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.x = _loc3_;
         var _loc4_:Number = this.var_235 - this.var_211;
         this.var_61 = this.var_211 + int(_loc4_ * ((_loc3_ + 55) / 110) * ((_loc3_ + 55) / 110) * 10) / 10;
         this.UpdateSecondaryStatsPanel();
      }
      
      public function method_456(param1:MouseEvent) : void
      {
         if(this.var_300 == false && this.var_292 == false)
         {
            this.method_680(param1);
         }
         this.var_300 = false;
         this.var_292 = false;
      }
      
      internal function method_447() : *
      {
         this.Stats_mc.EnemyWeapons_mc.gotoAndStop(2);
         this.Stats_mc.EnemyWeapons_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_39);
         this.Stats_mc.EnemyWeapons_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_38);
         this.Stats_mc.EnemyWeapons_mc.addEventListener(MouseEvent.CLICK,this.method_40);
      }
      
      private function method_101() : void
      {
         this.DeleteButton_mc.visible = false;
         this.BringFront_mc.visible = false;
         this.SendBack_mc.visible = false;
         this.Resize_mc.visible = false;
         this.Rotate_mc.visible = false;
         this.AlignCenter_mc.visible = false;
         this.Right_mc.visible = false;
         this.Left_mc.visible = false;
         if(this.DeleteButton_mc.hasEventListener(MouseEvent.CLICK) == true)
         {
            this.DeleteButton_mc.removeEventListener(MouseEvent.MOUSE_UP,this.DeleteButtonMouseUp);
            this.DeleteButton_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.DeleteButtonMouseDown);
            this.BringFront_mc.removeEventListener(MouseEvent.CLICK,this.method_430);
            this.SendBack_mc.removeEventListener(MouseEvent.CLICK,this.method_358);
            this.AlignCenter_mc.removeEventListener(MouseEvent.CLICK,this.method_464);
            this.Right_mc.removeEventListener(MouseEvent.CLICK,this.MoveSelectionRight);
            this.Left_mc.removeEventListener(MouseEvent.CLICK,this.MoveSelectionLeft);
            this.Right_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.StartMotionRight);
            this.Left_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.StartMotionLeft);
            this.Right_mc.removeEventListener(MouseEvent.MOUSE_UP,this.EndMotionRight);
            this.Left_mc.removeEventListener(MouseEvent.MOUSE_UP,this.EndMotionLeft);
            this.Right_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.EndMotionRight);
            this.Left_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.EndMotionLeft);
            this.Resize_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_442);
            this.Resize_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_350);
            this.Resize_mc.resizehandle_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.method_400);
            this.Rotate_mc.rotatehandle_mc.removeEventListener(MouseEvent.MOUSE_OVER,this.method_439);
            this.Rotate_mc.rotatehandle_mc.removeEventListener(MouseEvent.MOUSE_OUT,this.method_387);
            this.Rotate_mc.rotatehandle_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.method_413);
         }
      }
      
      private function method_303() : void
      {
         if(this.var_49 == -1)
         {
            return;
         }
         this.var_33[this.var_49].inside_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_179);
         this.var_33[this.var_49].inside_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_180);
         this.var_33[this.var_49].inside_mc.addEventListener(MouseEvent.MOUSE_UP,this.method_170);
         this.var_33[this.var_49].inside_mc.gotoAndStop(1);
         var _loc1_:String = this.var_33[this.var_49].name;
         var _loc2_:int = int(_loc1_.substr(4,_loc1_.length - 4));
         if(_loc2_ >= 1000 && _loc2_ <= 1999)
         {
            this.var_33[this.var_49].inside_mc.circleclip.visible = false;
         }
         this.var_49 = -1;
         this.Stats_mc.Library_mc.viewer_mc.removeChild(this.var_156);
         this.var_156 = null;
      }
      
      public function method_328(param1:MouseEvent) : void
      {
         var _loc2_:Point = new Point(param1.stageX,param1.stageY);
         _loc2_ = this.SecondaryStats_mc.BubblesReturnedSlider_mc.globalToLocal(_loc2_);
         var _loc3_:Number = _loc2_.x;
         if(_loc3_ < -55)
         {
            _loc3_ = -55;
         }
         if(_loc3_ > 55)
         {
            _loc3_ = 55;
         }
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.x = _loc3_;
         var _loc4_:Number = this.var_240 - this.var_136;
         this.var_81 = this.var_136 + int(_loc4_ * ((_loc3_ + 55) / 110) * ((_loc3_ + 55) / 110));
         this.UpdateSecondaryStatsPanel();
      }
      
      public function StartLibraryDrag(param1:MouseEvent) : void
      {
         this.method_579(param1);
         if(this.var_121 == "Enemy")
         {
            if(this.Stats_mc.currentFrame == 2)
            {
               this.method_206(param1);
            }
         }
         stage.addEventListener(MouseEvent.MOUSE_UP,this.StopLibraryDrag);
         stage.addEventListener(MouseEvent.MOUSE_MOVE,this.method_344);
         this.method_429();
      }
      
      private function method_256() : *
      {
         this.var_200 = -0.05;
         if(hasEventListener(Event.ENTER_FRAME) == false)
         {
            addEventListener(Event.ENTER_FRAME,this.method_367);
         }
      }
      
      private function method_191(param1:MouseEvent) : void
      {
         param1.target.gotoAndStop("off");
      }
      
      private function OpenUndoButton() : void
      {
         if(this.Undo_mc.currentFrame != 2)
         {
            this.Undo_mc.gotoAndStop(2);
            if(this.Undo_mc.hasEventListener(MouseEvent.CLICK) == false)
            {
               this.Undo_mc.addEventListener(MouseEvent.CLICK,this.method_374);
            }
         }
      }
      
      public function MoveSelectionLeft(param1:MouseEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_].clip == this.var_7[_loc2_].clip)
               {
                  --this.arrTankDetails[_loc3_].clip.x;
                  --this.arrTankDetails[_loc3_].x;
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
         this.method_85();
         this.method_89();
      }
      
      public function method_180(param1:Event) : void
      {
         var _loc2_:Object = null;
         var _loc3_:String = null;
         var _loc4_:int = 0;
         _loc2_ = param1.target;
         while(_loc2_.name.substr(_loc2_.name.length - 3,3) != "_mc")
         {
            _loc2_ = _loc2_.parent;
         }
         _loc2_.gotoAndStop(1);
         _loc3_ = _loc2_.parent.name;
         _loc4_ = int(_loc3_.substr(4,_loc3_.length - 4));
         if(_loc4_ >= 1000 && _loc4_ <= 1999)
         {
            _loc2_.circleclip.visible = false;
         }
         this.method_230();
      }
      
      public function method_427(param1:MouseEvent) : void
      {
         null;
         if(this.var_328 == true)
         {
            var _loc2_:Point = new Point(param1.stageX,param1.stageY);
            _loc2_ = this.Stats_mc.Library_mc.scroll_mc.globalToLocal(null);
            null.y -= Math.round(this.Stats_mc.Library_mc.scroll_mc.bar_mc.height / 2);
            if(null.y > 138)
            {
               null.y = 138;
            }
            if(null.y < 18)
            {
               null.y = 18;
            }
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.y = null.y;
            this.method_339();
         }
      }
      
      public function method_38(param1:Event) : void
      {
         param1.target.gotoAndStop(3);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      private function method_99() : void
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         var _loc3_:uint = 0;
         while(_loc3_ < this.arrTankDetails.length)
         {
            _loc1_ += this.objGameLibrary.method_166(this.arrTankDetails[_loc3_].type);
            _loc2_ += this.objGameLibrary.method_207(this.arrTankDetails[_loc3_].type,true);
            _loc3_++;
         }
         if(_loc1_ < 0)
         {
            _loc1_ = 0;
         }
         if(_loc2_ < 0)
         {
            _loc2_ = 0;
         }
         this.var_167 = _loc1_;
         this.var_108 = _loc2_;
      }
      
      private function method_474() : void
      {
         var _loc2_:String = null;
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_86.numChildren)
         {
            _loc2_ = this.var_86.getChildAt(_loc1_).name;
            if(_loc2_.substr(_loc2_.length - 8,8) == "_icon_mc")
            {
               this.var_86.removeChildAt(_loc1_);
               _loc1_--;
            }
            _loc1_++;
         }
      }
      
      public function SaveExitMouseUp(param1:Event) : void
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         var _loc4_:TankData = null;
         _loc2_ = false;
         _loc3_ = 0;
         while(_loc3_ < this.arrTankDetails.length)
         {
            if(this.objGameLibrary.GetObjectType(this.arrTankDetails[_loc3_].type) > 1)
            {
               _loc2_ = true;
            }
            _loc3_ += 1;
         }
         if(!_loc2_ && this.var_121 == "Avatar")
         {
            this.method_615("You must have at least 1 weapon to save an Avatar tank");
            return;
         }
         if(this.var_121 == "Enemy")
         {
            this.method_555();
         }
         else
         {
            this.method_657();
         }
         this.var_426 = true;
         if(this.var_92.length == 2 && this.blnLoadedTank)
         {
            this.method_419();
            return;
         }
         Mouse.cursor = MouseCursor.AUTO;
         this.var_11 = new TankScreens();
         addChild(this.var_11);
         this.var_11.gotoAndStop(2);
         this.var_11.author_txt.text = this.refMain.objCurrentPlayer.profileName;
         if(this.var_434)
         {
            _loc4_ = new TankData();
            _loc4_.ImportTankData(this.refMain.objCurrentPlayer.currentAvatar);
            this.var_11.tank_txt.text = _loc4_.strTankName;
         }
         this.var_11.author_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_372);
         this.var_11.author_txt.addEventListener(FocusEvent.FOCUS_OUT,this.method_433);
         this.var_11.author_txt.addEventListener(TextEvent.TEXT_INPUT,this.method_51);
         this.var_11.tank_txt.addEventListener(TextEvent.TEXT_INPUT,this.method_51);
         this.var_11.cancel_btn.addEventListener(MouseEvent.CLICK,this.method_162);
         this.var_11.continue_btn.addEventListener(MouseEvent.CLICK,this.method_310);
      }
      
      private function method_621() : void
      {
         var _loc3_:MovieClip = null;
         var _loc1_:Array = this.method_108();
         var _loc2_:Number = 0;
         var _loc4_:Number = 0;
         while(_loc4_ < _loc1_.length)
         {
            _loc3_ = new class_78();
            this.var_33.push(_loc3_);
            _loc3_.x = 0;
            _loc3_.y = _loc2_;
            _loc3_.name = "lib_" + _loc1_[_loc4_].intObjID;
            this.Stats_mc.Library_mc.inside_mc.addChild(_loc3_);
            if(_loc1_[_loc4_].intGunCost > 9)
            {
               _loc3_.inside_mc.cost_txt.x -= 0.5;
            }
            if(_loc1_[_loc4_].intLocked == 0)
            {
               _loc3_.inside_mc.name_txt.text = _loc1_[_loc4_].strName;
               _loc3_.inside_mc.cost_txt.text = _loc1_[_loc4_].intGunCost;
               if(_loc1_[_loc4_].blnAfford == false)
               {
                  _loc3_.alpha = 0.4;
               }
               else
               {
                  _loc3_.alpha = 1;
               }
               _loc3_.inside_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_179);
               _loc3_.inside_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_180);
               _loc3_.inside_mc.addEventListener(MouseEvent.MOUSE_UP,this.method_170);
            }
            else
            {
               _loc3_.inside_mc.gotoAndStop(4);
               _loc3_.inside_mc.cost_txt.text = "?";
               _loc3_.inside_mc.name_txt.text = "???";
               _loc3_.inside_mc.name_txt.alpha = 0.5;
               _loc3_.inside_mc.alpha = 0.5;
            }
            if(_loc1_[_loc4_].intObjID >= 1000 && _loc1_[_loc4_].intObjID <= 1999)
            {
               _loc3_.inside_mc.cost_txt.text = "";
               _loc3_.inside_mc.circleclip.visible = false;
            }
            _loc2_ += 20;
            _loc4_++;
         }
         var _loc6_:uint = 0;
         while(_loc6_ < _loc1_.length)
         {
            if(_loc1_[_loc6_].intLocked == 0)
            {
               if(_loc1_[_loc6_].blnAfford == true)
               {
                  var _loc5_:int = int(_loc6_);
                  break;
               }
            }
            _loc6_++;
         }
         this.var_49 = -1;
         this.method_682();
         if(this.var_33.length > 9)
         {
            this.method_477(2);
         }
         else
         {
            this.method_477(1);
         }
      }
      
      internal function method_331(param1:*) : *
      {
         if(this.SecondaryStats_mc.suggestedBox_mc.currentFrame == 1)
         {
            this.SecondaryStats_mc.ConfirmMenu_mc.gotoAndPlay(2);
            this.SecondaryStats_mc.ConfirmMenu_mc.btnYes.addEventListener(MouseEvent.CLICK,this.YesToSuggestedSettings);
            this.SecondaryStats_mc.ConfirmMenu_mc.btnNo.addEventListener(MouseEvent.CLICK,this.NoToSuggestedSettings);
         }
         else
         {
            this.var_276 = false;
            this.SecondaryStats_mc.suggestedBox_mc.gotoAndStop(1);
            this.method_393();
         }
      }
      
      public function method_670(param1:Event) : void
      {
         var _loc2_:Object = null;
         _loc2_ = param1.target;
         while(_loc2_.name.substr(_loc2_.name.length - 3,3) != "_mc")
         {
            _loc2_ = _loc2_.parent;
         }
         this.method_230();
      }
      
      private function method_542(param1:MovieClip, param2:Array) : Boolean
      {
         var _loc7_:uint = 0;
         var _loc3_:int = -1;
         var _loc4_:int = -1;
         var _loc5_:uint = 0;
         while(_loc5_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc5_].clip == param1)
            {
               _loc3_ = int(_loc5_);
               break;
            }
            _loc5_++;
         }
         var _loc6_:uint = 0;
         while(_loc6_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc6_].name == this.arrTankDetails[_loc3_].twin)
            {
               _loc4_ = int(_loc6_);
               break;
            }
            _loc6_++;
         }
         if(_loc4_ != -1)
         {
            _loc7_ = 0;
            while(_loc7_ < param2.length)
            {
               if(this.arrTankDetails[_loc4_].clip.name == param2[_loc7_].name)
               {
                  return true;
               }
               _loc7_++;
            }
         }
         return false;
      }
      
      internal function method_739() : *
      {
         this.var_217 = 1;
         this.var_237 = 1000;
         this.var_59 = 20;
         this.var_136 = 1;
         this.var_240 = 500;
         this.var_81 = 20;
         this.var_211 = 0;
         this.var_235 = 4;
         this.var_61 = 2;
         this.var_276 = true;
      }
      
      private function method_536() : void
      {
         this.tutorial.back_tut.removeEventListener(MouseEvent.MOUSE_OVER,this.method_214);
         this.tutorial.back_tut.removeEventListener(MouseEvent.MOUSE_OUT,this.method_191);
         this.tutorial.back_tut.removeEventListener(MouseEvent.MOUSE_UP,this.tutBtnUp);
         this.tutorial.next_tut.removeEventListener(MouseEvent.MOUSE_OVER,this.method_214);
         this.tutorial.next_tut.removeEventListener(MouseEvent.MOUSE_OUT,this.method_191);
         this.tutorial.next_tut.removeEventListener(MouseEvent.MOUSE_UP,this.tutBtnUp);
         this.tutorial.gotoAndStop("off");
      }
      
      private function method_753(param1:MovieClip) : Number
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc2_].clip == param1)
            {
               return this.arrTankDetails[_loc2_].radius * this.arrTankDetails[_loc2_].scale;
            }
            _loc2_++;
         }
         if(this.movDragObj1 != null)
         {
            return this.var_385;
         }
         return 0;
      }
      
      public function method_819() : DisplayObject
      {
         var _loc1_:MovieClip = new MovieClip();
         var _temp_3:* = _loc1_;
         var _temp_2:* = _loc1_;
         var _temp_1:* = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
         _loc1_.width = 135;
         _loc1_.height = 90;
         return _loc1_ as DisplayObject;
      }
      
      private function method_552(param1:MovieClip) : void
      {
         if(!this.var_127)
         {
            return;
         }
         var _loc2_:int = -1;
         var _loc6_:uint = 0;
         while(_loc6_ < this.var_7.length)
         {
            if(this.var_7[_loc6_].clip == param1)
            {
               _loc2_ = int(_loc6_);
               break;
            }
            _loc6_++;
         }
         if(_loc2_ == -1)
         {
            return;
         }
         0;
         while(0 < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[0].clip == param1)
            {
               var _loc3_:int = 0;
               break;
            }
            var _loc7_:uint = 0 + 1;
         }
      }
      
      public function method_80(param1:Number) : void
      {
         this.var_11.gotoAndStop(7);
         var _loc3_:String = "An error prevented your tank from being saved.  We apologize for the inconvenience.";
         switch(param1)
         {
            case 8000:
               _loc3_ = "BTA could not properly connect to the server.";
               break;
            case 9400:
               _loc3_ = "You cannot submit tanks with nothing in them...Thanks!";
               break;
            case 9300:
               _loc3_ = "The server is currently not accepting " + this.var_121 + " tank submissions, please try again later.  We apologize for the inconvenience.";
               break;
            case 9299:
               _loc3_ = "An invalid Tank name or Author name was used, try changing them and re-submitting";
               break;
            case 10001:
               _loc3_ = "You can not submit a tank while using the 50 gun points cheat";
               break;
            case 9200:
            default:
               _loc3_ = "An invalid tank was submitted to the server.  This includes tanks with invalid characters in the author and tank names.";
         }
         this.var_11.message_txt.text = _loc3_;
         this.var_11.return_btn.addEventListener(MouseEvent.CLICK,this.method_379);
         this.var_11.exit_btn.addEventListener(MouseEvent.CLICK,this.method_432);
      }
      
      public function SymmetricModeMouseUp(param1:Event) : void
      {
         if(this.var_127 == true)
         {
            this.var_127 = false;
            this.SymmetricMode_mc.gotoAndStop(2);
         }
         else
         {
            this.var_127 = true;
            this.SymmetricMode_mc.gotoAndStop(1);
         }
         this.method_130();
      }
      
      public function method_340(param1:MouseEvent) : void
      {
         var _loc3_:uint = 0;
         stage.removeEventListener(MouseEvent.MOUSE_UP,this.method_340);
         stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.method_368);
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_].clip == this.var_7[_loc2_].clip)
               {
                  this.arrTankDetails[_loc3_].scale = this.var_7[_loc2_].clip.scaleX;
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         if(this.method_88() == false)
         {
            this.method_57();
         }
         this.method_85();
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
      }
      
      public function method_673(param1:class_79) : void
      {
         var _loc2_:Number = NaN;
         this.refMain = param1;
         this.method_251();
         this.UpdateStatsPanel();
         if(this.refMain.blnCheatClass)
         {
            _loc2_ = 6;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.maxClass.value;
         }
         this.method_281(this.intCurrentClass,_loc2_);
         this.method_320("body_mc");
         this.objOldPlayerProfile = null;
         this.const_2 = new class_7(this.refMain.stage);
         var _loc3_:Boolean = false;
         var _loc4_:uint = 0;
         while(_loc4_ < this.refMain.arrMenuNavigation.length)
         {
            if(this.refMain.arrMenuNavigation[_loc4_] == 2 || this.refMain.arrMenuNavigation[_loc4_] == 4)
            {
               _loc3_ = true;
               break;
            }
            _loc4_++;
         }
         if(_loc3_)
         {
            this.LoadTank_mc.alpha = 0;
            this.LoadTank_mc.mouseEnabled = false;
            this.LoadTank_mc.mouseChildren = false;
         }
         this.method_500();
      }
      
      public function method_173(param1:MouseEvent) : void
      {
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.gotoAndStop(2);
         Mouse.cursor = MouseCursor.HAND;
      }
      
      private function method_156(param1:MovieClip, param2:Boolean = false, param3:MovieClip = null) : void
      {
         this.method_394(param1);
         this.var_7.push({
            "clip":param1,
            "onSide":false
         });
         if(param2 == true)
         {
            if(this.method_160(param3) == true)
            {
               this.method_334(param3);
            }
            this.method_156(param3);
            param3.alpha = 0.25;
            this.var_86.getChildByName(param3.name).alpha = 25;
         }
      }
      
      private function method_88(param1:Boolean = true) : Boolean
      {
         var _loc3_:String = null;
         var _loc2_:int = this.method_697();
         if(_loc2_ != 0)
         {
            _loc3_ = "There was an error.";
            switch(_loc2_)
            {
               case 1:
                  _loc3_ = "You don\'t have enough Bubble Points!";
                  break;
               case 2:
                  _loc3_ = "Not enough Gun Points!";
                  break;
               case 3:
                  _loc3_ = "You must be a smaller class to do that.";
                  break;
               case 4:
                  _loc3_ = "You must be a larger class to do that.";
                  break;
               case 5:
                  _loc3_ = "Your max class size is too small.";
            }
            this.alert_mc.visible = true;
            this.alert_mc.description_txt.text = _loc3_;
            this.var_165.reset();
            if(this.var_165.hasEventListener(TimerEvent.TIMER_COMPLETE) == false)
            {
               this.var_165.addEventListener(TimerEvent.TIMER_COMPLETE,this.method_250);
            }
            this.var_165.start();
            this.method_130();
            this.method_101();
            this.RevertTank();
            return true;
         }
         return false;
      }
      
      public function method_347(param1:int) : void
      {
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         _loc2_ = (this.Stats_mc.Library_mc.scroll_mc.bar_mc.y - 18) / 121;
         _loc3_ = this.Stats_mc.Library_mc.inside_mc.height - 9 * 20;
         _loc4_ = -1 * (_loc2_ * _loc3_);
         _loc5_ = -1 * Math.round(_loc4_ / 20);
         if(_loc5_ < 0)
         {
            _loc5_ = 0;
         }
         _loc5_ += param1;
         if(_loc5_ < 0)
         {
            _loc5_ = 0;
         }
         if(_loc5_ > this.var_33.length - 9)
         {
            _loc5_ = this.var_33.length - 9;
         }
         if(_loc5_ == 0)
         {
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.y = 18;
            this.ScrollJump2Percentage(0);
         }
         else
         {
            _loc6_ = this.var_33.length - 9;
            this.ScrollJump2Percentage(_loc5_ / _loc6_);
            this.Stats_mc.Library_mc.scroll_mc.bar_mc.y = 18 + _loc5_ / _loc6_ * 120;
         }
      }
      
      public function EventExitFromSharing2() : void
      {
         this.var_11.return_btn.removeEventListener(MouseEvent.CLICK,this.method_114);
         this.var_11.exit_btn.removeEventListener(MouseEvent.CLICK,this.method_110);
         removeChild(this.var_11);
         this.method_138();
      }
      
      public function method_40(param1:Event) : void
      {
         this.method_320(param1.target.name);
      }
      
      public function method_254(param1:IOErrorEvent) : void
      {
         this.method_80(8000);
      }
      
      public function LoadTanksMouseUp(param1:Event) : void
      {
         this.method_329();
         this.refMain.method_565(this.var_121);
      }
      
      public function LibScrollBarDown(param1:Event) : void
      {
         this.var_328 = true;
         stage.addEventListener(MouseEvent.MOUSE_MOVE,this.method_427);
         stage.addEventListener(MouseEvent.MOUSE_UP,this.LibScrollBarUp);
         this.method_429();
      }
      
      internal function method_238(param1:*) : *
      {
         this.Stats_mc.gotoAndStop(2);
         this.SecondaryStats_mc.gotoAndStop(2);
         this.SecondaryStats_mc.removeEventListener(MouseEvent.CLICK,this.method_238);
         this.Stats_mc.addEventListener(MouseEvent.CLICK,this.method_206);
         this.SecondaryStats_mc.LifeCurrent_txt.text = this.var_59;
         this.SecondaryStats_mc.LifeMax_txt.text = this.var_237;
         this.SecondaryStats_mc.BubblesReturnedCurrent_txt.text = this.var_81;
         this.SecondaryStats_mc.BubblesReturnedMax_txt.text = this.var_240;
         this.SecondaryStats_mc.SpeedCurrent_txt.text = this.var_61;
         this.SecondaryStats_mc.SpeedMax_txt.text = this.var_235;
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_173);
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_187);
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.method_184);
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_220);
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_201);
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.method_228);
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OVER,this.method_222);
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_OUT,this.method_213);
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.method_218);
         this.SecondaryStats_mc.suggestedBox_mc.addEventListener(MouseEvent.CLICK,this.method_331);
         this.method_243();
         this.method_295();
         this.method_275();
         if(this.var_276)
         {
            this.SecondaryStats_mc.suggestedBox_mc.gotoAndStop(2);
            this.UseSuggestedSettings();
            this.method_236();
         }
         else
         {
            this.SecondaryStats_mc.suggestedBox_mc.gotoAndStop(1);
            this.method_393();
         }
      }
      
      public function ButtonIndex2LibraryIndex(param1:int) : int
      {
         var _loc2_:String = this.var_33[param1].name;
         var _loc3_:Array = this.method_108();
         var _loc4_:Number = 0;
         while(_loc4_ < _loc3_.length)
         {
            if("lib_" + _loc3_[_loc4_].intObjID == _loc2_)
            {
               return _loc4_;
            }
            _loc4_++;
         }
         return -1;
      }
      
      internal function UpdateSecondaryStatsPanel() : void
      {
         this.SecondaryStats_mc.LifeCurrent_txt.text = this.var_59;
         this.SecondaryStats_mc.LifeMax_txt.text = this.var_237;
         this.SecondaryStats_mc.BubblesReturnedCurrent_txt.text = this.var_81;
         this.SecondaryStats_mc.BubblesReturnedMax_txt.text = this.var_240;
         this.SecondaryStats_mc.SpeedCurrent_txt.text = this.var_61;
         this.SecondaryStats_mc.SpeedMax_txt.text = this.var_235;
      }
      
      public function method_350(param1:MouseEvent) : void
      {
         this.Resize_mc.resizehandle_mc.gotoAndStop(1);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      public function method_425(param1:Event) : void
      {
         param1.target.gotoAndStop(3);
         Mouse.cursor = MouseCursor.HAND;
      }
      
      public function method_400(param1:MouseEvent) : void
      {
         stage.addEventListener(MouseEvent.MOUSE_UP,this.method_340);
         stage.addEventListener(MouseEvent.MOUSE_MOVE,this.method_368);
      }
      
      internal function MoveLeft(param1:*) : void
      {
         var _loc3_:uint = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_7.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc3_].clip == this.var_7[_loc2_].clip)
               {
                  --this.arrTankDetails[_loc3_].clip.x;
                  --this.arrTankDetails[_loc3_].x;
                  break;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
         this.method_85();
         this.method_89();
      }
      
      internal function NoToSuggestedSettings(param1:*) : *
      {
         this.SecondaryStats_mc.ConfirmMenu_mc.btnYes.removeEventListener(MouseEvent.CLICK,this.YesToSuggestedSettings);
         this.SecondaryStats_mc.ConfirmMenu_mc.btnNo.removeEventListener(MouseEvent.CLICK,this.NoToSuggestedSettings);
         this.SecondaryStats_mc.ConfirmMenu_mc.play();
      }
      
      public function method_433(param1:FocusEvent) : void
      {
         if(this.var_11.author_txt.text == "")
         {
            this.var_11.author_txt.text = "Type your name...";
         }
      }
      
      private function method_185() : void
      {
         while(this.var_86.numChildren > 0)
         {
            Sprite(this.var_86.getChildAt(0)).graphics.clear();
            this.var_86.removeChildAt(0);
         }
      }
      
      private function method_675(param1:MouseEvent) : void
      {
         this.var_91.x = param1.stageX;
         this.var_91.y = param1.stageY;
         this.var_91 = this.var_75.globalToLocal(this.var_91);
      }
      
      private function method_367(param1:Event) : *
      {
         var _loc2_:Array = null;
         var _loc3_:GlowFilter = null;
         if(this.Stats_mc != null)
         {
            if(this.Stats_mc.bubblesLeft_txt != null)
            {
               _loc2_ = new Array();
               this.var_359 += this.var_200;
               _loc3_ = new GlowFilter(4294967295,1,8,8,this.var_359,3);
               _loc2_.push(_loc3_);
               this.Stats_mc.bubblesLeft_txt.filters = _loc2_;
            }
            if(this.Stats_mc.gunPoints_txt != null)
            {
               _loc2_ = new Array();
               this.var_394 += this.var_200;
               _loc3_ = new GlowFilter(4294967295,1,8,8,this.var_394,3);
               _loc2_.push(_loc3_);
               this.Stats_mc.gunPoints_txt.filters = _loc2_;
            }
            if(this.Stats_mc.class_txt != null)
            {
               _loc2_ = new Array();
               this.var_395 += this.var_200;
               _loc3_ = new GlowFilter(4294967295,1,8,8,this.var_395,3);
               _loc2_.push(_loc3_);
               this.Stats_mc.class_txt.filters = _loc2_;
            }
         }
      }
      
      public function method_405(param1:MouseEvent) : void
      {
         var _loc2_:Point = new Point(param1.stageX,param1.stageY);
         _loc2_ = this.SecondaryStats_mc.LifeSlider_mc.globalToLocal(_loc2_);
         var _loc3_:Number = _loc2_.x;
         if(_loc3_ < -55)
         {
            _loc3_ = -55;
         }
         if(_loc3_ > 55)
         {
            _loc3_ = 55;
         }
         this.SecondaryStats_mc.LifeSlider_mc.resizehandle_mc.x = _loc3_;
         var _loc4_:Number = this.var_237 - this.var_217;
         this.var_59 = this.var_217 + int(_loc4_ * ((_loc3_ + 55) / 110) * ((_loc3_ + 55) / 110));
         this.UpdateSecondaryStatsPanel();
      }
      
      public function LibScrollBarUp(param1:Event) : void
      {
         this.var_328 = false;
         stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.method_427);
         stage.removeEventListener(MouseEvent.MOUSE_UP,this.LibScrollBarUp);
         this.method_251();
      }
      
      private function method_234() : void
      {
         var _loc2_:int = 0;
         var _loc3_:uint = 0;
         var _loc4_:int = 0;
         var _loc5_:uint = 0;
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_7.length)
         {
            _loc2_ = -1;
            _loc3_ = 0;
            while(_loc3_ < this.arrTankDetails.length)
            {
               if(this.var_7[_loc1_].clip == this.arrTankDetails[_loc3_].clip)
               {
                  _loc2_ = int(_loc3_);
                  break;
               }
               _loc3_++;
            }
            if(_loc2_ != -1)
            {
               if(this.arrTankDetails[_loc2_].twin != "")
               {
                  if(this.method_160(MovieClip(this.movTank.getChildByName(this.arrTankDetails[_loc2_].twin))) == false)
                  {
                     _loc4_ = -1;
                     _loc5_ = 0;
                     while(_loc5_ < this.arrTankDetails.length)
                     {
                        if(this.arrTankDetails[_loc2_].twin == this.arrTankDetails[_loc5_].name)
                        {
                           _loc4_ = int(_loc5_);
                           break;
                        }
                        _loc5_++;
                     }
                     if(_loc4_ != -1)
                     {
                        this.arrTankDetails[_loc4_].twin = "";
                     }
                     this.arrTankDetails[_loc2_].twin = "";
                  }
               }
            }
            _loc1_++;
         }
      }
      
      private function method_381(param1:MovieClip) : void
      {
         0;
         0;
         var _loc2_:int = -1;
         var _loc4_:int = -1;
         var _loc6_:uint = 0;
         while(_loc6_ < this.var_7.length)
         {
            if(this.var_7[_loc6_].clip == param1)
            {
               _loc2_ = int(_loc6_);
               break;
            }
            _loc6_++;
         }
         if(_loc2_ == -1)
         {
            return;
         }
         var _loc7_:uint = 0;
         while(_loc7_ < this.arrTankDetails.length)
         {
            if(this.arrTankDetails[_loc7_].clip == param1)
            {
               _loc4_ = int(_loc7_);
               break;
            }
            _loc7_++;
         }
         if(this.arrTankDetails[_loc4_].twin == "")
         {
            return;
         }
         var _loc8_:uint = 0;
         while(_loc8_ < this.var_7.length)
         {
            if(this.var_7[_loc8_].clip.name == this.arrTankDetails[_loc4_].twin)
            {
               var _loc3_:int = int(_loc8_);
               break;
            }
            _loc8_++;
         }
      }
      
      private function method_802() : void
      {
         var _loc1_:uint = 0;
         _loc1_ = 0;
         while(_loc1_ < this.var_7.length)
         {
            _loc1_++;
         }
      }
      
      public function method_317(param1:MouseEvent) : void
      {
         stage.removeEventListener(MouseEvent.MOUSE_UP,this.method_317);
         stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.method_328);
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateSecondaryStatsPanel();
      }
      
      private function method_682() : void
      {
         this.method_303();
         this.var_156 = new class_84();
         this.Stats_mc.Library_mc.viewer_mc.addChild(this.var_156);
         try
         {
            this.Stats_mc.Library_mc.clickArea_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.StartLibraryDrag);
         }
         catch(e:Error)
         {
         }
      }
      
      private function method_251() : void
      {
         if(this.var_75 == null)
         {
            this.var_75 = new Sprite();
            this.var_75.x = this.rings_mc.x;
            this.var_75.y = this.rings_mc.y;
            addChild(this.var_75);
            this.var_86 = new Sprite();
            this.var_86.x = this.rings_mc.x;
            this.var_86.y = this.rings_mc.y;
            addChild(this.var_86);
         }
         this.select_mc.addEventListener(MouseEvent.MOUSE_DOWN,this.method_315);
         stage.addEventListener(MouseEvent.MOUSE_UP,this.method_409);
         this.select_mc.addEventListener(MouseEvent.CLICK,this.method_456);
         this.var_300 = false;
         this.var_91 = new Point(0,0);
      }
      
      public function method_372(param1:FocusEvent) : void
      {
         if(this.var_11.author_txt.text == "Type your name...")
         {
            this.var_11.author_txt.text = "";
         }
      }
      
      private function method_214(param1:MouseEvent) : void
      {
         param1.target.gotoAndStop("on");
      }
      
      internal function UseSuggestedSettings() : void
      {
         this.var_59 = Math.round((this.var_167 / 2 + this.var_108 * 3) * this.intCurrentClass);
         var _loc1_:Number = 0.0005 * this.var_59;
         if(_loc1_ > 0.1)
         {
            _loc1_ = 0.1;
         }
         this.var_81 = Math.round(this.var_59 * (0.3 * ((7 - this.intCurrentClass) / 6) + 0.005 * this.var_108 + 0.1 - _loc1_));
         if(this.var_81 < this.var_136)
         {
            this.var_81 = this.var_136;
         }
         this.var_61 = 3 * ((6 - this.intCurrentClass) / 6) + 0.5 - this.var_108 * 0.1;
         if(this.var_61 < 0.1)
         {
            this.var_61 = 0.1;
         }
         this.var_61 = Math.floor(this.var_61 * 100) / 100;
         this.UpdateSecondaryStatsPanel();
         this.method_295();
         this.method_243();
         this.method_275();
      }
      
      private function method_145(param1:MovieClip) : void
      {
         if(param1.filters.length > 0)
         {
            return;
         }
         param1.filters = [this.var_486];
      }
      
      public function method_213(param1:MouseEvent) : void
      {
         this.SecondaryStats_mc.SpeedSlider_mc.resizehandle_mc.gotoAndStop(1);
         Mouse.cursor = MouseCursor.AUTO;
      }
      
      private function tutBtnUp(param1:MouseEvent) : void
      {
         if(param1.target.name == "back_tut")
         {
            this.tutorial.prevFrame();
         }
         else if(param1.target.name == "next_tut")
         {
            if(this.tutorial.currentFrame == this.tutorial.totalFrames)
            {
               this.method_536();
            }
            else
            {
               this.tutorial.nextFrame();
            }
         }
      }
      
      private function method_429() : void
      {
         this.select_mc.removeEventListener(MouseEvent.MOUSE_DOWN,this.method_315);
         stage.removeEventListener(MouseEvent.MOUSE_UP,this.method_409);
         this.select_mc.removeEventListener(MouseEvent.CLICK,this.method_456);
      }
      
      private function method_10() : void
      {
         this.SymmetricMode_mc.removeEventListener(MouseEvent.CLICK,this.SymmetricModeMouseUp);
         this.SymmetricMode_mc.inside_mc.gotoAndStop(2);
         this.LoadTank_mc.removeEventListener(MouseEvent.CLICK,this.LoadTanksMouseUp);
         this.LoadTank_mc.gotoAndStop(2);
         this.SaveExit_mc.removeEventListener(MouseEvent.CLICK,this.SaveExitMouseUp);
         this.SaveExit_mc.gotoAndStop(2);
         this.Exit_mc.removeEventListener(MouseEvent.CLICK,this.ExitMouseUp);
         this.Exit_mc.gotoAndStop(2);
      }
      
      public function method_358(param1:MouseEvent) : void
      {
         var _loc5_:uint = 0;
         var _loc2_:Array = new Array();
         var _loc3_:uint = 0;
         while(_loc3_ < this.var_7.length)
         {
            _loc5_ = 0;
            while(_loc5_ < this.arrTankDetails.length)
            {
               if(this.arrTankDetails[_loc5_].clip == this.var_7[_loc3_].clip)
               {
                  _loc2_.push(this.arrTankDetails[_loc5_]);
                  this.arrTankDetails.splice(_loc5_,1);
                  break;
               }
               _loc5_++;
            }
            _loc3_++;
         }
         var _loc4_:* = int(_loc2_.length - 1);
         while(_loc4_ >= 0)
         {
            this.movTank.setChildIndex(_loc2_[_loc4_].clip,0);
            _loc4_--;
         }
         this.arrTankDetails = _loc2_.concat(this.arrTankDetails);
         this.method_57();
      }
      
      private function method_680(param1:MouseEvent) : void
      {
         null;
         var _loc3_:* = int(this.arrTankDetails.length - 1);
         while(_loc3_ >= 0)
         {
            if(this.arrTankDetails[_loc3_].clip.hitTestPoint(param1.stageX,param1.stageY,true) == true)
            {
               if(this.method_160(this.arrTankDetails[_loc3_].clip) == false)
               {
                  if(this.arrTankDetails[_loc3_].twin != "" && this.var_127 == true)
                  {
                     this.method_156(this.arrTankDetails[_loc3_].clip,true,MovieClip(this.movTank.getChildByName(this.arrTankDetails[_loc3_].twin)));
                  }
                  else
                  {
                     this.method_156(this.arrTankDetails[_loc3_].clip,false);
                  }
               }
               else
               {
                  if(this.arrTankDetails[_loc3_].twin != "" && this.var_127 == true)
                  {
                     var _loc4_:MovieClip = MovieClip(this.movTank.getChildByName(this.arrTankDetails[_loc3_].twin));
                     if(_loc4_.alpha == 0.25)
                     {
                        null.alpha = 1;
                     }
                  }
                  this.method_334(this.arrTankDetails[_loc3_].clip,false);
               }
               var _loc2_:Boolean = true;
               break;
            }
            _loc3_--;
         }
         this.method_130();
         if(this.var_7.length > 0)
         {
            this.method_291();
         }
         else
         {
            this.method_101();
         }
      }
      
      private function method_507() : void
      {
         var _loc1_:Array = null;
         _loc1_ = new Array();
         _loc1_ = _loc1_.concat([0.3,0.6,0.1,0,0]);
         _loc1_ = _loc1_.concat([0.3,0.6,0.1,0,0]);
         _loc1_ = _loc1_.concat([0.3,0.6,0.1,0,0]);
         _loc1_ = _loc1_.concat([0,0,0,1,0]);
         this.var_486 = new ColorMatrixFilter(_loc1_);
      }
      
      internal function method_218(param1:MouseEvent) : void
      {
         stage.addEventListener(MouseEvent.MOUSE_UP,this.method_411);
         stage.addEventListener(MouseEvent.MOUSE_MOVE,this.method_403);
      }
      
      private function method_557() : void
      {
         var _loc2_:* = undefined;
         if(this.var_92.length <= 1)
         {
            return;
         }
         this.method_204();
         var _loc1_:int = this.var_92.length - 1;
         while(this.arrTankDetails.length > 0)
         {
            _loc2_ = this.arrTankDetails.pop();
            _loc2_ = null;
         }
         this.arrTankDetails.length = 0;
         this.method_305(_loc1_ - 1);
         _loc2_ = this.var_92.pop();
         _loc2_ = null;
         if(this.var_92.length <= 1)
         {
            this.CloseUndoButton();
         }
         this.method_99();
         this.UpdateClass();
         this.UpdateStatsPanel();
         this.UpdateLibraryButtonsForAffordability();
      }
      
      private function method_305(param1:int) : void
      {
         var _loc3_:MovieClip = null;
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_92[param1].length)
         {
            this.arrTankDetails.push({
               "name":this.var_92[param1][_loc2_].name,
               "type":this.var_92[param1][_loc2_].type,
               "twin":this.var_92[param1][_loc2_].twin,
               "clip":null,
               "x":this.var_92[param1][_loc2_].x,
               "y":this.var_92[param1][_loc2_].y,
               "rotation":this.var_92[param1][_loc2_].rotation,
               "scale":this.var_92[param1][_loc2_].scale,
               "radius":this.var_92[param1][_loc2_].radius
            });
            _loc2_++;
         }
         0;
         while(0 < this.arrTankDetails.length)
         {
            _loc3_ = this.objGameLibrary.method_123(this.arrTankDetails[0].type);
            _loc3_.x = this.arrTankDetails[0].x;
            _loc3_.y = this.arrTankDetails[0].y;
            _loc3_.scaleX = _loc3_.scaleY = this.arrTankDetails[0].scale;
            _loc3_.rotation = this.arrTankDetails[0].rotation;
            _loc3_.intObjID = this.arrTankDetails[0].type;
            _loc3_.name = this.arrTankDetails[0].name;
            this.arrTankDetails[0].clip = _loc3_;
            this.movTank.addChild(_loc3_);
            var _loc4_:uint = 0 + 1;
         }
      }
      
      private function method_250(param1:TimerEvent) : void
      {
         this.var_165.removeEventListener(TimerEvent.TIMER_COMPLETE,this.method_250);
         this.var_165.stop();
         if(this.alert_mc.hasEventListener(Event.ENTER_FRAME) == false)
         {
            this.alert_mc.addEventListener(Event.ENTER_FRAME,this.method_332);
         }
      }
      
      private function method_570(param1:MouseEvent) : void
      {
         var _loc2_:Point = new Point(0,0);
         var _loc3_:Number = 0;
         var _loc4_:Number = 0;
         var _loc5_:Number = 0;
         var _loc6_:Boolean = false;
         var _loc7_:uint = 0;
         while(_loc7_ < this.arrTankDetails.length)
         {
            _loc2_.x = this.arrTankDetails[_loc7_].clip.x;
            _loc2_.y = this.arrTankDetails[_loc7_].clip.y;
            _loc4_ = Number(this.arrTankDetails[_loc7_].radius);
            _loc3_ = Number(this.arrTankDetails[_loc7_].scale);
            _loc5_ = _loc4_ * _loc3_;
            _loc2_ = this.movTank.localToGlobal(_loc2_);
            if(Boolean(this.arrTankDetails[_loc7_].clip.hitTestPoint(param1.stageX,param1.stageY,true) || this.var_75.hitTestPoint(_loc2_.x,_loc2_.y,false) == true || this.var_75.hitTestPoint(_loc2_.x + _loc5_,_loc2_.y,false) == true || this.var_75.hitTestPoint(_loc2_.x - _loc5_,_loc2_.y,false) == true || this.var_75.hitTestPoint(_loc2_.x,_loc2_.y + _loc5_,false) == true || this.var_75.hitTestPoint(_loc2_.x,_loc2_.y - _loc5_,false) == true || this.var_75.hitTestPoint(_loc2_.x + _loc5_ / 2,_loc2_.y,false) == true || this.var_75.hitTestPoint(_loc2_.x - _loc5_ / 2,_loc2_.y,false) == true) || Boolean(this.var_75.hitTestPoint(_loc2_.x,_loc2_.y + _loc5_ / 2,false) == true) || this.var_75.hitTestPoint(_loc2_.x,_loc2_.y + _loc5_ / 2,false) == true)
            {
               if(_loc6_ != true)
               {
                  _loc6_ = true;
               }
               if(this.method_160(this.arrTankDetails[_loc7_].clip) == false)
               {
                  if(this.arrTankDetails[_loc7_].twin != "" && this.var_127 == true)
                  {
                     this.method_156(this.arrTankDetails[_loc7_].clip,true,MovieClip(this.movTank.getChildByName(this.arrTankDetails[_loc7_].twin)));
                  }
                  else
                  {
                     this.method_156(this.arrTankDetails[_loc7_].clip,false);
                  }
               }
            }
            _loc7_++;
         }
         if(!_loc6_)
         {
            this.method_130();
         }
         this.var_75.graphics.clear();
         this.method_89();
         if(this.var_7.length > 0)
         {
            this.method_291();
         }
         else
         {
            this.method_101();
         }
      }
      
      private function Cheat1() : void
      {
         this.objPlayerProfileStorage = new PlayerProfile(null);
         this.objPlayerProfileStorage.gunPointsMax.method_21(2);
         this.objPlayerProfileStorage.bubblePointsMax.method_21(15);
         this.objPlayerProfileStorage.maxClass.method_21(1);
         this.objPlayerProfileStorage.arrUnlockedObjects = new Array(1001,1002,1003,1004,2001,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,3001,3002,3004,3005,3006,3007,3008,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016);
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer1Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer1Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer2Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer2Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer3Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer3Profile;
         }
         this.refMain.objCurrentPlayer = this.objPlayerProfileStorage;
         this.UpdateStatsPanel();
      }
      
      private function Cheat2() : void
      {
         this.objPlayerProfileStorage = new PlayerProfile(null);
         this.objPlayerProfileStorage.gunPointsMax.method_21(3);
         this.objPlayerProfileStorage.bubblePointsMax.method_21(30);
         this.objPlayerProfileStorage.maxClass.method_21(2);
         this.objPlayerProfileStorage.arrUnlockedObjects = new Array(1001,1002,1003,1004,2001,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,3001,3002,3004,3005,3006,3007,3008,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016);
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer1Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer1Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer2Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer2Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer3Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer3Profile;
         }
         this.refMain.objCurrentPlayer = this.objPlayerProfileStorage;
         this.UpdateStatsPanel();
      }
      
      private function Cheat3() : void
      {
         this.objPlayerProfileStorage = new PlayerProfile(null);
         this.objPlayerProfileStorage.gunPointsMax.method_21(4);
         this.objPlayerProfileStorage.bubblePointsMax.method_21(50);
         this.objPlayerProfileStorage.maxClass.method_21(3);
         this.objPlayerProfileStorage.arrUnlockedObjects = new Array(1001,1002,1003,1004,2001,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,3001,3002,3004,3005,3006,3007,3008,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016);
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer1Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer1Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer2Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer2Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer3Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer3Profile;
         }
         this.refMain.objCurrentPlayer = this.objPlayerProfileStorage;
         this.UpdateStatsPanel();
      }
      
      private function Cheat4() : void
      {
         this.objPlayerProfileStorage = new PlayerProfile(null);
         this.objPlayerProfileStorage.gunPointsMax.method_21(5);
         this.objPlayerProfileStorage.bubblePointsMax.method_21(75);
         this.objPlayerProfileStorage.maxClass.method_21(4);
         this.objPlayerProfileStorage.arrUnlockedObjects = new Array(1001,1002,1003,1004,2001,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,3001,3002,3004,3005,3006,3007,3008,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016);
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer1Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer1Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer2Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer2Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer3Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer3Profile;
         }
         this.refMain.objCurrentPlayer = this.objPlayerProfileStorage;
         this.UpdateStatsPanel();
      }
      
      private function Cheat5() : void
      {
         this.objPlayerProfileStorage = new PlayerProfile(null);
         this.objPlayerProfileStorage.gunPointsMax.method_21(6);
         this.objPlayerProfileStorage.bubblePointsMax.method_21(100);
         this.objPlayerProfileStorage.maxClass.method_21(5);
         this.objPlayerProfileStorage.arrUnlockedObjects = new Array(1001,1002,1003,1004,2001,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,3001,3002,3004,3005,3006,3007,3008,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016);
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer1Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer1Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer2Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer2Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer3Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer3Profile;
         }
         this.refMain.objCurrentPlayer = this.objPlayerProfileStorage;
         this.UpdateStatsPanel();
      }
      
      public function method_315(param1:MouseEvent) : void
      {
         if(this.method_530(param1) == false)
         {
            stage.addEventListener(MouseEvent.MOUSE_MOVE,this.method_338);
            this.method_482(param1);
         }
         else
         {
            stage.addEventListener(MouseEvent.MOUSE_MOVE,this.method_311);
            this.method_675(param1);
         }
         if(this.var_121 == "Enemy")
         {
            if(this.Stats_mc.currentFrame == 2)
            {
               this.method_206(param1);
            }
         }
      }
      
      private function method_545() : Number
      {
         var _loc1_:MovieClip = null;
         var _loc2_:Number = 0;
         if(this.refMain.blnCheatClass)
         {
            _loc2_ = 6;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.maxClass.value;
         }
         switch(_loc2_)
         {
            case 1:
               _loc1_ = this.rings_mc.ring1_mc;
               break;
            case 2:
               _loc1_ = this.rings_mc.ring2_mc;
               break;
            case 3:
               _loc1_ = this.rings_mc.ring3_mc;
               break;
            case 4:
               _loc1_ = this.rings_mc.ring4_mc;
               break;
            case 5:
               _loc1_ = this.rings_mc.ring5_mc;
               break;
            case 6:
               _loc1_ = this.rings_mc;
         }
         return _loc1_.width / 2;
      }
      
      private function Cheat6() : void
      {
         this.objPlayerProfileStorage = new PlayerProfile(null);
         this.objPlayerProfileStorage.gunPointsMax.method_21(7);
         this.objPlayerProfileStorage.bubblePointsMax.method_21(100);
         this.objPlayerProfileStorage.maxClass.method_21(6);
         this.objPlayerProfileStorage.arrUnlockedObjects = new Array(1001,1002,1003,1004,2001,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,3001,3002,3004,3005,3006,3007,3008,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016);
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer1Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer1Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer2Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer2Profile;
         }
         if(this.refMain.objCurrentPlayer == this.refMain.objPlayer3Profile)
         {
            this.objOldPlayerProfile = this.refMain.objPlayer3Profile;
         }
         this.refMain.objCurrentPlayer = this.objPlayerProfileStorage;
         this.UpdateStatsPanel();
      }
      
      public function method_409(param1:MouseEvent) : void
      {
         var var_40:MouseEvent = param1;
         try
         {
            stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.method_338);
         }
         catch(e:Error)
         {
         }
         try
         {
            stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.method_311);
         }
         catch(e:Error)
         {
         }
         if(this.var_300 == true)
         {
            this.method_570(var_40);
         }
         if(this.var_292 == true)
         {
            this.StopDrag(var_40);
         }
      }
      
      public function method_374(param1:MouseEvent) : void
      {
         this.method_557();
      }
      
      public function method_220(param1:MouseEvent) : void
      {
         this.SecondaryStats_mc.BubblesReturnedSlider_mc.resizehandle_mc.gotoAndStop(2);
         Mouse.cursor = MouseCursor.HAND;
      }
      
      internal function method_184(param1:MouseEvent) : void
      {
         stage.addEventListener(MouseEvent.MOUSE_UP,this.method_342);
         stage.addEventListener(MouseEvent.MOUSE_MOVE,this.method_405);
      }
      
      public function method_280(param1:HTTPStatusEvent) : void
      {
      }
      
      private function method_697() : int
      {
         this.method_99();
         var _loc1_:Number = 0;
         var _loc2_:Number = 0;
         var _loc3_:Number = 0;
         if(this.refMain.var_132)
         {
            _loc1_ = 100;
         }
         else
         {
            _loc1_ = this.refMain.objCurrentPlayer.bubblePointsMax.value;
         }
         if(this.refMain.blnCheatClass)
         {
            _loc2_ = 100;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.maxClass.method_29();
         }
         var _loc4_:int = _loc1_ - this.var_167;
         if(this.refMain.var_139)
         {
            _loc3_ = 12;
         }
         else
         {
            _loc3_ = this.refMain.objCurrentPlayer.gunPointsMax.value;
         }
         if(this.var_121 == "Enemy")
         {
            _loc3_ = Math.floor(_loc3_ * 1.5);
         }
         if(this.refMain.bln50GunPoints)
         {
            _loc3_ = 50;
         }
         var _loc5_:int = _loc3_ - this.var_108;
         if(_loc4_ < 0)
         {
            return 1;
         }
         if(_loc5_ < 0)
         {
            return 2;
         }
         this.UpdateClass();
         if(this.intCurrentClass > _loc2_)
         {
            return 5;
         }
         var _loc6_:* = int(this.arrTankDetails.length - 1);
         while(_loc6_ >= 0)
         {
            if(this.objGameLibrary.IsObjectAWeapon(this.arrTankDetails[_loc6_].type) == true)
            {
               if(this.objGameLibrary.method_149(this.arrTankDetails[_loc6_].type) != 0)
               {
                  if(this.objGameLibrary.method_240(this.arrTankDetails[_loc6_].type,true) == true)
                  {
                     if(this.intCurrentClass > this.objGameLibrary.method_149(this.arrTankDetails[_loc6_].type,true))
                     {
                        return 3;
                     }
                  }
                  else if(this.intCurrentClass < this.objGameLibrary.method_149(this.arrTankDetails[_loc6_].type,true))
                  {
                     return 4;
                  }
               }
            }
            _loc6_--;
         }
         return 0;
      }
      
      private function method_134(param1:MovieClip) : Boolean
      {
         var _loc4_:Point = null;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc7_:Number = NaN;
         var _loc2_:Number = 0;
         if(this.refMain.blnCheatClass)
         {
            _loc2_ = 6;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.maxClass.value;
         }
         var _loc3_:Number = this.method_545();
         if(_loc2_ == 6)
         {
            _loc4_ = new Point(param1.x,param1.y);
            _loc4_ = this.movTank.localToGlobal(_loc4_);
            _loc4_ = globalToLocal(_loc4_);
            if(this.select_mc.hitTestPoint(_loc4_.x,_loc4_.y,false) == true)
            {
               return true;
            }
            return false;
         }
         _loc5_ = param1.x * param1.x;
         _loc6_ = param1.y * param1.y;
         _loc7_ = Math.sqrt(_loc5_ + _loc6_);
         if(this.IsClipAWeapon(param1) == true)
         {
            if(_loc7_ > _loc3_)
            {
               return false;
            }
         }
         else if(_loc7_ + this.method_753(param1) > _loc3_)
         {
            return false;
         }
         return true;
      }
      
      internal function EndMotionLeft(param1:*) : void
      {
         if(this.Left_mc.hasEventListener(Event.ENTER_FRAME))
         {
            this.Left_mc.removeEventListener(Event.ENTER_FRAME,this.MoveLeft);
         }
         if(this.method_88() == false)
         {
            this.method_57();
         }
      }
   }
}

