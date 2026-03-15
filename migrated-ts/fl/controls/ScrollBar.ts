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
         return defaultStyles;
      }
      
      public set enabled(param1: boolean)
      {
         super.enabled = param1;
         downArrow.enabled = track.enabled = thumb.enabled = upArrow.enabled = enabled && _maxScrollPosition > _minScrollPosition;
         updateThumb();
      }
      
      public setSize(param1: number, param2: number): void
      {
         if(_direction == ScrollBarDirection.HORIZONTAL)
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
            _lineScrollSize = param1;
         }
      }
      
      public get minScrollPosition(): number
      {
         return _minScrollPosition;
      }
      
      protected updateThumb(): void
      {
         let _loc1_: number = _maxScrollPosition - _minScrollPosition + _pageSize;
         if(track.height <= 12 || _maxScrollPosition <= _minScrollPosition || (_loc1_ == 0 || isNaN(_loc1_)))
         {
            thumb.height = 12;
            thumb.visible = false;
         }
         else
         {
            thumb.height = Math.max(13,_pageSize / _loc1_ * track.height);
            thumb.y = track.y + (track.height - thumb.height) * ((_scrollPosition - _minScrollPosition) / (_maxScrollPosition - _minScrollPosition));
            thumb.visible = enabled;
         }
      }
      
      public set minScrollPosition(param1: number)
      {
         setScrollProperties(_pageSize,param1,_maxScrollPosition);
      }
      
      public get lineScrollSize(): number
      {
         return _lineScrollSize;
      }
      
      public setScrollPosition(param1: number, param2: boolean = true): void
      {
         let _loc3_: number = scrollPosition;
         _scrollPosition = Math.max(_minScrollPosition,Math.min(_maxScrollPosition,param1));
         if(_loc3_ == _scrollPosition)
         {
            return;
         }
         if(param2)
         {
            this.dispatchEvent(new ScrollEvent(_direction,scrollPosition - _loc3_,scrollPosition));
         }
         updateThumb();
      }
      
      public get maxScrollPosition(): number
      {
         return _maxScrollPosition;
      }
      
      public get scrollPosition(): number
      {
         return _scrollPosition;
      }
      
      public get height(): number
      {
         return _direction == ScrollBarDirection.HORIZONTAL ? super.width : super.height;
      }
      
      public get pageSize(): number
      {
         return _pageSize;
      }
      
      public set maxScrollPosition(param1: number)
      {
         setScrollProperties(_pageSize,_minScrollPosition,param1);
      }
      
      protected thumbReleaseHandler(param1: MouseEvent): void
      {
         inDrag = false;
         mouseChildren = true;
         thumb.mouseStateLocked = false;
         stage.removeEventListener(MouseEvent.MOUSE_MOVE, handleThumbDrag.bind(this));
         stage.removeEventListener(MouseEvent.MOUSE_UP, thumbReleaseHandler.bind(this));
      }
      
      public set pageScrollSize(param1: number)
      {
         if(param1 >= 0)
         {
            _pageScrollSize = param1;
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
            downArrow.move(0,Math.max(upArrow.height,_loc1_ - downArrow.height));
            track.setSize(WIDTH,Math.max(0,_loc1_ - (downArrow.height + upArrow.height)));
            updateThumb();
         }
         if(isInvalid(InvalidationType.STYLES,InvalidationType.STATE))
         {
            setStyles();
         }
         downArrow.drawNow();
         upArrow.drawNow();
         track.drawNow();
         thumb.drawNow();
         validate();
      }
      
      public get width(): number
      {
         return _direction == ScrollBarDirection.HORIZONTAL ? super.height : super.width;
      }
      
      protected configUI(): void
      {
         super.configUI();
         track = new BaseButton();
         track.move(0,14);
         track.useHandCursor = false;
         track.autoRepeat = true;
         track.focusEnabled = false;
         this.addChild(track);
         thumb = new LabelButton();
         thumb.label = "";
         thumb.setSize(WIDTH,15);
         thumb.move(0,15);
         thumb.focusEnabled = false;
         this.addChild(thumb);
         downArrow = new BaseButton();
         downArrow.setSize(WIDTH,14);
         downArrow.autoRepeat = true;
         downArrow.focusEnabled = false;
         this.addChild(downArrow);
         upArrow = new BaseButton();
         upArrow.setSize(WIDTH,14);
         upArrow.move(0,0);
         upArrow.autoRepeat = true;
         upArrow.focusEnabled = false;
         this.addChild(upArrow);
         upArrow.addEventListener(ComponentEvent.BUTTON_DOWN, scrollPressHandler.bind(this));
         downArrow.addEventListener(ComponentEvent.BUTTON_DOWN, scrollPressHandler.bind(this));
         track.addEventListener(ComponentEvent.BUTTON_DOWN, scrollPressHandler.bind(this));
         thumb.addEventListener(MouseEvent.MOUSE_DOWN, thumbPressHandler.bind(this));
         enabled = false;
      }
      
      public set pageSize(param1: number)
      {
         if(param1 > 0)
         {
            _pageSize = param1;
         }
      }
      
      public setScrollProperties(param1: number, param2: number, param3: number, param4: number = 0): void
      {
         this.pageSize = param1;
         _minScrollPosition = param2;
         _maxScrollPosition = param3;
         if(param4 >= 0)
         {
            _pageScrollSize = param4;
         }
         enabled = _maxScrollPosition > _minScrollPosition;
         setScrollPosition(_scrollPosition,false);
         updateThumb();
      }
      
      public get pageScrollSize(): number
      {
         return _pageScrollSize == 0 ? _pageSize : _pageScrollSize;
      }
      
      protected handleThumbDrag(param1: MouseEvent): void
      {
         let _loc2_: number = Math.max(0,Math.min(track.height - thumb.height,mouseY - track.y - thumbScrollOffset));
         setScrollPosition(_loc2_ / (track.height - thumb.height) * (_maxScrollPosition - _minScrollPosition) + _minScrollPosition);
      }
      
      protected setStyles(): void
      {
         copyStylesToChild(downArrow,DOWN_ARROW_STYLES);
         copyStylesToChild(thumb,THUMB_STYLES);
         copyStylesToChild(track,TRACK_STYLES);
         copyStylesToChild(upArrow,UP_ARROW_STYLES);
      }
      
      protected scrollPressHandler(param1: ComponentEvent): void
      {
         let _loc2_: number = NaN;
         let _loc3_: number = NaN;
         param1.stopImmediatePropagation();
         if(param1.currentTarget == upArrow)
         {
            setScrollPosition(_scrollPosition - _lineScrollSize);
         }
         else if(param1.currentTarget == downArrow)
         {
            setScrollPosition(_scrollPosition + _lineScrollSize);
         }
         else
         {
            _loc2_ = track.mouseY / track.height * (_maxScrollPosition - _minScrollPosition) + _minScrollPosition;
            _loc3_ = pageScrollSize == 0 ? pageSize : pageScrollSize;
            if(_scrollPosition < _loc2_)
            {
               setScrollPosition(Math.min(_loc2_,_scrollPosition + _loc3_));
            }
            else if(_scrollPosition > _loc2_)
            {
               setScrollPosition(Math.max(_loc2_,_scrollPosition - _loc3_));
            }
         }
      }
      
      protected thumbPressHandler(param1: MouseEvent): void
      {
         inDrag = true;
         thumbScrollOffset = mouseY - thumb.y;
         thumb.mouseStateLocked = true;
         mouseChildren = false;
         stage.addEventListener(MouseEvent.MOUSE_MOVE, handleThumbDrag.bind(this));
         stage.addEventListener(MouseEvent.MOUSE_UP, thumbReleaseHandler.bind(this));
      }
      
      public set direction(param1: string)
      {
         if(_direction == param1)
         {
            return;
         }
         _direction = param1;
         if(isLivePreview)
         {
            return;
         }
         setScaleY(1);
         let _loc2_: boolean = _direction == ScrollBarDirection.HORIZONTAL;
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
         return _direction;
      }
   }
