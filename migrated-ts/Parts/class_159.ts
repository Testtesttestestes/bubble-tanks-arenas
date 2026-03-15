// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class class_159 extends Weapon{
      
      public emitter1: MovieClip;
      public var_461: class_124 = null as any;
      public var_477: boolean;
      constructor(){
         super();
         intFireRate = 120;
         this.var_477 = true;
         var_137 = false;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = null;
         if(this.var_477 || this.var_461.objAvatar == null)
         {
            this.var_477 = false;
            _loc1_ = new Point(this.emitter1.x,this.emitter1.y);
            _loc1_ = this.localToGlobal(_loc1_);
            _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
            this.var_461 = new class_124(this);
            var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(this.var_461,_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,6,3,true,{"myMaster":this.parent},var_3.objData.objWorld.myAvatar);
         }
      }
   }
