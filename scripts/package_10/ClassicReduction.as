package package_10
{
   use namespace bi_internal;
   
   internal class ClassicReduction implements IReduction
   {
      
      private var m:class_25;
      
      public function ClassicReduction(param1:class_25)
      {
         super();
         this.m = param1;
      }
      
      public function method_271(param1:class_25) : class_25
      {
         return param1;
      }
      
      public function method_63(param1:class_25) : void
      {
         param1.divRemTo(this.m,null,param1);
      }
      
      public function method_244(param1:class_25, param2:class_25, param3:class_25) : void
      {
         param1.method_139(param2,param3);
         this.method_63(param3);
      }
      
      public function method_131(param1:class_25, param2:class_25) : void
      {
         param1.method_224(param2);
         this.method_63(param2);
      }
      
      public function method_270(param1:class_25) : class_25
      {
         if(param1.s < 0 || param1.method_16(this.m) >= 0)
         {
            return param1.method_76(this.m);
         }
         return param1;
      }
   }
}

