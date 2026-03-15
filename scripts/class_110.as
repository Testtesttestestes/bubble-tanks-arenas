package
{
   import flash.display.MovieClip;
   
   public class class_110 extends MovieClip
   {
      
      private var var_368:Boolean;
      
      public var intLifeAmount:int;
      
      public var blnCollected:Boolean;
      
      private var funCallback:Function;
      
      private var moveX:Number;
      
      private var var_331:Boolean;
      
      private var var_264:Number;
      
      private var moveY:Number;
      
      private var objAvatar:class_113;
      
      private var var_274:Boolean;
      
      public function class_110()
      {
         super();
         this.intLifeAmount = 1;
         this.var_264 = this.RandNum(4,22);
         this.var_368 = false;
         this.var_274 = false;
         this.var_331 = true;
         this.blnCollected = false;
      }
      
      private function method_632(param1:Number, param2:Number, param3:Number, param4:Number) : Number
      {
         var _loc5_:Number = param1 - param3;
         var _loc6_:Number = param2 - param4;
         return Math.sqrt(_loc5_ * _loc5_ + _loc6_ * _loc6_);
      }
      
      public function set blnCollect(param1:Boolean) : void
      {
         this.var_368 = param1;
         this.var_331 = false;
      }
      
      private function method_738() : Boolean
      {
         if(this.var_368 == true)
         {
            return true;
         }
         if(this.objAvatar == null)
         {
            return false;
         }
         if(this.objAvatar.parent == null)
         {
            return false;
         }
         this;
         return false;
      }
      
      private function method_765() : void
      {
         if(this.var_274 == false)
         {
            if(this.var_331 == true)
            {
               this.method_14();
               this.x += this.moveX;
               this.y += this.moveY;
            }
         }
      }
      
      private function method_517() : void
      {
         if(this.objAvatar == null)
         {
            return;
         }
         this;
      }
      
      private function MoveTowardAvatar() : void
      {
         this.method_517();
         this.x += this.moveX;
         this.y += this.moveY;
      }
      
      public function Setup(param1:int, param2:Function, param3:class_113) : void
      {
         this.intLifeAmount = param1;
         this.funCallback = param2;
         this.objAvatar = param3;
      }
      
      private function method_35() : void
      {
         if(this.x * this.x + this.y * this.y > 172225)
         {
            this.var_274 = true;
            this.funCallback(this);
         }
      }
      
      private function RandNum(param1:Number, param2:Number) : Number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      private function method_14() : void
      {
         var _loc1_:class_6 = new class_6();
         this.var_264 *= 0.9;
         _loc1_.x = Math.cos(Math.PI * this.rotation / 180) * this.var_264;
         _loc1_.y = Math.sin(Math.PI * this.rotation / 180) * this.var_264;
         this.moveX = _loc1_.x;
         this.moveY = _loc1_.y;
         if(this.var_264 < 0.5)
         {
            this.var_331 = false;
         }
      }
      
      public function Run() : void
      {
         this.method_35();
         this.method_765();
         if(this.var_331 == false)
         {
            this.ControlAvatarAttraction();
         }
      }
      
      private function ControlAvatarAttraction() : void
      {
         if(this.var_274 == false)
         {
            if(this.method_738() == true)
            {
               this.MoveTowardAvatar();
            }
         }
      }
   }
}

