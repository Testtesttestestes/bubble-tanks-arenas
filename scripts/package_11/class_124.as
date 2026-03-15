package package_11
{
   import Parts.class_159;
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2065")]
   public class class_124 extends class_68
   {
      
      internal var blnHitAvatar:Boolean;
      
      internal var myMaster:EnemyAI = null;
      
      internal var var_261:Number;
      
      internal var var_474:Number;
      
      internal var var_266:class_159;
      
      public function class_124(param1:class_159)
      {
         addFrameScript(2,this.frame3,3,this.frame4);
         super();
         blnRotateTowardTarget = true;
         this.var_261 = 1;
         stop();
         gotoAndStop(3);
         this.blnHitAvatar = false;
         this.var_266 = param1;
         blnDestroyable = true;
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
      
      public function method_711() : Number
      {
         if(var_34 == null)
         {
            return 0;
         }
         if(this.var_266 == null)
         {
            return 0;
         }
         if(this.var_266.parent == null)
         {
            return 0;
         }
         var _loc1_:Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         var _loc2_:Point = new Point(this.var_266.x,this.var_266.y);
         _loc2_ = this.var_266.parent.localToGlobal(_loc2_);
         var _loc3_:class_6 = new class_6();
         _loc3_.x = _loc2_.x - _loc1_.x;
         _loc3_.y = _loc2_.y - _loc1_.y;
         if(_loc3_.method_41() < 5)
         {
            this.blnHitAvatar = true;
         }
         var _loc4_:Number = Math.atan2(_loc3_.y,_loc3_.x);
         var _loc5_:Number = 360 * _loc4_ / (2 * Math.PI);
         this.cacheAsBitmap = false;
         this.rotation = _loc5_;
         this.cacheAsBitmap = true;
         return _loc5_;
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
               if(this.var_261 == 1)
               {
                  method_14(this.RotateTowardTarget());
               }
               else if(this.var_261 == 2)
               {
                  method_14(this.method_711());
               }
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
         objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
      }
      
      internal function frame3() : *
      {
         stop();
      }
      
      private function method_722() : void
      {
         if(this.var_261 == 1)
         {
            var_34 = this.myMaster;
            this.var_261 = 2;
            gotoAndStop(2);
            this.blnHitAvatar = false;
            return;
         }
         if(this.var_261 == 2)
         {
            var_34 = objAvatar;
            this.var_261 = 1;
            gotoAndStop(3);
            this.blnHitAvatar = false;
            return;
         }
      }
      
      override public function TestForCollision() : Boolean
      {
         var _loc2_:uint = 0;
         var _loc3_:Point = null;
         if(this.myMaster == null)
         {
            this.myMaster = method_354("myMaster");
            this.var_474 = this.myMaster.intTankLife;
         }
         if(!objBFRef.contains(this.myMaster))
         {
            this.BulletCallCollisionDetected(objBFRef.arrBullets[_loc2_],blnEnemy);
            return true;
         }
         var _loc1_:Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         _loc2_ = 0;
         while(_loc2_ < objBFRef.arrBullets.length)
         {
            if(objBFRef.arrBullets[_loc2_].blnEnemy == false)
            {
               _loc3_ = new Point(this.x,this.y);
               _loc3_ = this.parent.localToGlobal(_loc3_);
               if(objBFRef.arrBullets[_loc2_].hitTestPoint(_loc3_.x,_loc3_.y,true) == true || objBFRef.arrBullets[_loc2_].hitTestPoint(_loc3_.x - moveX / 2,_loc3_.y - moveY / 2,true) == true)
               {
                  this.BulletCallCollisionDetected(objBFRef.arrBullets[_loc2_],blnEnemy);
                  return true;
               }
            }
            _loc2_++;
         }
         if(this.blnHitAvatar || var_34.hitTestPoint(_loc1_.x,_loc1_.y,true) == true || var_34.hitTestPoint(_loc1_.x - moveX / 2,_loc1_.y - moveY / 2,true) == true)
         {
            if(var_34 == this.myMaster)
            {
               var_34.intTankLife += 2;
               if(var_34.intTankLife > this.var_474)
               {
                  var_34.intTankLife = this.var_474;
               }
            }
            else
            {
               this.BulletCallCollisionDetected(objAvatar,blnEnemy);
               if(objAvatar.blnShieled)
               {
                  return true;
               }
               objAvatar.Damage(var_168);
            }
            this.method_722();
         }
         return false;
      }
      
      internal function frame4() : *
      {
         stop();
      }
   }
}

