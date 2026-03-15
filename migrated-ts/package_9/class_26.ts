// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_9

export class class_26{
      
      private var_523: boolean = false;
      private var_105: ByteArray;
      private var_540: boolean = false;
      private name_2: number;
      private state: class_24;
      private var_87: number;
      constructor(param1: any = null){
         let _loc2_: number = 0;
         super();
         if(param1 == null)
         {
            param1 = ARC4;
         }
         this.state = new param1()  as unknown as class_24;
         this.name_2 = this.state.method_752();
         this.var_105 = new ByteArray();
         this.var_87 = 0;
         while(this.var_87 < this.name_2)
         {
            _loc2_ = 65536 * Math.random();
            this.var_105[this.var_87++] = _loc2_ >>> 8;
            let _loc4_: number;
            this.var_105[_loc4_ = this.var_87++] = _loc2_ & 0xFF;
         }
         this.var_87 = 0;
         this.method_457();
      }
      
      public method_610(): void
      {
         let _loc3_: Font = null;
         let _loc1_: ByteArray = new ByteArray();
         _loc1_.writeUnsignedInt(System.totalMemory);
         _loc1_.writeUTF(Capabilities.serverString);
         _loc1_.writeUnsignedInt(getTimer());
         _loc1_.writeUnsignedInt(new Date().getTime());
         let _loc2_: any[] = Font.enumerateFonts(true);
         for (let _loc3_ of _loc2_)
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
      
      public method_457(param1: number = 0): void
      {
         if(param1 == 0)
         {
            param1 = new Date().getTime();
         }
         let _temp_3: any = this.var_105;
         let _loc2_: number = this.var_87++;
         _temp_3[_loc2_] ^= param1 & 0xFF;
         let _temp_6: any = this.var_105;
         let _loc3_: number = this.var_87++;
         _temp_6[_loc3_] ^= param1 >> 8 & 0xFF;
         let _loc4_: number;
         this.var_105[_loc4_ = this.var_87++] = this.var_105[_loc4_] ^ param1 >> 16 & 0xFF;
         let _loc5_: number;
         this.var_105[_loc5_ = this.var_87++] = this.var_105[_loc5_] ^ param1 >> 24 & 0xFF;
         this.var_87 %= this.name_2;
         this.var_540 = true;
      }
      
      public toString(): string
      {
         return "random-" + this.state.toString();
      }
      
      public dispose(): void
      {
         let _loc1_: number = 0;
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
      
      public method_473(param1: ByteArray, param2: number): void
      {
         while(param2--)
         {
            param1.writeByte(this.method_68());
         }
      }
      
      public method_68(): number
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
