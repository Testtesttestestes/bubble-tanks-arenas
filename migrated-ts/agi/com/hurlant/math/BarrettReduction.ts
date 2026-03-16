// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.math

export class BarrettReduction implements IReduction
   {
      
      private r2: BigInteger;
      private q3: BigInteger;
      private mu: BigInteger;
      private m: BigInteger;
      constructor(m: BigInteger){
         super();
         this.r2 = new BigInteger();
         this.q3 = new BigInteger();
         BigInteger.ONE.dlShiftTo(2 * this.m.t,this.r2);
         this.mu = this.r2.divide(this.m);
         this.m = this.m;
      }
      
      public reduce(lx: BigInteger): void
      {
         let x: BigInteger = null;
         x = lx  as unknown as BigInteger;
         x.drShiftTo(this.m.t - 1,this.r2);
         if(x.t > this.m.t + 1)
         {
            x.t = this.m.t + 1;
            x.clamp();
         }
         this.mu.multiplyUpperTo(this.r2,this.m.t + 1,this.q3);
         this.m.multiplyLowerTo(this.q3,this.m.t + 1,this.r2);
         while(x.compareTo(this.r2) < 0)
         {
            x.dAddOffset(1,this.m.t + 1);
         }
         x.subTo(this.r2,x);
         while(x.compareTo(this.m) >= 0)
         {
            x.subTo(this.m,x);
         }
      }
      
      public revert(x: BigInteger): BigInteger
      {
         return x;
      }
      
      public convert(x: BigInteger): BigInteger
      {
         let r: BigInteger = null;
         if(x.s < 0 || x.t > 2 * this.m.t)
         {
            return x.mod(this.m);
         }
         if(x.compareTo(this.m) < 0)
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
