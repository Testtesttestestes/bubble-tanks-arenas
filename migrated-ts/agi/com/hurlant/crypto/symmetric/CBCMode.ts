// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class CBCMode extends IVMode implements IMode
   {
      
      constructor(key: ISymmetricKey, padding: IPad = null){
         super(key,padding);
      }
      
      public toString(): string
      {
         return key.toString() + "-cbc";
      }
      
      public decrypt(src: ByteArray): void
      {
         var vector: ByteArray = null as any;
         var tmp: ByteArray = null as any;
         var i: number = 0;
         var j: number = 0;
         vector = getIV4d();
         tmp = new ByteArray();
         for(i = 0; i < src.length; i += blockSize)
         {
            tmp.position = 0;
            tmp.writeBytes(src,i,blockSize);
            key.decrypt(src,i);
            for(j = 0; j < blockSize; j++)
            {
               src[i + j] ^= vector[j];
            }
            vector.position = 0;
            vector.writeBytes(tmp,0,blockSize);
         }
         padding.unpad(src);
      }
      
      public encrypt(src: ByteArray): void
      {
         var vector: ByteArray = null as any;
         var i: number = 0;
         var j: number = 0;
         padding.pad(src);
         vector = getIV4e();
         for(i = 0; i < src.length; i += blockSize)
         {
            for(j = 0; j < blockSize; j++)
            {
               src[i + j] ^= vector[j];
            }
            key.encrypt(src,i);
            vector.position = 0;
            vector.writeBytes(src,i,blockSize);
         }
      }
   }
