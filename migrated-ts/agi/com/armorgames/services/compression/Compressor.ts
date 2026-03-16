// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services.compression

export class Compressor{
      
      constructor(){

      }
      
      public static compress(param1: string): string
      {
         var _loc2_: ByteArray = new ByteArray();
         _loc2_.writeUTFBytes(param1);
         _loc2_.compress();
         return Base64.Encode(_loc2_);
      }
      
      public static uncompress(param1: string): string
      {
         var _loc2_: ByteArray = Base64.Decode(param1);
         _loc2_.uncompress();
         return _loc2_.toString();
      }
   }
