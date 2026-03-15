// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: BTA_fla

export class MyAvatarTankBubble_299 extends MovieClip{
      
      public r: number;
      constructor(){
         super();
         addFrameScript(0,this.frame1);
      }
      
      public frame1(): any
      {
         this.r = Math.round(Math.random() * 20);
         this.gotoAndPlay(this.r);
      }
   }
