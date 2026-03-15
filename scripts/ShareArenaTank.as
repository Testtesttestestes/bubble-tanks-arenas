package
{
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.FocusEvent;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol1685")]
   public class ShareArenaTank extends Sprite
   {
      
      public var txtShare_txt:TextField;
      
      internal var var_203:Function;
      
      public var btnNoThanks_mc:MovieClip;
      
      internal var dataString:String;
      
      public var btnSubmit_mc:MovieClip;
      
      internal var var_8:class_3;
      
      public var txtFriend1_txt:TextField;
      
      public var txtFriend2_txt:TextField;
      
      public var txtFriend5_txt:TextField;
      
      public var txtFriend3_txt:TextField;
      
      public var txtFriend4_txt:TextField;
      
      public function ShareArenaTank(param1:String = "Arena", param2:Function = null)
      {
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
         this.txtFriend1_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_62);
         this.txtFriend2_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_62);
         this.txtFriend3_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_62);
         this.txtFriend4_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_62);
         this.txtFriend5_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_62);
      }
      
      public function method_107(param1:Event) : void
      {
         param1.target.gotoAndStop(2);
      }
      
      public function method_112(param1:Event) : void
      {
         if(!param1.target.selected)
         {
            param1.target.gotoAndStop(1);
         }
      }
      
      private function method_62(param1:Event) : *
      {
         param1.target.text = "";
         param1.target.removeEventListener(FocusEvent.FOCUS_IN,this.method_62);
      }
      
      public function Destroy() : *
      {
         this.var_8.method_10();
         if(this.txtFriend1_txt.hasEventListener(FocusEvent.FOCUS_IN))
         {
            this.txtFriend1_txt.removeEventListener(FocusEvent.FOCUS_IN,this.method_62);
         }
         if(this.txtFriend2_txt.hasEventListener(FocusEvent.FOCUS_IN))
         {
            this.txtFriend2_txt.removeEventListener(FocusEvent.FOCUS_IN,this.method_62);
         }
         if(this.txtFriend3_txt.hasEventListener(FocusEvent.FOCUS_IN))
         {
            this.txtFriend3_txt.removeEventListener(FocusEvent.FOCUS_IN,this.method_62);
         }
         if(this.txtFriend4_txt.hasEventListener(FocusEvent.FOCUS_IN))
         {
            this.txtFriend4_txt.removeEventListener(FocusEvent.FOCUS_IN,this.method_62);
         }
         if(this.txtFriend5_txt.hasEventListener(FocusEvent.FOCUS_IN))
         {
            this.txtFriend5_txt.removeEventListener(FocusEvent.FOCUS_IN,this.method_62);
         }
      }
      
      private function BtnUp(param1:Event) : *
      {
         var _loc2_:Array = null;
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
}

