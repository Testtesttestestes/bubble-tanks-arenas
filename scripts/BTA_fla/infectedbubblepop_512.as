package BTA_fla
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol1969")]
   public dynamic class infectedbubblepop_512 extends MovieClip
   {
      
      public var r:Number;
      
      public function infectedbubblepop_512()
      {
         super();
         addFrameScript(0,this.frame1,17,this.frame18);
      }
      
      internal function frame1() : *
      {
         this.r = Math.round(Math.random() * 10);
         gotoAndPlay(this.r);
      }
      
      internal function frame18() : *
      {
         gotoAndPlay(1);
      }
   }
}

