// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_6{
      
      public x: number;
      public y: number;
      constructor(param1: number = 0, param2: number = 0){
         super();
         this.x = param1;
         this.y = param2;
      }
      
      public Add(param1: Vector): void
      {
         this.x += param1.x;
         this.y += param1.y;
      }
      
      public method_741(param1: number = 0, param2: number = 0): void
      {
         this.x += param1;
         this.y += param2;
      }
      
      public method_803(param1: number, param2: number): void
      {
         this.method_217(param1);
         this.method_84(param2);
      }
      
      public method_84(param1: number): void
      {
         this.x *= param1;
         this.y *= param1;
      }
      
      public method_801(): void
      {
      }
      
      public method_189(): void
      {
         let _loc1_: number = this.method_41();
         if(_loc1_ != 0)
         {
            this.x /= _loc1_;
            this.y /= _loc1_;
         }
      }
      
      public method_217(param1: number): void
      {
         param1 = param1 * Math.PI / 180;
         this.x = Math.cos(param1) * 1;
         this.y = Math.sin(param1) * 1;
      }
      
      public method_503(param1: number, param2: number, param3: number): number
      {
         let _loc4_: number = 0;
         let _loc5_: number = this.method_90();
         let _loc6_: number = 0;
         if(param1 >= 0)
         {
            _loc4_ = param1 - 180;
            if(_loc5_ < param1 && _loc5_ > _loc4_)
            {
               _loc6_ = -param3 * param2;
               if(_loc5_ - param1 > _loc6_)
               {
                  _loc6_ = _loc5_ - param1;
               }
            }
            else
            {
               _loc6_ = param3 * param2;
               if(_loc5_ >= 0)
               {
                  if(_loc5_ != _loc4_)
                  {
                     if(_loc5_ - param1 < _loc6_)
                     {
                        _loc6_ = _loc5_ - param1;
                     }
                  }
               }
            }
         }
         else
         {
            _loc4_ = param1 + 180;
            if(_loc5_ < _loc4_ && _loc5_ > param1)
            {
               _loc6_ = param3 * param2;
               if(_loc5_ - param1 < _loc6_)
               {
                  _loc6_ = _loc5_ - param1;
               }
            }
            else
            {
               _loc6_ = -param3 * param2;
               if(_loc5_ < 0)
               {
                  if(_loc5_ - param1 > _loc6_)
                  {
                     _loc6_ = _loc5_ - param1;
                  }
               }
            }
         }
         if(Math.abs(_loc6_) <= 30)
         {
            if(_loc5_ == 0)
            {
            }
         }
         return _loc6_;
      }
      
      public method_41(): number
      {
         let _loc1_: number = this.x * this.x + this.y * this.y;
         return Math.sqrt(_loc1_);
      }
      
      public method_90(): number
      {
         let _loc1_: number = Math.atan2(this.y,this.x);
         return 360 * _loc1_ / (2 * Math.PI);
      }
   }
