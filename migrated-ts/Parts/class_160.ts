// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class class_160 extends Weapon{
      
      public emitter1: MovieClip;
      public inside: MovieClip;
      public blnSeekerCarrier: boolean;
      constructor(){
         super();
         this.blnSeekerCarrier = true;
         var_137 = false;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = new Point(this.emitter1.x,this.emitter1.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x - 22,_loc1_.y,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x + 22,_loc1_.y,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x,_loc1_.y - 22,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x,_loc1_.y + 22,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x - 9,_loc1_.y,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_126(),_loc1_.x + 9,_loc1_.y,1,this.rotation + var_3.rotation,5,2,true,null,var_3.objData.objWorld.myAvatar);
      }
      
      public Run(): void
      {
      }
      
      public Setup(param1: class_113): void
      {
         var_3 = param1;
         PartCallAcquireTarget();
      }
   }
