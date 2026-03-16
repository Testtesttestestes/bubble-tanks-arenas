// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class XTeaKey implements ISymmetricKey
   {
      
      private k!: any[];
      public readonly NUM_ROUNDS: number = 64;
      constructor(a: ByteArray){

         a.position = 0;
         k = [a.readUnsignedInt(),a.readUnsignedInt(),a.readUnsignedInt(),a.readUnsignedInt()];
      }
      
      public static parseKey(K: string): XTeaKey
      {
         var a: ByteArray = null as any;
         a = new ByteArray();
         a.writeUnsignedInt(parseInt(K.substr(0,8),16));
         a.writeUnsignedInt(parseInt(K.substr(8,8),16));
         a.writeUnsignedInt(parseInt(K.substr(16,8),16));
         a.writeUnsignedInt(parseInt(K.substr(24,8),16));
         a.position = 0;
         return new XTeaKey(a);
      }
      
      public dispose(): void
      {
         var r: Random = null as any;
         var i: number = 0;
         r = new Random();
         for(i = 0; i < k.length; i++)
         {
            k[i] = r.nextByte();
            delete k[i];
         }
         k = null as any;
         Memory.gc();
      }
      
      public encrypt(block: ByteArray, index: number = 0): void
      {
         var v0: number = 0;
         var v1: number = 0;
         var i: number = 0;
         var sum: number = 0;
         var delta: number = 0;
         block.position = index;
         v0 = block.readUnsignedInt();
         v1 = block.readUnsignedInt();
         sum = 0;
         delta = 2654435769;
         for(i = 0; i < NUM_ROUNDS; i++)
         {
            v0 += (v1 << 4 ^ v1 >> 5) + v1 ^ sum + k[sum & 3];
            sum += delta;
            v1 += (v0 << 4 ^ v0 >> 5) + v0 ^ sum + k[sum >> 11 & 3];
         }
         block.position -= 8;
         block.writeUnsignedInt(v0);
         block.writeUnsignedInt(v1);
      }
      
      public decrypt(block: ByteArray, index: number = 0): void
      {
         var v0: number = 0;
         var v1: number = 0;
         var i: number = 0;
         var delta: number = 0;
         var sum: number = 0;
         block.position = index;
         v0 = block.readUnsignedInt();
         v1 = block.readUnsignedInt();
         delta = 2654435769;
         sum = delta * NUM_ROUNDS;
         for(i = 0; i < NUM_ROUNDS; i++)
         {
            v1 -= (v0 << 4 ^ v0 >> 5) + v0 ^ sum + k[sum >> 11 & 3];
            sum -= delta;
            v0 -= (v1 << 4 ^ v1 >> 5) + v1 ^ sum + k[sum & 3];
         }
         block.position -= 8;
         block.writeUnsignedInt(v0);
         block.writeUnsignedInt(v1);
      }
      
      public toString(): string
      {
         return "xtea";
      }
      
      public getBlockSize(): number
      {
         return 8;
      }
   }
