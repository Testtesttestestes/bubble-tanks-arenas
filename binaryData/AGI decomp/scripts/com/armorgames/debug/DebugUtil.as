package com.armorgames.debug
{
   import flash.external.ExternalInterface;
   
   public class DebugUtil
   {
      
      private static var _debugOutputCallback:Function;
      
      private static var _apiName:String = "";
      
      private static var ON:Boolean = true;
      
      private static var EXTERN:Boolean = false;
      
      private static var _filters:Array = new Array();
      
      public function DebugUtil()
      {
         super();
      }
      
      public static function init(param1:String, param2:Boolean = true, param3:Boolean = false, param4:Array = null) : void
      {
         ON = param2;
         EXTERN = param3;
         _apiName = param1;
         if(!param4)
         {
            _filters = ["OUT","ERROR","WARN","INFO","FATAL","DEBUG"];
         }
         else
         {
            _filters = param4;
         }
      }
      
      public static function forceOut(... rest) : void
      {
         output("OUT",rest,true);
      }
      
      public static function out(... rest) : void
      {
         output("OUT",rest);
      }
      
      public static function error(... rest) : void
      {
         output("ERROR",rest);
      }
      
      public static function warn(... rest) : void
      {
         output("WARNING",rest);
      }
      
      public static function info(... rest) : void
      {
         output("INFO",rest);
      }
      
      public static function fatal(... rest) : void
      {
         output("FATAL",rest);
      }
      
      public static function debug(... rest) : void
      {
         output("DEBUG",rest);
      }
      
      public static function custom(param1:String, ... rest) : void
      {
         output(param1,rest);
      }
      
      public static function getDebugInfo(param1:uint = 3) : String
      {
         var _loc9_:Array = null;
         var _loc2_:String = "";
         var _loc3_:Error = new Error();
         var _loc4_:String = _loc3_.getStackTrace();
         if(_loc4_.indexOf("[") == -1)
         {
            return "";
         }
         var _loc5_:Array = _loc4_.split("\n");
         var _loc6_:Array = _loc5_[param1].split("[");
         var _loc7_:String = "";
         if(_loc6_[1] != null)
         {
            _loc9_ = _loc6_[1].split(":");
            _loc7_ = _loc9_[_loc9_.length - 1].substr(0,_loc9_.length);
            if(_loc7_.indexOf("]") != -1)
            {
               _loc7_ = _loc7_.substring(0,_loc7_.length - 1);
            }
         }
         var _loc8_:String = _loc6_[0].substring(4);
         return "[ " + _loc8_ + (_loc7_ != "" ? " : " + _loc7_ : "") + " ]";
      }
      
      public static function setDebugCallback(param1:Function) : void
      {
         _debugOutputCallback = param1;
      }
      
      private static function output(param1:String, param2:Array, param3:Boolean = false) : void
      {
         if(!param3)
         {
            if(_apiName == "" || !ON || _filters.indexOf(param1) == -1)
            {
               return;
            }
         }
         if(param1 == "OUT")
         {
            param1 = "";
         }
         var _loc4_:String = "[ " + _apiName + " ] -> " + param1 + ": ";
         var _loc5_:int = 0;
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
         trace(_loc4_);
         if(_debugOutputCallback != null)
         {
            _debugOutputCallback(_loc4_);
         }
         try
         {
            if(EXTERN && ExternalInterface.available)
            {
               ExternalInterface.call("console.log",_loc4_);
            }
         }
         catch(e:Error)
         {
         }
      }
   }
}

