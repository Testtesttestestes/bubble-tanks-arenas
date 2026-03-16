// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class IVMode{
      
      protected lastIV!: ByteArray;
      protected iv!: ByteArray;
      protected blockSize!: number;
      protected padding!: IPad;
      protected prng!: Random;
      protected key!: ISymmetricKey;
      constructor(key: ISymmetricKey, padding: IPad = null){

         this.key = key;
         blockSize = key.getBlockSize();
         if(padding == null)
         {
            padding = new PKCS5(blockSize);
         }
         else
         {
            padding.setBlockSize(blockSize);
         }
         this.padding = padding;
         prng = new Random();
         iv = null as any;
         lastIV = new ByteArray();
      }
      
      public set IV(value: ByteArray)
      {
         iv = value;
         lastIV.length = 0;
         lastIV.writeBytes(iv);
      }
      
      protected getIV4d(): ByteArray
      {
         var vec: ByteArray = null as any;
         vec = new ByteArray();
         if(Boolean(iv))
         {
            vec.writeBytes(iv);
            return vec;
         }
         throw new Error("an this.IV must be set before calling decrypt()");
      }
      
      protected getIV4e(): ByteArray
      {
         var vec: ByteArray = null as any;
         vec = new ByteArray();
         if(Boolean(iv))
         {
            vec.writeBytes(iv);
         }
         else
         {
            prng.nextBytes(vec,blockSize);
         }
         lastIV.length = 0;
         lastIV.writeBytes(vec);
         return vec;
      }
      
      public get IV(): ByteArray
      {
         return lastIV;
      }
      
      public dispose(): void
      {
         var i: number = 0;
         if(iv != null)
         {
            for(i = 0; i < iv.length; i++)
            {
               iv[i] = prng.nextByte();
            }
            iv.length = 0;
            iv = null as any;
         }
         if(lastIV != null)
         {
            for(i = 0; i < iv.length; i++)
            {
               lastIV[i] = prng.nextByte();
            }
            lastIV.length = 0;
            lastIV = null as any;
         }
         key.dispose();
         key = null as any;
         padding = null as any;
         prng.dispose();
         prng = null as any;
         Memory.gc();
      }
      
      public getBlockSize(): number
      {
         return key.getBlockSize();
      }
   }
