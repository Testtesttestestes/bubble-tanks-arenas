package package_2
{
   import flash.utils.ByteArray;
   import package_3.class_27;
   
   public class class_42 extends class_34
   {
      
      protected var encKey2:Array;
      
      protected var encKey3:Array;
      
      protected var decKey2:Array;
      
      protected var decKey3:Array;
      
      public function class_42(param1:ByteArray)
      {
         super(param1);
         this.encKey2 = method_67(false,param1,8);
         this.decKey2 = method_67(true,param1,8);
         if(param1.length > 16)
         {
            this.encKey3 = method_67(true,param1,16);
            this.decKey3 = method_67(false,param1,16);
         }
         else
         {
            this.encKey3 = var_242;
            this.decKey3 = var_246;
         }
      }
      
      override public function encrypt(param1:ByteArray, param2:uint = 0) : void
      {
         desFunc(var_242,param1,param2,param1,param2);
         desFunc(this.encKey2,param1,param2,param1,param2);
         desFunc(this.encKey3,param1,param2,param1,param2);
      }
      
      override public function dispose() : void
      {
         super.dispose();
         var _loc1_:uint = 0;
         if(this.encKey2 != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.encKey2.length)
            {
               this.encKey2[_loc1_] = 0;
               _loc1_++;
            }
            this.encKey2 = null;
         }
         if(this.encKey3 != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.encKey3.length)
            {
               this.encKey3[_loc1_] = 0;
               _loc1_++;
            }
            this.encKey3 = null;
         }
         if(this.decKey2 != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.decKey2.length)
            {
               this.decKey2[_loc1_] = 0;
               _loc1_++;
            }
            this.decKey2 = null;
         }
         if(this.decKey3 != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.decKey3.length)
            {
               this.decKey3[_loc1_] = 0;
               _loc1_++;
            }
            this.decKey3 = null;
         }
         class_27.method_59();
      }
      
      override public function decrypt(param1:ByteArray, param2:uint = 0) : void
      {
         desFunc(this.decKey3,param1,param2,param1,param2);
         desFunc(this.decKey2,param1,param2,param1,param2);
         desFunc(var_246,param1,param2,param1,param2);
      }
      
      override public function toString() : String
      {
         return "3des";
      }
   }
}

