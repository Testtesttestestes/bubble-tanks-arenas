// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto

export class Crypto{
      
      private b64!: Base64;
      constructor(){

      }
      
      public static getCipher(name: string, key: ByteArray, pad: IPad = null): ICipher
      {
         var keys: any[] = null as any;
         var cipher: ICipher = null as any;
         keys = name.split("-");
         switch(keys[0])
         {
            case "simple":
               keys.shift();
               name = keys.join("-");
               cipher = getCipher(name,key,pad);
               if(cipher instanceof IVMode)
               {
                  return new SimpleIVMode(cipher  as unknown as IVMode);
               }
               return cipher;
               break;
            case "aes":
            case "aes128":
            case "aes192":
            case "aes256":
               keys.shift();
               if(key.length * 8 == keys[0])
               {
                  keys.shift();
               }
               return getMode(keys[0],new AESKey(key),pad);
            case "bf":
            case "blowfish":
               keys.shift();
               return getMode(keys[0],new BlowFishKey(key),pad);
            case "des":
               keys.shift();
               if(keys[0] != "ede" && keys[0] != "ede3")
               {
                  return getMode(keys[0],new DESKey(key),pad);
               }
               if(keys.length == 1)
               {
                  keys.push("ecb");
               }
               break;
            case "3des":
            case "des3":
               break;
            case "xtea":
               keys.shift();
               return getMode(keys[0],new XTeaKey(key),pad);
            case "rc4":
               keys.shift();
               return new ARC4(key);
            default:
               return null;
         }
         keys.shift();
         return getMode(keys[0],new TripleDESKey(key),pad);
      }
      
      public static getHash(name: string): IHash
      {
         switch(name)
         {
            case "md2":
               return new MD2();
            case "md5":
               return new MD5();
            case "sha":
            case "sha1":
               return new SHA1();
            case "sha224":
               return new SHA224();
            case "sha256":
               return new SHA256();
            default:
               return null;
         }
      }
      
      public static getRSA(E: string, M: string): RSAKey
      {
         return RSAKey.parsePublicKey(M,E);
      }
      
      private static getMode(name: string, alg: ISymmetricKey, padding: IPad = null): IMode
      {
         switch(name)
         {
            case "ecb":
               return new ECBMode(alg,padding);
            case "cfb":
               return new CFBMode(alg,padding);
            case "cfb8":
               return new CFB8Mode(alg,padding);
            case "ofb":
               return new OFBMode(alg,padding);
            case "ctr":
               return new CTRMode(alg,padding);
            case "cbc":
         }
         return new CBCMode(alg,padding);
      }
      
      public static getKeySize(name: string): number
      {
         var keys: any[] = null as any;
         keys = name.split("-");
         switch(keys[0])
         {
            case "simple":
               keys.shift();
               return getKeySize(keys.join("-"));
            case "aes128":
               return 16;
            case "aes192":
               return 24;
            case "aes256":
               return 32;
            case "aes":
               keys.shift();
               return parseInt(keys[0]) / 8;
            case "bf":
            case "blowfish":
               return 16;
            case "des":
               keys.shift();
               switch(keys[0])
               {
                  case "ede":
                     return 16;
                  case "ede3":
                     return 24;
                  default:
                     return 8;
               }
               break;
            case "3des":
            case "des3":
               return 24;
            case "xtea":
               return 8;
            case "rc4":
               if(parseInt(keys[1]) > 0)
               {
                  return parseInt(keys[1]) / 8;
               }
               return 16;
               break;
            default:
               return 0;
         }
      }
      
      public static getPad(name: string): IPad
      {
         switch(name)
         {
            case "null":
               return new NullPad();
            case "pkcs5":
         }
         return new PKCS5();
      }
      
      public static getHMAC(name: string): HMAC
      {
         var keys: any[] = null as any;
         var bits: number = 0;
         keys = name.split("-");
         if(keys[0] == "hmac")
         {
            keys.shift();
         }
         bits = 0;
         if(keys.length > 1)
         {
            bits = parseInt(keys[1]);
         }
         return new HMAC(getHash(keys[0]),bits);
      }
   }
