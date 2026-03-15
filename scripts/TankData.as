package
{
   import flash.display.*;
   import flash.events.*;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import package_1.class_1;
   import package_2.PKCS5;
   import package_2.class_11;
   import package_2.class_12;
   import package_3.class_13;
   import package_4.*;
   
   public class TankData extends Sprite
   {
      
      public var numBubbles:Number = 0;
      
      public var strID:String;
      
      public var numClass:Number = 0;
      
      public var movTank:MovieClip;
      
      public var numLife:Number;
      
      public var numRating:Number;
      
      public var strAuthorName:String;
      
      public var var_558:String = "";
      
      public var intType:int;
      
      public var tankType:Number = 4;
      
      private var strVar2:String;
      
      public var arrTankDetails:Array;
      
      public var objWorld:BTAGameWorld;
      
      public var numGunPoints:Number = 0;
      
      public var numDifficultyRating:Number;
      
      public var numSpeed:Number;
      
      public var var_455:Number;
      
      public var strTankName:String;
      
      public var blnAvatarTank:Boolean;
      
      public var numBubblesReturned:Number;
      
      public var objGameObjectLibrary:class_2;
      
      public function TankData()
      {
         super();
         this.strAuthorName = "";
         this.strTankName = "";
         this.strID = "";
         this.numRating = 0;
         this.var_455 = 1;
         this.blnAvatarTank = false;
         this.numLife = 1;
         this.numBubblesReturned = 0;
         this.numSpeed = 0;
         this.numDifficultyRating = 0;
         this.arrTankDetails = new Array();
         this.objGameObjectLibrary = class_2.getInstance();
         this.strVar2 = class_1.method_1(761,771);
      }
      
      public function method_799() : void
      {
         this.arrTankDetails = null;
         this.objWorld = null;
         this.objGameObjectLibrary = null;
         if(this.movTank != null)
         {
            this.movTank = null;
         }
      }
      
      public function GetLargestXDistanceFromRegistration() : Number
      {
         var _loc1_:Number = 0;
         var _loc2_:* = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc1_ = Math.max(_loc1_,Math.abs(this.arrTankDetails[_loc2_].x));
            _loc2_ += 1;
         }
         return _loc1_;
      }
      
      public function GetLargestYDistanceFromRegistration() : Number
      {
         var _loc1_:Number = 0;
         var _loc2_:* = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc1_ = Math.max(_loc1_,Math.abs(this.arrTankDetails[_loc2_].y));
            _loc2_ += 1;
         }
         return _loc1_;
      }
      
      private function method_362() : String
      {
         var _loc1_:String = "";
         var _loc2_:uint = 0;
         while(_loc2_ < 3)
         {
            _loc1_ += this.method_656();
            _loc2_++;
         }
         return _loc1_;
      }
      
      public function Deactivate() : void
      {
         this.arrTankDetails = null;
         this.objWorld = null;
         this.objGameObjectLibrary = null;
         this.WipeTank();
      }
      
      public function GetLargestRadiusFromRegistration() : Number
      {
         var _loc4_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc1_:Number = 0;
         var _loc2_:Number = 0;
         var _loc3_:Number = 0;
         var _loc5_:* = 0;
         while(_loc5_ < this.movTank.numChildren)
         {
            _loc6_ = 0;
            _loc1_ = Math.max(_loc1_,Math.abs(this.movTank.getChildAt(_loc5_).x));
            _loc2_ = Math.max(_loc2_,Math.abs(this.movTank.getChildAt(_loc5_).y));
            _loc6_ = Math.max(_loc1_,_loc2_);
            if(_loc6_ > _loc3_)
            {
               _loc3_ = _loc6_;
               _loc4_ = Math.sqrt(this.movTank.getChildAt(_loc5_).width / 1.25 * (this.movTank.getChildAt(_loc5_).width / 1.25) + this.movTank.getChildAt(_loc5_).height / 1.25 * (this.movTank.getChildAt(_loc5_).height / 1.25));
            }
            _loc5_ += 1;
         }
         return _loc3_ + _loc4_;
      }
      
      public function ImportTankData(param1:String) : Boolean
      {
         var numStringLength:Number = NaN;
         var part1:String = null;
         var part2:String = null;
         var actualData:String = null;
         var strVar3:* = undefined;
         var pad:class_11 = null;
         var data:ByteArray = null;
         var kdata:ByteArray = null;
         var myCypher:class_12 = null;
         var strHeader:String = null;
         var arrTankInfo:Array = null;
         var basicData:Array = null;
         var intAvatarTank:int = 0;
         var arrRow:Array = null;
         var a:* = undefined;
         var strTank:String = param1;
         try
         {
            this.var_558 = strTank;
            numStringLength = strTank.length;
            part1 = strTank.substr(0,3);
            part2 = strTank.substr(numStringLength - 3,3);
            actualData = strTank.substr(3,numStringLength - 6);
            strVar3 = part1 + part2 + this.strVar2;
            pad = new PKCS5();
            data = class_13.toArray(actualData);
            kdata = class_13.toArray(class_13.method_22(strVar3));
            myCypher = class_14.method_46("aes128-ecb",kdata,pad);
            myCypher.decrypt(data);
            strHeader = class_13.toString(class_13.method_52(data));
            arrTankInfo = strHeader.split(";");
            basicData = arrTankInfo[0].split(",");
            this.strAuthorName = basicData[0];
            this.strTankName = basicData[1];
            this.var_455 = int(basicData[2]);
            intAvatarTank = int(basicData[3]);
            this.blnAvatarTank = false;
            if(intAvatarTank == 1)
            {
               this.blnAvatarTank = true;
            }
            this.numLife = Number(basicData[4]);
            this.numBubblesReturned = Number(basicData[5]);
            this.numSpeed = Number(basicData[6]);
            this.numDifficultyRating = Number(basicData[7]);
            this.strID = String(basicData[8]);
            this.numRating = Number(basicData[9]);
            arrRow = new Array();
            a = 1;
            while(a < arrTankInfo.length)
            {
               arrRow = arrTankInfo[a].split(",");
               this.method_467(arrRow[0],arrRow[1],arrRow[2],arrRow[3],arrRow[4],arrRow[5],arrRow[6],arrRow[7]);
               a += 1;
            }
            this.numBubbles = this.method_636();
            this.numGunPoints = this.method_510();
            this.numClass = this.method_640();
            this.numDifficultyRating = this.method_549();
            if(this.blnAvatarTank == true)
            {
               this.numSpeed = this.objGameObjectLibrary.arrClassData[this.numClass - 1].intSpeed;
            }
         }
         catch(e:*)
         {
            return false;
         }
         return true;
      }
      
      private function method_656() : String
      {
         var _loc1_:int = Math.round(Math.random() * 15);
         var _loc2_:String = "";
         switch(_loc1_)
         {
            case 10:
               _loc2_ = "a";
               break;
            case 11:
               _loc2_ = "b";
               break;
            case 12:
               _loc2_ = "c";
               break;
            case 13:
               _loc2_ = "d";
               break;
            case 14:
               _loc2_ = "e";
               break;
            case 15:
               _loc2_ = "f";
               break;
            default:
               _loc2_ += _loc1_;
         }
         return _loc2_;
      }
      
      private function method_640() : Number
      {
         var var_40:Array = null;
         var var_56:uint = 0;
         var var_106:int = 0;
         var var_194:Number = NaN;
         var var_126:Number = NaN;
         var var_157:Number = NaN;
         var var_150:int = 0;
         try
         {
            var_40 = new Array();
            var_40.push({
               "min":-1,
               "max":70 / 2
            });
            var_40.push({
               "min":70 / 2,
               "max":110 / 2
            });
            var_40.push({
               "min":110 / 2,
               "max":150 / 2
            });
            var_40.push({
               "min":150 / 2,
               "max":200 / 2
            });
            var_40.push({
               "min":200 / 2,
               "max":275 / 2
            });
         }
         catch(e:*)
         {
         }
         try
         {
            var_56 = 1;
            var_106 = this.arrTankDetails.length - 1;
            while(var_106 >= 0)
            {
               if(var_56 == 6)
               {
                  break;
               }
               var_194 = this.arrTankDetails[var_106].x * this.arrTankDetails[var_106].x;
               var_126 = this.arrTankDetails[var_106].y * this.arrTankDetails[var_106].y;
               var_157 = Math.sqrt(var_194 + var_126);
               if(this.objGameObjectLibrary.IsObjectAWeapon(this.arrTankDetails[var_106].type) == false)
               {
                  var_157 += this.arrTankDetails[var_106].radius * this.arrTankDetails[var_106].scale;
               }
               if(var_157 > var_40[var_40.length - 1].max)
               {
                  var_56 = 6;
                  break;
               }
               var_150 = var_40.length - 1;
               while(var_150 >= 0)
               {
                  if(var_150 + 1 <= var_56)
                  {
                     break;
                  }
                  if(var_157 > var_40[var_150].min && var_157 <= var_40[var_150].max)
                  {
                     if(var_150 + 1 > var_56)
                     {
                        var_56 = var_150 + 1;
                     }
                     break;
                  }
                  var_150--;
               }
               var_106--;
            }
         }
         catch(e:*)
         {
         }
         return var_56;
      }
      
      public function ExportTankData() : String
      {
         var _loc1_:uint = 0;
         if(this.blnAvatarTank == true)
         {
            _loc1_ = 1;
         }
         var _loc2_:String = this.strAuthorName + "," + this.strTankName + "," + this.var_455 + "," + _loc1_ + "," + this.numLife + "," + this.numBubblesReturned + "," + this.numSpeed + "," + this.numDifficultyRating + "," + this.strID + "," + this.numRating;
         var _loc3_:String = this.method_362();
         var _loc4_:String = this.method_362();
         var _loc5_:String = "" + _loc3_ + _loc4_ + this.strVar2;
         var _loc6_:uint = 0;
         while(_loc6_ < this.arrTankDetails.length)
         {
            _loc2_ += ";" + this.arrTankDetails[_loc6_].name + "," + this.arrTankDetails[_loc6_].type + "," + this.arrTankDetails[_loc6_].twin + "," + this.arrTankDetails[_loc6_].x + "," + this.arrTankDetails[_loc6_].y + "," + this.arrTankDetails[_loc6_].rotation + "," + this.arrTankDetails[_loc6_].scale + "," + this.arrTankDetails[_loc6_].radius;
            _loc6_++;
         }
         var _loc7_:class_11 = new PKCS5();
         var _loc8_:ByteArray = class_13.toArray(class_13.method_22(_loc2_));
         var _loc9_:ByteArray = class_13.toArray(class_13.method_22(_loc5_));
         var _loc10_:class_12 = class_14.method_46("aes128-ecb",_loc9_,_loc7_);
         _loc10_.encrypt(_loc8_);
         return _loc3_ + String(class_13.method_52(_loc8_)) + _loc4_;
      }
      
      private function method_636() : Number
      {
         var _loc1_:Number = 0;
         var _loc2_:* = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc1_ += this.objGameObjectLibrary.method_166(this.arrTankDetails[_loc2_].type);
            _loc2_ += 1;
         }
         return _loc1_;
      }
      
      public function method_467(param1:String, param2:int, param3:String, param4:Number, param5:Number, param6:Number, param7:Number, param8:Number) : void
      {
         this.arrTankDetails.push({
            "name":param1,
            "type":param2,
            "twin":param3,
            "x":param4,
            "y":param5,
            "rotation":param6,
            "scale":param7,
            "radius":param8
         });
      }
      
      public function method_616() : Point
      {
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc1_:Number = 1000;
         var _loc2_:Point = new Point();
         var _loc3_:uint = 0;
         while(_loc3_ < this.arrTankDetails.length)
         {
            _loc4_ = 0 - this.arrTankDetails[_loc3_].x;
            _loc5_ = 0 - this.arrTankDetails[_loc3_].y;
            _loc6_ = Math.sqrt(_loc4_ * _loc4_ + _loc5_ * _loc5_);
            if(_loc6_ < _loc1_)
            {
               _loc1_ = _loc6_;
               _loc2_.x = this.arrTankDetails[_loc3_].x;
               _loc2_.y = this.arrTankDetails[_loc3_].y;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public function method_61(param1:int = 0, param2:BTAGameWorld = null) : MovieClip
      {
         this.WipeTank();
         switch(param1)
         {
            case 0:
               this.movTank = new MovieClip();
               break;
            case 1:
               this.movTank = new class_113(this);
               break;
            case 2:
               this.movTank = new class_113(this);
               break;
            case 3:
               this.movTank = new EnemyAI(this);
         }
         this.intType = param1;
         this.objWorld = param2;
         var _loc3_:MovieClip = new MovieClip();
         0;
         while(0 < this.arrTankDetails.length)
         {
            _loc3_ = this.objGameObjectLibrary.method_123(this.arrTankDetails[0].type);
            _loc3_.x = this.arrTankDetails[0].x;
            _loc3_.y = this.arrTankDetails[0].y;
            _loc3_.scaleX = _loc3_.scaleY = this.arrTankDetails[0].scale;
            _loc3_.rotation = this.arrTankDetails[0].rotation;
            _loc3_.name = this.arrTankDetails[0].name;
            this.movTank.addChild(_loc3_);
            var _loc5_:int = this.objGameObjectLibrary.GetObjectType(this.arrTankDetails[0].type);
            switch(this.intType)
            {
            }
            var _loc4_:uint = 0 + 1;
         }
         if(param1 == 1)
         {
            this.movTank.CheckForTeleports();
         }
         if(param1 > 0)
         {
            if(this.movTank.SetupClosestBubbleToCenterPoint != null)
            {
               this.movTank.SetupClosestBubbleToCenterPoint();
            }
         }
         return this.movTank;
      }
      
      public function method_383() : Number
      {
         var _loc3_:Number = NaN;
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc1_:Number = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc3_ = 0 - this.arrTankDetails[_loc2_].x;
            _loc4_ = 0 - this.arrTankDetails[_loc2_].y;
            _loc5_ = Math.sqrt(_loc3_ * _loc3_ + _loc4_ * _loc4_);
            _loc5_ = _loc5_ + this.arrTankDetails[_loc2_].radius;
            if(_loc5_ > _loc1_)
            {
               _loc1_ = _loc5_;
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      private function method_510() : Number
      {
         0;
         var _loc2_:* = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            if(this.objGameObjectLibrary.IsObjectAWeapon(this.arrTankDetails[_loc2_].type))
            {
               var _loc1_:Number = 0 + this.objGameObjectLibrary.method_207(this.arrTankDetails[_loc2_].type);
            }
            _loc2_ += 1;
         }
         return 0;
      }
      
      public function method_549() : Number
      {
         var _loc1_:Number = 1 / (5 - this.numSpeed) + 1;
         var _loc2_:Number = this.numGunPoints / 2 - 0.2;
         return Math.round(_loc1_ * _loc2_ + Math.sqrt(this.numLife) / 10 - this.numBubblesReturned / this.numLife + 0.4);
      }
      
      public function WipeTank() : void
      {
         var _loc1_:* = undefined;
         if(this.movTank == null)
         {
            return;
         }
         while(this.movTank.numChildren > 0)
         {
            _loc1_ = this.movTank.getChildAt(0);
            if(_loc1_.intObjID != null)
            {
               if(_loc1_.intObjID > 1999)
               {
                  _loc1_.Deactivate();
               }
            }
            this.movTank.removeChildAt(0);
         }
         this.movTank = null;
      }
   }
}

