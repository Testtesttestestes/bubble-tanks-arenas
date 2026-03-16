// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.math

export class MontgomeryReduction implements IReduction
   {
      
      private um!: number;
      private mp!: number;
      private mph!: number;
      private mpl!: number;
      private mt2!: number;
      private m!: BigInteger;
      constructor(m: BigInteger){

         this.m = m;
         mp = m.invDigit();
         mpl = mp & 0x7FFF;
         mph = mp >> 15;
         um = (1 << BigInteger.DB - 15) - 1;
         mt2 = 2 * m.t;
      }
      
      public mulTo(x: BigInteger, y: BigInteger, r: BigInteger): void
      {
         x.multiplyTo(y,r);
         reduce(r);
      }
      
      public revert(x: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         r = new BigInteger();
         x.copyTo(r);
         reduce(r);
         return r;
      }
      
      public convert(x: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         r = new BigInteger();
         x.abs().dlShiftTo(m.t,r);
         r.divRemTo(m,null,r);
         if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
         {
            m.subTo(r,r);
         }
         return r;
      }
      
      public reduce(x: BigInteger): void
      {
         var i: number = 0;
         var j: number = 0;
         var u0: number = 0;
         while(x.t <= mt2)
         {
            x.a[x.t++] = 0;
         }
         for(i = 0; i < m.t; i++)
         {
            j = x.a[i] & 0x7FFF;
            u0 = j * mpl + ((j * mph + (x.a[i] >> 15) * mpl & um) << 15) & BigInteger.DM;
            j = i + m.t;
            x.a[j] += m.am(0,u0,x,i,0,m.t);
            while(x.a[j] >= BigInteger.DV)
            {
               x.a[j] -= BigInteger.DV;
               ++x.a[++j];
            }
         }
         x.clamp();
         x.drShiftTo(m.t,x);
         if(x.compareTo(m) >= 0)
         {
            x.subTo(m,x);
         }
      }
      
      public sqrTo(x: BigInteger, r: BigInteger): void
      {
         x.squareTo(r);
         reduce(r);
      }
   }
