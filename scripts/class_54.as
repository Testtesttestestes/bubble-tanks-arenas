package
{
   import flash.display.Sprite;
   import flash.display.Stage;
   import flash.geom.Point;
   
   public class class_54 extends Sprite
   {
      
      private var var_202:class_21 = null;
      
      private var var_390:Number;
      
      public var var_173:Point = new Point(0,0);
      
      private var var_123:class_51;
      
      public var var_409:Boolean = true;
      
      public var vecParticleMotion:Point = new Point(0,0);
      
      private var var_391:Number;
      
      private var var_21:class_21 = null;
      
      private var var_545:Number;
      
      public var var_458:Boolean = true;
      
      private var var_414:Stage;
      
      private var refMain:class_79;
      
      public var var_288:Boolean = true;
      
      public var var_295:Number = 0;
      
      public var var_335:Boolean;
      
      public function class_54(param1:Stage, param2:class_79)
      {
         super();
         this.var_545 = 0;
         this.var_414 = param1;
         this.refMain = param2;
         this.var_390 = this.var_414.stageWidth;
         this.var_391 = this.var_414.stageHeight;
         this.var_123 = new class_51(this.var_390,this.var_391);
         addChild(this.var_123);
         this.var_123.SetBlur(2,2,2);
      }
      
      public function EnemyExplosion(param1:Number = 1) : void
      {
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc2_:Number = 0;
         var _loc3_:Number = 0;
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
      
      public function PlayerDie() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < 10)
         {
            this.method_8(this.var_21.x,this.var_21.y,10,10 - Math.random() * 20,10 - Math.random() * 20,-0.2,0.1 - Math.random() * 0.2,0.1 - Math.random() * 0.2,0,4294923622,1,2);
            _loc1_++;
         }
      }
      
      public function method_463(param1:Number, param2:Number, param3:Number, param4:uint) : void
      {
         this.var_123.method_463(param1,param2,param3,param4);
      }
      
      public function method_854(param1:Number = 100, param2:Number = 100, param3:Number = 100) : void
      {
         var _loc4_:uint = 0;
         while(_loc4_ < param3)
         {
            this.method_8(param1,param2,5,5 - Math.random() * 10,5 - Math.random() * 10,0,0,0,0,Math.random() * 4294967295);
            _loc4_++;
         }
      }
      
      public function method_168(param1:Number, param2:Number, param3:Number, param4:uint) : void
      {
         this.var_123.method_168(param1,param2,param3,param4);
      }
      
      public function method_8(param1:Number = 0, param2:Number = 0, param3:Number = 0, param4:Number = 0, param5:Number = 0, param6:Number = 0, param7:Number = 0, param8:Number = 0, param9:Number = 0, param10:uint = 4278190080, param11:Number = 1, param12:Number = 1, param13:class_21 = null) : void
      {
         var _loc14_:class_21 = null;
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
      
      public function Draw(param1:*) : void
      {
         this.var_123.Draw(param1);
      }
      
      public function Update() : void
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
      
      public function method_341(param1:Number, param2:Number) : void
      {
         this.var_123.method_341(param1,param2);
      }
      
      public function method_821(param1:Number = 100, param2:Number = 100, param3:Number = 100) : void
      {
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc4_:uint = 0;
         while(_loc4_ < param3)
         {
            _loc5_ = 5 - Math.random() * 10;
            _loc6_ = 5 - Math.random() * 10;
            this.method_8(param1,param2,4,_loc5_,_loc6_,-0.05,_loc5_ / 40,_loc6_ / 40,0,2298478591);
            _loc4_++;
         }
      }
      
      public function AddRandomBackgroundSpew1(param1:Number = 100, param2:Number = 100, param3:Number = 100) : void
      {
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc4_:uint = 0;
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
      
      public function method_853(param1:Boolean = false) : *
      {
         this.var_288 = param1;
      }
   }
}

