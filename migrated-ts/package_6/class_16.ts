// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_6

export class class_16{
      
      private static var_378: Loader;
      constructor(){
         super();
      }
      
      public static method_492(param1: number, param2: number): DisplayObject
      {
         Security.allowDomain("server.cpmstar.com");
         var_378 = new Loader();
         var_378.load(new URLRequest("http://server.cpmstar.com/adviewas3.swf" + "?poolid=" + param1 + "&subpoolid=" + param2));
         return var_378;
      }
   }
