// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class PlayerProfile{
      
      public var_269: boolean;
      public var_234: boolean;
      public arrUnlockedObjects: any[];
      private strFirstPart: string;
      public var_260: boolean;
      public var_38: any[];
      public gunPointsMax: DataObject;
      public var_82: any[];
      private var_183: SharedObject;
      public currentAvatar: string;
      public var_185: number;
      public arrBeatArenaIDs: any[];
      public arrSavedTanks: any[];
      public var_253: boolean;
      public var_579: string;
      public profileName: string;
      public bubblePointsMax: DataObject;
      public arenasCompleted: DataObject;
      public var_226: boolean;
      public objGameObjectLibrary: class_2;
      public maxClass: DataObject;
      public arrAllObjectIDs: any[];
      public var_178: number;
      constructor(param1: SharedObject){
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
         let _loc2_: string = class_1.method_1(772,778);
         this.arrUnlockedObjects = _loc2_.split(",");
         this.arrAllObjectIDs = new Array();
         let _loc3_: number = 0;
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
      
      public static onFlushStatus(param1: NetStatusEvent): void
      {
         if(param1.info.code != "SharedObject.Flush.Success")
         {
            if(param1.info.code == "SharedObject.Flush.Failed")
            {
               class_2.getInstance().method_316();
            }
         }
      }
      
      public EditTankIDFromID(param1: string, param2: string): boolean
      {
         let _loc4_: TankData = null;
         let _loc3_: number = 0;
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
      
      public DeletePrevArena(): void
      {
         this.var_38.splice(this.var_38.length - 1,1);
         this.method_19();
      }
      
      public DoesProfileHaveAllThePartsForTank(param1: TankData = null as any): boolean
      {
         let _loc3_: any[] = null;
         let _loc6_: boolean = false;
         let _loc7_: number = 0;
         let _loc2_: class_79 = class_2.method_64();
         if(_loc2_.var_224)
         {
            _loc3_ = this.arrAllObjectIDs;
         }
         else
         {
            _loc3_ = this.arrUnlockedObjects;
         }
         let _loc4_: boolean = true;
         let _loc5_: number = 0;
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
      
      public method_176(): void
      {
         let var_56: string = null;
         let var_40: string = null;
         let var_150: string = null;
         let var_157: string = null;
         let var_307: string = null;
         let var_262: class_11 = null;
         let var_106: ByteArray = null;
         let var_257: ByteArray = null;
         let var_194: class_12 = null;
         let var_346: string = null;
         let var_243: any[] = null;
         let var_126: string = "";
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
      
      public method_471(): void
      {
         let _loc4_: ArenaData = null;
         let _loc6_: number = 0;
         let _loc1_: class_79 = class_2.method_64();
         let _loc2_: boolean = false;
         let _loc5_: number = 0;
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
      
      private method_525(param1: string = ""): string
      {
         let _loc15_: number = 0;
         let _loc2_: string = "";
         let _loc3_: string = "";
         let _loc4_: string = "";
         let _loc5_: string = "";
         let _loc6_: string = "";
         let _loc7_: string = "";
         let _loc8_: string = "";
         let _loc9_: string = "";
         let _loc10_: string = "";
         let _loc11_: string = "";
         let _loc12_: string = "";
         let _loc13_: number = 0;
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
         let _loc14_: string = "";
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
      
      private method_656(): string
      {
         let _loc1_: number = Math.round(Math.random() * 15);
         let _loc2_: string = "";
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
      
      public SetNewProfileData(param1: string): void
      {
         if(param1 != "")
         {
            this.profileName = param1;
         }
      }
      
      public method_302(): void
      {
         let _loc2_: number = NaN;
         let _loc3_: TankData = null;
         let _loc4_: string = null;
         let _loc1_: number = 0;
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
      
      public method_283(param1: ArenaData): void
      {
         let _loc2_: string = param1.ExportArenaData();
         let _loc3_: string = param1.strID;
         let _loc4_: any[] = new Array();
         let _loc5_: number = 0;
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
      
      private method_706(param1: string = ""): string
      {
         return class_22.uncompress(param1);
      }
      
      public EditPreviousTankID(param1: TankData): void
      {
         this.arrSavedTanks[this.arrSavedTanks.length - 1].Data = param1.ExportTankData();
         this.arrSavedTanks[this.arrSavedTanks.length - 1].ID = param1.strID;
         this.method_19();
      }
      
      private CheckToHasPart(): void
      {
         let _loc4_: number = 0;
         let _loc1_: boolean = false;
         let _loc2_: boolean = true;
         let _loc3_: number = 0;
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
      
      private method_609(): void
      {
         this.strFirstPart += "4HPmN";
      }
      
      public method_19(): void
      {
         let var_262: string = null;
         let var_40: string = null;
         let var_150: string = null;
         let var_157: string = null;
         let var_307: string = null;
         let var_194: class_11 = null;
         let var_126: ByteArray = null;
         let var_257: ByteArray = null;
         let var_106: class_12 = null;
         let var_243: string = null;
         let var_56: string = null;
         if(this.var_226 == false)
         {
            return;
         }
         this.var_183.clear();
         if(this.var_183.hasEventListener(NetStatusEvent.NET_STATUS) == false)
         {
            this.var_183.addEventListener(NetStatusEvent.NET_STATUS, onFlushStatus.bind(this));
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
         catch (e: any)
         {
         }
         try
         {
            var_56 = this.var_183.flush();
         }
         catch (error: any)
         {
            this.var_226 = false;
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
      
      public method_27(param1: TankData = null as any): string
      {
         let _loc2_: string = "";
         let _loc3_: class_79 = class_2.method_64();
         let _loc4_: number = 0;
         let _loc5_: number = 0;
         let _loc6_: number = 0;
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
      
      private method_362(): string
      {
         let _loc1_: string = "";
         let _loc2_: number = 0;
         while(_loc2_ < 3)
         {
            _loc1_ += this.method_656();
            _loc2_++;
         }
         return _loc1_;
      }
      
      public RetrieveTankBasedOnID(param1: string): TankData
      {
         let _loc3_: TankData = null;
         let _loc2_: number = 0;
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
      
      private method_559(param1: string = ""): string
      {
         let _loc6_: any[] = null;
         let _loc7_: any[] = null;
         let _loc8_: any = undefined;
         let _loc9_: any[] = null;
         let _loc10_: any = undefined;
         let _loc11_: any[] = null;
         this.var_38 = new Array();
         this.var_82 = new Array();
         this.arrBeatArenaIDs = new Array();
         this.arrSavedTanks = new Array();
         let _loc2_: number = 0;
         let _loc3_: string = "";
         let _loc4_: any[] = param1.split("~");
         let _loc5_: any[] = _loc4_[0].split(",");
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
      
      public method_832(param1: SharedObject): void
      {
         this.var_183 = param1;
      }
      
      public EditPreviousArenaID(param1: ArenaData): void
      {
         this.var_38[this.var_38.length - 1].Data = param1.ExportArenaData();
         this.var_38[this.var_38.length - 1].ID = param1.strID;
         this.method_19();
      }
      
      public method_17(param1: TankData = null as any, param2: boolean = false): boolean
      {
         let _loc3_: boolean = false;
         let _loc4_: class_79 = class_2.method_64();
         let _loc5_: number = 0;
         let _loc6_: number = 0;
         let _loc7_: number = 0;
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
      
      public DeleteProfile(): void
      {
         this.var_183.clear();
         this.method_509();
      }
      
      public method_73(param1: string): void
      {
         let _loc2_: TankData = new TankData();
         _loc2_.ImportTankData(param1);
         this.arrSavedTanks.push({
            "Data":param1,
            "ID":_loc2_.strID,
            "blnShowInSearch":"true"
         });
         this.method_19();
         _loc2_ = null;
      }
      
      private method_767(param1: string = ""): string
      {
         return class_22.compress(param1);
      }
      
      public method_631(param1: ArenaData): void
      {
         let _loc2_: string = param1.ExportArenaData();
         let _loc3_: string = param1.strID;
         let _loc4_: any[] = new Array();
         let _loc5_: number = 0;
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
      
      public method_509(): void
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
         let _loc1_: string = class_1.method_1(772,778);
         this.arrUnlockedObjects = _loc1_.split(",");
         this.method_302();
         this.method_471();
      }
   }
