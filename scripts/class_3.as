package
{
   import flash.display.*;
   import flash.events.*;
   
   public class class_3
   {
      
      private var var_578:MovieClip;
      
      private var var_462:Function;
      
      private var var_51:Array;
      
      private var var_421:Function;
      
      private var funUp:Function;
      
      public function class_3()
      {
         super();
      }
      
      public function method_32(param1:MovieClip) : *
      {
         param1.buttonMode = param1.useHandCursor = param1.mouseEnabled = param1.mouseChildren = false;
      }
      
      public function method_4(param1:MovieClip, param2:Boolean = true, param3:Function = null, param4:Function = null, param5:Function = null) : void
      {
         var _loc8_:Function = null;
         var _loc9_:Function = null;
         var _loc10_:Function = null;
         var _loc6_:Boolean = false;
         var _loc7_:uint = 0;
         while(_loc7_ < this.var_51.length)
         {
            if(this.var_51[_loc7_].movBtn == param1)
            {
               _loc6_ = true;
               break;
            }
            _loc7_++;
         }
         if(_loc6_ == false)
         {
            _loc8_ = this.funUp;
            _loc9_ = this.var_421;
            _loc10_ = this.var_462;
            if(param3 != null)
            {
               _loc8_ = param3;
            }
            if(param4 != null)
            {
               _loc9_ = param4;
            }
            if(param5 != null)
            {
               _loc10_ = param5;
            }
            param1.addEventListener(MouseEvent.MOUSE_UP,_loc8_);
            param1.addEventListener(MouseEvent.MOUSE_OVER,_loc9_);
            param1.addEventListener(MouseEvent.MOUSE_OUT,_loc10_);
            param1.buttonMode = param1.useHandCursor = param1.mouseEnabled = true;
            if(param2 == true)
            {
               param1.mouseChildren = false;
            }
            this.var_51.push({
               "movBtn":param1,
               "OverrideUp":_loc8_,
               "OverrideOver":_loc9_,
               "OverrideOut":_loc10_
            });
         }
      }
      
      private function method_745(param1:MouseEvent) : void
      {
         param1.target.gotoAndStop("off");
      }
      
      private function method_625(param1:MouseEvent) : void
      {
         param1.target.gotoAndStop("on");
      }
      
      public function method_10() : void
      {
         0;
         while(0 < this.var_51.length)
         {
            this.var_51[0].movBtn.removeEventListener(MouseEvent.MOUSE_OVER,this.var_51[0].OverrideOver);
            this.var_51[0].movBtn.removeEventListener(MouseEvent.MOUSE_OUT,this.var_51[0].OverrideOut);
            this.var_51[0].movBtn.removeEventListener(MouseEvent.MOUSE_UP,this.var_51[0].OverrideUp);
            this.var_51[0].movBtn.buttonMode = this.var_51[0].useHandCursor = this.var_51[0].mouseEnabled = false;
            var _loc1_:uint = 0 + 1;
         }
         this.var_51 = new Array();
      }
      
      public function method_814(param1:Number = 0) : MovieClip
      {
         if(param1 < this.var_51.length && param1 >= 0)
         {
            return this.var_51[param1];
         }
         return null;
      }
      
      private function DefaultUp(param1:MouseEvent) : void
      {
      }
      
      public function Setup(param1:Function = null, param2:Function = null, param3:Function = null) : void
      {
         if(param2 != null)
         {
            this.var_421 = param2;
         }
         else
         {
            this.var_421 = this.method_625;
         }
         if(param3 != null)
         {
            this.var_462 = param3;
         }
         else
         {
            this.var_462 = this.method_745;
         }
         if(param1 != null)
         {
            this.funUp = param1;
         }
         else
         {
            this.funUp = this.DefaultUp;
         }
         this.var_51 = new Array();
      }
      
      public function method_7(param1:MovieClip) : void
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_51.length)
         {
            if(this.var_51[_loc2_].movBtn == param1)
            {
               this.var_51[_loc2_].movBtn.removeEventListener(MouseEvent.MOUSE_OVER,this.var_51[_loc2_].OverrideOver);
               this.var_51[_loc2_].movBtn.removeEventListener(MouseEvent.MOUSE_OUT,this.var_51[_loc2_].OverrideOut);
               this.var_51[_loc2_].movBtn.removeEventListener(MouseEvent.MOUSE_UP,this.var_51[_loc2_].OverrideUp);
               this.var_51[_loc2_].movBtn.buttonMode = this.var_51[_loc2_].useHandCursor = this.var_51[_loc2_].mouseEnabled = false;
               this.var_51.splice(_loc2_,1);
               break;
            }
            _loc2_++;
         }
      }
   }
}

