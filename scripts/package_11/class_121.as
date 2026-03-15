package package_11
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2029")]
   public class class_121 extends class_68
   {
      
      internal var var_324:Vector.<MovieClip>;
      
      public function class_121()
      {
         super();
         var_188 = 30;
         this.var_324 = new Vector.<MovieClip>();
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
            if(this.TestForCollision() == true)
            {
            }
            this.x += moveX;
            this.y += moveY;
         }
         return false;
      }
      
      override public function TestForCollision() : Boolean
      {
         0;
         0;
         0;
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
      
      override public function BulletCallCollisionDetected(param1:MovieClip, param2:Boolean) : void
      {
         objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
         objBFRef.AddEffectToQueue(new class_72(),this.x,this.y,"BottomEffectsLayer",false);
         objBFRef.AreaDamageTest("r",param1,this,75,var_188);
      }
   }
}

