// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_11

export class class_119 extends class_68{
      
      constructor(){
         super();
      }
      
      public MoveBullet(): boolean
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
      
      public TestForCollision(): boolean
      {
         null;
         let _loc1_: Point = new Point(this.x,this.y);
         _loc1_ = this.parent.localToGlobal(_loc1_);
         let _loc2_: class_6 = new class_6();
         let _loc4_: number = 0;
         while(_loc4_ < objBFRef.arrBullets.length)
         {
            if(objBFRef.arrBullets[_loc4_].blnEnemy)
            {
               let _loc3_: Point = new Point(objBFRef.arrBullets[_loc4_].x,objBFRef.arrBullets[_loc4_].y);
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
