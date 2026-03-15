package BTA_fla
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol1974")]
   public dynamic class componentbubblepurple_515 extends MovieClip
   {
      
      public var r:Number;
      
      public function componentbubblepurple_515()
      {
         super();
         addFrameScript(0,this.frame1,39,this.frame40,45,this.frame46);
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
      
      internal function frame46() : *
      {
         stop();
      }
   }
}

