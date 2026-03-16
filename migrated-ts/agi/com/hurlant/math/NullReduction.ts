// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.math

export class NullReduction implements IReduction
   {
      
      constructor(){
         super();
      }
      
      public reduce(x: BigInteger): void
      {
      }
      
      public revert(x: BigInteger): BigInteger
      {
         return x;
      }
      
      public mulTo(x: BigInteger, y: BigInteger, r: BigInteger): void
      {
         x.multiplyTo(y,r);
      }
      
      public convert(x: BigInteger): BigInteger
      {
         return x;
      }
      
      public sqrTo(x: BigInteger, r: BigInteger): void
      {
         x.squareTo(r);
      }
   }
