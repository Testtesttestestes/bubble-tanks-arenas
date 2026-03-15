package
{
   [Embed(source="/_assets/assets.swf", symbol="symbol144")]
   public dynamic class class_164 extends class_112
   {
      
      public function class_164()
      {
         super();
         addFrameScript(0,this.frame1,154,this.frame155,299,this.frame300);
      }
      
      internal function frame155() : *
      {
         var_252 = 2;
         if(method_115(2) == false)
         {
            gotoAndPlay("heroSkip");
         }
      }
      
      internal function frame1() : *
      {
         if(method_115(1) == false)
         {
            gotoAndPlay("armorSkip");
         }
      }
      
      internal function frame300() : *
      {
         stop();
         method_366();
      }
   }
}

