package
{
   import flash.display.MovieClip;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol485")]
   public dynamic class class_64 extends MovieClip
   {
      
      public var r:Number;
      
      public function class_64()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      internal function frame1() : *
      {
         this.r = Math.round(Math.random() * 10);
         gotoAndPlay(this.r);
      }
   }
}

