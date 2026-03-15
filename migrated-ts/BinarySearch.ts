// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class BinarySearch{
      
      constructor(){
         super();
      }
      
      public bSearch(param1: any[], param2: number, param3: number): class_109
      {
         let _loc6_: number = 0;
         let _loc7_: number = 0;
         let _loc4_: number = 0;
         let _loc5_: number = param1.length - 1;
         while(_loc4_ <= _loc5_)
         {
            _loc6_ = (_loc4_ + _loc5_) / 2;
            if(param1[_loc6_].xVal == param2)
            {
               _loc4_ = 0;
               _loc5_ = param1[_loc6_].arrY.length - 1;
               while(_loc4_ <= _loc5_)
               {
                  _loc7_ = (_loc4_ + _loc5_) / 2;
                  if(param1[_loc6_].arrY[_loc7_].yVal == param3)
                  {
                     return param1[_loc6_].arrY[_loc7_].bfRef;
                  }
                  if(param1[_loc6_].arrY[_loc7_].yVal < param3)
                  {
                     _loc4_ = _loc7_ + 1;
                  }
                  else
                  {
                     _loc5_ = _loc7_ - 1;
                  }
               }
            }
            else if(param1[_loc6_].xVal < param2)
            {
               _loc4_ = _loc6_ + 1;
            }
            else
            {
               _loc5_ = _loc6_ - 1;
            }
         }
         return new class_133();
      }
   }
