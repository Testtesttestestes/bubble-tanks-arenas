package
{
   [Embed(source="/_assets/assets.swf", symbol="symbol2051")]
   public dynamic class class_136 extends class_110
   {
      
      public var r:Number;
      
      public function class_136()
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

