package package_11
{
   import flash.geom.Point;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol2035")]
   public class class_119 extends class_68
   {
      
      public function class_119()
      {
         super();
      }
      
      override public function MoveBullet() : Boolean
      {
         if(var_31 == true)
         {
            if(method_35() == true)
            {
               objBFRef.AddEffectToQueue(new class_66(),this.x,this.y,"TopEffectsLayer",true);
               var_31 = false;
               return true;
            }
            if(blnRotateTowardTarget == true)
            {
               method_14(RotateTowardTarget());
            }
            else
            {
               method_14(this.rotation);
            }
            if(this.TestForCollision() == true)
            {
            }
            this.x += moveX;
            this.y += moveY;
         }
         return false;
      }
      
      override public function TestForCollision() : Boolean
      {
         null;
         var _loc1_:Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         var _loc2_:class_6 = new class_6();
         var _loc4_:uint = 0;
         while(_loc4_ < objBFRef.arrBullets.length)
         {
            if(objBFRef.arrBullets[_loc4_].blnEnemy)
            {
               var _loc3_:Point = new Point(objBFRef.arrBullets[_loc4_].x,objBFRef.arrBullets[_loc4_].y);
               _loc3_ = objBFRef.arrBullets[_loc4_].parent.localToGlobal(null);
               _loc2_.x = null.x - _loc1_.x;
               _loc2_.y = null.y - _loc1_.y;
               if(_loc2_.method_41() < 11.5 + objBFRef.arrBullets[_loc4_].width / 2)
               {
                  objBFRef.arrBullets[_loc4_].intState = 2;
                  objBFRef.arrBullets[_loc4_].moveX = moveX;
                  objBFRef.arrBullets[_loc4_].moveY = moveY;
                  return true;
               }
            }
            _loc4_ += 1;
         }
         return false;
      }
   }
}

