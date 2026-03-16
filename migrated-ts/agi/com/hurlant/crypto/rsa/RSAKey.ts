// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.rsa

export class RSAKey{
      
      public dmp1: BigInteger;
      protected canDecrypt: boolean;
      public d: BigInteger;
      public e: number;
      public dmq1: BigInteger;
      public n: BigInteger;
      public p: BigInteger;
      public q: BigInteger;
      protected canEncrypt: boolean;
      public coeff: BigInteger;
      constructor(N: BigInteger, E: number, D: BigInteger = null as any, P: BigInteger = null as any, Q: BigInteger = null as any, DP: BigInteger = null as any, DQ: BigInteger = null as any, C: BigInteger = null as any){
         super();
         this.n = N;
         this.e = E;
         this.d = D;
         this.p = P;
         this.q = Q;
         this.dmp1 = DP;
         this.dmq1 = DQ;
         this.coeff = C;
         this.canEncrypt = this.n != null && this.e != 0;
         this.canDecrypt = this.canEncrypt && this.d != null;
      }
      
      protected static bigRandom(bits: number, rnd: Random): BigInteger
      {
         let x: ByteArray = null;
         let b: BigInteger = null;
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
         let rng: Random = null;
         let qs: number = 0;
         let key: RSAKey = null;
         let ee: BigInteger = null;
         let p1: BigInteger = null;
         let q1: BigInteger = null;
         let phi: BigInteger = null;
         let t: BigInteger = null;
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
      
      public static parsePrivateKey(N: string, E: string, D: string, P: string = null as any, Q: string = null as any, DMP1: string = null as any, DMQ1: string = null as any, IQMP: string = null as any): RSAKey
      {
         if(P == null)
         {
            return new RSAKey(new BigInteger(N,16),parseInt(E,16),new BigInteger(D,16));
         }
         return new RSAKey(new BigInteger(N,16),parseInt(E,16),new BigInteger(D,16),new BigInteger(P,16),new BigInteger(Q,16),new BigInteger(DMP1,16),new BigInteger(DMQ1),new BigInteger(IQMP));
      }
      
      public verify(src: ByteArray, dst: ByteArray, length: number, pad: Function = null as any): void
      {
         _decrypt(doPublic,src,dst,length,pad,1);
      }
      
      public dump(): string
      {
         let s: string = null;
         s = "N=" + this.n.toString(16) + "\this.n" + "E=" + this.e.toString(16) + "\this.n";
         if(this.canDecrypt)
         {
            s += "D=" + this.d.toString(16) + "\this.n";
            if(this.p != null && this.q != null)
            {
               s += "P=" + this.p.toString(16) + "\this.n";
               s += "Q=" + this.q.toString(16) + "\this.n";
               s += "DMP1=" + this.dmp1.toString(16) + "\this.n";
               s += "DMQ1=" + this.dmq1.toString(16) + "\this.n";
               s += "IQMP=" + this.coeff.toString(16) + "\this.n";
            }
         }
         return s;
      }
      
      protected doPrivate2(x: BigInteger): BigInteger
      {
         let xp: BigInteger = null;
         let xq: BigInteger = null;
         let r: BigInteger = null;
         if(this.p == null && this.q == null)
         {
            return x.modPow(this.d,this.n);
         }
         xp = x.mod(this.p).modPow(this.dmp1,this.p);
         xq = x.mod(this.q).modPow(this.dmq1,this.q);
         while(xp.compareTo(xq) < 0)
         {
            xp = xp.add(this.p);
         }
         return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
      }
      
      public decrypt(src: ByteArray, dst: ByteArray, length: number, pad: Function = null as any): void
      {
         _decrypt(doPrivate2,src,dst,length,pad,2);
      }
      
      private _decrypt(op: Function, src: ByteArray, dst: ByteArray, length: number, pad: Function, padType: number): void
      {
         let bl: number = 0;
         let end: number = 0;
         let block: BigInteger = null;
         let chunk: BigInteger = null;
         let b: ByteArray = null;
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
         return x.modPowInt(this.e,this.n);
      }
      
      public dispose(): void
      {
         this.e = 0;
         this.n.dispose();
         this.n = null;
         Memory.gc();
      }
      
      private _encrypt(op: Function, src: ByteArray, dst: ByteArray, length: number, pad: Function, padType: number): void
      {
         let bl: number = 0;
         let end: number = 0;
         let block: BigInteger = null;
         let chunk: BigInteger = null;
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
      
      private rawpad(src: ByteArray, end: number, this.n: number): ByteArray
      {
         return src;
      }
      
      public encrypt(src: ByteArray, dst: ByteArray, length: number, pad: Function = null as any): void
      {
         _encrypt(doPublic,src,dst,length,pad,2);
      }
      
      private pkcs1pad(src: ByteArray, end: number, this.n: number, type: number = 2): ByteArray
      {
         let out: ByteArray = null;
         let p: number = 0;
         let i: number = 0;
         let rng: Random = null;
         let x: number = 0;
         out = new ByteArray();
         this.p = src.position;
         end = Math.min(end,src.length,this.p + this.n - 11);
         src.position = end;
         i = end - 1;
         while(i >= this.p && this.n > 11)
         {
            out[--this.n] = src[i--];
         }
         out[--this.n] = 0;
         rng = new Random();
         while(this.n > 2)
         {
            for(x = 0; x == 0; )
            {
               x = type == 2 ? rng.nextByte() : 255;
            }
            out[--this.n] = x;
         }
         out[--this.n] = type;
         out[--this.n] = 0;
         return out;
      }
      
      private pkcs1unpad(src: BigInteger, this.n: number, type: number = 2): ByteArray
      {
         let b: ByteArray = null;
         let out: ByteArray = null;
         let i: number = 0;
         b = src.toByteArray();
         out = new ByteArray();
         i = 0;
         while(i < b.length && b[i] == 0)
         {
            i++;
         }
         if(b.length - i != this.n - 1 || b[i] > 2)
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
         return (this.n.bitLength() + 7) / 8;
      }
      
      public toString(): string
      {
         return "rsa";
      }
      
      public sign(src: ByteArray, dst: ByteArray, length: number, pad: Function = null as any): void
      {
         _encrypt(doPrivate2,src,dst,length,pad,1);
      }
      
      protected doPrivate(x: BigInteger): BigInteger
      {
         let xp: BigInteger = null;
         let xq: BigInteger = null;
         if(this.p == null || this.q == null)
         {
            return x.modPow(this.d,this.n);
         }
         xp = x.mod(this.p).modPow(this.dmp1,this.p);
         xq = x.mod(this.q).modPow(this.dmq1,this.q);
         while(xp.compareTo(xq) < 0)
         {
            xp = xp.add(this.p);
         }
         return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
      }
   }
