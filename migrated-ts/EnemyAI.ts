// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class EnemyAI extends class_113{
      
      public var_435: number;
      public var_231: number;
      constructor(param1: TankData){
         super(param1);
         this.var_435 = param1.numSpeed;
         this.var_231 = -1;
         intState = 1;
         MoveWanderSetup();
      }
      
      public Move(): void
      {
         this.method_558();
         method_406();
      }
      
      private method_558(): void
      {
         if(this.var_231 > 0)
         {
            --this.var_231;
         }
         else if(this.var_231 == 0)
         {
            objData.numSpeed = this.var_435;
            this.var_231 = -1;
         }
      }
      
      public GetStuck(): void
      {
         objData.numSpeed = 0.3 * this.var_435;
         this.var_231 = 80;
      }
   }
