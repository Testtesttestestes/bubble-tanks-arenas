// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.symmetric

export class XTeaKey implements ISymmetricKey
   {
      
      private k: any[];
      public readonly NUM_ROUNDS: number = 64;
      constructor(a: ByteArray){
         super();
         a.position = 0;
         this.k = [a.readUnsignedInt(),a.readUnsignedInt(),a.readUnsignedInt(),a.readUnsignedInt()];
      }
      
      public static parseKey(K: string): XTeaKey
      {
         let a: ByteArray = null;
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
         let r: Random = null;
         let i: number = 0;
         r = new Random();
         for(i = 0; i < this.k.length; i++)
         {
            this.k[i] = r.nextByte();
            delete this.k[i];
         }
         this.k = null;
         Memory.gc();
      }
      
      public encrypt(block: ByteArray, index: number = 0): void
      {
         let v0: number = 0;
         let v1: number = 0;
         let i: number = 0;
         let sum: number = 0;
         let delta: number = 0;
         block.position = index;
         v0 = block.readUnsignedInt();
         v1 = block.readUnsignedInt();
         sum = 0;
         delta = 2654435769;
         for(i = 0; i < this.NUM_ROUNDS; i++)
         {
            v0 += (v1 << 4 ^ v1 >> 5) + v1 ^ sum + this.k[sum & 3];
            sum += delta;
            v1 += (v0 << 4 ^ v0 >> 5) + v0 ^ sum + this.k[sum >> 11 & 3];
         }
         block.position -= 8;
         block.writeUnsignedInt(v0);
         block.writeUnsignedInt(v1);
      }
      
      public decrypt(block: ByteArray, index: number = 0): void
      {
         let v0: number = 0;
         let v1: number = 0;
         let i: number = 0;
         let delta: number = 0;
         let sum: number = 0;
         block.position = index;
         v0 = block.readUnsignedInt();
         v1 = block.readUnsignedInt();
         delta = 2654435769;
         sum = delta * this.NUM_ROUNDS;
         for(i = 0; i < this.NUM_ROUNDS; i++)
         {
            v1 -= (v0 << 4 ^ v0 >> 5) + v0 ^ sum + this.k[sum >> 11 & 3];
            sum -= delta;
            v0 -= (v1 << 4 ^ v1 >> 5) + v1 ^ sum + this.k[sum & 3];
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
