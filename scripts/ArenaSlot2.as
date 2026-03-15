package
{
   import flash.display.MovieClip;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol626")]
   public dynamic class ArenaSlot2 extends MovieClip
   {
      
      public var play_mc:MovieClip;
      
      public var score_txt:TextField;
      
      public var trophy_mc:MovieClip;
      
      public var rating_txt:TextField;
      
      public var rate1:MovieClip;
      
      public var rate2:MovieClip;
      
      public var rate3:MovieClip;
      
      public var server_overlay:MovieClip;
      
      public var rate5:MovieClip;
      
      public var rate4:MovieClip;
      
      public var total_enemies_txt:TextField;
      
      public var difficulty_txt:TextField;
      
      public var arena_name_txt:TextField;
      
      public var author_txt:TextField;
      
      public var bubble_fields_txt:TextField;
      
      public function ArenaSlot2()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2,39,this.frame40,40,this.frame41,41,this.frame42);
      }
      
      internal function frame2() : *
      {
         stop();
      }
      
      internal function frame40() : *
      {
         gotoAndStop("off");
      }
      
      internal function frame1() : *
      {
         stop();
      }
      
      internal function frame41() : *
      {
         stop();
      }
      
      internal function frame42() : *
      {
         stop();
      }
   }
}

