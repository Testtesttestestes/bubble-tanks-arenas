package
{
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public class class_112 extends MovieClip
   {
      
      public var var_252:Number;
      
      private var mRef:class_79;
      
      public function class_112()
      {
         super();
         this.var_252 = 1;
      }
      
      private function method_754(param1:Event) : void
      {
         var _temp_3:* = this;
         var _temp_2:* = this;
         var _temp_1:* = true;
         true;
         _temp_2.useHandCursor = _temp_1;
         _temp_3.buttonMode = true;
      }
      
      private function method_647(param1:Event) : void
      {
         var _temp_3:* = this;
         var _temp_2:* = this;
         var _temp_1:* = false;
         false;
         _temp_2.useHandCursor = _temp_1;
         _temp_3.buttonMode = false;
      }
      
      public function Setup(param1:class_79) : void
      {
         this.mRef = param1;
         this.addEventListener(MouseEvent.MOUSE_UP,this.method_732);
         this.addEventListener(MouseEvent.MOUSE_OVER,this.method_754);
         this.addEventListener(MouseEvent.MOUSE_OUT,this.method_647);
      }
      
      public function method_115(param1:Number) : Boolean
      {
         if(this.mRef != null)
         {
            if(param1 == 1)
            {
               return this.mRef.gData.var_508;
            }
            if(param1 == 2)
            {
               return this.mRef.gData.var_512;
            }
            if(param1 == 3)
            {
               return this.mRef.gData.var_484;
            }
            if(param1 == 4)
            {
               return this.mRef.gData.var_521;
            }
         }
         return false;
      }
      
      public function method_366() : void
      {
         if(this.mRef != null)
         {
            this.mRef.method_216();
            this.mRef.removeChild(this);
         }
      }
      
      private function method_732(param1:Event) : void
      {
         if(this.var_252 == 1)
         {
            if(this.method_115(3) == true)
            {
               this.mRef.method_44("intro_armor_games_link","link_outs");
               this.mRef.method_56(this.var_252);
            }
         }
         if(this.var_252 == 2)
         {
            if(this.method_115(4) == true)
            {
               this.mRef.method_44("intro_hero_interactive_link","link_outs");
               this.mRef.method_56(this.var_252);
            }
         }
      }
   }
}

