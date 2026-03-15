// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_8

export class class_22{
      
      constructor(){
         super();
      }
      
      public static compress(param1: string): string
      {
         let _loc2_: ByteArray = new ByteArray();
         _loc2_.writeUTFBytes(param1);
         _loc2_.compress();
         return Base64.method_581(_loc2_);
      }
      
      public static uncompress(param1: string): string
      {
         let b: ByteArray = null;
         let str: string = param1;
         try
         {
            b = Base64.method_551(str);
            b.uncompress();
            return b.toString();
         }
         catch (e: any)
         {
            return null;
         }
      }
   }
