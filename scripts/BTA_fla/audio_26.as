package BTA_fla
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol230")]
   public dynamic class audio_26 extends MovieClip
   {
      
      public function audio_26()
      {
         super();
         addFrameScript(0,this.frame1,24,this.frame25);
      }
      
      internal function frame25() : *
      {
         stop();
      }
      
      internal function frame1() : *
      {
         gotoAndStop("end");
      }
   }
}

