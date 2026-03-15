package package_10
{
   use namespace bi_internal;
   
   internal class BarrettReduction implements IReduction
   {
      
      private var r2:class_25;
      
      private var q3:class_25;
      
      private var var_507:class_25;
      
      private var m:class_25;
      
      public function BarrettReduction(param1:class_25)
      {
         super();
         this.r2 = new class_25();
         this.q3 = new class_25();
         class_25.const_4.method_144(2 * param1.t,this.r2);
         this.var_507 = this.r2.divide(param1);
         this.m = param1;
      }
      
      public function method_271(param1:class_25) : class_25
      {
         return param1;
      }
      
      public function method_131(param1:class_25, param2:class_25) : void
      {
         param1.method_224(param2);
         this.method_63(param2);
      }
      
      public function method_270(param1:class_25) : class_25
      {
         var _loc2_:class_25 = null;
         if(param1.s < 0 || param1.t > 2 * this.m.t)
         {
            return param1.method_76(this.m);
         }
         if(param1.method_16(this.m) < 0)
         {
            return param1;
         }
         _loc2_ = new class_25();
         param1.copyTo(_loc2_);
         this.method_63(_loc2_);
         return _loc2_;
      }
      
      public function method_63(param1:class_25) : void
      {
         var _loc2_:class_25 = param1 as class_25;
         _loc2_.method_227(this.m.t - 1,this.r2);
         if(_loc2_.t > this.m.t + 1)
         {
            _loc2_.t = this.m.t + 1;
            _loc2_.method_45();
         }
         this.var_507.method_540(this.r2,this.m.t + 1,this.q3);
         this.m.method_691(this.q3,this.m.t + 1,this.r2);
         while(_loc2_.method_16(this.r2) < 0)
         {
            _loc2_.method_142(1,this.m.t + 1);
         }
         _loc2_.method_15(this.r2,_loc2_);
         while(_loc2_.method_16(this.m) >= 0)
         {
            _loc2_.method_15(this.m,_loc2_);
         }
      }
      
      public function method_244(param1:class_25, param2:class_25, param3:class_25) : void
      {
         param1.method_139(param2,param3);
         this.method_63(param3);
      }
   }
}

