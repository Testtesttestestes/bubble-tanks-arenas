// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class AGunAutoCannon extends Weapon{
      
      public var_210: class_113;
      public var_18: MovieClip;
      constructor(){
         super();
         intFireRate = 18;
         intCounter = -1;
      }
      
      public AimAutoWeapon(): void
      {
         if(this.var_210 == null)
         {
            return;
         }
         let _loc1_: Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         let _loc2_: class_6 = new class_6();
         _loc2_.x = this.var_210.x - _loc1_.x;
         _loc2_.y = this.var_210.y - _loc1_.y;
         let _loc3_: number = Math.round(_loc2_.method_41() / 10);
         let _loc4_: Point = this.var_210.PredictTargetLocation(_loc3_);
         if(_loc4_ == null)
         {
            this.var_210 = null;
            return;
         }
         _loc2_.x = _loc4_.x - _loc1_.x;
         _loc2_.y = _loc4_.y - _loc1_.y;
         this.rotation = _loc2_.method_90() - var_3.rotation;
      }
      
      public PartCallAvatarRun(): void
      {
         AvatarShootTimer();
         this.AimAutoWeapon();
         if(intCounter == -1)
         {
            this.FireAutoWeapon();
         }
      }
      
      public AvatarAim(): void
      {
      }
      
      public PartCallTrigger(): void
      {
      }
      
      public FireAutoWeapon(): void
      {
         let _loc1_: Point = null;
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
      
      public method_766(): void
      {
         let _loc6_: number = NaN;
         let _loc7_: number = NaN;
         let _loc8_: number = NaN;
         let _loc1_: Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         let _loc2_: any[] = var_3.objData.objWorld.currentBFTarget.arrEnemies;
         let _loc3_: number = 999999999999;
         let _loc4_: number = -1;
         let _loc5_: number = 0;
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
