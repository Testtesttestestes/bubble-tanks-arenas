// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_5{
      
      private var_239: number;
      private var_233: any[];
      private var_78: any[];
      public mainRef: class_79;
      private var_286: boolean;
      private var_145: any[];
      private var_80: any[];
      constructor(param1: class_79){
         super();
         this.mainRef = param1;
         this.var_78 = new Array();
         this.var_80 = new Array();
         this.var_145 = new Array();
         this.var_233 = new Array();
         this.var_286 = false;
         this.var_239 = 0;
      }
      
      public method_232(): void
      {
         let _loc1_: number = 0;
         while(_loc1_ < this.var_78.length)
         {
            this.method_296(this.var_78[_loc1_].layer).removeChild(this.var_78[_loc1_].mc);
            _loc1_++;
         }
         this.var_78.length = 0;
         let _loc2_: number = 0;
         while(_loc2_ < this.var_80.length)
         {
            this.method_284(this.var_80[_loc2_].layer).removeChild(this.var_80[_loc2_].mc);
            _loc2_++;
         }
         this.var_80.length = 0;
      }
      
      public method_60(param1: MovieClip, param2: number, param3: number, param4: string = null as any, param5: boolean = false, param6: Function = null as any): MovieClip
      {
         ++this.var_239;
         if(param5 == true)
         {
            param1.rotation = this.RandNum(0,360);
         }
         param1.x = param2;
         param1.y = param3;
         param1.name = "effect_" + this.var_239;
         this.method_296(param4).addChild(param1);
         this.var_78.push({
            "mc":param1,
            "layer":param4,
            "callBack":param6
         });
         return param1;
      }
      
      public method_119(param1: string, param2: Sprite, param3: boolean = false): void
      {
         param2.name = param1;
         if(param3 == false)
         {
            this.var_145.push(param2);
         }
         else
         {
            this.var_233.push(param2);
         }
      }
      
      public method_816(param1: string): void
      {
         let _loc2_: number = 0;
         while(_loc2_ < this.var_233.length)
         {
            if(this.var_233[_loc2_].name == param1)
            {
               this.var_145.splice(_loc2_,1);
               break;
            }
            _loc2_++;
         }
      }
      
      public method_760(param1: Sprite): void
      {
         let _loc2_: number = 0;
         while(_loc2_ < this.var_80.length)
         {
            if(this.var_80[_loc2_].mc == param1)
            {
               this.method_284(this.var_80[_loc2_].layer).removeChild(this.var_80[_loc2_].mc);
               this.var_80[_loc2_].mc = null;
               this.var_80.splice(_loc2_,1);
               break;
            }
            _loc2_++;
         }
      }
      
      private method_398(param1: string, param2: number, param3: number, param4: boolean = true, param5: number = 0, param6: number = 1): Sprite
      {
         let _loc7_: Sprite = new Sprite();
         let _loc8_: TextField = new TextField();
         _loc8_.text = param1;
         _loc8_.autoSize = TextFieldAutoSize.LEFT;
         _loc8_.antiAliasType = AntiAliasType.ADVANCED;
         let _loc9_: TextFormat = new TextFormat();
         _loc9_.font = "Arial";
         _loc9_.size = param2;
         _loc9_.bold = true;
         _loc9_.color = param5;
         _loc8_.setTextFormat(_loc9_);
         let _loc10_: number = 8 * param6;
         let _loc11_: number = 3 * param6;
         let _loc12_: any = new GlowFilter(param3,1,_loc10_,_loc10_,_loc11_,2,false,param4);
         _loc8_.filters = [_loc12_];
         _loc7_.cacheAsBitmap = true;
         _loc7_.addChild(_loc8_);
         return _loc7_;
      }
      
      private method_296(param1: string): Sprite
      {
         let _loc2_: number = 0;
         while(_loc2_ < this.var_145.length)
         {
            if(this.var_145[_loc2_].name == param1)
            {
               return this.var_145[_loc2_];
            }
            _loc2_++;
         }
         return null;
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1)) + param1;
      }
      
      public method_793(param1: string, param2: number, param3: number, param4: string = null as any, param5: number = 60, param6: number = 26, param7: number = 3355443, param8: number = 1): Sprite
      {
         null;
         ++this.var_239;
         if(param8 == 1)
         {
            let _loc9_: Sprite = this.method_398(param1,param6,param7);
         }
         else if(param8 == 2)
         {
            _loc9_ = this.method_398(param1,param6,param7,false,16777215,0.5);
         }
         null.x = param2 - Math.round(null.width / 2);
         null.y = param3 - Math.round(null.height / 2);
         null.name = "effect_" + this.var_239;
         let _loc10_: Sprite = this.method_284(param4);
         _loc10_.addChild(null);
         this.var_80.push({
            "mc":null,
            "layer":param4,
            "curFrame":1,
            "totalFrames":param5
         });
         return null;
      }
      
      public set method_701(param1: boolean)
      {
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         if(param1 == this.var_286)
         {
            return;
         }
         this.var_286 = param1;
         if(this.var_286 == true)
         {
            _loc2_ = 0;
            while(_loc2_ < this.var_78.length)
            {
               this.var_78[_loc2_].mc.stop();
               _loc2_++;
            }
         }
         else
         {
            _loc3_ = 0;
            while(_loc3_ < this.var_78.length)
            {
               this.var_78[_loc3_].mc.play();
               _loc3_++;
            }
         }
      }
      
      public method_808(): void
      {
         let _loc1_: number = 0;
         while(_loc1_ < this.var_145.length)
         {
            _loc1_++;
         }
      }
      
      public method_534(): void
      {
         this.mainRef.removeEventListener(Event.ENTER_FRAME, this.Run.bind(this));
      }
      
      private method_284(param1: string): Sprite
      {
         let _loc2_: number = 0;
         while(_loc2_ < this.var_233.length)
         {
            if(this.var_233[_loc2_].name == param1)
            {
               return this.var_233[_loc2_];
            }
            _loc2_++;
         }
         return null;
      }
      
      public Run(): void
      {
         if(this.var_286 == true)
         {
            return;
         }
         let _loc1_: any[] = new Array();
         let _loc2_: any[] = new Array();
         let _loc3_: number = 0;
         while(_loc3_ < this.var_78.length)
         {
            if(this.var_78[_loc3_].mc.currentFrame >= this.var_78[_loc3_].mc.totalFrames)
            {
               _loc1_.push(this.var_78[_loc3_].mc);
            }
            _loc3_++;
         }
         let _loc4_: number = 0;
         while(_loc4_ < this.var_80.length)
         {
            if(this.method_663(_loc4_) == true)
            {
               _loc2_.push(this.var_80[_loc4_].mc);
            }
            _loc4_++;
         }
         let _loc5_: number = 0;
         while(_loc5_ < _loc1_.length)
         {
            this.method_698(_loc1_[_loc5_]);
            _loc5_++;
         }
         let _loc6_: number = 0;
         while(_loc6_ < _loc2_.length)
         {
            this.method_760(_loc2_[_loc6_]);
            _loc6_++;
         }
      }
      
      public get method_701(): boolean
      {
         return this.var_286;
      }
      
      public method_297(param1: string): void
      {
         let _loc2_: number = 0;
         while(_loc2_ < this.var_145.length)
         {
            if(this.var_145[_loc2_].name == param1)
            {
               this.var_145.splice(_loc2_,1);
               break;
            }
            _loc2_++;
         }
      }
      
      public method_322(param1: boolean): void
      {
         if(param1 == true)
         {
            this.method_417();
         }
         this.method_232();
      }
      
      public method_417(): void
      {
         let _loc1_: number = 0;
         while(_loc1_ < this.var_145.length)
         {
            this.mainRef.removeChild(this.var_145[_loc1_]);
            _loc1_++;
         }
         this.var_145.length = 0;
      }
      
      public method_698(param1: MovieClip): void
      {
         let _loc2_: number = 0;
         while(_loc2_ < this.var_78.length)
         {
            if(this.var_78[_loc2_].mc == param1)
            {
               if(this.var_78[_loc2_].callBack != null)
               {
                  this.var_78[_loc2_].callBack();
               }
               this.method_296(this.var_78[_loc2_].layer).removeChild(this.var_78[_loc2_].mc);
               this.var_78[_loc2_].mc = null;
               this.var_78.splice(_loc2_,1);
               break;
            }
            _loc2_++;
         }
      }
      
      private method_663(param1: number): boolean
      {
         let _loc3_: number = NaN;
         if(this.var_80[param1].curFrame >= this.var_80[param1].totalFrames)
         {
            return true;
         }
         --this.var_80[param1].mc.y;
         let _loc2_: number = this.var_80[param1].curFrame / this.var_80[param1].totalFrames;
         if(_loc2_ >= 0.75)
         {
            this.var_80[param1].mc.cacheAsBitmap = false;
            _loc3_ = (1 - _loc2_) / 0.25;
            if(_loc3_ < 0)
            {
               _loc3_ = 0;
            }
            if(_loc3_ > 1)
            {
               _loc3_ = 1;
            }
            this.var_80[param1].mc.alpha = _loc3_;
         }
         ++this.var_80[param1].curFrame;
         return false;
      }
   }
