package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   import package_11.class_121;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol525")]
   public class class_143 extends Weapon
   {
      
      internal var lvEffectLocation:class_6;
      
      public var bullet_mc:MovieClip;
      
      public var var_18:MovieClip;
      
      public function class_143()
      {
         super();
         this.lvEffectLocation = new class_6();
         intFireRate = 180;
      }
      
      public function method_514() : void
      {
         var _loc1_:Point = new Point(this.bullet_mc.x,this.bullet_mc.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         if(var_3.objData.objWorld.mRef.blnScreenShake == true)
         {
            var_3.objData.objWorld.mRef.sEffects.SHAKE(20);
         }
         var_3.objData.objWorld.mRef.sEffects.FLASH();
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_121(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,7,100,false);
      }
      
      override public function PartCallTrigger() : void
      {
         this.bullet_mc.play();
         var_3.objData.objWorld.currentBFTarget.AddEffectToQueue(new class_81(),0,0,"BottomEffectsLayer",false,this.method_514);
         intCounter = intFireRate;
      }
   }
}

