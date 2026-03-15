package package_8
{
   import flash.utils.ByteArray;
   
   public class class_22
   {
      
      public function class_22()
      {
         super();
      }
      
      public static function compress(param1:String) : String
      {
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeUTFBytes(param1);
         _loc2_.compress();
         return Base64.method_581(_loc2_);
      }
      
      public static function uncompress(param1:String) : String
      {
         var b:ByteArray = null;
         var str:String = param1;
         try
         {
            b = Base64.method_551(str);
            b.uncompress();
            return b.toString();
         }
         catch(e:Error)
         {
            return null;
         }
      }
   }
}

