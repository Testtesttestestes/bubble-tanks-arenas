// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class PKCS5 implements IPad
   {
      
      private blockSize!: number;
      constructor(blockSize: number = 0){

         this.blockSize = blockSize;
      }
      
      public unpad(a: ByteArray): void
      {
         var c: number = 0;
         var i: number = 0;
         var v: number = 0;
         c = a.length % blockSize;
         if(c != 0)
         {
            throw new Error("PKCS#5::unpad: ByteArray.length isn\'t a multiple of the blockSize");
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
         var c: number = 0;
         var i: number = 0;
         c = blockSize - a.length % blockSize;
         for(i = 0; i < c; i++)
         {
            a[a.length] = c;
         }
      }
      
      public setBlockSize(bs: number): void
      {
         blockSize = bs;
      }
   }
