package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   import package_11.class_118;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol534")]
   public class AGunAreaBurstCannon extends Weapon
   {
      
      public var var_18:MovieClip;
      
      public function AGunAreaBurstCannon()
      {
         super();
         intFireRate = 180;
      }
      
      override public function PartCallTrigger() : void
      {
         var _loc1_:Point = new Point(this.var_18.x,this.var_18.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_118(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,12,20,false,{"blnExplode":1});
         intCounter = intFireRate;
      }
   }
}

