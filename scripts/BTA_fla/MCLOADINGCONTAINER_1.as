package BTA_fla
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2180")]
   public dynamic class MCLOADINGCONTAINER_1 extends MovieClip
   {
      
      public function MCLOADINGCONTAINER_1()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2);
      }
      
      internal function frame1() : *
      {
         stop();
      }
      
      internal function frame2() : *
      {
         stop();
      }
   }
}

