// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_82 extends MovieClip{
      
      public var_370: number;
      public var_585: MovieClip;
      public var_547: number;
      constructor(){
         super();
         this.var_547 = 0;
         this.var_370 = -1;
         let _loc1_: number = 0.5 + Math.random() * 2;
         this.var_370 *= _loc1_ * 3;
         this.scaleX = _loc1_;
         this.scaleY = this.scaleX;
         let _loc2_: number = Math.random() * 550;
         this.x = _loc2_;
         this.y = 470;
         this.addEventListener(Event.ENTER_FRAME, this.method_707.bind(this));
      }
      
      public method_707(param1: Event): void
      {
         this.y += this.var_370;
      }
   }
