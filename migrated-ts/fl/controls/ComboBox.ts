// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

export class ComboBox extends UIComponent implements IFocusManagerComponent
   {
      
      public static createAccessibilityImplementation: Function;
      private static defaultStyles: Record<string, any> = null as any;
      protected static readonly LIST_STYLES: Record<string, any> = {
         "upSkin":"comboListUpSkin",
         "overSkin":"comboListOverSkin",
         "downSkin":"comobListDownSkin",
         "disabledSkin":"comboListDisabledSkin",
         "downArrowDisabledSkin":"downArrowDisabledSkin",
         "downArrowDownSkin":"downArrowDownSkin",
         "downArrowOverSkin":"downArrowOverSkin",
         "downArrowUpSkin":"downArrowUpSkin",
         "upArrowDisabledSkin":"upArrowDisabledSkin",
         "upArrowDownSkin":"upArrowDownSkin",
         "upArrowOverSkin":"upArrowOverSkin",
         "upArrowUpSkin":"upArrowUpSkin",
         "thumbDisabledSkin":"thumbDisabledSkin",
         "thumbDownSkin":"thumbDownSkin",
         "thumbOverSkin":"thumbOverSkin",
         "thumbUpSkin":"thumbUpSkin",
         "thumbIcon":"thumbIcon",
         "trackDisabledSkin":"trackDisabledSkin",
         "trackDownSkin":"trackDownSkin",
         "trackOverSkin":"trackOverSkin",
         "trackUpSkin":"trackUpSkin",
         "repeatDelay":"repeatDelay",
         "repeatInterval":"repeatInterval",
         "textFormat":"textFormat",
         "disabledAlpha":"disabledAlpha",
         "skin":"listSkin"
      };
      protected static readonly BACKGROUND_STYLES: Record<string, any> = {
         "overSkin":"overSkin",
         "downSkin":"downSkin",
         "upSkin":"upSkin",
         "disabledSkin":"disabledSkin",
         "repeatInterval":"repeatInterval"
      };
      protected isKeyDown: boolean = false;
      protected _labels: any[];
      protected background: BaseButton;
      protected _dropdownWidth: number;
      protected inputField: TextInput;
      protected highlightedCell: number = -1;
      protected listOverIndex: number;
      protected editableValue: string;
      protected _prompt: string;
      protected isOpen: boolean = false;
      protected list: List;
      protected _rowCount: number = 5;
      protected _editable: boolean = false;
      private collectionItemImport: SimpleCollectionItem;
      protected currentIndex: number;
      constructor(){
         super();
      }
      
      public static getStyleDefinition(): Record<string, any>
      {
         return mergeStyles(defaultStyles,List.getStyleDefinition());
      }
      
      protected drawList(): void
      {
         list.rowCount = Math.max(0,Math.min(_rowCount,list.dataProvider.length));
      }
      
      public get imeMode(): string
      {
         return inputField.imeMode;
      }
      
      protected onInputFieldFocusOut(param1: FocusEvent): void
      {
         inputField.removeEventListener(ComponentEvent.ENTER, onEnter.bind(this));
         selectedIndex = selectedIndex;
      }
      
      public set imeMode(param1: string)
      {
         inputField.imeMode = param1;
      }
      
      protected passEvent(param1: Event): void
      {
         this.dispatchEvent(param1);
      }
      
      protected calculateAvailableHeight(): number
      {
         let _loc1_: number = Number(getStyleValue("contentPadding"));
         return list.height - _loc1_ * 2;
      }
      
      public get dropdown(): List
      {
         return list;
      }
      
      protected focusOutHandler(param1: FocusEvent): void
      {
         isKeyDown = false;
         if(isOpen)
         {
            if(!param1.relatedObject || !list.contains(param1.relatedObject))
            {
               if(highlightedCell != -1 && highlightedCell != selectedIndex)
               {
                  selectedIndex = highlightedCell;
                  this.dispatchEvent(new Event(Event.CHANGE));
               }
               close();
            }
         }
         super.focusOutHandler(param1);
      }
      
      public get selectedLabel(): string
      {
         if(editableValue != null)
         {
            return editableValue;
         }
         if(selectedIndex == -1)
         {
            return null;
         }
         return itemToLabel(selectedItem);
      }
      
      protected onListChange(param1: Event): void
      {
         editableValue = null;
         this.dispatchEvent(param1);
         invalidate(InvalidationType.SELECTED);
         if(isKeyDown)
         {
            return;
         }
         close();
      }
      
      public get text(): string
      {
         return inputField.text;
      }
      
      protected onEnter(param1: ComponentEvent): void
      {
         param1.stopPropagation();
      }
      
      public sortItemsOn(param1: string, param2: Record<string, any> = null): any
      {
         return list.sortItemsOn(param1,param2);
      }
      
      protected handleDataChange(param1: DataChangeEvent): void
      {
         invalidate(InvalidationType.DATA);
      }
      
      protected onToggleListVisibility(param1: MouseEvent): void
      {
         param1.stopPropagation();
         this.dispatchEvent(param1);
         if(isOpen)
         {
            close();
         }
         else
         {
            open();
            stage.addEventListener(MouseEvent.MOUSE_UP, onListItemUp.bind(this));
         }
      }
      
      public get dropdownWidth(): number
      {
         return list.width;
      }
      
      protected highlightCell(param1: number = -1): void
      {
         let _loc2_: ICellRenderer = null;
         if(highlightedCell > -1)
         {
            _loc2_ = list.itemToCellRenderer(getItemAt(highlightedCell));
            if(_loc2_ != null)
            {
               _loc2_.setMouseState("up");
            }
         }
         if(param1 == -1)
         {
            return;
         }
         list.scrollToIndex(param1);
         list.drawNow();
         _loc2_ = list.itemToCellRenderer(getItemAt(param1));
         if(_loc2_ != null)
         {
            _loc2_.setMouseState("over");
            highlightedCell = param1;
         }
      }
      
      public removeItemAt(param1: number): void
      {
         list.removeItemAt(param1);
         invalidate(InvalidationType.DATA);
      }
      
      protected draw(): void
      {
         let _loc1_: any = selectedIndex;
         if(_loc1_ == -1 && (prompt != null || editable || length == 0))
         {
            _loc1_ = Math.max(-1,Math.min(_loc1_,length - 1));
         }
         else
         {
            editableValue = null;
            _loc1_ = Math.max(0,Math.min(_loc1_,length - 1));
         }
         if(list.selectedIndex != _loc1_)
         {
            list.selectedIndex = _loc1_;
            invalidate(InvalidationType.SELECTED,false);
         }
         if(isInvalid(InvalidationType.STYLES))
         {
            setStyles();
            setEmbedFonts();
            invalidate(InvalidationType.SIZE,false);
         }
         if(isInvalid(InvalidationType.SIZE,InvalidationType.DATA,InvalidationType.STATE))
         {
            drawTextFormat();
            drawLayout();
            invalidate(InvalidationType.DATA);
         }
         if(isInvalid(InvalidationType.DATA))
         {
            drawList();
            invalidate(InvalidationType.SELECTED,true);
         }
         if(isInvalid(InvalidationType.SELECTED))
         {
            if(_loc1_ == -1 && editableValue != null)
            {
               inputField.text = editableValue;
            }
            else if(_loc1_ > -1)
            {
               if(length > 0)
               {
                  inputField.horizontalScrollPosition = 0;
                  inputField.text = itemToLabel(list.selectedItem);
               }
            }
            else if(_loc1_ == -1 && _prompt != null)
            {
               showPrompt();
            }
            else
            {
               inputField.text = "";
            }
            if(editable && selectedIndex > -1 && stage.focus == inputField.textField)
            {
               inputField.setSelection(0,inputField.length);
            }
         }
         drawTextField();
         super.draw();
      }
      
      public get selectedItem(): Record<string, any>
      {
         return list.selectedItem;
      }
      
      public open(): void
      {
         currentIndex = selectedIndex;
         if(isOpen || length == 0)
         {
            return;
         }
         this.dispatchEvent(new Event(Event.OPEN));
         isOpen = true;
         this.addEventListener(Event.ENTER_FRAME, addCloseListener.bind(this));
         positionList();
         list.scrollToSelected();
         stage.addChild(list);
      }
      
      protected configUI(): void
      {
         super.configUI();
         background = new BaseButton();
         background.focusEnabled = false;
         copyStylesToChild(background,BACKGROUND_STYLES);
         background.addEventListener(MouseEvent.MOUSE_DOWN, onToggleListVisibility.bind(this));
         this.addChild(background);
         inputField = new TextInput();
         inputField.focusTarget = this  as unknown as IFocusManagerComponent;
         inputField.focusEnabled = false;
         inputField.addEventListener(Event.CHANGE, onTextInput.bind(this));
         this.addChild(inputField);
         list = new List();
         list.focusEnabled = false;
         copyStylesToChild(list,LIST_STYLES);
         list.addEventListener(Event.CHANGE, onListChange.bind(this));
         list.addEventListener(ListEvent.ITEM_CLICK, onListChange.bind(this));
         list.addEventListener(ListEvent.ITEM_ROLL_OUT, passEvent.bind(this));
         list.addEventListener(ListEvent.ITEM_ROLL_OVER, passEvent.bind(this));
         list.verticalScrollBar.addEventListener(Event.SCROLL, passEvent.bind(this));
      }
      
      public set text(param1: string)
      {
         if(!editable)
         {
            return;
         }
         inputField.text = param1;
      }
      
      public addItem(param1: Record<string, any>): void
      {
         list.addItem(param1);
         invalidate(InvalidationType.DATA);
      }
      
      public get editable(): boolean
      {
         return _editable;
      }
      
      public get labelField(): string
      {
         return list.labelField;
      }
      
      protected positionList(): void
      {
         let _loc1_: Point = localToGlobal(new Point(0,0));
         list.x = _loc1_.x;
         if(_loc1_.y + height + list.height > stage.stageHeight)
         {
            list.y = _loc1_.y - list.height;
         }
         else
         {
            list.y = _loc1_.y + height;
         }
      }
      
      protected onStageClick(param1: MouseEvent): void
      {
         if(!isOpen)
         {
            return;
         }
         if(!this.contains(param1.target  as unknown as DisplayObject) && !list.contains(param1.target  as unknown as DisplayObject))
         {
            if(highlightedCell != -1)
            {
               selectedIndex = highlightedCell;
               this.dispatchEvent(new Event(Event.CHANGE));
            }
            close();
         }
      }
      
      public set dropdownWidth(param1: number)
      {
         _dropdownWidth = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      public get prompt(): string
      {
         return _prompt;
      }
      
      protected keyDownHandler(param1: KeyboardEvent): void
      {
         isKeyDown = true;
         if(param1.ctrlKey)
         {
            switch(param1.keyCode)
            {
               case Keyboard.UP:
                  if(highlightedCell > -1)
                  {
                     selectedIndex = highlightedCell;
                     this.dispatchEvent(new Event(Event.CHANGE));
                  }
                  close();
                  break;
               case Keyboard.DOWN:
                  open();
            }
            return;
         }
         param1.stopPropagation();
         let _loc2_: number = Math.max(calculateAvailableHeight() / list.rowHeight << 0,1);
         let _loc3_: number = Math.floor(selectedIndex);
         let _loc4_: number = highlightedCell == -1 ? selectedIndex : highlightedCell;
         let _loc5_: number = -1;
         switch(param1.keyCode)
         {
            case Keyboard.SPACE:
               if(isOpen)
               {
                  close();
               }
               else
               {
                  open();
               }
               return;
            case Keyboard.ESCAPE:
               if(isOpen)
               {
                  if(highlightedCell > -1)
                  {
                     selectedIndex = selectedIndex;
                  }
                  close();
               }
               return;
            case Keyboard.UP:
               _loc5_ = Math.max(0,_loc4_ - 1);
               break;
            case Keyboard.DOWN:
               _loc5_ = Math.min(length - 1,_loc4_ + 1);
               break;
            case Keyboard.PAGE_UP:
               _loc5_ = Math.max(_loc4_ - _loc2_,0);
               break;
            case Keyboard.PAGE_DOWN:
               _loc5_ = Math.min(_loc4_ + _loc2_,length - 1);
               break;
            case Keyboard.HOME:
               _loc5_ = 0;
               break;
            case Keyboard.END:
               _loc5_ = length - 1;
               break;
            case Keyboard.ENTER:
               if(_editable && highlightedCell == -1)
               {
                  editableValue = inputField.text;
                  selectedIndex = -1;
               }
               else if(isOpen && highlightedCell > -1)
               {
                  editableValue = null;
                  selectedIndex = highlightedCell;
                  this.dispatchEvent(new Event(Event.CHANGE));
               }
               this.dispatchEvent(new ComponentEvent(ComponentEvent.ENTER));
               close();
               return;
            default:
               if(editable)
               {
                  break;
               }
               _loc5_ = list.getNextIndexAtLetter(String.fromCharCode(param1.keyCode),_loc4_);
         }
         if(_loc5_ > -1)
         {
            if(isOpen)
            {
               highlightCell(_loc5_);
               inputField.text = list.itemToLabel(getItemAt(_loc5_));
            }
            else
            {
               highlightCell();
               selectedIndex = _loc5_;
               this.dispatchEvent(new Event(Event.CHANGE));
            }
         }
      }
      
      public get value(): string
      {
         let _loc1_: Record<string, any> = null;
         if(editableValue != null)
         {
            return editableValue;
         }
         _loc1_ = selectedItem;
         if(!_editable && _loc1_.data != null)
         {
            return _loc1_.data;
         }
         return itemToLabel(_loc1_);
      }
      
      protected focusInHandler(param1: FocusEvent): void
      {
         super.focusInHandler(param1);
         if(editable)
         {
            stage.focus = inputField.textField;
         }
      }
      
      public set dataProvider(param1: DataProvider)
      {
         param1.addEventListener(DataChangeEvent.DATA_CHANGE, handleDataChange.bind(this));
         list.dataProvider = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public get rowCount(): number
      {
         return _rowCount;
      }
      
      public set restrict(param1: string)
      {
         if(componentInspectorSetting && param1 == "")
         {
            param1 = null;
         }
         if(!_editable)
         {
            return;
         }
         inputField.restrict = param1;
      }
      
      public replaceItemAt(param1: Record<string, any>, param2: number): Record<string, any>
      {
         return list.replaceItemAt(param1,param2);
      }
      
      public removeAll(): void
      {
         list.removeAll();
         inputField.text = "";
         invalidate(InvalidationType.DATA);
      }
      
      protected onTextInput(param1: Event): void
      {
         param1.stopPropagation();
         if(!_editable)
         {
            return;
         }
         editableValue = inputField.text;
         selectedIndex = -1;
         this.dispatchEvent(new Event(Event.CHANGE));
      }
      
      protected onInputFieldFocus(param1: FocusEvent): void
      {
         inputField.addEventListener(ComponentEvent.ENTER, onEnter.bind(this));
         close();
      }
      
      protected onListItemUp(param1: MouseEvent): void
      {
         stage.removeEventListener(MouseEvent.MOUSE_UP, onListItemUp.bind(this));
         if(!(param1.target instanceof ICellRenderer) || !list.contains(param1.target  as unknown as DisplayObject))
         {
            return;
         }
         editableValue = null;
         let _loc2_: any = selectedIndex;
         selectedIndex = param1.target.listData.index;
         if(_loc2_ != selectedIndex)
         {
            this.dispatchEvent(new Event(Event.CHANGE));
         }
         close();
      }
      
      protected keyUpHandler(param1: KeyboardEvent): void
      {
         isKeyDown = false;
      }
      
      protected drawLayout(): void
      {
         let _loc1_: number = getStyleValue("buttonWidth")  as unknown as Number;
         let _loc2_: number = getStyleValue("textPadding")  as unknown as Number;
         background.setSize(width,height);
         inputField.x = inputField.y = _loc2_;
         inputField.setSize(width - _loc1_ - _loc2_,height - _loc2_);
         list.width = isNaN(_dropdownWidth) ? width : _dropdownWidth;
         background.enabled = enabled;
         background.drawNow();
      }
      
      public set selectedItem(param1: Record<string, any>)
      {
         list.selectedItem = param1;
         invalidate(InvalidationType.SELECTED);
      }
      
      public getItemAt(param1: number): Record<string, any>
      {
         return list.getItemAt(param1);
      }
      
      protected initializeAccessibility(): void
      {
         if(ComboBox.createAccessibilityImplementation != null)
         {
            ComboBox.createAccessibilityImplementation(this);
         }
      }
      
      public itemToLabel(param1: Record<string, any>): string
      {
         if(param1 == null)
         {
            return "";
         }
         return list.itemToLabel(param1);
      }
      
      public addItemAt(param1: Record<string, any>, param2: number): void
      {
         list.addItemAt(param1,param2);
         invalidate(InvalidationType.DATA);
      }
      
      private addCloseListener(param1: Event): any
      {
         this.removeEventListener(Event.ENTER_FRAME, addCloseListener.bind(this));
         if(!isOpen)
         {
            return;
         }
         stage.addEventListener(MouseEvent.MOUSE_DOWN, onStageClick.bind(this));
      }
      
      protected setEmbedFonts(): void
      {
         let _loc1_: Record<string, any> = getStyleValue("embedFonts");
         if(_loc1_ != null)
         {
            inputField.textField.embedFonts = _loc1_;
         }
      }
      
      public set rowCount(param1: number)
      {
         _rowCount = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      public removeItem(param1: Record<string, any>): Record<string, any>
      {
         return list.removeItem(param1);
      }
      
      public get dataProvider(): DataProvider
      {
         return list.dataProvider;
      }
      
      public get restrict(): string
      {
         return inputField.restrict;
      }
      
      protected showPrompt(): void
      {
         inputField.text = _prompt;
      }
      
      public sortItems(... rest): any
      {
         return list.sortItems.apply(list,rest);
      }
      
      public set editable(param1: boolean)
      {
         _editable = param1;
         drawTextField();
      }
      
      public set labelField(param1: string)
      {
         list.labelField = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public get textField(): TextInput
      {
         return inputField;
      }
      
      public set prompt(param1: string)
      {
         if(param1 == "")
         {
            _prompt = null;
         }
         else
         {
            _prompt = param1;
         }
         invalidate(InvalidationType.STATE);
      }
      
      public set labelFunction(param1: Function)
      {
         list.labelFunction = param1;
         invalidate(InvalidationType.DATA);
      }
      
      protected setStyles(): void
      {
         copyStylesToChild(background,BACKGROUND_STYLES);
         copyStylesToChild(list,LIST_STYLES);
      }
      
      public get length(): number
      {
         return list.length;
      }
      
      protected drawTextFormat(): void
      {
         let _loc1_: TextFormat = getStyleValue(_enabled ? "textFormat" : "disabledTextFormat")  as unknown as TextFormat;
         if(_loc1_ == null)
         {
            _loc1_ = new TextFormat();
         }
         inputField.textField.defaultTextFormat = _loc1_;
         inputField.textField.setTextFormat(_loc1_);
         setEmbedFonts();
      }
      
      protected drawTextField(): void
      {
         inputField.setStyle("upSkin","");
         inputField.setStyle("disabledSkin","");
         inputField.enabled = enabled;
         inputField.editable = _editable;
         inputField.textField.selectable = enabled && _editable;
         inputField.mouseEnabled = inputField.mouseChildren = enabled && _editable;
         inputField.focusEnabled = false;
         if(_editable)
         {
            inputField.addEventListener(FocusEvent.FOCUS_IN, onInputFieldFocus.bind(this));
            inputField.addEventListener(FocusEvent.FOCUS_OUT, onInputFieldFocusOut.bind(this));
         }
         else
         {
            inputField.removeEventListener(FocusEvent.FOCUS_IN, onInputFieldFocus.bind(this));
            inputField.removeEventListener(FocusEvent.FOCUS_OUT, onInputFieldFocusOut.bind(this));
         }
      }
      
      public get labelFunction(): Function
      {
         return list.labelFunction;
      }
      
      public set selectedIndex(param1: number)
      {
         list.selectedIndex = param1;
         highlightCell();
         invalidate(InvalidationType.SELECTED);
      }
      
      public get selectedIndex(): number
      {
         return list.selectedIndex;
      }
      
      public close(): void
      {
         highlightCell();
         highlightedCell = -1;
         if(!isOpen)
         {
            return;
         }
         this.dispatchEvent(new Event(Event.CLOSE));
         stage.removeEventListener(MouseEvent.MOUSE_DOWN, onStageClick.bind(this));
         isOpen = false;
         stage.removeChild(list);
      }
   }
