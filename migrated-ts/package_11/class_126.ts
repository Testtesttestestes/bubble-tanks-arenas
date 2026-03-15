// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_11

export class class_126 extends class_68{
      
      public var_420: boolean;
      constructor(){
    super(); // AUTO-INJECTED
         addFrameScript(0,this.frame1);
         super();
         blnRotateTowardTarget = true;
         this.var_420 = false;
         blnDestroyable = true;
         blnSeeker = true;
      }
      
      public MoveBullet(): boolean
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
      
      public BulletCallCollisionDetected(param1: MovieClip, param2: boolean): void
      {
         objBFRef.AddEffectToQueue(new seeker_explosion(),this.x,this.y,"TopEffectsLayer",true);
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
      
      public TestForCollision(): boolean
      {
         let _loc3_: Point = null;
         let _loc1_: Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         let _loc2_: number = 0;
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
      
      public frame1(): any
      {
         this.stop();
      }
   }
