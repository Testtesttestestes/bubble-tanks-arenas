package BTA_fla
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol497")]
   public dynamic class componentbubbleyellowlarge_101 extends MovieClip
   {
      
      public var r:Number;
      
      public function componentbubbleyellowlarge_101()
      {
         super();
         addFrameScript(0,this.frame1,39,this.frame40,46,this.frame47);
      }
      
      internal function frame47() : *
      {
         stop();
      }
      
      internal function frame1() : *
      {
         this.r = Math.round(Math.random() * 10);
         gotoAndPlay(this.r);
      }
      
      internal function frame40() : *
      {
         gotoAndPlay(1);
      }
   }
}

