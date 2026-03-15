package
{
   public class EnemyAI extends class_113
   {
      
      internal var var_435:Number;
      
      internal var var_231:Number;
      
      public function EnemyAI(param1:TankData)
      {
         super(param1);
         this.var_435 = param1.numSpeed;
         this.var_231 = -1;
         intState = 1;
         MoveWanderSetup();
      }
      
      override public function Move() : void
      {
         this.method_558();
         method_406();
      }
      
      private function method_558() : void
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
      
      public function GetStuck() : void
      {
         objData.numSpeed = 0.3 * this.var_435;
         this.var_231 = 80;
      }
   }
}

