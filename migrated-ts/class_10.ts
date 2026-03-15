// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_10{
      
      private var_399: boolean;
      private var_376: number;
      private intShakeDuration: number;
      private var_162: any[];
      private mainRef: class_79;
      private var_463: class_6;
      private var_278: number;
      private var_425: Stage;
      private var_138: class_6;
      constructor(param1: class_79, param2: Stage){
         super();
         this.intShakeDuration = 0;
         this.mainRef = param1;
         this.var_425 = param2;
         this.mainRef.addEventListener(Event.ENTER_FRAME, this.Run.bind(this));
         this.var_162 = new Array();
         this.intShakeDuration = 0;
         this.var_278 = 0;
         this.var_376 = 0;
         this.ShakeSetup();
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public method_257(): void
      {
         this.var_399 = false;
         this.method_259();
      }
      
      public FLASH(param1: number = 16777215): void
      {
         let sFlashMC: MovieClip = null;
         let fColor: number = param1;
         try
         {
            sFlashMC = new MovieClip();
            sFlashMC.x = -40;
            sFlashMC.y = -40;
            sFlashMC.graphics.beginFill(fColor,1);
            sFlashMC.graphics.drawRect(0,0,this.var_425.width + 80,this.var_425.height + 80);
            this.mainRef.addChild(sFlashMC);
            this.var_162.push(sFlashMC);
         }
         catch (e: any)
         {
         }
      }
      
      public method_534(): void
      {
         this.mainRef.removeEventListener(Event.ENTER_FRAME, this.Run.bind(this));
      }
      
      private method_437(param1: class_6): void
      {
         param1.x = Math.round(param1.x);
         param1.y = Math.round(param1.y);
         this.mainRef.x += param1.x;
         this.mainRef.y += param1.y;
      }
      
      public method_259(): void
      {
         let _loc1_: number = NaN;
         let _loc2_: number = NaN;
         let _loc3_: class_6 = null;
         if(this.mainRef.x != this.var_138.x || this.mainRef.y != this.var_138.y)
         {
            this.intShakeDuration = 0;
            _loc1_ = this.var_138.x - this.mainRef.x;
            _loc2_ = this.var_138.y - this.mainRef.y;
            this.mainRef.x = this.var_138.x;
            this.mainRef.y = this.var_138.y;
            _loc3_ = new class_6();
            _loc3_.x = _loc1_;
            _loc3_.y = _loc2_;
            this.method_437(this.var_138);
         }
      }
      
      public SHAKE(param1: number): void
      {
         if(!this.var_399)
         {
            return;
         }
         if(this.intShakeDuration == 0)
         {
            this.intShakeDuration = param1;
            this.var_376 = param1;
            this.var_278 = 3;
            this.var_138.x = this.mainRef.x;
            this.var_138.y = this.mainRef.y;
         }
      }
      
      private method_651(): void
      {
         let _loc1_: number = 0;
         while(_loc1_ < this.var_162.length)
         {
            if(this.var_162[_loc1_].alpha <= 0)
            {
               this.method_696(this.var_162[_loc1_]);
               this.var_162.splice(_loc1_,1);
               _loc1_--;
            }
            else
            {
               this.var_162[_loc1_].alpha -= 0.05;
            }
            _loc1_++;
         }
      }
      
      private Run(param1: Event): void
      {
         this.method_757();
         this.method_651();
      }
      
      public method_696(param1: MovieClip): void
      {
         let var_40: MovieClip = null;
         let var_56: number = 0;
         let var_106: MovieClip = param1;
         try
         {
            var_40 = var_106;
            var_56 = 0;
            if(var_56 < this.var_162.length)
            {
               if(this.var_162[var_56] == var_40)
               {
                  this.mainRef.removeChild(var_40);
               }
            }
         }
         catch (e: any)
         {
         }
      }
      
      public ShakeSetup(): void
      {
         this.intShakeDuration = 0;
         this.var_399 = true;
         this.var_162 = new Array();
         this.var_463 = this.var_138 = new class_6();
         this.var_463.x = this.var_138.x = this.mainRef.x;
         this.var_463.y = this.var_138.y = this.mainRef.y;
         this.method_259();
      }
      
      private method_757(): void
      {
         let _loc1_: number = NaN;
         let _loc2_: number = NaN;
         let _loc3_: number = NaN;
         let _loc4_: number = NaN;
         let _loc5_: number = NaN;
         let _loc6_: number = NaN;
         let _loc7_: class_6 = null;
         if(this.intShakeDuration > 0)
         {
            --this.intShakeDuration;
            if(this.intShakeDuration == 0)
            {
               this.method_259();
            }
            else
            {
               --this.var_278;
               if(this.var_278 == 0)
               {
                  this.var_278 = 3;
                  _loc1_ = this.intShakeDuration / this.var_376;
                  _loc2_ = 2;
                  if(this.var_376 > 45)
                  {
                     _loc2_ = 4;
                  }
                  _loc3_ = this.var_138.x + this.RandNum(-1 * _loc2_,_loc2_) * _loc1_;
                  _loc4_ = this.var_138.y + this.RandNum(-1 * _loc2_,_loc2_) * _loc1_;
                  _loc5_ = _loc3_ - this.mainRef.x;
                  _loc6_ = _loc4_ - this.mainRef.y;
                  this.mainRef.x = _loc3_;
                  this.mainRef.y = _loc4_;
                  _loc7_ = new class_6();
                  _loc7_.x = _loc5_;
                  _loc7_.y = _loc6_;
                  this.method_437(_loc7_);
               }
            }
         }
      }
      
      public method_288(): void
      {
         this.var_399 = true;
      }
   }
