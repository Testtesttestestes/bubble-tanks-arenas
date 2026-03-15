package
{
   import flash.display.*;
   import flash.events.*;
   import flash.text.*;
   
   public class ProfileCreator extends MovieClip
   {
      
      private var var_316:Stage;
      
      private var var_203:Function;
      
      public var blnOverwriteMode:Boolean;
      
      private var mRef:class_79;
      
      private var var_505:class_80;
      
      public var inner:MovieClip;
      
      private var var_280:Number;
      
      public function ProfileCreator()
      {
         super();
         this.inner.profile_name_txt.text = "Enter Name Here";
         this.inner.back_btn.addEventListener(MouseEvent.MOUSE_OVER,this.btnOver);
         this.inner.back_btn.addEventListener(MouseEvent.MOUSE_OUT,this.btnOut);
         this.inner.back_btn.addEventListener(MouseEvent.MOUSE_UP,this.btnUp);
         var _temp_3:* = this.inner.back_btn;
         var _temp_2:* = this.inner.back_btn;
         var _temp_1:* = true;
         true;
         _temp_2.useHandCursor = _temp_1;
         _temp_3.buttonMode = true;
         this.inner.submit_btn.addEventListener(MouseEvent.MOUSE_OVER,this.btnOver);
         this.inner.submit_btn.addEventListener(MouseEvent.MOUSE_OUT,this.btnOut);
         this.inner.submit_btn.addEventListener(MouseEvent.MOUSE_UP,this.btnUp);
         var _temp_4:* = this.inner.submit_btn;
         var _loc1_:Boolean;
         this.inner.submit_btn.useHandCursor = _loc1_ = true;
         _temp_4.buttonMode = true;
         this.inner.profile_name_txt.addEventListener(FocusEvent.FOCUS_IN,this.method_603);
         this.inner.prof1_mc.addEventListener(MouseEvent.MOUSE_OVER,this.btnOver);
         this.inner.prof1_mc.addEventListener(MouseEvent.MOUSE_OUT,this.btnOut);
         this.inner.prof1_mc.addEventListener(MouseEvent.MOUSE_UP,this.btnUp);
         var _temp_5:* = this.inner.prof1_mc;
         this.inner.prof1_mc.useHandCursor = _loc1_ = true;
         _temp_5.buttonMode = true;
         this.inner.prof1_mc.mouseChildren = false;
         this.inner.prof2_mc.addEventListener(MouseEvent.MOUSE_OVER,this.btnOver);
         this.inner.prof2_mc.addEventListener(MouseEvent.MOUSE_OUT,this.btnOut);
         this.inner.prof2_mc.addEventListener(MouseEvent.MOUSE_UP,this.btnUp);
         var _temp_6:* = this.inner.prof2_mc;
         this.inner.prof2_mc.useHandCursor = _loc1_ = true;
         _temp_6.buttonMode = true;
         this.inner.prof2_mc.mouseChildren = false;
         this.inner.prof3_mc.addEventListener(MouseEvent.MOUSE_OVER,this.btnOver);
         this.inner.prof3_mc.addEventListener(MouseEvent.MOUSE_OUT,this.btnOut);
         this.inner.prof3_mc.addEventListener(MouseEvent.MOUSE_UP,this.btnUp);
         var _temp_7:* = this.inner.prof3_mc;
         this.inner.prof3_mc.useHandCursor = _loc1_ = true;
         _temp_7.buttonMode = true;
         this.inner.prof3_mc.mouseChildren = false;
         this.inner.cancel_btn.addEventListener(MouseEvent.MOUSE_OVER,this.btnOver);
         this.inner.cancel_btn.addEventListener(MouseEvent.MOUSE_OUT,this.btnOut);
         this.inner.cancel_btn.addEventListener(MouseEvent.MOUSE_UP,this.btnUp);
         var _temp_8:* = this.inner.cancel_btn;
         this.inner.cancel_btn.useHandCursor = _loc1_ = true;
         _temp_8.buttonMode = true;
         this.inner.cancel_btn.mouseChildren = false;
      }
      
      private function RandNum(param1:Number, param2:Number) : Number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
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
      
      private function method_603(param1:FocusEvent) : void
      {
         param1.target.text = "";
      }
      
      private function btnOver(param1:MouseEvent) : void
      {
         param1.target.gotoAndStop("on");
      }
      
      private function method_521() : void
      {
         this.var_280 = 0;
         var _loc1_:uint = 0;
         while(_loc1_ < 3)
         {
            if(this.mRef["objPlayer" + (_loc1_ + 1) + "Profile"].profileName != null && this.mRef["objPlayer" + (_loc1_ + 1) + "Profile"].profileName != "")
            {
               ++this.var_280;
               this.inner["prof" + (_loc1_ + 1) + "_mc"].info.gotoAndStop("data");
               this.inner["prof" + (_loc1_ + 1) + "_mc"].info.profileName_txt.text = this.mRef["objPlayer" + (_loc1_ + 1) + "Profile"].profileName;
               this.inner["prof" + (_loc1_ + 1) + "_mc"].info.arenasComplete_txt.text = int(this.mRef["objPlayer" + (_loc1_ + 1) + "Profile"].arrBeatArenaIDs.length);
               this.inner["prof" + (_loc1_ + 1) + "_mc"].info.tankProgress_txt.text = this.mRef.method_497(_loc1_ + 1) + "%";
            }
            _loc1_++;
         }
      }
      
      private function btnUp(param1:MouseEvent) : void
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
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
      
      private function btnOut(param1:MouseEvent) : void
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
      
      public function Setup(param1:class_79, param2:Stage, param3:class_80, param4:Function) : void
      {
         this.mRef = param1;
         this.var_316 = param2;
         this.var_505 = param3;
         this.var_203 = param4;
         this.blnOverwriteMode = false;
         this.method_521();
         this.inner.profile_name_txt.addEventListener(TextEvent.TEXT_INPUT,this.method_51);
      }
      
      public function RemoveProfileCreator() : void
      {
         this.inner.profile_name_txt.removeEventListener(TextEvent.TEXT_INPUT,this.method_51);
         this.inner.back_btn.removeEventListener(MouseEvent.MOUSE_OVER,this.btnOver);
         this.inner.back_btn.removeEventListener(MouseEvent.MOUSE_OUT,this.btnOut);
         this.inner.back_btn.removeEventListener(MouseEvent.MOUSE_UP,this.btnUp);
         this.inner.submit_btn.removeEventListener(MouseEvent.MOUSE_OVER,this.btnOver);
         this.inner.submit_btn.removeEventListener(MouseEvent.MOUSE_OUT,this.btnOut);
         this.inner.submit_btn.removeEventListener(MouseEvent.MOUSE_UP,this.btnUp);
         this.var_505.removeChild(this);
      }
   }
}

