package
{
   import flash.events.NetStatusEvent;
   import flash.net.SharedObject;
   import flash.net.SharedObjectFlushStatus;
   import flash.utils.ByteArray;
   import package_1.class_1;
   import package_2.PKCS5;
   import package_2.class_11;
   import package_2.class_12;
   import package_3.class_13;
   import package_4.*;
   import package_8.class_22;
   
   public class PlayerProfile
   {
      
      public var var_269:Boolean;
      
      public var var_234:Boolean;
      
      public var arrUnlockedObjects:Array;
      
      private var strFirstPart:String;
      
      public var var_260:Boolean;
      
      public var var_38:Array;
      
      public var gunPointsMax:DataObject;
      
      public var var_82:Array;
      
      private var var_183:SharedObject;
      
      public var currentAvatar:String;
      
      public var var_185:int;
      
      public var arrBeatArenaIDs:Array;
      
      public var arrSavedTanks:Array;
      
      public var var_253:Boolean;
      
      public var var_579:String;
      
      public var profileName:String;
      
      public var bubblePointsMax:DataObject;
      
      public var arenasCompleted:DataObject;
      
      public var var_226:Boolean;
      
      public var objGameObjectLibrary:class_2;
      
      public var maxClass:DataObject;
      
      public var arrAllObjectIDs:Array;
      
      public var var_178:int;
      
      public function PlayerProfile(param1:SharedObject)
      {
         super();
         this.objGameObjectLibrary = class_2.getInstance();
         this.var_269 = false;
         this.var_253 = false;
         this.var_234 = false;
         this.var_178 = 0;
         this.var_185 = 0;
         this.var_260 = false;
         this.var_226 = true;
         this.var_183 = param1;
         this.strFirstPart = class_1.method_1(759,765);
         this.profileName = "";
         this.gunPointsMax = new DataObject(459812,false,false,459813);
         this.bubblePointsMax = new DataObject(9246,false,false,9249);
         this.maxClass = new DataObject(2113,false,false,2114);
         this.arenasCompleted = new DataObject(0);
         this.currentAvatar = "7d1adbbd72aaa3c8672736b9715f0c5519a5130a78032553eac3337e4074ba671f833edee1f5bb99e490de82d3d15107b465367e32c3ed3f6395d77f8afd6aa01bb70e7a2ea088f18ff25e4d150fba6abbcb73";
         this.arrSavedTanks = new Array();
         this.arrBeatArenaIDs = new Array();
         this.var_82 = new Array();
         this.arrSavedTanks.push({
            "Data":"empty",
            "ID":"none",
            "blnShowInSearch":"true"
         });
         this.arrAllObjectIDs = new Array();
         this.var_38 = new Array();
         var _loc2_:String = class_1.method_1(772,778);
         this.arrUnlockedObjects = _loc2_.split(",");
         this.arrAllObjectIDs = new Array();
         var _loc3_:uint = 0;
         while(_loc3_ < this.objGameObjectLibrary.var_83.length)
         {
            this.arrAllObjectIDs.push(this.objGameObjectLibrary.var_83[_loc3_].intObjID);
            _loc3_++;
         }
         _loc3_ = 0;
         while(_loc3_ < this.objGameObjectLibrary.var_50.length)
         {
            this.arrAllObjectIDs.push(this.objGameObjectLibrary.var_50[_loc3_].intObjID);
            _loc3_++;
         }
         _loc3_ = 0;
         while(_loc3_ < this.objGameObjectLibrary.var_62.length)
         {
            this.arrAllObjectIDs.push(this.objGameObjectLibrary.var_62[_loc3_].intObjID);
            _loc3_++;
         }
         _loc3_ = 0;
         while(_loc3_ < this.objGameObjectLibrary.var_48.length)
         {
            this.arrAllObjectIDs.push(this.objGameObjectLibrary.var_48[_loc3_].intObjID);
            _loc3_++;
         }
         this.method_609();
         this.method_302();
         this.method_471();
      }
      
      public static function onFlushStatus(param1:NetStatusEvent) : void
      {
         if(param1.info.code != "SharedObject.Flush.Success")
         {
            if(param1.info.code == "SharedObject.Flush.Failed")
            {
               class_2.getInstance().method_316();
            }
         }
      }
      
      public function EditTankIDFromID(param1:String, param2:String) : Boolean
      {
         var _loc4_:TankData = null;
         var _loc3_:uint = 0;
         while(_loc3_ < this.arrSavedTanks.length)
         {
            if(param1 == this.arrSavedTanks[_loc3_].ID)
            {
               _loc4_ = new TankData();
               _loc4_.ImportTankData(this.arrSavedTanks[_loc3_].Data);
               _loc4_.strID = param2;
               this.arrSavedTanks[_loc3_].Data = _loc4_.ExportTankData();
               this.arrSavedTanks[_loc3_].ID = param2;
               this.arrSavedTanks[_loc3_].blnShowInSearch = "true";
               return true;
            }
            _loc3_++;
         }
         return false;
      }
      
      public function DeletePrevArena() : void
      {
         this.var_38.splice(this.var_38.length - 1,1);
         this.method_19();
      }
      
      public function DoesProfileHaveAllThePartsForTank(param1:TankData = null) : Boolean
      {
         var _loc3_:Array = null;
         var _loc6_:Boolean = false;
         var _loc7_:uint = 0;
         var _loc2_:class_79 = class_2.method_64();
         if(_loc2_.var_224)
         {
            _loc3_ = this.arrAllObjectIDs;
         }
         else
         {
            _loc3_ = this.arrUnlockedObjects;
         }
         var _loc4_:Boolean = true;
         var _loc5_:uint = 0;
         while(_loc5_ < param1.arrTankDetails.length)
         {
            if(param1.objGameObjectLibrary.IsObjectAWeapon(param1.arrTankDetails[_loc5_].type))
            {
               _loc6_ = false;
               _loc7_ = 0;
               while(_loc7_ < _loc3_.length)
               {
                  if(param1.arrTankDetails[_loc5_].type == _loc3_[_loc7_])
                  {
                     _loc6_ = true;
                  }
                  _loc7_++;
               }
               if(_loc6_ == false)
               {
                  _loc4_ = false;
               }
            }
            _loc5_++;
         }
         return _loc4_;
      }
      
      public function method_176() : void
      {
         var var_56:String = null;
         var var_40:String = null;
         var var_150:String = null;
         var var_157:String = null;
         var var_307:String = null;
         var var_262:class_11 = null;
         var var_106:ByteArray = null;
         var var_257:ByteArray = null;
         var var_194:class_12 = null;
         var var_346:String = null;
         var var_243:Array = null;
         var var_126:String = "";
         if(this.var_183.size == 0)
         {
            return;
         }
         var_126 = this.method_559(this.method_706(this.var_183.data.strCompressed));
         try
         {
            var_56 = var_126;
            var_40 = this.strFirstPart;
            var_150 = var_56.substr(0,3);
            var_157 = var_56.substr(-3,3);
            var_56 = var_56.substr(3,var_56.length - 6);
            var_307 = "" + var_150 + var_157 + var_40;
            var_262 = new PKCS5();
            var_106 = class_13.toArray(var_56);
            var_257 = class_13.toArray(class_13.method_22(var_307));
            var_194 = class_14.method_46("aes128-ecb",var_257,var_262);
            var_194.decrypt(var_106);
            var_346 = class_13.toString(class_13.method_52(var_106));
            var_243 = var_346.split(",");
            this.profileName = var_243[0];
            this.gunPointsMax.value = Number(var_243[1]);
            this.bubblePointsMax.value = Number(var_243[2]);
            this.maxClass.value = Number(var_243[3]);
            this.CheckToHasPart();
         }
         catch(e:*)
         {
         }
      }
      
      public function method_471() : void
      {
         var _loc4_:ArenaData = null;
         var _loc6_:uint = 0;
         var _loc1_:class_79 = class_2.method_64();
         var _loc2_:Boolean = false;
         var _loc5_:uint = 0;
         while(_loc5_ < _loc1_.gData.var_14.length)
         {
            _loc6_ = 0;
            while(_loc6_ < this.var_38.length)
            {
               if(this.var_38[_loc6_].ID == _loc1_.gData.var_14[_loc5_].ID)
               {
                  _loc2_ = true;
                  break;
               }
               _loc6_++;
            }
            if(_loc2_ == false)
            {
               _loc4_ = new ArenaData();
               _loc4_.ImportArenaData(_loc1_.gData.var_14[_loc5_].arenaData,false);
               this.method_631(_loc4_);
            }
            _loc5_++;
         }
      }
      
      private function method_525(param1:String = "") : String
      {
         var _loc15_:uint = 0;
         var _loc2_:String = "";
         var _loc3_:String = "";
         var _loc4_:String = "";
         var _loc5_:String = "";
         var _loc6_:String = "";
         var _loc7_:String = "";
         var _loc8_:String = "";
         var _loc9_:String = "";
         var _loc10_:String = "";
         var _loc11_:String = "";
         var _loc12_:String = "";
         var _loc13_:uint = 0;
         while(_loc13_ < this.var_38.length)
         {
            _loc2_ += "" + this.var_38[_loc13_].Data + ";" + this.var_38[_loc13_].ID + ";";
            _loc12_ = "";
            _loc15_ = 0;
            while(_loc15_ < this.var_38[_loc13_].AllTanks.length)
            {
               _loc2_ += _loc12_ + this.var_38[_loc13_].AllTanks[_loc15_];
               _loc12_ = "|";
               _loc15_++;
            }
            _loc2_ += ",";
            _loc13_++;
         }
         _loc2_ = _loc2_.substr(0,-1);
         _loc13_ = 0;
         while(_loc13_ < this.arrBeatArenaIDs.length)
         {
            _loc3_ += "" + this.arrBeatArenaIDs[_loc13_] + ";";
            _loc13_++;
         }
         _loc3_ = _loc3_.substr(0,-1);
         _loc13_ = 0;
         while(_loc13_ < this.var_82.length)
         {
            _loc4_ += "" + this.var_82[_loc13_].id + ";" + this.var_82[_loc13_].score + "|";
            _loc13_++;
         }
         _loc4_ = _loc4_.substr(0,-1);
         _loc13_ = 0;
         while(_loc13_ < this.arrSavedTanks.length)
         {
            _loc5_ += this.arrSavedTanks[_loc13_].Data + ";" + this.arrSavedTanks[_loc13_].ID + ";" + this.arrSavedTanks[_loc13_].blnShowInSearch + "|";
            _loc13_++;
         }
         _loc5_ = _loc5_.substr(0,-1);
         _loc13_ = 0;
         while(_loc13_ < this.arrUnlockedObjects.length)
         {
            _loc6_ += "" + this.arrUnlockedObjects[_loc13_] + ";";
            _loc13_++;
         }
         _loc6_ = _loc6_.substr(0,-1);
         if(this.var_234)
         {
            _loc7_ = "true";
         }
         else
         {
            _loc7_ = "false";
         }
         _loc8_ = "" + this.var_178;
         _loc9_ = "" + this.var_185;
         if(this.var_260)
         {
            _loc10_ = "true";
         }
         else
         {
            _loc10_ = "false";
         }
         var _loc14_:String = "";
         if(this.var_253)
         {
            _loc14_ = "true";
         }
         else
         {
            _loc14_ = "false";
         }
         return _loc2_ + "~" + _loc3_ + "~" + _loc4_ + "~" + _loc5_ + "~" + param1 + "~" + this.currentAvatar + "~" + _loc6_ + "~" + this.var_269 + "~" + _loc7_ + "~" + _loc8_ + "~" + _loc9_ + "~" + _loc10_ + "~" + _loc14_;
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
      
      public function SetNewProfileData(param1:String) : void
      {
         if(param1 != "")
         {
            this.profileName = param1;
         }
      }
      
      public function method_302() : void
      {
         var _loc2_:Number = NaN;
         var _loc3_:TankData = null;
         var _loc4_:String = null;
         var _loc1_:uint = 0;
         while(_loc1_ < this.objGameObjectLibrary.var_12.length)
         {
            _loc2_ = 10000120 + _loc1_;
            _loc3_ = new TankData();
            _loc4_ = "";
            _loc3_.ImportTankData(this.objGameObjectLibrary.var_12[_loc1_]);
            if(_loc3_.blnAvatarTank)
            {
               _loc4_ = "A" + _loc2_;
            }
            else
            {
               _loc4_ = "E" + _loc2_;
            }
            _loc4_ = _loc3_.strID;
            this.arrSavedTanks.push({
               "Data":this.objGameObjectLibrary.var_12[_loc1_],
               "ID":_loc4_,
               "blnShowInSearch":"true"
            });
            _loc1_ += 1;
         }
      }
      
      public function method_283(param1:ArenaData) : void
      {
         var _loc2_:String = param1.ExportArenaData();
         var _loc3_:String = param1.strID;
         var _loc4_:Array = new Array();
         var _loc5_:uint = 0;
         while(_loc5_ < param1.arrAllEnemiesInArena.length)
         {
            _loc4_.push(param1.arrAllEnemiesInArena[_loc5_].ID);
            _loc5_++;
         }
         this.var_38.push({
            "Data":_loc2_,
            "ID":_loc3_,
            "AllTanks":_loc4_
         });
         this.method_19();
      }
      
      private function method_706(param1:String = "") : String
      {
         return class_22.uncompress(param1);
      }
      
      public function EditPreviousTankID(param1:TankData) : void
      {
         this.arrSavedTanks[this.arrSavedTanks.length - 1].Data = param1.ExportTankData();
         this.arrSavedTanks[this.arrSavedTanks.length - 1].ID = param1.strID;
         this.method_19();
      }
      
      private function CheckToHasPart() : void
      {
         var _loc4_:uint = 0;
         var _loc1_:Boolean = false;
         var _loc2_:Boolean = true;
         var _loc3_:uint = 0;
         while(_loc3_ < this.arrBeatArenaIDs.length)
         {
            if(this.arrBeatArenaIDs[_loc3_] == "G90000216")
            {
               _loc4_ = 0;
               while(_loc4_ < this.arrUnlockedObjects.length)
               {
                  if(this.arrUnlockedObjects[_loc4_] == 2014)
                  {
                     _loc2_ = false;
                     _loc1_ = true;
                     break;
                  }
                  _loc4_ += 1;
               }
               if(_loc2_)
               {
                  this.arrUnlockedObjects.push(2014);
                  _loc1_ = true;
               }
            }
            if(_loc1_)
            {
               break;
            }
            _loc3_ += 1;
         }
         if(_loc2_)
         {
            this.method_19();
         }
      }
      
      private function method_609() : void
      {
         this.strFirstPart += "4HPmN";
      }
      
      public function method_19() : void
      {
         var var_262:String = null;
         var var_40:String = null;
         var var_150:String = null;
         var var_157:String = null;
         var var_307:String = null;
         var var_194:class_11 = null;
         var var_126:ByteArray = null;
         var var_257:ByteArray = null;
         var var_106:class_12 = null;
         var var_243:String = null;
         var var_56:String = null;
         if(this.var_226 == false)
         {
            return;
         }
         this.var_183.clear();
         if(this.var_183.hasEventListener(NetStatusEvent.NET_STATUS) == false)
         {
            this.var_183.addEventListener(NetStatusEvent.NET_STATUS,onFlushStatus);
         }
         try
         {
            var_262 = this.profileName + "," + this.gunPointsMax.value + "," + this.bubblePointsMax.value + "," + this.maxClass.value;
            var_40 = this.strFirstPart;
            var_150 = this.method_362();
            var_157 = this.method_362();
            var_307 = "" + var_150 + var_157 + var_40;
            var_194 = new PKCS5();
            var_126 = class_13.toArray(class_13.method_22(var_262));
            var_257 = class_13.toArray(class_13.method_22(var_307));
            var_106 = class_14.method_46("aes128-ecb",var_257,var_194);
            var_106.encrypt(var_126);
            var_243 = var_150 + String(class_13.method_52(var_126)) + var_157;
            this.var_183.data.strCompressed = this.method_767(this.method_525(var_243));
            var_56 = null;
         }
         catch(e:Error)
         {
         }
         try
         {
            var_56 = this.var_183.flush();
         }
         catch(error:Error)
         {
            var_226 = false;
         }
         if(var_56 != null)
         {
            switch(var_56)
            {
            }
         }
         else
         {
            this.var_226 = false;
         }
      }
      
      public function method_27(param1:TankData = null) : String
      {
         var _loc2_:String = "";
         var _loc3_:class_79 = class_2.method_64();
         var _loc4_:Number = 0;
         var _loc5_:Number = 0;
         var _loc6_:Number = 0;
         if(_loc3_.var_139)
         {
            _loc4_ = 12;
         }
         else
         {
            _loc4_ = this.gunPointsMax.method_29();
         }
         if(_loc3_.blnCheatClass)
         {
            _loc5_ = 6;
         }
         else
         {
            _loc5_ = this.maxClass.method_29();
         }
         if(_loc3_.var_132)
         {
            _loc6_ = 100;
         }
         else
         {
            _loc6_ = this.bubblePointsMax.method_29();
         }
         if(param1.numGunPoints > _loc4_)
         {
            _loc2_ = "Gun Points";
         }
         if(param1.numClass > _loc5_)
         {
            if(_loc2_ == "")
            {
               _loc2_ = "Class";
            }
            else
            {
               _loc2_ += ", Class";
            }
         }
         if(param1.numBubbles > _loc6_)
         {
            if(_loc2_ == "")
            {
               _loc2_ = "Bubbles Points";
            }
            else
            {
               _loc2_ += ", and Bubbles Points";
            }
         }
         return _loc2_;
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
      
      public function RetrieveTankBasedOnID(param1:String) : TankData
      {
         var _loc3_:TankData = null;
         var _loc2_:uint = 0;
         while(_loc2_ < this.arrSavedTanks.length)
         {
            if(param1 == this.arrSavedTanks[_loc2_].ID)
            {
               _loc3_ = new TankData();
               _loc3_.ImportTankData(this.arrSavedTanks[_loc2_].Data);
               return _loc3_;
            }
            _loc2_++;
         }
         return null;
      }
      
      private function method_559(param1:String = "") : String
      {
         var _loc6_:Array = null;
         var _loc7_:Array = null;
         var _loc8_:* = undefined;
         var _loc9_:Array = null;
         var _loc10_:* = undefined;
         var _loc11_:Array = null;
         this.var_38 = new Array();
         this.var_82 = new Array();
         this.arrBeatArenaIDs = new Array();
         this.arrSavedTanks = new Array();
         var _loc2_:uint = 0;
         var _loc3_:String = "";
         var _loc4_:Array = param1.split("~");
         var _loc5_:Array = _loc4_[0].split(",");
         _loc2_ = 0;
         while(_loc2_ < _loc5_.length)
         {
            _loc6_ = _loc5_[_loc2_].split(";");
            _loc7_ = _loc6_[2].split("|");
            this.var_38.push({
               "Data":_loc6_[0],
               "ID":_loc6_[1],
               "AllTanks":_loc7_
            });
            _loc2_++;
         }
         if(_loc4_[1] != null)
         {
            this.arrBeatArenaIDs = _loc4_[1].split(";");
         }
         if(_loc4_[2] != null)
         {
            _loc8_ = _loc4_[2].split("|");
            _loc2_ = 0;
            while(_loc2_ < _loc8_.length)
            {
               _loc9_ = _loc8_[_loc2_].split(";");
               this.var_82.push({
                  "id":_loc9_[0],
                  "score":_loc9_[1]
               });
               _loc2_++;
            }
         }
         if(_loc4_[3] != null)
         {
            _loc10_ = _loc4_[3].split("|");
            _loc2_ = 0;
            while(_loc2_ < _loc10_.length)
            {
               _loc11_ = _loc10_[_loc2_].split(";");
               this.arrSavedTanks.push({
                  "Data":_loc11_[0],
                  "ID":_loc11_[1],
                  "blnShowInSearch":_loc11_[2]
               });
               _loc2_++;
            }
         }
         if(_loc4_[4] != null)
         {
            _loc3_ = _loc4_[4];
         }
         if(_loc4_[5] != null)
         {
            this.currentAvatar = _loc4_[5];
         }
         if(_loc4_[6] != null)
         {
            this.arrUnlockedObjects = _loc4_[6].split(";");
         }
         if(_loc4_[7] != null)
         {
            this.var_269 = _loc4_[7];
         }
         if(_loc4_[8] != null)
         {
            if(_loc4_[8] == "true")
            {
               this.var_234 = true;
            }
            else
            {
               this.var_234 = false;
            }
         }
         if(_loc4_[9] != null)
         {
            this.var_178 = _loc4_[9];
         }
         if(_loc4_[10] != null)
         {
            this.var_185 = _loc4_[10];
         }
         if(_loc4_[11] != null)
         {
            if(_loc4_[11] == "true")
            {
               this.var_260 = true;
            }
            else
            {
               this.var_260 = false;
            }
         }
         if(_loc4_[12] != null)
         {
            if(_loc4_[12] == "true")
            {
               this.var_253 = true;
            }
            else
            {
               this.var_253 = false;
            }
         }
         return _loc3_;
      }
      
      public function method_832(param1:SharedObject) : void
      {
         this.var_183 = param1;
      }
      
      public function EditPreviousArenaID(param1:ArenaData) : void
      {
         this.var_38[this.var_38.length - 1].Data = param1.ExportArenaData();
         this.var_38[this.var_38.length - 1].ID = param1.strID;
         this.method_19();
      }
      
      public function method_17(param1:TankData = null, param2:Boolean = false) : Boolean
      {
         var _loc3_:Boolean = false;
         var _loc4_:class_79 = class_2.method_64();
         var _loc5_:Number = 0;
         var _loc6_:Number = 0;
         var _loc7_:Number = 0;
         if(_loc4_.var_139)
         {
            _loc5_ = 12;
         }
         else
         {
            _loc5_ = this.gunPointsMax.method_29();
         }
         if(_loc4_.blnCheatClass)
         {
            _loc6_ = 6;
         }
         else
         {
            _loc6_ = this.maxClass.method_29();
         }
         if(_loc4_.var_132)
         {
            _loc7_ = 100;
         }
         else
         {
            _loc7_ = this.bubblePointsMax.method_29();
         }
         if(_loc4_.bln50GunPoints)
         {
            _loc5_ = 50;
         }
         if(param2 || param1.strID.substr(0,1) == "E")
         {
            _loc5_ = Math.floor(_loc5_ * 1.5);
         }
         if(param1.numGunPoints > _loc5_)
         {
            _loc3_ = true;
         }
         else if(param1.numClass > _loc6_)
         {
            _loc3_ = true;
         }
         else if(param1.numBubbles > _loc7_)
         {
            _loc3_ = true;
         }
         return _loc3_;
      }
      
      public function DeleteProfile() : void
      {
         this.var_183.clear();
         this.method_509();
      }
      
      public function method_73(param1:String) : void
      {
         var _loc2_:TankData = new TankData();
         _loc2_.ImportTankData(param1);
         this.arrSavedTanks.push({
            "Data":param1,
            "ID":_loc2_.strID,
            "blnShowInSearch":"true"
         });
         this.method_19();
         _loc2_ = null;
      }
      
      private function method_767(param1:String = "") : String
      {
         return class_22.compress(param1);
      }
      
      public function method_631(param1:ArenaData) : void
      {
         var _loc2_:String = param1.ExportArenaData();
         var _loc3_:String = param1.strID;
         var _loc4_:Array = new Array();
         var _loc5_:uint = 0;
         while(_loc5_ < param1.arrAllEnemiesInArena.length)
         {
            _loc4_.push(param1.arrAllEnemiesInArena[_loc5_].ID);
            _loc5_++;
         }
         this.var_38.push({
            "Data":_loc2_,
            "ID":_loc3_,
            "AllTanks":_loc4_
         });
      }
      
      public function method_509() : void
      {
         this.profileName = "";
         this.var_269 = false;
         this.var_253 = false;
         this.var_234 = false;
         this.var_178 = 0;
         this.var_185 = 0;
         this.var_260 = false;
         this.gunPointsMax = new DataObject(459812,false,false,459813);
         this.bubblePointsMax = new DataObject(9246,false,false,9249);
         this.maxClass = new DataObject(2113,false,false,2114);
         this.arenasCompleted = new DataObject(0);
         this.currentAvatar = "7d1adbbd72aaa3c8672736b9715f0c5519a5130a78032553eac3337e4074ba671f833edee1f5bb99e490de82d3d15107b465367e32c3ed3f6395d77f8afd6aa01bb70e7a2ea088f18ff25e4d150fba6abbcb73";
         this.arrSavedTanks = new Array();
         this.arrBeatArenaIDs = new Array();
         this.var_82 = new Array();
         this.arrSavedTanks.push({
            "Data":"empty",
            "ID":"none",
            "blnShowInSearch":"true"
         });
         this.var_38 = new Array();
         var _loc1_:String = class_1.method_1(772,778);
         this.arrUnlockedObjects = _loc1_.split(",");
         this.method_302();
         this.method_471();
      }
   }
}

