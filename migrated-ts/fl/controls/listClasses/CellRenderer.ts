// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls.listClasses

export class CellRenderer extends LabelButton implements ICellRenderer
   {
      
      private static defaultStyles: Record<string, any> = null as any;
      protected _listData: ListData;
      protected _data: Record<string, any>;
      constructor(){
         super();
         toggle = true;
         focusEnabled = false;
      }
      
      public static getStyleDefinition(): Record<string, any>
      {
         return defaultStyles;
      }
      
      public set selected(param1: boolean)
      {
         super.selected = param1;
      }
      
      protected drawLayout(): void
      {
         let _loc3_: number = NaN;
         let _loc1_: number = Number(getStyleValue("textPadding"));
         0;
         if(icon != null)
         {
            icon.x = _loc1_;
            icon.y = Math.round(height - icon.height >> 1);
            let _loc2_: number = icon.width + _loc1_;
         }
         if(label.length > 0)
         {
            textField.visible = true;
            _loc3_ = Math.max(0,width - 0 - _loc1_ * 2);
            textField.width = _loc3_;
            textField.height = textField.textHeight + 4;
            textField.x = 0 + _loc1_;
            textField.y = Math.round(height - textField.height >> 1);
         }
         else
         {
            textField.visible = false;
         }
         background.width = width;
         background.height = height;
      }
      
      public get listData(): ListData
      {
         return _listData;
      }
      
      public setSize(param1: number, param2: number): void
      {
         super.setSize(param1,param2);
      }
      
      public get data(): Record<string, any>
      {
         return _data;
      }
      
      public set data(param1: Record<string, any>)
      {
         _data = param1;
      }
      
      public set listData(param1: ListData)
      {
         _listData = param1;
         label = _listData.label;
         setStyle("icon",_listData.icon);
      }
      
      public get selected(): boolean
      {
         return super.selected;
      }
      
      protected toggleSelected(param1: MouseEvent): void
      {
      }
   }
