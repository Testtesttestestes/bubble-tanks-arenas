// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class class_139 extends Weapon{
      
      public emitter1: MovieClip;
      public emitter2: MovieClip;
      constructor(){
         super();
         intFireRate = 11;
         intCounter = -1;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = null;
         if(intCounter == -1)
         {
            _loc1_ = new Point(this.emitter1.x,this.emitter1.y);
            _loc1_ = this.localToGlobal(_loc1_);
            _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
            var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_130(),_loc1_.x,_loc1_.y,1.25,this.rotation + var_3.rotation,10,2,false);
            _loc1_ = new Point(this.emitter2.x,this.emitter2.y);
            _loc1_ = this.localToGlobal(_loc1_);
            _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
            var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_130(),_loc1_.x,_loc1_.y,1.25,this.rotation + var_3.rotation,10,2,false);
            intCounter = intFireRate;
         }
      }
   }
