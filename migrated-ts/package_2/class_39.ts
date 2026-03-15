// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_2

export class class_39 extends class_23 implements class_29
   {
      
      constructor(param1: class_18, param2: class_11 = null as any){
         super(param1,param2);
      }
      
      public toString(): string
      {
         return var_73.toString() + "-cbc";
      }
      
      public encrypt(param1: ByteArray): void
      {
         let _loc4_: number = 0;
         var_273.pad(param1);
         let _loc2_: ByteArray = getIV4e();
         0;
         while(0 < param1.length)
         {
            _loc4_ = 0;
            while(_loc4_ < var_57)
            {
               param1[0 + _loc4_] ^= _loc2_[_loc4_];
               _loc4_++;
            }
            var_73.encrypt(param1,0);
            _loc2_.position = 0;
            _loc2_.writeBytes(param1,0,var_57);
            let _loc3_: number = 0 + var_57;
         }
      }
      
      public decrypt(param1: ByteArray): void
      {
         let _loc5_: number = 0;
         let _loc2_: ByteArray = getIV4d();
         let _loc3_: ByteArray = new ByteArray();
         let _loc4_: number = 0;
         while(_loc4_ < param1.length)
         {
            _loc3_.position = 0;
            _loc3_.writeBytes(param1,_loc4_,var_57);
            var_73.decrypt(param1,_loc4_);
            _loc5_ = 0;
            while(_loc5_ < var_57)
            {
               param1[_loc4_ + _loc5_] ^= _loc2_[_loc5_];
               _loc5_++;
            }
            _loc2_.position = 0;
            _loc2_.writeBytes(_loc3_,0,var_57);
            _loc4_ += var_57;
         }
         var_273.unpad(param1);
      }
   }
