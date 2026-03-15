// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

export class AnimatorFactory3D extends AnimatorFactoryBase{
      
      constructor(param1: MotionBase){
         super(param1);
         this._is3D = true;
      }
      
      protected getNewAnimator(): AnimatorBase
      {
         return new Animator3D(null,null);
      }
   }
