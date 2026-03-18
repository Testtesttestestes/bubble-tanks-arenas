// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.containers

import { ScrollBar } from '../controls/ScrollBar';
import { ScrollBarDirection } from '../controls/ScrollBarDirection';
import { ScrollPolicy } from '../controls/ScrollPolicy';
import { InvalidationType } from '../core/InvalidationType';
import { UIComponent } from '../core/UIComponent';
import { ScrollEvent } from '../events/ScrollEvent';

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











   export class BaseScrollPane extends UIComponent{
  [key: string]: any;
      
      private static defaultStyles: any = {
         "repeatDelay":500,
         "repeatInterval":35,
         "skin":"ScrollPane_upSkin",
         "contentPadding":0,
         "disabledAlpha":0[5]
      };
      protected static readonly SCROLL_BAR_STYLES: any = {
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
      protected _horizontalScrollBar!: ScrollBar;
      protected _horizontalPageScrollSize: number = 0;
      protected _verticalPageScrollSize: number = 0;
      protected _maxHorizontalScrollPosition: number = 0;
      protected defaultLineScrollSize: number = 4;
      protected vOffset: number = 0;
      protected contentScrollRect!: Rectangle;
      protected background!: DisplayObject;
      protected _verticalScrollBar!: ScrollBar;
      protected disabledOverlay!: Shape;
      protected vScrollBar!: boolean;
      protected _horizontalScrollPolicy!: string;
      protected useFixedHorizontalScrolling: boolean = false;
      protected contentWidth: number = 0;
      protected availableHeight!: number;
      protected _verticalScrollPolicy!: string;
      protected contentPadding: number = 0;
      protected _useBitmpScrolling: boolean = false;
      protected availableWidth!: number;
      protected hScrollBar!: boolean;
      constructor(){
         // @ts-ignore
         super();
      }
      
      public static getStyleDefinition(): any
      {
         return mergeStyles(defaultStyles,ScrollBar.getStyleDefinition());
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
         this.calculateAvailableSize();
         this.calculateContentWidth();
         (this.background as any).width = width;
         (this.background as any).height = height;
         if(vScrollBar)
         {
            (this._verticalScrollBar as any).visible = true;
            (this._verticalScrollBar as any).x = width - ScrollBar.WIDTH - this.contentPadding;
            (this._verticalScrollBar as any).y = this.contentPadding;
            (this._verticalScrollBar as any).height = this.availableHeight;
         }
         else
         {
            (this._verticalScrollBar as any).visible = false;
         }
         this._verticalScrollBar.setScrollProperties(availableHeight,0,this.contentHeight - availableHeight,this.verticalPageScrollSize);
         this.setVerticalScrollPosition(this._verticalScrollBar.scrollPosition,false);
         if(hScrollBar)
         {
            (this._horizontalScrollBar as any).visible = true;
            (this._horizontalScrollBar as any).x = this.contentPadding;
            (this._horizontalScrollBar as any).y = height - ScrollBar.WIDTH - this.contentPadding;
            (this._horizontalScrollBar as any).width = this.availableWidth;
         }
         else
         {
            (this._horizontalScrollBar as any).visible = false;
         }
         this._horizontalScrollBar.setScrollProperties(availableWidth,0,this.useFixedHorizontalScrolling ? _maxHorizontalScrollPosition : this.contentWidth - availableWidth,this.horizontalPageScrollSize);
         this.setHorizontalScrollPosition(this._horizontalScrollBar.scrollPosition,false);
         this.drawDisabledOverlay();
      }
      
      protected handleWheel(param1: any): void
      {
         if(!this.enabled || !this._verticalScrollBar.visible || this.contentHeight <= this.availableHeight)
         {
            return;
         }
         this._verticalScrollBar.scrollPosition -= param1.delta * this.verticalLineScrollSize;
         this.setVerticalScrollPosition(this._verticalScrollBar.scrollPosition);
         this.dispatchEvent(new (ScrollEvent as any)(ScrollBarDirection.VERTICAL,param1.delta,this.horizontalScrollPosition));
      }
      
      protected handleScroll(param1: ScrollEvent): void
      {
         if(param1.target == this._verticalScrollBar)
         {
            this.setVerticalScrollPosition(param1.position);
         }
         else
         {
            this.setHorizontalScrollPosition(param1.position);
         }
      }
      
      public get verticalLineScrollSize(): number
      {
         return this._verticalScrollBar.lineScrollSize;
      }
      
      protected drawBackground(): void
      {
         var _loc1_: DisplayObject = this.background;
         this.background = getDisplayObjectInstance(getStyleValue("skin"));
         (this.background as any).width = width;
         (this.background as any).height = height;
         this.addChildAt(background,0);
         if(_loc1_ != null && _loc1_ != this.background)
         {
            this.removeChild(_loc1_);
         }
      }
      
      protected calculateAvailableSize(): void
      {
         var _loc1_: number = ScrollBar.WIDTH;
         var _loc2_: number = this.contentPadding = Number(getStyleValue("contentPadding"));
         var _loc3_: number = height - 2 * _loc2_ - this.vOffset;
         this.vScrollBar = this._verticalScrollPolicy == ScrollPolicy.ON || this._verticalScrollPolicy == ScrollPolicy.AUTO && this.contentHeight > _loc3_;
         var _loc4_: number = width - (this.vScrollBar ? _loc1_ : 0) - 2 * _loc2_;
         var _loc5_: number = this.useFixedHorizontalScrolling ? _maxHorizontalScrollPosition : this.contentWidth - _loc4_;
         this.hScrollBar = this._horizontalScrollPolicy == ScrollPolicy.ON || this._horizontalScrollPolicy == ScrollPolicy.AUTO && _loc5_ > 0;
         if(hScrollBar)
         {
            _loc3_ -= _loc1_;
         }
         if(hScrollBar && !this.vScrollBar && this._verticalScrollPolicy == ScrollPolicy.AUTO && this.contentHeight > _loc3_)
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
         return this._horizontalPageScrollSize == 0 && !isNaN(this.availableWidth) ? availableWidth : this._horizontalPageScrollSize;
      }
      
      public set horizontalScrollPosition(param1: number)
      {
         drawNow();
         this._horizontalScrollBar.scrollPosition = param1;
         this.setHorizontalScrollPosition(this._horizontalScrollBar.scrollPosition,false);
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
            this.setStyles();
            this.drawBackground();
            if(this.contentPadding != getStyleValue("contentPadding"))
            {
               invalidate(InvalidationType.SIZE,false);
            }
         }
         if(isInvalid(InvalidationType.SIZE,InvalidationType.STATE))
         {
            this.drawLayout();
         }
         this.updateChildren();
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
         this.contentScrollRect = new (Rectangle as any)(0,0,85,85);
         this._verticalScrollBar = new (ScrollBar as any)();
         this._verticalScrollBar.addEventListener(ScrollEvent.SCROLL, this.handleScroll.bind(this));
         (this._verticalScrollBar as any).visible = false;
         this._verticalScrollBar.lineScrollSize = this.defaultLineScrollSize;
         this.addChild(this._verticalScrollBar);
         copyStylesToChild(_verticalScrollBar,BaseScrollPane.SCROLL_BAR_STYLES);
         this._horizontalScrollBar = new (ScrollBar as any)();
         this._horizontalScrollBar.direction = ScrollBarDirection.HORIZONTAL;
         this._horizontalScrollBar.addEventListener(ScrollEvent.SCROLL, this.handleScroll.bind(this));
         (this._horizontalScrollBar as any).visible = false;
         this._horizontalScrollBar.lineScrollSize = this.defaultLineScrollSize;
         this.addChild(this._horizontalScrollBar);
         copyStylesToChild(_horizontalScrollBar,BaseScrollPane.SCROLL_BAR_STYLES);
         this.disabledOverlay = new (Shape as any)();
         var _loc1_: Graphics = this.disabledOverlay.graphics;
         _loc1_.beginFill(16777215);
         _loc1_.drawRect(0,0,width,height);
         _loc1_.endFill();
         this.addEventListener(MouseEvent.MOUSE_WHEEL, this.handleWheel.bind(this));
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
            (this.disabledOverlay as any).x = (this.disabledOverlay as any).y = this.contentPadding;
            (this.disabledOverlay as any).width = this.availableWidth;
            (this.disabledOverlay as any).height = this.availableHeight;
            (this.disabledOverlay as any).alpha = getStyleValue("disabledAlpha")  as unknown as number;
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
         this.setVerticalScrollPosition(this._verticalScrollBar.scrollPosition,false);
      }
      
      protected setHorizontalScrollPosition(param1: number, param2: boolean = false): void
      {
      }
      
      protected setStyles(): void
      {
         copyStylesToChild(_verticalScrollBar,BaseScrollPane.SCROLL_BAR_STYLES);
         copyStylesToChild(_horizontalScrollBar,BaseScrollPane.SCROLL_BAR_STYLES);
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
         this._verticalScrollBar.enabled = this._horizontalScrollBar.enabled = this.enabled;
         this._verticalScrollBar.drawNow();
         this._horizontalScrollBar.drawNow();
      }
      
      public get verticalPageScrollSize(): number
      {
         if(isNaN(this.availableHeight))
         {
            drawNow();
         }
         return this._verticalPageScrollSize == 0 && !isNaN(this.availableHeight) ? availableHeight : this._verticalPageScrollSize;
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
