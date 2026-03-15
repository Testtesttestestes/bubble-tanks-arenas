// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_11

export class class_123 extends class_68{
      
      constructor(){
         super();
         var_188 = 100;
      }
      
      public MoveBullet(): boolean
      {
         if(var_31 == true)
         {
            if(method_35() == true)
            {
               objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
               var_31 = false;
               return true;
            }
            if(blnRotateTowardTarget == true)
            {
               method_14(RotateTowardTarget());
            }
            else
            {
               method_14(this.rotation);
            }
            if(this.TestForCollision() == true)
            {
            }
            this.x += moveX;
            this.y += moveY;
         }
         return false;
      }
      
      public BulletCallCollisionDetected(param1: MovieClip, param2: boolean): void
      {
         objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
         if(method_193("blnExplode") == 1)
         {
            objBFRef.AddEffectToQueue(new class_72(),this.x,this.y,"BottomEffectsLayer",false);
         }
         objBFRef.AreaDamageTest("r",param1,this,75,var_188);
         if(objWorld.intHitTimer == -1)
         {
            objWorld.mRef.SoundCall(new class_49());
            objWorld.intHitTimer = 4;
         }
      }
      
      public TestForCollision(): boolean
      {
         0;
         if(objBFRef == null)
         {
            return false;
         }
         if(objBFRef.arrEnemies == null)
         {
            return false;
         }
         if(objBFRef.arrEnemies.length <= 0)
         {
            return false;
         }
         this;
         return false;
      }
   }
