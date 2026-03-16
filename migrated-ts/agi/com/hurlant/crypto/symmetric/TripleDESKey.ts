// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class TripleDESKey extends DESKey{
      
      protected decKey2: any[];
      protected decKey3: any[];
      protected encKey2: any[];
      protected encKey3: any[];
      constructor(key: ByteArray){
         super(key);
         this.encKey2 = generateWorkingKey(false,key,8);
         this.decKey2 = generateWorkingKey(true,key,8);
         if(key.length > 16)
         {
            this.encKey3 = generateWorkingKey(true,key,16);
            this.decKey3 = generateWorkingKey(false,key,16);
         }
         else
         {
            this.encKey3 = encKey;
            this.decKey3 = decKey;
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
         let i: number = 0;
         super.dispose();
         i = 0;
         if(this.encKey2 != null)
         {
            i = 0;
            while(i < this.encKey2.length)
            {
               this.encKey2[i] = 0;
               i++;
            }
            this.encKey2 = null;
         }
         if(this.encKey3 != null)
         {
            i = 0;
            while(i < this.encKey3.length)
            {
               this.encKey3[i] = 0;
               i++;
            }
            this.encKey3 = null;
         }
         if(this.decKey2 != null)
         {
            i = 0;
            while(i < this.decKey2.length)
            {
               this.decKey2[i] = 0;
               i++;
            }
            this.decKey2 = null;
         }
         if(this.decKey3 != null)
         {
            i = 0;
            while(i < this.decKey3.length)
            {
               this.decKey3[i] = 0;
               i++;
            }
            this.decKey3 = null;
         }
         Memory.gc();
      }
      
      public toString(): string
      {
         return "3des";
      }
   }
