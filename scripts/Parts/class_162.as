package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol5")]
   public class class_162 extends Weapon
   {
      
      private var var_347:int;
      
      private var var_265:int;
      
      public var var_18:MovieClip;
      
      public function class_162()
      {
         super();
         intFireRate = 1;
         this.var_347 = 4;
         this.var_265 = 120;
      }
      
      override public function PartCallTrigger() : void
      {
         --this.var_265;
         if(this.var_265 > 0)
         {
            return;
         }
         if(this.var_347 > 0)
         {
            --this.var_347;
            return;
         }
         this.var_347 = 4;
         var _loc1_:Point = new Point(this.var_18.x,this.var_18.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,7,2);
         if(this.var_265 < -50)
         {
            this.var_265 = 120;
         }
      }
   }
}

