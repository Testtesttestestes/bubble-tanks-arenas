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
         return UIComponent.mergeStyles(LabelButton.getStyleDefinition(),defaultStyles);
      }
      
      public set emphasized(param1: boolean)
      {
         _emphasized = param1;
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
         if(emphasizedBorder != null)
         {
            this.removeChild(emphasizedBorder);
         }
         emphasizedBorder = null;
         if(!_emphasized)
         {
            return;
         }
         let _loc1_: Record<string, any> = getStyleValue("emphasizedSkin");
         if(_loc1_ != null)
         {
            emphasizedBorder = getDisplayObjectInstance(_loc1_);
         }
         if(emphasizedBorder != null)
         {
            this.addChildAt(emphasizedBorder,0);
            _loc2_ = Number(getStyleValue("emphasizedPadding"));
            emphasizedBorder.x = emphasizedBorder.y = -_loc2_;
            emphasizedBorder.width = width + _loc2_ * 2;
            emphasizedBorder.height = height + _loc2_ * 2;
         }
      }
      
      public get emphasized(): boolean
      {
         return _emphasized;
      }
      
      protected draw(): void
      {
         if(isInvalid(InvalidationType.STYLES) || isInvalid(InvalidationType.SIZE))
         {
            drawEmphasized();
         }
         super.draw();
         if(emphasizedBorder != null)
         {
            this.setChildIndex(emphasizedBorder,numChildren - 1);
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
            if(_loc2_ < 0 || !_emphasized)
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
