package package_7
{
   import flash.utils.ByteArray;
   
   public class class_20
   {
      
      private var var_196:uint;
      
      private var name_1:class_17;
      
      public function class_20(param1:class_17, param2:uint = 0)
      {
         super();
         this.name_1 = param1;
         this.var_196 = param2;
      }
      
      public function toString() : String
      {
         return "hmac-" + (this.var_196 > 0 ? this.var_196 + "-" : "") + this.name_1.toString();
      }
      
      public function getHashSize() : uint
      {
         if(this.var_196 != 0)
         {
            return this.var_196 / 8;
         }
         return this.name_1.getHashSize();
      }
      
      public function method_806(param1:ByteArray, param2:ByteArray) : ByteArray
      {
         var _loc3_:ByteArray = null;
         if(param1.length > this.name_1.method_441())
         {
            _loc3_ = this.name_1.name_1(param1);
         }
         else
         {
            _loc3_ = new ByteArray();
            _loc3_.writeBytes(param1);
         }
         while(_loc3_.length < this.name_1.method_441())
         {
            _loc3_[_loc3_.length] = 0;
         }
         var _loc4_:ByteArray = new ByteArray();
         var _loc5_:ByteArray = new ByteArray();
         var _loc6_:uint = 0;
         while(_loc6_ < _loc3_.length)
         {
            _loc4_[_loc6_] = _loc3_[_loc6_] ^ 0x36;
            _loc5_[_loc6_] = _loc3_[_loc6_] ^ 0x5C;
            _loc6_++;
         }
         _loc4_.position = _loc3_.length;
         _loc4_.writeBytes(param2);
         var _loc7_:ByteArray = this.name_1.name_1(_loc4_);
         _loc5_.position = _loc3_.length;
         _loc5_.writeBytes(_loc7_);
         var _loc8_:ByteArray = this.name_1.name_1(_loc5_);
         if(this.var_196 > 0 && this.var_196 < 8 * _loc8_.length)
         {
            _loc8_.length = this.var_196 / 8;
         }
         return _loc8_;
      }
      
      public function dispose() : void
      {
         this.name_1 = null;
         this.var_196 = 0;
      }
   }
}

