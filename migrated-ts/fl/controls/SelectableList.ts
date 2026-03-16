// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

export class SelectableList extends BaseScrollPane implements IFocusManagerComponent
   {
      
      public static createAccessibilityImplementation: Function;
      private static defaultStyles: Record<string, any> = null as any;
      protected invalidItems: Dictionary;
      protected renderedItems: Dictionary;
      protected caretIndex: number = -1;
      protected updatedRendererStyles: Record<string, any>;
      protected _allowMultipleSelection: boolean = false;
      protected lastCaretIndex: number = -1;
      protected _verticalScrollPosition: number;
      protected _selectedIndices: any[];
      protected preChangeItems: any[];
      protected activeCellRenderers: any[];
      protected availableCellRenderers: any[];
      protected rendererStyles: Record<string, any>;
      protected list: Sprite;
      protected _dataProvider: DataProvider;
      protected _horizontalScrollPosition: number;
      private collectionItemImport: SimpleCollectionItem;
      protected listHolder: Sprite;
      protected _selectable: boolean = true;
      constructor(){
         super();
         this.activeCellRenderers = [];
         this.availableCellRenderers = [];
         this.invalidItems = new Dictionary(true);
         this.renderedItems = new Dictionary(true);
         this._selectedIndices = [];
         if(dataProvider == null)
         {
            dataProvider = new DataProvider();
         }
         verticalScrollPolicy = ScrollPolicy.AUTO;
         this.rendererStyles = {};
         this.updatedRendererStyles = {};
      }
      
      public static getStyleDefinition(): Record<string, any>
      {
         return mergeStyles(this.defaultStyles,BaseScrollPane.getStyleDefinition());
      }
      
      protected drawList(): void
      {
      }
      
      protected moveSelectionHorizontally(param1: number, param2: boolean, param3: boolean): void
      {
      }
      
      public get allowMultipleSelection(): boolean
      {
         return this._allowMultipleSelection;
      }
      
      protected onPreChange(param1: DataChangeEvent): void
      {
         switch(param1.changeType)
         {
            default:
               this.preChangeItems = selectedItems;
         }
      }
      
      public set selectedIndices(param1: any[])
      {
         if(!this._selectable)
         {
            return;
         }
         this._selectedIndices = param1 == null ? [] : param1.concat();
         invalidate(InvalidationType.SELECTED);
      }
      
      public isItemSelected(param1: Record<string, any>): boolean
      {
         return selectedItems.indexOf(param1) > -1;
      }
      
      public set allowMultipleSelection(param1: boolean)
      {
         if(param1 == this._allowMultipleSelection)
         {
            return;
         }
         this._allowMultipleSelection = param1;
         if(!param1 && this._selectedIndices.length > 1)
         {
            this._selectedIndices = [this._selectedIndices.pop()];
            invalidate(InvalidationType.DATA);
         }
      }
      
      protected setVerticalScrollPosition(param1: number, param2: boolean = false): void
      {
         if(param1 == this._verticalScrollPosition)
         {
            return;
         }
         let _loc3_: number = param1 - this._verticalScrollPosition;
         this._verticalScrollPosition = param1;
         if(param2)
         {
            this.dispatchEvent(new ScrollEvent(ScrollBarDirection.VERTICAL,_loc3_,param1));
         }
      }
      
      public sortItemsOn(param1: string, param2: Record<string, any> = null): any
      {
         return this._dataProvider.sortOn(param1,param2);
      }
      
      public getNextIndexAtLetter(param1: string, param2: number = -1): number
      {
         let _loc5_: number = NaN;
         let _loc6_: Record<string, any> = null;
         let _loc7_: string = null;
         if(length == 0)
         {
            return -1;
         }
         param1 = param1.toUpperCase();
         let _loc3_: number = length - 1;
         let _loc4_: number = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = param2 + 1 + _loc4_;
            if(_loc5_ > length - 1)
            {
               _loc5_ -= length;
            }
            _loc6_ = getItemAt(_loc5_);
            if(_loc6_ == null)
            {
               break;
            }
            _loc7_ = itemToLabel(_loc6_);
            if(_loc7_ != null)
            {
               if(_loc7_.charAt(0).toUpperCase() == param1)
               {
                  return _loc5_;
               }
            }
            _loc4_++;
         }
         return -1;
      }
      
      protected draw(): void
      {
         super.draw();
      }
      
      public removeItemAt(param1: number): Record<string, any>
      {
         return this._dataProvider.removeItemAt(param1);
      }
      
      public get selectedItem(): Record<string, any>
      {
         return this._selectedIndices.length == 0 ? null : this._dataProvider.getItemAt(selectedIndex);
      }
      
      protected handleDataChange(param1: DataChangeEvent): void
      {
         let _loc5_: number = 0;
         let _loc2_: number = Math.floor(param1.startIndex);
         let _loc3_: number = Math.floor(param1.endIndex);
         let _loc4_: string = param1.changeType;
         if(_loc4_ == DataChangeType.INVALIDATE_ALL)
         {
            clearSelection();
            invalidateList();
         }
         else if(_loc4_ == DataChangeType.INVALIDATE)
         {
            _loc5_ = 0;
            while(_loc5_ < param1.items.length)
            {
               invalidateItem(param1.items[_loc5_]);
               _loc5_++;
            }
         }
         else if(_loc4_ == DataChangeType.ADD)
         {
            _loc5_ = 0;
            while(_loc5_ < this._selectedIndices.length)
            {
               if(this._selectedIndices[_loc5_] >= _loc2_)
               {
                  this._selectedIndices[_loc5_] += _loc2_ - _loc3_;
               }
               _loc5_++;
            }
         }
         else if(_loc4_ == DataChangeType.REMOVE)
         {
            _loc5_ = 0;
            while(_loc5_ < this._selectedIndices.length)
            {
               if(this._selectedIndices[_loc5_] >= _loc2_)
               {
                  if(this._selectedIndices[_loc5_] <= _loc3_)
                  {
                     delete this._selectedIndices[_loc5_];
                  }
                  else
                  {
                     this._selectedIndices[_loc5_] -= _loc2_ - _loc3_ + 1;
                  }
               }
               _loc5_++;
            }
         }
         else if(_loc4_ == DataChangeType.REMOVE_ALL)
         {
            clearSelection();
         }
         else if(_loc4_ != DataChangeType.REPLACE)
         {
            selectedItems = this.preChangeItems;
            this.preChangeItems = null;
         }
         invalidate(InvalidationType.DATA);
      }
      
      public itemToCellRenderer(param1: Record<string, any>): ICellRenderer
      {
         let _loc2_: any = undefined;
         let _loc3_: ICellRenderer = null;
         if(param1 != null)
         {
            for (let _loc2_ in this.activeCellRenderers)
            {
               _loc3_ = this.activeCellRenderers[_loc2_]  as unknown as ICellRenderer;
               if(_loc3_.data == param1)
               {
                  return _loc3_;
               }
            }
         }
         return null;
      }
      
      public addItem(param1: Record<string, any>): void
      {
         this._dataProvider.addItem(param1);
         invalidateList();
      }
      
      public get rowCount(): number
      {
         return 0;
      }
      
      protected configUI(): void
      {
         super.configUI();
         this.listHolder = new Sprite();
         this.addChild(this.listHolder);
         this.listHolder.scrollRect = contentScrollRect;
         this.list = new Sprite();
         this.listHolder.addChild(this.list);
      }
      
      public get selectable(): boolean
      {
         return this._selectable;
      }
      
      public clearRendererStyle(param1: string, param2: number = -1): void
      {
         delete this.rendererStyles[param1];
         this.updatedRendererStyles[param1] = null;
         invalidate(InvalidationType.RENDERER_STYLES);
      }
      
      protected handleCellRendererMouseEvent(param1: MouseEvent): void
      {
         let _loc2_: ICellRenderer = param1.target  as unknown as ICellRenderer;
         let _loc3_: string = param1.type == MouseEvent.ROLL_OVER ? ListEvent.ITEM_ROLL_OVER : ListEvent.ITEM_ROLL_OUT;
         this.dispatchEvent(new ListEvent(_loc3_,false,false,_loc2_.listData.column,_loc2_.listData.row,_loc2_.listData.index,_loc2_.data));
      }
      
      protected keyDownHandler(param1: KeyboardEvent): void
      {
         if(!selectable)
         {
            return;
         }
         switch(param1.keyCode)
         {
            case Keyboard.UP:
            case Keyboard.DOWN:
            case Keyboard.END:
            case Keyboard.HOME:
            case Keyboard.PAGE_UP:
            case Keyboard.PAGE_DOWN:
               moveSelectionVertically(param1.keyCode,param1.shiftKey && this._allowMultipleSelection,param1.ctrlKey && this._allowMultipleSelection);
               param1.stopPropagation();
               break;
            case Keyboard.LEFT:
            case Keyboard.RIGHT:
               moveSelectionHorizontally(param1.keyCode,param1.shiftKey && this._allowMultipleSelection,param1.ctrlKey && this._allowMultipleSelection);
               param1.stopPropagation();
         }
      }
      
      protected handleCellRendererDoubleClick(param1: MouseEvent): void
      {
         if(!_enabled)
         {
            return;
         }
         let _loc2_: ICellRenderer = param1.currentTarget  as unknown as ICellRenderer;
         let _loc3_: number = _loc2_.listData.index;
         this.dispatchEvent(new ListEvent(ListEvent.ITEM_DOUBLE_CLICK,false,true,_loc2_.listData.column,_loc2_.listData.row,_loc3_,_loc2_.data));
      }
      
      public setRendererStyle(param1: string, param2: Record<string, any>, param3: number = 0): void
      {
         if(this.rendererStyles[param1] == param2)
         {
            return;
         }
         this.updatedRendererStyles[param1] = param2;
         this.rendererStyles[param1] = param2;
         invalidate(InvalidationType.RENDERER_STYLES);
      }
      
      public set dataProvider(param1: DataProvider)
      {
         if(this._dataProvider != null)
         {
            this._dataProvider.removeEventListener(DataChangeEvent.DATA_CHANGE, handleDataChange.bind(this));
            this._dataProvider.removeEventListener(DataChangeEvent.PRE_DATA_CHANGE, onPreChange.bind(this));
         }
         this._dataProvider = param1;
         this._dataProvider.addEventListener(DataChangeEvent.DATA_CHANGE, handleDataChange.bind(this));
         this._dataProvider.addEventListener(DataChangeEvent.PRE_DATA_CHANGE, onPreChange.bind(this));
         clearSelection();
         invalidateList();
      }
      
      public invalidateList(): void
      {
         _invalidateList();
         invalidate(InvalidationType.DATA);
      }
      
      public replaceItemAt(param1: Record<string, any>, param2: number): Record<string, any>
      {
         return this._dataProvider.replaceItemAt(param1,param2);
      }
      
      public removeAll(): void
      {
         this._dataProvider.removeAll();
      }
      
      public set enabled(param1: boolean)
      {
         super.enabled = param1;
         this.list.mouseChildren = _enabled;
      }
      
      public scrollToIndex(param1: number): void
      {
      }
      
      public get selectedIndices(): any[]
      {
         return this._selectedIndices.concat();
      }
      
      protected drawLayout(): void
      {
         super.drawLayout();
         contentScrollRect = this.listHolder.scrollRect;
         contentScrollRect.width = availableWidth;
         contentScrollRect.height = availableHeight;
         this.listHolder.scrollRect = contentScrollRect;
      }
      
      protected _invalidateList(): void
      {
         this.availableCellRenderers = [];
         while(this.activeCellRenderers.length > 0)
         {
            this.list.removeChild(this.activeCellRenderers.pop()  as unknown as DisplayObject);
         }
      }
      
      public set selectedItem(param1: Record<string, any>)
      {
         let _loc2_: number = this._dataProvider.getItemIndex(param1);
         selectedIndex = _loc2_;
      }
      
      public getItemAt(param1: number): Record<string, any>
      {
         return this._dataProvider.getItemAt(param1);
      }
      
      protected handleCellRendererChange(param1: Event): void
      {
         let _loc2_: ICellRenderer = param1.currentTarget  as unknown as ICellRenderer;
         let _loc3_: number = _loc2_.listData.index;
         this._dataProvider.invalidateItemAt(_loc3_);
      }
      
      protected moveSelectionVertically(param1: number, param2: boolean, param3: boolean): void
      {
      }
      
      public itemToLabel(param1: Record<string, any>): string
      {
         return param1["label"];
      }
      
      public addItemAt(param1: Record<string, any>, param2: number): void
      {
         this._dataProvider.addItemAt(param1,param2);
         invalidateList();
      }
      
      protected initializeAccessibility(): void
      {
         if(SelectableList.createAccessibilityImplementation != null)
         {
            SelectableList.createAccessibilityImplementation(this);
         }
      }
      
      protected updateRendererStyles(): void
      {
         let _loc4_: string = null;
         let _loc1_: any[] = this.availableCellRenderers.concat(this.activeCellRenderers);
         let _loc2_: number = _loc1_.length;
         let _loc3_: number = 0;
         while(_loc3_ < _loc2_)
         {
            if(_loc1_[_loc3_].setStyle != null)
            {
               for (let _loc4_ in this.updatedRendererStyles)
               {
                  _loc1_[_loc3_].setStyle(_loc4_,this.updatedRendererStyles[_loc4_]);
               }
               _loc1_[_loc3_].drawNow();
            }
            _loc3_++;
         }
         this.updatedRendererStyles = {};
      }
      
      public set selectable(param1: boolean)
      {
         if(param1 == this._selectable)
         {
            return;
         }
         if(!param1)
         {
            selectedIndices = [];
         }
         this._selectable = param1;
      }
      
      public removeItem(param1: Record<string, any>): Record<string, any>
      {
         return this._dataProvider.removeItem(param1);
      }
      
      public get dataProvider(): DataProvider
      {
         return this._dataProvider;
      }
      
      public set maxHorizontalScrollPosition(param1: number)
      {
         _maxHorizontalScrollPosition = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      public clearSelection(): void
      {
         selectedIndex = -1;
      }
      
      public invalidateItemAt(param1: number): void
      {
         let _loc2_: Record<string, any> = this._dataProvider.getItemAt(param1);
         if(_loc2_ != null)
         {
            invalidateItem(_loc2_);
         }
      }
      
      public sortItems(... rest): any
      {
         return this._dataProvider.sort.apply(this._dataProvider,rest);
      }
      
      public set selectedItems(param1: any[])
      {
         let _loc4_: number = 0;
         if(param1 == null)
         {
            selectedIndices = null;
            return;
         }
         let _loc2_: any[] = [];
         let _loc3_: number = 0;
         while(_loc3_ < param1.length)
         {
            _loc4_ = this._dataProvider.getItemIndex(param1[_loc3_]);
            if(_loc4_ != -1)
            {
               _loc2_.push(_loc4_);
            }
            _loc3_++;
         }
         selectedIndices = _loc2_;
      }
      
      protected setHorizontalScrollPosition(param1: number, param2: boolean = false): void
      {
         if(param1 == this._horizontalScrollPosition)
         {
            return;
         }
         let _loc3_: number = param1 - this._horizontalScrollPosition;
         this._horizontalScrollPosition = param1;
         if(param2)
         {
            this.dispatchEvent(new ScrollEvent(ScrollBarDirection.HORIZONTAL,_loc3_,param1));
         }
      }
      
      public get maxHorizontalScrollPosition(): number
      {
         return _maxHorizontalScrollPosition;
      }
      
      public scrollToSelected(): void
      {
         scrollToIndex(selectedIndex);
      }
      
      public get selectedItems(): any[]
      {
         let _loc1_: any[] = [];
         let _loc2_: number = 0;
         while(_loc2_ < this._selectedIndices.length)
         {
            _loc1_.push(this._dataProvider.getItemAt(this._selectedIndices[_loc2_]));
            _loc2_++;
         }
         return _loc1_;
      }
      
      public get length(): number
      {
         return this._dataProvider.length;
      }
      
      public invalidateItem(param1: Record<string, any>): void
      {
         if(this.renderedItems[param1] == null)
         {
            return;
         }
         this.invalidItems[param1] = true;
         invalidate(InvalidationType.DATA);
      }
      
      public set selectedIndex(param1: number)
      {
         selectedIndices = param1 == -1 ? null : [param1];
      }
      
      public get selectedIndex(): number
      {
         return this._selectedIndices.length == 0 ? -1 : Math.floor(this._selectedIndices[this._selectedIndices.length - 1]);
      }
      
      public getRendererStyle(param1: string, param2: number = -1): Record<string, any>
      {
         return this.rendererStyles[param1];
      }
      
      protected handleCellRendererClick(param1: MouseEvent): void
      {
         let _loc5_: any = 0;
         let _loc6_: number = 0;
         if(!_enabled)
         {
            return;
         }
         let _loc2_: ICellRenderer = param1.currentTarget  as unknown as ICellRenderer;
         let _loc3_: number = _loc2_.listData.index;
         if(!this.dispatchEvent(new ListEvent(ListEvent.ITEM_CLICK,false,true,_loc2_.listData.column,_loc2_.listData.row,_loc3_,_loc2_.data)) || !this._selectable)
         {
            return;
         }
         let _loc4_: number = selectedIndices.indexOf(_loc3_);
         if(!this._allowMultipleSelection)
         {
            if(_loc4_ != -1)
            {
               return;
            }
            _loc2_.selected = true;
            this._selectedIndices = [_loc3_];
            this.lastCaretIndex = this.caretIndex = _loc3_;
         }
         else if(param1.shiftKey)
         {
            _loc6_ = this._selectedIndices.length > 0 ? Math.floor(this._selectedIndices[0]) : _loc3_;
            this._selectedIndices = [];
            if(_loc6_ > _loc3_)
            {
               _loc5_ = Math.floor(_loc6_);
               while(_loc5_ >= _loc3_)
               {
                  this._selectedIndices.push(_loc5_);
                  _loc5_--;
               }
            }
            else
            {
               _loc5_ = Math.floor(_loc6_);
               while(_loc5_ <= _loc3_)
               {
                  this._selectedIndices.push(_loc5_);
                  _loc5_++;
               }
            }
            this.caretIndex = _loc3_;
         }
         else if(param1.ctrlKey)
         {
            if(_loc4_ != -1)
            {
               _loc2_.selected = false;
               this._selectedIndices.splice(_loc4_,1);
            }
            else
            {
               _loc2_.selected = true;
               this._selectedIndices.push(_loc3_);
            }
            this.caretIndex = _loc3_;
         }
         else
         {
            this._selectedIndices = [_loc3_];
            this.lastCaretIndex = this.caretIndex = _loc3_;
         }
         this.dispatchEvent(new Event(Event.CHANGE));
         invalidate(InvalidationType.DATA);
      }
   }
