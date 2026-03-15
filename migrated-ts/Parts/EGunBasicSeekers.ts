// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class EGunBasicSeekers extends Weapon{
      
      public emitter1: MovieClip;
      constructor(){
         super();
         intFireRate = 120;
         var_137 = false;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = new Point(this.emitter1.x,this.emitter1.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
      }
   }
