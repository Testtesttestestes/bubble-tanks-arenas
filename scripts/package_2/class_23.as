package package_2
{
   import flash.utils.ByteArray;
   import package_3.class_27;
   import package_9.class_26;
   
   public class class_23
   {
      
      protected var var_181:ByteArray;
      
      protected var var_141:ByteArray;
      
      protected var var_57:uint;
      
      protected var var_273:class_11;
      
      protected var var_270:class_26;
      
      protected var var_73:class_18;
      
      public function class_23(param1:class_18, param2:class_11 = null)
      {
         super();
         this.var_73 = param1;
         this.var_57 = param1.method_53();
         if(param2 == null)
         {
            param2 = new PKCS5(this.var_57);
         }
         else
         {
            param2.method_438(this.var_57);
         }
         this.var_273 = param2;
         this.var_270 = new class_26();
         this.var_141 = null;
         this.var_181 = new ByteArray();
      }
      
      public function set method_241(param1:ByteArray) : void
      {
         this.var_141 = param1;
         this.var_181.length = 0;
         this.var_181.writeBytes(this.var_141);
      }
      
      protected function getIV4d() : ByteArray
      {
         var _loc1_:ByteArray = new ByteArray();
         if(this.var_141)
         {
            _loc1_.writeBytes(this.var_141);
            return _loc1_;
         }
         throw new Error("an IV must be set before calling decrypt()");
      }
      
      protected function getIV4e() : ByteArray
      {
         var _loc1_:ByteArray = new ByteArray();
         if(this.var_141)
         {
            _loc1_.writeBytes(this.var_141);
         }
         else
         {
            this.var_270.method_473(_loc1_,this.var_57);
         }
         this.var_181.length = 0;
         this.var_181.writeBytes(_loc1_);
         return _loc1_;
      }
      
      public function get method_241() : ByteArray
      {
         return this.var_181;
      }
      
      public function dispose() : void
      {
         var _loc1_:uint = 0;
         if(this.var_141 != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_141.length)
            {
               this.var_141[_loc1_] = this.var_270.method_68();
               _loc1_++;
            }
            this.var_141.length = 0;
            this.var_141 = null;
         }
         if(this.var_181 != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_141.length)
            {
               this.var_181[_loc1_] = this.var_270.method_68();
               _loc1_++;
            }
            this.var_181.length = 0;
            this.var_181 = null;
         }
         this.var_73.dispose();
         this.var_73 = null;
         this.var_273 = null;
         this.var_270.dispose();
         this.var_270 = null;
         class_27.method_59();
      }
      
      public function method_53() : uint
      {
         return this.var_73.method_53();
      }
   }
}

