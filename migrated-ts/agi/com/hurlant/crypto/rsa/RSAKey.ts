// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.rsa

export class RSAKey{
      
      public dmp1!: BigInteger;
      protected canDecrypt!: boolean;
      public d!: BigInteger;
      public e!: number;
      public dmq1!: BigInteger;
      public n!: BigInteger;
      public p!: BigInteger;
      public q!: BigInteger;
      protected canEncrypt!: boolean;
      public coeff!: BigInteger;
      constructor(N: BigInteger, E: number, D: BigInteger = null, P: BigInteger = null, Q: BigInteger = null, DP: BigInteger = null, DQ: BigInteger = null, C: BigInteger = null){

         this.n = N;
         this.e = E;
         this.d = D;
         this.p = P;
         this.q = Q;
         this.dmp1 = DP;
         this.dmq1 = DQ;
         this.coeff = C;
         canEncrypt = n != null && e != 0;
         canDecrypt = canEncrypt && d != null as any;
      }
      
      protected static bigRandom(bits: number, rnd: Random): BigInteger
      {
         var x: ByteArray = null as any;
         var b: BigInteger = null as any;
         if(bits < 2)
         {
            return BigInteger.nbv(1);
         }
         x = new ByteArray();
         rnd.nextBytes(x,bits >> 3);
         x.position = 0;
         b = new BigInteger(x);
         b.primify(bits,1);
         return b;
      }
      
      public static parsePublicKey(N: string, E: string): RSAKey
      {
         return new RSAKey(new BigInteger(N,16),parseInt(E,16));
      }
      
      public static generate(B: number, E: string): RSAKey
      {
         var rng: Random = null as any;
         var qs: number = 0;
         var key: RSAKey = null as any;
         var ee: BigInteger = null as any;
         var p1: BigInteger = null as any;
         var q1: BigInteger = null as any;
         var phi: BigInteger = null as any;
         var t: BigInteger = null as any;
         rng = new Random();
         qs = Math.floor(B >> 1);
         key = new RSAKey(null,0,null);
         key.e = parseInt(E,16);
         for(ee = new BigInteger(E,16); true; )
         {
            while(true)
            {
               key.p = bigRandom(B - qs,rng);
               if(key.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && key.p.isProbablePrime(10))
               {
                  break;
               }
            }
            while(true)
            {
               key.q = bigRandom(qs,rng);
               if(key.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && key.q.isProbablePrime(10))
               {
                  break;
               }
            }
            if(key.p.compareTo(key.q) <= 0)
            {
               t = key.p;
               key.p = key.q;
               key.q = t;
            }
            p1 = key.p.subtract(BigInteger.ONE);
            q1 = key.q.subtract(BigInteger.ONE);
            phi = p1.multiply(q1);
            if(phi.gcd(ee).compareTo(BigInteger.ONE) == 0)
            {
               key.n = key.p.multiply(key.q);
               key.d = ee.modInverse(phi);
               key.dmp1 = key.d.mod(p1);
               key.dmq1 = key.d.mod(q1);
               key.coeff = key.q.modInverse(key.p);
               break;
            }
         }
         return key;
      }
      
      public static parsePrivateKey(N: string, E: string, D: string, P: string = null, Q: string = null, DMP1: string = null, DMQ1: string = null, IQMP: string = null): RSAKey
      {
         if(P == null)
         {
            return new RSAKey(new BigInteger(N,16),parseInt(E,16),new BigInteger(D,16));
         }
         return new RSAKey(new BigInteger(N,16),parseInt(E,16),new BigInteger(D,16),new BigInteger(P,16),new BigInteger(Q,16),new BigInteger(DMP1,16),new BigInteger(DMQ1),new BigInteger(IQMP));
      }
      
      public verify(src: ByteArray, dst: ByteArray, length: number, pad: Function = null): void
      {
         _decrypt(doPublic,src,dst,length,pad,1);
      }
      
      public dump(): string
      {
         var s: string = null as any;
         s = "N=" + n.toString(16) + "\n" + "E=" + e.toString(16) + "\n";
         if(canDecrypt)
         {
            s += "D=" + d.toString(16) + "\n";
            if(p != null && q != null)
            {
               s += "P=" + p.toString(16) + "\n";
               s += "Q=" + q.toString(16) + "\n";
               s += "DMP1=" + dmp1.toString(16) + "\n";
               s += "DMQ1=" + dmq1.toString(16) + "\n";
               s += "IQMP=" + coeff.toString(16) + "\n";
            }
         }
         return s;
      }
      
      protected doPrivate2(x: BigInteger): BigInteger
      {
         var xp: BigInteger = null as any;
         var xq: BigInteger = null as any;
         var r: BigInteger = null as any;
         if(p == null && q == null)
         {
            return x.modPow(d,n);
         }
         xp = x.mod(p).modPow(dmp1,p);
         xq = x.mod(q).modPow(dmq1,q);
         while(xp.compareTo(xq) < 0)
         {
            xp = xp.add(p);
         }
         return xp.subtract(xq).multiply(coeff).mod(p).multiply(q).add(xq);
      }
      
      public decrypt(src: ByteArray, dst: ByteArray, length: number, pad: Function = null): void
      {
         _decrypt(doPrivate2,src,dst,length,pad,2);
      }
      
      private _decrypt(op: Function, src: ByteArray, dst: ByteArray, length: number, pad: Function, padType: number): void
      {
         var bl: number = 0;
         var end: number = 0;
         var block: BigInteger = null as any;
         var chunk: BigInteger = null as any;
         var b: ByteArray = null as any;
         if(pad == null)
         {
            pad = pkcs1unpad;
         }
         if(src.position >= src.length)
         {
            src.position = 0;
         }
         bl = getBlockSize();
         end = src.position + length;
         while(src.position < end)
         {
            block = new BigInteger(src,length);
            chunk = op(block);
            b = pad(chunk,bl);
            dst.writeBytes(b);
         }
      }
      
      protected doPublic(x: BigInteger): BigInteger
      {
         return x.modPowInt(e,n);
      }
      
      public dispose(): void
      {
         e = 0;
         n.dispose();
         n = null as any;
         Memory.gc();
      }
      
      private _encrypt(op: Function, src: ByteArray, dst: ByteArray, length: number, pad: Function, padType: number): void
      {
         var bl: number = 0;
         var end: number = 0;
         var block: BigInteger = null as any;
         var chunk: BigInteger = null as any;
         if(pad == null)
         {
            pad = pkcs1pad;
         }
         if(src.position >= src.length)
         {
            src.position = 0;
         }
         bl = getBlockSize();
         end = src.position + length;
         while(src.position < end)
         {
            block = new BigInteger(pad(src,end,bl,padType),bl);
            chunk = op(block);
            chunk.toArray(dst);
         }
      }
      
      private rawpad(src: ByteArray, end: number, n: number): ByteArray
      {
         return src;
      }
      
      public encrypt(src: ByteArray, dst: ByteArray, length: number, pad: Function = null): void
      {
         _encrypt(doPublic,src,dst,length,pad,2);
      }
      
      private pkcs1pad(src: ByteArray, end: number, n: number, type: number = 2): ByteArray
      {
         var out: ByteArray = null as any;
         var p: number = 0;
         var i: number = 0;
         var rng: Random = null as any;
         var x: number = 0;
         out = new ByteArray();
         p = src.position;
         end = Math.min(end,src.length,p + n - 11);
         src.position = end;
         i = end - 1;
         while(i >= p && n > 11)
         {
            out[--n] = src[i--];
         }
         out[--n] = 0;
         rng = new Random();
         while(n > 2)
         {
            for(x = 0; x == 0; )
            {
               x = type == 2 ? rng.nextByte() : 255;
            }
            out[--n] = x;
         }
         out[--n] = type;
         out[--n] = 0;
         return out;
      }
      
      private pkcs1unpad(src: BigInteger, n: number, type: number = 2): ByteArray
      {
         var b: ByteArray = null as any;
         var out: ByteArray = null as any;
         var i: number = 0;
         b = src.toByteArray();
         out = new ByteArray();
         i = 0;
         while(i < b.length && b[i] == 0)
         {
            i++;
         }
         if(b.length - i != n - 1 || b[i] > 2)
         {
            console.log("PKCS#1 unpad: i=" + i + ", expected b[i]==[0,1,2], got b[i]=" + b[i].toString(16));
            return null;
         }
         i++;
         while(b[i] != 0)
         {
            if(++i >= b.length)
            {
               console.log("PKCS#1 unpad: i=" + i + ", b[i-1]!=0 (=" + b[i - 1].toString(16) + ")");
               return null;
            }
         }
         while(++i < b.length)
         {
            out.writeByte(b[i]);
         }
         out.position = 0;
         return out;
      }
      
      public getBlockSize(): number
      {
         return(n.bitLength() + 7) / 8;
      }
      
      public toString(): string
      {
         return "rsa";
      }
      
      public sign(src: ByteArray, dst: ByteArray, length: number, pad: Function = null): void
      {
         _encrypt(doPrivate2,src,dst,length,pad,1);
      }
      
      protected doPrivate(x: BigInteger): BigInteger
      {
         var xp: BigInteger = null as any;
         var xq: BigInteger = null as any;
         if(p == null || q == null)
         {
            return x.modPow(d,n);
         }
         xp = x.mod(p).modPow(dmp1,p);
         xq = x.mod(q).modPow(dmq1,q);
         while(xp.compareTo(xq) < 0)
         {
            xp = xp.add(p);
         }
         return xp.subtract(xq).multiply(coeff).mod(p).multiply(q).add(xq);
      }
   }
