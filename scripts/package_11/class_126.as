package package_11
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2043")]
   public class class_126 extends class_68
   {
      
      internal var var_420:Boolean;
      
      public function class_126()
      {
         addFrameScript(0,this.frame1);
         super();
         blnRotateTowardTarget = true;
         this.var_420 = false;
         blnDestroyable = true;
         blnSeeker = true;
      }
      
      override public function MoveBullet() : Boolean
      {
         if(blnBulletWipe == true)
         {
            this.BulletCallCollisionDetected(null,false);
            return true;
         }
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
               method_14(this.RotateTowardTarget());
            }
            if(this.TestForCollision() == true)
            {
               var_31 = false;
               return true;
            }
            this.x += moveX;
            this.y += moveY;
         }
         return false;
      }
      
      override public function BulletCallCollisionDetected(param1:MovieClip, param2:Boolean) : void
      {
         objBFRef.AddEffectToQueue(new seeker_explosion(),this.x,this.y,"TopEffectsLayer",true);
      }
      
      override public function RotateTowardTarget() : Number
      {
         if(var_34 == null)
         {
            return 0;
         }
         this;
         return 0;
      }
      
      override public function TestForCollision() : Boolean
      {
         var _loc3_:Point = null;
         var _loc1_:Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         var _loc2_:uint = 0;
         while(_loc2_ < objBFRef.arrBullets.length)
         {
            if(objBFRef.arrBullets[_loc2_].blnEnemy == false)
            {
               _loc3_ = new Point(this.x,this.y);
               _loc3_ = this.parent.localToGlobal(_loc3_);
               if(objBFRef.arrBullets[_loc2_].hitTestPoint(_loc3_.x,_loc3_.y,true) == true || objBFRef.arrBullets[_loc2_].hitTestPoint(_loc3_.x - moveX / 2,_loc3_.y - moveY / 2,true) == true || objBFRef.arrBullets[_loc2_].hitTestPoint(_loc3_.x + moveX / 2,_loc3_.y + moveY / 2,true) == true)
               {
                  this.BulletCallCollisionDetected(objBFRef.arrBullets[_loc2_],blnEnemy);
                  return true;
               }
            }
            _loc2_++;
         }
         if(this.var_420 || objAvatar.hitTestPoint(_loc1_.x,_loc1_.y,true) == true || objAvatar.hitTestPoint(_loc1_.x - moveX / 2,_loc1_.y - moveY / 2,true) == true)
         {
            this.BulletCallCollisionDetected(objAvatar,blnEnemy);
            objAvatar.Damage(var_168);
            return true;
         }
         return false;
      }
      
      internal function frame1() : *
      {
         stop();
      }
   }
}

