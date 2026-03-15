package package_5
{
   import flash.events.HTTPStatusEvent;
   import flash.events.IOErrorEvent;
   import flash.events.SecurityErrorEvent;
   import flash.events.TimerEvent;
   import flash.external.ExternalInterface;
   import flash.net.SharedObject;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import flash.system.Security;
   import flash.utils.Timer;
   
   public final class class_15
   {
      
      public static var var_339:String;
      
      private static const class_26:Number = Math.random();
      
      private static var var_93:Boolean = false;
      
      public static var SWFID:int = 0;
      
      public static var GUID:String = "";
      
      private static const PingF:Timer = new Timer(60000);
      
      private static const PingR:Timer = new Timer(30000);
      
      private static var FirstPing:Boolean = true;
      
      private static var Pings:int = 0;
      
      private static var Plays:int = 0;
      
      private static var var_503:int = 0;
      
      public function class_15()
      {
         super();
      }
      
      private static function method_346(param1:String) : int
      {
         var _loc2_:SharedObject = SharedObject.getLocal("swfstats");
         if(_loc2_.data[param1] == undefined)
         {
            return 0;
         }
         return int(_loc2_.data[param1]);
      }
      
      private static function method_304(param1:String, param2:int) : void
      {
         var _loc3_:SharedObject = SharedObject.getLocal("swfstats");
         _loc3_.data[param1] = param2.toString();
         _loc3_.flush();
      }
      
      public static function View(param1:int = 0, param2:String = "", param3:String = "") : void
      {
         SWFID = param1;
         GUID = param2;
         var_93 = true;
         if(SWFID == 0 || GUID == "")
         {
            var_93 = false;
            return;
         }
         if(param3.indexOf("http://") != 0 && Security.sandboxType != "localWithNetwork" && Security.sandboxType != "localTrusted")
         {
            var_93 = false;
            return;
         }
         var_339 = method_470(param3);
         if(var_339 == null || var_339 == "")
         {
            var_93 = false;
            return;
         }
         Security.allowDomain("http://tracker.swfstats.com/");
         Security.allowInsecureDomain("http://tracker.swfstats.com/");
         Security.loadPolicyFile("http://tracker.swfstats.com/crossdomain.xml");
         Security.allowDomain("http://utils.swfstats.com/");
         Security.allowInsecureDomain("http://utils.swfstats.com/");
         Security.loadPolicyFile("http://utils.swfstats.com/crossdomain.xml");
         var _loc4_:* = method_346("views");
         _loc4_ = _loc4_ + 1;
         method_304("views",_loc4_);
         Send("View","views=" + _loc4_);
         PingF.addEventListener(TimerEvent.TIMER,PingServer);
         PingF.start();
      }
      
      public static function method_857(param1:String, param2:*) : void
      {
         if(!var_93)
         {
            return;
         }
         Send("LevelMetric","name=" + escape(param1) + "&level=" + param2);
      }
      
      private static function Send(param1:String, param2:String) : void
      {
         var _loc3_:URLLoader = new URLLoader();
         _loc3_.addEventListener(IOErrorEvent.IO_ERROR,method_428);
         _loc3_.addEventListener(HTTPStatusEvent.HTTP_STATUS,method_550);
         _loc3_.addEventListener(SecurityErrorEvent.SECURITY_ERROR,method_428);
         _loc3_.load(new URLRequest("http://tracker.swfstats.com/Games/" + param1 + ".html?guid=" + GUID + "&swfid=" + SWFID + "&" + param2 + "&url=" + var_339 + "&" + class_26));
      }
      
      public static function Play() : void
      {
         if(!var_93)
         {
            return;
         }
         ++Plays;
         Send("Play","plays=" + Plays);
      }
      
      private static function method_470(param1:String) : String
      {
         var var_56:String = null;
         var var_40:String = param1;
         if(ExternalInterface.available)
         {
            try
            {
               var_56 = String(ExternalInterface.call("window.location.href.toString"));
            }
            catch(s:Error)
            {
               var_56 = var_40;
            }
         }
         else if(var_40.indexOf("http://") == 0)
         {
            var_56 = var_40;
         }
         if(var_56 == null || var_56 == "" || var_56 == "null")
         {
            if(Security.sandboxType == "localWithNetwork" || Security.sandboxType == "localTrusted")
            {
               var_56 = "http://local-testing/";
            }
            else
            {
               var_56 = null;
            }
         }
         return var_56;
      }
      
      private static function method_428(... rest) : void
      {
         var_93 = false;
      }
      
      public static function method_856(param1:String, param2:*, param3:int) : void
      {
         if(!var_93)
         {
            return;
         }
         Send("LevelMetricRanged","name=" + escape(param1) + "&level=" + param2 + "&value=" + param3);
      }
      
      private static function method_550(... rest) : void
      {
      }
      
      public static function method_817(param1:int, param2:String) : void
      {
      }
      
      private static function PingServer(... rest) : void
      {
         if(!var_93)
         {
            return;
         }
         ++Pings;
         Send("Ping",(FirstPing ? "&firstping=yes" : "") + "&pings=" + Pings);
         if(FirstPing)
         {
            PingF.stop();
            PingR.addEventListener(TimerEvent.TIMER,PingServer);
            PingR.start();
            FirstPing = false;
         }
      }
      
      public static function method_777(param1:String, param2:*, param3:int) : void
      {
         if(!var_93)
         {
            return;
         }
         Send("LevelMetricAverage","name=" + escape(param1) + "&level=" + param2 + "&value=" + param3);
      }
      
      public static function CustomMetric(param1:String, param2:String = null) : void
      {
         if(!var_93)
         {
            return;
         }
         if(param2 == null)
         {
            param2 = "";
         }
         Send("CustomMetric","name=" + escape(param1) + "&group=" + escape(param2));
      }
   }
}

