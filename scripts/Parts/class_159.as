package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   import package_11.class_124;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol495")]
   public class class_159 extends Weapon
   {
      
      public var emitter1:MovieClip;
      
      internal var var_461:class_124 = null;
      
      internal var var_477:Boolean;
      
      public function class_159()
      {
         super();
         intFireRate = 120;
         this.var_477 = true;
         var_137 = false;
      }
      
      override public function PartCallTrigger() : void
      {
         var _loc1_:Point = null;
         if(this.var_477 || this.var_461.objAvatar == null)
         {
            this.var_477 = false;
            _loc1_ = new Point(this.emitter1.x,this.emitter1.y);
            _loc1_ = this.localToGlobal(_loc1_);
            _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
            this.var_461 = new class_124(this);
            var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(this.var_461,_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,6,3,true,{"myMaster":this.parent},var_3.objData.objWorld.myAvatar);
         }
      }
   }
}

