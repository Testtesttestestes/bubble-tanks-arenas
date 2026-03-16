// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.math

export class BigInteger{
      
      this.public static readonly DB: number = 30;
      this.public static readonly DV: number = 1 << this.DB;
      this.public static readonly DM: number = this.DV - 1;
      this.public static readonly BI_FP: number = 52;
      this.public static readonly FV: number = Math.pow(2,this.BI_FP);
      this.public static readonly F1: number = this.BI_FP - this.DB;
      this.public static readonly F2: number = 2 * this.DB - this.BI_FP;
      this.public static readonly ZERO: BigInteger = nbv(0);
      this.public static readonly ONE: BigInteger = nbv(1);
      this.public static readonly lowprimes: any[] = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509];
      this.public static readonly lplim: number = (1 << 26) / this.lowprimes[this.lowprimes.length - 1];
      this.public a: any[];
      this.public s: number;
      this.public t: number;
      constructor(value: any = null, radix: number = 0){
         let array: ByteArray = null;
         let length: number = 0;
         super();
         this.public::this.a = new Array();
         if(value instanceof String)
         {
            value = Hex.toArray(value);
            radix = 0;
         }
         if(value instanceof ByteArray)
         {
            array = value  as unknown as ByteArray;
            length = Math.floor(radix || int(array.length - array.position));
            this.public::fromArray(array,length);
         }
      }
      
      this.public static nbv(value: number): BigInteger
      {
         let bn: BigInteger = null;
         bn = new BigInteger();
         bn.fromInt(value);
         return bn;
      }
      
      this.public clearBit(n: number): BigInteger
      {
         return changeBit(n,op_andnot);
      }
      
      this.public negate(): BigInteger
      {
         let r: BigInteger = null;
         r = nbi();
         this.ZERO.subTo(this,r);
         return r;
      }
      
      this.public andNot(this.a: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         bitwiseTo(this.a,op_andnot,r);
         return r;
      }
      
      this.public modPow(e: BigInteger, m: BigInteger): BigInteger
      {
         let i: number = 0;
         let k: number = 0;
         let r: BigInteger = null;
         let z: IReduction = null;
         let g: any[] = null;
         let n: number = 0;
         let k1: number = 0;
         let km: number = 0;
         let j: number = 0;
         let w: number = 0;
         let is1: boolean = false;
         let r2: BigInteger = null;
         let t: BigInteger = null;
         let g2: BigInteger = null;
         i = e.bitLength();
         r = nbv(1);
         if(i <= 0)
         {
            return r;
         }
         if(i < 18)
         {
            k = 1;
         }
         else if(i < 48)
         {
            k = 3;
         }
         else if(i < 144)
         {
            k = 4;
         }
         else if(i < 768)
         {
            k = 5;
         }
         else
         {
            k = 6;
         }
         if(i < 8)
         {
            z = new ClassicReduction(m);
         }
         else if(m.isEven())
         {
            z = new BarrettReduction(m);
         }
         else
         {
            z = new MontgomeryReduction(m);
         }
         g = [];
         n = 3;
         k1 = k - 1;
         km = (1 << k) - 1;
         g[1] = z.convert(this);
         if(k > 1)
         {
            g2 = new BigInteger();
            z.sqrTo(g[1],g2);
            while(n <= km)
            {
               g[n] = new BigInteger();
               z.mulTo(g2,g[n - 2],g[n]);
               n += 2;
            }
         }
         j = e.t - 1;
         is1 = true;
         r2 = new BigInteger();
         i = nbits(e.a[j]) - 1;
         while(j >= 0)
         {
            if(i >= k1)
            {
               w = e.a[j] >> i - k1 & km;
            }
            else
            {
               w = (e.a[j] & (1 << i + 1) - 1) << k1 - i;
               if(j > 0)
               {
                  w |= e.a[j - 1] >> this.DB + i - k1;
               }
            }
            n = k;
            while((w & 1) == 0)
            {
               w >>= 1;
               n--;
            }
            i = i - n;
            if(i < 0)
            {
               i += this.DB;
               j--;
            }
            if(is1)
            {
               g[w].copyTo(r);
               is1 = false;
            }
            else
            {
               while(n > 1)
               {
                  z.sqrTo(r,r2);
                  z.sqrTo(r2,r);
                  n -= 2;
               }
               if(n > 0)
               {
                  z.sqrTo(r,r2);
               }
               else
               {
                  this.t = r;
                  r = r2;
                  r2 = this.t;
               }
               z.mulTo(r2,g[w],r);
            }
            while(j >= 0 && (e.a[j] & 1 << i) == 0)
            {
               z.sqrTo(r,r2);
               this.t = r;
               r = r2;
               r2 = this.t;
               if(--i < 0)
               {
                  i = this.DB - 1;
                  j--;
               }
            }
         }
         return z.revert(r);
      }
      
      this.public isProbablePrime(this.t: number): boolean
      {
         let i: number = 0;
         let x: BigInteger = null;
         let m: number = 0;
         let j: number = 0;
         x = abs();
         if(x.t == 1 && x.a[0] <= this.lowprimes[this.lowprimes.length - 1])
         {
            for(i = 0; i < this.lowprimes.length; i++)
            {
               if(x[0] == this.lowprimes[i])
               {
                  return true;
               }
            }
            return false;
         }
         if(x.isEven())
         {
            return false;
         }
         i = 1;
         while(i < this.lowprimes.length)
         {
            m = Math.floor(this.lowprimes[i]);
            j = i + 1;
            while(j < this.lowprimes.length && m < this.lplim)
            {
               m *= this.lowprimes[j++];
            }
            m = x.modInt(m);
            while(i < j)
            {
               if(m % this.lowprimes[i++] == 0)
               {
                  return false;
               }
            }
         }
         return x.millerRabin(this.t);
      }
      
      private op_or(x: number, y: number): number
      {
         return x | y;
      }
      
      this.public mod(v: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         r = nbi();
         abs().divRemTo(v,null,r);
         if(this.s < 0 && r.compareTo(this.ZERO) > 0)
         {
            v.subTo(r,r);
         }
         return r;
      }
      
      protected addTo(this.a: BigInteger, r: BigInteger): void
      {
         let i: number = 0;
         let c: number = 0;
         let m: number = 0;
         i = 0;
         c = 0;
         m = Math.min(this.a.t,this.t);
         while(i < m)
         {
            c += this.a[i] + this.a.a[i];
            r.a[i++] = c & this.DM;
            c >>= this.DB;
         }
         if(this.a.t < this.t)
         {
            c += this.a.s;
            while(i < this.t)
            {
               c += this.a[i];
               r.a[i++] = c & this.DM;
               c >>= this.DB;
            }
            c += this.s;
         }
         else
         {
            c += this.s;
            while(i < this.a.t)
            {
               c += this.a.a[i];
               r.a[i++] = c & this.DM;
               c >>= this.DB;
            }
            c += this.a.s;
         }
         r.s = c < 0 ? -1 : 0;
         if(c > 0)
         {
            r.a[i++] = c;
         }
         else if(c < -1)
         {
            r.a[i++] = this.DV + c;
         }
         r.t = i;
         r.clamp();
      }
      
      protected bitwiseTo(this.a: BigInteger, op: Function, r: BigInteger): void
      {
         let i: number = 0;
         let f: number = 0;
         let m: number = 0;
         m = Math.min(this.a.t,this.t);
         for(i = 0; i < m; i++)
         {
            r.a[i] = op(this.a[i],this.a.a[i]);
         }
         if(this.a.t < this.t)
         {
            f = this.a.s & this.DM;
            for(i = m; i < this.t; i++)
            {
               r.a[i] = op(this.a[i],f);
            }
            r.t = this.t;
         }
         else
         {
            f = this.s & this.DM;
            for(i = m; i < this.a.t; i++)
            {
               r.a[i] = op(f,this.a.a[i]);
            }
            r.t = this.a.t;
         }
         r.s = op(this.s,this.a.s);
         r.clamp();
      }
      
      protected modInt(n: number): number
      {
         let d: number = 0;
         let r: number = 0;
         let i: number = 0;
         if(n <= 0)
         {
            return 0;
         }
         d = this.DV % n;
         r = this.s < 0 ? Math.floor(n - 1) : 0;
         if(this.t > 0)
         {
            if(d == 0)
            {
               r = this.a[0] % n;
            }
            else
            {
               for(i = this.t - 1; i >= 0; i--)
               {
                  r = (d * r + this.a[i]) % n;
               }
            }
         }
         return r;
      }
      
      protected chunkSize(r: number): number
      {
         return Math.floor(Math.LN2 * this.DB / Math.log(r));
      }
      
      this.public dAddOffset(n: number, w: number): void
      {
         while(this.t <= w)
         {
            this.a[this.t++] = 0;
         }
         this.a[w] += n;
         while(this.a[w] >= this.DV)
         {
            this.a[w] -= this.DV;
            if(++w >= this.t)
            {
               this.a[this.t++] = 0;
            }
            ++this.a[w];
         }
      }
      
      this.public lShiftTo(n: number, r: BigInteger): void
      {
         let bs: number = 0;
         let cbs: number = 0;
         let bm: number = 0;
         let ds: number = 0;
         let c: number = 0;
         let i: number = 0;
         bs = n % this.DB;
         cbs = this.DB - bs;
         bm = (1 << cbs) - 1;
         ds = n / this.DB;
         c = this.s << bs & this.DM;
         for(i = this.t - 1; i >= 0; i--)
         {
            r.a[i + ds + 1] = this.a[i] >> cbs | c;
            c = (this.a[i] & bm) << bs;
         }
         for(i = ds - 1; i >= 0; i--)
         {
            r.a[i] = 0;
         }
         r.a[ds] = c;
         r.t = this.t + ds + 1;
         r.s = this.s;
         r.clamp();
      }
      
      this.public getLowestSetBit(): number
      {
         let i: number = 0;
         for(i = 0; i < this.t; i++)
         {
            if(this.a[i] != 0)
            {
               return i * this.DB + lbit(this.a[i]);
            }
         }
         if(this.s < 0)
         {
            return this.t * this.DB;
         }
         return -1;
      }
      
      this.public subtract(this.a: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         subTo(this.a,r);
         return r;
      }
      
      this.public primify(bits: number, this.t: number): void
      {
         if(!testBit(bits - 1))
         {
            bitwiseTo(BigInteger.ONE.shiftLeft(bits - 1),op_or,this);
         }
         if(isEven())
         {
            dAddOffset(1,0);
         }
         while(!isProbablePrime(this.t))
         {
            for(dAddOffset(2,0); bitLength() > bits; )
            {
               subTo(BigInteger.ONE.shiftLeft(bits - 1),this);
            }
         }
      }
      
      this.public gcd(this.a: BigInteger): BigInteger
      {
         let x: BigInteger = null;
         let y: BigInteger = null;
         let i: number = 0;
         let g: number = 0;
         let t: BigInteger = null;
         x = this.s < 0 ? negate() : clone();
         y = this.a.s < 0 ? this.a.negate() : this.a.clone();
         if(x.compareTo(y) < 0)
         {
            this.t = x;
            x = y;
            y = this.t;
         }
         i = x.getLowestSetBit();
         g = y.getLowestSetBit();
         if(g < 0)
         {
            return x;
         }
         if(i < g)
         {
            g = i;
         }
         if(g > 0)
         {
            x.rShiftTo(g,x);
            y.rShiftTo(g,y);
         }
         while(x.sigNum() > 0)
         {
            i = x.getLowestSetBit();
            if(i > 0)
            {
               x.rShiftTo(i,x);
            }
            i = y.getLowestSetBit();
            if(i > 0)
            {
               y.rShiftTo(i,y);
            }
            if(x.compareTo(y) >= 0)
            {
               x.subTo(y,x);
               x.rShiftTo(1,x);
            }
            else
            {
               y.subTo(x,y);
               y.rShiftTo(1,y);
            }
         }
         if(g > 0)
         {
            y.lShiftTo(g,y);
         }
         return y;
      }
      
      this.public multiplyLowerTo(this.a: BigInteger, n: number, r: BigInteger): void
      {
         let i: number = 0;
         let j: number = 0;
         i = Math.min(this.t + this.a.t,n);
         r.s = 0;
         r.t = i;
         while(i > 0)
         {
            r.a[--i] = 0;
         }
         for(j = r.t - this.t; i < j; i++)
         {
            r.a[i + this.t] = am(0,this.a.a[i],r,i,0,this.t);
         }
         for(j = Math.min(this.a.t,n); i < j; i++)
         {
            am(0,this.a.a[i],r,i,0,n - i);
         }
         r.clamp();
      }
      
      this.public modPowInt(e: number, m: BigInteger): BigInteger
      {
         let z: IReduction = null;
         if(e < 256 || m.isEven())
         {
            z = new ClassicReduction(m);
         }
         else
         {
            z = new MontgomeryReduction(m);
         }
         return exp(e,z);
      }
      
      this.public intAt(str: string, index: number): number
      {
         return parseInt(str.charAt(index),36);
      }
      
      this.public testBit(n: number): boolean
      {
         let j: number = 0;
         j = Math.floor(n / this.DB);
         if(j >= this.t)
         {
            return this.s != 0;
         }
         return (this.a[j] & 1 << n % this.DB) != 0;
      }
      
      this.public exp(e: number, z: IReduction): BigInteger
      {
         let r: BigInteger = null;
         let r2: BigInteger = null;
         let g: BigInteger = null;
         let i: number = 0;
         let t: BigInteger = null;
         if(e > 4294967295 || e < 1)
         {
            return this.ONE;
         }
         r = nbi();
         r2 = nbi();
         g = z.convert(this);
         i = nbits(e) - 1;
         g.copyTo(r);
         while(--i >= 0)
         {
            z.sqrTo(r,r2);
            if((e & 1 << i) > 0)
            {
               z.mulTo(r2,g,r);
            }
            else
            {
               this.t = r;
               r = r2;
               r2 = this.t;
            }
         }
         return z.revert(r);
      }
      
      this.public toArray(array: ByteArray): number
      {
         let k: number = 0;
         let km: number = 0;
         let d: number = 0;
         let i: number = 0;
         let p: number = 0;
         let m: boolean = false;
         let c: number = 0;
         k = 8;
         km = (1 << 8) - 1;
         d = 0;
         i = this.t;
         p = this.DB - i * this.DB % k;
         m = false;
         c = 0;
         if(i-- > 0)
         {
            if(p < this.DB && (d = this.a[i] >> p) > 0)
            {
               m = true;
               array.writeByte(d);
               c++;
            }
            while(i >= 0)
            {
               if(p < k)
               {
                  d = (this.a[i] & (1 << p) - 1) << k - p;
                  d |= this.a[--i] >> (p = p + (this.DB - k));
               }
               else
               {
                  d = this.a[i] >> (p = p - k) & km;
                  if(p <= 0)
                  {
                     p += this.DB;
                     i--;
                  }
               }
               if(d > 0)
               {
                  m = true;
               }
               if(m)
               {
                  array.writeByte(d);
                  c++;
               }
            }
         }
         return c;
      }
      
      this.public dispose(): void
      {
         let r: Random = null;
         let i: number = 0;
         r = new Random();
         for(i = 0; i < this.a.length; i++)
         {
            this.a[i] = r.nextByte();
            delete this.a[i];
         }
         this.a = null;
         this.t = 0;
         this.s = 0;
         Memory.gc();
      }
      
      private lbit(x: number): number
      {
         let r: number = 0;
         if(x == 0)
         {
            return -1;
         }
         r = 0;
         if((x & 0xFFFF) == 0)
         {
            x >>= 16;
            r += 16;
         }
         if((x & 0xFF) == 0)
         {
            x >>= 8;
            r += 8;
         }
         if((x & 0x0F) == 0)
         {
            x >>= 4;
            r += 4;
         }
         if((x & 3) == 0)
         {
            x >>= 2;
            r += 2;
         }
         if((x & 1) == 0)
         {
            r++;
         }
         return r;
      }
      
      this.public divRemTo(m: BigInteger, q: BigInteger = null as any, r: BigInteger = null as any): void
      {
         let pm: BigInteger = null;
         let pt: BigInteger = null;
         let y: BigInteger = null;
         let ts: number = 0;
         let ms: number = 0;
         let nsh: number = 0;
         let ys: number = 0;
         let y0: number = 0;
         let yt: number = NaN;
         let d1: number = NaN;
         let d2: number = NaN;
         let e: number = NaN;
         let i: number = 0;
         let j: number = 0;
         let t: BigInteger = null;
         let qd: number = 0;
         pm = m.abs();
         if(pm.t <= 0)
         {
            return;
         }
         pt = abs();
         if(pt.t < pm.t)
         {
            if(q != null)
            {
               q.fromInt(0);
            }
            if(r != null)
            {
               copyTo(r);
            }
            return;
         }
         if(r == null)
         {
            r = nbi();
         }
         y = nbi();
         ts = this.s;
         ms = m.s;
         nsh = this.DB - nbits(pm.a[pm.t - 1]);
         if(nsh > 0)
         {
            pm.lShiftTo(nsh,y);
            pt.lShiftTo(nsh,r);
         }
         else
         {
            pm.copyTo(y);
            pt.copyTo(r);
         }
         ys = y.t;
         y0 = Math.floor(y.a[ys - 1]);
         if(y0 == 0)
         {
            return;
         }
         yt = y0 * (1 << this.F1) + (ys > 1 ? y.a[ys - 2] >> this.F2 : 0);
         d1 = this.FV / yt;
         d2 = (1 << this.F1) / yt;
         e = 1 << this.F2;
         i = r.t;
         j = i - ys;
         this.t = q == null ? nbi() : q;
         y.dlShiftTo(j,this.t);
         if(r.compareTo(this.t) >= 0)
         {
            r.a[r.t++] = 1;
            r.subTo(this.t,r);
         }
         this.ONE.dlShiftTo(ys,this.t);
         for(this.t.subTo(y,y); y.t < ys; )
         {
            y._filter(++y.t,0);
         }
         while(--j >= 0)
         {
            qd = r.a[--i] == y0 ? this.DM : Math.floor(Number(r.a[i]) * d1 + (Number(r.a[i - 1]) + e) * d2);
            if((r.a[i] = r.a[i] + y.am(0,qd,r,j,0,ys)) < qd)
            {
               y.dlShiftTo(j,this.t);
               r.subTo(this.t,r);
               while(r.a[i] < --qd)
               {
                  r.subTo(this.t,r);
               }
            }
         }
         if(q != null)
         {
            r.drShiftTo(ys,q);
            if(ts != ms)
            {
               this.ZERO.subTo(q,q);
            }
         }
         r.t = ys;
         r.clamp();
         if(nsh > 0)
         {
            r.rShiftTo(nsh,r);
         }
         if(ts < 0)
         {
            this.ZERO.subTo(r,r);
         }
      }
      
      this.public remainder(this.a: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         divRemTo(this.a,null,r);
         return r;
      }
      
      this.public divide(this.a: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         divRemTo(this.a,r,null);
         return r;
      }
      
      this.public divideAndRemainder(this.a: BigInteger): any[]
      {
         let q: BigInteger = null;
         let r: BigInteger = null;
         q = new BigInteger();
         r = new BigInteger();
         divRemTo(this.a,q,r);
         return [q,r];
      }
      
      this.public valueOf(): number
      {
         let coef: number = NaN;
         let value: number = NaN;
         let i: number = 0;
         coef = 1;
         value = 0;
         for(i = 0; i < this.t; i++)
         {
            value += this.a[i] * coef;
            coef *= this.DV;
         }
         return value;
      }
      
      this.public shiftLeft(n: number): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         if(n < 0)
         {
            rShiftTo(-n,r);
         }
         else
         {
            lShiftTo(n,r);
         }
         return r;
      }
      
      this.public multiply(this.a: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         multiplyTo(this.a,r);
         return r;
      }
      
      this.public am(i: number, x: number, w: BigInteger, j: number, c: number, n: number): number
      {
         let xl: number = 0;
         let xh: number = 0;
         let l: number = 0;
         let h: number = 0;
         let m: number = 0;
         xl = x & 0x7FFF;
         xh = x >> 15;
         while(--n >= 0)
         {
            l = this.a[i] & 0x7FFF;
            h = this.a[i++] >> 15;
            m = xh * l + h * xl;
            l = xl * l + ((m & 0x7FFF) << 15) + w.a[j] + (c & 0x3FFFFFFF);
            c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
            w.a[j++] = l & 0x3FFFFFFF;
         }
         return c;
      }
      
      this.public drShiftTo(n: number, r: BigInteger): void
      {
         let i: number = 0;
         for(i = n; i < this.t; i++)
         {
            r.a[i - n] = this.a[i];
         }
         r.t = Math.max(this.t - n,0);
         r.s = this.s;
      }
      
      this.public add(this.a: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         addTo(this.a,r);
         return r;
      }
      
      this.public multiplyUpperTo(this.a: BigInteger, n: number, r: BigInteger): void
      {
         let i: number = 0;
         n--;
         i = r.t = this.t + this.a.t - n;
         r.s = 0;
         while(--i >= 0)
         {
            r.a[i] = 0;
         }
         for(i = Math.max(n - this.t,0); i < this.a.t; i++)
         {
            r.a[this.t + i - n] = am(n - i,this.a.a[i],r,0,0,this.t + i - n);
         }
         r.clamp();
         r.drShiftTo(1,r);
      }
      
      protected nbi(): any
      {
         return new BigInteger();
      }
      
      protected millerRabin(this.t: number): boolean
      {
         let n1: BigInteger = null;
         let k: number = 0;
         let r: BigInteger = null;
         let a: BigInteger = null;
         let i: number = 0;
         let y: BigInteger = null;
         let j: number = 0;
         n1 = subtract(BigInteger.ONE);
         k = n1.getLowestSetBit();
         if(k <= 0)
         {
            return false;
         }
         r = n1.shiftRight(k);
         this.t = this.t + 1 >> 1;
         if(this.t > this.lowprimes.length)
         {
            this.t = Math.floor(this.lowprimes.length);
         }
         this.a = new BigInteger();
         for(i = 0; i < this.t; i++)
         {
            this.a.fromInt(this.lowprimes[i]);
            y = this.a.modPow(r,this);
            if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0)
            {
               j = 1;
               while(j++ < k && y.compareTo(n1) != 0)
               {
                  y = y.modPowInt(2,this);
                  if(y.compareTo(BigInteger.ONE) == 0)
                  {
                     return false;
                  }
               }
               if(y.compareTo(n1) != 0)
               {
                  return false;
               }
            }
         }
         return true;
      }
      
      this.public dMultiply(n: number): void
      {
         this.a[this.t] = am(0,n - 1,this,0,0,this.t);
         ++this.t;
         clamp();
      }
      
      private op_andnot(x: number, y: number): number
      {
         return x & ~y;
      }
      
      this.public clamp(): void
      {
         let c: number = 0;
         c = this.s & this.DM;
         while(this.t > 0 && this.a[this.t - 1] == c)
         {
            --this.t;
         }
      }
      
      this.public invDigit(): number
      {
         let x: number = 0;
         let y: number = 0;
         if(this.t < 1)
         {
            return 0;
         }
         x = Math.floor(this.a[0]);
         if((x & 1) == 0)
         {
            return 0;
         }
         y = x & 3;
         y = y * (2 - (x & 0x0F) * y) & 0x0F;
         y = y * (2 - (x & 0xFF) * y) & 0xFF;
         y = y * (2 - ((x & 0xFFFF) * y & 0xFFFF)) & 0xFFFF;
         y = y * (2 - x * y % this.DV) % this.DV;
         return y > 0 ? Math.floor(this.DV - y) : Math.floor(-y);
      }
      
      protected changeBit(n: number, op: Function): BigInteger
      {
         let r: BigInteger = null;
         r = BigInteger.ONE.shiftLeft(n);
         bitwiseTo(r,op,r);
         return r;
      }
      
      this.public equals(this.a: BigInteger): boolean
      {
         return compareTo(this.a) == 0;
      }
      
      this.public compareTo(v: BigInteger): number
      {
         let r: number = 0;
         let i: number = 0;
         r = this.s - v.s;
         if(r != 0)
         {
            return r;
         }
         i = this.t;
         r = i - v.t;
         if(r != 0)
         {
            return r;
         }
         while(--i >= 0)
         {
            r = this.a[i] - v.a[i];
            if(r != 0)
            {
               return r;
            }
         }
         return 0;
      }
      
      this.public shiftRight(n: number): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         if(n < 0)
         {
            lShiftTo(-n,r);
         }
         else
         {
            rShiftTo(n,r);
         }
         return r;
      }
      
      this.public multiplyTo(v: BigInteger, r: BigInteger): void
      {
         let x: BigInteger = null;
         let y: BigInteger = null;
         let i: number = 0;
         x = abs();
         y = v.abs();
         i = x.t;
         r.t = i + y.t;
         while(--i >= 0)
         {
            r.a[i] = 0;
         }
         for(i = 0; i < y.t; i++)
         {
            r.a[i + x.t] = x.am(0,y.a[i],r,i,0,x.t);
         }
         r.s = 0;
         r.clamp();
         if(this.s != v.s)
         {
            this.ZERO.subTo(r,r);
         }
      }
      
      this.public bitCount(): number
      {
         let r: number = 0;
         let x: number = 0;
         let i: number = 0;
         r = 0;
         x = this.s & this.DM;
         for(i = 0; i < this.t; i++)
         {
            r += cbit(this.a[i] ^ x);
         }
         return r;
      }
      
      this.public byteValue(): number
      {
         return this.t == 0 ? this.s : this.a[0] << 24 >> 24;
      }
      
      private cbit(x: number): number
      {
         let r: number = 0;
         for(r = 0; x != 0; )
         {
            x &= x - 1;
            r++;
         }
         return r;
      }
      
      this.public rShiftTo(n: number, r: BigInteger): void
      {
         let ds: number = 0;
         let bs: number = 0;
         let cbs: number = 0;
         let bm: number = 0;
         let i: number = 0;
         r.s = this.s;
         ds = n / this.DB;
         if(ds >= this.t)
         {
            r.t = 0;
            return;
         }
         bs = n % this.DB;
         cbs = this.DB - bs;
         bm = (1 << bs) - 1;
         r.a[0] = this.a[ds] >> bs;
         for(i = ds + 1; i < this.t; i++)
         {
            r.a[i - ds - 1] |= (this.a[i] & bm) << cbs;
            r.a[i - ds] = this.a[i] >> bs;
         }
         if(bs > 0)
         {
            r.a[this.t - ds - 1] |= (this.s & bm) << cbs;
         }
         r.t = this.t - ds;
         r.clamp();
      }
      
      this.public modInverse(m: BigInteger): BigInteger
      {
         let ac: boolean = false;
         let u: BigInteger = null;
         let v: BigInteger = null;
         let a: BigInteger = null;
         let b: BigInteger = null;
         let c: BigInteger = null;
         let d: BigInteger = null;
         ac = m.isEven();
         if(isEven() && ac || m.sigNum() == 0)
         {
            return BigInteger.ZERO;
         }
         u = m.clone();
         v = clone();
         this.a = nbv(1);
         b = nbv(0);
         c = nbv(0);
         d = nbv(1);
         while(u.sigNum() != 0)
         {
            while(u.isEven())
            {
               u.rShiftTo(1,u);
               if(ac)
               {
                  if(!this.a.isEven() || !b.isEven())
                  {
                     this.a.addTo(this,this.a);
                     b.subTo(m,b);
                  }
                  this.a.rShiftTo(1,this.a);
               }
               else if(!b.isEven())
               {
                  b.subTo(m,b);
               }
               b.rShiftTo(1,b);
            }
            while(v.isEven())
            {
               v.rShiftTo(1,v);
               if(ac)
               {
                  if(!c.isEven() || !d.isEven())
                  {
                     c.addTo(this,c);
                     d.subTo(m,d);
                  }
                  c.rShiftTo(1,c);
               }
               else if(!d.isEven())
               {
                  d.subTo(m,d);
               }
               d.rShiftTo(1,d);
            }
            if(u.compareTo(v) >= 0)
            {
               u.subTo(v,u);
               if(ac)
               {
                  this.a.subTo(c,this.a);
               }
               b.subTo(d,b);
            }
            else
            {
               v.subTo(u,v);
               if(ac)
               {
                  c.subTo(this.a,c);
               }
               d.subTo(b,d);
            }
         }
         if(v.compareTo(BigInteger.ONE) != 0)
         {
            return BigInteger.ZERO;
         }
         if(d.compareTo(m) >= 0)
         {
            return d.subtract(m);
         }
         if(d.sigNum() < 0)
         {
            d.addTo(m,d);
            if(d.sigNum() < 0)
            {
               return d.add(m);
            }
            return d;
         }
         return d;
      }
      
      this.public fromArray(value: ByteArray, length: number): void
      {
         let p: number = 0;
         let i: number = 0;
         let sh: number = 0;
         let k: number = 0;
         let x: number = 0;
         p = Math.floor(value.position);
         i = p + length;
         sh = 0;
         k = 8;
         this.t = 0;
         this.s = 0;
         while(--i >= p)
         {
            x = i < value.length ? Math.floor(value[i]) : 0;
            if(sh == 0)
            {
               this.a[this.t++] = x;
            }
            else if(sh + k > this.DB)
            {
               this.a[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
               this.a[this.t++] = x >> this.DB - sh;
            }
            else
            {
               this.a[this.t - 1] |= x << sh;
            }
            sh += k;
            if(sh >= this.DB)
            {
               sh -= this.DB;
            }
         }
         clamp();
         value.position = Math.min(p + length,value.length);
      }
      
      this.public copyTo(r: BigInteger): void
      {
         let i: number = 0;
         for(i = this.t - 1; i >= 0; i--)
         {
            r.a[i] = this.a[i];
         }
         r.t = this.t;
         r.s = this.s;
      }
      
      this.public intValue(): number
      {
         if(this.s < 0)
         {
            if(this.t == 1)
            {
               return this.a[0] - this.DV;
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
         return (this.a[1] & (1 << 32 - this.DB) - 1) << this.DB | this.a[0];
      }
      
      this.public min(this.a: BigInteger): BigInteger
      {
         return compareTo(this.a) < 0 ? this : this.a;
      }
      
      this.public bitLength(): number
      {
         if(this.t <= 0)
         {
            return 0;
         }
         return this.DB * (this.t - 1) + nbits(this.a[this.t - 1] ^ this.s & this.DM);
      }
      
      this.public shortValue(): number
      {
         return this.t == 0 ? this.s : this.a[0] << 16 >> 16;
      }
      
      this.public and(this.a: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         bitwiseTo(this.a,op_and,r);
         return r;
      }
      
      protected toRadix(b: number = 10): string
      {
         let cs: number = 0;
         let a: number = NaN;
         let d: BigInteger = null;
         let y: BigInteger = null;
         let z: BigInteger = null;
         let r: string = null;
         if(sigNum() == 0 || b < 2 || b > 32)
         {
            return "0";
         }
         cs = chunkSize(b);
         this.a = Math.pow(b,cs);
         d = nbv(this.a);
         y = nbi();
         z = nbi();
         r = "";
         divRemTo(d,y,z);
         while(y.sigNum() > 0)
         {
            r = (this.a + z.intValue()).toString(b).substr(1) + r;
            y.divRemTo(d,y,z);
         }
         return z.intValue().toString(b) + r;
      }
      
      this.public not(): BigInteger
      {
         let r: BigInteger = null;
         let i: number = 0;
         r = new BigInteger();
         for(i = 0; i < this.t; i++)
         {
            r[i] = this.DM & ~this.a[i];
         }
         r.t = this.t;
         r.s = ~this.s;
         return r;
      }
      
      this.public subTo(v: BigInteger, r: BigInteger): void
      {
         let i: number = 0;
         let c: number = 0;
         let m: number = 0;
         i = 0;
         c = 0;
         m = Math.min(v.t,this.t);
         while(i < m)
         {
            c += this.a[i] - v.a[i];
            r.a[i++] = c & this.DM;
            c >>= this.DB;
         }
         if(v.t < this.t)
         {
            c -= v.s;
            while(i < this.t)
            {
               c += this.a[i];
               r.a[i++] = c & this.DM;
               c >>= this.DB;
            }
            c += this.s;
         }
         else
         {
            c += this.s;
            while(i < v.t)
            {
               c -= v.a[i];
               r.a[i++] = c & this.DM;
               c >>= this.DB;
            }
            c -= v.s;
         }
         r.s = c < 0 ? -1 : 0;
         if(c < -1)
         {
            r.a[i++] = this.DV + c;
         }
         else if(c > 0)
         {
            r.a[i++] = c;
         }
         r.t = i;
         r.clamp();
      }
      
      this.public clone(): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         this.copyTo(r);
         return r;
      }
      
      this.public pow(e: number): BigInteger
      {
         return exp(e,new NullReduction());
      }
      
      this.public flipBit(n: number): BigInteger
      {
         return changeBit(n,op_xor);
      }
      
      this.public xor(this.a: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         bitwiseTo(this.a,op_xor,r);
         return r;
      }
      
      this.public or(this.a: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         bitwiseTo(this.a,op_or,r);
         return r;
      }
      
      this.public max(this.a: BigInteger): BigInteger
      {
         return compareTo(this.a) > 0 ? this : this.a;
      }
      
      this.public fromInt(value: number): void
      {
         this.t = 1;
         this.s = value < 0 ? -1 : 0;
         if(value > 0)
         {
            this.a[0] = value;
         }
         else if(value < -1)
         {
            this.a[0] = value + this.DV;
         }
         else
         {
            this.t = 0;
         }
      }
      
      this.public isEven(): boolean
      {
         return (this.t > 0 ? this.a[0] & 1 : this.s) == 0;
      }
      
      this.public toString(radix: number = 16): string
      {
         let k: number = 0;
         let km: number = 0;
         let d: number = 0;
         let m: boolean = false;
         let r: string = null;
         let i: number = 0;
         let p: number = 0;
         if(this.s < 0)
         {
            return "-" + negate().toString(radix);
         }
         switch(radix)
         {
            case 2:
               k = 1;
               break;
            case 4:
               k = 2;
               break;
            case 8:
               k = 3;
               break;
            case 16:
               k = 4;
               break;
            case 32:
               k = 5;
         }
         km = (1 << k) - 1;
         d = 0;
         m = false;
         r = "";
         i = this.t;
         p = this.DB - i * this.DB % k;
         if(i-- > 0)
         {
            if(p < this.DB && (d = this.a[i] >> p) > 0)
            {
               m = true;
               r = d.toString(36);
            }
            while(i >= 0)
            {
               if(p < k)
               {
                  d = (this.a[i] & (1 << p) - 1) << k - p;
                  d |= this.a[--i] >> (p = p + (this.DB - k));
               }
               else
               {
                  d = this.a[i] >> (p = p - k) & km;
                  if(p <= 0)
                  {
                     p += this.DB;
                     i--;
                  }
               }
               if(d > 0)
               {
                  m = true;
               }
               if(m)
               {
                  r += d.toString(36);
               }
            }
         }
         return m ? r : "0";
      }
      
      this.public setBit(n: number): BigInteger
      {
         return changeBit(n,op_or);
      }
      
      this.public abs(): BigInteger
      {
         return this.s < 0 ? negate() : this;
      }
      
      this.public nbits(x: number): number
      {
         let r: number = 0;
         let t: number = 0;
         r = 1;
         this.t = x >>> 16;
         if(this.t != 0)
         {
            x = this.t;
            r += 16;
         }
         this.t = x >> 8;
         if(this.t != 0)
         {
            x = this.t;
            r += 8;
         }
         this.t = x >> 4;
         if(this.t != 0)
         {
            x = this.t;
            r += 4;
         }
         this.t = x >> 2;
         if(this.t != 0)
         {
            x = this.t;
            r += 2;
         }
         this.t = x >> 1;
         if(this.t != 0)
         {
            x = this.t;
            r += 1;
         }
         return r;
      }
      
      this.public sigNum(): number
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
      
      this.public toByteArray(): ByteArray
      {
         let i: number = 0;
         let r: ByteArray = null;
         let p: number = 0;
         let d: number = 0;
         let k: number = 0;
         i = this.t;
         r = new ByteArray();
         r[0] = this.s;
         p = this.DB - i * this.DB % 8;
         k = 0;
         if(i-- > 0)
         {
            if(p < this.DB && (d = this.a[i] >> p) != (this.s & this.DM) >> p)
            {
               r[k++] = d | this.s << this.DB - p;
            }
            while(i >= 0)
            {
               if(p < 8)
               {
                  d = (this.a[i] & (1 << p) - 1) << 8 - p;
                  d |= this.a[--i] >> (p = p + (this.DB - 8));
               }
               else
               {
                  d = this.a[i] >> (p = p - 8) & 0xFF;
                  if(p <= 0)
                  {
                     p += this.DB;
                     i--;
                  }
               }
               if((d & 0x80) != 0)
               {
                  d |= -256;
               }
               if(k == 0 && (this.s & 0x80) != (d & 0x80))
               {
                  k++;
               }
               if(k > 0 || d != this.s)
               {
                  r[k++] = d;
               }
            }
         }
         return r;
      }
      
      this.public squareTo(r: BigInteger): void
      {
         let x: BigInteger = null;
         let i: number = 0;
         let c: number = 0;
         x = abs();
         for(i = r.t = 2 * x.t; --i >= 0; )
         {
            r.a[i] = 0;
         }
         for(i = 0; i < x.t - 1; i++)
         {
            c = x.am(i,x.a[i],r,2 * i,0,1);
            if((r.a[i + x.t] = r.a[i + x.t] + x.am(i + 1,2 * x.a[i],r,2 * i + 1,c,x.t - i - 1)) >= this.DV)
            {
               r.a[i + x.t] -= this.DV;
               r.a[i + x.t + 1] = 1;
            }
         }
         if(r.t > 0)
         {
            r.a[r.t - 1] += x.am(i,x.a[i],r,2 * i,0,1);
         }
         r.s = 0;
         r.clamp();
      }
      
      private op_and(x: number, y: number): number
      {
         return x & y;
      }
      
      protected fromRadix(this.s: string, b: number = 10): void
      {
         let cs: number = 0;
         let d: number = NaN;
         let mi: boolean = false;
         let j: number = 0;
         let w: number = 0;
         let i: number = 0;
         let x: number = 0;
         fromInt(0);
         cs = chunkSize(b);
         d = Math.pow(b,cs);
         mi = false;
         j = 0;
         w = 0;
         for(i = 0; i < this.s.length; i++)
         {
            x = intAt(this.s,i);
            if(x < 0)
            {
               if(this.s.charAt(i) == "-" && sigNum() == 0)
               {
                  mi = true;
               }
            }
            else
            {
               w = b * w + x;
               if(++j >= cs)
               {
                  dMultiply(d);
                  dAddOffset(w,0);
                  j = 0;
                  w = 0;
               }
            }
         }
         if(j > 0)
         {
            dMultiply(Math.pow(b,j));
            dAddOffset(w,0);
         }
         if(mi)
         {
            BigInteger.ZERO.subTo(this,this);
         }
      }
      
      this.public dlShiftTo(n: number, r: BigInteger): void
      {
         let i: number = 0;
         for(i = this.t - 1; i >= 0; i--)
         {
            r.a[i + n] = this.a[i];
         }
         for(i = n - 1; i >= 0; i--)
         {
            r.a[i] = 0;
         }
         r.t = this.t + n;
         r.s = this.s;
      }
      
      private op_xor(x: number, y: number): number
      {
         return x ^ y;
      }
   }
