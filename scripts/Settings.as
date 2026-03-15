package
{
   import flash.display.MovieClip;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol296")]
   public dynamic class Settings extends MovieClip
   {
      
      public var back_btn:MovieClip;
      
      public var right_mc:MovieClip;
      
      public var s1:MovieClip;
      
      public var s2:MovieClip;
      
      public var fps_txt:TextField;
      
      public var pause_txt:TextField;
      
      public var g1:MovieClip;
      
      public var g2:MovieClip;
      
      public var g3:MovieClip;
      
      public var backSettings:MovieClip;
      
      public var left_txt:TextField;
      
      public var up_mc:MovieClip;
      
      public var hotkeys:MovieClip;
      
      public var gs1:MovieClip;
      
      public var gs2:MovieClip;
      
      public var gs3:MovieClip;
      
      public var up_txt:TextField;
      
      public var right_txt:TextField;
      
      public var left_mc:MovieClip;
      
      public var down_mc:MovieClip;
      
      public var down_txt:TextField;
      
      public var m1:MovieClip;
      
      public var m2:MovieClip;
      
      public var e1:MovieClip;
      
      public var e2:MovieClip;
      
      public var v1:MovieClip;
      
      public var v2:MovieClip;
      
      public var pause_mc:MovieClip;
      
      public function Settings()
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

