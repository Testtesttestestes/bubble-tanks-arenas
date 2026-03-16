// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.adobe.serialization.json

export class JSONToken{
      
      private _type!: number;
      private _value!: any;
      constructor(param1: number = -1, param2: any = null){

         this._type = param1;
         this._value = param2;
      }
      
      public get type(): number
      {
         return this._type;
      }
      
      public set type(param1: number)
      {
         this._type = param1;
      }
      
      public get value(): any
      {
         return this._value;
      }
      
      public set value(param1: any)
      {
         this._value = param1;
      }
   }
