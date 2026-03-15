// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_68 extends MovieClip{
      
      public var_465: number;
      public blnEnemy: boolean;
      public objSpecialData: Record<string, any>;
      public objBFRef: class_109;
      public blnReadyForDeleteQueue: boolean;
      public moveX: number;
      public moveY: number;
      public blnSeeker: boolean;
      public var_188: number;
      public objAvatar: MovieClip;
      public var_168: number;
      public var_229: boolean;
      public var_334: Array<class_113>;
      public var_34: MovieClip;
      public var_31: boolean;
      public blnDestroyable: boolean;
      public objWorld: BTAGameWorld;
      public intState: number;
      public blnRotateTowardTarget: boolean;
      public blnBulletWipe: boolean;
      public r: number;
      public blnEnemyMine: boolean;
      constructor(){
         super();
         addFrameScript(0,this.frame1);
         this.var_334 = new Array<class_113>();
         this.var_31 = false;
         this.blnRotateTowardTarget = false;
         this.var_229 = false;
         this.blnEnemyMine = false;
         this.blnBulletWipe = false;
         this.blnDestroyable = false;
         this.blnSeeker = false;
         this.blnReadyForDeleteQueue = false;
         this.moveX = 0;
         this.moveY = 0;
         this.intState = 1;
         this.var_168 = 1;
         this.var_188 = 0;
      }
      
      public RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public method_193(param1: string): number
      {
         let var_40: string = param1;
         if(this.objSpecialData == null)
         {
            return -1;
         }
         try
         {
            return this.objSpecialData[var_40];
         }
         catch (e: any)
         {
            return -1;
         }
      }
      
      public method_14(param1: number): void
      {
         let _loc2_: class_6 = new class_6();
         _loc2_.x = Math.cos(Math.PI * param1 / 180) * this.var_465;
         _loc2_.y = Math.sin(Math.PI * param1 / 180) * this.var_465;
         this.moveX = _loc2_.x;
         this.moveY = _loc2_.y;
      }
      
      public RotateTowardTarget(): number
      {
         if(this.var_34 == null)
         {
            return 0;
         }
         this;
         return 0;
      }
      
      public BulletCallCollisionDetected(param1: MovieClip, param2: boolean): void
      {
         if(param2 == true)
         {
            this.objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
         }
         else
         {
            this.objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
            if(this.objWorld.intHitTimer == -1)
            {
               if(param2 == false)
               {
                  this.objWorld.mRef.SoundCall(new class_49());
               }
               this.objWorld.intHitTimer = 4;
            }
         }
      }
      
      public Deactivate(): void
      {
         this.var_334 = null;
         this.objWorld = null;
         this.objBFRef = null;
         this.var_34 = null;
         this.objSpecialData = null;
         this.objAvatar = null;
      }
      
      public TestForCollision(): boolean
      {
         0;
         0;
         0;
         0;
         if(this.objBFRef == null)
         {
            return false;
         }
         if(this.objBFRef.arrEnemies == null)
         {
            return false;
         }
         if(this.objBFRef.arrEnemies.length <= 0)
         {
            return false;
         }
         this;
         return false;
      }
      
      public method_354(param1: string): any
      {
         return this.objSpecialData[param1];
      }
      
      public set blnMoveTank(param1: boolean)
      {
         this.var_31 = param1;
      }
      
      public MoveBullet(): boolean
      {
         if(this.var_31 == true)
         {
            if(this.method_35() == true)
            {
               this.objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
               this.var_31 = false;
               return true;
            }
            if(this.blnRotateTowardTarget == true)
            {
               this.method_14(this.RotateTowardTarget());
            }
            if(this.TestForCollision() == true)
            {
               this.var_31 = false;
               return true;
            }
            this.x += this.moveX;
            this.y += this.moveY;
         }
         return false;
      }
      
      public method_248(param1: class_113): boolean
      {
         let _loc2_: number = 0;
         while(_loc2_ < this.var_334.length)
         {
            if(this.var_334[_loc2_] == param1)
            {
               return true;
            }
            _loc2_++;
         }
         return false;
      }
      
      public method_35(): boolean
      {
         if(this.x * this.x + this.y * this.y > 172225)
         {
            if(this.var_229 == false)
            {
               if(this.blnEnemy == false)
               {
                  this.objWorld.method_321(1);
               }
               else
               {
                  this.objWorld.method_321(2);
               }
            }
            return true;
         }
         return false;
      }
      
      public Run(): boolean
      {
         switch(this.intState)
         {
            case 1:
               return this.MoveBullet();
            case 2:
               x += this.moveX;
               y += this.moveY;
               if(this.var_31 == true)
               {
                  if(this.method_35() == true)
                  {
                     this.objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
                     this.var_31 = false;
                     return true;
                  }
               }
               return false;
            default:
               return true;
         }
      }
      
      public Setup(param1: number, param2: Record<string, any>, param3: MovieClip, param4: boolean, param5: number, param6: class_109): void
      {
         this.cacheAsBitmap = true;
         this.var_465 = param1;
         this.objSpecialData = param2;
         this.var_34 = param3;
         this.blnEnemy = param4;
         this.objBFRef = param6;
         this.var_168 = param5;
         this.objAvatar = this.objBFRef.var_60.myAvatar;
         this.objWorld = this.objBFRef.var_60;
         if(this.blnRotateTowardTarget == true)
         {
            this.method_14(this.RotateTowardTarget());
         }
         else
         {
            this.method_14(this.rotation);
         }
      }
      
      public frame1(): any
      {
         this.r = Math.round(Math.random() * 10);
         this.gotoAndPlay(this.r);
      }
      
      public method_140(param1: class_113): void
      {
         this.var_334.push(param1);
      }
   }
