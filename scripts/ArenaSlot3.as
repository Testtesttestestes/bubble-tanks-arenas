package
{
   import flash.display.MovieClip;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol1467")]
   public dynamic class ArenaSlot3 extends MovieClip
   {
      
      public var play_mc:MovieClip;
      
      public var score_txt:TextField;
      
      public var trophy_mc:MovieClip;
      
      public var total_enemies_txt:TextField;
      
      public var difficulty_txt:TextField;
      
      public var server_overlay:MovieClip;
      
      public var arena_name_txt:TextField;
      
      public var author_txt:TextField;
      
      public var bubble_fields_txt:TextField;
      
      public function ArenaSlot3()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2,39,this.frame40);
      }
      
      internal function frame1() : *
      {
         stop();
      }
      
      internal function frame40() : *
      {
         gotoAndStop("off");
      }
      
      internal function frame2() : *
      {
         stop();
      }
   }
}

