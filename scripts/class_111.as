package
{
   import flash.display.*;
   import flash.events.*;
   
   public class class_111 extends MovieClip
   {
      
      private var mRef:class_79;
      
      private var cont_btn:MovieClip;
      
      public var var_330:MovieClip;
      
      private var var_241:Boolean;
      
      private var var_314:Number;
      
      public function class_111()
      {
         super();
         this.var_241 = false;
         addEventListener(Event.ENTER_FRAME,this.Run);
      }
      
      private function method_709() : void
      {
         this.mRef.loaderInfo.removeEventListener(ProgressEvent.PROGRESS,this.method_266);
         this.mRef.loaderInfo.removeEventListener(Event.COMPLETE,this.method_249);
         removeEventListener(Event.ENTER_FRAME,this.Run);
         this.mRef.removeChild(this);
      }
      
      private function method_336(param1:Event) : void
      {
         var _temp_3:* = this.cont_btn;
         var _temp_1:* = true;
         true;
         useHandCursor = _temp_1;
         _temp_3.buttonMode = true;
         this.cont_btn.gotoAndStop("off");
      }
      
      public function CreateContinueButton() : void
      {
         this.cont_btn = new class_71();
         this.cont_btn.x = this.mRef.stage.stageWidth / 2 - this.cont_btn.width / 2;
         if(this.mRef.var_358 == true)
         {
            this.cont_btn.y = int(this.mRef.stage.stageHeight / 2 + this.cont_btn.height * 2.5) - 45;
         }
         else
         {
            this.cont_btn.y = int(this.mRef.stage.stageHeight / 2 + this.cont_btn.height * 2.5) - 25;
         }
         this.mRef.addChild(this.cont_btn);
         this.cont_btn.addEventListener(MouseEvent.MOUSE_OVER,this.method_335);
         this.cont_btn.addEventListener(MouseEvent.MOUSE_OUT,this.method_336);
         this.cont_btn.addEventListener(MouseEvent.MOUSE_UP,this.contUp);
      }
      
      private function method_335(param1:Event) : void
      {
         var _temp_3:* = this.cont_btn;
         var _temp_1:* = true;
         true;
         useHandCursor = _temp_1;
         _temp_3.buttonMode = true;
         this.cont_btn.gotoAndStop("on");
      }
      
      public function method_266(param1:ProgressEvent) : void
      {
         var _loc2_:Number = Number(param1.target.bytesLoaded);
         var _loc3_:Number = Number(param1.target.bytesTotal);
         var _loc4_:Number = Math.round(_loc2_ / _loc3_ * 100);
         if(_loc4_ < 100)
         {
            this.var_330.loaded_txt.text = _loc4_;
         }
         else
         {
            this.var_330.loaded_txt.text = "100";
            this.mRef.gotoAndStop("load");
            this.var_241 = true;
         }
      }
      
      private function method_578() : void
      {
         if(this.var_241 == true)
         {
            if(this.var_314 > 0)
            {
               --this.var_314;
            }
            else if(this.var_314 == 0)
            {
               this.CreateContinueButton();
               removeEventListener(Event.ENTER_FRAME,this.Run);
            }
         }
      }
      
      private function Run(param1:Event) : void
      {
         this.method_578();
         if(this.var_241 == false)
         {
            if(this.mRef.loaderInfo.bytesLoaded >= this.mRef.loaderInfo.bytesTotal)
            {
               this.mRef.loaderInfo.removeEventListener(ProgressEvent.PROGRESS,this.method_266);
               this.mRef.loaderInfo.removeEventListener(Event.COMPLETE,this.method_249);
               this.var_330.loaded_txt.text = "100";
               this.mRef.gotoAndStop("load");
               this.var_241 = true;
            }
         }
      }
      
      private function contUp(param1:Event) : void
      {
         this.cont_btn.removeEventListener(MouseEvent.MOUSE_OVER,this.method_335);
         this.cont_btn.removeEventListener(MouseEvent.MOUSE_OUT,this.method_336);
         this.cont_btn.removeEventListener(MouseEvent.MOUSE_UP,this.contUp);
         this.mRef.removeChild(this.cont_btn);
         this.mRef.method_423();
         this.mRef.Setup();
         this.method_709();
      }
      
      public function method_249(param1:Event) : void
      {
         this.var_330.loaded_txt.text = "100";
         this.mRef.gotoAndStop("load");
         this.var_241 = true;
      }
      
      public function PL_Listeners() : void
      {
         if(this.mRef.loaderInfo.bytesLoaded >= this.mRef.loaderInfo.bytesTotal)
         {
            this.var_330.loaded_txt.text = "100";
            this.mRef.gotoAndStop("load");
            this.var_241 = true;
         }
         else
         {
            this.mRef.loaderInfo.addEventListener(ProgressEvent.PROGRESS,this.method_266);
            this.mRef.loaderInfo.addEventListener(Event.COMPLETE,this.method_249);
         }
      }
      
      public function Setup(param1:class_79) : void
      {
         this.mRef = param1;
         this.var_314 = this.mRef.gData.var_494;
         this.mRef.gotoAndStop("load");
      }
   }
}

