package package_2
{
   import flash.utils.ByteArray;
   
   public class class_40 extends class_23 implements class_29
   {
      
      public function class_40(param1:class_18, param2:class_11 = null)
      {
         super(param1,null);
      }
      
      public function toString() : String
      {
         return var_73.toString() + "-cfb";
      }
      
      public function encrypt(param1:ByteArray) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc2_:uint = param1.length;
         var _loc3_:ByteArray = getIV4e();
         var _loc4_:uint = 0;
         while(_loc4_ < param1.length)
         {
            var_73.encrypt(_loc3_);
            _loc5_ = _loc4_ + var_57 < _loc2_ ? var_57 : uint(_loc2_ - _loc4_);
            _loc6_ = 0;
            while(_loc6_ < _loc5_)
            {
               param1[_loc4_ + _loc6_] ^= _loc3_[_loc6_];
               _loc6_++;
            }
            _loc3_.position = 0;
            _loc3_.writeBytes(param1,_loc4_,_loc5_);
            _loc4_ += var_57;
         }
      }
      
      public function decrypt(param1:ByteArray) : void
      {
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         var _loc2_:uint = param1.length;
         var _loc3_:ByteArray = getIV4d();
         var _loc4_:ByteArray = new ByteArray();
         var _loc5_:uint = 0;
         while(_loc5_ < param1.length)
         {
            var_73.encrypt(_loc3_);
            _loc6_ = _loc5_ + var_57 < _loc2_ ? var_57 : uint(_loc2_ - _loc5_);
            _loc4_.position = 0;
            _loc4_.writeBytes(param1,_loc5_,_loc6_);
            _loc7_ = 0;
            while(_loc7_ < _loc6_)
            {
               param1[_loc5_ + _loc7_] ^= _loc3_[_loc7_];
               _loc7_++;
            }
            _loc3_.position = 0;
            _loc3_.writeBytes(_loc4_);
            _loc5_ += var_57;
         }
      }
   }
}

