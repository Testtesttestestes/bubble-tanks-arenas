package package_6
{
   import flash.display.DisplayObject;
   import flash.display.Loader;
   import flash.net.URLRequest;
   import flash.system.Security;
   
   public class class_16
   {
      
      private static var var_378:Loader;
      
      public function class_16()
      {
         super();
      }
      
      public static function method_492(param1:int, param2:int) : DisplayObject
      {
         Security.allowDomain("server.cpmstar.com");
         var_378 = new Loader();
         var_378.load(new URLRequest("http://server.cpmstar.com/adviewas3.swf" + "?poolid=" + param1 + "&subpoolid=" + param2));
         return var_378;
      }
   }
}

