// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.core

export class UIComponent extends Sprite{
      
      public static createAccessibilityImplementation: Function;
      public static inCallLaterPhase: boolean = false;
      private static defaultStyles: Record<string, any> = {
         "focusRectSkin":"focusRectSkin",
         "focusRectPadding":2,
         "textFormat":new TextFormat("_sans",11,0,false,false,false,"","",TextFormatAlign.LEFT,0,0,0,0),
         "disabledTextFormat":new TextFormat("_sans",11,10066329,false,false,false,"","",TextFormatAlign.LEFT,0,0,0,0),
         "defaultTextFormat":new TextFormat("_sans",11,0,false,false,false,"","",TextFormatAlign.LEFT,0,0,0,0),
         "defaultDisabledTextFormat":new TextFormat("_sans",11,10066329,false,false,false,"","",TextFormatAlign.LEFT,0,0,0,0)
      };
      private static focusManagers: Dictionary = new Dictionary(false);
      protected _x: number;
      protected _enabled: boolean = true;
      protected callLaterMethods: Dictionary;
      private _mouseFocusEnabled: boolean = true;
      private tempText: TextField;
      private _focusEnabled: boolean = true;
      protected startHeight: number;
      protected _height: number;
      protected invalidateFlag: boolean = false;
      protected _oldIMEMode: string = null as any;
      protected _inspector: boolean = false;
      protected startWidth: number;
      public focusTarget: IFocusManagerComponent;
      protected errorCaught: boolean = false;
      protected invalidHash: Record<string, any>;
      protected sharedStyles: Record<string, any>;
      protected uiFocusRect: DisplayObject;
      protected isLivePreview: boolean = false;
      protected _imeMode: string = null as any;
      protected _width: number;
      protected instanceStyles: Record<string, any>;
      public version: string = "3.0.0.16";
      protected isFocused: boolean = false;
      protected _y: number;
      constructor(){
         super();
         this.instanceStyles = {};
         this.sharedStyles = {};
         this.invalidHash = {};
         this.callLaterMethods = new Dictionary();
         StyleManager.registerInstance(this);
         configUI();
         invalidate(InvalidationType.ALL);
         tabEnabled = this instanceof IFocusManagerComponent;
         focusRect = false;
         if(tabEnabled)
         {
            this.addEventListener(FocusEvent.FOCUS_IN, focusInHandler.bind(this));
            this.addEventListener(FocusEvent.FOCUS_OUT, focusOutHandler.bind(this));
            this.addEventListener(KeyboardEvent.KEY_DOWN, keyDownHandler.bind(this));
            this.addEventListener(KeyboardEvent.KEY_UP, keyUpHandler.bind(this));
         }
         initializeFocusManager();
         this.addEventListener(Event.ENTER_FRAME, hookAccessibility.bind(this));
      }
      
      public static getStyleDefinition(): Record<string, any>
      {
         return this.defaultStyles;
      }
      
      public static mergeStyles(... rest): Record<string, any>
      {
         let _loc5_: Record<string, any> = null;
         let _loc6_: string = null;
         let _loc2_: Record<string, any> = {};
         let _loc3_: number = Math.floor(rest.length);
         let _loc4_: number = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = rest[_loc4_];
            for (let _loc6_ in _loc5_)
            {
               if(_loc2_[_loc6_] == null)
               {
                  _loc2_[_loc6_] = rest[_loc4_][_loc6_];
               }
            }
            _loc4_++;
         }
         return _loc2_;
      }
      
      public getStyle(param1: string): Record<string, any>
      {
         return this.instanceStyles[param1];
      }
      
      protected checkLivePreview(): boolean
      {
         let className: string = null;
         if(parent == null)
         {
            return false;
         }
         try
         {
            className = getQualifiedClassName(parent);
         }
         catch (e: any)
         {
         }
         return className == "fl.livepreview::LivePreviewParent";
      }
      
      private callLaterDispatcher(param1: Event): void
      {
         let _loc3_: Record<string, any> = null;
         if(param1.type == Event.ADDED_TO_STAGE)
         {
            this.removeEventListener(Event.ADDED_TO_STAGE, callLaterDispatcher.bind(this));
            stage.addEventListener(Event.RENDER, callLaterDispatcher.bind(this));
            stage.invalidate();
            return;
         }
         param1.target.removeEventListener(Event.RENDER, callLaterDispatcher.bind(this));
         if(stage == null)
         {
            this.addEventListener(Event.ADDED_TO_STAGE, callLaterDispatcher.bind(this));
            return;
         }
         this.inCallLaterPhase = true;
         let _loc2_: Dictionary = this.callLaterMethods;
         for (let _loc3_ in _loc2_)
         {
            _loc3_();
            delete _loc2_[_loc3_];
         }
         this.inCallLaterPhase = false;
      }
      
      protected validate(): void
      {
         this.invalidHash = {};
      }
      
      protected focusOutHandler(param1: FocusEvent): void
      {
         if(isOurFocus(param1.target  as unknown as DisplayObject))
         {
            drawFocus(false);
            this.isFocused = false;
         }
      }
      
      public set mouseFocusEnabled(param1: boolean)
      {
         this._mouseFocusEnabled = param1;
      }
      
      public getFocus(): InteractiveObject
      {
         if(stage)
         {
            return stage.focus;
         }
         return null;
      }
      
      public get height(): number
      {
         return this._height;
      }
      
      private addedHandler(param1: Event): void
      {
         this.removeEventListener("addedToStage", addedHandler.bind(this));
         initializeFocusManager();
      }
      
      protected getStyleValue(param1: string): Record<string, any>
      {
         return this.instanceStyles[param1] == null ? this.sharedStyles[param1] : this.instanceStyles[param1];
      }
      
      public invalidate(param1: string = "all", param2: boolean = true): void
      {
         this.invalidHash[param1] = true;
         if(param2)
         {
            this.callLater(draw);
         }
      }
      
      protected isOurFocus(param1: DisplayObject): boolean
      {
         return param1 == this;
      }
      
      public get enabled(): boolean
      {
         return this._enabled;
      }
      
      protected getScaleX(): number
      {
         return super.scaleX;
      }
      
      protected getScaleY(): number
      {
         return super.scaleY;
      }
      
      public get focusEnabled(): boolean
      {
         return this._focusEnabled;
      }
      
      protected afterComponentParameters(): void
      {
      }
      
      public get scaleY(): number
      {
         return height / this.startHeight;
      }
      
      protected setIMEMode(param1: boolean): any
      {
         let enabled: boolean = param1;
         if(this._imeMode != null)
         {
            if(enabled)
            {
               IME.enabled = true;
               this._oldIMEMode = IME.conversionMode;
               try
               {
                  if(!this.errorCaught && IME.conversionMode != IMEConversionMode.UNKNOWN)
                  {
                     IME.conversionMode = this._imeMode;
                  }
                  this.errorCaught = false;
               }
               catch (e: any)
               {
                  this.errorCaught = true;
                  throw new Error("IME mode not supported: " + this._imeMode);
               }
            }
            else
            {
               if(IME.conversionMode != IMEConversionMode.UNKNOWN && this._oldIMEMode != IMEConversionMode.UNKNOWN)
               {
                  IME.conversionMode = this._oldIMEMode;
               }
               IME.enabled = false;
            }
         }
      }
      
      protected draw(): void
      {
         if(isInvalid(InvalidationType.SIZE,InvalidationType.STYLES))
         {
            if(this.isFocused && focusManager.showFocusIndicator)
            {
               drawFocus(true);
            }
         }
         validate();
      }
      
      public set height(param1: number)
      {
         if(this._height == param1)
         {
            return;
         }
         setSize(width,param1);
      }
      
      protected configUI(): void
      {
         this.isLivePreview = checkLivePreview();
         let _loc1_: number = rotation;
         rotation = 0;
         let _loc2_: number = super.width;
         let _loc3_: number = super.height;
         let _temp_3: any = this;
         let _temp_2: any = this;
         let _temp_1: any = 1;
         1;
         _temp_2.super.scaleY = _temp_1;
         _temp_3.super.scaleX = 1;
         setSize(_loc2_,_loc3_);
         move(super.x,super.y);
         rotation = _loc1_;
         this.startWidth = _loc2_;
         this.startHeight = _loc3_;
         if(numChildren > 0)
         {
            this.removeChildAt(0);
         }
      }
      
      protected setScaleY(param1: number): void
      {
         super.scaleY = param1;
      }
      
      public get scaleX(): number
      {
         return width / this.startWidth;
      }
      
      protected setScaleX(param1: number): void
      {
         super.scaleX = param1;
      }
      
      private initializeFocusManager(): void
      {
         if(stage == null)
         {
            this.addEventListener(Event.ADDED_TO_STAGE, addedHandler.bind(this));
         }
         else
         {
            createFocusManager();
         }
      }
      
      protected keyDownHandler(param1: KeyboardEvent): void
      {
      }
      
      public set focusManager(param1: IFocusManager)
      {
         UIComponent.focusManagers[this] = param1;
      }
      
      public clearStyle(param1: string): void
      {
         setStyle(param1,null);
      }
      
      protected isInvalid(param1: string, ... rest): boolean
      {
         if(Boolean(this.invalidHash[param1]) || Boolean(this.invalidHash[InvalidationType.ALL]))
         {
            return true;
         }
         while(rest.length > 0)
         {
            if(this.invalidHash[rest.pop()])
            {
               return true;
            }
         }
         return false;
      }
      
      public setStyle(param1: string, param2: Record<string, any>): void
      {
         if(this.instanceStyles[param1] === param2 && !(param2 instanceof TextFormat))
         {
            return;
         }
         this.instanceStyles[param1] = param2;
         invalidate(InvalidationType.STYLES);
      }
      
      public get visible(): boolean
      {
         return super.visible;
      }
      
      protected focusInHandler(param1: FocusEvent): void
      {
         let _loc2_: IFocusManager = null;
         if(isOurFocus(param1.target  as unknown as DisplayObject))
         {
            _loc2_ = focusManager;
            if(Boolean(_loc2_) && _loc2_.showFocusIndicator)
            {
               drawFocus(true);
               this.isFocused = true;
            }
         }
      }
      
      public get componentInspectorSetting(): boolean
      {
         return this._inspector;
      }
      
      public get x(): number
      {
         return isNaN(this._x) ? super.x : this._x;
      }
      
      public get y(): number
      {
         return isNaN(this._y) ? super.y : this._y;
      }
      
      public set enabled(param1: boolean)
      {
         if(param1 == this._enabled)
         {
            return;
         }
         this._enabled = param1;
         invalidate(InvalidationType.STATE);
      }
      
      public setSize(param1: number, param2: number): void
      {
         this._width = param1;
         this._height = param2;
         invalidate(InvalidationType.SIZE);
         this.dispatchEvent(new ComponentEvent(ComponentEvent.RESIZE,false));
      }
      
      protected keyUpHandler(param1: KeyboardEvent): void
      {
      }
      
      public setSharedStyle(param1: string, param2: Record<string, any>): void
      {
         if(this.sharedStyles[param1] === param2 && !(param2 instanceof TextFormat))
         {
            return;
         }
         this.sharedStyles[param1] = param2;
         if(this.instanceStyles[param1] == null)
         {
            invalidate(InvalidationType.STYLES);
         }
      }
      
      public set focusEnabled(param1: boolean)
      {
         this._focusEnabled = param1;
      }
      
      public set width(param1: number)
      {
         if(this._width == param1)
         {
            return;
         }
         setSize(param1,height);
      }
      
      public setFocus(): void
      {
         if(stage)
         {
            stage.focus = this;
         }
      }
      
      public set scaleX(param1: number)
      {
         setSize(this.startWidth * param1,height);
      }
      
      public get mouseFocusEnabled(): boolean
      {
         return this._mouseFocusEnabled;
      }
      
      public set scaleY(param1: number)
      {
         setSize(width,this.startHeight * param1);
      }
      
      protected getDisplayObjectInstance(param1: Record<string, any>): DisplayObject
      {
         let skin: Record<string, any> = param1;
         let classDef: Record<string, any> = null;
         if(skin instanceof Class)
         {
            return new skin()  as unknown as DisplayObject;
         }
         if(skin instanceof DisplayObject)
         {
            (skin  as unknown as DisplayObject).x = 0;
            (skin  as unknown as DisplayObject).y = 0;
            return skin  as unknown as DisplayObject;
         }
         try
         {
            classDef = getDefinitionByName(skin.toString());
         }
         catch (e: any)
         {
            try
            {
               classDef = loaderInfo.applicationDomain.getDefinition(skin.toString())  as unknown as Object;
            }
            catch (e: any)
            {
            }
         }
         if(classDef == null)
         {
            return null;
         }
         return new classDef()  as unknown as DisplayObject;
      }
      
      protected copyStylesToChild(param1: UIComponent, param2: Record<string, any>): void
      {
         let _loc3_: string = null;
         for (let _loc3_ in param2)
         {
            param1.setStyle(_loc3_,getStyleValue(param2[_loc3_]));
         }
      }
      
      protected initializeAccessibility(): void
      {
         if(UIComponent.createAccessibilityImplementation != null)
         {
            UIComponent.createAccessibilityImplementation(this);
         }
      }
      
      public get focusManager(): IFocusManager
      {
         let _loc1_: DisplayObject = this;
         while(_loc1_)
         {
            if(UIComponent.focusManagers[_loc1_] != null)
            {
               return (UIComponent.focusManagers[_loc1_] as unknown as IFocusManager);
            }
            _loc1_ = _loc1_.parent;
         }
         return null;
      }
      
      public get width(): number
      {
         return this._width;
      }
      
      protected beforeComponentParameters(): void
      {
      }
      
      protected callLater(param1: Function): void
      {
         if(this.inCallLaterPhase)
         {
            return;
         }
         this.callLaterMethods[param1] = true;
         if(stage != null)
         {
            stage.addEventListener(Event.RENDER, callLaterDispatcher.bind(this));
            stage.invalidate();
         }
         else
         {
            this.addEventListener(Event.ADDED_TO_STAGE, callLaterDispatcher.bind(this));
         }
      }
      
      public move(param1: number, param2: number): void
      {
         this._x = param1;
         this._y = param2;
         super.x = Math.round(param1);
         super.y = Math.round(param2);
         this.dispatchEvent(new ComponentEvent(ComponentEvent.MOVE));
      }
      
      public validateNow(): void
      {
         invalidate(InvalidationType.ALL,false);
         draw();
      }
      
      public set visible(param1: boolean)
      {
         if(super.visible == param1)
         {
            return;
         }
         super.visible = param1;
         let _loc2_: string = param1 ? ComponentEvent.SHOW : ComponentEvent.HIDE;
         this.dispatchEvent(new ComponentEvent(_loc2_,true));
      }
      
      protected createFocusManager(): void
      {
         if(this.focusManagers[stage] == null)
         {
            this.focusManagers[stage] = new FocusManager(stage);
         }
      }
      
      protected hookAccessibility(param1: Event): void
      {
         this.removeEventListener(Event.ENTER_FRAME, hookAccessibility.bind(this));
         initializeAccessibility();
      }
      
      public set componentInspectorSetting(param1: boolean)
      {
         this._inspector = param1;
         if(this._inspector)
         {
            beforeComponentParameters();
         }
         else
         {
            afterComponentParameters();
         }
      }
      
      public set y(param1: number)
      {
         move(this._x,param1);
      }
      
      public drawFocus(param1: boolean): void
      {
         let _loc2_: number = NaN;
         this.isFocused = param1;
         if(this.uiFocusRect != null && this.contains(this.uiFocusRect))
         {
            this.removeChild(this.uiFocusRect);
            this.uiFocusRect = null;
         }
         if(param1)
         {
            this.uiFocusRect = getDisplayObjectInstance(getStyleValue("focusRectSkin"))  as unknown as Sprite;
            if(this.uiFocusRect == null)
            {
               return;
            }
            _loc2_ = Number(getStyleValue("focusRectPadding"));
            this.uiFocusRect.x = -_loc2_;
            this.uiFocusRect.y = -_loc2_;
            this.uiFocusRect.width = width + _loc2_ * 2;
            this.uiFocusRect.height = height + _loc2_ * 2;
            this.addChildAt(this.uiFocusRect,0);
         }
      }
      
      public set x(param1: number)
      {
         move(param1,this._y);
      }
      
      public drawNow(): void
      {
         draw();
      }
   }
