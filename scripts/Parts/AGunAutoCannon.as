package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2069")]
   public class AGunAutoCannon extends Weapon
   {
      
      public var var_210:class_113;
      
      public var var_18:MovieClip;
      
      public function AGunAutoCannon()
      {
         super();
         intFireRate = 18;
         intCounter = -1;
      }
      
      public function AimAutoWeapon() : void
      {
         if(this.var_210 == null)
         {
            return;
         }
         var _loc1_:Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var _loc2_:class_6 = new class_6();
         _loc2_.x = this.var_210.x - _loc1_.x;
         _loc2_.y = this.var_210.y - _loc1_.y;
         var _loc3_:int = Math.round(_loc2_.method_41() / 10);
         var _loc4_:Point = this.var_210.PredictTargetLocation(_loc3_);
         if(_loc4_ == null)
         {
            this.var_210 = null;
            return;
         }
         _loc2_.x = _loc4_.x - _loc1_.x;
         _loc2_.y = _loc4_.y - _loc1_.y;
         this.rotation = _loc2_.method_90() - var_3.rotation;
      }
      
      override public function PartCallAvatarRun() : void
      {
         AvatarShootTimer();
         this.AimAutoWeapon();
         if(intCounter == -1)
         {
            this.FireAutoWeapon();
         }
      }
      
      override public function AvatarAim() : void
      {
      }
      
      override public function PartCallTrigger() : void
      {
      }
      
      public function FireAutoWeapon() : void
      {
         var _loc1_:Point = null;
         if(this.var_210 != null)
         {
            _loc1_ = new Point(this.var_18.x,this.var_18.y);
            _loc1_ = this.localToGlobal(_loc1_);
            _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
            var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_130(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,10,1,false);
            intCounter = intFireRate;
         }
         this.method_766();
      }
      
      public function method_766() : void
      {
         var _loc6_:Number = NaN;
         var _loc7_:Number = NaN;
         var _loc8_:Number = NaN;
         var _loc1_:Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var _loc2_:Array = var_3.objData.objWorld.currentBFTarget.arrEnemies;
         var _loc3_:Number = 999999999999;
         var _loc4_:Number = -1;
         var _loc5_:uint = 0;
         while(_loc5_ < _loc2_.length)
         {
            _loc6_ = _loc2_[_loc5_].x - _loc1_.x;
            _loc7_ = _loc2_[_loc5_].y - _loc1_.y;
            _loc8_ = _loc6_ * _loc6_ + _loc7_ * _loc7_;
            if(_loc8_ <= _loc3_)
            {
               _loc3_ = _loc8_;
               _loc4_ = _loc5_;
            }
            _loc5_++;
         }
         if(_loc4_ != -1)
         {
            this.var_210 = _loc2_[_loc4_];
         }
         else
         {
            this.var_210 = null;
         }
         _loc2_ = null;
      }
   }
}

