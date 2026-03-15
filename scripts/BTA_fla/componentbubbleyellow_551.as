package BTA_fla
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2038")]
   public dynamic class componentbubbleyellow_551 extends MovieClip
   {
      
      public var r:Number;
      
      public function componentbubbleyellow_551()
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

