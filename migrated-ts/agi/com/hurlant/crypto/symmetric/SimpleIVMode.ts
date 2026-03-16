// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class SimpleIVMode implements IMode, ICipher
   {
      
      protected mode: IVMode;
      protected cipher: ICipher;
      constructor(mode: IVMode){
         super();
         this.mode = this.mode;
         this.cipher = this.mode  as unknown as ICipher;
      }
      
      public encrypt(src: ByteArray): void
      {
         let tmp: ByteArray = null;
         this.cipher.encrypt(src);
         tmp = new ByteArray();
         tmp.writeBytes(this.mode.IV);
         tmp.writeBytes(src);
         src.position = 0;
         src.writeBytes(tmp);
      }
      
      public decrypt(src: ByteArray): void
      {
         let tmp: ByteArray = null;
         tmp = new ByteArray();
         tmp.writeBytes(src,0,getBlockSize());
         this.mode.IV = tmp;
         tmp = new ByteArray();
         tmp.writeBytes(src,getBlockSize());
         this.cipher.decrypt(tmp);
         src.length = 0;
         src.writeBytes(tmp);
      }
      
      public dispose(): void
      {
         this.mode.dispose();
         this.mode = null;
         this.cipher = null;
         Memory.gc();
      }
      
      public toString(): string
      {
         return "simple-" + this.cipher.toString();
      }
      
      public getBlockSize(): number
      {
         return this.mode.getBlockSize();
      }
   }
