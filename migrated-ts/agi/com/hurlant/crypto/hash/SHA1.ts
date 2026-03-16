// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.hash

export class SHA1 extends SHABase implements IHash
   {
      
      public static readonly HASH_SIZE: number = 20;
      constructor(){
         super();
      }
      
      private ft(t: number, b: number, c: number, d: number): number
      {
         if(t < 20)
         {
            return b & c | ~b & d;
         }
         if(t < 40)
         {
            return b ^ c ^ d;
         }
         if(t < 60)
         {
            return b & c | b & d | c & d;
         }
         return b ^ c ^ d;
      }
      
      private kt(t: number): number
      {
         return t < 20 ? 1518500249 : (t < 40 ? 1859775393 : (t < 60 ? Math.floor(2400959708) : Math.floor(3395469782)));
      }
      
      public toString(): string
      {
         return "sha1";
      }
      
      public getHashSize(): number
      {
         return this.HASH_SIZE;
      }
      
      private rol(num: number, cnt: number): number
      {
         return num << cnt | num >>> 32 - cnt;
      }
      
      protected core(x: any[], len: number): any[]
      {
         let w: any[] = null;
         let a: number = 0;
         let b: number = 0;
         let c: number = 0;
         let d: number = 0;
         let e: number = 0;
         let i: number = 0;
         let olda: number = 0;
         let oldb: number = 0;
         let oldc: number = 0;
         let oldd: number = 0;
         let olde: number = 0;
         let j: number = 0;
         let t: number = 0;
         x[len >> 5] |= 128 << 24 - len % 32;
         x[(len + 64 >> 9 << 4) + 15] = len;
         w = [];
         a = 1732584193;
         b = 4023233417;
         c = 2562383102;
         d = 271733878;
         e = 3285377520;
         for(i = 0; i < x.length; i += 16)
         {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;
            olde = e;
            for(j = 0; j < 80; j++)
            {
               if(j < 16)
               {
                  w[j] = x[i + j] || 0;
               }
               else
               {
                  w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16],1);
               }
               t = rol(a,5) + ft(j,b,c,d) + e + w[j] + kt(j);
               e = d;
               d = c;
               c = rol(b,30);
               b = a;
               a = t;
            }
            a += olda;
            b += oldb;
            c += oldc;
            d += oldd;
            e += olde;
         }
         return [a,b,c,d,e];
      }
   }
