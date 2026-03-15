package
{
   import flash.display.MovieClip;
   import flash.external.ExternalInterface;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   
   public dynamic class class_114 extends MovieClip
   {
      
      protected static const const_19:String = "window.open";
      
      public function class_114()
      {
         super();
      }
      
      public static function method_774(param1:String, param2:String = "_blank", param3:String = "") : void
      {
         ExternalInterface.call(const_19,param1,param2,param3);
      }
      
      public function method_104(param1:String, param2:String = null) : void
      {
         var var_106:String = param1;
         var var_40:String = param2;
         var var_56:URLRequest = new URLRequest(var_106);
         try
         {
            navigateToURL(var_56,var_40);
         }
         catch(e:Error)
         {
         }
      }
   }
}

