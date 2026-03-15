// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_8{
      
      private var_326: number;
      private var_387: boolean;
      private var_321: number;
      private var_263: number;
      private var_493: number;
      private var_537: number;
      private var_446: number;
      private var_500: number;
      private var_207: number;
      private timerStartValue: number;
      private mRef: class_79;
      private var_316: Stage;
      private txtFrameText: TextField;
      private updateLeft: number;
      private updateStart: number;
      constructor(param1: class_79, param2: Stage, param3: number = 0, param4: number = 0){
         super();
         this.mRef = param1;
         this.var_316 = param2;
         this.var_207 = 0;
         this.var_493 = 0;
         this.timerStartValue = 0;
         this.var_326 = 0;
         this.var_387 = true;
         this.var_446 = 16777215;
         this.var_321 = 0;
         this.var_263 = 3;
         this.var_500 = param3;
         this.var_537 = param4;
         if(param3 != 0 || param4 != 0)
         {
            this.var_263 = 5;
         }
         this.updateStart = 30;
         this.updateLeft = 30;
         this.mRef.addEventListener(Event.ENTER_FRAME, this.Run.bind(this));
         this.method_539();
      }
      
      private method_784(param1: number): void
      {
         this.var_446 = param1;
      }
      
      public method_539(): void
      {
         this.method_322();
      }
      
      private method_813(): void
      {
         this.var_493 = this.var_207;
      }
      
      public Deactivate(): void
      {
         this.mRef.removeEventListener(Event.ENTER_FRAME, this.Run.bind(this));
         this.mRef.removeChild(this.txtFrameText);
      }
      
      public method_812(): void
      {
         this.var_387 = false;
      }
      
      private Run(param1: Event): void
      {
         if(this.var_321 == 0)
         {
            this.timerStartValue = getTimer();
            this.var_321 = 1;
         }
         ++this.var_207;
         --this.updateLeft;
         if(this.updateLeft == 0)
         {
            this.updateLeft = this.updateStart;
            this.var_326 = Math.round(this.var_207 / ((getTimer() - this.timerStartValue) / 1000));
            this.var_207 = 0;
            this.timerStartValue = getTimer();
            this.var_321 = 2;
         }
         else if(this.var_321 == 1)
         {
            this.var_326 = Math.round(this.var_207 / ((getTimer() - this.timerStartValue) / 1000));
         }
         if(this.var_387 == true)
         {
            this.txtFrameText.text = this.var_326 + " fps";
         }
      }
      
      public method_322(): void
      {
         this.var_207 = 0;
         this.timerStartValue = 0;
         if(this.var_387 == true)
         {
            this.txtFrameText = new TextField();
            this.txtFrameText.textColor = this.var_446;
            this.txtFrameText.selectable = false;
            this.txtFrameText.text = 60 + "fps";
            this.txtFrameText.selectable = false;
            this.txtFrameText.mouseEnabled = false;
            if(this.var_263 == 1)
            {
               this.txtFrameText.x = 10;
               this.txtFrameText.y = 10;
            }
            else if(this.var_263 == 2)
            {
               this.txtFrameText.x = this.var_316.stageWidth - this.txtFrameText.width / 2;
               this.txtFrameText.y = 10;
            }
            else if(this.var_263 == 3)
            {
               this.txtFrameText.x = 10;
               this.txtFrameText.y = this.var_316.stageHeight - this.txtFrameText.height / 3;
            }
            else if(this.var_263 == 4)
            {
               this.txtFrameText.x = this.var_316.stageWidth - this.txtFrameText.width / 2;
               this.txtFrameText.y = this.var_316.stageHeight - this.txtFrameText.height / 3;
            }
            else if(this.var_263 == 5)
            {
               this.txtFrameText.x = this.var_500;
               this.txtFrameText.y = this.var_537;
            }
            this.mRef.addChild(this.txtFrameText);
         }
      }
      
      private method_826(): number
      {
         return this.var_326;
      }
   }
