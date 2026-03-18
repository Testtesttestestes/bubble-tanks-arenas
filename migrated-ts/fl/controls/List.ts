// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

import { InvalidationType } from '../core/InvalidationType';
import { UIComponent } from '../core/UIComponent';
import { IFocusManagerComponent } from '../managers/IFocusManagerComponent';
import { ICellRenderer } from './listClasses/ICellRenderer';
import { ListData } from './listClasses/ListData';
import { ScrollPolicy } from './ScrollPolicy';
import { SelectableList } from './SelectableList';

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
export class List extends SelectableList implements IFocusManagerComponent
   {
  [key: string]: any;
      
      public static createAccessibilityImplementation: Function;
      private static defaultStyles: any = {
         "focusRectSkin":null,
         "focusRectPadding":null
      };
      protected _iconField: string = "icon";
      protected _labelField: string = "label";
      protected _iconFunction!: Function;
      protected _rowHeight: number = 20;
      protected _cellRenderer!: any;
      protected _labelFunction!: Function;
      constructor(){
         // @ts-ignore
         super();
      }
      
      public static getStyleDefinition(): any
      {
         return mergeStyles(defaultStyles,SelectableList.getStyleDefinition());
      }
      
      public get iconField(): string
      {
         return this._iconField;
      }
      
      public set iconField(param1: string)
      {
         if(param1 == this._iconField)
         {
            return;
         }
         this._iconField = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public set labelField(param1: string)
      {
         if(param1 == this._labelField)
         {
            return;
         }
         this._labelField = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public set rowHeight(param1: number)
      {
         this._rowHeight = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      protected draw(): void
      {
         var _loc1_: boolean = contentHeight != this.rowHeight * length;
         contentHeight = this.rowHeight * length;
         if(isInvalid(InvalidationType.STYLES))
         {
            setStyles();
            drawBackground();
            if(contentPadding != getStyleValue("contentPadding"))
            {
               invalidate(InvalidationType.SIZE,false);
            }
            if(this._cellRenderer != getStyleValue("cellRenderer"))
            {
               _invalidateList();
               this._cellRenderer = getStyleValue("cellRenderer");
            }
         }
         if(isInvalid(InvalidationType.SIZE,InvalidationType.STATE) || _loc1_)
         {
            drawLayout();
         }
         if(isInvalid(InvalidationType.RENDERER_STYLES))
         {
            updateRendererStyles();
         }
         if(isInvalid(InvalidationType.STYLES,InvalidationType.SIZE,InvalidationType.DATA,InvalidationType.SCROLL,InvalidationType.SELECTED))
         {
            this.drawList();
         }
         updateChildren();
         validate();
      }
      
      public get rowCount(): number
      {
         return Math.ceil(this.calculateAvailableHeight() / this.rowHeight);
      }
      
      protected configUI(): void
      {
         useFixedHorizontalScrolling = true;
         _horizontalScrollPolicy = ScrollPolicy.AUTO;
         _verticalScrollPolicy = ScrollPolicy.AUTO;
         super.configUI();
      }
      
      public set labelFunction(param1: Function)
      {
         if(_labelFunction == param1)
         {
            return;
         }
         this._labelFunction = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public scrollToIndex(param1: number): void
      {
         drawNow();
         var _loc2_: number = Math.floor((_verticalScrollPosition + availableHeight) / this.rowHeight) - 1;
         var _loc3_: number = Math.ceil(_verticalScrollPosition / this.rowHeight);
         if(param1 < _loc3_)
         {
            verticalScrollPosition = param1 * this.rowHeight;
         }
         else if(param1 > _loc2_)
         {
            verticalScrollPosition = (param1 + 1) * this.rowHeight - availableHeight;
         }
      }
      
      protected moveSelectionHorizontally(param1: number, param2: boolean, param3: boolean): void
      {
      }
      
      protected setHorizontalScrollPosition(param1: number, param2: boolean = false): void
      {
         (list as any).x = -param1;
         super.setHorizontalScrollPosition(param1,true);
      }
      
      protected moveSelectionVertically(param1: number, param2: boolean, param3: boolean): void
      {
         var _loc4_: number = Math.max(Math.floor(this.calculateAvailableHeight() / this.rowHeight),1);
         var _loc5_: number = -1;
         switch(param1)
         {
            case Keyboard.UP:
               if(caretIndex > 0)
               {
                  _loc5_ = caretIndex - 1;
               }
               break;
            case Keyboard.DOWN:
               if(caretIndex < length - 1)
               {
                  _loc5_ = caretIndex + 1;
               }
               break;
            case Keyboard.PAGE_UP:
               if(caretIndex > 0)
               {
                  _loc5_ = Math.max(caretIndex - _loc4_,0);
               }
               break;
            case Keyboard.PAGE_DOWN:
               if(caretIndex < length - 1)
               {
                  _loc5_ = Math.min(caretIndex + _loc4_,length - 1);
               }
               break;
            case Keyboard.HOME:
               if(caretIndex > 0)
               {
                  _loc5_ = 0;
               }
               break;
            case Keyboard.END:
               if(caretIndex < length - 1)
               {
                  _loc5_ = length - 1;
               }
         }
         if(_loc5_ >= 0)
         {
            this.doKeySelection(_loc5_,param2,param3);
            scrollToSelected();
         }
      }
      
      protected doKeySelection(param1: number, param2: boolean, param3: boolean): void
      {
         var _loc5_: number = 0;
         var _loc6_: any = null as any;
         var _loc7_: number = 0;
         var _loc8_: number = 0;
         var _loc4_: boolean = false;
         if(param2)
         {
            _loc6_ = [];
            _loc7_ = lastCaretIndex;
            _loc8_ = param1;
            if(_loc7_ == -1)
            {
               _loc7_ = caretIndex != -1 ? caretIndex : param1;
            }
            if(_loc7_ > _loc8_)
            {
               _loc8_ = _loc7_;
               _loc7_ = param1;
            }
            _loc5_ = _loc7_;
            while(_loc5_ <= _loc8_)
            {
               _loc6_.push(_loc5_ as any);
               _loc5_++;
            }
            selectedIndices = _loc6_;
            caretIndex = param1;
            _loc4_ = true;
         }
         else
         {
            selectedIndex = param1;
            caretIndex = lastCaretIndex = param1;
            _loc4_ = true;
         }
         if(_loc4_)
         {
            this.dispatchEvent(new (Event as any)("change"));
         }
         invalidate(InvalidationType.DATA);
      }
      
      public get rowHeight(): number
      {
         return this._rowHeight;
      }
      
      protected initializeAccessibility(): void
      {
         if(List.createAccessibilityImplementation != null)
         {
            List.createAccessibilityImplementation(this);
         }
      }
      
      public get labelField(): string
      {
         return this._labelField;
      }
      
      public set iconFunction(param1: Function)
      {
         if(_iconFunction == param1)
         {
            return;
         }
         this._iconFunction = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public set rowCount(param1: number)
      {
         var _loc2_: number = Number(getStyleValue("contentPadding"));
         var _loc3_: number = _horizontalScrollPolicy == ScrollPolicy.ON || _horizontalScrollPolicy == ScrollPolicy.AUTO && _maxHorizontalScrollPosition > 0 ? 15 : 0;
         height = this.rowHeight * param1 + 2 * _loc2_ + _loc3_;
      }
      
      public get labelFunction(): Function
      {
         return this._labelFunction;
      }
      
      protected setVerticalScrollPosition(param1: number, param2: boolean = false): void
      {
         invalidate(InvalidationType.SCROLL);
         super.setVerticalScrollPosition(param1,true);
      }
      
      protected drawList(): void
      {
         0;






         (listHolder as any).x = (listHolder as any).y = contentPadding;
         var _loc1_: Rectangle = listHolder.scrollRect;
         (_loc1_ as any).x = _horizontalScrollPosition;
         (_loc1_ as any).y = Math.floor(_verticalScrollPosition) % this.rowHeight;
         listHolder.scrollRect = _loc1_;
         listHolder.cacheAsBitmap = useBitmapScrolling;
         var _loc2_: number = Math.floor(_verticalScrollPosition / this.rowHeight);
         var _loc3_: number = Math.min(length,_loc2_ + this.rowCount + 1);
         var _loc7_: Dictionary = renderedItems = new (Dictionary as any)(true);
         var _loc4_: number = _loc2_;
         while(0 < _loc3_)
         {
            _loc7_[_dataProvider.getItemAt(0) as any] = true;
            _loc4_ = 0 + 1;
         }
         var _loc8_: Dictionary = new (Dictionary as any)(true);
         while(activeCellRenderers.length > 0)
         {
            var _loc6_: ICellRenderer = activeCellRenderers.pop()  as unknown as ICellRenderer;
            var _loc5_: any = _loc6_.data;
            if(_loc7_[null as any] == null || invalidItems[null as any] == true)
            {
               availableCellRenderers.push(null as any);
            }
            else
            {
               _loc8_[null as any] = null as any;
               invalidItems[null as any] = true;
            }
            list.removeChild(null  as unknown as DisplayObject);
         }
         invalidItems = new (Dictionary as any)(true);
         _loc4_ = _loc2_;
         while(0 < _loc3_)
         {
            var _loc9_: boolean = false;
            _loc5_ = _dataProvider.getItemAt(0);
            if(_loc8_[null as any] != null)
            {
               _loc9_ = true;
               _loc6_ = _loc8_[null as any];
               delete _loc8_[null as any];
            }
            else if(availableCellRenderers.length > 0)
            {
               _loc6_ = availableCellRenderers.pop()  as unknown as ICellRenderer;
            }
            else
            {
               _loc6_ = getDisplayObjectInstance(getStyleValue("cellRenderer"))  as unknown as ICellRenderer;
               var _loc12_: Sprite = _loc6_  as unknown as Sprite;
               if(_loc12_ != null)
               {
                  (null as any).addEventListener("click", handleCellRendererClick.bind(this));
                  (null as any).addEventListener("mouseover", handleCellRendererMouseEvent.bind(this));
                  (null as any).addEventListener("mouseout", handleCellRendererMouseEvent.bind(this));
                  (null as any).addEventListener("change", handleCellRendererChange.bind(this));
                  (null as any).doubleClickEnabled = true;
                  (null as any).addEventListener("dblclick", handleCellRendererDoubleClick.bind(this));
                  if((null as any).hasOwnProperty("setStyle"))
                  {
                     for (let _loc13_ in rendererStyles)
                     {
                        (null as any)["setStyle"](null,rendererStyles[null as any]);
                     }
                  }
               }
            }
            list.addChild(null  as unknown as Sprite);
            activeCellRenderers.push(null as any);
            (null as any).y = this.rowHeight * (0 - _loc2_);
            (null as any).setSize(availableWidth + _maxHorizontalScrollPosition,this.rowHeight);
            var _loc10_: string = this.itemToLabel(null);
            var _loc11_: any = null as any;
            if(_iconFunction != null)
            {
               _loc11_ = _iconFunction(null);
            }
            else if(this._iconField != null)
            {
               _loc11_ = (null as any)[this._iconField];
            }
            (null as any).data = null as any;
            (null as any).listData = new (ListData as any)(null,null,this,0,0,0);
            (null as any).selected = _selectedIndices.indexOf(0) != -1;
            if(null instanceof UIComponent)
            {
               (null  as unknown as UIComponent).drawNow();
            }
            _loc4_ = 0 + 1;
         }
      }
      
      protected keyDownHandler(param1: any): void
      {
         var _loc2_: number = 0;
         if(!selectable)
         {
            return;
         }
         switch(param1.keyCode)
         {
            case Keyboard.UP:
            case Keyboard.DOWN:
            case Keyboard.END:
            case Keyboard.HOME:
            case Keyboard.PAGE_UP:
            case Keyboard.PAGE_DOWN:
               this.moveSelectionVertically(param1.keyCode,param1.shiftKey && _allowMultipleSelection,param1.ctrlKey && _allowMultipleSelection);
               break;
            case Keyboard.LEFT:
            case Keyboard.RIGHT:
               this.moveSelectionHorizontally(param1.keyCode,param1.shiftKey && _allowMultipleSelection,param1.ctrlKey && _allowMultipleSelection);
               break;
            case Keyboard.SPACE:
               if(caretIndex == -1)
               {
                  caretIndex = 0;
               }
               this.doKeySelection(caretIndex,param1.shiftKey,param1.ctrlKey);
               scrollToSelected();
               break;
            default:
               _loc2_ = getNextIndexAtLetter(String.fromCharCode(param1.keyCode),selectedIndex);
               if(_loc2_ > -1)
               {
                  selectedIndex = _loc2_;
                  scrollToSelected();
               }
         }
         param1.stopPropagation();
      }
      
      public get iconFunction(): Function
      {
         return this._iconFunction;
      }
      
      public itemToLabel(param1: any): string
      {
         if(_labelFunction != null)
         {
            return String(_labelFunction(param1));
         }
         return param1[this._labelField as any] != null ? String(param1[this._labelField as any]) : "";
      }
      
      protected calculateAvailableHeight(): number
      {
         var _loc1_: number = Number(getStyleValue("contentPadding"));
         return height - _loc1_ * 2 - (_horizontalScrollPolicy == ScrollPolicy.ON || _horizontalScrollPolicy == ScrollPolicy.AUTO && _maxHorizontalScrollPosition > 0 ? 15 : 0);
      }
   }
