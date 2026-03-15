// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_11

export class class_127 extends class_68{
      
      public var_381: number = 45;
      constructor(){
         super();
      }
      
      public MoveBullet(): boolean
      {
         let _loc1_: Point = null;
         let _loc2_: number = 0;
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
            if(TestForCollision() == true)
            {
               var_31 = false;
               return true;
            }
            if(this.var_381 <= 0)
            {
               _loc1_ = new Point(this.x,this.y);
               _loc1_ = this.parent.localToGlobal(_loc1_);
               _loc1_ = objBFRef.globalToLocal(_loc1_);
               _loc2_ = 0;
               while(_loc2_ < 360)
               {
                  objBFRef.SpawnNewBullet(new class_130(),_loc1_.x,_loc1_.y,1,this.rotation + _loc2_,7,5,false);
                  _loc2_ += 360 / 36;
               }
               var_31 = false;
               return true;
            }
            --this.var_381;
            this.x += moveX;
            this.y += moveY;
         }
         return false;
      }
   }
