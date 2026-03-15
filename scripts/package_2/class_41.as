package package_2
{
   import flash.utils.ByteArray;
   import package_3.class_27;
   
   public class class_41 implements class_29, class_12
   {
      
      protected var mode:class_23;
      
      protected var var_310:class_12;
      
      public function class_41(param1:class_23)
      {
         super();
         this.mode = param1;
         this.var_310 = param1 as class_12;
      }
      
      public function encrypt(param1:ByteArray) : void
      {
         this.var_310.encrypt(param1);
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeBytes(this.mode.method_241);
         _loc2_.writeBytes(param1);
         param1.position = 0;
         param1.writeBytes(_loc2_);
      }
      
      public function decrypt(param1:ByteArray) : void
      {
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeBytes(param1,0,this.method_53());
         this.mode.method_241 = _loc2_;
         _loc2_ = new ByteArray();
         _loc2_.writeBytes(param1,this.method_53());
         this.var_310.decrypt(_loc2_);
         param1.length = 0;
         param1.writeBytes(_loc2_);
      }
      
      public function dispose() : void
      {
         this.mode.dispose();
         this.mode = null;
         this.var_310 = null;
         class_27.method_59();
      }
      
      public function method_53() : uint
      {
         return this.mode.method_53();
      }
      
      public function toString() : String
      {
         return "simple-" + this.var_310.toString();
      }
   }
}

