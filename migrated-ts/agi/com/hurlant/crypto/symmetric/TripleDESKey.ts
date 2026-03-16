// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class TripleDESKey extends DESKey{
      
      protected decKey2!: any[];
      protected decKey3!: any[];
      protected encKey2!: any[];
      protected encKey3!: any[];
      constructor(key: ByteArray){
         super(key);
         encKey2 = generateWorkingKey(false,key,8);
         decKey2 = generateWorkingKey(true,key,8);
         if(key.length > 16)
         {
            encKey3 = generateWorkingKey(true,key,16);
            decKey3 = generateWorkingKey(false,key,16);
         }
         else
         {
            encKey3 = encKey;
            decKey3 = decKey;
         }
      }
      
      public decrypt(block: ByteArray, index: number = 0): void
      {
         desFunc(decKey3,block,index,block,index);
         desFunc(decKey2,block,index,block,index);
         desFunc(decKey,block,index,block,index);
      }
      
      public encrypt(block: ByteArray, index: number = 0): void
      {
         desFunc(encKey,block,index,block,index);
         desFunc(encKey2,block,index,block,index);
         desFunc(encKey3,block,index,block,index);
      }
      
      public dispose(): void
      {
         var i: number = 0;
         super.dispose();
         i = 0;
         if(encKey2 != null)
         {
            i = 0;
            while(i < encKey2.length)
            {
               encKey2[i] = 0;
               i++;
            }
            encKey2 = null as any;
         }
         if(encKey3 != null)
         {
            i = 0;
            while(i < encKey3.length)
            {
               encKey3[i] = 0;
               i++;
            }
            encKey3 = null as any;
         }
         if(decKey2 != null)
         {
            i = 0;
            while(i < decKey2.length)
            {
               decKey2[i] = 0;
               i++;
            }
            decKey2 = null as any;
         }
         if(decKey3 != null)
         {
            i = 0;
            while(i < decKey3.length)
            {
               decKey3[i] = 0;
               i++;
            }
            decKey3 = null as any;
         }
         Memory.gc();
      }
      
      public toString(): string
      {
         return "3des";
      }
   }
