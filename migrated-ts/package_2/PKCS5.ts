// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_2

export class PKCS5 implements class_11
   {
      
      private var_57: number;
      constructor(param1: number = 0){
         super();
         this.var_57 = param1;
      }
      
      public pad(param1: ByteArray): void
      {
         let _loc2_: number = this.var_57 - param1.length % this.var_57;
         let _loc3_: number = 0;
         while(_loc3_ < _loc2_)
         {
            param1[param1.length] = _loc2_;
            _loc3_++;
         }
      }
      
      public method_438(param1: number): void
      {
         this.var_57 = param1;
      }
      
      public unpad(param1: ByteArray): void
      {
         let _loc4_: number = 0;
         let _loc2_: number = param1.length % this.var_57;
         if(_loc2_ != 0)
         {
            throw new Error("PKCS#5::unpad: ByteArray.length isn\'t a multiple of the blockSize");
         }
         _loc2_ = Math.floor(param1[param1.length - 1]);
         let _loc3_: number = _loc2_;
         while(_loc3_ > 0)
         {
            _loc4_ = Math.floor(param1[param1.length - 1]);
            --param1.length;
            if(_loc2_ != _loc4_)
            {
               throw new Error("PKCS#5:unpad: Invalid padding value. expected [" + _loc2_ + "], found [" + _loc4_ + "]");
            }
            _loc3_--;
         }
      }
   }
