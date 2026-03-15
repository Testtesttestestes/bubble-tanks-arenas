package com.armorgames.common
{
   public class NumberUtil
   {
      
      public function NumberUtil()
      {
         super();
      }
      
      public static function percent(param1:Number, param2:uint = 0, param3:Boolean = true) : String
      {
         return Number(100 * param1).toFixed(param2) + (param3 ? "%" : "");
      }
      
      public static function scalar(param1:Number, param2:Number = 0, param3:Number = 100) : Number
      {
         return (param1 - param2) / (param3 - param2);
      }
      
      public static function pad(param1:Number, param2:String = "0", param3:int = 5) : String
      {
         var _loc4_:String = String(param1);
         while(_loc4_.length < param3)
         {
            _loc4_ = param2 + _loc4_;
         }
         return _loc4_;
      }
      
      public static function areEqual(param1:Number, param2:Number, param3:Number = 0) : Boolean
      {
         return Boolean(param1 <= param2 + param3 && param1 >= param2 - param3);
      }
      
      public static function cash(param1:Number, param2:Boolean = false) : String
      {
         return "$" + delimit(param1,",",3,param2 ? 2 : 0);
      }
      
      public static function time(param1:Number) : String
      {
         var _loc2_:Number = 0;
         var _loc3_:Number = param1 / (60 * 60);
         _loc2_ = _loc3_ - Math.floor(_loc3_);
         _loc3_ = Math.floor(_loc3_);
         var _loc4_:Number = _loc2_ * 60;
         _loc2_ = _loc4_ - Math.floor(_loc4_);
         _loc4_ = Math.floor(_loc4_);
         param1 = _loc2_ * 60;
         _loc2_ = param1 - Math.floor(param1);
         param1 = Math.floor(param1);
         var _loc5_:String = _loc3_ < 10 ? "0" + _loc3_ : "" + _loc3_;
         var _loc6_:String = _loc4_ < 10 ? "0" + _loc4_ : "" + _loc4_;
         var _loc7_:String = param1 < 10 ? "0" + param1 : "" + param1;
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
      
      public static function comma(param1:Number, param2:int = 0) : String
      {
         return delimit(param1,",",3,param2);
      }
      
      public static function delimit(param1:Number, param2:String = ",", param3:int = 3, param4:uint = 0) : String
      {
         var _loc13_:String = null;
         var _loc5_:String = param1.toFixed(param4);
         if(_loc5_ == "0." && param4 == 0)
         {
            _loc5_ = "0";
         }
         var _loc6_:int = param4 > 0 ? 1 : 0;
         if(_loc5_.length <= param3 + (param4 + _loc6_))
         {
            return _loc5_;
         }
         var _loc7_:String = _loc5_.substring(_loc5_.length - (param4 + _loc6_),_loc5_.length);
         var _loc8_:String = _loc5_.substring(0,_loc5_.length - (param4 + _loc6_));
         var _loc9_:Array = new Array();
         var _loc10_:int = _loc8_.length;
         while(_loc10_ >= 0)
         {
            _loc13_ = _loc8_.substring(_loc10_ - param3,_loc10_);
            if(_loc13_ != "")
            {
               _loc9_.unshift(_loc13_);
            }
            _loc10_ -= param3;
         }
         var _loc11_:String = "";
         var _loc12_:int = 0;
         while(_loc12_ < _loc9_.length)
         {
            _loc11_ += _loc9_[_loc12_] + (_loc12_ != _loc9_.length - 1 ? param2 : "");
            _loc12_++;
         }
         return _loc11_ + _loc7_;
      }
      
      public static function toHex(param1:int) : String
      {
         var _loc2_:String = "";
         var _loc3_:int = 0;
         var _loc4_:int = param1;
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
               default:
                  _loc2_ = _loc3_ + _loc2_;
            }
         }
         return _loc2_;
      }
      
      public static function suffix(param1:uint) : String
      {
         var _loc2_:String = String(param1);
         var _loc3_:String = "th";
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
      
      public static function unitAbbreviation(param1:uint, param2:String = "K", param3:String = "M", param4:String = "B") : String
      {
         var _loc6_:String = null;
         var _loc5_:String = String(param1);
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
      
      public static function byteAbbreviation(param1:uint) : String
      {
         return unitAbbreviation(param1,"KB","MB","GB");
      }
      
      public static function ease(param1:Number, param2:Number, param3:Number = 0.2) : Number
      {
         return param1 - param3 * (param1 - param2) / 2;
      }
   }
}

