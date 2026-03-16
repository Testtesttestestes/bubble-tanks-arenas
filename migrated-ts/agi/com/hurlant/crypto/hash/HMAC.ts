// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.hash

export class HMAC{
      
      private bits: number;
      private hash: IHash;
      constructor(hash: IHash, bits: number = 0){
         super();
         this.hash = this.hash;
         this.bits = this.bits;
      }
      
      public getHashSize(): number
      {
         if(this.bits != 0)
         {
            return this.bits / 8;
         }
         return this.hash.getHashSize();
      }
      
      public dispose(): void
      {
         this.hash = null;
         this.bits = 0;
      }
      
      public compute(key: ByteArray, data: ByteArray): ByteArray
      {
         let hashKey: ByteArray = null;
         let innerKey: ByteArray = null;
         let outerKey: ByteArray = null;
         let i: number = 0;
         let innerHash: ByteArray = null;
         let outerHash: ByteArray = null;
         if(key.length > this.hash.getInputSize())
         {
            hashKey = this.hash.hash(key);
         }
         else
         {
            hashKey = new ByteArray();
            hashKey.writeBytes(key);
         }
         while(hashKey.length < this.hash.getInputSize())
         {
            hashKey[hashKey.length] = 0;
         }
         innerKey = new ByteArray();
         outerKey = new ByteArray();
         for(i = 0; i < hashKey.length; i++)
         {
            innerKey[i] = hashKey[i] ^ 0x36;
            outerKey[i] = hashKey[i] ^ 0x5C;
         }
         innerKey.position = hashKey.length;
         innerKey.writeBytes(data);
         innerHash = this.hash.hash(innerKey);
         outerKey.position = hashKey.length;
         outerKey.writeBytes(innerHash);
         outerHash = this.hash.hash(outerKey);
         if(this.bits > 0 && this.bits < 8 * outerHash.length)
         {
            outerHash.length = this.bits / 8;
         }
         return outerHash;
      }
      
      public toString(): string
      {
         return "hmac-" + (this.bits > 0 ? this.bits + "-" : "") + this.hash.toString();
      }
   }
