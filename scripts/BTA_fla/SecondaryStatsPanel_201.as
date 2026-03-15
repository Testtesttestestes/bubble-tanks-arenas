package BTA_fla
{
   import flash.display.MovieClip;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol806")]
   public dynamic class SecondaryStatsPanel_201 extends MovieClip
   {
      
      public var SpeedCurrent_txt:TextField;
      
      public var suggestedBox_mc:MovieClip;
      
      public var SpeedSlider_mc:MovieClip;
      
      public var LifeCurrent_txt:TextField;
      
      public var BubblesReturnedCurrent_txt:TextField;
      
      public var SpeedMax_txt:TextField;
      
      public var ConfirmMenu_mc:MovieClip;
      
      public var LifeSlider_mc:MovieClip;
      
      public var LifeMax_txt:TextField;
      
      public var BubblesReturnedSlider_mc:MovieClip;
      
      public var BubblesReturnedMax_txt:TextField;
      
      public function SecondaryStatsPanel_201()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      internal function frame1() : *
      {
         stop();
      }
   }
}

