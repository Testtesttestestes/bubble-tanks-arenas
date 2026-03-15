// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_4

export class class_14{
      
      private b64: Base64;
      constructor(){
         super();
      }
      
      public static method_46(param1: string, param2: ByteArray, param3: class_11 = null as any): class_12
      {
         let _loc5_: class_12 = null;
         let _loc4_: any[] = param1.split("-");
         switch(_loc4_[0])
         {
            case "simple":
               _loc4_.shift();
               param1 = _loc4_.join("-");
               _loc5_ = method_46(param1,param2,param3);
               if(_loc5_ instanceof class_23)
               {
                  return new class_41(_loc5_  as unknown as class_23);
               }
               return _loc5_;
               break;
            case "aes":
            case "aes128":
            case "aes192":
            case "aes256":
               _loc4_.shift();
               if(param2.length * 8 == _loc4_[0])
               {
                  _loc4_.shift();
               }
               return method_74(_loc4_[0],new class_32(param2),param3);
            case "bf":
            case "blowfish":
               _loc4_.shift();
               return method_74(_loc4_[0],new class_33(param2),param3);
            case "des":
               _loc4_.shift();
               if(_loc4_[0] != "ede" && _loc4_[0] != "ede3")
               {
                  return method_74(_loc4_[0],new class_34(param2),param3);
               }
               if(_loc4_.length == 1)
               {
                  _loc4_.push("ecb");
               }
               break;
            case "3des":
            case "des3":
               break;
            case "xtea":
               _loc4_.shift();
               return method_74(_loc4_[0],new class_35(param2),param3);
            case "rc4":
               _loc4_.shift();
               return new ARC4(param2);
            default:
               return null;
         }
         _loc4_.shift();
         return method_74(_loc4_[0],new class_42(param2),param3);
      }
      
      public static method_301(param1: string): class_17
      {
         switch(param1)
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
      
      public static method_783(param1: string, param2: string): class_19
      {
         return class_19.method_659(param2,param1);
      }
      
      private static method_74(param1: string, param2: class_18, param3: class_11 = null as any): class_29
      {
         switch(param1)
         {
            case "ecb":
               return new class_37(param2,param3);
            case "cfb":
               return new class_40(param2,param3);
            case "cfb8":
               return new CFB8Mode(param2,param3);
            case "ofb":
               return new class_38(param2,param3);
            case "ctr":
               return new class_36(param2,param3);
            case "cbc":
            default:
               return new class_39(param2,param3);
         }
      }
      
      public static method_378(param1: string): number
      {
         let _loc2_: any[] = param1.split("-");
         switch(_loc2_[0])
         {
            case "simple":
               _loc2_.shift();
               return method_378(_loc2_.join("-"));
            case "aes128":
               return 16;
            case "aes192":
               return 24;
            case "aes256":
               return 32;
            case "aes":
               _loc2_.shift();
               return parseInt(_loc2_[0]) / 8;
            case "bf":
            case "blowfish":
               return 16;
            case "des":
               _loc2_.shift();
               switch(_loc2_[0])
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
               if(parseInt(_loc2_[1]) > 0)
               {
                  return parseInt(_loc2_[1]) / 8;
               }
               return 16;
               break;
            default:
               return 0;
         }
      }
      
      public static method_829(param1: string): class_11
      {
         switch(param1)
         {
            case "null":
               return new class_28();
            case "pkcs5":
            default:
               return new PKCS5();
         }
      }
      
      public static method_843(param1: string): class_20
      {
         let _loc2_: any[] = param1.split("-");
         if(_loc2_[0] == "hmac")
         {
            _loc2_.shift();
         }
         let _loc3_: number = 0;
         if(_loc2_.length > 1)
         {
            _loc3_ = parseInt(_loc2_[1]);
         }
         return new class_20(method_301(_loc2_[0]),_loc3_);
      }
   }
