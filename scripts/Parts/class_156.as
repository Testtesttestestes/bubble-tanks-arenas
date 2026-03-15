package Parts
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   import package_11.class_122;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol493")]
   public class class_156 extends Weapon
   {
      
      public var emitter1:MovieClip;
      
      public function class_156()
      {
         super();
         intFireRate = 40;
         var_137 = false;
         blnMineLayer = true;
      }
      
      override public function PartCallTrigger() : void
      {
         var _loc2_:uint = 0;
         var _loc1_:Point = new Point(this.emitter1.x,this.emitter1.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         arrMineRefs.push({
            "mc":var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_122(),_loc1_.x,_loc1_.y,1,this.rotation + var_3.rotation,10,10,true),
            "x":_loc1_.x,
            "y":_loc1_.y
         });
         if(arrMineRefs.length == 8)
         {
            var_3.objData.objWorld.currentBFTarget.AddEffectToQueue(new class_83(),arrMineRefs[0].x,arrMineRefs[0].y,"BottomEffectsLayer",false);
            _loc2_ = 0;
            while(_loc2_ < var_3.objData.objWorld.currentBFTarget.arrBulletRemoveQueue.length)
            {
               if(var_3.objData.objWorld.currentBFTarget.arrBulletRemoveQueue[_loc2_] == arrMineRefs[0].mc)
               {
                  var_3.objData.objWorld.currentBFTarget.arrBulletRemoveQueue.splice(_loc2_,1);
               }
               _loc2_++;
            }
            arrMineRefs[0].mc.blnReadyForDeleteQueue = true;
            arrMineRefs.splice(0,1);
         }
      }
   }
}

