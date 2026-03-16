// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.adobe.serialization.json

export class JSONTokenizer{
      
      private obj: Record<string, any>;
      private jsonString: string;
      private loc: number;
      private ch: string;
      constructor(param1: string){
         super();
         this.jsonString = param1;
         this.loc = 0;
         this.nextChar();
      }
      
      public getNextToken(): JSONToken
      {
         let _loc2_: string = null;
         let _loc3_: string = null;
         let _loc4_: string = null;
         let _loc1_: JSONToken = new JSONToken();
         this.skipIgnored();
         switch(this.ch)
         {
            case "{":
               _loc1_.type = JSONTokenType.LEFT_BRACE;
               _loc1_.value = "{";
               this.nextChar();
               break;
            case "}":
               _loc1_.type = JSONTokenType.RIGHT_BRACE;
               _loc1_.value = "}";
               this.nextChar();
               break;
            case "[":
               _loc1_.type = JSONTokenType.LEFT_BRACKET;
               _loc1_.value = "[";
               this.nextChar();
               break;
            case "]":
               _loc1_.type = JSONTokenType.RIGHT_BRACKET;
               _loc1_.value = "]";
               this.nextChar();
               break;
            case ",":
               _loc1_.type = JSONTokenType.COMMA;
               _loc1_.value = ",";
               this.nextChar();
               break;
            case ":":
               _loc1_.type = JSONTokenType.COLON;
               _loc1_.value = ":";
               this.nextChar();
               break;
            case "t":
               _loc2_ = "t" + this.nextChar() + this.nextChar() + this.nextChar();
               if(_loc2_ == "true")
               {
                  _loc1_.type = JSONTokenType.TRUE;
                  _loc1_.value = true;
                  this.nextChar();
                  break;
               }
               this.parseError("Expecting \'true\' but found " + _loc2_);
               break;
            case "f":
               _loc3_ = "f" + this.nextChar() + this.nextChar() + this.nextChar() + this.nextChar();
               if(_loc3_ == "false")
               {
                  _loc1_.type = JSONTokenType.FALSE;
                  _loc1_.value = false;
                  this.nextChar();
                  break;
               }
               this.parseError("Expecting \'false\' but found " + _loc3_);
               break;
            case "n":
               _loc4_ = "n" + this.nextChar() + this.nextChar() + this.nextChar();
               if(_loc4_ == "null")
               {
                  _loc1_.type = JSONTokenType.NULL;
                  _loc1_.value = null;
                  this.nextChar();
                  break;
               }
               this.parseError("Expecting \'null\' but found " + _loc4_);
               break;
            case "\"":
               _loc1_ = this.readString();
               break;
            this.default:
               if(this.isDigit(this.ch) || this.ch == "-")
               {
                  _loc1_ = this.readNumber();
                  break;
               }
               if(this.ch == "")
               {
                  return null;
               }
               this.parseError("Unexpected " + this.ch + " encountered");
         }
         return _loc1_;
      }
      
      private readString(): JSONToken
      {
         let _loc3_: string = null;
         let _loc4_: number = 0;
         let _loc1_: JSONToken = new JSONToken();
         _loc1_.type = JSONTokenType.STRING;
         let _loc2_: string = "";
         this.nextChar();
         for(; this.ch != "\"" && this.ch != ""; this.nextChar())
         {
            if(this.ch != "\\")
            {
               _loc2_ += this.ch;
               continue;
            }
            this.nextChar();
            switch(this.ch)
            {
               case "\"":
                  _loc2_ += "\"";
                  break;
               case "/":
                  _loc2_ += "/";
                  break;
               case "\\":
                  _loc2_ += "\\";
                  break;
               case "b":
                  _loc2_ += "\b";
                  break;
               case "f":
                  _loc2_ += "\f";
                  break;
               case "n":
                  _loc2_ += "\n";
                  break;
               case "r":
                  _loc2_ += "\r";
                  break;
               case "t":
                  _loc2_ += "\t";
                  break;
               case "u":
                  _loc3_ = "";
                  _loc4_ = 0;
                  while(_loc4_ < 4)
                  {
                     if(!this.isHexDigit(this.nextChar()))
                     {
                        this.parseError(" Excepted a hex digit, but found: " + this.ch);
                     }
                     _loc3_ += this.ch;
                     _loc4_++;
                  }
                  _loc2_ += String.fromCharCode(parseInt(_loc3_,16));
                  break;
               this.default:
                  _loc2_ += "\\" + this.ch;
            }
         }
         if(this.ch == "")
         {
            this.parseError("Unterminated string literal");
         }
         this.nextChar();
         _loc1_.value = _loc2_;
         return _loc1_;
      }
      
      private readNumber(): JSONToken
      {
         let _loc1_: JSONToken = new JSONToken();
         _loc1_.type = JSONTokenType.NUMBER;
         let _loc2_: string = "";
         if(this.ch == "-")
         {
            _loc2_ += "-";
            this.nextChar();
         }
         if(!this.isDigit(this.ch))
         {
            this.parseError("Expecting a digit");
         }
         if(this.ch == "0")
         {
            _loc2_ += this.ch;
            this.nextChar();
            if(this.isDigit(this.ch))
            {
               this.parseError("A digit cannot immediately follow 0");
            }
         }
         else
         {
            while(this.isDigit(this.ch))
            {
               _loc2_ += this.ch;
               this.nextChar();
            }
         }
         if(this.ch == ".")
         {
            _loc2_ += ".";
            this.nextChar();
            if(!this.isDigit(this.ch))
            {
               this.parseError("Expecting a digit");
            }
            while(this.isDigit(this.ch))
            {
               _loc2_ += this.ch;
               this.nextChar();
            }
         }
         if(this.ch == "e" || this.ch == "E")
         {
            _loc2_ += "e";
            this.nextChar();
            if(this.ch == "+" || this.ch == "-")
            {
               _loc2_ += this.ch;
               this.nextChar();
            }
            if(!this.isDigit(this.ch))
            {
               this.parseError("Scientific notation number needs exponent value");
            }
            while(this.isDigit(this.ch))
            {
               _loc2_ += this.ch;
               this.nextChar();
            }
         }
         let _loc3_: number = Number(_loc2_);
         if(isFinite(_loc3_) && !isNaN(_loc3_))
         {
            _loc1_.value = _loc3_;
            return _loc1_;
         }
         this.parseError("Number " + _loc3_ + " is not valid!");
         return null;
      }
      
      private nextChar(): string
      {
         return this.ch = this.jsonString.charAt(this.loc++);
      }
      
      private skipIgnored(): void
      {
         let _loc1_: number = 0;
         do
         {
            _loc1_ = this.loc;
            this.skipWhite();
            this.skipComments();
         }
         while(_loc1_ != this.loc);
      }
      
      private skipComments(): void
      {
         if(this.ch == "/")
         {
            this.nextChar();
            switch(this.ch)
            {
               case "/":
                  do
                  {
                     this.nextChar();
                  }
                  while(this.ch != "\n" && this.ch != "");
                  this.nextChar();
                  break;
               case "*":
                  this.nextChar();
                  while(true)
                  {
                     if(this.ch == "*")
                     {
                        this.nextChar();
                        if(this.ch == "/")
                        {
                           this.nextChar();
                           break;
                        }
                     }
                     else
                     {
                        this.nextChar();
                     }
                     if(this.ch == "")
                     {
                        this.parseError("Multi-line comment not closed");
                     }
                  }
                  break;
               this.default:
                  this.parseError("Unexpected " + this.ch + " encountered (expecting \'/\' or \'*\' )");
            }
         }
      }
      
      private skipWhite(): void
      {
         while(this.isWhiteSpace(this.ch))
         {
            this.nextChar();
         }
      }
      
      private isWhiteSpace(param1: string): boolean
      {
         return param1 == " " || param1 == "\t" || param1 == "\n" || param1 == "\r";
      }
      
      private isDigit(param1: string): boolean
      {
         return param1 >= "0" && param1 <= "9";
      }
      
      private isHexDigit(param1: string): boolean
      {
         let _loc2_: string = param1.toUpperCase();
         return this.isDigit(param1) || _loc2_ >= "A" && _loc2_ <= "F";
      }
      
      public parseError(param1: string): void
      {
         throw new JSONParseError(param1,this.loc,this.jsonString);
      }
   }
