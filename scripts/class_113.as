package
{
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.geom.Point;
   
   public class class_113 extends MovieClip
   {
      
      private var intHitTimer:int;
      
      public var pntHitDetailLocation:Point;
      
      public var var_232:int;
      
      public var var_248:Vector.<MovieClip>;
      
      public var arrSeekerCarrierRefs:Vector.<Weapon>;
      
      public var var_410:Boolean;
      
      public var objMovementData:Object;
      
      public var intTankLife:int;
      
      public var movShieldHit:class_106;
      
      private var var_532:Boolean;
      
      public var arrPrimaryWeapons:Vector.<Weapon>;
      
      public var var_345:Boolean;
      
      public var objData:TankData;
      
      public var arrSecondaryWeapons:Vector.<Weapon>;
      
      public var blnShieled:Boolean;
      
      public var blnOkToTeleport:Boolean;
      
      private var var_306:Sprite;
      
      public var intState:int;
      
      public var funCallback:Function;
      
      public var var_349:Number;
      
      public function class_113(param1:TankData)
      {
         super();
         this.Setup(param1);
      }
      
      public function method_472() : void
      {
         if(this.var_232 > 0)
         {
            --this.var_232;
         }
         else if(this.var_232 == 0)
         {
            this.method_440();
            this.var_232 = -1;
         }
      }
      
      public function method_556() : Boolean
      {
         var _loc1_:class_6 = new class_6();
         var _loc2_:Number = this.width;
         if(this.height > this.width)
         {
            _loc2_ = this.height;
         }
         _loc1_.method_217(this.rotation);
         _loc1_.method_84(30 * this.objData.numSpeed + _loc2_);
         _loc1_.method_741(this.x,this.y);
         if(this.var_532 == true)
         {
            if(this.var_306 == null)
            {
               this.var_306 = new class_73();
               this.parent.addChild(this.var_306);
            }
            this.var_306.x = _loc1_.x;
            this.var_306.y = _loc1_.y;
         }
         if(_loc1_.method_41() > this.parent.parent["BF_BG_mc"].width / 2)
         {
            return true;
         }
         return false;
      }
      
      public function Damage(param1:int, param2:class_68 = null) : void
      {
         null;
         null;
         null;
         if(this.blnShieled == true)
         {
            if(param2 != null)
            {
               this;
               return;
            }
            return;
         }
         this.intTankLife -= param1;
         if(this.intTankLife <= 0)
         {
            this.intTankLife = 0;
            if(this.objData == null)
            {
               return;
            }
            if(this.objData.objWorld == null)
            {
               return;
            }
            if(this.objData.objWorld.currentBFTarget == null)
            {
               return;
            }
            if(this.objData.intType == 1)
            {
               this.objData.objWorld.mRef.SoundCall(new class_47());
            }
            else if(this.objData.intType == 2)
            {
               this.objData.objWorld.mRef.SoundCall(new class_47());
            }
            else if(this.objData.intType == 3)
            {
               this.objData.objWorld.currentBFTarget.SpawnLifeBubbles(this.x,this.y,this.objData.numBubblesReturned);
               this.objData.objWorld.mRef.SoundCall(new class_48());
            }
            this.Deactivate();
         }
         else if(this.objData.intType == 1)
         {
            if(this.intHitTimer == -1)
            {
               this.objData.objWorld.mRef.SoundCall(new class_45(),0.9);
               this.intHitTimer = 7;
            }
         }
      }
      
      public function StunMe(param1:Number = 0) : *
      {
         if(param1 > 0)
         {
            this.var_345 = true;
            this.var_349 = param1;
            this.intState = 2;
         }
      }
      
      private function Deactivate() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:int = this.objData.intType;
         _loc1_ = 0;
         while(_loc1_ < this.arrPrimaryWeapons.length)
         {
            this.arrPrimaryWeapons[_loc1_].Deactivate();
            _loc1_++;
         }
         this.arrPrimaryWeapons = null;
         _loc1_ = 0;
         while(_loc1_ < this.arrSecondaryWeapons.length)
         {
            this.arrSecondaryWeapons[_loc1_].Deactivate();
            _loc1_++;
         }
         this.arrSecondaryWeapons = null;
         this.objData.Deactivate();
         this.objData = null;
         this.objMovementData = null;
         this.var_306 = null;
         this.var_410 = true;
         this.funCallback(this,_loc2_);
      }
      
      public function AddLife(param1:int) : void
      {
         this.intTankLife += param1;
         if(this.intTankLife > this.objData.numLife)
         {
            this.intTankLife = this.objData.numLife;
         }
      }
      
      public function MoveWanderSetup() : void
      {
         this.objMovementData = {
            "intFramesToTurn":0,
            "intMinFramesToHoldTurning":0,
            "numAmountToTurn":0,
            "blnSafetyTurn":false,
            "numLastAngle":this.method_286()
         };
      }
      
      private function RandNum(param1:Number, param2:Number) : Number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public function AvatarLifeCorrect() : void
      {
      }
      
      public function SetCallback(param1:Function) : void
      {
         this.funCallback = param1;
      }
      
      public function SetupClosestBubbleToCenterPoint() : void
      {
         this.pntHitDetailLocation = this.objData.method_616();
      }
      
      public function RegisterPrimaryWeapon(param1:MovieClip) : void
      {
         var argClip:MovieClip = param1;
         this.arrPrimaryWeapons.push(argClip);
         argClip.Setup(this);
         try
         {
            if(argClip.blnSeekerCarrier != null)
            {
               this.arrSeekerCarrierRefs.push(argClip);
            }
         }
         catch(e:Error)
         {
         }
      }
      
      private function method_585() : void
      {
         if(this.intHitTimer > 0)
         {
            --this.intHitTimer;
         }
         else if(this.intHitTimer == 0)
         {
            this.intHitTimer = -1;
         }
      }
      
      public function method_586() : Boolean
      {
         var _loc1_:Number = this.width;
         if(this.height > this.width)
         {
            _loc1_ = this.height;
         }
         var _loc2_:class_6 = new class_6(this.x,this.y);
         var _loc3_:Number = this.parent.parent["BF_BG_mc"].width / 2 * 0.75;
         var _loc4_:Number = _loc2_.method_41 + _loc1_ / 2;
         if(_loc4_ > _loc3_)
         {
            return true;
         }
         return false;
      }
      
      public function GetHitLocation() : Point
      {
         return localToGlobal(this.pntHitDetailLocation);
      }
      
      public function method_642() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this.arrPrimaryWeapons.length)
         {
            this.arrPrimaryWeapons[_loc1_].Run();
            _loc1_++;
         }
      }
      
      private function method_637() : void
      {
         if(this.var_345 == true)
         {
            if(this.var_349 <= 0)
            {
               this.intState = 1;
               this.var_345 = false;
            }
            else
            {
               --this.var_349;
            }
         }
         else
         {
            this.intState = 1;
         }
      }
      
      public function method_286() : Number
      {
         var _loc1_:class_6 = new class_6(this.x,this.y);
         return _loc1_.method_90();
      }
      
      public function Setup(param1:TankData) : void
      {
         this.intState = 0;
         this.intHitTimer = -1;
         this.var_410 = false;
         this.objData = param1;
         this.intTankLife = this.objData.numLife;
         this.arrPrimaryWeapons = new Vector.<Weapon>();
         this.arrSecondaryWeapons = new Vector.<Weapon>();
         this.arrSeekerCarrierRefs = new Vector.<Weapon>();
         this.var_248 = new Vector.<MovieClip>();
         this.var_532 = false;
         this.blnShieled = false;
         this.var_232 = -1;
         this.blnOkToTeleport = true;
         this.var_345 = false;
         this.var_349 = 0;
      }
      
      public function CheckForTeleports() : void
      {
         var _loc1_:Weapon = null;
         var _loc2_:uint = 0;
         while(_loc2_ < this.arrSecondaryWeapons.length)
         {
            if(this.arrSecondaryWeapons[_loc2_].intObjID == 3011 && _loc2_ != 0)
            {
               _loc1_ = this.arrSecondaryWeapons[0];
               this.arrSecondaryWeapons[0] = this.arrSecondaryWeapons[_loc2_];
               this.arrSecondaryWeapons[_loc2_] = _loc1_;
            }
            if(this.arrSecondaryWeapons[_loc2_].intObjID == 3012 && _loc2_ != this.arrSecondaryWeapons.length - 1)
            {
               _loc1_ = this.arrSecondaryWeapons[this.arrSecondaryWeapons.length - 1];
               this.arrSecondaryWeapons[this.arrSecondaryWeapons.length - 1] = this.arrSecondaryWeapons[_loc2_];
               this.arrSecondaryWeapons[_loc2_] = _loc1_;
            }
            _loc2_++;
         }
      }
      
      public function EffectMeCrazy(param1:String, param2:int = 80, param3:int = 5, param4:Boolean = true) : void
      {
         var _loc6_:MovieClip = null;
         var _loc7_:int = 0;
         this.method_440();
         this.var_232 = param2;
         var _loc5_:uint = 0;
         if(this.objData.arrTankDetails.length < param3)
         {
            _loc5_ = 0;
            while(_loc5_ < this.objData.arrTankDetails.length)
            {
               if(param1 == "sticky")
               {
                  _loc6_ = new class_90();
               }
               else if(param1 == "stun")
               {
                  _loc6_ = new class_89();
               }
               _loc6_.x = this.objData.arrTankDetails[_loc5_].x;
               _loc6_.y = this.objData.arrTankDetails[_loc5_].y;
               _loc6_.rotation = this.RandNum(-180,180);
               if(param4 == true)
               {
                  _loc6_.gotoAndStop(this.RandNum(1,4));
               }
               else
               {
                  _loc6_.gotoAndPlay(this.RandNum(1,4));
               }
               addChild(_loc6_);
               this.var_248.push(_loc6_);
               _loc5_++;
            }
         }
         else
         {
            _loc5_ = 0;
            while(_loc5_ < param3)
            {
               if(param1 == "sticky")
               {
                  _loc6_ = new class_90();
               }
               else if(param1 == "stun")
               {
                  _loc6_ = new class_89();
               }
               _loc7_ = this.RandNum(0,this.objData.arrTankDetails.length - 1);
               _loc6_.x = this.objData.arrTankDetails[_loc7_].x;
               _loc6_.y = this.objData.arrTankDetails[_loc7_].y;
               _loc6_.rotation = this.RandNum(-180,180);
               if(param4 == true)
               {
                  _loc6_.gotoAndStop(this.RandNum(1,4));
               }
               else
               {
                  _loc6_.gotoAndPlay(this.RandNum(1,4));
               }
               addChild(_loc6_);
               this.var_248.push(_loc6_);
               _loc5_++;
            }
         }
      }
      
      public function method_440() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_248.length)
         {
            if(this.var_248[_loc1_].parent != null)
            {
               removeChild(this.var_248[_loc1_]);
            }
            _loc1_++;
         }
         this.var_248 = new Vector.<MovieClip>();
      }
      
      public function Run() : void
      {
         switch(this.intState)
         {
            case 1:
               this.blnOkToTeleport = true;
               this.Move();
               this.method_642();
               this.method_472();
               break;
            case 2:
               this.method_637();
               this.method_472();
         }
         this.method_585();
      }
      
      public function RegisterSecondaryWeapon(param1:MovieClip) : void
      {
         this.arrSecondaryWeapons.push(param1);
         param1.Setup(this);
      }
      
      public function Move() : void
      {
      }
      
      public function GetDataRef() : TankData
      {
         return this.objData;
      }
      
      public function method_406() : void
      {
         var _loc3_:Number = NaN;
         var _loc4_:Number = NaN;
         var _loc5_:class_6 = null;
         var _loc1_:Boolean = this.method_556();
         var _loc2_:class_6 = new class_6();
         _loc2_.method_217(this.rotation);
         _loc2_.method_84(this.objData.numSpeed);
         this.x += _loc2_.x;
         this.y += _loc2_.y;
         if(this.objMovementData.intFramesToTurn == 0 || _loc1_ == true && this.objMovementData.blnSafetyTurn == false)
         {
            if(_loc1_ == true)
            {
               _loc3_ = this.method_286();
               if(Math.abs(_loc3_) > 90)
               {
                  if(_loc3_ > 0 && this.objMovementData.numLastAngle < 0)
                  {
                     this.objMovementData.numLastAngle = 360;
                  }
                  else if(_loc3_ < 0 && this.objMovementData.numLastAngle > 0)
                  {
                     this.objMovementData.numLastAngle = -360;
                  }
               }
               if(_loc3_ < 0)
               {
                  if(_loc3_ < this.objMovementData.numLastAngle)
                  {
                     this.objMovementData.numAmountToTurn = this.RandNum(-120,-180);
                  }
                  else
                  {
                     this.objMovementData.numAmountToTurn = this.RandNum(120,180);
                  }
               }
               else if(_loc3_ > this.objMovementData.numLastAngle)
               {
                  this.objMovementData.numAmountToTurn = this.RandNum(120,180);
               }
               else
               {
                  this.objMovementData.numAmountToTurn = this.RandNum(-120,-180);
               }
               this.objMovementData.intFramesToTurn = Math.round(Math.abs(this.objMovementData.numAmountToTurn) / (this.objData.numSpeed * 1.5));
               this.objMovementData.numAmountToTurn = this.objData.numSpeed * 1.5 * (this.objMovementData.numAmountToTurn / Math.abs(this.objMovementData.numAmountToTurn));
               this.objMovementData.intMinFramesToHoldTurning = 90;
               this.objMovementData.blnSafetyTurn = true;
               this.objMovementData.numLastAngle = _loc3_;
            }
         }
         else
         {
            --this.objMovementData.intFramesToTurn;
            this.rotation += this.objMovementData.numAmountToTurn;
            this.objMovementData.numLastAngle = this.method_286();
         }
         if(this.objMovementData.intMinFramesToHoldTurning > 0)
         {
            --this.objMovementData.intMinFramesToHoldTurning;
         }
         else if(this.objMovementData.intFramesToTurn == 0)
         {
            if(this.RandNum(0,1000) < 20)
            {
               _loc4_ = 0;
               if(this.method_586() == true)
               {
                  _loc5_ = new class_6(this.x * -1,this.y * -1);
                  _loc4_ = this.RandNum(-30,30) + _loc5_.method_90() - this.rotation;
               }
               else
               {
                  _loc4_ = this.RandNum(-100,100);
               }
               this.objMovementData.intFramesToTurn = Math.round(Math.abs(_loc4_) / (this.objData.numSpeed * 1.5));
               this.objMovementData.numAmountToTurn = this.objData.numSpeed * 1.5 * (_loc4_ / Math.abs(_loc4_));
               this.objMovementData.blnSafetyTurn = false;
            }
         }
      }
      
      public function PredictTargetLocation(param1:int) : Point
      {
         if(this.var_410 == true)
         {
            return null;
         }
         var _loc2_:class_6 = new class_6();
         if(this.var_345 == false)
         {
            _loc2_.method_217(this.rotation);
            _loc2_.method_84(this.objData.numSpeed);
            _loc2_.method_84(param1);
         }
         return new Point(_loc2_.x + this.x,_loc2_.y + this.y);
      }
   }
}

