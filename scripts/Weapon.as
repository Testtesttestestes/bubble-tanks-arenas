package
{
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   public class Weapon extends MovieClip
   {
      
      public var var_34:MovieClip;
      
      public var intFireRate:int;
      
      public var intCounter:int;
      
      public var var_429:Boolean;
      
      public var var_3:class_113;
      
      public var var_137:Boolean = true;
      
      public var intObjID:Number;
      
      private var var_274:Boolean;
      
      private var var_236:int;
      
      public var arrMineRefs:Array;
      
      public var blnMineLayer:Boolean;
      
      public function Weapon()
      {
         super();
         this.arrMineRefs = new Array();
         this.var_34 = null;
         this.var_274 = false;
         this.var_429 = false;
         this.blnMineLayer = false;
         this.intCounter = 0;
         this.intFireRate = -1;
         this.var_137 = true;
      }
      
      public function PartCallRun() : void
      {
         this.method_736();
      }
      
      public function AvatarAim() : void
      {
         var _loc1_:Point = null;
         var _loc2_:Point = null;
         var _loc3_:class_6 = null;
         if(this.var_429 == true)
         {
            _loc1_ = new Point(stage.mouseX,stage.mouseY);
            _loc1_ = stage.localToGlobal(_loc1_);
            _loc2_ = new Point(this.x,this.y);
            _loc2_ = this.parent.localToGlobal(_loc2_);
            _loc3_ = new class_6(_loc1_.x - _loc2_.x,_loc1_.y - _loc2_.y);
            this.rotation = _loc3_.method_90() - this.var_3.rotation;
         }
      }
      
      public function Deactivate() : void
      {
         this.var_274 = true;
         this.var_3 = null;
         this.var_34 = null;
      }
      
      public function Setup(param1:class_113) : void
      {
         this.var_3 = param1;
         if(this.var_3.objData.numClass > 3)
         {
            this.var_429 = true;
         }
         this.PartCallAcquireTarget();
      }
      
      public function method_605() : void
      {
         if(this.var_236 == 1)
         {
            this.AvatarAim();
         }
         else if(this.var_236 == 3)
         {
            this.EnemyAim();
         }
      }
      
      public function PartCallTrigger() : void
      {
      }
      
      public function Run() : void
      {
         if(this.var_274 == true)
         {
            return;
         }
         this.method_605();
         if(this.var_236 == 1)
         {
            this.PartCallAvatarRun();
         }
         else if(this.var_236 != 2)
         {
            if(this.var_236 == 3)
            {
               if(this.var_34 != null)
               {
                  this.PartCallRun();
               }
            }
         }
      }
      
      public function method_630() : void
      {
         this.var_236 = this.var_3.objData.intType;
         if(this.var_236 == 3)
         {
            this.var_34 = this.var_3.objData.objWorld.myAvatar;
         }
      }
      
      public function PartCallAvatarRun() : void
      {
         this.AvatarShootTimer();
      }
      
      public function method_736() : void
      {
         if(this.intFireRate == -1)
         {
            return;
         }
         ++this.intCounter;
         if(this.intCounter >= this.intFireRate)
         {
            this.PartCallTrigger();
            this.intCounter = 0;
         }
      }
      
      public function PartCallAcquireTarget() : void
      {
         this.method_630();
      }
      
      public function EnemyAim() : void
      {
         if(this.var_137 == false)
         {
            return;
         }
         var _loc1_:Point = new Point(this.var_34.x,this.var_34.y);
         _loc1_ = this.var_34.parent.localToGlobal(_loc1_);
         var _loc2_:Point = new Point(this.x,this.y);
         _loc2_ = this.parent.localToGlobal(_loc2_);
         var _loc3_:class_6 = new class_6(_loc1_.x - _loc2_.x,_loc1_.y - _loc2_.y);
         this.rotation = _loc3_.method_90() - this.var_3.rotation;
      }
      
      public function AvatarShootTimer() : void
      {
         if(this.intCounter == -1)
         {
            return;
         }
         if(this.intCounter >= 0)
         {
            --this.intCounter;
         }
         else
         {
            this.intCounter = -1;
         }
      }
   }
}

