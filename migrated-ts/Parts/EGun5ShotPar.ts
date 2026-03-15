// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class EGun5ShotPar extends Weapon{
      
      public emitter1: MovieClip;
      public emitter2: MovieClip;
      public emitter3: MovieClip;
      public emitter5: MovieClip;
      public emitter4: MovieClip;
      constructor(){
         super();
         intFireRate = 60;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = new Point(this.emitter1.x,this.emitter1.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,8,1,true);
         _loc1_ = new Point(this.emitter2.x,this.emitter2.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,8,1,true);
         _loc1_ = new Point(this.emitter3.x,this.emitter3.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,8,1,true);
         _loc1_ = new Point(this.emitter4.x,this.emitter4.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,8,1,true);
         _loc1_ = new Point(this.emitter5.x,this.emitter5.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,8,1,true);
      }
   }
