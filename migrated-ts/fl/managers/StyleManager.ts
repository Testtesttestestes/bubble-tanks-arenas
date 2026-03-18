// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.managers

import { UIComponent } from '../core/UIComponent';

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






   export class StyleManager{
  [key: string]: any;
      
      private static _instance: StyleManager;
      private classToInstancesDict!: Dictionary;
      private globalStyles!: any;
      private styleToClassesHash!: any;
      private classToStylesDict!: Dictionary;
      private classToDefaultStylesDict!: Dictionary;
      constructor(){

         this.styleToClassesHash = {};
         this.classToInstancesDict = new (Dictionary as any)(true);
         this.classToStylesDict = new (Dictionary as any)(true);
         this.classToDefaultStylesDict = new (Dictionary as any)(true);
         this.globalStyles = UIComponent.getStyleDefinition();
      }
      
      public static clearComponentStyle(param1: any, param2: string): void
      {
         var _loc3_: any = StyleManager.getClassDef(param1);
         var _loc4_: any = StyleManager.getInstance().classToStylesDict[_loc3_ as any];
         if(_loc4_ != null && _loc4_[param2 as any] != null)
         {
            delete _loc4_[param2 as any];
            StyleManager.invalidateComponentStyle(_loc3_,param2);
         }
      }
      
      private static getClassDef(param1: any): any
      {
         var component: any = param1;
         if(component instanceof Class)
         {
            return component  as unknown as Class;
         }
         try
         {
            return getDefinitionByName(getQualifiedClassName(component))  as unknown as Class;
         }
         catch (e: any)
         {
            if(component instanceof UIComponent)
            {
               try
               {
                  return component.loaderInfo.applicationDomain.getDefinition(getQualifiedClassName(component))  as unknown as Class;
               }
               catch (e: any)
               {
               }
            }
         }
         return null;
      }
      
      public static clearStyle(param1: string): void
      {
         StyleManager.setStyle(param1,null);
      }
      
      public static setComponentStyle(param1: any, param2: string, param3: any): void {
		var _loc4_: any = (StyleManager as any).getClassDef(param1);
		var _loc5_: any = ((StyleManager as any).getInstance().classToStylesDict  as unknown as any)[_loc4_  as unknown as any];
		if (_loc5_ == null) {
			// Возвращаем нормальную логику
			_loc5_ = {};
			((StyleManager as any).getInstance().classToStylesDict  as unknown as any)[_loc4_  as unknown as any] = _loc5_;
		}
		if (_loc5_ == param3) {
			return;
		}
		_loc5_[param2  as unknown as any] = param3;
		(StyleManager as any).invalidateComponentStyle(_loc4_, param2);
	  }
      
      private static setSharedStyles(param1: UIComponent): void
      {
         var _loc5_: string = null as any;
         var _loc2_: StyleManager = StyleManager.getInstance();
         var _loc3_: any = StyleManager.getClassDef(param1);
         var _loc4_: any = _loc2_.classToDefaultStylesDict[_loc3_ as any];
         for (let _loc5_ in _loc4_)
         {
            param1.setSharedStyle(_loc5_,StyleManager.getSharedStyle(param1,_loc5_));
         }
      }
      
      public static getComponentStyle(param1: any, param2: string): any
      {
         var _loc3_: any = StyleManager.getClassDef(param1);
         var _loc4_: any = StyleManager.getInstance().classToStylesDict[_loc3_ as any];
         return _loc4_ == null ? null : _loc4_[param2 as any];
      }
      
      private static getInstance(): any
      {
         if(_instance == null)
         {
            _instance = new (StyleManager as any)();
         }
         return StyleManager._instance;
      }
      
      private static invalidateComponentStyle(param1: any, param2: string): void
      {
         var _loc4_: any = null as any;
         var _loc5_: UIComponent = null as any;
         var _loc3_: Dictionary = StyleManager.getInstance().classToInstancesDict[param1 as any];
         if(_loc3_ == null)
         {
            return;
         }
         for (let _loc4_ in _loc3_)
         {
            _loc5_ = _loc4_  as unknown as UIComponent;
            if(_loc5_ != null)
            {
               _loc5_.setSharedStyle(param2,StyleManager.getSharedStyle(_loc5_,param2));
            }
         }
      }
      
      private static invalidateStyle(param1: string): void
      {
         var _loc3_: any = null as any;
         var _loc2_: Dictionary = StyleManager.getInstance().styleToClassesHash[param1 as any];
         if(_loc2_ == null)
         {
            return;
         }
         for (let _loc3_ in _loc2_)
         {
            StyleManager.invalidateComponentStyle((_loc3_),param1);
         }
      }
      
      public static registerInstance(param1: UIComponent): void
      {
         var target: any = null as any;
         var defaultStyles: any = null as any;
         var styleToClasses: any = null as any;
         var n: string = null as any;
         var instance: UIComponent = param1;
         var inst: StyleManager = StyleManager.getInstance();
         var classDef: any = StyleManager.getClassDef(instance);
         if(classDef == null)
         {
            return;
         }
         if(inst.classToInstancesDict[classDef as any] == null)
         {
            inst.classToInstancesDict[classDef as any] = new (Dictionary as any)(true);
            target = classDef;
            while(defaultStyles == null)
            {
               if(target["getStyleDefinition"] != null)
               {
                  defaultStyles = target["getStyleDefinition"]();
                  break;
               }
               try
               {
                  target = instance.loaderInfo.applicationDomain.getDefinition(getQualifiedSuperclassName(target))  as unknown as Class;
               }
               catch (err: any)
               {
                  try
                  {
                     target = getDefinitionByName(getQualifiedSuperclassName(target))  as unknown as Class;
                  }
                  catch (e: any)
                  {
                     defaultStyles = UIComponent.getStyleDefinition();
                     break;
                  }
               }
            }
            styleToClasses = inst.styleToClassesHash;
            for (let n in defaultStyles)
            {
               if(styleToClasses[n as any] == null)
               {
                  styleToClasses[n as any] = new (Dictionary as any)(true);
               }
               styleToClasses[n as any][classDef] = true;
            }
            inst.classToDefaultStylesDict[classDef as any] = defaultStyles;
            if(inst.classToStylesDict[classDef as any] == null)
            {
               inst.classToStylesDict[classDef as any] = {};
            }
         }
         inst.classToInstancesDict[classDef as any][instance] = true;
         StyleManager.setSharedStyles(instance);
      }
      
      public static getStyle(param1: string): any
      {
         return StyleManager.getInstance().globalStyles[param1 as any];
      }
      
      private static getSharedStyle(param1: UIComponent, param2: string): any
      {
         var _loc3_: any = StyleManager.getClassDef(param1);
         var _loc4_: StyleManager = StyleManager.getInstance();
         var _loc5_: any = _loc4_.classToStylesDict[_loc3_ as any][param2];
         if(_loc5_ != null)
         {
            return _loc5_;
         }
         _loc5_ = _loc4_.globalStyles[param2 as any];
         if(_loc5_ != null)
         {
            return _loc5_;
         }
         return _loc4_.classToDefaultStylesDict[_loc3_ as any][param2];
      }
      
      public static setStyle(param1: string, param2: any): void
      {
         var _loc3_: any = StyleManager.getInstance().globalStyles;
         if(_loc3_[param1 as any] === param2 && !(param2 instanceof TextFormat))
         {
            return;
         }
         _loc3_[param1 as any] = param2;
         StyleManager.invalidateStyle(param1);
      }
   }
