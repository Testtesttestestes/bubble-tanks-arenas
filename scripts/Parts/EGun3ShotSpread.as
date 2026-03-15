package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol508")]
   public class EGun3ShotSpread extends Weapon
   {
      
      public var emitter1:MovieClip;
      
      public var emitter2:MovieClip;
      
      public var emitter3:MovieClip;
      
      public function EGun3ShotSpread()
      {
         super();
         intFireRate = 60;
      }
      
      override public function PartCallTrigger() : void
      {
         var _loc1_:Point = new Point(this.emitter1.x,this.emitter1.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation - 30,8,2);
         _loc1_ = new Point(this.emitter2.x,this.emitter2.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,8,2);
         _loc1_ = new Point(this.emitter3.x,this.emitter3.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation + 30,8,2);
      }
   }
}

