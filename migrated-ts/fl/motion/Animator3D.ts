// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

export class Animator3D extends AnimatorBase{
      
      protected static readonly EPSILON: number = 1e-8;
      private _initialPosition: Vector3D;
      private _initialMatrixOfTarget: Matrix3D;
      constructor(param1: XML = null as any, param2: DisplayObject = null as any){
         super(param1,param2);
         this.transformationPoint = new Point(0,0);
         this._initialPosition = null;
         this._initialMatrixOfTarget = null;
         this._isAnimator3D = true;
      }
      
      protected static convertMatrixToMatrix3D(param1: Matrix): Matrix3D
      {
         let _loc2_: Array<Number> = new Array<Number>(16);
         _loc2_[0] = param1.a;
         _loc2_[1] = param1.b;
         _loc2_[2] = 0;
         _loc2_[3] = 0;
         _loc2_[4] = param1.c;
         _loc2_[5] = param1.d;
         _loc2_[6] = 0;
         _loc2_[7] = 0;
         _loc2_[8] = 0;
         _loc2_[9] = 0;
         _loc2_[10] = 1;
         _loc2_[11] = 0;
         _loc2_[12] = param1.tx;
         _loc2_[13] = param1.ty;
         _loc2_[14] = 0;
         _loc2_[15] = 1;
         return new Matrix3D(_loc2_);
      }
      
      protected static getSign(param1: number): number
      {
         return param1 < -EPSILON ? -1 : (param1 > EPSILON ? 1 : 0);
      }
      
      protected setTime3D(param1: number, param2: MotionBase): boolean
      {
         let _loc4_: Matrix3D = null;
         let _loc5_: Matrix3D = null;
         let _loc6_: number = NaN;
         let _loc7_: number = NaN;
         let _loc8_: number = NaN;
         let _loc9_: number = NaN;
         let _loc10_: number = NaN;
         let _loc11_: number = NaN;
         let _loc12_: Matrix = null;
         let _loc13_: Matrix3D = null;
         let _loc3_: Matrix3D = param2.getMatrix3D(param1)  as unknown as Matrix3D;
         if(_loc3_)
         {
            _loc4_ = _loc3_.clone();
            if(this._initialMatrixOfTarget)
            {
               _loc4_.append(this._initialMatrixOfTarget);
            }
            this._target.transform.matrix3D = _loc4_;
            return true;
         }
         if(param2.is3D)
         {
            _loc5_ = new Matrix3D();
            _loc6_ = param2.getValue(param1,Tweenables.ROTATION_X) * Math.PI / 180;
            _loc7_ = param2.getValue(param1,Tweenables.ROTATION_Y) * Math.PI / 180;
            _loc8_ = param2.getValue(param1,Tweenables.ROTATION_CONCAT) * Math.PI / 180;
            _loc5_.prepend(MatrixTransformer3D.rotateAboutAxis(_loc8_,MatrixTransformer3D.AXIS_Z));
            _loc5_.prepend(MatrixTransformer3D.rotateAboutAxis(_loc7_,MatrixTransformer3D.AXIS_Y));
            _loc5_.prepend(MatrixTransformer3D.rotateAboutAxis(_loc6_,MatrixTransformer3D.AXIS_X));
            _loc9_ = param2.getValue(param1,Tweenables.X);
            _loc10_ = param2.getValue(param1,Tweenables.Y);
            _loc11_ = param2.getValue(param1,Tweenables.Z);
            if(getSign(_loc9_) != 0 || getSign(_loc10_) != 0 || getSign(_loc11_) != 0)
            {
               _loc5_.appendTranslation(_loc9_,_loc10_,_loc11_);
            }
            _loc5_.prependTranslation(-this.transformationPoint.x,-this.transformationPoint.y,-this.transformationPointZ);
            if(this._initialPosition)
            {
               _loc5_.appendTranslation(this._initialPosition.x,this._initialPosition.y,this._initialPosition.z);
            }
            _loc12_ = this.getScaleSkewMatrix(param2,param1,this.transformationPoint.x,this.transformationPoint.y);
            _loc13_ = convertMatrixToMatrix3D(_loc12_);
            _loc5_.prepend(_loc13_);
            if(this._initialMatrixOfTarget)
            {
               _loc5_.append(this._initialMatrixOfTarget);
            }
            this._target.transform.matrix3D = _loc5_;
         }
         return false;
      }
      
      public set initialPosition(param1: any[])
      {
         if(param1.length == 3)
         {
            this._initialPosition = new Vector3D();
            this._initialPosition.x = param1[0];
            this._initialPosition.y = param1[1];
            this._initialPosition.z = param1[2];
         }
      }
      
      protected setTargetState(): void
      {
         if(this._target.transform.matrix != null)
         {
            this._initialMatrixOfTarget = convertMatrixToMatrix3D(this._target.transform.matrix);
         }
      }
      
      private getScaleSkewMatrix(param1: MotionBase, param2: number, param3: number, param4: number): Matrix
      {
         let _loc5_: number = param1.getValue(param2,Tweenables.SCALE_X);
         let _loc6_: number = param1.getValue(param2,Tweenables.SCALE_Y);
         let _loc7_: number = param1.getValue(param2,Tweenables.SKEW_X);
         let _loc8_: number = param1.getValue(param2,Tweenables.SKEW_Y);
         let _loc9_: Matrix = new Matrix();
         _loc9_.translate(-param3,-param4);
         let _loc10_: Matrix = new Matrix();
         _loc10_.scale(_loc5_,_loc6_);
         _loc9_.concat(_loc10_);
         let _loc11_: Matrix = new Matrix();
         _loc11_.a = Math.cos(_loc8_ * (Math.PI / 180));
         _loc11_.b = Math.sin(_loc8_ * (Math.PI / 180));
         _loc11_.c = -Math.sin(_loc7_ * (Math.PI / 180));
         _loc11_.d = Math.cos(_loc7_ * (Math.PI / 180));
         _loc9_.concat(_loc11_);
         _loc9_.translate(param3,param4);
         return _loc9_;
      }
   }
