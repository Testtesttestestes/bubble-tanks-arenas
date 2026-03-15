// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class class_147 extends Weapon{
      
      public var_18: MovieClip;
      constructor(){
         super();
         intFireRate = 120;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = new Point(0,0);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_127(),_loc1_.x,_loc1_.y,1.7,this.rotation + var_3.rotation,8,35,false);
      }
   }
