// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.prng

export class ARC4 implements IPRNG, IStreamCipher
   {
      
      private S: ByteArray;
      private i: number = 0;
      private j: number = 0;
      private readonly psize: number = 256;
      constructor(key: ByteArray = null as any){
         super();
         this.S = new ByteArray();
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
         let i: number = 0;
         let j: number = 0;
         let t: number = 0;
         for(this.i = 0; this.i < 256; this.i++)
         {
            this.S[this.i] = this.i;
         }
         this.j = 0;
         for(this.i = 0; this.i < 256; this.i++)
         {
            this.j = this.j + this.S[this.i] + key[this.i % key.length] & 0xFF;
            t = Math.floor(this.S[this.i]);
            this.S[this.i] = this.S[this.j];
            this.S[this.j] = t;
         }
         this.i = 0;
         this.j = 0;
      }
      
      public dispose(): void
      {
         let i: number = 0;
         this.i = 0;
         if(this.S != null)
         {
            for(this.i = 0; this.i < this.S.length; this.i++)
            {
               this.S[this.i] = Math.random() * 256;
            }
            this.S.length = 0;
            this.S = null;
         }
         this.i = 0;
         this.j = 0;
         Memory.gc();
      }
      
      public encrypt(block: ByteArray): void
      {
         let i: number = 0;
         this.i = 0;
         while(this.i < block.length)
         {
            let _temp_2: any = block;
            let _loc3_: number = this.i++;
            _temp_2[_loc3_] ^= next();
         }
      }
      
      public next(): number
      {
         let t: number = 0;
         this.i = this.i + 1 & 0xFF;
         this.j = this.j + this.S[this.i] & 0xFF;
         t = Math.floor(this.S[this.i]);
         this.S[this.i] = this.S[this.j];
         this.S[this.j] = t;
         return this.S[t + this.S[this.i] & 0xFF];
      }
      
      public getBlockSize(): number
      {
         return 1;
      }
      
      public getPoolSize(): number
      {
         return this.psize;
      }
      
      public toString(): string
      {
         return "rc4";
      }
   }
