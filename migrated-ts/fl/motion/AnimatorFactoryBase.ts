// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

export class AnimatorFactoryBase{
      
      protected _transformationPoint: Point;
      private _animators: Dictionary;
      protected _transformationPointZ: number;
      private _motion: MotionBase;
      protected _sceneName: string;
      protected _is3D: boolean;
      constructor(param1: MotionBase){
         super();
         this._motion = param1;
         this._animators = new Dictionary();
         this._transformationPoint = new Point(0.5,0.5);
         this._transformationPointZ = 0;
         this._is3D = false;
         this._sceneName = "";
      }
      
      public addTargetInfo(param1: DisplayObject, param2: string, param3: number = 0, param4: boolean = true, param5: number = -1, param6: boolean = false, param7: any[] = null as any): AnimatorBase
      {
         let _loc11_: any = null;
         if(!(param1 instanceof DisplayObjectContainer) && !(param1 instanceof SimpleButton))
         {
            return null;
         }
         let _loc8_: Dictionary = this._animators[param1];
         if(!_loc8_)
         {
            _loc8_ = new Dictionary();
            this._animators[param1] = _loc8_;
         }
         let _loc9_: AnimatorBase = _loc8_[param2];
         let _loc10_: boolean = false;
         if(!_loc9_)
         {
            _loc9_ = this.getNewAnimator();
            _loc11_ = getDefinitionByName("flash.events.Event")  as unknown as Class;
            if(_loc11_.hasOwnProperty("FRAME_CONSTRUCTED"))
            {
               _loc9_.frameEvent = "frameConstructed";
            }
            _loc8_[param2] = _loc9_;
            _loc10_ = true;
         }
         _loc9_.motion = this._motion;
         _loc9_.transformationPoint = this._transformationPoint;
         _loc9_.transformationPointZ = this._transformationPointZ;
         _loc9_.sceneName = this._sceneName;
         if(_loc10_)
         {
            if(param1 instanceof MovieClip)
            {
               AnimatorBase.registerParentFrameHandler(param1  as unknown as MovieClip,_loc9_,param5,param3,param6);
            }
         }
         if(param1 instanceof MovieClip)
         {
            _loc9_.targetParent = (param1 as unknown as MovieClip);
            _loc9_.targetName = param2;
         }
         else if(param1 instanceof SimpleButton)
         {
            AnimatorBase.registerButtonState(param1  as unknown as SimpleButton,_loc9_,param5);
         }
         if(param7)
         {
            _loc9_.initialPosition = param7;
         }
         if(param4)
         {
            AnimatorBase.processCurrentFrame(param1  as unknown as MovieClip,_loc9_,true,true);
         }
         return _loc9_;
      }
      
      public set transformationPointZ(param1: number)
      {
         this._transformationPointZ = param1;
      }
      
      public set transformationPoint(param1: Point)
      {
         this._transformationPoint = param1;
      }
      
      protected getNewAnimator(): AnimatorBase
      {
         return null;
      }
      
      public get motion(): MotionBase
      {
         return this._motion;
      }
      
      public addTarget(param1: DisplayObject, param2: number = 0, param3: boolean = true, param4: number = -1, param5: boolean = false): AnimatorBase
      {
         if(param1)
         {
            return this.addTargetInfo(param1.parent,param1.name,param2,param3,param4,param5);
         }
         return null;
      }
      
      public set sceneName(param1: string)
      {
         this._sceneName = param1;
      }
   }
