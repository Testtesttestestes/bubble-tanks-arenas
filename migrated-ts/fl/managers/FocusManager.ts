// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.managers

import { Button } from '../controls/Button';
import { UIComponent } from '../core/UIComponent';
import { IFocusManager } from './IFocusManager';
import { IFocusManagerComponent } from './IFocusManagerComponent';
import { IFocusManagerGroup } from './IFocusManagerGroup';

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















   export class FocusManager implements IFocusManager
   {
  [key: string]: any;
      
      private focusableObjects!: Dictionary;
      private _showFocusIndicator: boolean = true;
      private defButton!: Button;
      private focusableCandidates!: any;
      private _form!: DisplayObjectContainer;
      private _defaultButtonEnabled: boolean = true;
      private activated: boolean = false;
      private _defaultButton!: Button;
      private calculateCandidates: boolean = true;
      private lastFocus!: InteractiveObject;
      private lastAction!: string;
      constructor(param1: DisplayObjectContainer){

         this.focusableObjects = new (Dictionary as any)(true);
         if(param1 != null)
         {
            this._form = param1;
            this.addFocusables((param1));
            param1.addEventListener(Event.ADDED, this.addedHandler.bind(this));
            param1.addEventListener(Event.REMOVED, this.removedHandler.bind(this));
            this.activate();
         }
      }
      
      public get showFocusIndicator(): boolean
      {
         return this._showFocusIndicator;
      }
      
      private getIndexOfNextObject(param1: number, param2: boolean, param3: boolean, param4: string): number
      {




         var _loc5_: number = int(this.focusableCandidates.length);
         var _loc6_: number = param1;
         while(true)
         {
            if(param2)
            {
               param1--;
            }
            else
            {
               param1++;
            }
            if(param3)
            {
               if(param2 && param1 < 0)
               {
                  break;
               }
               if(!param2 && param1 == _loc5_)
               {
                  break;
               }
            }
            else
            {
               param1 = int((param1 + _loc5_) % _loc5_);
               if(_loc6_ == param1)
               {
                  break;
               }
            }
            if(this.isValidFocusCandidate(this.focusableCandidates[param1 as any],param4))
            {
               var _loc7_: DisplayObject = (this.findFocusManagerComponent(this.focusableCandidates[param1 as any]) as unknown as DisplayObject);
               if(_loc7_ != null /* instanceof IFocusManagerGroup */)
               {
                  var _loc8_: IFocusManagerGroup = (null as unknown as IFocusManagerGroup);
                  var _loc9_: number = 0;
                  while(0 < this.focusableCandidates.length)
                  {
                     var _loc10_: DisplayObject = this.focusableCandidates[0];
                     if(_loc10_ != null /* instanceof IFocusManagerGroup */)
                     {
                        var _loc11_: IFocusManagerGroup = (null as unknown as IFocusManagerGroup);
                        if(_loc11_.groupName == (null as any).groupName && Boolean((null as any).selected))
                        {
                           param1 = 0;
                           break;
                        }
                     }
                     _loc9_++;
                  }
               }
               return param1;
            }
         }
         return param1;
      }
      
      private mouseFocusChangeHandler(param1: any): void
      {
         if(param1.relatedObject instanceof TextField)
         {
            return;
         }
         param1.preventDefault();
      }
      
      public set form(param1: DisplayObjectContainer)
      {
         this._form = param1;
      }
      
      private addFocusables(param1: DisplayObject, param2: boolean = false): void
      {
         var focusable: IFocusManagerComponent = null as any;
         var io: InteractiveObject = null as any;
         var doc: DisplayObjectContainer = null as any;
         var i: number = 0;
         var child: DisplayObject = null as any;
         var o: DisplayObject = param1;
         var skipTopLevel: boolean = param2;
         if(!skipTopLevel)
         {
            if(o != null /* instanceof IFocusManagerComponent */)
            {
               focusable = (o as unknown as IFocusManagerComponent);
               if(focusable.focusEnabled)
               {
                  if(focusable.tabEnabled && this.isTabVisible(o))
                  {
                     this.focusableObjects[o as any] = true;
                     this.calculateCandidates = true;
                  }
                  o.addEventListener(Event.TAB_ENABLED_CHANGE, this.tabEnabledChangeHandler.bind(this));
                  o.addEventListener(Event.TAB_INDEX_CHANGE, this.tabIndexChangeHandler.bind(this));
               }
            }
            else if(o instanceof InteractiveObject)
            {
               io = o  as unknown as InteractiveObject;
               if(Boolean(io) && Boolean(io.tabEnabled) && this.findFocusManagerComponent(io) == io)
               {
                  this.focusableObjects[io as any] = true;
                  this.calculateCandidates = true;
               }
               io.addEventListener(Event.TAB_ENABLED_CHANGE, this.tabEnabledChangeHandler.bind(this));
               io.addEventListener(Event.TAB_INDEX_CHANGE, this.tabIndexChangeHandler.bind(this));
            }
         }
         if(o instanceof DisplayObjectContainer)
         {
            doc = (o as unknown as DisplayObjectContainer);
            o.addEventListener(Event.TAB_CHILDREN_CHANGE, this.tabChildrenChangeHandler.bind(this));
            if(doc instanceof Stage || doc.parent instanceof Stage || doc.tabChildren)
            {
               i = 0;
               while(i < doc.numChildren)
               {
                  try
                  {
                     child = doc.getChildAt(i);
                     if(child != null)
                     {
                        this.addFocusables(doc.getChildAt(i));
                     }
                  }
                  catch (error: any)
                  {
                  }
                  i++;
               }
            }
         }
      }
      
      private getChildIndex(param1: DisplayObjectContainer, param2: DisplayObject): number
      {
         return param1.getChildIndex(param2);
      }
      
      public findFocusManagerComponent(param1: InteractiveObject): InteractiveObject
      {
         var _loc2_: InteractiveObject = param1;
         while(param1)
         {
            if(param1 != null /* instanceof IFocusManagerComponent */ && (param1 as unknown as IFocusManagerComponent).focusEnabled)
            {
               return param1;
            }
            param1 = param1.parent;
         }
         return _loc2_;
      }
      
      private focusOutHandler(param1: any): void
      {
         var _loc2_: InteractiveObject = param1.target  as unknown as InteractiveObject;
      }
      
      private isValidFocusCandidate(param1: DisplayObject, param2: string): boolean
      {

         if(!this.isEnabledAndVisible(param1))
         {
            return false;
         }
         if(param1 != null /* instanceof IFocusManagerGroup */)
         {
            var _loc3_: IFocusManagerGroup = (param1 as unknown as IFocusManagerGroup);
            if(param2 == (null as any).groupName)
            {
               return false;
            }
         }
         return true;
      }
      
      private setFocusToNextObject(param1: any): void
      {
         if(!this.hasFocusableObjects())
         {
            return;
         }
         var _loc2_: InteractiveObject = this.getNextFocusManagerComponent(param1.shiftKey);
         if(_loc2_)
         {
            this.setFocus(_loc2_);
         }
      }
      
      private sortFocusableObjectsTabIndex(): void
      {
         var _loc1_: any = null as any;
         var _loc2_: InteractiveObject = null as any;
         this.focusableCandidates = [];
         for (let _loc1_ in this.focusableObjects)
         {
            _loc2_ = (_loc1_ as unknown as InteractiveObject);
            if(Boolean(_loc2_.tabIndex) && !isNaN(Number(_loc2_.tabIndex)))
            {
               this.focusableCandidates.push(_loc2_ as any);
            }
         }
         this.focusableCandidates.sort(this.sortByTabIndex);
      }
      
      private removeFocusables(param1: DisplayObject): void
      {
         var _loc2_: any = null as any;
         var _loc3_: DisplayObject = null as any;
         if(param1 instanceof DisplayObjectContainer)
         {
            param1.removeEventListener(Event.TAB_CHILDREN_CHANGE, this.tabChildrenChangeHandler.bind(this));
            param1.removeEventListener(Event.TAB_INDEX_CHANGE, this.tabIndexChangeHandler.bind(this));
            for (let _loc2_ in this.focusableObjects)
            {
               _loc3_ = (_loc2_ as unknown as DisplayObject);
               if((param1 as unknown as DisplayObjectContainer).contains(_loc3_))
               {
                  if(_loc3_ == this.lastFocus)
                  {
                     this.lastFocus = null as any;
                  }
                  _loc3_.removeEventListener(Event.TAB_ENABLED_CHANGE, this.tabEnabledChangeHandler.bind(this));
                  delete this.focusableObjects[_loc2_ as any];
                  this.calculateCandidates = true;
               }
            }
         }
      }
      
      private getTopLevelFocusTarget(param1: InteractiveObject): InteractiveObject
      {
         while(param1 != (this.form as unknown as InteractiveObject))
         {
            if(param1 != null /* instanceof IFocusManagerComponent */ && (param1 as unknown as IFocusManagerComponent).focusEnabled && (param1 as unknown as IFocusManagerComponent).mouseFocusEnabled && (param1 as unknown as UIComponent).enabled)
            {
               return param1;
            }
            param1 = param1.parent;
            if(param1 == null)
            {
               break;
            }
         }
         return null;
      }
      
      public sendDefaultButtonEvent(): void
      {
         this.defButton.dispatchEvent(new (MouseEvent as any)("click"));
      }
      
      private addedHandler(param1: any): void
      {
         var _loc2_: DisplayObject = (param1.target as unknown as DisplayObject);
         if(_loc2_.stage)
         {
            this.addFocusables((param1.target));
         }
      }
      
      private isEnabledAndVisible(param1: DisplayObject): boolean
      {


         var _loc2_: DisplayObjectContainer = (this.form as unknown as DisplayObject).parent;
         while(param1 != _loc2_)
         {
            if(param1 instanceof UIComponent)
            {
               if(!(param1 as unknown as UIComponent).enabled)
               {
                  return false;
               }
            }
            else if(param1 instanceof TextField)
            {
               var _loc3_: TextField = (param1 as unknown as TextField);
               if((null as any).type == TextFieldType.DYNAMIC || !(null as any).selectable)
               {
                  return false;
               }
            }
            else if(param1 instanceof SimpleButton)
            {
               var _loc4_: SimpleButton = (param1 as unknown as SimpleButton);
               if(!_loc4_.enabled)
               {
                  return false;
               }
            }
            if(!param1.visible)
            {
               return false;
            }
            param1 = param1.parent;
         }
         return true;
      }
      
      private tabChildrenChangeHandler(param1: any): void
      {
         if(param1.target != param1.currentTarget)
         {
            return;
         }
         this.calculateCandidates = true;
         var _loc2_: DisplayObjectContainer = (param1.target as unknown as DisplayObjectContainer);
         if(_loc2_.tabChildren)
         {
            this.addFocusables(_loc2_,true);
         }
         else
         {
            this.removeFocusables(_loc2_);
         }
      }
      
      private deactivateHandler(param1: any): void
      {
         var _loc2_: InteractiveObject = (param1.target as unknown as InteractiveObject);
      }
      
      public setFocus(param1: InteractiveObject): void
      {
         if(param1 != null /* instanceof IFocusManagerComponent */)
         {
            (param1 as unknown as IFocusManagerComponent).setFocus();
         }
         else
         {
            this.form.stage.focus = param1;
         }
      }
      
      public getFocus(): InteractiveObject
      {
         var _loc1_: InteractiveObject = this.form.stage.focus;
         return this.findFocusManagerComponent(_loc1_);
      }
      
      private hasFocusableObjects(): boolean
      {
         var _loc1_: any = null as any;
         var _loc2_: number = 0;
         var _loc3_: any = this.focusableObjects;
         for (let _loc1_ in _loc3_)
         {
            return true;
         }
         return false;
      }
      
      private tabIndexChangeHandler(param1: any): void
      {
         this.calculateCandidates = true;
      }
      
      public set defaultButton(param1: Button)
      {
         var _loc2_: Button = param1 ? (param1 as unknown as Button) : null;
         if(_loc2_ != this._defaultButton)
         {
            if(_defaultButton)
            {
               _defaultButton.emphasized = false;
            }
            if(defButton)
            {
               defButton.emphasized = false;
            }
            this._defaultButton = _loc2_;
            this.defButton = _loc2_;
            if(_loc2_)
            {
               _loc2_.emphasized = true;
            }
         }
      }
      
      private sortFocusableObjects(): void
      {
         var _loc1_: any = null as any;
         var _loc2_: InteractiveObject = null as any;
         this.focusableCandidates = [];
         for (let _loc1_ in this.focusableObjects)
         {
            _loc2_ = (_loc1_ as unknown as InteractiveObject);
            if(Boolean(_loc2_.tabIndex) && Boolean(!isNaN(Number(_loc2_.tabIndex))) && _loc2_.tabIndex > 0)
            {
               this.sortFocusableObjectsTabIndex();
               return;
            }
            this.focusableCandidates.push(_loc2_ as any);
         }
         this.focusableCandidates.sort(this.sortByDepth);
      }
      
      private keyFocusChangeHandler(param1: any): void
      {
         this.showFocusIndicator = true;
         if((param1.keyCode == Keyboard.TAB || param1.keyCode == 0) && !param1.isDefaultPrevented())
         {
            this.setFocusToNextObject(param1);
            param1.preventDefault();
         }
      }
      
      private getIndexOfFocusedObject(param1: DisplayObject): number
      {
         var _loc2_: number = int(this.focusableCandidates.length);
         var _loc3_: number = 0;
         _loc3_ = 0;
         while(_loc3_ < _loc2_)
         {
            if(focusableCandidates[_loc3_ as any] == param1)
            {
               return _loc3_;
            }
            _loc3_++;
         }
         return -1;
      }
      
      public hideFocus(): void
      {
      }
      
      private removedHandler(param1: any): void
      {
         var _loc4_: InteractiveObject = null as any;
         var _loc3_: DisplayObject = (param1.target as unknown as DisplayObject);
         if(_loc3_ != null /* instanceof IFocusManagerComponent */ && this.focusableObjects[_loc3_ as any] == true)
         {
            if(_loc3_ == this.lastFocus)
            {
               (this.lastFocus as unknown as IFocusManagerComponent).drawFocus(false);
               this.lastFocus = null as any;
            }
            _loc3_.removeEventListener(Event.TAB_ENABLED_CHANGE, this.tabEnabledChangeHandler.bind(this));
            delete this.focusableObjects[_loc3_ as any];
            this.calculateCandidates = true;
         }
         else if(_loc3_ instanceof InteractiveObject && this.focusableObjects[_loc3_ as any] == true)
         {
            _loc4_ = _loc3_  as unknown as InteractiveObject;
            if(_loc4_)
            {
               if(_loc4_ == this.lastFocus)
               {
                  this.lastFocus = null as any;
               }
               delete this.focusableObjects[_loc4_ as any];
               this.calculateCandidates = true;
            }
            _loc3_.addEventListener(Event.TAB_ENABLED_CHANGE, this.tabEnabledChangeHandler.bind(this));
         }
         this.removeFocusables(_loc3_);
      }
      
      private sortByDepth(param1: InteractiveObject, param2: InteractiveObject): number
      {
         var _loc5_: number = 0;
         var _loc6_: string = null as any;
         var _loc7_: string = null as any;
         var _loc3_: string = "";
         var _loc4_: string = "";
         var _loc9_: DisplayObject = (param1 as unknown as DisplayObject);
         var _loc10_: DisplayObject = (param2 as unknown as DisplayObject);
         while(_loc9_ != (this.form as unknown as DisplayObject) && Boolean(_loc9_.parent))
         {
            _loc5_ = this.getChildIndex(_loc9_.parent,_loc9_);
            _loc6_ = _loc5_.toString(16);
            if(_loc6_.length < 4)
            {
               _loc7_ = "0000".substring(0,4 - _loc6_.length) + _loc6_;
            }
            _loc3_ = _loc7_ + _loc3_;
            _loc9_ = _loc9_.parent;
         }
         while(_loc10_ != (this.form as unknown as DisplayObject) && Boolean(_loc10_.parent))
         {
            _loc5_ = this.getChildIndex(_loc10_.parent,_loc10_);
            _loc6_ = _loc5_.toString(16);
            if(_loc6_.length < 4)
            {
               _loc7_ = "0000".substring(0,4 - _loc6_.length) + _loc6_;
            }
            _loc4_ = _loc7_ + _loc4_;
            _loc10_ = _loc10_.parent;
         }
         return _loc3_ > _loc4_ ? 1 : (_loc3_ < _loc4_ ? -1 : 0);
      }
      
      public get defaultButton(): Button
      {
         return this._defaultButton;
      }
      
      private activateHandler(param1: any): void
      {
         var _loc2_: InteractiveObject = (param1.target as unknown as InteractiveObject);
         if(lastFocus)
         {
            if(lastFocus != null /* instanceof IFocusManagerComponent */)
            {
               (lastFocus as unknown as IFocusManagerComponent).setFocus();
            }
            else
            {
               this.form.stage.focus = lastFocus;
            }
         }
         this.lastAction = "ACTIVATE";
      }
      
      public showFocus(): void
      {
      }
      
      public set defaultButtonEnabled(param1: boolean)
      {
         this._defaultButtonEnabled = param1;
      }
      
      public getNextFocusManagerComponent(param1: boolean = false): InteractiveObject
      {
         var _loc8_: IFocusManagerGroup = null as any;
         if(!this.hasFocusableObjects())
         {
            return null;
         }
         if(calculateCandidates)
         {
            this.sortFocusableObjects();
            calculateCandidates = false;
         }
         var _loc2_: DisplayObject = this.form.stage.focus;
         _loc2_ = (this.findFocusManagerComponent((_loc2_ as unknown as InteractiveObject)) as unknown as DisplayObject);
         var _loc3_: string = "";
         if(_loc2_ != null /* instanceof IFocusManagerGroup */)
         {
            _loc8_ = (_loc2_ as unknown as IFocusManagerGroup);
            _loc3_ = _loc8_.groupName;
         }
         var _loc4_: number = this.getIndexOfFocusedObject(_loc2_);
         var _loc5_: boolean = false;
         var _loc6_: number = _loc4_;
         if(_loc4_ == -1)
         {
            if(param1)
            {
               _loc4_ = int(this.focusableCandidates.length);
            }
            _loc5_ = true;
         }
         var _loc7_: number = this.getIndexOfNextObject(_loc4_,param1,_loc5_,_loc3_);
         return this.findFocusManagerComponent(this.focusableCandidates[_loc7_ as any]);
      }
      
      private mouseDownHandler(param1: any): void
      {
         if(param1.isDefaultPrevented())
         {
            return;
         }
         var _loc2_: InteractiveObject = this.getTopLevelFocusTarget((param1.target as unknown as InteractiveObject));
         if(!_loc2_)
         {
            return;
         }
         this.showFocusIndicator = false;
         if((_loc2_ != this.lastFocus || this.lastAction == "ACTIVATE") && !(_loc2_ instanceof TextField))
         {
            this.setFocus(_loc2_);
         }
         this.lastAction = "MOUSEDOWN";
      }
      
      private isTabVisible(param1: DisplayObject): boolean
      {
         var _loc2_: DisplayObjectContainer = param1.parent;
         while(Boolean(_loc2_) && Boolean(!(_loc2_ instanceof Stage)) && !(_loc2_.parent && _loc2_.parent instanceof Stage))
         {
            if(!_loc2_.tabChildren)
            {
               return false;
            }
            _loc2_ = _loc2_.parent;
         }
         return true;
      }
      
      public get nextTabIndex(): number
      {
         return 0;
      }
      
      private keyDownHandler(param1: any): void
      {
         if(param1.keyCode == Keyboard.TAB)
         {
            this.lastAction = "KEY";
            if(calculateCandidates)
            {
               this.sortFocusableObjects();
               calculateCandidates = false;
            }
         }
         if(Boolean(this.defaultButtonEnabled && param1.keyCode == Keyboard.ENTER) && Boolean(this.defaultButton) && this.defButton.enabled)
         {
            this.sendDefaultButtonEvent();
         }
      }
      
      private focusInHandler(param1: any): void
      {

         var _loc2_: InteractiveObject = (param1.target as unknown as InteractiveObject);
         if(this.form.contains(_loc2_))
         {
            this.lastFocus = this.findFocusManagerComponent((_loc2_ as unknown as InteractiveObject));
            if(lastFocus instanceof Button)
            {
               var _loc3_: Button = (lastFocus as unknown as Button);
               if(defButton)
               {
                  defButton.emphasized = false;
                  defButton = null as any;
                  (null as any).emphasized = true;
               }
            }
            else if(Boolean(this.defButton) && this.defButton != this._defaultButton)
            {
               this.defButton.emphasized = false;
               this.defButton = this._defaultButton;
               this._defaultButton.emphasized = true;
            }
         }
      }
      
      private tabEnabledChangeHandler(param1: any): void
      {
         this.calculateCandidates = true;
         var _loc2_: InteractiveObject = (param1.target as unknown as InteractiveObject);
         var _loc3_: boolean = this.focusableObjects[_loc2_ as any] == true;
         if(_loc2_.tabEnabled)
         {
            if(!_loc3_ && this.isTabVisible(_loc2_))
            {
               if(!(_loc2_ != null /* instanceof IFocusManagerComponent */))
               {
                  _loc2_.focusRect = false;
               }
               this.focusableObjects[_loc2_ as any] = true;
            }
         }
         else if(_loc3_)
         {
            delete this.focusableObjects[_loc2_ as any];
         }
      }
      
      public set showFocusIndicator(param1: boolean)
      {
         this._showFocusIndicator = param1;
      }
      
      public get form(): DisplayObjectContainer
      {
         return this._form;
      }
      
      private sortByTabIndex(param1: InteractiveObject, param2: InteractiveObject): number
      {
         return param1.tabIndex > param2.tabIndex ? 1 : (param1.tabIndex < param2.tabIndex ? -1 : int(this.sortByDepth(param1,param2)));
      }
      
      public get defaultButtonEnabled(): boolean
      {
         return this._defaultButtonEnabled;
      }
      
      public activate(): void
      {
         if(activated)
         {
            return;
         }
         this.form.stage.addEventListener(FocusEvent.MOUSE_FOCUS_CHANGE, this.mouseFocusChangeHandler.bind(this));
         this.form.stage.addEventListener(FocusEvent.KEY_FOCUS_CHANGE, this.keyFocusChangeHandler.bind(this));
         this.form.addEventListener("focusin", this.focusInHandler.bind(this));
         this.form.addEventListener("focusout", this.focusOutHandler.bind(this));
         this.form.stage.addEventListener(Event.ACTIVATE, this.activateHandler.bind(this));
         this.form.stage.addEventListener(Event.DEACTIVATE, this.deactivateHandler.bind(this));
         this.form.addEventListener("mousedown", this.mouseDownHandler.bind(this));
         this.form.addEventListener("keydown", this.keyDownHandler.bind(this));
         this.activated = true;
         if(lastFocus)
         {
            this.setFocus(lastFocus);
         }
      }
      
      public deactivate(): void
      {
         this.form.stage.removeEventListener(FocusEvent.MOUSE_FOCUS_CHANGE, this.mouseFocusChangeHandler.bind(this));
         this.form.stage.removeEventListener(FocusEvent.KEY_FOCUS_CHANGE, this.keyFocusChangeHandler.bind(this));
         this.form.removeEventListener("focusin", this.focusInHandler.bind(this));
         this.form.removeEventListener("focusout", this.focusOutHandler.bind(this));
         this.form.stage.removeEventListener(Event.ACTIVATE, this.activateHandler.bind(this));
         this.form.stage.removeEventListener(Event.DEACTIVATE, this.deactivateHandler.bind(this));
         this.form.removeEventListener("mousedown", this.mouseDownHandler.bind(this));
         this.form.removeEventListener("keydown", this.keyDownHandler.bind(this));
         this.activated = false;
      }
   }
