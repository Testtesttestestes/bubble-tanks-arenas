// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class DataObject{
      
      private var_219: number;
      private var_496: boolean;
      private var_47: any[];
      private var_134: number;
      private var_119: number;
      constructor(param1: number = NaN, param2: boolean = false, param3: boolean = false, param4: number = NaN){
         super();
         let _loc5_: number = this.RandNum(55,66);
         this.var_47 = new Array(_loc5_);
         let _loc6_: number = 0;
         while(_loc6_ < _loc5_)
         {
            this.var_47[_loc6_] = 0;
            _loc6_++;
         }
         this.var_119 = -1;
         this.var_134 = -1;
         this.var_219 = 0;
         if(param3 == true)
         {
            this.method_538();
         }
         else if(isNaN(param1) == false)
         {
            if(isNaN(param4) == false)
            {
               param1 = param4 - param1;
            }
            this.method_21(param1);
         }
         this.var_496 = param2;
      }
      
      public Add(param1: number): void
      {
         let _loc2_: number = this.method_29();
         _loc2_ += param1;
         this.method_21(_loc2_);
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public method_176(param1: any[]): void
      {
         this.var_219 = param1.shift();
         this.var_119 = param1[2];
         this.var_134 = param1[7];
         this.var_47.length = 0;
         this.var_47 = param1.slice();
         this.var_47.splice(7,1);
         this.var_47.splice(2,1);
      }
      
      public set value(param1: number)
      {
         this.method_21(param1);
      }
      
      public get value(): number
      {
         return this.method_29();
      }
      
      public method_538(param1: number = NaN): void
      {
         let _loc3_: number = NaN;
         let _loc4_: number = NaN;
         let _loc5_: number = NaN;
         let _loc6_: number = NaN;
         let _loc7_: number = NaN;
         let _loc8_: number = NaN;
         let _loc9_: number = NaN;
         if(isNaN(param1) == true)
         {
            param1 = this.RandNum(20000,50000);
         }
         let _loc2_: number = 0;
         while(_loc2_ < 10)
         {
            _loc3_ = Math.round(Math.random() * param1);
            _loc4_ = param1 - _loc3_;
            this.var_119 = this.RandNum(0,this.var_47.length - 4);
            this.var_134 = this.RandNum(0,this.var_47.length - 4);
            if(this.var_119 == this.var_134)
            {
               if(this.var_119 == this.var_47.length - 1)
               {
                  this.var_134 = this.var_119 - 1;
               }
               else
               {
                  this.var_134 = this.var_119 + 1;
               }
            }
            _loc5_ = param1 / (this.var_47.length - 2);
            _loc6_ = param1;
            _loc7_ = this.var_47.length;
            _loc8_ = 0;
            while(_loc8_ < this.var_47.length)
            {
               if(_loc8_ == this.var_119)
               {
                  this.var_47[_loc8_] = _loc3_;
               }
               else if(_loc8_ == this.var_134)
               {
                  this.var_47[_loc8_] = _loc4_;
               }
               else
               {
                  _loc9_ = 0;
                  _loc9_ = Math.round(Math.random() * (_loc5_ * 1.23) + _loc5_ * 0.75);
                  this.var_47[_loc8_] = _loc9_;
               }
               _loc8_++;
            }
            if(this.method_29() == -1)
            {
               break;
            }
            _loc2_++;
         }
      }
      
      public method_21(param1: number): void
      {
         let _loc8_: number = NaN;
         if(param1 >= 0 && param1 < 5000)
         {
            this.var_219 = this.RandNum(3000,5000);
         }
         else if(param1 < 0 && param1 > -5000)
         {
            this.var_219 = this.RandNum(3000,5000) * -1;
         }
         else
         {
            this.var_219 = 0;
         }
         param1 += this.var_219;
         let _loc2_: number = Math.round(Math.random() * param1);
         let _loc3_: number = param1 - _loc2_;
         this.var_119 = this.RandNum(0,this.var_47.length - 4);
         this.var_134 = this.RandNum(0,this.var_47.length - 4);
         if(this.var_119 == this.var_134)
         {
            if(this.var_119 == this.var_47.length - 1)
            {
               this.var_134 = this.var_119 - 1;
            }
            else
            {
               this.var_134 = this.var_119 + 1;
            }
         }
         let _loc4_: number = param1 / (this.var_47.length - 2);
         let _loc5_: number = param1;
         let _loc6_: number = this.var_47.length;
         let _loc7_: number = 0;
         while(_loc7_ < this.var_47.length)
         {
            if(_loc7_ == this.var_119)
            {
               this.var_47[_loc7_] = _loc2_;
            }
            else if(_loc7_ == this.var_134)
            {
               this.var_47[_loc7_] = _loc3_;
            }
            else
            {
               _loc8_ = 0;
               if(_loc5_ > 0)
               {
                  _loc8_ = Math.round(Math.random() * _loc4_ + _loc4_ * 0.5);
                  if(_loc8_ > _loc5_)
                  {
                     _loc8_ = _loc5_;
                  }
                  if(_loc7_ == this.var_47.length - 1)
                  {
                     _loc8_ = _loc5_;
                  }
                  _loc5_ -= _loc8_;
               }
               this.var_47[_loc7_] = _loc8_;
            }
            _loc7_++;
         }
      }
      
      public method_789(): any[]
      {
         let _loc1_: any[] = this.var_47.slice();
         _loc1_.splice(2,0,this.var_119);
         _loc1_.splice(7,0,this.var_134);
         _loc1_.unshift(this.var_219);
         return _loc1_;
      }
      
      public method_29(): number
      {
         0;
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         while(_loc3_ < this.var_47.length)
         {
            if(_loc3_ == this.var_119)
            {
               let _loc1_: number = 0 + this.var_47[_loc3_];
            }
            else if(_loc3_ == this.var_134)
            {
               _loc1_ = 0 + this.var_47[_loc3_];
            }
            else
            {
               _loc2_ += this.var_47[_loc3_];
            }
            _loc3_++;
         }
         if(0 == _loc2_)
         {
            return 0 - this.var_219;
         }
         if(this.var_496 == true)
         {
            return 0;
         }
         return -1;
      }
   }
