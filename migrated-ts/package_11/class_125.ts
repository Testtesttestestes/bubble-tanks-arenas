// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_11

export class class_125 extends class_68{
      
      constructor(){
         super();
         blnRotateTowardTarget = true;
      }
      
      public method_623(): boolean
      {
         let _loc4_: Point = null;
         let _loc5_: Point = null;
         if(objBFRef.arrEnemies.length == 0)
         {
            return false;
         }
         let _loc1_: number = 100000;
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         while(_loc3_ < objBFRef.arrEnemies.length)
         {
            _loc4_ = new Point(this.x,this.y);
            _loc4_ = this.parent.localToGlobal(_loc4_);
            _loc5_ = new Point(objBFRef.arrEnemies.x,objBFRef.arrEnemies.y);
            _loc5_ = this.parent.localToGlobal(_loc5_);
            _loc4_ = new Point(_loc4_.x - _loc5_.x,_loc4_.y - _loc5_.y);
            if(_loc4_.length < _loc1_)
            {
               _loc2_ = _loc3_;
               _loc1_ = _loc4_.length;
            }
            _loc3_ += 1;
         }
         var_34 = objBFRef.arrEnemies[_loc2_];
         return true;
      }
      
      public RotateTowardTarget(): number
      {
         if(var_34 == null || !objBFRef.contains(var_34))
         {
            if(!this.method_623())
            {
               objBFRef.arrBulletRemoveQueue.push(this);
               var_31 = false;
               this.BulletCallCollisionDetected(null,true);
               return this.rotation;
            }
         }
         let _loc1_: Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         let _loc2_: Point = new Point(var_34.GetHitLocation().x,var_34.GetHitLocation().y);
         let _loc3_: class_6 = new class_6();
         _loc3_.x = _loc2_.x - _loc1_.x;
         _loc3_.y = _loc2_.y - _loc1_.y;
         let _loc4_: number = Math.atan2(_loc3_.y,_loc3_.x);
         let _loc5_: number = 360 * _loc4_ / (2 * Math.PI);
         this.cacheAsBitmap = false;
         this.rotation = _loc5_;
         this.cacheAsBitmap = true;
         return _loc5_;
      }
      
      public BulletCallCollisionDetected(param1: MovieClip, param2: boolean): void
      {
         objBFRef.AddEffectToQueue(new seeker_explosion(),this.x,this.y,"TopEffectsLayer",true);
         if(objWorld.intHitTimer == -1)
         {
            objWorld.mRef.SoundCall(new class_49());
            objWorld.intHitTimer = 4;
         }
      }
   }
