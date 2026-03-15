package
{
   import flash.display.*;
   import flash.events.Event;
   
   internal class class_10
   {
      
      private var var_399:Boolean;
      
      private var var_376:Number;
      
      private var intShakeDuration:Number;
      
      private var var_162:Array;
      
      private var mainRef:class_79;
      
      private var var_463:class_6;
      
      private var var_278:Number;
      
      private var var_425:Stage;
      
      private var var_138:class_6;
      
      public function class_10(param1:class_79, param2:Stage)
      {
         super();
         this.intShakeDuration = 0;
         this.mainRef = param1;
         this.var_425 = param2;
         this.mainRef.addEventListener(Event.ENTER_FRAME,this.Run);
         this.var_162 = new Array();
         this.intShakeDuration = 0;
         this.var_278 = 0;
         this.var_376 = 0;
         this.ShakeSetup();
      }
      
      private function RandNum(param1:Number, param2:Number) : Number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public function method_257() : void
      {
         this.var_399 = false;
         this.method_259();
      }
      
      public function FLASH(param1:uint = 16777215) : void
      {
         var sFlashMC:MovieClip = null;
         var fColor:uint = param1;
         try
         {
            sFlashMC = new MovieClip();
            sFlashMC.x = -40;
            sFlashMC.y = -40;
            sFlashMC.graphics.beginFill(fColor,1);
            sFlashMC.graphics.drawRect(0,0,this.var_425.width + 80,this.var_425.height + 80);
            this.mainRef.addChild(sFlashMC);
            this.var_162.push(sFlashMC);
         }
         catch(e:Error)
         {
         }
      }
      
      public function method_534() : void
      {
         this.mainRef.removeEventListener(Event.ENTER_FRAME,this.Run);
      }
      
      private function method_437(param1:class_6) : void
      {
         param1.x = Math.round(param1.x);
         param1.y = Math.round(param1.y);
         this.mainRef.x += param1.x;
         this.mainRef.y += param1.y;
      }
      
      public function method_259() : void
      {
         var _loc1_:Number = NaN;
         var _loc2_:Number = NaN;
         var _loc3_:class_6 = null;
         if(this.mainRef.x != this.var_138.x || this.mainRef.y != this.var_138.y)
         {
            this.intShakeDuration = 0;
            _loc1_ = this.var_138.x - this.mainRef.x;
            _loc2_ = this.var_138.y - this.mainRef.y;
            this.mainRef.x = this.var_138.x;
            this.mainRef.y = this.var_138.y;
            _loc3_ = new class_6();
            _loc3_.x = _loc1_;
            _loc3_.y = _loc2_;
            this.method_437(this.var_138);
         }
      }
      
      public function SHAKE(param1:Number) : void
      {
         if(!this.var_399)
         {
            return;
         }
         if(this.intShakeDuration == 0)
         {
            this.intShakeDuration = param1;
            this.var_376 = param1;
            this.var_278 = 3;
            this.var_138.x = this.mainRef.x;
            this.var_138.y = this.mainRef.y;
         }
      }
      
      private function method_651() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_162.length)
         {
            if(this.var_162[_loc1_].alpha <= 0)
            {
               this.method_696(this.var_162[_loc1_]);
               this.var_162.splice(_loc1_,1);
               _loc1_--;
            }
            else
            {
               this.var_162[_loc1_].alpha -= 0.05;
            }
            _loc1_++;
         }
      }
      
      private function Run(param1:Event) : void
      {
         this.method_757();
         this.method_651();
      }
      
      public function method_696(param1:MovieClip) : void
      {
         var var_40:MovieClip = null;
         var var_56:uint = 0;
         var var_106:MovieClip = param1;
         try
         {
            var_40 = var_106;
            var_56 = 0;
            if(var_56 < this.var_162.length)
            {
               if(this.var_162[var_56] == var_40)
               {
                  this.mainRef.removeChild(var_40);
               }
            }
         }
         catch(e:Error)
         {
         }
      }
      
      public function ShakeSetup() : void
      {
         this.intShakeDuration = 0;
         this.var_399 = true;
         this.var_162 = new Array();
         this.var_463 = this.var_138 = new class_6();
         this.var_463.x = this.var_138.x = this.mainRef.x;
         this.var_463.y = this.var_138.y = this.mainRef.y;
         this.method_259();
      }
      
      private function method_757() : void
      {
         var _loc1_:Number = NaN;
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc7_:class_6 = null;
         if(this.intShakeDuration > 0)
         {
            --this.intShakeDuration;
            if(this.intShakeDuration == 0)
            {
               this.method_259();
            }
            else
            {
               --this.var_278;
               if(this.var_278 == 0)
               {
                  this.var_278 = 3;
                  _loc1_ = this.intShakeDuration / this.var_376;
                  _loc2_ = 2;
                  if(this.var_376 > 45)
                  {
                     _loc2_ = 4;
                  }
                  _loc3_ = this.var_138.x + this.RandNum(-1 * _loc2_,_loc2_) * _loc1_;
                  _loc4_ = this.var_138.y + this.RandNum(-1 * _loc2_,_loc2_) * _loc1_;
                  _loc5_ = _loc3_ - this.mainRef.x;
                  _loc6_ = _loc4_ - this.mainRef.y;
                  this.mainRef.x = _loc3_;
                  this.mainRef.y = _loc4_;
                  _loc7_ = new class_6();
                  _loc7_.x = _loc5_;
                  _loc7_.y = _loc6_;
                  this.method_437(_loc7_);
               }
            }
         }
      }
      
      public function method_288() : void
      {
         this.var_399 = true;
      }
   }
}

