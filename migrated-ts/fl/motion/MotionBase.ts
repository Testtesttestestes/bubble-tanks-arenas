// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

export class MotionBase{
      
      private _is3D: boolean = false;
      public keyframes: any[];
      private _overrideSkew: boolean;
      private _overrideScale: boolean;
      private _overrideRotate: boolean;
      private _duration: number = 0;
      constructor(param1: XML = null as any){
         let _loc2_: KeyframeBase = null;
         super();
         this.keyframes = [];
         if(this.duration == 0)
         {
            _loc2_ = this.getNewKeyframe();
            _loc2_.index = 0;
            this.addKeyframe(_loc2_);
         }
         this._overrideScale = false;
         this._overrideSkew = false;
         this._overrideRotate = false;
      }
      
      public addKeyframe(param1: KeyframeBase): void
      {
         this.keyframes[param1.index] = param1;
         if(this.duration < this.keyframes.length)
         {
            this.duration = this.keyframes.length;
         }
      }
      
      public initFilters(param1: any[], param2: any[], param3: number = -1, param4: number = -1): void
      {
         let _loc6_: any = null;
         let _loc7_: number = 0;
         let _loc8_: KeyframeBase = null;
         let _loc9_: BitmapFilter = null;
         let _loc10_: number = 0;
         if(param3 == -1 || param4 == -1)
         {
            param3 = 0;
            param4 = this.duration;
         }
         let _loc5_: number = 0;
         while(_loc5_ < param1.length)
         {
            _loc6_ = getDefinitionByName(param1[_loc5_])  as unknown as Class;
            _loc7_ = param3;
            while(_loc7_ < param4)
            {
               _loc8_ = (this.keyframes[_loc7_] as unknown as KeyframeBase);
               if(_loc8_ == null)
               {
                  _loc8_ = this.getNewKeyframe();
                  _loc8_.index = _loc7_;
                  this.addKeyframe(_loc8_);
               }
               if(Boolean(_loc8_) && _loc8_.filters == null)
               {
                  _loc8_.filters = new Array();
               }
               if(Boolean(_loc8_) && Boolean(_loc8_.filters))
               {
                  _loc9_ = null;
                  switch(param1[_loc5_])
                  {
                     case "flash.filters.GradientBevelFilter":
                     case "flash.filters.GradientGlowFilter":
                        _loc10_ = Math.floor(param2[_loc5_]);
                        _loc9_ = (new _loc6_(4,45,new Array(_loc10_ as unknown as BitmapFilter),new Array(_loc10_),new Array(_loc10_)));
                        break;
                     default:
                        _loc9_ = (new _loc6_(null as unknown as BitmapFilter));
                  }
                  if(_loc9_)
                  {
                     _loc8_.filters.push(_loc9_);
                  }
               }
               _loc7_++;
            }
            _loc5_++;
         }
      }
      
      public getCurrentKeyframe(param1: number, param2: string = ""): KeyframeBase
      {
         let _loc4_: KeyframeBase = null;
         if(isNaN(param1) || param1 < 0 || param1 > this.duration - 1)
         {
            return null;
         }
         let _loc3_: any = param1;
         while(_loc3_ > 0)
         {
            _loc4_ = this.keyframes[_loc3_];
            if((Boolean(_loc4_)) && _loc4_.affectsTweenable(param2))
            {
               return _loc4_;
            }
            _loc3_--;
         }
         return this.keyframes[0];
      }
      
      public addFilterPropertyArray(param1: number, param2: string, param3: any[], param4: number = -1, param5: number = -1): void
      {
         let _loc10_: KeyframeBase = null;
         let _loc11_: any = undefined;
         let _loc12_: number = 0;
         let _loc6_: number = Math.floor(param3.length);
         let _loc7_: any = null;
         let _loc8_: boolean = true;
         if(_loc6_ > 0)
         {
            if(param3[0] instanceof Number)
            {
               _loc8_ = false;
            }
         }
         if(this.duration < _loc6_)
         {
            this.duration = _loc6_;
         }
         if(param4 == -1 || param5 == -1)
         {
            param4 = 0;
            param5 = this.duration;
         }
         let _loc9_: number = param4;
         while(_loc9_ < param5)
         {
            _loc10_ = (this.keyframes[_loc9_] as unknown as KeyframeBase);
            if(_loc10_ == null)
            {
               _loc10_ = this.getNewKeyframe();
               _loc10_.index = _loc9_;
               this.addKeyframe(_loc10_);
            }
            _loc11_ = _loc7_;
            _loc12_ = _loc9_ - param4;
            if(_loc12_ < param3.length)
            {
               if(Boolean(param3[_loc12_]) || !_loc8_)
               {
                  _loc11_ = param3[_loc12_];
               }
            }
            switch(param2)
            {
               case "adjustColorBrightness":
               case "adjustColorContrast":
               case "adjustColorSaturation":
               case "adjustColorHue":
                  _loc10_.setAdjustColorProperty(param1,param2,_loc11_);
                  break;
               default:
                  if(param1 < _loc10_.filters.length)
                  {
                     _loc10_.filters[param1][param2] = _loc11_;
                  }
            }
            _loc7_ = _loc11_;
            _loc9_++;
         }
      }
      
      public get duration(): number
      {
         if(this._duration < this.keyframes.length)
         {
            this._duration = this.keyframes.length;
         }
         return this._duration;
      }
      
      public useRotationConcat(param1: number): boolean
      {
         let _loc2_: KeyframeBase = this.getCurrentKeyframe(param1,"rotationConcat");
         return _loc2_ ? _loc2_.useRotationConcat : false;
      }
      
      public get is3D(): boolean
      {
         return this._is3D;
      }
      
      public getFilters(param1: number): any[]
      {
         let _loc2_: any[] = null;
         let _loc3_: KeyframeBase = this.getCurrentKeyframe(param1,"filters");
         if(!_loc3_ || Boolean(_loc3_.filters) && Boolean(!_loc3_.filters.length))
         {
            return [];
         }
         let _loc4_: any[] = _loc3_.filters;
         let _loc5_: number = param1 - _loc3_.index;
         if(_loc5_ == 0)
         {
            _loc2_ = _loc4_;
         }
         return _loc2_;
      }
      
      protected findTweenedValue(param1: number, param2: string, param3: KeyframeBase, param4: number, param5: number): number
      {
         return NaN;
      }
      
      public addPropertyArray(param1: string, param2: any[], param3: number = -1, param4: number = -1): void
      {
         let _loc10_: KeyframeBase = null;
         let _loc11_: any = undefined;
         let _loc12_: number = 0;
         let _loc13_: any = undefined;
         let _loc5_: number = Math.floor(param2.length);
         let _loc6_: any = null;
         let _loc7_: boolean = true;
         let _loc8_: number = 0;
         if(_loc5_ > 0)
         {
            if(param2[0] instanceof Number)
            {
               _loc7_ = false;
               if(param2[0] instanceof Number)
               {
                  _loc8_ = Number(param2[0]);
               }
            }
         }
         if(this.duration < _loc5_)
         {
            this.duration = _loc5_;
         }
         if(param3 == -1 || param4 == -1)
         {
            param3 = 0;
            param4 = this.duration;
         }
         let _loc9_: number = param3;
         while(_loc9_ < param4)
         {
            _loc10_ = (this.keyframes[_loc9_] as unknown as KeyframeBase);
            if(_loc10_ == null)
            {
               _loc10_ = this.getNewKeyframe();
               _loc10_.index = _loc9_;
               this.addKeyframe(_loc10_);
            }
            if(Boolean(_loc10_.filters) && _loc10_.filters.length == 0)
            {
               _loc10_.filters = null;
            }
            _loc11_ = _loc6_;
            _loc12_ = _loc9_ - param3;
            if(_loc12_ < param2.length)
            {
               if(Boolean(param2[_loc12_]) || !_loc7_)
               {
                  _loc11_ = param2[_loc12_];
               }
            }
            switch(param1)
            {
               case "blendMode":
                  _loc10_.blendMode = _loc11_;
                  break;
               case "matrix3D":
                  _loc10_[param1] = _loc11_;
                  break;
               case "rotationConcat":
                  _loc10_.useRotationConcat = true;
                  if(!this._overrideRotate && !_loc7_)
                  {
                     _loc10_.setValue(param1,(_loc11_ - _loc8_) * Math.PI / 180);
                  }
                  else
                  {
                     _loc10_.setValue(param1,_loc11_ * Math.PI / 180);
                  }
                  break;
               case "brightness":
               case "tintMultiplier":
               case "tintColor":
               case "alphaMultiplier":
               case "alphaOffset":
               case "redMultiplier":
               case "redOffset":
               case "greenMultiplier":
               case "greenOffset":
               case "blueMultiplier":
               case "blueOffset":
                  if(_loc10_.color == null)
                  {
                     _loc10_.color = new Color();
                  }
                  _loc10_.color[param1] = _loc11_;
                  break;
               case "rotationZ":
                  _loc10_.useRotationConcat = true;
                  this._is3D = true;
                  if(!this._overrideRotate && !_loc7_)
                  {
                     _loc10_.setValue("rotationConcat",_loc11_ - _loc8_);
                  }
                  else
                  {
                     _loc10_.setValue("rotationConcat",_loc11_);
                  }
                  break;
               case "rotationX":
               case "rotationY":
               case "z":
                  this._is3D = true;
                  _loc13_ = _loc11_;
                  if(!_loc7_)
                  {
                     switch(param1)
                     {
                        case "scaleX":
                        case "scaleY":
                           if(!this._overrideScale)
                           {
                              if(_loc8_ == 0)
                              {
                                 _loc13_ = _loc11_ + 1;
                                 break;
                              }
                              _loc13_ = _loc11_ / _loc8_;
                           }
                           break;
                        case "skewX":
                        case "skewY":
                           if(!this._overrideSkew)
                           {
                              _loc13_ = _loc11_ - _loc8_;
                           }
                           break;
                        case "rotationX":
                        case "rotationY":
                           if(!this._overrideRotate)
                           {
                              _loc13_ = _loc11_ - _loc8_;
                           }
                     }
                  }
            }
            _loc10_.setValue(param1,_loc13_);
            _loc6_ = _loc11_;
            _loc9_++;
         }
      }
      
      public getMatrix3D(param1: number): Record<string, any>
      {
         let _loc2_: KeyframeBase = this.getCurrentKeyframe(param1,"matrix3D");
         return _loc2_ ? _loc2_.matrix3D : null;
      }
      
      public setValue(param1: number, param2: string, param3: number): void
      {
         if(param1 == 0)
         {
            return;
         }
         let _loc4_: KeyframeBase = this.keyframes[param1];
         if(!_loc4_)
         {
            _loc4_ = this.getNewKeyframe();
            _loc4_.index = param1;
            this.addKeyframe(_loc4_);
         }
         _loc4_.setValue(param2,param3);
      }
      
      private indexOutOfRange(param1: number): boolean
      {
         return isNaN(param1) || param1 < 0 || param1 > this.duration - 1;
      }
      
      public overrideTargetTransform(param1: boolean = true, param2: boolean = true, param3: boolean = true): void
      {
         this._overrideScale = param1;
         this._overrideSkew = param2;
         this._overrideRotate = param3;
      }
      
      public set duration(param1: number)
      {
         if(param1 < this.keyframes.length)
         {
            param1 = Math.floor(this.keyframes.length);
         }
         this._duration = param1;
      }
      
      protected getNewKeyframe(param1: XML = null as any): KeyframeBase
      {
         return new KeyframeBase(param1);
      }
      
      public getValue(param1: number, param2: string): number
      {
         let _loc3_: number = NaN;
         let _loc4_: KeyframeBase = this.getCurrentKeyframe(param1,param2);
         if(!_loc4_ || _loc4_.blank)
         {
            return NaN;
         }
         let _loc5_: number = _loc4_.getValue(param2);
         if(isNaN(_loc5_) && _loc4_.index > 0)
         {
            _loc5_ = this.getValue(_loc4_.index - 1,param2);
         }
         if(isNaN(_loc5_))
         {
            return NaN;
         }
         let _loc6_: number = param1 - _loc4_.index;
         if(_loc6_ == 0)
         {
            return _loc5_;
         }
         return this.findTweenedValue(param1,param2,_loc4_,_loc6_,_loc5_);
      }
      
      public set is3D(param1: boolean)
      {
         this._is3D = param1;
      }
      
      public getNextKeyframe(param1: number, param2: string = ""): KeyframeBase
      {
         let _loc4_: KeyframeBase = null;
         if(isNaN(param1) || param1 < 0 || param1 > this.duration - 1)
         {
            return null;
         }
         let _loc3_: number = param1 + 1;
         while(_loc3_ < this.keyframes.length)
         {
            _loc4_ = this.keyframes[_loc3_];
            if((Boolean(_loc4_)) && _loc4_.affectsTweenable(param2))
            {
               return _loc4_;
            }
            _loc3_++;
         }
         return null;
      }
      
      public getColorTransform(param1: number): ColorTransform
      {
         let _loc2_: ColorTransform = null;
         let _loc3_: KeyframeBase = this.getCurrentKeyframe(param1,"color");
         if(!_loc3_ || !_loc3_.color)
         {
            return null;
         }
         let _loc4_: ColorTransform = _loc3_.color;
         let _loc5_: number = param1 - _loc3_.index;
         if(_loc5_ == 0)
         {
            _loc2_ = _loc4_;
         }
         return _loc2_;
      }
   }
