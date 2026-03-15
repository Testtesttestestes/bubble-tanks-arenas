// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class AGunConversion extends Weapon{
      
      public var_18: MovieClip;
      constructor(){
         super();
         intFireRate = 160;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = new Point(this.var_18.x,this.var_18.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.AddEffectToQueue(new effect_convert(),_loc1_.x,_loc1_.y,"BottomEffectsLayer",false);
         var_3.objData.objWorld.currentBFTarget.DroneConversionTest(_loc1_.x,_loc1_.y,false);
      }
   }
