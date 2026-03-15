// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_110 extends MovieClip{
      
      private var_368: boolean;
      public intLifeAmount: number;
      public blnCollected: boolean;
      private funCallback: Function;
      private moveX: number;
      private var_331: boolean;
      private var_264: number;
      private moveY: number;
      private objAvatar: class_113;
      private var_274: boolean;
      constructor(){
         super();
         this.intLifeAmount = 1;
         this.var_264 = this.RandNum(4,22);
         this.var_368 = false;
         this.var_274 = false;
         this.var_331 = true;
         this.blnCollected = false;
      }
      
      private method_632(param1: number, param2: number, param3: number, param4: number): number
      {
         let _loc5_: number = param1 - param3;
         let _loc6_: number = param2 - param4;
         return Math.sqrt(_loc5_ * _loc5_ + _loc6_ * _loc6_);
      }
      
      public set blnCollect(param1: boolean)
      {
         this.var_368 = param1;
         this.var_331 = false;
      }
      
      private method_738(): boolean
      {
         if(this.var_368 == true)
         {
            return true;
         }
         if(this.objAvatar == null)
         {
            return false;
         }
         if(this.objAvatar.parent == null)
         {
            return false;
         }
         this;
         return false;
      }
      
      private method_765(): void
      {
         if(this.var_274 == false)
         {
            if(this.var_331 == true)
            {
               this.method_14();
               this.x += this.moveX;
               this.y += this.moveY;
            }
         }
      }
      
      private method_517(): void
      {
         if(this.objAvatar == null)
         {
            return;
         }
         this;
      }
      
      private MoveTowardAvatar(): void
      {
         this.method_517();
         this.x += this.moveX;
         this.y += this.moveY;
      }
      
      public Setup(param1: number, param2: Function, param3: class_113): void
      {
         this.intLifeAmount = param1;
         this.funCallback = param2;
         this.objAvatar = param3;
      }
      
      private method_35(): void
      {
         if(this.x * this.x + this.y * this.y > 172225)
         {
            this.var_274 = true;
            this.funCallback(this);
         }
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      private method_14(): void
      {
         let _loc1_: class_6 = new class_6();
         this.var_264 *= 0.9;
         _loc1_.x = Math.cos(Math.PI * this.rotation / 180) * this.var_264;
         _loc1_.y = Math.sin(Math.PI * this.rotation / 180) * this.var_264;
         this.moveX = _loc1_.x;
         this.moveY = _loc1_.y;
         if(this.var_264 < 0.5)
         {
            this.var_331 = false;
         }
      }
      
      public Run(): void
      {
         this.method_35();
         this.method_765();
         if(this.var_331 == false)
         {
            this.ControlAvatarAttraction();
         }
      }
      
      private ControlAvatarAttraction(): void
      {
         if(this.var_274 == false)
         {
            if(this.method_738() == true)
            {
               this.MoveTowardAvatar();
            }
         }
      }
   }
