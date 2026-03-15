package package_9
{
   import flash.system.Capabilities;
   import flash.system.System;
   import flash.text.Font;
   import flash.utils.ByteArray;
   import flash.utils.getTimer;
   import package_3.class_27;
   
   public class class_26
   {
      
      private var var_523:Boolean = false;
      
      private var var_105:ByteArray;
      
      private var var_540:Boolean = false;
      
      private var name_2:int;
      
      private var state:class_24;
      
      private var var_87:int;
      
      public function class_26(param1:Class = null)
      {
         var _loc2_:uint = 0;
         super();
         if(param1 == null)
         {
            param1 = ARC4;
         }
         this.state = new param1() as class_24;
         this.name_2 = this.state.method_752();
         this.var_105 = new ByteArray();
         this.var_87 = 0;
         while(this.var_87 < this.name_2)
         {
            _loc2_ = 65536 * Math.random();
            this.var_105[this.var_87++] = _loc2_ >>> 8;
            var _loc4_:Number;
            this.var_105[_loc4_ = this.var_87++] = _loc2_ & 0xFF;
         }
         this.var_87 = 0;
         this.method_457();
      }
      
      public function method_610() : void
      {
         var _loc3_:Font = null;
         var _loc1_:ByteArray = new ByteArray();
         _loc1_.writeUnsignedInt(System.totalMemory);
         _loc1_.writeUTF(Capabilities.serverString);
         _loc1_.writeUnsignedInt(getTimer());
         _loc1_.writeUnsignedInt(new Date().getTime());
         var _loc2_:Array = Font.enumerateFonts(true);
         for each(_loc3_ in _loc2_)
         {
            _loc1_.writeUTF(_loc3_.fontName);
            _loc1_.writeUTF(_loc3_.fontStyle);
            _loc1_.writeUTF(_loc3_.fontType);
         }
         _loc1_.position = 0;
         while(_loc1_.bytesAvailable >= 4)
         {
            this.method_457(_loc1_.readUnsignedInt());
         }
      }
      
      public function method_457(param1:int = 0) : void
      {
         if(param1 == 0)
         {
            param1 = new Date().getTime();
         }
         var _temp_3:* = this.var_105;
         var _loc2_:Number = this.var_87++;
         _temp_3[_loc2_] ^= param1 & 0xFF;
         var _temp_6:* = this.var_105;
         var _loc3_:Number = this.var_87++;
         _temp_6[_loc3_] ^= param1 >> 8 & 0xFF;
         var _loc4_:Number;
         this.var_105[_loc4_ = this.var_87++] = this.var_105[_loc4_] ^ param1 >> 16 & 0xFF;
         var _loc5_:Number;
         this.var_105[_loc5_ = this.var_87++] = this.var_105[_loc5_] ^ param1 >> 24 & 0xFF;
         this.var_87 %= this.name_2;
         this.var_540 = true;
      }
      
      public function toString() : String
      {
         return "random-" + this.state.toString();
      }
      
      public function dispose() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_105.length)
         {
            this.var_105[_loc1_] = Math.random() * 256;
            _loc1_++;
         }
         this.var_105.length = 0;
         this.var_105 = null;
         this.state.dispose();
         this.state = null;
         this.name_2 = 0;
         this.var_87 = 0;
         class_27.method_59();
      }
      
      public function method_473(param1:ByteArray, param2:int) : void
      {
         while(param2--)
         {
            param1.writeByte(this.method_68());
         }
      }
      
      public function method_68() : int
      {
         if(!this.var_523)
         {
            if(!this.var_540)
            {
               this.method_610();
            }
            this.state.init(this.var_105);
            this.var_105.length = 0;
            this.var_87 = 0;
            this.var_523 = true;
         }
         return this.state.method_601();
      }
   }
}

