// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class class_138 extends Weapon{
      
      public var_18: MovieClip;
      constructor(){
         super();
         intFireRate = 40;
         intCounter = -1;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = null;
         if(intCounter == -1)
         {
            _loc1_ = new Point(this.var_18.x,this.var_18.y);
            _loc1_ = this.localToGlobal(_loc1_);
            _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
            var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_119(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,10,1,false);
            intCounter = intFireRate;
         }
      }
   }
