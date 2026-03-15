package
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol944")]
   public dynamic class TankScreens extends MovieClip
   {
      
      public var share_btn:SimpleButton;
      
      public var continue_btn:SimpleButton;
      
      public var agree_btn:SimpleButton;
      
      public var id_txt:TextField;
      
      public var return_btn:SimpleButton;
      
      public var cancel_btn:SimpleButton;
      
      public var tank_txt:TextField;
      
      public var data_txt:TextField;
      
      public var shareTank_mc:MovieClip;
      
      public var Copy_btn:SimpleButton;
      
      public var message_txt:TextField;
      
      public var exit_btn:SimpleButton;
      
      public var author_txt:TextField;
      
      public function TankScreens()
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

