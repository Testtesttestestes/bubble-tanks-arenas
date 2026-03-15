package package_3
{
   import flash.net.LocalConnection;
   import flash.system.System;
   
   public class class_27
   {
      
      public function class_27()
      {
         super();
      }
      
      public static function method_59() : void
      {
         try
         {
            new LocalConnection().connect("foo");
            new LocalConnection().connect("foo");
         }
         catch(e:*)
         {
         }
      }
      
      public static function get method_791() : uint
      {
         return System.totalMemory;
      }
   }
}

