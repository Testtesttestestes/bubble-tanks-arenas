// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class SimpleIVMode implements IMode, ICipher
   {
      
      protected mode!: IVMode;
      protected cipher!: ICipher;
      constructor(mode: IVMode){

         this.mode = mode;
         cipher = mode  as unknown as ICipher;
      }
      
      public encrypt(src: ByteArray): void
      {
         var tmp: ByteArray = null as any;
         cipher.encrypt(src);
         tmp = new ByteArray();
         tmp.writeBytes(mode.IV);
         tmp.writeBytes(src);
         src.position = 0;
         src.writeBytes(tmp);
      }
      
      public decrypt(src: ByteArray): void
      {
         var tmp: ByteArray = null as any;
         tmp = new ByteArray();
         tmp.writeBytes(src,0,getBlockSize());
         mode.IV = tmp;
         tmp = new ByteArray();
         tmp.writeBytes(src,getBlockSize());
         cipher.decrypt(tmp);
         src.length = 0;
         src.writeBytes(tmp);
      }
      
      public dispose(): void
      {
         mode.dispose();
         mode = null as any;
         cipher = null as any;
         Memory.gc();
      }
      
      public toString(): string
      {
         return "simple-" + cipher.toString();
      }
      
      public getBlockSize(): number
      {
         return mode.getBlockSize();
      }
   }
