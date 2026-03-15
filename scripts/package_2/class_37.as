package package_2
{
   import flash.utils.ByteArray;
   import package_3.class_27;
   
   public class class_37 implements class_29, class_12
   {
      
      private var var_73:class_18;
      
      private var var_273:class_11;
      
      public function class_37(param1:class_18, param2:class_11 = null)
      {
         super();
         this.var_73 = param1;
         if(param2 == null)
         {
            param2 = new PKCS5(param1.method_53());
         }
         else
         {
            param2.method_438(param1.method_53());
         }
         this.var_273 = param2;
      }
      
      public function encrypt(param1:ByteArray) : void
      {
         this.var_273.pad(param1);
         param1.position = 0;
         var _loc2_:uint = this.var_73.method_53();
         var _loc3_:ByteArray = new ByteArray();
         var _loc4_:ByteArray = new ByteArray();
         var _loc5_:uint = 0;
         while(_loc5_ < param1.length)
         {
            _loc3_.length = 0;
            param1.readBytes(_loc3_,0,_loc2_);
            this.var_73.encrypt(_loc3_);
            _loc4_.writeBytes(_loc3_);
            _loc5_ += _loc2_;
         }
         param1.length = 0;
         param1.writeBytes(_loc4_);
      }
      
      public function method_53() : uint
      {
         return this.var_73.method_53();
      }
      
      public function decrypt(param1:ByteArray) : void
      {
         param1.position = 0;
         var _loc2_:uint = this.var_73.method_53();
         if(param1.length % _loc2_ != 0)
         {
            throw new Error("ECB mode cipher length must be a multiple of blocksize " + _loc2_);
         }
         var _loc3_:ByteArray = new ByteArray();
         var _loc4_:ByteArray = new ByteArray();
         var _loc5_:uint = 0;
         while(_loc5_ < param1.length)
         {
            _loc3_.length = 0;
            param1.readBytes(_loc3_,0,_loc2_);
            this.var_73.decrypt(_loc3_);
            _loc4_.writeBytes(_loc3_);
            _loc5_ += _loc2_;
         }
         this.var_273.unpad(_loc4_);
         param1.length = 0;
         param1.writeBytes(_loc4_);
      }
      
      public function toString() : String
      {
         return this.var_73.toString() + "-ecb";
      }
      
      public function dispose() : void
      {
         this.var_73.dispose();
         this.var_73 = null;
         this.var_273 = null;
         class_27.method_59();
      }
   }
}

