// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class CTRMode extends IVMode implements IMode
   {
      
      constructor(key: ISymmetricKey, padding: IPad = null){
         super(key,padding);
      }
      
      public toString(): string
      {
         return key.toString() + "-ctr";
      }
      
      private core(src: ByteArray, iv: ByteArray): void
      {
         var X: ByteArray = null as any;
         var Xenc: ByteArray = null as any;
         var i: number = 0;
         var j: number = 0;
         X = new ByteArray();
         Xenc = new ByteArray();
         X.writeBytes(iv);
         for(i = 0; i < src.length; i += blockSize)
         {
            Xenc.position = 0;
            Xenc.writeBytes(X);
            key.encrypt(Xenc);
            for(j = 0; j < blockSize; j++)
            {
               src[i + j] ^= Xenc[j];
            }
            for(j = blockSize - 1; j >= 0; j--)
            {
               ++X[j];
               if(X[j] != 0)
               {
                  break;
               }
            }
         }
      }
      
      public decrypt(src: ByteArray): void
      {
         var vector: ByteArray = null as any;
         vector = getIV4d();
         core(src,vector);
         padding.unpad(src);
      }
      
      public encrypt(src: ByteArray): void
      {
         var vector: ByteArray = null as any;
         padding.pad(src);
         vector = getIV4e();
         core(src,vector);
      }
   }
