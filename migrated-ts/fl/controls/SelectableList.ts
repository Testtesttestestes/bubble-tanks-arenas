// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

import { BaseScrollPane } from '../containers/BaseScrollPane';
import { InvalidationType } from '../core/InvalidationType';
import { DataProvider } from '../data/DataProvider';
import { SimpleCollectionItem } from '../data/SimpleCollectionItem';
import { DataChangeEvent } from '../events/DataChangeEvent';
import { DataChangeType } from '../events/DataChangeType';
import { ListEvent } from '../events/ListEvent';
import { ScrollEvent } from '../events/ScrollEvent';
import { IFocusManagerComponent } from '../managers/IFocusManagerComponent';
import { CellRenderer } from './listClasses/CellRenderer';
import { ICellRenderer } from './listClasses/ICellRenderer';
import { ScrollBarDirection } from './ScrollBarDirection';
import { ScrollPolicy } from './ScrollPolicy';

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


















   export class SelectableList extends BaseScrollPane implements IFocusManagerComponent
   {
  [key: string]: any;
      
      public static createAccessibilityImplementation: Function;
      private static defaultStyles: any = {
         "skin":"List_skin",
         "cellRenderer":CellRenderer,
         "contentPadding":null,
         "disabledAlpha":null
      };
      protected invalidItems!: Dictionary;
      protected renderedItems!: Dictionary;
      protected caretIndex: number = -1;
      protected updatedRendererStyles!: any;
      protected _allowMultipleSelection: boolean = false;
      protected lastCaretIndex: number = -1;
      protected _verticalScrollPosition!: number;
      protected _selectedIndices!: any;
      protected preChangeItems!: any;
      protected activeCellRenderers!: any;
      protected availableCellRenderers!: any;
      protected rendererStyles!: any;
      protected list!: Sprite;
      protected _dataProvider!: DataProvider;
      protected _horizontalScrollPosition!: number;
      private collectionItemImport!: SimpleCollectionItem;
      protected listHolder!: Sprite;
      protected _selectable: boolean = true;
      constructor(){
         // @ts-ignore
         super();
         this.activeCellRenderers = [];
         this.availableCellRenderers = [];
         this.invalidItems = new (Dictionary as any)(true);
         this.renderedItems = new (Dictionary as any)(true);
         this._selectedIndices = [];
         if(dataProvider == null)
         {
            dataProvider = new (DataProvider as any)();
         }
         verticalScrollPolicy = ScrollPolicy.AUTO;
         this.rendererStyles = {};
         this.updatedRendererStyles = {};
      }
      
      public static getStyleDefinition(): any
      {
         return mergeStyles(defaultStyles,BaseScrollPane.getStyleDefinition());
      }
      
      protected drawList(): void
      {
      }
      
      protected moveSelectionHorizontally(param1: number, param2: boolean, param3: boolean): void
      {
      }
      
      public get allowMultipleSelection(): boolean
      {
         return this._allowMultipleSelection;
      }
      
      protected onPreChange(param1: DataChangeEvent): void
      {
         switch(param1.changeType)
         {
            default:
               this.preChangeItems = this.selectedItems;
         }
      }
      
      public set selectedIndices(param1: any)
      {
         if(!this._selectable)
         {
            return;
         }
         this._selectedIndices = param1 == null ? [] : param1.concat();
         invalidate(InvalidationType.SELECTED);
      }
      
      public isItemSelected(param1: any): boolean
      {
         return this.selectedItems.indexOf(param1) > -1;
      }
      
      public set allowMultipleSelection(param1: boolean)
      {
         if(param1 == this._allowMultipleSelection)
         {
            return;
         }
         this._allowMultipleSelection = param1;
         if(!param1 && this._selectedIndices.length > 1)
         {
            this._selectedIndices = [this._selectedIndices.pop()];
            invalidate(InvalidationType.DATA);
         }
      }
      
      protected setVerticalScrollPosition(param1: number, param2: boolean = false): void
      {
         if(param1 == this._verticalScrollPosition)
         {
            return;
         }
         var _loc3_: number = param1 - this._verticalScrollPosition;
         this._verticalScrollPosition = param1;
         if(param2)
         {
            this.dispatchEvent(new (ScrollEvent as any)(ScrollBarDirection.VERTICAL,_loc3_,param1));
         }
      }
      
      public sortItemsOn(param1: string, param2: any = null): any
      {
         return this._dataProvider.sortOn(param1,param2);
      }
      
      public getNextIndexAtLetter(param1: string, param2: number = -1): number
      {
         var _loc5_: number = NaN;
         var _loc6_: any = null as any;
         var _loc7_: string = null as any;
         if(length == 0)
         {
            return -1;
         }
         param1 = param1.toUpperCase();
         var _loc3_: number = this.length - 1;
         var _loc4_: number = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = param2 + 1 + _loc4_;
            if(_loc5_ > this.length - 1)
            {
               _loc5_ -= this.length;
            }
            _loc6_ = this.getItemAt(_loc5_);
            if(_loc6_ == null)
            {
               break;
            }
            _loc7_ = this.itemToLabel(_loc6_);
            if(_loc7_ != null)
            {
               if(_loc7_.charAt(0).toUpperCase() == param1)
               {
                  return _loc5_;
               }
            }
            _loc4_++;
         }
         return -1;
      }
      
      protected draw(): void
      {
         super.draw();
      }
      
      public removeItemAt(param1: number): any
      {
         return this._dataProvider.removeItemAt(param1);
      }
      
      public get selectedItem(): any
      {
         return this._selectedIndices.length == 0 ? null : this._dataProvider.getItemAt(this.selectedIndex);
      }
      
      protected handleDataChange(param1: DataChangeEvent): void
      {
         var _loc5_: number = 0;
         var _loc2_: number = int(param1.startIndex);
         var _loc3_: number = int(param1.endIndex);
         var _loc4_: string = param1.changeType;
         if(_loc4_ == DataChangeType.INVALIDATE_ALL)
         {
            this.clearSelection();
            this.invalidateList();
         }
         else if(_loc4_ == DataChangeType.INVALIDATE)
         {
            _loc5_ = 0;
            while(_loc5_ < param1.items.length)
            {
               this.invalidateItem(param1.items[_loc5_]);
               _loc5_++;
            }
         }
         else if(_loc4_ == DataChangeType.ADD)
         {
            _loc5_ = 0;
            while(_loc5_ < this._selectedIndices.length)
            {
               if(_selectedIndices[_loc5_ as any] >= _loc2_)
               {
                  _selectedIndices[_loc5_ as any] += _loc2_ - _loc3_;
               }
               _loc5_++;
            }
         }
         else if(_loc4_ == DataChangeType.REMOVE)
         {
            _loc5_ = 0;
            while(_loc5_ < this._selectedIndices.length)
            {
               if(_selectedIndices[_loc5_ as any] >= _loc2_)
               {
                  if(_selectedIndices[_loc5_ as any] <= _loc3_)
                  {
                     delete _selectedIndices[_loc5_ as any];
                  }
                  else
                  {
                     _selectedIndices[_loc5_ as any] -= _loc2_ - _loc3_ + 1;
                  }
               }
               _loc5_++;
            }
         }
         else if(_loc4_ == DataChangeType.REMOVE_ALL)
         {
            this.clearSelection();
         }
         else if(_loc4_ != DataChangeType.REPLACE)
         {
            this.selectedItems = this.preChangeItems;
            this.preChangeItems = null as any;
         }
         invalidate(InvalidationType.DATA);
      }
      
      public itemToCellRenderer(param1: any): ICellRenderer
      {
         var _loc2_: any = undefined;
         var _loc3_: ICellRenderer = null as any;
         if(param1 != null)
         {
            for (let _loc2_ in this.activeCellRenderers)
            {
               _loc3_ = this.activeCellRenderers[_loc2_ as any]  as unknown as ICellRenderer;
               if(_loc3_.data == param1)
               {
                  return _loc3_;
               }
            }
         }
         return null;
      }
      
      public addItem(param1: any): void
      {
         this._dataProvider.addItem(param1);
         this.invalidateList();
      }
      
      public get rowCount(): number
      {
         return 0;
      }
      
      protected configUI(): void
      {
         super.configUI();
         this.listHolder = new (Sprite as any)();
         this.addChild(this.listHolder);
         this.listHolder.scrollRect = contentScrollRect;
         this.list = new (Sprite as any)();
         this.listHolder.addChild(this.list);
      }
      
      public get selectable(): boolean
      {
         return this._selectable;
      }
      
      public clearRendererStyle(param1: string, param2: number = -1): void
      {
         delete this.rendererStyles[param1 as any];
         this.updatedRendererStyles[param1 as any] = null as any;
         invalidate(InvalidationType.RENDERER_STYLES);
      }
      
      protected handleCellRendererMouseEvent(param1: any): void
      {
         var _loc2_: ICellRenderer = param1.target  as unknown as ICellRenderer;
         var _loc3_: string = param1.type == "mouseover" ? ListEvent.ITEM_ROLL_OVER : ListEvent.ITEM_ROLL_OUT;
         this.dispatchEvent(new (ListEvent as any)(_loc3_,false,false,_loc2_.listData.column,_loc2_.listData.row,_loc2_.listData.index,_loc2_.data));
      }
      
      protected keyDownHandler(param1: any): void
      {
         if(!this.selectable)
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
               this.moveSelectionVertically(param1.keyCode,param1.shiftKey && _allowMultipleSelection,param1.ctrlKey && this._allowMultipleSelection);
               param1.stopPropagation();
               break;
            case Keyboard.LEFT:
            case Keyboard.RIGHT:
               this.moveSelectionHorizontally(param1.keyCode,param1.shiftKey && _allowMultipleSelection,param1.ctrlKey && this._allowMultipleSelection);
               param1.stopPropagation();
         }
      }
      
      protected handleCellRendererDoubleClick(param1: any): void
      {
         if(!_enabled)
         {
            return;
         }
         var _loc2_: ICellRenderer = param1.currentTarget  as unknown as ICellRenderer;
         var _loc3_: number = _loc2_.listData.index;
         this.dispatchEvent(new (ListEvent as any)(ListEvent.ITEM_DOUBLE_CLICK,false,true,_loc2_.listData.column,_loc2_.listData.row,_loc3_,_loc2_.data));
      }
      
      public setRendererStyle(param1: string, param2: any, param3: number = 0): void
      {
         if(rendererStyles[param1 as any] == param2)
         {
            return;
         }
         this.updatedRendererStyles[param1 as any] = param2;
         this.rendererStyles[param1 as any] = param2;
         invalidate(InvalidationType.RENDERER_STYLES);
      }
      
      public set dataProvider(param1: DataProvider)
      {
         if(_dataProvider != null)
         {
            _dataProvider.removeEventListener(DataChangeEvent.DATA_CHANGE, this.handleDataChange.bind(this));
            _dataProvider.removeEventListener(DataChangeEvent.PRE_DATA_CHANGE, this.onPreChange.bind(this));
         }
         this._dataProvider = param1;
         this._dataProvider.addEventListener(DataChangeEvent.DATA_CHANGE, this.handleDataChange.bind(this));
         this._dataProvider.addEventListener(DataChangeEvent.PRE_DATA_CHANGE, this.onPreChange.bind(this));
         this.clearSelection();
         this.invalidateList();
      }
      
      public invalidateList(): void
      {
         this._invalidateList();
         invalidate(InvalidationType.DATA);
      }
      
      public replaceItemAt(param1: any, param2: number): any
      {
         return this._dataProvider.replaceItemAt(param1,param2);
      }
      
      public removeAll(): void
      {
         this._dataProvider.removeAll();
      }
      
      public set enabled(param1: boolean)
      {
         super.enabled = param1;
         this.list.mouseChildren = _enabled;
      }
      
      public scrollToIndex(param1: number): void
      {
      }
      
      public get selectedIndices(): any
      {
         return this._selectedIndices.concat();
      }
      
      protected drawLayout(): void
      {
         super.drawLayout();
         contentScrollRect = this.listHolder.scrollRect;
         (contentScrollRect as any).width = availableWidth;
         (contentScrollRect as any).height = availableHeight;
         this.listHolder.scrollRect = contentScrollRect;
      }
      
      protected _invalidateList(): void
      {
         this.availableCellRenderers = [];
         while(activeCellRenderers.length > 0)
         {
            this.list.removeChild(activeCellRenderers.pop()  as unknown as DisplayObject);
         }
      }
      
      public set selectedItem(param1: any)
      {
         var _loc2_: number = this._dataProvider.getItemIndex(param1);
         this.selectedIndex = _loc2_;
      }
      
      public getItemAt(param1: number): any
      {
         return this._dataProvider.getItemAt(param1);
      }
      
      protected handleCellRendererChange(param1: any): void
      {
         var _loc2_: ICellRenderer = param1.currentTarget  as unknown as ICellRenderer;
         var _loc3_: number = _loc2_.listData.index;
         this._dataProvider.invalidateItemAt(_loc3_);
      }
      
      protected moveSelectionVertically(param1: number, param2: boolean, param3: boolean): void
      {
      }
      
      public itemToLabel(param1: any): string
      {
         return param1["label"];
      }
      
      public addItemAt(param1: any, param2: number): void
      {
         this._dataProvider.addItemAt(param1,param2);
         this.invalidateList();
      }
      
      protected initializeAccessibility(): void
      {
         if(SelectableList.createAccessibilityImplementation != null)
         {
            SelectableList.createAccessibilityImplementation(this);
         }
      }
      
      protected updateRendererStyles(): void
      {
         var _loc4_: string = null as any;
         var _loc1_: any = this.availableCellRenderers.concat(this.activeCellRenderers);
         var _loc2_: number = _loc1_.length;
         var _loc3_: number = 0;
         while(_loc3_ < _loc2_)
         {
            if(_loc1_[_loc3_ as any].setStyle != null)
            {
               for (let _loc4_ in this.updatedRendererStyles)
               {
                  _loc1_[_loc3_ as any].setStyle(_loc4_,this.updatedRendererStyles[_loc4_ as any]);
               }
               _loc1_[_loc3_ as any].drawNow();
            }
            _loc3_++;
         }
         this.updatedRendererStyles = {};
      }
      
      public set selectable(param1: boolean)
      {
         if(param1 == this._selectable)
         {
            return;
         }
         if(!param1)
         {
            this.selectedIndices = [];
         }
         this._selectable = param1;
      }
      
      public removeItem(param1: any): any
      {
         return this._dataProvider.removeItem(param1);
      }
      
      public get dataProvider(): DataProvider
      {
         return this._dataProvider;
      }
      
      public set maxHorizontalScrollPosition(param1: number)
      {
         _maxHorizontalScrollPosition = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      public clearSelection(): void
      {
         this.selectedIndex = -1;
      }
      
      public invalidateItemAt(param1: number): void
      {
         var _loc2_: any = this._dataProvider.getItemAt(param1);
         if(_loc2_ != null)
         {
            this.invalidateItem(_loc2_);
         }
      }
      
      public sortItems(...rest: any[]): any
      {
         return this._dataProvider.sort.apply(_dataProvider,rest);
      }
      
      public set selectedItems(param1: any)
      {
         var _loc4_: number = 0;
         if(param1 == null)
         {
            this.selectedIndices = null as any;
            return;
         }
         var _loc2_: any = [];
         var _loc3_: number = 0;
         while(_loc3_ < param1.length)
         {
            _loc4_ = this._dataProvider.getItemIndex(param1[_loc3_ as any]);
            if(_loc4_ != -1)
            {
               _loc2_.push(_loc4_ as any);
            }
            _loc3_++;
         }
         this.selectedIndices = _loc2_;
      }
      
      protected setHorizontalScrollPosition(param1: number, param2: boolean = false): void
      {
         if(param1 == this._horizontalScrollPosition)
         {
            return;
         }
         var _loc3_: number = param1 - this._horizontalScrollPosition;
         this._horizontalScrollPosition = param1;
         if(param2)
         {
            this.dispatchEvent(new (ScrollEvent as any)(ScrollBarDirection.HORIZONTAL,_loc3_,param1));
         }
      }
      
      public get maxHorizontalScrollPosition(): number
      {
         return _maxHorizontalScrollPosition;
      }
      
      public scrollToSelected(): void
      {
         this.scrollToIndex(this.selectedIndex);
      }
      
      public get selectedItems(): any
      {
         var _loc1_: any = [];
         var _loc2_: number = 0;
         while(_loc2_ < this._selectedIndices.length)
         {
            _loc1_.push(this._dataProvider.getItemAt(this._selectedIndices[_loc2_ as any]) as any);
            _loc2_++;
         }
         return _loc1_;
      }
      
      public get length(): number
      {
         return this._dataProvider.length;
      }
      
      public invalidateItem(param1: any): void
      {
         if(renderedItems[param1 as any] == null)
         {
            return;
         }
         this.invalidItems[param1 as any] = true;
         invalidate(InvalidationType.DATA);
      }
      
      public set selectedIndex(param1: number)
      {
         this.selectedIndices = param1 == -1 ? null : [param1];
      }
      
      public get selectedIndex(): number
      {
         return this._selectedIndices.length == 0 ? -1 : int(this._selectedIndices[this._selectedIndices.length - 1 as any]);
      }
      
      public getRendererStyle(param1: string, param2: number = -1): any
      {
         return this.rendererStyles[param1 as any];
      }
      
      protected handleCellRendererClick(param1: any): void
      {
         var _loc5_: any = 0;
         var _loc6_: number = 0;
         if(!_enabled)
         {
            return;
         }
         var _loc2_: ICellRenderer = param1.currentTarget  as unknown as ICellRenderer;
         var _loc3_: number = _loc2_.listData.index;
         if(!this.dispatchEvent(new (ListEvent as any)(ListEvent.ITEM_CLICK,false,true,_loc2_.listData.column,_loc2_.listData.row,_loc3_,_loc2_.data)) || !this._selectable)
         {
            return;
         }
         var _loc4_: number = this.selectedIndices.indexOf(_loc3_);
         if(!this._allowMultipleSelection)
         {
            if(_loc4_ != -1)
            {
               return;
            }
            _loc2_.selected = true;
            this._selectedIndices = [_loc3_];
            this.lastCaretIndex = this.caretIndex = _loc3_;
         }
         else if(param1.shiftKey)
         {
            _loc6_ = this._selectedIndices.length > 0 ? uint(this._selectedIndices[0]) : _loc3_;
            this._selectedIndices = [];
            if(_loc6_ > _loc3_)
            {
               _loc5_ = int(_loc6_);
               while(_loc5_ >= _loc3_)
               {
                  this._selectedIndices.push(_loc5_ as any);
                  _loc5_--;
               }
            }
            else
            {
               _loc5_ = int(_loc6_);
               while(_loc5_ <= _loc3_)
               {
                  this._selectedIndices.push(_loc5_ as any);
                  _loc5_++;
               }
            }
            this.caretIndex = _loc3_;
         }
         else if(param1.ctrlKey)
         {
            if(_loc4_ != -1)
            {
               _loc2_.selected = false;
               this._selectedIndices.splice(_loc4_,1);
            }
            else
            {
               _loc2_.selected = true;
               this._selectedIndices.push(_loc3_ as any);
            }
            this.caretIndex = _loc3_;
         }
         else
         {
            this._selectedIndices = [_loc3_];
            this.lastCaretIndex = this.caretIndex = _loc3_;
         }
         this.dispatchEvent(new (Event as any)("change"));
         invalidate(InvalidationType.DATA);
      }
   }
