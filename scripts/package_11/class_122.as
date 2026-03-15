package package_11
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2027")]
   public class class_122 extends class_68
   {
      
      public function class_122()
      {
         addFrameScript(15,this.frame16);
         super();
         blnEnemyMine = true;
         blnBulletWipe = false;
      }
      
      internal function frame16() : *
      {
         gotoAndPlay(2);
      }
      
      override public function MoveBullet() : Boolean
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
      
      override public function BulletCallCollisionDetected(param1:MovieClip, param2:Boolean) : void
      {
         objBFRef.AddEffectToQueue(new class_83(),this.x,this.y,"BottomEffectsLayer",false);
      }
   }
}

