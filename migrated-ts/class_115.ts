// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_115 extends MovieClip{
      
      private var_506: number;
      private var_556: number;
      private var_546: any[];
      private var_504: number;
      private var_319: number;
      constructor(){
         super();
      }
      
      private method_504(): void
      {
         let _loc1_: any = this.addChild(new class_82());
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public method_624(param1: any): any
      {
         this.var_504 = 20;
         this.var_506 = 60;
         this.var_319 = 0;
         this.var_546 = new Array();
         this.var_556 = 0;
         param1.addEventListener(Event.ENTER_FRAME, this.method_665.bind(this));
      }
      
      public method_665(param1: any): void
      {
         if(this.var_319 == 0)
         {
            this.method_504();
            this.var_319 = this.RandNum(this.var_504,this.var_506);
         }
         else
         {
            --this.var_319;
         }
         let _loc2_: any[] = new Array();
         let _loc3_: number = 0;
         while(_loc3_ < numChildren)
         {
            if((this.getChildAt(_loc3_ as unknown as MovieClip)).y < -10)
            {
               this.removeChildAt(_loc3_);
            }
            _loc3_ += 1;
         }
      }
   }
