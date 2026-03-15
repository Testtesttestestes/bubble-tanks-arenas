package
{
   import flash.display.MovieClip;
   import flash.display.Stage;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   
   public class class_4
   {
      
      private var var_272:int;
      
      private var var_325:Stage;
      
      private var var_100:Array;
      
      public function class_4()
      {
         super();
         this.var_100 = new Array();
         this.var_272 = -1;
      }
      
      public function CleanUp() : void
      {
         this.method_205();
         this.var_325.removeEventListener(KeyboardEvent.KEY_DOWN,this.KeyboardDown);
         this.var_325.removeEventListener(MouseEvent.CLICK,this.method_483);
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_100.length)
         {
            this.var_100[_loc1_].movBackgroundField.removeEventListener(MouseEvent.CLICK,this.method_199);
            this.var_100[_loc1_].txtTextbox.removeEventListener(MouseEvent.CLICK,this.method_199);
            _loc1_++;
         }
         this.var_100.length = 0;
      }
      
      public function method_396(param1:Number) : String
      {
         var _loc2_:String = "";
         switch(param1)
         {
            case 8:
               _loc2_ = "BACKSPACE";
               break;
            case 20:
               _loc2_ = "CAPSLOCK";
               break;
            case 17:
               _loc2_ = "CONTROL";
               break;
            case 46:
               _loc2_ = "DELETE";
               break;
            case 40:
               _loc2_ = "DOWN";
               break;
            case 35:
               _loc2_ = "END";
               break;
            case 13:
               _loc2_ = "ENTER";
               break;
            case 27:
               _loc2_ = "ESCAPE";
               break;
            case 36:
               _loc2_ = "HOME";
               break;
            case 45:
               _loc2_ = "INSERT";
               break;
            case 37:
               _loc2_ = "LEFT";
               break;
            case 34:
               _loc2_ = "PGDN";
               break;
            case 33:
               _loc2_ = "PGUP";
               break;
            case 39:
               _loc2_ = "RIGHT";
               break;
            case 16:
               _loc2_ = "SHIFT";
               break;
            case 32:
               _loc2_ = "SPACE";
               break;
            case 9:
               _loc2_ = "TAB";
               break;
            case 38:
               _loc2_ = "UP";
               break;
            case 186:
               _loc2_ = ";";
               break;
            case 187:
               _loc2_ = "=";
               break;
            case 189:
               _loc2_ = "-";
               break;
            case 191:
               _loc2_ = "/";
               break;
            case 192:
               _loc2_ = "`";
               break;
            case 219:
               _loc2_ = "[";
               break;
            case 220:
               _loc2_ = "\\";
               break;
            case 221:
               _loc2_ = "]";
               break;
            case 222:
               _loc2_ = "\'";
               break;
            case 188:
               _loc2_ = ",";
               break;
            case 190:
               _loc2_ = ".";
               break;
            case 96:
               _loc2_ = "NUMPAD 0";
               break;
            case 97:
               _loc2_ = "NUMPAD 1";
               break;
            case 98:
               _loc2_ = "NUMPAD 2";
               break;
            case 99:
               _loc2_ = "NUMPAD 3";
               break;
            case 100:
               _loc2_ = "NUMPAD 4";
               break;
            case 101:
               _loc2_ = "NUMPAD 5";
               break;
            case 102:
               _loc2_ = "NUMPAD 6";
               break;
            case 103:
               _loc2_ = "NUMPAD 7";
               break;
            case 104:
               _loc2_ = "NUMPAD 8";
               break;
            case 105:
               _loc2_ = "NUMPAD 9";
               break;
            case 106:
               _loc2_ = "MULTIPLY";
               break;
            case 107:
               _loc2_ = "ADD";
               break;
            case 109:
               _loc2_ = "SUBTRACT";
               break;
            case 110:
               _loc2_ = "DECIMAL";
               break;
            case 111:
               _loc2_ = "DIVIDE";
               break;
            default:
               _loc2_ = String.fromCharCode(param1);
               _loc2_.toUpperCase();
         }
         return _loc2_;
      }
      
      public function method_65(param1:String) : Number
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_100.length)
         {
            if(param1 == this.var_100[_loc2_].strKeyName)
            {
               return this.var_100[_loc2_].intCurrentKeycode;
            }
            _loc2_++;
         }
         return 0;
      }
      
      public function KeyboardDown(param1:KeyboardEvent) : void
      {
         if(this.var_272 == -1)
         {
            return;
         }
         this.var_100[this.var_272].txtTextbox.text = this.method_396(param1.keyCode);
         this.var_100[this.var_272].intCurrentKeycode = param1.keyCode;
      }
      
      public function method_199(param1:MouseEvent) : void
      {
         this.method_205();
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_100.length)
         {
            if(param1.target.name == this.var_100[_loc2_].movBackgroundField.name || param1.target.name == this.var_100[_loc2_].txtTextbox.name)
            {
               this.var_100[_loc2_].movBackgroundField.gotoAndStop(2);
               this.var_272 = _loc2_;
               break;
            }
            _loc2_++;
         }
      }
      
      public function method_369(param1:Stage) : void
      {
         this.var_325 = param1;
         this.var_325.addEventListener(KeyboardEvent.KEY_DOWN,this.KeyboardDown);
      }
      
      public function method_483(param1:MouseEvent) : void
      {
         this.method_205();
      }
      
      public function method_205() : void
      {
         this.var_272 = -1;
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_100.length)
         {
            this.var_100[_loc1_].movBackgroundField.gotoAndStop(1);
            _loc1_++;
         }
      }
      
      public function method_72(param1:String, param2:MovieClip, param3:TextField, param4:int) : void
      {
         this.method_205();
         param3.text = this.method_396(param4);
         param2.addEventListener(MouseEvent.CLICK,this.method_199);
         param3.addEventListener(MouseEvent.CLICK,this.method_199);
         this.var_100.push({
            "strKeyName":param1,
            "movBackgroundField":param2,
            "txtTextbox":param3,
            "intCurrentKeycode":param4
         });
      }
   }
}

