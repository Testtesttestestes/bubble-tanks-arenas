// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls.listClasses

export class ListData{
      
      protected _index: number;
      protected _owner: UIComponent;
      protected _label: string;
      protected _icon: Record<string, any> = null as any;
      protected _row: number;
      protected _column: number;
      constructor(param1: string, param2: Record<string, any>, param3: UIComponent, param4: number, param5: number, param6: number = 0){
         super();
         this._label = param1;
         this._icon = param2;
         this._owner = param3;
         this._index = param4;
         this._row = param5;
         this._column = param6;
      }
      
      public get row(): number
      {
         return this._row;
      }
      
      public get owner(): UIComponent
      {
         return this._owner;
      }
      
      public get label(): string
      {
         return this._label;
      }
      
      public get index(): number
      {
         return this._index;
      }
      
      public get icon(): Record<string, any>
      {
         return this._icon;
      }
      
      public get column(): number
      {
         return this._column;
      }
   }
