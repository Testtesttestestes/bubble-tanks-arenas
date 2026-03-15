// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_3

export class Base64{
      
      private static readonly BASE64_CHARS: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      public static readonly version: string = "1.0.0";
      constructor(){
         super();
         throw new Error("Base64 class instanceof static container only");
      }
      
      public static method_827(param1: string): string
      {
         let _loc2_: ByteArray = new ByteArray();
         _loc2_.writeUTFBytes(param1);
         return method_330(_loc2_);
      }
      
      public static method_330(param1: ByteArray): string
      {
         let _loc3_: any[] = null;
         let _loc5_: number = 0;
         let _loc6_: number = 0;
         let _loc7_: number = 0;
         let _loc2_: string = "";
         let _loc4_: any[] = new Array(4);
         param1.position = 0;
         while(param1.bytesAvailable > 0)
         {
            _loc3_ = new Array();
            _loc5_ = 0;
            while(_loc5_ < 3 && param1.bytesAvailable > 0)
            {
               _loc3_[_loc5_] = param1.readUnsignedByte();
               _loc5_++;
            }
            _loc4_[0] = (_loc3_[0] & 0xFC) >> 2;
            _loc4_[1] = (_loc3_[0] & 3) << 4 | _loc3_[1] >> 4;
            _loc4_[2] = (_loc3_[1] & 0x0F) << 2 | _loc3_[2] >> 6;
            _loc4_[3] = _loc3_[2] & 0x3F;
            _loc6_ = _loc3_.length;
            while(_loc6_ < 3)
            {
               _loc4_[_loc6_ + 1] = 64;
               _loc6_++;
            }
            _loc7_ = 0;
            while(_loc7_ < _loc4_.length)
            {
               _loc2_ += BASE64_CHARS.charAt(_loc4_[_loc7_]);
               _loc7_++;
            }
         }
         return _loc2_;
      }
      
      public static method_836(param1: string): string
      {
         let _loc2_: ByteArray = method_462(param1);
         return _loc2_.readUTFBytes(_loc2_.length);
      }
      
      public static method_462(param1: string): ByteArray
      {
         let _loc6_: number = 0;
         let _loc7_: number = 0;
         let _loc2_: ByteArray = new ByteArray();
         let _loc3_: any[] = new Array(4);
         let _loc4_: any[] = new Array(3);
         let _loc5_: number = 0;
         while(_loc5_ < param1.length)
         {
            _loc6_ = 0;
            while(_loc6_ < 4 && _loc5_ + _loc6_ < param1.length)
            {
               _loc3_[_loc6_] = BASE64_CHARS.indexOf(param1.charAt(_loc5_ + _loc6_));
               _loc6_++;
            }
            _loc4_[0] = (_loc3_[0] << 2) + ((_loc3_[1] & 0x30) >> 4);
            _loc4_[1] = ((_loc3_[1] & 0x0F) << 4) + ((_loc3_[2] & 0x3C) >> 2);
            _loc4_[2] = ((_loc3_[2] & 3) << 6) + _loc3_[3];
            _loc7_ = 0;
            while(_loc7_ < _loc4_.length)
            {
               if(_loc3_[_loc7_ + 1] == 64)
               {
                  break;
               }
               _loc2_.writeByte(_loc4_[_loc7_]);
               _loc7_++;
            }
            _loc5_ += 4;
         }
         _loc2_.position = 0;
         return _loc2_;
      }
   }
