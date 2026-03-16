// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services.compression

export class Base64{
      
      private static _linebreaks!: boolean;
      private static _b64Chars: any[] = (() => {
        let __ts2695Tmp0: any;
        __ts2695Tmp0 = "A";
        __ts2695Tmp0 = "B";
        __ts2695Tmp0 = "C";
        __ts2695Tmp0 = "D";
        __ts2695Tmp0 = "E";
        __ts2695Tmp0 = "F";
        __ts2695Tmp0 = "G";
        __ts2695Tmp0 = "H";
        __ts2695Tmp0 = "I";
        __ts2695Tmp0 = "J";
        __ts2695Tmp0 = "K";
        __ts2695Tmp0 = "L";
        __ts2695Tmp0 = "M";
        __ts2695Tmp0 = "N";
        __ts2695Tmp0 = "O";
        __ts2695Tmp0 = "P";
        __ts2695Tmp0 = "Q";
        __ts2695Tmp0 = "R";
        __ts2695Tmp0 = "S";
        __ts2695Tmp0 = "T";
        __ts2695Tmp0 = "U";
        __ts2695Tmp0 = "V";
        __ts2695Tmp0 = "W";
        __ts2695Tmp0 = "X";
        __ts2695Tmp0 = "Y";
        __ts2695Tmp0 = "Z";
        __ts2695Tmp0 = "a";
        __ts2695Tmp0 = "b";
        __ts2695Tmp0 = "c";
        __ts2695Tmp0 = "d";
        __ts2695Tmp0 = "e";
        __ts2695Tmp0 = "f";
        __ts2695Tmp0 = "g";
        __ts2695Tmp0 = "h";
        __ts2695Tmp0 = "i";
        __ts2695Tmp0 = "j";
        __ts2695Tmp0 = "k";
        __ts2695Tmp0 = "l";
        __ts2695Tmp0 = "m";
        __ts2695Tmp0 = "n";
        __ts2695Tmp0 = "o";
        __ts2695Tmp0 = "p";
        __ts2695Tmp0 = "q";
        __ts2695Tmp0 = "r";
        __ts2695Tmp0 = "s";
        __ts2695Tmp0 = "t";
        __ts2695Tmp0 = "u";
        __ts2695Tmp0 = "v";
        __ts2695Tmp0 = "w";
        __ts2695Tmp0 = "x";
        __ts2695Tmp0 = "y";
        __ts2695Tmp0 = "z";
        __ts2695Tmp0 = "0";
        __ts2695Tmp0 = "1";
        __ts2695Tmp0 = "2";
        __ts2695Tmp0 = "3";
        __ts2695Tmp0 = "4";
        __ts2695Tmp0 = "5";
        __ts2695Tmp0 = "6";
        __ts2695Tmp0 = "7";
        __ts2695Tmp0 = "8";
        __ts2695Tmp0 = "9";
        __ts2695Tmp0 = "+";
        __ts2695Tmp0 = "/";
        return new (__ts2695Tmp0 as unknown as any[]);
      })();
      private static _b64Lookup: Record<string, any> = _buildB64Lookup();
      constructor(){

      }
      
      public static isWhitespace(param1: string): boolean
      {
         switch(param1)
         {
            case " ":
            case "\t":
            case "\r":
            case "\n":
            case "\f":
               return true;
            default:
               return false;
         }
      }
      
      public static Encode(param1: ByteArray, param2: boolean = false): string
      {
         _linebreaks = param2;
         return _encodeBytes(param1);
      }
      
      public static Decode(param1: string): ByteArray
      {
         return _decodeSring(param1);
      }
      
      private static _buildB64Lookup(): Record<string, any>
      {
         var _loc1_: Record<string, any> = new Object();
         var _loc2_: number = 0;
         while(_loc2_ < _b64Chars.length)
         {
            _loc1_[_b64Chars[_loc2_]] = _loc2_;
            _loc2_++;
         }
         return _loc1_;
      }
      
      private static _isBase64(param1: string): boolean
      {
         return _b64Lookup[param1] != undefined;
      }
      
      private static _encodeBytes(param1: ByteArray): string
      {
         var _loc3_: number = 0;
         var _loc5_: ByteArray = null as any;
         var _loc2_: string = "";
         var _loc4_: number = 0;
         param1.position = 0;
         while(param1.position < param1.length)
         {
            _loc3_ = param1.bytesAvailable >= 3 ? 3 : param1.bytesAvailable;
            _loc5_ = new ByteArray();
            param1.readBytes(_loc5_,0,_loc3_);
            _loc2_ += _b64EncodeBuffer(_loc5_);
            _loc4_ += 4;
            if(_linebreaks && _loc4_ % 76 == 0)
            {
               _loc2_ += "\n";
               _loc4_ = 0;
            }
         }
         return _loc2_.toString();
      }
      
      private static _b64EncodeBuffer(param1: ByteArray): string
      {
         var _loc2_: string = "";
         _loc2_ += _b64Chars[param1[0] >> 2];
         switch(param1.length)
         {
            case 1:
               _loc2_ += _b64Chars[param1[0] << 4 & 0x30];
               _loc2_ += "==";
               break;
            case 2:
               _loc2_ += _b64Chars[param1[0] << 4 & 0x30 | param1[1] >> 4];
               _loc2_ += _b64Chars[param1[1] << 2 & 0x3C];
               _loc2_ += "=";
               break;
            case 3:
               _loc2_ += _b64Chars[param1[0] << 4 & 0x30 | param1[1] >> 4];
               _loc2_ += _b64Chars[param1[1] << 2 & 0x3C | param1[2] >> 6];
               _loc2_ += _b64Chars[param1[2] & 0x3F];
               break;
            default:
               console.log("Base64 byteBuffer outOfRange");
         }
         return _loc2_.toString();
      }
      
      private static _decodeSring(param1: string): ByteArray
      {
         var _loc7_: string = null as any;
         var _loc2_: string = "" + param1;
         var _loc3_: ByteArray = new ByteArray();
         var _loc4_: string = "";
         var _loc5_: number = Math.floor(_loc2_.length);
         var _loc6_: number = 0;
         while(_loc6_ < _loc5_)
         {
            _loc7_ = _loc2_.charAt(_loc6_);
            if(!isWhitespace(_loc7_) && (_isBase64(_loc7_) || _loc7_ == "="))
            {
               _loc4_ += _loc7_;
               if(_loc4_.length == 4)
               {
                  _loc3_.writeBytes(_b64DecodeBuffer(_loc4_));
                  _loc4_ = "";
               }
            }
            _loc6_++;
         }
         _loc3_.position = 0;
         return _loc3_;
      }
      
      private static _b64DecodeBuffer(param1: string): ByteArray
      {
         var _loc2_: ByteArray = new ByteArray();
         var _loc3_: number = Math.floor(_b64Lookup[param1.charAt(0)]);
         var _loc4_: number = Math.floor(_b64Lookup[param1.charAt(1)]);
         var _loc5_: number = Math.floor(_b64Lookup[param1.charAt(2)]);
         var _loc6_: number = Math.floor(_b64Lookup[param1.charAt(3)]);
         _loc2_.writeByte(_loc3_ << 2 | _loc4_ >> 4);
         if(param1.charAt(2) != "=")
         {
            _loc2_.writeByte(_loc4_ << 4 | _loc5_ >> 2);
         }
         if(param1.charAt(3) != "=")
         {
            _loc2_.writeByte(_loc5_ << 6 | _loc6_);
         }
         return _loc2_;
      }
   }
