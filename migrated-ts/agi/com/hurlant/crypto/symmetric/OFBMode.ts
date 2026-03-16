// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class OFBMode extends IVMode implements IMode
   {
      
      constructor(key: ISymmetricKey, padding: IPad = null as any){
         super(key,null);
      }
      
      public toString(): string
      {
         return key.toString() + "-ofb";
      }
      
      private core(src: ByteArray, iv: ByteArray): void
      {
         let l: number = 0;
         let tmp: ByteArray = null;
         let i: number = 0;
         let chunk: number = 0;
         let j: number = 0;
         l = src.length;
         tmp = new ByteArray();
         for(i = 0; i < src.length; i += blockSize)
         {
            key.encrypt(iv);
            tmp.position = 0;
            tmp.writeBytes(iv);
            chunk = i + blockSize < l ? blockSize : Math.floor(l - i);
            for(j = 0; j < chunk; j++)
            {
               src[i + j] ^= iv[j];
            }
            iv.position = 0;
            iv.writeBytes(tmp);
         }
      }
      
      public decrypt(src: ByteArray): void
      {
         let vector: ByteArray = null;
         vector = getIV4d();
         core(src,vector);
      }
      
      public encrypt(src: ByteArray): void
      {
         let vector: ByteArray = null;
         vector = getIV4e();
         core(src,vector);
      }
   }
