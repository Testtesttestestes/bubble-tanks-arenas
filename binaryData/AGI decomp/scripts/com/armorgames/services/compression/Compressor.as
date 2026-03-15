package com.armorgames.services.compression
{
   import flash.utils.ByteArray;
   
   public class Compressor
   {
      
      public function Compressor()
      {
         super();
      }
      
      public static function compress(param1:String) : String
      {
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeUTFBytes(param1);
         _loc2_.compress();
         return Base64.Encode(_loc2_);
      }
      
      public static function uncompress(param1:String) : String
      {
         var _loc2_:ByteArray = Base64.Decode(param1);
         _loc2_.uncompress();
         return _loc2_.toString();
      }
   }
}

