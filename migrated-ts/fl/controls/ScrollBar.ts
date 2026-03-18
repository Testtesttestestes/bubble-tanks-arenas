// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

import { InvalidationType } from '../core/InvalidationType';
import { UIComponent } from '../core/UIComponent';
import { ComponentEvent } from '../events/ComponentEvent';
import { ScrollEvent } from '../events/ScrollEvent';
import { BaseButton } from './BaseButton';
import { LabelButton } from './LabelButton';
import { ScrollBarDirection } from './ScrollBarDirection';

// Flash built-ins compatibility stubs (AUTO-INJECTED)
declare interface ByteArray { [key: string]: any; }
declare const ByteArray: { new(...args: any[]): ByteArray; [key: string]: any; };
declare interface Endian { [key: string]: any; }
declare const Endian: { new(...args: any[]): Endian; [key: string]: any; };
declare interface Matrix { [key: string]: any; }
declare const Matrix: { new(...args: any[]): Matrix; [key: string]: any; };
declare interface Point { [key: string]: any; }
declare const Point: { new(...args: any[]): Point; [key: string]: any; };
declare interface Rectangle { [key: string]: any; }
declare const Rectangle: { new(...args: any[]): Rectangle; [key: string]: any; };
declare interface DisplayObject { [key: string]: any; }
declare const DisplayObject: { new(...args: any[]): DisplayObject; [key: string]: any; };
declare interface DisplayObjectContainer { [key: string]: any; }
declare const DisplayObjectContainer: { new(...args: any[]): DisplayObjectContainer; [key: string]: any; };
declare interface InteractiveObject { [key: string]: any; }
declare const InteractiveObject: { new(...args: any[]): InteractiveObject; [key: string]: any; };
declare interface MovieClip { [key: string]: any; }
declare const MovieClip: { new(...args: any[]): MovieClip; [key: string]: any; };
declare interface Sprite { [key: string]: any; }
declare const Sprite: { new(...args: any[]): Sprite; [key: string]: any; };
declare interface Shape { [key: string]: any; }
declare const Shape: { new(...args: any[]): Shape; [key: string]: any; };
declare interface Bitmap { [key: string]: any; }
declare const Bitmap: { new(...args: any[]): Bitmap; [key: string]: any; };
declare interface BitmapData { [key: string]: any; }
declare const BitmapData: { new(...args: any[]): BitmapData; [key: string]: any; };
declare interface Loader { [key: string]: any; }
declare const Loader: { new(...args: any[]): Loader; [key: string]: any; };
declare interface URLRequest { [key: string]: any; }
declare const URLRequest: { new(...args: any[]): URLRequest; [key: string]: any; };
declare interface Event { [key: string]: any; }
declare const Event: { new(...args: any[]): Event; [key: string]: any; };
declare interface MouseEvent { [key: string]: any; }
declare const MouseEvent: { new(...args: any[]): MouseEvent; [key: string]: any; };
declare interface KeyboardEvent { [key: string]: any; }
declare const KeyboardEvent: { new(...args: any[]): KeyboardEvent; [key: string]: any; };
declare interface FocusEvent { [key: string]: any; }
declare const FocusEvent: { new(...args: any[]): FocusEvent; [key: string]: any; };
declare interface TimerEvent { [key: string]: any; }
declare const TimerEvent: { new(...args: any[]): TimerEvent; [key: string]: any; };
declare interface TextField { [key: string]: any; }
declare const TextField: { new(...args: any[]): TextField; [key: string]: any; };
declare interface TextFormat { [key: string]: any; }
declare const TextFormat: { new(...args: any[]): TextFormat; [key: string]: any; };
declare interface Graphics { [key: string]: any; }
declare const Graphics: { new(...args: any[]): Graphics; [key: string]: any; };
declare interface Sound { [key: string]: any; }
declare const Sound: { new(...args: any[]): Sound; [key: string]: any; };
declare interface SoundChannel { [key: string]: any; }
declare const SoundChannel: { new(...args: any[]): SoundChannel; [key: string]: any; };
declare interface SoundTransform { [key: string]: any; }
declare const SoundTransform: { new(...args: any[]): SoundTransform; [key: string]: any; };
declare interface Stage { [key: string]: any; }
declare const Stage: { new(...args: any[]): Stage; [key: string]: any; };
declare interface ApplicationDomain { [key: string]: any; }
declare const ApplicationDomain: { new(...args: any[]): ApplicationDomain; [key: string]: any; };
declare interface ContextMenu { [key: string]: any; }
declare const ContextMenu: { new(...args: any[]): ContextMenu; [key: string]: any; };
declare interface ContextMenuItem { [key: string]: any; }
declare const ContextMenuItem: { new(...args: any[]): ContextMenuItem; [key: string]: any; };
declare interface Dictionary { [key: string]: any; }
declare const Dictionary: { new(...args: any[]): Dictionary; [key: string]: any; };
declare interface Security { [key: string]: any; }
declare const Security: { new(...args: any[]): Security; [key: string]: any; };
declare interface ExternalInterface { [key: string]: any; }
declare const ExternalInterface: { new(...args: any[]): ExternalInterface; [key: string]: any; };
declare interface System { [key: string]: any; }
declare const System: { new(...args: any[]): System; [key: string]: any; };
declare interface LoaderContext { [key: string]: any; }
declare const LoaderContext: { new(...args: any[]): LoaderContext; [key: string]: any; };
declare interface Transform { [key: string]: any; }
declare const Transform: { new(...args: any[]): Transform; [key: string]: any; };
declare interface ColorTransform { [key: string]: any; }
declare const ColorTransform: { new(...args: any[]): ColorTransform; [key: string]: any; };
declare interface Font { [key: string]: any; }
declare const Font: { new(...args: any[]): Font; [key: string]: any; };
declare interface Capabilities { [key: string]: any; }
declare const Capabilities: { new(...args: any[]): Capabilities; [key: string]: any; };
declare interface SharedObject { [key: string]: any; }
declare const SharedObject: { new(...args: any[]): SharedObject; [key: string]: any; };
declare interface Responder { [key: string]: any; }
declare const Responder: { new(...args: any[]): Responder; [key: string]: any; };
declare interface AsyncErrorEvent { [key: string]: any; }
declare const AsyncErrorEvent: { new(...args: any[]): AsyncErrorEvent; [key: string]: any; };
declare interface SecurityErrorEvent { [key: string]: any; }
declare const SecurityErrorEvent: { new(...args: any[]): SecurityErrorEvent; [key: string]: any; };
declare interface IOErrorEvent { [key: string]: any; }
declare const IOErrorEvent: { new(...args: any[]): IOErrorEvent; [key: string]: any; };
declare interface NetConnection { [key: string]: any; }
declare const NetConnection: { new(...args: any[]): NetConnection; [key: string]: any; };
declare interface NetStream { [key: string]: any; }
declare const NetStream: { new(...args: any[]): NetStream; [key: string]: any; };
declare interface LocalConnection { [key: string]: any; }
declare const LocalConnection: { new(...args: any[]): LocalConnection; [key: string]: any; };
declare interface Microphone { [key: string]: any; }
declare const Microphone: { new(...args: any[]): Microphone; [key: string]: any; };
declare interface Camera { [key: string]: any; }
declare const Camera: { new(...args: any[]): Camera; [key: string]: any; };
declare interface Matrix3D { [key: string]: any; }
declare const Matrix3D: { new(...args: any[]): Matrix3D; [key: string]: any; };
declare interface Vector3D { [key: string]: any; }
declare const Vector3D: { new(...args: any[]): Vector3D; [key: string]: any; };
declare interface AnimatorFactory3D { [key: string]: any; }
declare const AnimatorFactory3D: { new(...args: any[]): AnimatorFactory3D; [key: string]: any; };
declare interface StageQuality { [key: string]: any; }
declare const StageQuality: { new(...args: any[]): StageQuality; [key: string]: any; };
declare interface URLRequestMethod { [key: string]: any; }
declare const URLRequestMethod: { new(...args: any[]): URLRequestMethod; [key: string]: any; };
declare interface URLVariables { [key: string]: any; }
declare const URLVariables: { new(...args: any[]): URLVariables; [key: string]: any; };
declare interface URLLoader { [key: string]: any; }
declare const URLLoader: { new(...args: any[]): URLLoader; [key: string]: any; };
declare interface Mouse { [key: string]: any; }
declare const Mouse: { new(...args: any[]): Mouse; [key: string]: any; };
declare interface MouseCursor { [key: string]: any; }
declare const MouseCursor: { new(...args: any[]): MouseCursor; [key: string]: any; };
declare interface Timer { [key: string]: any; }
declare const Timer: { new(...args: any[]): Timer; [key: string]: any; };
declare interface ColorMatrixFilter { [key: string]: any; }
declare const ColorMatrixFilter: { new(...args: any[]): ColorMatrixFilter; [key: string]: any; };
declare interface GlowFilter { [key: string]: any; }
declare const GlowFilter: { new(...args: any[]): GlowFilter; [key: string]: any; };
declare interface BlurFilter { [key: string]: any; }
declare const BlurFilter: { new(...args: any[]): BlurFilter; [key: string]: any; };
declare interface DropShadowFilter { [key: string]: any; }
declare const DropShadowFilter: { new(...args: any[]): DropShadowFilter; [key: string]: any; };
declare interface Keyboard { [key: string]: any; }
declare const Keyboard: { new(...args: any[]): Keyboard; [key: string]: any; };
declare interface Class { [key: string]: any; }
declare const Class: { new(...args: any[]): Class; [key: string]: any; };
declare interface IME { [key: string]: any; }
declare const IME: { new(...args: any[]): IME; [key: string]: any; };
declare interface TextFormatAlign { [key: string]: any; }
declare const TextFormatAlign: { new(...args: any[]): TextFormatAlign; [key: string]: any; };
declare interface TextFieldAutoSize { [key: string]: any; }
declare const TextFieldAutoSize: { new(...args: any[]): TextFieldAutoSize; [key: string]: any; };
declare interface AntiAliasType { [key: string]: any; }
declare const AntiAliasType: { new(...args: any[]): AntiAliasType; [key: string]: any; };
declare interface GridFitType { [key: string]: any; }
declare const GridFitType: { new(...args: any[]): GridFitType; [key: string]: any; };
declare interface TextSnapshot { [key: string]: any; }
declare const TextSnapshot: { new(...args: any[]): TextSnapshot; [key: string]: any; };
declare interface CSMSettings { [key: string]: any; }
declare const CSMSettings: { new(...args: any[]): CSMSettings; [key: string]: any; };
declare interface ContextMenuEvent { [key: string]: any; }
declare const ContextMenuEvent: { new(...args: any[]): ContextMenuEvent; [key: string]: any; };
declare interface EventDispatcher { [key: string]: any; }
declare const EventDispatcher: { new(...args: any[]): EventDispatcher; [key: string]: any; };
declare interface ContextMenuBuiltInItems { [key: string]: any; }
declare const ContextMenuBuiltInItems: { new(...args: any[]): ContextMenuBuiltInItems; [key: string]: any; };
declare interface ContextMenuClipboardItems { [key: string]: any; }
declare const ContextMenuClipboardItems: { new(...args: any[]): ContextMenuClipboardItems; [key: string]: any; };
declare interface IMEConversionMode { [key: string]: any; }
declare const IMEConversionMode: { new(...args: any[]): IMEConversionMode; [key: string]: any; };
declare interface BitmapFilter { [key: string]: any; }
declare const BitmapFilter: { new(...args: any[]): BitmapFilter; [key: string]: any; };
declare interface TextFieldType { [key: string]: any; }
declare const TextFieldType: { new(...args: any[]): TextFieldType; [key: string]: any; };
declare interface TextLineMetrics { [key: string]: any; }
declare const TextLineMetrics: { new(...args: any[]): TextLineMetrics; [key: string]: any; };
declare interface SharedObjectFlushStatus { [key: string]: any; }
declare const SharedObjectFlushStatus: { new(...args: any[]): SharedObjectFlushStatus; [key: string]: any; };
declare interface Vector { [key: string]: any; }
declare const Vector: { new(...args: any[]): Vector; [key: string]: any; };
declare interface BlendMode { [key: string]: any; }
declare const BlendMode: { new(...args: any[]): BlendMode; [key: string]: any; };
declare const flash: any;
declare const console: any;
declare const getDefinitionByName: any;
declare const getQualifiedClassName: any;
declare const getQualifiedSuperclassName: any;
declare const describeType: any;
declare const getTimer: any;

// @ts-ignore
export class ScrollBar extends UIComponent{
  [key: string]: any;
      
      public static readonly WIDTH: number = 15;
      private static defaultStyles: any = {
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
      protected static readonly DOWN_ARROW_STYLES: any = {
         "disabledSkin":"downArrowDisabledSkin",
         "downSkin":"downArrowDownSkin",
         "overSkin":"downArrowOverSkin",
         "upSkin":"downArrowUpSkin",
         "repeatDelay":"repeatDelay",
         "repeatInterval":"repeatInterval"
      };
      protected static readonly THUMB_STYLES: any = {
         "disabledSkin":"thumbDisabledSkin",
         "downSkin":"thumbDownSkin",
         "overSkin":"thumbOverSkin",
         "upSkin":"thumbUpSkin",
         "icon":"thumbIcon",
         "textPadding":0
      };
      protected static readonly TRACK_STYLES: any = {
         "disabledSkin":"trackDisabledSkin",
         "downSkin":"trackDownSkin",
         "overSkin":"trackOverSkin",
         "upSkin":"trackUpSkin",
         "repeatDelay":"repeatDelay",
         "repeatInterval":"repeatInterval"
      };
      protected static readonly UP_ARROW_STYLES: any = {
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
      protected downArrow!: BaseButton;
      private _lineScrollSize: number = 1;
      protected upArrow!: BaseButton;
      private _scrollPosition: number = 0;
      private thumbScrollOffset!: number;
      protected track!: BaseButton;
      protected thumb!: LabelButton;
      protected inDrag: boolean = false;
      private _pageScrollSize: number = 0;
      constructor(){
         // @ts-ignore
         super();
         this.setStyles();
         focusEnabled = false;
      }
      
      public static getStyleDefinition(): any
      {
         return ScrollBar.defaultStyles;
      }
      
      public set enabled(param1: boolean)
      {
         super.enabled = param1;
         this.downArrow.enabled = this.track.enabled = this.thumb.enabled = this.upArrow.enabled = this.enabled && this._maxScrollPosition > this._minScrollPosition;
         this.updateThumb();
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
            this._lineScrollSize = param1;
         }
      }
      
      public get minScrollPosition(): number
      {
         return this._minScrollPosition;
      }
      
      protected updateThumb(): void
      {
         var _loc1_: number = this._maxScrollPosition - this._minScrollPosition + this._pageSize;
         if(this.track.height <= 12 || this._maxScrollPosition <= this._minScrollPosition || (_loc1_ == 0 || isNaN(_loc1_)))
         {
            (this.thumb as any).height = 12;
            (this.thumb as any).visible = false;
         }
         else
         {
            (this.thumb as any).height = Math.max(13,this._pageSize / _loc1_ * this.track.height);
            (this.thumb as any).y = this.track.y + (this.track.height - this.thumb.height) * ((this._scrollPosition - this._minScrollPosition) / (this._maxScrollPosition - this._minScrollPosition));
            (this.thumb as any).visible = this.enabled;
         }
      }
      
      public set minScrollPosition(param1: number)
      {
         this.setScrollProperties(_pageSize,param1,this._maxScrollPosition);
      }
      
      public get lineScrollSize(): number
      {
         return this._lineScrollSize;
      }
      
      public setScrollPosition(param1: number, param2: boolean = true): void
      {
         var _loc3_: number = this.scrollPosition;
         this._scrollPosition = Math.max(_minScrollPosition,Math.min(_maxScrollPosition,param1));
         if(_loc3_ == this._scrollPosition)
         {
            return;
         }
         if(param2)
         {
            this.dispatchEvent(new (ScrollEvent as any)(_direction,this.scrollPosition - _loc3_,this.scrollPosition));
         }
         this.updateThumb();
      }
      
      public get maxScrollPosition(): number
      {
         return this._maxScrollPosition;
      }
      
      public get scrollPosition(): number
      {
         return this._scrollPosition;
      }
      
      // @ts-ignore
      
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
         this.setScrollProperties(_pageSize,_minScrollPosition,param1);
      }
      
      protected thumbReleaseHandler(param1: any): void
      {
         this.inDrag = false;
         mouseChildren = true;
         this.thumb.mouseStateLocked = false;
         stage.removeEventListener("mousemove", this.handleThumbDrag.bind(this));
         stage.removeEventListener("mouseup", this.thumbReleaseHandler.bind(this));
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
         this.setScrollPosition(param1,true);
      }
      
      public get enabled(): boolean
      {
         return super.enabled;
      }
      
      protected draw(): void
      {
         var _loc1_: number = NaN;
         if(isInvalid(InvalidationType.SIZE))
         {
            _loc1_ = super.height;
            this.downArrow.move(0,Math.max(this.upArrow.height,_loc1_ - this.downArrow.height));
            this.track.setSize(WIDTH,Math.max(0,_loc1_ - (this.downArrow.height + this.upArrow.height)));
            this.updateThumb();
         }
         if(isInvalid(InvalidationType.STYLES,InvalidationType.STATE))
         {
            this.setStyles();
         }
         this.downArrow.drawNow();
         this.upArrow.drawNow();
         this.track.drawNow();
         this.thumb.drawNow();
         validate();
      }
      
      // @ts-ignore
      
      public get width(): number
      {
         return this._direction == ScrollBarDirection.HORIZONTAL ? super.height : super.width;
      }
      
      protected configUI(): void
      {
         super.configUI();
         this.track = new (BaseButton as any)();
         this.track.move(0,14);
         this.track.useHandCursor = false;
         this.track.autoRepeat = true;
         this.track.focusEnabled = false;
         this.addChild(this.track);
         this.thumb = new (LabelButton as any)();
         this.thumb.label = "";
         this.thumb.setSize(WIDTH,15);
         this.thumb.move(0,15);
         this.thumb.focusEnabled = false;
         this.addChild(this.thumb);
         this.downArrow = new (BaseButton as any)();
         this.downArrow.setSize(WIDTH,14);
         this.downArrow.autoRepeat = true;
         this.downArrow.focusEnabled = false;
         this.addChild(this.downArrow);
         this.upArrow = new (BaseButton as any)();
         this.upArrow.setSize(WIDTH,14);
         this.upArrow.move(0,0);
         this.upArrow.autoRepeat = true;
         this.upArrow.focusEnabled = false;
         this.addChild(this.upArrow);
         this.upArrow.addEventListener(ComponentEvent.BUTTON_DOWN, this.scrollPressHandler.bind(this));
         this.downArrow.addEventListener(ComponentEvent.BUTTON_DOWN, this.scrollPressHandler.bind(this));
         this.track.addEventListener(ComponentEvent.BUTTON_DOWN, this.scrollPressHandler.bind(this));
         this.thumb.addEventListener("mousedown", this.thumbPressHandler.bind(this));
         this.enabled = false;
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
         this.enabled = this._maxScrollPosition > this._minScrollPosition;
         this.setScrollPosition(_scrollPosition,false);
         this.updateThumb();
      }
      
      public get pageScrollSize(): number
      {
         return this._pageScrollSize == 0 ? _pageSize : this._pageScrollSize;
      }
      
      protected handleThumbDrag(param1: any): void
      {
         var _loc2_: number = Math.max(0,Math.min(this.track.height - this.thumb.height,this.mouseY - this.track.y - this.thumbScrollOffset));
         this.setScrollPosition(_loc2_ / (this.track.height - this.thumb.height) * (this._maxScrollPosition - this._minScrollPosition) + this._minScrollPosition);
      }
      
      protected setStyles(): void
      {
         copyStylesToChild(downArrow,ScrollBar.DOWN_ARROW_STYLES);
         copyStylesToChild(thumb,ScrollBar.THUMB_STYLES);
         copyStylesToChild(track,ScrollBar.TRACK_STYLES);
         copyStylesToChild(upArrow,ScrollBar.UP_ARROW_STYLES);
      }
      
      protected scrollPressHandler(param1: ComponentEvent): void
      {
         var _loc2_: number = NaN;
         var _loc3_: number = NaN;
         param1.stopImmediatePropagation();
         if(param1.currentTarget == this.upArrow)
         {
            this.setScrollPosition(this._scrollPosition - this._lineScrollSize);
         }
         else if(param1.currentTarget == this.downArrow)
         {
            this.setScrollPosition(this._scrollPosition + this._lineScrollSize);
         }
         else
         {
            _loc2_ = this.track.mouseY / this.track.height * (this._maxScrollPosition - this._minScrollPosition) + this._minScrollPosition;
            _loc3_ = this.pageScrollSize == 0 ? pageSize : this.pageScrollSize;
            if(_scrollPosition < _loc2_)
            {
               this.setScrollPosition(Math.min(_loc2_,_scrollPosition + _loc3_));
            }
            else if(this._scrollPosition > _loc2_)
            {
               this.setScrollPosition(Math.max(_loc2_,this._scrollPosition - _loc3_));
            }
         }
      }
      
      protected thumbPressHandler(param1: any): void
      {
         this.inDrag = true;
         this.thumbScrollOffset = this.mouseY - this.thumb.y;
         this.thumb.mouseStateLocked = true;
         mouseChildren = false;
         stage.addEventListener("mousemove", this.handleThumbDrag.bind(this));
         stage.addEventListener("mouseup", this.thumbReleaseHandler.bind(this));
      }
      
      public set direction(param1: string)
      {
         if(_direction == param1)
         {
            return;
         }
         this._direction = param1;
         if(isLivePreview)
         {
            return;
         }
         setScaleY(1);
         var _loc2_: boolean = this._direction == ScrollBarDirection.HORIZONTAL;
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
