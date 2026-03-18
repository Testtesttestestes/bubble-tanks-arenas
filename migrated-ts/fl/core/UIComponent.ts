// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.core

import { ComponentEvent } from '../events/ComponentEvent';
import { FocusManager } from '../managers/FocusManager';
import { IFocusManager } from '../managers/IFocusManager';
import { IFocusManagerComponent } from '../managers/IFocusManagerComponent';
import { StyleManager } from '../managers/StyleManager';
import { InvalidationType } from './InvalidationType';

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



















   export class UIComponent extends Sprite{
  [key: string]: any;
      
      public static createAccessibilityImplementation: Function;
      public static inCallLaterPhase: boolean = false;
      private static defaultStyles: any = {
         "focusRectSkin":"focusRectSkin",
         "focusRectPadding":2,
         "textFormat":new (TextFormat as any)("_sans",11,0,false,false,false,"","",TextFormatAlign.LEFT,0,0,0,0),
         "disabledTextFormat":new (TextFormat as any)("_sans",11,10066329,false,false,false,"","",TextFormatAlign.LEFT,0,0,0,0),
         "defaultTextFormat":new (TextFormat as any)("_sans",11,0,false,false,false,"","",TextFormatAlign.LEFT,0,0,0,0),
         "defaultDisabledTextFormat":new (TextFormat as any)("_sans",11,10066329,false,false,false,"","",TextFormatAlign.LEFT,0,0,0,0)
      };
      private static focusManagers: Dictionary = new (Dictionary as any)(false);
      protected _x!: number;
      protected _enabled: boolean = true;
      protected callLaterMethods!: Dictionary;
      private _mouseFocusEnabled: boolean = true;
      private tempText!: TextField;
      private _focusEnabled: boolean = true;
      protected startHeight!: number;
      protected _height!: number;
      protected invalidateFlag: boolean = false;
      protected _oldIMEMode: string = null as any;
      protected _inspector: boolean = false;
      protected startWidth!: number;
      public focusTarget!: IFocusManagerComponent;
      protected errorCaught: boolean = false;
      protected invalidHash!: any;
      protected sharedStyles!: any;
      protected uiFocusRect!: DisplayObject;
      protected isLivePreview: boolean = false;
      protected _imeMode: string = null as any;
      protected _width!: number;
      protected instanceStyles!: any;
      public version: string = "3[0][0][16]";
      protected isFocused: boolean = false;
      protected _y!: number;
      constructor(){
         // @ts-ignore
         super();
         this.instanceStyles = {};
         this.sharedStyles = {};
         this.invalidHash = {};
         this.callLaterMethods = new (Dictionary as any)();
         (StyleManager as any).registerInstance(this);
         this.configUI();
         this.invalidate(InvalidationType.ALL);
         tabEnabled = this != null /* instanceof IFocusManagerComponent */;
         focusRect = false;
         if(tabEnabled)
         {
            this.addEventListener("focusin", this.focusInHandler.bind(this));
            this.addEventListener("focusout", this.focusOutHandler.bind(this));
            this.addEventListener("keydown", this.keyDownHandler.bind(this));
            this.addEventListener("keyup", this.keyUpHandler.bind(this));
         }
         this.initializeFocusManager();
         this.addEventListener("enterframe", this.hookAccessibility.bind(this));
      }
      
      public static getStyleDefinition(): any
      {
         return UIComponent.defaultStyles;
      }
      
      public static mergeStyles(...rest: any[]): any
      {
         var _loc5_: any = null as any;
         var _loc6_: string = null as any;
         var _loc2_: any = {};
         var _loc3_: number = uint(rest.length);
         var _loc4_: number = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = rest[_loc4_ as any];
            for (let _loc6_ in _loc5_)
            {
               if(_loc2_[_loc6_ as any] == null)
               {
                  _loc2_[_loc6_ as any] = rest[_loc4_ as any][_loc6_];
               }
            }
            _loc4_++;
         }
         return _loc2_;
      }
      
      public getStyle(param1: string): any
      {
         return this.instanceStyles[param1 as any];
      }
      
      protected checkLivePreview(): boolean
      {
         var className: string = null as any;
         if(parent == null)
         {
            return false;
         }
         try
         {
            className = getQualifiedClassName(parent);
         }
         catch (e: any)
         {
         }
         return className == "fl.livepreview::LivePreviewParent";
      }
      
      private callLaterDispatcher(param1: any): void
      {
         var _loc3_: any = null as any;
         if(param1.type == "addedtostage")
         {
            this.removeEventListener("addedtostage", this.callLaterDispatcher.bind(this));
            stage.addEventListener(Event.RENDER, this.callLaterDispatcher.bind(this));
            stage.invalidate();
            return;
         }
         param1.target.removeEventListener(Event.RENDER, this.callLaterDispatcher.bind(this));
         if(stage == null)
         {
            this.addEventListener("addedtostage", this.callLaterDispatcher.bind(this));
            return;
         }
         UIComponent.inCallLaterPhase = true;
         var _loc2_: Dictionary = this.callLaterMethods;
         for (let _loc3_ in _loc2_)
         {
            _loc3_();
            delete _loc2_[_loc3_ as any];
         }
         UIComponent.inCallLaterPhase = false;
      }
      
      protected validate(): void
      {
         this.invalidHash = {};
      }
      
      protected focusOutHandler(param1: any): void
      {
         if(this.isOurFocus(param1.target  as unknown as DisplayObject))
         {
            this.drawFocus(false);
            this.isFocused = false;
         }
      }
      
      public set mouseFocusEnabled(param1: boolean)
      {
         this._mouseFocusEnabled = param1;
      }
      
      public getFocus(): InteractiveObject
      {
         if(stage)
         {
            return stage.focus;
         }
         return null;
      }
      
      // @ts-ignore
      
      public get height(): number
      {
         return this._height;
      }
      
      private addedHandler(param1: any): void
      {
         this.removeEventListener("addedToStage", this.addedHandler.bind(this));
         this.initializeFocusManager();
      }
      
      protected getStyleValue(param1: string): any
      {
         return this.instanceStyles[param1 as any] == null ? this.sharedStyles[param1 as any] : this.instanceStyles[param1 as any];
      }
      
      public invalidate(param1: string = "all", param2: boolean = true): void
      {
         this.invalidHash[param1 as any] = true;
         if(param2)
         {
            this.callLater(this.draw);
         }
      }
      
      protected isOurFocus(param1: DisplayObject): boolean
      {
         return param1 == this;
      }
      
      public get enabled(): boolean
      {
         return this._enabled;
      }
      
      protected getScaleX(): number
      {
         return super.scaleX;
      }
      
      protected getScaleY(): number
      {
         return super.scaleY;
      }
      
      public get focusEnabled(): boolean
      {
         return this._focusEnabled;
      }
      
      protected afterComponentParameters(): void
      {
      }
      
      // @ts-ignore
      
      public get scaleY(): number
      {
         return this.height / this.startHeight;
      }
      
      protected setIMEMode(param1: boolean): any
      {
         var enabled: boolean = param1;
         if(_imeMode != null)
         {
            if(enabled)
            {
               IME.enabled = true;
               this._oldIMEMode = IME.conversionMode;
               try
               {
                  if(!this.errorCaught && IME.conversionMode != IMEConversionMode.UNKNOWN)
                  {
                     IME.conversionMode = _imeMode;
                  }
                  this.errorCaught = false;
               }
               catch (e: any)
               {
                  this.errorCaught = true;
                  throw new (Error as any)("IME mode not supported: " + _imeMode);
               }
            }
            else
            {
               if(IME.conversionMode != IMEConversionMode.UNKNOWN && this._oldIMEMode != IMEConversionMode.UNKNOWN)
               {
                  IME.conversionMode = this._oldIMEMode;
               }
               IME.enabled = false;
            }
         }
      }
      
      protected draw(): void
      {
         if(this.isInvalid(InvalidationType.SIZE,InvalidationType.STYLES))
         {
            if(isFocused && this.focusManager.showFocusIndicator)
            {
               this.drawFocus(true);
            }
         }
         this.validate();
      }
      
      // @ts-ignore
      
      public set height(param1: number)
      {
         if(_height == param1)
         {
            return;
         }
         this.setSize(width,param1);
      }
      
      protected configUI(): void
      {
         this.isLivePreview = this.checkLivePreview();
         var _loc1_: number = rotation;
         rotation = 0;
         var _loc2_: number = super.width;
         var _loc3_: number = super.height;
         var _temp_3: any = this;
         var _temp_2: any = this;
         var _temp_1: any = 1;
         1;
         (_temp_2.this as any).scaleY = _temp_1;
         (_temp_3.this as any).scaleX = 1;
         this.setSize(_loc2_,_loc3_);
         this.move(super.x,super.y);
         rotation = _loc1_;
         this.startWidth = _loc2_;
         this.startHeight = _loc3_;
         if(numChildren > 0)
         {
            this.removeChildAt(0);
         }
      }
      
      protected setScaleY(param1: number): void
      {
         (this as any).scaleY = param1;
      }
      
      // @ts-ignore
      
      public get scaleX(): number
      {
         return this.width / this.startWidth;
      }
      
      protected setScaleX(param1: number): void
      {
         (this as any).scaleX = param1;
      }
      
      private initializeFocusManager(): void
      {
         if(stage == null)
         {
            this.addEventListener("addedtostage", this.addedHandler.bind(this));
         }
         else
         {
            this.createFocusManager();
         }
      }
      
      protected keyDownHandler(param1: any): void
      {
      }
      
      public set focusManager(param1: IFocusManager)
      {
         (UIComponent.focusManagers as any)[this as any] = param1;
      }
      
      public clearStyle(param1: string): void
      {
         this.setStyle(param1,null);
      }
      
      protected isInvalid(param1: string, ...rest: any[]): boolean
      {
         if(Boolean(this.invalidHash[param1 as any]) || Boolean(this.invalidHash[InvalidationType.ALL as any]))
         {
            return true;
         }
         while(rest.length > 0)
         {
            if(this.invalidHash[rest.pop() as any])
            {
               return true;
            }
         }
         return false;
      }
      
      public setStyle(param1: string, param2: any): void
      {
         if(this.instanceStyles[param1 as any] === param2 && !(param2 instanceof TextFormat))
         {
            return;
         }
         this.instanceStyles[param1 as any] = param2;
         this.invalidate(InvalidationType.STYLES);
      }
      
      // @ts-ignore
      
      public get visible(): boolean
      {
         return super.visible;
      }
      
      protected focusInHandler(param1: any): void
      {
         var _loc2_: IFocusManager = null as any;
         if(this.isOurFocus(param1.target  as unknown as DisplayObject))
         {
            _loc2_ = this.focusManager;
            if(Boolean(_loc2_) && _loc2_.showFocusIndicator)
            {
               this.drawFocus(true);
               this.isFocused = true;
            }
         }
      }
      
      public get componentInspectorSetting(): boolean
      {
         return this._inspector;
      }
      
      // @ts-ignore
      
      public get x(): number
      {
         return isNaN(this._x) ? super.x : this._x;
      }
      
      // @ts-ignore
      
      public get y(): number
      {
         return isNaN(this._y) ? super.y : this._y;
      }
      
      public set enabled(param1: boolean)
      {
         if(param1 == this._enabled)
         {
            return;
         }
         this._enabled = param1;
         this.invalidate(InvalidationType.STATE);
      }
      
      public setSize(param1: number, param2: number): void
      {
         this._width = param1;
         this._height = param2;
         this.invalidate(InvalidationType.SIZE);
         this.dispatchEvent(new (ComponentEvent as any)(ComponentEvent.RESIZE,false));
      }
      
      protected keyUpHandler(param1: any): void
      {
      }
      
      public setSharedStyle(param1: string, param2: any): void
      {
         if(this.sharedStyles[param1 as any] === param2 && !(param2 instanceof TextFormat))
         {
            return;
         }
         this.sharedStyles[param1 as any] = param2;
         if(instanceStyles[param1 as any] == null)
         {
            this.invalidate(InvalidationType.STYLES);
         }
      }
      
      public set focusEnabled(param1: boolean)
      {
         this._focusEnabled = param1;
      }
      
      // @ts-ignore
      
      public set width(param1: number)
      {
         if(_width == param1)
         {
            return;
         }
         this.setSize(param1,this.height);
      }
      
      public setFocus(): void
      {
         if(stage)
         {
            stage.focus = this;
         }
      }
      
      // @ts-ignore
      
      public set scaleX(param1: number)
      {
         this.setSize(this.startWidth * param1,this.height);
      }
      
      public get mouseFocusEnabled(): boolean
      {
         return this._mouseFocusEnabled;
      }
      
      // @ts-ignore
      
      public set scaleY(param1: number)
      {
         this.setSize(width,this.startHeight * param1);
      }
      
      protected getDisplayObjectInstance(param1: any): DisplayObject
      {
         var skin: any = param1;
         var classDef: any = null as any;
         if(skin instanceof Class)
         {
            return new (skin as any)()  as unknown as DisplayObject;
         }
         if(skin instanceof DisplayObject)
         {
            (skin  as unknown as DisplayObject).x = 0;
            (skin  as unknown as DisplayObject).y = 0;
            return skin  as unknown as DisplayObject;
         }
         try
         {
            classDef = getDefinitionByName(skin.toString());
         }
         catch (e: any)
         {
            try
            {
               classDef = loaderInfo.applicationDomain.getDefinition(skin.toString())  as unknown as Object;
            }
            catch (e: any)
            {
            }
         }
         if(classDef == null)
         {
            return null;
         }
         return new (classDef as any)()  as unknown as DisplayObject;
      }
      
      protected copyStylesToChild(param1: UIComponent, param2: any): void
      {
         var _loc3_: string = null as any;
         for (let _loc3_ in param2)
         {
            param1.setStyle(_loc3_,this.getStyleValue(param2[_loc3_ as any]));
         }
      }
      
      protected initializeAccessibility(): void
      {
         if(UIComponent.createAccessibilityImplementation != null)
         {
            UIComponent.createAccessibilityImplementation(this);
         }
      }
      
      public get focusManager(): IFocusManager
      {
         var _loc1_: DisplayObject = this;
         while(_loc1_)
         {
            if((UIComponent.focusManagers as any)[_loc1_ as any] != null)
            {
               return((UIComponent.focusManagers)[_loc1_ as any] as unknown as IFocusManager);
            }
            _loc1_ = _loc1_.parent;
         }
         return null;
      }
      
      // @ts-ignore
      
      public get width(): number
      {
         return this._width;
      }
      
      protected beforeComponentParameters(): void
      {
      }
      
      protected callLater(param1: Function): void
      {
         if(UIComponent.inCallLaterPhase)
         {
            return;
         }
         this.callLaterMethods[param1 as any] = true;
         if(stage != null)
         {
            stage.addEventListener(Event.RENDER, this.callLaterDispatcher.bind(this));
            stage.invalidate();
         }
         else
         {
            this.addEventListener("addedtostage", this.callLaterDispatcher.bind(this));
         }
      }
      
      public move(param1: number, param2: number): void
      {
         this._x = param1;
         this._y = param2;
         (this as any).x = Math.round(param1);
         (this as any).y = Math.round(param2);
         this.dispatchEvent(new (ComponentEvent as any)(ComponentEvent.MOVE));
      }
      
      public validateNow(): void
      {
         this.invalidate(InvalidationType.ALL,false);
         this.draw();
      }
      
      // @ts-ignore
      
      public set visible(param1: boolean)
      {
         if((this as any).visible = = param1)
         {
            return;
         }
         (this as any).visible = param1;
         var _loc2_: string = param1 ? ComponentEvent.SHOW : ComponentEvent.HIDE;
         this.dispatchEvent(new (ComponentEvent as any)(_loc2_,true));
      }
      
      protected createFocusManager(): void
      {
         if(UIComponent.focusManagers[stage as any] == null)
         {
            UIComponent.focusManagers[stage as any] = new (FocusManager as any)(stage);
         }
      }
      
      protected hookAccessibility(param1: any): void
      {
         this.removeEventListener("enterframe", this.hookAccessibility.bind(this));
         this.initializeAccessibility();
      }
      
      public set componentInspectorSetting(param1: boolean)
      {
         this._inspector = param1;
         if(_inspector)
         {
            this.beforeComponentParameters();
         }
         else
         {
            this.afterComponentParameters();
         }
      }
      
      // @ts-ignore
      
      public set y(param1: number)
      {
         this.move(_x,param1);
      }
      
      public drawFocus(param1: boolean): void
      {
         var _loc2_: number = NaN;
         this.isFocused = param1;
         if(this.uiFocusRect != null && this.contains(this.uiFocusRect))
         {
            this.removeChild(this.uiFocusRect);
            this.uiFocusRect = null as any;
         }
         if(param1)
         {
            this.uiFocusRect = this.getDisplayObjectInstance(this.getStyleValue("focusRectSkin"))  as unknown as Sprite;
            if(uiFocusRect == null)
            {
               return;
            }
            _loc2_ = Number(this.getStyleValue("focusRectPadding"));
            (this.uiFocusRect as any).x = -_loc2_;
            (this.uiFocusRect as any).y = -_loc2_;
            (this.uiFocusRect as any).width = this.width + _loc2_ * 2;
            (this.uiFocusRect as any).height = this.height + _loc2_ * 2;
            this.addChildAt(uiFocusRect,0);
         }
      }
      
      // @ts-ignore
      
      public set x(param1: number)
      {
         this.move(param1,this._y);
      }
      
      public drawNow(): void
      {
         this.draw();
      }
   }
