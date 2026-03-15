// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: BTA_fla

export class componentbubblepurple_515 extends MovieClip{
      
      public r: number;
      constructor(){
         super();
         addFrameScript(0,this.frame1,39,this.frame40,45,this.frame46);
      }
      
      public frame1(): any
      {
         this.r = Math.round(Math.random() * 10);
         this.gotoAndPlay(this.r);
      }
      
      public frame40(): any
      {
         this.gotoAndPlay(1);
      }
      
      public frame46(): any
      {
         this.stop();
      }
   }
