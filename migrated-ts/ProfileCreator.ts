// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class ProfileCreator extends MovieClip{
      
      private var_316: Stage;
      private var_203: Function;
      public blnOverwriteMode: boolean;
      private mRef: class_79;
      private var_505: class_80;
      public inner: MovieClip;
      private var_280: number;
      constructor(){
         super();
         this.inner.profile_name_txt.text = "Enter Name Here";
         this.inner.back_btn.addEventListener(MouseEvent.MOUSE_OVER, this.btnOver.bind(this));
         this.inner.back_btn.addEventListener(MouseEvent.MOUSE_OUT, this.btnOut.bind(this));
         this.inner.back_btn.addEventListener(MouseEvent.MOUSE_UP, this.btnUp.bind(this));
         let _temp_3: any = this.inner.back_btn;
         let _temp_2: any = this.inner.back_btn;
         let _temp_1: any = true;
         true;
         _temp_2.useHandCursor = _temp_1;
         _temp_3.buttonMode = true;
         this.inner.submit_btn.addEventListener(MouseEvent.MOUSE_OVER, this.btnOver.bind(this));
         this.inner.submit_btn.addEventListener(MouseEvent.MOUSE_OUT, this.btnOut.bind(this));
         this.inner.submit_btn.addEventListener(MouseEvent.MOUSE_UP, this.btnUp.bind(this));
         let _temp_4: any = this.inner.submit_btn;
         let _loc1_: boolean;
         this.inner.submit_btn.useHandCursor = _loc1_ = true;
         _temp_4.buttonMode = true;
         this.inner.profile_name_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_603.bind(this));
         this.inner.prof1_mc.addEventListener(MouseEvent.MOUSE_OVER, this.btnOver.bind(this));
         this.inner.prof1_mc.addEventListener(MouseEvent.MOUSE_OUT, this.btnOut.bind(this));
         this.inner.prof1_mc.addEventListener(MouseEvent.MOUSE_UP, this.btnUp.bind(this));
         let _temp_5: any = this.inner.prof1_mc;
         this.inner.prof1_mc.useHandCursor = _loc1_ = true;
         _temp_5.buttonMode = true;
         this.inner.prof1_mc.mouseChildren = false;
         this.inner.prof2_mc.addEventListener(MouseEvent.MOUSE_OVER, this.btnOver.bind(this));
         this.inner.prof2_mc.addEventListener(MouseEvent.MOUSE_OUT, this.btnOut.bind(this));
         this.inner.prof2_mc.addEventListener(MouseEvent.MOUSE_UP, this.btnUp.bind(this));
         let _temp_6: any = this.inner.prof2_mc;
         this.inner.prof2_mc.useHandCursor = _loc1_ = true;
         _temp_6.buttonMode = true;
         this.inner.prof2_mc.mouseChildren = false;
         this.inner.prof3_mc.addEventListener(MouseEvent.MOUSE_OVER, this.btnOver.bind(this));
         this.inner.prof3_mc.addEventListener(MouseEvent.MOUSE_OUT, this.btnOut.bind(this));
         this.inner.prof3_mc.addEventListener(MouseEvent.MOUSE_UP, this.btnUp.bind(this));
         let _temp_7: any = this.inner.prof3_mc;
         this.inner.prof3_mc.useHandCursor = _loc1_ = true;
         _temp_7.buttonMode = true;
         this.inner.prof3_mc.mouseChildren = false;
         this.inner.cancel_btn.addEventListener(MouseEvent.MOUSE_OVER, this.btnOver.bind(this));
         this.inner.cancel_btn.addEventListener(MouseEvent.MOUSE_OUT, this.btnOut.bind(this));
         this.inner.cancel_btn.addEventListener(MouseEvent.MOUSE_UP, this.btnUp.bind(this));
         let _temp_8: any = this.inner.cancel_btn;
         this.inner.cancel_btn.useHandCursor = _loc1_ = true;
         _temp_8.buttonMode = true;
         this.inner.cancel_btn.mouseChildren = false;
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
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
      
      private method_603(param1: FocusEvent): void
      {
         param1.target.text = "";
      }
      
      private btnOver(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("on");
      }
      
      private method_521(): void
      {
         this.var_280 = 0;
         let _loc1_: number = 0;
         while(_loc1_ < 3)
         {
            if(this.mRef["objPlayer" + (_loc1_ + 1) + "Profile"].profileName != null && this.mRef["objPlayer" + (_loc1_ + 1) + "Profile"].profileName != "")
            {
               ++this.var_280;
               this.inner["prof" + (_loc1_ + 1) + "_mc"].info.gotoAndStop("data");
               this.inner["prof" + (_loc1_ + 1) + "_mc"].info.profileName_txt.text = this.mRef["objPlayer" + (_loc1_ + 1) + "Profile"].profileName;
               this.inner["prof" + (_loc1_ + 1) + "_mc"].info.arenasComplete_txt.text = Math.floor(this.mRef["objPlayer" + (_loc1_ + 1) + "Profile"].arrBeatArenaIDs.length);
               this.inner["prof" + (_loc1_ + 1) + "_mc"].info.tankProgress_txt.text = this.mRef.method_497(_loc1_ + 1) + "%";
            }
            _loc1_++;
         }
      }
      
      private btnUp(param1: MouseEvent): void
      {
         let _loc2_: boolean = false;
         let _loc3_: number = 0;
         if(param1.target.name == "back_btn")
         {
            this.var_203("back");
         }
         else if(param1.target.name == "cancel_btn")
         {
            this.mRef.method_769();
         }
         else if(param1.target.name == "submit_btn")
         {
            if(this.blnOverwriteMode == false)
            {
               _loc2_ = false;
               _loc3_ = 0;
               while(_loc3_ < this.inner.profile_name_txt.length)
               {
                  if(this.inner.profile_name_txt.text.substr(_loc3_,1) != " " && this.inner.profile_name_txt.text.substr(_loc3_,1) != "")
                  {
                     _loc2_ = true;
                     break;
                  }
                  _loc3_++;
               }
               if(this.inner.profile_name_txt.text != "Enter Name Here" && _loc2_ == true && this.inner.profile_name_txt.text != "Enter Valid Profile Name")
               {
                  this.var_203("new",this.inner.profile_name_txt.text);
               }
               else
               {
                  this.inner.profile_name_txt.text = "Enter Valid Profile Name";
               }
            }
         }
         else if(param1.target.name == "prof1_mc")
         {
            if(this.var_280 > 0)
            {
               if(this.blnOverwriteMode == false)
               {
                  this.var_203("load","",1);
               }
               else
               {
                  this.var_203("new",this.inner.profile_name_txt.text,1);
               }
            }
         }
         else if(param1.target.name == "prof2_mc")
         {
            if(this.var_280 > 1)
            {
               if(this.blnOverwriteMode == false)
               {
                  this.var_203("load","",2);
               }
               else
               {
                  this.var_203("new",this.inner.profile_name_txt.text,2);
               }
            }
         }
         else if(param1.target.name == "prof3_mc")
         {
            if(this.var_280 > 2)
            {
               if(this.blnOverwriteMode == false)
               {
                  this.var_203("load","",3);
               }
               else
               {
                  this.var_203("new",this.inner.profile_name_txt.text,3);
               }
            }
         }
      }
      
      private btnOut(param1: MouseEvent): void
      {
         if(param1.target.name == "prof1_mc" || param1.target.name == "prof2_mc" || param1.target.name == "prof3_mc")
         {
            param1.target.gotoAndPlay("toOff");
         }
         else
         {
            param1.target.gotoAndStop("off");
         }
      }
      
      public Setup(param1: class_79, param2: Stage, param3: class_80, param4: Function): void
      {
         this.mRef = param1;
         this.var_316 = param2;
         this.var_505 = param3;
         this.var_203 = param4;
         this.blnOverwriteMode = false;
         this.method_521();
         this.inner.profile_name_txt.addEventListener(TextEvent.TEXT_INPUT, this.method_51.bind(this));
      }
      
      public RemoveProfileCreator(): void
      {
         this.inner.profile_name_txt.removeEventListener(TextEvent.TEXT_INPUT, this.method_51.bind(this));
         this.inner.back_btn.removeEventListener(MouseEvent.MOUSE_OVER, this.btnOver.bind(this));
         this.inner.back_btn.removeEventListener(MouseEvent.MOUSE_OUT, this.btnOut.bind(this));
         this.inner.back_btn.removeEventListener(MouseEvent.MOUSE_UP, this.btnUp.bind(this));
         this.inner.submit_btn.removeEventListener(MouseEvent.MOUSE_OVER, this.btnOver.bind(this));
         this.inner.submit_btn.removeEventListener(MouseEvent.MOUSE_OUT, this.btnOut.bind(this));
         this.inner.submit_btn.removeEventListener(MouseEvent.MOUSE_UP, this.btnUp.bind(this));
         this.var_505.removeChild(this);
      }
   }
