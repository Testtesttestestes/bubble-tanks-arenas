// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class CFBMode extends IVMode implements IMode
   {
      
      constructor(key: ISymmetricKey, padding: IPad = null as any){
         super(key,null);
      }
      
      public toString(): string
      {
         return key.toString() + "-cfb";
      }
      
      public decrypt(src: ByteArray): void
      {
         let l: number = 0;
         let vector: ByteArray = null;
         let tmp: ByteArray = null;
         let i: number = 0;
         let chunk: number = 0;
         let j: number = 0;
         l = src.length;
         vector = getIV4d();
         tmp = new ByteArray();
         for(i = 0; i < src.length; i += blockSize)
         {
            key.encrypt(vector);
            chunk = i + blockSize < l ? blockSize : Math.floor(l - i);
            tmp.position = 0;
            tmp.writeBytes(src,i,chunk);
            for(j = 0; j < chunk; j++)
            {
               src[i + j] ^= vector[j];
            }
            vector.position = 0;
            vector.writeBytes(tmp);
         }
      }
      
      public encrypt(src: ByteArray): void
      {
         let l: number = 0;
         let vector: ByteArray = null;
         let i: number = 0;
         let chunk: number = 0;
         let j: number = 0;
         l = src.length;
         vector = getIV4e();
         for(i = 0; i < src.length; i += blockSize)
         {
            key.encrypt(vector);
            chunk = i + blockSize < l ? blockSize : Math.floor(l - i);
            for(j = 0; j < chunk; j++)
            {
               src[i + j] ^= vector[j];
            }
            vector.position = 0;
            vector.writeBytes(src,i,chunk);
         }
      }
   }
