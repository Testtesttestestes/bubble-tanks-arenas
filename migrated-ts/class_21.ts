// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_21{
      
      public var_524: number = 1;
      public movementType: number = 1;
      public var_481: number;
      public var_497: number;
      public var_480: number;
      public var_566: boolean = true;
      public var_179: class_21;
      public var_398: number;
      public var_361: number;
      public var_309: number;
      public var_317: number = 0;
      public color: number;
      public dead: boolean = false;
      public maxX: number = 500;
      public maxY: number = 500;
      public var_452: boolean = true;
      public x: number;
      public y: number;
      public z: number;
      constructor(param1: number = 0, param2: number = 0, param3: number = 0, param4: number = 0, param5: number = 0, param6: number = 0, param7: number = 0, param8: number = 0, param9: number = 0, param10: number = 4278190080, param11: number = 1, param12: number = 1, param13: number = 500, param14: number = 500, param15: class_21 = null as any){
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
      
      public Update(): boolean
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
      
      public method_587(param1: number = 500, param2: number = 500): void
      {
         this.maxX = param1;
         this.maxY = param2;
      }
   }
