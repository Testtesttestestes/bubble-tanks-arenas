package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol533")]
   public class AGunBasicCannon extends Weapon
   {
      
      public var var_18:MovieClip;
      
      public function AGunBasicCannon()
      {
         super();
         intFireRate = 18;
         intCounter = -1;
      }
      
      override public function PartCallTrigger() : void
      {
         var _loc1_:Point = null;
         if(intCounter == -1)
         {
            _loc1_ = new Point(this.var_18.x,this.var_18.y);
            _loc1_ = this.localToGlobal(_loc1_);
            _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
            var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_130(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,10,1,false);
            intCounter = intFireRate;
         }
      }
   }
}

