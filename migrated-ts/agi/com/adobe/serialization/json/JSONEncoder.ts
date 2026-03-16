// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.adobe.serialization.json

export class JSONEncoder{
      
      private jsonString: string;
      constructor(param1: any){
         super();
         this.jsonString = this.convertToString(param1);
      }
      
      public getString(): string
      {
         return this.jsonString;
      }
      
      private convertToString(param1: any): string
      {
         if(param1 instanceof String)
         {
            return this.escapeString(param1  as unknown as String);
         }
         if(param1 instanceof Number)
         {
            return isFinite(param1  as unknown as Number) ? param1.toString() : "null";
         }
         if(param1 instanceof Boolean)
         {
            return Boolean(param1) ? "true" : "false";
         }
         if(param1 instanceof Array)
         {
            return this.arrayToString(param1  as unknown as Array);
         }
         if(param1 instanceof Object && param1 != null)
         {
            return this.objectToString(param1);
         }
         return "null";
      }
      
      private escapeString(param1: string): string
      {
         let _loc3_: string = null;
         let _loc6_: string = null;
         let _loc7_: string = null;
         let _loc2_: string = "";
         let _loc4_: number = param1.length;
         let _loc5_: number = 0;
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
         let _loc2_: string = "";
         let _loc3_: number = 0;
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
         let value: Record<string, any> = null;
         let key: string = null;
         let v: XML = null;
         let o: Record<string, any> = param1;
         let s: string = "";
         let classInfo: XML = describeType(o);
         if(classInfo._attr_name.toString() == "Object")
         {
            for (let key in o)
            {
               value = o[key];
               if(!(value instanceof Function))
               {
                  if(s.length > 0)
                  {
                     s += ",";
                  }
                  s += this.escapeString(key) + ":" + this.convertToString(value);
               }
            }
         }
         else
         {
            for (let v of classInfo.._star._missingMethod(name() == "variable" || name() == "accessor"))
            {
               if(s.length > 0)
               {
                  s += ",";
               }
               s += this.escapeString(v._attr_name.toString()) + ":" + this.convertToString(o[v._attr_name]);
            }
         }
         return "{" + s + "}";
      }
   }
