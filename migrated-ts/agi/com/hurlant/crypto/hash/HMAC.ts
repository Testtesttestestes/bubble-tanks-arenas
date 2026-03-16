// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.hash

export class HMAC{
      
      private bits!: number;
      private hash!: IHash;
      constructor(hash: IHash, bits: number = 0){

         this.hash = hash;
         this.bits = bits;
      }
      
      public getHashSize(): number
      {
         if(bits != 0)
         {
            return bits / 8;
         }
         return hash.getHashSize();
      }
      
      public dispose(): void
      {
         hash = null as any;
         bits = 0;
      }
      
      public compute(key: ByteArray, data: ByteArray): ByteArray
      {
         var hashKey: ByteArray = null as any;
         var innerKey: ByteArray = null as any;
         var outerKey: ByteArray = null as any;
         var i: number = 0;
         var innerHash: ByteArray = null as any;
         var outerHash: ByteArray = null as any;
         if(key.length > hash.getInputSize())
         {
            hashKey = hash.hash(key);
         }
         else
         {
            hashKey = new ByteArray();
            hashKey.writeBytes(key);
         }
         while(hashKey.length < hash.getInputSize())
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
         innerHash = hash.hash(innerKey);
         outerKey.position = hashKey.length;
         outerKey.writeBytes(innerHash);
         outerHash = hash.hash(outerKey);
         if(bits > 0 && bits < 8 * outerHash.length)
         {
            outerHash.length = bits / 8;
         }
         return outerHash;
      }
      
      public toString(): string
      {
         return "hmac-" + (bits > 0 ? bits + "-" : "") + hash.toString();
      }
   }
