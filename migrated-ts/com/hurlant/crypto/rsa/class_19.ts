// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.rsa

export class class_19{
      
      public dmp1: class_25;
      protected var_515: boolean;
      public d: class_25;
      public e: number;
      public dmq1: class_25;
      public n: class_25;
      public p: class_25;
      public q: class_25;
      protected var_489: boolean;
      public var_327: class_25;
      constructor(param1: class_25, param2: number, param3: class_25 = null as any, param4: class_25 = null as any, param5: class_25 = null as any, param6: class_25 = null as any, param7: class_25 = null as any, param8: class_25 = null as any){
         super();
         this.n = param1;
         this.e = param2;
         this.d = param3;
         this.p = param4;
         this.q = param5;
         this.dmp1 = param6;
         this.dmq1 = param7;
         this.var_327 = param8;
         this.var_489 = this.n != null && this.e != 0;
         this.var_515 = this.var_489 && this.d != null;
      }
      
      protected static method_219(param1: number, param2: class_26): class_25
      {
         if(param1 < 2)
         {
            return class_25.method_28(1);
         }
         let _loc3_: ByteArray = new ByteArray();
         param2.method_473(_loc3_,param1 >> 3);
         _loc3_.position = 0;
         let _loc4_: class_25 = new class_25(_loc3_);
         _loc4_.method_597(param1,1);
         return _loc4_;
      }
      
      public static method_659(param1: string, param2: string): class_19
      {
         return new class_19(new class_25(param1,16),parseInt(param2,16));
      }
      
      public static generate(param1: number, param2: string): class_19
      {
         let _loc7_: class_25 = null;
         let _loc8_: class_25 = null;
         let _loc9_: class_25 = null;
         let _loc10_: class_25 = null;
         let _loc3_: class_26 = new class_26();
         let _loc4_: number = Math.floor(param1 >> 1);
         let _loc5_: class_19 = new class_19(null,0,null);
         _loc5_.e = parseInt(param2,16);
         let _loc6_: class_25 = new class_25(param2,16);
         while(true)
         {
            _loc5_.p = method_219(param1 - _loc4_,_loc3_);
            if(_loc5_.p.method_95(class_25.const_4).method_279(_loc6_).method_16(class_25.const_4) == 0 && _loc5_.p.method_268(10))
            {
               do
               {
                  _loc5_.q = method_219(_loc4_,_loc3_);
               }
               while(!(_loc5_.q.method_95(class_25.const_4).method_279(_loc6_).method_16(class_25.const_4) == 0 && _loc5_.q.method_268(10)));
               if(_loc5_.p.method_16(_loc5_.q) <= 0)
               {
                  _loc10_ = _loc5_.p;
                  _loc5_.p = _loc5_.q;
                  _loc5_.q = _loc10_;
               }
               _loc7_ = _loc5_.p.method_95(class_25.const_4);
               _loc8_ = _loc5_.q.method_95(class_25.const_4);
               _loc9_ = _loc7_.method_120(_loc8_);
               if(_loc9_.method_279(_loc6_).method_16(class_25.const_4) == 0)
               {
                  break;
               }
            }
         }
         _loc5_.n = _loc5_.p.method_120(_loc5_.q);
         _loc5_.d = _loc6_.method_319(_loc9_);
         _loc5_.dmp1 = _loc5_.d.method_76(_loc7_);
         _loc5_.dmq1 = _loc5_.d.method_76(_loc8_);
         _loc5_.var_327 = _loc5_.q.method_319(_loc5_.p);
         return _loc5_;
      }
      
      public static method_838(param1: string, param2: string, param3: string, param4: string = null as any, param5: string = null as any, param6: string = null as any, param7: string = null as any, param8: string = null as any): class_19
      {
         if(param4 == null)
         {
            return new class_19(new class_25(param1,16),parseInt(param2,16),new class_25(param3,16));
         }
         return new class_19(new class_25(param1,16),parseInt(param2,16),new class_25(param3,16),new class_25(param4,16),new class_25(param5,16),new class_25(param6,16),new class_25(param7),new class_25(param8));
      }
      
      public method_850(param1: ByteArray, param2: ByteArray, param3: number, param4: Function = null as any): void
      {
         this.method_435(this.method_324,param1,param2,param3,param4,1);
      }
      
      protected doPrivate2(param1: class_25): class_25
      {
         if(this.p == null && this.q == null)
         {
            return param1.method_102(this.d,this.n);
         }
         let _loc2_: class_25 = param1.method_76(this.p).method_102(this.dmp1,this.p);
         let _loc3_: class_25 = param1.method_76(this.q).method_102(this.dmq1,this.q);
         while(_loc2_.method_16(_loc3_) < 0)
         {
            _loc2_ = _loc2_.add(this.p);
         }
         return _loc2_.method_95(_loc3_).method_120(this.var_327).method_76(this.p).method_120(this.q).add(_loc3_);
      }
      
      public method_852(): string
      {
         let _loc1_: string = "N=" + this.n.toString(16) + "\this.n" + "E=" + this.e.toString(16) + "\this.n";
         if(this.var_515)
         {
            _loc1_ += "D=" + this.d.toString(16) + "\this.n";
            if(this.p != null && this.q != null)
            {
               _loc1_ += "P=" + this.p.toString(16) + "\this.n";
               _loc1_ += "Q=" + this.q.toString(16) + "\this.n";
               _loc1_ += "DMP1=" + this.dmp1.toString(16) + "\this.n";
               _loc1_ += "DMQ1=" + this.dmq1.toString(16) + "\this.n";
               _loc1_ += "IQMP=" + this.var_327.toString(16) + "\this.n";
            }
         }
         return _loc1_;
      }
      
      public decrypt(param1: ByteArray, param2: ByteArray, param3: number, param4: Function = null as any): void
      {
         this.method_435(this.doPrivate2,param1,param2,param3,param4,2);
      }
      
      private method_435(param1: Function, param2: ByteArray, param3: ByteArray, param4: number, param5: Function, param6: number): void
      {
         let _loc9_: class_25 = null;
         let _loc10_: class_25 = null;
         let _loc11_: ByteArray = null;
         if(param5 == null)
         {
            param5 = this.pkcs1unpad;
         }
         if(param2.position >= param2.length)
         {
            param2.position = 0;
         }
         let _loc7_: number = this.method_53();
         let _loc8_: number = param2.position + param4;
         while(param2.position < _loc8_)
         {
            _loc9_ = new class_25(param2,param4);
            _loc10_ = param1(_loc9_);
            _loc11_ = param5(_loc10_,_loc7_);
            param3.writeBytes(_loc11_);
         }
      }
      
      protected method_324(param1: class_25): class_25
      {
         return param1.method_361(this.e,this.n);
      }
      
      public dispose(): void
      {
         this.e = 0;
         this.n.dispose();
         this.n = null;
         class_27.method_59();
      }
      
      private method_412(param1: Function, param2: ByteArray, param3: ByteArray, param4: number, param5: Function, param6: number): void
      {
         let _loc9_: class_25 = null;
         let _loc10_: class_25 = null;
         if(param5 == null)
         {
            param5 = this.pkcs1pad;
         }
         if(param2.position >= param2.length)
         {
            param2.position = 0;
         }
         let _loc7_: number = this.method_53();
         let _loc8_: number = param2.position + param4;
         while(param2.position < _loc8_)
         {
            _loc9_ = new class_25(param5(param2,_loc8_,_loc7_,param6),_loc7_);
            _loc10_ = param1(_loc9_);
            _loc10_.toArray(param3);
         }
      }
      
      private method_807(param1: ByteArray, param2: number, param3: number): ByteArray
      {
         return param1;
      }
      
      public encrypt(param1: ByteArray, param2: ByteArray, param3: number, param4: Function = null as any): void
      {
         this.method_412(this.method_324,param1,param2,param3,param4,2);
      }
      
      private pkcs1pad(param1: ByteArray, param2: number, param3: number, param4: number = 2): ByteArray
      {
         let _loc9_: number = 0;
         let _loc5_: ByteArray = new ByteArray();
         let _loc6_: number = param1.position;
         param2 = Math.min(param2,param1.length,_loc6_ + param3 - 11);
         param1.position = param2;
         let _loc7_: any = Math.floor(param2 - 1);
         while(_loc7_ >= _loc6_ && param3 > 11)
         {
            let _loc10_: number;
            _loc5_[_loc10_ = --param3] = param1[_loc7_--];
         }
         _loc5_[_loc10_ = --param3] = 0;
         let _loc8_: class_26 = new class_26();
         while(param3 > 2)
         {
            _loc9_ = 0;
            while(_loc9_ == 0)
            {
               _loc9_ = param4 == 2 ? _loc8_.method_68() : 255;
            }
            let _loc11_: number;
            _loc5_[_loc11_ = --param3] = _loc9_;
         }
         _loc5_[_loc11_ = --param3] = param4;
         let _loc12_: number;
         _loc5_[_loc12_ = --param3] = 0;
         return _loc5_;
      }
      
      private pkcs1unpad(param1: class_25, param2: number, param3: number = 2): ByteArray
      {
         let _loc4_: ByteArray = param1.method_575();
         let _loc5_: ByteArray = new ByteArray();
         let _loc6_: number = 0;
         while(_loc6_ < _loc4_.length && _loc4_[_loc6_] == 0)
         {
            _loc6_++;
         }
         if(_loc4_.length - _loc6_ != param2 - 1 || _loc4_[_loc6_] > 2)
         {
            return null;
         }
         _loc6_++;
         while(_loc4_[_loc6_] != 0)
         {
            if(++_loc6_ >= _loc4_.length)
            {
               return null;
            }
         }
         while(++_loc6_ < _loc4_.length)
         {
            _loc5_.writeByte(_loc4_[_loc6_]);
         }
         _loc5_.position = 0;
         return _loc5_;
      }
      
      public method_53(): number
      {
         return (this.n.method_298() + 7) / 8;
      }
      
      public toString(): string
      {
         return "rsa";
      }
      
      public method_779(param1: ByteArray, param2: ByteArray, param3: number, param4: Function = null as any): void
      {
         this.method_412(this.doPrivate2,param1,param2,param3,param4,1);
      }
      
      protected method_840(param1: class_25): class_25
      {
         if(this.p == null || this.q == null)
         {
            return param1.method_102(this.d,this.n);
         }
         let _loc2_: class_25 = param1.method_76(this.p).method_102(this.dmp1,this.p);
         let _loc3_: class_25 = param1.method_76(this.q).method_102(this.dmq1,this.q);
         while(_loc2_.method_16(_loc3_) < 0)
         {
            _loc2_ = _loc2_.add(this.p);
         }
         return _loc2_.method_95(_loc3_).method_120(this.var_327).method_76(this.p).method_120(this.q).add(_loc3_);
      }
   }
