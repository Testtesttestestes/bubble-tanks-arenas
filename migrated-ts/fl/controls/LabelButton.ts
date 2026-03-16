// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

export class LabelButton extends BaseButton implements IFocusManagerComponent
   {
      
      public static createAccessibilityImplementation: Function;
      private static defaultStyles: Record<string, any> = null as any;
      protected _toggle: boolean = false;
      public textField: TextField;
      protected mode: string = "center";
      protected _labelPlacement: string = "right";
      protected oldMouseState: string;
      protected _label: string = "Label";
      protected icon: DisplayObject;
      constructor(){
         super();
      }
      
      public static getStyleDefinition(): Record<string, any>
      {
         return mergeStyles(this.defaultStyles,BaseButton.getStyleDefinition());
      }
      
      protected draw(): void
      {
         if(this.textField.text != this._label)
         {
            label = this._label;
         }
         if(isInvalid(InvalidationType.STYLES,InvalidationType.STATE))
         {
            drawBackground();
            drawIcon();
            drawTextFormat();
            invalidate(InvalidationType.SIZE,false);
         }
         if(isInvalid(InvalidationType.SIZE))
         {
            drawLayout();
         }
         if(isInvalid(InvalidationType.SIZE,InvalidationType.STYLES))
         {
            if(isFocused && focusManager.showFocusIndicator)
            {
               drawFocus(true);
            }
         }
         validate();
      }
      
      protected drawLayout(): void
      {
         let _loc7_: number = NaN;
         let _loc8_: number = NaN;
         let _loc1_: number = Number(getStyleValue("textPadding"));
         let _loc2_: string = this.icon == null && this.mode == "center" ? ButtonLabelPlacement.TOP : this._labelPlacement;
         this.textField.height = this.textField.textHeight + 4;
         let _loc3_: number = this.textField.textWidth + 4;
         let _loc4_: number = this.textField.textHeight + 4;
         let _loc5_: number = this.icon == null ? 0 : this.icon.width + _loc1_;
         let _loc6_: number = this.icon == null ? 0 : this.icon.height + _loc1_;
         this.textField.visible = label.length > 0;
         if(this.icon != null)
         {
            this.icon.x = Math.round((width - this.icon.width) / 2);
            this.icon.y = Math.round((height - this.icon.height) / 2);
         }
         if(this.textField.visible == false)
         {
            this.textField.width = 0;
            this.textField.height = 0;
         }
         else if(_loc2_ == ButtonLabelPlacement.BOTTOM || _loc2_ == ButtonLabelPlacement.TOP)
         {
            _loc7_ = Math.max(0,Math.min(_loc3_,width - 2 * _loc1_));
            if(height - 2 > _loc4_)
            {
               _loc8_ = _loc4_;
            }
            else
            {
               _loc8_ = height - 2;
            }
            this.textField.width = _loc3_ = _loc7_;
            this.textField.height = _loc4_ = _loc8_;
            this.textField.x = Math.round((width - _loc3_) / 2);
            this.textField.y = Math.round((height - this.textField.height - _loc6_) / 2 + (_loc2_ == ButtonLabelPlacement.BOTTOM ? _loc6_ : 0));
            if(this.icon != null)
            {
               this.icon.y = Math.round(_loc2_ == ButtonLabelPlacement.BOTTOM ? this.textField.y - _loc6_ : this.textField.y + this.textField.height + _loc1_);
            }
         }
         else
         {
            _loc7_ = Math.max(0,Math.min(_loc3_,width - _loc5_ - 2 * _loc1_));
            this.textField.width = _loc3_ = _loc7_;
            this.textField.x = Math.round((width - _loc3_ - _loc5_) / 2 + (_loc2_ != ButtonLabelPlacement.LEFT ? _loc5_ : 0));
            this.textField.y = Math.round((height - this.textField.height) / 2);
            if(this.icon != null)
            {
               this.icon.x = Math.round(_loc2_ != ButtonLabelPlacement.LEFT ? this.textField.x - _loc5_ : this.textField.x + _loc3_ + _loc1_);
            }
         }
         super.drawLayout();
      }
      
      protected toggleSelected(param1: MouseEvent): void
      {
         selected = !selected;
         this.dispatchEvent(new Event(Event.CHANGE,true));
      }
      
      protected keyUpHandler(param1: KeyboardEvent): void
      {
         if(!enabled)
         {
            return;
         }
         if(param1.keyCode == Keyboard.SPACE)
         {
            setMouseState(this.oldMouseState);
            this.oldMouseState = null;
            endPress();
            this.dispatchEvent(new MouseEvent(MouseEvent.CLICK));
         }
      }
      
      public get labelPlacement(): string
      {
         return this._labelPlacement;
      }
      
      public get toggle(): boolean
      {
         return this._toggle;
      }
      
      protected setEmbedFont(): any
      {
         let _loc1_: Record<string, any> = getStyleValue("embedFonts");
         if(_loc1_ != null)
         {
            this.textField.embedFonts = _loc1_;
         }
      }
      
      public get selected(): boolean
      {
         return this._toggle ? _selected : false;
      }
      
      protected configUI(): void
      {
         super.configUI();
         this.textField = new TextField();
         this.textField.type = TextFieldType.DYNAMIC;
         this.textField.selectable = false;
         this.addChild(this.textField);
      }
      
      protected initializeAccessibility(): void
      {
         if(LabelButton.createAccessibilityImplementation != null)
         {
            LabelButton.createAccessibilityImplementation(this);
         }
      }
      
      public set labelPlacement(param1: string)
      {
         this._labelPlacement = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      protected drawIcon(): void
      {
         let _loc1_: DisplayObject = this.icon;
         let _loc2_: string = enabled ? mouseState : "disabled";
         if(selected)
         {
            _loc2_ = "selected" + _loc2_.substr(0,1).toUpperCase() + _loc2_.substr(1);
         }
         _loc2_ += "Icon";
         let _loc3_: Record<string, any> = getStyleValue(_loc2_);
         if(_loc3_ == null)
         {
            _loc3_ = getStyleValue("this.icon");
         }
         if(_loc3_ != null)
         {
            this.icon = getDisplayObjectInstance(_loc3_);
         }
         if(this.icon != null)
         {
            this.addChildAt(this.icon,1);
         }
         if(_loc1_ != null && _loc1_ != this.icon)
         {
            this.removeChild(_loc1_);
         }
      }
      
      public set label(param1: string)
      {
         this._label = param1;
         if(this.textField.text != this._label)
         {
            this.textField.text = this._label;
            this.dispatchEvent(new ComponentEvent(ComponentEvent.LABEL_CHANGE));
         }
         invalidate(InvalidationType.SIZE);
         invalidate(InvalidationType.STYLES);
      }
      
      protected keyDownHandler(param1: KeyboardEvent): void
      {
         if(!enabled)
         {
            return;
         }
         if(param1.keyCode == Keyboard.SPACE)
         {
            if(this.oldMouseState == null)
            {
               this.oldMouseState = mouseState;
            }
            setMouseState("down");
            startPress();
         }
      }
      
      public set toggle(param1: boolean)
      {
         if(!param1 && super.selected)
         {
            selected = false;
         }
         this._toggle = param1;
         if(this._toggle)
         {
            this.addEventListener(MouseEvent.CLICK, toggleSelected.bind(this));
         }
         else
         {
            this.removeEventListener(MouseEvent.CLICK, toggleSelected.bind(this));
         }
         invalidate(InvalidationType.STATE);
      }
      
      public set selected(param1: boolean)
      {
         _selected = param1;
         if(this._toggle)
         {
            invalidate(InvalidationType.STATE);
         }
      }
      
      protected drawTextFormat(): void
      {
         let _loc1_: Record<string, any> = UIComponent.getStyleDefinition();
         let _loc2_: TextFormat = enabled ? _loc1_.defaultTextFormat  as unknown as TextFormat : _loc1_.defaultDisabledTextFormat  as unknown as TextFormat;
         this.textField.setTextFormat(_loc2_);
         let _loc3_: TextFormat = getStyleValue(enabled ? "textFormat" : "disabledTextFormat")  as unknown as TextFormat;
         if(_loc3_ != null)
         {
            this.textField.setTextFormat(_loc3_);
         }
         else
         {
            _loc3_ = _loc2_;
         }
         this.textField.defaultTextFormat = _loc3_;
         setEmbedFont();
      }
      
      public get label(): string
      {
         return this._label;
      }
   }
