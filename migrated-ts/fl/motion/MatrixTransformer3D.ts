// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

export class MatrixTransformer3D{
      
      public static readonly AXIS_X: number = 0;
      public static readonly AXIS_Y: number = 1;
      public static readonly AXIS_Z: number = 2;
      constructor(){
         super();
      }
      
      public static rotateAxis(param1: Matrix3D, param2: number, param3: number): Matrix3D
      {
         null;
         null;
         null;
         null;
         let _loc4_: Matrix3D = new Matrix3D();
         let _loc5_: Vector3D = getVector(param1,param3);
         _loc4_.prependRotation(param2 * 180 / Math.PI,_loc5_);
         let _loc6_: number = 0;
         for(; _loc6_ < 3; _loc6_++)
         {
            if(_loc6_ == param3)
            {
               continue;
            }
            let _loc7_: Vector3D = getVector(param1,_loc6_);
            let _loc8_: any[] = new Array(3);
            let _loc9_: number = 0;
            while(true)
            {
               let _loc11_: Vector3D = getVector(_loc4_,0);
               null[0] = null.dotProduct(null);
               _loc9_++;
            }
         }
         return param1;
      }
      
      public static getMatrix3D(param1: Vector3D, param2: Vector3D, param3: Vector3D, param4: Vector3D): Matrix3D
      {
         let _loc5_: Array<Number> = new Array<Number>();
         _loc5_[0] = param1.x;
         _loc5_[1] = param1.y;
         _loc5_[2] = param1.z;
         _loc5_[3] = param1.w;
         _loc5_[4] = param2.x;
         _loc5_[5] = param2.y;
         _loc5_[6] = param2.z;
         _loc5_[7] = param2.w;
         _loc5_[8] = param3.x;
         _loc5_[9] = param3.y;
         _loc5_[10] = param3.z;
         _loc5_[11] = param3.w;
         _loc5_[12] = param4.x;
         _loc5_[13] = param4.y;
         _loc5_[14] = param4.z;
         _loc5_[15] = param4.w;
         return new Matrix3D(_loc5_);
      }
      
      public static normalizeVector(param1: Vector3D): Vector3D
      {
         let _loc2_: number = 1 / param1.length;
         let _loc3_: Vector3D = new Vector3D();
         _loc3_.x = param1.x * _loc2_;
         _loc3_.y = param1.y * _loc2_;
         _loc3_.z = param1.z * _loc2_;
         _loc3_.w = param1.w;
         return _loc3_;
      }
      
      public static rotateAboutAxis(param1: number, param2: number): Matrix3D
      {
         let _loc3_: number = Math.cos(param1);
         let _loc4_: number = Math.sin(param1);
         let _loc5_: Array<Number> = new Array<Number>();
         switch(param2)
         {
            case this.AXIS_X:
               _loc5_[0] = 1;
               _loc5_[1] = 0;
               _loc5_[2] = 0;
               _loc5_[3] = 0;
               _loc5_[4] = 0;
               _loc5_[5] = _loc3_;
               _loc5_[6] = _loc4_;
               _loc5_[7] = 0;
               _loc5_[8] = 0;
               _loc5_[9] = -_loc4_;
               _loc5_[10] = _loc3_;
               _loc5_[11] = 0;
               _loc5_[12] = 0;
               _loc5_[13] = 0;
               _loc5_[14] = 0;
               _loc5_[15] = 1;
               break;
            case this.AXIS_Y:
               _loc5_[0] = _loc3_;
               _loc5_[1] = 0;
               _loc5_[2] = -_loc4_;
               _loc5_[3] = 0;
               _loc5_[4] = 0;
               _loc5_[5] = 1;
               _loc5_[6] = 0;
               _loc5_[7] = 0;
               _loc5_[8] = _loc4_;
               _loc5_[9] = 0;
               _loc5_[10] = _loc3_;
               _loc5_[11] = 0;
               _loc5_[12] = 0;
               _loc5_[13] = 0;
               _loc5_[14] = 0;
               _loc5_[15] = 1;
               break;
            case this.AXIS_Z:
               _loc5_[0] = _loc3_;
               _loc5_[1] = _loc4_;
               _loc5_[2] = 0;
               _loc5_[3] = 0;
               _loc5_[4] = -_loc4_;
               _loc5_[5] = _loc3_;
               _loc5_[6] = 0;
               _loc5_[7] = 0;
               _loc5_[8] = 0;
               _loc5_[9] = 0;
               _loc5_[10] = 1;
               _loc5_[11] = 0;
               _loc5_[12] = 0;
               _loc5_[13] = 0;
               _loc5_[14] = 0;
               _loc5_[15] = 1;
         }
         return new Matrix3D(_loc5_);
      }
      
      public static getVector(param1: Matrix3D, param2: number): Vector3D
      {
         switch(param2)
         {
            case 0:
               return new Vector3D(param1.rawData[0],param1.rawData[1],param1.rawData[2],param1.rawData[3]);
            case 1:
               return new Vector3D(param1.rawData[4],param1.rawData[5],param1.rawData[6],param1.rawData[7]);
            case 2:
               return new Vector3D(param1.rawData[8],param1.rawData[9],param1.rawData[10],param1.rawData[11]);
            case 3:
               return new Vector3D(param1.rawData[12],param1.rawData[13],param1.rawData[14],param1.rawData[15]);
            default:
               return new Vector3D(0,0,0,0);
         }
      }
      
      public static getRawDataVector(param1: Matrix3D): Array<Number>
      {
         let _loc2_: Array<Number> = new Array<Number>();
         _loc2_[0] = param1.rawData[0];
         _loc2_[1] = param1.rawData[1];
         _loc2_[2] = param1.rawData[2];
         _loc2_[3] = param1.rawData[3];
         _loc2_[4] = param1.rawData[4];
         _loc2_[5] = param1.rawData[5];
         _loc2_[6] = param1.rawData[6];
         _loc2_[7] = param1.rawData[7];
         _loc2_[8] = param1.rawData[8];
         _loc2_[9] = param1.rawData[9];
         _loc2_[10] = param1.rawData[10];
         _loc2_[11] = param1.rawData[11];
         _loc2_[12] = param1.rawData[12];
         _loc2_[13] = param1.rawData[13];
         _loc2_[14] = param1.rawData[14];
         _loc2_[15] = param1.rawData[15];
         return _loc2_;
      }
   }
