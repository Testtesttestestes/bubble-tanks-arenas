// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.controls

import { InvalidationType } from '../core/InvalidationType';
import { UIComponent } from '../core/UIComponent';
import { ComponentEvent } from '../events/ComponentEvent';
import { IFocusManagerComponent } from '../managers/IFocusManagerComponent';
import { BaseButton } from './BaseButton';
import { ButtonLabelPlacement } from './ButtonLabelPlacement';

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












   export class LabelButton extends BaseButton implements IFocusManagerComponent
   {
  [key: string]: any;
      
      public static createAccessibilityImplementation: Function;
      private static defaultStyles: any = {
         "icon":null,
         "upIcon":null,
         "downIcon":null,
         "overIcon":null,
         "disabledIcon":null,
         "selectedDisabledIcon":null,
         "selectedUpIcon":null,
         "selectedDownIcon":null,
         "selectedOverIcon":null,
         "textFormat":null,
         "disabledTextFormat":null,
         "textPadding":5,
         "embedFonts":false
      };
      protected _toggle: boolean = false;
      public textField!: TextField;
      protected mode: string = "center";
      protected _labelPlacement: string = "right";
      protected oldMouseState!: string;
      protected _label: string = "Label";
      protected icon!: DisplayObject;
      constructor(){
         // @ts-ignore
         super();
      }
      
      public static getStyleDefinition(): any
      {
         return mergeStyles(defaultStyles,BaseButton.getStyleDefinition());
      }
      
      protected draw(): void
      {
         if(textField.text != this._label)
         {
            this.label = this._label;
         }
         if(isInvalid(InvalidationType.STYLES,InvalidationType.STATE))
         {
            drawBackground();
            this.drawIcon();
            this.drawTextFormat();
            invalidate(InvalidationType.SIZE,false);
         }
         if(isInvalid(InvalidationType.SIZE))
         {
            this.drawLayout();
         }
         if(isInvalid(InvalidationType.SIZE,InvalidationType.STYLES))
         {
            if(isFocused && focusManager.showFocusIndicator)
            {
               drawFocus(true);
            }
         }
         validate();
      }
      
      protected drawLayout(): void
      {
         var _loc7_: number = NaN;
         var _loc8_: number = NaN;
         var _loc1_: number = Number(getStyleValue("textPadding"));
         var _loc2_: string = null as any;
         (this.textField as any).height = this.textField.textHeight + 4;
         var _loc3_: number = this.textField.textWidth + 4;
         var _loc4_: number = this.textField.textHeight + 4;
         var _loc5_: number = null as any;
         var _loc6_: number = null as any;
         (this.textField as any).visible = this.label.length > 0;
         if(icon != null)
         {
            (icon as any).x = Math.round((width - icon.width) / 2);
            (icon as any).y = Math.round((height - icon.height) / 2);
         }
         if((this.textField as any).visible = = false)
         {
            (this.textField as any).width = 0;
            (this.textField as any).height = 0;
         }
         else if(_loc2_ == ButtonLabelPlacement.BOTTOM || _loc2_ == ButtonLabelPlacement.TOP)
         {
            _loc7_ = Math.max(0,Math.min(_loc3_,width - 2 * _loc1_));
            if(height - 2 > _loc4_)
            {
               _loc8_ = _loc4_;
            }
            else
            {
               _loc8_ = height - 2;
            }
            (this.textField as any).width = _loc3_ = _loc7_;
            (this.textField as any).height = _loc4_ = _loc8_;
            (this.textField as any).x = Math.round((width - _loc3_) / 2);
            (this.textField as any).y = Math.round((height - this.textField.height - _loc6_) / 2 + (_loc2_ == ButtonLabelPlacement.BOTTOM ? _loc6_ : 0));
            if(icon != null)
            {
               (icon as any).y = Math.round(_loc2_ == ButtonLabelPlacement.BOTTOM ? this.textField.y - _loc6_ : this.textField.y + this.textField.height + _loc1_);
            }
         }
         else
         {
            _loc7_ = Math.max(0,Math.min(_loc3_,width - _loc5_ - 2 * _loc1_));
            (this.textField as any).width = _loc3_ = _loc7_;
            (this.textField as any).x = Math.round((width - _loc3_ - _loc5_) / 2 + (_loc2_ != ButtonLabelPlacement.LEFT ? _loc5_ : 0));
            (this.textField as any).y = Math.round((height - this.textField.height) / 2);
            if(icon != null)
            {
               (icon as any).x = Math.round(_loc2_ != ButtonLabelPlacement.LEFT ? this.textField.x - _loc5_ : this.textField.x + _loc3_ + _loc1_);
            }
         }
         super.drawLayout();
      }
      
      protected toggleSelected(param1: any): void
      {
         this.selected = !this.selected;
         this.dispatchEvent(new (Event as any)("change",true));
      }
      
      protected keyUpHandler(param1: any): void
      {
         if(!enabled)
         {
            return;
         }
         if(param1.keyCode == Keyboard.SPACE)
         {
            setMouseState(this.oldMouseState);
            this.oldMouseState = null as any;
            endPress();
            this.dispatchEvent(new (MouseEvent as any)("click"));
         }
      }
      
      public get labelPlacement(): string
      {
         return this._labelPlacement;
      }
      
      public get toggle(): boolean
      {
         return this._toggle;
      }
      
      protected setEmbedFont(): any
      {
         var _loc1_: any = getStyleValue("embedFonts");
         if(_loc1_ != null)
         {
            this.textField.embedFonts = _loc1_;
         }
      }
      
      public get selected(): boolean
      {
         return this._toggle ? _selected : false;
      }
      
      protected configUI(): void
      {
         super.configUI();
         this.textField = new (TextField as any)();
         this.textField.type = TextFieldType.DYNAMIC;
         this.textField.selectable = false;
         this.addChild(this.textField);
      }
      
      protected initializeAccessibility(): void
      {
         if(LabelButton.createAccessibilityImplementation != null)
         {
            LabelButton.createAccessibilityImplementation(this);
         }
      }
      
      public set labelPlacement(param1: string)
      {
         this._labelPlacement = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      protected drawIcon(): void
      {
         var _loc1_: DisplayObject = this.icon;
         var _loc2_: string = enabled ? mouseState : "disabled";
         if(selected)
         {
            _loc2_ = "selected" + _loc2_.substr(0,1).toUpperCase() + _loc2_.substr(1);
         }
         _loc2_ += "Icon";
         var _loc3_: any = getStyleValue(_loc2_);
         if(_loc3_ == null)
         {
            _loc3_ = getStyleValue("icon");
         }
         if(_loc3_ != null)
         {
            this.icon = getDisplayObjectInstance(_loc3_);
         }
         if(icon != null)
         {
            this.addChildAt(icon,1);
         }
         if(_loc1_ != null && _loc1_ != this.icon)
         {
            this.removeChild(_loc1_);
         }
      }
      
      public set label(param1: string)
      {
         this._label = param1;
         if(textField.text != this._label)
         {
            textField.text = this._label;
            this.dispatchEvent(new (ComponentEvent as any)(ComponentEvent.LABEL_CHANGE));
         }
         invalidate(InvalidationType.SIZE);
         invalidate(InvalidationType.STYLES);
      }
      
      protected keyDownHandler(param1: any): void
      {
         if(!enabled)
         {
            return;
         }
         if(param1.keyCode == Keyboard.SPACE)
         {
            if(oldMouseState == null)
            {
               oldMouseState = mouseState;
            }
            setMouseState("down");
            startPress();
         }
      }
      
      public set toggle(param1: boolean)
      {
         if(!param1 && super.selected)
         {
            this.selected = false;
         }
         this._toggle = param1;
         if(_toggle)
         {
            this.addEventListener("click", this.toggleSelected.bind(this));
         }
         else
         {
            this.removeEventListener("click", this.toggleSelected.bind(this));
         }
         invalidate(InvalidationType.STATE);
      }
      
      public set selected(param1: boolean)
      {
         _selected = param1;
         if(_toggle)
         {
            invalidate(InvalidationType.STATE);
         }
      }
      
      protected drawTextFormat(): void
      {
         var _loc1_: any = UIComponent.getStyleDefinition();
         var _loc2_: TextFormat = enabled ? _loc1_.defaultTextFormat  as unknown as TextFormat : _loc1_.defaultDisabledTextFormat  as unknown as TextFormat;
         this.textField.setTextFormat(_loc2_);
         var _loc3_: TextFormat = getStyleValue(enabled ? "textFormat" : "disabledTextFormat")  as unknown as TextFormat;
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
      }
      
      public get label(): string
      {
         return this._label;
      }
   }
