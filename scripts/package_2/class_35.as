package package_2
{
   import flash.utils.ByteArray;
   import package_3.class_27;
   import package_9.class_26;
   
   public class class_35 implements class_18
   {
      
      private var k:Array;
      
      public const const_27:uint = 64;
      
      public function class_35(param1:ByteArray)
      {
         super();
         param1.position = 0;
         this.k = [param1.readUnsignedInt(),param1.readUnsignedInt(),param1.readUnsignedInt(),param1.readUnsignedInt()];
      }
      
      public static function method_818(param1:String) : class_35
      {
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeUnsignedInt(parseInt(param1.substr(0,8),16));
         _loc2_.writeUnsignedInt(parseInt(param1.substr(8,8),16));
         _loc2_.writeUnsignedInt(parseInt(param1.substr(16,8),16));
         _loc2_.writeUnsignedInt(parseInt(param1.substr(24,8),16));
         _loc2_.position = 0;
         return new class_35(_loc2_);
      }
      
      public function encrypt(param1:ByteArray, param2:uint = 0) : void
      {
         var _loc5_:uint = 0;
         param1.position = param2;
         var _loc3_:uint = param1.readUnsignedInt();
         var _loc4_:uint = param1.readUnsignedInt();
         var _loc6_:uint = 0;
         uint(2654435769);
         _loc5_ = 0;
         while(_loc5_ < this.const_27)
         {
            _loc3_ += (_loc4_ << 4 ^ _loc4_ >> 5) + _loc4_ ^ _loc6_ + this.k[_loc6_ & 3];
            _loc6_ += 2654435769;
            _loc4_ += (_loc3_ << 4 ^ _loc3_ >> 5) + _loc3_ ^ _loc6_ + this.k[_loc6_ >> 11 & 3];
            _loc5_++;
         }
         param1.position -= 8;
         param1.writeUnsignedInt(_loc3_);
         param1.writeUnsignedInt(_loc4_);
      }
      
      public function decrypt(param1:ByteArray, param2:uint = 0) : void
      {
         var _loc5_:uint = 0;
         param1.position = param2;
         var _loc3_:uint = param1.readUnsignedInt();
         var _loc4_:uint = param1.readUnsignedInt();
         var _temp_1:* = uint(2654435769);
         _temp_1;
         var _loc7_:uint = _temp_1 * this.const_27;
         _loc5_ = 0;
         while(_loc5_ < this.const_27)
         {
            _loc4_ -= (_loc3_ << 4 ^ _loc3_ >> 5) + _loc3_ ^ _loc7_ + this.k[_loc7_ >> 11 & 3];
            _loc7_ -= 2654435769;
            _loc3_ -= (_loc4_ << 4 ^ _loc4_ >> 5) + _loc4_ ^ _loc7_ + this.k[_loc7_ & 3];
            _loc5_++;
         }
         param1.position -= 8;
         param1.writeUnsignedInt(_loc3_);
         param1.writeUnsignedInt(_loc4_);
      }
      
      public function method_53() : uint
      {
         return 8;
      }
      
      public function toString() : String
      {
         return "xtea";
      }
      
      public function dispose() : void
      {
         var _loc1_:class_26 = new class_26();
         var _loc2_:uint = 0;
         while(_loc2_ < this.k.length)
         {
            this.k[_loc2_] = _loc1_.method_68();
            delete this.k[_loc2_];
            _loc2_++;
         }
         this.k = null;
         class_27.method_59();
      }
   }
}

