package package_11
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2031")]
   public class class_118 extends class_68
   {
      
      public function class_118()
      {
         super();
         var_188 = 30;
      }
      
      override public function MoveBullet() : Boolean
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
      
      override public function BulletCallCollisionDetected(param1:MovieClip, param2:Boolean) : void
      {
         objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
         if(method_193("blnExplode") == 1)
         {
            objBFRef.AddEffectToQueue(new class_101(),this.x,this.y,"BottomEffectsLayer",false);
         }
         objBFRef.AreaDamageTest("r",param1,this,125,var_188);
      }
   }
}

