package
{
   public class class_6
   {
      
      public var x:Number;
      
      public var y:Number;
      
      public function class_6(param1:Number = 0, param2:Number = 0)
      {
         super();
         this.x = param1;
         this.y = param2;
      }
      
      public function Add(param1:Vector) : void
      {
         this.x += param1.x;
         this.y += param1.y;
      }
      
      public function method_741(param1:Number = 0, param2:Number = 0) : void
      {
         this.x += param1;
         this.y += param2;
      }
      
      public function method_803(param1:Number, param2:Number) : void
      {
         this.method_217(param1);
         this.method_84(param2);
      }
      
      public function method_84(param1:Number) : void
      {
         this.x *= param1;
         this.y *= param1;
      }
      
      public function method_801() : void
      {
      }
      
      public function method_189() : void
      {
         var _loc1_:Number = this.method_41();
         if(_loc1_ != 0)
         {
            this.x /= _loc1_;
            this.y /= _loc1_;
         }
      }
      
      public function method_217(param1:Number) : void
      {
         param1 = param1 * Math.PI / 180;
         this.x = Math.cos(param1) * 1;
         this.y = Math.sin(param1) * 1;
      }
      
      public function method_503(param1:Number, param2:Number, param3:Number) : Number
      {
         var _loc4_:Number = 0;
         var _loc5_:Number = this.method_90();
         var _loc6_:Number = 0;
         if(param1 >= 0)
         {
            _loc4_ = param1 - 180;
            if(_loc5_ < param1 && _loc5_ > _loc4_)
            {
               _loc6_ = -param3 * param2;
               if(_loc5_ - param1 > _loc6_)
               {
                  _loc6_ = _loc5_ - param1;
               }
            }
            else
            {
               _loc6_ = param3 * param2;
               if(_loc5_ >= 0)
               {
                  if(_loc5_ != _loc4_)
                  {
                     if(_loc5_ - param1 < _loc6_)
                     {
                        _loc6_ = _loc5_ - param1;
                     }
                  }
               }
            }
         }
         else
         {
            _loc4_ = param1 + 180;
            if(_loc5_ < _loc4_ && _loc5_ > param1)
            {
               _loc6_ = param3 * param2;
               if(_loc5_ - param1 < _loc6_)
               {
                  _loc6_ = _loc5_ - param1;
               }
            }
            else
            {
               _loc6_ = -param3 * param2;
               if(_loc5_ < 0)
               {
                  if(_loc5_ - param1 > _loc6_)
                  {
                     _loc6_ = _loc5_ - param1;
                  }
               }
            }
         }
         if(Math.abs(_loc6_) <= 30)
         {
            if(_loc5_ == 0)
            {
            }
         }
         return _loc6_;
      }
      
      public function method_41() : Number
      {
         var _loc1_:Number = this.x * this.x + this.y * this.y;
         return Math.sqrt(_loc1_);
      }
      
      public function method_90() : Number
      {
         var _loc1_:Number = Math.atan2(this.y,this.x);
         return 360 * _loc1_ / (2 * Math.PI);
      }
   }
}

