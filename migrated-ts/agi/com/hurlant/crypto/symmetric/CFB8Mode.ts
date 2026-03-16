// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class CFB8Mode extends IVMode implements IMode
   {
      
      constructor(key: ISymmetricKey, padding: IPad = null){
         super(key,null);
      }
      
      public toString(): string
      {
         return key.toString() + "-cfb8";
      }
      
      public decrypt(src: ByteArray): void
      {
         var vector: ByteArray = null as any;
         var tmp: ByteArray = null as any;
         var i: number = 0;
         var c: number = 0;
         var j: number = 0;
         vector = getIV4d();
         tmp = new ByteArray();
         for(i = 0; i < src.length; i++)
         {
            c = Math.floor(src[i]);
            tmp.position = 0;
            tmp.writeBytes(vector);
            key.encrypt(vector);
            src[i] ^= vector[0];
            for(j = 0; j < blockSize - 1; j++)
            {
               vector[j] = tmp[j + 1];
            }
            vector[blockSize - 1] = c;
         }
      }
      
      public encrypt(src: ByteArray): void
      {
         var vector: ByteArray = null as any;
         var tmp: ByteArray = null as any;
         var i: number = 0;
         var j: number = 0;
         vector = getIV4e();
         tmp = new ByteArray();
         for(i = 0; i < src.length; i++)
         {
            tmp.position = 0;
            tmp.writeBytes(vector);
            key.encrypt(vector);
            src[i] ^= vector[0];
            for(j = 0; j < blockSize - 1; j++)
            {
               vector[j] = tmp[j + 1];
            }
            vector[blockSize - 1] = src[i];
         }
      }
   }
