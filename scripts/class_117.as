package
{
   import flash.events.Event;
   import flash.filters.GlowFilter;
   
   public class class_117 extends class_54
   {
      
      private var var_367:Boolean;
      
      private var timer:Number;
      
      public var var_311:Boolean;
      
      private var var_450:Number;
      
      public function class_117(param1:*, param2:*, param3:Boolean = false)
      {
         this.var_311 = param3;
         super(param1,param2);
         this.timer = 0;
         this.var_450 = 15;
         // Убрано ошибочное this.var_311 = false;, которое ломало логику
         this.var_367 = false;
         var_458 = false;
         var_409 = true;
         if(this.var_311 == true)
         {
            filters = new Array(new GlowFilter(16777215,1,3,3,3,3));
         }
         
         // Убран бесполезный do { ... } while(false);
         alpha = 0.7;
         addEventListener(Event.ENTER_FRAME,this.method_299);
         
         var _loc4_:uint = 0;
         while(_loc4_ < 5)
         {
            this.method_208();
            _loc4_++;
         }
         var_288 = true;
         alpha = 0.5;
      }
      
      public function method_825(param1:Number = 0, param2:Number = 0) : *
      {
         var _loc3_:Number = this.method_203(-0.25,0.25);
         var _loc4_:Number = this.method_203(-0.25,0.25);
         if(this.var_311 && Math.floor(Math.random() * 50) == 5)
         {
            this.method_373(param1,param2,0,_loc3_ / 2,_loc4_ / 2);
         }
         else
         {
            this.method_373(param1,param2,0,_loc3_,_loc4_);
         }
      }
      
      public function method_269() : *
      {
         var_335 = true;
      }
      
      public function method_373(param1:Number, param2:Number, param3:*, param4:Number = 0, param5:Number = 0) : void
      {
         switch(this.RandNum(1,17))
         {
            case 1:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,4294967295);
               break;
            case 2:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,4009754623);
               break;
            case 3:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,3724541951);
               break;
            case 4:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,3439329279);
               break;
            case 5:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,3154116607);
               break;
            case 6:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,3154116607);
               break;
            case 7:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,2868903935);
               break;
            case 8:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,2583691263);
               break;
            case 9:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,2298478591);
               break;
            case 10:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,2013265919);
               break;
            case 11:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,1728053247);
               break;
            case 12:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,1442840575);
               break;
            case 13:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,1157627903);
               break;
            case 14:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,872415231);
               break;
            case 15:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,587202559);
               break; // Убрали addr0027
            case 16:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,301989887);
               break;
            case 17:
               method_8(param1,param2,param3,param4,param5,0,0,0,0,16777215);
               break;
               // Убрали §§goto(addr0027)
         }
      }
      
      public function method_208() : *
      {
         var _loc1_:Number = this.method_203(-0.25,0.25);
         var _loc2_:Number = this.method_203(-0.25,0.25);
         if(this.var_311 && Math.floor(Math.random() * 50) == 5)
         {
            this.method_307(0,_loc1_ / 2,_loc2_ / 2);
         }
         else
         {
            this.method_307(0,_loc1_,_loc2_);
         }
      }
      
      public function method_55(param1:Boolean = false) : void
      {
         if(param1 == true)
         {
            this.var_367 = false;
         }
         if(this.var_367 == false)
         {
            if(!hasEventListener(Event.ENTER_FRAME))
            {
               addEventListener(Event.ENTER_FRAME,this.method_299);
            }
         }
      }
      
      public function method_96(param1:Boolean = false) : void
      {
         if(param1 == true)
         {
            this.var_367 = param1;
         }
         removeEventListener(Event.ENTER_FRAME,this.method_299);
      }
      
      public function method_215(param1:Number = 0, param2:Number = 0) : *
      {
         param1 *= -1;
         param2 *= -1;
         param1 *= 0.4;
         param2 *= 0.4;
         var_173.x += param1;
         var_173.y += param2;
      }
      
      public function method_299(param1:Event) : *
      {
         var _loc2_:Number = NaN;
         var _loc3_:uint = 0;
         if(this.timer == 4 || this.timer == 3 || this.timer == 2)
         {
            this.method_269();
         }
         if(this.timer == 5)
         {
            this.method_269();
            this.method_208();
         }
         if(this.timer == 10)
         {
            this.method_208();
            this.method_269();
            this.timer = 0;
         }
         if(var_295 < this.var_450)
         {
            _loc2_ = this.var_450 - var_295;
            _loc3_ = 0;
            // Восстановлен нормальный цикл while вместо дичи с loop0 и break loop0
            while(_loc3_ < _loc2_)
            {
               this.method_208();
               _loc3_++;
            }
         }
         ++this.timer;
         Update();
      }
      
      private function RandNum(param1:Number, param2:Number) : Number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public function method_307(param1:*, param2:Number = 0, param3:Number = 0) : void
      {
         switch(this.RandNum(1,17))
         {
            case 1:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,4294967295);
               break;
            case 2:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,4009754623);
               break;
            case 3:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,3724541951);
               break;
            case 4:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,3439329279);
               break;
            case 5:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,3154116607);
               break;
            case 6:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,3154116607);
               break;
            case 7:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,2868903935);
               break;
            case 8:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,2583691263);
               break;
            case 9:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,2298478591);
               break;
            case 10:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,2013265919);
               break;
            case 11:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,1728053247);
               break;
            case 12:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,1442840575);
               break;
            case 13:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,1157627903);
               break;
            case 14:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,872415231);
               break;
            case 15:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,587202559);
               break; // Убрали addr0035
            case 16:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,301989887);
               break;
            case 17:
               method_8(Math.random() * 550,Math.random() * 450,param1,param2,param3,0,0,0,0,16777215);
               break;
               // Убрали §§goto(addr0035)
         }
      }
      
      private function method_203(param1:Number, param2:Number) : Number
      {
         return Math.random() * (param2 - param1) + param1;
      }
   }
}