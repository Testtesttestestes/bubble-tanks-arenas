// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.prng

export class Random{
      
      private psize!: number;
      private ready: boolean = false;
      private seeded: boolean = false;
      private state!: IPRNG;
      private pool!: ByteArray;
      private pptr!: number;
      constructor(prng: any = null){
         var t: number = 0;
         ready = false;
         seeded = false;

         if(prng == null)
         {
            prng = ARC4;
         }
         state = new prng()  as unknown as IPRNG;
         psize = state.getPoolSize();
         pool = new ByteArray();
         pptr = 0;
         while(pptr < psize)
         {
            t = 65536 * Math.random();
            pool[pptr++] = t >>> 8;
            pool[pptr++] = t & 0xFF;
         }
         pptr = 0;
         seed();
      }
      
      public seed(x: number = 0): void
      {
         if(x == 0)
         {
            x = new Date().getTime();
         }
         var _temp_3: any = pool;
         var _loc2_: number = pptr++;
         _temp_3[_loc2_] ^= x & 0xFF;
         var _temp_6: any = pool;
         var _loc3_: number = pptr++;
         _temp_6[_loc3_] ^= x >> 8 & 0xFF;
         var _temp_9: any = pool;
         var _loc4_: number = pptr++;
         _temp_9[_loc4_] ^= x >> 16 & 0xFF;
         var _temp_12: any = pool;
         var _loc5_: number = pptr++;
         _temp_12[_loc5_] ^= x >> 24 & 0xFF;
         pptr %= psize;
         seeded = true;
      }
      
      public toString(): string
      {
         return "random-" + state.toString();
      }
      
      public dispose(): void
      {
         var i: number = 0;
         for(i = 0; i < pool.length; i++)
         {
            pool[i] = Math.random() * 256;
         }
         pool.length = 0;
         pool = null as any;
         state.dispose();
         state = null as any;
         psize = 0;
         pptr = 0;
         Memory.gc();
      }
      
      public autoSeed(): void
      {
         var b: ByteArray = null as any;
         var a: any[] = null as any;
         var f: Font = null as any;
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
         if(!ready)
         {
            if(!seeded)
            {
               autoSeed();
            }
            state.init(pool);
            pool.length = 0;
            pptr = 0;
            ready = true;
         }
         return state.next();
      }
      
      public nextBytes(buffer: ByteArray, length: number): void
      {
         while(Boolean(length--))
         {
            buffer.writeByte(nextByte());
         }
      }
   }
