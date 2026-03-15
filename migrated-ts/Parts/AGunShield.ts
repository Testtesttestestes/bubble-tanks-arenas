// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class AGunShield extends Weapon{
      
      public var_290: class_107;
      public var_293: number = -1;
      constructor(){
         super();
         intFireRate = 60;
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = new Point(this.x,this.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         if(this.var_293 == -1)
         {
            this.var_293 = var_3.objData.GetLargestRadiusFromRegistration();
            this.var_293 *= 2;
            var_3.movShieldHit = new class_106();
            var_3.addChild(var_3.movShieldHit);
            var_3.movShieldHit.width = var_3.movShieldHit.height = this.var_293;
            var_3.movShieldHit.gotoAndStop(var_3.movShieldHit.totalFrames);
         }
         this.var_290 = new class_107();
         this.var_290.width = this.var_290.height = this.var_293;
         var_3.addChild(this.var_290);
         var_3.blnShieled = true;
         var_3.objData.objWorld.currentBFTarget.AddEffectToQueue(new class_105(),0,0,"TopEffectsLayer",false,this.KillShield);
         intCounter = intFireRate;
      }
      
      public KillShield(): any
      {
         var_3.removeChild(this.var_290);
         this.var_290 = null;
         var_3.blnShieled = false;
      }
   }
