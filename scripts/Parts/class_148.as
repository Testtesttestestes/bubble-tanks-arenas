package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   import package_11.class_128;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2040")]
   public class class_148 extends Weapon
   {
      
      public var var_18:MovieClip;
      
      public function class_148()
      {
         super();
         intFireRate = 150;
      }
      
      override public function PartCallTrigger() : void
      {
         var _loc1_:Point = new Point(0,0);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var _loc2_:uint = 0;
         while(_loc2_ < 360)
         {
            var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_128(),_loc1_.x,_loc1_.y,0.9,this.rotation + var_3.rotation + _loc2_,6,0,false,{"blnSticky":1});
            _loc2_ += 360 / 36;
         }
      }
   }
}

