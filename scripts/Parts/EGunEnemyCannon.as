package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol515")]
   public class EGunEnemyCannon extends Weapon
   {
      
      public var var_18:MovieClip;
      
      public function EGunEnemyCannon()
      {
         super();
         intFireRate = 50;
      }
      
      override public function PartCallTrigger() : void
      {
         var _loc1_:Point = new Point(this.var_18.x,this.var_18.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,7,1);
      }
   }
}

