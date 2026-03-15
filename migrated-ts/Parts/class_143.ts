// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class class_143 extends Weapon{
      
      public lvEffectLocation: class_6;
      public bullet_mc: MovieClip;
      public var_18: MovieClip;
      constructor(){
         super();
         this.lvEffectLocation = new class_6();
         intFireRate = 180;
      }
      
      public method_514(): void
      {
         let _loc1_: Point = new Point(this.bullet_mc.x,this.bullet_mc.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         if(var_3.objData.objWorld.mRef.blnScreenShake == true)
         {
            var_3.objData.objWorld.mRef.sEffects.SHAKE(20);
         }
         var_3.objData.objWorld.mRef.sEffects.FLASH();
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_121(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,7,100,false);
      }
      
      public PartCallTrigger(): void
      {
         this.bullet_mc.play();
         var_3.objData.objWorld.currentBFTarget.AddEffectToQueue(new class_81(),0,0,"BottomEffectsLayer",false,this.method_514);
         intCounter = intFireRate;
      }
   }
