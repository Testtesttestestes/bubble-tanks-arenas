// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class IVMode{
      
      protected lastIV: ByteArray;
      protected iv: ByteArray;
      protected blockSize: number;
      protected padding: IPad;
      protected prng: Random;
      protected key: ISymmetricKey;
      constructor(this.key: ISymmetricKey, this.padding: IPad = null as any){
         super();
         this.key = this.key;
         this.blockSize = this.key.getBlockSize();
         if(this.padding == null)
         {
            this.padding = new PKCS5(this.blockSize);
         }
         else
         {
            this.padding.setBlockSize(this.blockSize);
         }
         this.padding = this.padding;
         this.prng = new Random();
         this.iv = null;
         this.lastIV = new ByteArray();
      }
      
      public set(value: ByteArray as unknown as IV): void
      {
         this.iv = value;
         this.lastIV.length = 0;
         this.lastIV.writeBytes(this.iv);
      }
      
      protected getIV4d(): ByteArray
      {
         let vec: ByteArray = null;
         vec = new ByteArray();
         if(Boolean(this.iv))
         {
            vec.writeBytes(this.iv);
            return vec;
         }
         throw new Error("an IV must be set before calling decrypt()");
      }
      
      protected getIV4e(): ByteArray
      {
         let vec: ByteArray = null;
         vec = new ByteArray();
         if(Boolean(this.iv))
         {
            vec.writeBytes(this.iv);
         }
         else
         {
            this.prng.nextBytes(vec,this.blockSize);
         }
         this.lastIV.length = 0;
         this.lastIV.writeBytes(vec);
         return vec;
      }
      
      public get IV(): ByteArray
      {
         return this.lastIV;
      }
      
      public dispose(): void
      {
         let i: number = 0;
         if(this.iv != null)
         {
            for(i = 0; i < this.iv.length; i++)
            {
               this.iv[i] = this.prng.nextByte();
            }
            this.iv.length = 0;
            this.iv = null;
         }
         if(this.lastIV != null)
         {
            for(i = 0; i < this.iv.length; i++)
            {
               this.lastIV[i] = this.prng.nextByte();
            }
            this.lastIV.length = 0;
            this.lastIV = null;
         }
         this.key.dispose();
         this.key = null;
         this.padding = null;
         this.prng.dispose();
         this.prng = null;
         Memory.gc();
      }
      
      public getBlockSize(): number
      {
         return this.key.getBlockSize();
      }
   }
