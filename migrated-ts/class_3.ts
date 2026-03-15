// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_3{
      
      private var_578: MovieClip;
      private var_462: Function;
      private var_51: any[];
      private var_421: Function;
      private funUp: Function;
      constructor(){
         super();
      }
      
      public method_32(param1: MovieClip): any
      {
         param1.buttonMode = param1.useHandCursor = param1.mouseEnabled = param1.mouseChildren = false;
      }
      
      public method_4(param1: MovieClip, param2: boolean = true, param3: Function = null as any, param4: Function = null as any, param5: Function = null as any): void
      {
         let _loc8_: Function = null;
         let _loc9_: Function = null;
         let _loc10_: Function = null;
         let _loc6_: boolean = false;
         let _loc7_: number = 0;
         while(_loc7_ < this.var_51.length)
         {
            if(this.var_51[_loc7_].movBtn == param1)
            {
               _loc6_ = true;
               break;
            }
            _loc7_++;
         }
         if(_loc6_ == false)
         {
            _loc8_ = this.funUp;
            _loc9_ = this.var_421;
            _loc10_ = this.var_462;
            if(param3 != null)
            {
               _loc8_ = param3;
            }
            if(param4 != null)
            {
               _loc9_ = param4;
            }
            if(param5 != null)
            {
               _loc10_ = param5;
            }
            param1.addEventListener(MouseEvent.MOUSE_UP, _loc8_.bind(this));
            param1.addEventListener(MouseEvent.MOUSE_OVER, _loc9_.bind(this));
            param1.addEventListener(MouseEvent.MOUSE_OUT, _loc10_.bind(this));
            param1.buttonMode = param1.useHandCursor = param1.mouseEnabled = true;
            if(param2 == true)
            {
               param1.mouseChildren = false;
            }
            this.var_51.push({
               "movBtn":param1,
               "OverrideUp":_loc8_,
               "OverrideOver":_loc9_,
               "OverrideOut":_loc10_
            });
         }
      }
      
      private method_745(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("off");
      }
      
      private method_625(param1: MouseEvent): void
      {
         param1.target.gotoAndStop("on");
      }
      
      public method_10(): void
      {
         0;
         while(0 < this.var_51.length)
         {
            this.var_51[0].movBtn.removeEventListener(MouseEvent.MOUSE_OVER,this.var_51[0].OverrideOver);
            this.var_51[0].movBtn.removeEventListener(MouseEvent.MOUSE_OUT,this.var_51[0].OverrideOut);
            this.var_51[0].movBtn.removeEventListener(MouseEvent.MOUSE_UP,this.var_51[0].OverrideUp);
            this.var_51[0].movBtn.buttonMode = this.var_51[0].useHandCursor = this.var_51[0].mouseEnabled = false;
            let _loc1_: number = 0 + 1;
         }
         this.var_51 = new Array();
      }
      
      public method_814(param1: number = 0): MovieClip
      {
         if(param1 < this.var_51.length && param1 >= 0)
         {
            return this.var_51[param1];
         }
         return null;
      }
      
      private DefaultUp(param1: MouseEvent): void
      {
      }
      
      public Setup(param1: Function = null as any, param2: Function = null as any, param3: Function = null as any): void
      {
         if(param2 != null)
         {
            this.var_421 = param2;
         }
         else
         {
            this.var_421 = this.method_625;
         }
         if(param3 != null)
         {
            this.var_462 = param3;
         }
         else
         {
            this.var_462 = this.method_745;
         }
         if(param1 != null)
         {
            this.funUp = param1;
         }
         else
         {
            this.funUp = this.DefaultUp;
         }
         this.var_51 = new Array();
      }
      
      public method_7(param1: MovieClip): void
      {
         let _loc2_: number = 0;
         while(_loc2_ < this.var_51.length)
         {
            if(this.var_51[_loc2_].movBtn == param1)
            {
               this.var_51[_loc2_].movBtn.removeEventListener(MouseEvent.MOUSE_OVER,this.var_51[_loc2_].OverrideOver);
               this.var_51[_loc2_].movBtn.removeEventListener(MouseEvent.MOUSE_OUT,this.var_51[_loc2_].OverrideOut);
               this.var_51[_loc2_].movBtn.removeEventListener(MouseEvent.MOUSE_UP,this.var_51[_loc2_].OverrideUp);
               this.var_51[_loc2_].movBtn.buttonMode = this.var_51[_loc2_].useHandCursor = this.var_51[_loc2_].mouseEnabled = false;
               this.var_51.splice(_loc2_,1);
               break;
            }
            _loc2_++;
         }
      }
   }
