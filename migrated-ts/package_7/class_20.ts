// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_7

export class class_20{
      
      private var_196: number;
      private name_1: class_17;
      constructor(param1: class_17, param2: number = 0){
         super();
         this.name_1 = param1;
         this.var_196 = param2;
      }
      
      public toString(): string
      {
         return "hmac-" + (this.var_196 > 0 ? this.var_196 + "-" : "") + this.name_1.toString();
      }
      
      public getHashSize(): number
      {
         if(this.var_196 != 0)
         {
            return this.var_196 / 8;
         }
         return this.name_1.getHashSize();
      }
      
      public method_806(param1: ByteArray, param2: ByteArray): ByteArray
      {
         let _loc3_: ByteArray = null;
         if(param1.length > this.name_1.method_441())
         {
            _loc3_ = this.name_1.name_1(param1);
         }
         else
         {
            _loc3_ = new ByteArray();
            _loc3_.writeBytes(param1);
         }
         while(_loc3_.length < this.name_1.method_441())
         {
            _loc3_[_loc3_.length] = 0;
         }
         let _loc4_: ByteArray = new ByteArray();
         let _loc5_: ByteArray = new ByteArray();
         let _loc6_: number = 0;
         while(_loc6_ < _loc3_.length)
         {
            _loc4_[_loc6_] = _loc3_[_loc6_] ^ 0x36;
            _loc5_[_loc6_] = _loc3_[_loc6_] ^ 0x5C;
            _loc6_++;
         }
         _loc4_.position = _loc3_.length;
         _loc4_.writeBytes(param2);
         let _loc7_: ByteArray = this.name_1.name_1(_loc4_);
         _loc5_.position = _loc3_.length;
         _loc5_.writeBytes(_loc7_);
         let _loc8_: ByteArray = this.name_1.name_1(_loc5_);
         if(this.var_196 > 0 && this.var_196 < 8 * _loc8_.length)
         {
            _loc8_.length = this.var_196 / 8;
         }
         return _loc8_;
      }
      
      public dispose(): void
      {
         this.name_1 = null;
         this.var_196 = 0;
      }
   }
