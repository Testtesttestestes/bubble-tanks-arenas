// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class Weapon extends MovieClip{
      
      public var_34: MovieClip;
      public intFireRate: number;
      public intCounter: number;
      public var_429: boolean;
      public var_3: class_113;
      public var_137: boolean = true;
      public intObjID: number;
      private var_274: boolean;
      private var_236: number;
      public arrMineRefs: any[];
      public blnMineLayer: boolean;
      constructor(){
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
      
      public PartCallRun(): void
      {
         this.method_736();
      }
      
      public AvatarAim(): void
      {
         let _loc1_: Point = null;
         let _loc2_: Point = null;
         let _loc3_: class_6 = null;
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
      
      public Deactivate(): void
      {
         this.var_274 = true;
         this.var_3 = null;
         this.var_34 = null;
      }
      
      public Setup(param1: class_113): void
      {
         this.var_3 = param1;
         if(this.var_3.objData.numClass > 3)
         {
            this.var_429 = true;
         }
         this.PartCallAcquireTarget();
      }
      
      public method_605(): void
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
      
      public PartCallTrigger(): void
      {
      }
      
      public Run(): void
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
      
      public method_630(): void
      {
         this.var_236 = this.var_3.objData.intType;
         if(this.var_236 == 3)
         {
            this.var_34 = this.var_3.objData.objWorld.myAvatar;
         }
      }
      
      public PartCallAvatarRun(): void
      {
         this.AvatarShootTimer();
      }
      
      public method_736(): void
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
      
      public PartCallAcquireTarget(): void
      {
         this.method_630();
      }
      
      public EnemyAim(): void
      {
         if(this.var_137 == false)
         {
            return;
         }
         let _loc1_: Point = new Point(this.var_34.x,this.var_34.y);
         _loc1_ = this.var_34.parent.localToGlobal(_loc1_);
         let _loc2_: Point = new Point(this.x,this.y);
         _loc2_ = this.parent.localToGlobal(_loc2_);
         let _loc3_: class_6 = new class_6(_loc1_.x - _loc2_.x,_loc1_.y - _loc2_.y);
         this.rotation = _loc3_.method_90() - this.var_3.rotation;
      }
      
      public AvatarShootTimer(): void
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
