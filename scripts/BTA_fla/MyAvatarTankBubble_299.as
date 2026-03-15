package BTA_fla
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol1118")]
   public dynamic class MyAvatarTankBubble_299 extends MovieClip
   {
      
      public var r:Number;
      
      public function MyAvatarTankBubble_299()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      internal function frame1() : *
      {
         this.r = Math.round(Math.random() * 20);
         gotoAndPlay(this.r);
      }
   }
}

