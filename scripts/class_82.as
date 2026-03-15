package
{
   import flash.display.MovieClip;
   import flash.events.Event;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol628")]
   public class class_82 extends MovieClip
   {
      
      public var var_370:Number;
      
      public var var_585:MovieClip;
      
      public var var_547:Number;
      
      public function class_82()
      {
         super();
         this.var_547 = 0;
         this.var_370 = -1;
         var _loc1_:Number = 0.5 + Math.random() * 2;
         this.var_370 *= _loc1_ * 3;
         this.scaleX = _loc1_;
         this.scaleY = this.scaleX;
         var _loc2_:Number = Math.random() * 550;
         this.x = _loc2_;
         this.y = 470;
         addEventListener(Event.ENTER_FRAME,this.method_707);
      }
      
      public function method_707(param1:Event) : void
      {
         this.y += this.var_370;
      }
   }
}

