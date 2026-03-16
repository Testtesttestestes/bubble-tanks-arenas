// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class ECBMode implements IMode, ICipher
   {
      
      private key: ISymmetricKey;
      private padding: IPad;
      constructor(key: ISymmetricKey, padding: IPad = null as any){
         super();
         this.key = this.key;
         if(this.padding == null)
         {
            this.padding = new PKCS5(this.key.getBlockSize());
         }
         else
         {
            this.padding.setBlockSize(this.key.getBlockSize());
         }
         this.padding = this.padding;
      }
      
      public encrypt(src: ByteArray): void
      {
         let blockSize: number = 0;
         let tmp: ByteArray = null;
         let dst: ByteArray = null;
         let i: number = 0;
         this.padding.pad(src);
         src.position = 0;
         blockSize = this.key.getBlockSize();
         tmp = new ByteArray();
         dst = new ByteArray();
         for(i = 0; i < src.length; i += blockSize)
         {
            tmp.length = 0;
            src.readBytes(tmp,0,blockSize);
            this.key.encrypt(tmp);
            dst.writeBytes(tmp);
         }
         src.length = 0;
         src.writeBytes(dst);
      }
      
      public decrypt(src: ByteArray): void
      {
         let blockSize: number = 0;
         let tmp: ByteArray = null;
         let dst: ByteArray = null;
         let i: number = 0;
         src.position = 0;
         blockSize = this.key.getBlockSize();
         if(src.length % blockSize != 0)
         {
            throw new Error("ECB mode cipher length must be a multiple of blocksize " + blockSize);
         }
         tmp = new ByteArray();
         dst = new ByteArray();
         for(i = 0; i < src.length; i += blockSize)
         {
            tmp.length = 0;
            src.readBytes(tmp,0,blockSize);
            this.key.decrypt(tmp);
            dst.writeBytes(tmp);
         }
         this.padding.unpad(dst);
         src.length = 0;
         src.writeBytes(dst);
      }
      
      public dispose(): void
      {
         this.key.dispose();
         this.key = null;
         this.padding = null;
         Memory.gc();
      }
      
      public getBlockSize(): number
      {
         return this.key.getBlockSize();
      }
      
      public toString(): string
      {
         return this.key.toString() + "-ecb";
      }
   }
