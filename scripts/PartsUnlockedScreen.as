package
{
   import flash.display.MovieClip;
   import flash.events.*;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol1951")]
   public class PartsUnlockedScreen extends MovieClip
   {
      
      internal var var_203:Function;
      
      internal var var_170:Number;
      
      public var blackBackground_mc:MovieClip;
      
      internal var var_228:Number;
      
      internal var var_212:Array;
      
      internal var var_8:class_3;
      
      internal var var_469:Number;
      
      public var Background_mc:MovieClip;
      
      public var back_tut:MovieClip;
      
      internal var myPart:MovieClip;
      
      public var tutorials_mc:MovieClip;
      
      public var var_107:Boolean;
      
      internal var timer:Number;
      
      public var next_tut:MovieClip;
      
      public var txtPartName_txt:TextField;
      
      public var ShineEffect_mc:MovieClip;
      
      public var Title_mc:MovieClip;
      
      public function PartsUnlockedScreen(param1:Boolean = false, param2:String = "", param3:MovieClip = null, param4:Number = 1, param5:Function = null, param6:String = "", param7:Number = 0, param8:Number = 2)
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2,2,this.frame3,3,this.frame4,4,this.frame5,5,this.frame6,6,this.frame7,7,this.frame8,8,this.frame9,9,this.frame10,10,this.frame11,11,this.frame12,12,this.frame13,13,this.frame14,14,this.frame15,15,this.frame16);
         if(param1)
         {
            this.var_8 = new class_3();
            this.var_8.Setup(this.method_422);
            this.var_212 = new Array();
            this.var_469 = param4;
            this.var_203 = param5;
            this.var_228 = param7;
            this.var_170 = param8;
            if(this.var_228 == 1)
            {
               gotoAndStop(this.var_170);
               this.blackBackground_mc.alpha = 0;
               addEventListener(Event.ENTER_FRAME,this.method_258);
            }
            else if(this.var_228 == 2)
            {
               if(this.var_170 != 2)
               {
                  gotoAndStop(this.var_170);
                  this.blackBackground_mc.alpha = 0;
                  addEventListener(Event.ENTER_FRAME,this.method_258);
               }
               else
               {
                  this.var_170 = 7;
                  addEventListener(Event.ENTER_FRAME,this.method_183);
               }
            }
            else
            {
               addEventListener(Event.ENTER_FRAME,this.method_183);
            }
            if(this.var_228 == 1 || this.var_228 == 2 && this.var_170 != 2)
            {
               this.var_212.push({
                  "x":this.tutorials_mc.x,
                  "y":this.tutorials_mc.y
               });
               this.var_212.push({
                  "x":this.next_tut.x,
                  "y":this.next_tut.y
               });
               if(this.back_tut != null)
               {
                  this.var_212.push({
                     "x":this.back_tut.x,
                     "y":this.back_tut.y
                  });
                  this.back_tut.y = -500;
                  this.back_tut.alpha = 0;
               }
               this.tutorials_mc.y = -500;
               this.next_tut.y = -500;
            }
            this.txtPartName_txt.text = param2;
            this.myPart = param3;
            addChild(this.myPart);
            if(param6 != "")
            {
               this.Title_mc.txtUnlockedText_txt.text = param6;
            }
            x = 275;
            y = 225;
            if(this.var_228 == 1 || this.var_228 == 2 && this.var_170 != 2)
            {
               addChild(this.next_tut);
               this.var_8.method_4(this.next_tut,true);
            }
         }
      }
      
      private function method_422(param1:Event) : *
      {
         if(this.var_107)
         {
            this.tutorials_mc.alpha = 0;
            this.next_tut.alpha = 0;
            this.back_tut.alpha = 0;
            this.blackBackground_mc.alpha = 0;
            this.tutorials_mc.mouseEnabled = false;
            this.next_tut.mouseEnabled = false;
            this.back_tut.mouseEnabled = false;
            this.blackBackground_mc.mouseEnabled = false;
            mouseChildren = false;
            mouseEnabled = false;
            this.next_tut.removeEventListener(MouseEvent.CLICK,this.method_422);
            removeEventListener(Event.ENTER_FRAME,this.method_258);
            addEventListener(Event.ENTER_FRAME,this.method_183);
         }
         else
         {
            gotoAndStop(currentFrame + 1);
         }
      }
      
      public function method_627() : *
      {
         this.Background_mc.play();
         this.txtPartName_txt.text = "";
         this.timer = 0;
         addEventListener(Event.ENTER_FRAME,this.method_448);
      }
      
      private function method_448(param1:Event) : *
      {
         this.Title_mc.alpha *= 0.7;
         x = x * 0.9 + (275 - 232 + (this.var_469 - 1) * 80) * 0.1;
         y = y * 0.9 + (225 + 185) * 0.1;
         this.myPart.scaleX *= 0.97;
         this.myPart.scaleY *= 0.97;
         this.timer += 1;
         if(this.timer == 30)
         {
            if(this.var_170 != 7)
            {
               this.var_170 = currentFrame + 1;
            }
            else
            {
               this.var_170 = 8;
            }
            removeEventListener(Event.ENTER_FRAME,this.method_448);
            this.var_203(this.var_469,this.var_228,this.var_170);
         }
      }
      
      public function method_183(param1:Event) : *
      {
         if(this.ShineEffect_mc.totalFrames == this.ShineEffect_mc.currentFrame)
         {
            removeEventListener(Event.ENTER_FRAME,this.method_183);
            this.method_627();
         }
      }
      
      private function method_107(param1:Event) : void
      {
         param1.target.gotoAndStop(2);
      }
      
      private function method_112(param1:Event) : void
      {
         param1.target.gotoAndStop(1);
      }
      
      internal function frame10() : *
      {
         this.var_107 = false;
      }
      
      internal function frame11() : *
      {
         this.var_107 = false;
      }
      
      internal function frame13() : *
      {
         this.var_107 = false;
      }
      
      internal function frame14() : *
      {
         this.var_107 = true;
      }
      
      internal function frame15() : *
      {
         this.var_107 = false;
      }
      
      internal function frame16() : *
      {
         this.var_107 = true;
      }
      
      internal function frame12() : *
      {
         this.var_107 = false;
      }
      
      internal function frame1() : *
      {
         stop();
         this.var_107 = true;
      }
      
      internal function frame2() : *
      {
         this.var_107 = false;
      }
      
      private function method_258(param1:Event) : *
      {
         if(this.blackBackground_mc.alpha != 1)
         {
            this.blackBackground_mc.alpha += 0.01;
            if(this.blackBackground_mc.alpha > 1)
            {
               this.blackBackground_mc.alpha = 1;
            }
         }
         this.tutorials_mc.y = this.tutorials_mc.y * 0.9 + this.var_212[0].y * 0.1;
         this.next_tut.y = this.next_tut.y * 0.9 + this.var_212[1].y * 0.1;
         if(this.var_212.length > 2)
         {
            this.back_tut.y = this.back_tut.y * 0.9 + this.var_212[2].y * 0.1;
         }
      }
      
      internal function frame4() : *
      {
         this.var_107 = false;
      }
      
      internal function frame5() : *
      {
         this.var_107 = true;
      }
      
      internal function frame6() : *
      {
         this.var_107 = false;
      }
      
      internal function frame7() : *
      {
         this.var_107 = true;
      }
      
      internal function frame8() : *
      {
         this.var_107 = false;
      }
      
      internal function frame9() : *
      {
         this.var_107 = true;
      }
      
      internal function frame3() : *
      {
         this.var_107 = false;
      }
   }
}

