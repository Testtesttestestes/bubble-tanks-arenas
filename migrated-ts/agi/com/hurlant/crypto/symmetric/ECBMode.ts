// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class ECBMode implements IMode, ICipher
   {
      
      private key!: ISymmetricKey;
      private padding!: IPad;
      constructor(key: ISymmetricKey, padding: IPad = null){

         this.key = key;
         if(padding == null)
         {
            padding = new PKCS5(key.getBlockSize());
         }
         else
         {
            padding.setBlockSize(key.getBlockSize());
         }
         this.padding = padding;
      }
      
      public encrypt(src: ByteArray): void
      {
         var blockSize: number = 0;
         var tmp: ByteArray = null as any;
         var dst: ByteArray = null as any;
         var i: number = 0;
         padding.pad(src);
         src.position = 0;
         blockSize = key.getBlockSize();
         tmp = new ByteArray();
         dst = new ByteArray();
         for(i = 0; i < src.length; i += blockSize)
         {
            tmp.length = 0;
            src.readBytes(tmp,0,blockSize);
            key.encrypt(tmp);
            dst.writeBytes(tmp);
         }
         src.length = 0;
         src.writeBytes(dst);
      }
      
      public decrypt(src: ByteArray): void
      {
         var blockSize: number = 0;
         var tmp: ByteArray = null as any;
         var dst: ByteArray = null as any;
         var i: number = 0;
         src.position = 0;
         blockSize = key.getBlockSize();
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
            key.decrypt(tmp);
            dst.writeBytes(tmp);
         }
         padding.unpad(dst);
         src.length = 0;
         src.writeBytes(dst);
      }
      
      public dispose(): void
      {
         key.dispose();
         key = null as any;
         padding = null as any;
         Memory.gc();
      }
      
      public getBlockSize(): number
      {
         return key.getBlockSize();
      }
      
      public toString(): string
      {
         return key.toString() + "-ecb";
      }
   }
