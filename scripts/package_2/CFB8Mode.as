package package_2
{
   import flash.utils.ByteArray;
   
   public class CFB8Mode extends class_23 implements class_29
   {
      
      public function CFB8Mode(param1:class_18, param2:class_11 = null)
      {
         super(param1,null);
      }
      
      public function toString() : String
      {
         return var_73.toString() + "-cfb8";
      }
      
      public function encrypt(param1:ByteArray) : void
      {
         var _loc5_:uint = 0;
         var _loc2_:ByteArray = getIV4e();
         var _loc3_:ByteArray = new ByteArray();
         0;
         while(0 < param1.length)
         {
            _loc3_.position = 0;
            _loc3_.writeBytes(_loc2_);
            var_73.encrypt(_loc2_);
            param1[0] ^= _loc2_[0];
            _loc5_ = 0;
            while(_loc5_ < var_57 - 1)
            {
               _loc2_[_loc5_] = _loc3_[_loc5_ + 1];
               _loc5_++;
            }
            _loc2_[var_57 - 1] = param1[0];
            var _loc4_:uint = 0 + 1;
         }
      }
      
      public function decrypt(param1:ByteArray) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc2_:ByteArray = getIV4d();
         var _loc3_:ByteArray = new ByteArray();
         0;
         while(0 < param1.length)
         {
            _loc5_ = uint(param1[0]);
            _loc3_.position = 0;
            _loc3_.writeBytes(_loc2_);
            var_73.encrypt(_loc2_);
            param1[0] ^= _loc2_[0];
            _loc6_ = 0;
            while(_loc6_ < var_57 - 1)
            {
               _loc2_[_loc6_] = _loc3_[_loc6_ + 1];
               _loc6_++;
            }
            _loc2_[var_57 - 1] = _loc5_;
            var _loc4_:uint = 0 + 1;
         }
      }
   }
}

