package
{
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.*;
   import flash.geom.Point;
   import flash.net.*;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol1388")]
   public class ArenaCreator extends MovieClip
   {
      
      public var btnDelete1_mc:MovieClip;
      
      public var currentArena:ArenaData;
      
      private var var_117:class_96;
      
      public var btnQuickTank10_mc:MovieClip;
      
      public var txtNumber2_mc:MovieClip;
      
      public var btnQuickTank3_mc:MovieClip;
      
      private var var_8:class_3;
      
      public var txtTank1_txt:TextField;
      
      public var btnTank2_mc:MovieClip;
      
      public var txtTank3_txt:TextField;
      
      public var txtButtonRollOverSetting_txt:TextField;
      
      public var btnDelete4_mc:MovieClip;
      
      private var var_41:Array;
      
      private var var_16:Array;
      
      public var btnMinus2_mc:MovieClip;
      
      private var var_103:Array;
      
      public var btnLeftArrow_mc:MovieClip;
      
      public var btnQuickTank6_mc:MovieClip;
      
      public var btnAdd3_mc:MovieClip;
      
      private var var_437:Sprite;
      
      private var var_209:class_5;
      
      private var var_10:Array;
      
      public var btnMoveBblFieldRight_mc:MovieClip;
      
      private var objTutorialButtonControl:class_3;
      
      public var btnQuickTank1_mc:MovieClip;
      
      private var funCallBackButton:Function;
      
      public var btnDelete2_mc:MovieClip;
      
      private var arrBubbleFields:Array;
      
      public var btnQuickTank9_mc:MovieClip;
      
      public var complexity_mc:MovieClip;
      
      private var var_531:Boolean;
      
      public var txtNumber3_mc:MovieClip;
      
      public var btnQuickTank4_mc:MovieClip;
      
      private var var_77:Array;
      
      public var btnSubmitArena_mc:MovieClip;
      
      private var var_192:Boolean;
      
      public var btnTank3_mc:MovieClip;
      
      public var btnAdd1_mc:MovieClip;
      
      private var var_27:Array;
      
      public var btnMinus3_mc:MovieClip;
      
      public var btnQuickTank7_mc:MovieClip;
      
      public var var_19:MovieClip;
      
      public var ComplexityRollOver_mc:MovieClip;
      
      public var txtTank2_txt:TextField;
      
      public var txtTank4_txt:TextField;
      
      public var btnAdd4_mc:MovieClip;
      
      public var btnMoveBblFieldLeft_mc:MovieClip;
      
      private var ShareArena_mc:ShareArena;
      
      public var txtNumber1_mc:MovieClip;
      
      public var btnQuickTank2_mc:MovieClip;
      
      public var btnDelete3_mc:MovieClip;
      
      public var btnTank1_mc:MovieClip;
      
      public var btnRightArrow_mc:MovieClip;
      
      public var btnMinus1_mc:MovieClip;
      
      public var txtNumber4_mc:MovieClip;
      
      public var btnQuickTank5_mc:MovieClip;
      
      public var BubbleFieldLocations_mc:MovieClip;
      
      public var btnTank4_mc:MovieClip;
      
      public var btnAdd2_mc:MovieClip;
      
      private var refMain:class_79;
      
      public var var_5:int;
      
      public var btnBack_mc:MovieClip;
      
      public var btnMinus4_mc:MovieClip;
      
      public var btnQuickTank8_mc:MovieClip;
      
      public function ArenaCreator(param1:Boolean = false, param2:class_79 = null, param3:Function = null)
      {
         var _loc4_:ArenaCreatorBubblefield = null;
         var _loc5_:uint = 0;
         super();
         addFrameScript(0,this.frame1);
         if(param1 == true)
         {
            this.var_19 = null;
            this.refMain = param2;
            this.funCallBackButton = param3;
            this.var_192 = false;
            this.var_531 = false;
            this.var_16 = new Array();
            this.arrBubbleFields = new Array();
            this.var_27 = new Array();
            this.var_103 = new Array();
            this.var_41 = new Array();
            this.var_77 = new Array();
            this.var_10 = new Array();
            this.var_437 = new Sprite();
            this.var_209 = new class_5(this.refMain);
            this.var_209.method_119("mainEffects",this.var_437);
            this.var_5 = 0;
            this.var_16.push(new Point(this.BubbleFieldLocations_mc.BubbleFieldLocationN5_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocationN5_mc.y));
            this.var_16.push(new Point(this.BubbleFieldLocations_mc.BubbleFieldLocationN4_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocationN4_mc.y));
            this.var_16.push(new Point(this.BubbleFieldLocations_mc.BubbleFieldLocationN3_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocationN3_mc.y));
            this.var_16.push(new Point(this.BubbleFieldLocations_mc.BubbleFieldLocationN2_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocationN2_mc.y));
            this.var_16.push(new Point(this.BubbleFieldLocations_mc.BubbleFieldLocationN1_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocationN1_mc.y));
            this.var_16.push(new Point(this.BubbleFieldLocations_mc.BubbleFieldLocation0_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocation0_mc.y));
            this.var_16.push(new Point(this.BubbleFieldLocations_mc.BubbleFieldLocation1_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocation1_mc.y));
            this.var_16.push(new Point(this.BubbleFieldLocations_mc.BubbleFieldLocation2_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocation2_mc.y));
            this.var_16.push(new Point(this.BubbleFieldLocations_mc.BubbleFieldLocation3_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocation3_mc.y));
            this.var_16.push(new Point(this.BubbleFieldLocations_mc.BubbleFieldLocation4_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocation4_mc.y));
            this.var_16.push(new Point(this.BubbleFieldLocations_mc.BubbleFieldLocation5_mc.x,this.BubbleFieldLocations_mc.BubbleFieldLocation5_mc.y));
            this.var_27.push(this.btnQuickTank1_mc);
            this.var_27.push(this.btnQuickTank2_mc);
            this.var_27.push(this.btnQuickTank3_mc);
            this.var_27.push(this.btnQuickTank4_mc);
            this.var_27.push(this.btnQuickTank5_mc);
            this.var_27.push(this.btnQuickTank6_mc);
            this.var_27.push(this.btnQuickTank7_mc);
            this.var_27.push(this.btnQuickTank8_mc);
            this.var_27.push(this.btnQuickTank9_mc);
            this.var_27.push(this.btnQuickTank10_mc);
            this.var_103.push(this.txtNumber1_mc);
            this.var_103.push(this.txtNumber2_mc);
            this.var_103.push(this.txtNumber3_mc);
            this.var_103.push(this.txtNumber4_mc);
            _loc5_ = 0;
            _loc5_ = 0;
            while(_loc5_ < this.var_27.length)
            {
               this.var_27[_loc5_].line_mc.alpha = 0;
               this.var_27[_loc5_].empty = true;
               this.var_27[_loc5_].ID = -1;
               this.var_27[_loc5_].StrName = "guy";
               _loc5_++;
            }
            _loc5_ = 0;
            while(_loc5_ < this.var_103.length)
            {
               this.var_103[_loc5_].alpha = 0;
               _loc5_++;
            }
            _loc4_ = new ArenaCreatorBubblefield();
            addChild(_loc4_);
            this.arrBubbleFields.push(_loc4_);
            this.arrBubbleFields[0].txtBubbleFieldNum_txt.text = "1";
            this.arrBubbleFields[0].x = this.var_16[5].x;
            this.arrBubbleFields[0].y = this.var_16[5].y;
            this.arrBubbleFields[0].tweenX = this.arrBubbleFields[0].x;
            this.arrBubbleFields[0].tweenY = this.arrBubbleFields[0].y;
            this.currentArena = new ArenaData();
            this.var_8 = new class_3();
            this.var_8.Setup(null,this.method_107,this.method_112);
            _loc5_ = 0;
            while(_loc5_ < this.var_27.length)
            {
               this.var_8.method_4(this.var_27[_loc5_],true,this.method_628,this.method_484,this.method_733);
               _loc5_++;
            }
            this.var_8.method_4(this.btnRightArrow_mc,true,this.method_293);
            this.var_8.method_4(this.btnLeftArrow_mc,true,this.method_465);
            this.var_8.method_4(this.btnMoveBblFieldLeft_mc,true,this.MoveCurrentBubblefieldLeft);
            this.var_8.method_4(this.btnMoveBblFieldRight_mc,true,this.MoveCurrentBubblefieldRight);
            this.var_8.method_4(this.btnSubmitArena_mc,true,this.method_679);
            this.var_8.method_4(this.btnBack_mc,true,this.CallCallbackFunction);
            this.btnTank1_mc.numOldX = this.btnTank1_mc.x;
            this.btnTank2_mc.numOldX = this.btnTank2_mc.x;
            this.btnTank2_mc.x = 275;
            this.btnTank3_mc.numOldX = this.btnTank3_mc.x;
            this.btnTank3_mc.x = 275;
            this.btnTank4_mc.numOldX = this.btnTank4_mc.x;
            this.btnTank4_mc.x = 275;
            this.txtButtonRollOverSetting_txt.text = "";
            this.txtButtonRollOverSetting_txt.alpha = 0.35;
            this.method_325();
            addChild(this.var_437);
            this.complexity_mc.scaleX = 0;
            this.ComplexityRollOver_mc.alpha = 0;
            this.var_8.method_4(this.ComplexityRollOver_mc,true,this.method_613);
            this.method_669();
         }
      }
      
      private function AddTankSelectButton(param1:MovieClip) : void
      {
         this.var_8.method_4(param1,true,this.method_436);
         param1.txtButton_txt.text = "Add Enemy Tank";
         param1.x = 275;
      }
      
      private function UpdateArenaBubbles() : *
      {
         var _loc1_:* = undefined;
         var _loc3_:ArenaCreatorBubblefield = null;
         var _loc2_:Number = this.arrBubbleFields.length;
         var _loc4_:uint = 0;
         _loc4_ = 0;
         while(_loc4_ < _loc2_)
         {
            if(contains(this.arrBubbleFields[0]))
            {
               removeChild(this.arrBubbleFields[0]);
            }
            _loc1_ = this.arrBubbleFields.shift();
            _loc1_ = null;
            _loc4_++;
         }
         this.arrBubbleFields.length = 0;
         _loc4_ = 0;
         while(_loc4_ < this.currentArena.var_6.length)
         {
            _loc3_ = new ArenaCreatorBubblefield();
            addChild(_loc3_);
            this.arrBubbleFields.push(_loc3_);
            this.arrBubbleFields[_loc4_].txtBubbleFieldNum_txt.text = int(_loc4_ + 1).toString();
            if(_loc4_ + 5 < this.var_16.length - 1)
            {
               this.arrBubbleFields[_loc4_].x = this.var_16[_loc4_ + 5].x;
               this.arrBubbleFields[_loc4_].y = this.var_16[_loc4_ + 5].y;
            }
            else
            {
               this.arrBubbleFields[_loc4_].x = this.var_16[this.var_16.length - 1].x;
               this.arrBubbleFields[_loc4_].y = this.var_16[this.var_16.length - 1].y;
            }
            this.arrBubbleFields[_loc4_].tweenX = this.arrBubbleFields[_loc4_].x;
            this.arrBubbleFields[_loc4_].tweenY = this.arrBubbleFields[_loc4_].y;
            if(this.var_5 == _loc4_)
            {
               this.arrBubbleFields[_loc4_].height = 91;
               this.arrBubbleFields[_loc4_].width = 91;
            }
            else
            {
               this.arrBubbleFields[_loc4_].height = 37;
               this.arrBubbleFields[_loc4_].width = 37;
            }
            _loc4_++;
         }
      }
      
      public function method_51(param1:TextEvent) : void
      {
         var _loc4_:int = 0;
         var _loc2_:TextField = TextField(param1.target);
         var _loc3_:RegExp = /[^a-zA-Z0-9 _\-']/;
         if(param1.text.search(_loc3_) != -1)
         {
            param1.preventDefault();
            _loc2_.replaceText(_loc2_.caretIndex,_loc2_.caretIndex,"");
            _loc4_ = _loc2_.caretIndex + param1.text.length;
            _loc2_.setSelection(_loc4_,_loc4_);
         }
      }
      
      private function UpdateComplexityBar() : *
      {
         var _loc1_:Number = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.currentArena.var_6[this.var_5].arrEnemies.length)
         {
            _loc1_ += 5;
            _loc1_ += this.refMain.RetrieveTankDataFromID(this.currentArena.var_6[this.var_5].arrEnemies[_loc2_].ID).numBubbles * this.currentArena.var_6[this.var_5].arrEnemies[_loc2_].number;
            _loc2_++;
         }
         if(_loc1_ >= 200)
         {
            _loc1_ = 200;
            this.var_192 = true;
         }
         else
         {
            this.var_192 = false;
         }
         this.complexity_mc.scaleX = _loc1_ / 200;
      }
      
      private function method_661(param1:Event) : void
      {
         param1.target.scaleX += 0.1;
         param1.target.scaleY += 0.1;
         this.txtButtonRollOverSetting_txt.text = "Click the bubble field to switch to that one";
      }
      
      private function method_436(param1:Event) : void
      {
         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.var_8.method_10();
         this.refMain.method_634();
      }
      
      private function method_679(param1:Event) : *
      {
         if(this.currentArena.method_351(0).length == 0)
         {
            this.txtButtonRollOverSetting_txt.text = "You have to have an enemy to submit";
            return;
         }
         this.ShareArena_mc = new ShareArena();
         addChild(this.ShareArena_mc);
         this.ShareArena_mc.x = 550 / 2;
         this.ShareArena_mc.y = 450 / 2;
         this.ShareArena_mc.alpha = 0;
         this.ShareArena_mc.gotoAndStop(5);
         this.ShareArena_mc.mouseChildren = true;
         this.ShareArena_mc.mouseEnabled = true;
         this.ShareArena_mc.nextAlpha = 1;
         this.ShareArena_mc.blnRemoveMe = false;
         this.method_113(this.ShareArena_mc);
         this.var_8.method_4(this.ShareArena_mc.btnServer_mc,true,this.SaveToServerAuthorName);
         this.var_8.method_4(this.ShareArena_mc.btnLocal_mc,true,this.SaveToLocalAuthorName);
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_564);
      }
      
      private function AddToTank3(param1:Event) : void
      {
         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.currentArena.method_66(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[2].ID);
         this.UpdateEnemyButtons();
      }
      
      private function ConfirmSubmitArena(param1:Event) : *
      {
         this.ShareArena_mc.author_txt.removeEventListener(FocusEvent.FOCUS_IN,this.method_20);
         this.ShareArena_mc.tank_txt.removeEventListener(FocusEvent.FOCUS_IN,this.method_20);
         this.ShareArena_mc.tank_txt.removeEventListener(TextEvent.TEXT_INPUT,this.method_51);
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
         this.var_8.method_7(this.ShareArena_mc.btnContinue_mc);
         this.currentArena.var_275 = this.ShareArena_mc.author_txt.text;
         this.currentArena.strName = this.ShareArena_mc.tank_txt.text;
         this.currentArena.strID = "H" + this.refMain.intArenaCountMaster.toString();
         this.ShareArena_mc.gotoAndStop(7);
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_541);
         this.var_8.method_4(this.ShareArena_mc.agree_btn,true,this.method_516);
      }
      
      private function method_122(param1:TankData, param2:TankData) : Boolean
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
         var _loc3_:Number = param1.arrTankDetails.length;
         var _loc4_:uint = 0;
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
      
      private function method_267(param1:Event) : *
      {
         this.ShareArena_mc.author_txt.removeEventListener(FocusEvent.FOCUS_IN,this.method_20);
         this.ShareArena_mc.tank_txt.removeEventListener(FocusEvent.FOCUS_IN,this.method_20);
         this.ShareArena_mc.tank_txt.removeEventListener(TextEvent.TEXT_INPUT,this.method_51);
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
         this.var_8.method_7(this.ShareArena_mc.btnContinue_mc);
      }
      
      private function method_564(param1:Event) : *
      {
         this.var_8.method_7(this.ShareArena_mc.btnServer_mc);
         this.var_8.method_7(this.ShareArena_mc.btnLocal_mc);
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
      }
      
      private function RandNum(param1:Number, param2:Number) : Number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      private function AddToTank1(param1:Event) : void
      {
         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.currentArena.method_66(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[0].ID);
         this.UpdateEnemyButtons();
      }
      
      private function tutUp(param1:MouseEvent) : void
      {
         if(param1.target.name == "back_mc")
         {
            this.var_19.prevFrame();
         }
         else if(param1.target.name == "next_mc")
         {
            if(this.var_19.currentFrame == this.var_19.totalFrames)
            {
               this.objTutorialButtonControl.method_10();
               removeChild(this.var_19);
            }
            else
            {
               this.var_19.nextFrame();
            }
         }
      }
      
      private function method_733(param1:Event) : void
      {
         param1.target.line_mc.alpha = 0;
         this.txtButtonRollOverSetting_txt.text = "";
      }
      
      private function method_253(param1:SecurityErrorEvent) : void
      {
         this.method_80(8000);
      }
      
      private function method_577() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this.arrBubbleFields.length)
         {
            if(this.var_5 != _loc1_)
            {
               this.var_8.method_4(this.arrBubbleFields[_loc1_],true,this.method_721,this.method_661,this.method_617);
            }
            _loc1_++;
         }
      }
      
      private function AddToTank4(param1:Event) : void
      {
         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.currentArena.method_66(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[3].ID);
         this.UpdateEnemyButtons();
      }
      
      private function method_93(param1:MovieClip, param2:String = "fuggly", param3:Number = 1) : void
      {
         if(param1 == this.btnTank1_mc)
         {
            this.btnMinus1_mc.alpha = 1;
            this.btnAdd1_mc.alpha = 1;
            this.btnDelete1_mc.alpha = 1;
            this.txtTank1_txt.text = "x " + param3.toString();
            this.btnTank1_mc.txtButton_txt.text = param2;
            this.btnTank1_mc.x = this.btnTank1_mc.numOldX;
            this.var_8.method_4(this.btnMinus1_mc,true,this.MinusToTank1);
            this.var_8.method_4(this.btnAdd1_mc,true,this.AddToTank1);
            this.var_8.method_4(this.btnDelete1_mc,true,this.DeleteTank1);
         }
         if(param1 == this.btnTank2_mc)
         {
            this.btnMinus2_mc.alpha = 1;
            this.btnAdd2_mc.alpha = 1;
            this.btnDelete2_mc.alpha = 1;
            this.txtTank2_txt.text = "x " + param3.toString();
            this.btnTank2_mc.txtButton_txt.text = param2;
            this.btnTank2_mc.x = this.btnTank2_mc.numOldX;
            this.var_8.method_4(this.btnMinus2_mc,true,this.MinusToTank2);
            this.var_8.method_4(this.btnAdd2_mc,true,this.AddToTank2);
            this.var_8.method_4(this.btnDelete2_mc,true,this.DeleteTank2);
         }
         if(param1 == this.btnTank3_mc)
         {
            this.btnMinus3_mc.alpha = 1;
            this.btnAdd3_mc.alpha = 1;
            this.btnDelete3_mc.alpha = 1;
            this.txtTank3_txt.text = "x " + param3.toString();
            this.btnTank3_mc.txtButton_txt.text = param2;
            this.btnTank3_mc.x = this.btnTank3_mc.numOldX;
            this.var_8.method_4(this.btnMinus3_mc,true,this.MinusToTank3);
            this.var_8.method_4(this.btnAdd3_mc,true,this.AddToTank3);
            this.var_8.method_4(this.btnDelete3_mc,true,this.DeleteTank3);
         }
         if(param1 == this.btnTank4_mc)
         {
            this.btnMinus4_mc.alpha = 1;
            this.btnAdd4_mc.alpha = 1;
            this.btnDelete4_mc.alpha = 1;
            this.txtTank4_txt.text = "x " + param3.toString();
            this.btnTank4_mc.txtButton_txt.text = param2;
            this.btnTank4_mc.x = this.btnTank4_mc.numOldX;
            this.var_8.method_4(this.btnMinus4_mc,true,this.MinusToTank4);
            this.var_8.method_4(this.btnAdd4_mc,true,this.AddToTank4);
            this.var_8.method_4(this.btnDelete4_mc,true,this.DeleteTank4);
         }
      }
      
      public function ReturnToArenaSelectScreenAfterSubmit2() : void
      {
         this.var_8.method_7(this.ShareArena_mc.btnExit_mc);
         this.var_8.method_7(this.ShareArena_mc.share_btn);
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
         this.var_8.method_10();
         this.funCallBackButton();
      }
      
      public function method_314(param1:Event) : void
      {
         this.var_8.method_7(this.ShareArena_mc.btnExit_mc);
         this.var_8.method_7(this.ShareArena_mc.share_btn);
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
         this.CallCallbackFunction(param1);
      }
      
      private function MoveCurrentBubblefieldRight(param1:Event) : *
      {
         var _loc2_:* = undefined;
         var _loc3_:Point = null;
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         if(this.var_5 < this.currentArena.var_6.length - 1 && this.currentArena.var_6[this.var_5].arrEnemies.length > 0 && this.currentArena.var_6[this.var_5 + 1].arrEnemies.length > 0)
         {
            _loc2_ = this.currentArena.var_6[this.var_5];
            this.currentArena.var_6[this.var_5] = this.currentArena.var_6[this.var_5 + 1];
            this.currentArena.var_6[this.var_5 + 1] = _loc2_;
            if(this.method_221(this.arrBubbleFields[this.var_5]) && this.method_221(this.arrBubbleFields[this.var_5 + 1]))
            {
               _loc3_ = new Point(this.arrBubbleFields[this.var_5].x / 2 + this.arrBubbleFields[this.var_5 + 1].x / 2,this.arrBubbleFields[this.var_5].y);
               this.arrBubbleFields[this.var_5].centerPointX = _loc3_.x;
               this.arrBubbleFields[this.var_5].centerPointY = _loc3_.y;
               this.arrBubbleFields[this.var_5].intDivider = 280;
               this.arrBubbleFields[this.var_5].scaleTween = 37;
               this.arrBubbleFields[this.var_5].blnLeft = false;
               this.arrBubbleFields[this.var_5].objSister = this.arrBubbleFields[this.var_5 + 1];
               this.arrBubbleFields[this.var_5].distance = Math.abs(this.arrBubbleFields[this.var_5].centerPointX - this.arrBubbleFields[this.var_5].x);
               this.arrBubbleFields[this.var_5 + 1].centerPointX = _loc3_.x;
               this.arrBubbleFields[this.var_5 + 1].centerPointY = _loc3_.y;
               this.arrBubbleFields[this.var_5 + 1].intDivider = 280;
               this.arrBubbleFields[this.var_5 + 1].scaleTween = 91;
               this.arrBubbleFields[this.var_5 + 1].blnLeft = false;
               this.arrBubbleFields[this.var_5 + 1].objSister = this.arrBubbleFields[this.var_5];
               this.arrBubbleFields[this.var_5 + 1].distance = Math.abs(this.arrBubbleFields[this.var_5 + 1].centerPointX - this.arrBubbleFields[this.var_5 + 1].x);
               _loc4_ = _loc3_.x - this.arrBubbleFields[this.var_5].x;
               _loc5_ = _loc3_.y - this.arrBubbleFields[this.var_5].y;
               _loc6_ = Math.atan2(_loc5_,_loc4_);
               _loc6_ = _loc6_ - Math.PI / 2;
               this.arrBubbleFields[this.var_5].angle = this.arrBubbleFields[this.var_5].StartAngle = _loc6_;
               _loc4_ = _loc3_.x - this.arrBubbleFields[this.var_5 + 1].x;
               _loc5_ = _loc3_.y - this.arrBubbleFields[this.var_5 + 1].y;
               _loc6_ = Math.atan2(_loc5_,_loc4_);
               _loc6_ = _loc6_ - Math.PI / 2;
               this.arrBubbleFields[this.var_5 + 1].angle = this.arrBubbleFields[this.var_5 + 1].StartAngle = _loc6_;
            }
         }
         else
         {
            this.txtButtonRollOverSetting_txt.text = "You can\'t switch with an empty Bubblefield";
         }
      }
      
      private function method_632(param1:Number = 0, param2:Number = 0, param3:Number = 0, param4:Number = 0, param5:Number = 0, param6:Number = 0) : Number
      {
         param5 = param1 - param3;
         param6 = param2 - param4;
         return Math.sqrt(param5 * param5 + param6 * param6);
      }
      
      private function method_782(param1:MovieClip, param2:String = "", param3:String = "guy") : void
      {
         1;
         if(param1 == this.btnTank1_mc)
         {
            var _loc4_:Number = this.currentArena.method_66(this.var_5,param2,param3);
            this.btnTank2_mc.alpha = 1;
            this.AddTankSelectButton(this.btnTank2_mc);
            this.var_8.method_7(this.btnTank1_mc);
            this.method_93(this.btnTank1_mc,param3,1);
         }
         else if(param1 == this.btnTank2_mc)
         {
            _loc4_ = this.currentArena.method_66(this.var_5,param2,param3);
            this.btnTank3_mc.alpha = 1;
            this.AddTankSelectButton(this.btnTank3_mc);
            this.var_8.method_7(this.btnTank2_mc);
            this.method_93(this.btnTank2_mc,param3,1);
         }
         else if(param1 == this.btnTank3_mc)
         {
            _loc4_ = this.currentArena.method_66(this.var_5,param2,param3);
            this.btnTank4_mc.alpha = 1;
            this.AddTankSelectButton(this.btnTank4_mc);
            this.var_8.method_7(this.btnTank3_mc);
            this.method_93(this.btnTank3_mc,param3,1);
         }
         else if(param1 == this.btnTank4_mc)
         {
            _loc4_ = this.currentArena.method_66(this.var_5,param2,param3);
            this.var_8.method_7(this.btnTank4_mc);
            this.method_93(this.btnTank4_mc,param3,1);
         }
      }
      
      private function MinusToTank1(param1:Event) : void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_:Boolean = false;
         if(this.currentArena.method_188(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[0].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private function method_113(param1:*) : void
      {
         var _loc2_:Boolean = true;
         var _loc3_:uint = 0;
         while(_loc3_ < this.var_77.length)
         {
            if(this.var_77[_loc3_] == param1)
            {
               _loc2_ = false;
            }
            _loc3_++;
         }
         if(_loc2_ == true)
         {
            this.var_77.push(param1);
         }
      }
      
      private function UpdateEnemyButtons() : void
      {
         this.method_325();
         this.UpdateComplexityBar();
         var _loc1_:Array = this.currentArena.method_351(this.var_5);
         if(_loc1_.length > 0)
         {
            if(_loc1_[0] == null)
            {
               return;
            }
            this.method_177(this.btnTank1_mc,_loc1_[0].IDs,_loc1_[0].Num,_loc1_[0].Name);
            this.var_103[0].alpha = 1;
            if(_loc1_[1] == null)
            {
               return;
            }
            this.method_177(this.btnTank2_mc,_loc1_[1].IDs,_loc1_[1].Num,_loc1_[1].Name);
            this.var_103[1].alpha = 1;
            if(_loc1_[2] == null)
            {
               return;
            }
            this.var_103[2].alpha = 1;
            this.method_177(this.btnTank3_mc,_loc1_[2].IDs,_loc1_[2].Num,_loc1_[2].Name);
            if(_loc1_[3] == null)
            {
               return;
            }
            this.var_103[3].alpha = 1;
            this.method_177(this.btnTank4_mc,_loc1_[3].IDs,_loc1_[3].Num,_loc1_[3].Name);
         }
      }
      
      internal function frame1() : *
      {
         stop();
      }
      
      private function MinusToTank2(param1:Event) : void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_:Boolean = false;
         if(this.currentArena.method_188(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[1].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private function SaveToLocalAuthorName(param1:Event) : *
      {
         this.var_8.method_7(this.ShareArena_mc.btnServer_mc);
         this.var_8.method_7(this.ShareArena_mc.btnLocal_mc);
         this.ShareArena_mc.gotoAndStop(6);
         this.ShareArena_mc.author_txt.text = this.refMain.objCurrentPlayer.profileName;
         this.ShareArena_mc.author_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_20);
         this.ShareArena_mc.tank_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_20);
         this.ShareArena_mc.tank_txt.addEventListener(TextEvent.TEXT_INPUT,this.method_51);
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_267);
         this.var_8.method_4(this.ShareArena_mc.btnContinue_mc,true,this.method_716);
      }
      
      private function method_198(param1:*) : void
      {
         var _loc2_:Boolean = true;
         var _loc3_:uint = 0;
         while(_loc3_ < this.var_41.length)
         {
            if(this.var_41[_loc3_] == param1)
            {
               _loc2_ = false;
            }
            _loc3_++;
         }
         if(_loc2_ == true)
         {
            this.var_41.push(param1);
         }
      }
      
      private function MinusToTank3(param1:Event) : void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_:Boolean = false;
         if(this.currentArena.method_188(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[2].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private function DeleteTank3(param1:Event) : void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_:Boolean = false;
         if(this.currentArena.method_152(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[2].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_ == true)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private function AddToTank2(param1:Event) : void
      {
         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.currentArena.method_66(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[1].ID);
         this.UpdateEnemyButtons();
      }
      
      private function SaveToServerAuthorName(param1:Event) : *
      {
         this.var_8.method_7(this.ShareArena_mc.btnServer_mc);
         this.var_8.method_7(this.ShareArena_mc.btnLocal_mc);
         this.ShareArena_mc.gotoAndStop(6);
         this.ShareArena_mc.author_txt.text = this.refMain.objCurrentPlayer.profileName;
         this.ShareArena_mc.author_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_20);
         this.ShareArena_mc.tank_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_20);
         this.ShareArena_mc.tank_txt.addEventListener(TextEvent.TEXT_INPUT,this.method_51);
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_267);
         this.var_8.method_4(this.ShareArena_mc.btnContinue_mc,true,this.ConfirmSubmitArena);
      }
      
      private function method_721(param1:Event) : void
      {
         var _loc4_:Number = NaN;
         0;
         var _loc2_:Function = this.method_465;
         var _loc3_:uint = 0;
         while(_loc3_ < this.arrBubbleFields.length)
         {
            if(param1.currentTarget == this.arrBubbleFields[_loc3_])
            {
               if(_loc3_ > this.var_5)
               {
                  _loc2_ = this.method_293;
               }
               _loc4_ = Math.abs(this.var_5 - _loc3_);
               var _loc5_:uint = 0;
               while(0 < _loc4_)
               {
                  _loc2_(param1);
                  _loc5_ = 0 + 1;
               }
               break;
            }
            _loc3_++;
         }
         this.UpdateComplexityBar();
      }
      
      private function DeleteTank2(param1:Event) : void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_:Boolean = false;
         if(this.currentArena.method_152(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[1].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_ == true)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      public function method_80(param1:Number) : void
      {
         var _loc2_:String = "An error prevented your arena from being saved.  We apologize for the inconvenience.";
         switch(param1)
         {
            case 8000:
               _loc2_ = "BTA could not properly connect to the server.";
               break;
            case 9300:
               _loc2_ = "Our servers currently are not allowing arena submissions.  Please try again later.";
               break;
            case 9299:
               _loc2_ = "An invalid arena name or Author name was used, try changing them and re-submitting";
               break;
            case 9202:
               _loc2_ = "An invalid arena name or Author name was used, try changing them and re-submitting";
               break;
            case 9200:
               _loc2_ = "An invalid arena was submitted to the server.  This includes arena with invalid characters in the author and tank names.";
               break;
            default:
               _loc2_ = "An invalid arena was submitted to the server.  This includes arena with invalid characters in the author and tank names.";
         }
         this.ShareArena_mc.message_txt.text = _loc2_;
      }
      
      private function method_20(param1:Event) : void
      {
         param1.target.text = "";
         param1.target.removeEventListener(FocusEvent.FOCUS_IN,this.method_20);
      }
      
      private function method_221(param1:ArenaCreatorBubblefield) : Boolean
      {
         var _loc2_:Boolean = true;
         var _loc3_:uint = 0;
         _loc3_ = 0;
         while(_loc3_ < this.var_10.length)
         {
            if(this.var_10[_loc3_] == param1)
            {
               _loc2_ = false;
               break;
            }
            _loc3_++;
         }
         if(_loc2_ == true)
         {
            this.var_10.push(param1);
            _loc3_ = 0;
            while(_loc3_ < this.var_41.length)
            {
               if(param1 == this.var_41[_loc3_])
               {
                  this.var_41.splice(_loc3_,1);
                  break;
               }
               _loc3_++;
            }
            _loc3_ = 0;
            while(_loc3_ < this.var_77.length)
            {
               if(param1 == this.var_77[_loc3_])
               {
                  this.var_77.splice(_loc3_,1);
                  break;
               }
               _loc3_++;
            }
         }
         return _loc2_;
      }
      
      private function method_553() : Boolean
      {
         var _loc1_:ArenaCreatorBubblefield = null;
         if(this.currentArena.method_553())
         {
            _loc1_ = new ArenaCreatorBubblefield();
            addChild(_loc1_);
            this.arrBubbleFields.push(_loc1_);
            this.arrBubbleFields[this.arrBubbleFields.length - 1].txtBubbleFieldNum_txt.text = int(this.var_5 + 2).toString();
            this.arrBubbleFields[this.arrBubbleFields.length - 1].x = this.var_16[6].x;
            this.arrBubbleFields[this.arrBubbleFields.length - 1].y = this.var_16[6].y;
            this.arrBubbleFields[this.arrBubbleFields.length - 1].tweenX = this.arrBubbleFields[this.arrBubbleFields.length - 1].x;
            this.arrBubbleFields[this.arrBubbleFields.length - 1].tweenY = this.arrBubbleFields[this.arrBubbleFields.length - 1].y;
            this.arrBubbleFields[this.arrBubbleFields.length - 1].height = 37;
            this.arrBubbleFields[this.arrBubbleFields.length - 1].width = 37;
            return true;
         }
         return false;
      }
      
      private function method_628(param1:Event) : void
      {
         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         if(!param1.target.empty)
         {
            this.currentArena.method_66(this.var_5,param1.target.ID,param1.target.StrName);
            this.UpdateEnemyButtons();
         }
      }
      
      private function method_465(param1:Event) : void
      {
         var _loc2_:uint = 0;
         if(this.var_10.length > 0)
         {
            return;
         }
         if(this.var_5 > 0)
         {
            --this.var_5;
            _loc2_ = 0;
            while(_loc2_ < this.arrBubbleFields.length)
            {
               if(_loc2_ + 5 - this.var_5 <= this.var_16.length - 1 && _loc2_ + 5 - this.var_5 >= 0)
               {
                  this.arrBubbleFields[_loc2_].tweenX = this.var_16[_loc2_ + 5 - this.var_5].x;
                  this.arrBubbleFields[_loc2_].tweenY = this.var_16[_loc2_ + 5 - this.var_5].y;
                  this.method_198(this.arrBubbleFields[_loc2_]);
               }
               _loc2_++;
            }
            this.UpdateEnemyButtons();
         }
         else if(this.var_5 < 0)
         {
            this.var_5 = 0;
         }
      }
      
      private function DeleteTank4(param1:Event) : void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_:Boolean = false;
         if(this.currentArena.method_152(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[3].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_ == true)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private function method_669() : void
      {
         if(this.refMain.objCurrentPlayer.var_260 == false)
         {
            this.refMain.objCurrentPlayer.var_260 = true;
            this.var_19 = new ArenaCreatorTutorial();
            var _temp_3:* = this.var_19;
            var _temp_2:* = this.var_19;
            var _temp_1:* = 0;
            0;
            _temp_2.y = _temp_1;
            _temp_3.x = 0;
            addChild(this.var_19);
            this.objTutorialButtonControl = new class_3();
            this.objTutorialButtonControl.Setup(this.tutUp);
            this.objTutorialButtonControl.method_4(this.var_19.back_mc);
            this.objTutorialButtonControl.method_4(this.var_19.next_mc);
            this.var_19.back_mc.gotoAndStop("off");
            this.var_19.next_mc.gotoAndStop("off");
         }
      }
      
      private function method_572(param1:Event) : void
      {
         this.var_8.method_7(this.ShareArena_mc.btnExit_mc);
         this.var_8.method_7(this.ShareArena_mc.share_btn);
         this.method_314(new Event("bay"));
      }
      
      private function DeleteTank1(param1:Event) : void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_:Boolean = false;
         if(this.currentArena.method_152(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[0].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_ == true)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private function method_716(param1:Event) : *
      {
         this.ShareArena_mc.author_txt.removeEventListener(FocusEvent.FOCUS_IN,this.method_20);
         this.ShareArena_mc.tank_txt.removeEventListener(FocusEvent.FOCUS_IN,this.method_20);
         this.ShareArena_mc.tank_txt.removeEventListener(TextEvent.TEXT_INPUT,this.method_51);
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
         this.var_8.method_7(this.ShareArena_mc.btnContinue_mc);
         this.currentArena.var_275 = this.ShareArena_mc.author_txt.text;
         this.currentArena.strName = this.ShareArena_mc.tank_txt.text;
         this.currentArena.strID = "H" + this.refMain.intArenaCountMaster.toString();
         this.refMain.intArenaCountMaster += 1;
         this.refMain.SaveGameData();
         this.refMain.objCurrentPlayer.method_283(this.currentArena);
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
         this.CallCallbackFunction(param1);
      }
      
      private function UpdateAreanBubbleLocation() : void
      {
         undefined;
         var _loc2_:uint = 0;
         while(_loc2_ < this.arrBubbleFields.length)
         {
            if(_loc2_ + 5 - this.var_5 > 0 && _loc2_ + 5 - this.var_5 < this.var_16.length - 1)
            {
               this.arrBubbleFields[_loc2_].tweenX = this.var_16[_loc2_ + 5 - this.var_5].x;
               this.arrBubbleFields[_loc2_].tweenY = this.var_16[_loc2_ + 5 - this.var_5].y;
               this.arrBubbleFields[_loc2_].x = this.var_16[_loc2_ + 5 - this.var_5].x;
               this.arrBubbleFields[_loc2_].y = this.var_16[_loc2_ + 5 - this.var_5].y;
               this.method_198(this.arrBubbleFields[_loc2_]);
            }
            else
            {
               if(_loc2_ + 5 - this.var_5 <= 0)
               {
                  this.arrBubbleFields[_loc2_].x = this.var_16[0].x;
                  this.arrBubbleFields[_loc2_].y = this.var_16[0].y;
                  this.arrBubbleFields[_loc2_].tweenX = this.var_16[0].x;
                  this.arrBubbleFields[_loc2_].tweenY = this.var_16[0].y;
               }
               else if(_loc2_ + 5 - this.var_5 >= this.var_16.length - 1)
               {
                  this.arrBubbleFields[_loc2_].x = this.var_16[this.var_16.length - 1].x;
                  this.arrBubbleFields[_loc2_].y = this.var_16[this.var_16.length - 1].y;
                  this.arrBubbleFields[_loc2_].tweenX = this.var_16[this.var_16.length - 1].x;
                  this.arrBubbleFields[_loc2_].tweenY = this.var_16[this.var_16.length - 1].y;
               }
               this.method_198(this.arrBubbleFields[_loc2_]);
            }
            _loc2_++;
         }
      }
      
      private function method_541(param1:Event) : *
      {
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
         this.var_8.method_7(this.ShareArena_mc.agree_btn);
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
      }
      
      private function MinusToTank4(param1:Event) : void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         var _loc2_:Boolean = false;
         if(this.currentArena.method_188(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[3].ID))
         {
            _loc2_ = true;
         }
         this.method_92();
         this.UpdateArenaBubbles();
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         if(_loc2_)
         {
            this.UpdateQuickKeyButtons();
         }
      }
      
      private function method_493(param1:Event) : void
      {
         var var_40:String;
         var var_56:*;
         var var_126:URLLoader;
         var var_150:URLRequest;
         var var_157:String;
         var var_194:URLVariables;
         var var_106:Event = param1;
         this.var_117 = new class_96();
         addChild(this.var_117);
         this.var_117.x = 550 / 2;
         this.var_117.y = 450 / 2;
         this.var_117.txtLoading_txt.text = "Saving Arena";
         var_40 = this.currentArena.ExportArenaData();
         var_157 = "http://s1.herointeractive.com/bta/submitArena.php";
         var_150 = new URLRequest(var_157);
         var_194 = new URLVariables();
         var_194.s = var_40;
         var_194.t = "";
         var_56 = 0;
         while(var_56 < this.currentArena.arrAllEnemiesInArena.length)
         {
            if(this.currentArena.arrAllEnemiesInArena[var_56].ID.substr(0,1) == "L")
            {
               if(var_194.t == "")
               {
                  var_194.t = this.refMain.RetrieveTankDataFromID(this.currentArena.arrAllEnemiesInArena[var_56].ID).ExportTankData();
               }
               else
               {
                  var_194.t += "-" + this.refMain.RetrieveTankDataFromID(this.currentArena.arrAllEnemiesInArena[var_56].ID).ExportTankData();
               }
            }
            var_56 += 1;
         }
         var_150.data = var_194;
         var_150.method = URLRequestMethod.POST;
         var_126 = new URLLoader();
         var_126 = new URLLoader();
         var_126.dataFormat = URLLoaderDataFormat.TEXT;
         var_126.addEventListener(Event.COMPLETE,this.method_278);
         var_126.addEventListener(HTTPStatusEvent.HTTP_STATUS,this.method_280);
         var_126.addEventListener(SecurityErrorEvent.SECURITY_ERROR,this.method_253);
         var_126.addEventListener(IOErrorEvent.IO_ERROR,this.method_254);
         try
         {
            var_126.load(var_150);
         }
         catch(e:Error)
         {
         }
      }
      
      private function method_617(param1:Event) : void
      {
         param1.target.scaleX -= 0.1;
         param1.target.scaleY -= 0.1;
         this.txtButtonRollOverSetting_txt.text = "";
      }
      
      private function method_254(param1:IOErrorEvent) : void
      {
         this.method_80(8000);
      }
      
      public function method_598(param1:MouseEvent) : void
      {
         this.refMain.method_370();
         this.refMain.method_416(this.currentArena.strID,this.currentArena.strID,null,this.refMain.GameShareArenaCallback);
      }
      
      private function method_92() : *
      {
         undefined;
         var _loc2_:uint = 0;
         while(_loc2_ < this.currentArena.var_6.length - 1)
         {
            if(this.currentArena.var_6[_loc2_].arrEnemies.length == 0)
            {
               this.currentArena.var_6[_loc2_] = this.currentArena.var_6[this.currentArena.var_6.length - 1];
               var _loc1_:* = this.currentArena.var_6.pop();
               _loc1_ = null;
               if(this.var_5 > this.currentArena.var_6.length - 1)
               {
                  this.var_5 = this.currentArena.var_6.length - 1;
               }
               break;
            }
            _loc2_++;
         }
      }
      
      private function method_544() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this.arrBubbleFields.length)
         {
            this.var_8.method_7(this.arrBubbleFields[_loc1_]);
            _loc1_++;
         }
      }
      
      private function method_516(param1:Event) : *
      {
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
         this.var_8.method_7(this.ShareArena_mc.agree_btn);
         this.refMain.intArenaCountMaster += 1;
         this.refMain.SaveGameData();
         this.refMain.objCurrentPlayer.method_283(this.currentArena);
         this.method_493(param1);
      }
      
      private function method_325() : void
      {
         this.method_544();
         this.btnTank1_mc.alpha = 1;
         this.btnTank2_mc.alpha = 0;
         this.btnTank3_mc.alpha = 0;
         this.btnTank4_mc.alpha = 0;
         this.txtTank1_txt.selectable = false;
         this.txtTank2_txt.selectable = false;
         this.txtTank3_txt.selectable = false;
         this.txtTank4_txt.selectable = false;
         this.btnMinus1_mc.alpha = 0;
         this.btnAdd1_mc.alpha = 0;
         this.btnDelete1_mc.alpha = 0;
         this.txtTank1_txt.text = "";
         this.var_8.method_7(this.btnMinus1_mc);
         this.var_8.method_7(this.btnAdd1_mc);
         this.var_8.method_7(this.btnDelete1_mc);
         this.var_8.method_7(this.btnTank1_mc);
         this.var_8.method_32(this.btnMinus1_mc);
         this.var_8.method_32(this.btnAdd1_mc);
         this.var_8.method_32(this.btnDelete1_mc);
         this.var_8.method_32(this.btnTank1_mc);
         this.btnMinus2_mc.alpha = 0;
         this.btnAdd2_mc.alpha = 0;
         this.btnDelete2_mc.alpha = 0;
         this.txtTank2_txt.text = "";
         this.var_8.method_7(this.btnTank2_mc);
         this.var_8.method_7(this.btnMinus2_mc);
         this.var_8.method_7(this.btnAdd2_mc);
         this.var_8.method_7(this.btnDelete2_mc);
         this.var_8.method_32(this.btnTank2_mc);
         this.var_8.method_32(this.btnMinus2_mc);
         this.var_8.method_32(this.btnAdd2_mc);
         this.var_8.method_32(this.btnDelete2_mc);
         this.btnMinus3_mc.alpha = 0;
         this.btnAdd3_mc.alpha = 0;
         this.btnDelete3_mc.alpha = 0;
         this.txtTank3_txt.text = "";
         this.var_8.method_7(this.btnTank3_mc);
         this.var_8.method_7(this.btnMinus3_mc);
         this.var_8.method_7(this.btnAdd3_mc);
         this.var_8.method_7(this.btnDelete3_mc);
         this.var_8.method_32(this.btnTank3_mc);
         this.var_8.method_32(this.btnMinus3_mc);
         this.var_8.method_32(this.btnAdd3_mc);
         this.var_8.method_32(this.btnDelete3_mc);
         this.btnMinus4_mc.alpha = 0;
         this.btnAdd4_mc.alpha = 0;
         this.btnDelete4_mc.alpha = 0;
         this.txtTank4_txt.text = "";
         this.var_8.method_7(this.btnTank4_mc);
         this.var_8.method_7(this.btnMinus4_mc);
         this.var_8.method_7(this.btnAdd4_mc);
         this.var_8.method_7(this.btnDelete4_mc);
         this.var_8.method_32(this.btnTank4_mc);
         this.var_8.method_32(this.btnMinus4_mc);
         this.var_8.method_32(this.btnAdd4_mc);
         this.var_8.method_32(this.btnDelete4_mc);
         this.btnTank1_mc.txtButton_txt.text = "Add Enemy Tank";
         this.btnTank1_mc.x = 275;
         this.var_8.method_4(this.btnTank1_mc,true,this.method_436);
         this.btnTank2_mc.txtButton_txt.text = "Add Enemy Tank";
         this.btnTank2_mc.x = 275;
         this.btnTank3_mc.txtButton_txt.text = "Add Enemy Tank";
         this.btnTank3_mc.x = 275;
         this.btnTank4_mc.txtButton_txt.text = "Add Enemy Tank";
         this.btnTank4_mc.x = 275;
         this.var_103[0].alpha = 0;
         this.var_103[1].alpha = 0;
         this.var_103[2].alpha = 0;
         this.var_103[3].alpha = 0;
         this.method_577();
      }
      
      private function method_107(param1:Event) : void
      {
         if(param1.target == this.btnMinus1_mc || param1.target == this.btnMinus2_mc || param1.target == this.btnMinus3_mc || param1.target == this.btnMinus4_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Subtract 1 of this tank";
         }
         if(param1.target == this.btnAdd1_mc || param1.target == this.btnAdd2_mc || param1.target == this.btnAdd3_mc || param1.target == this.btnAdd4_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Add 1 of this tank";
         }
         if(param1.target == this.btnDelete1_mc || param1.target == this.btnDelete2_mc || param1.target == this.btnDelete3_mc || param1.target == this.btnDelete4_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Delete this tank";
         }
         if(param1.target == this.btnRightArrow_mc || param1.target == this.btnLeftArrow_mc)
         {
            if(param1.target == this.btnRightArrow_mc && this.btnRightArrow_mc.ArrowPlusSign_mc.currentFrame == 2)
            {
               this.txtButtonRollOverSetting_txt.text = "Add another bubblefield";
            }
            else
            {
               this.txtButtonRollOverSetting_txt.text = "Navigate the bubblefields";
            }
         }
         if(param1.target == this.btnTank1_mc || param1.target == this.btnTank2_mc || param1.target == this.btnTank3_mc || param1.target == this.btnTank4_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "You can have four enemy tank types per bubblefied";
         }
         if(param1.target == this.btnMoveBblFieldLeft_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Swap with Left Bubblefield";
         }
         if(param1.target == this.btnMoveBblFieldRight_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Swap with Right Bubblefield";
         }
         if(param1.target == this.btnBack_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Return to previous screen";
         }
         if(param1.target == this.btnSubmitArena_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "Save your Arena!";
         }
         if(param1.target == this.ComplexityRollOver_mc)
         {
            this.txtButtonRollOverSetting_txt.text = "There is a max complexity for each bubblefield.";
         }
         param1.target.gotoAndStop(2);
      }
      
      public function method_177(param1:MovieClip, param2:String = "", param3:Number = 1, param4:String = "guy") : void
      {
         if(param2 != "")
         {
            if(param1 == this.btnTank1_mc)
            {
               this.btnTank2_mc.alpha = 1;
               this.AddTankSelectButton(this.btnTank2_mc);
               this.var_8.method_7(this.btnTank1_mc);
               this.method_93(this.btnTank1_mc,param4,param3);
            }
            else if(param1 == this.btnTank2_mc)
            {
               this.btnTank3_mc.alpha = 1;
               this.AddTankSelectButton(this.btnTank3_mc);
               this.var_8.method_7(this.btnTank2_mc);
               this.method_93(this.btnTank2_mc,param4,param3);
            }
            else if(param1 == this.btnTank3_mc)
            {
               this.btnTank4_mc.alpha = 1;
               this.AddTankSelectButton(this.btnTank4_mc);
               this.var_8.method_7(this.btnTank3_mc);
               this.method_93(this.btnTank3_mc,param4,param3);
            }
            else if(param1 == this.btnTank4_mc)
            {
               this.var_8.method_7(this.btnTank4_mc);
               this.method_93(this.btnTank4_mc,param4,param3);
            }
         }
      }
      
      private function UpdateQuickKeyButtons() : void
      {
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         null;
         undefined;
         null;
         var _loc7_:Number = NaN;
         null;
         null;
         var _loc10_:Number = NaN;
         null;
         null;
         null;
         null;
         var _loc1_:uint = 0;
         _loc1_ = 0;
         while(_loc1_ < this.var_27.length)
         {
            if(_loc1_ < this.currentArena.arrAllEnemiesInArena.length)
            {
               this.var_27[_loc1_].empty = false;
               this.var_27[_loc1_].ID = this.currentArena.arrAllEnemiesInArena[_loc1_].ID;
               this.var_27[_loc1_].StrName = this.currentArena.arrAllEnemiesInArena[_loc1_].Name;
            }
            else
            {
               this.var_27[_loc1_].empty = true;
               this.var_27[_loc1_].ID = -1;
               this.var_27[_loc1_].StrName = "guy";
            }
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ < this.var_27.length)
         {
            while(this.var_27[_loc1_].getChildAt(this.var_27[_loc1_].numChildren - 1) != this.var_27[_loc1_].line_mc)
            {
               this.var_27[_loc1_].removeChildAt(this.var_27[_loc1_].numChildren - 1);
            }
            if(this.var_27[_loc1_].ID != -1)
            {
               _loc2_ = this.var_27[_loc1_].height - 20;
               _loc3_ = this.var_27[_loc1_].width - 10;
               var _loc4_:TankData = this.refMain.RetrieveTankDataFromID(this.var_27[_loc1_].ID);
               if(_loc4_ == null)
               {
               }
               var _loc5_:* = null.method_61();
               this.var_27[_loc1_].addChild(undefined);
               var _loc6_:MovieClip = new class_77();
               _loc6_.alpha = 0;
               undefined.addChild(null);
               _loc7_ = Number(null.GetLargestXDistanceFromRegistration());
               var _loc8_:MovieClip = new class_77();
               _loc8_.x = _loc7_;
               null.alpha = 0;
               undefined.addChild(null);
               var _loc9_:MovieClip = new class_77();
               _loc9_.x = -1 * _loc7_;
               null.alpha = 0;
               undefined.addChild(null);
               _loc10_ = Number(null.GetLargestYDistanceFromRegistration());
               var _loc11_:MovieClip = new class_77();
               _loc11_.y = _loc10_;
               null.alpha = 0;
               undefined.addChild(null);
               var _loc12_:MovieClip = new class_77();
               _loc12_.y = -1 * _loc10_;
               null.alpha = 0;
               undefined.addChild(null);
               if(undefined.width >= _loc3_)
               {
                  undefined.width = _loc3_;
                  undefined.scaleY = undefined.scaleX;
               }
               if(undefined.height >= _loc2_)
               {
                  undefined.height = _loc2_;
                  undefined.scaleX = undefined.scaleY;
               }
               var _loc13_:Sprite = new Sprite();
               var _loc14_:class_51 = new class_51(this.var_27[_loc1_].width,this.var_27[_loc1_].height);
               this.var_27[_loc1_].removeChild(undefined);
               null.addChild(undefined);
               undefined.x = this.var_27[_loc1_].width / 2;
               undefined.y = this.var_27[_loc1_].height / 2;
               null.Draw(null);
               this.var_27[_loc1_].addChild(null);
               null.x -= null.width / 2;
               null.y -= null.height / 2;
               _loc5_ = null;
               _loc13_ = null;
            }
            _loc1_++;
         }
         this.UpdateComplexityBar();
      }
      
      private function method_112(param1:Event) : void
      {
         this.txtButtonRollOverSetting_txt.text = "";
         param1.target.gotoAndStop(1);
      }
      
      private function MoveCurrentBubblefieldLeft(param1:Event) : void
      {
         var _loc2_:* = undefined;
         var _loc3_:Point = null;
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         if(this.var_5 > 0 && this.currentArena.var_6[this.var_5].arrEnemies.length > 0 && this.currentArena.var_6[this.var_5 - 1].arrEnemies.length > 0)
         {
            _loc2_ = this.currentArena.var_6[this.var_5];
            this.currentArena.var_6[this.var_5] = this.currentArena.var_6[this.var_5 - 1];
            this.currentArena.var_6[this.var_5 - 1] = _loc2_;
            if(this.method_221(this.arrBubbleFields[this.var_5]) && this.method_221(this.arrBubbleFields[this.var_5 - 1]))
            {
               _loc3_ = new Point(this.arrBubbleFields[this.var_5].x / 2 + this.arrBubbleFields[this.var_5 - 1].x / 2,this.arrBubbleFields[this.var_5].y);
               this.arrBubbleFields[this.var_5].centerPointX = _loc3_.x;
               this.arrBubbleFields[this.var_5].centerPointY = _loc3_.y;
               this.arrBubbleFields[this.var_5].intDivider = 280;
               this.arrBubbleFields[this.var_5].scaleTween = 37;
               this.arrBubbleFields[this.var_5].blnLeft = true;
               this.arrBubbleFields[this.var_5].objSister = this.arrBubbleFields[this.var_5 - 1];
               this.arrBubbleFields[this.var_5].distance = Math.abs(this.arrBubbleFields[this.var_5].centerPointX - this.arrBubbleFields[this.var_5].x);
               this.arrBubbleFields[this.var_5 - 1].centerPointX = _loc3_.x;
               this.arrBubbleFields[this.var_5 - 1].centerPointY = _loc3_.y;
               this.arrBubbleFields[this.var_5 - 1].intDivider = 280;
               this.arrBubbleFields[this.var_5 - 1].scaleTween = 91;
               this.arrBubbleFields[this.var_5 - 1].blnLeft = true;
               this.arrBubbleFields[this.var_5 - 1].objSister = this.arrBubbleFields[this.var_5];
               this.arrBubbleFields[this.var_5 - 1].distance = Math.abs(this.arrBubbleFields[this.var_5 - 1].centerPointX - this.arrBubbleFields[this.var_5 - 1].x);
               _loc4_ = _loc3_.x - this.arrBubbleFields[this.var_5].x;
               _loc5_ = _loc3_.y - this.arrBubbleFields[this.var_5].y;
               _loc6_ = Math.atan2(_loc5_,_loc4_);
               _loc6_ = _loc6_ - Math.PI / 2;
               this.arrBubbleFields[this.var_5].angle = this.arrBubbleFields[this.var_5].StartAngle = _loc6_;
               _loc4_ = _loc3_.x - this.arrBubbleFields[this.var_5 - 1].x;
               _loc5_ = _loc3_.y - this.arrBubbleFields[this.var_5 - 1].y;
               _loc6_ = Math.atan2(_loc5_,_loc4_);
               _loc6_ = _loc6_ - Math.PI / 2;
               this.arrBubbleFields[this.var_5 - 1].angle = this.arrBubbleFields[this.var_5 - 1].StartAngle = _loc6_;
            }
         }
         else
         {
            this.txtButtonRollOverSetting_txt.text = "You can\'t switch with an empty Bubblefield";
         }
      }
      
      private function method_484(param1:Event) : void
      {
         if(param1.target.ID != -1)
         {
            param1.target.line_mc.alpha = 1;
         }
         this.txtButtonRollOverSetting_txt.text = "Tanks in your arena, max of 10";
      }
      
      private function method_293(param1:Event) : void
      {
         var _loc2_:uint = 0;
         if(this.var_10.length > 0)
         {
            return;
         }
         if(this.var_5 < this.arrBubbleFields.length - 1)
         {
            this.var_5 += 1;
            _loc2_ = 0;
            while(_loc2_ < this.arrBubbleFields.length)
            {
               if(_loc2_ + 5 - this.var_5 >= 0 && _loc2_ + 5 - this.var_5 <= this.var_16.length - 1)
               {
                  this.arrBubbleFields[_loc2_].tweenX = this.var_16[_loc2_ + 5 - this.var_5].x;
                  this.arrBubbleFields[_loc2_].tweenY = this.var_16[_loc2_ + 5 - this.var_5].y;
                  this.method_198(this.arrBubbleFields[_loc2_]);
               }
               _loc2_++;
            }
            this.UpdateEnemyButtons();
         }
         else if(!this.method_553())
         {
            if(this.var_5 > this.arrBubbleFields.length - 1)
            {
               this.var_5 = this.arrBubbleFields.length - 1;
            }
            this.txtButtonRollOverSetting_txt.text = "You need at least 1 enemy to add a bubblefield";
         }
         else
         {
            this.method_293(param1);
         }
      }
      
      public function Destroy() : void
      {
         this.currentArena = null;
         this.var_5 = 0;
         this.var_16.length = 0;
         this.var_16 = null;
         this.arrBubbleFields.length = 0;
         this.arrBubbleFields = null;
         this.var_27.length = 0;
         this.var_27 = null;
         this.var_103.length = 0;
         this.var_103 = null;
         this.var_41.length = 0;
         this.var_41 = null;
         this.var_8.method_10();
         this.var_8 = null;
         this.refMain = null;
         this.var_209.method_232();
         this.var_209.method_297("mainEffects");
         this.var_209.method_417();
         while(this.numChildren > 0)
         {
            removeChildAt(0);
         }
      }
      
      public function Update() : void
      {
         var _loc4_:String = null;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc7_:uint = 0;
         var _loc8_:ArenaCreatorBubblefield = null;
         var _loc9_:MovieClip = null;
         var _loc10_:MovieClip = null;
         var _loc11_:ArenaCreatorBubblefield = null;
         var _loc12_:uint = 0;
         if(this.var_531)
         {
            this.var_117.alpha -= 0.05;
         }
         if(this.currentArena.var_6.length - 1 == this.var_5)
         {
            this.btnRightArrow_mc.ArrowPlusSign_mc.gotoAndStop(2);
         }
         else
         {
            this.btnRightArrow_mc.ArrowPlusSign_mc.gotoAndStop(1);
         }
         this.var_209.Run();
         var _loc1_:Boolean = true;
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_41.length)
         {
            _loc1_ = true;
            if(Math.abs(this.var_41[_loc2_].x - this.var_41[_loc2_].tweenX) > 1.5)
            {
               this.var_41[_loc2_].x = this.var_41[_loc2_].x * 0.9 + this.var_41[_loc2_].tweenX * 0.1;
               _loc1_ = false;
            }
            if(Math.abs(this.var_41[_loc2_].y - this.var_41[_loc2_].tweenY) > 1.5)
            {
               this.var_41[_loc2_].x = this.var_41[_loc2_].y * 0.9 + this.var_41[_loc2_].tweenY * 0.1;
               _loc1_ = false;
            }
            if(this.var_41[_loc2_].tweenX == this.var_16[5].x && this.var_41[_loc2_].tweenY == this.var_16[5].y)
            {
               this.var_41[_loc2_].height = this.var_41[_loc2_].height * 0.9 + 91 * 0.1;
               this.var_41[_loc2_].width = this.var_41[_loc2_].width * 0.9 + 91 * 0.1;
            }
            else
            {
               this.var_41[_loc2_].height = this.var_41[_loc2_].height * 0.9 + 37 * 0.1;
               this.var_41[_loc2_].width = this.var_41[_loc2_].width * 0.9 + 37 * 0.1;
            }
            if(_loc1_ == true)
            {
               this.var_41.splice(_loc2_,1);
            }
            _loc2_++;
         }
         var _loc3_:uint = 0;
         _loc3_ = 0;
         while(_loc3_ < this.var_77.length)
         {
            _loc1_ = true;
            if(Math.abs(this.var_77[_loc3_].alpha - this.var_77[_loc3_].nextAlpha) > 0.01)
            {
               if(this.var_117 != this.var_77[_loc3_])
               {
                  this.var_77[_loc3_].alpha = this.var_77[_loc3_].alpha * 0.9 + this.var_77[_loc3_].nextAlpha * 0.1;
               }
               else
               {
                  this.var_77[_loc3_].alpha = this.var_77[_loc3_].alpha * 0.98 + this.var_77[_loc3_].nextAlpha * 0.02;
               }
               _loc1_ = false;
            }
            if(_loc1_ == true)
            {
               if(this.var_77[_loc3_].blnRemoveMe)
               {
                  if(this.var_77[_loc3_] != null)
                  {
                     removeChild(this.var_77[_loc3_]);
                     this.var_77[_loc3_] = null;
                  }
               }
               this.var_77.splice(_loc3_,1);
            }
            _loc3_++;
         }
         _loc3_ = 0;
         while(_loc3_ < this.var_10.length)
         {
            _loc1_ = true;
            this.var_10[_loc3_].x = this.var_10[_loc3_].centerPointX + Math.sin(this.var_10[_loc3_].angle) * this.var_10[_loc3_].distance;
            this.var_10[_loc3_].y = this.var_10[_loc3_].centerPointY + Math.cos(this.var_10[_loc3_].angle) * this.var_10[_loc3_].distance;
            this.var_10[_loc3_].width = this.var_10[_loc3_].width * 0.95 + this.var_10[_loc3_].scaleTween * 0.05;
            this.var_10[_loc3_].height = this.var_10[_loc3_].height * 0.95 + this.var_10[_loc3_].scaleTween * 0.05;
            if(Boolean(this.var_10[_loc3_].StartAngle + Math.PI > this.var_10[_loc3_].angle) && Boolean(this.var_10[_loc3_].blnLeft) || this.var_10[_loc3_].StartAngle - Math.PI < this.var_10[_loc3_].angle && !this.var_10[_loc3_].blnLeft)
            {
               _loc1_ = false;
               if(this.var_10[_loc3_].blnLeft)
               {
                  this.var_10[_loc3_].angle += Math.PI / this.var_10[_loc3_].intDivider;
               }
               else
               {
                  this.var_10[_loc3_].angle -= Math.PI / this.var_10[_loc3_].intDivider;
               }
               if(Boolean(this.var_10[_loc3_].StartAngle + Math.PI / 2 > this.var_10[_loc3_].angle) && Boolean(this.var_10[_loc3_].blnLeft) || this.var_10[_loc3_].StartAngle - Math.PI / 2 < this.var_10[_loc3_].angle && !this.var_10[_loc3_].blnLeft)
               {
                  this.var_10[_loc3_].intDivider = 1 + this.var_10[_loc3_].intDivider * 0.8;
               }
               else if(this.var_10[_loc3_].intDivider < 280)
               {
                  --this.var_10[_loc3_].intDivider;
                  this.var_10[_loc3_].intDivider *= 1.25;
               }
            }
            else
            {
               this.var_10[_loc3_].x = this.var_10[_loc3_].centerPointX + Math.sin(this.var_10[_loc3_].StartAngle + Math.PI) * this.var_10[_loc3_].distance;
               this.var_10[_loc3_].y = this.var_10[_loc3_].centerPointY + Math.cos(this.var_10[_loc3_].StartAngle + Math.PI) * this.var_10[_loc3_].distance;
            }
            if(_loc1_ == true)
            {
               this.var_10[_loc3_].objSister.x = this.var_10[_loc3_].objSister.centerPointX + Math.sin(this.var_10[_loc3_].objSister.StartAngle + Math.PI) * this.var_10[_loc3_].objSister.distance;
               this.var_10[_loc3_].objSister.y = this.var_10[_loc3_].objSister.centerPointY + Math.cos(this.var_10[_loc3_].objSister.StartAngle + Math.PI) * this.var_10[_loc3_].objSister.distance;
               _loc4_ = this.var_10[_loc3_].objSister.txtBubbleFieldNum_txt.text;
               this.var_10[_loc3_].objSister.txtBubbleFieldNum_txt.text = this.var_10[_loc3_].txtBubbleFieldNum_txt.text;
               this.var_10[_loc3_].txtBubbleFieldNum_txt.text = _loc4_;
               _loc7_ = 0;
               while(_loc7_ < this.arrBubbleFields.length)
               {
                  if(this.arrBubbleFields[_loc7_] == this.var_10[_loc3_])
                  {
                     _loc5_ = _loc7_;
                  }
                  if(this.arrBubbleFields[_loc7_] == this.var_10[_loc3_].objSister)
                  {
                     _loc6_ = _loc7_;
                  }
                  _loc7_++;
               }
               _loc8_ = this.arrBubbleFields[_loc5_];
               this.arrBubbleFields[_loc5_] = this.arrBubbleFields[_loc6_];
               this.arrBubbleFields[_loc6_] = _loc8_;
               _loc9_ = this.var_209.method_60(new ArenaCreatorBubblefieldFlash(),this.var_10[_loc3_].x,this.var_10[_loc3_].y,"mainEffects");
               _loc10_ = this.var_209.method_60(new ArenaCreatorBubblefieldFlash(),this.var_10[_loc3_].objSister.x,this.var_10[_loc3_].objSister.y,"mainEffects");
               _loc9_.width = this.var_10[_loc3_].width;
               _loc9_.height = this.var_10[_loc3_].height;
               _loc10_.width = this.var_10[_loc3_].objSister.width;
               _loc10_.height = this.var_10[_loc3_].objSister.height;
               _loc11_ = this.var_10[_loc3_].objSister;
               this.var_10.splice(_loc3_,1);
               _loc12_ = 0;
               while(_loc12_ < this.var_10.length)
               {
                  if(this.var_10[_loc12_] == _loc11_)
                  {
                     this.var_10.splice(_loc12_,1);
                     break;
                  }
                  _loc12_++;
               }
               this.UpdateEnemyButtons();
            }
            _loc3_++;
         }
      }
      
      private function method_278(param1:Event) : void
      {
         var _loc5_:Array = null;
         var _loc6_:* = undefined;
         var _loc7_:Array = null;
         var _loc2_:URLLoader = URLLoader(param1.target);
         var _loc3_:URLVariables = new URLVariables(_loc2_.data);
         var _loc4_:Number = Number(_loc3_.intResponse);
         if(_loc4_ == 1000)
         {
            if(_loc3_.intTankResponse != "")
            {
               _loc5_ = _loc3_.intTankResponse.split(",");
               _loc6_ = 0;
               while(_loc6_ < _loc5_.length)
               {
                  _loc7_ = _loc5_[_loc6_].split("-");
                  if(_loc7_[1].substr(0,1) == "E")
                  {
                     this.refMain.EditTankID(_loc7_[0],_loc7_[1]);
                  }
                  _loc6_ += 1;
               }
            }
            if(_loc3_.strArenaId.substr(0,1) == "G")
            {
               this.currentArena.strID = _loc3_.strArenaId;
               this.refMain.objCurrentPlayer.EditPreviousArenaID(this.currentArena);
            }
            this.refMain.SaveAllData();
            this.refMain.SaveGameData();
            if(this.var_117 != null)
            {
               if(contains(this.var_117))
               {
                  removeChild(this.var_117);
                  this.var_117 = null;
               }
            }
            this.ShareArena_mc.gotoAndStop(8);
            this.ShareArena_mc.data_txt.text = this.currentArena.strID;
            this.var_8.method_4(this.ShareArena_mc.btnExit_mc,true,this.method_314);
            this.var_8.method_4(this.ShareArena_mc.share_btn,true,this.method_598);
         }
         else
         {
            if(this.var_117 != null)
            {
               if(contains(this.var_117))
               {
                  removeChild(this.var_117);
                  this.var_117 = null;
               }
            }
            this.var_8.method_7(this.ShareArena_mc.btnExit_mc);
            this.var_8.method_7(this.ShareArena_mc.share_btn);
            this.ShareArena_mc.gotoAndStop(9);
            this.method_80(_loc4_);
            this.var_8.method_4(this.ShareArena_mc.return_btn,true,this.method_566);
            this.var_8.method_4(this.ShareArena_mc.exit_btn,true,this.method_572);
            this.refMain.objCurrentPlayer.DeletePrevArena();
         }
      }
      
      private function method_566(param1:Event) : void
      {
         this.var_8.method_7(this.ShareArena_mc.btnExit_mc);
         this.var_8.method_7(this.ShareArena_mc.share_btn);
         this.ShareArena_mc.gotoAndStop(6);
         this.ShareArena_mc.author_txt.text = this.refMain.objCurrentPlayer.profileName;
         this.ShareArena_mc.author_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_20);
         this.ShareArena_mc.tank_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_20);
         this.ShareArena_mc.tank_txt.addEventListener(TextEvent.TEXT_INPUT,this.method_51);
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_267);
         this.var_8.method_4(this.ShareArena_mc.btnContinue_mc,true,this.ConfirmSubmitArena);
      }
      
      private function CallCallbackFunction(param1:Event) : *
      {
         this.var_8.method_10();
         this.funCallBackButton();
      }
      
      public function LoadAnArena(param1:ArenaData, param2:Number, param3:String = null) : void
      {
         var a:uint;
         var tempBubbleFields:ArenaCreatorBubblefield = null;
         var tankData:TankData = null;
         var blnNotSaved:Boolean = false;
         var TankDataSavedList:TankData = null;
         var argArena:ArenaData = param1;
         var currentBubbleField:Number = param2;
         var argStrEnemyTank:String = param3;
         this.currentArena = argArena;
         this.var_5 = currentBubbleField;
         a = 0;
         removeChild(this.arrBubbleFields[0]);
         this.arrBubbleFields.pop();
         this.arrBubbleFields.length = 0;
         try
         {
            a = 0;
            while(a < this.currentArena.var_6.length)
            {
               tempBubbleFields = new ArenaCreatorBubblefield();
               addChild(tempBubbleFields);
               this.arrBubbleFields.push(tempBubbleFields);
               this.arrBubbleFields[a].txtBubbleFieldNum_txt.text = int(a + 1).toString();
               this.arrBubbleFields[a].height = 37;
               this.arrBubbleFields[a].width = 37;
               if(a == this.var_5)
               {
                  this.arrBubbleFields[a].height = 91;
                  this.arrBubbleFields[a].width = 91;
               }
               if(a + 5 - this.var_5 > 0 && a + 5 < this.var_16.length - 1)
               {
                  this.arrBubbleFields[a].x = this.var_16[a + 5].x;
                  this.arrBubbleFields[a].y = this.var_16[a + 5].y;
                  this.arrBubbleFields[a].tweenX = this.arrBubbleFields[a].x;
                  this.arrBubbleFields[a].tweenY = this.arrBubbleFields[a].y;
               }
               else if(a + 5 - this.var_5 <= 0)
               {
                  this.arrBubbleFields[a].x = this.var_16[0].x;
                  this.arrBubbleFields[a].y = this.var_16[0].y;
                  this.arrBubbleFields[a].tweenX = this.arrBubbleFields[a].x;
                  this.arrBubbleFields[a].tweenY = this.arrBubbleFields[a].y;
               }
               else
               {
                  this.arrBubbleFields[a].x = this.var_16[this.var_16.length - 1].x;
                  this.arrBubbleFields[a].y = this.var_16[this.var_16.length - 1].y;
                  this.arrBubbleFields[a].tweenX = this.arrBubbleFields[a].x;
                  this.arrBubbleFields[a].tweenY = this.arrBubbleFields[a].y;
               }
               a++;
            }
         }
         catch(e:*)
         {
         }
         if(argStrEnemyTank != null)
         {
            tankData = new TankData();
            if(tankData.ImportTankData(argStrEnemyTank))
            {
               blnNotSaved = true;
               a = 0;
               while(a < this.refMain.objCurrentPlayer.arrSavedTanks.length)
               {
                  TankDataSavedList = new TankData();
                  TankDataSavedList.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[a].Data);
                  if(this.method_122(tankData,TankDataSavedList))
                  {
                     blnNotSaved = false;
                     break;
                  }
                  a++;
               }
               if(blnNotSaved)
               {
                  this.refMain.objCurrentPlayer.method_73(argStrEnemyTank);
               }
               this.currentArena.method_66(this.var_5,tankData.strID,tankData.strTankName);
            }
         }
         this.UpdateAreanBubbleLocation();
         this.UpdateEnemyButtons();
         this.UpdateQuickKeyButtons();
      }
      
      private function method_613() : void
      {
      }
      
      private function method_280(param1:HTTPStatusEvent) : void
      {
      }
   }
}

