package package_2
{
   import flash.utils.ByteArray;
   
   public class class_36 extends class_23 implements class_29
   {
      
      public function class_36(param1:class_18, param2:class_11 = null)
      {
         super(param1,param2);
      }
      
      private function core(param1:ByteArray, param2:ByteArray) : void
      {
         var _loc6_:uint = 0;
         var _loc3_:ByteArray = new ByteArray();
         var _loc4_:ByteArray = new ByteArray();
         _loc3_.writeBytes(param2);
         var _loc5_:uint = 0;
         while(_loc5_ < param1.length)
         {
            _loc4_.position = 0;
            _loc4_.writeBytes(_loc3_);
            var_73.encrypt(_loc4_);
            _loc6_ = 0;
            while(_loc6_ < var_57)
            {
               param1[_loc5_ + _loc6_] ^= _loc4_[_loc6_];
               _loc6_++;
            }
            _loc6_ = var_57 - 1;
            while(_loc6_ >= 0)
            {
               ++_loc3_[_loc6_];
               if(_loc3_[_loc6_] != 0)
               {
                  break;
               }
               _loc6_--;
            }
            _loc5_ += var_57;
         }
      }
      
      public function toString() : String
      {
         return var_73.toString() + "-ctr";
      }
      
      public function encrypt(param1:ByteArray) : void
      {
         var_273.pad(param1);
         var _loc2_:ByteArray = getIV4e();
         this.core(param1,_loc2_);
      }
      
      public function decrypt(param1:ByteArray) : void
      {
         var _loc2_:ByteArray = getIV4d();
         this.core(param1,_loc2_);
         var_273.unpad(param1);
      }
   }
}

