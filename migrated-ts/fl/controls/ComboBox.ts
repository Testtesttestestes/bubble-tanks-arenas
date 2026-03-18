// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

import { InvalidationType } from '../core/InvalidationType';
import { UIComponent } from '../core/UIComponent';
import { DataProvider } from '../data/DataProvider';
import { SimpleCollectionItem } from '../data/SimpleCollectionItem';
import { ComponentEvent } from '../events/ComponentEvent';
import { DataChangeEvent } from '../events/DataChangeEvent';
import { ListEvent } from '../events/ListEvent';
import { IFocusManagerComponent } from '../managers/IFocusManagerComponent';
import { BaseButton } from './BaseButton';
import { List } from './List';
import { ICellRenderer } from './listClasses/ICellRenderer';
import { TextInput } from './TextInput';

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
export class ComboBox extends UIComponent implements IFocusManagerComponent
   {
  [key: string]: any;
      
      public static createAccessibilityImplementation: Function;
      private static defaultStyles: any = {
         "upSkin":"ComboBox_upSkin",
         "downSkin":"ComboBox_downSkin",
         "overSkin":"ComboBox_overSkin",
         "disabledSkin":"ComboBox_disabledSkin",
         "focusRectSkin":null,
         "focusRectPadding":null,
         "textFormat":null,
         "disabledTextFormat":null,
         "textPadding":3,
         "buttonWidth":24,
         "disabledAlpha":null,
         "listSkin":null
      };
      protected static readonly LIST_STYLES: any = {
         "upSkin":"comboListUpSkin",
         "overSkin":"comboListOverSkin",
         "downSkin":"comobListDownSkin",
         "disabledSkin":"comboListDisabledSkin",
         "downArrowDisabledSkin":"downArrowDisabledSkin",
         "downArrowDownSkin":"downArrowDownSkin",
         "downArrowOverSkin":"downArrowOverSkin",
         "downArrowUpSkin":"downArrowUpSkin",
         "upArrowDisabledSkin":"upArrowDisabledSkin",
         "upArrowDownSkin":"upArrowDownSkin",
         "upArrowOverSkin":"upArrowOverSkin",
         "upArrowUpSkin":"upArrowUpSkin",
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
         "repeatInterval":"repeatInterval",
         "textFormat":"textFormat",
         "disabledAlpha":"disabledAlpha",
         "skin":"listSkin"
      };
      protected static readonly BACKGROUND_STYLES: any = {
         "overSkin":"overSkin",
         "downSkin":"downSkin",
         "upSkin":"upSkin",
         "disabledSkin":"disabledSkin",
         "repeatInterval":"repeatInterval"
      };
      protected isKeyDown: boolean = false;
      protected _labels!: any;
      protected background!: BaseButton;
      protected _dropdownWidth!: number;
      protected inputField!: TextInput;
      protected highlightedCell: number = -1;
      protected listOverIndex!: number;
      protected editableValue!: string;
      protected _prompt!: string;
      protected isOpen: boolean = false;
      protected list!: List;
      protected _rowCount: number = 5;
      protected _editable: boolean = false;
      private collectionItemImport!: SimpleCollectionItem;
      protected currentIndex!: number;
      constructor(){
         // @ts-ignore
         super();
      }
      
      public static getStyleDefinition(): any
      {
         return mergeStyles(defaultStyles,List.getStyleDefinition());
      }
      
      protected drawList(): void
      {
         this.list.rowCount = Math.max(0,Math.min(_rowCount,this.list.dataProvider.length));
      }
      
      public get imeMode(): string
      {
         return this.inputField.imeMode;
      }
      
      protected onInputFieldFocusOut(param1: any): void
      {
         this.inputField.removeEventListener(ComponentEvent.ENTER, this.onEnter.bind(this));
         this.selectedIndex = this.selectedIndex;
      }
      
      public set imeMode(param1: string)
      {
         this.inputField.imeMode = param1;
      }
      
      protected passEvent(param1: any): void
      {
         this.dispatchEvent(param1);
      }
      
      protected calculateAvailableHeight(): number
      {
         var _loc1_: number = Number(getStyleValue("contentPadding"));
         return this.list.height - _loc1_ * 2;
      }
      
      public get dropdown(): List
      {
         return this.list;
      }
      
      protected focusOutHandler(param1: any): void
      {
         this.isKeyDown = false;
         if(isOpen)
         {
            if(!param1.relatedObject || !this.list.contains(param1.relatedObject))
            {
               if(highlightedCell != -1 && highlightedCell != this.selectedIndex)
               {
                  this.selectedIndex = highlightedCell;
                  this.dispatchEvent(new (Event as any)("change"));
               }
               this.close();
            }
         }
         super.focusOutHandler(param1);
      }
      
      public get selectedLabel(): string
      {
         if(editableValue != null)
         {
            return editableValue;
         }
         if(selectedIndex == -1)
         {
            return null;
         }
         return this.itemToLabel(this.selectedItem);
      }
      
      protected onListChange(param1: any): void
      {
         this.editableValue = null as any;
         this.dispatchEvent(param1);
         invalidate(InvalidationType.SELECTED);
         if(isKeyDown)
         {
            return;
         }
         this.close();
      }
      
      public get text(): string
      {
         return this.inputField.text;
      }
      
      protected onEnter(param1: ComponentEvent): void
      {
         param1.stopPropagation();
      }
      
      public sortItemsOn(param1: string, param2: any = null): any
      {
         return this.list.sortItemsOn(param1,param2);
      }
      
      protected handleDataChange(param1: DataChangeEvent): void
      {
         invalidate(InvalidationType.DATA);
      }
      
      protected onToggleListVisibility(param1: any): void
      {
         param1.stopPropagation();
         this.dispatchEvent(param1);
         if(isOpen)
         {
            this.close();
         }
         else
         {
            this.open();
            stage.addEventListener("mouseup", this.onListItemUp.bind(this));
         }
      }
      
      public get dropdownWidth(): number
      {
         return this.list.width;
      }
      
      protected highlightCell(param1: number = -1): void
      {
         var _loc2_: ICellRenderer = null as any;
         if(highlightedCell > -1)
         {
            _loc2_ = this.list.itemToCellRenderer(this.getItemAt(highlightedCell));
            if(_loc2_ != null)
            {
               _loc2_.setMouseState("up");
            }
         }
         if(param1 == -1)
         {
            return;
         }
         this.list.scrollToIndex(param1);
         this.list.drawNow();
         _loc2_ = this.list.itemToCellRenderer(this.getItemAt(param1));
         if(_loc2_ != null)
         {
            _loc2_.setMouseState("over");
            this.highlightedCell = param1;
         }
      }
      
      public removeItemAt(param1: number): void
      {
         this.list.removeItemAt(param1);
         invalidate(InvalidationType.DATA);
      }
      
      protected draw(): void
      {
         var _loc1_: any = this.selectedIndex;
         if(_loc1_ == -1 && (this.prompt != null || this.editable || this.length == 0))
         {
            _loc1_ = Math.max(-1,Math.min(_loc1_,this.length - 1));
         }
         else
         {
            this.editableValue = null as any;
            _loc1_ = Math.max(0,Math.min(_loc1_,this.length - 1));
         }
         if(list.selectedIndex != _loc1_)
         {
            list.selectedIndex = _loc1_;
            invalidate(InvalidationType.SELECTED,false);
         }
         if(isInvalid(InvalidationType.STYLES))
         {
            this.setStyles();
            this.setEmbedFonts();
            invalidate(InvalidationType.SIZE,false);
         }
         if(isInvalid(InvalidationType.SIZE,InvalidationType.DATA,InvalidationType.STATE))
         {
            this.drawTextFormat();
            this.drawLayout();
            invalidate(InvalidationType.DATA);
         }
         if(isInvalid(InvalidationType.DATA))
         {
            this.drawList();
            invalidate(InvalidationType.SELECTED,true);
         }
         if(isInvalid(InvalidationType.SELECTED))
         {
            if(_loc1_ == -1 && this.editableValue != null)
            {
               this.inputField.text = this.editableValue;
            }
            else if(_loc1_ > -1)
            {
               if(length > 0)
               {
                  this.inputField.horizontalScrollPosition = 0;
                  this.inputField.text = this.itemToLabel(this.list.selectedItem);
               }
            }
            else if(_loc1_ == -1 && this._prompt != null)
            {
               this.showPrompt();
            }
            else
            {
               this.inputField.text = "";
            }
            if(editable && this.selectedIndex > -1 && stage.focus == this.inputField.textField)
            {
               this.inputField.setSelection(0,this.inputField.length);
            }
         }
         this.drawTextField();
         super.draw();
      }
      
      public get selectedItem(): any
      {
         return this.list.selectedItem;
      }
      
      public open(): void
      {
         this.currentIndex = this.selectedIndex;
         if(isOpen || this.length == 0)
         {
            return;
         }
         this.dispatchEvent(new (Event as any)(Event.OPEN));
         this.isOpen = true;
         this.addEventListener("enterframe", this.addCloseListener.bind(this));
         this.positionList();
         this.list.scrollToSelected();
         stage.addChild(this.list);
      }
      
      protected configUI(): void
      {
         super.configUI();
         this.background = new (BaseButton as any)();
         this.background.focusEnabled = false;
         copyStylesToChild(background,ComboBox.BACKGROUND_STYLES);
         this.background.addEventListener("mousedown", this.onToggleListVisibility.bind(this));
         this.addChild(this.background);
         this.inputField = new (TextInput as any)();
         this.inputField.focusTarget = this  as unknown as IFocusManagerComponent;
         this.inputField.focusEnabled = false;
         this.inputField.addEventListener("change", this.onTextInput.bind(this));
         this.addChild(this.inputField);
         this.list = new (List as any)();
         this.list.focusEnabled = false;
         copyStylesToChild(list,ComboBox.LIST_STYLES);
         this.list.addEventListener("change", this.onListChange.bind(this));
         this.list.addEventListener(ListEvent.ITEM_CLICK, this.onListChange.bind(this));
         this.list.addEventListener(ListEvent.ITEM_ROLL_OUT, this.passEvent.bind(this));
         this.list.addEventListener(ListEvent.ITEM_ROLL_OVER, this.passEvent.bind(this));
         this.list.verticalScrollBar.addEventListener(Event.SCROLL, this.passEvent.bind(this));
      }
      
      public set text(param1: string)
      {
         if(!this.editable)
         {
            return;
         }
         this.inputField.text = param1;
      }
      
      public addItem(param1: any): void
      {
         this.list.addItem(param1);
         invalidate(InvalidationType.DATA);
      }
      
      public get editable(): boolean
      {
         return this._editable;
      }
      
      public get labelField(): string
      {
         return this.list.labelField;
      }
      
      protected positionList(): void
      {
         var _loc1_: Point = this.localToGlobal(new (Point as any)(0,0));
         (this.list as any).x = _loc1_.x;
         if(_loc1_.y + height + this.list.height > stage.stageHeight)
         {
            (this.list as any).y = _loc1_.y - this.list.height;
         }
         else
         {
            (this.list as any).y = _loc1_.y + height;
         }
      }
      
      protected onStageClick(param1: any): void
      {
         if(!this.isOpen)
         {
            return;
         }
         if(!this.contains(param1.target  as unknown as DisplayObject) && !this.list.contains(param1.target  as unknown as DisplayObject))
         {
            if(highlightedCell != -1)
            {
               this.selectedIndex = highlightedCell;
               this.dispatchEvent(new (Event as any)("change"));
            }
            this.close();
         }
      }
      
      public set dropdownWidth(param1: number)
      {
         this._dropdownWidth = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      public get prompt(): string
      {
         return this._prompt;
      }
      
      protected keyDownHandler(param1: any): void
      {
         this.isKeyDown = true;
         if(param1.ctrlKey)
         {
            switch(param1.keyCode)
            {
               case Keyboard.UP:
                  if(highlightedCell > -1)
                  {
                     this.selectedIndex = highlightedCell;
                     this.dispatchEvent(new (Event as any)("change"));
                  }
                  this.close();
                  break;
               case Keyboard.DOWN:
                  this.open();
            }
            return;
         }
         param1.stopPropagation();
         var _loc2_: number = Math.max(this.calculateAvailableHeight() / this.list.rowHeight << 0,1);
         var _loc3_: number = uint(this.selectedIndex);
         var _loc4_: number = this.highlightedCell == -1 ? selectedIndex : this.highlightedCell;
         var _loc5_: number = -1;
         switch(param1.keyCode)
         {
            case Keyboard.SPACE:
               if(isOpen)
               {
                  this.close();
               }
               else
               {
                  this.open();
               }
               return;
            case Keyboard.ESCAPE:
               if(isOpen)
               {
                  if(highlightedCell > -1)
                  {
                     this.selectedIndex = this.selectedIndex;
                  }
                  this.close();
               }
               return;
            case Keyboard.UP:
               _loc5_ = Math.max(0,_loc4_ - 1);
               break;
            case Keyboard.DOWN:
               _loc5_ = Math.min(this.length - 1,_loc4_ + 1);
               break;
            case Keyboard.PAGE_UP:
               _loc5_ = Math.max(_loc4_ - _loc2_,0);
               break;
            case Keyboard.PAGE_DOWN:
               _loc5_ = Math.min(_loc4_ + _loc2_,this.length - 1);
               break;
            case Keyboard.HOME:
               _loc5_ = 0;
               break;
            case Keyboard.END:
               _loc5_ = this.length - 1;
               break;
            case Keyboard.ENTER:
               if(_editable && this.highlightedCell == -1)
               {
                  this.editableValue = this.inputField.text;
                  this.selectedIndex = -1;
               }
               else if(this.isOpen && this.highlightedCell > -1)
               {
                  this.editableValue = null as any;
                  this.selectedIndex = this.highlightedCell;
                  this.dispatchEvent(new (Event as any)("change"));
               }
               this.dispatchEvent(new (ComponentEvent as any)(ComponentEvent.ENTER));
               this.close();
               return;
            default:
               if(editable)
               {
                  break;
               }
               _loc5_ = this.list.getNextIndexAtLetter(String.fromCharCode(param1.keyCode),_loc4_);
         }
         if(_loc5_ > -1)
         {
            if(isOpen)
            {
               this.highlightCell(_loc5_);
               this.inputField.text = this.list.itemToLabel(this.getItemAt(_loc5_));
            }
            else
            {
               this.highlightCell();
               this.selectedIndex = _loc5_;
               this.dispatchEvent(new (Event as any)("change"));
            }
         }
      }
      
      public get value(): string
      {
         var _loc1_: any = null as any;
         if(editableValue != null)
         {
            return editableValue;
         }
         _loc1_ = this.selectedItem;
         if(!this._editable && _loc1_.data != null)
         {
            return _loc1_.data;
         }
         return this.itemToLabel(_loc1_);
      }
      
      protected focusInHandler(param1: any): void
      {
         super.focusInHandler(param1);
         if(editable)
         {
            stage.focus = this.inputField.textField;
         }
      }
      
      public set dataProvider(param1: DataProvider)
      {
         param1.addEventListener(DataChangeEvent.DATA_CHANGE, this.handleDataChange.bind(this));
         this.list.dataProvider = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public get rowCount(): number
      {
         return this._rowCount;
      }
      
      public set restrict(param1: string)
      {
         if(componentInspectorSetting && param1 == "")
         {
            param1 = null as any;
         }
         if(!this._editable)
         {
            return;
         }
         this.inputField.restrict = param1;
      }
      
      public replaceItemAt(param1: any, param2: number): any
      {
         return this.list.replaceItemAt(param1,param2);
      }
      
      public removeAll(): void
      {
         this.list.removeAll();
         this.inputField.text = "";
         invalidate(InvalidationType.DATA);
      }
      
      protected onTextInput(param1: any): void
      {
         param1.stopPropagation();
         if(!this._editable)
         {
            return;
         }
         this.editableValue = this.inputField.text;
         this.selectedIndex = -1;
         this.dispatchEvent(new (Event as any)("change"));
      }
      
      protected onInputFieldFocus(param1: any): void
      {
         this.inputField.addEventListener(ComponentEvent.ENTER, this.onEnter.bind(this));
         this.close();
      }
      
      protected onListItemUp(param1: any): void
      {
         stage.removeEventListener("mouseup", this.onListItemUp.bind(this));
         if(!(param1.target != null /* instanceof ICellRenderer */) || !this.list.contains(param1.target  as unknown as DisplayObject))
         {
            return;
         }
         this.editableValue = null as any;
         var _loc2_: any = this.selectedIndex;
         this.selectedIndex = param1.target.listData.index;
         if(_loc2_ != this.selectedIndex)
         {
            this.dispatchEvent(new (Event as any)("change"));
         }
         this.close();
      }
      
      protected keyUpHandler(param1: any): void
      {
         this.isKeyDown = false;
      }
      
      protected drawLayout(): void
      {
         var _loc1_: number = getStyleValue("buttonWidth")  as unknown as number;
         var _loc2_: number = getStyleValue("textPadding")  as unknown as number;
         this.background.setSize(width,height);
         (this.inputField as any).x = (this.inputField as any).y = _loc2_;
         this.inputField.setSize(width - _loc1_ - _loc2_,height - _loc2_);
         (this.list as any).width = isNaN(this._dropdownWidth) ? width : this._dropdownWidth;
         this.background.enabled = enabled;
         this.background.drawNow();
      }
      
      public set selectedItem(param1: any)
      {
         this.list.selectedItem = param1;
         invalidate(InvalidationType.SELECTED);
      }
      
      public getItemAt(param1: number): any
      {
         return this.list.getItemAt(param1);
      }
      
      protected initializeAccessibility(): void
      {
         if(ComboBox.createAccessibilityImplementation != null)
         {
            ComboBox.createAccessibilityImplementation(this);
         }
      }
      
      public itemToLabel(param1: any): string
      {
         if(param1 == null)
         {
            return "";
         }
         return this.list.itemToLabel(param1);
      }
      
      public addItemAt(param1: any, param2: number): void
      {
         this.list.addItemAt(param1,param2);
         invalidate(InvalidationType.DATA);
      }
      
      private addCloseListener(param1: any): any
      {
         this.removeEventListener("enterframe", this.addCloseListener.bind(this));
         if(!this.isOpen)
         {
            return;
         }
         stage.addEventListener("mousedown", this.onStageClick.bind(this));
      }
      
      protected setEmbedFonts(): void
      {
         var _loc1_: any = getStyleValue("embedFonts");
         if(_loc1_ != null)
         {
            this.inputField.textField.embedFonts = _loc1_;
         }
      }
      
      public set rowCount(param1: number)
      {
         this._rowCount = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      public removeItem(param1: any): any
      {
         return this.list.removeItem(param1);
      }
      
      public get dataProvider(): DataProvider
      {
         return this.list.dataProvider;
      }
      
      public get restrict(): string
      {
         return this.inputField.restrict;
      }
      
      protected showPrompt(): void
      {
         this.inputField.text = this._prompt;
      }
      
      public sortItems(...rest: any[]): any
      {
         return this.list.sortItems.apply(list,rest);
      }
      
      public set editable(param1: boolean)
      {
         this._editable = param1;
         this.drawTextField();
      }
      
      public set labelField(param1: string)
      {
         this.list.labelField = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public get textField(): TextInput
      {
         return this.inputField;
      }
      
      public set prompt(param1: string)
      {
         if(param1 == "")
         {
            this._prompt = null as any;
         }
         else
         {
            this._prompt = param1;
         }
         invalidate(InvalidationType.STATE);
      }
      
      public set labelFunction(param1: Function)
      {
         this.list.labelFunction = param1;
         invalidate(InvalidationType.DATA);
      }
      
      protected setStyles(): void
      {
         copyStylesToChild(background,ComboBox.BACKGROUND_STYLES);
         copyStylesToChild(list,ComboBox.LIST_STYLES);
      }
      
      public get length(): number
      {
         return this.list.length;
      }
      
      protected drawTextFormat(): void
      {
         var _loc1_: TextFormat = getStyleValue(_enabled ? "textFormat" : "disabledTextFormat")  as unknown as TextFormat;
         if(_loc1_ == null)
         {
            _loc1_ = new (TextFormat as any)();
         }
         this.inputField.textField.defaultTextFormat = _loc1_;
         this.inputField.textField.setTextFormat(_loc1_);
         this.setEmbedFonts();
      }
      
      protected drawTextField(): void
      {
         this.inputField.setStyle("upSkin","");
         this.inputField.setStyle("disabledSkin","");
         this.inputField.enabled = enabled;
         this.inputField.editable = this._editable;
         this.inputField.textField.selectable = enabled && this._editable;
         this.inputField.mouseEnabled = this.inputField.mouseChildren = enabled && this._editable;
         this.inputField.focusEnabled = false;
         if(_editable)
         {
            this.inputField.addEventListener("focusin", this.onInputFieldFocus.bind(this));
            this.inputField.addEventListener("focusout", this.onInputFieldFocusOut.bind(this));
         }
         else
         {
            this.inputField.removeEventListener("focusin", this.onInputFieldFocus.bind(this));
            this.inputField.removeEventListener("focusout", this.onInputFieldFocusOut.bind(this));
         }
      }
      
      public get labelFunction(): Function
      {
         return this.list.labelFunction;
      }
      
      public set selectedIndex(param1: number)
      {
         this.list.selectedIndex = param1;
         this.highlightCell();
         invalidate(InvalidationType.SELECTED);
      }
      
      public get selectedIndex(): number
      {
         return this.list.selectedIndex;
      }
      
      public close(): void
      {
         this.highlightCell();
         this.highlightedCell = -1;
         if(!this.isOpen)
         {
            return;
         }
         this.dispatchEvent(new (Event as any)(Event.CLOSE));
         stage.removeEventListener("mousedown", this.onStageClick.bind(this));
         this.isOpen = false;
         stage.removeChild(this.list);
      }
   }
