package package_11
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2061")]
   public class class_125 extends class_68
   {
      
      public function class_125()
      {
         super();
         blnRotateTowardTarget = true;
      }
      
      public function method_623() : Boolean
      {
         var _loc4_:Point = null;
         var _loc5_:Point = null;
         if(objBFRef.arrEnemies.length == 0)
         {
            return false;
         }
         var _loc1_:Number = 100000;
         var _loc2_:Number = 0;
         var _loc3_:uint = 0;
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
      
      override public function RotateTowardTarget() : Number
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
         var _loc1_:Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         var _loc2_:Point = new Point(var_34.GetHitLocation().x,var_34.GetHitLocation().y);
         var _loc3_:class_6 = new class_6();
         _loc3_.x = _loc2_.x - _loc1_.x;
         _loc3_.y = _loc2_.y - _loc1_.y;
         var _loc4_:Number = Math.atan2(_loc3_.y,_loc3_.x);
         var _loc5_:Number = 360 * _loc4_ / (2 * Math.PI);
         this.cacheAsBitmap = false;
         this.rotation = _loc5_;
         this.cacheAsBitmap = true;
         return _loc5_;
      }
      
      override public function BulletCallCollisionDetected(param1:MovieClip, param2:Boolean) : void
      {
         objBFRef.AddEffectToQueue(new seeker_explosion(),this.x,this.y,"TopEffectsLayer",true);
         if(objWorld.intHitTimer == -1)
         {
            objWorld.mRef.SoundCall(new class_49());
            objWorld.intHitTimer = 4;
         }
      }
   }
}

