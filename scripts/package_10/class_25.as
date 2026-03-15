package package_10
{
   import flash.utils.ByteArray;
   import package_3.class_13;
   import package_3.class_27;
   import package_9.class_26;
   
   use namespace bi_internal;
   
   public class class_25
   {
      
      public static const const_3:int = 30;
      
      public static const const_6:int = 1 << const_3;
      
      public static const const_5:int = const_6 - 1;
      
      public static const const_13:int = 52;
      
      public static const const_22:Number = Math.pow(2,const_13);
      
      public static const F1:int = const_13 - const_3;
      
      public static const F2:int = 2 * const_3 - const_13;
      
      public static const const_9:class_25 = method_28(0);
      
      public static const const_4:class_25 = method_28(1);
      
      public static const const_7:Array = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509];
      
      public static const const_21:int = (1 << 26) / const_7[const_7.length - 1];
      
      bi_internal var a:Array;
      
      bi_internal var s:int;
      
      public var t:int;
      
      public function class_25(param1:* = null, param2:int = 0)
      {
         var _loc3_:ByteArray = null;
         var _loc4_:int = 0;
         super();
         this.a = new Array();
         if(param1 is String)
         {
            param1 = class_13.toArray(param1);
            param2 = 0;
         }
         if(param1 is ByteArray)
         {
            _loc3_ = param1 as ByteArray;
            _loc4_ = int(param2 || int(_loc3_.length - _loc3_.position));
            this.method_52(_loc3_,_loc4_);
         }
      }
      
      public static function method_28(param1:int) : class_25
      {
         var _loc2_:class_25 = new class_25();
         _loc2_.method_194(param1);
         return _loc2_;
      }
      
      public function method_798(param1:int) : class_25
      {
         return this.method_233(param1,this.method_451);
      }
      
      private function method_245(param1:int, param2:int) : int
      {
         return param1 | param2;
      }
      
      public function method_175() : class_25
      {
         var _loc1_:class_25 = this.method_81();
         const_9.method_15(this,_loc1_);
         return _loc1_;
      }
      
      public function method_828(param1:class_25) : class_25
      {
         var _loc2_:class_25 = new class_25();
         this.method_116(param1,this.method_451,_loc2_);
         return _loc2_;
      }
      
      public function method_102(param1:class_25, param2:class_25) : class_25
      {
         var _loc4_:int = 0;
         var _loc6_:IReduction = null;
         var _loc12_:int = 0;
         null;
         var _loc16_:class_25 = null;
         var _loc3_:int = param1.method_298();
         var _loc5_:class_25 = method_28(1);
         if(_loc3_ <= 0)
         {
            return _loc5_;
         }
         if(_loc3_ < 18)
         {
            _loc4_ = 1;
         }
         else if(_loc3_ < 48)
         {
            _loc4_ = 3;
         }
         else if(_loc3_ < 144)
         {
            _loc4_ = 4;
         }
         else if(_loc3_ < 768)
         {
            _loc4_ = 5;
         }
         else
         {
            _loc4_ = 6;
         }
         if(_loc3_ < 8)
         {
            _loc6_ = new ClassicReduction(param2);
         }
         else if(param2.method_49())
         {
            _loc6_ = new BarrettReduction(param2);
         }
         else
         {
            _loc6_ = new MontgomeryReduction(param2);
         }
         var _loc7_:Array = [];
         var _loc8_:* = 3;
         var _loc9_:int = _loc4_ - 1;
         var _loc10_:int = (1 << _loc4_) - 1;
         _loc7_[1] = _loc6_.method_270(this);
         if(_loc4_ > 1)
         {
            _loc16_ = new class_25();
            _loc6_.method_131(_loc7_[1],_loc16_);
            while(_loc8_ <= _loc10_)
            {
               _loc7_[_loc8_] = new class_25();
               _loc6_.method_244(_loc16_,_loc7_[_loc8_ - 2],_loc7_[_loc8_]);
               _loc8_ += 2;
            }
         }
         var _loc11_:* = int(param1.t - 1);
         var _loc14_:class_25 = new class_25();
         _loc3_ = this.method_226(param1.a[_loc11_]) - 1;
         while(_loc11_ >= 0)
         {
            if(_loc3_ >= _loc9_)
            {
               _loc12_ = param1.a[_loc11_] >> _loc3_ - _loc9_ & _loc10_;
            }
            else
            {
               _loc12_ = (param1.a[_loc11_] & (1 << _loc3_ + 1) - 1) << _loc9_ - _loc3_;
               if(_loc11_ > 0)
               {
                  _loc12_ |= param1.a[_loc11_ - 1] >> const_3 + _loc3_ - _loc9_;
               }
            }
            _loc8_ = _loc4_;
            while((_loc12_ & 1) == 0)
            {
               _loc12_ >>= 1;
               _loc8_--;
            }
            _loc3_ = _loc3_ - _loc8_;
            if(_loc3_ < 0)
            {
               _loc3_ += const_3;
               _loc11_--;
            }
            _loc7_[_loc12_].copyTo(_loc5_);
            var _loc13_:Boolean = false;
            while(_loc11_ >= 0 && (param1.a[_loc11_] & 1 << _loc3_) == 0)
            {
               _loc6_.method_131(_loc5_,_loc14_);
               var _loc15_:class_25 = _loc5_;
               _loc5_ = _loc14_;
               _loc14_ = null;
               if(--_loc3_ < 0)
               {
                  _loc3_ = const_3 - 1;
                  _loc11_--;
               }
            }
         }
         return _loc6_.method_271(_loc5_);
      }
      
      public function method_268(param1:int) : Boolean
      {
         var _loc2_:* = 0;
         var _loc4_:int = 0;
         var _loc5_:* = 0;
         var _loc3_:class_25 = this.abs();
         if(_loc3_.t == 1 && _loc3_.a[0] <= const_7[const_7.length - 1])
         {
            _loc2_ = 0;
            while(_loc2_ < const_7.length)
            {
               if(_loc3_[0] == const_7[_loc2_])
               {
                  return true;
               }
               _loc2_++;
            }
            return false;
         }
         if(_loc3_.method_49())
         {
            return false;
         }
         _loc2_ = 1;
         while(_loc2_ < const_7.length)
         {
            _loc4_ = int(const_7[_loc2_]);
            _loc5_ = int(_loc2_ + 1);
            while(_loc5_ < const_7.length && _loc4_ < const_21)
            {
               _loc4_ *= const_7[_loc5_++];
            }
            _loc4_ = _loc3_.method_683(_loc4_);
            while(_loc2_ < _loc5_)
            {
               if(_loc4_ % const_7[_loc2_++] == 0)
               {
                  return false;
               }
            }
         }
         return _loc3_.method_655(param1);
      }
      
      public function divide(param1:class_25) : class_25
      {
         var _loc2_:class_25 = new class_25();
         this.divRemTo(param1,_loc2_,null);
         return _loc2_;
      }
      
      public function method_76(param1:class_25) : class_25
      {
         var _loc2_:class_25 = this.method_81();
         this.abs().divRemTo(param1,null,_loc2_);
         if(this.s < 0 && _loc2_.method_16(const_9) > 0)
         {
            param1.method_15(_loc2_,_loc2_);
         }
         return _loc2_;
      }
      
      protected function method_225(param1:class_25, param2:class_25) : void
      {
         var _loc3_:* = 0;
         var _loc4_:int = 0;
         var _loc5_:int = Math.min(param1.t,this.t);
         while(_loc3_ < _loc5_)
         {
            _loc4_ += this.a[_loc3_] + param1.a[_loc3_];
            var _loc6_:Number;
            param2.a[_loc6_ = _loc3_++] = _loc4_ & const_5;
            _loc4_ >>= const_3;
         }
         if(param1.t < this.t)
         {
            _loc4_ += param1.s;
            while(_loc3_ < this.t)
            {
               _loc4_ += this.a[_loc3_];
               param2.a[_loc6_ = _loc3_++] = _loc4_ & const_5;
               _loc4_ >>= const_3;
            }
            _loc4_ += this.s;
         }
         else
         {
            _loc4_ += this.s;
            while(_loc3_ < param1.t)
            {
               _loc4_ += param1.a[_loc3_];
               param2.a[_loc6_ = _loc3_++] = _loc4_ & const_5;
               _loc4_ >>= const_3;
            }
            _loc4_ += param1.s;
         }
         param2.s = _loc4_ < 0 ? -1 : 0;
         if(_loc4_ > 0)
         {
            param2.a[_loc6_ = _loc3_++] = _loc4_;
         }
         else if(_loc4_ < -1)
         {
            param2.a[_loc6_ = _loc3_++] = const_6 + _loc4_;
         }
         param2.t = _loc3_;
         param2.method_45();
      }
      
      protected function method_116(param1:class_25, param2:Function, param3:class_25) : void
      {
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc6_:int = Math.min(param1.t,this.t);
         _loc4_ = 0;
         while(_loc4_ < _loc6_)
         {
            param3.a[_loc4_] = param2(this.a[_loc4_],param1.a[_loc4_]);
            _loc4_++;
         }
         if(param1.t < this.t)
         {
            _loc5_ = param1.s & const_5;
            _loc4_ = _loc6_;
            while(_loc4_ < this.t)
            {
               param3.a[_loc4_] = param2(this.a[_loc4_],_loc5_);
               _loc4_++;
            }
            param3.t = this.t;
         }
         else
         {
            _loc5_ = this.s & const_5;
            _loc4_ = _loc6_;
            while(_loc4_ < param1.t)
            {
               param3.a[_loc4_] = param2(_loc5_,param1.a[_loc4_]);
               _loc4_++;
            }
            param3.t = param1.t;
         }
         param3.s = param2(this.s,param1.s);
         param3.method_45();
      }
      
      protected function method_683(param1:int) : int
      {
         var _loc4_:* = 0;
         if(param1 <= 0)
         {
            return 0;
         }
         var _loc2_:int = const_6 % param1;
         var _loc3_:int = this.s < 0 ? int(param1 - 1) : 0;
         if(this.t > 0)
         {
            if(_loc2_ == 0)
            {
               _loc3_ = this.a[0] % param1;
            }
            else
            {
               _loc4_ = int(this.t - 1);
               while(_loc4_ >= 0)
               {
                  _loc3_ = (_loc2_ * _loc3_ + this.a[_loc4_]) % param1;
                  _loc4_--;
               }
            }
         }
         return _loc3_;
      }
      
      protected function method_468(param1:Number) : int
      {
         return Math.floor(Math.LN2 * const_3 / Math.log(param1));
      }
      
      public function method_279(param1:class_25) : class_25
      {
         var _loc6_:class_25 = null;
         var _loc2_:class_25 = this.s < 0 ? this.method_175() : this.clone();
         var _loc3_:class_25 = param1.s < 0 ? param1.method_175() : param1.clone();
         if(_loc2_.method_16(_loc3_) < 0)
         {
            _loc6_ = _loc2_;
            _loc2_ = _loc3_;
            _loc3_ = _loc6_;
         }
         var _loc4_:int = _loc2_.method_150();
         var _loc5_:int = _loc3_.method_150();
         if(_loc5_ < 0)
         {
            return _loc2_;
         }
         if(_loc4_ < _loc5_)
         {
            _loc5_ = _loc4_;
         }
         if(_loc5_ > 0)
         {
            _loc2_.method_42(_loc5_,_loc2_);
            _loc3_.method_42(_loc5_,_loc3_);
         }
         while(_loc2_.sigNum() > 0)
         {
            _loc4_ = _loc2_.method_150();
            if(_loc4_ > 0)
            {
               _loc2_.method_42(_loc4_,_loc2_);
            }
            _loc4_ = _loc3_.method_150();
            if(_loc4_ > 0)
            {
               _loc3_.method_42(_loc4_,_loc3_);
            }
            if(_loc2_.method_16(_loc3_) >= 0)
            {
               _loc2_.method_15(_loc3_,_loc2_);
               _loc2_.method_42(1,_loc2_);
            }
            else
            {
               _loc3_.method_15(_loc2_,_loc3_);
               _loc3_.method_42(1,_loc3_);
            }
         }
         if(_loc5_ > 0)
         {
            _loc3_.method_158(_loc5_,_loc3_);
         }
         return _loc3_;
      }
      
      bi_internal function method_142(param1:int, param2:int) : void
      {
         while(this.t <= param2)
         {
            this.a[this.t++] = 0;
         }
         this.a[param2] += param1;
         while(this.a[param2] >= const_6)
         {
            this.a[param2] -= const_6;
            if(++param2 >= this.t)
            {
               this.a[this.t++] = 0;
            }
            ++this.a[param2];
         }
      }
      
      bi_internal function method_158(param1:int, param2:class_25) : void
      {
         var _loc8_:* = 0;
         var _loc3_:int = param1 % const_3;
         var _loc4_:int = const_3 - _loc3_;
         var _loc5_:int = (1 << _loc4_) - 1;
         var _loc6_:int = param1 / const_3;
         var _loc7_:int = this.s << _loc3_ & const_5;
         _loc8_ = int(this.t - 1);
         while(_loc8_ >= 0)
         {
            param2.a[_loc8_ + _loc6_ + 1] = this.a[_loc8_] >> _loc4_ | _loc7_;
            _loc7_ = (this.a[_loc8_] & _loc5_) << _loc3_;
            _loc8_--;
         }
         _loc8_ = int(_loc6_ - 1);
         while(_loc8_ >= 0)
         {
            param2.a[_loc8_] = 0;
            _loc8_--;
         }
         param2.a[_loc6_] = _loc7_;
         param2.t = this.t + _loc6_ + 1;
         param2.s = this.s;
         param2.method_45();
      }
      
      public function method_150() : int
      {
         var _loc1_:int = 0;
         while(_loc1_ < this.t)
         {
            if(this.a[_loc1_] != 0)
            {
               return _loc1_ * const_3 + this.method_749(this.a[_loc1_]);
            }
            _loc1_++;
         }
         if(this.s < 0)
         {
            return this.t * const_3;
         }
         return -1;
      }
      
      public function method_95(param1:class_25) : class_25
      {
         var _loc2_:class_25 = new class_25();
         this.method_15(param1,_loc2_);
         return _loc2_;
      }
      
      public function method_597(param1:int, param2:int) : void
      {
         if(!this.method_652(param1 - 1))
         {
            this.method_116(class_25.const_4.shiftLeft(param1 - 1),this.method_245,this);
         }
         if(this.method_49())
         {
            this.method_142(1,0);
         }
         while(!this.method_268(param2))
         {
            this.method_142(2,0);
            while(this.method_298() > param1)
            {
               this.method_15(class_25.const_4.shiftLeft(param1 - 1),this);
            }
         }
      }
      
      bi_internal function method_691(param1:class_25, param2:int, param3:class_25) : void
      {
         var _loc5_:int = 0;
         var _loc4_:int = Math.min(this.t + param1.t,param2);
         param3.s = 0;
         param3.t = _loc4_;
         while(_loc4_ > 0)
         {
            var _loc6_:int;
            param3.a[_loc6_ = --_loc4_] = 0;
         }
         _loc5_ = param3.t - this.t;
         while(_loc4_ < _loc5_)
         {
            param3.a[_loc4_ + this.t] = this.method_75(0,param1.a[_loc4_],param3,_loc4_,0,this.t);
            _loc4_++;
         }
         _loc5_ = Math.min(param1.t,param2);
         while(_loc4_ < _loc5_)
         {
            this.method_75(0,param1.a[_loc4_],param3,_loc4_,0,param2 - _loc4_);
            _loc4_++;
         }
         param3.method_45();
      }
      
      public function method_361(param1:int, param2:class_25) : class_25
      {
         var _loc3_:IReduction = null;
         if(param1 < 256 || param2.method_49())
         {
            _loc3_ = new ClassicReduction(param2);
         }
         else
         {
            _loc3_ = new MontgomeryReduction(param2);
         }
         return this.method_318(param1,_loc3_);
      }
      
      bi_internal function method_548(param1:String, param2:int) : int
      {
         return parseInt(param1.charAt(param2),36);
      }
      
      public function method_652(param1:int) : Boolean
      {
         var _loc2_:int = Math.floor(param1 / const_3);
         if(_loc2_ >= this.t)
         {
            return this.s != 0;
         }
         return (this.a[_loc2_] & 1 << param1 % const_3) != 0;
      }
      
      bi_internal function method_318(param1:int, param2:IReduction) : class_25
      {
         var _loc7_:class_25 = null;
         if(param1 > 4294967295 || param1 < 1)
         {
            return const_4;
         }
         var _loc3_:class_25 = this.method_81();
         var _loc4_:class_25 = this.method_81();
         var _loc5_:class_25 = param2.method_270(this);
         var _loc6_:int = this.method_226(param1) - 1;
         _loc5_.copyTo(_loc3_);
         while(--_loc6_ >= 0)
         {
            param2.method_131(_loc3_,_loc4_);
            if((param1 & 1 << _loc6_) > 0)
            {
               param2.method_244(_loc4_,_loc5_,_loc3_);
            }
            else
            {
               _loc7_ = _loc3_;
               _loc3_ = _loc4_;
               _loc4_ = _loc7_;
            }
         }
         return param2.method_271(_loc3_);
      }
      
      public function toArray(param1:ByteArray) : uint
      {
         int((1 << 8) - 1);
         var _loc4_:int = 0;
         var _loc5_:* = this.t;
         var _loc6_:int = const_3 - _loc5_ * const_3 % 8;
         var _loc7_:Boolean = false;
         var _loc8_:int = 0;
         if(_loc5_-- > 0)
         {
            if(_loc6_ < const_3 && (_loc4_ = this.a[_loc5_] >> _loc6_) > 0)
            {
               _loc7_ = true;
               param1.writeByte(_loc4_);
               _loc8_++;
            }
            while(_loc5_ >= 0)
            {
               if(_loc6_ < 8)
               {
                  _loc4_ = (this.a[_loc5_] & (1 << _loc6_) - 1) << 8 - _loc6_;
                  _loc4_ = _loc4_ | this.a[--_loc5_] >> (_loc6_ = _loc6_ + (const_3 - 8));
               }
               else
               {
                  _loc4_ = this.a[_loc5_] >> (_loc6_ = _loc6_ - 8) & _loc3_;
                  if(_loc6_ <= 0)
                  {
                     _loc6_ += const_3;
                     _loc5_--;
                  }
               }
               if(_loc4_ > 0)
               {
                  _loc7_ = true;
               }
               if(_loc7_)
               {
                  param1.writeByte(_loc4_);
                  _loc8_++;
               }
            }
         }
         return _loc8_;
      }
      
      public function dispose() : void
      {
         var _loc1_:class_26 = new class_26();
         var _loc2_:uint = 0;
         while(_loc2_ < this.a.length)
         {
            this.a[_loc2_] = _loc1_.method_68();
            delete this.a[_loc2_];
            _loc2_++;
         }
         this.a = null;
         this.t = 0;
         this.s = 0;
         class_27.method_59();
      }
      
      private function method_749(param1:int) : int
      {
         if(param1 == 0)
         {
            return -1;
         }
         var _loc2_:int = 0;
         if((param1 & 0xFFFF) == 0)
         {
            param1 >>= 16;
            _loc2_ += 16;
         }
         if((param1 & 0xFF) == 0)
         {
            param1 >>= 8;
            _loc2_ += 8;
         }
         if((param1 & 0x0F) == 0)
         {
            param1 >>= 4;
            _loc2_ += 4;
         }
         if((param1 & 3) == 0)
         {
            param1 >>= 2;
            _loc2_ += 2;
         }
         if((param1 & 1) == 0)
         {
            _loc2_++;
         }
         return _loc2_;
      }
      
      bi_internal function divRemTo(param1:class_25, param2:class_25 = null, param3:class_25 = null) : void
      {
         var y:class_25;
         var nsh:int;
         var pt:class_25;
         var d1:Number;
         var d2:Number;
         var y0:int;
         var yt:Number;
         var ys:int;
         var e:Number;
         var ms:int;
         var j:int;
         var i:int;
         var t:class_25;
         var ts:int;
         var qd:int = 0;
         var m:class_25 = param1;
         var q:class_25 = param2;
         var r:class_25 = param3;
         var pm:class_25 = m.abs();
         if(pm.t <= 0)
         {
            return;
         }
         pt = this.abs();
         if(pt.t < pm.t)
         {
            if(q != null)
            {
               q.method_194(0);
            }
            if(r != null)
            {
               this.copyTo(r);
            }
            return;
         }
         if(r == null)
         {
            r = this.method_81();
         }
         y = this.method_81();
         ts = this.s;
         ms = m.s;
         nsh = const_3 - this.method_226(pm.a[pm.t - 1]);
         if(nsh > 0)
         {
            pm.method_158(nsh,y);
            pt.method_158(nsh,r);
         }
         else
         {
            pm.copyTo(y);
            pt.copyTo(r);
         }
         ys = y.t;
         y0 = int(y.a[ys - 1]);
         if(y0 == 0)
         {
            return;
         }
         yt = y0 * (1 << F1) + (ys > 1 ? y.a[ys - 2] >> F2 : 0);
         d1 = const_22 / yt;
         d2 = (1 << F1) / yt;
         e = 1 << F2;
         i = r.t;
         j = i - ys;
         t = q == null ? this.method_81() : q;
         y.method_144(j,t);
         if(r.method_16(t) >= 0)
         {
            var _loc5_:Number;
            r.a[_loc5_ = r.t++] = 1;
            r.method_15(t,r);
         }
         const_4.method_144(ys,t);
         t.method_15(y,y);
         while(y.t < ys)
         {
            y.(++y.t,false);
         }
         while(--j >= 0)
         {
            qd = r.a[--i] == y0 ? const_5 : int(Number(r.a[i]) * d1 + (Number(r.a[i - 1]) + e) * d2);
            if((r.a[i] = r.a[i] + y.method_75(0,qd,r,j,0,ys)) < qd)
            {
               y.method_144(j,t);
               r.method_15(t,r);
               while(r.a[i] < --qd)
               {
                  r.method_15(t,r);
               }
            }
         }
         if(q != null)
         {
            r.method_227(ys,q);
            if(ts != ms)
            {
               const_9.method_15(q,q);
            }
         }
         r.t = ys;
         r.method_45();
         if(nsh > 0)
         {
            r.method_42(nsh,r);
         }
         if(ts < 0)
         {
            const_9.method_15(r,r);
         }
      }
      
      public function method_841(param1:class_25) : class_25
      {
         var _loc2_:class_25 = new class_25();
         this.divRemTo(param1,null,_loc2_);
         return _loc2_;
      }
      
      bi_internal function method_540(param1:class_25, param2:int, param3:class_25) : void
      {
         param2--;
         var _loc4_:int = param3.t = this.t + param1.t - param2;
         param3.s = 0;
         while(--_loc4_ >= 0)
         {
            param3.a[_loc4_] = 0;
         }
         _loc4_ = Math.max(param2 - this.t,0);
         while(_loc4_ < param1.t)
         {
            param3.a[this.t + _loc4_ - param2] = this.method_75(param2 - _loc4_,param1.a[_loc4_],param3,0,0,this.t + _loc4_ - param2);
            _loc4_++;
         }
         param3.method_45();
         param3.method_227(1,param3);
      }
      
      public function divideAndRemainder(param1:class_25) : Array
      {
         var _loc2_:class_25 = new class_25();
         var _loc3_:class_25 = new class_25();
         this.divRemTo(param1,_loc2_,_loc3_);
         return [_loc2_,_loc3_];
      }
      
      public function method_839() : Number
      {
         var _loc1_:Number = 1;
         var _loc2_:Number = 0;
         var _loc3_:uint = 0;
         while(_loc3_ < this.t)
         {
            _loc2_ += this.a[_loc3_] * _loc1_;
            _loc1_ *= const_6;
            _loc3_++;
         }
         return _loc2_;
      }
      
      public function shiftLeft(param1:int) : class_25
      {
         var _loc2_:class_25 = new class_25();
         if(param1 < 0)
         {
            this.method_42(-param1,_loc2_);
         }
         else
         {
            this.method_158(param1,_loc2_);
         }
         return _loc2_;
      }
      
      public function method_120(param1:class_25) : class_25
      {
         var _loc2_:class_25 = new class_25();
         this.method_139(param1,_loc2_);
         return _loc2_;
      }
      
      bi_internal function method_75(param1:int, param2:int, param3:class_25, param4:int, param5:int, param6:int) : int
      {
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         var _loc11_:int = 0;
         var _loc7_:int = param2 & 0x7FFF;
         var _loc8_:int = param2 >> 15;
         while(--param6 >= 0)
         {
            _loc9_ = this.a[param1] & 0x7FFF;
            _loc10_ = this.a[param1++] >> 15;
            _loc11_ = _loc8_ * _loc9_ + _loc10_ * _loc7_;
            _loc9_ = _loc7_ * _loc9_ + ((_loc11_ & 0x7FFF) << 15) + param3.a[param4] + (param5 & 0x3FFFFFFF);
            param5 = (_loc9_ >>> 30) + (_loc11_ >>> 15) + _loc8_ * _loc10_ + (param5 >>> 30);
            var _loc12_:Number;
            param3.a[_loc12_ = param4++] = _loc9_ & 0x3FFFFFFF;
         }
         return param5;
      }
      
      bi_internal function method_227(param1:int, param2:class_25) : void
      {
         var _loc3_:int = 0;
         _loc3_ = param1;
         while(_loc3_ < this.t)
         {
            param2.a[_loc3_ - param1] = this.a[_loc3_];
            _loc3_++;
         }
         param2.t = Math.max(this.t - param1,0);
         param2.s = this.s;
      }
      
      public function add(param1:class_25) : class_25
      {
         var _loc2_:class_25 = new class_25();
         this.method_225(param1,_loc2_);
         return _loc2_;
      }
      
      protected function method_81() : *
      {
         return new class_25();
      }
      
      protected function method_655(param1:int) : Boolean
      {
         var _loc7_:class_25 = null;
         var _loc8_:* = 0;
         var _loc2_:class_25 = this.method_95(class_25.const_4);
         var _loc3_:int = _loc2_.method_150();
         if(_loc3_ <= 0)
         {
            return false;
         }
         var _loc4_:class_25 = _loc2_.shiftRight(_loc3_);
         param1 = param1 + 1 >> 1;
         if(param1 > const_7.length)
         {
            param1 = int(const_7.length);
         }
         var _loc5_:class_25 = new class_25();
         var _loc6_:int = 0;
         while(_loc6_ < param1)
         {
            _loc5_.method_194(const_7[_loc6_]);
            _loc7_ = _loc5_.method_102(_loc4_,this);
            if(_loc7_.method_16(class_25.const_4) != 0 && _loc7_.method_16(_loc2_) != 0)
            {
               _loc8_ = 1;
               while(_loc8_++ < _loc3_ && _loc7_.method_16(_loc2_) != 0)
               {
                  _loc7_ = _loc7_.method_361(2,this);
                  if(_loc7_.method_16(class_25.const_4) == 0)
                  {
                     return false;
                  }
               }
               if(_loc7_.method_16(_loc2_) != 0)
               {
                  return false;
               }
            }
            _loc6_++;
         }
         return true;
      }
      
      bi_internal function method_353(param1:int) : void
      {
         this.a[this.t] = this.method_75(0,param1 - 1,this,0,0,this.t);
         ++this.t;
         this.method_45();
      }
      
      private function method_451(param1:int, param2:int) : int
      {
         return param1 & ~param2;
      }
      
      bi_internal function method_45() : void
      {
         var _loc1_:int = this.s & const_5;
         while(this.t > 0 && this.a[this.t - 1] == _loc1_)
         {
            --this.t;
         }
      }
      
      bi_internal function method_561() : int
      {
         if(this.t < 1)
         {
            return 0;
         }
         var _loc1_:int = int(this.a[0]);
         if((_loc1_ & 1) == 0)
         {
            return 0;
         }
         var _loc2_:int = _loc1_ & 3;
         _loc2_ = _loc2_ * (2 - (_loc1_ & 0x0F) * _loc2_) & 0x0F;
         _loc2_ = _loc2_ * (2 - (_loc1_ & 0xFF) * _loc2_) & 0xFF;
         _loc2_ = _loc2_ * (2 - ((_loc1_ & 0xFFFF) * _loc2_ & 0xFFFF)) & 0xFFFF;
         _loc2_ = _loc2_ * (2 - _loc1_ * _loc2_ % const_6) % const_6;
         return _loc2_ > 0 ? int(const_6 - _loc2_) : int(-_loc2_);
      }
      
      protected function method_233(param1:int, param2:Function) : class_25
      {
         var _loc3_:class_25 = class_25.const_4.shiftLeft(param1);
         this.method_116(_loc3_,param2,_loc3_);
         return _loc3_;
      }
      
      public function method_786(param1:class_25) : Boolean
      {
         return this.method_16(param1) == 0;
      }
      
      public function method_16(param1:class_25) : int
      {
         var _loc2_:int = this.s - param1.s;
         if(_loc2_ != 0)
         {
            return _loc2_;
         }
         var _loc3_:int = this.t;
         _loc2_ = _loc3_ - param1.t;
         if(_loc2_ != 0)
         {
            return _loc2_;
         }
         while(--_loc3_ >= 0)
         {
            _loc2_ = this.a[_loc3_] - param1.a[_loc3_];
            if(_loc2_ != 0)
            {
               return _loc2_;
            }
         }
         return 0;
      }
      
      public function shiftRight(param1:int) : class_25
      {
         var _loc2_:class_25 = new class_25();
         if(param1 < 0)
         {
            this.method_158(-param1,_loc2_);
         }
         else
         {
            this.method_42(param1,_loc2_);
         }
         return _loc2_;
      }
      
      bi_internal function method_139(param1:class_25, param2:class_25) : void
      {
         var _loc3_:class_25 = this.abs();
         var _loc4_:class_25 = param1.abs();
         var _loc5_:int = _loc3_.t;
         param2.t = _loc5_ + _loc4_.t;
         while(--_loc5_ >= 0)
         {
            param2.a[_loc5_] = 0;
         }
         _loc5_ = 0;
         while(_loc5_ < _loc4_.t)
         {
            param2.a[_loc5_ + _loc3_.t] = _loc3_.method_75(0,_loc4_.a[_loc5_],param2,_loc5_,0,_loc3_.t);
            _loc5_++;
         }
         param2.s = 0;
         param2.method_45();
         if(this.s != param1.s)
         {
            const_9.method_15(param2,param2);
         }
      }
      
      public function method_833() : int
      {
         var _loc1_:int = 0;
         var _loc2_:int = this.s & const_5;
         var _loc3_:int = 0;
         while(_loc3_ < this.t)
         {
            _loc1_ += this.method_672(this.a[_loc3_] ^ _loc2_);
            _loc3_++;
         }
         return _loc1_;
      }
      
      protected function method_804(param1:uint = 10) : String
      {
         if(this.sigNum() == 0 || param1 < 2 || param1 > 32)
         {
            return "0";
         }
         var _loc2_:int = this.method_468(param1);
         var _loc3_:Number = Math.pow(param1,_loc2_);
         var _loc4_:class_25 = method_28(_loc3_);
         var _loc5_:class_25 = this.method_81();
         var _loc6_:class_25 = this.method_81();
         var _loc7_:String = "";
         this.divRemTo(_loc4_,_loc5_,_loc6_);
         while(_loc5_.sigNum() > 0)
         {
            _loc7_ = (_loc3_ + _loc6_.method_421()).toString(param1).substr(1) + _loc7_;
            _loc5_.divRemTo(_loc4_,_loc5_,_loc6_);
         }
         return _loc6_.method_421().toString(param1) + _loc7_;
      }
      
      private function method_672(param1:int) : int
      {
         var _loc2_:uint = 0;
         while(param1 != 0)
         {
            param1 &= param1 - 1;
            _loc2_++;
         }
         return _loc2_;
      }
      
      bi_internal function method_42(param1:int, param2:class_25) : void
      {
         var _loc7_:int = 0;
         param2.s = this.s;
         var _loc3_:int = param1 / const_3;
         if(_loc3_ >= this.t)
         {
            param2.t = 0;
            return;
         }
         var _loc4_:int = param1 % const_3;
         var _loc5_:int = const_3 - _loc4_;
         var _loc6_:int = (1 << _loc4_) - 1;
         param2.a[0] = this.a[_loc3_] >> _loc4_;
         _loc7_ = _loc3_ + 1;
         while(_loc7_ < this.t)
         {
            param2.a[_loc7_ - _loc3_ - 1] |= (this.a[_loc7_] & _loc6_) << _loc5_;
            param2.a[_loc7_ - _loc3_] = this.a[_loc7_] >> _loc4_;
            _loc7_++;
         }
         if(_loc4_ > 0)
         {
            param2.a[this.t - _loc3_ - 1] |= (this.s & _loc6_) << _loc5_;
         }
         param2.t = this.t - _loc3_;
         param2.method_45();
      }
      
      public function method_319(param1:class_25) : class_25
      {
         var _loc2_:Boolean = param1.method_49();
         if(this.method_49() && _loc2_ || param1.sigNum() == 0)
         {
            return class_25.const_9;
         }
         var _loc3_:class_25 = param1.clone();
         var _loc4_:class_25 = this.clone();
         var _loc5_:class_25 = method_28(1);
         var _loc6_:class_25 = method_28(0);
         var _loc7_:class_25 = method_28(0);
         var _loc8_:class_25 = method_28(1);
         while(_loc3_.sigNum() != 0)
         {
            while(_loc3_.method_49())
            {
               _loc3_.method_42(1,_loc3_);
               if(_loc2_)
               {
                  if(!_loc5_.method_49() || !_loc6_.method_49())
                  {
                     _loc5_.method_225(this,_loc5_);
                     _loc6_.method_15(param1,_loc6_);
                  }
                  _loc5_.method_42(1,_loc5_);
               }
               else if(!_loc6_.method_49())
               {
                  _loc6_.method_15(param1,_loc6_);
               }
               _loc6_.method_42(1,_loc6_);
            }
            while(_loc4_.method_49())
            {
               _loc4_.method_42(1,_loc4_);
               if(_loc2_)
               {
                  if(!_loc7_.method_49() || !_loc8_.method_49())
                  {
                     _loc7_.method_225(this,_loc7_);
                     _loc8_.method_15(param1,_loc8_);
                  }
                  _loc7_.method_42(1,_loc7_);
               }
               else if(!_loc8_.method_49())
               {
                  _loc8_.method_15(param1,_loc8_);
               }
               _loc8_.method_42(1,_loc8_);
            }
            if(_loc3_.method_16(_loc4_) >= 0)
            {
               _loc3_.method_15(_loc4_,_loc3_);
               if(_loc2_)
               {
                  _loc5_.method_15(_loc7_,_loc5_);
               }
               _loc6_.method_15(_loc8_,_loc6_);
            }
            else
            {
               _loc4_.method_15(_loc3_,_loc4_);
               if(_loc2_)
               {
                  _loc7_.method_15(_loc5_,_loc7_);
               }
               _loc8_.method_15(_loc6_,_loc8_);
            }
         }
         if(_loc4_.method_16(class_25.const_4) != 0)
         {
            return class_25.const_9;
         }
         if(_loc8_.method_16(param1) >= 0)
         {
            return _loc8_.method_95(param1);
         }
         if(_loc8_.sigNum() < 0)
         {
            _loc8_.method_225(param1,_loc8_);
            if(_loc8_.sigNum() < 0)
            {
               return _loc8_.add(param1);
            }
            return _loc8_;
         }
         return _loc8_;
      }
      
      bi_internal function method_52(param1:ByteArray, param2:int) : void
      {
         var _loc7_:int = 0;
         var _loc3_:int = int(param1.position);
         var _loc4_:int = _loc3_ + param2;
         var _loc5_:int = 0;
         this.t = 0;
         this.s = 0;
         while(--_loc4_ >= _loc3_)
         {
            _loc7_ = _loc4_ < param1.length ? int(param1[_loc4_]) : 0;
            if(_loc5_ == 0)
            {
               var _loc8_:Number;
               this.a[_loc8_ = this.t++] = _loc7_;
            }
            else if(_loc5_ + 8 > const_3)
            {
               this.a[this.t - 1] |= (_loc7_ & (1 << const_3 - _loc5_) - 1) << _loc5_;
               this.a[_loc8_ = this.t++] = _loc7_ >> const_3 - _loc5_;
            }
            else
            {
               this.a[this.t - 1] |= _loc7_ << _loc5_;
            }
            _loc5_ += 8;
            if(_loc5_ >= const_3)
            {
               _loc5_ -= const_3;
            }
         }
         this.method_45();
         param1.position = Math.min(_loc3_ + param2,param1.length);
      }
      
      bi_internal function copyTo(param1:class_25) : void
      {
         var _loc2_:* = int(this.t - 1);
         while(_loc2_ >= 0)
         {
            param1.a[_loc2_] = this.a[_loc2_];
            _loc2_--;
         }
         param1.t = this.t;
         param1.s = this.s;
      }
      
      public function method_421() : int
      {
         if(this.s < 0)
         {
            if(this.t == 1)
            {
               return this.a[0] - const_6;
            }
            if(this.t == 0)
            {
               return -1;
            }
         }
         else
         {
            if(this.t == 1)
            {
               return this.a[0];
            }
            if(this.t == 0)
            {
               return 0;
            }
         }
         return (this.a[1] & (1 << 32 - const_3) - 1) << const_3 | this.a[0];
      }
      
      public function min(param1:class_25) : class_25
      {
         return this.method_16(param1) < 0 ? this : param1;
      }
      
      public function method_298() : int
      {
         if(this.t <= 0)
         {
            return 0;
         }
         return const_3 * (this.t - 1) + this.method_226(this.a[this.t - 1] ^ this.s & const_5);
      }
      
      public function method_831() : int
      {
         return this.t == 0 ? this.s : this.a[0] << 16 >> 16;
      }
      
      public function method_848(param1:class_25) : class_25
      {
         var _loc2_:class_25 = new class_25();
         this.method_116(param1,this.method_747,_loc2_);
         return _loc2_;
      }
      
      public function method_824() : int
      {
         return this.t == 0 ? this.s : this.a[0] << 24 >> 24;
      }
      
      public function method_790() : class_25
      {
         var _loc1_:class_25 = new class_25();
         var _loc2_:int = 0;
         while(_loc2_ < this.t)
         {
            _loc1_[_loc2_] = const_5 & ~this.a[_loc2_];
            _loc2_++;
         }
         _loc1_.t = this.t;
         _loc1_.s = ~this.s;
         return _loc1_;
      }
      
      bi_internal function method_15(param1:class_25, param2:class_25) : void
      {
         var _loc3_:* = 0;
         var _loc4_:int = 0;
         var _loc5_:int = Math.min(param1.t,this.t);
         while(_loc3_ < _loc5_)
         {
            _loc4_ += this.a[_loc3_] - param1.a[_loc3_];
            var _loc6_:Number;
            param2.a[_loc6_ = _loc3_++] = _loc4_ & const_5;
            _loc4_ >>= const_3;
         }
         if(param1.t < this.t)
         {
            _loc4_ -= param1.s;
            while(_loc3_ < this.t)
            {
               _loc4_ += this.a[_loc3_];
               param2.a[_loc6_ = _loc3_++] = _loc4_ & const_5;
               _loc4_ >>= const_3;
            }
            _loc4_ += this.s;
         }
         else
         {
            _loc4_ += this.s;
            while(_loc3_ < param1.t)
            {
               _loc4_ -= param1.a[_loc3_];
               param2.a[_loc6_ = _loc3_++] = _loc4_ & const_5;
               _loc4_ >>= const_3;
            }
            _loc4_ -= param1.s;
         }
         param2.s = _loc4_ < 0 ? -1 : 0;
         if(_loc4_ < -1)
         {
            param2.a[_loc6_ = _loc3_++] = const_6 + _loc4_;
         }
         else if(_loc4_ > 0)
         {
            param2.a[_loc6_ = _loc3_++] = _loc4_;
         }
         param2.t = _loc3_;
         param2.method_45();
      }
      
      public function clone() : class_25
      {
         var _loc1_:class_25 = new class_25();
         this.copyTo(_loc1_);
         return _loc1_;
      }
      
      public function pow(param1:int) : class_25
      {
         return this.method_318(param1,new NullReduction());
      }
      
      public function method_845(param1:int) : class_25
      {
         return this.method_233(param1,this.method_308);
      }
      
      public function method_810(param1:class_25) : class_25
      {
         var _loc2_:class_25 = new class_25();
         this.method_116(param1,this.method_308,_loc2_);
         return _loc2_;
      }
      
      public function method_822(param1:class_25) : class_25
      {
         var _loc2_:class_25 = new class_25();
         this.method_116(param1,this.method_245,_loc2_);
         return _loc2_;
      }
      
      public function max(param1:class_25) : class_25
      {
         return this.method_16(param1) > 0 ? this : param1;
      }
      
      bi_internal function method_194(param1:int) : void
      {
         this.t = 1;
         this.s = param1 < 0 ? -1 : 0;
         if(param1 > 0)
         {
            this.a[0] = param1;
         }
         else if(param1 < -1)
         {
            this.a[0] = param1 + const_6;
         }
         else
         {
            this.t = 0;
         }
      }
      
      bi_internal function method_49() : Boolean
      {
         return (this.t > 0 ? this.a[0] & 1 : this.s) == 0;
      }
      
      public function toString(param1:Number = 16) : String
      {
         var _loc2_:int = 0;
         if(this.s < 0)
         {
            return "-" + this.method_175().toString(param1);
         }
         switch(param1)
         {
            case 2:
               _loc2_ = 1;
               break;
            case 4:
               _loc2_ = 2;
               break;
            case 8:
               _loc2_ = 3;
               break;
            case 16:
               _loc2_ = 4;
               break;
            case 32:
               _loc2_ = 5;
         }
         var _loc3_:int = (1 << _loc2_) - 1;
         var _loc4_:int = 0;
         var _loc5_:Boolean = false;
         var _loc6_:String = "";
         var _loc7_:* = this.t;
         var _loc8_:int = const_3 - _loc7_ * const_3 % _loc2_;
         if(_loc7_-- > 0)
         {
            if(_loc8_ < const_3 && (_loc4_ = this.a[_loc7_] >> _loc8_) > 0)
            {
               _loc5_ = true;
               _loc6_ = _loc4_.toString(36);
            }
            while(_loc7_ >= 0)
            {
               if(_loc8_ < _loc2_)
               {
                  _loc4_ = (this.a[_loc7_] & (1 << _loc8_) - 1) << _loc2_ - _loc8_;
                  _loc4_ = _loc4_ | this.a[--_loc7_] >> (_loc8_ = _loc8_ + (const_3 - _loc2_));
               }
               else
               {
                  _loc4_ = this.a[_loc7_] >> (_loc8_ = _loc8_ - _loc2_) & _loc3_;
                  if(_loc8_ <= 0)
                  {
                     _loc8_ += const_3;
                     _loc7_--;
                  }
               }
               if(_loc4_ > 0)
               {
                  _loc5_ = true;
               }
               if(_loc5_)
               {
                  _loc6_ += _loc4_.toString(36);
               }
            }
         }
         return _loc5_ ? _loc6_ : "0";
      }
      
      public function method_823(param1:int) : class_25
      {
         return this.method_233(param1,this.method_245);
      }
      
      public function abs() : class_25
      {
         return this.s < 0 ? this.method_175() : this;
      }
      
      bi_internal function method_226(param1:int) : int
      {
         var _loc3_:int = 0;
         var _loc2_:int = 1;
         _loc3_ = param1 >>> 16;
         if(_loc3_ != 0)
         {
            param1 = _loc3_;
            _loc2_ += 16;
         }
         _loc3_ = param1 >> 8;
         if(_loc3_ != 0)
         {
            param1 = _loc3_;
            _loc2_ += 8;
         }
         _loc3_ = param1 >> 4;
         if(_loc3_ != 0)
         {
            param1 = _loc3_;
            _loc2_ += 4;
         }
         _loc3_ = param1 >> 2;
         if(_loc3_ != 0)
         {
            param1 = _loc3_;
            _loc2_ += 2;
         }
         _loc3_ = param1 >> 1;
         if(_loc3_ != 0)
         {
            param1 = _loc3_;
            _loc2_ += 1;
         }
         return _loc2_;
      }
      
      public function sigNum() : int
      {
         if(this.s < 0)
         {
            return -1;
         }
         if(this.t <= 0 || this.t == 1 && this.a[0] <= 0)
         {
            return 0;
         }
         return 1;
      }
      
      public function method_575() : ByteArray
      {
         var _loc4_:int = 0;
         var _loc1_:* = this.t;
         var _loc2_:ByteArray = new ByteArray();
         _loc2_[0] = this.s;
         var _loc3_:int = const_3 - _loc1_ * const_3 % 8;
         var _loc5_:* = 0;
         if(_loc1_-- > 0)
         {
            if(_loc3_ < const_3 && (_loc4_ = this.a[_loc1_] >> _loc3_) != (this.s & const_5) >> _loc3_)
            {
               var _loc6_:Number;
               _loc2_[_loc6_ = _loc5_++] = _loc4_ | this.s << const_3 - _loc3_;
            }
            while(_loc1_ >= 0)
            {
               if(_loc3_ < 8)
               {
                  _loc4_ = (this.a[_loc1_] & (1 << _loc3_) - 1) << 8 - _loc3_;
                  _loc4_ = _loc4_ | this.a[--_loc1_] >> (_loc3_ = _loc3_ + (const_3 - 8));
               }
               else
               {
                  _loc4_ = this.a[_loc1_] >> (_loc3_ = _loc3_ - 8) & 0xFF;
                  if(_loc3_ <= 0)
                  {
                     _loc3_ += const_3;
                     _loc1_--;
                  }
               }
               if((_loc4_ & 0x80) != 0)
               {
                  _loc4_ |= -256;
               }
               if(_loc5_ == 0 && (this.s & 0x80) != (_loc4_ & 0x80))
               {
                  _loc5_++;
               }
               if(_loc5_ > 0 || _loc4_ != this.s)
               {
                  _loc2_[_loc6_ = _loc5_++] = _loc4_;
               }
            }
         }
         return _loc2_;
      }
      
      bi_internal function method_224(param1:class_25) : void
      {
         var _loc4_:int = 0;
         var _loc2_:class_25 = this.abs();
         var _loc3_:int = param1.t = 2 * _loc2_.t;
         while(--_loc3_ >= 0)
         {
            param1.a[_loc3_] = 0;
         }
         _loc3_ = 0;
         while(_loc3_ < _loc2_.t - 1)
         {
            _loc4_ = _loc2_.method_75(_loc3_,_loc2_.a[_loc3_],param1,2 * _loc3_,0,1);
            if((param1.a[_loc3_ + _loc2_.t] = param1.a[_loc3_ + _loc2_.t] + _loc2_.method_75(_loc3_ + 1,2 * _loc2_.a[_loc3_],param1,2 * _loc3_ + 1,_loc4_,_loc2_.t - _loc3_ - 1)) >= const_6)
            {
               param1.a[_loc3_ + _loc2_.t] -= const_6;
               param1.a[_loc3_ + _loc2_.t + 1] = 1;
            }
            _loc3_++;
         }
         if(param1.t > 0)
         {
            param1.a[param1.t - 1] += _loc2_.method_75(_loc3_,_loc2_.a[_loc3_],param1,2 * _loc3_,0,1);
         }
         param1.s = 0;
         param1.method_45();
      }
      
      private function method_747(param1:int, param2:int) : int
      {
         return param1 & param2;
      }
      
      protected function method_851(param1:String, param2:int = 10) : void
      {
         var _loc9_:int = 0;
         this.method_194(0);
         var _loc3_:int = this.method_468(param2);
         var _loc4_:Number = Math.pow(param2,_loc3_);
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         while(_loc8_ < param1.length)
         {
            _loc9_ = this.method_548(param1,_loc8_);
            if(_loc9_ < 0)
            {
               if(param1.charAt(_loc8_) == "-" && this.sigNum() == 0)
               {
                  var _loc5_:Boolean = true;
               }
            }
            else
            {
               _loc7_ = param2 * _loc7_ + _loc9_;
               if(++_loc6_ >= _loc3_)
               {
                  this.method_353(_loc4_);
                  this.method_142(_loc7_,0);
                  _loc6_ = 0;
                  _loc7_ = 0;
               }
            }
            _loc8_++;
         }
         if(_loc6_ > 0)
         {
            this.method_353(Math.pow(param2,_loc6_));
            this.method_142(_loc7_,0);
         }
      }
      
      bi_internal function method_144(param1:int, param2:class_25) : void
      {
         var _loc3_:* = 0;
         _loc3_ = int(this.t - 1);
         while(_loc3_ >= 0)
         {
            param2.a[_loc3_ + param1] = this.a[_loc3_];
            _loc3_--;
         }
         _loc3_ = int(param1 - 1);
         while(_loc3_ >= 0)
         {
            param2.a[_loc3_] = 0;
            _loc3_--;
         }
         param2.t = this.t + param1;
         param2.s = this.s;
      }
      
      private function method_308(param1:int, param2:int) : int
      {
         return param1 ^ param2;
      }
   }
}

