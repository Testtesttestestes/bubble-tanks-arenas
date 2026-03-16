// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.math

export class BarrettReduction implements IReduction
   {
      
      private r2!: BigInteger;
      private q3!: BigInteger;
      private mu!: BigInteger;
      private m!: BigInteger;
      constructor(m: BigInteger){

         r2 = new BigInteger();
         q3 = new BigInteger();
         BigInteger.ONE.dlShiftTo(2 * m.t,r2);
         mu = r2.divide(m);
         this.m = m;
      }
      
      public reduce(lx: BigInteger): void
      {
         var x: BigInteger = null as any;
         x = lx  as unknown as BigInteger;
         x.drShiftTo(m.t - 1,r2);
         if(x.t > m.t + 1)
         {
            x.t = m.t + 1;
            x.clamp();
         }
         mu.multiplyUpperTo(r2,m.t + 1,q3);
         m.multiplyLowerTo(q3,m.t + 1,r2);
         while(x.compareTo(r2) < 0)
         {
            x.dAddOffset(1,m.t + 1);
         }
         x.subTo(r2,x);
         while(x.compareTo(m) >= 0)
         {
            x.subTo(m,x);
         }
      }
      
      public revert(x: BigInteger): BigInteger
      {
         return x;
      }
      
      public convert(x: BigInteger): BigInteger
      {
         var r: BigInteger = null as any;
         if(x.s < 0 || x.t > 2 * m.t)
         {
            return x.mod(m);
         }
         if(x.compareTo(m) < 0)
         {
            return x;
         }
         r = new BigInteger();
         x.copyTo(r);
         reduce(r);
         return r;
      }
      
      public sqrTo(x: BigInteger, r: BigInteger): void
      {
         x.squareTo(r);
         reduce(r);
      }
      
      public mulTo(x: BigInteger, y: BigInteger, r: BigInteger): void
      {
         x.multiplyTo(y,r);
         reduce(r);
      }
   }
