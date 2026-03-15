package
{
   import flash.display.MovieClip;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol569")]
   public dynamic class ArenaSlot extends MovieClip
   {
      
      public var play_mc:MovieClip;
      
      public var score_txt:TextField;
      
      public var trophy_mc:MovieClip;
      
      public var difficulty_txt:TextField;
      
      public var description_txt:TextField;
      
      public var arena_name_txt:TextField;
      
      public var total_enemies_txt:TextField;
      
      public var bubble_fields_txt:TextField;
      
      public function ArenaSlot()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2,39,this.frame40,41,this.frame42);
      }
      
      internal function frame1() : *
      {
         stop();
      }
      
      internal function frame2() : *
      {
         stop();
      }
      
      internal function frame42() : *
      {
         stop();
      }
      
      internal function frame40() : *
      {
         gotoAndStop("off");
      }
   }
}

