// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

export class Color extends ColorTransform{
      
      private _tintColor: number = 0;
      private _tintMultiplier: number = 0;
      constructor(param1: number = 1, param2: number = 1, param3: number = 1, param4: number = 1, param5: number = 0, param6: number = 0, param7: number = 0, param8: number = 0){
         super(param1,param2,param3,param4,param5,param6,param7,param8);
      }
      
      public static interpolateColor(param1: number, param2: number, param3: number): number
      {
         let _loc4_: number = 1 - param3;
         let _loc5_: number = Math.floor(param1 >> 24 & 0xFF);
         let _loc6_: number = Math.floor(param1 >> 16 & 0xFF);
         let _loc7_: number = Math.floor(param1 >> 8 & 0xFF);
         let _loc8_: number = Math.floor(param1 & 0xFF);
         let _loc9_: number = Math.floor(param2 >> 24 & 0xFF);
         let _loc10_: number = Math.floor(param2 >> 16 & 0xFF);
         let _loc11_: number = Math.floor(param2 >> 8 & 0xFF);
         let _loc12_: number = Math.floor(param2 & 0xFF);
         let _loc13_: number = _loc5_ * _loc4_ + _loc9_ * param3;
         let _loc14_: number = _loc6_ * _loc4_ + _loc10_ * param3;
         let _loc15_: number = _loc7_ * _loc4_ + _loc11_ * param3;
         let _loc16_: number = _loc8_ * _loc4_ + _loc12_ * param3;
         return Math.floor(_loc13_ << 24 | _loc14_ << 16 | _loc15_ << 8 | _loc16_);
      }
      
      public static interpolateTransform(param1: ColorTransform, param2: ColorTransform, param3: number): ColorTransform
      {
         let _loc4_: number = 1 - param3;
         return new ColorTransform(param1.redMultiplier * _loc4_ + param2.redMultiplier * param3,param1.greenMultiplier * _loc4_ + param2.greenMultiplier * param3,param1.blueMultiplier * _loc4_ + param2.blueMultiplier * param3,param1.alphaMultiplier * _loc4_ + param2.alphaMultiplier * param3,param1.redOffset * _loc4_ + param2.redOffset * param3,param1.greenOffset * _loc4_ + param2.greenOffset * param3,param1.blueOffset * _loc4_ + param2.blueOffset * param3,param1.alphaOffset * _loc4_ + param2.alphaOffset * param3);
      }
      
      public static fromXML(param1: XML): Color
      {
         return (new Color(null as unknown as Color).parseXML(param1));
      }
      
      private deriveTintColor(): number
      {
         let _loc1_: number = 1 / this.tintMultiplier;
         let _loc2_: number = Math.round(this.redOffset * _loc1_);
         let _loc3_: number = Math.round(this.greenOffset * _loc1_);
         let _loc4_: number = Math.round(this.blueOffset * _loc1_);
         return Math.floor(_loc2_ << 16 | _loc3_ << 8 | _loc4_);
      }
      
      public set brightness(param1: number)
      {
         if(param1 > 1)
         {
            param1 = 1;
         }
         else if(param1 < -1)
         {
            param1 = -1;
         }
         let _loc2_: number = 1 - Math.abs(param1);
         let _loc3_: number = 0;
         if(param1 > 0)
         {
            _loc3_ = param1 * 255;
         }
         this.redMultiplier = this.greenMultiplier = this.blueMultiplier = _loc2_;
         this.redOffset = this.greenOffset = this.blueOffset = _loc3_;
      }
      
      private parseXML(param1: XML = null as any): Color
      {
         let _loc3_: XML = null;
         let _loc4_: string = null;
         0;
         if(!param1)
         {
            return this;
         }
         let _loc2_: XML = param1.elements()[0];
         if(!_loc2_)
         {
            return this;
         }
         for (let _loc3_ of _loc2_.attributes())
         {
            _loc4_ = _loc3_.localName();
            if(_loc4_ == "tintColor")
            {
               let _loc5_: number = Number(_loc3_.toString())  as unknown as uint;
               this.tintColor = 0;
            }
            else
            {
               this[_loc4_] = Number(_loc3_.toString());
            }
         }
         return this;
      }
      
      public get tintColor(): number
      {
         return this._tintColor;
      }
      
      public set tintColor(param1: number)
      {
         this.setTint(param1,this.tintMultiplier);
      }
      
      public get brightness(): number
      {
         return this.redOffset ? 1 - this.redMultiplier : this.redMultiplier - 1;
      }
      
      public set tintMultiplier(param1: number)
      {
         this.setTint(this.tintColor,param1);
      }
      
      public get tintMultiplier(): number
      {
         return this._tintMultiplier;
      }
      
      public setTint(param1: number, param2: number): void
      {
         this._tintColor = param1;
         this._tintMultiplier = param2;
         this.redMultiplier = this.greenMultiplier = this.blueMultiplier = 1 - param2;
         let _loc3_: number = Math.floor(param1 >> 16 & 0xFF);
         let _loc4_: number = Math.floor(param1 >> 8 & 0xFF);
         let _loc5_: number = Math.floor(param1 & 0xFF);
         this.redOffset = Math.round(_loc3_ * param2);
         this.greenOffset = Math.round(_loc4_ * param2);
         this.blueOffset = Math.round(_loc5_ * param2);
      }
   }
