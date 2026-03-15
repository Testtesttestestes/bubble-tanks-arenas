package
{
   import flash.display.*;
   import flash.events.*;
   import flash.utils.ByteArray;
   import package_1.class_1;
   import package_2.PKCS5;
   import package_2.class_11;
   import package_2.class_12;
   import package_3.class_13;
   import package_4.*;
   
   public class ArenaData extends MovieClip
   {
      
      public var numRating:Number;
      
      public var var_416:Array;
      
      public var var_96:Array;
      
      public var strDescription:String;
      
      public var strID:String;
      
      private var strVar2:String;
      
      public var var_275:String;
      
      public var var_222:Number;
      
      public var strName:String;
      
      public var var_299:Number;
      
      public var var_6:Array;
      
      private var mRef:class_79;
      
      public var objGameObjectLibrary:class_2;
      
      public var var_431:int;
      
      public var arrAllEnemiesInArena:Array;
      
      public function ArenaData()
      {
         super();
         this.objGameObjectLibrary = class_2.getInstance();
         this.mRef = class_2.method_64();
         this.strName = "";
         this.var_275 = "";
         this.strDescription = "";
         this.strID = "H";
         this.numRating = 0;
         this.var_431 = -1;
         this.var_222 = 0;
         this.var_299 = 0;
         this.strVar2 = class_1.method_1(771,777);
         this.var_6 = new Array();
         this.arrAllEnemiesInArena = new Array();
         this.var_416 = new Array();
         this.var_96 = new Array();
         var _loc1_:Array = new Array();
         this.var_6.push({"arrEnemies":_loc1_});
         this.method_466();
      }
      
      private function method_660(param1:String) : String
      {
         var _loc2_:String = "";
         var _loc3_:RegExp = /-%-/g;
         _loc2_ = param1.slice();
         _loc2_ = _loc2_.replace(_loc3_,",");
         _loc3_ = /-#-/g;
         _loc2_ = _loc2_.replace(_loc3_,"\'");
         _loc3_ = /-$-/g;
         _loc2_ = _loc2_.replace(_loc3_,"\"");
         _loc3_ = /-\*-/g;
         return _loc2_.replace(_loc3_,":");
      }
      
      public function method_847(param1:Number = 1) : void
      {
         var _loc2_:* = undefined;
         if(param1 == this.var_6.length - 1)
         {
            _loc2_ = this.var_6.pop();
            _loc2_ = null;
            return;
         }
         this.var_6[param1] = this.var_6[this.var_6.length - 1];
         _loc2_ = this.var_6.pop();
         _loc2_ = null;
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
      
      public function method_781() : int
      {
         var _loc3_:uint = 0;
         var _loc4_:int = 0;
         var _loc1_:int = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_6.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.var_6[_loc2_].arrEnemies.length)
            {
               _loc4_ = int(this.var_6[_loc2_].arrEnemies[_loc3_].number);
               _loc1_ += _loc4_;
               _loc3_++;
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      public function method_66(param1:Number = 1, param2:String = "L1000001", param3:String = "guy") : Number
      {
         var _loc5_:Boolean = false;
         var _loc4_:uint = 0;
         if(this.var_6[param1].arrEnemies.length != 0)
         {
            _loc5_ = true;
            _loc4_ = 0;
            while(_loc4_ < this.var_6[param1].arrEnemies.length)
            {
               if(this.var_6[param1].arrEnemies[_loc4_].ID == param2)
               {
                  this.var_6[param1].arrEnemies[_loc4_].number += 1;
                  _loc5_ = false;
                  return this.var_6[param1].arrEnemies[_loc4_].number;
               }
               _loc4_++;
            }
            if(_loc5_ == true)
            {
               if(this.var_6[param1].arrEnemies.length < 4)
               {
                  this.var_6[param1].arrEnemies.push({
                     "ID":param2,
                     "number":1,
                     "name":param3
                  });
                  _loc5_ = true;
                  _loc4_ = 0;
                  while(_loc4_ < this.arrAllEnemiesInArena.length)
                  {
                     if(this.arrAllEnemiesInArena[_loc4_].ID == param2)
                     {
                        _loc5_ = false;
                     }
                     _loc4_++;
                  }
                  if(_loc5_)
                  {
                     this.arrAllEnemiesInArena.push({
                        "ID":param2,
                        "Name":param3
                     });
                  }
                  return 1;
               }
            }
         }
         else
         {
            this.var_6[param1].arrEnemies.push({
               "ID":param2,
               "number":1,
               "name":param3
            });
            _loc5_ = true;
            _loc4_ = 0;
            while(_loc4_ < this.arrAllEnemiesInArena.length)
            {
               if(this.arrAllEnemiesInArena[_loc4_].ID == param2)
               {
                  _loc5_ = false;
               }
               _loc4_++;
            }
            if(_loc5_ == true)
            {
               this.arrAllEnemiesInArena.push({
                  "ID":param2,
                  "Name":param3
               });
            }
         }
         return 1;
      }
      
      public function method_188(param1:Number = 1, param2:String = "L1000001") : Boolean
      {
         var _loc3_:uint = 0;
         while(_loc3_ < this.var_6[param1].arrEnemies.length)
         {
            if(this.var_6[param1].arrEnemies[_loc3_].ID == param2)
            {
               --this.var_6[param1].arrEnemies[_loc3_].number;
               if(this.var_6[param1].arrEnemies[_loc3_].number <= 0)
               {
                  return this.method_152(param1,param2);
               }
               break;
            }
            _loc3_++;
         }
         return false;
      }
      
      public function method_152(param1:Number = 1, param2:String = "L1000001") : Boolean
      {
         undefined;
         var _loc3_:uint = 0;
         while(_loc3_ < this.var_6[param1].arrEnemies.length)
         {
            if(this.var_6[param1].arrEnemies[_loc3_].ID == param2)
            {
               if(_loc3_ == this.var_6[param1].arrEnemies.length - 1)
               {
                  var _loc4_:* = this.var_6[param1].arrEnemies.pop();
                  _loc4_ = null;
                  break;
               }
               this.var_6[param1].arrEnemies[_loc3_] = this.var_6[param1].arrEnemies[this.var_6[param1].arrEnemies.length - 1];
               _loc4_ = this.var_6[param1].arrEnemies.pop();
               _loc4_ = null;
               break;
            }
            _loc3_++;
         }
         if(this.CheckToSeeIfEnemyExistsInArena(param2) == false)
         {
            this.method_590(param2);
            return true;
         }
         return false;
      }
      
      public function ImportArenaData(param1:String, param2:Boolean = true) : Boolean
      {
         var pad:class_11;
         var kdata:ByteArray;
         var part1:String;
         var part2:String;
         var strHeader:String;
         var arrData:Array;
         var data:ByteArray;
         var strRewards:String;
         var strVar3:*;
         var actualData:String;
         var a:uint;
         var strArenaCode:String;
         var myCypher:class_12;
         var arrBubbleFields:Array;
         var arrArenaInfo:Array;
         var numStringLength:Number;
         var arrTempRewards:Array = null;
         var t:uint = 0;
         var arrTempRewardParts:Array = null;
         var arrEnemies:Array = null;
         var arrTemp:Array = null;
         var b:uint = 0;
         var arrEnemy:Array = null;
         var numTemp:Number = NaN;
         var blnTemp:Boolean = false;
         var c:uint = 0;
         var argArenaString:String = param1;
         var argCalcDifficultyRating:Boolean = param2;
         this.var_6 = new Array();
         strArenaCode = argArenaString;
         numStringLength = argArenaString.length;
         part1 = argArenaString.substr(0,3);
         part2 = argArenaString.substr(numStringLength - 3,3);
         actualData = argArenaString.substr(3,numStringLength - 6);
         strVar3 = part1 + part2 + this.strVar2;
         pad = new PKCS5();
         data = class_13.toArray(actualData);
         kdata = class_13.toArray(class_13.method_22(strVar3));
         myCypher = class_14.method_46("aes128-ecb",kdata,pad);
         try
         {
            myCypher.decrypt(data);
         }
         catch(e:Error)
         {
            return true;
         }
         strHeader = class_13.toString(class_13.method_52(data));
         arrArenaInfo = strHeader.split(":");
         arrData = arrArenaInfo[0].split(",");
         strRewards = arrArenaInfo[1];
         arrBubbleFields = arrArenaInfo[2].split("|");
         this.strName = arrData[0];
         this.var_275 = arrData[1];
         if(arrData[2] != null && arrData[2] != "")
         {
            this.strDescription = this.method_660(arrData[2]);
         }
         else
         {
            this.strDescription = "";
         }
         this.numRating = arrData[3];
         this.var_222 = arrData[4];
         this.var_431 = arrData[5];
         this.strID = arrData[6];
         if(strRewards != null && strRewards != "")
         {
            arrTempRewards = strRewards.split(";");
            t = 0;
            while(t < arrTempRewards.length)
            {
               arrTempRewardParts = arrTempRewards[t].split(",");
               this.var_96.push({
                  "Type":arrTempRewardParts[0],
                  "Data":Number(arrTempRewardParts[1])
               });
               t++;
            }
         }
         this.var_299 = 0;
         a = 0;
         while(a < arrBubbleFields.length)
         {
            arrEnemies = arrBubbleFields[a].split(";");
            arrTemp = new Array();
            this.var_6.push({"arrEnemies":arrTemp});
            b = 0;
            while(b < arrEnemies.length)
            {
               arrEnemy = arrEnemies[b].split(",");
               this.var_6[a].arrEnemies.push({
                  "ID":0,
                  "number":0
               });
               this.var_6[a].arrEnemies[b].ID = arrEnemy[0];
               this.var_6[a].arrEnemies[b].number = arrEnemy[1];
               numTemp = Number(arrEnemy[1]);
               this.var_299 += numTemp;
               blnTemp = true;
               c = 0;
               while(c < this.arrAllEnemiesInArena.length)
               {
                  if(arrEnemy[0] == this.arrAllEnemiesInArena[c])
                  {
                     blnTemp = false;
                  }
                  c++;
               }
               if(blnTemp == true)
               {
                  this.arrAllEnemiesInArena.push({"ID":arrEnemy[0]});
               }
               b++;
            }
            a++;
         }
         if(argCalcDifficultyRating)
         {
            this.method_466();
         }
         return false;
      }
      
      private function method_830(param1:String) : String
      {
         var _loc2_:String = "";
         var _loc3_:RegExp = /,/g;
         _loc2_ = param1.slice();
         _loc2_ = _loc2_.replace(_loc3_,"-%-");
         _loc3_ = /'/g;
         _loc2_ = _loc2_.replace(_loc3_,"-#-");
         _loc3_ = /"/g;
         _loc2_ = _loc2_.replace(_loc3_,"-$-");
         _loc3_ = /:/g;
         return _loc2_.replace(_loc3_,"-*-");
      }
      
      public function ExportArenaData() : String
      {
         var _loc1_:* = undefined;
         var _loc15_:String = null;
         var _loc16_:uint = 0;
         if(this.var_6[this.var_6.length - 1].arrEnemies.length == 0)
         {
            _loc1_ = this.var_6.pop();
         }
         _loc1_ = null;
         var _loc3_:String = this.strName + "," + this.var_275 + "," + "" + "," + this.numRating + "," + this.var_222 + "," + this.var_431 + "," + this.strID;
         var _loc4_:String = this.method_362();
         var _loc5_:String = this.method_362();
         var _loc6_:String = "" + _loc4_ + _loc5_ + this.strVar2;
         _loc3_ += ":";
         var _loc7_:String = "";
         var _loc8_:uint = 0;
         while(_loc8_ < this.var_96.length)
         {
            _loc7_ += this.var_96[_loc8_].Type + "," + this.var_96[_loc8_].Data + ";";
            _loc8_++;
         }
         if(_loc7_ != "")
         {
            _loc7_ = _loc7_.substr(0,-1);
         }
         _loc3_ += _loc7_;
         _loc3_ += ":";
         var _loc9_:String = "";
         0;
         while(0 < this.var_6.length)
         {
            _loc15_ = "";
            _loc16_ = 0;
            while(_loc16_ < this.var_6[0].arrEnemies.length)
            {
               _loc15_ += this.var_6[0].arrEnemies[_loc16_].ID + "," + this.var_6[0].arrEnemies[_loc16_].number + ";";
               _loc16_++;
            }
            if(_loc15_ != "")
            {
               _loc15_ = _loc15_.substr(0,-1);
            }
            _loc9_ += _loc15_ + "|";
            var _loc10_:uint = 0 + 1;
         }
         if(_loc9_ != "")
         {
            _loc9_ = _loc9_.substr(0,-1);
         }
         _loc3_ += _loc9_;
         var _loc11_:class_11 = new PKCS5();
         var _loc12_:ByteArray = class_13.toArray(class_13.method_22(_loc3_));
         var _loc13_:ByteArray = class_13.toArray(class_13.method_22(_loc6_));
         var _loc14_:class_12 = class_14.method_46("aes128-ecb",_loc13_,_loc11_);
         _loc14_.encrypt(_loc12_);
         return _loc4_ + String(class_13.method_52(_loc12_)) + _loc5_;
      }
      
      public function method_553() : Boolean
      {
         var _loc1_:Array = null;
         if(this.var_6.length < 10 && this.var_6[this.var_6.length - 1].arrEnemies.length != 0)
         {
            _loc1_ = new Array();
            this.var_6.push({"arrEnemies":_loc1_});
            return true;
         }
         return false;
      }
      
      public function CheckToSeeIfEnemyExistsInArena(param1:String = "L1000001") : Boolean
      {
         var _loc3_:uint = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_6.length)
         {
            _loc3_ = 0;
            while(_loc3_ < this.var_6[_loc2_].arrEnemies.length)
            {
               if(this.var_6[_loc2_].arrEnemies[_loc3_].ID == param1)
               {
                  return true;
               }
               _loc3_++;
            }
            _loc2_++;
         }
         return false;
      }
      
      public function method_590(param1:String = "L1000001") : void
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this.arrAllEnemiesInArena.length)
         {
            if(param1 == this.arrAllEnemiesInArena[_loc2_].ID)
            {
               this.arrAllEnemiesInArena.splice(_loc2_,1);
               return;
            }
            _loc2_++;
         }
      }
      
      public function method_351(param1:Number = 0) : Array
      {
         var _loc3_:uint = 0;
         var _loc2_:Array = new Array();
         if(this.var_6[param1].arrEnemies.length != 0)
         {
            _loc3_ = 0;
            while(_loc3_ < this.var_6[param1].arrEnemies.length)
            {
               _loc2_.push({
                  "IDs":this.var_6[param1].arrEnemies[_loc3_].ID,
                  "Num":this.var_6[param1].arrEnemies[_loc3_].number,
                  "Name":this.var_6[param1].arrEnemies[_loc3_].name
               });
               _loc3_++;
            }
         }
         return _loc2_;
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
      
      private function method_466() : int
      {
         var _loc9_:uint = 0;
         var _loc10_:TankData = null;
         var _loc11_:Number = NaN;
         var _loc12_:Number = NaN;
         var _loc1_:Array = new Array();
         var _loc2_:Number = 0;
         var _loc3_:Number = 0;
         var _loc4_:Number = 0;
         var _loc5_:uint = 0;
         while(_loc5_ < this.var_6.length)
         {
            _loc4_ = 0;
            _loc9_ = 0;
            while(_loc9_ < this.var_6[_loc5_].arrEnemies.length)
            {
               _loc10_ = this.mRef.RetrieveTankDataFromID(this.var_6[_loc5_].arrEnemies[_loc9_].ID);
               if(_loc10_ == null)
               {
                  this.var_222 = 0;
                  return this.var_222;
               }
               _loc11_ = (_loc10_.numDifficultyRating + 4) * this.var_6[_loc5_].arrEnemies[_loc9_].number;
               if(_loc11_ < 0)
               {
                  _loc11_ = 0;
               }
               _loc2_ += _loc11_;
               _loc3_ += _loc10_.numBubblesReturned * this.var_6[_loc5_].arrEnemies[_loc9_].number;
               _loc4_ += this.var_6[_loc5_].arrEnemies[_loc9_].number;
               _loc9_++;
            }
            _loc1_.push({
               "enNum":_loc4_,
               "enDiff":_loc2_,
               "enBReturn":_loc3_
            });
            _loc2_ = 0;
            _loc3_ = 0;
            _loc5_++;
         }
         var _loc6_:Array = new Array();
         var _loc7_:Number = 0;
         var _loc8_:uint = 0;
         while(_loc8_ < _loc1_.length)
         {
            _loc12_ = Math.floor(_loc1_[_loc8_].enDiff / 5);
            this.var_416.push(_loc12_);
            _loc7_ += _loc12_;
            _loc8_++;
         }
         this.var_222 = Math.floor(1 + _loc7_ / _loc1_.length);
         return this.var_222;
      }
   }
}

