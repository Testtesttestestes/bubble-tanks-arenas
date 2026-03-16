// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class CFBMode extends IVMode implements IMode
   {
      
      constructor(key: ISymmetricKey, padding: IPad = null){
         super(key,null);
      }
      
      public toString(): string
      {
         return key.toString() + "-cfb";
      }
      
      public decrypt(src: ByteArray): void
      {
         var l: number = 0;
         var vector: ByteArray = null as any;
         var tmp: ByteArray = null as any;
         var i: number = 0;
         var chunk: number = 0;
         var j: number = 0;
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
         var l: number = 0;
         var vector: ByteArray = null as any;
         var i: number = 0;
         var chunk: number = 0;
         var j: number = 0;
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
