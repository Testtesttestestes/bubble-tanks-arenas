// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: Parts

export class class_158 extends Weapon{
      
      public var_18: MovieClip;
      private var_436: number;
      private var_389: number;
      private var_301: number;
      constructor(){
    super(); // AUTO-INJECTED
         addFrameScript(0,this.frame1,1,this.frame2);
         super();
         intFireRate = 4;
         this.var_389 = -1;
         this.var_436 = 100;
         this.var_301 = this.var_436;
      }
      
      public frame2(): any
      {
         this.stop();
      }
      
      public frame1(): any
      {
         this.stop();
      }
      
      public PartCallTrigger(): void
      {
         let _loc1_: Point = new Point(this.var_18.x,this.var_18.y);
         _loc1_ = this.localToGlobal(_loc1_);
         _loc1_ = var_3.objData.objWorld.currentBFTarget.globalToLocal(_loc1_);
         var_3.objData.objWorld.currentBFTarget.SpawnNewBullet(new class_131(),_loc1_.x,_loc1_.y,1.8,this.rotation + var_3.rotation,6,4);
      }
      
      private method_687(): void
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
      
      public Run(): void
      {
         this.method_687();
         if(this.var_389 == 1)
         {
            this.rotation += 5;
            PartCallRun();
         }
      }
   }
