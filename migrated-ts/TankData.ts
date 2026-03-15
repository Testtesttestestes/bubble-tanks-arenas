// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class TankData extends Sprite{
      
      public numBubbles: number = 0;
      public strID: string;
      public numClass: number = 0;
      public movTank: MovieClip;
      public numLife: number;
      public numRating: number;
      public strAuthorName: string;
      public var_558: string = "";
      public intType: number;
      public tankType: number = 4;
      private strVar2: string;
      public arrTankDetails: any[];
      public objWorld: BTAGameWorld;
      public numGunPoints: number = 0;
      public numDifficultyRating: number;
      public numSpeed: number;
      public var_455: number;
      public strTankName: string;
      public blnAvatarTank: boolean;
      public numBubblesReturned: number;
      public objGameObjectLibrary: class_2;
      constructor(){
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
      
      public method_799(): void
      {
         this.arrTankDetails = null;
         this.objWorld = null;
         this.objGameObjectLibrary = null;
         if(this.movTank != null)
         {
            this.movTank = null;
         }
      }
      
      public GetLargestXDistanceFromRegistration(): number
      {
         let _loc1_: number = 0;
         let _loc2_: any = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc1_ = Math.max(_loc1_,Math.abs(this.arrTankDetails[_loc2_].x));
            _loc2_ += 1;
         }
         return _loc1_;
      }
      
      public GetLargestYDistanceFromRegistration(): number
      {
         let _loc1_: number = 0;
         let _loc2_: any = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc1_ = Math.max(_loc1_,Math.abs(this.arrTankDetails[_loc2_].y));
            _loc2_ += 1;
         }
         return _loc1_;
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
      
      public Deactivate(): void
      {
         this.arrTankDetails = null;
         this.objWorld = null;
         this.objGameObjectLibrary = null;
         this.WipeTank();
      }
      
      public GetLargestRadiusFromRegistration(): number
      {
         let _loc4_: number = NaN;
         let _loc6_: number = NaN;
         let _loc1_: number = 0;
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         let _loc5_: any = 0;
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
      
      public ImportTankData(param1: string): boolean
      {
         let numStringLength: number = NaN;
         let part1: string = null;
         let part2: string = null;
         let actualData: string = null;
         let strVar3: any = undefined;
         let pad: class_11 = null;
         let data: ByteArray = null;
         let kdata: ByteArray = null;
         let myCypher: class_12 = null;
         let strHeader: string = null;
         let arrTankInfo: any[] = null;
         let basicData: any[] = null;
         let intAvatarTank: number = 0;
         let arrRow: any[] = null;
         let a: any = undefined;
         let strTank: string = param1;
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
            this.var_455 = Math.floor(basicData[2]);
            intAvatarTank = Math.floor(basicData[3]);
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
      
      private method_640(): number
      {
         let var_40: any[] = null;
         let var_56: number = 0;
         let var_106: number = 0;
         let var_194: number = NaN;
         let var_126: number = NaN;
         let var_157: number = NaN;
         let var_150: number = 0;
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
      
      public ExportTankData(): string
      {
         let _loc1_: number = 0;
         if(this.blnAvatarTank == true)
         {
            _loc1_ = 1;
         }
         let _loc2_: string = this.strAuthorName + "," + this.strTankName + "," + this.var_455 + "," + _loc1_ + "," + this.numLife + "," + this.numBubblesReturned + "," + this.numSpeed + "," + this.numDifficultyRating + "," + this.strID + "," + this.numRating;
         let _loc3_: string = this.method_362();
         let _loc4_: string = this.method_362();
         let _loc5_: string = "" + _loc3_ + _loc4_ + this.strVar2;
         let _loc6_: number = 0;
         while(_loc6_ < this.arrTankDetails.length)
         {
            _loc2_ += ";" + this.arrTankDetails[_loc6_].name + "," + this.arrTankDetails[_loc6_].type + "," + this.arrTankDetails[_loc6_].twin + "," + this.arrTankDetails[_loc6_].x + "," + this.arrTankDetails[_loc6_].y + "," + this.arrTankDetails[_loc6_].rotation + "," + this.arrTankDetails[_loc6_].scale + "," + this.arrTankDetails[_loc6_].radius;
            _loc6_++;
         }
         let _loc7_: class_11 = new PKCS5();
         let _loc8_: ByteArray = class_13.toArray(class_13.method_22(_loc2_));
         let _loc9_: ByteArray = class_13.toArray(class_13.method_22(_loc5_));
         let _loc10_: class_12 = class_14.method_46("aes128-ecb",_loc9_,_loc7_);
         _loc10_.encrypt(_loc8_);
         return _loc3_ + String(class_13.method_52(_loc8_)) + _loc4_;
      }
      
      private method_636(): number
      {
         let _loc1_: number = 0;
         let _loc2_: any = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            _loc1_ += this.objGameObjectLibrary.method_166(this.arrTankDetails[_loc2_].type);
            _loc2_ += 1;
         }
         return _loc1_;
      }
      
      public method_467(param1: string, param2: number, param3: string, param4: number, param5: number, param6: number, param7: number, param8: number): void
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
      
      public method_616(): Point
      {
         let _loc4_: number = NaN;
         let _loc5_: number = NaN;
         let _loc6_: number = NaN;
         let _loc1_: number = 1000;
         let _loc2_: Point = new Point();
         let _loc3_: number = 0;
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
      
      public method_61(param1: number = 0, param2: BTAGameWorld = null as any): MovieClip
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
         let _loc3_: MovieClip = new MovieClip();
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
            let _loc5_: number = this.objGameObjectLibrary.GetObjectType(this.arrTankDetails[0].type);
            switch(this.intType)
            {
            }
            let _loc4_: number = 0 + 1;
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
      
      public method_383(): number
      {
         let _loc3_: number = NaN;
         let _loc4_: number = NaN;
         let _loc5_: number = NaN;
         let _loc1_: number = 0;
         let _loc2_: number = 0;
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
      
      private method_510(): number
      {
         0;
         let _loc2_: any = 0;
         while(_loc2_ < this.arrTankDetails.length)
         {
            if(this.objGameObjectLibrary.IsObjectAWeapon(this.arrTankDetails[_loc2_].type))
            {
               let _loc1_: number = 0 + this.objGameObjectLibrary.method_207(this.arrTankDetails[_loc2_].type);
            }
            _loc2_ += 1;
         }
         return 0;
      }
      
      public method_549(): number
      {
         let _loc1_: number = 1 / (5 - this.numSpeed) + 1;
         let _loc2_: number = this.numGunPoints / 2 - 0.2;
         return Math.round(_loc1_ * _loc2_ + Math.sqrt(this.numLife) / 10 - this.numBubblesReturned / this.numLife + 0.4);
      }
      
      public WipeTank(): void
      {
         let _loc1_: any = undefined;
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
