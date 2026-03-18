// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

import { InvalidationType } from '../core/InvalidationType';
import { UIComponent } from '../core/UIComponent';
import { ComponentEvent } from '../events/ComponentEvent';
import { IFocusManager } from '../managers/IFocusManager';
import { IFocusManagerComponent } from '../managers/IFocusManagerComponent';

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
export class TextInput extends UIComponent implements IFocusManagerComponent
   {
  [key: string]: any;
      
      public static createAccessibilityImplementation: Function;
      private static defaultStyles: any = {
         "upSkin":"TextInput_upSkin",
         "disabledSkin":"TextInput_disabledSkin",
         "focusRectSkin":null,
         "focusRectPadding":null,
         "textFormat":null,
         "disabledTextFormat":null,
         "textPadding":0,
         "embedFonts":false
      };
      protected _html: boolean = false;
      protected background!: DisplayObject;
      protected _savedHTML!: string;
      protected _editable: boolean = true;
      public textField!: TextField;
      constructor(){
         // @ts-ignore
         super();
      }
      
      public static getStyleDefinition(): any
      {
         return TextInput.defaultStyles;
      }
      
      public set alwaysShowSelection(param1: boolean)
      {
         this.textField.alwaysShowSelection = param1;
      }
      
      public set enabled(param1: boolean)
      {
         super.enabled = param1;
         this.updateTextFieldType();
      }
      
      public get imeMode(): string
      {
         return _imeMode;
      }
      
      protected handleChange(param1: any): void
      {
         param1.stopPropagation();
         this.dispatchEvent(new (Event as any)("change",true));
      }
      
      public set imeMode(param1: string)
      {
         _imeMode = param1;
      }
      
      protected setEmbedFont(): any
      {
         var _loc1_: any = getStyleValue("embedFonts");
         if(_loc1_ != null)
         {
            this.textField.embedFonts = _loc1_;
         }
      }
      
      protected drawLayout(): void
      {
         var _loc1_: number = Number(getStyleValue("textPadding"));
         if(background != null)
         {
            (background as any).width = width;
            (background as any).height = height;
         }
         (this.textField as any).width = width - 2 * _loc1_;
         (this.textField as any).height = height - 2 * _loc1_;
         (this.textField as any).x = (this.textField as any).y = _loc1_;
      }
      
      public set condenseWhite(param1: boolean)
      {
         this.textField.condenseWhite = param1;
      }
      
      public get textWidth(): number
      {
         return this.textField.textWidth;
      }
      
      protected focusOutHandler(param1: any): void
      {
         super.focusOutHandler(param1);
         if(editable)
         {
            setIMEMode(false);
         }
      }
      
      public setFocus(): void
      {
         stage.focus = this.textField;
      }
      
      public set displayAsPassword(param1: boolean)
      {
         this.textField.displayAsPassword = param1;
      }
      
      protected drawBackground(): void
      {
         var _loc1_: DisplayObject = this.background;
         var _loc2_: string = this.enabled ? "upSkin" : "disabledSkin";
         this.background = getDisplayObjectInstance(getStyleValue(_loc2_));
         if(background == null)
         {
            return;
         }
         this.addChildAt(background,0);
         if(_loc1_ != null && _loc1_ != this.background && this.contains(_loc1_))
         {
            this.removeChild(_loc1_);
         }
      }
      
      public get text(): string
      {
         return this.textField.text;
      }
      
      public set maxChars(param1: number)
      {
         this.textField.maxChars = param1;
      }
      
      public set horizontalScrollPosition(param1: number)
      {
         this.textField.scrollH = param1;
      }
      
      protected isOurFocus(param1: DisplayObject): boolean
      {
         return param1 == this.textField || Boolean(super.isOurFocus(param1));
      }
      
      public get textHeight(): number
      {
         return this.textField.textHeight;
      }
      
      public get restrict(): string
      {
         return this.textField.restrict;
      }
      
      public get alwaysShowSelection(): boolean
      {
         return this.textField.alwaysShowSelection;
      }
      
      public get enabled(): boolean
      {
         return super.enabled;
      }
      
      protected draw(): void
      {
         var _loc1_: any = null as any;
         if(isInvalid(InvalidationType.STYLES,InvalidationType.STATE))
         {
            this.drawTextFormat();
            this.drawBackground();
            _loc1_ = getStyleValue("embedFonts");
            if(_loc1_ != null)
            {
               this.textField.embedFonts = _loc1_;
            }
            invalidate(InvalidationType.SIZE,false);
         }
         if(isInvalid(InvalidationType.SIZE))
         {
            this.drawLayout();
         }
         super.draw();
      }
      
      public set editable(param1: boolean)
      {
         this._editable = param1;
         this.updateTextFieldType();
      }
      
      public setSelection(param1: number, param2: number): void
      {
         this.textField.setSelection(param1,param2);
      }
      
      public get condenseWhite(): boolean
      {
         return this.textField.condenseWhite;
      }
      
      public get displayAsPassword(): boolean
      {
         return this.textField.displayAsPassword;
      }
      
      public get selectionBeginIndex(): number
      {
         return this.textField.selectionBeginIndex;
      }
      
      protected configUI(): void
      {
         super.configUI();
         tabChildren = true;
         this.textField = new (TextField as any)();
         this.addChild(this.textField);
         this.updateTextFieldType();
         this.textField.addEventListener("textInput", this.handleTextInput.bind(this));
         this.textField.addEventListener("change", this.handleChange.bind(this));
         this.textField.addEventListener("keydown", this.handleKeyDown.bind(this));
      }
      
      public get maxChars(): number
      {
         return this.textField.maxChars;
      }
      
      public set text(param1: string)
      {
         this.textField.text = param1;
         this._html = false;
         invalidate(InvalidationType.DATA);
         invalidate(InvalidationType.STYLES);
      }
      
      protected updateTextFieldType(): void
      {
         this.textField.type = this.enabled && this.editable ? TextFieldType.INPUT : TextFieldType.DYNAMIC;
         this.textField.selectable = this.enabled;
      }
      
      protected handleKeyDown(param1: any): void
      {
         if(param1.keyCode == Keyboard.ENTER)
         {
            this.dispatchEvent(new (ComponentEvent as any)(ComponentEvent.ENTER,true));
         }
      }
      
      public get horizontalScrollPosition(): number
      {
         return this.textField.scrollH;
      }
      
      public get selectionEndIndex(): number
      {
         return this.textField.selectionEndIndex;
      }
      
      public get editable(): boolean
      {
         return this._editable;
      }
      
      public get maxHorizontalScrollPosition(): number
      {
         return this.textField.maxScrollH;
      }
      
      public appendText(param1: string): void
      {
         this.textField.appendText(param1);
      }
      
      protected drawTextFormat(): void
      {
         var _loc1_: any = UIComponent.getStyleDefinition();
         var _loc2_: TextFormat = this.enabled ? _loc1_.defaultTextFormat  as unknown as TextFormat : _loc1_.defaultDisabledTextFormat  as unknown as TextFormat;
         this.textField.setTextFormat(_loc2_);
         var _loc3_: TextFormat = getStyleValue(this.enabled ? "textFormat" : "disabledTextFormat")  as unknown as TextFormat;
         if(_loc3_ != null)
         {
            this.textField.setTextFormat(_loc3_);
         }
         else
         {
            _loc3_ = _loc2_;
         }
         this.textField.defaultTextFormat = _loc3_;
         this.setEmbedFont();
         if(_html)
         {
            this.textField.htmlText = this._savedHTML;
         }
      }
      
      public get length(): number
      {
         return this.textField.length;
      }
      
      public set htmlText(param1: string)
      {
         if(param1 == "")
         {
            this.text = "";
            return;
         }
         this._html = true;
         this._savedHTML = param1;
         this.textField.htmlText = param1;
         invalidate(InvalidationType.DATA);
         invalidate(InvalidationType.STYLES);
      }
      
      protected handleTextInput(param1: any): void
      {
         param1.stopPropagation();
         this.dispatchEvent(new (TextEvent as any)("textInput",true,false,param1.text));
      }
      
      public set restrict(param1: string)
      {
         if(componentInspectorSetting && param1 == "")
         {
            param1 = null as any;
         }
         this.textField.restrict = param1;
      }
      
      public getLineMetrics(param1: number): TextLineMetrics
      {
         return this.textField.getLineMetrics(param1);
      }
      
      public drawFocus(param1: boolean): void
      {
         if(focusTarget != null)
         {
            focusTarget.drawFocus(param1);
            return;
         }
         super.drawFocus(param1);
      }
      
      protected focusInHandler(param1: any): void
      {
         if(param1.target == this)
         {
            stage.focus = this.textField;
         }
         var _loc2_: IFocusManager = focusManager;
         if(this.editable && Boolean(_loc2_))
         {
            _loc2_.showFocusIndicator = true;
            if(textField.selectable && textField.selectionBeginIndex == textField.selectionBeginIndex)
            {
               this.setSelection(0,textField.length);
            }
         }
         super.focusInHandler(param1);
         if(editable)
         {
            setIMEMode(true);
         }
      }
      
      public get htmlText(): string
      {
         return this.textField.htmlText;
      }
   }
