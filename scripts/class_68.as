package
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol109")]
   public class class_68 extends MovieClip
   {
      
      public var var_465:Number;
      
      public var blnEnemy:Boolean;
      
      public var objSpecialData:Object;
      
      public var objBFRef:class_109;
      
      public var blnReadyForDeleteQueue:Boolean;
      
      public var moveX:Number;
      
      public var moveY:Number;
      
      public var blnSeeker:Boolean;
      
      public var var_188:int;
      
      public var objAvatar:MovieClip;
      
      public var var_168:int;
      
      public var var_229:Boolean;
      
      public var var_334:Vector.<class_113>;
      
      public var var_34:MovieClip;
      
      public var var_31:Boolean;
      
      public var blnDestroyable:Boolean;
      
      public var objWorld:BTAGameWorld;
      
      public var intState:int;
      
      public var blnRotateTowardTarget:Boolean;
      
      public var blnBulletWipe:Boolean;
      
      public var r:Number;
      
      public var blnEnemyMine:Boolean;
      
      public function class_68()
      {
         super();
         addFrameScript(0,this.frame1);
         this.var_334 = new Vector.<class_113>();
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
      
      public function RandNum(param1:Number, param2:Number) : Number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public function method_193(param1:String) : Number
      {
         var var_40:String = param1;
         if(this.objSpecialData == null)
         {
            return -1;
         }
         try
         {
            return this.objSpecialData[var_40];
         }
         catch(e:Error)
         {
            return -1;
         }
      }
      
      public function method_14(param1:Number) : void
      {
         var _loc2_:class_6 = new class_6();
         _loc2_.x = Math.cos(Math.PI * param1 / 180) * this.var_465;
         _loc2_.y = Math.sin(Math.PI * param1 / 180) * this.var_465;
         this.moveX = _loc2_.x;
         this.moveY = _loc2_.y;
      }
      
      public function RotateTowardTarget() : Number
      {
         if(this.var_34 == null)
         {
            return 0;
         }
         this;
         return 0;
      }
      
      public function BulletCallCollisionDetected(param1:MovieClip, param2:Boolean) : void
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
      
      public function Deactivate() : void
      {
         this.var_334 = null;
         this.objWorld = null;
         this.objBFRef = null;
         this.var_34 = null;
         this.objSpecialData = null;
         this.objAvatar = null;
      }
      
      public function TestForCollision() : Boolean
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
      
      public function method_354(param1:String) : *
      {
         return this.objSpecialData[param1];
      }
      
      public function set blnMoveTank(param1:Boolean) : void
      {
         this.var_31 = param1;
      }
      
      public function MoveBullet() : Boolean
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
      
      public function method_248(param1:class_113) : Boolean
      {
         var _loc2_:uint = 0;
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
      
      public function method_35() : Boolean
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
      
      public function Run() : Boolean
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
      
      public function Setup(param1:Number, param2:Object, param3:MovieClip, param4:Boolean, param5:int, param6:class_109) : void
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
      
      internal function frame1() : *
      {
         this.r = Math.round(Math.random() * 10);
         gotoAndPlay(this.r);
      }
      
      public function method_140(param1:class_113) : void
      {
         this.var_334.push(param1);
      }
   }
}

