// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.data

import { DataChangeEvent } from '../events/DataChangeEvent';
import { DataChangeType } from '../events/DataChangeType';

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



   export class DataProvider extends EventDispatcher{
  [key: string]: any;
      
      protected data!: any;
      constructor(param1: any = null){
         // @ts-ignore
         super();
         if(param1 == null)
         {
            this.data = [];
         }
         else
         {
            this.data = this.getDataFromObject(param1);
         }
      }
      
      public invalidateItemAt(param1: number): void
      {
         this.checkIndex(param1,this.data.length - 1);
         this.dispatchChangeEvent(DataChangeType.INVALIDATE,[this.data[param1]],param1,param1);
      }
      
      protected dispatchPreChangeEvent(param1: string, param2: any, param3: number, param4: number): void
      {
         this.dispatchEvent(new (DataChangeEvent as any)(DataChangeEvent.PRE_DATA_CHANGE,param1,param2,param3,param4));
      }
      
      public getItemIndex(param1: any): number
      {
         return this.data.indexOf(param1);
      }
      
      public removeItemAt(param1: number): any
      {
         this.checkIndex(param1,this.data.length - 1);
         this.dispatchPreChangeEvent(DataChangeType.REMOVE,this.data.slice(param1,param1 + 1),param1,param1);
         var _loc2_: any = this.data.splice(param1,1);
         this.dispatchChangeEvent(DataChangeType.REMOVE,_loc2_,param1,param1);
         return _loc2_[0];
      }
      
      protected getDataFromObject(param1: any): any
      {
         var _loc2_: any = null as any;
         var _loc3_: any = null as any;
         var _loc4_: number = 0;
         var _loc5_: any = null as any;
         var _loc6_: XML = null as any;
         var _loc7_: XMLList = null as any;
         var _loc8_: XML = null as any;
         var _loc9_: XMLList = null as any;
         var _loc10_: XML = null as any;
         var _loc11_: XMLList = null as any;
         var _loc12_: XML = null as any;
         if(param1 instanceof Array)
         {
            _loc3_ = param1  as any[];
            if(_loc3_.length > 0)
            {
               if(_loc3_[0] instanceof String || _loc3_[0] instanceof Number)
               {
                  _loc2_ = [];
                  _loc4_ = 0;
                  while(_loc4_ < _loc3_.length)
                  {
                     _loc5_ = {
                        "label":String(_loc3_[_loc4_ as any]),
                        "data":_loc3_[_loc4_ as any]
                     };
                     _loc2_.push(_loc5_ as any);
                     _loc4_++;
                  }
                  return _loc2_;
               }
            }
            return param1.concat();
         }
         if(param1 instanceof DataProvider)
         {
            return param1.toArray();
         }
         if(param1 instanceof XML)
         {
            _loc6_ = param1  as unknown as XML;
            _loc2_ = [];
            _loc7_ = _loc6_._star;
            for (let _loc8_ of _loc7_)
            {
               param1 = {};
               _loc9_ = _loc8_.attributes();
               for (let _loc10_ of _loc9_)
               {
                  param1[_loc10_.localName() as any] = _loc10_.toString();
               }
               _loc11_ = _loc8_._star;
               for (let _loc12_ of _loc11_)
               {
                  if(_loc12_.hasSimpleContent())
                  {
                     param1[_loc12_.localName() as any] = _loc12_.toString();
                  }
               }
               _loc2_.push(param1 as any);
            }
            return _loc2_;
         }
         throw new (TypeError as any)("Error: Type Coercion failed: cannot convert " + param1 + " to Array or DataProvider.");
      }
      
      public addItem(param1: any): void
      {
         this.dispatchPreChangeEvent(DataChangeType.ADD,[param1],this.data.length - 1,this.data.length - 1);
         this.data.push(param1 as any);
         this.dispatchChangeEvent(DataChangeType.ADD,[param1],this.data.length - 1,this.data.length - 1);
      }
      
      public concat(param1: any): void
      {
         this.addItems(param1);
      }
      
      public getItemAt(param1: number): any
      {
         this.checkIndex(param1,this.data.length - 1);
         return this.data[param1 as any];
      }
      
      public sortOn(param1: any, param2: any = null): any
      {
         this.dispatchPreChangeEvent(DataChangeType.SORT,this.data.concat(),0,this.data.length - 1);
         var _loc3_: any = this.data.sortOn(param1,param2);
         this.dispatchChangeEvent(DataChangeType.SORT,this.data.concat(),0,this.data.length - 1);
         return _loc3_;
      }
      
      public toArray(): any
      {
         return this.data.concat();
      }
      
      public addItems(param1: any): void
      {
         this.addItemsAt(param1,this.data.length);
      }
      
      public clone(): DataProvider
      {
         return new (DataProvider as any)(this.data);
      }
      
      public sort(...rest: any[]): any
      {
         this.dispatchPreChangeEvent(DataChangeType.SORT,this.data.concat(),0,this.data.length - 1);
         var _loc2_: any = this.data.sort.apply(data,rest);
         this.dispatchChangeEvent(DataChangeType.SORT,this.data.concat(),0,this.data.length - 1);
         return _loc2_;
      }
      
      public get length(): number
      {
         return this.data.length;
      }
      
      public addItemAt(param1: any, param2: number): void
      {
         this.checkIndex(param2,this.data.length);
         this.dispatchPreChangeEvent(DataChangeType.ADD,[param1],param2,param2);
         this.data.splice(param2,0,param1 as any);
         this.dispatchChangeEvent(DataChangeType.ADD,[param1],param2,param2);
      }
      
      public toString(): string
      {
         return "DataProvider [" + this.data.join(" , ") + "]";
      }
      
      public invalidateItem(param1: any): void
      {
         var _loc2_: number = uint(this.getItemIndex(param1));
         if(_loc2_ == -1)
         {
            return;
         }
         this.invalidateItemAt(_loc2_);
      }
      
      protected dispatchChangeEvent(param1: string, param2: any, param3: number, param4: number): void
      {
         this.dispatchEvent(new (DataChangeEvent as any)(DataChangeEvent.DATA_CHANGE,param1,param2,param3,param4));
      }
      
      protected checkIndex(param1: number, param2: number): void
      {
         if(param1 > param2 || param1 < 0)
         {
            throw new (RangeError as any)("DataProvider index (" + param1 + ") is not in acceptable range (0 - " + param2 + ")");
         }
      }
      
      public addItemsAt(param1: any, param2: number): void
      {
         this.checkIndex(param2,this.data.length);
         var _loc3_: any = this.getDataFromObject(param1);
         this.dispatchPreChangeEvent(DataChangeType.ADD,_loc3_,param2,param2 + _loc3_.length - 1);
         this.data.splice.apply(data,[param2,0].concat(_loc3_));
         this.dispatchChangeEvent(DataChangeType.ADD,_loc3_,param2,param2 + _loc3_.length - 1);
      }
      
      public replaceItem(param1: any, param2: any): any
      {
         var _loc3_: number = this.getItemIndex(param2);
         if(_loc3_ != -1)
         {
            return this.replaceItemAt(param1,_loc3_);
         }
         return null;
      }
      
      public removeItem(param1: any): any
      {
         var _loc2_: number = this.getItemIndex(param1);
         if(_loc2_ != -1)
         {
            return this.removeItemAt(_loc2_);
         }
         return null;
      }
      
      public merge(param1: any): void
      {
         var _loc6_: any = null as any;
         var _loc2_: any = this.getDataFromObject(param1);
         var _loc3_: number = _loc2_.length;
         var _loc4_: number = this.data.length;
         this.dispatchPreChangeEvent(DataChangeType.ADD,this.data.slice(_loc4_,this.data.length),_loc4_,this.data.length - 1);
         var _loc5_: number = 0;
         while(_loc5_ < _loc3_)
         {
            _loc6_ = _loc2_[_loc5_ as any];
            if(this.getItemIndex(_loc6_) == -1)
            {
               this.data.push(_loc6_ as any);
            }
            _loc5_++;
         }
         if(data.length > _loc4_)
         {
            this.dispatchChangeEvent(DataChangeType.ADD,data.slice(_loc4_,data.length),_loc4_,this.data.length - 1);
         }
         else
         {
            this.dispatchChangeEvent(DataChangeType.ADD,[],-1,-1);
         }
      }
      
      public replaceItemAt(param1: any, param2: number): any
      {
         this.checkIndex(param2,this.data.length - 1);
         var _loc3_: any = [this.data[param2 as any]];
         this.dispatchPreChangeEvent(DataChangeType.REPLACE,_loc3_,param2,param2);
         this.data[param2 as any] = param1;
         this.dispatchChangeEvent(DataChangeType.REPLACE,_loc3_,param2,param2);
         return _loc3_[0];
      }
      
      public invalidate(): void
      {
         this.dispatchEvent(new (DataChangeEvent as any)(DataChangeEvent.DATA_CHANGE,DataChangeType.INVALIDATE_ALL,this.data.concat(),0,this.data.length));
      }
      
      public removeAll(): void
      {
         var _loc1_: any = this.data.concat();
         this.dispatchPreChangeEvent(DataChangeType.REMOVE_ALL,_loc1_,0,_loc1_.length);
         this.data = [];
         this.dispatchChangeEvent(DataChangeType.REMOVE_ALL,_loc1_,0,_loc1_.length);
      }
   }
