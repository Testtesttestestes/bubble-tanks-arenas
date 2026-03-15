// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

export class AnimatorBase extends EventDispatcher{
      
      private static _registeredParents: Dictionary = new Dictionary(true);
      private static enterFrameBeacon: MovieClip = new MovieClip();
      public transformationPoint: Point;
      protected targetState: Record<string, any>;
      private _isPlaying: boolean = false;
      private _time: number = -1;
      protected _target: DisplayObject;
      public repeatCount: number = 1;
      private _lastRenderedTime: number = -1;
      private _spanStart: number = -1;
      public transformationPointZ: number;
      protected _isAnimator3D: boolean;
      private _sceneName: string = "";
      public positionMatrix: Matrix;
      private _frameEvent: string = "enterFrame";
      public autoRewind: boolean = false;
      private _motion: MotionBase;
      private _targetName: string = "";
      private _useCurrentFrame: boolean = false;
      private playCount: number = 0;
      public orientToPath: boolean = false;
      private targetStateOriginal: Record<string, any> = null as any;
      private _targetState3D: any[] = null as any;
      private _targetParent: DisplayObjectContainer = null as any;
      constructor(param1: XML = null as any, param2: DisplayObject = null as any){
         super();
         this.target = param2;
         this._isAnimator3D = false;
         this.transformationPoint = new Point(0.5,0.5);
         this.transformationPointZ = 0;
         this._sceneName = "";
      }
      
      public static processCurrentFrame(param1: MovieClip, param2: AnimatorBase, param3: boolean, param4: boolean = false): void
      {
         let _loc5_: number = 0;
         let _loc6_: number = 0;
         if(Boolean(param2) && Boolean(param1))
         {
            if(!param1.root)
            {
               if(param2.usingCurrentFrame && !param2.isPlaying && param4)
               {
                  param2.startFrameEvents();
               }
               return;
            }
            if(param2.usingCurrentFrame)
            {
               _loc5_ = param1.currentFrame - 1;
               if(param1.scenes.length > 1)
               {
                  if(param1.currentScene.name != param2.sceneName)
                  {
                     _loc5_ = -1;
                  }
               }
               if(_loc5_ >= param2.spanStart && _loc5_ <= param2.spanEnd)
               {
                  _loc6_ = _loc5_ - param2.spanStart;
                  if(!param2.isPlaying)
                  {
                     param2.play(_loc6_,param3);
                  }
                  else if(!param4)
                  {
                     if(_loc5_ == param2.spanEnd)
                     {
                        param2.handleLastFrame(true,false);
                     }
                     else
                     {
                        param2.time = _loc6_;
                     }
                  }
               }
               else if(param2.isPlaying && !param4)
               {
                  param2.end(true,false);
               }
               else if(!param2.isPlaying && param4)
               {
                  param2.startFrameEvents();
               }
            }
            else if(Boolean(param2.targetParent) && Boolean(param2.targetParent[param2.targetName] == null) && param2.targetParent.getChildByName(param2.targetName) == null)
            {
               if(param2.isPlaying)
               {
                  param2.end(true,false);
               }
               else if(param4)
               {
                  param2.startFrameEvents();
               }
            }
            else if(!param2.isPlaying)
            {
               if(param4)
               {
                  param2.play(0,param3);
               }
            }
            else if(!param4)
            {
               param2.nextFrame(false,false);
            }
         }
      }
      
      public static registerParentFrameHandler(param1: MovieClip, param2: AnimatorBase, param3: number, param4: number = 0, param5: boolean = false): void
      {
         let _loc6_: AnimatorParent = _registeredParents[param1]  as unknown as AnimatorParent;
         if(_loc6_ == null)
         {
            _loc6_ = new AnimatorParent();
            _loc6_.parent = param1;
            _registeredParents[param1] = _loc6_;
         }
         if(param3 == -1)
         {
            param3 = param1.currentFrame - 1;
         }
         if(param5)
         {
            param2.useCurrentFrame(true,param3);
         }
         else
         {
            param2.repeatCount = param4;
         }
         _loc6_.animators.push(param2);
      }
      
      private static parentEnterFrameHandler(param1: Event): void
      {
         let _loc2_: any = undefined;
         let _loc3_: AnimatorParent = null;
         let _loc4_: MovieClip = null;
         let _loc5_: any[] = null;
         let _loc6_: number = 0;
         let _loc7_: AnimatorBase = null;
         for (let _loc2_ in _registeredParents)
         {
            _loc3_ = _registeredParents[_loc2_]  as unknown as AnimatorParent;
            if(_loc3_)
            {
               _loc4_ = _loc3_.parent;
               _loc5_ = _loc3_.animators;
               if(!(!_loc4_ || !_loc5_))
               {
                  _loc6_ = 0;
                  while(_loc6_ < _loc5_.length)
                  {
                     _loc7_ = _loc5_[_loc6_]  as unknown as AnimatorBase;
                     if(!_loc7_.usingCurrentFrame || _loc4_.currentFrame != _loc3_.lastFrameHandled)
                     {
                        processCurrentFrame(_loc4_,_loc7_,false);
                     }
                     _loc6_++;
                  }
                  _loc3_.lastFrameHandled = _loc4_.currentFrame;
               }
            }
         }
      }
      
      public static registerButtonState(param1: SimpleButton, param2: AnimatorBase, param3: number): void
      {
         let _loc4_: DisplayObject = param1.upState;
         switch(param3)
         {
            case 1:
               _loc4_ = param1.overState;
               break;
            case 2:
               _loc4_ = param1.downState;
               break;
            case 3:
               _loc4_ = param1.hitTestState;
         }
         if(!_loc4_)
         {
            return;
         }
         param2.target = _loc4_;
         param2.time = 0;
      }
      
      private static get hasRegisteredParents(): boolean
      {
         let _loc1_: any = undefined;
         let _loc2_: number = 0;
         let _loc3_: any = _registeredParents;
         for (let _loc1_ in _loc3_)
         {
            return true;
         }
         return false;
      }
      
      protected setTime3D(param1: number, param2: MotionBase): boolean
      {
         return false;
      }
      
      private handleLastFrame(param1: boolean = false, param2: boolean = true): void
      {
         ++this.playCount;
         if(this.repeatCount == 0 || this.playCount < this.repeatCount)
         {
            this.rewind();
         }
         else
         {
            this.end(param1,param2);
         }
      }
      
      public get targetState3D(): any[]
      {
         return this._targetState3D;
      }
      
      public get target(): DisplayObject
      {
         return this._target;
      }
      
      private get enterFrameHandler(): Function
      {
         if(AnimatorBase.hasRegisteredParents)
         {
            return AnimatorBase.parentEnterFrameHandler;
         }
         return this.handleEnterFrame;
      }
      
      public get usingCurrentFrame(): boolean
      {
         return this._useCurrentFrame;
      }
      
      public set initialPosition(param1: any[])
      {
      }
      
      public useCurrentFrame(param1: boolean, param2: number): void
      {
         this._useCurrentFrame = param1;
         this._spanStart = param2;
      }
      
      public set time(param1: number)
      {
         null;
         null;
         if(param1 == this._time)
         {
            return;
         }
         let _loc2_: MotionBase = this.motion;
         if(param1 > _loc2_.duration - 1)
         {
            param1 = _loc2_.duration - 1;
         }
         else if(param1 < 0)
         {
            param1 = 0;
         }
         this._time = param1;
         this.dispatchEvent(new MotionEvent(MotionEvent.TIME_CHANGE));
         let _loc3_: KeyframeBase = _loc2_.getCurrentKeyframe(param1);
         let _loc4_: boolean = _loc3_.index == this._lastRenderedTime && !_loc3_.tweensLength;
         if(_loc4_)
         {
            return;
         }
         this._target.visible = false;
         if(!_loc3_.blank)
         {
            if(this._isAnimator3D)
            {
               this.setTime3D(param1,_loc2_);
            }
            else
            {
               this.setTimeClassic(param1,_loc2_,_loc3_);
            }
            let _loc5_: ColorTransform = _loc2_.getColorTransform(param1);
            if(_loc5_)
            {
               this._target.transform.colorTransform = null;
            }
            let _loc6_: any[] = _loc2_.getFilters(param1);
            if(_loc6_)
            {
               this._target.filters = null;
            }
            this._target.blendMode = _loc3_.blendMode;
            this._target.visible = true;
         }
         this._lastRenderedTime = this._time;
         this.dispatchEvent(new MotionEvent(MotionEvent.MOTION_UPDATE));
      }
      
      public set target(param1: DisplayObject)
      {
         if(!param1)
         {
            return;
         }
         this._target = param1;
         let _loc2_: boolean = false;
         if(Boolean(this.targetParent) && this.targetName != "")
         {
            if(this.targetStateOriginal)
            {
               this.targetState = this.targetStateOriginal;
               return;
            }
            _loc2_ = true;
         }
         this.targetState = {};
         this.setTargetState();
         if(_loc2_)
         {
            this.targetStateOriginal = this.targetState;
         }
      }
      
      public get isPlaying(): boolean
      {
         return this._isPlaying;
      }
      
      public startFrameEvents(): void
      {
         enterFrameBeacon.addEventListener(this.frameEvent, this.enterFrameHandler.bind(this));
      }
      
      public get frameEvent(): string
      {
         return this._frameEvent;
      }
      
      public stop(): void
      {
         enterFrameBeacon.removeEventListener(this.frameEvent, this.enterFrameHandler.bind(this));
         this._isPlaying = false;
         this.playCount = 0;
         this.rewind();
         this.dispatchEvent(new MotionEvent(MotionEvent.MOTION_END));
      }
      
      public get spanEnd(): number
      {
         if(Boolean(this._motion) && this._motion.duration > 0)
         {
            return this._spanStart + this._motion.duration - 1;
         }
         return this._spanStart;
      }
      
      public get targetParent(): DisplayObjectContainer
      {
         return this._targetParent;
      }
      
      public get spanStart(): number
      {
         return this._spanStart;
      }
      
      public play(param1: number = -1, param2: boolean = true): void
      {
         if(!this._isPlaying)
         {
            if(Boolean(this._target == null) && Boolean(this._targetParent) && this._targetName != "")
            {
               this.target = this._targetParent[this._targetName];
               if(!this.target)
               {
                  this.target = this._targetParent.getChildByName(this._targetName);
               }
            }
            if(param2)
            {
               enterFrameBeacon.addEventListener(this.frameEvent, this.enterFrameHandler.bind(this));
            }
            if(!this.target)
            {
               return;
            }
            this._isPlaying = true;
         }
         this.playCount = 0;
         if(param1 > -1)
         {
            this.time = param1;
         }
         else
         {
            this.rewind();
         }
         this.dispatchEvent(new MotionEvent(MotionEvent.MOTION_START));
      }
      
      public get targetName(): string
      {
         return this._targetName;
      }
      
      public set targetParent(param1: DisplayObjectContainer)
      {
         this._targetParent = param1;
      }
      
      protected setTargetState(): void
      {
      }
      
      protected setTimeClassic(param1: number, param2: MotionBase, param3: KeyframeBase): boolean
      {
         return false;
      }
      
      private handleEnterFrame(param1: Event): void
      {
         this.nextFrame();
      }
      
      public get motion(): MotionBase
      {
         return this._motion;
      }
      
      public get sceneName(): string
      {
         return this._sceneName;
      }
      
      public nextFrame(param1: boolean = false, param2: boolean = true): void
      {
         if(this.time >= this.motion.duration - 1)
         {
            this.handleLastFrame(param1,param2);
         }
         else
         {
            ++this.time;
         }
      }
      
      public get time(): number
      {
         return this._time;
      }
      
      public resume(): void
      {
         enterFrameBeacon.addEventListener(this.frameEvent, this.enterFrameHandler.bind(this));
         this._isPlaying = true;
      }
      
      public rewind(): void
      {
         this.time = 0;
      }
      
      public set frameEvent(param1: string)
      {
         this._frameEvent = param1;
      }
      
      public set targetState3D(param1: any[])
      {
         this._targetState3D = param1;
      }
      
      public end(param1: boolean = false, param2: boolean = true): void
      {
         if(param2)
         {
            enterFrameBeacon.removeEventListener(this.frameEvent, this.enterFrameHandler.bind(this));
         }
         this._isPlaying = false;
         this.playCount = 0;
         if(this.autoRewind)
         {
            this.rewind();
         }
         else if(this.time != this.motion.duration - 1)
         {
            this.time = this.motion.duration - 1;
         }
         if(param1)
         {
            if(Boolean(this._targetParent) && this._targetName != "")
            {
               this._target = null;
            }
            this._lastRenderedTime = -1;
            this._time = -1;
         }
         this.dispatchEvent(new MotionEvent(MotionEvent.MOTION_END));
      }
      
      public set motion(param1: MotionBase)
      {
         this._motion = param1;
      }
      
      public set sceneName(param1: string)
      {
         this._sceneName = param1;
      }
      
      public pause(): void
      {
         enterFrameBeacon.removeEventListener(this.frameEvent, this.enterFrameHandler.bind(this));
         this._isPlaying = false;
      }
      
      public set targetName(param1: string)
      {
         this._targetName = param1;
      }
   }

class AnimatorParent
{
   
   public parent: MovieClip = null as any;
   public lastFrameHandled: number = -1;
   public animators: any[] = new Array();
   public AnimatorParent(): void{
      super();
   }
}
