// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.events

export class DataChangeEvent extends Event{
      
      public static readonly DATA_CHANGE: string = "dataChange";
      public static readonly PRE_DATA_CHANGE: string = "preDataChange";
      protected _items: any[];
      protected _changeType: string;
      protected _startIndex: number;
      protected _endIndex: number;
      constructor(param1: string, param2: string, param3: any[], param4: number = -1, param5: number = -1){
         super(param1);
         this._changeType = param2;
         this._startIndex = param4;
         this._items = param3;
         this._endIndex = param5 == -1 ? this._startIndex : Math.floor(param5);
      }
      
      public get items(): any[]
      {
         return this._items;
      }
      
      public get changeType(): string
      {
         return this._changeType;
      }
      
      public get startIndex(): number
      {
         return this._startIndex;
      }
      
      public get endIndex(): number
      {
         return this._endIndex;
      }
      
      public toString(): string
      {
         return formatToString("DataChangeEvent","type","changeType","startIndex","endIndex","bubbles","cancelable");
      }
      
      public clone(): Event
      {
         return new DataChangeEvent(type,this._changeType,this._items,this._startIndex,this._endIndex);
      }
   }
