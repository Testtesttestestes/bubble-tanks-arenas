package BTA_fla
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol491")]
   public dynamic class componentbubbleyellow_96 extends MovieClip
   {
      
      public var r:Number;
      
      public function componentbubbleyellow_96()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      internal function frame1() : *
      {
         this.r = Math.round(Math.random() * 10);
         gotoAndPlay(this.r);
      }
   }
}

