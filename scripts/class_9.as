package
{
   import flash.display.Stage;
   import flash.events.*;
   import flash.net.*;
   import flash.system.Capabilities;
   
   public class class_9
   {
      
      private var var_325:Stage;
      
      private var var_353:Array;
      
      private var var_513:Boolean;
      
      private var var_175:Boolean;
      
      private var var_373:Array;
      
      private var var_350:URLLoader;
      
      private var var_393:Array;
      
      private var var_539:Boolean;
      
      private var var_375:Array;
      
      public var blnECAlwaysUnlocked:Boolean;
      
      private var var_247:Boolean;
      
      private var blnXMLException:Boolean;
      
      public function class_9(param1:Stage, param2:Boolean, param3:Boolean, param4:Boolean, param5:Boolean = true)
      {
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
      
      public function method_805() : Boolean
      {
         if(this.var_175 == false)
         {
            this.var_175 = true;
         }
         return false;
      }
      
      public function AddECDomain(param1:String) : void
      {
         this.var_375.push(param1);
      }
      
      public function AddAllowableDomain(param1:String) : void
      {
         this.var_353.push(param1);
      }
      
      private function method_638(param1:Event) : void
      {
         var _loc2_:XML = new XML(this.var_350.data);
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
      
      public function AddBlockedDomain(param1:String) : void
      {
         this.var_393.push(param1);
      }
      
      public function method_772() : Boolean
      {
         if(this.var_539 == true)
         {
            return false;
         }
         var _loc1_:String = this.var_325.loaderInfo.url;
         var _loc2_:Number = 0;
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
      
      public function method_668() : Boolean
      {
         if(this.blnECAlwaysUnlocked == true)
         {
            return true;
         }
         var _loc1_:String = this.var_325.loaderInfo.url;
         var _loc2_:Number = 0;
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
      
      public function method_106(param1:String) : Boolean
      {
         var _loc2_:String = this.var_325.loaderInfo.url;
         if(_loc2_.indexOf(param1) != -1)
         {
            return true;
         }
         return false;
      }
      
      public function method_527() : Boolean
      {
         var _loc3_:Number = NaN;
         var _loc1_:String = this.var_325.loaderInfo.url;
         var _loc2_:Number = 0;
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
      
      private function method_727(param1:Event) : void
      {
         this.var_175 = true;
         this.var_247 = false;
      }
      
      private function SearchForXMLException() : void
      {
         var _loc1_:URLRequest = new URLRequest("AllowGameURLAccess.xml");
         this.var_350 = new URLLoader();
         this.var_350.addEventListener(Event.COMPLETE,this.method_638);
         this.var_350.addEventListener(IOErrorEvent.IO_ERROR,this.method_727);
         this.var_350.load(_loc1_);
      }
      
      public function AddAdFreeDomain(param1:String) : void
      {
         this.var_373.push(param1);
      }
   }
}

