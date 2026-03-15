// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_54 extends Sprite{
      
      private var_202: class_21 = null as any;
      private var_390: number;
      public var_173: Point = new Point(0,0);
      private var_123: class_51;
      public var_409: boolean = true;
      public vecParticleMotion: Point = new Point(0,0);
      private var_391: number;
      private var_21: class_21 = null as any;
      private var_545: number;
      public var_458: boolean = true;
      private var_414: Stage;
      private refMain: class_79;
      public var_288: boolean = true;
      public var_295: number = 0;
      public var_335: boolean;
      constructor(param1: Stage, param2: class_79){
         super();
         this.var_545 = 0;
         this.var_414 = param1;
         this.refMain = param2;
         this.var_390 = this.var_414.stageWidth;
         this.var_391 = this.var_414.stageHeight;
         this.var_123 = new class_51(this.var_390,this.var_391);
         this.addChild(this.var_123);
         this.var_123.SetBlur(2,2,2);
      }
      
      public EnemyExplosion(param1: number = 1): void
      {
         let _loc4_: number = 0;
         let _loc5_: number = 0;
         let _loc6_: number = 0;
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         if(param1 == 1)
         {
            _loc4_ = 0;
            while(_loc4_ < 5)
            {
               _loc3_ = 6 - Math.random() * 12;
               _loc2_ = 6 - Math.random() * 12;
               this.method_8(this.var_21.x,this.var_21.y,5,_loc3_,_loc2_,0,0,0,0,4278190335,1,2);
               _loc4_++;
            }
         }
         if(param1 == 2)
         {
            _loc5_ = 0;
            while(_loc5_ < 10)
            {
               _loc3_ = 3 - Math.random() * 6;
               _loc2_ = 3 - Math.random() * 6;
               this.method_8(this.var_21.x,this.var_21.y,5,_loc3_,_loc2_,0,0,0,0,4278216243,1,2);
               _loc5_++;
            }
         }
         if(param1 == 3)
         {
            _loc6_ = 0;
            while(_loc6_ < 50)
            {
               _loc3_ = 3 - Math.random() * 6;
               _loc2_ = 3 - Math.random() * 6;
               this.method_8(this.var_21.x,this.var_21.y,5,_loc3_,_loc2_,0,0,0,0,4294967125,1,2);
               _loc6_++;
            }
         }
      }
      
      public PlayerDie(): void
      {
         let _loc1_: number = 0;
         while(_loc1_ < 10)
         {
            this.method_8(this.var_21.x,this.var_21.y,10,10 - Math.random() * 20,10 - Math.random() * 20,-0.2,0.1 - Math.random() * 0.2,0.1 - Math.random() * 0.2,0,4294923622,1,2);
            _loc1_++;
         }
      }
      
      public method_463(param1: number, param2: number, param3: number, param4: number): void
      {
         this.var_123.method_463(param1,param2,param3,param4);
      }
      
      public method_854(param1: number = 100, param2: number = 100, param3: number = 100): void
      {
         let _loc4_: number = 0;
         while(_loc4_ < param3)
         {
            this.method_8(param1,param2,5,5 - Math.random() * 10,5 - Math.random() * 10,0,0,0,0,Math.random() * 4294967295);
            _loc4_++;
         }
      }
      
      public method_168(param1: number, param2: number, param3: number, param4: number): void
      {
         this.var_123.method_168(param1,param2,param3,param4);
      }
      
      public method_8(param1: number = 0, param2: number = 0, param3: number = 0, param4: number = 0, param5: number = 0, param6: number = 0, param7: number = 0, param8: number = 0, param9: number = 0, param10: number = 4278190080, param11: number = 1, param12: number = 1, param13: class_21 = null as any): void
      {
         let _loc14_: class_21 = null;
         if(this.var_202 == null)
         {
            this.var_202 = new class_21(param1,param2,param3,param4,param5,param6,param7,param8,param9,param10,param11,param12,this.var_390,this.var_391,param13);
            this.var_21 = this.var_202;
         }
         else
         {
            _loc14_ = this.var_21.var_179;
            this.var_21.var_179 = new class_21(param1,param2,param3,param4,param5,param6,param7,param8,param9,param10,param11,param12,this.var_390,this.var_391,_loc14_);
         }
      }
      
      public Draw(param1: any): void
      {
         this.var_123.Draw(param1);
      }
      
      public Update(): void
      {
         this.var_123.method_622();
         if(this.var_409 == true)
         {
            this.var_123.method_276();
         }
         if(this.var_202 != null)
         {
            this.var_21 = this.var_202;
            this.var_295 = 0;
            while(this.var_21 != null)
            {
               ++this.var_295;
               if(this.var_21.var_179 != null)
               {
                  if(this.var_21.var_179.dead || this.var_335 == true && Math.ceil(Math.random() * 50) == 5)
                  {
                     this.var_21.var_179 = this.var_21.var_179.var_179;
                  }
               }
               if(this.vecParticleMotion.x != 0)
               {
                  this.var_21.x += this.vecParticleMotion.x / (1 + this.var_21.z / 2);
                  this.vecParticleMotion.x *= 0.95;
               }
               if(this.vecParticleMotion.y != 0)
               {
                  this.var_21.y += this.vecParticleMotion.y / (1 + this.var_21.z / 2);
                  this.vecParticleMotion.y *= 0.95;
               }
               if(this.var_173.x != 0)
               {
                  this.var_21.x += this.var_173.x / (1 + this.var_21.z / 2);
               }
               if(this.var_173.y != 0)
               {
                  this.var_21.y += this.var_173.y / (1 + this.var_21.z / 2);
               }
               this.var_21.Update();
               if(this.var_21.var_452)
               {
                  if(this.var_288 == true)
                  {
                     this.var_123.method_168(this.var_21.x,this.var_21.y,this.var_21.z,this.var_21.color);
                  }
                  else if(this.var_21.color >= 2281701376)
                  {
                     this.var_123.method_168(this.var_21.x,this.var_21.y,this.var_21.z,this.var_21.color);
                  }
               }
               else if(this.var_288 == true)
               {
                  this.var_123.method_363(this.var_21.x,this.var_21.y,this.var_21.color);
               }
               else if(this.var_21.color >= 2281701376)
               {
                  this.var_123.method_363(this.var_21.x,this.var_21.y,this.var_21.color);
               }
               if(this.var_288 == true)
               {
                  if(this.var_21.color < 2281701376)
                  {
                     this.var_21.dead = true;
                  }
               }
               this.var_21 = this.var_21.var_179;
            }
            if(this.var_202.dead == true)
            {
               this.var_202 = this.var_202.var_179;
            }
            this.var_21 = this.var_202;
         }
         else
         {
            this.var_295 = 0;
         }
         if(this.var_458 == true)
         {
            this.var_123.method_290();
         }
         this.var_123.method_365();
         this.var_173.x = 0;
         this.var_173.y = 0;
         if(this.var_335 == true)
         {
            this.var_335 = false;
         }
      }
      
      public method_341(param1: number, param2: number): void
      {
         this.var_123.method_341(param1,param2);
      }
      
      public method_821(param1: number = 100, param2: number = 100, param3: number = 100): void
      {
         let _loc5_: number = NaN;
         let _loc6_: number = NaN;
         let _loc4_: number = 0;
         while(_loc4_ < param3)
         {
            _loc5_ = 5 - Math.random() * 10;
            _loc6_ = 5 - Math.random() * 10;
            this.method_8(param1,param2,4,_loc5_,_loc6_,-0.05,_loc5_ / 40,_loc6_ / 40,0,2298478591);
            _loc4_++;
         }
      }
      
      public AddRandomBackgroundSpew1(param1: number = 100, param2: number = 100, param3: number = 100): void
      {
         let _loc5_: number = NaN;
         let _loc6_: number = NaN;
         let _loc4_: number = 0;
         while(_loc4_ < param3)
         {
            _loc5_ = 100 + Math.random() * 200;
            switch(Math.ceil(Math.random() * 2))
            {
               case 1:
                  _loc5_ *= -1;
            }
            _loc6_ = 100 + Math.random() * 200;
            switch(Math.ceil(Math.random() * 2))
            {
               case 1:
                  _loc6_ *= -1;
            }
            this.method_8(param1,param2,1,_loc5_,_loc6_,0,_loc5_ / 200,_loc6_ / 200,0,Math.random() * 4294967295);
            _loc4_++;
         }
      }
      
      public method_853(param1: boolean = false): any
      {
         this.var_288 = param1;
      }
   }
