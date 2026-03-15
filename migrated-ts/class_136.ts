// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_136 extends class_110{
      
      public r: number;
      constructor(){
         super();
         addFrameScript(0,this.frame1);
      }
      
      public frame1(): any
      {
         this.r = Math.round(Math.random() * 10);
         this.gotoAndPlay(this.r);
      }
   }
