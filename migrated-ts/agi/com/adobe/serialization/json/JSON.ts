// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.adobe.serialization.json

import { JSONEncoder } from "./JSONEncoder";
import { JSONDecoder } from "./JSONDecoder";


   export class JSON{
      
      constructor(){

      }
      
      public static encode(param1: Record<string, any>): string
      {
         var _loc2_: JSONEncoder = new JSONEncoder(param1);
         return _loc2_.getString();
      }
      
      public static decode(param1: string): any
      {
         var _loc2_: JSONDecoder = new JSONDecoder(param1);
         return _loc2_.getValue();
      }
   }
