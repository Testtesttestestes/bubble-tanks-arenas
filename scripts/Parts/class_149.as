package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol518")]
   public class class_149 extends Weapon
   {
      
      public var var_18:MovieClip;
      
      public function class_149()
      {
         super();
         intFireRate = 150;
      }
      
      override public function PartCallTrigger() : void
      {
         var _loc1_:Point = new Point(this.var_18.x,this.var_18.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.AddEffectToQueue(new class_91(),_loc1_.x,_loc1_.y,"BottomEffectsLayer",false);
         var_3.objData.objWorld.currentBFTarget.AreaStunTest(_loc1_.x,_loc1_.y,290 / 2,100);
      }
   }
}

