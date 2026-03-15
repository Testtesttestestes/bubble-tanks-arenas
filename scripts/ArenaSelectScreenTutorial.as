package
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2127")]
   public dynamic class ArenaSelectScreenTutorial extends MovieClip
   {
      
      public var next_mc:MovieClip;
      
      public var back_mc:MovieClip;
      
      public function ArenaSelectScreenTutorial()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2,2,this.frame3,3,this.frame4);
      }
      
      internal function frame1() : *
      {
         stop();
      }
      
      internal function frame2() : *
      {
         stop();
      }
      
      internal function frame3() : *
      {
         stop();
      }
      
      internal function frame4() : *
      {
         stop();
      }
   }
}

