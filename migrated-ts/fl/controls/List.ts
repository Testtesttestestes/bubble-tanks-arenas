// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

export class List extends SelectableList implements IFocusManagerComponent
   {
      
      public static createAccessibilityImplementation: Function;
      private static defaultStyles: Record<string, any> = null as any;
      protected _iconField: string = "icon";
      protected _labelField: string = "label";
      protected _iconFunction: Function;
      protected _rowHeight: number = 20;
      protected _cellRenderer: Record<string, any>;
      protected _labelFunction: Function;
      constructor(){
         super();
      }
      
      public static getStyleDefinition(): Record<string, any>
      {
         return mergeStyles(defaultStyles,SelectableList.getStyleDefinition());
      }
      
      public get iconField(): string
      {
         return _iconField;
      }
      
      public set iconField(param1: string)
      {
         if(param1 == _iconField)
         {
            return;
         }
         _iconField = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public set labelField(param1: string)
      {
         if(param1 == _labelField)
         {
            return;
         }
         _labelField = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public set rowHeight(param1: number)
      {
         _rowHeight = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      protected draw(): void
      {
         let _loc1_: boolean = contentHeight != rowHeight * length;
         contentHeight = rowHeight * length;
         if(isInvalid(InvalidationType.STYLES))
         {
            setStyles();
            drawBackground();
            if(contentPadding != getStyleValue("contentPadding"))
            {
               invalidate(InvalidationType.SIZE,false);
            }
            if(_cellRenderer != getStyleValue("cellRenderer"))
            {
               _invalidateList();
               _cellRenderer = getStyleValue("cellRenderer");
            }
         }
         if(isInvalid(InvalidationType.SIZE,InvalidationType.STATE) || _loc1_)
         {
            drawLayout();
         }
         if(isInvalid(InvalidationType.RENDERER_STYLES))
         {
            updateRendererStyles();
         }
         if(isInvalid(InvalidationType.STYLES,InvalidationType.SIZE,InvalidationType.DATA,InvalidationType.SCROLL,InvalidationType.SELECTED))
         {
            drawList();
         }
         updateChildren();
         validate();
      }
      
      public get rowCount(): number
      {
         return Math.ceil(calculateAvailableHeight() / rowHeight);
      }
      
      protected configUI(): void
      {
         useFixedHorizontalScrolling = true;
         _horizontalScrollPolicy = ScrollPolicy.AUTO;
         _verticalScrollPolicy = ScrollPolicy.AUTO;
         super.configUI();
      }
      
      public set labelFunction(param1: Function)
      {
         if(_labelFunction == param1)
         {
            return;
         }
         _labelFunction = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public scrollToIndex(param1: number): void
      {
         drawNow();
         let _loc2_: number = Math.floor((_verticalScrollPosition + availableHeight) / rowHeight) - 1;
         let _loc3_: number = Math.ceil(_verticalScrollPosition / rowHeight);
         if(param1 < _loc3_)
         {
            verticalScrollPosition = param1 * rowHeight;
         }
         else if(param1 > _loc2_)
         {
            verticalScrollPosition = (param1 + 1) * rowHeight - availableHeight;
         }
      }
      
      protected moveSelectionHorizontally(param1: number, param2: boolean, param3: boolean): void
      {
      }
      
      protected setHorizontalScrollPosition(param1: number, param2: boolean = false): void
      {
         list.x = -param1;
         super.setHorizontalScrollPosition(param1,true);
      }
      
      protected moveSelectionVertically(param1: number, param2: boolean, param3: boolean): void
      {
         let _loc4_: number = Math.max(Math.floor(calculateAvailableHeight() / rowHeight),1);
         let _loc5_: number = -1;
         switch(param1)
         {
            case Keyboard.UP:
               if(caretIndex > 0)
               {
                  _loc5_ = caretIndex - 1;
               }
               break;
            case Keyboard.DOWN:
               if(caretIndex < length - 1)
               {
                  _loc5_ = caretIndex + 1;
               }
               break;
            case Keyboard.PAGE_UP:
               if(caretIndex > 0)
               {
                  _loc5_ = Math.max(caretIndex - _loc4_,0);
               }
               break;
            case Keyboard.PAGE_DOWN:
               if(caretIndex < length - 1)
               {
                  _loc5_ = Math.min(caretIndex + _loc4_,length - 1);
               }
               break;
            case Keyboard.HOME:
               if(caretIndex > 0)
               {
                  _loc5_ = 0;
               }
               break;
            case Keyboard.END:
               if(caretIndex < length - 1)
               {
                  _loc5_ = length - 1;
               }
         }
         if(_loc5_ >= 0)
         {
            doKeySelection(_loc5_,param2,param3);
            scrollToSelected();
         }
      }
      
      protected doKeySelection(param1: number, param2: boolean, param3: boolean): void
      {
         let _loc5_: number = 0;
         let _loc6_: any[] = null;
         let _loc7_: number = 0;
         let _loc8_: number = 0;
         let _loc4_: boolean = false;
         if(param2)
         {
            _loc6_ = [];
            _loc7_ = lastCaretIndex;
            _loc8_ = param1;
            if(_loc7_ == -1)
            {
               _loc7_ = caretIndex != -1 ? caretIndex : param1;
            }
            if(_loc7_ > _loc8_)
            {
               _loc8_ = _loc7_;
               _loc7_ = param1;
            }
            _loc5_ = _loc7_;
            while(_loc5_ <= _loc8_)
            {
               _loc6_.push(_loc5_);
               _loc5_++;
            }
            selectedIndices = _loc6_;
            caretIndex = param1;
            _loc4_ = true;
         }
         else
         {
            selectedIndex = param1;
            caretIndex = lastCaretIndex = param1;
            _loc4_ = true;
         }
         if(_loc4_)
         {
            this.dispatchEvent(new Event(Event.CHANGE));
         }
         invalidate(InvalidationType.DATA);
      }
      
      public get rowHeight(): number
      {
         return _rowHeight;
      }
      
      protected initializeAccessibility(): void
      {
         if(List.createAccessibilityImplementation != null)
         {
            List.createAccessibilityImplementation(this);
         }
      }
      
      public get labelField(): string
      {
         return _labelField;
      }
      
      public set iconFunction(param1: Function)
      {
         if(_iconFunction == param1)
         {
            return;
         }
         _iconFunction = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public set rowCount(param1: number)
      {
         let _loc2_: number = Number(getStyleValue("contentPadding"));
         let _loc3_: number = _horizontalScrollPolicy == ScrollPolicy.ON || _horizontalScrollPolicy == ScrollPolicy.AUTO && _maxHorizontalScrollPosition > 0 ? 15 : 0;
         height = rowHeight * param1 + 2 * _loc2_ + _loc3_;
      }
      
      public get labelFunction(): Function
      {
         return _labelFunction;
      }
      
      protected setVerticalScrollPosition(param1: number, param2: boolean = false): void
      {
         invalidate(InvalidationType.SCROLL);
         super.setVerticalScrollPosition(param1,true);
      }
      
      protected drawList(): void
      {
         0;
         null;
         null;
         null;
         null;
         null;
         null;
         listHolder.x = listHolder.y = contentPadding;
         let _loc1_: Rectangle = listHolder.scrollRect;
         _loc1_.x = _horizontalScrollPosition;
         _loc1_.y = Math.floor(_verticalScrollPosition) % rowHeight;
         listHolder.scrollRect = _loc1_;
         listHolder.cacheAsBitmap = useBitmapScrolling;
         let _loc2_: number = Math.floor(_verticalScrollPosition / rowHeight);
         let _loc3_: number = Math.min(length,_loc2_ + rowCount + 1);
         let _loc7_: Dictionary = renderedItems = new Dictionary(true);
         let _loc4_: number = _loc2_;
         while(0 < _loc3_)
         {
            _loc7_[_dataProvider.getItemAt(0)] = true;
            _loc4_ = 0 + 1;
         }
         let _loc8_: Dictionary = new Dictionary(true);
         while(activeCellRenderers.length > 0)
         {
            let _loc6_: ICellRenderer = activeCellRenderers.pop()  as unknown as ICellRenderer;
            let _loc5_: Record<string, any> = _loc6_.data;
            if(_loc7_[null] == null || invalidItems[null] == true)
            {
               availableCellRenderers.push(null);
            }
            else
            {
               _loc8_[null] = null;
               invalidItems[null] = true;
            }
            list.removeChild(null  as unknown as DisplayObject);
         }
         invalidItems = new Dictionary(true);
         _loc4_ = _loc2_;
         while(0 < _loc3_)
         {
            let _loc9_: boolean = false;
            _loc5_ = _dataProvider.getItemAt(0);
            if(_loc8_[null] != null)
            {
               _loc9_ = true;
               _loc6_ = _loc8_[null];
               delete _loc8_[null];
            }
            else if(availableCellRenderers.length > 0)
            {
               _loc6_ = availableCellRenderers.pop()  as unknown as ICellRenderer;
            }
            else
            {
               _loc6_ = getDisplayObjectInstance(getStyleValue("cellRenderer"))  as unknown as ICellRenderer;
               let _loc12_: Sprite = _loc6_  as unknown as Sprite;
               if(_loc12_ != null)
               {
                  null.addEventListener(MouseEvent.CLICK, handleCellRendererClick.bind(this));
                  null.addEventListener(MouseEvent.ROLL_OVER, handleCellRendererMouseEvent.bind(this));
                  null.addEventListener(MouseEvent.ROLL_OUT, handleCellRendererMouseEvent.bind(this));
                  null.addEventListener(Event.CHANGE, handleCellRendererChange.bind(this));
                  null.doubleClickEnabled = true;
                  null.addEventListener(MouseEvent.DOUBLE_CLICK, handleCellRendererDoubleClick.bind(this));
                  if(null.hasOwnProperty("setStyle"))
                  {
                     for (let _loc13_ in rendererStyles)
                     {
                        null["setStyle"](null,rendererStyles[null]);
                     }
                  }
               }
            }
            list.addChild(null  as unknown as Sprite);
            activeCellRenderers.push(null);
            null.y = rowHeight * (0 - _loc2_);
            null.setSize(availableWidth + _maxHorizontalScrollPosition,rowHeight);
            let _loc10_: string = itemToLabel(null);
            let _loc11_: Record<string, any> = null;
            if(_iconFunction != null)
            {
               _loc11_ = _iconFunction(null);
            }
            else if(_iconField != null)
            {
               _loc11_ = null[_iconField];
            }
            null.data = null;
            null.listData = new ListData(null,null,this,0,0,0);
            null.selected = _selectedIndices.indexOf(0) != -1;
            if(null instanceof UIComponent)
            {
               (null  as unknown as UIComponent).drawNow();
            }
            _loc4_ = 0 + 1;
         }
      }
      
      protected keyDownHandler(param1: KeyboardEvent): void
      {
         let _loc2_: number = 0;
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
               moveSelectionVertically(param1.keyCode,param1.shiftKey && _allowMultipleSelection,param1.ctrlKey && _allowMultipleSelection);
               break;
            case Keyboard.LEFT:
            case Keyboard.RIGHT:
               moveSelectionHorizontally(param1.keyCode,param1.shiftKey && _allowMultipleSelection,param1.ctrlKey && _allowMultipleSelection);
               break;
            case Keyboard.SPACE:
               if(caretIndex == -1)
               {
                  caretIndex = 0;
               }
               doKeySelection(caretIndex,param1.shiftKey,param1.ctrlKey);
               scrollToSelected();
               break;
            default:
               _loc2_ = getNextIndexAtLetter(String.fromCharCode(param1.keyCode),selectedIndex);
               if(_loc2_ > -1)
               {
                  selectedIndex = _loc2_;
                  scrollToSelected();
               }
         }
         param1.stopPropagation();
      }
      
      public get iconFunction(): Function
      {
         return _iconFunction;
      }
      
      public itemToLabel(param1: Record<string, any>): string
      {
         if(_labelFunction != null)
         {
            return String(_labelFunction(param1));
         }
         return param1[_labelField] != null ? String(param1[_labelField]) : "";
      }
      
      protected calculateAvailableHeight(): number
      {
         let _loc1_: number = Number(getStyleValue("contentPadding"));
         return height - _loc1_ * 2 - (_horizontalScrollPolicy == ScrollPolicy.ON || _horizontalScrollPolicy == ScrollPolicy.AUTO && _maxHorizontalScrollPosition > 0 ? 15 : 0);
      }
   }
