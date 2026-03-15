package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   import package_11.class_123;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol521")]
   public class class_144 extends Weapon
   {
      
      public var var_18:MovieClip;
      
      public function class_144()
      {
         super();
         intFireRate = 40;
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
            var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_123(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,14,15,false);
            intCounter = intFireRate;
         }
      }
   }
}

