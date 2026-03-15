// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class EGun350Spread extends Weapon{
      
      public emitter1: MovieClip;
      public emitter2: MovieClip;
      public emitter3: MovieClip;
      public emitter5: MovieClip;
      public emitter7: MovieClip;
      public emitter8: MovieClip;
      public emitter9: MovieClip;
      public emitter10: MovieClip;
      public emitter6: MovieClip;
      public emitter4: MovieClip;
      constructor(){
         super();
         intFireRate = 100;
         var_137 = false;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = new Point(this.emitter9.x,this.emitter9.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation - 144,7,2);
         _loc1_ = new Point(this.emitter10.x,this.emitter10.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation - 108,7,2);
         _loc1_ = new Point(this.emitter1.x,this.emitter1.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation - 72,7,2);
         _loc1_ = new Point(this.emitter2.x,this.emitter2.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation - 36,7,2);
         _loc1_ = new Point(this.emitter3.x,this.emitter3.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,7,2);
         _loc1_ = new Point(this.emitter4.x,this.emitter4.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation + 36,7,2);
         _loc1_ = new Point(this.emitter5.x,this.emitter5.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation + 72,7,2);
         _loc1_ = new Point(this.emitter6.x,this.emitter6.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation + 108,7,2);
         _loc1_ = new Point(this.emitter7.x,this.emitter7.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation + 144,7,2);
         _loc1_ = new Point(this.emitter8.x,this.emitter8.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation + 180,7,2);
      }
   }
