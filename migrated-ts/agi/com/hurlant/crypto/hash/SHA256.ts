// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.hash

export class SHA256 extends SHABase implements IHash
   {
      
      protected static readonly k: any[] = [1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];
      protected h: any[] = [1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];
      constructor(){
         super();
      }
      
      protected rrol(num: number, cnt: number): number
      {
         return num << 32 - cnt | num >>> cnt;
      }
      
      public toString(): string
      {
         return "sha256";
      }
      
      public getHashSize(): number
      {
         return 32;
      }
      
      protected core(x: any[], len: number): any[]
      {
         let w: any[] = null;
         let a: number = 0;
         let b: number = 0;
         let c: number = 0;
         let d: number = 0;
         let e: number = 0;
         let f: number = 0;
         let g: number = 0;
         let h: number = 0;
         let i: number = 0;
         let olda: number = 0;
         let oldb: number = 0;
         let oldc: number = 0;
         let oldd: number = 0;
         let olde: number = 0;
         let oldf: number = 0;
         let oldg: number = 0;
         let oldh: number = 0;
         let j: number = 0;
         let t2: number = 0;
         let t1: number = 0;
         let s0: number = 0;
         let s1: number = 0;
         x[len >> 5] |= 128 << 24 - len % 32;
         x[(len + 64 >> 9 << 4) + 15] = len;
         w = [];
         a = Math.floor(this.h[0]);
         b = Math.floor(this.h[1]);
         c = Math.floor(this.h[2]);
         d = Math.floor(this.h[3]);
         e = Math.floor(this.h[4]);
         f = Math.floor(this.h[5]);
         g = Math.floor(this.h[6]);
         this.h = Math.floor(this.h[7]);
         for(i = 0; i < x.length; i += 16)
         {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;
            olde = e;
            oldf = f;
            oldg = g;
            oldh = this.h;
            for(j = 0; j < 64; j++)
            {
               if(j < 16)
               {
                  w[j] = x[i + j] || 0;
               }
               else
               {
                  s0 = Math.floor(rrol(w[j - 15],7) ^ rrol(w[j - 15],18) ^ w[j - 15] >>> 3);
                  s1 = Math.floor(rrol(w[j - 2],17) ^ rrol(w[j - 2],19) ^ w[j - 2] >>> 10);
                  w[j] = w[j - 16] + s0 + w[j - 7] + s1;
               }
               t2 = (rrol(a,2) ^ rrol(a,13) ^ rrol(a,22)) + (a & b ^ a & c ^ b & c);
               t1 = this.h + (rrol(e,6) ^ rrol(e,11) ^ rrol(e,25)) + (e & f ^ g & ~e) + this.k[j] + w[j];
               this.h = g;
               g = f;
               f = e;
               e = d + t1;
               d = c;
               c = b;
               b = a;
               a = t1 + t2;
            }
            a += olda;
            b += oldb;
            c += oldc;
            d += oldd;
            e += olde;
            f += oldf;
            g += oldg;
            this.h += oldh;
         }
         return [a,b,c,d,e,f,g,this.h];
      }
   }
