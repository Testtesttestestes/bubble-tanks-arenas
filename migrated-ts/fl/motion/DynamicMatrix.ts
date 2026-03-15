// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

export class DynamicMatrix{
      
      public static readonly MATRIX_ORDER_PREPEND: number = 0;
      public static readonly MATRIX_ORDER_APPEND: number = 1;
      protected m_matrix: any[];
      protected m_width: number;
      protected m_height: number;
      constructor(param1: number, param2: number){
         super();
         this.Create(param1,param2);
      }
      
      public Add(param1: DynamicMatrix): boolean
      {
         let _loc5_: number = 0;
         let _loc6_: number = NaN;
         if(!this.m_matrix || !param1)
         {
            return false;
         }
         let _loc2_: number = param1.GetHeight();
         let _loc3_: number = param1.GetWidth();
         if(this.m_width != _loc3_ || this.m_height != _loc2_)
         {
            return false;
         }
         let _loc4_: number = 0;
         while(_loc4_ < this.m_height)
         {
            _loc5_ = 0;
            while(_loc5_ < this.m_width)
            {
               _loc6_ = 0;
               _loc6_ = this.m_matrix[_loc4_][_loc5_] + param1.GetValue(_loc4_,_loc5_);
               this.m_matrix[_loc4_][_loc5_] = _loc6_;
               _loc5_++;
            }
            _loc4_++;
         }
         return true;
      }
      
      public LoadIdentity(): void
      {
         let _loc1_: number = 0;
         let _loc2_: number = 0;
         if(this.m_matrix)
         {
            _loc1_ = 0;
            while(_loc1_ < this.m_height)
            {
               _loc2_ = 0;
               while(_loc2_ < this.m_width)
               {
                  if(_loc1_ == _loc2_)
                  {
                     this.m_matrix[_loc1_][_loc2_] = 1;
                  }
                  else
                  {
                     this.m_matrix[_loc1_][_loc2_] = 0;
                  }
                  _loc2_++;
               }
               _loc1_++;
            }
         }
      }
      
      public LoadZeros(): void
      {
         let _loc1_: number = 0;
         let _loc2_: number = 0;
         if(this.m_matrix)
         {
            _loc1_ = 0;
            while(_loc1_ < this.m_height)
            {
               _loc2_ = 0;
               while(_loc2_ < this.m_width)
               {
                  this.m_matrix[_loc1_][_loc2_] = 0;
                  _loc2_++;
               }
               _loc1_++;
            }
         }
      }
      
      public Multiply(param1: DynamicMatrix, param2: number = 0): boolean
      {
         let _loc5_: DynamicMatrix = null;
         let _loc6_: number = 0;
         let _loc7_: number = 0;
         let _loc8_: number = NaN;
         let _loc9_: number = 0;
         let _loc10_: number = 0;
         if(!this.m_matrix || !param1)
         {
            return false;
         }
         let _loc3_: number = param1.GetHeight();
         let _loc4_: number = param1.GetWidth();
         if(param2 == MATRIX_ORDER_APPEND)
         {
            if(this.m_width != _loc3_)
            {
               return false;
            }
            _loc5_ = new DynamicMatrix(_loc4_,this.m_height);
            _loc6_ = 0;
            while(_loc6_ < this.m_height)
            {
               _loc7_ = 0;
               while(_loc7_ < _loc4_)
               {
                  _loc8_ = 0;
                  _loc9_ = 0;
                  _loc10_ = 0;
                  while(_loc9_ < Math.max(this.m_height,_loc3_) && _loc10_ < Math.max(this.m_width,_loc4_))
                  {
                     _loc8_ += param1.GetValue(_loc9_,_loc7_) * this.m_matrix[_loc6_][_loc10_];
                     _loc9_++;
                     _loc10_++;
                  }
                  _loc5_.SetValue(_loc6_,_loc7_,_loc8_);
                  _loc7_++;
               }
               _loc6_++;
            }
            this.Destroy();
            this.Create(_loc4_,this.m_height);
            _loc6_ = 0;
            while(_loc6_ < _loc3_)
            {
               _loc7_ = 0;
               while(_loc7_ < this.m_width)
               {
                  this.m_matrix[_loc6_][_loc7_] = _loc5_.GetValue(_loc6_,_loc7_);
                  _loc7_++;
               }
               _loc6_++;
            }
         }
         else
         {
            if(this.m_height != _loc4_)
            {
               return false;
            }
            _loc5_ = new DynamicMatrix(this.m_width,_loc3_);
            _loc6_ = 0;
            while(_loc6_ < _loc3_)
            {
               _loc7_ = 0;
               while(_loc7_ < this.m_width)
               {
                  _loc8_ = 0;
                  _loc9_ = 0;
                  _loc10_ = 0;
                  while(_loc9_ < Math.max(_loc3_,this.m_height) && _loc10_ < Math.max(_loc4_,this.m_width))
                  {
                     _loc8_ += this.m_matrix[_loc9_][_loc7_] * param1.GetValue(_loc6_,_loc10_);
                     _loc9_++;
                     _loc10_++;
                  }
                  _loc5_.SetValue(_loc6_,_loc7_,_loc8_);
                  _loc7_++;
               }
               _loc6_++;
            }
            this.Destroy();
            this.Create(this.m_width,_loc3_);
            _loc6_ = 0;
            while(_loc6_ < _loc3_)
            {
               _loc7_ = 0;
               while(_loc7_ < this.m_width)
               {
                  this.m_matrix[_loc6_][_loc7_] = _loc5_.GetValue(_loc6_,_loc7_);
                  _loc7_++;
               }
               _loc6_++;
            }
         }
         return true;
      }
      
      public MultiplyNumber(param1: number): boolean
      {
         let _loc3_: number = 0;
         let _loc4_: number = NaN;
         if(!this.m_matrix)
         {
            return false;
         }
         let _loc2_: number = 0;
         while(_loc2_ < this.m_height)
         {
            _loc3_ = 0;
            while(_loc3_ < this.m_width)
            {
               _loc4_ = 0;
               _loc4_ = this.m_matrix[_loc2_][_loc3_] * param1;
               this.m_matrix[_loc2_][_loc3_] = _loc4_;
               _loc3_++;
            }
            _loc2_++;
         }
         return true;
      }
      
      public SetValue(param1: number, param2: number, param3: number): void
      {
         if(param1 >= 0 && param1 < this.m_height && param2 >= 0 && param2 <= this.m_width)
         {
            this.m_matrix[param1][param2] = param3;
         }
      }
      
      public GetWidth(): number
      {
         return this.m_width;
      }
      
      protected Destroy(): void
      {
         this.m_matrix = null;
      }
      
      public GetValue(param1: number, param2: number): number
      {
         let _loc3_: number = 0;
         if(param1 >= 0 && param1 < this.m_height && param2 >= 0 && param2 <= this.m_width)
         {
            _loc3_ = Number(this.m_matrix[param1][param2]);
         }
         return _loc3_;
      }
      
      protected Create(param1: number, param2: number): void
      {
         let _loc3_: number = 0;
         let _loc4_: number = 0;
         if(param1 > 0 && param2 > 0)
         {
            this.m_width = param1;
            this.m_height = param2;
            this.m_matrix = new Array(param2);
            _loc3_ = 0;
            while(_loc3_ < param2)
            {
               this.m_matrix[_loc3_] = new Array(param1);
               _loc4_ = 0;
               while(_loc4_ < param2)
               {
                  this.m_matrix[_loc3_][_loc4_] = 0;
                  _loc4_++;
               }
               _loc3_++;
            }
         }
      }
      
      public GetHeight(): number
      {
         return this.m_height;
      }
   }
