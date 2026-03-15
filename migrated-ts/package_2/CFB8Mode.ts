// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_2

export class CFB8Mode extends class_23 implements class_29
   {
      
      constructor(param1: class_18, param2: class_11 = null as any){
         super(param1,null);
      }
      
      public toString(): string
      {
         return var_73.toString() + "-cfb8";
      }
      
      public encrypt(param1: ByteArray): void
      {
         let _loc5_: number = 0;
         let _loc2_: ByteArray = getIV4e();
         let _loc3_: ByteArray = new ByteArray();
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
            let _loc4_: number = 0 + 1;
         }
      }
      
      public decrypt(param1: ByteArray): void
      {
         let _loc5_: number = 0;
         let _loc6_: number = 0;
         let _loc2_: ByteArray = getIV4d();
         let _loc3_: ByteArray = new ByteArray();
         0;
         while(0 < param1.length)
         {
            _loc5_ = Math.floor(param1[0]);
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
            let _loc4_: number = 0 + 1;
         }
      }
   }
