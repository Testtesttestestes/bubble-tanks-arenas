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
         return mergeStyles(this.defaultStyles,List.getStyleDefinition());
      }
      
      protected drawList(): void
      {
         this.list.rowCount = Math.max(0,Math.min(this._rowCount,this.list.dataProvider.length));
      }
      
      public get imeMode(): string
      {
         return this.inputField.imeMode;
      }
      
      protected onInputFieldFocusOut(param1: FocusEvent): void
      {
         this.inputField.removeEventListener(ComponentEvent.ENTER, onEnter.bind(this));
         selectedIndex = selectedIndex;
      }
      
      public set imeMode(param1: string)
      {
         this.inputField.imeMode = param1;
      }
      
      protected passEvent(param1: Event): void
      {
         this.dispatchEvent(param1);
      }
      
      protected calculateAvailableHeight(): number
      {
         let _loc1_: number = Number(getStyleValue("contentPadding"));
         return this.list.height - _loc1_ * 2;
      }
      
      public get dropdown(): List
      {
         return this.list;
      }
      
      protected focusOutHandler(param1: FocusEvent): void
      {
         this.isKeyDown = false;
         if(this.isOpen)
         {
            if(!param1.relatedObject || !this.list.contains(param1.relatedObject))
            {
               if(this.highlightedCell != -1 && this.highlightedCell != selectedIndex)
               {
                  selectedIndex = this.highlightedCell;
                  this.dispatchEvent(new Event(Event.CHANGE));
               }
               close();
            }
         }
         super.focusOutHandler(param1);
      }
      
      public get selectedLabel(): string
      {
         if(this.editableValue != null)
         {
            return this.editableValue;
         }
         if(selectedIndex == -1)
         {
            return null;
         }
         return itemToLabel(selectedItem);
      }
      
      protected onListChange(param1: Event): void
      {
         this.editableValue = null;
         this.dispatchEvent(param1);
         invalidate(InvalidationType.SELECTED);
         if(this.isKeyDown)
         {
            return;
         }
         close();
      }
      
      public get text(): string
      {
         return this.inputField.text;
      }
      
      protected onEnter(param1: ComponentEvent): void
      {
         param1.stopPropagation();
      }
      
      public sortItemsOn(param1: string, param2: Record<string, any> = null): any
      {
         return this.list.sortItemsOn(param1,param2);
      }
      
      protected handleDataChange(param1: DataChangeEvent): void
      {
         invalidate(InvalidationType.DATA);
      }
      
      protected onToggleListVisibility(param1: MouseEvent): void
      {
         param1.stopPropagation();
         this.dispatchEvent(param1);
         if(this.isOpen)
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
         return this.list.width;
      }
      
      protected highlightCell(param1: number = -1): void
      {
         let _loc2_: ICellRenderer = null;
         if(this.highlightedCell > -1)
         {
            _loc2_ = this.list.itemToCellRenderer(getItemAt(this.highlightedCell));
            if(_loc2_ != null)
            {
               _loc2_.setMouseState("up");
            }
         }
         if(param1 == -1)
         {
            return;
         }
         this.list.scrollToIndex(param1);
         this.list.drawNow();
         _loc2_ = this.list.itemToCellRenderer(getItemAt(param1));
         if(_loc2_ != null)
         {
            _loc2_.setMouseState("over");
            this.highlightedCell = param1;
         }
      }
      
      public removeItemAt(param1: number): void
      {
         this.list.removeItemAt(param1);
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
            this.editableValue = null;
            _loc1_ = Math.max(0,Math.min(_loc1_,length - 1));
         }
         if(this.list.selectedIndex != _loc1_)
         {
            this.list.selectedIndex = _loc1_;
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
            if(_loc1_ == -1 && this.editableValue != null)
            {
               this.inputField.text = this.editableValue;
            }
            else if(_loc1_ > -1)
            {
               if(length > 0)
               {
                  this.inputField.horizontalScrollPosition = 0;
                  this.inputField.text = itemToLabel(this.list.selectedItem);
               }
            }
            else if(_loc1_ == -1 && this._prompt != null)
            {
               showPrompt();
            }
            else
            {
               this.inputField.text = "";
            }
            if(editable && selectedIndex > -1 && stage.focus == this.inputField.textField)
            {
               this.inputField.setSelection(0,this.inputField.length);
            }
         }
         drawTextField();
         super.draw();
      }
      
      public get selectedItem(): Record<string, any>
      {
         return this.list.selectedItem;
      }
      
      public open(): void
      {
         this.currentIndex = selectedIndex;
         if(this.isOpen || length == 0)
         {
            return;
         }
         this.dispatchEvent(new Event(Event.OPEN));
         this.isOpen = true;
         this.addEventListener(Event.ENTER_FRAME, addCloseListener.bind(this));
         positionList();
         this.list.scrollToSelected();
         stage.addChild(this.list);
      }
      
      protected configUI(): void
      {
         super.configUI();
         this.background = new BaseButton();
         this.background.focusEnabled = false;
         copyStylesToChild(this.background,this.BACKGROUND_STYLES);
         this.background.addEventListener(MouseEvent.MOUSE_DOWN, onToggleListVisibility.bind(this));
         this.addChild(this.background);
         this.inputField = new TextInput();
         this.inputField.focusTarget = this  as unknown as IFocusManagerComponent;
         this.inputField.focusEnabled = false;
         this.inputField.addEventListener(Event.CHANGE, onTextInput.bind(this));
         this.addChild(this.inputField);
         this.list = new List();
         this.list.focusEnabled = false;
         copyStylesToChild(this.list,this.LIST_STYLES);
         this.list.addEventListener(Event.CHANGE, onListChange.bind(this));
         this.list.addEventListener(ListEvent.ITEM_CLICK, onListChange.bind(this));
         this.list.addEventListener(ListEvent.ITEM_ROLL_OUT, passEvent.bind(this));
         this.list.addEventListener(ListEvent.ITEM_ROLL_OVER, passEvent.bind(this));
         this.list.verticalScrollBar.addEventListener(Event.SCROLL, passEvent.bind(this));
      }
      
      public set text(param1: string)
      {
         if(!editable)
         {
            return;
         }
         this.inputField.text = param1;
      }
      
      public addItem(param1: Record<string, any>): void
      {
         this.list.addItem(param1);
         invalidate(InvalidationType.DATA);
      }
      
      public get editable(): boolean
      {
         return this._editable;
      }
      
      public get labelField(): string
      {
         return this.list.labelField;
      }
      
      protected positionList(): void
      {
         let _loc1_: Point = localToGlobal(new Point(0,0));
         this.list.x = _loc1_.x;
         if(_loc1_.y + height + this.list.height > stage.stageHeight)
         {
            this.list.y = _loc1_.y - this.list.height;
         }
         else
         {
            this.list.y = _loc1_.y + height;
         }
      }
      
      protected onStageClick(param1: MouseEvent): void
      {
         if(!this.isOpen)
         {
            return;
         }
         if(!this.contains(param1.target  as unknown as DisplayObject) && !this.list.contains(param1.target  as unknown as DisplayObject))
         {
            if(this.highlightedCell != -1)
            {
               selectedIndex = this.highlightedCell;
               this.dispatchEvent(new Event(Event.CHANGE));
            }
            close();
         }
      }
      
      public set dropdownWidth(param1: number)
      {
         this._dropdownWidth = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      public get prompt(): string
      {
         return this._prompt;
      }
      
      protected keyDownHandler(param1: KeyboardEvent): void
      {
         this.isKeyDown = true;
         if(param1.ctrlKey)
         {
            switch(param1.keyCode)
            {
               case Keyboard.UP:
                  if(this.highlightedCell > -1)
                  {
                     selectedIndex = this.highlightedCell;
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
         let _loc2_: number = Math.max(calculateAvailableHeight() / this.list.rowHeight << 0,1);
         let _loc3_: number = Math.floor(selectedIndex);
         let _loc4_: number = this.highlightedCell == -1 ? selectedIndex : this.highlightedCell;
         let _loc5_: number = -1;
         switch(param1.keyCode)
         {
            case Keyboard.SPACE:
               if(this.isOpen)
               {
                  close();
               }
               else
               {
                  open();
               }
               return;
            case Keyboard.ESCAPE:
               if(this.isOpen)
               {
                  if(this.highlightedCell > -1)
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
               if(this._editable && this.highlightedCell == -1)
               {
                  this.editableValue = this.inputField.text;
                  selectedIndex = -1;
               }
               else if(this.isOpen && this.highlightedCell > -1)
               {
                  this.editableValue = null;
                  selectedIndex = this.highlightedCell;
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
               _loc5_ = this.list.getNextIndexAtLetter(String.fromCharCode(param1.keyCode),_loc4_);
         }
         if(_loc5_ > -1)
         {
            if(this.isOpen)
            {
               highlightCell(_loc5_);
               this.inputField.text = this.list.itemToLabel(getItemAt(_loc5_));
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
         if(this.editableValue != null)
         {
            return this.editableValue;
         }
         _loc1_ = selectedItem;
         if(!this._editable && _loc1_.data != null)
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
            stage.focus = this.inputField.textField;
         }
      }
      
      public set dataProvider(param1: DataProvider)
      {
         param1.addEventListener(DataChangeEvent.DATA_CHANGE, handleDataChange.bind(this));
         this.list.dataProvider = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public get rowCount(): number
      {
         return this._rowCount;
      }
      
      public set restrict(param1: string)
      {
         if(componentInspectorSetting && param1 == "")
         {
            param1 = null;
         }
         if(!this._editable)
         {
            return;
         }
         this.inputField.restrict = param1;
      }
      
      public replaceItemAt(param1: Record<string, any>, param2: number): Record<string, any>
      {
         return this.list.replaceItemAt(param1,param2);
      }
      
      public removeAll(): void
      {
         this.list.removeAll();
         this.inputField.text = "";
         invalidate(InvalidationType.DATA);
      }
      
      protected onTextInput(param1: Event): void
      {
         param1.stopPropagation();
         if(!this._editable)
         {
            return;
         }
         this.editableValue = this.inputField.text;
         selectedIndex = -1;
         this.dispatchEvent(new Event(Event.CHANGE));
      }
      
      protected onInputFieldFocus(param1: FocusEvent): void
      {
         this.inputField.addEventListener(ComponentEvent.ENTER, onEnter.bind(this));
         close();
      }
      
      protected onListItemUp(param1: MouseEvent): void
      {
         stage.removeEventListener(MouseEvent.MOUSE_UP, onListItemUp.bind(this));
         if(!(param1.target instanceof ICellRenderer) || !this.list.contains(param1.target  as unknown as DisplayObject))
         {
            return;
         }
         this.editableValue = null;
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
         this.isKeyDown = false;
      }
      
      protected drawLayout(): void
      {
         let _loc1_: number = getStyleValue("buttonWidth")  as unknown as Number;
         let _loc2_: number = getStyleValue("textPadding")  as unknown as Number;
         this.background.setSize(width,height);
         this.inputField.x = this.inputField.y = _loc2_;
         this.inputField.setSize(width - _loc1_ - _loc2_,height - _loc2_);
         this.list.width = isNaN(this._dropdownWidth) ? width : this._dropdownWidth;
         this.background.enabled = enabled;
         this.background.drawNow();
      }
      
      public set selectedItem(param1: Record<string, any>)
      {
         this.list.selectedItem = param1;
         invalidate(InvalidationType.SELECTED);
      }
      
      public getItemAt(param1: number): Record<string, any>
      {
         return this.list.getItemAt(param1);
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
         return this.list.itemToLabel(param1);
      }
      
      public addItemAt(param1: Record<string, any>, param2: number): void
      {
         this.list.addItemAt(param1,param2);
         invalidate(InvalidationType.DATA);
      }
      
      private addCloseListener(param1: Event): any
      {
         this.removeEventListener(Event.ENTER_FRAME, addCloseListener.bind(this));
         if(!this.isOpen)
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
            this.inputField.textField.embedFonts = _loc1_;
         }
      }
      
      public set rowCount(param1: number)
      {
         this._rowCount = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      public removeItem(param1: Record<string, any>): Record<string, any>
      {
         return this.list.removeItem(param1);
      }
      
      public get dataProvider(): DataProvider
      {
         return this.list.dataProvider;
      }
      
      public get restrict(): string
      {
         return this.inputField.restrict;
      }
      
      protected showPrompt(): void
      {
         this.inputField.text = this._prompt;
      }
      
      public sortItems(... rest): any
      {
         return this.list.sortItems.apply(this.list,rest);
      }
      
      public set editable(param1: boolean)
      {
         this._editable = param1;
         drawTextField();
      }
      
      public set labelField(param1: string)
      {
         this.list.labelField = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public get textField(): TextInput
      {
         return this.inputField;
      }
      
      public set prompt(param1: string)
      {
         if(param1 == "")
         {
            this._prompt = null;
         }
         else
         {
            this._prompt = param1;
         }
         invalidate(InvalidationType.STATE);
      }
      
      public set labelFunction(param1: Function)
      {
         this.list.labelFunction = param1;
         invalidate(InvalidationType.DATA);
      }
      
      protected setStyles(): void
      {
         copyStylesToChild(this.background,this.BACKGROUND_STYLES);
         copyStylesToChild(this.list,this.LIST_STYLES);
      }
      
      public get length(): number
      {
         return this.list.length;
      }
      
      protected drawTextFormat(): void
      {
         let _loc1_: TextFormat = getStyleValue(_enabled ? "textFormat" : "disabledTextFormat")  as unknown as TextFormat;
         if(_loc1_ == null)
         {
            _loc1_ = new TextFormat();
         }
         this.inputField.textField.defaultTextFormat = _loc1_;
         this.inputField.textField.setTextFormat(_loc1_);
         setEmbedFonts();
      }
      
      protected drawTextField(): void
      {
         this.inputField.setStyle("upSkin","");
         this.inputField.setStyle("disabledSkin","");
         this.inputField.enabled = enabled;
         this.inputField.editable = this._editable;
         this.inputField.textField.selectable = enabled && this._editable;
         this.inputField.mouseEnabled = this.inputField.mouseChildren = enabled && this._editable;
         this.inputField.focusEnabled = false;
         if(this._editable)
         {
            this.inputField.addEventListener(FocusEvent.FOCUS_IN, onInputFieldFocus.bind(this));
            this.inputField.addEventListener(FocusEvent.FOCUS_OUT, onInputFieldFocusOut.bind(this));
         }
         else
         {
            this.inputField.removeEventListener(FocusEvent.FOCUS_IN, onInputFieldFocus.bind(this));
            this.inputField.removeEventListener(FocusEvent.FOCUS_OUT, onInputFieldFocusOut.bind(this));
         }
      }
      
      public get labelFunction(): Function
      {
         return this.list.labelFunction;
      }
      
      public set selectedIndex(param1: number)
      {
         this.list.selectedIndex = param1;
         highlightCell();
         invalidate(InvalidationType.SELECTED);
      }
      
      public get selectedIndex(): number
      {
         return this.list.selectedIndex;
      }
      
      public close(): void
      {
         highlightCell();
         this.highlightedCell = -1;
         if(!this.isOpen)
         {
            return;
         }
         this.dispatchEvent(new Event(Event.CLOSE));
         stage.removeEventListener(MouseEvent.MOUSE_DOWN, onStageClick.bind(this));
         this.isOpen = false;
         stage.removeChild(this.list);
      }
   }
