package package_9
{
   import flash.utils.ByteArray;
   import package_2.class_30;
   import package_3.class_27;
   
   public class ARC4 implements class_24, class_30
   {
      
      private var S:ByteArray;
      
      private var i:int = 0;
      
      private var j:int = 0;
      
      private const name_2:uint = 256;
      
      public function ARC4(param1:ByteArray = null)
      {
         super();
         this.S = new ByteArray();
         if(param1)
         {
            this.init(param1);
         }
      }
      
      public function decrypt(param1:ByteArray) : void
      {
         this.encrypt(param1);
      }
      
      public function init(param1:ByteArray) : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         _loc2_ = 0;
         while(_loc2_ < 256)
         {
            this.S[_loc2_] = _loc2_;
            _loc2_++;
         }
         _loc3_ = 0;
         _loc2_ = 0;
         while(_loc2_ < 256)
         {
            _loc3_ = _loc3_ + this.S[_loc2_] + param1[_loc2_ % param1.length] & 0xFF;
            _loc4_ = int(this.S[_loc2_]);
            this.S[_loc2_] = this.S[_loc3_];
            this.S[_loc3_] = _loc4_;
            _loc2_++;
         }
         this.i = 0;
         this.j = 0;
      }
      
      public function method_601() : uint
      {
         var _loc1_:int = 0;
         this.i = this.i + 1 & 0xFF;
         this.j = this.j + this.S[this.i] & 0xFF;
         _loc1_ = int(this.S[this.i]);
         this.S[this.i] = this.S[this.j];
         this.S[this.j] = _loc1_;
         return this.S[_loc1_ + this.S[this.i] & 0xFF];
      }
      
      public function encrypt(param1:ByteArray) : void
      {
         var _loc2_:uint = 0;
         while(_loc2_ < param1.length)
         {
            var _temp_2:* = param1;
            var _loc3_:uint = _loc2_++;
            _temp_2[_loc3_] ^= this.method_601();
         }
      }
      
      public function dispose() : void
      {
         var _loc1_:uint = 0;
         if(this.S != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.S.length)
            {
               this.S[_loc1_] = Math.random() * 256;
               _loc1_++;
            }
            this.S.length = 0;
            this.S = null;
         }
         this.i = 0;
         this.j = 0;
         class_27.method_59();
      }
      
      public function method_53() : uint
      {
         return 1;
      }
      
      public function method_752() : uint
      {
         return this.name_2;
      }
      
      public function toString() : String
      {
         return "rc4";
      }
   }
}

