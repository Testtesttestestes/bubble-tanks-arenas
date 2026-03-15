// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_117 extends class_54{
      
      private var_367: boolean;
      private timer: number;
      public var_311: boolean;
      private var_450: number;
      constructor(param1: any, param2: any, param3: boolean = false){
    super(); // AUTO-INJECTED
         this.var_311 = param3;
         super(param1,param2);
         this.timer = 0;
         this.var_450 = 15;
         this.var_311 = false;
         this.var_367 = false;
         var_458 = false;
         var_409 = true;
         if(this.var_311 == true)
         {
            filters = new Array(new GlowFilter(16777215,1,3,3,3,3));
         }
         alpha = 0.7;
         this.addEventListener(Event.ENTER_FRAME, this.method_299.bind(this));
         let _loc4_: number = 0;
         while(_loc4_ < 5)
         {
            this.method_208();
            _loc4_++;
         }
         var_288 = true;
         alpha = 0.5;
      }
      
      public method_825(param1: number = 0, param2: number = 0): any
      {
         let _loc3_: number = this.method_203(-0.25,0.25);
         let _loc4_: number = this.method_203(-0.25,0.25);
         if(this.var_311 && Math.floor(Math.random() * 50) == 5)
         {
            this.method_373(param1,param2,0,_loc3_ / 2,_loc4_ / 2);
         }
         else
         {
            this.method_373(param1,param2,0,_loc3_,_loc4_);
         }
      }
      
      public method_269(): any
      {
         var_335 = true;
      }
      
      public method_373(param1: number, param2: number, param3: any, param4: number = 0, param5: number = 0): void
      {
         switch(this.RandNum(1,17))
         {
            case 1:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,4294967295);
               break;
            case 2:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,4009754623);
               break;
            case 3:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,3724541951);
               break;
            case 4:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,3439329279);
               break;
            case 5:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,3154116607);
               break;
            case 6:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,3154116607);
               break;
            case 7:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,2868903935);
               break;
            case 8:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,2583691263);
               break;
            case 9:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,2298478591);
               break;
            case 10:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,2013265919);
               break;
            case 11:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,1728053247);
               break;
            case 12:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,1442840575);
               break;
            case 13:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,1157627903);
               break;
            case 14:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,872415231);
               break;
            case 15:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,587202559);
               break;
            case 16:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,301989887);
               break;
            case 17:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,16777215);
         }
      }
      
      public method_208(): any
      {
         let _loc1_: number = this.method_203(-0.25,0.25);
         let _loc2_: number = this.method_203(-0.25,0.25);
         if(this.var_311 && Math.floor(Math.random() * 50) == 5)
         {
            this.method_307(0,_loc1_ / 2,_loc2_ / 2);
         }
         else
         {
            this.method_307(0,_loc1_,_loc2_);
         }
      }
      
      public method_55(param1: boolean = false): void
      {
         if(param1 == true)
         {
            this.var_367 = false;
         }
         if(this.var_367 == false)
         {
            if(!hasEventListener(Event.ENTER_FRAME))
            {
               this.addEventListener(Event.ENTER_FRAME, this.method_299.bind(this));
            }
         }
      }
      
      public method_96(param1: boolean = false): void
      {
         if(param1 == true)
         {
            this.var_367 = param1;
         }
         this.removeEventListener(Event.ENTER_FRAME, this.method_299.bind(this));
      }
      
      public method_215(param1: number = 0, param2: number = 0): any
      {
         param1 *= -1;
         param2 *= -1;
         param1 *= 0.4;
         param2 *= 0.4;
         var_173.x += param1;
         var_173.y += param2;
      }
      
      public method_299(param1: Event): any
      {
         let _loc2_: number = NaN;
         let _loc3_: number = 0;
         if(this.timer == 4 || this.timer == 3 || this.timer == 2)
         {
            this.method_269();
         }
         if(this.timer == 5)
         {
            this.method_269();
            this.method_208();
         }
         if(this.timer == 10)
         {
            this.method_208();
            this.method_269();
            this.timer = 0;
         }
         if(var_295 < this.var_450)
         {
            _loc2_ = this.var_450 - var_295;
            _loc3_ = 0;
            while(_loc3_ < _loc2_)
            {
               this.method_208();
               _loc3_++;
            }
         }
         ++this.timer;
         Update();
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public method_307(param1: any, param2: number = 0, param3: number = 0): void
      {
         switch(this.RandNum(1,17))
         {
            case 1:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,4294967295);
               break;
            case 2:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,4009754623);
               break;
            case 3:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,3724541951);
               break;
            case 4:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,3439329279);
               break;
            case 5:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,3154116607);
               break;
            case 6:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,3154116607);
               break;
            case 7:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,2868903935);
               break;
            case 8:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,2583691263);
               break;
            case 9:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,2298478591);
               break;
            case 10:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,2013265919);
               break;
            case 11:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,1728053247);
               break;
            case 12:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,1442840575);
               break;
            case 13:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,1157627903);
               break;
            case 14:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,872415231);
               break;
            case 15:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,587202559);
               break;
            case 16:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,301989887);
               break;
            case 17:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,16777215);
         }
      }
      
      private method_203(param1: number, param2: number): number
      {
         return Math.random() * (param2 - param1) + param1;
      }
   }
