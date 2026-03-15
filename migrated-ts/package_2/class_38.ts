// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_2

export class class_38 extends class_23 implements class_29
   {
      
      constructor(param1: class_18, param2: class_11 = null as any){
         super(param1,null);
      }
      
      private core(param1: ByteArray, param2: ByteArray): void
      {
         let _loc6_: number = 0;
         let _loc7_: number = 0;
         let _loc3_: number = param1.length;
         let _loc4_: ByteArray = new ByteArray();
         let _loc5_: number = 0;
         while(_loc5_ < param1.length)
         {
            var_73.encrypt(param2);
            _loc4_.position = 0;
            _loc4_.writeBytes(param2);
            _loc6_ = _loc5_ + var_57 < _loc3_ ? var_57 : Math.floor(_loc3_ - _loc5_);
            _loc7_ = 0;
            while(_loc7_ < _loc6_)
            {
               param1[_loc5_ + _loc7_] ^= param2[_loc7_];
               _loc7_++;
            }
            param2.position = 0;
            param2.writeBytes(_loc4_);
            _loc5_ += var_57;
         }
      }
      
      public toString(): string
      {
         return var_73.toString() + "-ofb";
      }
      
      public encrypt(param1: ByteArray): void
      {
         let _loc2_: ByteArray = getIV4e();
         this.core(param1,_loc2_);
      }
      
      public decrypt(param1: ByteArray): void
      {
         let _loc2_: ByteArray = getIV4d();
         this.core(param1,_loc2_);
      }
   }
