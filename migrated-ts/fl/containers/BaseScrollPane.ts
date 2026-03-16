// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.containers

export class BaseScrollPane extends UIComponent{
      
      private static defaultStyles: Record<string, any> = {
         "repeatDelay":500,
         "repeatInterval":35,
         "skin":"ScrollPane_upSkin",
         "this.contentPadding":0,
         "disabledAlpha":0.5
      };
      protected static readonly SCROLL_BAR_STYLES: Record<string, any> = {
         "upArrowDisabledSkin":"upArrowDisabledSkin",
         "upArrowDownSkin":"upArrowDownSkin",
         "upArrowOverSkin":"upArrowOverSkin",
         "upArrowUpSkin":"upArrowUpSkin",
         "downArrowDisabledSkin":"downArrowDisabledSkin",
         "downArrowDownSkin":"downArrowDownSkin",
         "downArrowOverSkin":"downArrowOverSkin",
         "downArrowUpSkin":"downArrowUpSkin",
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
         "repeatInterval":"repeatInterval"
      };
      protected contentHeight: number = 0;
      protected _horizontalScrollBar: ScrollBar;
      protected _horizontalPageScrollSize: number = 0;
      protected _verticalPageScrollSize: number = 0;
      protected _maxHorizontalScrollPosition: number = 0;
      protected defaultLineScrollSize: number = 4;
      protected vOffset: number = 0;
      protected contentScrollRect: Rectangle;
      protected background: DisplayObject;
      protected _verticalScrollBar: ScrollBar;
      protected disabledOverlay: Shape;
      protected vScrollBar: boolean;
      protected _horizontalScrollPolicy: string;
      protected useFixedHorizontalScrolling: boolean = false;
      protected contentWidth: number = 0;
      protected availableHeight: number;
      protected _verticalScrollPolicy: string;
      protected contentPadding: number = 0;
      protected _useBitmpScrolling: boolean = false;
      protected availableWidth: number;
      protected hScrollBar: boolean;
      constructor(){
         super();
      }
      
      public static getStyleDefinition(): Record<string, any>
      {
         return mergeStyles(this.defaultStyles,ScrollBar.getStyleDefinition());
      }
      
      public set enabled(param1: boolean)
      {
         if(enabled == param1)
         {
            return;
         }
         this._verticalScrollBar.enabled = param1;
         this._horizontalScrollBar.enabled = param1;
         super.enabled = param1;
      }
      
      public set useBitmapScrolling(param1: boolean)
      {
         this._useBitmpScrolling = param1;
         invalidate(InvalidationType.STATE);
      }
      
      public set horizontalLineScrollSize(param1: number)
      {
         this._horizontalScrollBar.lineScrollSize = param1;
      }
      
      protected drawLayout(): void
      {
         calculateAvailableSize();
         calculateContentWidth();
         this.background.width = width;
         this.background.height = height;
         if(this.vScrollBar)
         {
            this._verticalScrollBar.visible = true;
            this._verticalScrollBar.x = width - ScrollBar.WIDTH - this.contentPadding;
            this._verticalScrollBar.y = this.contentPadding;
            this._verticalScrollBar.height = this.availableHeight;
         }
         else
         {
            this._verticalScrollBar.visible = false;
         }
         this._verticalScrollBar.setScrollProperties(this.availableHeight,0,this.contentHeight - this.availableHeight,verticalPageScrollSize);
         setVerticalScrollPosition(this._verticalScrollBar.scrollPosition,false);
         if(this.hScrollBar)
         {
            this._horizontalScrollBar.visible = true;
            this._horizontalScrollBar.x = this.contentPadding;
            this._horizontalScrollBar.y = height - ScrollBar.WIDTH - this.contentPadding;
            this._horizontalScrollBar.width = this.availableWidth;
         }
         else
         {
            this._horizontalScrollBar.visible = false;
         }
         this._horizontalScrollBar.setScrollProperties(this.availableWidth,0,this.useFixedHorizontalScrolling ? this._maxHorizontalScrollPosition : this.contentWidth - this.availableWidth,horizontalPageScrollSize);
         setHorizontalScrollPosition(this._horizontalScrollBar.scrollPosition,false);
         drawDisabledOverlay();
      }
      
      protected handleWheel(param1: MouseEvent): void
      {
         if(!enabled || !this._verticalScrollBar.visible || this.contentHeight <= this.availableHeight)
         {
            return;
         }
         this._verticalScrollBar.scrollPosition -= param1.delta * verticalLineScrollSize;
         setVerticalScrollPosition(this._verticalScrollBar.scrollPosition);
         this.dispatchEvent(new ScrollEvent(ScrollBarDirection.VERTICAL,param1.delta,horizontalScrollPosition));
      }
      
      protected handleScroll(param1: ScrollEvent): void
      {
         if(param1.target == this._verticalScrollBar)
         {
            setVerticalScrollPosition(param1.position);
         }
         else
         {
            setHorizontalScrollPosition(param1.position);
         }
      }
      
      public get verticalLineScrollSize(): number
      {
         return this._verticalScrollBar.lineScrollSize;
      }
      
      protected drawBackground(): void
      {
         let _loc1_: DisplayObject = this.background;
         this.background = getDisplayObjectInstance(getStyleValue("skin"));
         this.background.width = width;
         this.background.height = height;
         this.addChildAt(this.background,0);
         if(_loc1_ != null && _loc1_ != this.background)
         {
            this.removeChild(_loc1_);
         }
      }
      
      protected calculateAvailableSize(): void
      {
         let _loc1_: number = ScrollBar.WIDTH;
         let _loc2_: number = this.contentPadding = Number(getStyleValue("this.contentPadding"));
         let _loc3_: number = height - 2 * _loc2_ - this.vOffset;
         this.vScrollBar = this._verticalScrollPolicy == ScrollPolicy.ON || this._verticalScrollPolicy == ScrollPolicy.AUTO && this.contentHeight > _loc3_;
         let _loc4_: number = width - (this.vScrollBar ? _loc1_ : 0) - 2 * _loc2_;
         let _loc5_: number = this.useFixedHorizontalScrolling ? this._maxHorizontalScrollPosition : this.contentWidth - _loc4_;
         this.hScrollBar = this._horizontalScrollPolicy == ScrollPolicy.ON || this._horizontalScrollPolicy == ScrollPolicy.AUTO && _loc5_ > 0;
         if(this.hScrollBar)
         {
            _loc3_ -= _loc1_;
         }
         if(this.hScrollBar && !this.vScrollBar && this._verticalScrollPolicy == ScrollPolicy.AUTO && this.contentHeight > _loc3_)
         {
            this.vScrollBar = true;
            _loc4_ -= _loc1_;
         }
         this.availableHeight = _loc3_ + this.vOffset;
         this.availableWidth = _loc4_;
      }
      
      public get verticalScrollPosition(): number
      {
         return this._verticalScrollBar.scrollPosition;
      }
      
      public get horizontalScrollPolicy(): string
      {
         return this._horizontalScrollPolicy;
      }
      
      protected setVerticalScrollPosition(param1: number, param2: boolean = false): void
      {
      }
      
      public get horizontalPageScrollSize(): number
      {
         if(isNaN(this.availableWidth))
         {
            drawNow();
         }
         return this._horizontalPageScrollSize == 0 && !isNaN(this.availableWidth) ? this.availableWidth : this._horizontalPageScrollSize;
      }
      
      public set horizontalScrollPosition(param1: number)
      {
         drawNow();
         this._horizontalScrollBar.scrollPosition = param1;
         setHorizontalScrollPosition(this._horizontalScrollBar.scrollPosition,false);
      }
      
      public set verticalLineScrollSize(param1: number)
      {
         this._verticalScrollBar.lineScrollSize = param1;
      }
      
      public get maxVerticalScrollPosition(): number
      {
         drawNow();
         return Math.max(0,this.contentHeight - this.availableHeight);
      }
      
      public set horizontalPageScrollSize(param1: number)
      {
         this._horizontalPageScrollSize = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      protected draw(): void
      {
         if(isInvalid(InvalidationType.STYLES))
         {
            setStyles();
            drawBackground();
            if(this.contentPadding != getStyleValue("this.contentPadding"))
            {
               invalidate(InvalidationType.SIZE,false);
            }
         }
         if(isInvalid(InvalidationType.SIZE,InvalidationType.STATE))
         {
            drawLayout();
         }
         updateChildren();
         super.draw();
      }
      
      public get horizontalScrollBar(): ScrollBar
      {
         return this._horizontalScrollBar;
      }
      
      protected calculateContentWidth(): void
      {
      }
      
      public set horizontalScrollPolicy(param1: string)
      {
         this._horizontalScrollPolicy = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      protected configUI(): void
      {
         super.configUI();
         this.contentScrollRect = new Rectangle(0,0,85,85);
         this._verticalScrollBar = new ScrollBar();
         this._verticalScrollBar.addEventListener(ScrollEvent.SCROLL, handleScroll.bind(this));
         this._verticalScrollBar.visible = false;
         this._verticalScrollBar.lineScrollSize = this.defaultLineScrollSize;
         this.addChild(this._verticalScrollBar);
         copyStylesToChild(this._verticalScrollBar,this.SCROLL_BAR_STYLES);
         this._horizontalScrollBar = new ScrollBar();
         this._horizontalScrollBar.direction = ScrollBarDirection.HORIZONTAL;
         this._horizontalScrollBar.addEventListener(ScrollEvent.SCROLL, handleScroll.bind(this));
         this._horizontalScrollBar.visible = false;
         this._horizontalScrollBar.lineScrollSize = this.defaultLineScrollSize;
         this.addChild(this._horizontalScrollBar);
         copyStylesToChild(this._horizontalScrollBar,this.SCROLL_BAR_STYLES);
         this.disabledOverlay = new Shape();
         let _loc1_: Graphics = this.disabledOverlay.graphics;
         _loc1_.beginFill(16777215);
         _loc1_.drawRect(0,0,width,height);
         _loc1_.endFill();
         this.addEventListener(MouseEvent.MOUSE_WHEEL, handleWheel.bind(this));
      }
      
      protected drawDisabledOverlay(): void
      {
         if(enabled)
         {
            if(this.contains(this.disabledOverlay))
            {
               this.removeChild(this.disabledOverlay);
            }
         }
         else
         {
            this.disabledOverlay.x = this.disabledOverlay.y = this.contentPadding;
            this.disabledOverlay.width = this.availableWidth;
            this.disabledOverlay.height = this.availableHeight;
            this.disabledOverlay.alpha = getStyleValue("disabledAlpha")  as unknown as Number;
            this.addChild(this.disabledOverlay);
         }
      }
      
      public get horizontalScrollPosition(): number
      {
         return this._horizontalScrollBar.scrollPosition;
      }
      
      public get verticalScrollBar(): ScrollBar
      {
         return this._verticalScrollBar;
      }
      
      public get horizontalLineScrollSize(): number
      {
         return this._horizontalScrollBar.lineScrollSize;
      }
      
      public set verticalScrollPosition(param1: number)
      {
         drawNow();
         this._verticalScrollBar.scrollPosition = param1;
         setVerticalScrollPosition(this._verticalScrollBar.scrollPosition,false);
      }
      
      protected setHorizontalScrollPosition(param1: number, param2: boolean = false): void
      {
      }
      
      protected setStyles(): void
      {
         copyStylesToChild(this._verticalScrollBar,this.SCROLL_BAR_STYLES);
         copyStylesToChild(this._horizontalScrollBar,this.SCROLL_BAR_STYLES);
      }
      
      public set verticalPageScrollSize(param1: number)
      {
         this._verticalPageScrollSize = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      protected setContentSize(param1: number, param2: number): void
      {
         if((this.contentWidth == param1 || this.useFixedHorizontalScrolling) && this.contentHeight == param2)
         {
            return;
         }
         this.contentWidth = param1;
         this.contentHeight = param2;
         invalidate(InvalidationType.SIZE);
      }
      
      public set verticalScrollPolicy(param1: string)
      {
         this._verticalScrollPolicy = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      public get maxHorizontalScrollPosition(): number
      {
         drawNow();
         return Math.max(0,this.contentWidth - this.availableWidth);
      }
      
      protected updateChildren(): void
      {
         this._verticalScrollBar.enabled = this._horizontalScrollBar.enabled = enabled;
         this._verticalScrollBar.drawNow();
         this._horizontalScrollBar.drawNow();
      }
      
      public get verticalPageScrollSize(): number
      {
         if(isNaN(this.availableHeight))
         {
            drawNow();
         }
         return this._verticalPageScrollSize == 0 && !isNaN(this.availableHeight) ? this.availableHeight : this._verticalPageScrollSize;
      }
      
      public get verticalScrollPolicy(): string
      {
         return this._verticalScrollPolicy;
      }
      
      public get useBitmapScrolling(): boolean
      {
         return this._useBitmpScrolling;
      }
   }
