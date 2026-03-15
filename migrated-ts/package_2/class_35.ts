// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_2

export class class_35 implements class_18
   {
      
      private k: any[];
      public readonly const_27: number = 64;
      constructor(param1: ByteArray){
         super();
         param1.position = 0;
         this.k = [param1.readUnsignedInt(),param1.readUnsignedInt(),param1.readUnsignedInt(),param1.readUnsignedInt()];
      }
      
      public static method_818(param1: string): class_35
      {
         let _loc2_: ByteArray = new ByteArray();
         _loc2_.writeUnsignedInt(parseInt(param1.substr(0,8),16));
         _loc2_.writeUnsignedInt(parseInt(param1.substr(8,8),16));
         _loc2_.writeUnsignedInt(parseInt(param1.substr(16,8),16));
         _loc2_.writeUnsignedInt(parseInt(param1.substr(24,8),16));
         _loc2_.position = 0;
         return new class_35(_loc2_);
      }
      
      public encrypt(param1: ByteArray, param2: number = 0): void
      {
         let _loc5_: number = 0;
         param1.position = param2;
         let _loc3_: number = param1.readUnsignedInt();
         let _loc4_: number = param1.readUnsignedInt();
         let _loc6_: number = 0;
         Math.floor(2654435769);
         _loc5_ = 0;
         while(_loc5_ < this.const_27)
         {
            _loc3_ += (_loc4_ << 4 ^ _loc4_ >> 5) + _loc4_ ^ _loc6_ + this.k[_loc6_ & 3];
            _loc6_ += 2654435769;
            _loc4_ += (_loc3_ << 4 ^ _loc3_ >> 5) + _loc3_ ^ _loc6_ + this.k[_loc6_ >> 11 & 3];
            _loc5_++;
         }
         param1.position -= 8;
         param1.writeUnsignedInt(_loc3_);
         param1.writeUnsignedInt(_loc4_);
      }
      
      public decrypt(param1: ByteArray, param2: number = 0): void
      {
         let _loc5_: number = 0;
         param1.position = param2;
         let _loc3_: number = param1.readUnsignedInt();
         let _loc4_: number = param1.readUnsignedInt();
         let _temp_1: any = Math.floor(2654435769);
         let _loc7_: number = _temp_1 * this.const_27;
         _loc5_ = 0;
         while(_loc5_ < this.const_27)
         {
            _loc4_ -= (_loc3_ << 4 ^ _loc3_ >> 5) + _loc3_ ^ _loc7_ + this.k[_loc7_ >> 11 & 3];
            _loc7_ -= 2654435769;
            _loc3_ -= (_loc4_ << 4 ^ _loc4_ >> 5) + _loc4_ ^ _loc7_ + this.k[_loc7_ & 3];
            _loc5_++;
         }
         param1.position -= 8;
         param1.writeUnsignedInt(_loc3_);
         param1.writeUnsignedInt(_loc4_);
      }
      
      public method_53(): number
      {
         return 8;
      }
      
      public toString(): string
      {
         return "xtea";
      }
      
      public dispose(): void
      {
         let _loc1_: class_26 = new class_26();
         let _loc2_: number = 0;
         while(_loc2_ < this.k.length)
         {
            this.k[_loc2_] = _loc1_.method_68();
            delete this.k[_loc2_];
            _loc2_++;
         }
         this.k = null;
         class_27.method_59();
      }
   }
