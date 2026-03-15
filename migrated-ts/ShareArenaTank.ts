// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class ShareArenaTank extends Sprite{
      
      public txtShare_txt: TextField;
      public var_203: Function;
      public btnNoThanks_mc: MovieClip;
      public dataString: string;
      public btnSubmit_mc: MovieClip;
      public var_8: class_3;
      public txtFriend1_txt: TextField;
      public txtFriend2_txt: TextField;
      public txtFriend5_txt: TextField;
      public txtFriend3_txt: TextField;
      public txtFriend4_txt: TextField;
      constructor(param1: string = "Arena", param2: Function = null as any){
         super();
         this.var_203 = param2;
         if(param1 == "Tank")
         {
            this.txtShare_txt.text = "Share Your Tank!";
         }
         this.var_8 = new class_3();
         this.var_8.Setup(this.BtnUp,this.method_107,this.method_112);
         this.var_8.method_4(this.btnSubmit_mc);
         this.var_8.method_4(this.btnNoThanks_mc);
         this.txtFriend1_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_62.bind(this));
         this.txtFriend2_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_62.bind(this));
         this.txtFriend3_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_62.bind(this));
         this.txtFriend4_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_62.bind(this));
         this.txtFriend5_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_62.bind(this));
      }
      
      public method_107(param1: Event): void
      {
         param1.target.gotoAndStop(2);
      }
      
      public method_112(param1: Event): void
      {
         if(!param1.target.selected)
         {
            param1.target.gotoAndStop(1);
         }
      }
      
      private method_62(param1: Event): any
      {
         param1.target.text = "";
         param1.target.removeEventListener(FocusEvent.FOCUS_IN, this.method_62.bind(this));
      }
      
      public Destroy(): any
      {
         this.var_8.method_10();
         if(this.txtFriend1_txt.hasEventListener(FocusEvent.FOCUS_IN))
         {
            this.txtFriend1_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_62.bind(this));
         }
         if(this.txtFriend2_txt.hasEventListener(FocusEvent.FOCUS_IN))
         {
            this.txtFriend2_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_62.bind(this));
         }
         if(this.txtFriend3_txt.hasEventListener(FocusEvent.FOCUS_IN))
         {
            this.txtFriend3_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_62.bind(this));
         }
         if(this.txtFriend4_txt.hasEventListener(FocusEvent.FOCUS_IN))
         {
            this.txtFriend4_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_62.bind(this));
         }
         if(this.txtFriend5_txt.hasEventListener(FocusEvent.FOCUS_IN))
         {
            this.txtFriend5_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_62.bind(this));
         }
      }
      
      private BtnUp(param1: Event): any
      {
         let _loc2_: any[] = null;
         if(param1.target == this.btnSubmit_mc)
         {
            if((this.txtFriend1_txt.text == "" || this.txtFriend1_txt.text == "Type Here") && (this.txtFriend2_txt.text == "" || this.txtFriend2_txt.text == "Type Here") && (this.txtFriend3_txt.text == "" || this.txtFriend3_txt.text == "Type Here") && (this.txtFriend4_txt.text == "" || this.txtFriend4_txt.text == "Type Here") && (this.txtFriend5_txt.text == "" || this.txtFriend5_txt.text == "Type Here"))
            {
               this.Destroy();
               this.var_203();
            }
            else
            {
               _loc2_ = new Array();
               if(this.txtFriend1_txt.text != "" && this.txtFriend1_txt.text != "Type Here")
               {
                  _loc2_.push(this.txtFriend1_txt.text);
               }
               if(this.txtFriend2_txt.text != "" && this.txtFriend2_txt.text != "Type Here")
               {
                  _loc2_.push(this.txtFriend2_txt.text);
               }
               if(this.txtFriend3_txt.text != "" && this.txtFriend3_txt.text != "Type Here")
               {
                  _loc2_.push(this.txtFriend3_txt.text);
               }
               if(this.txtFriend4_txt.text != "" && this.txtFriend4_txt.text != "Type Here")
               {
                  _loc2_.push(this.txtFriend4_txt.text);
               }
               if(this.txtFriend5_txt.text != "" && this.txtFriend5_txt.text != "Type Here")
               {
                  _loc2_.push(this.txtFriend5_txt.text);
               }
               this.Destroy();
               this.var_203(_loc2_);
               _loc2_.length = 0;
               _loc2_ = null;
            }
         }
         else if(param1.target == this.btnNoThanks_mc)
         {
            this.Destroy();
            this.var_203();
         }
      }
   }
