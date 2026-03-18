// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services.images

import { BitString } from './BitString';

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



   export class JPGEncoder{
  [key: string]: any;
      
      private ZigZag: any = [0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63];
      private YTable: any = new (Array as any)(64);
      private UVTable: any = new (Array as any)(64);
      private fdtbl_Y: any = new (Array as any)(64);
      private fdtbl_UV: any = new (Array as any)(64);
      private YDC_HT!: any;
      private UVDC_HT!: any;
      private YAC_HT!: any;
      private UVAC_HT!: any;
      private std_dc_luminance_nrcodes: any = [0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];
      private std_dc_luminance_values: any = [0,1,2,3,4,5,6,7,8,9,10,11];
      private std_ac_luminance_nrcodes: any = [0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125];
      private std_ac_luminance_values: any = [1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250];
      private std_dc_chrominance_nrcodes: any = [0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
      private std_dc_chrominance_values: any = [0,1,2,3,4,5,6,7,8,9,10,11];
      private std_ac_chrominance_nrcodes: any = [0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119];
      private std_ac_chrominance_values: any = [0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];
      private bitcode: any = new (Array as any)(65535);
      private category: any = new (Array as any)(65535);
      private byteout!: ByteArray;
      private bytenew: number = 0;
      private bytepos: number = 7;
      private DU: any = new (Array as any)(64);
      private YDU: any = new (Array as any)(64);
      private UDU: any = new (Array as any)(64);
      private VDU: any = new (Array as any)(64);
      constructor(param1: number = 50){

         if(param1 <= 0)
         {
            param1 = 1;
         }
         if(param1 > 100)
         {
            param1 = 100;
         }
         var _loc2_: number = 0;
         if(param1 < 50)
         {
            _loc2_ = int(5000 / param1);
         }
         else
         {
            _loc2_ = int(200 - param1 * 2);
         }
         this.initHuffmanTbl();
         this.initCategoryNumber();
         this.initQuantTables(_loc2_);
      }
      
      private initQuantTables(param1: number): void
      {
         var _loc2_: number = 0;
         var _loc3_: number = NaN;
         var _loc8_: number = 0;
         var _loc4_: any = [16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99];
         _loc2_ = 0;
         while(_loc2_ < 64)
         {
            _loc3_ = Math.floor((_loc4_[_loc2_ as any] * param1 + 50) / 100);
            if(_loc3_ < 1)
            {
               _loc3_ = 1;
            }
            else if(_loc3_ > 255)
            {
               _loc3_ = 255;
            }
            this.YTable[this.ZigZag[_loc2_ as any]] = _loc3_;
            _loc2_++;
         }
         var _loc5_: any = [17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99];
         _loc2_ = 0;
         while(_loc2_ < 64)
         {
            _loc3_ = Math.floor((_loc5_[_loc2_ as any] * param1 + 50) / 100);
            if(_loc3_ < 1)
            {
               _loc3_ = 1;
            }
            else if(_loc3_ > 255)
            {
               _loc3_ = 255;
            }
            this.UVTable[this.ZigZag[_loc2_ as any]] = _loc3_;
            _loc2_++;
         }
         var _loc6_: any = [1,1[387039845],1[306562965],1[175875602],1,0[785694958],0[5411961],0[275899379]];
         _loc2_ = 0;
         var _loc7_: number = 0;
         while(_loc7_ < 8)
         {
            _loc8_ = 0;
            while(_loc8_ < 8)
            {
               this.fdtbl_Y[_loc2_ as any] = 1 / (this.YTable[this.ZigZag[_loc2_ as any]] * _loc6_[_loc7_ as any] * _loc6_[_loc8_ as any] * 8);
               this.fdtbl_UV[_loc2_ as any] = 1 / (this.UVTable[this.ZigZag[_loc2_ as any]] * _loc6_[_loc7_ as any] * _loc6_[_loc8_ as any] * 8);
               _loc2_++;
               _loc8_++;
            }
            _loc7_++;
         }
      }
      
      private computeHuffmanTbl(param1: any, param2: any): any
      {
         var _loc7_: number = 0;
         var _loc3_: number = 0;
         var _loc4_: number = 0;
         var _loc5_: any = new (Array as any)();
         var _loc6_: number = 1;
         while(_loc6_ <= 16)
         {
            _loc7_ = 1;
            while(_loc7_ <= param1[_loc6_ as any])
            {
               _loc5_[param2[_loc4_ as any]] = new (BitString as any)();
               _loc5_[param2[_loc4_ as any]].val = _loc3_;
               _loc5_[param2[_loc4_ as any]].len = _loc6_;
               _loc4_++;
               _loc3_++;
               _loc7_++;
            }
            _loc3_ *= 2;
            _loc6_++;
         }
         return _loc5_;
      }
      
      private initHuffmanTbl(): void
      {
         this.YDC_HT = this.computeHuffmanTbl(this.std_dc_luminance_nrcodes,this.std_dc_luminance_values);
         this.UVDC_HT = this.computeHuffmanTbl(this.std_dc_chrominance_nrcodes,this.std_dc_chrominance_values);
         this.YAC_HT = this.computeHuffmanTbl(this.std_ac_luminance_nrcodes,this.std_ac_luminance_values);
         this.UVAC_HT = this.computeHuffmanTbl(this.std_ac_chrominance_nrcodes,this.std_ac_chrominance_values);
      }
      
      private initCategoryNumber(): void
      {
         var _loc3_: number = 0;
         var _loc1_: number = 1;
         var _loc2_: number = 2;
         var _loc4_: number = 1;
         while(_loc4_ <= 15)
         {
            _loc3_ = _loc1_;
            while(_loc3_ < _loc2_)
            {
               this.category[32767 + _loc3_] = _loc4_;
               this.bitcode[32767 + _loc3_] = new (BitString as any)();
               this.bitcode[32767 + _loc3_].len = _loc4_;
               this.bitcode[32767 + _loc3_].val = _loc3_;
               _loc3_++;
            }
            _loc3_ = -(_loc2_ - 1);
            while(_loc3_ <= -_loc1_)
            {
               this.category[32767 + _loc3_] = _loc4_;
               this.bitcode[32767 + _loc3_] = new (BitString as any)();
               this.bitcode[32767 + _loc3_].len = _loc4_;
               this.bitcode[32767 + _loc3_].val = _loc2_ - 1 + _loc3_;
               _loc3_++;
            }
            _loc1_ <<= 1;
            _loc2_ <<= 1;
            _loc4_++;
         }
      }
      
      private writeBits(param1: BitString): void
      {
         var _loc2_: number = param1.val;
         var _loc3_: number = param1.len - 1;
         while(_loc3_ >= 0)
         {
            if(Boolean(_loc2_ & uint(1 << _loc3_)))
            {
               this.bytenew |= uint(1 << this.bytepos);
            }
            _loc3_--;
            --this.bytepos;
            if(this.bytepos < 0)
            {
               if(this.bytenew == 255)
               {
                  this.writeByte(255);
                  this.writeByte(0);
               }
               else
               {
                  this.writeByte(this.bytenew);
               }
               this.bytepos = 7;
               this.bytenew = 0;
            }
         }
      }
      
      private writeByte(param1: number): void
      {
         this.byteout.writeByte(param1);
      }
      
      private writeWord(param1: number): void
      {
         this.writeByte(param1 >> 8 & 0xFF);
         this.writeByte(param1 & 0xFF);
      }
      
      private fDCTQuant(param1: any, param2: any): any
      {
         var _loc3_: number = NaN;
         var _loc4_: number = NaN;
         var _loc5_: number = NaN;
         var _loc6_: number = NaN;
         var _loc7_: number = NaN;
         var _loc8_: number = NaN;
         var _loc9_: number = NaN;
         var _loc10_: number = NaN;
         var _loc11_: number = NaN;
         var _loc12_: number = NaN;
         var _loc13_: number = NaN;
         var _loc14_: number = NaN;
         var _loc15_: number = NaN;
         var _loc16_: number = NaN;
         var _loc17_: number = NaN;
         var _loc18_: number = NaN;
         var _loc19_: number = NaN;
         var _loc20_: number = NaN;
         var _loc21_: number = NaN;
         var _loc22_: number = 0;
         var _loc23_: number = 0;
         _loc22_ = 0;
         while(_loc22_ < 8)
         {
            _loc3_ = param1[_loc23_ + 0 as any] + param1[_loc23_ + 7 as any];
            _loc10_ = param1[_loc23_ + 0 as any] - param1[_loc23_ + 7 as any];
            _loc4_ = param1[_loc23_ + 1 as any] + param1[_loc23_ + 6 as any];
            _loc9_ = param1[_loc23_ + 1 as any] - param1[_loc23_ + 6 as any];
            _loc5_ = param1[_loc23_ + 2 as any] + param1[_loc23_ + 5 as any];
            _loc8_ = param1[_loc23_ + 2 as any] - param1[_loc23_ + 5 as any];
            _loc6_ = param1[_loc23_ + 3 as any] + param1[_loc23_ + 4 as any];
            _loc7_ = param1[_loc23_ + 3 as any] - param1[_loc23_ + 4 as any];
            _loc11_ = _loc3_ + _loc6_;
            _loc14_ = _loc3_ - _loc6_;
            _loc12_ = _loc4_ + _loc5_;
            _loc13_ = _loc4_ - _loc5_;
            param1[_loc23_ + 0 as any] = _loc11_ + _loc12_;
            param1[_loc23_ + 4 as any] = _loc11_ - _loc12_;
            _loc15_ = (_loc13_ + _loc14_) * 0[707106781];
            param1[_loc23_ + 2 as any] = _loc14_ + _loc15_;
            param1[_loc23_ + 6 as any] = _loc14_ - _loc15_;
            _loc11_ = _loc7_ + _loc8_;
            _loc12_ = _loc8_ + _loc9_;
            _loc13_ = _loc9_ + _loc10_;
            _loc19_ = (_loc11_ - _loc13_) * 0[382683433];
            _loc16_ = 0[5411961] * _loc11_ + _loc19_;
            _loc18_ = 1[306562965] * _loc13_ + _loc19_;
            _loc17_ = _loc12_ * 0[707106781];
            _loc20_ = _loc10_ + _loc17_;
            _loc21_ = _loc10_ - _loc17_;
            param1[_loc23_ + 5 as any] = _loc21_ + _loc16_;
            param1[_loc23_ + 3 as any] = _loc21_ - _loc16_;
            param1[_loc23_ + 1 as any] = _loc20_ + _loc18_;
            param1[_loc23_ + 7 as any] = _loc20_ - _loc18_;
            _loc23_ += 8;
            _loc22_++;
         }
         _loc23_ = 0;
         _loc22_ = 0;
         while(_loc22_ < 8)
         {
            _loc3_ = param1[_loc23_ + 0 as any] + param1[_loc23_ + 56 as any];
            _loc10_ = param1[_loc23_ + 0 as any] - param1[_loc23_ + 56 as any];
            _loc4_ = param1[_loc23_ + 8 as any] + param1[_loc23_ + 48 as any];
            _loc9_ = param1[_loc23_ + 8 as any] - param1[_loc23_ + 48 as any];
            _loc5_ = param1[_loc23_ + 16 as any] + param1[_loc23_ + 40 as any];
            _loc8_ = param1[_loc23_ + 16 as any] - param1[_loc23_ + 40 as any];
            _loc6_ = param1[_loc23_ + 24 as any] + param1[_loc23_ + 32 as any];
            _loc7_ = param1[_loc23_ + 24 as any] - param1[_loc23_ + 32 as any];
            _loc11_ = _loc3_ + _loc6_;
            _loc14_ = _loc3_ - _loc6_;
            _loc12_ = _loc4_ + _loc5_;
            _loc13_ = _loc4_ - _loc5_;
            param1[_loc23_ + 0 as any] = _loc11_ + _loc12_;
            param1[_loc23_ + 32 as any] = _loc11_ - _loc12_;
            _loc15_ = (_loc13_ + _loc14_) * 0[707106781];
            param1[_loc23_ + 16 as any] = _loc14_ + _loc15_;
            param1[_loc23_ + 48 as any] = _loc14_ - _loc15_;
            _loc11_ = _loc7_ + _loc8_;
            _loc12_ = _loc8_ + _loc9_;
            _loc13_ = _loc9_ + _loc10_;
            _loc19_ = (_loc11_ - _loc13_) * 0[382683433];
            _loc16_ = 0[5411961] * _loc11_ + _loc19_;
            _loc18_ = 1[306562965] * _loc13_ + _loc19_;
            _loc17_ = _loc12_ * 0[707106781];
            _loc20_ = _loc10_ + _loc17_;
            _loc21_ = _loc10_ - _loc17_;
            param1[_loc23_ + 40 as any] = _loc21_ + _loc16_;
            param1[_loc23_ + 24 as any] = _loc21_ - _loc16_;
            param1[_loc23_ + 8 as any] = _loc20_ + _loc18_;
            param1[_loc23_ + 56 as any] = _loc20_ - _loc18_;
            _loc23_++;
            _loc22_++;
         }
         _loc22_ = 0;
         while(_loc22_ < 64)
         {
            param1[_loc22_ as any] = Math.round(param1[_loc22_ as any] * param2[_loc22_ as any]);
            _loc22_++;
         }
         return param1;
      }
      
      private writeAPP0(): void
      {
         this.writeWord(65504);
         this.writeWord(16);
         this.writeByte(74);
         this.writeByte(70);
         this.writeByte(73);
         this.writeByte(70);
         this.writeByte(0);
         this.writeByte(1);
         this.writeByte(1);
         this.writeByte(0);
         this.writeWord(1);
         this.writeWord(1);
         this.writeByte(0);
         this.writeByte(0);
      }
      
      private writeSOF0(param1: number, param2: number): void
      {
         this.writeWord(65472);
         this.writeWord(17);
         this.writeByte(8);
         this.writeWord(param2);
         this.writeWord(param1);
         this.writeByte(3);
         this.writeByte(1);
         this.writeByte(17);
         this.writeByte(0);
         this.writeByte(2);
         this.writeByte(17);
         this.writeByte(1);
         this.writeByte(3);
         this.writeByte(17);
         this.writeByte(1);
      }
      
      private writeDQT(): void
      {
         var _loc1_: number = 0;
         this.writeWord(65499);
         this.writeWord(132);
         this.writeByte(0);
         _loc1_ = 0;
         while(_loc1_ < 64)
         {
            this.writeByte(this.YTable[_loc1_ as any]);
            _loc1_++;
         }
         this.writeByte(1);
         _loc1_ = 0;
         while(_loc1_ < 64)
         {
            this.writeByte(this.UVTable[_loc1_ as any]);
            _loc1_++;
         }
      }
      
      private writeDHT(): void
      {
         var _loc1_: number = 0;
         this.writeWord(65476);
         this.writeWord(418);
         this.writeByte(0);
         _loc1_ = 0;
         while(_loc1_ < 16)
         {
            this.writeByte(this.std_dc_luminance_nrcodes[_loc1_ + 1 as any]);
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ <= 11)
         {
            this.writeByte(this.std_dc_luminance_values[_loc1_ as any]);
            _loc1_++;
         }
         this.writeByte(16);
         _loc1_ = 0;
         while(_loc1_ < 16)
         {
            this.writeByte(this.std_ac_luminance_nrcodes[_loc1_ + 1 as any]);
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ <= 161)
         {
            this.writeByte(this.std_ac_luminance_values[_loc1_ as any]);
            _loc1_++;
         }
         this.writeByte(1);
         _loc1_ = 0;
         while(_loc1_ < 16)
         {
            this.writeByte(this.std_dc_chrominance_nrcodes[_loc1_ + 1 as any]);
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ <= 11)
         {
            this.writeByte(this.std_dc_chrominance_values[_loc1_ as any]);
            _loc1_++;
         }
         this.writeByte(17);
         _loc1_ = 0;
         while(_loc1_ < 16)
         {
            this.writeByte(this.std_ac_chrominance_nrcodes[_loc1_ + 1 as any]);
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ <= 161)
         {
            this.writeByte(this.std_ac_chrominance_values[_loc1_ as any]);
            _loc1_++;
         }
      }
      
      private writeSOS(): void
      {
         this.writeWord(65498);
         this.writeWord(12);
         this.writeByte(3);
         this.writeByte(1);
         this.writeByte(0);
         this.writeByte(2);
         this.writeByte(17);
         this.writeByte(3);
         this.writeByte(17);
         this.writeByte(0);
         this.writeByte(63);
         this.writeByte(0);
      }
      
      private processDU(param1: any, param2: any, param3: number, param4: any, param5: any): number
      {
         var _loc8_: number = 0;
         var _loc12_: number = 0;
         var _loc13_: number = 0;
         var _loc14_: number = 0;
         var _loc6_: BitString = param5[0];
         var _loc7_: BitString = param5[240];
         var _loc9_: any = this.fDCTQuant(param1,param2);
         _loc8_ = 0;
         while(_loc8_ < 64)
         {
            this.DU[this.ZigZag[_loc8_ as any]] = _loc9_[_loc8_ as any];
            _loc8_++;
         }
         var _loc10_: number = this.DU[0] - param3;
         param3 = Number(this.DU[0]);
         if(_loc10_ == 0)
         {
            this.writeBits(param4[0]);
         }
         else
         {
            this.writeBits(param4[this.category[32767 + _loc10_ as any]]);
            this.writeBits(this.bitcode[32767 + _loc10_]);
         }
         var _loc11_: number = 63;
         while(_loc11_ > 0 && this.DU[_loc11_ as any] == 0)
         {
            _loc11_--;
         }
         if(_loc11_ == 0)
         {
            this.writeBits(_loc6_);
            return param3;
         }
         _loc8_ = 1;
         while(_loc8_ <= _loc11_)
         {
            _loc12_ = _loc8_;
            while(this.DU[_loc8_ as any] == 0 && _loc8_ <= _loc11_)
            {
               _loc8_++;
            }
            _loc13_ = _loc8_ - _loc12_;
            if(_loc13_ >= 16)
            {
               _loc14_ = 1;
               while(_loc14_ <= _loc13_ / 16)
               {
                  this.writeBits(_loc7_);
                  _loc14_++;
               }
               _loc13_ = int(_loc13_ & 0x0F);
            }
            this.writeBits(param5[_loc13_ * 16 + this.category[32767 + this.DU[_loc8_ as any]]]);
            this.writeBits(this.bitcode[32767 + this.DU[_loc8_]]);
            _loc8_++;
         }
         if(_loc11_ != 63)
         {
            this.writeBits(_loc6_);
         }
         return param3;
      }
      
      private RGB2YUV(param1: BitmapData, param2: number, param3: number): void
      {
         var _loc6_: number = 0;
         var _loc7_: number = 0;
         var _loc8_: number = NaN;
         var _loc9_: number = NaN;
         var _loc10_: number = NaN;
         var _loc4_: number = 0;
         var _loc5_: number = 0;
         while(_loc5_ < 8)
         {
            _loc6_ = 0;
            while(_loc6_ < 8)
            {
               _loc7_ = param1.getPixel32(param2 + _loc6_,param3 + _loc5_);
               _loc8_ = Number(_loc7_ >> 16 & 0xFF);
               _loc9_ = Number(_loc7_ >> 8 & 0xFF);
               _loc10_ = Number(_loc7_ & 0xFF);
               this.YDU[_loc4_ as any] = 0[299] * _loc8_ + 0[587] * _loc9_ + 0[114] * _loc10_ - 128;
               this.UDU[_loc4_ as any] = -0[16874] * _loc8_ + -0[33126] * _loc9_ + 0[5] * _loc10_;
               this.VDU[_loc4_ as any] = 0[5] * _loc8_ + -0[41869] * _loc9_ + -0[08131] * _loc10_;
               _loc4_++;
               _loc6_++;
            }
            _loc5_++;
         }
      }
      
      public encode(param1: BitmapData): ByteArray
      {
         var _loc6_: number = 0;
         var _loc7_: BitString = null as any;
         this.byteout = new (ByteArray as any)();
         this.bytenew = 0;
         this.bytepos = 7;
         this.writeWord(65496);
         this.writeAPP0();
         this.writeDQT();
         this.writeSOF0(param1.width,param1.height);
         this.writeDHT();
         this.writeSOS();
         var _loc2_: number = 0;
         var _loc3_: number = 0;
         var _loc4_: number = 0;
         this.bytenew = 0;
         this.bytepos = 7;
         var _loc5_: number = 0;
         while(_loc5_ < param1.height)
         {
            _loc6_ = 0;
            while(_loc6_ < param1.width)
            {
               this.RGB2YUV(param1,_loc6_,_loc5_);
               _loc2_ = this.processDU(this.YDU,this.fdtbl_Y,_loc2_,this.YDC_HT,this.YAC_HT);
               _loc3_ = this.processDU(this.UDU,this.fdtbl_UV,_loc3_,this.UVDC_HT,this.UVAC_HT);
               _loc4_ = this.processDU(this.VDU,this.fdtbl_UV,_loc4_,this.UVDC_HT,this.UVAC_HT);
               _loc6_ += 8;
            }
            _loc5_ += 8;
         }
         if(this.bytepos >= 0)
         {
            _loc7_ = new (BitString as any)();
            _loc7_.len = this.bytepos + 1;
            _loc7_.val = (1 << this.bytepos + 1) - 1;
            this.writeBits(_loc7_);
         }
         this.writeWord(65497);
         return this.byteout;
      }
   }
