// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.adobe.serialization.json

export class JSONParseError extends Error{
      
      private _location!: number;
      private _text!: string;
      constructor(param1: string = "", param2: number = 0, param3: string = ""){
         super(param1);
this.name = "JSONParseError";
         this._location = param2;
         this._text = param3;
      }
      
      public get location(): number
      {
         return this._location;
      }
      
      public get text(): string
      {
         return this._text;
      }
   }
