// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.math

export class ClassicReduction implements IReduction
   {
      
      private m!: BigInteger;
      constructor(m: BigInteger){

         this.m = m;
      }
      
      public revert(x: BigInteger): BigInteger
      {
         return x;
      }
      
      public reduce(x: BigInteger): void
      {
         x.divRemTo(m,null,x);
      }
      
      public convert(x: BigInteger): BigInteger
      {
         if(x.s < 0 || x.compareTo(m) >= 0)
         {
            return x.mod(m);
         }
         return x;
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
