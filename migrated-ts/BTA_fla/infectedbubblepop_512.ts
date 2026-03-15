// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: BTA_fla

export class infectedbubblepop_512 extends MovieClip{
      
      public r: number;
      constructor(){
         super();
         addFrameScript(0,this.frame1,17,this.frame18);
      }
      
      public frame1(): any
      {
         this.r = Math.round(Math.random() * 10);
         this.gotoAndPlay(this.r);
      }
      
      public frame18(): any
      {
         this.gotoAndPlay(1);
      }
   }
