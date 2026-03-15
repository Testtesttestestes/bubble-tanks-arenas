package package_2
{
   import flash.utils.ByteArray;
   
   public class PKCS5 implements class_11
   {
      
      private var var_57:uint;
      
      public function PKCS5(param1:uint = 0)
      {
         super();
         this.var_57 = param1;
      }
      
      public function pad(param1:ByteArray) : void
      {
         var _loc2_:uint = this.var_57 - param1.length % this.var_57;
         var _loc3_:uint = 0;
         while(_loc3_ < _loc2_)
         {
            param1[param1.length] = _loc2_;
            _loc3_++;
         }
      }
      
      public function method_438(param1:uint) : void
      {
         this.var_57 = param1;
      }
      
      public function unpad(param1:ByteArray) : void
      {
         var _loc4_:uint = 0;
         var _loc2_:uint = param1.length % this.var_57;
         if(_loc2_ != 0)
         {
            throw new Error("PKCS#5::unpad: ByteArray.length isn\'t a multiple of the blockSize");
         }
         _loc2_ = uint(param1[param1.length - 1]);
         var _loc3_:uint = _loc2_;
         while(_loc3_ > 0)
         {
            _loc4_ = uint(param1[param1.length - 1]);
            --param1.length;
            if(_loc2_ != _loc4_)
            {
               throw new Error("PKCS#5:unpad: Invalid padding value. expected [" + _loc2_ + "], found [" + _loc4_ + "]");
            }
            _loc3_--;
         }
      }
   }
}

