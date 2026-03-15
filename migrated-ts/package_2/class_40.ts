// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_2

export class class_40 extends class_23 implements class_29
   {
      
      constructor(param1: class_18, param2: class_11 = null as any){
         super(param1,null);
      }
      
      public toString(): string
      {
         return var_73.toString() + "-cfb";
      }
      
      public encrypt(param1: ByteArray): void
      {
         let _loc5_: number = 0;
         let _loc6_: number = 0;
         let _loc2_: number = param1.length;
         let _loc3_: ByteArray = getIV4e();
         let _loc4_: number = 0;
         while(_loc4_ < param1.length)
         {
            var_73.encrypt(_loc3_);
            _loc5_ = _loc4_ + var_57 < _loc2_ ? var_57 : Math.floor(_loc2_ - _loc4_);
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
      
      public decrypt(param1: ByteArray): void
      {
         let _loc6_: number = 0;
         let _loc7_: number = 0;
         let _loc2_: number = param1.length;
         let _loc3_: ByteArray = getIV4d();
         let _loc4_: ByteArray = new ByteArray();
         let _loc5_: number = 0;
         while(_loc5_ < param1.length)
         {
            var_73.encrypt(_loc3_);
            _loc6_ = _loc5_ + var_57 < _loc2_ ? var_57 : Math.floor(_loc2_ - _loc5_);
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
