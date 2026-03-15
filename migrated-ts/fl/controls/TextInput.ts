// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

export class TextInput extends UIComponent implements IFocusManagerComponent
   {
      
      public static createAccessibilityImplementation: Function;
      private static defaultStyles: Record<string, any> = null as any;
      protected _html: boolean = false;
      protected background: DisplayObject;
      protected _savedHTML: string;
      protected _editable: boolean = true;
      public textField: TextField;
      constructor(){
         super();
      }
      
      public static getStyleDefinition(): Record<string, any>
      {
         return defaultStyles;
      }
      
      public set alwaysShowSelection(param1: boolean)
      {
         textField.alwaysShowSelection = param1;
      }
      
      public set enabled(param1: boolean)
      {
         super.enabled = param1;
         updateTextFieldType();
      }
      
      public get imeMode(): string
      {
         return _imeMode;
      }
      
      protected handleChange(param1: Event): void
      {
         param1.stopPropagation();
         this.dispatchEvent(new Event(Event.CHANGE,true));
      }
      
      public set imeMode(param1: string)
      {
         _imeMode = param1;
      }
      
      protected setEmbedFont(): any
      {
         let _loc1_: Record<string, any> = getStyleValue("embedFonts");
         if(_loc1_ != null)
         {
            textField.embedFonts = _loc1_;
         }
      }
      
      protected drawLayout(): void
      {
         let _loc1_: number = Number(getStyleValue("textPadding"));
         if(background != null)
         {
            background.width = width;
            background.height = height;
         }
         textField.width = width - 2 * _loc1_;
         textField.height = height - 2 * _loc1_;
         textField.x = textField.y = _loc1_;
      }
      
      public set condenseWhite(param1: boolean)
      {
         textField.condenseWhite = param1;
      }
      
      public get textWidth(): number
      {
         return textField.textWidth;
      }
      
      protected focusOutHandler(param1: FocusEvent): void
      {
         super.focusOutHandler(param1);
         if(editable)
         {
            setIMEMode(false);
         }
      }
      
      public setFocus(): void
      {
         stage.focus = textField;
      }
      
      public set displayAsPassword(param1: boolean)
      {
         textField.displayAsPassword = param1;
      }
      
      protected drawBackground(): void
      {
         let _loc1_: DisplayObject = background;
         let _loc2_: string = enabled ? "upSkin" : "disabledSkin";
         background = getDisplayObjectInstance(getStyleValue(_loc2_));
         if(background == null)
         {
            return;
         }
         this.addChildAt(background,0);
         if(_loc1_ != null && _loc1_ != background && this.contains(_loc1_))
         {
            this.removeChild(_loc1_);
         }
      }
      
      public get text(): string
      {
         return textField.text;
      }
      
      public set maxChars(param1: number)
      {
         textField.maxChars = param1;
      }
      
      public set horizontalScrollPosition(param1: number)
      {
         textField.scrollH = param1;
      }
      
      protected isOurFocus(param1: DisplayObject): boolean
      {
         return param1 == textField || Boolean(super.isOurFocus(param1));
      }
      
      public get textHeight(): number
      {
         return textField.textHeight;
      }
      
      public get restrict(): string
      {
         return textField.restrict;
      }
      
      public get alwaysShowSelection(): boolean
      {
         return textField.alwaysShowSelection;
      }
      
      public get enabled(): boolean
      {
         return super.enabled;
      }
      
      protected draw(): void
      {
         let _loc1_: Record<string, any> = null;
         if(isInvalid(InvalidationType.STYLES,InvalidationType.STATE))
         {
            drawTextFormat();
            drawBackground();
            _loc1_ = getStyleValue("embedFonts");
            if(_loc1_ != null)
            {
               textField.embedFonts = _loc1_;
            }
            invalidate(InvalidationType.SIZE,false);
         }
         if(isInvalid(InvalidationType.SIZE))
         {
            drawLayout();
         }
         super.draw();
      }
      
      public set editable(param1: boolean)
      {
         _editable = param1;
         updateTextFieldType();
      }
      
      public setSelection(param1: number, param2: number): void
      {
         textField.setSelection(param1,param2);
      }
      
      public get condenseWhite(): boolean
      {
         return textField.condenseWhite;
      }
      
      public get displayAsPassword(): boolean
      {
         return textField.displayAsPassword;
      }
      
      public get selectionBeginIndex(): number
      {
         return textField.selectionBeginIndex;
      }
      
      protected configUI(): void
      {
         super.configUI();
         tabChildren = true;
         textField = new TextField();
         this.addChild(textField);
         updateTextFieldType();
         textField.addEventListener(TextEvent.TEXT_INPUT, handleTextInput.bind(this));
         textField.addEventListener(Event.CHANGE, handleChange.bind(this));
         textField.addEventListener(KeyboardEvent.KEY_DOWN, handleKeyDown.bind(this));
      }
      
      public get maxChars(): number
      {
         return textField.maxChars;
      }
      
      public set text(param1: string)
      {
         textField.text = param1;
         _html = false;
         invalidate(InvalidationType.DATA);
         invalidate(InvalidationType.STYLES);
      }
      
      protected updateTextFieldType(): void
      {
         textField.type = enabled && editable ? TextFieldType.INPUT : TextFieldType.DYNAMIC;
         textField.selectable = enabled;
      }
      
      protected handleKeyDown(param1: KeyboardEvent): void
      {
         if(param1.keyCode == Keyboard.ENTER)
         {
            this.dispatchEvent(new ComponentEvent(ComponentEvent.ENTER,true));
         }
      }
      
      public get horizontalScrollPosition(): number
      {
         return textField.scrollH;
      }
      
      public get selectionEndIndex(): number
      {
         return textField.selectionEndIndex;
      }
      
      public get editable(): boolean
      {
         return _editable;
      }
      
      public get maxHorizontalScrollPosition(): number
      {
         return textField.maxScrollH;
      }
      
      public appendText(param1: string): void
      {
         textField.appendText(param1);
      }
      
      protected drawTextFormat(): void
      {
         let _loc1_: Record<string, any> = UIComponent.getStyleDefinition();
         let _loc2_: TextFormat = enabled ? _loc1_.defaultTextFormat  as unknown as TextFormat : _loc1_.defaultDisabledTextFormat  as unknown as TextFormat;
         textField.setTextFormat(_loc2_);
         let _loc3_: TextFormat = getStyleValue(enabled ? "textFormat" : "disabledTextFormat")  as unknown as TextFormat;
         if(_loc3_ != null)
         {
            textField.setTextFormat(_loc3_);
         }
         else
         {
            _loc3_ = _loc2_;
         }
         textField.defaultTextFormat = _loc3_;
         setEmbedFont();
         if(_html)
         {
            textField.htmlText = _savedHTML;
         }
      }
      
      public get length(): number
      {
         return textField.length;
      }
      
      public set htmlText(param1: string)
      {
         if(param1 == "")
         {
            text = "";
            return;
         }
         _html = true;
         _savedHTML = param1;
         textField.htmlText = param1;
         invalidate(InvalidationType.DATA);
         invalidate(InvalidationType.STYLES);
      }
      
      protected handleTextInput(param1: TextEvent): void
      {
         param1.stopPropagation();
         this.dispatchEvent(new TextEvent(TextEvent.TEXT_INPUT,true,false,param1.text));
      }
      
      public set restrict(param1: string)
      {
         if(componentInspectorSetting && param1 == "")
         {
            param1 = null;
         }
         textField.restrict = param1;
      }
      
      public getLineMetrics(param1: number): TextLineMetrics
      {
         return textField.getLineMetrics(param1);
      }
      
      public drawFocus(param1: boolean): void
      {
         if(focusTarget != null)
         {
            focusTarget.drawFocus(param1);
            return;
         }
         super.drawFocus(param1);
      }
      
      protected focusInHandler(param1: FocusEvent): void
      {
         if(param1.target == this)
         {
            stage.focus = textField;
         }
         let _loc2_: IFocusManager = focusManager;
         if(editable && Boolean(_loc2_))
         {
            _loc2_.showFocusIndicator = true;
            if(textField.selectable && textField.selectionBeginIndex == textField.selectionBeginIndex)
            {
               setSelection(0,textField.length);
            }
         }
         super.focusInHandler(param1);
         if(editable)
         {
            setIMEMode(true);
         }
      }
      
      public get htmlText(): string
      {
         return textField.htmlText;
      }
   }
