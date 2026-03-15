package package_11
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2037")]
   public class class_128 extends class_68
   {
      
      public function class_128()
      {
         super();
      }
      
      override public function BulletCallCollisionDetected(param1:MovieClip, param2:Boolean) : void
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
}

