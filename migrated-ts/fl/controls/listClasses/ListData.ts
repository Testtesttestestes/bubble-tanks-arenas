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
         _label = param1;
         _icon = param2;
         _owner = param3;
         _index = param4;
         _row = param5;
         _column = param6;
      }
      
      public get row(): number
      {
         return _row;
      }
      
      public get owner(): UIComponent
      {
         return _owner;
      }
      
      public get label(): string
      {
         return _label;
      }
      
      public get index(): number
      {
         return _index;
      }
      
      public get icon(): Record<string, any>
      {
         return _icon;
      }
      
      public get column(): number
      {
         return _column;
      }
   }
