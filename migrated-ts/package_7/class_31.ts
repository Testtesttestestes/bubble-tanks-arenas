// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_7

export class class_31 implements class_17
   {
      
      constructor(){
         super();
      }
      
      public toString(): string
      {
         return "sha";
      }
      
      public method_441(): number
      {
         return 64;
      }
      
      public getHashSize(): number
      {
         return 0;
      }
      
      public name_1(param1: ByteArray): ByteArray
      {
         let _loc2_: number = param1.length;
         let _loc3_: string = param1.endian;
         param1.endian = Endian.BIG_ENDIAN;
         let _loc4_: number = _loc2_ * 8;
         while(param1.length % 4 != 0)
         {
            param1[param1.length] = 0;
         }
         param1.position = 0;
         let _loc5_: any[] = [];
         let _loc6_: number = 0;
         while(_loc6_ < param1.length)
         {
            _loc5_.push(param1.readUnsignedInt());
            _loc6_ += 4;
         }
         let _loc7_: any[] = this.core(_loc5_,_loc4_);
         let _loc8_: ByteArray = new ByteArray();
         let _loc9_: number = this.getHashSize() / 4;
         _loc6_ = 0;
         while(_loc6_ < _loc9_)
         {
            _loc8_.writeUnsignedInt(_loc7_[_loc6_]);
            _loc6_++;
         }
         param1.length = _loc2_;
         param1.endian = _loc3_;
         return _loc8_;
      }
      
      protected core(param1: any[], param2: number): any[]
      {
         return null;
      }
   }
