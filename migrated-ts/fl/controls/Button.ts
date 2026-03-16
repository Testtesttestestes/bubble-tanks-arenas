// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

export class Button extends LabelButton implements IFocusManagerComponent
   {
      
      public static createAccessibilityImplementation: Function;
      private static defaultStyles: Record<string, any> = {
         "emphasizedSkin":"Button_emphasizedSkin",
         "emphasizedPadding":2
      };
      protected _emphasized: boolean = false;
      protected emphasizedBorder: DisplayObject;
      constructor(){
         super();
      }
      
      public static getStyleDefinition(): Record<string, any>
      {
         return UIComponent.mergeStyles(LabelButton.getStyleDefinition(),this.defaultStyles);
      }
      
      public set emphasized(param1: boolean)
      {
         this._emphasized = param1;
         invalidate(InvalidationType.STYLES);
      }
      
      protected initializeAccessibility(): void
      {
         if(Button.createAccessibilityImplementation != null)
         {
            Button.createAccessibilityImplementation(this);
         }
      }
      
      protected drawEmphasized(): void
      {
         let _loc2_: number = NaN;
         if(this.emphasizedBorder != null)
         {
            this.removeChild(this.emphasizedBorder);
         }
         this.emphasizedBorder = null;
         if(!this._emphasized)
         {
            return;
         }
         let _loc1_: Record<string, any> = getStyleValue("emphasizedSkin");
         if(_loc1_ != null)
         {
            this.emphasizedBorder = getDisplayObjectInstance(_loc1_);
         }
         if(this.emphasizedBorder != null)
         {
            this.addChildAt(this.emphasizedBorder,0);
            _loc2_ = Number(getStyleValue("emphasizedPadding"));
            this.emphasizedBorder.x = this.emphasizedBorder.y = -_loc2_;
            this.emphasizedBorder.width = width + _loc2_ * 2;
            this.emphasizedBorder.height = height + _loc2_ * 2;
         }
      }
      
      public get emphasized(): boolean
      {
         return this._emphasized;
      }
      
      protected draw(): void
      {
         if(isInvalid(InvalidationType.STYLES) || isInvalid(InvalidationType.SIZE))
         {
            drawEmphasized();
         }
         super.draw();
         if(this.emphasizedBorder != null)
         {
            this.setChildIndex(this.emphasizedBorder,numChildren - 1);
         }
      }
      
      public drawFocus(param1: boolean): void
      {
         let _loc2_: number = NaN;
         let _loc3_: any = undefined;
         super.drawFocus(param1);
         if(param1)
         {
            _loc2_ = Number(getStyleValue("emphasizedPadding"));
            if(_loc2_ < 0 || !this._emphasized)
            {
               _loc2_ = 0;
            }
            _loc3_ = getStyleValue("focusRectPadding");
            _loc3_ = _loc3_ == null ? 2 : _loc3_;
            _loc3_ += _loc2_;
            uiFocusRect.x = -_loc3_;
            uiFocusRect.y = -_loc3_;
            uiFocusRect.width = width + _loc3_ * 2;
            uiFocusRect.height = height + _loc3_ * 2;
         }
      }
   }
