package
{
   import flash.display.*;
   import flash.events.*;
   
   public class class_115 extends MovieClip
   {
      
      private var var_506:int;
      
      private var var_556:Number;
      
      private var var_546:Array;
      
      private var var_504:int;
      
      private var var_319:int;
      
      public function class_115()
      {
         super();
      }
      
      private function method_504() : void
      {
         var _loc1_:* = addChild(new class_82());
      }
      
      private function RandNum(param1:Number, param2:Number) : Number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public function method_624(param1:*) : *
      {
         this.var_504 = 20;
         this.var_506 = 60;
         this.var_319 = 0;
         this.var_546 = new Array();
         this.var_556 = 0;
         param1.addEventListener(Event.ENTER_FRAME,this.method_665);
      }
      
      public function method_665(param1:*) : void
      {
         if(this.var_319 == 0)
         {
            this.method_504();
            this.var_319 = this.RandNum(this.var_504,this.var_506);
         }
         else
         {
            --this.var_319;
         }
         var _loc2_:Array = new Array();
         var _loc3_:uint = 0;
         while(_loc3_ < numChildren)
         {
            if(MovieClip(this.getChildAt(_loc3_)).y < -10)
            {
               this.removeChildAt(_loc3_);
            }
            _loc3_ += 1;
         }
      }
   }
}

