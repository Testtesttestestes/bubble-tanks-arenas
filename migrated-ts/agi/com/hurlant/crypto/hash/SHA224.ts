// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.hash

export class SHA224 extends SHA256{
      
      constructor(){
         super();
         h = [3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428];
      }
      
      public getHashSize(): number
      {
         return 28;
      }
      
      public toString(): string
      {
         return "sha224";
      }
   }
