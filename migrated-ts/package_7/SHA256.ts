// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_7

export class SHA256 extends class_31 implements class_17
   {
      
      protected static readonly k: any[] = [1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];
      protected h: any[] = [1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];
      constructor(){
         super();
      }
      
      public toString(): string
      {
         return "sha256";
      }
      
      public getHashSize(): number
      {
         return 32;
      }
      
      protected method_79(param1: number, param2: number): number
      {
         return param1 << 32 - param2 | param1 >>> param2;
      }
      
      protected core(param1: any[], param2: number): any[]
      {
         let _loc13_: number = 0;
         let _loc14_: number = 0;
         let _loc15_: number = 0;
         let _loc16_: number = 0;
         let _loc17_: number = 0;
         let _loc18_: number = 0;
         let _loc19_: number = 0;
         let _loc20_: number = 0;
         let _loc21_: number = 0;
         let _loc22_: number = 0;
         let _loc23_: number = 0;
         let _loc24_: number = 0;
         let _loc25_: number = 0;
         param1[param2 >> 5] |= 128 << 24 - param2 % 32;
         param1[(param2 + 64 >> 9 << 4) + 15] = param2;
         let _loc3_: any[] = [];
         let _loc4_: number = Math.floor(this.h[0]);
         let _loc5_: number = Math.floor(this.h[1]);
         let _loc6_: number = Math.floor(this.h[2]);
         let _loc7_: number = Math.floor(this.h[3]);
         let _loc8_: number = Math.floor(this.h[4]);
         let _loc9_: number = Math.floor(this.h[5]);
         let _loc10_: number = Math.floor(this.h[6]);
         let _loc11_: number = Math.floor(this.h[7]);
         0;
         while(0 < param1.length)
         {
            _loc13_ = _loc4_;
            _loc14_ = _loc5_;
            _loc15_ = _loc6_;
            _loc16_ = _loc7_;
            _loc17_ = _loc8_;
            _loc18_ = _loc9_;
            _loc19_ = _loc10_;
            _loc20_ = _loc11_;
            _loc21_ = 0;
            while(_loc21_ < 64)
            {
               if(_loc21_ < 16)
               {
                  _loc3_[_loc21_] = param1[0 + _loc21_] || 0;
               }
               else
               {
                  _loc24_ = Math.floor(this.method_79(_loc3_[_loc21_ - 15],7) ^ this.method_79(_loc3_[_loc21_ - 15],18) ^ _loc3_[_loc21_ - 15] >>> 3);
                  _loc25_ = Math.floor(this.method_79(_loc3_[_loc21_ - 2],17) ^ this.method_79(_loc3_[_loc21_ - 2],19) ^ _loc3_[_loc21_ - 2] >>> 10);
                  _loc3_[_loc21_] = _loc3_[_loc21_ - 16] + _loc24_ + _loc3_[_loc21_ - 7] + _loc25_;
               }
               _loc22_ = (this.method_79(_loc4_,2) ^ this.method_79(_loc4_,13) ^ this.method_79(_loc4_,22)) + (_loc4_ & _loc5_ ^ _loc4_ & _loc6_ ^ _loc5_ & _loc6_);
               _loc23_ = _loc11_ + (this.method_79(_loc8_,6) ^ this.method_79(_loc8_,11) ^ this.method_79(_loc8_,25)) + (_loc8_ & _loc9_ ^ _loc10_ & ~_loc8_) + k[_loc21_] + _loc3_[_loc21_];
               _loc11_ = _loc10_;
               _loc10_ = _loc9_;
               _loc9_ = _loc8_;
               _loc8_ = _loc7_ + _loc23_;
               _loc7_ = _loc6_;
               _loc6_ = _loc5_;
               _loc5_ = _loc4_;
               _loc4_ = _loc23_ + _loc22_;
               _loc21_++;
            }
            _loc4_ += _loc13_;
            _loc5_ += _loc14_;
            _loc6_ += _loc15_;
            _loc7_ += _loc16_;
            _loc8_ += _loc17_;
            _loc9_ += _loc18_;
            _loc10_ += _loc19_;
            _loc11_ += _loc20_;
            let _loc12_: number = 0 + 16;
         }
         return [_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_];
      }
   }
