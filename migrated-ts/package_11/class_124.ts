// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_11

export class class_124 extends class_68{
      
      public blnHitAvatar: boolean;
      public myMaster: EnemyAI = null as any;
      public var_261: number;
      public var_474: number;
      public var_266: class_159;
      constructor(param1: class_159){
    super(); // AUTO-INJECTED
         addFrameScript(2,this.frame3,3,this.frame4);
         super();
         blnRotateTowardTarget = true;
         this.var_261 = 1;
         this.stop();
         this.gotoAndStop(3);
         this.blnHitAvatar = false;
         this.var_266 = param1;
         blnDestroyable = true;
      }
      
      public RotateTowardTarget(): number
      {
         if(var_34 == null)
         {
            return 0;
         }
         this;
         return 0;
      }
      
      public method_711(): number
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
         let _loc1_: Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         let _loc2_: Point = new Point(this.var_266.x,this.var_266.y);
         _loc2_ = this.var_266.parent.localToGlobal(_loc2_);
         let _loc3_: class_6 = new class_6();
         _loc3_.x = _loc2_.x - _loc1_.x;
         _loc3_.y = _loc2_.y - _loc1_.y;
         if(_loc3_.method_41() < 5)
         {
            this.blnHitAvatar = true;
         }
         let _loc4_: number = Math.atan2(_loc3_.y,_loc3_.x);
         let _loc5_: number = 360 * _loc4_ / (2 * Math.PI);
         this.cacheAsBitmap = false;
         this.rotation = _loc5_;
         this.cacheAsBitmap = true;
         return _loc5_;
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
      
      public BulletCallCollisionDetected(param1: MovieClip, param2: boolean): void
      {
         objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
      }
      
      public frame3(): any
      {
         this.stop();
      }
      
      private method_722(): void
      {
         if(this.var_261 == 1)
         {
            var_34 = this.myMaster;
            this.var_261 = 2;
            this.gotoAndStop(2);
            this.blnHitAvatar = false;
            return;
         }
         if(this.var_261 == 2)
         {
            var_34 = objAvatar;
            this.var_261 = 1;
            this.gotoAndStop(3);
            this.blnHitAvatar = false;
            return;
         }
      }
      
      public TestForCollision(): boolean
      {
         let _loc2_: number = 0;
         let _loc3_: Point = null;
         if(this.myMaster == null)
         {
            this.myMaster = method_354("this.myMaster");
            this.var_474 = this.myMaster.intTankLife;
         }
         if(!objBFRef.contains(this.myMaster))
         {
            this.BulletCallCollisionDetected(objBFRef.arrBullets[_loc2_],blnEnemy);
            return true;
         }
         let _loc1_: Point = new Point(this.x,this.y);
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
      
      public frame4(): any
      {
         this.stop();
      }
   }
