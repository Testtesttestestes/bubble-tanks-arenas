// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.prng

export class Random{
      
      private psize: number;
      private ready: boolean = false;
      private seeded: boolean = false;
      private state: IPRNG;
      private pool: ByteArray;
      private pptr: number;
      constructor(prng: any = null){
         let t: number = 0;
         this.ready = false;
         this.seeded = false;
         super();
         if(prng == null)
         {
            prng = ARC4;
         }
         this.state = new prng()  as unknown as IPRNG;
         this.psize = this.state.getPoolSize();
         this.pool = new ByteArray();
         this.pptr = 0;
         while(this.pptr < this.psize)
         {
            t = 65536 * Math.random();
            this.pool[this.pptr++] = t >>> 8;
            this.pool[this.pptr++] = t & 0xFF;
         }
         this.pptr = 0;
         seed();
      }
      
      public seed(x: number = 0): void
      {
         if(x == 0)
         {
            x = new Date().getTime();
         }
         let _temp_3: any = this.pool;
         let _loc2_: number = this.pptr++;
         _temp_3[_loc2_] ^= x & 0xFF;
         let _temp_6: any = this.pool;
         let _loc3_: number = this.pptr++;
         _temp_6[_loc3_] ^= x >> 8 & 0xFF;
         let _temp_9: any = this.pool;
         let _loc4_: number = this.pptr++;
         _temp_9[_loc4_] ^= x >> 16 & 0xFF;
         let _temp_12: any = this.pool;
         let _loc5_: number = this.pptr++;
         _temp_12[_loc5_] ^= x >> 24 & 0xFF;
         this.pptr %= this.psize;
         this.seeded = true;
      }
      
      public toString(): string
      {
         return "random-" + this.state.toString();
      }
      
      public dispose(): void
      {
         let i: number = 0;
         for(i = 0; i < this.pool.length; i++)
         {
            this.pool[i] = Math.random() * 256;
         }
         this.pool.length = 0;
         this.pool = null;
         this.state.dispose();
         this.state = null;
         this.psize = 0;
         this.pptr = 0;
         Memory.gc();
      }
      
      public autoSeed(): void
      {
         let b: ByteArray = null;
         let a: any[] = null;
         let f: Font = null;
         b = new ByteArray();
         b.writeUnsignedInt(System.totalMemory);
         b.writeUTF(Capabilities.serverString);
         b.writeUnsignedInt(getTimer());
         b.writeUnsignedInt(new Date().getTime());
         a = Font.enumerateFonts(true);
         for (let f of a)
         {
            b.writeUTF(f.fontName);
            b.writeUTF(f.fontStyle);
            b.writeUTF(f.fontType);
         }
         b.position = 0;
         while(b.bytesAvailable >= 4)
         {
            seed(b.readUnsignedInt());
         }
      }
      
      public nextByte(): number
      {
         if(!this.ready)
         {
            if(!this.seeded)
            {
               autoSeed();
            }
            this.state.init(this.pool);
            this.pool.length = 0;
            this.pptr = 0;
            this.ready = true;
         }
         return this.state.next();
      }
      
      public nextBytes(buffer: ByteArray, length: number): void
      {
         while(Boolean(length--))
         {
            buffer.writeByte(nextByte());
         }
      }
   }
