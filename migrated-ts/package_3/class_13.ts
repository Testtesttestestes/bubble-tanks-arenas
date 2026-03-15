// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_3

export class class_13{
      
      constructor(){
         super();
      }
      
      public static method_22(param1: string, param2: boolean = false): string
      {
         let _loc3_: ByteArray = new ByteArray();
         _loc3_.writeUTFBytes(param1);
         return method_52(_loc3_,param2);
      }
      
      public static toString(param1: string): string
      {
         let _loc2_: ByteArray = toArray(param1);
         return _loc2_.readUTFBytes(_loc2_.length);
      }
      
      public static toArray(param1: string): ByteArray
      {
         param1 = param1.replace(/\s|:/gm,"");
         let _loc2_: ByteArray = new ByteArray();
         if(param1.length & 1 == 1)
         {
            param1 = "0" + param1;
         }
         let _loc3_: number = 0;
         while(_loc3_ < param1.length)
         {
            _loc2_[_loc3_ / 2] = parseInt(param1.substr(_loc3_,2),16);
            _loc3_ += 2;
         }
         return _loc2_;
      }
      
      public static method_52(param1: ByteArray, param2: boolean = false): string
      {
         let _loc3_: string = "";
         let _loc4_: number = 0;
         while(_loc4_ < param1.length)
         {
            _loc3_ += ("0" + param1[_loc4_].toString(16)).substr(-2,2);
            if(param2)
            {
               if(_loc4_ < param1.length - 1)
               {
                  _loc3_ += ":";
               }
            }
            _loc4_++;
         }
         return _loc3_;
      }
   }
