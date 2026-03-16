// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class PKCS5 implements IPad
   {
      
      private blockSize: number;
      constructor(this.blockSize: number = 0){
         super();
         this.blockSize = this.blockSize;
      }
      
      public unpad(a: ByteArray): void
      {
         let c: number = 0;
         let i: number = 0;
         let v: number = 0;
         c = a.length % this.blockSize;
         if(c != 0)
         {
            throw new Error("PKCS#5::unpad: ByteArray.length isn\'t a multiple of the this.blockSize");
         }
         c = Math.floor(a[a.length - 1]);
         for(i = c; i > 0; i--)
         {
            v = Math.floor(a[a.length - 1]);
            --a.length;
            if(c != v)
            {
               throw new Error("PKCS#5:unpad: Invalid padding value. expected [" + c + "], found [" + v + "]");
            }
         }
      }
      
      public pad(a: ByteArray): void
      {
         let c: number = 0;
         let i: number = 0;
         c = this.blockSize - a.length % this.blockSize;
         for(i = 0; i < c; i++)
         {
            a[a.length] = c;
         }
      }
      
      public setBlockSize(bs: number): void
      {
         this.blockSize = bs;
      }
   }
