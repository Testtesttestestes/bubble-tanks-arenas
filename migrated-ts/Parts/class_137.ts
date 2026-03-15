// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class class_137 extends Weapon{
      
      public emitter1: MovieClip;
      constructor(){
         super();
         intFireRate = 120;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = new Point(this.emitter1.x,this.emitter1.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.AddEffectToQueue(new class_91(),_loc1_.x,_loc1_.y,"BottomEffectsLayer",false);
         var_3.objData.objWorld.currentBFTarget.AreaBurstTest(_loc1_.x,_loc1_.y,290 / 2,25);
         var_3.objData.objWorld.currentBFTarget.DeleteEnemiesInArrEnemyDeleteQueue();
      }
   }
