// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

export class BaseButton extends UIComponent{
      
      private static defaultStyles: Record<string, any> = null as any;
      protected pressTimer: Timer;
      protected _autoRepeat: boolean = false;
      protected _selected: boolean = false;
      protected background: DisplayObject;
      private unlockedMouseState: string;
      protected mouseState: string;
      private _mouseStateLocked: boolean = false;
      constructor(){
         super();
         buttonMode = true;
         mouseChildren = false;
         useHandCursor = false;
         setupMouseEvents();
         setMouseState("up");
         this.pressTimer = new Timer(1,0);
         this.pressTimer.addEventListener(TimerEvent.TIMER, buttonDown.bind(this));
      }
      
      public static getStyleDefinition(): Record<string, any>
      {
         return this.defaultStyles;
      }
      
      public get enabled(): boolean
      {
         return super.enabled;
      }
      
      protected startPress(): void
      {
         if(this._autoRepeat)
         {
            this.pressTimer.delay = Number(getStyleValue("repeatDelay"));
            this.pressTimer.start();
         }
         this.dispatchEvent(new ComponentEvent(ComponentEvent.BUTTON_DOWN,true));
      }
      
      protected draw(): void
      {
         if(isInvalid(InvalidationType.STYLES,InvalidationType.STATE))
         {
            drawBackground();
            invalidate(InvalidationType.SIZE,false);
         }
         if(isInvalid(InvalidationType.SIZE))
         {
            drawLayout();
         }
         super.draw();
      }
      
      protected drawLayout(): void
      {
         this.background.width = width;
         this.background.height = height;
      }
      
      public set enabled(param1: boolean)
      {
         super.enabled = param1;
         mouseEnabled = param1;
      }
      
      public set autoRepeat(param1: boolean)
      {
         this._autoRepeat = param1;
      }
      
      protected mouseEventHandler(param1: MouseEvent): void
      {
         if(param1.type == MouseEvent.MOUSE_DOWN)
         {
            setMouseState("down");
            startPress();
         }
         else if(param1.type == MouseEvent.ROLL_OVER || param1.type == MouseEvent.MOUSE_UP)
         {
            setMouseState("over");
            endPress();
         }
         else if(param1.type == MouseEvent.ROLL_OUT)
         {
            setMouseState("up");
            endPress();
         }
      }
      
      protected drawBackground(): void
      {
         let _loc1_: string = enabled ? this.mouseState : "disabled";
         if(selected)
         {
            _loc1_ = "selected" + _loc1_.substr(0,1).toUpperCase() + _loc1_.substr(1);
         }
         _loc1_ += "Skin";
         let _loc2_: DisplayObject = this.background;
         this.background = getDisplayObjectInstance(getStyleValue(_loc1_));
         this.addChildAt(this.background,0);
         if(_loc2_ != null && _loc2_ != this.background)
         {
            this.removeChild(_loc2_);
         }
      }
      
      public get selected(): boolean
      {
         return this._selected;
      }
      
      protected setupMouseEvents(): void
      {
         this.addEventListener(MouseEvent.ROLL_OVER, mouseEventHandler.bind(this));
         this.addEventListener(MouseEvent.MOUSE_DOWN, mouseEventHandler.bind(this));
         this.addEventListener(MouseEvent.MOUSE_UP, mouseEventHandler.bind(this));
         this.addEventListener(MouseEvent.ROLL_OUT, mouseEventHandler.bind(this));
      }
      
      protected endPress(): void
      {
         this.pressTimer.reset();
      }
      
      public set mouseStateLocked(param1: boolean)
      {
         this._mouseStateLocked = param1;
         if(param1 == false)
         {
            setMouseState(this.unlockedMouseState);
         }
         else
         {
            this.unlockedMouseState = this.mouseState;
         }
      }
      
      public get autoRepeat(): boolean
      {
         return this._autoRepeat;
      }
      
      public set selected(param1: boolean)
      {
         if(this._selected == param1)
         {
            return;
         }
         this._selected = param1;
         invalidate(InvalidationType.STATE);
      }
      
      protected buttonDown(param1: TimerEvent): void
      {
         if(!this._autoRepeat)
         {
            endPress();
            return;
         }
         if(this.pressTimer.currentCount == 1)
         {
            this.pressTimer.delay = Number(getStyleValue("repeatInterval"));
         }
         this.dispatchEvent(new ComponentEvent(ComponentEvent.BUTTON_DOWN,true));
      }
      
      public setMouseState(param1: string): void
      {
         if(this._mouseStateLocked)
         {
            this.unlockedMouseState = param1;
            return;
         }
         if(this.mouseState == param1)
         {
            return;
         }
         this.mouseState = param1;
         invalidate(InvalidationType.STATE);
      }
   }
