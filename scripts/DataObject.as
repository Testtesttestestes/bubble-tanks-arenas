package
{
   public class DataObject
   {
      
      private var var_219:Number;
      
      private var var_496:Boolean;
      
      private var var_47:Array;
      
      private var var_134:Number;
      
      private var var_119:Number;
      
      public function DataObject(param1:Number = NaN, param2:Boolean = false, param3:Boolean = false, param4:Number = NaN)
      {
         super();
         var _loc5_:Number = this.RandNum(55,66);
         this.var_47 = new Array(_loc5_);
         var _loc6_:Number = 0;
         while(_loc6_ < _loc5_)
         {
            this.var_47[_loc6_] = 0;
            _loc6_++;
         }
         this.var_119 = -1;
         this.var_134 = -1;
         this.var_219 = 0;
         if(param3 == true)
         {
            this.method_538();
         }
         else if(isNaN(param1) == false)
         {
            if(isNaN(param4) == false)
            {
               param1 = param4 - param1;
            }
            this.method_21(param1);
         }
         this.var_496 = param2;
      }
      
      public function Add(param1:Number) : void
      {
         var _loc2_:Number = this.method_29();
         _loc2_ += param1;
         this.method_21(_loc2_);
      }
      
      private function RandNum(param1:Number, param2:Number) : Number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public function method_176(param1:Array) : void
      {
         this.var_219 = param1.shift();
         this.var_119 = param1[2];
         this.var_134 = param1[7];
         this.var_47.length = 0;
         this.var_47 = param1.slice();
         this.var_47.splice(7,1);
         this.var_47.splice(2,1);
      }
      
      public function set value(param1:Number) : void
      {
         this.method_21(param1);
      }
      
      public function get value() : Number
      {
         return this.method_29();
      }
      
      public function method_538(param1:Number = NaN) : void
      {
         var _loc3_:Number = NaN;
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc7_:Number = NaN;
         var _loc8_:Number = NaN;
         var _loc9_:Number = NaN;
         if(isNaN(param1) == true)
         {
            param1 = this.RandNum(20000,50000);
         }
         var _loc2_:Number = 0;
         while(_loc2_ < 10)
         {
            _loc3_ = Math.round(Math.random() * param1);
            _loc4_ = param1 - _loc3_;
            this.var_119 = this.RandNum(0,this.var_47.length - 4);
            this.var_134 = this.RandNum(0,this.var_47.length - 4);
            if(this.var_119 == this.var_134)
            {
               if(this.var_119 == this.var_47.length - 1)
               {
                  this.var_134 = this.var_119 - 1;
               }
               else
               {
                  this.var_134 = this.var_119 + 1;
               }
            }
            _loc5_ = param1 / (this.var_47.length - 2);
            _loc6_ = param1;
            _loc7_ = this.var_47.length;
            _loc8_ = 0;
            while(_loc8_ < this.var_47.length)
            {
               if(_loc8_ == this.var_119)
               {
                  this.var_47[_loc8_] = _loc3_;
               }
               else if(_loc8_ == this.var_134)
               {
                  this.var_47[_loc8_] = _loc4_;
               }
               else
               {
                  _loc9_ = 0;
                  _loc9_ = Math.round(Math.random() * (_loc5_ * 1.23) + _loc5_ * 0.75);
                  this.var_47[_loc8_] = _loc9_;
               }
               _loc8_++;
            }
            if(this.method_29() == -1)
            {
               break;
            }
            _loc2_++;
         }
      }
      
      public function method_21(param1:Number) : void
      {
         var _loc8_:Number = NaN;
         if(param1 >= 0 && param1 < 5000)
         {
            this.var_219 = this.RandNum(3000,5000);
         }
         else if(param1 < 0 && param1 > -5000)
         {
            this.var_219 = this.RandNum(3000,5000) * -1;
         }
         else
         {
            this.var_219 = 0;
         }
         param1 += this.var_219;
         var _loc2_:Number = Math.round(Math.random() * param1);
         var _loc3_:Number = param1 - _loc2_;
         this.var_119 = this.RandNum(0,this.var_47.length - 4);
         this.var_134 = this.RandNum(0,this.var_47.length - 4);
         if(this.var_119 == this.var_134)
         {
            if(this.var_119 == this.var_47.length - 1)
            {
               this.var_134 = this.var_119 - 1;
            }
            else
            {
               this.var_134 = this.var_119 + 1;
            }
         }
         var _loc4_:Number = param1 / (this.var_47.length - 2);
         var _loc5_:Number = param1;
         var _loc6_:Number = this.var_47.length;
         var _loc7_:Number = 0;
         while(_loc7_ < this.var_47.length)
         {
            if(_loc7_ == this.var_119)
            {
               this.var_47[_loc7_] = _loc2_;
            }
            else if(_loc7_ == this.var_134)
            {
               this.var_47[_loc7_] = _loc3_;
            }
            else
            {
               _loc8_ = 0;
               if(_loc5_ > 0)
               {
                  _loc8_ = Math.round(Math.random() * _loc4_ + _loc4_ * 0.5);
                  if(_loc8_ > _loc5_)
                  {
                     _loc8_ = _loc5_;
                  }
                  if(_loc7_ == this.var_47.length - 1)
                  {
                     _loc8_ = _loc5_;
                  }
                  _loc5_ -= _loc8_;
               }
               this.var_47[_loc7_] = _loc8_;
            }
            _loc7_++;
         }
      }
      
      public function method_789() : Array
      {
         var _loc1_:Array = this.var_47.slice();
         _loc1_.splice(2,0,this.var_119);
         _loc1_.splice(7,0,this.var_134);
         _loc1_.unshift(this.var_219);
         return _loc1_;
      }
      
      public function method_29() : Number
      {
         0;
         var _loc2_:Number = 0;
         var _loc3_:Number = 0;
         while(_loc3_ < this.var_47.length)
         {
            if(_loc3_ == this.var_119)
            {
               var _loc1_:Number = 0 + this.var_47[_loc3_];
            }
            else if(_loc3_ == this.var_134)
            {
               _loc1_ = 0 + this.var_47[_loc3_];
            }
            else
            {
               _loc2_ += this.var_47[_loc3_];
            }
            _loc3_++;
         }
         if(0 == _loc2_)
         {
            return 0 - this.var_219;
         }
         if(this.var_496 == true)
         {
            return 0;
         }
         return -1;
      }
   }
}

