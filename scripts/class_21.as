package
{
   public class class_21
   {
      
      public var var_524:Number = 1;
      
      public var movementType:Number = 1;
      
      public var var_481:Number;
      
      public var var_497:Number;
      
      public var var_480:Number;
      
      public var var_566:Boolean = true;
      
      public var var_179:class_21;
      
      public var var_398:Number;
      
      public var var_361:Number;
      
      public var var_309:Number;
      
      public var var_317:Number = 0;
      
      public var color:uint;
      
      public var dead:Boolean = false;
      
      public var maxX:Number = 500;
      
      public var maxY:Number = 500;
      
      public var var_452:Boolean = true;
      
      public var x:Number;
      
      public var y:Number;
      
      public var z:Number;
      
      public function class_21(param1:Number = 0, param2:Number = 0, param3:Number = 0, param4:Number = 0, param5:Number = 0, param6:Number = 0, param7:Number = 0, param8:Number = 0, param9:Number = 0, param10:uint = 4278190080, param11:Number = 1, param12:Number = 1, param13:Number = 500, param14:Number = 500, param15:class_21 = null)
      {
         super();
         this.x = param1;
         this.y = param2;
         this.z = param3;
         this.var_398 = param4;
         this.var_361 = param5;
         this.var_309 = param6;
         this.var_481 = param7;
         this.var_497 = param8;
         this.var_480 = param9;
         this.method_587(param13,param14);
         this.movementType = param11;
         this.var_524 = param12;
         this.color = param10;
         this.var_179 = param15;
         if(this.var_309 == 0 && this.z == 0)
         {
            this.var_452 = false;
            this.z = -1 * (Math.random() * 1 + 0.2);
         }
         if(this.movementType == 2 || this.movementType == 3)
         {
            this.var_317 = Math.random() * 100;
         }
         if(this.movementType == 4)
         {
            this.var_317 = Math.random() * 100;
         }
      }
      
      public function Update() : Boolean
      {
         if(!this.var_566)
         {
            return false;
         }
         this.x += this.var_398;
         this.y += this.var_361;
         if(this.movementType != 1)
         {
            if(this.movementType == 2)
            {
               this.y += Math.cos((this.var_317 + this.x) / 10) * 10;
            }
            else if(this.movementType == 3)
            {
               this.y += Math.sin((this.var_317 + this.x) / 10) * 10;
            }
            else if(this.movementType == 4)
            {
               this.x += Math.cos((this.var_317 + this.y) / 10) * 10;
            }
         }
         this.var_398 += this.var_481;
         this.var_361 += this.var_497;
         if(this.var_524 == 2)
         {
            this.color += Math.random() * 5;
         }
         if(this.var_452 == true)
         {
            this.z += this.var_309;
            this.var_309 += this.var_480;
         }
         if(this.x < 0 || this.x > this.maxX || this.y < 0 || this.y > this.maxY)
         {
            this.dead = true;
         }
         return this.dead;
      }
      
      public function method_587(param1:Number = 500, param2:Number = 500) : void
      {
         this.maxX = param1;
         this.maxY = param2;
      }
   }
}

