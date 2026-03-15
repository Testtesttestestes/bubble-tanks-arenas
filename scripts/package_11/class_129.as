package package_11
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2028")]
   public class class_129 extends class_68
   {
      
      public function class_129()
      {
         super();
      }
      
      override public function BulletCallCollisionDetected(param1:MovieClip, param2:Boolean) : void
      {
         objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
         if(objAvatar.blnShieled == false)
         {
            objWorld.objAvatarInterface.AvatarSticky();
            objAvatar.EffectMeCrazy("sticky");
         }
      }
   }
}

