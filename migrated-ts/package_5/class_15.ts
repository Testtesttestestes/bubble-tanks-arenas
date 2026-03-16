// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_5

export class class_15{
      
      public static var_339: string;
      private static readonly class_26: number = Math.random();
      private static var_93: boolean = false;
      public static SWFID: number = 0;
      public static GUID: string = "";
      private static readonly PingF: Timer = new Timer(60000);
      private static readonly PingR: Timer = new Timer(30000);
      private static FirstPing: boolean = true;
      private static Pings: number = 0;
      private static Plays: number = 0;
      private static var_503: number = 0;
      constructor(){
         super();
      }
      
      private static method_346(param1: string): number
      {
         let _loc2_: SharedObject = SharedObject.getLocal("swfstats");
         if(_loc2_.data[param1] == undefined)
         {
            return 0;
         }
         return Math.floor(_loc2_.data[param1]);
      }
      
      private static method_304(param1: string, param2: number): void
      {
         let _loc3_: SharedObject = SharedObject.getLocal("swfstats");
         _loc3_.data[param1] = param2.toString();
         _loc3_.flush();
      }
      
      public static View(param1: number = 0, param2: string = "", param3: string = ""): void
      {
         this.SWFID = param1;
         this.GUID = param2;
         this.var_93 = true;
         if(this.SWFID == 0 || this.GUID == "")
         {
            this.var_93 = false;
            return;
         }
         if(param3.indexOf("http://") != 0 && Security.sandboxType != "localWithNetwork" && Security.sandboxType != "localTrusted")
         {
            this.var_93 = false;
            return;
         }
         this.var_339 = method_470(param3);
         if(this.var_339 == null || this.var_339 == "")
         {
            this.var_93 = false;
            return;
         }
         Security.allowDomain("http://tracker.swfstats.com/");
         Security.allowInsecureDomain("http://tracker.swfstats.com/");
         Security.loadPolicyFile("http://tracker.swfstats.com/crossdomain.xml");
         Security.allowDomain("http://utils.swfstats.com/");
         Security.allowInsecureDomain("http://utils.swfstats.com/");
         Security.loadPolicyFile("http://utils.swfstats.com/crossdomain.xml");
         let _loc4_: any = method_346("views");
         _loc4_ = _loc4_ + 1;
         method_304("views",_loc4_);
         ("View","views=" + _loc4_ as unknown as Send);
         this.PingF.addEventListener(TimerEvent.TIMER, PingServer.bind(this));
         this.PingF.start();
      }
      
      public static method_857(param1: string, param2: any): void
      {
         if(!this.var_93)
         {
            return;
         }
         ("LevelMetric","name=" + escape(param1 as unknown as Send) + "&level=" + param2);
      }
      
      private static Send(param1: string, param2: string): void
      {
         let _loc3_: URLLoader = new URLLoader();
         _loc3_.addEventListener(IOErrorEvent.IO_ERROR, method_428.bind(this));
         _loc3_.addEventListener(HTTPStatusEvent.HTTP_STATUS, method_550.bind(this));
         _loc3_.addEventListener(SecurityErrorEvent.SECURITY_ERROR, method_428.bind(this));
         _loc3_.load(new URLRequest("http://tracker.swfstats.com/Games/" + param1 + ".html?guid=" + this.GUID + "&swfid=" + this.SWFID + "&" + param2 + "&url=" + this.var_339 + "&" + this.class_26));
      }
      
      public static Play(): void
      {
         if(!this.var_93)
         {
            return;
         }
         ++this.Plays;
         ("Play","plays=" + this.Plays as unknown as Send);
      }
      
      private static method_470(param1: string): string
      {
         let var_56: string = null;
         let var_40: string = param1;
         if(ExternalInterface.available)
         {
            try
            {
               var_56 = String(ExternalInterface.call("window.location.href.toString"));
            }
            catch (s: any)
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
      
      private static method_428(... rest): void
      {
         this.var_93 = false;
      }
      
      public static method_856(param1: string, param2: any, param3: number): void
      {
         if(!this.var_93)
         {
            return;
         }
         ("LevelMetricRanged","name=" + escape(param1 as unknown as Send) + "&level=" + param2 + "&value=" + param3);
      }
      
      private static method_550(... rest): void
      {
      }
      
      public static method_817(param1: number, param2: string): void
      {
      }
      
      private static PingServer(... rest): void
      {
         if(!this.var_93)
         {
            return;
         }
         ++this.Pings;
         ("Ping",(this.FirstPing ? "&firstping=yes" : "" as unknown as Send) + "&pings=" + this.Pings);
         if(this.FirstPing)
         {
            this.PingF.stop();
            this.PingR.addEventListener(TimerEvent.TIMER, PingServer.bind(this));
            this.PingR.start();
            this.FirstPing = false;
         }
      }
      
      public static method_777(param1: string, param2: any, param3: number): void
      {
         if(!this.var_93)
         {
            return;
         }
         ("LevelMetricAverage","name=" + escape(param1 as unknown as Send) + "&level=" + param2 + "&value=" + param3);
      }
      
      public static CustomMetric(param1: string, param2: string = null as any): void
      {
         if(!this.var_93)
         {
            return;
         }
         if(param2 == null)
         {
            param2 = "";
         }
         ("CustomMetric","name=" + escape(param1 as unknown as Send) + "&group=" + escape(param2));
      }
   }
