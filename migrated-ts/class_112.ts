// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_112 extends MovieClip{
      
      public var_252: number;
      private mRef: class_79;
      constructor(){
         super();
         this.var_252 = 1;
      }
      
      private method_754(param1: Event): void
      {
         let _temp_3: any = this;
         let _temp_2: any = this;
         let _temp_1: any = true;
         true;
         _temp_2.useHandCursor = _temp_1;
         _temp_3.buttonMode = true;
      }
      
      private method_647(param1: Event): void
      {
         let _temp_3: any = this;
         let _temp_2: any = this;
         let _temp_1: any = false;
         false;
         _temp_2.useHandCursor = _temp_1;
         _temp_3.buttonMode = false;
      }
      
      public Setup(param1: class_79): void
      {
         this.mRef = param1;
         this.addEventListener(MouseEvent.MOUSE_UP, this.method_732.bind(this));
         this.addEventListener(MouseEvent.MOUSE_OVER, this.method_754.bind(this));
         this.addEventListener(MouseEvent.MOUSE_OUT, this.method_647.bind(this));
      }
      
      public method_115(param1: number): boolean
      {
         if(this.mRef != null)
         {
            if(param1 == 1)
            {
               return this.mRef.gData.var_508;
            }
            if(param1 == 2)
            {
               return this.mRef.gData.var_512;
            }
            if(param1 == 3)
            {
               return this.mRef.gData.var_484;
            }
            if(param1 == 4)
            {
               return this.mRef.gData.var_521;
            }
         }
         return false;
      }
      
      public method_366(): void
      {
         if(this.mRef != null)
         {
            this.mRef.method_216();
            this.mRef.removeChild(this);
         }
      }
      
      private method_732(param1: Event): void
      {
         if(this.var_252 == 1)
         {
            if(this.method_115(3) == true)
            {
               this.mRef.method_44("intro_armor_games_link","link_outs");
               this.mRef.method_56(this.var_252);
            }
         }
         if(this.var_252 == 2)
         {
            if(this.method_115(4) == true)
            {
               this.mRef.method_44("intro_hero_interactive_link","link_outs");
               this.mRef.method_56(this.var_252);
            }
         }
      }
   }
