// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class class_151 extends Weapon{
      
      constructor(){
         super();
         intFireRate = 100;
      }
      
      public PartCallTrigger(): void
      {
         if(!var_3.blnOkToTeleport)
         {
            return;
         }
         var_3.blnOkToTeleport = false;
         let _loc1_: Point = new Point(this.x,this.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         let _loc2_: class_6 = new class_6(_loc1_.x,_loc1_.y);
         var_3.objData.objWorld.currentBFTarget.AddEffectToQueue(new class_108(),_loc1_.x,_loc1_.y,"BottomEffectsLayer",false);
         _loc1_.x = stage.mouseX;
         _loc1_.y = stage.mouseY;
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         let _loc3_: class_6 = new class_6();
         if(_loc1_.length > var_3.objData.objWorld.currentBFTarget.BF_BG_mc.width / 2)
         {
            _loc3_.x = _loc1_.x;
            _loc3_.y = _loc1_.y;
            _loc3_.method_189();
            _loc3_.method_84(var_3.objData.objWorld.currentBFTarget.BF_BG_mc.width / 2);
            _loc1_.x = _loc3_.x;
            _loc1_.y = _loc3_.y;
         }
         var_3.objData.objWorld.currentBFTarget.AddEffectToQueue(new class_108(),_loc1_.x,_loc1_.y,"BottomEffectsLayer",false);
         var_3.objData.objWorld.mRef.sEffects.FLASH();
         _loc2_.x = _loc1_.x - _loc2_.x;
         _loc2_.y = _loc1_.y - _loc2_.y;
         var_3.objData.objWorld.AdjustBubblefieldObjects(_loc2_);
      }
   }
