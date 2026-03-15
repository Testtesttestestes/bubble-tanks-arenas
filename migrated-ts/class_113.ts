// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_113 extends MovieClip{
      
      private intHitTimer: number;
      public pntHitDetailLocation: Point;
      public var_232: number;
      public var_248: Array<MovieClip>;
      public arrSeekerCarrierRefs: Array<Weapon>;
      public var_410: boolean;
      public objMovementData: Record<string, any>;
      public intTankLife: number;
      public movShieldHit: class_106;
      private var_532: boolean;
      public arrPrimaryWeapons: Array<Weapon>;
      public var_345: boolean;
      public objData: TankData;
      public arrSecondaryWeapons: Array<Weapon>;
      public blnShieled: boolean;
      public blnOkToTeleport: boolean;
      private var_306: Sprite;
      public intState: number;
      public funCallback: Function;
      public var_349: number;
      constructor(param1: TankData){
         super();
         this.Setup(param1);
      }
      
      public method_472(): void
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
      
      public method_556(): boolean
      {
         let _loc1_: class_6 = new class_6();
         let _loc2_: number = this.width;
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
      
      public Damage(param1: number, param2: class_68 = null as any): void
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
      
      public StunMe(param1: number = 0): any
      {
         if(param1 > 0)
         {
            this.var_345 = true;
            this.var_349 = param1;
            this.intState = 2;
         }
      }
      
      private Deactivate(): void
      {
         let _loc1_: number = 0;
         let _loc2_: number = this.objData.intType;
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
      
      public AddLife(param1: number): void
      {
         this.intTankLife += param1;
         if(this.intTankLife > this.objData.numLife)
         {
            this.intTankLife = this.objData.numLife;
         }
      }
      
      public MoveWanderSetup(): void
      {
         this.objMovementData = {
            "intFramesToTurn":0,
            "intMinFramesToHoldTurning":0,
            "numAmountToTurn":0,
            "blnSafetyTurn":false,
            "numLastAngle":this.method_286()
         };
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public AvatarLifeCorrect(): void
      {
      }
      
      public SetCallback(param1: Function): void
      {
         this.funCallback = param1;
      }
      
      public SetupClosestBubbleToCenterPoint(): void
      {
         this.pntHitDetailLocation = this.objData.method_616();
      }
      
      public RegisterPrimaryWeapon(param1: MovieClip): void
      {
         let argClip: MovieClip = param1;
         this.arrPrimaryWeapons.push(argClip);
         argClip.Setup(this);
         try
         {
            if(argClip.blnSeekerCarrier != null)
            {
               this.arrSeekerCarrierRefs.push(argClip);
            }
         }
         catch (e: any)
         {
         }
      }
      
      private method_585(): void
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
      
      public method_586(): boolean
      {
         let _loc1_: number = this.width;
         if(this.height > this.width)
         {
            _loc1_ = this.height;
         }
         let _loc2_: class_6 = new class_6(this.x,this.y);
         let _loc3_: number = this.parent.parent["BF_BG_mc"].width / 2 * 0.75;
         let _loc4_: number = _loc2_.method_41 + _loc1_ / 2;
         if(_loc4_ > _loc3_)
         {
            return true;
         }
         return false;
      }
      
      public GetHitLocation(): Point
      {
         return localToGlobal(this.pntHitDetailLocation);
      }
      
      public method_642(): void
      {
         let _loc1_: number = 0;
         while(_loc1_ < this.arrPrimaryWeapons.length)
         {
            this.arrPrimaryWeapons[_loc1_].Run();
            _loc1_++;
         }
      }
      
      private method_637(): void
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
      
      public method_286(): number
      {
         let _loc1_: class_6 = new class_6(this.x,this.y);
         return _loc1_.method_90();
      }
      
      public Setup(param1: TankData): void
      {
         this.intState = 0;
         this.intHitTimer = -1;
         this.var_410 = false;
         this.objData = param1;
         this.intTankLife = this.objData.numLife;
         this.arrPrimaryWeapons = new Array<Weapon>();
         this.arrSecondaryWeapons = new Array<Weapon>();
         this.arrSeekerCarrierRefs = new Array<Weapon>();
         this.var_248 = new Array<MovieClip>();
         this.var_532 = false;
         this.blnShieled = false;
         this.var_232 = -1;
         this.blnOkToTeleport = true;
         this.var_345 = false;
         this.var_349 = 0;
      }
      
      public CheckForTeleports(): void
      {
         let _loc1_: Weapon = null;
         let _loc2_: number = 0;
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
      
      public EffectMeCrazy(param1: string, param2: number = 80, param3: number = 5, param4: boolean = true): void
      {
         let _loc6_: MovieClip = null;
         let _loc7_: number = 0;
         this.method_440();
         this.var_232 = param2;
         let _loc5_: number = 0;
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
               this.addChild(_loc6_);
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
               this.addChild(_loc6_);
               this.var_248.push(_loc6_);
               _loc5_++;
            }
         }
      }
      
      public method_440(): void
      {
         let _loc1_: number = 0;
         while(_loc1_ < this.var_248.length)
         {
            if(this.var_248[_loc1_].parent != null)
            {
               this.removeChild(this.var_248[_loc1_]);
            }
            _loc1_++;
         }
         this.var_248 = new Array<MovieClip>();
      }
      
      public Run(): void
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
      
      public RegisterSecondaryWeapon(param1: MovieClip): void
      {
         this.arrSecondaryWeapons.push(param1);
         param1.Setup(this);
      }
      
      public Move(): void
      {
      }
      
      public GetDataRef(): TankData
      {
         return this.objData;
      }
      
      public method_406(): void
      {
         let _loc3_: number = NaN;
         let _loc4_: number = NaN;
         let _loc5_: class_6 = null;
         let _loc1_: boolean = this.method_556();
         let _loc2_: class_6 = new class_6();
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
      
      public PredictTargetLocation(param1: number): Point
      {
         if(this.var_410 == true)
         {
            return null;
         }
         let _loc2_: class_6 = new class_6();
         if(this.var_345 == false)
         {
            _loc2_.method_217(this.rotation);
            _loc2_.method_84(this.objData.numSpeed);
            _loc2_.method_84(param1);
         }
         return new Point(_loc2_.x + this.x,_loc2_.y + this.y);
      }
   }
