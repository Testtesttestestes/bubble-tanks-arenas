// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.math

export class MontgomeryReduction implements IReduction
   {
      
      private um: number;
      private mp: number;
      private mph: number;
      private mpl: number;
      private mt2: number;
      private m: BigInteger;
      constructor(m: BigInteger){
         super();
         this.m = this.m;
         this.mp = this.m.invDigit();
         this.mpl = this.mp & 0x7FFF;
         this.mph = this.mp >> 15;
         this.um = (1 << BigInteger.DB - 15) - 1;
         this.mt2 = 2 * this.m.t;
      }
      
      public mulTo(x: BigInteger, y: BigInteger, r: BigInteger): void
      {
         x.multiplyTo(y,r);
         reduce(r);
      }
      
      public revert(x: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         x.copyTo(r);
         reduce(r);
         return r;
      }
      
      public convert(x: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         r = new BigInteger();
         x.abs().dlShiftTo(this.m.t,r);
         r.divRemTo(this.m,null,r);
         if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
         {
            this.m.subTo(r,r);
         }
         return r;
      }
      
      public reduce(x: BigInteger): void
      {
         let i: number = 0;
         let j: number = 0;
         let u0: number = 0;
         while(x.t <= this.mt2)
         {
            x.a[x.t++] = 0;
         }
         for(i = 0; i < this.m.t; i++)
         {
            j = x.a[i] & 0x7FFF;
            u0 = j * this.mpl + ((j * this.mph + (x.a[i] >> 15) * this.mpl & this.um) << 15) & BigInteger.DM;
            j = i + this.m.t;
            x.a[j] += this.m.am(0,u0,x,i,0,this.m.t);
            while(x.a[j] >= BigInteger.DV)
            {
               x.a[j] -= BigInteger.DV;
               ++x.a[++j];
            }
         }
         x.clamp();
         x.drShiftTo(this.m.t,x);
         if(x.compareTo(this.m) >= 0)
         {
            x.subTo(this.m,x);
         }
      }
      
      public sqrTo(x: BigInteger, r: BigInteger): void
      {
         x.squareTo(r);
         reduce(r);
      }
   }
