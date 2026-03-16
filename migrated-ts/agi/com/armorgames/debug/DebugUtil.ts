// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.debug

export class DebugUtil{
      
      private static _debugOutputCallback: Function;
      private static _apiName: string = "";
      private static ON: boolean = true;
      private static EXTERN: boolean = false;
      private static _filters: any[] = new Array();
      constructor(){
         super();
      }
      
      public static init(param1: string, param2: boolean = true, param3: boolean = false, param4: any[] = null as any): void
      {
         this.ON = param2;
         this.EXTERN = param3;
         this._apiName = param1;
         if(!param4)
         {
            this._filters = ["OUT","ERROR","WARN","INFO","FATAL","DEBUG"];
         }
         else
         {
            this._filters = param4;
         }
      }
      
      public static forceOut(... rest): void
      {
         output("OUT",rest,true);
      }
      
      public static out(... rest): void
      {
         output("OUT",rest);
      }
      
      public static error(... rest): void
      {
         output("ERROR",rest);
      }
      
      public static warn(... rest): void
      {
         output("WARNING",rest);
      }
      
      public static info(... rest): void
      {
         output("INFO",rest);
      }
      
      public static fatal(... rest): void
      {
         output("FATAL",rest);
      }
      
      public static debug(... rest): void
      {
         output("DEBUG",rest);
      }
      
      public static custom(param1: string, ... rest): void
      {
         output(param1,rest);
      }
      
      public static getDebugInfo(param1: number = 3): string
      {
         let _loc9_: any[] = null;
         let _loc2_: string = "";
         let _loc3_: Error = new Error();
         let _loc4_: string = _loc3_.getStackTrace();
         if(_loc4_.indexOf("[") == -1)
         {
            return "";
         }
         let _loc5_: any[] = _loc4_.split("\n");
         let _loc6_: any[] = _loc5_[param1].split("[");
         let _loc7_: string = "";
         if(_loc6_[1] != null)
         {
            _loc9_ = _loc6_[1].split(":");
            _loc7_ = _loc9_[_loc9_.length - 1].substr(0,_loc9_.length);
            if(_loc7_.indexOf("]") != -1)
            {
               _loc7_ = _loc7_.substring(0,_loc7_.length - 1);
            }
         }
         let _loc8_: string = _loc6_[0].substring(4);
         return "[ " + _loc8_ + (_loc7_ != "" ? " : " + _loc7_ : "") + " ]";
      }
      
      public static setDebugCallback(param1: Function): void
      {
         this._debugOutputCallback = param1;
      }
      
      private static output(param1: string, param2: any[], param3: boolean = false): void
      {
         if(!param3)
         {
            if(this._apiName == "" || !this.ON || this._filters.indexOf(param1) == -1)
            {
               return;
            }
         }
         if(param1 == "OUT")
         {
            param1 = "";
         }
         let _loc4_: string = "[ " + this._apiName + " ] -> " + param1 + ": ";
         let _loc5_: number = 0;
         while(_loc5_ < param2.length)
         {
            if(param2[_loc5_] == null)
            {
               _loc4_ += "null ";
            }
            else
            {
               _loc4_ += param2[_loc5_].toString() + " ";
            }
            _loc5_++;
         }
         console.log(_loc4_);
         if(this._debugOutputCallback != null)
         {
            this._debugOutputCallback(_loc4_);
         }
         try
         {
            if(this.EXTERN && ExternalInterface.available)
            {
               ExternalInterface.call("console.log",_loc4_);
            }
         }
         catch (e: any)
         {
         }
      }
   }
