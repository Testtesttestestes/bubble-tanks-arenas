// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_111 extends MovieClip{
      
      private mRef: class_79;
      private cont_btn: MovieClip;
      public var_330: MovieClip;
      private var_241: boolean;
      private var_314: number;
      constructor(){
         super();
         this.var_241 = false;
         this.addEventListener(Event.ENTER_FRAME, this.Run.bind(this));
      }
      
      private method_709(): void
      {
         this.mRef.loaderInfo.removeEventListener(ProgressEvent.PROGRESS, this.method_266.bind(this));
         this.mRef.loaderInfo.removeEventListener(Event.COMPLETE, this.method_249.bind(this));
         this.removeEventListener(Event.ENTER_FRAME, this.Run.bind(this));
         this.mRef.removeChild(this);
      }
      
      private method_336(param1: Event): void
      {
         let _temp_3: any = this.cont_btn;
         let _temp_1: any = true;
         true;
         useHandCursor = _temp_1;
         _temp_3.buttonMode = true;
         this.cont_btn.gotoAndStop("off");
      }
      
      public CreateContinueButton(): void
      {
         this.cont_btn = new class_71();
         this.cont_btn.x = this.mRef.stage.stageWidth / 2 - this.cont_btn.width / 2;
         if(this.mRef.var_358 == true)
         {
            this.cont_btn.y = Math.floor(this.mRef.stage.stageHeight / 2 + this.cont_btn.height * 2.5) - 45;
         }
         else
         {
            this.cont_btn.y = Math.floor(this.mRef.stage.stageHeight / 2 + this.cont_btn.height * 2.5) - 25;
         }
         this.mRef.addChild(this.cont_btn);
         this.cont_btn.addEventListener(MouseEvent.MOUSE_OVER, this.method_335.bind(this));
         this.cont_btn.addEventListener(MouseEvent.MOUSE_OUT, this.method_336.bind(this));
         this.cont_btn.addEventListener(MouseEvent.MOUSE_UP, this.contUp.bind(this));
      }
      
      private method_335(param1: Event): void
      {
         let _temp_3: any = this.cont_btn;
         let _temp_1: any = true;
         true;
         useHandCursor = _temp_1;
         _temp_3.buttonMode = true;
         this.cont_btn.gotoAndStop("on");
      }
      
      public method_266(param1: ProgressEvent): void
      {
         let _loc2_: number = Number(param1.target.bytesLoaded);
         let _loc3_: number = Number(param1.target.bytesTotal);
         let _loc4_: number = Math.round(_loc2_ / _loc3_ * 100);
         if(_loc4_ < 100)
         {
            this.var_330.loaded_txt.text = _loc4_;
         }
         else
         {
            this.var_330.loaded_txt.text = "100";
            this.mRef.gotoAndStop("load");
            this.var_241 = true;
         }
      }
      
      private method_578(): void
      {
         if(this.var_241 == true)
         {
            if(this.var_314 > 0)
            {
               --this.var_314;
            }
            else if(this.var_314 == 0)
            {
               this.CreateContinueButton();
               this.removeEventListener(Event.ENTER_FRAME, this.Run.bind(this));
            }
         }
      }
      
      private Run(param1: Event): void
      {
         this.method_578();
         if(this.var_241 == false)
         {
            if(this.mRef.loaderInfo.bytesLoaded >= this.mRef.loaderInfo.bytesTotal)
            {
               this.mRef.loaderInfo.removeEventListener(ProgressEvent.PROGRESS, this.method_266.bind(this));
               this.mRef.loaderInfo.removeEventListener(Event.COMPLETE, this.method_249.bind(this));
               this.var_330.loaded_txt.text = "100";
               this.mRef.gotoAndStop("load");
               this.var_241 = true;
            }
         }
      }
      
      private contUp(param1: Event): void
      {
         this.cont_btn.removeEventListener(MouseEvent.MOUSE_OVER, this.method_335.bind(this));
         this.cont_btn.removeEventListener(MouseEvent.MOUSE_OUT, this.method_336.bind(this));
         this.cont_btn.removeEventListener(MouseEvent.MOUSE_UP, this.contUp.bind(this));
         this.mRef.removeChild(this.cont_btn);
         this.mRef.method_423();
         this.mRef.Setup();
         this.method_709();
      }
      
      public method_249(param1: Event): void
      {
         this.var_330.loaded_txt.text = "100";
         this.mRef.gotoAndStop("load");
         this.var_241 = true;
      }
      
      public PL_Listeners(): void
      {
         if(this.mRef.loaderInfo.bytesLoaded >= this.mRef.loaderInfo.bytesTotal)
         {
            this.var_330.loaded_txt.text = "100";
            this.mRef.gotoAndStop("load");
            this.var_241 = true;
         }
         else
         {
            this.mRef.loaderInfo.addEventListener(ProgressEvent.PROGRESS, this.method_266.bind(this));
            this.mRef.loaderInfo.addEventListener(Event.COMPLETE, this.method_249.bind(this));
         }
      }
      
      public Setup(param1: class_79): void
      {
         this.mRef = param1;
         this.var_314 = this.mRef.gData.var_494;
         this.mRef.gotoAndStop("load");
      }
   }
