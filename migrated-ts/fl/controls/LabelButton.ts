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
         return mergeStyles(defaultStyles,BaseButton.getStyleDefinition());
      }
      
      protected draw(): void
      {
         if(textField.text != _label)
         {
            label = _label;
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
         let _loc2_: string = icon == null && mode == "center" ? ButtonLabelPlacement.TOP : _labelPlacement;
         textField.height = textField.textHeight + 4;
         let _loc3_: number = textField.textWidth + 4;
         let _loc4_: number = textField.textHeight + 4;
         let _loc5_: number = icon == null ? 0 : icon.width + _loc1_;
         let _loc6_: number = icon == null ? 0 : icon.height + _loc1_;
         textField.visible = label.length > 0;
         if(icon != null)
         {
            icon.x = Math.round((width - icon.width) / 2);
            icon.y = Math.round((height - icon.height) / 2);
         }
         if(textField.visible == false)
         {
            textField.width = 0;
            textField.height = 0;
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
            textField.width = _loc3_ = _loc7_;
            textField.height = _loc4_ = _loc8_;
            textField.x = Math.round((width - _loc3_) / 2);
            textField.y = Math.round((height - textField.height - _loc6_) / 2 + (_loc2_ == ButtonLabelPlacement.BOTTOM ? _loc6_ : 0));
            if(icon != null)
            {
               icon.y = Math.round(_loc2_ == ButtonLabelPlacement.BOTTOM ? textField.y - _loc6_ : textField.y + textField.height + _loc1_);
            }
         }
         else
         {
            _loc7_ = Math.max(0,Math.min(_loc3_,width - _loc5_ - 2 * _loc1_));
            textField.width = _loc3_ = _loc7_;
            textField.x = Math.round((width - _loc3_ - _loc5_) / 2 + (_loc2_ != ButtonLabelPlacement.LEFT ? _loc5_ : 0));
            textField.y = Math.round((height - textField.height) / 2);
            if(icon != null)
            {
               icon.x = Math.round(_loc2_ != ButtonLabelPlacement.LEFT ? textField.x - _loc5_ : textField.x + _loc3_ + _loc1_);
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
            setMouseState(oldMouseState);
            oldMouseState = null;
            endPress();
            this.dispatchEvent(new MouseEvent(MouseEvent.CLICK));
         }
      }
      
      public get labelPlacement(): string
      {
         return _labelPlacement;
      }
      
      public get toggle(): boolean
      {
         return _toggle;
      }
      
      protected setEmbedFont(): any
      {
         let _loc1_: Record<string, any> = getStyleValue("embedFonts");
         if(_loc1_ != null)
         {
            textField.embedFonts = _loc1_;
         }
      }
      
      public get selected(): boolean
      {
         return _toggle ? _selected : false;
      }
      
      protected configUI(): void
      {
         super.configUI();
         textField = new TextField();
         textField.type = TextFieldType.DYNAMIC;
         textField.selectable = false;
         this.addChild(textField);
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
         _labelPlacement = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      protected drawIcon(): void
      {
         let _loc1_: DisplayObject = icon;
         let _loc2_: string = enabled ? mouseState : "disabled";
         if(selected)
         {
            _loc2_ = "selected" + _loc2_.substr(0,1).toUpperCase() + _loc2_.substr(1);
         }
         _loc2_ += "Icon";
         let _loc3_: Record<string, any> = getStyleValue(_loc2_);
         if(_loc3_ == null)
         {
            _loc3_ = getStyleValue("icon");
         }
         if(_loc3_ != null)
         {
            icon = getDisplayObjectInstance(_loc3_);
         }
         if(icon != null)
         {
            this.addChildAt(icon,1);
         }
         if(_loc1_ != null && _loc1_ != icon)
         {
            this.removeChild(_loc1_);
         }
      }
      
      public set label(param1: string)
      {
         _label = param1;
         if(textField.text != _label)
         {
            textField.text = _label;
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
            if(oldMouseState == null)
            {
               oldMouseState = mouseState;
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
         _toggle = param1;
         if(_toggle)
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
         if(_toggle)
         {
            invalidate(InvalidationType.STATE);
         }
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
      }
      
      public get label(): string
      {
         return _label;
      }
   }
