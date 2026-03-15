package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   import package_11.class_127;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol519")]
   public class class_147 extends Weapon
   {
      
      public var var_18:MovieClip;
      
      public function class_147()
      {
         super();
         intFireRate = 120;
      }
      
      override public function PartCallTrigger() : void
      {
         var _loc1_:Point = new Point(0,0);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_127(),_loc1_.x,_loc1_.y,1.7,this.rotation + var_3.rotation,8,35,false);
      }
   }
}

