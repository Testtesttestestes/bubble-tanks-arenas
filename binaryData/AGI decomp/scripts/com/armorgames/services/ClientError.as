package com.armorgames.services
{
   public class ClientError
   {
      
      public static const AUTH_ERROR:uint = 100;
      
      public static const AUTH_FAILED:uint = 101;
      
      public static const CALL_ERROR:uint = 102;
      
      public static const CALL_FAILED:uint = 103;
      
      public static const NOT_AUTHENTICATED:uint = 104;
      
      public static const STATUS_ERROR:uint = 105;
      
      public static const NETWORK_STATUS_ERROR:uint = 106;
      
      public static const SECURITY_ERROR:uint = 107;
      
      public static const ASYNC_ERROR:uint = 108;
      
      public static const IO_ERROR:uint = 109;
      
      public static const CLIENT_CONNECT_ERROR:uint = 110;
      
      public static const CLIENT_TIMEOUT_ERROR:uint = 111;
      
      protected var code:uint;
      
      protected var message:String;
      
      protected var data:Object;
      
      public function ClientError(param1:String, param2:uint, param3:Object = null)
      {
         super();
         this.code = param2;
         this.message = param1;
         this.data = param3;
      }
      
      public function getCode() : uint
      {
         return this.code;
      }
      
      public function getMessage() : String
      {
         return this.message;
      }
      
      public function getData() : Object
      {
         return this.data;
      }
      
      public function toString() : String
      {
         return "#" + this.code + ": " + this.message;
      }
   }
}

