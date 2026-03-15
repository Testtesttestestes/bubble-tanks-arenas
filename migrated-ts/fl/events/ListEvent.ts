// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.events

export class ListEvent extends Event{
      
      public static readonly ITEM_ROLL_OUT: string = "itemRollOut";
      public static readonly ITEM_ROLL_OVER: string = "itemRollOver";
      public static readonly ITEM_CLICK: string = "itemClick";
      public static readonly ITEM_DOUBLE_CLICK: string = "itemDoubleClick";
      protected _item: Record<string, any>;
      protected _index: number;
      protected _rowIndex: number;
      protected _columnIndex: number;
      constructor(param1: string, param2: boolean = false, param3: boolean = false, param4: number = -1, param5: number = -1, param6: number = -1, param7: Record<string, any> = null){
         super(param1,param2,param3);
         _rowIndex = param5;
         _columnIndex = param4;
         _index = param6;
         _item = param7;
      }
      
      public get item(): Record<string, any>
      {
         return _item;
      }
      
      public toString(): string
      {
         return formatToString("ListEvent","type","bubbles","cancelable","columnIndex","rowIndex","index","item");
      }
      
      public clone(): Event
      {
         return new ListEvent(type,bubbles,cancelable,_columnIndex,_rowIndex);
      }
      
      public get rowIndex(): Record<string, any>
      {
         return _rowIndex;
      }
      
      public get index(): number
      {
         return _index;
      }
      
      public get columnIndex(): number
      {
         return _columnIndex;
      }
   }
