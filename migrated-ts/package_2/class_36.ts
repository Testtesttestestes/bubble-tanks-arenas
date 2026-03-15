// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_2

export class class_36 extends class_23 implements class_29
   {
      
      constructor(param1: class_18, param2: class_11 = null as any){
         super(param1,param2);
      }
      
      private core(param1: ByteArray, param2: ByteArray): void
      {
         let _loc6_: number = 0;
         let _loc3_: ByteArray = new ByteArray();
         let _loc4_: ByteArray = new ByteArray();
         _loc3_.writeBytes(param2);
         let _loc5_: number = 0;
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
      
      public toString(): string
      {
         return var_73.toString() + "-ctr";
      }
      
      public encrypt(param1: ByteArray): void
      {
         var_273.pad(param1);
         let _loc2_: ByteArray = getIV4e();
         this.core(param1,_loc2_);
      }
      
      public decrypt(param1: ByteArray): void
      {
         let _loc2_: ByteArray = getIV4d();
         this.core(param1,_loc2_);
         var_273.unpad(param1);
      }
   }
