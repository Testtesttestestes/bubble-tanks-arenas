// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

export class ColorMatrix extends DynamicMatrix{
      
      protected static readonly LUMINANCER: number = 0.3086;
      protected static readonly LUMINANCEG: number = 0.6094;
      protected static readonly LUMINANCEB: number = 0.082;
      constructor(){
         super(5,5);
         LoadIdentity();
      }
      
      public GetFlatArray(): any[]
      {
         let _loc4_: number = 0;
         if(!m_matrix)
         {
            return null;
         }
         let _loc1_: any[] = new Array();
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         while(_loc3_ < 4)
         {
            _loc4_ = 0;
            while(_loc4_ < 5)
            {
               _loc1_[_loc2_] = m_matrix[_loc3_][_loc4_];
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
         let _loc2_: number = 0.5 * (127 - param1);
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
         let _loc11_: number = 0;
         if(!m_matrix)
         {
            return;
         }
         LoadIdentity();
         let _loc2_: DynamicMatrix = new DynamicMatrix(3,3);
         let _loc3_: DynamicMatrix = new DynamicMatrix(3,3);
         let _loc4_: DynamicMatrix = new DynamicMatrix(3,3);
         let _loc5_: number = Math.cos(param1);
         let _loc6_: number = Math.sin(param1);
         0.213;
         0.715;
         0.072;
         _loc2_.SetValue(0,0,0.213);
         _loc2_.SetValue(1,0,0.213);
         _loc2_.SetValue(2,0,0.213);
         _loc2_.SetValue(0,1,0.715);
         _loc2_.SetValue(1,1,0.715);
         _loc2_.SetValue(2,1,0.715);
         _loc2_.SetValue(0,2,0.072);
         _loc2_.SetValue(1,2,0.072);
         _loc2_.SetValue(2,2,0.072);
         _loc3_.SetValue(0,0,1 - 0.213);
         _loc3_.SetValue(1,0,-0.213);
         _loc3_.SetValue(2,0,-0.213);
         _loc3_.SetValue(0,1,-0.715);
         _loc3_.SetValue(1,1,1 - 0.715);
         _loc3_.SetValue(2,1,-0.715);
         _loc3_.SetValue(0,2,-0.072);
         _loc3_.SetValue(1,2,-0.072);
         _loc3_.SetValue(2,2,1 - 0.072);
         _loc3_.MultiplyNumber(_loc5_);
         _loc4_.SetValue(0,0,-0.213);
         _loc4_.SetValue(1,0,0.143);
         _loc4_.SetValue(2,0,-(1 - 0.213));
         _loc4_.SetValue(0,1,-0.715);
         _loc4_.SetValue(1,1,0.14);
         _loc4_.SetValue(2,1,0.715);
         _loc4_.SetValue(0,2,1 - 0.072);
         _loc4_.SetValue(1,2,-0.283);
         _loc4_.SetValue(2,2,0.072);
         _loc4_.MultiplyNumber(_loc6_);
         _loc2_.Add(_loc3_);
         _loc2_.Add(_loc4_);
         let _loc10_: number = 0;
         while(_loc10_ < 3)
         {
            _loc11_ = 0;
            while(_loc11_ < 3)
            {
               m_matrix[_loc10_][_loc11_] = _loc2_.GetValue(_loc10_,_loc11_);
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
         let _loc2_: number = 1 - param1;
         let _loc3_: number = _loc2_ * this.LUMINANCER;
         m_matrix[0][0] = _loc3_ + param1;
         m_matrix[1][0] = _loc3_;
         m_matrix[2][0] = _loc3_;
         _loc3_ = _loc2_ * this.LUMINANCEG;
         m_matrix[0][1] = _loc3_;
         m_matrix[1][1] = _loc3_ + param1;
         m_matrix[2][1] = _loc3_;
         _loc3_ = _loc2_ * this.LUMINANCEB;
         m_matrix[0][2] = _loc3_;
         m_matrix[1][2] = _loc3_;
         m_matrix[2][2] = _loc3_ + param1;
      }
   }


class XFormData
{
   
   public ox: number;
   public oy: number;
   public oz: number;
   public XFormData(): void{
      super();
   }
}
