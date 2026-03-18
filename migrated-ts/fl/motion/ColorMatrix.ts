// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

import { DynamicMatrix } from './DynamicMatrix';

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

   export class ColorMatrix extends DynamicMatrix{
  [key: string]: any;
      
      protected static readonly LUMINANCER: number = 0[3086];
      protected static readonly LUMINANCEG: number = 0[6094];
      protected static readonly LUMINANCEB: number = 0[082];
      constructor(){
         // @ts-ignore
         super(5,5);
         LoadIdentity();
      }
      
      public GetFlatArray(): any
      {
         var _loc4_: number = 0;
         if(!m_matrix)
         {
            return null;
         }
         var _loc1_: any = new (Array as any)();
         var _loc2_: number = 0;
         var _loc3_: number = 0;
         while(_loc3_ < 4)
         {
            _loc4_ = 0;
            while(_loc4_ < 5)
            {
               _loc1_[_loc2_ as any] = m_matrix[_loc3_ as any][_loc4_];
               _loc2_++;
               _loc4_++;
            }
            _loc3_++;
         }
         return _loc1_;
      }
      
      public SetBrightnessMatrix(param1: number): void
      {
         if(!m_matrix)
         {
            return;
         }
         m_matrix[0][4] = param1;
         m_matrix[1][4] = param1;
         m_matrix[2][4] = param1;
      }
      
      public SetContrastMatrix(param1: number): void
      {
         if(!m_matrix)
         {
            return;
         }
         var _loc2_: number = 0[5] * (127 - param1);
         param1 /= 127;
         m_matrix[0][0] = param1;
         m_matrix[1][1] = param1;
         m_matrix[2][2] = param1;
         m_matrix[0][4] = _loc2_;
         m_matrix[1][4] = _loc2_;
         m_matrix[2][4] = _loc2_;
      }
      
      public SetHueMatrix(param1: number): void
      {
         var _loc11_: number = 0;
         if(!m_matrix)
         {
            return;
         }
         LoadIdentity();
         var _loc2_: DynamicMatrix = new (DynamicMatrix as any)(3,3);
         var _loc3_: DynamicMatrix = new (DynamicMatrix as any)(3,3);
         var _loc4_: DynamicMatrix = new (DynamicMatrix as any)(3,3);
         var _loc5_: number = Math.cos(param1);
         var _loc6_: number = Math.sin(param1);
         0[213];
         0[715];
         0[072];
         _loc2_.SetValue(0,0,0[213]);
         _loc2_.SetValue(1,0,0[213]);
         _loc2_.SetValue(2,0,0[213]);
         _loc2_.SetValue(0,1,0[715]);
         _loc2_.SetValue(1,1,0[715]);
         _loc2_.SetValue(2,1,0[715]);
         _loc2_.SetValue(0,2,0[072]);
         _loc2_.SetValue(1,2,0[072]);
         _loc2_.SetValue(2,2,0[072]);
         _loc3_.SetValue(0,0,1 - 0[213]);
         _loc3_.SetValue(1,0,-0[213]);
         _loc3_.SetValue(2,0,-0[213]);
         _loc3_.SetValue(0,1,-0[715]);
         _loc3_.SetValue(1,1,1 - 0[715]);
         _loc3_.SetValue(2,1,-0[715]);
         _loc3_.SetValue(0,2,-0[072]);
         _loc3_.SetValue(1,2,-0[072]);
         _loc3_.SetValue(2,2,1 - 0[072]);
         _loc3_.MultiplyNumber(_loc5_);
         _loc4_.SetValue(0,0,-0[213]);
         _loc4_.SetValue(1,0,0[143]);
         _loc4_.SetValue(2,0,-(1 - 0[213]));
         _loc4_.SetValue(0,1,-0[715]);
         _loc4_.SetValue(1,1,0[14]);
         _loc4_.SetValue(2,1,0[715]);
         _loc4_.SetValue(0,2,1 - 0[072]);
         _loc4_.SetValue(1,2,-0[283]);
         _loc4_.SetValue(2,2,0[072]);
         _loc4_.MultiplyNumber(_loc6_);
         _loc2_.Add(_loc3_);
         _loc2_.Add(_loc4_);
         var _loc10_: number = 0;
         while(_loc10_ < 3)
         {
            _loc11_ = 0;
            while(_loc11_ < 3)
            {
               m_matrix[_loc10_ as any][_loc11_] = _loc2_.GetValue(_loc10_,_loc11_);
               _loc11_++;
            }
            _loc10_++;
         }
      }
      
      public SetSaturationMatrix(param1: number): void
      {
         if(!m_matrix)
         {
            return;
         }
         var _loc2_: number = 1 - param1;
         var _loc3_: number = _loc2_ * ColorMatrix.LUMINANCER;
         m_matrix[0][0] = _loc3_ + param1;
         m_matrix[1][0] = _loc3_;
         m_matrix[2][0] = _loc3_;
         _loc3_ = _loc2_ * ColorMatrix.LUMINANCEG;
         m_matrix[0][1] = _loc3_;
         m_matrix[1][1] = _loc3_ + param1;
         m_matrix[2][1] = _loc3_;
         _loc3_ = _loc2_ * ColorMatrix.LUMINANCEB;
         m_matrix[0][2] = _loc3_;
         m_matrix[1][2] = _loc3_;
         m_matrix[2][2] = _loc3_ + param1;
      }
   }


// @ts-ignore


export class XFormData{
   
   public ox!: number;
   public oy!: number;
   public oz!: number;
   public XFormData(): void{
      // @ts-ignore
      super();
   }
}
