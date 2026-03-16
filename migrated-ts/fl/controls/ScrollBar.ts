// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

export class ScrollBar extends UIComponent{
      
      public static readonly WIDTH: number = 15;
      private static defaultStyles: Record<string, any> = {
         "downArrowDisabledSkin":"ScrollArrowDown_disabledSkin",
         "downArrowDownSkin":"ScrollArrowDown_downSkin",
         "downArrowOverSkin":"ScrollArrowDown_overSkin",
         "downArrowUpSkin":"ScrollArrowDown_upSkin",
         "thumbDisabledSkin":"ScrollThumb_upSkin",
         "thumbDownSkin":"ScrollThumb_downSkin",
         "thumbOverSkin":"ScrollThumb_overSkin",
         "thumbUpSkin":"ScrollThumb_upSkin",
         "trackDisabledSkin":"ScrollTrack_skin",
         "trackDownSkin":"ScrollTrack_skin",
         "trackOverSkin":"ScrollTrack_skin",
         "trackUpSkin":"ScrollTrack_skin",
         "upArrowDisabledSkin":"ScrollArrowUp_disabledSkin",
         "upArrowDownSkin":"ScrollArrowUp_downSkin",
         "upArrowOverSkin":"ScrollArrowUp_overSkin",
         "upArrowUpSkin":"ScrollArrowUp_upSkin",
         "thumbIcon":"ScrollBar_thumbIcon",
         "repeatDelay":500,
         "repeatInterval":35
      };
      protected static readonly DOWN_ARROW_STYLES: Record<string, any> = {
         "disabledSkin":"downArrowDisabledSkin",
         "downSkin":"downArrowDownSkin",
         "overSkin":"downArrowOverSkin",
         "upSkin":"downArrowUpSkin",
         "repeatDelay":"repeatDelay",
         "repeatInterval":"repeatInterval"
      };
      protected static readonly THUMB_STYLES: Record<string, any> = {
         "disabledSkin":"thumbDisabledSkin",
         "downSkin":"thumbDownSkin",
         "overSkin":"thumbOverSkin",
         "upSkin":"thumbUpSkin",
         "icon":"thumbIcon",
         "textPadding":0
      };
      protected static readonly TRACK_STYLES: Record<string, any> = {
         "disabledSkin":"trackDisabledSkin",
         "downSkin":"trackDownSkin",
         "overSkin":"trackOverSkin",
         "upSkin":"trackUpSkin",
         "repeatDelay":"repeatDelay",
         "repeatInterval":"repeatInterval"
      };
      protected static readonly UP_ARROW_STYLES: Record<string, any> = {
         "disabledSkin":"upArrowDisabledSkin",
         "downSkin":"upArrowDownSkin",
         "overSkin":"upArrowOverSkin",
         "upSkin":"upArrowUpSkin",
         "repeatDelay":"repeatDelay",
         "repeatInterval":"repeatInterval"
      };
      private _direction: string = "vertical";
      private _minScrollPosition: number = 0;
      private _pageSize: number = 10;
      private _maxScrollPosition: number = 0;
      protected downArrow: BaseButton;
      private _lineScrollSize: number = 1;
      protected upArrow: BaseButton;
      private _scrollPosition: number = 0;
      private thumbScrollOffset: number;
      protected track: BaseButton;
      protected thumb: LabelButton;
      protected inDrag: boolean = false;
      private _pageScrollSize: number = 0;
      constructor(){
         super();
         setStyles();
         focusEnabled = false;
      }
      
      public static getStyleDefinition(): Record<string, any>
      {
         return this.defaultStyles;
      }
      
      public set enabled(param1: boolean)
      {
         super.enabled = param1;
         this.downArrow.enabled = this.track.enabled = this.thumb.enabled = this.upArrow.enabled = enabled && this._maxScrollPosition > this._minScrollPosition;
         updateThumb();
      }
      
      public setSize(param1: number, param2: number): void
      {
         if(this._direction == ScrollBarDirection.HORIZONTAL)
         {
            super.setSize(param2,param1);
         }
         else
         {
            super.setSize(param1,param2);
         }
      }
      
      public set lineScrollSize(param1: number)
      {
         if(param1 > 0)
         {
            this._lineScrollSize = param1;
         }
      }
      
      public get minScrollPosition(): number
      {
         return this._minScrollPosition;
      }
      
      protected updateThumb(): void
      {
         let _loc1_: number = this._maxScrollPosition - this._minScrollPosition + this._pageSize;
         if(this.track.height <= 12 || this._maxScrollPosition <= this._minScrollPosition || (_loc1_ == 0 || isNaN(_loc1_)))
         {
            this.thumb.height = 12;
            this.thumb.visible = false;
         }
         else
         {
            this.thumb.height = Math.max(13,this._pageSize / _loc1_ * this.track.height);
            this.thumb.y = this.track.y + (this.track.height - this.thumb.height) * ((this._scrollPosition - this._minScrollPosition) / (this._maxScrollPosition - this._minScrollPosition));
            this.thumb.visible = enabled;
         }
      }
      
      public set minScrollPosition(param1: number)
      {
         setScrollProperties(this._pageSize,param1,this._maxScrollPosition);
      }
      
      public get lineScrollSize(): number
      {
         return this._lineScrollSize;
      }
      
      public setScrollPosition(param1: number, param2: boolean = true): void
      {
         let _loc3_: number = scrollPosition;
         this._scrollPosition = Math.max(this._minScrollPosition,Math.min(this._maxScrollPosition,param1));
         if(_loc3_ == this._scrollPosition)
         {
            return;
         }
         if(param2)
         {
            this.dispatchEvent(new ScrollEvent(this._direction,scrollPosition - _loc3_,scrollPosition));
         }
         updateThumb();
      }
      
      public get maxScrollPosition(): number
      {
         return this._maxScrollPosition;
      }
      
      public get scrollPosition(): number
      {
         return this._scrollPosition;
      }
      
      public get height(): number
      {
         return this._direction == ScrollBarDirection.HORIZONTAL ? super.width : super.height;
      }
      
      public get pageSize(): number
      {
         return this._pageSize;
      }
      
      public set maxScrollPosition(param1: number)
      {
         setScrollProperties(this._pageSize,this._minScrollPosition,param1);
      }
      
      protected thumbReleaseHandler(param1: MouseEvent): void
      {
         this.inDrag = false;
         mouseChildren = true;
         this.thumb.mouseStateLocked = false;
         stage.removeEventListener(MouseEvent.MOUSE_MOVE, handleThumbDrag.bind(this));
         stage.removeEventListener(MouseEvent.MOUSE_UP, thumbReleaseHandler.bind(this));
      }
      
      public set pageScrollSize(param1: number)
      {
         if(param1 >= 0)
         {
            this._pageScrollSize = param1;
         }
      }
      
      public set scrollPosition(param1: number)
      {
         setScrollPosition(param1,true);
      }
      
      public get enabled(): boolean
      {
         return super.enabled;
      }
      
      protected draw(): void
      {
         let _loc1_: number = NaN;
         if(isInvalid(InvalidationType.SIZE))
         {
            _loc1_ = super.height;
            this.downArrow.move(0,Math.max(this.upArrow.height,_loc1_ - this.downArrow.height));
            this.track.setSize(this.WIDTH,Math.max(0,_loc1_ - (this.downArrow.height + this.upArrow.height)));
            updateThumb();
         }
         if(isInvalid(InvalidationType.STYLES,InvalidationType.STATE))
         {
            setStyles();
         }
         this.downArrow.drawNow();
         this.upArrow.drawNow();
         this.track.drawNow();
         this.thumb.drawNow();
         validate();
      }
      
      public get width(): number
      {
         return this._direction == ScrollBarDirection.HORIZONTAL ? super.height : super.width;
      }
      
      protected configUI(): void
      {
         super.configUI();
         this.track = new BaseButton();
         this.track.move(0,14);
         this.track.useHandCursor = false;
         this.track.autoRepeat = true;
         this.track.focusEnabled = false;
         this.addChild(this.track);
         this.thumb = new LabelButton();
         this.thumb.label = "";
         this.thumb.setSize(this.WIDTH,15);
         this.thumb.move(0,15);
         this.thumb.focusEnabled = false;
         this.addChild(this.thumb);
         this.downArrow = new BaseButton();
         this.downArrow.setSize(this.WIDTH,14);
         this.downArrow.autoRepeat = true;
         this.downArrow.focusEnabled = false;
         this.addChild(this.downArrow);
         this.upArrow = new BaseButton();
         this.upArrow.setSize(this.WIDTH,14);
         this.upArrow.move(0,0);
         this.upArrow.autoRepeat = true;
         this.upArrow.focusEnabled = false;
         this.addChild(this.upArrow);
         this.upArrow.addEventListener(ComponentEvent.BUTTON_DOWN, scrollPressHandler.bind(this));
         this.downArrow.addEventListener(ComponentEvent.BUTTON_DOWN, scrollPressHandler.bind(this));
         this.track.addEventListener(ComponentEvent.BUTTON_DOWN, scrollPressHandler.bind(this));
         this.thumb.addEventListener(MouseEvent.MOUSE_DOWN, thumbPressHandler.bind(this));
         enabled = false;
      }
      
      public set pageSize(param1: number)
      {
         if(param1 > 0)
         {
            this._pageSize = param1;
         }
      }
      
      public setScrollProperties(param1: number, param2: number, param3: number, param4: number = 0): void
      {
         this.pageSize = param1;
         this._minScrollPosition = param2;
         this._maxScrollPosition = param3;
         if(param4 >= 0)
         {
            this._pageScrollSize = param4;
         }
         enabled = this._maxScrollPosition > this._minScrollPosition;
         setScrollPosition(this._scrollPosition,false);
         updateThumb();
      }
      
      public get pageScrollSize(): number
      {
         return this._pageScrollSize == 0 ? this._pageSize : this._pageScrollSize;
      }
      
      protected handleThumbDrag(param1: MouseEvent): void
      {
         let _loc2_: number = Math.max(0,Math.min(this.track.height - this.thumb.height,mouseY - this.track.y - this.thumbScrollOffset));
         setScrollPosition(_loc2_ / (this.track.height - this.thumb.height) * (this._maxScrollPosition - this._minScrollPosition) + this._minScrollPosition);
      }
      
      protected setStyles(): void
      {
         copyStylesToChild(this.downArrow,this.DOWN_ARROW_STYLES);
         copyStylesToChild(this.thumb,this.THUMB_STYLES);
         copyStylesToChild(this.track,this.TRACK_STYLES);
         copyStylesToChild(this.upArrow,this.UP_ARROW_STYLES);
      }
      
      protected scrollPressHandler(param1: ComponentEvent): void
      {
         let _loc2_: number = NaN;
         let _loc3_: number = NaN;
         param1.stopImmediatePropagation();
         if(param1.currentTarget == this.upArrow)
         {
            setScrollPosition(this._scrollPosition - this._lineScrollSize);
         }
         else if(param1.currentTarget == this.downArrow)
         {
            setScrollPosition(this._scrollPosition + this._lineScrollSize);
         }
         else
         {
            _loc2_ = this.track.mouseY / this.track.height * (this._maxScrollPosition - this._minScrollPosition) + this._minScrollPosition;
            _loc3_ = pageScrollSize == 0 ? pageSize : pageScrollSize;
            if(this._scrollPosition < _loc2_)
            {
               setScrollPosition(Math.min(_loc2_,this._scrollPosition + _loc3_));
            }
            else if(this._scrollPosition > _loc2_)
            {
               setScrollPosition(Math.max(_loc2_,this._scrollPosition - _loc3_));
            }
         }
      }
      
      protected thumbPressHandler(param1: MouseEvent): void
      {
         this.inDrag = true;
         this.thumbScrollOffset = mouseY - this.thumb.y;
         this.thumb.mouseStateLocked = true;
         mouseChildren = false;
         stage.addEventListener(MouseEvent.MOUSE_MOVE, handleThumbDrag.bind(this));
         stage.addEventListener(MouseEvent.MOUSE_UP, thumbReleaseHandler.bind(this));
      }
      
      public set direction(param1: string)
      {
         if(this._direction == param1)
         {
            return;
         }
         this._direction = param1;
         if(isLivePreview)
         {
            return;
         }
         setScaleY(1);
         let _loc2_: boolean = this._direction == ScrollBarDirection.HORIZONTAL;
         if(_loc2_ && componentInspectorSetting)
         {
            if(rotation == 90)
            {
               return;
            }
            setScaleX(-1);
            rotation = -90;
         }
         if(!componentInspectorSetting)
         {
            if(_loc2_ && rotation == 0)
            {
               rotation = -90;
               setScaleX(-1);
            }
            else if(!_loc2_ && rotation == -90)
            {
               rotation = 0;
               setScaleX(1);
            }
         }
         invalidate(InvalidationType.SIZE);
      }
      
      public get direction(): string
      {
         return this._direction;
      }
   }
