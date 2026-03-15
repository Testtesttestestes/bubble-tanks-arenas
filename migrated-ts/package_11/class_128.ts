// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_11

export class class_128 extends class_68{
      
      constructor(){
         super();
      }
      
      public BulletCallCollisionDetected(param1: MovieClip, param2: boolean): void
      {
         objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
         param1.GetStuck();
         param1.EffectMeCrazy("sticky");
         if(objWorld.intHitTimer == -1)
         {
            objWorld.mRef.SoundCall(new class_49());
            objWorld.intHitTimer = 4;
         }
      }
   }
