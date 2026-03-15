package package_11
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2047")]
   public class class_120 extends class_68
   {
      
      public function class_120()
      {
         super();
      }
      
      override public function BulletCallCollisionDetected(param1:MovieClip, param2:Boolean) : void
      {
         objBFRef.AddEffectToQueue(new class_103(),this.x,this.y,"TopEffectsLayer",true);
         objBFRef.SpawnLifeBubbles(this.x,this.y,1,1,true);
      }
   }
}

