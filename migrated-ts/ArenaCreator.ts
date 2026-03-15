// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class ArenaCreator extends MovieClip{
      
      public btnDelete1_mc: MovieClip;
      public currentArena: ArenaData;
      private var_117: class_96;
      public btnQuickTank10_mc: MovieClip;
      public txtNumber2_mc: MovieClip;
      public btnQuickTank3_mc: MovieClip;
      private var_8: class_3;
      public txtTank1_txt: TextField;
      public btnTank2_mc: MovieClip;
      public txtTank3_txt: TextField;
      public txtButtonRollOverSetting_txt: TextField;
      public btnDelete4_mc: MovieClip;
      private var_41: any[];
      private var_16: any[];
      public btnMinus2_mc: MovieClip;
      private var_103: any[];
      public btnLeftArrow_mc: MovieClip;
      public btnQuickTank6_mc: MovieClip;
      public btnAdd3_mc: MovieClip;
      private var_437: Sprite;
      private var_209: class_5;
      private var_10: any[];
      public btnMoveBblFieldRight_mc: MovieClip;
      private objTutorialButtonControl: class_3;
      public btnQuickTank1_mc: MovieClip;
      private funCallBackButton: Function;
      public btnDelete2_mc: MovieClip;
      private arrBubbleFields: any[];
      public btnQuickTank9_mc: MovieClip;
      public complexity_mc: MovieClip;
      private var_531: boolean;
      public txtNumber3_mc: MovieClip;
      public btnQuickTank4_mc: MovieClip;
      private var_77: any[];
      public btnSubmitArena_mc: MovieClip;
      private var_192: boolean;
      public btnTank3_mc: MovieClip;
      public btnAdd1_mc: MovieClip;
      private var_27: any[];
      public btnMinus3_mc: MovieClip;
      public btnQuickTank7_mc: MovieClip;
      public var_19: MovieClip;
      public ComplexityRollOver_mc: MovieClip;
      public txtTank2_txt: TextField;
      public txtTank4_txt: TextField;
      public btnAdd4_mc: MovieClip;
      public btnMoveBblFieldLeft_mc: MovieClip;
      private ShareArena_mc: ShareArena;
      public txtNumber1_mc: MovieClip;
      public btnQuickTank2_mc: MovieClip;
      public btnDelete3_mc: MovieClip;
      public btnTank1_mc: MovieClip;
      public btnRightArrow_mc: MovieClip;
      public btnMinus1_mc: MovieClip;
      public txtNumber4_mc: MovieClip;
      public btnQuickTank5_mc: MovieClip;
      public BubbleFieldLocations_mc: MovieClip;
      public btnTank4_mc: MovieClip;
      public btnAdd2_mc: MovieClip;
      private refMain: class_79;
      public var_5: number;
      public btnBack_mc: MovieClip;
      public btnMinus4_mc: MovieClip;
      public btnQuickTank8_mc: MovieClip;
      constructor(param1: boolean = false, param2: class_79 = null as any, param3: Function = null as any){
    super(); // AUTO-INJECTED
         let _loc4_: ArenaCreatorBubblefield = null;
         let _loc5_: number = 0;
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
            this.addChild(_loc4_);
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
            this.addChild(this.var_437);
            this.complexity_mc.scaleX = 0;
            this.ComplexityRollOver_mc.alpha = 0;
            this.var_8.method_4(this.ComplexityRollOver_mc,true,this.method_613);
            this.method_669();
         }
      }
      
      private AddTankSelectButton(param1: MovieClip): void
      {
         this.var_8.method_4(param1,true,this.method_436);
         param1.txtButton_txt.text = "Add Enemy Tank";
         param1.x = 275;
      }
      
      private UpdateArenaBubbles(): any
      {
         let _loc1_: any = undefined;
         let _loc3_: ArenaCreatorBubblefield = null;
         let _loc2_: number = this.arrBubbleFields.length;
         let _loc4_: number = 0;
         _loc4_ = 0;
         while(_loc4_ < _loc2_)
         {
            if(this.contains(this.arrBubbleFields[0]))
            {
               this.removeChild(this.arrBubbleFields[0]);
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
            this.addChild(_loc3_);
            this.arrBubbleFields.push(_loc3_);
            this.arrBubbleFields[_loc4_].txtBubbleFieldNum_txt.text = Math.floor(_loc4_ + 1).toString();
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
      
      public method_51(param1: TextEvent): void
      {
         let _loc4_: number = 0;
         let _loc2_: TextField = (param1.target as unknown as TextField);
         let _loc3_: RegExp = /[^a-zA-Z0-9 _\-']/;
         if(param1.text.search(_loc3_) != -1)
         {
            param1.preventDefault();
            _loc2_.replaceText(_loc2_.caretIndex,_loc2_.caretIndex,"");
            _loc4_ = _loc2_.caretIndex + param1.text.length;
            _loc2_.setSelection(_loc4_,_loc4_);
         }
      }
      
      private UpdateComplexityBar(): any
      {
         let _loc1_: number = 0;
         let _loc2_: number = 0;
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
      
      private method_661(param1: Event): void
      {
         param1.target.scaleX += 0.1;
         param1.target.scaleY += 0.1;
         this.txtButtonRollOverSetting_txt.text = "Click the bubble field to switch to that one";
      }
      
      private method_436(param1: Event): void
      {
         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.var_8.method_10();
         this.refMain.method_634();
      }
      
      private method_679(param1: Event): any
      {
         if(this.currentArena.method_351(0).length == 0)
         {
            this.txtButtonRollOverSetting_txt.text = "You have to have an enemy to submit";
            return;
         }
         this.ShareArena_mc = new ShareArena();
         this.addChild(this.ShareArena_mc);
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
      
      private AddToTank3(param1: Event): void
      {
         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.currentArena.method_66(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[2].ID);
         this.UpdateEnemyButtons();
      }
      
      private ConfirmSubmitArena(param1: Event): any
      {
         this.ShareArena_mc.author_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.removeEventListener(TextEvent.TEXT_INPUT, this.method_51.bind(this));
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
         this.var_8.method_7(this.ShareArena_mc.btnContinue_mc);
         this.currentArena.var_275 = this.ShareArena_mc.author_txt.text;
         this.currentArena.strName = this.ShareArena_mc.tank_txt.text;
         this.currentArena.strID = "H" + this.refMain.intArenaCountMaster.toString();
         this.ShareArena_mc.gotoAndStop(7);
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_541);
         this.var_8.method_4(this.ShareArena_mc.agree_btn,true,this.method_516);
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
      
      private method_267(param1: Event): any
      {
         this.ShareArena_mc.author_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.removeEventListener(TextEvent.TEXT_INPUT, this.method_51.bind(this));
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
         this.var_8.method_7(this.ShareArena_mc.btnContinue_mc);
      }
      
      private method_564(param1: Event): any
      {
         this.var_8.method_7(this.ShareArena_mc.btnServer_mc);
         this.var_8.method_7(this.ShareArena_mc.btnLocal_mc);
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      private AddToTank1(param1: Event): void
      {
         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.currentArena.method_66(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[0].ID);
         this.UpdateEnemyButtons();
      }
      
      private tutUp(param1: MouseEvent): void
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
               this.removeChild(this.var_19);
            }
            else
            {
               this.var_19.nextFrame();
            }
         }
      }
      
      private method_733(param1: Event): void
      {
         param1.target.line_mc.alpha = 0;
         this.txtButtonRollOverSetting_txt.text = "";
      }
      
      private method_253(param1: SecurityErrorEvent): void
      {
         this.method_80(8000);
      }
      
      private method_577(): void
      {
         let _loc1_: number = 0;
         while(_loc1_ < this.arrBubbleFields.length)
         {
            if(this.var_5 != _loc1_)
            {
               this.var_8.method_4(this.arrBubbleFields[_loc1_],true,this.method_721,this.method_661,this.method_617);
            }
            _loc1_++;
         }
      }
      
      private AddToTank4(param1: Event): void
      {
         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.currentArena.method_66(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[3].ID);
         this.UpdateEnemyButtons();
      }
      
      private method_93(param1: MovieClip, param2: string = "fuggly", param3: number = 1): void
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
      
      public ReturnToArenaSelectScreenAfterSubmit2(): void
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
      
      public method_314(param1: Event): void
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
      
      private MoveCurrentBubblefieldRight(param1: Event): any
      {
         let _loc2_: any = undefined;
         let _loc3_: Point = null;
         let _loc4_: number = NaN;
         let _loc5_: number = NaN;
         let _loc6_: number = NaN;
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
      
      private method_632(param1: number = 0, param2: number = 0, param3: number = 0, param4: number = 0, param5: number = 0, param6: number = 0): number
      {
         param5 = param1 - param3;
         param6 = param2 - param4;
         return Math.sqrt(param5 * param5 + param6 * param6);
      }
      
      private method_782(param1: MovieClip, param2: string = "", param3: string = "guy"): void
      {
         1;
         if(param1 == this.btnTank1_mc)
         {
            let _loc4_: number = this.currentArena.method_66(this.var_5,param2,param3);
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
      
      private MinusToTank1(param1: Event): void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         let _loc2_: boolean = false;
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
      
      private method_113(param1: any): void
      {
         let _loc2_: boolean = true;
         let _loc3_: number = 0;
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
      
      private UpdateEnemyButtons(): void
      {
         this.method_325();
         this.UpdateComplexityBar();
         let _loc1_: any[] = this.currentArena.method_351(this.var_5);
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
      
      public frame1(): any
      {
         this.stop();
      }
      
      private MinusToTank2(param1: Event): void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         let _loc2_: boolean = false;
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
      
      private SaveToLocalAuthorName(param1: Event): any
      {
         this.var_8.method_7(this.ShareArena_mc.btnServer_mc);
         this.var_8.method_7(this.ShareArena_mc.btnLocal_mc);
         this.ShareArena_mc.gotoAndStop(6);
         this.ShareArena_mc.author_txt.text = this.refMain.objCurrentPlayer.profileName;
         this.ShareArena_mc.author_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.addEventListener(TextEvent.TEXT_INPUT, this.method_51.bind(this));
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_267);
         this.var_8.method_4(this.ShareArena_mc.btnContinue_mc,true,this.method_716);
      }
      
      private method_198(param1: any): void
      {
         let _loc2_: boolean = true;
         let _loc3_: number = 0;
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
      
      private MinusToTank3(param1: Event): void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         let _loc2_: boolean = false;
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
      
      private DeleteTank3(param1: Event): void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         let _loc2_: boolean = false;
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
      
      private AddToTank2(param1: Event): void
      {
         if(this.var_10.length > 0 || this.var_192)
         {
            return;
         }
         this.currentArena.method_66(this.var_5,this.currentArena.var_6[this.var_5].arrEnemies[1].ID);
         this.UpdateEnemyButtons();
      }
      
      private SaveToServerAuthorName(param1: Event): any
      {
         this.var_8.method_7(this.ShareArena_mc.btnServer_mc);
         this.var_8.method_7(this.ShareArena_mc.btnLocal_mc);
         this.ShareArena_mc.gotoAndStop(6);
         this.ShareArena_mc.author_txt.text = this.refMain.objCurrentPlayer.profileName;
         this.ShareArena_mc.author_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.addEventListener(TextEvent.TEXT_INPUT, this.method_51.bind(this));
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_267);
         this.var_8.method_4(this.ShareArena_mc.btnContinue_mc,true,this.ConfirmSubmitArena);
      }
      
      private method_721(param1: Event): void
      {
         let _loc4_: number = NaN;
         0;
         let _loc2_: Function = this.method_465;
         let _loc3_: number = 0;
         while(_loc3_ < this.arrBubbleFields.length)
         {
            if(param1.currentTarget == this.arrBubbleFields[_loc3_])
            {
               if(_loc3_ > this.var_5)
               {
                  _loc2_ = this.method_293;
               }
               _loc4_ = Math.abs(this.var_5 - _loc3_);
               let _loc5_: number = 0;
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
      
      private DeleteTank2(param1: Event): void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         let _loc2_: boolean = false;
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
      
      public method_80(param1: number): void
      {
         let _loc2_: string = "An error prevented your arena from being saved.  We apologize for the inconvenience.";
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
      
      private method_20(param1: Event): void
      {
         param1.target.text = "";
         param1.target.removeEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
      }
      
      private method_221(param1: ArenaCreatorBubblefield): boolean
      {
         let _loc2_: boolean = true;
         let _loc3_: number = 0;
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
      
      private method_553(): boolean
      {
         let _loc1_: ArenaCreatorBubblefield = null;
         if(this.currentArena.method_553())
         {
            _loc1_ = new ArenaCreatorBubblefield();
            this.addChild(_loc1_);
            this.arrBubbleFields.push(_loc1_);
            this.arrBubbleFields[this.arrBubbleFields.length - 1].txtBubbleFieldNum_txt.text = Math.floor(this.var_5 + 2).toString();
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
      
      private method_628(param1: Event): void
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
      
      private method_465(param1: Event): void
      {
         let _loc2_: number = 0;
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
      
      private DeleteTank4(param1: Event): void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         let _loc2_: boolean = false;
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
      
      private method_669(): void
      {
         if(this.refMain.objCurrentPlayer.var_260 == false)
         {
            this.refMain.objCurrentPlayer.var_260 = true;
            this.var_19 = new ArenaCreatorTutorial();
            let _temp_3: any = this.var_19;
            let _temp_2: any = this.var_19;
            let _temp_1: any = 0;
            0;
            _temp_2.y = _temp_1;
            _temp_3.x = 0;
            this.addChild(this.var_19);
            this.objTutorialButtonControl = new class_3();
            this.objTutorialButtonControl.Setup(this.tutUp);
            this.objTutorialButtonControl.method_4(this.var_19.back_mc);
            this.objTutorialButtonControl.method_4(this.var_19.next_mc);
            this.var_19.back_mc.gotoAndStop("off");
            this.var_19.next_mc.gotoAndStop("off");
         }
      }
      
      private method_572(param1: Event): void
      {
         this.var_8.method_7(this.ShareArena_mc.btnExit_mc);
         this.var_8.method_7(this.ShareArena_mc.share_btn);
         this.method_314(new Event("bay"));
      }
      
      private DeleteTank1(param1: Event): void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         let _loc2_: boolean = false;
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
      
      private method_716(param1: Event): any
      {
         this.ShareArena_mc.author_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.removeEventListener(TextEvent.TEXT_INPUT, this.method_51.bind(this));
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
      
      private UpdateAreanBubbleLocation(): void
      {
         undefined;
         let _loc2_: number = 0;
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
      
      private method_541(param1: Event): any
      {
         this.ShareArena_mc.mouseChildren = false;
         this.ShareArena_mc.mouseEnabled = false;
         this.ShareArena_mc.nextAlpha = 0;
         this.ShareArena_mc.blnRemoveMe = true;
         this.method_113(this.ShareArena_mc);
         this.var_8.method_7(this.ShareArena_mc.agree_btn);
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
      }
      
      private MinusToTank4(param1: Event): void
      {
         if(this.var_10.length > 0)
         {
            return;
         }
         let _loc2_: boolean = false;
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
      
      private method_493(param1: Event): void
      {
         let var_40: string;
         let var_56: any;
         let var_126: URLLoader;
         let var_150: URLRequest;
         let var_157: string;
         let var_194: URLVariables;
         let var_106: Event = param1;
         this.var_117 = new class_96();
         this.addChild(this.var_117);
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
         var_126.addEventListener(Event.COMPLETE, this.method_278.bind(this));
         var_126.addEventListener(HTTPStatusEvent.HTTP_STATUS, this.method_280.bind(this));
         var_126.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
         var_126.addEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
         try
         {
            var_126.load(var_150);
         }
         catch (e: any)
         {
         }
      }
      
      private method_617(param1: Event): void
      {
         param1.target.scaleX -= 0.1;
         param1.target.scaleY -= 0.1;
         this.txtButtonRollOverSetting_txt.text = "";
      }
      
      private method_254(param1: IOErrorEvent): void
      {
         this.method_80(8000);
      }
      
      public method_598(param1: MouseEvent): void
      {
         this.refMain.method_370();
         this.refMain.method_416(this.currentArena.strID,this.currentArena.strID,null,this.refMain.GameShareArenaCallback);
      }
      
      private method_92(): any
      {
         undefined;
         let _loc2_: number = 0;
         while(_loc2_ < this.currentArena.var_6.length - 1)
         {
            if(this.currentArena.var_6[_loc2_].arrEnemies.length == 0)
            {
               this.currentArena.var_6[_loc2_] = this.currentArena.var_6[this.currentArena.var_6.length - 1];
               let _loc1_: any = this.currentArena.var_6.pop();
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
      
      private method_544(): void
      {
         let _loc1_: number = 0;
         while(_loc1_ < this.arrBubbleFields.length)
         {
            this.var_8.method_7(this.arrBubbleFields[_loc1_]);
            _loc1_++;
         }
      }
      
      private method_516(param1: Event): any
      {
         this.var_8.method_7(this.ShareArena_mc.cancel_btn);
         this.var_8.method_7(this.ShareArena_mc.agree_btn);
         this.refMain.intArenaCountMaster += 1;
         this.refMain.SaveGameData();
         this.refMain.objCurrentPlayer.method_283(this.currentArena);
         this.method_493(param1);
      }
      
      private method_325(): void
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
      
      private method_107(param1: Event): void
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
            this.txtButtonRollOverSetting_txt.text = "There instanceof a max complexity for each bubblefield.";
         }
         param1.target.gotoAndStop(2);
      }
      
      public method_177(param1: MovieClip, param2: string = "", param3: number = 1, param4: string = "guy"): void
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
      
      private UpdateQuickKeyButtons(): void
      {
         let _loc2_: number = NaN;
         let _loc3_: number = NaN;
         null;
         undefined;
         null;
         let _loc7_: number = NaN;
         null;
         null;
         let _loc10_: number = NaN;
         null;
         null;
         null;
         null;
         let _loc1_: number = 0;
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
               let _loc4_: TankData = this.refMain.RetrieveTankDataFromID(this.var_27[_loc1_].ID);
               if(_loc4_ == null)
               {
               }
               let _loc5_: any = null.method_61();
               this.var_27[_loc1_].addChild(undefined);
               let _loc6_: MovieClip = new class_77();
               _loc6_.alpha = 0;
               undefined.addChild(null);
               _loc7_ = Number(null.GetLargestXDistanceFromRegistration());
               let _loc8_: MovieClip = new class_77();
               _loc8_.x = _loc7_;
               null.alpha = 0;
               undefined.addChild(null);
               let _loc9_: MovieClip = new class_77();
               _loc9_.x = -1 * _loc7_;
               null.alpha = 0;
               undefined.addChild(null);
               _loc10_ = Number(null.GetLargestYDistanceFromRegistration());
               let _loc11_: MovieClip = new class_77();
               _loc11_.y = _loc10_;
               null.alpha = 0;
               undefined.addChild(null);
               let _loc12_: MovieClip = new class_77();
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
               let _loc13_: Sprite = new Sprite();
               let _loc14_: class_51 = new class_51(this.var_27[_loc1_].width,this.var_27[_loc1_].height);
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
      
      private method_112(param1: Event): void
      {
         this.txtButtonRollOverSetting_txt.text = "";
         param1.target.gotoAndStop(1);
      }
      
      private MoveCurrentBubblefieldLeft(param1: Event): void
      {
         let _loc2_: any = undefined;
         let _loc3_: Point = null;
         let _loc4_: number = NaN;
         let _loc5_: number = NaN;
         let _loc6_: number = NaN;
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
      
      private method_484(param1: Event): void
      {
         if(param1.target.ID != -1)
         {
            param1.target.line_mc.alpha = 1;
         }
         this.txtButtonRollOverSetting_txt.text = "Tanks in your arena, max of 10";
      }
      
      private method_293(param1: Event): void
      {
         let _loc2_: number = 0;
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
      
      public Destroy(): void
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
            this.removeChildAt(0);
         }
      }
      
      public Update(): void
      {
         let _loc4_: string = null;
         let _loc5_: number = NaN;
         let _loc6_: number = NaN;
         let _loc7_: number = 0;
         let _loc8_: ArenaCreatorBubblefield = null;
         let _loc9_: MovieClip = null;
         let _loc10_: MovieClip = null;
         let _loc11_: ArenaCreatorBubblefield = null;
         let _loc12_: number = 0;
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
         let _loc1_: boolean = true;
         let _loc2_: number = 0;
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
         let _loc3_: number = 0;
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
                     this.removeChild(this.var_77[_loc3_]);
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
      
      private method_278(param1: Event): void
      {
         let _loc5_: any[] = null;
         let _loc6_: any = undefined;
         let _loc7_: any[] = null;
         let _loc2_: URLLoader = (param1.target as unknown as URLLoader);
         let _loc3_: URLVariables = new URLVariables(_loc2_.data);
         let _loc4_: number = Number(_loc3_.intResponse);
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
               if(this.contains(this.var_117))
               {
                  this.removeChild(this.var_117);
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
               if(this.contains(this.var_117))
               {
                  this.removeChild(this.var_117);
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
      
      private method_566(param1: Event): void
      {
         this.var_8.method_7(this.ShareArena_mc.btnExit_mc);
         this.var_8.method_7(this.ShareArena_mc.share_btn);
         this.ShareArena_mc.gotoAndStop(6);
         this.ShareArena_mc.author_txt.text = this.refMain.objCurrentPlayer.profileName;
         this.ShareArena_mc.author_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ShareArena_mc.tank_txt.addEventListener(TextEvent.TEXT_INPUT, this.method_51.bind(this));
         this.var_8.method_4(this.ShareArena_mc.cancel_btn,true,this.method_267);
         this.var_8.method_4(this.ShareArena_mc.btnContinue_mc,true,this.ConfirmSubmitArena);
      }
      
      private CallCallbackFunction(param1: Event): any
      {
         this.var_8.method_10();
         this.funCallBackButton();
      }
      
      public LoadAnArena(param1: ArenaData, param2: number, param3: string = null as any): void
      {
         let a: number;
         let tempBubbleFields: ArenaCreatorBubblefield = null;
         let tankData: TankData = null;
         let blnNotSaved: boolean = false;
         let TankDataSavedList: TankData = null;
         let argArena: ArenaData = param1;
         let currentBubbleField: number = param2;
         let argStrEnemyTank: string = param3;
         this.currentArena = argArena;
         this.var_5 = currentBubbleField;
         a = 0;
         this.removeChild(this.arrBubbleFields[0]);
         this.arrBubbleFields.pop();
         this.arrBubbleFields.length = 0;
         try
         {
            a = 0;
            while(a < this.currentArena.var_6.length)
            {
               tempBubbleFields = new ArenaCreatorBubblefield();
               this.addChild(tempBubbleFields);
               this.arrBubbleFields.push(tempBubbleFields);
               this.arrBubbleFields[a].txtBubbleFieldNum_txt.text = Math.floor(a + 1).toString();
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
      
      private method_613(): void
      {
      }
      
      private method_280(param1: HTTPStatusEvent): void
      {
      }
   }
