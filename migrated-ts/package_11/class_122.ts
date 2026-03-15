// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_11

export class class_122 extends class_68{
      
      constructor(){
    super(); // AUTO-INJECTED
         addFrameScript(15,this.frame16);
         super();
         blnEnemyMine = true;
         blnBulletWipe = false;
      }
      
      public frame16(): any
      {
         this.gotoAndPlay(2);
      }
      
      public MoveBullet(): boolean
      {
         if(blnBulletWipe == true)
         {
            this.BulletCallCollisionDetected(null,false);
            return true;
         }
         if(TestForCollision() == true)
         {
            return true;
         }
         return false;
      }
      
      public BulletCallCollisionDetected(param1: MovieClip, param2: boolean): void
      {
         objBFRef.AddEffectToQueue(new class_83(),this.x,this.y,"BottomEffectsLayer",false);
      }
   }
