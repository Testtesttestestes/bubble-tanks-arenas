package BTA_fla
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol412")]
   public dynamic class scrollBar_75 extends MovieClip
   {
      
      public function scrollBar_75()
      {
         super();
         addFrameScript(0,this.frame1,13,this.frame14,31,this.frame32);
      }
      
      internal function frame14() : *
      {
         stop();
      }
      
      internal function frame32() : *
      {
         gotoAndStop("off");
      }
      
      internal function frame1() : *
      {
         stop();
      }
   }
}

