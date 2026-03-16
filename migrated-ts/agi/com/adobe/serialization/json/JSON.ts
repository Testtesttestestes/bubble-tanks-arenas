// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.adobe.serialization.json

export class JSON{
      
      constructor(){
         super();
      }
      
      public static encode(param1: Record<string, any>): string
      {
         let _loc2_: JSONEncoder = new JSONEncoder(param1);
         return _loc2_.getString();
      }
      
      public static decode(param1: string): any
      {
         let _loc2_: JSONDecoder = new JSONDecoder(param1);
         return _loc2_.getValue();
      }
   }
