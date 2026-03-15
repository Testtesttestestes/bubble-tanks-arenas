package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   import package_11.class_120;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol527")]
   public class class_141 extends Weapon
   {
      
      public var emitter3:MovieClip;
      
      public var var_18:MovieClip;
      
      public function class_141()
      {
         super();
         intFireRate = 10;
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
            var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_120(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,10,2,false);
            intCounter = intFireRate;
         }
      }
   }
}

