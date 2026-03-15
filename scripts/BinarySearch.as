package
{
   public class BinarySearch
   {
      
      public function BinarySearch()
      {
         super();
      }
      
      public function bSearch(param1:Array, param2:int, param3:int) : class_109
      {
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         var _loc4_:int = 0;
         var _loc5_:int = param1.length - 1;
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
}

