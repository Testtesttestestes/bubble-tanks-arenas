package
{
   import flash.events.KeyboardEvent;
   
   public class class_7
   {
      
      internal var var_485:Boolean = false;
      
      internal var var_94:Array = new Array();
      
      internal var var_451:Boolean = false;
      
      internal var var_342:*;
      
      public function class_7(param1:*, param2:Boolean = false)
      {
         super();
         this.var_342 = param1;
         this.var_485 = param2;
      }
      
      public function method_111(param1:Number, param2:Function = null, param3:Function = null) : *
      {
         this.var_94.push({
            "KeyCode":param1,
            "CallBackFunctionDown":param2,
            "CallBackFunctionUp":param3
         });
         if(!this.var_451)
         {
            this.method_479();
         }
      }
      
      public function Destroy() : *
      {
         this.var_342.removeEventListener(KeyboardEvent.KEY_DOWN,this.Downs);
         this.var_342.removeEventListener(KeyboardEvent.KEY_UP,this.Ups);
         this.var_451 = false;
         this.var_94.length = 0;
         this.var_94 = null;
      }
      
      public function method_389(param1:Number) : *
      {
         null;
         var _loc3_:* = 0;
         while(_loc3_ < this.var_94.length)
         {
            if(param1 == this.var_94[_loc3_].KeyCode)
            {
               this.var_94[_loc3_] = this.var_94[this.var_94.length];
               var _loc2_:Object = this.var_94.pop();
               _loc2_ = null;
               break;
            }
            _loc3_ += 1;
         }
      }
      
      private function Downs(param1:KeyboardEvent) : *
      {
         if(this.var_485)
         {
         }
         var _loc2_:* = 0;
         while(_loc2_ < this.var_94.length)
         {
            if(param1.keyCode == this.var_94[_loc2_].KeyCode)
            {
               if(this.var_94[_loc2_].CallBackFunctionDown != null)
               {
                  this.var_94[_loc2_].CallBackFunctionDown();
               }
               break;
            }
            _loc2_ += 1;
         }
      }
      
      private function Ups(param1:KeyboardEvent) : *
      {
         var _loc2_:* = 0;
         while(_loc2_ < this.var_94.length)
         {
            if(param1.keyCode == this.var_94[_loc2_].KeyCode)
            {
               if(this.var_94[_loc2_].CallBackFunctionUp != null)
               {
                  this.var_94[_loc2_].CallBackFunctionUp();
               }
               break;
            }
            _loc2_ += 1;
         }
      }
      
      private function method_479() : *
      {
         this.var_342.addEventListener(KeyboardEvent.KEY_DOWN,this.Downs);
         this.var_342.addEventListener(KeyboardEvent.KEY_UP,this.Ups);
         this.var_451 = true;
      }
   }
}

