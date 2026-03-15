// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_9{
      
      private var_325: Stage;
      private var_353: any[];
      private var_513: boolean;
      private var_175: boolean;
      private var_373: any[];
      private var_350: URLLoader;
      private var_393: any[];
      private var_539: boolean;
      private var_375: any[];
      public blnECAlwaysUnlocked: boolean;
      private var_247: boolean;
      private blnXMLException: boolean;
      constructor(param1: Stage, param2: boolean, param3: boolean, param4: boolean, param5: boolean = true){
         super();
         this.var_325 = param1;
         this.blnXMLException = param5;
         this.var_513 = param2;
         this.var_539 = param3;
         this.blnECAlwaysUnlocked = param4;
         this.var_353 = new Array();
         this.var_373 = new Array();
         this.var_375 = new Array();
         this.var_393 = new Array();
         this.var_175 = false;
         this.var_247 = false;
         if(this.blnXMLException == true)
         {
            if(Capabilities.playerType == "External")
            {
               this.SearchForXMLException();
            }
            else
            {
               this.var_175 = true;
            }
         }
      }
      
      public method_805(): boolean
      {
         if(this.var_175 == false)
         {
            this.var_175 = true;
         }
         return false;
      }
      
      public AddECDomain(param1: string): void
      {
         this.var_375.push(param1);
      }
      
      public AddAllowableDomain(param1: string): void
      {
         this.var_353.push(param1);
      }
      
      private method_638(param1: Event): void
      {
         let _loc2_: XML = new XML(this.var_350.data);
         if(_loc2_.name() == "GAMEEXCEPTIONS")
         {
            if(_loc2_.children()[0].name() == "GAMEALLOWURLACCESS")
            {
               if(_loc2_.children()[0].attribute("ALLOWACCESS").toString() == "True")
               {
                  this.var_175 = true;
                  this.var_247 = true;
               }
               else
               {
                  this.var_175 = true;
                  this.var_247 = false;
               }
            }
            else
            {
               this.var_175 = true;
               this.var_247 = false;
            }
         }
         else
         {
            this.var_175 = true;
            this.var_247 = false;
         }
      }
      
      public AddBlockedDomain(param1: string): void
      {
         this.var_393.push(param1);
      }
      
      public method_772(): boolean
      {
         if(this.var_539 == true)
         {
            return false;
         }
         let _loc1_: string = this.var_325.loaderInfo.url;
         let _loc2_: number = 0;
         while(_loc2_ < this.var_373.length)
         {
            if(_loc1_.indexOf(this.var_373[_loc2_]) != -1)
            {
               return false;
            }
            _loc2_++;
         }
         return true;
      }
      
      public method_668(): boolean
      {
         if(this.blnECAlwaysUnlocked == true)
         {
            return true;
         }
         let _loc1_: string = this.var_325.loaderInfo.url;
         let _loc2_: number = 0;
         while(_loc2_ < this.var_375.length)
         {
            if(_loc1_.indexOf(this.var_375[_loc2_]) != -1)
            {
               return true;
            }
            _loc2_++;
         }
         return false;
      }
      
      public method_106(param1: string): boolean
      {
         let _loc2_: string = this.var_325.loaderInfo.url;
         if(_loc2_.indexOf(param1) != -1)
         {
            return true;
         }
         return false;
      }
      
      public method_527(): boolean
      {
         let _loc3_: number = NaN;
         let _loc1_: string = this.var_325.loaderInfo.url;
         let _loc2_: number = 0;
         while(_loc2_ < this.var_393.length)
         {
            if(_loc1_.indexOf(this.var_393[_loc2_]) != -1)
            {
               return true;
            }
            _loc2_++;
         }
         if(this.var_513 == true)
         {
            return false;
         }
         if(this.blnXMLException == true && this.var_175 == false)
         {
         }
         if(this.var_247 == true)
         {
            return false;
         }
         _loc3_ = 0;
         while(_loc3_ < this.var_353.length)
         {
            if(_loc1_.indexOf(this.var_353[_loc3_]) != -1)
            {
               return false;
            }
            _loc3_++;
         }
         return true;
      }
      
      private method_727(param1: Event): void
      {
         this.var_175 = true;
         this.var_247 = false;
      }
      
      private SearchForXMLException(): void
      {
         let _loc1_: URLRequest = new URLRequest("AllowGameURLAccess.xml");
         this.var_350 = new URLLoader();
         this.var_350.addEventListener(Event.COMPLETE, this.method_638.bind(this));
         this.var_350.addEventListener(IOErrorEvent.IO_ERROR, this.method_727.bind(this));
         this.var_350.load(_loc1_);
      }
      
      public AddAdFreeDomain(param1: string): void
      {
         this.var_373.push(param1);
      }
   }
