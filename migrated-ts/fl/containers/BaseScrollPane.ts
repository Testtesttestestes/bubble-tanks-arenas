// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.containers

export class BaseScrollPane extends UIComponent{
      
      private static defaultStyles: Record<string, any> = {
         "repeatDelay":500,
         "repeatInterval":35,
         "skin":"ScrollPane_upSkin",
         "contentPadding":0,
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
         return mergeStyles(defaultStyles,ScrollBar.getStyleDefinition());
      }
      
      public set enabled(param1: boolean)
      {
         if(enabled == param1)
         {
            return;
         }
         _verticalScrollBar.enabled = param1;
         _horizontalScrollBar.enabled = param1;
         super.enabled = param1;
      }
      
      public set useBitmapScrolling(param1: boolean)
      {
         _useBitmpScrolling = param1;
         invalidate(InvalidationType.STATE);
      }
      
      public set horizontalLineScrollSize(param1: number)
      {
         _horizontalScrollBar.lineScrollSize = param1;
      }
      
      protected drawLayout(): void
      {
         calculateAvailableSize();
         calculateContentWidth();
         background.width = width;
         background.height = height;
         if(vScrollBar)
         {
            _verticalScrollBar.visible = true;
            _verticalScrollBar.x = width - ScrollBar.WIDTH - contentPadding;
            _verticalScrollBar.y = contentPadding;
            _verticalScrollBar.height = availableHeight;
         }
         else
         {
            _verticalScrollBar.visible = false;
         }
         _verticalScrollBar.setScrollProperties(availableHeight,0,contentHeight - availableHeight,verticalPageScrollSize);
         setVerticalScrollPosition(_verticalScrollBar.scrollPosition,false);
         if(hScrollBar)
         {
            _horizontalScrollBar.visible = true;
            _horizontalScrollBar.x = contentPadding;
            _horizontalScrollBar.y = height - ScrollBar.WIDTH - contentPadding;
            _horizontalScrollBar.width = availableWidth;
         }
         else
         {
            _horizontalScrollBar.visible = false;
         }
         _horizontalScrollBar.setScrollProperties(availableWidth,0,useFixedHorizontalScrolling ? _maxHorizontalScrollPosition : contentWidth - availableWidth,horizontalPageScrollSize);
         setHorizontalScrollPosition(_horizontalScrollBar.scrollPosition,false);
         drawDisabledOverlay();
      }
      
      protected handleWheel(param1: MouseEvent): void
      {
         if(!enabled || !_verticalScrollBar.visible || contentHeight <= availableHeight)
         {
            return;
         }
         _verticalScrollBar.scrollPosition -= param1.delta * verticalLineScrollSize;
         setVerticalScrollPosition(_verticalScrollBar.scrollPosition);
         this.dispatchEvent(new ScrollEvent(ScrollBarDirection.VERTICAL,param1.delta,horizontalScrollPosition));
      }
      
      protected handleScroll(param1: ScrollEvent): void
      {
         if(param1.target == _verticalScrollBar)
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
         return _verticalScrollBar.lineScrollSize;
      }
      
      protected drawBackground(): void
      {
         let _loc1_: DisplayObject = background;
         background = getDisplayObjectInstance(getStyleValue("skin"));
         background.width = width;
         background.height = height;
         this.addChildAt(background,0);
         if(_loc1_ != null && _loc1_ != background)
         {
            this.removeChild(_loc1_);
         }
      }
      
      protected calculateAvailableSize(): void
      {
         let _loc1_: number = ScrollBar.WIDTH;
         let _loc2_: number = contentPadding = Number(getStyleValue("contentPadding"));
         let _loc3_: number = height - 2 * _loc2_ - vOffset;
         vScrollBar = _verticalScrollPolicy == ScrollPolicy.ON || _verticalScrollPolicy == ScrollPolicy.AUTO && contentHeight > _loc3_;
         let _loc4_: number = width - (vScrollBar ? _loc1_ : 0) - 2 * _loc2_;
         let _loc5_: number = useFixedHorizontalScrolling ? _maxHorizontalScrollPosition : contentWidth - _loc4_;
         hScrollBar = _horizontalScrollPolicy == ScrollPolicy.ON || _horizontalScrollPolicy == ScrollPolicy.AUTO && _loc5_ > 0;
         if(hScrollBar)
         {
            _loc3_ -= _loc1_;
         }
         if(hScrollBar && !vScrollBar && _verticalScrollPolicy == ScrollPolicy.AUTO && contentHeight > _loc3_)
         {
            vScrollBar = true;
            _loc4_ -= _loc1_;
         }
         availableHeight = _loc3_ + vOffset;
         availableWidth = _loc4_;
      }
      
      public get verticalScrollPosition(): number
      {
         return _verticalScrollBar.scrollPosition;
      }
      
      public get horizontalScrollPolicy(): string
      {
         return _horizontalScrollPolicy;
      }
      
      protected setVerticalScrollPosition(param1: number, param2: boolean = false): void
      {
      }
      
      public get horizontalPageScrollSize(): number
      {
         if(isNaN(availableWidth))
         {
            drawNow();
         }
         return _horizontalPageScrollSize == 0 && !isNaN(availableWidth) ? availableWidth : _horizontalPageScrollSize;
      }
      
      public set horizontalScrollPosition(param1: number)
      {
         drawNow();
         _horizontalScrollBar.scrollPosition = param1;
         setHorizontalScrollPosition(_horizontalScrollBar.scrollPosition,false);
      }
      
      public set verticalLineScrollSize(param1: number)
      {
         _verticalScrollBar.lineScrollSize = param1;
      }
      
      public get maxVerticalScrollPosition(): number
      {
         drawNow();
         return Math.max(0,contentHeight - availableHeight);
      }
      
      public set horizontalPageScrollSize(param1: number)
      {
         _horizontalPageScrollSize = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      protected draw(): void
      {
         if(isInvalid(InvalidationType.STYLES))
         {
            setStyles();
            drawBackground();
            if(contentPadding != getStyleValue("contentPadding"))
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
         return _horizontalScrollBar;
      }
      
      protected calculateContentWidth(): void
      {
      }
      
      public set horizontalScrollPolicy(param1: string)
      {
         _horizontalScrollPolicy = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      protected configUI(): void
      {
         super.configUI();
         contentScrollRect = new Rectangle(0,0,85,85);
         _verticalScrollBar = new ScrollBar();
         _verticalScrollBar.addEventListener(ScrollEvent.SCROLL, handleScroll.bind(this));
         _verticalScrollBar.visible = false;
         _verticalScrollBar.lineScrollSize = defaultLineScrollSize;
         this.addChild(_verticalScrollBar);
         copyStylesToChild(_verticalScrollBar,SCROLL_BAR_STYLES);
         _horizontalScrollBar = new ScrollBar();
         _horizontalScrollBar.direction = ScrollBarDirection.HORIZONTAL;
         _horizontalScrollBar.addEventListener(ScrollEvent.SCROLL, handleScroll.bind(this));
         _horizontalScrollBar.visible = false;
         _horizontalScrollBar.lineScrollSize = defaultLineScrollSize;
         this.addChild(_horizontalScrollBar);
         copyStylesToChild(_horizontalScrollBar,SCROLL_BAR_STYLES);
         disabledOverlay = new Shape();
         let _loc1_: Graphics = disabledOverlay.graphics;
         _loc1_.beginFill(16777215);
         _loc1_.drawRect(0,0,width,height);
         _loc1_.endFill();
         this.addEventListener(MouseEvent.MOUSE_WHEEL, handleWheel.bind(this));
      }
      
      protected drawDisabledOverlay(): void
      {
         if(enabled)
         {
            if(this.contains(disabledOverlay))
            {
               this.removeChild(disabledOverlay);
            }
         }
         else
         {
            disabledOverlay.x = disabledOverlay.y = contentPadding;
            disabledOverlay.width = availableWidth;
            disabledOverlay.height = availableHeight;
            disabledOverlay.alpha = getStyleValue("disabledAlpha")  as unknown as Number;
            this.addChild(disabledOverlay);
         }
      }
      
      public get horizontalScrollPosition(): number
      {
         return _horizontalScrollBar.scrollPosition;
      }
      
      public get verticalScrollBar(): ScrollBar
      {
         return _verticalScrollBar;
      }
      
      public get horizontalLineScrollSize(): number
      {
         return _horizontalScrollBar.lineScrollSize;
      }
      
      public set verticalScrollPosition(param1: number)
      {
         drawNow();
         _verticalScrollBar.scrollPosition = param1;
         setVerticalScrollPosition(_verticalScrollBar.scrollPosition,false);
      }
      
      protected setHorizontalScrollPosition(param1: number, param2: boolean = false): void
      {
      }
      
      protected setStyles(): void
      {
         copyStylesToChild(_verticalScrollBar,SCROLL_BAR_STYLES);
         copyStylesToChild(_horizontalScrollBar,SCROLL_BAR_STYLES);
      }
      
      public set verticalPageScrollSize(param1: number)
      {
         _verticalPageScrollSize = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      protected setContentSize(param1: number, param2: number): void
      {
         if((contentWidth == param1 || useFixedHorizontalScrolling) && contentHeight == param2)
         {
            return;
         }
         contentWidth = param1;
         contentHeight = param2;
         invalidate(InvalidationType.SIZE);
      }
      
      public set verticalScrollPolicy(param1: string)
      {
         _verticalScrollPolicy = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      public get maxHorizontalScrollPosition(): number
      {
         drawNow();
         return Math.max(0,contentWidth - availableWidth);
      }
      
      protected updateChildren(): void
      {
         _verticalScrollBar.enabled = _horizontalScrollBar.enabled = enabled;
         _verticalScrollBar.drawNow();
         _horizontalScrollBar.drawNow();
      }
      
      public get verticalPageScrollSize(): number
      {
         if(isNaN(availableHeight))
         {
            drawNow();
         }
         return _verticalPageScrollSize == 0 && !isNaN(availableHeight) ? availableHeight : _verticalPageScrollSize;
      }
      
      public get verticalScrollPolicy(): string
      {
         return _verticalScrollPolicy;
      }
      
      public get useBitmapScrolling(): boolean
      {
         return _useBitmpScrolling;
      }
   }
