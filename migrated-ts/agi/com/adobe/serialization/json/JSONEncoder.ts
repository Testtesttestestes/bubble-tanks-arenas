// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.adobe.serialization.json

export class JSONEncoder{
      
      private jsonString!: string;
      constructor(param1: any){

         this.jsonString = this.convertToString(param1);
      }
      
      public getString(): string
      {
         return this.jsonString;
      }
      
      private convertToString(param1: any): string
      {
         if(typeof param1 === "string")
         {
            return this.escapeString(param1  as string);
         }
         if(typeof param1 === "number")
         {
            return isFinite(param1  as number) ? param1.toString() : "null";
         }
         if(typeof param1 === "boolean")
         {
            return Boolean(param1) ? "true" : "false";
         }
         if(param1 instanceof Array)
         {
            return this.arrayToString(param1  as any[]);
         }
         if(param1 instanceof Object && param1 != null)
         {
            return this.objectToString(param1);
         }
         return "null";
      }
      
      private escapeString(param1: string): string
      {
         var _loc3_: string = null as any;
         var _loc6_: string = null as any;
         var _loc7_: string = null as any;
         var _loc2_: string = "";
         var _loc4_: number = param1.length;
         var _loc5_: number = 0;
         while(_loc5_ < _loc4_)
         {
            _loc3_ = param1.charAt(_loc5_);
            switch(_loc3_)
            {
               case "\"":
                  _loc2_ += "\\\"";
                  break;
               case "\\":
                  _loc2_ += "\\\\";
                  break;
               case "\b":
                  _loc2_ += "\\b";
                  break;
               case "\f":
                  _loc2_ += "\\f";
                  break;
               case "\n":
                  _loc2_ += "\\n";
                  break;
               case "\r":
                  _loc2_ += "\\r";
                  break;
               case "\t":
                  _loc2_ += "\\t";
                  break;
               default:
                  if(_loc3_ < " ")
                  {
                     _loc6_ = _loc3_.charCodeAt(0).toString(16);
                     _loc7_ = _loc6_.length == 2 ? "00" : "000";
                     _loc2_ += "\\u" + _loc7_ + _loc6_;
                  }
                  else
                  {
                     _loc2_ += _loc3_;
                  }
            }
            _loc5_++;
         }
         return "\"" + _loc2_ + "\"";
      }
      
      private arrayToString(param1: any[]): string
      {
         var _loc2_: string = "";
         var _loc3_: number = 0;
         while(_loc3_ < param1.length)
         {
            if(_loc2_.length > 0)
            {
               _loc2_ += ",";
            }
            _loc2_ += this.convertToString(param1[_loc3_]);
            _loc3_++;
         }
         return "[" + _loc2_ + "]";
      }
      
      private objectToString(param1: Record<string, any>): string
      {
         var value: Record<string, any> = null as any;
         var key: string = null as any;
                  var o: Record<string, any> = param1;
         var s: string = "";
         for (let key in o) {
            value = o[key];
            if (!(value instanceof Function)) {
               if (s.length > 0) {
                  s += ",";
               }
               s += this.escapeString(key) + ":" + this.convertToString(value);
            }
         }
         return "{" + s + "}";
      }
   }
