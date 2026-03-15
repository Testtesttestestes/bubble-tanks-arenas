// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class class_148 extends Weapon{
      
      public var_18: MovieClip;
      constructor(){
         super();
         intFireRate = 150;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = new Point(0,0);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         let _loc2_: number = 0;
         while(_loc2_ < 360)
         {
            var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_128(),_loc1_.x,_loc1_.y,0.9,this.rotation + var_3.rotation + _loc2_,6,0,false,{"blnSticky":1});
            _loc2_ += 360 / 36;
         }
      }
   }
