// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: BTA_fla

export class componentbubbleyellowlarge_101 extends MovieClip{
      
      public r: number;
      constructor(){
         super();
         addFrameScript(0,this.frame1,39,this.frame40,46,this.frame47);
      }
      
      public frame47(): any
      {
         this.stop();
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
   }
