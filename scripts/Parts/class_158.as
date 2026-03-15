package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol503")]
   public class class_158 extends Weapon
   {
      
      public var var_18:MovieClip;
      
      private var var_436:int;
      
      private var var_389:int;
      
      private var var_301:int;
      
      public function class_158()
      {
         addFrameScript(0,this.frame1,1,this.frame2);
         super();
         intFireRate = 4;
         this.var_389 = -1;
         this.var_436 = 100;
         this.var_301 = this.var_436;
      }
      
      internal function frame2() : *
      {
         stop();
      }
      
      internal function frame1() : *
      {
         stop();
      }
      
      override public function PartCallTrigger() : void
      {
         var _loc1_:Point = new Point(this.var_18.x,this.var_18.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1.8,this.rotation + var_3.rotation,6,4);
      }
      
      private function method_687() : void
      {
         if(this.var_301 > 0)
         {
            --this.var_301;
         }
         else if(this.var_301 == 0)
         {
            this.var_389 *= -1;
            this.var_301 = this.var_436;
         }
      }
      
      override public function Run() : void
      {
         this.method_687();
         if(this.var_389 == 1)
         {
            this.rotation += 5;
            PartCallRun();
         }
      }
   }
}

