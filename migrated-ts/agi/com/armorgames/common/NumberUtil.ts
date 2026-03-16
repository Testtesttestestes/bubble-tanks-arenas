// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.common

export class NumberUtil{
      
      constructor(){
         super();
      }
      
      public static percent(param1: number, param2: number = 0, param3: boolean = true): string
      {
         return Number(100 * param1).toFixed(param2) + (param3 ? "%" : "");
      }
      
      public static scalar(param1: number, param2: number = 0, param3: number = 100): number
      {
         return (param1 - param2) / (param3 - param2);
      }
      
      public static pad(param1: number, param2: string = "0", param3: number = 5): string
      {
         let _loc4_: string = String(param1);
         while(_loc4_.length < param3)
         {
            _loc4_ = param2 + _loc4_;
         }
         return _loc4_;
      }
      
      public static areEqual(param1: number, param2: number, param3: number = 0): boolean
      {
         return Boolean(param1 <= param2 + param3 && param1 >= param2 - param3);
      }
      
      public static cash(param1: number, param2: boolean = false): string
      {
         return "$" + delimit(param1,",",3,param2 ? 2 : 0);
      }
      
      public static time(param1: number): string
      {
         let _loc2_: number = 0;
         let _loc3_: number = param1 / (60 * 60);
         _loc2_ = _loc3_ - Math.floor(_loc3_);
         _loc3_ = Math.floor(_loc3_);
         let _loc4_: number = _loc2_ * 60;
         _loc2_ = _loc4_ - Math.floor(_loc4_);
         _loc4_ = Math.floor(_loc4_);
         param1 = _loc2_ * 60;
         _loc2_ = param1 - Math.floor(param1);
         param1 = Math.floor(param1);
         let _loc5_: string = _loc3_ < 10 ? "0" + _loc3_ : "" + _loc3_;
         let _loc6_: string = _loc4_ < 10 ? "0" + _loc4_ : "" + _loc4_;
         let _loc7_: string = param1 < 10 ? "0" + param1 : "" + param1;
         if(param1 < 0 || isNaN(param1))
         {
            return "00:00";
         }
         if(_loc3_ > 0)
         {
            return _loc5_ + ":" + _loc6_ + ":" + _loc7_;
         }
         return _loc6_ + ":" + _loc7_;
      }
      
      public static comma(param1: number, param2: number = 0): string
      {
         return delimit(param1,",",3,param2);
      }
      
      public static delimit(param1: number, param2: string = ", ", param3: number = 3, param4: number = 0): string
      {
         let _loc13_: string = null;
         let _loc5_: string = param1.toFixed(param4);
         if(_loc5_ == "0." && param4 == 0)
         {
            _loc5_ = "0";
         }
         let _loc6_: number = param4 > 0 ? 1 : 0;
         if(_loc5_.length <= param3 + (param4 + _loc6_))
         {
            return _loc5_;
         }
         let _loc7_: string = _loc5_.substring(_loc5_.length - (param4 + _loc6_),_loc5_.length);
         let _loc8_: string = _loc5_.substring(0,_loc5_.length - (param4 + _loc6_));
         let _loc9_: any[] = new Array();
         let _loc10_: number = _loc8_.length;
         while(_loc10_ >= 0)
         {
            _loc13_ = _loc8_.substring(_loc10_ - param3,_loc10_);
            if(_loc13_ != "")
            {
               _loc9_.unshift(_loc13_);
            }
            _loc10_ -= param3;
         }
         let _loc11_: string = "";
         let _loc12_: number = 0;
         while(_loc12_ < _loc9_.length)
         {
            _loc11_ += _loc9_[_loc12_] + (_loc12_ != _loc9_.length - 1 ? param2 : "");
            _loc12_++;
         }
         return _loc11_ + _loc7_;
      }
      
      public static toHex(param1: number): string
      {
         let _loc2_: string = "";
         let _loc3_: number = 0;
         let _loc4_: number = param1;
         while(_loc4_ > 0)
         {
            _loc3_ = _loc4_ % 16;
            _loc4_ /= 16;
            switch(_loc3_)
            {
               case 10:
                  _loc2_ = "A" + _loc2_;
                  break;
               case 11:
                  _loc2_ = "B" + _loc2_;
                  break;
               case 12:
                  _loc2_ = "C" + _loc2_;
                  break;
               case 13:
                  _loc2_ = "D" + _loc2_;
                  break;
               case 14:
                  _loc2_ = "E" + _loc2_;
                  break;
               case 15:
                  _loc2_ = "F" + _loc2_;
                  break;
               this.default:
                  _loc2_ = _loc3_ + _loc2_;
            }
         }
         return _loc2_;
      }
      
      public static suffix(param1: number): string
      {
         let _loc2_: string = String(param1);
         let _loc3_: string = "th";
         if(_loc2_.length >= 2 && _loc2_.charAt(_loc2_.length - 2) == "1")
         {
            return param1.toString() + _loc3_;
         }
         switch(_loc2_.charAt(_loc2_.length - 1))
         {
            case "1":
               _loc3_ = "st";
               break;
            case "2":
               _loc3_ = "nd";
               break;
            case "3":
               _loc3_ = "rd";
         }
         return param1.toString() + _loc3_;
      }
      
      public static unitAbbreviation(param1: number, param2: string = "K", param3: string = "M", param4: string = "B"): string
      {
         let _loc6_: string = null;
         let _loc5_: string = String(param1);
         if(_loc5_.length > 3 && _loc5_.length <= 6)
         {
            if(_loc5_.length == 4)
            {
               return _loc5_.charAt(0) + "." + _loc5_.charAt(1) + param2;
            }
            if(_loc5_.length == 5)
            {
               return _loc5_.charAt(0) + _loc5_.charAt(1) + param2;
            }
            if(_loc5_.length == 6)
            {
               return _loc5_.charAt(0) + _loc5_.charAt(1) + _loc5_.charAt(2) + param2;
            }
         }
         else if(_loc5_.length > 6 && _loc5_.length <= 9)
         {
            if(_loc5_.length == 7)
            {
               return _loc5_.charAt(0) + "." + _loc5_.charAt(1) + param3;
            }
            if(_loc5_.length == 8)
            {
               return _loc5_.charAt(0) + _loc5_.charAt(1) + param3;
            }
            if(_loc5_.length == 9)
            {
               return _loc5_.charAt(0) + _loc5_.charAt(1) + _loc5_.charAt(2) + param3;
            }
         }
         else if(_loc5_.length > 9)
         {
            if(_loc5_.length == 10)
            {
               return _loc5_.charAt(0) + "." + _loc5_.charAt(1) + param4;
            }
            if(_loc5_.length == 11)
            {
               return _loc5_.charAt(0) + _loc5_.charAt(1) + param4;
            }
            if(_loc5_.length == 12)
            {
               return _loc5_.charAt(0) + _loc5_.charAt(1) + _loc5_.charAt(2) + param4;
            }
            _loc6_ = _loc5_.substring(0,_loc5_.length - 10);
            return comma(Number(_loc6_));
         }
         return _loc5_;
      }
      
      public static byteAbbreviation(param1: number): string
      {
         return unitAbbreviation(param1,"KB","MB","GB");
      }
      
      public static ease(param1: number, param2: number, param3: number = 0.2): number
      {
         return param1 - param3 * (param1 - param2) / 2;
      }
   }
