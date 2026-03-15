// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class class_161 extends Weapon{
      
      public emitter1: MovieClip;
      constructor(){
         super();
         intFireRate = 80;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = new Point(this.emitter1.x,this.emitter1.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_129(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,6,0,true,{"blnSticky":1});
      }
   }
