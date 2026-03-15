package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   import package_11.class_126;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol498")]
   public class class_160 extends Weapon
   {
      
      public var emitter1:MovieClip;
      
      public var inside:MovieClip;
      
      public var blnSeekerCarrier:Boolean;
      
      public function class_160()
      {
         super();
         this.blnSeekerCarrier = true;
         var_137 = false;
      }
      
      override public function PartCallTrigger() : void
      {
         var _loc1_:Point = new Point(this.emitter1.x,this.emitter1.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x - 22,_loc1_.y,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x + 22,_loc1_.y,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x,_loc1_.y - 22,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x,_loc1_.y + 22,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x - 9,_loc1_.y,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x + 9,_loc1_.y,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
      }
      
      override public function Run() : void
      {
      }
      
      override public function Setup(param1:class_113) : void
      {
         var_3 = param1;
         PartCallAcquireTarget();
      }
   }
}

