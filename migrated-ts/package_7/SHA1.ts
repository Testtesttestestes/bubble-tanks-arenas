// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_7

export class SHA1 extends class_31 implements class_17
   {
      
      public static readonly const_8: number = 20;
      constructor(){
         super();
      }
      
      public toString(): string
      {
         return "sha1";
      }
      
      protected core(param1: any[], param2: number): any[]
      {
         let _loc10_: number = 0;
         let _loc11_: number = 0;
         let _loc12_: number = 0;
         let _loc13_: number = 0;
         let _loc14_: number = 0;
         let _loc15_: number = 0;
         let _loc16_: number = 0;
         param1[param2 >> 5] |= 128 << 24 - param2 % 32;
         param1[(param2 + 64 >> 9 << 4) + 15] = param2;
         let _loc3_: any[] = [];
         let _loc4_: number = 1732584193;
         let _loc5_: number = 4023233417;
         let _loc6_: number = 2562383102;
         let _loc7_: number = 271733878;
         let _loc8_: number = 3285377520;
         0;
         while(0 < param1.length)
         {
            _loc10_ = _loc4_;
            _loc11_ = _loc5_;
            _loc12_ = _loc6_;
            _loc13_ = _loc7_;
            _loc14_ = _loc8_;
            _loc15_ = 0;
            while(_loc15_ < 80)
            {
               if(_loc15_ < 16)
               {
                  _loc3_[_loc15_] = param1[0 + _loc15_] || 0;
               }
               else
               {
                  _loc3_[_loc15_] = this.method_255(_loc3_[_loc15_ - 3] ^ _loc3_[_loc15_ - 8] ^ _loc3_[_loc15_ - 14] ^ _loc3_[_loc15_ - 16],1);
               }
               _loc16_ = this.method_255(_loc4_,5) + this.method_639(_loc15_,_loc5_,_loc6_,_loc7_) + _loc8_ + _loc3_[_loc15_] + this.method_512(_loc15_);
               _loc8_ = _loc7_;
               _loc7_ = _loc6_;
               _loc6_ = this.method_255(_loc5_,30);
               _loc5_ = _loc4_;
               _loc4_ = _loc16_;
               _loc15_++;
            }
            _loc4_ += _loc10_;
            _loc5_ += _loc11_;
            _loc6_ += _loc12_;
            _loc7_ += _loc13_;
            _loc8_ += _loc14_;
            let _loc9_: number = 0 + 16;
         }
         return [_loc4_,_loc5_,_loc6_,_loc7_,_loc8_];
      }
      
      private method_512(param1: number): number
      {
         return param1 < 20 ? 1518500249 : (param1 < 40 ? 1859775393 : (param1 < 60 ? Math.floor(2400959708) : Math.floor(3395469782)));
      }
      
      public getHashSize(): number
      {
         return this.const_8;
      }
      
      private method_639(param1: number, param2: number, param3: number, param4: number): number
      {
         if(param1 < 20)
         {
            return param2 & param3 | ~param2 & param4;
         }
         if(param1 < 40)
         {
            return param2 ^ param3 ^ param4;
         }
         if(param1 < 60)
         {
            return param2 & param3 | param2 & param4 | param3 & param4;
         }
         return param2 ^ param3 ^ param4;
      }
      
      private method_255(param1: number, param2: number): number
      {
         return param1 << param2 | param1 >>> 32 - param2;
      }
   }
