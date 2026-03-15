// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_10

export class MontgomeryReduction implements IReduction
   {
      
      private var_422: number;
      private var_483: number;
      private var_464: number;
      private mt2: number;
      private m: class_25;
      private var_530: number;
      constructor(param1: class_25){
         super();
         this.m = param1;
         this.var_422 = param1.method_561();
         this.var_464 = this.var_422 & 0x7FFF;
         this.var_483 = this.var_422 >> 15;
         this.var_530 = (1 << class_25.const_3 - 15) - 1;
         this.mt2 = 2 * param1.t;
      }
      
      public method_270(param1: class_25): class_25
      {
         let _loc2_: class_25 = new class_25();
         param1.abs().method_144(this.m.t,_loc2_);
         _loc2_.divRemTo(this.m,null,_loc2_);
         if(param1.s < 0 && _loc2_.method_16(class_25.const_9) > 0)
         {
            this.m.method_15(_loc2_,_loc2_);
         }
         return _loc2_;
      }
      
      public method_271(param1: class_25): class_25
      {
         let _loc2_: class_25 = new class_25();
         param1.copyTo(_loc2_);
         this.method_63(_loc2_);
         return _loc2_;
      }
      
      public method_131(param1: class_25, param2: class_25): void
      {
         param1.method_224(param2);
         this.method_63(param2);
      }
      
      public method_63(param1: class_25): void
      {
         let _loc3_: number = 0;
         let _loc4_: number = 0;
         while(param1.t <= this.mt2)
         {
            let _loc5_: number;
            param1.a[_loc5_ = param1.t++] = 0;
         }
         let _loc2_: number = 0;
         while(_loc2_ < this.m.t)
         {
            _loc3_ = param1.a[_loc2_] & 0x7FFF;
            _loc4_ = _loc3_ * this.var_464 + ((_loc3_ * this.var_483 + (param1.a[_loc2_] >> 15) * this.var_464 & this.var_530) << 15) & class_25.const_5;
            _loc3_ = _loc2_ + this.m.t;
            param1.a[_loc3_] += this.m.method_75(0,_loc4_,param1,_loc2_,0,this.m.t);
            while(param1.a[_loc3_] >= class_25.const_6)
            {
               param1.a[_loc3_] -= class_25.const_6;
               ++param1.a[++_loc3_];
            }
            _loc2_++;
         }
         param1.method_45();
         param1.method_227(this.m.t,param1);
         if(param1.method_16(this.m) >= 0)
         {
            param1.method_15(this.m,param1);
         }
      }
      
      public method_244(param1: class_25, param2: class_25, param3: class_25): void
      {
         param1.method_139(param2,param3);
         this.method_63(param3);
      }
   }
