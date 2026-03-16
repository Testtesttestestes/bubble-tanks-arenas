// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services.compression

export class Base64{
      
      private static _linebreaks: boolean;
      private static _b64Chars: any[] = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/");
      private static _b64Lookup: Record<string, any> = _buildB64Lookup();
      constructor(){
         super();
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
            this.default:
               return false;
         }
      }
      
      public static Encode(param1: ByteArray, param2: boolean = false): string
      {
         this._linebreaks = param2;
         return _encodeBytes(param1);
      }
      
      public static Decode(param1: string): ByteArray
      {
         return _decodeSring(param1);
      }
      
      private static _buildB64Lookup(): Record<string, any>
      {
         let _loc1_: Record<string, any> = new Object();
         let _loc2_: number = 0;
         while(_loc2_ < this._b64Chars.length)
         {
            _loc1_[this._b64Chars[_loc2_]] = _loc2_;
            _loc2_++;
         }
         return _loc1_;
      }
      
      private static _isBase64(param1: string): boolean
      {
         return this._b64Lookup[param1] != undefined;
      }
      
      private static _encodeBytes(param1: ByteArray): string
      {
         let _loc3_: number = 0;
         let _loc5_: ByteArray = null;
         let _loc2_: string = "";
         let _loc4_: number = 0;
         param1.position = 0;
         while(param1.position < param1.length)
         {
            _loc3_ = param1.bytesAvailable >= 3 ? 3 : param1.bytesAvailable;
            _loc5_ = new ByteArray();
            param1.readBytes(_loc5_,0,_loc3_);
            _loc2_ += _b64EncodeBuffer(_loc5_);
            _loc4_ += 4;
            if(this._linebreaks && _loc4_ % 76 == 0)
            {
               _loc2_ += "\n";
               _loc4_ = 0;
            }
         }
         return _loc2_.toString();
      }
      
      private static _b64EncodeBuffer(param1: ByteArray): string
      {
         let _loc2_: string = "";
         _loc2_ += this._b64Chars[param1[0] >> 2];
         switch(param1.length)
         {
            case 1:
               _loc2_ += this._b64Chars[param1[0] << 4 & 0x30];
               _loc2_ += "==";
               break;
            case 2:
               _loc2_ += this._b64Chars[param1[0] << 4 & 0x30 | param1[1] >> 4];
               _loc2_ += this._b64Chars[param1[1] << 2 & 0x3C];
               _loc2_ += "=";
               break;
            case 3:
               _loc2_ += this._b64Chars[param1[0] << 4 & 0x30 | param1[1] >> 4];
               _loc2_ += this._b64Chars[param1[1] << 2 & 0x3C | param1[2] >> 6];
               _loc2_ += this._b64Chars[param1[2] & 0x3F];
               break;
            this.default:
               console.log("Base64 byteBuffer outOfRange");
         }
         return _loc2_.toString();
      }
      
      private static _decodeSring(param1: string): ByteArray
      {
         let _loc7_: string = null;
         let _loc2_: string = "" + param1;
         let _loc3_: ByteArray = new ByteArray();
         let _loc4_: string = "";
         let _loc5_: number = Math.floor(_loc2_.length);
         let _loc6_: number = 0;
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
         let _loc2_: ByteArray = new ByteArray();
         let _loc3_: number = Math.floor(this._b64Lookup[param1.charAt(0)]);
         let _loc4_: number = Math.floor(this._b64Lookup[param1.charAt(1)]);
         let _loc5_: number = Math.floor(this._b64Lookup[param1.charAt(2)]);
         let _loc6_: number = Math.floor(this._b64Lookup[param1.charAt(3)]);
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
