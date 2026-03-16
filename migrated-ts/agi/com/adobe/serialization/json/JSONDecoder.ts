// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.adobe.serialization.json

import { JSONTokenizer } from "./JSONTokenizer";
import { JSONToken } from "./JSONToken";
import { JSONTokenType } from "./JSONTokenType";


   export class JSONDecoder{
      
      private value!: any;
      private tokenizer!: JSONTokenizer;
      private token!: JSONToken;
      constructor(param1: string){

         this.tokenizer = new JSONTokenizer(param1);
         this.nextToken();
         this.value = this.parseValue();
      }
      
      public getValue(): any
      {
         return this.value;
      }
      
      private nextToken(): JSONToken
      {
         return this.token = this.tokenizer.getNextToken();
      }
      
      private parseArray(): any[]
      {
         var _loc1_: any[] = new Array();
         this.nextToken();
         if(this.token.type == JSONTokenType.RIGHT_BRACKET)
         {
            return _loc1_;
         }
         while(true)
         {
            _loc1_.push(this.parseValue());
            this.nextToken();
            if(this.token.type == JSONTokenType.RIGHT_BRACKET)
            {
               return _loc1_;
            }
            if(this.token.type == JSONTokenType.COMMA)
            {
               this.nextToken();
            }
            else
            {
               this.tokenizer.parseError("Expecting ] or , but found " + this.token.value);
            }
         }
         return null;
      }
      
      private parseObject(): any
      {
         var _loc2_: string = null as any;
         var _loc1_: any = new Object();
         this.nextToken();
         if(this.token.type == JSONTokenType.RIGHT_BRACE)
         {
            return _loc1_;
         }
         while(true)
         {
            if(this.token.type == JSONTokenType.STRING)
            {
               _loc2_ = String(this.token.value);
               this.nextToken();
               if(this.token.type == JSONTokenType.COLON)
               {
                  this.nextToken();
                  _loc1_[_loc2_] = this.parseValue();
                  this.nextToken();
                  if(this.token.type == JSONTokenType.RIGHT_BRACE)
                  {
                     return _loc1_;
                  }
                  if(this.token.type == JSONTokenType.COMMA)
                  {
                     this.nextToken();
                  }
                  else
                  {
                     this.tokenizer.parseError("Expecting } or , but found " + this.token.value);
                  }
               }
               else
               {
                  this.tokenizer.parseError("Expecting : but found " + this.token.value);
               }
            }
            else
            {
               this.tokenizer.parseError("Expecting string but found " + this.token.value);
            }
         }
         return null;
      }
      
      private parseValue(): any
      {
         if(this.token == null)
         {
            this.tokenizer.parseError("Unexpected end of input");
         }
         switch(this.token.type)
         {
            case JSONTokenType.LEFT_BRACE:
               return this.parseObject();
            case JSONTokenType.LEFT_BRACKET:
               return this.parseArray();
            case JSONTokenType.STRING:
            case JSONTokenType.NUMBER:
            case JSONTokenType.TRUE:
            case JSONTokenType.FALSE:
            case JSONTokenType.NULL:
               return this.token.value;
            default:
               this.tokenizer.parseError("Unexpected " + this.token.value);
               return null;
         }
      }
   
}
