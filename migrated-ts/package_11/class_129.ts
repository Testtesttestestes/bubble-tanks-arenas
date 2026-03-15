// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_11

export class class_129 extends class_68{
      
      constructor(){
         super();
      }
      
      public BulletCallCollisionDetected(param1: MovieClip, param2: boolean): void
      {
         objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
         if(objAvatar.blnShieled == false)
         {
            objWorld.objAvatarInterface.AvatarSticky();
            objAvatar.EffectMeCrazy("sticky");
         }
      }
   }
