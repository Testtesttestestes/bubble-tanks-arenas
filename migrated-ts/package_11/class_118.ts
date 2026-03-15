// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_11

export class class_118 extends class_68{
      
      constructor(){
         super();
         var_188 = 30;
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
            if(TestForCollision() == true)
            {
               var_31 = false;
               return true;
            }
            this.x += moveX;
            this.y += moveY;
            return false;
         }
         return true;
      }
      
      public BulletCallCollisionDetected(param1: MovieClip, param2: boolean): void
      {
         objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
         if(method_193("blnExplode") == 1)
         {
            objBFRef.AddEffectToQueue(new class_101(),this.x,this.y,"BottomEffectsLayer",false);
         }
         objBFRef.AreaDamageTest("r",param1,this,125,var_188);
      }
   }
