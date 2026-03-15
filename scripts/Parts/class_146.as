package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   import package_11.class_125;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2059")]
   public class class_146 extends Weapon
   {
      
      public var emitter1:MovieClip;
      
      public function class_146()
      {
         super();
         intFireRate = 90;
      }
      
      override public function PartCallTrigger() : void
      {
         var _loc1_:Point = new Point(this.emitter1.x,this.emitter1.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_125(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,6,10,false,null,null);
         intCounter = intFireRate;
      }
   }
}

