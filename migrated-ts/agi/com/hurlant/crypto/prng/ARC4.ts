// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.prng

export class ARC4 implements IPRNG, IStreamCipher
   {
      
      private S!: ByteArray;
      private i: number = 0;
      private j: number = 0;
      private readonly psize: number = 256;
      constructor(key: ByteArray = null){

         S = new ByteArray();
         if(Boolean(key))
         {
            init(key);
         }
      }
      
      public decrypt(block: ByteArray): void
      {
         encrypt(block);
      }
      
      public init(key: ByteArray): void
      {
         var i: number = 0;
         var j: number = 0;
         var t: number = 0;
         for(i = 0; i < 256; i++)
         {
            S[i] = i;
         }
         j = 0;
         for(i = 0; i < 256; i++)
         {
            j = j + S[i] + key[i % key.length] & 0xFF;
            t = Math.floor(S[i]);
            S[i] = S[j];
            S[j] = t;
         }
         this.i = 0;
         this.j = 0;
      }
      
      public dispose(): void
      {
         var i: number = 0;
         i = 0;
         if(S != null)
         {
            for(i = 0; i < S.length; i++)
            {
               S[i] = Math.random() * 256;
            }
            S.length = 0;
            S = null as any;
         }
         this.i = 0;
         this.j = 0;
         Memory.gc();
      }
      
      public encrypt(block: ByteArray): void
      {
         var i: number = 0;
         i = 0;
         while(i < block.length)
         {
            var _temp_2: any = block;
            var _loc3_: number = i++;
            _temp_2[_loc3_] ^= next();
         }
      }
      
      public next(): number
      {
         var t: number = 0;
         i = i + 1 & 0xFF;
         j = j + S[i] & 0xFF;
         t = Math.floor(S[i]);
         S[i] = S[j];
         S[j] = t;
         return S[t + S[i] & 0xFF];
      }
      
      public getBlockSize(): number
      {
         return 1;
      }
      
      public getPoolSize(): number
      {
         return psize;
      }
      
      public toString(): string
      {
         return "rc4";
      }
   }
