// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class TankViewerScreen extends MovieClip{
      
      public btnFirst_mc: MovieClip;
      public btnCreateATank_mc: MovieClip;
      private var_297: boolean = false;
      public btnEnterTankID_mc: MovieClip;
      private var_544: Point;
      public DetailedTank_mc: class_56;
      private var_8: class_3;
      private var_131: Point;
      public TankLoad3_mc: TankLoadingBox;
      private pntTank3Screen: Point;
      private var_36: number = 1;
      public txtPageNumCurrent_txt: TextField;
      private var_380: number;
      private var_574: Point;
      public var_333: class_3;
      private arrSearchFilters: any[];
      private urlLoader: URLLoader;
      public btnNext_mc: MovieClip;
      private var_23: Function = null as any;
      public btnMainMenu_mc: MovieClip;
      public TankLoad4_mc: TankLoadingBox;
      private var_130: any[];
      public var_174: boolean;
      private arrSearchSorts: any[];
      private var_490: Function;
      public txtExplination_txt: TextField;
      private intCurrentLocationInTanksQueue: number = 0;
      public NotifyScreen_mc: MovieClip;
      public selectTankScreen_mc: MovieClip;
      private refMain: class_79;
      private var_70: string = null as any;
      public btnSearchForTanks_mc: MovieClip;
      private pntTank2Screen: Point;
      public btnLoadCurrentProfile_mc: MovieClip;
      private arrTanksInqueue: any[];
      public btnSortTanks_mc: MovieClip;
      private var_117: class_96;
      private var_492: boolean = false;
      public btnPrev_mc: MovieClip;
      private var_39: any[];
      private strSortType: string = "Avatar";
      private var_542: Point;
      private strLargeTankData: string = "";
      public btnEnterTankCode_mc: MovieClip;
      private objGameObjectLibrary: class_2;
      public TankLoad1_mc: TankLoadingBox;
      public btnCurrentPoints_mc: MovieClip;
      private var_581: Point;
      private strViewerType: string = "AvatarLocal";
      private pntTank4Screen: Point;
      private var_129: any[];
      private var_444: Sprite;
      private var_116: any[];
      private var_577: Point;
      private var_166: number = 1;
      public btnViewLocalTanks_mc: MovieClip;
      private var_76: boolean = false;
      private pntTank1Screen: Point;
      public SearchForTanksScreen_mc: MovieClip;
      private var_254: string = "";
      public TankLoad2_mc: TankLoadingBox;
      private strPrimarySecondary: string = "";
      private var_154: class_5;
      public var_22: boolean = false;
      public btnMyAvatar_mc: MovieClip;
      public Tutorial_mc: MovieClip;
      constructor(param1: class_79 = null as any, param2: boolean = false, param3: Function = null as any, param4: any = "", param5: Function = null as any, param6: boolean = true, param7: string = null as any, param8: any[] = null as any){
    super(); // AUTO-INJECTED
         let _loc9_: boolean = false;
         let _loc10_: number = 0;
         this.arrTanksInqueue = new Array();
         this.arrSearchFilters = new Array();
         this.arrSearchSorts = new Array();
         this.urlLoader = new URLLoader();
         this.var_39 = new Array();
         super();
         if(param2)
         {
            this.var_129 = new Array();
            this.var_130 = new Array();
            this.var_116 = new Array();
            this.var_174 = false;
            this.refMain = param1;
            this.var_23 = param3;
            this.var_254 = param4;
            this.var_297 = param6;
            this.var_492 = param6;
            this.var_490 = param5;
            this.var_70 = param7;
            if(this.refMain.arrMenuNavigation[this.refMain.arrMenuNavigation.length - 1] == 4 && this.refMain.arrMenuNavigation[this.refMain.arrMenuNavigation.length - 2] == 4 && this.refMain.arrMenuNavigation[this.refMain.arrMenuNavigation.length - 3] == 6 && this.refMain.arrMenuNavigation[this.refMain.arrMenuNavigation.length - 4] == 1)
            {
               this.var_174 = true;
            }
            _loc9_ = false;
            if(this.refMain.arrMenuNavigation.length == 1)
            {
               this.var_22 = true;
            }
            _loc10_ = 0;
            while(_loc10_ < this.refMain.arrMenuNavigation.length)
            {
               if(this.refMain.arrMenuNavigation[_loc10_] == 3 || this.refMain.arrMenuNavigation[_loc10_] == 5)
               {
                  this.var_22 = true;
               }
               _loc10_ += 1;
            }
            this.btnLoadCurrentProfile_mc.alpha = 0;
            this.btnLoadCurrentProfile_mc.mouseEnabled = false;
            this.btnLoadCurrentProfile_mc.mouseChildren = false;
            if(this.var_23 == null)
            {
               this.btnCreateATank_mc.alpha = 0;
               this.btnCreateATank_mc.mouseEnabled = false;
               this.btnCreateATank_mc.mouseChildren = false;
               this.btnMyAvatar_mc.alpha = 0;
               this.btnMyAvatar_mc.mouseEnabled = false;
               this.btnMyAvatar_mc.mouseChildren = false;
            }
            else if(this.var_22)
            {
               this.btnCreateATank_mc.alpha = 0;
               this.btnCreateATank_mc.mouseEnabled = false;
               this.btnCreateATank_mc.mouseChildren = false;
            }
            this.objGameObjectLibrary = class_2.getInstance();
            this.var_8 = new class_3();
            this.var_8.Setup(null,this.method_107,this.method_112);
            this.var_131 = new Point(501.6,269.2);
            this.btnSortTanks_mc.x = 616.55;
            this.strPrimarySecondary = this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.PrimarySecondary_txt.text;
            if(param7 == null)
            {
               this.strViewerType = "AvatarLocal";
               this.method_86();
            }
            else if(param7 == "Avatar")
            {
               this.strViewerType = "AvatarLocal";
               this.method_86();
            }
            else if(param7 == "Enemy")
            {
               this.strViewerType = "EnemyLocal";
               this.method_86();
            }
            if(param8 != null)
            {
               if(param8.length != 0 && param8[param8.length - 1].arrTanksInqueue.length > 0)
               {
                  this.arrSearchFilters = param8[param8.length - 1].arrSearchFilters;
                  this.arrSearchSorts = param8[param8.length - 1].arrSearchSorts;
                  this.arrTanksInqueue = param8[param8.length - 1].arrTanksInqueue;
                  this.intCurrentLocationInTanksQueue = param8[param8.length - 1].intCurrentLocationInTanksQueue;
               }
            }
            this.method_23();
            this.method_24();
            this.btnSortTanks_mc.x = this.var_131.x;
            this.txtExplination_txt.text = "";
            this.pntTank1Screen = new Point(this.TankLoad1_mc.x,this.TankLoad1_mc.y);
            this.pntTank2Screen = new Point(this.TankLoad2_mc.x,this.TankLoad2_mc.y);
            this.pntTank3Screen = new Point(this.TankLoad3_mc.x,this.TankLoad3_mc.y);
            this.pntTank4Screen = new Point(this.TankLoad4_mc.x,this.TankLoad4_mc.y);
            this.var_544 = new Point(this.btnFirst_mc.x,this.btnFirst_mc.y);
            this.var_574 = new Point(this.btnNext_mc.x,this.btnNext_mc.y);
            this.var_542 = new Point(this.btnPrev_mc.x,this.btnPrev_mc.y);
            this.DetailedTank_mc.alpha = 0;
            this.DetailedTank_mc.var_2.alpha = 0;
            this.DetailedTank_mc.mouseEnabled = false;
            this.DetailedTank_mc.mouseChildren = false;
            this.SearchForTanksScreen_mc.alpha = 0;
            this.SearchForTanksScreen_mc.mouseEnabled = false;
            this.SearchForTanksScreen_mc.mouseChildren = false;
            this.NotifyScreen_mc.alpha = 0;
            this.NotifyScreen_mc.mouseEnabled = false;
            this.NotifyScreen_mc.mouseChildren = false;
            this.NotifyScreen_mc.txtDisplayMessage_txt.selectable = false;
            this.NotifyScreen_mc.txtDisplayMessage_txt.mouseEnabled = false;
            this.GreyOutBackButton();
            this.GreyOutFirstButton();
            this.selectTankScreen_mc.alpha = 0;
            this.selectTankScreen_mc.mouseEnabled = false;
            this.selectTankScreen_mc.mouseChildren = false;
            this.TankLoad1_mc.lines_mc.alpha = 0;
            this.TankLoad2_mc.lines_mc.alpha = 0;
            this.TankLoad3_mc.lines_mc.alpha = 0;
            this.TankLoad4_mc.lines_mc.alpha = 0;
            this.var_154 = new class_5(this.refMain);
            this.var_444 = new Sprite();
            this.addChild(this.var_444);
            this.var_154.method_119("mainEffects",this.var_444);
            this.method_33();
            if(!this.refMain.objCurrentPlayer.var_253)
            {
               this.var_333 = new class_3();
               this.var_333.Setup();
               this.var_333.method_4(this.Tutorial_mc.next_mc,true,this.method_444);
               this.var_333.method_4(this.Tutorial_mc.back_mc,true,this.method_377);
               this.method_78();
            }
            else
            {
               this.Tutorial_mc.alpha = 0;
               this.Tutorial_mc.mouseEnabled = false;
               this.Tutorial_mc.mouseChildren = false;
            }
         }
      }
      
      private HIYesDown(param1: Event): void
      {
         this.SelectableDown(param1);
         this.SearchForTanksScreen_mc.btnNo_mc.gotoAndStop(1);
      }
      
      private method_837(param1: number, param2: number, param3: number, param4: number, param5: any = 0, param6: any = 0): number
      {
         param5 = param1 - param3;
         param6 = param2 - param4;
         return Math.sqrt(param5 * param5 + param6 * param6);
      }
      
      private RateTank(param1: string, param2: number): void
      {
         let strRating: string = null;
         let strK: string = null;
         let pad: class_11 = null;
         let data: ByteArray = null;
         let kdata: ByteArray = null;
         let myCypher: class_12 = null;
         let strRatingRequest: string = null;
         let url: string = null;
         let request: URLRequest = null;
         let requestVars: URLVariables = null;
         let urlLoader: URLLoader = null;
         let argAvatarID: string = param1;
         let argRating: number = param2;
         this.refMain.AddTankRating(argAvatarID,argRating);
         if(argAvatarID.substr(0,1) != "A" && argAvatarID.substr(0,1) != "E")
         {
            return;
         }
         if(argRating < 0)
         {
            argRating = 0;
         }
         else if(argRating > 5)
         {
            argRating = 5;
         }
         strRating = argAvatarID + "," + argRating;
         strK = class_1.method_1(758,768);
         pad = new PKCS5();
         data = class_13.toArray(class_13.method_22(strRating));
         kdata = class_13.toArray(class_13.method_22(strK));
         myCypher = class_14.method_46("aes128-ecb",kdata,pad);
         myCypher.encrypt(data);
         strRatingRequest = "" + String(class_13.method_52(data));
         url = "http://s1.herointeractive.com/bta/submit" + argAvatarID.substr(0,1) + "Rating.php";
         request = new URLRequest(url);
         requestVars = new URLVariables();
         requestVars.r = strRatingRequest;
         request.data = requestVars;
         request.method = URLRequestMethod.POST;
         this.urlLoader = new URLLoader();
         this.urlLoader = new URLLoader();
         this.urlLoader.dataFormat = URLLoaderDataFormat.TEXT;
         try
         {
            this.urlLoader.load(request);
         }
         catch (e: any)
         {
         }
      }
      
      private method_313(param1: Event): void
      {
         if(param1.target.currentFrame == 1)
         {
            param1.target.gotoAndStop(2);
         }
         if(param1.target.currentFrame == 3)
         {
            param1.target.gotoAndStop(4);
         }
         let _loc2_: any = 0;
         while(_loc2_ < this.var_39.length)
         {
            if(param1.target == this.var_39[_loc2_].btn)
            {
               this.txtExplination_txt.text = this.var_39[_loc2_].DescText;
            }
            _loc2_ += 1;
         }
      }
      
      private method_117(param1: Event): void
      {
         this.method_47();
         this.intCurrentLocationInTanksQueue = Math.floor(this.intCurrentLocationInTanksQueue / 4) * 4;
         this.var_36 = 1 + this.intCurrentLocationInTanksQueue / 4;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.method_9(this.DetailedTank_mc);
         if(this.var_36 == 1)
         {
            this.GreyOutBackButton();
            this.GreyOutFirstButton();
         }
         else
         {
            this.method_43();
         }
         this.method_33();
      }
      
      private ShowCurrentAvatar(param1: Event): any
      {
         let _loc8_: any = undefined;
         let _loc9_: number = NaN;
         this.method_18();
         let _loc2_: TankData = new TankData();
         _loc2_.ImportTankData(this.refMain.objCurrentPlayer.currentAvatar);
         this.DetailedTank_mc.CopyTankData(_loc2_);
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.method_5(this.DetailedTank_mc);
         this.DetailedTank_mc.largeTankStats_mc.alpha = 1;
         this.DetailedTank_mc.btnLargeDelete_mc.alpha = 1;
         this.DetailedTank_mc.btnLargeBack_mc.alpha = 1;
         this.DetailedTank_mc.btnLargeDelete_mc.alpha = 0;
         this.txtPageNumCurrent_txt.text = "";
         let _loc3_: any[] = new Array();
         let _loc4_: any[] = new Array();
         let _loc5_: any[] = new Array();
         let _loc6_: any = 0;
         while(_loc6_ < this.DetailedTank_mc.sprTankData.arrTankDetails.length)
         {
            _loc3_.push(this.objGameObjectLibrary.method_37(this.DetailedTank_mc.sprTankData.arrTankDetails[_loc6_].type));
            _loc6_ += 1;
         }
         let _loc7_: boolean = true;
         _loc6_ = 0;
         while(_loc6_ < _loc3_.length)
         {
            _loc7_ = true;
            _loc8_ = 0;
            while(_loc8_ < _loc4_.length)
            {
               if(_loc3_[_loc6_] == _loc4_[_loc8_])
               {
                  _loc5_[_loc8_] += 1;
                  _loc7_ = false;
                  break;
               }
               _loc8_ += 1;
            }
            if(_loc7_)
            {
               _loc4_.push(_loc3_[_loc6_]);
               _loc5_.push(1);
            }
            _loc6_ += 1;
         }
         this.strLargeTankData = "";
         _loc6_ = 0;
         while(_loc6_ < _loc4_.length)
         {
            this.strLargeTankData = "" + this.strLargeTankData + "" + _loc5_[_loc6_] + " x " + _loc4_[_loc6_] + "\n";
            _loc6_ += 1;
         }
         this.DetailedTank_mc.txtTankData_txt.text = this.strLargeTankData;
         this.DetailedTank_mc.txtTankData_txt.alpha = 0.8;
         if(this.refMain.RetrieveTankLocalRating(this.DetailedTank_mc.sprTankData.strID) == -1)
         {
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 1)
            {
               this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 2)
            {
               this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 3)
            {
               this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 4)
            {
               this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 5)
            {
               this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
            }
         }
         else
         {
            _loc9_ = this.refMain.RetrieveTankLocalRating(this.DetailedTank_mc.sprTankData.strID);
            _loc9_ = Math.round(_loc9_);
            if(_loc9_ >= 1)
            {
               this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 2)
            {
               this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 3)
            {
               this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 4)
            {
               this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 5)
            {
               this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
            }
         }
         this.method_157();
         this.txtPageNumCurrent_txt.text = "";
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.GreyOutNextButton();
         this.method_237();
      }
      
      private ReturnToFirstTank(param1: Event): void
      {
         this.DetailedTank_mc.btnCopy_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnCopy_mc.mouseEnabled = true;
         this.intCurrentLocationInTanksQueue = 0;
         this.TankLoad1_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]);
         this.DetailTheTank(this.TankLoad1_mc);
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad1_mc.mouseEnabled = false;
         this.method_148();
         this.GreyOutFirstButton();
         this.GreyOutBackButton();
         if(this.arrTanksInqueue.length > 1)
         {
            this.UnGreyOutNextButton();
         }
         else
         {
            this.GreyOutNextButton();
         }
      }
      
      private method_730(): any
      {
         this.DetailedTank_mc.mouseEnabled = true;
         this.DetailedTank_mc.mouseChildren = true;
         this.DetailedTank_mc.largeTankStats_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.addEventListener(MouseEvent.MOUSE_OVER, this.method_118.bind(this));
         this.DetailedTank_mc.largeTankStats_mc.addEventListener(MouseEvent.MOUSE_OUT, this.method_136.bind(this));
         this.var_39.push({
            "btn":this.DetailedTank_mc.largeTankStats_mc,
            "DescText":"All the detailed information for the tank"
         });
         if(this.var_22)
         {
            this.DetailedTank_mc.btnLargeEdit_mc.alpha = 0;
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.method_3(this.btnFirst_mc,"Return to first page tanks");
         }
         else
         {
            this.btnFirst_mc.gotoAndStop(5);
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.method_3(this.btnPrev_mc,"Return to previous page tanks");
         }
         else
         {
            this.btnPrev_mc.gotoAndStop(5);
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.method_3(this.btnNext_mc,"Go to next page of tanks");
         }
         else
         {
            this.btnNext_mc.gotoAndStop(5);
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.btnFirst_mc.addEventListener(MouseEvent.CLICK, this.ReturnToFirstTank.bind(this));
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.btnPrev_mc.addEventListener(MouseEvent.CLICK, this.GoBackATank.bind(this));
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.btnNext_mc.addEventListener(MouseEvent.CLICK, this.GoToNextTank.bind(this));
         }
         if(this.var_23 == null)
         {
            this.method_3(this.btnMainMenu_mc,"Return to the Main Menu");
            this.btnMainMenu_mc.addEventListener(MouseEvent.CLICK, this.ReturnToMainMenuFromLargeView.bind(this));
         }
         else
         {
            this.method_3(this.btnMainMenu_mc,this.var_254);
            this.btnMainMenu_mc.addEventListener(MouseEvent.CLICK, this.method_127.bind(this));
         }
         this.method_3(this.btnEnterTankID_mc,"Enter an existing tank ID");
         this.method_3(this.btnEnterTankCode_mc,"View tank from tank code");
         this.method_3(this.btnSearchForTanks_mc,"Search for bubble tanks");
         this.btnEnterTankID_mc.addEventListener(MouseEvent.CLICK, this.EnterLargeTankID.bind(this));
         this.btnEnterTankCode_mc.addEventListener(MouseEvent.CLICK, this.method_135.bind(this));
         this.btnSearchForTanks_mc.addEventListener(MouseEvent.CLICK, this.method_434.bind(this));
         this.btnMyAvatar_mc.alpha = 0;
         this.var_8.method_4(this.btnViewLocalTanks_mc,true,this.method_532);
         this.var_39.push({
            "btn":this.btnViewLocalTanks_mc,
            "DescText":"Lets you view all tanks on all profiles"
         });
         if(this.DetailedTank_mc.btnLargeDelete_mc.alpha == 1)
         {
            this.method_3(this.DetailedTank_mc.btnLargeDelete_mc,"Delete this tank");
            this.DetailedTank_mc.btnLargeDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteLargeScreenTank.bind(this));
         }
         this.method_3(this.DetailedTank_mc.btnLargeBack_mc,"Return to small view");
         this.DetailedTank_mc.btnLargeBack_mc.addEventListener(MouseEvent.CLICK, this.method_117.bind(this));
         if(!this.var_22)
         {
            this.method_3(this.DetailedTank_mc.btnLargeEdit_mc,"Edit this tank!");
         }
         this.method_3(this.DetailedTank_mc.btnLargeSave,"Save this tank to your computer");
         this.method_3(this.DetailedTank_mc.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.DetailedTank_mc.btnLargeSave.addEventListener(MouseEvent.CLICK, this.SaveLargeTank.bind(this));
         if(!this.var_22)
         {
            this.DetailedTank_mc.btnLargeEdit_mc.addEventListener(MouseEvent.CLICK, this.EditLargeTank.bind(this));
         }
         this.DetailedTank_mc.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.CopyLargeTank.bind(this));
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar1_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.addEventListener(MouseEvent.CLICK, this.SelectStar1.bind(this));
         let _temp_3: any = this.DetailedTank_mc.btnStar1_mc;
         let _temp_2: any = this.DetailedTank_mc.btnStar1_mc;
         let _temp_1: any = true;
         true;
         _temp_2.buttonMode = _temp_1;
         _temp_3.useHandCursor = true;
         this.DetailedTank_mc.btnStar1_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar2_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.addEventListener(MouseEvent.CLICK, this.SelectStar2.bind(this));
         let _temp_4: any = this.DetailedTank_mc.btnStar2_mc;
         let _loc1_: boolean;
         this.DetailedTank_mc.btnStar2_mc.buttonMode = _loc1_ = true;
         _temp_4.useHandCursor = true;
         this.DetailedTank_mc.btnStar2_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar3_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.addEventListener(MouseEvent.CLICK, this.SelectStar3.bind(this));
         let _temp_5: any = this.DetailedTank_mc.btnStar3_mc;
         this.DetailedTank_mc.btnStar3_mc.buttonMode = _loc1_ = true;
         _temp_5.useHandCursor = true;
         this.DetailedTank_mc.btnStar3_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar4_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.addEventListener(MouseEvent.CLICK, this.SelectStar4.bind(this));
         let _temp_6: any = this.DetailedTank_mc.btnStar4_mc;
         this.DetailedTank_mc.btnStar4_mc.buttonMode = _loc1_ = true;
         _temp_6.useHandCursor = true;
         this.DetailedTank_mc.btnStar4_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar5_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.addEventListener(MouseEvent.CLICK, this.SelectStar5.bind(this));
         let _temp_7: any = this.DetailedTank_mc.btnStar5_mc;
         this.DetailedTank_mc.btnStar5_mc.buttonMode = _loc1_ = true;
         _temp_7.useHandCursor = true;
         this.DetailedTank_mc.btnStar5_mc.mouseChildren = false;
      }
      
      private Highlight1(param1: Event): void
      {
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(3);
      }
      
      private method_495(param1: Event): void
      {
         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener(MouseEvent.CLICK, this.method_171.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener(MouseEvent.CLICK, this.method_200.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private Highlight4(param1: Event): void
      {
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(3);
      }
      
      private Highlight5(param1: Event): void
      {
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(3);
      }
      
      private GoBackATank(param1: Event): void
      {
         this.DetailedTank_mc.btnCopy_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnCopy_mc.mouseEnabled = true;
         if(this.intCurrentLocationInTanksQueue >= 1)
         {
            --this.intCurrentLocationInTanksQueue;
         }
         this.TankLoad1_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]);
         this.DetailTheTank(this.TankLoad1_mc);
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad1_mc.mouseEnabled = false;
         this.method_148();
         if(this.intCurrentLocationInTanksQueue <= 0)
         {
            this.GreyOutBackButton();
            this.GreyOutFirstButton();
         }
         if(this.arrTanksInqueue.length > 1)
         {
            this.UnGreyOutNextButton();
         }
      }
      
      private method_23(): void
      {
         this.var_166 = Math.floor(this.arrTanksInqueue.length / 4);
         if(Math.floor(this.arrTanksInqueue.length / 4) != this.arrTanksInqueue.length / 4)
         {
            this.var_166 += 1;
         }
         this.txtPageNumCurrent_txt.text = "Page: " + this.var_36 + " out of: " + this.var_166;
         if(this.var_166 == 1)
         {
            this.GreyOutBackButton();
            this.GreyOutFirstButton();
            this.GreyOutNextButton();
         }
         if(this.var_36 == 1 && this.var_166 > 1)
         {
            this.UnGreyOutFirstButton();
         }
      }
      
      private Highlight3(param1: Event): void
      {
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(3);
      }
      
      private method_666(): any
      {
         this.txtExplination_txt.text = "";
         this.method_6(this.TankLoad1_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad1_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad1_mc.var_2.btnDelete_mc);
         this.TankLoad1_mc.var_2.btnDetails_mc.removeEventListener(MouseEvent.CLICK, this.Details1.bind(this));
         this.TankLoad1_mc.var_2.btnEdit_mc.removeEventListener(MouseEvent.CLICK, this.Edit1.bind(this));
         this.TankLoad1_mc.var_2.btnDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteTank1.bind(this));
         this.method_6(this.TankLoad2_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad2_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad2_mc.var_2.btnDelete_mc);
         this.TankLoad2_mc.var_2.btnDetails_mc.removeEventListener(MouseEvent.CLICK, this.Details2.bind(this));
         this.TankLoad2_mc.var_2.btnEdit_mc.removeEventListener(MouseEvent.CLICK, this.Edit2.bind(this));
         this.TankLoad2_mc.var_2.btnDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteTank2.bind(this));
         this.method_6(this.TankLoad3_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad3_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad3_mc.var_2.btnDelete_mc);
         this.TankLoad3_mc.var_2.btnDetails_mc.removeEventListener(MouseEvent.CLICK, this.Details3.bind(this));
         this.TankLoad3_mc.var_2.btnEdit_mc.removeEventListener(MouseEvent.CLICK, this.Edit3.bind(this));
         this.TankLoad3_mc.var_2.btnDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteTank3.bind(this));
         this.method_6(this.TankLoad4_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad4_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad4_mc.var_2.btnDelete_mc);
         this.TankLoad4_mc.var_2.btnDetails_mc.removeEventListener(MouseEvent.CLICK, this.Details4.bind(this));
         this.TankLoad4_mc.var_2.btnEdit_mc.removeEventListener(MouseEvent.CLICK, this.Edit4.bind(this));
         this.TankLoad4_mc.var_2.btnDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteTank4.bind(this));
         this.method_6(this.btnFirst_mc);
         this.method_6(this.btnPrev_mc);
         this.method_6(this.btnNext_mc);
         this.btnFirst_mc.removeEventListener(MouseEvent.CLICK, this.method_128.bind(this));
         this.btnPrev_mc.removeEventListener(MouseEvent.CLICK, this.method_124.bind(this));
         this.btnNext_mc.removeEventListener(MouseEvent.CLICK, this.method_105.bind(this));
         this.method_6(this.btnMainMenu_mc);
         this.method_6(this.btnSearchForTanks_mc);
         this.method_6(this.btnSortTanks_mc);
         this.method_6(this.btnEnterTankID_mc);
         this.method_6(this.btnEnterTankCode_mc);
         if(this.var_23 == null)
         {
            this.btnMainMenu_mc.removeEventListener(MouseEvent.CLICK, this.method_133.bind(this));
         }
         else
         {
            this.btnMainMenu_mc.removeEventListener(MouseEvent.CLICK, this.method_126.bind(this));
         }
         this.btnSearchForTanks_mc.removeEventListener(MouseEvent.CLICK, this.SearchForEnemySelectTanks.bind(this));
         this.btnSortTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_125.bind(this));
         this.btnEnterTankID_mc.removeEventListener(MouseEvent.CLICK, this.EnterTankID.bind(this));
         this.btnEnterTankCode_mc.removeEventListener(MouseEvent.CLICK, this.method_129.bind(this));
         this.var_8.method_10();
         this.var_39.length = 0;
         this.method_78();
      }
      
      private method_5(param1: any): any
      {
         this.method_223(param1);
         this.var_129.push(param1);
      }
      
      private method_223(param1: any): any
      {
         let _loc2_: any = 0;
         while(_loc2_ < this.var_129.length)
         {
            if(this.var_129[_loc2_] == param1)
            {
               this.var_129.splice(_loc2_,1);
               break;
            }
            _loc2_ += 1;
         }
         _loc2_ = 0;
         while(_loc2_ < this.var_130.length)
         {
            if(this.var_130[_loc2_] == param1)
            {
               this.var_130.splice(_loc2_,1);
               break;
            }
            _loc2_ += 1;
         }
         _loc2_ = 0;
         while(_loc2_ < this.var_116.length)
         {
            if(this.var_116[_loc2_] == param1)
            {
               this.var_116[_loc2_].DeleteTank();
               this.var_116.splice(_loc2_,1);
               break;
            }
            _loc2_ += 1;
         }
      }
      
      private method_164(param1: Event): void
      {
         let _loc2_: TankData = null;
         this.method_6(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.SearchForTanksScreen_mc.btnSubmit_mc.removeEventListener(MouseEvent.CLICK, this.method_164.bind(this));
         this.SearchForTanksScreen_mc.btnBack_mc.removeEventListener(MouseEvent.CLICK, this.method_247.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.arrTanksInqueue = new Array();
         _loc2_ = new TankData();
         if(_loc2_.ImportTankData(this.SearchForTanksScreen_mc.txtEnterID_txt.text))
         {
            this.arrTanksInqueue.push(_loc2_);
         }
         else
         {
            this.method_83(true);
         }
         this.ReturnToViewTanksFromSearch();
      }
      
      private method_237(param1: boolean = false): void
      {
         this.method_3(this.btnCurrentPoints_mc,"Your current profile stats and points");
         this.method_3(this.DetailedTank_mc.btnFlag_mc,"Is this tank inappropriate?  Flag it!");
         this.var_8.method_4(this.DetailedTank_mc.btnFlag_mc,true,this.FlagThisTank);
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         let _loc4_: number = 0;
         if(this.refMain.var_139)
         {
            _loc2_ = 12;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.gunPointsMax.method_29();
         }
         if(this.refMain.blnCheatClass)
         {
            _loc3_ = 6;
         }
         else
         {
            _loc3_ = this.refMain.objCurrentPlayer.maxClass.method_29();
         }
         if(this.refMain.var_132)
         {
            _loc4_ = 100;
         }
         else
         {
            _loc4_ = this.refMain.objCurrentPlayer.bubblePointsMax.method_29();
         }
         this.btnCurrentPoints_mc.txtClass_txt.text = _loc3_;
         this.btnCurrentPoints_mc.txtBBL_txt.text = _loc4_;
         this.btnCurrentPoints_mc.txtGP_txt.text = _loc2_;
         this.method_2(this.btnCreateATank_mc);
         if(this.var_70 == null)
         {
            this.method_689(param1);
            return;
         }
         if(this.var_70 == "Avatar")
         {
            this.method_730();
            return;
         }
         if(this.var_70 == "Enemy")
         {
            this.method_522();
            return;
         }
      }
      
      private GreyOutBackButton(): void
      {
         this.btnPrev_mc.mouseEnabled = false;
         this.btnPrev_mc.gotoAndStop(5);
      }
      
      private Save2(param1: Event): void
      {
         let _loc3_: any = undefined;
         let _loc4_: TankData = null;
         this.TankLoad2_mc.var_2.btnSave_mc.gotoAndStop(3);
         this.TankLoad2_mc.var_2.btnSave_mc.mouseEnabled = false;
         let _loc2_: TankData = new TankData();
         if(_loc2_.ImportTankData(this.TankLoad2_mc.sprTankData.ExportTankData()))
         {
            _loc3_ = 0;
            while(_loc3_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               _loc4_ = new TankData();
               _loc4_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_].Data);
               if(this.method_122(_loc2_,_loc4_))
               {
                  return;
               }
               _loc3_ += 1;
            }
            this.refMain.objCurrentPlayer.method_73(this.TankLoad2_mc.sprTankData.ExportTankData());
         }
         else
         {
            this.method_83(true);
         }
      }
      
      private Save4(param1: Event): void
      {
         let _loc3_: any = undefined;
         let _loc4_: TankData = null;
         this.TankLoad4_mc.var_2.btnSave_mc.gotoAndStop(3);
         this.TankLoad4_mc.var_2.btnSave_mc.mouseEnabled = false;
         let _loc2_: TankData = new TankData();
         if(_loc2_.ImportTankData(this.TankLoad4_mc.sprTankData.ExportTankData()))
         {
            _loc3_ = 0;
            while(_loc3_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               _loc4_ = new TankData();
               _loc4_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_].Data);
               if(this.method_122(_loc2_,_loc4_))
               {
                  return;
               }
               _loc3_ += 1;
            }
            this.refMain.objCurrentPlayer.method_73(this.TankLoad4_mc.sprTankData.ExportTankData());
         }
         else
         {
            this.method_83(true);
         }
      }
      
      private SelectableDown(param1: Event): void
      {
         if(param1.target.currentFrame == 2)
         {
            param1.target.gotoAndStop(4);
         }
         else if(param1.target.currentFrame == 4)
         {
            param1.target.gotoAndStop(2);
         }
      }
      
      private method_785(param1: Event): void
      {
         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener(MouseEvent.CLICK, this.method_190.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener(MouseEvent.CLICK, this.method_212.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private method_2(param1: any): any
      {
         this.method_223(param1);
         this.var_130.push(param1);
      }
      
      private method_98(): void
      {
         this.addEventListener(Event.ENTER_FRAME, this.method_91.bind(this));
         if(this.var_297)
         {
            if(this.TankLoad1_mc.var_15 != null)
            {
               this.TankLoad1_mc.btnTankSelect_mc.addEventListener(MouseEvent.CLICK, this.SelectTankToReturn1.bind(this));
               this.TankLoad1_mc.btnTankSelect_mc.useHandCursor = true;
               this.TankLoad1_mc.btnTankSelect_mc.buttonMode = true;
            }
            if(this.TankLoad2_mc.var_15 != null)
            {
               this.TankLoad2_mc.btnTankSelect_mc.addEventListener(MouseEvent.CLICK, this.SelectTankToReturn2.bind(this));
               this.TankLoad2_mc.btnTankSelect_mc.useHandCursor = true;
               this.TankLoad2_mc.btnTankSelect_mc.buttonMode = true;
            }
            if(this.TankLoad3_mc.var_15 != null)
            {
               this.TankLoad3_mc.btnTankSelect_mc.addEventListener(MouseEvent.CLICK, this.SelectTankToReturn3.bind(this));
               this.TankLoad3_mc.btnTankSelect_mc.useHandCursor = true;
               this.TankLoad3_mc.btnTankSelect_mc.buttonMode = true;
            }
            if(this.TankLoad4_mc.var_15 != null)
            {
               this.TankLoad4_mc.btnTankSelect_mc.addEventListener(MouseEvent.CLICK, this.SelectTankToReturn4.bind(this));
               this.TankLoad4_mc.btnTankSelect_mc.useHandCursor = true;
               this.TankLoad4_mc.btnTankSelect_mc.buttonMode = true;
            }
         }
      }
      
      private method_6(param1: any): void
      {
         param1.gotoAndStop(1);
         param1.removeEventListener(MouseEvent.MOUSE_OVER, this.method_107.bind(this));
         param1.removeEventListener(MouseEvent.MOUSE_OUT, this.method_112.bind(this));
         param1.mouseChildren = true;
         param1.buttonMode = false;
         param1.useHandCursor = false;
         this.var_39 = new Array();
      }
      
      private Highlight2(param1: Event): void
      {
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(3);
      }
      
      private method_9(param1: any): any
      {
         this.method_223(param1);
         this.var_116.push(param1);
      }
      
      private Save3(param1: Event): void
      {
         let _loc3_: any = undefined;
         let _loc4_: TankData = null;
         this.TankLoad3_mc.var_2.btnSave_mc.gotoAndStop(3);
         this.TankLoad3_mc.var_2.btnSave_mc.mouseEnabled = false;
         let _loc2_: TankData = new TankData();
         if(_loc2_.ImportTankData(this.TankLoad3_mc.sprTankData.ExportTankData()))
         {
            _loc3_ = 0;
            while(_loc3_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               _loc4_ = new TankData();
               _loc4_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_].Data);
               if(this.method_122(_loc2_,_loc4_))
               {
                  return;
               }
               _loc3_ += 1;
            }
            this.refMain.objCurrentPlayer.method_73(this.TankLoad3_mc.sprTankData.ExportTankData());
         }
         else
         {
            this.method_83(true);
         }
      }
      
      private SearchForAvatarSelectTanks(param1: Event): any
      {
         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.strSortType = "Avatar";
         this.method_147(param1);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private AvatarTanksButton(param1: Event): void
      {
         this.strSortType = "Avatar";
         this.method_147(param1);
      }
      
      private method_282(param1: Event): any
      {
         this.SearchForTanksScreen_mc.alpha = 0;
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_263.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_282.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.refMain.TransitionTankViewer2TankCreator(null,"Enemy");
         this.Destroy();
      }
      
      private method_212(param1: Event): void
      {
         this.method_43();
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_190.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_212.bind(this));
         this.strViewerType = "EnemyLocal";
         this.arrTanksInqueue = new Array();
         this.method_121();
         this.method_5(this.btnFirst_mc);
         this.method_5(this.btnPrev_mc);
         this.method_5(this.btnNext_mc);
         this.method_5(this.btnSearchForTanks_mc);
         this.method_5(this.btnEnterTankCode_mc);
         this.method_5(this.btnEnterTankID_mc);
         this.method_5(this.btnSortTanks_mc);
         this.method_5(this.btnMainMenu_mc);
         this.method_5(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_5(this.btnMyAvatar_mc);
         }
         if(!this.var_22)
         {
            this.method_5(this.btnCreateATank_mc);
         }
         this.method_5(this.btnCurrentPoints_mc);
         this.method_2(this.SearchForTanksScreen_mc);
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.TankLoad1_mc.mouseEnabled = true;
            this.TankLoad1_mc.mouseChildren = true;
            this.method_5(this.TankLoad1_mc);
         }
         else
         {
            this.TankLoad1_mc.mouseEnabled = false;
            this.TankLoad1_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.TankLoad2_mc.mouseEnabled = true;
            this.TankLoad2_mc.mouseChildren = true;
            this.method_5(this.TankLoad2_mc);
         }
         else
         {
            this.TankLoad2_mc.mouseEnabled = false;
            this.TankLoad2_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.TankLoad3_mc.mouseEnabled = true;
            this.TankLoad3_mc.mouseChildren = true;
            this.method_5(this.TankLoad3_mc);
         }
         else
         {
            this.TankLoad3_mc.mouseEnabled = false;
            this.TankLoad3_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.TankLoad4_mc.mouseEnabled = true;
            this.TankLoad4_mc.mouseChildren = true;
            this.method_5(this.TankLoad4_mc);
         }
         else
         {
            this.TankLoad4_mc.mouseEnabled = false;
            this.TankLoad4_mc.mouseChildren = false;
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.btnSortTanks_mc.x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      private Details1(param1: Event): void
      {
         this.TankLoad1_mc.lines_mc.alpha = 0;
         this.TankLoad1_mc.var_15.filters = new Array();
         this.DetailTheTank(this.TankLoad1_mc);
      }
      
      private Details2(param1: Event): void
      {
         this.TankLoad2_mc.lines_mc.alpha = 0;
         this.TankLoad2_mc.var_15.filters = new Array();
         this.intCurrentLocationInTanksQueue += 1;
         this.DetailTheTank(this.TankLoad2_mc);
      }
      
      private Details3(param1: Event): void
      {
         this.TankLoad3_mc.lines_mc.alpha = 0;
         this.TankLoad3_mc.var_15.filters = new Array();
         this.intCurrentLocationInTanksQueue += 2;
         this.DetailTheTank(this.TankLoad3_mc);
      }
      
      private Details4(param1: Event): void
      {
         this.TankLoad4_mc.lines_mc.alpha = 0;
         this.TankLoad4_mc.var_15.filters = new Array();
         this.intCurrentLocationInTanksQueue += 3;
         this.DetailTheTank(this.TankLoad4_mc);
      }
      
      private ReturnToViewTanksFromSearch(): void
      {
         this.var_76 = false;
         this.UnGreyOutNextButton();
         if(this.SearchForTanksScreen_mc.currentFrame == 2)
         {
            this.method_6(this.SearchForTanksScreen_mc.btnSearch_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnClass1_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnClass2_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnClass3_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnClass4_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnClass5_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnClass6_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnYes_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnNo_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnFeaturedYes_mc);
            this.method_77(this.SearchForTanksScreen_mc.btnFeaturedNo_mc);
            this.SearchForTanksScreen_mc.btnFeaturedYes_mc.removeEventListener(MouseEvent.CLICK, this.FeaturedYesDown.bind(this));
            this.SearchForTanksScreen_mc.btnFeaturedNo_mc.removeEventListener(MouseEvent.CLICK, this.FeaturedNoDown.bind(this));
            this.SearchForTanksScreen_mc.btnSearch_mc.removeEventListener(MouseEvent.CLICK, this.SearchForATank.bind(this));
            this.SearchForTanksScreen_mc.btnClass1_mc.removeEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
            this.SearchForTanksScreen_mc.btnClass2_mc.removeEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
            this.SearchForTanksScreen_mc.btnClass3_mc.removeEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
            this.SearchForTanksScreen_mc.btnClass4_mc.removeEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
            this.SearchForTanksScreen_mc.btnClass5_mc.removeEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
            this.SearchForTanksScreen_mc.btnClass6_mc.removeEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
            this.SearchForTanksScreen_mc.btnYes_mc.removeEventListener(MouseEvent.CLICK, this.HIYesDown.bind(this));
            this.SearchForTanksScreen_mc.btnNo_mc.removeEventListener(MouseEvent.CLICK, this.HINoDown.bind(this));
         }
         else if(this.SearchForTanksScreen_mc.currentFrame == 3)
         {
            this.method_6(this.SearchForTanksScreen_mc.btnSubmit_mc);
            this.SearchForTanksScreen_mc.btnSubmit_mc.removeEventListener(MouseEvent.CLICK, this.SubmitTankID.bind(this));
         }
         else if(this.SearchForTanksScreen_mc.currentFrame == 4)
         {
            this.method_6(this.SearchForTanksScreen_mc.btnSubmit_mc);
            this.SearchForTanksScreen_mc.btnSubmit_mc.removeEventListener(MouseEvent.CLICK, this.SubmitTankID.bind(this));
         }
         this.btnSortTanks_mc.x = 616.55;
         this.method_5(this.btnFirst_mc);
         this.method_5(this.btnPrev_mc);
         this.method_5(this.btnNext_mc);
         this.method_5(this.btnSearchForTanks_mc);
         this.method_5(this.btnEnterTankCode_mc);
         this.method_5(this.btnEnterTankID_mc);
         this.method_5(this.btnSortTanks_mc);
         this.method_5(this.btnMainMenu_mc);
         this.method_5(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_5(this.btnMyAvatar_mc);
         }
         if(!this.var_22)
         {
            this.method_5(this.btnCreateATank_mc);
         }
         this.method_5(this.btnCurrentPoints_mc);
         this.method_2(this.SearchForTanksScreen_mc);
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         if(this.arrTanksInqueue.length != 0)
         {
            this.method_24();
         }
         else
         {
            this.method_83(false);
         }
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.TankLoad1_mc.mouseEnabled = true;
            this.TankLoad1_mc.mouseChildren = true;
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.TankLoad2_mc.mouseEnabled = true;
            this.TankLoad2_mc.mouseChildren = true;
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.TankLoad3_mc.mouseEnabled = true;
            this.TankLoad3_mc.mouseChildren = true;
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.TankLoad4_mc.mouseEnabled = true;
            this.TankLoad4_mc.mouseChildren = true;
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         if(this.arrTanksInqueue.length > 1)
         {
            this.UnGreyOutNextButton();
         }
         this.method_33();
      }
      
      private FlagThisTank(param1: Event): any
      {
         this.DetailedTank_mc.btnFlag_mc.gotoAndStop(3);
         this.refMain.FlagAnID(this.DetailedTank_mc.sprTankData.strID);
         this.var_8.method_7(this.DetailedTank_mc.btnFlag_mc);
      }
      
      private EnterTankID(param1: Event): void
      {
         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(3);
         this.method_5(this.SearchForTanksScreen_mc);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnBack_mc);
         this.SearchForTanksScreen_mc.btnSubmit_mc.addEventListener(MouseEvent.CLICK, this.SubmitTankID.bind(this));
         this.SearchForTanksScreen_mc.btnBack_mc.addEventListener(MouseEvent.CLICK, this.method_161.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
      }
      
      private method_834(param1: Event): void
      {
         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.txtPageNumCurrent_txt.text = "";
         this.method_43();
         this.strViewerType = "AvatarLocal";
         this.arrTanksInqueue = new Array();
         this.method_121();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.btnSortTanks_mc.x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      private Save1(param1: Event): void
      {
         let _loc3_: any = undefined;
         let _loc4_: TankData = null;
         this.TankLoad1_mc.var_2.btnSave_mc.gotoAndStop(3);
         this.TankLoad1_mc.var_2.btnSave_mc.mouseEnabled = false;
         let _loc2_: TankData = new TankData();
         if(_loc2_.ImportTankData(this.TankLoad1_mc.sprTankData.ExportTankData()))
         {
            _loc3_ = 0;
            while(_loc3_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               _loc4_ = new TankData();
               _loc4_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_].Data);
               if(this.method_122(_loc2_,_loc4_))
               {
                  return;
               }
               _loc3_ += 1;
            }
            this.refMain.objCurrentPlayer.method_73(this.TankLoad1_mc.sprTankData.ExportTankData());
         }
         else
         {
            this.method_83(true);
         }
      }
      
      private SelectStar1(param1: Event): void
      {
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.RateTank(this.DetailedTank_mc.sprTankData.strID,1);
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar5.bind(this));
      }
      
      private method_24(param1: number = 1): void
      {
         let _loc2_: MovieClip = new MovieClip();
         let _loc3_: boolean = false;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.TankLoad1_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]);
            _loc3_ = true;
         }
         else
         {
            this.TankLoad1_mc.DeleteTank();
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.TankLoad2_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]);
            _loc3_ = true;
         }
         else
         {
            this.TankLoad2_mc.DeleteTank();
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.TankLoad3_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]);
            _loc3_ = true;
         }
         else
         {
            this.TankLoad3_mc.DeleteTank();
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.TankLoad4_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]);
            _loc3_ = true;
         }
         else
         {
            this.TankLoad4_mc.DeleteTank();
         }
         if(!_loc3_)
         {
            if(param1 == 1)
            {
               this.method_83(true);
            }
            else if(param1 == 2)
            {
               if(this.var_36 <= 1)
               {
                  this.method_83(true);
               }
            }
         }
      }
      
      private SelectStar5(param1: Event): void
      {
         this.RateTank(this.DetailedTank_mc.sprTankData.strID,5);
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar5.bind(this));
      }
      
      private method_543(): any
      {
         if(this.var_22)
         {
            this.TankLoad1_mc.var_2.btnEdit_mc.alpha = 0;
            this.TankLoad2_mc.var_2.btnEdit_mc.alpha = 0;
            this.TankLoad3_mc.var_2.btnEdit_mc.alpha = 0;
            this.TankLoad4_mc.var_2.btnEdit_mc.alpha = 0;
         }
         if(!this.var_22)
         {
            this.method_3(this.TankLoad1_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad1_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad1_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad1_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad1_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad1_mc.var_2.btnDetails_mc.addEventListener(MouseEvent.CLICK, this.Details1.bind(this));
         if(!this.var_22)
         {
            this.TankLoad1_mc.var_2.btnEdit_mc.addEventListener(MouseEvent.CLICK, this.Edit1.bind(this));
         }
         this.TankLoad1_mc.var_2.btnDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteTank1.bind(this));
         this.TankLoad1_mc.var_2.btnSave_mc.addEventListener(MouseEvent.CLICK, this.Save1.bind(this));
         this.TankLoad1_mc.var_2.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.Copy1.bind(this));
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(!this.var_22)
         {
            this.method_3(this.TankLoad2_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad2_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad2_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad2_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad2_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad2_mc.var_2.btnDetails_mc.addEventListener(MouseEvent.CLICK, this.Details2.bind(this));
         if(!this.var_22)
         {
            this.TankLoad2_mc.var_2.btnEdit_mc.addEventListener(MouseEvent.CLICK, this.Edit2.bind(this));
         }
         this.TankLoad2_mc.var_2.btnDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteTank2.bind(this));
         this.TankLoad2_mc.var_2.btnSave_mc.addEventListener(MouseEvent.CLICK, this.Save2.bind(this));
         this.TankLoad2_mc.var_2.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.Copy2.bind(this));
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(!this.var_22)
         {
            this.method_3(this.TankLoad3_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad3_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad3_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad3_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad3_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad3_mc.var_2.btnDetails_mc.addEventListener(MouseEvent.CLICK, this.Details3.bind(this));
         if(!this.var_22)
         {
            this.TankLoad3_mc.var_2.btnEdit_mc.addEventListener(MouseEvent.CLICK, this.Edit3.bind(this));
         }
         this.TankLoad3_mc.var_2.btnDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteTank3.bind(this));
         this.TankLoad3_mc.var_2.btnSave_mc.addEventListener(MouseEvent.CLICK, this.Save3.bind(this));
         this.TankLoad3_mc.var_2.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.Copy3.bind(this));
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(!this.var_22)
         {
            this.method_3(this.TankLoad4_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad4_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad4_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad4_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad4_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad4_mc.var_2.btnDetails_mc.addEventListener(MouseEvent.CLICK, this.Details4.bind(this));
         if(!this.var_22)
         {
            this.TankLoad4_mc.var_2.btnEdit_mc.addEventListener(MouseEvent.CLICK, this.Edit4.bind(this));
         }
         this.TankLoad4_mc.var_2.btnDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteTank4.bind(this));
         this.TankLoad4_mc.var_2.btnSave_mc.addEventListener(MouseEvent.CLICK, this.Save4.bind(this));
         this.TankLoad4_mc.var_2.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.Copy4.bind(this));
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.method_3(this.btnFirst_mc,"Return to first page tanks");
         }
         else
         {
            this.btnFirst_mc.gotoAndStop(5);
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.method_3(this.btnPrev_mc,"Return to previous page tanks");
         }
         else
         {
            this.btnPrev_mc.gotoAndStop(5);
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.method_3(this.btnNext_mc,"Go to next page of tanks");
         }
         else
         {
            this.btnNext_mc.gotoAndStop(5);
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.btnFirst_mc.addEventListener(MouseEvent.CLICK, this.method_128.bind(this));
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.btnPrev_mc.addEventListener(MouseEvent.CLICK, this.method_124.bind(this));
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.btnNext_mc.addEventListener(MouseEvent.CLICK, this.method_105.bind(this));
         }
         if(this.var_23 == null)
         {
            this.method_3(this.btnMainMenu_mc,"Return to the Main Menu");
            this.btnMainMenu_mc.addEventListener(MouseEvent.CLICK, this.method_133.bind(this));
         }
         else
         {
            this.method_3(this.btnMainMenu_mc,this.var_254);
            this.btnMainMenu_mc.addEventListener(MouseEvent.CLICK, this.method_126.bind(this));
         }
         this.method_3(this.btnSearchForTanks_mc,"Search for Avatar tanks");
         this.method_3(this.btnSortTanks_mc,"Sort your list of tanks by...");
         this.method_3(this.btnEnterTankID_mc,"Enter an existing tank ID");
         this.method_3(this.btnEnterTankCode_mc,"View tank from tank code");
         this.btnSearchForTanks_mc.addEventListener(MouseEvent.CLICK, this.SearchForAvatarSelectTanks.bind(this));
         this.btnSortTanks_mc.addEventListener(MouseEvent.CLICK, this.method_125.bind(this));
         this.btnEnterTankID_mc.addEventListener(MouseEvent.CLICK, this.EnterTankID.bind(this));
         this.btnEnterTankCode_mc.addEventListener(MouseEvent.CLICK, this.method_129.bind(this));
         this.var_8.method_4(this.btnViewLocalTanks_mc,true,this.ViewAllLocalAvatarSelectTanks);
         this.var_39.push({
            "btn":this.btnViewLocalTanks_mc,
            "DescText":"Lets you view all tanks on all profiles"
         });
         if(this.var_23 != null)
         {
            if(!this.var_22)
            {
               this.var_8.method_4(this.btnCreateATank_mc,true,this.method_289);
            }
            if(!this.var_22)
            {
               this.var_39.push({
                  "btn":this.btnCreateATank_mc,
                  "DescText":"Create a new tank!"
               });
            }
            this.var_8.method_4(this.btnMyAvatar_mc,true,this.ShowCurrentAvatar);
            this.var_39.push({
               "btn":this.btnMyAvatar_mc,
               "DescText":"See your currently selected player tank"
            });
            this.method_5(this.btnMyAvatar_mc);
         }
         this.method_98();
      }
      
      private HINoDown(param1: Event): void
      {
         this.SelectableDown(param1);
         this.SearchForTanksScreen_mc.btnYes_mc.gotoAndStop(1);
      }
      
      private method_620(param1: Event): void
      {
         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.txtPageNumCurrent_txt.text = "";
         this.method_43();
         this.strViewerType = "EnemyLocal";
         this.arrTanksInqueue = new Array();
         this.method_86();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.btnSortTanks_mc.x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      private SelectStar4(param1: Event): void
      {
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.RateTank(this.DetailedTank_mc.sprTankData.strID,4);
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar5.bind(this));
      }
      
      private method_444(param1: Event): any
      {
         if(this.Tutorial_mc.currentFrame != this.Tutorial_mc.totalFrames)
         {
            this.Tutorial_mc.gotoAndStop(this.Tutorial_mc.currentFrame + 1);
         }
         else
         {
            this.Tutorial_mc.next_mc.removeEventListener(MouseEvent.MOUSE_UP, this.method_444.bind(this));
            this.Tutorial_mc.back_mc.removeEventListener(MouseEvent.MOUSE_UP, this.method_377.bind(this));
            this.Tutorial_mc.alpha = 0;
            this.Tutorial_mc.mouseEnabled = false;
            this.Tutorial_mc.mouseChildren = false;
            this.refMain.objCurrentPlayer.var_253 = true;
            this.refMain.objCurrentPlayer.method_19();
            this.method_98();
            this.var_333.method_10();
         }
      }
      
      private method_289(param1: Event): any
      {
         let _loc2_: TankData = null;
         this.var_76 = true;
         this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
         if(this.var_70 == "")
         {
            this.SearchForTanksScreen_mc.gotoAndStop(1);
            this.method_5(this.SearchForTanksScreen_mc);
            this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
            this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
            this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener(MouseEvent.CLICK, this.method_263.bind(this));
            this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener(MouseEvent.CLICK, this.method_282.bind(this));
            this.SearchForTanksScreen_mc.mouseEnabled = true;
            this.SearchForTanksScreen_mc.mouseChildren = true;
         }
         else if(this.var_70 == "Avatar")
         {
            _loc2_ = new TankData();
            _loc2_.ImportTankData(this.refMain.objCurrentPlayer.currentAvatar);
            this.refMain.TransitionTankViewer2TankCreator(_loc2_,"Avatar");
            this.Destroy();
         }
         else if(this.var_70 == "Enemy")
         {
            this.refMain.TransitionTankViewer2TankCreator(null,"Enemy");
            this.Destroy();
         }
         else
         {
            this.refMain.TransitionTankViewer2TankCreator();
            this.Destroy();
         }
      }
      
      private method_522(): any
      {
         this.DetailedTank_mc.mouseEnabled = true;
         this.DetailedTank_mc.mouseChildren = true;
         this.DetailedTank_mc.largeTankStats_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.addEventListener(MouseEvent.MOUSE_OVER, this.method_118.bind(this));
         this.DetailedTank_mc.largeTankStats_mc.addEventListener(MouseEvent.MOUSE_OUT, this.method_136.bind(this));
         this.var_39.push({
            "btn":this.DetailedTank_mc.largeTankStats_mc,
            "DescText":"All the detailed information for the tank"
         });
         if(this.var_22)
         {
            this.DetailedTank_mc.btnLargeEdit_mc.alpha = 0;
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.method_3(this.btnFirst_mc,"Return to first page tanks");
         }
         else
         {
            this.btnFirst_mc.gotoAndStop(5);
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.method_3(this.btnPrev_mc,"Return to previous page tanks");
         }
         else
         {
            this.btnPrev_mc.gotoAndStop(5);
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.method_3(this.btnNext_mc,"Go to next page of tanks");
         }
         else
         {
            this.btnNext_mc.gotoAndStop(5);
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.btnFirst_mc.addEventListener(MouseEvent.CLICK, this.ReturnToFirstTank.bind(this));
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.btnPrev_mc.addEventListener(MouseEvent.CLICK, this.GoBackATank.bind(this));
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.btnNext_mc.addEventListener(MouseEvent.CLICK, this.GoToNextTank.bind(this));
         }
         if(this.var_23 == null)
         {
            this.method_3(this.btnMainMenu_mc,"Return to the Main Menu");
            this.btnMainMenu_mc.addEventListener(MouseEvent.CLICK, this.ReturnToMainMenuFromLargeView.bind(this));
         }
         else
         {
            this.method_3(this.btnMainMenu_mc,this.var_254);
            this.btnMainMenu_mc.addEventListener(MouseEvent.CLICK, this.method_127.bind(this));
         }
         this.method_3(this.btnEnterTankID_mc,"Enter an existing tank ID");
         this.method_3(this.btnEnterTankCode_mc,"View tank from tank code");
         this.method_3(this.btnSearchForTanks_mc,"Search for bubble tanks");
         this.btnMyAvatar_mc.alpha = 0;
         this.btnEnterTankID_mc.addEventListener(MouseEvent.CLICK, this.EnterLargeTankID.bind(this));
         this.btnEnterTankCode_mc.addEventListener(MouseEvent.CLICK, this.method_135.bind(this));
         this.btnSearchForTanks_mc.addEventListener(MouseEvent.CLICK, this.method_410.bind(this));
         this.var_8.method_4(this.btnViewLocalTanks_mc,true,this.method_620);
         this.var_39.push({
            "btn":this.btnViewLocalTanks_mc,
            "DescText":"Lets you view all tanks on all profiles"
         });
         if(this.DetailedTank_mc.btnLargeDelete_mc.alpha == 1)
         {
            this.method_3(this.DetailedTank_mc.btnLargeDelete_mc,"Delete this tank");
            this.DetailedTank_mc.btnLargeDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteLargeScreenTank.bind(this));
         }
         this.method_3(this.DetailedTank_mc.btnLargeBack_mc,"Return to small view");
         this.DetailedTank_mc.btnLargeBack_mc.addEventListener(MouseEvent.CLICK, this.method_117.bind(this));
         if(!this.var_22)
         {
            this.method_3(this.DetailedTank_mc.btnLargeEdit_mc,"Edit this tank!");
         }
         this.method_3(this.DetailedTank_mc.btnLargeSave,"Save this tank to your computer");
         this.method_3(this.DetailedTank_mc.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.DetailedTank_mc.btnLargeSave.addEventListener(MouseEvent.CLICK, this.SaveLargeTank.bind(this));
         if(!this.var_22)
         {
            this.DetailedTank_mc.btnLargeEdit_mc.addEventListener(MouseEvent.CLICK, this.EditLargeTank.bind(this));
         }
         this.DetailedTank_mc.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.CopyLargeTank.bind(this));
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar1_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.addEventListener(MouseEvent.CLICK, this.SelectStar1.bind(this));
         let _temp_3: any = this.DetailedTank_mc.btnStar1_mc;
         let _temp_2: any = this.DetailedTank_mc.btnStar1_mc;
         let _temp_1: any = true;
         true;
         _temp_2.buttonMode = _temp_1;
         _temp_3.useHandCursor = true;
         this.DetailedTank_mc.btnStar1_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar2_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.addEventListener(MouseEvent.CLICK, this.SelectStar2.bind(this));
         let _temp_4: any = this.DetailedTank_mc.btnStar2_mc;
         let _loc1_: boolean;
         this.DetailedTank_mc.btnStar2_mc.buttonMode = _loc1_ = true;
         _temp_4.useHandCursor = true;
         this.DetailedTank_mc.btnStar2_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar3_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.addEventListener(MouseEvent.CLICK, this.SelectStar3.bind(this));
         let _temp_5: any = this.DetailedTank_mc.btnStar3_mc;
         this.DetailedTank_mc.btnStar3_mc.buttonMode = _loc1_ = true;
         _temp_5.useHandCursor = true;
         this.DetailedTank_mc.btnStar3_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar4_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.addEventListener(MouseEvent.CLICK, this.SelectStar4.bind(this));
         let _temp_6: any = this.DetailedTank_mc.btnStar4_mc;
         this.DetailedTank_mc.btnStar4_mc.buttonMode = _loc1_ = true;
         _temp_6.useHandCursor = true;
         this.DetailedTank_mc.btnStar4_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar5_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.addEventListener(MouseEvent.CLICK, this.SelectStar5.bind(this));
         let _temp_7: any = this.DetailedTank_mc.btnStar5_mc;
         this.DetailedTank_mc.btnStar5_mc.buttonMode = _loc1_ = true;
         _temp_7.useHandCursor = true;
         this.DetailedTank_mc.btnStar5_mc.mouseChildren = false;
      }
      
      private method_127(param1: Event): void
      {
         this.method_47();
         this.Destroy();
         this.var_23();
      }
      
      private method_135(param1: Event): void
      {
         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(4);
         this.method_5(this.SearchForTanksScreen_mc);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCurrentPoints_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnBack_mc);
         this.SearchForTanksScreen_mc.btnSubmit_mc.addEventListener(MouseEvent.CLICK, this.method_164.bind(this));
         this.SearchForTanksScreen_mc.btnBack_mc.addEventListener(MouseEvent.CLICK, this.method_247.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
      }
      
      private method_20(param1: Event): void
      {
         param1.target.text = "";
         param1.target.removeEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
      }
      
      private SelectStar2(param1: Event): void
      {
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.RateTank(this.DetailedTank_mc.sprTankData.strID,2);
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar5.bind(this));
      }
      
      private SelectStar3(param1: Event): void
      {
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.RateTank(this.DetailedTank_mc.sprTankData.strID,3);
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar5.bind(this));
      }
      
      private ViewCurrentProfileAvatarSelectTanks(param1: Event): any
      {
         this.method_43();
         this.var_76 = true;
         this.txtPageNumCurrent_txt.text = "";
         this.strViewerType = "AvatarLocal";
         this.arrTanksInqueue = new Array();
         this.method_121();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.TankLoad1_mc.mouseEnabled = true;
            this.TankLoad1_mc.mouseChildren = true;
            this.method_5(this.TankLoad1_mc);
         }
         else
         {
            this.TankLoad1_mc.mouseEnabled = false;
            this.TankLoad1_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.TankLoad2_mc.mouseEnabled = true;
            this.TankLoad2_mc.mouseChildren = true;
            this.method_5(this.TankLoad2_mc);
         }
         else
         {
            this.TankLoad2_mc.mouseEnabled = false;
            this.TankLoad2_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.TankLoad3_mc.mouseEnabled = true;
            this.TankLoad3_mc.mouseChildren = true;
            this.method_5(this.TankLoad3_mc);
         }
         else
         {
            this.TankLoad3_mc.mouseEnabled = false;
            this.TankLoad3_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.TankLoad4_mc.mouseEnabled = true;
            this.TankLoad4_mc.mouseChildren = true;
            this.method_5(this.TankLoad4_mc);
         }
         else
         {
            this.TankLoad4_mc.mouseEnabled = false;
            this.TankLoad4_mc.mouseChildren = false;
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.btnSortTanks_mc.x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
      }
      
      private SelectTankToReturn1(param1: Event): void
      {
         let _loc2_: MovieClip = null;
         if(this.var_70 == "Enemy" && this.var_174 || !this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]))
         {
            this.removeEventListener(Event.ENTER_FRAME, this.method_91.bind(this));
            this.TankLoad1_mc.lines_mc.alpha = 0;
            this.TankLoad1_mc.var_15.filters = new Array();
            this.method_163(this.TankLoad1_mc.sprTankData);
         }
         else
         {
            _loc2_ = this.var_154.method_60(new class_60(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]);
               }
            }
         }
      }
      
      private SelectTankToReturn3(param1: Event): void
      {
         let _loc2_: MovieClip = null;
         if(this.var_70 == "Enemy" && this.var_174 || !this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]))
         {
            this.method_163(this.TankLoad3_mc.sprTankData);
            this.TankLoad3_mc.lines_mc.alpha = 0;
            this.TankLoad3_mc.var_15.filters = new Array();
            this.removeEventListener(Event.ENTER_FRAME, this.method_91.bind(this));
         }
         else
         {
            _loc2_ = this.var_154.method_60(new class_60(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]);
               }
            }
         }
      }
      
      private method_247(param1: Event): void
      {
         this.method_6(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnBack_mc);
         this.SearchForTanksScreen_mc.btnSubmit_mc.removeEventListener(MouseEvent.CLICK, this.method_164.bind(this));
         this.SearchForTanksScreen_mc.btnBack_mc.removeEventListener(MouseEvent.CLICK, this.method_247.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ReturnToViewTanksFromSearch();
      }
      
      private method_481(): void
      {
         this.txtExplination_txt.text = "";
         this.method_6(this.TankLoad1_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad1_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad1_mc.var_2.btnDelete_mc);
         this.TankLoad1_mc.var_2.btnDetails_mc.removeEventListener(MouseEvent.CLICK, this.Details1.bind(this));
         this.TankLoad1_mc.var_2.btnEdit_mc.removeEventListener(MouseEvent.CLICK, this.Edit1.bind(this));
         this.TankLoad1_mc.var_2.btnDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteTank1.bind(this));
         this.method_6(this.TankLoad2_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad2_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad2_mc.var_2.btnDelete_mc);
         this.TankLoad2_mc.var_2.btnDetails_mc.removeEventListener(MouseEvent.CLICK, this.Details2.bind(this));
         this.TankLoad2_mc.var_2.btnEdit_mc.removeEventListener(MouseEvent.CLICK, this.Edit2.bind(this));
         this.TankLoad2_mc.var_2.btnDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteTank2.bind(this));
         this.method_6(this.TankLoad3_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad3_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad3_mc.var_2.btnDelete_mc);
         this.TankLoad3_mc.var_2.btnDetails_mc.removeEventListener(MouseEvent.CLICK, this.Details3.bind(this));
         this.TankLoad3_mc.var_2.btnEdit_mc.removeEventListener(MouseEvent.CLICK, this.Edit3.bind(this));
         this.TankLoad3_mc.var_2.btnDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteTank3.bind(this));
         this.method_6(this.TankLoad4_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad4_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad4_mc.var_2.btnDelete_mc);
         this.TankLoad4_mc.var_2.btnDetails_mc.removeEventListener(MouseEvent.CLICK, this.Details4.bind(this));
         this.TankLoad4_mc.var_2.btnEdit_mc.removeEventListener(MouseEvent.CLICK, this.Edit4.bind(this));
         this.TankLoad4_mc.var_2.btnDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteTank4.bind(this));
         this.method_6(this.btnFirst_mc);
         this.method_6(this.btnPrev_mc);
         this.method_6(this.btnNext_mc);
         this.btnFirst_mc.removeEventListener(MouseEvent.CLICK, this.method_128.bind(this));
         this.btnPrev_mc.removeEventListener(MouseEvent.CLICK, this.method_124.bind(this));
         this.btnNext_mc.removeEventListener(MouseEvent.CLICK, this.method_105.bind(this));
         this.method_6(this.btnMainMenu_mc);
         this.method_6(this.btnSearchForTanks_mc);
         this.method_6(this.btnSortTanks_mc);
         this.method_6(this.btnEnterTankID_mc);
         this.method_6(this.btnEnterTankCode_mc);
         if(this.var_23 == null)
         {
            this.btnMainMenu_mc.removeEventListener(MouseEvent.CLICK, this.method_133.bind(this));
         }
         else
         {
            this.btnMainMenu_mc.removeEventListener(MouseEvent.CLICK, this.method_126.bind(this));
         }
         this.btnSearchForTanks_mc.removeEventListener(MouseEvent.CLICK, this.SearchForTanks.bind(this));
         this.btnSortTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_125.bind(this));
         this.btnEnterTankID_mc.removeEventListener(MouseEvent.CLICK, this.EnterTankID.bind(this));
         this.btnEnterTankCode_mc.removeEventListener(MouseEvent.CLICK, this.method_129.bind(this));
         this.var_8.method_10();
         this.var_39.length = 0;
         this.method_78();
      }
      
      private SearchForEnemySelectTanks(param1: Event): any
      {
         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.strSortType = "Enemy";
         this.method_147(param1);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private method_735(param1: Event): void
      {
         if(param1.target.currentFrame != param1.target.totalFrames)
         {
            param1.target.gotoAndStop(param1.target.currentFrame + 1);
         }
         else
         {
            param1.target.gotoAndStop(1);
         }
      }
      
      private method_83(param1: boolean): void
      {
         let _loc2_: string = "";
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.GreyOutNextButton();
         this.NotifyScreen_mc.mouseEnabled = true;
         _loc2_ = "The tank(s) you\'ve requested could not be loaded.";
         this.method_5(this.NotifyScreen_mc);
         this.NotifyScreen_mc.txtDisplayMessage_txt.text = _loc2_;
         this.NotifyScreen_mc.addEventListener(MouseEvent.CLICK, this.method_475.bind(this));
         this.NotifyScreen_mc.mouseChildren = false;
         this.var_297 = false;
      }
      
      private method_157(): void
      {
         let _loc1_: Record<string, any> = this.method_496(this.DetailedTank_mc.sprTankData.arrTankDetails);
         this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.bubblesLeft_txt.text = this.DetailedTank_mc.sprTankData.numBubbles;
         this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.gunPoints_txt.text = this.DetailedTank_mc.sprTankData.numGunPoints;
         this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.class_txt.text = this.DetailedTank_mc.sprTankData.numClass;
         if(this.DetailedTank_mc.sprTankData.blnAvatarTank == false)
         {
            this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.primary_txt.text = _loc1_.strEnemyWeapons;
            this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.PrimarySecondary_txt.text = "Enemy Weapons";
            this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.secondary_txt.text = "";
            this.DetailedTank_mc.txtBubblesReturned_txt.text = "Bubbles Returned: " + this.DetailedTank_mc.sprTankData.numBubblesReturned;
            this.DetailedTank_mc.txtHealth_txt.text = "Health: " + this.DetailedTank_mc.sprTankData.numLife;
            this.DetailedTank_mc.txtSpeed_txt.text = "Speed: " + this.DetailedTank_mc.sprTankData.numSpeed;
            this.DetailedTank_mc.txtDiffRating_txt.text = "Difficulty Rating: " + this.DetailedTank_mc.sprTankData.numDifficultyRating;
         }
         else
         {
            this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.primary_txt.text = _loc1_.strPrimary;
            this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.secondary_txt.text = _loc1_.strSecondary;
            this.DetailedTank_mc.largeTankStats_mc.textBoxes_mc.PrimarySecondary_txt.text = this.strPrimarySecondary;
            this.DetailedTank_mc.txtBubblesReturned_txt.text = "";
            this.DetailedTank_mc.txtHealth_txt.text = "";
            this.DetailedTank_mc.txtSpeed_txt.text = "";
            this.DetailedTank_mc.txtDiffRating_txt.text = "";
         }
         this.DetailedTank_mc.txtTankID_txt.text = "Tank ID: " + this.DetailedTank_mc.sprTankData.strID;
      }
      
      private method_91(param1: Event): void
      {
         if(this.var_297)
         {
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
            {
               if(this.TankLoad1_mc.hitTestPoint(stage.mouseX,stage.mouseY,true))
               {
                  if(this.TankLoad1_mc.lines_mc.alpha != 1)
                  {
                     this.TankLoad1_mc.lines_mc.alpha = 1;
                     this.TankLoad1_mc.var_15.filters = new Array(new GlowFilter(16777215,0.1,28,28,3,3));
                  }
                  if(this.TankLoad1_mc.var_250 == false)
                  {
                     if(!this.var_174)
                     {
                        if(this.TankLoad1_mc.var_2.CautionSign_mc.alpha < 0.9)
                        {
                           this.TankLoad1_mc.var_2.CautionSign_mc.alpha += 0.05;
                        }
                     }
                  }
               }
               else
               {
                  if(this.TankLoad1_mc.lines_mc.alpha != 0)
                  {
                     this.TankLoad1_mc.lines_mc.alpha = 0;
                     this.TankLoad1_mc.var_15.filters = new Array();
                  }
                  if(this.TankLoad1_mc.var_2.CautionSign_mc.alpha > 0)
                  {
                     this.TankLoad1_mc.var_2.CautionSign_mc.alpha -= 0.1;
                  }
               }
            }
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
            {
               if(this.TankLoad2_mc.hitTestPoint(stage.mouseX,stage.mouseY,true))
               {
                  if(this.TankLoad2_mc.lines_mc.alpha != 1)
                  {
                     this.TankLoad2_mc.lines_mc.alpha = 1;
                     this.TankLoad2_mc.var_15.filters = new Array(new GlowFilter(16777215,0.1,28,28,3,3));
                  }
                  if(this.TankLoad2_mc.var_250 == false)
                  {
                     if(!this.var_174)
                     {
                        if(!this.var_174)
                        {
                           if(this.TankLoad2_mc.var_2.CautionSign_mc.alpha < 0.9)
                           {
                              this.TankLoad2_mc.var_2.CautionSign_mc.alpha += 0.05;
                           }
                        }
                     }
                  }
               }
               else
               {
                  if(this.TankLoad2_mc.lines_mc.alpha != 0)
                  {
                     this.TankLoad2_mc.lines_mc.alpha = 0;
                     this.TankLoad2_mc.var_15.filters = new Array();
                  }
                  if(this.TankLoad2_mc.var_2.CautionSign_mc.alpha > 0)
                  {
                     this.TankLoad2_mc.var_2.CautionSign_mc.alpha -= 0.1;
                  }
               }
            }
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
            {
               if(this.TankLoad3_mc.hitTestPoint(stage.mouseX,stage.mouseY,true))
               {
                  if(this.TankLoad3_mc.lines_mc.alpha != 1)
                  {
                     this.TankLoad3_mc.lines_mc.alpha = 1;
                     this.TankLoad3_mc.var_15.filters = new Array(new GlowFilter(16777215,0.1,28,28,3,3));
                  }
                  if(this.TankLoad3_mc.var_250 == false)
                  {
                     if(!this.var_174)
                     {
                        if(this.TankLoad3_mc.var_2.CautionSign_mc.alpha < 0.9)
                        {
                           this.TankLoad3_mc.var_2.CautionSign_mc.alpha += 0.05;
                        }
                     }
                  }
               }
               else
               {
                  if(this.TankLoad3_mc.lines_mc.alpha != 0)
                  {
                     this.TankLoad3_mc.lines_mc.alpha = 0;
                     this.TankLoad3_mc.var_15.filters = new Array();
                  }
                  if(this.TankLoad3_mc.var_2.CautionSign_mc.alpha > 0)
                  {
                     this.TankLoad3_mc.var_2.CautionSign_mc.alpha -= 0.1;
                  }
               }
            }
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
            {
               if(this.TankLoad4_mc.hitTestPoint(stage.mouseX,stage.mouseY,true))
               {
                  if(this.TankLoad4_mc.lines_mc.alpha != 1)
                  {
                     this.TankLoad4_mc.lines_mc.alpha = 1;
                     this.TankLoad4_mc.var_15.filters = new Array(new GlowFilter(16777215,0.1,28,28,3,3));
                  }
                  if(this.TankLoad4_mc.var_250 == false)
                  {
                     if(!this.var_174)
                     {
                        if(this.TankLoad4_mc.var_2.CautionSign_mc.alpha < 0.9)
                        {
                           this.TankLoad4_mc.var_2.CautionSign_mc.alpha += 0.05;
                        }
                     }
                  }
               }
               else
               {
                  if(this.TankLoad4_mc.lines_mc.alpha != 0)
                  {
                     this.TankLoad4_mc.lines_mc.alpha = 0;
                     this.TankLoad4_mc.var_15.filters = new Array();
                  }
                  if(this.TankLoad4_mc.var_2.CautionSign_mc.alpha > 0)
                  {
                     this.TankLoad4_mc.var_2.CautionSign_mc.alpha -= 0.1;
                  }
               }
            }
         }
      }
      
      private UnGreyOutBackButton(): void
      {
         this.btnPrev_mc.mouseEnabled = true;
         this.btnPrev_mc.gotoAndStop(1);
         this.btnPrev_mc.buttonMode = true;
         this.btnPrev_mc.useHandCursor = true;
      }
      
      private method_77(param1: any): void
      {
         param1.gotoAndStop(1);
         param1.removeEventListener(MouseEvent.MOUSE_OVER, this.method_313.bind(this));
         param1.removeEventListener(MouseEvent.MOUSE_OUT, this.method_420.bind(this));
         param1.mouseChildren = true;
         param1.buttonMode = false;
         param1.useHandCursor = false;
         this.var_39 = new Array();
      }
      
      private SelectTankToReturn4(param1: Event): void
      {
         let _loc2_: MovieClip = null;
         if(this.var_70 == "Enemy" && this.var_174 || !this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]))
         {
            this.method_163(this.TankLoad4_mc.sprTankData);
            this.TankLoad4_mc.lines_mc.alpha = 0;
            this.TankLoad4_mc.var_15.filters = new Array();
            this.removeEventListener(Event.ENTER_FRAME, this.method_91.bind(this));
         }
         else
         {
            _loc2_ = this.var_154.method_60(new class_60(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]);
               }
            }
         }
      }
      
      private method_86(): void
      {
         let _loc1_: number = NaN;
         undefined;
         null;
         0;
         this.PullTanksFromCurrentPlayerProfile();
      }
      
      private method_811(param1: TankData, param2: number): void
      {
         let _loc3_: PlayerProfile = null;
         undefined;
         let _loc5_: TankData = null;
         let _loc6_: any = undefined;
         let _loc7_: any = undefined;
         _loc3_ = this.refMain.objCurrentPlayer;
         _loc6_ = 0;
         while(_loc6_ < _loc3_.arrSavedTanks.length)
         {
            _loc5_ = new TankData();
            _loc5_.ImportTankData(_loc3_.arrSavedTanks[_loc6_].Data);
            if(this.method_122(_loc5_,param1))
            {
               _loc3_.arrSavedTanks[_loc6_].blnShowInSearch = "false";
               break;
            }
            _loc6_ += 1;
         }
         if(param1.strID.substr(0,1) == "L")
         {
            _loc6_ = 0;
            while(_loc6_ < _loc3_.var_38.length)
            {
               if(_loc3_.var_38[_loc6_].ID.substr(0,1) == "H")
               {
                  _loc7_ = 0;
                  while(_loc7_ < _loc3_.var_38[_loc6_].AllTanks.length)
                  {
                     if(param1.strID == _loc3_.var_38[_loc6_].AllTanks[_loc7_])
                     {
                        _loc3_.var_38.splice(_loc6_,1);
                        break;
                     }
                     _loc7_++;
                  }
               }
               _loc6_++;
            }
         }
         _loc3_.method_19();
      }
      
      private SelectTankToReturn2(param1: Event): void
      {
         let _loc2_: MovieClip = null;
         if(this.var_70 == "Enemy" && this.var_174 || !this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]))
         {
            this.method_163(this.TankLoad2_mc.sprTankData);
            this.TankLoad2_mc.lines_mc.alpha = 0;
            this.TankLoad2_mc.var_15.filters = new Array();
            this.removeEventListener(Event.ENTER_FRAME, this.method_91.bind(this));
         }
         else
         {
            _loc2_ = this.var_154.method_60(new class_60(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]);
               }
            }
         }
      }
      
      private CopyLargeTank(param1: Event): void
      {
         System.setClipboard(this.DetailedTank_mc.sprTankData.ExportTankData());
         this.DetailedTank_mc.btnCopy_mc.gotoAndStop(5);
         this.DetailedTank_mc.btnCopy_mc.mouseEnabled = false;
      }
      
      private method_835(param1: Event): void
      {
         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.txtPageNumCurrent_txt.text = "";
         this.method_43();
         this.strViewerType = "EnemyLocal";
         this.arrTanksInqueue = new Array();
         this.method_121();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.btnSortTanks_mc.x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      private GreyOutFirstButton(): void
      {
         this.btnFirst_mc.mouseEnabled = false;
         this.btnFirst_mc.gotoAndStop(5);
      }
      
      private method_689(param1: boolean = false): any
      {
         this.DetailedTank_mc.mouseEnabled = true;
         this.DetailedTank_mc.mouseChildren = true;
         this.DetailedTank_mc.largeTankStats_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.addEventListener(MouseEvent.MOUSE_OVER, this.method_118.bind(this));
         this.DetailedTank_mc.largeTankStats_mc.addEventListener(MouseEvent.MOUSE_OUT, this.method_136.bind(this));
         this.var_39.push({
            "btn":this.DetailedTank_mc.largeTankStats_mc,
            "DescText":"All the detailed information for the tank"
         });
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.method_3(this.btnFirst_mc,"Return to first page tanks");
         }
         else
         {
            this.btnFirst_mc.gotoAndStop(5);
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.method_3(this.btnPrev_mc,"Return to previous page tanks");
         }
         else
         {
            this.btnPrev_mc.gotoAndStop(5);
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.method_3(this.btnNext_mc,"Go to next page of tanks");
         }
         else
         {
            this.btnNext_mc.gotoAndStop(5);
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.btnFirst_mc.addEventListener(MouseEvent.CLICK, this.ReturnToFirstTank.bind(this));
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.btnPrev_mc.addEventListener(MouseEvent.CLICK, this.GoBackATank.bind(this));
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.btnNext_mc.addEventListener(MouseEvent.CLICK, this.GoToNextTank.bind(this));
         }
         if(param1 || this.var_23 == null)
         {
            this.method_3(this.btnMainMenu_mc,"Return to the Main Menu");
            this.btnMainMenu_mc.addEventListener(MouseEvent.CLICK, this.ReturnToMainMenuFromLargeView.bind(this));
         }
         else
         {
            this.method_3(this.btnMainMenu_mc,this.var_254);
            this.btnMainMenu_mc.addEventListener(MouseEvent.CLICK, this.method_127.bind(this));
         }
         this.method_3(this.btnEnterTankID_mc,"Enter an existing tank ID");
         this.method_3(this.btnEnterTankCode_mc,"View tank from tank code");
         this.method_3(this.btnSearchForTanks_mc,"Search for bubble tanks");
         this.btnMyAvatar_mc.alpha = 0;
         this.btnEnterTankID_mc.addEventListener(MouseEvent.CLICK, this.EnterLargeTankID.bind(this));
         this.btnEnterTankCode_mc.addEventListener(MouseEvent.CLICK, this.method_135.bind(this));
         this.btnSearchForTanks_mc.addEventListener(MouseEvent.CLICK, this.method_364.bind(this));
         this.var_8.method_4(this.btnViewLocalTanks_mc,true,this.method_495);
         this.var_39.push({
            "btn":this.btnViewLocalTanks_mc,
            "DescText":"Lets you view all tanks on all profiles"
         });
         if(this.DetailedTank_mc.btnLargeDelete_mc.alpha == 1)
         {
            this.method_3(this.DetailedTank_mc.btnLargeDelete_mc,"Delete this tank");
            this.DetailedTank_mc.btnLargeDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteLargeScreenTank.bind(this));
         }
         this.method_3(this.DetailedTank_mc.btnLargeBack_mc,"Return to small view");
         this.DetailedTank_mc.btnLargeBack_mc.addEventListener(MouseEvent.CLICK, this.method_117.bind(this));
         if(this.var_23 == null || this.var_22)
         {
            this.DetailedTank_mc.btnLargeEdit_mc.alpha = 0;
         }
         if(this.var_23 != null && !this.var_22)
         {
            this.method_3(this.DetailedTank_mc.btnLargeEdit_mc,"Edit this tank!");
         }
         this.method_3(this.DetailedTank_mc.btnLargeSave,"Save this tank to your computer");
         this.method_3(this.DetailedTank_mc.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.DetailedTank_mc.btnLargeSave.addEventListener(MouseEvent.CLICK, this.SaveLargeTank.bind(this));
         if(this.var_23 != null && !this.var_22)
         {
            this.DetailedTank_mc.btnLargeEdit_mc.addEventListener(MouseEvent.CLICK, this.EditLargeTank.bind(this));
         }
         this.DetailedTank_mc.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.CopyLargeTank.bind(this));
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar1_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.addEventListener(MouseEvent.CLICK, this.SelectStar1.bind(this));
         let _temp_7: any = this.DetailedTank_mc.btnStar1_mc;
         let _temp_6: any = this.DetailedTank_mc.btnStar1_mc;
         let _temp_5: any = true;
         true;
         _temp_6.buttonMode = _temp_5;
         _temp_7.useHandCursor = true;
         this.DetailedTank_mc.btnStar1_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar2_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.addEventListener(MouseEvent.CLICK, this.SelectStar2.bind(this));
         let _temp_8: any = this.DetailedTank_mc.btnStar2_mc;
         let _loc2_: boolean;
         this.DetailedTank_mc.btnStar2_mc.buttonMode = _loc2_ = true;
         _temp_8.useHandCursor = true;
         this.DetailedTank_mc.btnStar2_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar3_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.addEventListener(MouseEvent.CLICK, this.SelectStar3.bind(this));
         let _temp_9: any = this.DetailedTank_mc.btnStar3_mc;
         this.DetailedTank_mc.btnStar3_mc.buttonMode = _loc2_ = true;
         _temp_9.useHandCursor = true;
         this.DetailedTank_mc.btnStar3_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar4_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.addEventListener(MouseEvent.CLICK, this.SelectStar4.bind(this));
         let _temp_10: any = this.DetailedTank_mc.btnStar4_mc;
         this.DetailedTank_mc.btnStar4_mc.buttonMode = _loc2_ = true;
         _temp_10.useHandCursor = true;
         this.DetailedTank_mc.btnStar4_mc.mouseChildren = false;
         this.DetailedTank_mc.btnStar5_mc.addEventListener(MouseEvent.MOUSE_OVER, this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.addEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.addEventListener(MouseEvent.CLICK, this.SelectStar5.bind(this));
         let _temp_11: any = this.DetailedTank_mc.btnStar5_mc;
         this.DetailedTank_mc.btnStar5_mc.buttonMode = _loc2_ = true;
         _temp_11.useHandCursor = true;
         this.DetailedTank_mc.btnStar5_mc.mouseChildren = false;
      }
      
      private method_125(param1: Event): void
      {
         let _loc2_: any[] = new Array();
         let _loc3_: TankData = new TankData();
         let _loc4_: number = 0;
         if(this.btnSortTanks_mc.containerButtons_mc.btnSortByName_mc.hitTestPoint(stage.mouseX,stage.mouseY))
         {
            _loc4_ = 0;
            while(_loc4_ < this.arrTanksInqueue.length)
            {
               _loc3_ = this.arrTanksInqueue[_loc4_];
               _loc2_.push({
                  "intLoc":_loc4_,
                  "data":_loc3_.strTankName
               });
               _loc4_ += 1;
            }
            _loc2_.sortOn("data",Array.CASEINSENSITIVE);
         }
         else if(this.btnSortTanks_mc.containerButtons_mc.btnSortByAuthor_mc.hitTestPoint(stage.mouseX,stage.mouseY))
         {
            _loc4_ = 0;
            while(_loc4_ < this.arrTanksInqueue.length)
            {
               _loc3_ = this.arrTanksInqueue[_loc4_];
               _loc2_.push({
                  "intLoc":_loc4_,
                  "data":_loc3_.strAuthorName
               });
               _loc4_ += 1;
            }
            _loc2_.sortOn("data",Array.CASEINSENSITIVE);
         }
         else if(this.btnSortTanks_mc.containerButtons_mc.btnSortByClass_mc.hitTestPoint(stage.mouseX,stage.mouseY))
         {
            _loc4_ = 0;
            while(_loc4_ < this.arrTanksInqueue.length)
            {
               _loc3_ = this.arrTanksInqueue[_loc4_];
               _loc2_.push({
                  "intLoc":_loc4_,
                  "data":_loc3_.numClass
               });
               _loc4_ += 1;
            }
            _loc2_.sortOn("data",Array.NUMERIC);
         }
         else if(this.btnSortTanks_mc.containerButtons_mc.btnSortByGuns_mc.hitTestPoint(stage.mouseX,stage.mouseY))
         {
            _loc4_ = 0;
            while(_loc4_ < this.arrTanksInqueue.length)
            {
               _loc3_ = this.arrTanksInqueue[_loc4_];
               _loc2_.push({
                  "intLoc":_loc4_,
                  "data":_loc3_.numGunPoints
               });
               _loc4_ += 1;
            }
            _loc2_.sortOn("data",Array.NUMERIC);
         }
         else
         {
            if(!this.btnSortTanks_mc.containerButtons_mc.btnSortByBubbles_mc.hitTestPoint(stage.mouseX,stage.mouseY))
            {
               return;
            }
            _loc4_ = 0;
            while(_loc4_ < this.arrTanksInqueue.length)
            {
               _loc3_ = this.arrTanksInqueue[_loc4_];
               _loc2_.push({
                  "intLoc":_loc4_,
                  "data":_loc3_.numBubbles
               });
               _loc4_ += 1;
            }
            _loc2_.sortOn("data",Array.NUMERIC);
         }
         let _loc5_: any[] = new Array();
         _loc4_ = 0;
         while(_loc4_ < _loc2_.length)
         {
            _loc5_.push(this.arrTanksInqueue[_loc2_[_loc4_].intLoc]);
            _loc4_ += 1;
         }
         this.arrTanksInqueue = _loc5_;
         this.method_43();
         this.var_36 = 1;
         this.intCurrentLocationInTanksQueue = 0;
         this.method_24();
         this.method_23();
      }
      
      private method_190(param1: Event): void
      {
         this.method_43();
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_190.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_212.bind(this));
         this.strViewerType = "AvatarLocal";
         this.arrTanksInqueue = new Array();
         this.method_121();
         this.method_5(this.btnFirst_mc);
         this.method_5(this.btnPrev_mc);
         this.method_5(this.btnNext_mc);
         this.method_5(this.btnSearchForTanks_mc);
         this.method_5(this.btnEnterTankCode_mc);
         this.method_5(this.btnEnterTankID_mc);
         this.method_5(this.btnSortTanks_mc);
         this.method_5(this.btnMainMenu_mc);
         this.method_5(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_5(this.btnMyAvatar_mc);
         }
         if(!this.var_22)
         {
            this.method_5(this.btnCreateATank_mc);
         }
         this.method_5(this.btnCurrentPoints_mc);
         this.method_2(this.SearchForTanksScreen_mc);
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.TankLoad1_mc.mouseEnabled = true;
            this.TankLoad1_mc.mouseChildren = true;
            this.method_5(this.TankLoad1_mc);
         }
         else
         {
            this.TankLoad1_mc.mouseEnabled = false;
            this.TankLoad1_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.TankLoad2_mc.mouseEnabled = true;
            this.TankLoad2_mc.mouseChildren = true;
            this.method_5(this.TankLoad2_mc);
         }
         else
         {
            this.TankLoad2_mc.mouseEnabled = false;
            this.TankLoad2_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.TankLoad3_mc.mouseEnabled = true;
            this.TankLoad3_mc.mouseChildren = true;
            this.method_5(this.TankLoad3_mc);
         }
         else
         {
            this.TankLoad3_mc.mouseEnabled = false;
            this.TankLoad3_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.TankLoad4_mc.mouseEnabled = true;
            this.TankLoad4_mc.mouseChildren = true;
            this.method_5(this.TankLoad4_mc);
         }
         else
         {
            this.TankLoad4_mc.mouseEnabled = false;
            this.TankLoad4_mc.mouseChildren = false;
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.method_33();
         this.btnSortTanks_mc.x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
      }
      
      private ViewCurrentProfileEnemySelectTanks(param1: Event): any
      {
         this.method_43();
         this.strViewerType = "EnemyLocal";
         this.arrTanksInqueue = new Array();
         this.method_121();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.TankLoad1_mc.mouseEnabled = true;
            this.TankLoad1_mc.mouseChildren = true;
            this.method_5(this.TankLoad1_mc);
         }
         else
         {
            this.TankLoad1_mc.mouseEnabled = false;
            this.TankLoad1_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.TankLoad2_mc.mouseEnabled = true;
            this.TankLoad2_mc.mouseChildren = true;
            this.method_5(this.TankLoad2_mc);
         }
         else
         {
            this.TankLoad2_mc.mouseEnabled = false;
            this.TankLoad2_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.TankLoad3_mc.mouseEnabled = true;
            this.TankLoad3_mc.mouseChildren = true;
            this.method_5(this.TankLoad3_mc);
         }
         else
         {
            this.TankLoad3_mc.mouseEnabled = false;
            this.TankLoad3_mc.mouseChildren = false;
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.TankLoad4_mc.mouseEnabled = true;
            this.TankLoad4_mc.mouseChildren = true;
            this.method_5(this.TankLoad4_mc);
         }
         else
         {
            this.TankLoad4_mc.mouseEnabled = false;
            this.TankLoad4_mc.mouseChildren = false;
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.btnSortTanks_mc.x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
      }
      
      private RecieveTank(param1: string): void
      {
         let _loc2_: TankData = null;
         _loc2_ = new TankData();
         if(_loc2_.ImportTankData(param1))
         {
            this.refMain.TransitionTankViewer2TankCreator(_loc2_,"Avatar");
         }
         else
         {
            _loc2_ = null;
         }
      }
      
      private EnterLargeTankID(param1: Event): void
      {
         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(3);
         this.method_5(this.SearchForTanksScreen_mc);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnBack_mc);
         this.SearchForTanksScreen_mc.btnSubmit_mc.addEventListener(MouseEvent.CLICK, this.SubmitTankID.bind(this));
         this.SearchForTanksScreen_mc.btnBack_mc.addEventListener(MouseEvent.CLICK, this.method_161.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
      }
      
      private method_25(param1: any): void
      {
         param1.mouseChildren = false;
         param1.useHandCursor = true;
         param1.buttonMode = true;
         param1.addEventListener(MouseEvent.MOUSE_OVER, this.method_653.bind(this));
         param1.addEventListener(MouseEvent.MOUSE_OUT, this.method_629.bind(this));
         param1.addEventListener(MouseEvent.CLICK, this.method_735.bind(this));
      }
      
      public method_375(param1: string = ""): any
      {
         let _loc8_: any = undefined;
         let _loc9_: number = NaN;
         if(param1 == "")
         {
            return;
         }
         this.method_18();
         let _loc2_: TankData = this.refMain.RetrieveTankDataFromID(param1);
         this.DetailedTank_mc.CopyTankData(_loc2_);
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.method_5(this.DetailedTank_mc);
         this.DetailedTank_mc.largeTankStats_mc.alpha = 1;
         this.DetailedTank_mc.btnLargeDelete_mc.alpha = 1;
         this.DetailedTank_mc.btnLargeBack_mc.alpha = 1;
         this.DetailedTank_mc.btnLargeDelete_mc.alpha = 0;
         this.txtPageNumCurrent_txt.text = "";
         let _loc3_: any[] = new Array();
         let _loc4_: any[] = new Array();
         let _loc5_: any[] = new Array();
         let _loc6_: any = 0;
         while(_loc6_ < this.DetailedTank_mc.sprTankData.arrTankDetails.length)
         {
            _loc3_.push(this.objGameObjectLibrary.method_37(this.DetailedTank_mc.sprTankData.arrTankDetails[_loc6_].type));
            _loc6_ += 1;
         }
         let _loc7_: boolean = true;
         _loc6_ = 0;
         while(_loc6_ < _loc3_.length)
         {
            _loc7_ = true;
            _loc8_ = 0;
            while(_loc8_ < _loc4_.length)
            {
               if(_loc3_[_loc6_] == _loc4_[_loc8_])
               {
                  _loc5_[_loc8_] += 1;
                  _loc7_ = false;
                  break;
               }
               _loc8_ += 1;
            }
            if(_loc7_)
            {
               _loc4_.push(_loc3_[_loc6_]);
               _loc5_.push(1);
            }
            _loc6_ += 1;
         }
         this.strLargeTankData = "";
         _loc6_ = 0;
         while(_loc6_ < _loc4_.length)
         {
            this.strLargeTankData = "" + this.strLargeTankData + "" + _loc5_[_loc6_] + " x " + _loc4_[_loc6_] + "\n";
            _loc6_ += 1;
         }
         this.DetailedTank_mc.txtTankData_txt.text = this.strLargeTankData;
         this.DetailedTank_mc.txtTankData_txt.alpha = 0.8;
         if(this.refMain.RetrieveTankLocalRating(this.DetailedTank_mc.sprTankData.strID) == -1)
         {
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 1)
            {
               this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 2)
            {
               this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 3)
            {
               this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 4)
            {
               this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 5)
            {
               this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
            }
         }
         else
         {
            _loc9_ = this.refMain.RetrieveTankLocalRating(this.DetailedTank_mc.sprTankData.strID);
            _loc9_ = Math.round(_loc9_);
            if(_loc9_ >= 1)
            {
               this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 2)
            {
               this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 3)
            {
               this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 4)
            {
               this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
            }
            if(_loc9_ >= 5)
            {
               this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
            }
         }
         this.method_157();
         this.txtPageNumCurrent_txt.text = "";
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.GreyOutNextButton();
         this.method_237(true);
      }
      
      private method_129(param1: Event): void
      {
         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(4);
         this.method_5(this.SearchForTanksScreen_mc);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnBack_mc);
         this.SearchForTanksScreen_mc.btnSubmit_mc.addEventListener(MouseEvent.CLICK, this.method_164.bind(this));
         this.SearchForTanksScreen_mc.btnBack_mc.addEventListener(MouseEvent.CLICK, this.method_161.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
      }
      
      private method_107(param1: Event): void
      {
         let _loc2_: any = undefined;
         let _loc3_: number = NaN;
         if(param1.target.currentFrame != 5)
         {
            param1.target.gotoAndStop(2);
            _loc2_ = 0;
            while(_loc2_ < this.var_39.length)
            {
               if(param1.target == this.var_39[_loc2_].btn)
               {
                  if(this.TankLoad1_mc.var_2.btnEdit_mc == param1.target || this.TankLoad2_mc.var_2.btnEdit_mc == param1.target || this.TankLoad3_mc.var_2.btnEdit_mc == param1.target || this.TankLoad4_mc.var_2.btnEdit_mc == param1.target)
                  {
                     _loc3_ = 0;
                     if(this.TankLoad2_mc.var_2.btnEdit_mc == param1.target)
                     {
                        _loc3_ = 1;
                     }
                     else if(this.TankLoad3_mc.var_2.btnEdit_mc == param1.target)
                     {
                        _loc3_ = 2;
                     }
                     else if(this.TankLoad4_mc.var_2.btnEdit_mc == param1.target)
                     {
                        _loc3_ = 3;
                     }
                     this.txtExplination_txt.text = "";
                     if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + _loc3_]))
                     {
                        this.txtExplination_txt.text = "Exceeds your Class, Gun, or Bubble Points";
                     }
                     if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + _loc3_]))
                     {
                        if(this.txtExplination_txt.text == "")
                        {
                           this.txtExplination_txt.text = "Do not have all the parts for this tank";
                        }
                        else
                        {
                           this.txtExplination_txt.text = "Exceeds Parts, and Class, Gun, or Bubble Points";
                        }
                     }
                     if(this.txtExplination_txt.text == "")
                     {
                        this.txtExplination_txt.text = this.var_39[_loc2_].DescText;
                        break;
                     }
                     param1.target.gotoAndStop(3);
                     break;
                  }
                  this.txtExplination_txt.text = this.var_39[_loc2_].DescText;
                  break;
               }
               _loc2_ += 1;
            }
         }
      }
      
      private ViewAllLocalEnemySelectTanks(param1: Event): any
      {
         this.method_43();
         this.strViewerType = "EnemyLocal";
         this.arrTanksInqueue = new Array();
         this.method_86();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.btnSortTanks_mc.x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
      }
      
      private EnemyTanksButton(param1: Event): void
      {
         this.strSortType = "Enemy";
         this.method_147(param1);
      }
      
      private PullTanksFromCurrentPlayerProfile(): void
      {
         let _loc1_: number = NaN;
         let _loc2_: boolean = false;
         let _loc3_: any = undefined;
         let _loc4_: TankData = null;
         0;
         this.arrTanksInqueue = new Array();
         _loc1_ = this.refMain.objCurrentPlayer.arrSavedTanks.length;
         _loc2_ = true;
         _loc3_ = 0;
         while(_loc3_ < _loc1_)
         {
            if(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_].blnShowInSearch == "true")
            {
               _loc4_ = new TankData();
               if(_loc4_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_].Data))
               {
                  _loc2_ = true;
                  let _loc5_: number = 0;
                  while(0 < this.arrTanksInqueue.length)
                  {
                     if(this.arrTanksInqueue[0].strID == _loc4_.strID)
                     {
                        _loc2_ = false;
                        break;
                     }
                     _loc5_ = 0 + 1;
                  }
                  if(_loc2_)
                  {
                     if(this.strViewerType == "AvatarLocal" && _loc4_.blnAvatarTank)
                     {
                        this.arrTanksInqueue.push(_loc4_);
                     }
                     if(this.strViewerType == "EnemyLocal" && !_loc4_.blnAvatarTank)
                     {
                        this.arrTanksInqueue.push(_loc4_);
                     }
                     if(this.strViewerType == "AvatarLocal" && _loc4_.blnAvatarTank || this.strViewerType == "EnemyLocal" && !_loc4_.blnAvatarTank)
                     {
                        this.arrTanksInqueue[this.arrTanksInqueue.length - 1].tankType = 1;
                     }
                  }
               }
               _loc4_ = null;
            }
            _loc3_ += 1;
         }
      }
      
      private method_278(param1: Event): void
      {
         let var_157: URLLoader = null;
         let var_56: number = NaN;
         let var_40: XML = null;
         let var_150: XML = null;
         let var_106: TankData = null;
         let var_126: Event = param1;
         var_157 = (var_126.target as unknown as URLLoader);
         var_56 = 0;
         try
         {
            var_40 = new XML(var_157.data);
            var_56 = Number(var_40.children()[0].attribute("intStatus"));
         }
         catch (e: any)
         {
            var_56 = 0;
         }
         if(var_56 != 0)
         {
            for (let var_150 of var_40.TANK)
            {
               var_106 = new TankData();
               if(var_106.ImportTankData(var_150.DATA))
               {
                  var_106.strID = var_150.ID;
                  var_106.numRating = var_150.RATING;
                  this.arrTanksInqueue.push(var_106);
               }
            }
            if(this.var_117 != null)
            {
               if(this.contains(this.var_117))
               {
                  this.removeChild(this.var_117);
                  this.var_117 = null;
               }
            }
            this.urlLoader.removeEventListener(Event.COMPLETE, this.method_278.bind(this));
            this.urlLoader.removeEventListener(HTTPStatusEvent.HTTP_STATUS, this.method_280.bind(this));
            this.urlLoader.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
            this.urlLoader.removeEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
            if(this.var_76)
            {
               this.ReturnToViewTanksFromSearch();
            }
            else
            {
               this.UnGreyOutBackButton();
               this.UnGreyOutFirstButton();
               this.UnGreyOutNextButton();
               if(this.DetailedTank_mc.alpha == 1)
               {
                  this.method_148();
                  if(this.btnNext_mc.mouseEnabled)
                  {
                     this.btnNext_mc.addEventListener(MouseEvent.CLICK, this.GoToNextTank.bind(this));
                  }
               }
               else
               {
                  this.method_23();
                  if(this.btnNext_mc.mouseEnabled)
                  {
                     this.btnNext_mc.addEventListener(MouseEvent.CLICK, this.method_105.bind(this));
                  }
               }
            }
         }
         else if(this.var_117 != null)
         {
            if(this.contains(this.var_117))
            {
               this.removeChild(this.var_117);
               this.var_117 = null;
            }
         }
      }
      
      private method_105(param1: Event): void
      {
         this.method_78();
         this.TankLoad1_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad1_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad2_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad2_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad3_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad3_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad4_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad4_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad1_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad2_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad3_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad4_mc.var_2.btnCopy_mc.gotoAndStop(1);
         if(this.intCurrentLocationInTanksQueue + 4 <= this.arrTanksInqueue.length - 4)
         {
            this.intCurrentLocationInTanksQueue += 4;
            this.var_36 += 1;
            if(this.var_36 == this.var_166 && Math.ceil(this.var_166 / 3) == this.var_166 / 3)
            {
               if(this.strViewerType == "AvatarSearch" || this.strViewerType == "EnemySearch")
               {
                  this.arrSearchFilters[0] = "page=" + Math.floor(int(this.var_36 / 3) + 1);
                  this.method_209(this.arrSearchFilters,this.arrSearchSorts);
               }
            }
         }
         else if(this.var_36 != this.var_166)
         {
            this.intCurrentLocationInTanksQueue += 4;
            this.var_36 = this.var_166;
         }
         if(this.intCurrentLocationInTanksQueue + 3 >= this.arrTanksInqueue.length - 1)
         {
            this.GreyOutNextButton();
         }
         this.UnGreyOutBackButton();
         this.UnGreyOutFirstButton();
         this.method_24();
         this.method_23();
         this.method_98();
         this.method_18();
         this.method_33();
      }
      
      private method_147(param1: Event): void
      {
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener(MouseEvent.CLICK, this.AvatarTanksButton.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener(MouseEvent.CLICK, this.EnemyTanksButton.bind(this));
         this.SearchForTanksScreen_mc.gotoAndStop(2);
         if(this.strSortType == "Avatar")
         {
            this.SearchForTanksScreen_mc.diffRatingBG_mc.alpha = 0;
            this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.text = "";
            this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.selectable = false;
            this.SearchForTanksScreen_mc.txtDiffRating_txt.text = "";
            this.SearchForTanksScreen_mc.txtDiffRating_txt.selectable = false;
            this.SearchForTanksScreen_mc.btnSortDiffRating_mc.alpha = 0;
            this.SearchForTanksScreen_mc.btnSortDiffRating_mc.mouseEnabled = false;
            this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.alpha = 0;
            this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.mouseEnabled = false;
         }
         else
         {
            this.SearchForTanksScreen_mc.diffRatingBG_mc.alpha = 1;
            this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.text = "Difficulty Rating";
            this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.selectable = false;
            this.SearchForTanksScreen_mc.txtDiffRating_txt.text = "Type number here";
            this.SearchForTanksScreen_mc.txtDiffRating_txt.selectable = true;
            this.SearchForTanksScreen_mc.btnSortDiffRating_mc.alpha = 1;
            this.SearchForTanksScreen_mc.btnSortDiffRating_mc.mouseEnabled = true;
            this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.alpha = 1;
            this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.mouseEnabled = true;
            this.method_25(this.SearchForTanksScreen_mc.btnSortDiffRating_mc);
            this.method_25(this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc);
            this.SearchForTanksScreen_mc.txtDiffRating_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         }
         this.var_36 = 1;
         this.method_3(this.SearchForTanksScreen_mc.btnSearch_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass1_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass2_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass3_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass4_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass5_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass6_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnYes_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnNo_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnFeaturedYes_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnFeaturedNo_mc);
         this.SearchForTanksScreen_mc.btnFeaturedYes_mc.addEventListener(MouseEvent.CLICK, this.FeaturedYesDown.bind(this));
         this.SearchForTanksScreen_mc.btnFeaturedNo_mc.addEventListener(MouseEvent.CLICK, this.FeaturedNoDown.bind(this));
         this.SearchForTanksScreen_mc.btnSearch_mc.addEventListener(MouseEvent.CLICK, this.SearchForATank.bind(this));
         this.SearchForTanksScreen_mc.btnClass1_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass2_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass3_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass4_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass5_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass6_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnYes_mc.addEventListener(MouseEvent.CLICK, this.HIYesDown.bind(this));
         this.SearchForTanksScreen_mc.btnNo_mc.addEventListener(MouseEvent.CLICK, this.HINoDown.bind(this));
         this.SearchForTanksScreen_mc.txtName_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtAuthor_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtGunPoints_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtBubblePoints_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.method_25(this.SearchForTanksScreen_mc.btnSortClass_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnSortGunPoints_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnSortBubblePoints_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorGP_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorBP_mc);
      }
      
      private method_171(param1: Event): void
      {
         this.method_43();
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_171.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_200.bind(this));
         this.strViewerType = "AvatarLocal";
         this.arrTanksInqueue = new Array();
         this.method_86();
         this.method_5(this.btnFirst_mc);
         this.method_5(this.btnPrev_mc);
         this.method_5(this.btnNext_mc);
         this.method_5(this.btnSearchForTanks_mc);
         this.method_5(this.btnEnterTankCode_mc);
         this.method_5(this.btnEnterTankID_mc);
         this.method_5(this.btnSortTanks_mc);
         this.method_5(this.btnMainMenu_mc);
         this.method_5(this.btnViewLocalTanks_mc);
         if(!this.var_22)
         {
            this.method_5(this.btnCreateATank_mc);
         }
         this.method_5(this.btnCurrentPoints_mc);
         if(this.var_23 != null)
         {
            this.method_5(this.btnMyAvatar_mc);
         }
         this.method_2(this.SearchForTanksScreen_mc);
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.btnSortTanks_mc.x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      public Update(): any
      {
         this.var_154.Run();
         let _loc1_: any = 0;
         while(_loc1_ < this.var_129.length)
         {
            this.var_129[_loc1_].mouseEnabled = true;
            if(this.var_129[_loc1_].alpha < 1)
            {
               this.var_129[_loc1_].alpha += 0.2;
            }
            else
            {
               if(this.var_129[_loc1_].alpha != 1)
               {
                  this.var_129[_loc1_].alpha = 1;
               }
               this.var_129.splice(_loc1_,1);
            }
            _loc1_ += 1;
         }
         _loc1_ = 0;
         while(_loc1_ < this.var_130.length)
         {
            this.var_130[_loc1_].mouseEnabled = false;
            if(this.var_130[_loc1_].alpha > 0)
            {
               this.var_130[_loc1_].alpha -= 0.2;
            }
            else
            {
               if(this.var_130[_loc1_].alpha != 0)
               {
                  this.var_130[_loc1_].alpha = 0;
               }
               this.var_130.splice(_loc1_,1);
            }
            _loc1_ += 1;
         }
         _loc1_ = 0;
         while(_loc1_ < this.var_116.length)
         {
            if(this.var_116[_loc1_].alpha > 0)
            {
               this.var_116[_loc1_].alpha -= 0.2;
            }
            else
            {
               if(this.var_116[_loc1_].alpha != 0)
               {
                  this.var_116[_loc1_].alpha = 0;
               }
               this.var_116[_loc1_].DeleteTank();
               this.var_116.splice(_loc1_,1);
            }
            _loc1_ += 1;
         }
      }
      
      private method_126(param1: Event): void
      {
         this.method_18();
         this.Destroy();
         this.var_23();
      }
      
      private ReturnToMainMenuFromLargeView(param1: Event): void
      {
         this.method_47();
         this.refMain.TransitionTankViewer2MainMenu();
      }
      
      private method_491(): any
      {
         if(this.var_22)
         {
            this.TankLoad1_mc.var_2.btnEdit_mc.alpha = 0;
            this.TankLoad2_mc.var_2.btnEdit_mc.alpha = 0;
            this.TankLoad3_mc.var_2.btnEdit_mc.alpha = 0;
            this.TankLoad4_mc.var_2.btnEdit_mc.alpha = 0;
         }
         if(!this.var_22)
         {
            this.method_3(this.TankLoad1_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad1_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad1_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad1_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad1_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad1_mc.var_2.btnDetails_mc.addEventListener(MouseEvent.CLICK, this.Details1.bind(this));
         if(!this.var_22)
         {
            this.TankLoad1_mc.var_2.btnEdit_mc.addEventListener(MouseEvent.CLICK, this.Edit1.bind(this));
         }
         this.TankLoad1_mc.var_2.btnDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteTank1.bind(this));
         this.TankLoad1_mc.var_2.btnSave_mc.addEventListener(MouseEvent.CLICK, this.Save1.bind(this));
         this.TankLoad1_mc.var_2.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.Copy1.bind(this));
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(!this.var_22)
         {
            this.method_3(this.TankLoad2_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad2_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad2_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad2_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad2_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad2_mc.var_2.btnDetails_mc.addEventListener(MouseEvent.CLICK, this.Details2.bind(this));
         if(!this.var_22)
         {
            this.TankLoad2_mc.var_2.btnEdit_mc.addEventListener(MouseEvent.CLICK, this.Edit2.bind(this));
         }
         this.TankLoad2_mc.var_2.btnDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteTank2.bind(this));
         this.TankLoad2_mc.var_2.btnSave_mc.addEventListener(MouseEvent.CLICK, this.Save2.bind(this));
         this.TankLoad2_mc.var_2.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.Copy2.bind(this));
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(!this.var_22)
         {
            this.method_3(this.TankLoad3_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad3_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad3_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad3_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad3_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad3_mc.var_2.btnDetails_mc.addEventListener(MouseEvent.CLICK, this.Details3.bind(this));
         if(!this.var_22)
         {
            this.TankLoad3_mc.var_2.btnEdit_mc.addEventListener(MouseEvent.CLICK, this.Edit3.bind(this));
         }
         this.TankLoad3_mc.var_2.btnDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteTank3.bind(this));
         this.TankLoad3_mc.var_2.btnSave_mc.addEventListener(MouseEvent.CLICK, this.Save3.bind(this));
         this.TankLoad3_mc.var_2.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.Copy3.bind(this));
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(!this.var_22)
         {
            this.method_3(this.TankLoad4_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad4_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad4_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad4_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad4_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad4_mc.var_2.btnDetails_mc.addEventListener(MouseEvent.CLICK, this.Details4.bind(this));
         if(!this.var_22)
         {
            this.TankLoad4_mc.var_2.btnEdit_mc.addEventListener(MouseEvent.CLICK, this.Edit4.bind(this));
         }
         this.TankLoad4_mc.var_2.btnDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteTank4.bind(this));
         this.TankLoad4_mc.var_2.btnSave_mc.addEventListener(MouseEvent.CLICK, this.Save4.bind(this));
         this.TankLoad4_mc.var_2.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.Copy4.bind(this));
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.method_3(this.btnFirst_mc,"Return to first page tanks");
         }
         else
         {
            this.btnFirst_mc.gotoAndStop(5);
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.method_3(this.btnPrev_mc,"Return to previous page tanks");
         }
         else
         {
            this.btnPrev_mc.gotoAndStop(5);
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.method_3(this.btnNext_mc,"Go to next page of tanks");
         }
         else
         {
            this.btnNext_mc.gotoAndStop(5);
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.btnFirst_mc.addEventListener(MouseEvent.CLICK, this.method_128.bind(this));
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.btnPrev_mc.addEventListener(MouseEvent.CLICK, this.method_124.bind(this));
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.btnNext_mc.addEventListener(MouseEvent.CLICK, this.method_105.bind(this));
         }
         if(this.var_23 == null)
         {
            this.method_3(this.btnMainMenu_mc,"Return to the Main Menu");
            this.btnMainMenu_mc.addEventListener(MouseEvent.CLICK, this.method_133.bind(this));
         }
         else
         {
            this.method_3(this.btnMainMenu_mc,this.var_254);
            this.btnMainMenu_mc.addEventListener(MouseEvent.CLICK, this.method_126.bind(this));
         }
         this.method_3(this.btnSearchForTanks_mc,"Search for Enemy tanks");
         this.method_3(this.btnSortTanks_mc,"Sort your list of tanks by...");
         this.method_3(this.btnEnterTankID_mc,"Enter an existing tank ID");
         this.method_3(this.btnEnterTankCode_mc,"View tank from tank code");
         this.method_223(this.btnMyAvatar_mc);
         this.btnMyAvatar_mc.alpha = 0;
         this.btnSearchForTanks_mc.addEventListener(MouseEvent.CLICK, this.SearchForEnemySelectTanks.bind(this));
         this.btnSortTanks_mc.addEventListener(MouseEvent.CLICK, this.method_125.bind(this));
         this.btnEnterTankID_mc.addEventListener(MouseEvent.CLICK, this.EnterTankID.bind(this));
         this.btnEnterTankCode_mc.addEventListener(MouseEvent.CLICK, this.method_129.bind(this));
         this.var_8.method_4(this.btnViewLocalTanks_mc,true,this.ViewAllLocalEnemySelectTanks);
         this.var_39.push({
            "btn":this.btnViewLocalTanks_mc,
            "DescText":"Lets you view all tanks on all profiles"
         });
         if(!this.var_22)
         {
            this.var_8.method_4(this.btnCreateATank_mc,true,this.method_289);
         }
         if(!this.var_22)
         {
            this.var_39.push({
               "btn":this.btnCreateATank_mc,
               "DescText":"Create a new tank!"
            });
         }
         if(this.var_70 == "Avatar")
         {
         }
         this.btnMyAvatar_mc.alpha = 0;
         this.method_98();
      }
      
      private method_209(param1: any[], param2: any[]): void
      {
         let var_40: any[];
         let var_243: any[];
         let var_106: string = null;
         let var_194: string = null;
         let var_572: any[] = null;
         let var_307: number = 0;
         let var_563: number = 0;
         let var_562: string = null;
         let var_126: class_11 = null;
         let var_346: ByteArray = null;
         let var_150: ByteArray = null;
         let var_411: class_12 = null;
         let var_549: string = null;
         let var_157: URLRequest = null;
         let var_257: URLVariables = null;
         let var_262: any[] = param1;
         let var_56: any[] = param2;
         this.var_380 = this.RandNum(1,5);
         var_106 = "";
         var_194 = "";
         var_243 = new Array();
         var_40 = new Array();
         var_307 = 0;
         while(var_307 < var_262.length)
         {
            var_572 = this.method_571(var_262[var_307]);
            var_106 += var_572[0] + "," + var_572[1] + "," + var_572[2] + ";";
            var_307++;
         }
         var_106 = var_106.substr(0,var_106.length - 1);
         var_563 = 0;
         while(var_563 < var_56.length)
         {
            var_572 = this.method_560(var_56[var_563]);
            var_194 += var_572[0] + "," + var_572[1] + ";";
            var_563++;
         }
         var_194 = var_194.substr(0,var_194.length - 1);
         var_106 += ":" + var_194;
         var_562 = class_1.method_1(764,770);
         var_126 = new PKCS5();
         var_346 = class_13.toArray(class_13.method_22(var_106));
         var_150 = class_13.toArray(class_13.method_22(var_562));
         var_411 = class_14.method_46("aes128-ecb",var_150,var_126);
         var_411.encrypt(var_346);
         var_106 = "" + String(class_13.method_52(var_346));
         var_549 = "http://s1.herointeractive.com/bta/searchTanks.php";
         var_157 = new URLRequest(var_549);
         var_257 = new URLVariables();
         var_257.s = this.var_380;
         var_257.m = "Mode1";
         var_257.q = var_106;
         var_157.data = var_257;
         var_157.method = URLRequestMethod.POST;
         this.urlLoader = new URLLoader();
         this.urlLoader.dataFormat = URLLoaderDataFormat.TEXT;
         this.urlLoader.addEventListener(Event.COMPLETE, this.method_278.bind(this));
         this.urlLoader.addEventListener(HTTPStatusEvent.HTTP_STATUS, this.method_280.bind(this));
         this.urlLoader.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
         this.urlLoader.addEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
         try
         {
            this.urlLoader.load(var_157);
         }
         catch (e: any)
         {
         }
      }
      
      private RandNum(param1: number, param2: number): number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      private method_43(): void
      {
         this.UnGreyOutBackButton();
         this.UnGreyOutFirstButton();
         this.UnGreyOutNextButton();
      }
      
      private method_677(param1: Event): any
      {
         let _loc2_: number = 0;
         let _loc3_: any = undefined;
         if(this.selectTankScreen_mc.objTankData.strID.substr(0,1) == "L")
         {
            _loc2_ = 0;
            while(_loc2_ < this.refMain.objCurrentPlayer.var_38.length)
            {
               if(this.refMain.objCurrentPlayer.var_38[_loc2_].ID.substr(0,1) == "H")
               {
                  _loc3_ = 0;
                  while(_loc3_ < this.refMain.objCurrentPlayer.var_38[_loc2_].AllTanks.length)
                  {
                     if(this.selectTankScreen_mc.objTankData.strID == this.refMain.objCurrentPlayer.var_38[_loc2_].AllTanks[_loc3_])
                     {
                        this.refMain.objCurrentPlayer.var_38.splice(_loc2_,1);
                        break;
                     }
                     _loc3_++;
                  }
               }
               _loc2_++;
            }
            _loc2_ = 0;
            while(_loc2_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               if(this.refMain.objCurrentPlayer.arrSavedTanks[_loc2_].ID == this.selectTankScreen_mc.objTankData.strID)
               {
                  this.refMain.objCurrentPlayer.arrSavedTanks.splice(_loc2_,1);
                  break;
               }
               _loc2_++;
            }
         }
         else
         {
            _loc2_ = 0;
            while(_loc2_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               if(this.refMain.objCurrentPlayer.arrSavedTanks[_loc2_].ID == this.selectTankScreen_mc.objTankData.strID)
               {
                  this.refMain.objCurrentPlayer.arrSavedTanks[_loc2_].blnShowInSearch = "false";
                  break;
               }
               _loc2_++;
            }
         }
         this.refMain.objCurrentPlayer.method_19();
         this.method_229(param1);
         this.method_18();
         this.method_33();
         this.PullTanksFromCurrentPlayerProfile();
         this.method_24(2);
      }
      
      private method_148(): void
      {
         let _loc1_: number = this.intCurrentLocationInTanksQueue + 1;
         this.txtPageNumCurrent_txt.text = "Tank: " + _loc1_ + " out of: " + this.arrTanksInqueue.length;
      }
      
      private method_653(param1: Event): void
      {
         param1.target.background_mc.gotoAndStop(2);
      }
      
      private method_776(param1: Event): void
      {
         param1.target.mouseEnabled = false;
         if(param1.target.alpha > 0)
         {
            param1.target.alpha -= 0.2;
         }
         else if(param1.target.alpha != 0)
         {
            param1.target.alpha = 0;
         }
      }
      
      private method_496(param1: any[]): Record<string, any>
      {
         let _loc2_: string = null;
         let _loc3_: string = null;
         let _loc4_: string = null;
         let _loc5_: any[] = null;
         let _loc6_: any[] = null;
         let _loc7_: any[] = null;
         let _loc8_: number = 0;
         let _loc9_: boolean = false;
         let _loc10_: string = null;
         let _loc11_: number = 0;
         let _loc12_: Record<string, any> = null;
         let _loc13_: number = 0;
         let _loc14_: number = 0;
         let _loc15_: number = 0;
         let _loc16_: number = 0;
         let _loc17_: number = 0;
         _loc2_ = "";
         _loc3_ = "";
         _loc4_ = "";
         _loc5_ = new Array();
         _loc6_ = new Array();
         _loc7_ = new Array();
         _loc8_ = 0;
         while(_loc8_ < param1.length)
         {
            _loc13_ = Math.floor(param1[_loc8_].type / 1000);
            _loc14_ = -1;
            if(_loc13_ == 2)
            {
               _loc15_ = 0;
               while(_loc15_ < _loc5_.length)
               {
                  if(_loc5_[_loc15_].type == param1[_loc8_].type)
                  {
                     _loc14_ = Math.floor(_loc15_);
                     ++_loc5_[_loc15_].amount;
                  }
                  _loc15_++;
               }
               if(_loc14_ == -1)
               {
                  _loc5_.push({
                     "type":param1[_loc8_].type,
                     "amount":1
                  });
               }
            }
            else if(_loc13_ == 3)
            {
               _loc16_ = 0;
               while(_loc16_ < _loc6_.length)
               {
                  if(_loc6_[_loc16_].type == param1[_loc8_].type)
                  {
                     _loc14_ = Math.floor(_loc16_);
                     ++_loc6_[_loc16_].amount;
                  }
                  _loc16_++;
               }
               if(_loc14_ == -1)
               {
                  _loc6_.push({
                     "type":param1[_loc8_].type,
                     "amount":1
                  });
               }
            }
            else if(_loc13_ == 4)
            {
               _loc17_ = 0;
               while(_loc17_ < _loc7_.length)
               {
                  if(_loc7_[_loc17_].type == param1[_loc8_].type)
                  {
                     _loc14_ = Math.floor(_loc17_);
                     ++_loc7_[_loc17_].amount;
                  }
                  _loc17_++;
               }
               if(_loc14_ == -1)
               {
                  _loc7_.push({
                     "type":param1[_loc8_].type,
                     "amount":1
                  });
               }
            }
            _loc8_++;
         }
         _loc5_.sortOn("type");
         _loc6_.sortOn("type");
         _loc7_.sortOn("type");
         _loc9_ = false;
         if(_loc5_.length > 2)
         {
            _loc9_ = true;
         }
         _loc11_ = 0;
         while(_loc11_ < _loc5_.length)
         {
            if(_loc9_ == true)
            {
               if(_loc5_[_loc11_].amount == 1)
               {
                  _loc10_ = this.objGameObjectLibrary.method_26(_loc5_[_loc11_].type);
                  _loc2_ += "1 " + _loc10_.substr(0,_loc10_.length - 2) + ", ";
               }
               else
               {
                  _loc2_ += _loc5_[_loc11_].amount + " " + this.objGameObjectLibrary.method_26(_loc5_[_loc11_].type) + ", ";
               }
            }
            else if(_loc5_[_loc11_].amount == 1)
            {
               _loc2_ += this.objGameObjectLibrary.method_37(_loc5_[_loc11_].type) + ", ";
            }
            else
            {
               _loc2_ += _loc5_[_loc11_].amount + " " + this.objGameObjectLibrary.method_87(_loc5_[_loc11_].type) + ", ";
            }
            _loc11_++;
         }
         if(_loc6_.length > 2)
         {
            _loc9_ = true;
         }
         else
         {
            _loc9_ = false;
         }
         _loc11_ = 0;
         while(_loc11_ < _loc6_.length)
         {
            if(_loc9_ == true)
            {
               if(_loc6_[_loc11_].amount == 1)
               {
                  _loc10_ = this.objGameObjectLibrary.method_26(_loc6_[_loc11_].type);
                  _loc3_ += "1 " + _loc10_.substr(0,_loc10_.length - 2) + ", ";
               }
               else
               {
                  _loc3_ += _loc6_[_loc11_].amount + " " + this.objGameObjectLibrary.method_26(_loc6_[_loc11_].type) + ", ";
               }
            }
            else if(_loc6_[_loc11_].amount == 1)
            {
               _loc3_ += this.objGameObjectLibrary.method_37(_loc6_[_loc11_].type) + ", ";
            }
            else
            {
               _loc3_ += _loc6_[_loc11_].amount + " " + this.objGameObjectLibrary.method_87(_loc6_[_loc11_].type) + ", ";
            }
            _loc11_++;
         }
         if(_loc7_.length > 2)
         {
            _loc9_ = true;
         }
         else
         {
            _loc9_ = false;
         }
         _loc11_ = 0;
         while(_loc11_ < _loc7_.length)
         {
            if(_loc9_ == true)
            {
               if(_loc7_[_loc11_].amount == 1)
               {
                  _loc10_ = this.objGameObjectLibrary.method_26(_loc7_[_loc11_].type);
                  _loc4_ += "1 " + _loc10_.substr(0,_loc10_.length - 2) + ", ";
               }
               else
               {
                  _loc4_ += _loc7_[_loc11_].amount + " " + this.objGameObjectLibrary.method_26(_loc7_[_loc11_].type) + ", ";
               }
            }
            else if(_loc7_[_loc11_].amount == 1)
            {
               _loc4_ += this.objGameObjectLibrary.method_37(_loc7_[_loc11_].type) + ", ";
            }
            else
            {
               _loc4_ += _loc7_[_loc11_].amount + " " + this.objGameObjectLibrary.method_87(_loc7_[_loc11_].type) + ", ";
            }
            _loc11_++;
         }
         if(_loc2_ == "")
         {
            _loc2_ = "N/A";
         }
         else
         {
            _loc2_ = _loc2_.substr(0,_loc2_.length - 2);
         }
         if(_loc3_ == "")
         {
            _loc3_ = "N/A";
         }
         else
         {
            _loc3_ = _loc3_.substr(0,_loc3_.length - 2);
         }
         if(_loc4_ == "")
         {
            _loc4_ = "N/A";
         }
         else
         {
            _loc4_ = _loc4_.substr(0,_loc4_.length - 2);
         }
         return {
            "strPrimary":_loc2_,
            "strSecondary":_loc3_,
            "strEnemyWeapons":_loc4_
         };
      }
      
      private method_122(param1: TankData, param2: TankData): boolean
      {
         let _loc3_: number = NaN;
         let _loc4_: any = undefined;
         if(param1.arrTankDetails.length != param2.arrTankDetails.length)
         {
            return false;
         }
         if(param1.strAuthorName != param2.strAuthorName)
         {
            return false;
         }
         if(param1.strTankName != param2.strTankName)
         {
            return false;
         }
         _loc3_ = param1.arrTankDetails.length;
         _loc4_ = 0;
         while(_loc4_ < _loc3_)
         {
            if(param1.arrTankDetails[_loc4_].name != param2.arrTankDetails[_loc4_].name)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].type != param2.arrTankDetails[_loc4_].type)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].twin != param2.arrTankDetails[_loc4_].twin)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].x != param2.arrTankDetails[_loc4_].x)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].y != param2.arrTankDetails[_loc4_].y)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].rotation != param2.arrTankDetails[_loc4_].rotation)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].scale != param2.arrTankDetails[_loc4_].scale)
            {
               return false;
            }
            if(param1.arrTankDetails[_loc4_].radius != param2.arrTankDetails[_loc4_].radius)
            {
               return false;
            }
            _loc4_ += 1;
         }
         return true;
      }
      
      private CallSelectableCallBackFunction(param1: Event): void
      {
         this.refMain.WipeArrTankViewerData();
         this.removeEventListener(Event.ENTER_FRAME, this.method_91.bind(this));
         this.method_18();
         this.Destroy();
         this.var_490(this.selectTankScreen_mc.objTankData.ExportTankData());
      }
      
      private method_792(param1: Event): void
      {
         param1.target.mouseEnabled = true;
         if(param1.target.alpha < 1)
         {
            param1.target.alpha += 0.2;
         }
         else if(param1.target.alpha != 1)
         {
            param1.target.alpha = 1;
         }
      }
      
      private method_253(param1: SecurityErrorEvent): void
      {
      }
      
      private UnGreyOutFirstButton(): void
      {
         this.btnFirst_mc.mouseEnabled = true;
         this.btnFirst_mc.gotoAndStop(1);
         this.btnFirst_mc.buttonMode = true;
         this.btnFirst_mc.useHandCursor = true;
      }
      
      private method_377(param1: Event): any
      {
         this.Tutorial_mc.gotoAndStop(this.Tutorial_mc.currentFrame - 1);
      }
      
      private alphaOutThenDeleteTankData(param1: Event): void
      {
         if(param1.target.alpha > 0)
         {
            param1.target.alpha -= 0.2;
         }
         else
         {
            if(param1.target.alpha != 0)
            {
               param1.target.alpha = 0;
            }
            param1.target.DeleteTank();
         }
      }
      
      private GreyOutNextButton(): void
      {
         this.btnNext_mc.mouseEnabled = false;
         this.btnNext_mc.gotoAndStop(5);
      }
      
      private method_629(param1: Event): void
      {
         param1.target.background_mc.gotoAndStop(1);
      }
      
      private method_420(param1: Event): void
      {
         if(param1.target.currentFrame == 2)
         {
            param1.target.gotoAndStop(1);
         }
         if(param1.target.currentFrame == 4)
         {
            param1.target.gotoAndStop(3);
         }
         this.txtExplination_txt.text = "";
      }
      
      private method_200(param1: Event): void
      {
         this.method_43();
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_171.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_200.bind(this));
         this.strViewerType = "EnemyLocal";
         this.arrTanksInqueue = new Array();
         this.method_86();
         this.method_5(this.btnFirst_mc);
         this.method_5(this.btnPrev_mc);
         this.method_5(this.btnNext_mc);
         this.method_5(this.btnSearchForTanks_mc);
         this.method_5(this.btnEnterTankCode_mc);
         this.method_5(this.btnEnterTankID_mc);
         this.method_5(this.btnSortTanks_mc);
         this.method_5(this.btnMainMenu_mc);
         this.method_5(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_5(this.btnMyAvatar_mc);
         }
         if(!this.var_22)
         {
            this.method_5(this.btnCreateATank_mc);
         }
         this.method_5(this.btnCurrentPoints_mc);
         this.method_2(this.SearchForTanksScreen_mc);
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.btnSortTanks_mc.x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      private method_571(param1: string): any[]
      {
         let _loc2_: any[] = null;
         let _loc3_: string = null;
         let _loc4_: string = null;
         let _loc5_: number = 0;
         null;
         null;
         null;
         _loc2_ = new Array();
         _loc3_ = "";
         _loc4_ = "";
         _loc5_ = -1;
         _loc5_ = param1.search(("[=><]" as unknown as RegExp));
         if(_loc5_ != -1)
         {
            let _loc8_: string = param1.substr(_loc5_,1);
            if(_loc8_ == "=")
            {
               _loc4_ = "1";
               let _loc6_: string = param1.substr(0,_loc5_);
               let _loc7_: string = param1.substr(_loc5_ + 1);
               return _loc2_;
            }
            return _loc2_;
         }
         return _loc2_;
      }
      
      private Copy1(param1: Event): void
      {
         System.setClipboard(this.TankLoad1_mc.sprTankData.ExportTankData());
         this.TankLoad1_mc.var_2.btnCopy_mc.gotoAndStop(5);
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = false;
      }
      
      private Copy2(param1: Event): void
      {
         System.setClipboard(this.TankLoad2_mc.sprTankData.ExportTankData());
         this.TankLoad2_mc.var_2.btnCopy_mc.gotoAndStop(5);
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = false;
      }
      
      private Copy3(param1: Event): void
      {
         System.setClipboard(this.TankLoad3_mc.sprTankData.ExportTankData());
         this.TankLoad3_mc.var_2.btnCopy_mc.gotoAndStop(5);
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = false;
      }
      
      private Copy4(param1: Event): void
      {
         System.setClipboard(this.TankLoad4_mc.sprTankData.ExportTankData());
         this.TankLoad4_mc.var_2.btnCopy_mc.gotoAndStop(5);
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = false;
      }
      
      private GoToNextTank(param1: Event): void
      {
         this.DetailedTank_mc.btnCopy_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnCopy_mc.mouseEnabled = true;
         if(this.intCurrentLocationInTanksQueue < this.arrTanksInqueue.length - 1)
         {
            this.intCurrentLocationInTanksQueue += 1;
            this.UnGreyOutBackButton();
            this.UnGreyOutFirstButton();
         }
         if(this.intCurrentLocationInTanksQueue == this.arrTanksInqueue.length - 5)
         {
            if(this.strViewerType == "AvatarSearch" || this.strViewerType == "EnemySearch")
            {
               this.var_36 = 1 + Math.floor(this.intCurrentLocationInTanksQueue / 4);
               this.arrSearchFilters[0] = "page=" + Math.floor(int(this.var_36 / 3) + 1);
               this.method_209(this.arrSearchFilters,this.arrSearchSorts);
            }
         }
         this.TankLoad1_mc.Setup(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]);
         this.DetailTheTank(this.TankLoad1_mc);
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad1_mc.mouseEnabled = false;
         this.method_148();
         this.DetailedTank_mc.btnLargeSave.gotoAndStop(1);
         if(this.intCurrentLocationInTanksQueue == this.arrTanksInqueue.length - 1)
         {
            this.GreyOutNextButton();
         }
      }
      
      private method_364(param1: Event): void
      {
         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener(MouseEvent.CLICK, this.AvatarTanksButton.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener(MouseEvent.CLICK, this.EnemyTanksButton.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private Edit1(param1: Event): void
      {
         let _loc2_: MovieClip = null;
         if(!this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]))
         {
            this.method_18();
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue].blnAvatarTank)
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue],"Avatar");
            }
            else
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue],"Enemy");
            }
         }
         else
         {
            _loc2_ = this.var_154.method_60(new class_60(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]);
               }
            }
         }
      }
      
      private Edit2(param1: Event): void
      {
         let _loc2_: MovieClip = null;
         if(!this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]))
         {
            this.method_18();
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1].blnAvatarTank)
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1],"Avatar");
            }
            else
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1],"Enemy");
            }
         }
         else
         {
            _loc2_ = this.var_154.method_60(new class_60(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]);
               }
            }
         }
      }
      
      private DetailTheTank(param1: TankLoadingBox): void
      {
         let _loc7_: any = undefined;
         let _loc8_: number = NaN;
         this.method_18();
         this.DetailedTank_mc.method_488(param1);
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.method_5(this.DetailedTank_mc);
         this.DetailedTank_mc.largeTankStats_mc.alpha = 1;
         this.DetailedTank_mc.btnLargeDelete_mc.alpha = 1;
         this.DetailedTank_mc.btnLargeBack_mc.alpha = 1;
         if(param1.sprTankData.tankType == 4)
         {
            this.DetailedTank_mc.btnLargeDelete_mc.alpha = 0;
         }
         this.txtPageNumCurrent_txt.text = "";
         let _loc2_: any[] = new Array();
         let _loc3_: any[] = new Array();
         let _loc4_: any[] = new Array();
         let _loc5_: any = 0;
         while(_loc5_ < this.DetailedTank_mc.sprTankData.arrTankDetails.length)
         {
            _loc2_.push(this.objGameObjectLibrary.method_37(this.DetailedTank_mc.sprTankData.arrTankDetails[_loc5_].type));
            _loc5_ += 1;
         }
         let _loc6_: boolean = true;
         _loc5_ = 0;
         while(_loc5_ < _loc2_.length)
         {
            _loc6_ = true;
            _loc7_ = 0;
            while(_loc7_ < _loc3_.length)
            {
               if(_loc2_[_loc5_] == _loc3_[_loc7_])
               {
                  _loc4_[_loc7_] += 1;
                  _loc6_ = false;
                  break;
               }
               _loc7_ += 1;
            }
            if(_loc6_)
            {
               _loc3_.push(_loc2_[_loc5_]);
               _loc4_.push(1);
            }
            _loc5_ += 1;
         }
         this.strLargeTankData = "";
         _loc5_ = 0;
         while(_loc5_ < _loc3_.length)
         {
            this.strLargeTankData = "" + this.strLargeTankData + "" + _loc4_[_loc5_] + " x " + _loc3_[_loc5_] + "\n";
            _loc5_ += 1;
         }
         this.DetailedTank_mc.txtTankData_txt.text = this.strLargeTankData;
         this.DetailedTank_mc.txtTankData_txt.alpha = 0.8;
         this.method_157();
         if(this.intCurrentLocationInTanksQueue != 0)
         {
            this.method_43();
         }
         else
         {
            this.UnGreyOutNextButton();
            this.GreyOutBackButton();
            this.GreyOutFirstButton();
         }
         this.method_148();
         this.method_237();
         if(this.refMain.RetrieveTankLocalRating(this.DetailedTank_mc.sprTankData.strID) == -1)
         {
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 1)
            {
               this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 2)
            {
               this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 3)
            {
               this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 4)
            {
               this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
            }
            if(Math.round(this.DetailedTank_mc.sprTankData.numRating) >= 5)
            {
               this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
            }
         }
         else
         {
            _loc8_ = this.refMain.RetrieveTankLocalRating(this.DetailedTank_mc.sprTankData.strID);
            _loc8_ = Math.round(_loc8_);
            this.DetailedTank_mc.sprTankData.numRating = _loc8_;
            if(_loc8_ >= 1)
            {
               this.DetailedTank_mc.btnStar1_mc.gotoAndStop(2);
            }
            if(_loc8_ >= 2)
            {
               this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
            }
            if(_loc8_ >= 3)
            {
               this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
            }
            if(_loc8_ >= 4)
            {
               this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
            }
            if(_loc8_ >= 5)
            {
               this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
            }
         }
      }
      
      private method_560(param1: string): any[]
      {
         let _loc2_: any[] = null;
         let _loc3_: number = 0;
         let _loc4_: string = null;
         let _loc5_: string = null;
         let _loc6_: string = null;
         let _loc7_: string = null;
         _loc2_ = new Array();
         _loc3_ = -1;
         _loc4_ = "";
         _loc5_ = "";
         _loc3_ = param1.search(" ");
         if(_loc3_ == -1)
         {
            return _loc2_;
         }
         _loc6_ = param1.substr(0,_loc3_);
         _loc7_ = param1.substr(_loc3_ + 1);
         if(_loc6_ == "class")
         {
            _loc4_ = "1";
         }
         else if(_loc6_ == "gunPoints")
         {
            _loc4_ = "2";
         }
         else if(_loc6_ == "bubblePoints")
         {
            _loc4_ = "3";
         }
         else if(_loc6_ == "difficulty")
         {
            _loc4_ = "4";
         }
         else if(_loc6_ == "id")
         {
            _loc4_ = "5";
         }
         else
         {
            if(_loc6_ != "rating")
            {
               return _loc2_;
            }
            _loc4_ = "6";
         }
         if(_loc7_ == "ascending")
         {
            _loc5_ = "1";
         }
         else
         {
            if(_loc7_ != "descending")
            {
               return _loc2_;
            }
            _loc5_ = "2";
         }
         _loc2_.push(_loc4_);
         _loc2_.push(_loc5_);
         return _loc2_;
      }
      
      private method_746(): any
      {
         this.txtExplination_txt.text = "";
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.method_118.bind(this));
         this.DetailedTank_mc.largeTankStats_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.method_136.bind(this));
         this.method_6(this.btnFirst_mc);
         this.method_6(this.btnPrev_mc);
         this.method_6(this.btnNext_mc);
         this.btnFirst_mc.removeEventListener(MouseEvent.CLICK, this.ReturnToFirstTank.bind(this));
         this.btnPrev_mc.removeEventListener(MouseEvent.CLICK, this.GoBackATank.bind(this));
         this.btnNext_mc.removeEventListener(MouseEvent.CLICK, this.GoToNextTank.bind(this));
         this.method_6(this.btnMainMenu_mc);
         this.method_6(this.btnEnterTankID_mc);
         this.method_6(this.btnEnterTankCode_mc);
         this.method_6(this.btnSearchForTanks_mc);
         if(this.var_23 != null)
         {
            this.method_6(this.btnMyAvatar_mc);
         }
         if(this.var_23 == null)
         {
            this.btnMainMenu_mc.removeEventListener(MouseEvent.CLICK, this.ReturnToMainMenuFromLargeView.bind(this));
         }
         else
         {
            this.btnMainMenu_mc.removeEventListener(MouseEvent.CLICK, this.method_127.bind(this));
         }
         this.btnEnterTankID_mc.removeEventListener(MouseEvent.CLICK, this.EnterLargeTankID.bind(this));
         this.btnEnterTankCode_mc.removeEventListener(MouseEvent.CLICK, this.method_135.bind(this));
         this.btnSearchForTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_410.bind(this));
         this.var_8.method_10();
         this.method_6(this.DetailedTank_mc.btnLargeDelete_mc);
         this.method_6(this.DetailedTank_mc.btnLargeBack_mc);
         this.DetailedTank_mc.btnLargeDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteLargeScreenTank.bind(this));
         this.DetailedTank_mc.btnLargeBack_mc.removeEventListener(MouseEvent.CLICK, this.method_117.bind(this));
         this.method_3(this.DetailedTank_mc.btnLargeEdit_mc);
         this.method_3(this.DetailedTank_mc.btnLargeSave);
         this.DetailedTank_mc.btnLargeSave.addEventListener(MouseEvent.CLICK, this.SaveLargeTank.bind(this));
         this.DetailedTank_mc.btnLargeEdit_mc.addEventListener(MouseEvent.CLICK, this.EditLargeTank.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.method_78();
      }
      
      private Edit3(param1: Event): void
      {
         let _loc2_: MovieClip = null;
         if(!this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]))
         {
            this.method_18();
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2].blnAvatarTank)
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2],"Avatar");
            }
            else
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2],"Enemy");
            }
         }
         else
         {
            _loc2_ = this.var_154.method_60(new class_60(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]);
               }
            }
         }
      }
      
      private Edit4(param1: Event): void
      {
         let _loc2_: MovieClip = null;
         if(!this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]))
         {
            this.method_18();
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3].blnAvatarTank)
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3],"Avatar");
            }
            else
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3],"Enemy");
            }
         }
         else
         {
            _loc2_ = this.var_154.method_60(new class_60(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]);
               }
            }
         }
      }
      
      private method_475(param1: Event): void
      {
         this.NotifyScreen_mc.removeEventListener(MouseEvent.CLICK, this.method_475.bind(this));
         this.method_2(this.NotifyScreen_mc);
         this.NotifyScreen_mc.mouseEnabled = false;
         this.var_297 = this.var_492;
      }
      
      private SearchForTanks(param1: Event): void
      {
         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener(MouseEvent.CLICK, this.AvatarTanksButton.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener(MouseEvent.CLICK, this.EnemyTanksButton.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private method_78(): void
      {
         if(this.var_297)
         {
            if(this.TankLoad1_mc.var_15 != null)
            {
               this.TankLoad1_mc.btnTankSelect_mc.removeEventListener(MouseEvent.CLICK, this.SelectTankToReturn1.bind(this));
            }
            if(this.TankLoad2_mc.var_15 != null)
            {
               this.TankLoad2_mc.btnTankSelect_mc.removeEventListener(MouseEvent.CLICK, this.SelectTankToReturn2.bind(this));
            }
            if(this.TankLoad3_mc.var_15 != null)
            {
               this.TankLoad3_mc.btnTankSelect_mc.removeEventListener(MouseEvent.CLICK, this.SelectTankToReturn3.bind(this));
            }
            if(this.TankLoad4_mc.var_15 != null)
            {
               this.TankLoad4_mc.btnTankSelect_mc.removeEventListener(MouseEvent.CLICK, this.SelectTankToReturn4.bind(this));
            }
         }
         this.removeEventListener(Event.ENTER_FRAME, this.method_91.bind(this));
      }
      
      private DeleteTank1(param1: Event): void
      {
         this.method_141(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]);
      }
      
      private DeleteTank3(param1: Event): void
      {
         this.method_141(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2]);
      }
      
      private DeleteTank4(param1: Event): void
      {
         this.method_141(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3]);
      }
      
      private method_229(param1: Event): void
      {
         this.addEventListener(Event.ENTER_FRAME, this.method_91.bind(this));
         this.method_2(this.selectTankScreen_mc);
         this.selectTankScreen_mc.mouseEnabled = false;
         this.selectTankScreen_mc.mouseChildren = false;
         this.selectTankScreen_mc.removeChildAt(1);
         this.var_8.method_7(this.selectTankScreen_mc.btnYes_mc);
         this.var_8.method_7(this.selectTankScreen_mc.btnNo_mc);
         this.selectTankScreen_mc.gotoAndStop(1);
      }
      
      private method_770(): any
      {
         if(this.var_23 == null || this.var_22)
         {
            this.TankLoad1_mc.var_2.btnEdit_mc.alpha = 0;
            this.TankLoad2_mc.var_2.btnEdit_mc.alpha = 0;
            this.TankLoad3_mc.var_2.btnEdit_mc.alpha = 0;
            this.TankLoad4_mc.var_2.btnEdit_mc.alpha = 0;
         }
         if(this.var_23 != null && !this.var_22)
         {
            this.method_3(this.TankLoad1_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad1_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad1_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad1_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad1_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad1_mc.var_2.btnDetails_mc.addEventListener(MouseEvent.CLICK, this.Details1.bind(this));
         if(this.var_23 != null && !this.var_22)
         {
            this.TankLoad1_mc.var_2.btnEdit_mc.addEventListener(MouseEvent.CLICK, this.Edit1.bind(this));
         }
         this.TankLoad1_mc.var_2.btnDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteTank1.bind(this));
         this.TankLoad1_mc.var_2.btnSave_mc.addEventListener(MouseEvent.CLICK, this.Save1.bind(this));
         this.TankLoad1_mc.var_2.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.Copy1.bind(this));
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(this.var_23 != null && !this.var_22)
         {
            this.method_3(this.TankLoad2_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad2_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad2_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad2_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad2_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad2_mc.var_2.btnDetails_mc.addEventListener(MouseEvent.CLICK, this.Details2.bind(this));
         if(this.var_23 != null && !this.var_22)
         {
            this.TankLoad2_mc.var_2.btnEdit_mc.addEventListener(MouseEvent.CLICK, this.Edit2.bind(this));
         }
         this.TankLoad2_mc.var_2.btnDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteTank2.bind(this));
         this.TankLoad2_mc.var_2.btnSave_mc.addEventListener(MouseEvent.CLICK, this.Save2.bind(this));
         this.TankLoad2_mc.var_2.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.Copy2.bind(this));
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(this.var_23 != null && !this.var_22)
         {
            this.method_3(this.TankLoad3_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad3_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad3_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad3_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad3_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad3_mc.var_2.btnDetails_mc.addEventListener(MouseEvent.CLICK, this.Details3.bind(this));
         if(this.var_23 != null && !this.var_22)
         {
            this.TankLoad3_mc.var_2.btnEdit_mc.addEventListener(MouseEvent.CLICK, this.Edit3.bind(this));
         }
         this.TankLoad3_mc.var_2.btnDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteTank3.bind(this));
         this.TankLoad3_mc.var_2.btnSave_mc.addEventListener(MouseEvent.CLICK, this.Save3.bind(this));
         this.TankLoad3_mc.var_2.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.Copy3.bind(this));
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(this.var_23 != null && !this.var_22)
         {
            this.method_3(this.TankLoad4_mc.var_2.btnEdit_mc,"Edit this tank!");
         }
         this.method_3(this.TankLoad4_mc.var_2.btnDetails_mc,"View a more detail description of the tank");
         this.method_3(this.TankLoad4_mc.var_2.btnDelete_mc,"Delete this tank from your computer");
         this.method_3(this.TankLoad4_mc.var_2.btnSave_mc,"Save this tank to your computer");
         this.method_3(this.TankLoad4_mc.var_2.btnCopy_mc,"Copy the tanks code to your clipboard");
         this.TankLoad4_mc.var_2.btnDetails_mc.addEventListener(MouseEvent.CLICK, this.Details4.bind(this));
         if(this.var_23 != null && !this.var_22)
         {
            this.TankLoad4_mc.var_2.btnEdit_mc.addEventListener(MouseEvent.CLICK, this.Edit4.bind(this));
         }
         this.TankLoad4_mc.var_2.btnDelete_mc.addEventListener(MouseEvent.CLICK, this.DeleteTank4.bind(this));
         this.TankLoad4_mc.var_2.btnSave_mc.addEventListener(MouseEvent.CLICK, this.Save4.bind(this));
         this.TankLoad4_mc.var_2.btnCopy_mc.addEventListener(MouseEvent.CLICK, this.Copy4.bind(this));
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = true;
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.method_3(this.btnFirst_mc,"Return to first page tanks");
         }
         else
         {
            this.btnFirst_mc.gotoAndStop(5);
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.method_3(this.btnPrev_mc,"Return to previous page tanks");
         }
         else
         {
            this.btnPrev_mc.gotoAndStop(5);
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.method_3(this.btnNext_mc,"Go to next page of tanks");
         }
         else
         {
            this.btnNext_mc.gotoAndStop(5);
         }
         if(this.btnFirst_mc.mouseEnabled)
         {
            this.btnFirst_mc.addEventListener(MouseEvent.CLICK, this.method_128.bind(this));
         }
         if(this.btnPrev_mc.mouseEnabled)
         {
            this.btnPrev_mc.addEventListener(MouseEvent.CLICK, this.method_124.bind(this));
         }
         if(this.btnNext_mc.mouseEnabled)
         {
            this.btnNext_mc.addEventListener(MouseEvent.CLICK, this.method_105.bind(this));
         }
         if(this.var_23 == null)
         {
            this.method_3(this.btnMainMenu_mc,"Return to the Main Menu");
            this.btnMainMenu_mc.addEventListener(MouseEvent.CLICK, this.method_133.bind(this));
         }
         else
         {
            this.method_3(this.btnMainMenu_mc,this.var_254);
            this.btnMainMenu_mc.addEventListener(MouseEvent.CLICK, this.method_126.bind(this));
         }
         this.method_3(this.btnSearchForTanks_mc,"Search for bubble tanks");
         this.method_3(this.btnSortTanks_mc,"Sort your list of tanks by...");
         this.method_3(this.btnEnterTankID_mc,"Enter an existing tank ID");
         this.method_3(this.btnEnterTankCode_mc,"View tank from tank code");
         this.btnSearchForTanks_mc.addEventListener(MouseEvent.CLICK, this.SearchForTanks.bind(this));
         this.btnSortTanks_mc.addEventListener(MouseEvent.CLICK, this.method_125.bind(this));
         this.btnEnterTankID_mc.addEventListener(MouseEvent.CLICK, this.EnterTankID.bind(this));
         this.btnEnterTankCode_mc.addEventListener(MouseEvent.CLICK, this.method_129.bind(this));
         this.var_8.method_4(this.btnViewLocalTanks_mc,true,this.ViewAllLocalTanks);
         this.var_39.push({
            "btn":this.btnViewLocalTanks_mc,
            "DescText":"Lets you view all tanks on all profiles"
         });
         if(!this.var_22)
         {
            this.var_8.method_4(this.btnCreateATank_mc,true,this.method_289);
         }
         if(!this.var_22)
         {
            this.var_39.push({
               "btn":this.btnCreateATank_mc,
               "DescText":"Create a new tank!"
            });
         }
         if(this.var_70 == "Avatar")
         {
            this.var_8.method_4(this.btnMyAvatar_mc,true,this.ShowCurrentAvatar);
            this.var_39.push({
               "btn":this.btnMyAvatar_mc,
               "DescText":"See your currently selected player tank"
            });
            this.method_5(this.btnMyAvatar_mc);
         }
         this.method_98();
      }
      
      private SearchForATank(param1: Event): void
      {
         let _loc2_: number = NaN;
         let _loc3_: string = null;
         let _loc4_: string = null;
         let _loc5_: string = null;
         let _loc6_: any = undefined;
         this.strViewerType = this.strSortType + "Search";
         this.arrTanksInqueue = new Array();
         this.arrSearchFilters = new Array();
         _loc2_ = Math.floor(int(this.var_36 / 3) + 1);
         this.arrSearchFilters.push("page=" + _loc2_);
         this.arrSearchFilters.push("type=" + this.strSortType);
         if(this.SearchForTanksScreen_mc.btnClass1_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("class=1");
         }
         if(this.SearchForTanksScreen_mc.btnClass2_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("class=2");
         }
         if(this.SearchForTanksScreen_mc.btnClass3_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("class=3");
         }
         if(this.SearchForTanksScreen_mc.btnClass4_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("class=4");
         }
         if(this.SearchForTanksScreen_mc.btnClass5_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("class=5");
         }
         if(this.SearchForTanksScreen_mc.btnClass6_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("class=6");
         }
         if(this.SearchForTanksScreen_mc.btnYes_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("HI=true");
         }
         if(this.SearchForTanksScreen_mc.btnNo_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("HI=false");
         }
         if(this.SearchForTanksScreen_mc.btnFeaturedYes_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("featured=true");
         }
         if(this.SearchForTanksScreen_mc.btnFeaturedNo_mc.currentFrame == 3)
         {
            this.arrSearchFilters.push("featured=false");
         }
         _loc3_ = "=";
         _loc4_ = "=";
         _loc5_ = "=";
         if(this.SearchForTanksScreen_mc.btnOperatorGP_mc.currentFrame == 2)
         {
            _loc3_ = ">";
         }
         if(this.SearchForTanksScreen_mc.btnOperatorGP_mc.currentFrame == 3)
         {
            _loc3_ = "<";
         }
         if(this.SearchForTanksScreen_mc.btnOperatorBP_mc.currentFrame == 2)
         {
            _loc4_ = ">";
         }
         if(this.SearchForTanksScreen_mc.btnOperatorBP_mc.currentFrame == 3)
         {
            _loc4_ = "<";
         }
         if(this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.currentFrame == 2)
         {
            _loc5_ = ">";
         }
         if(this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.currentFrame == 3)
         {
            _loc5_ = "<";
         }
         if(this.SearchForTanksScreen_mc.txtName_txt.text != "Type name here" && this.SearchForTanksScreen_mc.txtName_txt.text != "")
         {
            this.arrSearchFilters.push("name=" + this.SearchForTanksScreen_mc.txtName_txt.text);
         }
         if(this.SearchForTanksScreen_mc.txtAuthor_txt.text != "Type author here" && this.SearchForTanksScreen_mc.txtAuthor_txt.text != "")
         {
            this.arrSearchFilters.push("author=" + this.SearchForTanksScreen_mc.txtAuthor_txt.text);
         }
         if(this.SearchForTanksScreen_mc.txtGunPoints_txt.text != "Type number here" && this.SearchForTanksScreen_mc.txtGunPoints_txt.text != "")
         {
            this.arrSearchFilters.push("gunPoints" + _loc3_ + this.SearchForTanksScreen_mc.txtGunPoints_txt.text);
         }
         if(this.SearchForTanksScreen_mc.txtBubblePoints_txt.text != "Type number here" && this.SearchForTanksScreen_mc.txtBubblePoints_txt.text != "")
         {
            this.arrSearchFilters.push("bubblePoints" + _loc4_ + this.SearchForTanksScreen_mc.txtBubblePoints_txt.text);
         }
         if(this.strSortType == "Enemy" && this.SearchForTanksScreen_mc.txtDiffRating_txt.text != "Type number here" && this.SearchForTanksScreen_mc.txtDiffRating_txt.text != "")
         {
            this.arrSearchFilters.push("difficulty" + _loc5_ + this.SearchForTanksScreen_mc.txtDiffRating_txt.text);
         }
         this.arrSearchSorts = new Array();
         this.arrSearchSorts.push("rating descending");
         if(this.SearchForTanksScreen_mc.btnSortClass_mc.currentFrame == 1 && this.SearchForTanksScreen_mc.btnSortGunPoints_mc.currentFrame == 1 && this.SearchForTanksScreen_mc.btnSortBubblePoints_mc.currentFrame == 1)
         {
            this.arrSearchSorts.push("class ascending");
            this.arrSearchSorts.push("id descending");
         }
         else
         {
            if(this.SearchForTanksScreen_mc.btnSortClass_mc.currentFrame == 2)
            {
               this.arrSearchSorts.push("class descending");
            }
            if(this.SearchForTanksScreen_mc.btnSortClass_mc.currentFrame == 3)
            {
               this.arrSearchSorts.push("class ascending");
            }
            if(this.SearchForTanksScreen_mc.btnSortGunPoints_mc.currentFrame == 2)
            {
               this.arrSearchSorts.push("gunPoints descending");
            }
            if(this.SearchForTanksScreen_mc.btnSortGunPoints_mc.currentFrame == 3)
            {
               this.arrSearchSorts.push("gunPoints ascending");
            }
            if(this.SearchForTanksScreen_mc.btnSortBubblePoints_mc.currentFrame == 2)
            {
               this.arrSearchSorts.push("bubblePoints descending");
            }
            if(this.SearchForTanksScreen_mc.btnSortBubblePoints_mc.currentFrame == 3)
            {
               this.arrSearchSorts.push("bubblePoints ascending");
            }
         }
         if(this.strSortType == "Enemy")
         {
            if(this.SearchForTanksScreen_mc.btnSortDiffRating_mc.currentFrame == 2)
            {
               this.arrSearchSorts.push("difficulty descending");
            }
            if(this.SearchForTanksScreen_mc.btnSortDiffRating_mc.currentFrame == 3)
            {
               this.arrSearchSorts.push("difficulty ascending");
            }
         }
         this.var_117 = new class_96();
         this.addChild(this.var_117);
         this.var_117.x = 550 / 2;
         this.var_117.y = 450 / 2;
         _loc6_ = 0;
         while(_loc6_ < this.arrSearchFilters.length)
         {
            _loc6_ += 1;
         }
         this.method_209(this.arrSearchFilters,this.arrSearchSorts);
      }
      
      private method_121(): boolean
      {
         let _loc1_: number = NaN;
         let _loc2_: TankData = null;
         let _loc3_: any = undefined;
         this.arrTanksInqueue = new Array();
         _loc1_ = this.refMain.objCurrentPlayer.arrSavedTanks.length;
         _loc3_ = 0;
         while(_loc3_ < _loc1_)
         {
            if(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_].blnShowInSearch == "true")
            {
               _loc2_ = new TankData();
               if(_loc2_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_].Data))
               {
                  if(this.strViewerType == "AvatarLocal" && _loc2_.blnAvatarTank)
                  {
                     this.arrTanksInqueue.push(_loc2_);
                  }
                  if(this.strViewerType == "EnemyLocal" && !_loc2_.blnAvatarTank)
                  {
                     this.arrTanksInqueue.push(_loc2_);
                  }
                  if(this.strViewerType == "AvatarLocal" && _loc2_.blnAvatarTank || this.strViewerType == "EnemyLocal" && !_loc2_.blnAvatarTank)
                  {
                     this.arrTanksInqueue[this.arrTanksInqueue.length - 1].tankType = 1;
                  }
               }
               _loc2_ = null;
            }
            _loc3_ += 1;
         }
         if(_loc1_ == 0)
         {
            return false;
         }
         return true;
      }
      
      private DeleteTank2(param1: Event): void
      {
         this.method_141(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1]);
      }
      
      private method_13(param1: any, param2: string = ""): void
      {
         param1.gotoAndStop(1);
         param1.addEventListener(MouseEvent.MOUSE_OVER, this.method_313.bind(this));
         param1.addEventListener(MouseEvent.MOUSE_OUT, this.method_420.bind(this));
         param1.mouseChildren = false;
         param1.buttonMode = true;
         param1.useHandCursor = true;
         this.var_39.push({
            "btn":param1,
            "DescText":param2
         });
      }
      
      private method_141(param1: TankData): any
      {
         let _loc2_: TankData = null;
         this.selectTankScreen_mc.gotoAndStop(2);
         this.selectTankScreen_mc.alpha = 0;
         this.selectTankScreen_mc.objTankData = param1;
         this.method_5(this.selectTankScreen_mc);
         this.selectTankScreen_mc.mouseEnabled = true;
         this.selectTankScreen_mc.mouseChildren = true;
         _loc2_ = new TankData();
         _loc2_.ImportTankData(param1.ExportTankData());
         if(_loc2_.strID.substr(0,1) == "L")
         {
            this.selectTankScreen_mc.LocalDeleteTank_mc.alpha = 1;
         }
         else
         {
            this.selectTankScreen_mc.LocalDeleteTank_mc.alpha = 0;
         }
         this.selectTankScreen_mc.addChildAt(_loc2_.method_61(),1);
         this.var_8.method_4(this.selectTankScreen_mc.btnYes_mc,true,this.method_677);
         this.var_8.method_4(this.selectTankScreen_mc.btnNo_mc,true,this.method_229);
      }
      
      private UnHighlight1(param1: Event): void
      {
         if(this.DetailedTank_mc.sprTankData.numRating < 1)
         {
            this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         }
      }
      
      private UnHighlight2(param1: Event): void
      {
         if(this.DetailedTank_mc.sprTankData.numRating < 1)
         {
            this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 2)
         {
            this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         }
         else
         {
            this.DetailedTank_mc.btnStar2_mc.gotoAndStop(2);
         }
      }
      
      private method_263(param1: Event): any
      {
         this.SearchForTanksScreen_mc.alpha = 0;
         this.method_6(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_263.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_282.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.refMain.TransitionTankViewer2TankCreator();
         this.Destroy();
      }
      
      private UnGreyOutNextButton(): void
      {
         this.btnNext_mc.mouseEnabled = true;
         this.btnNext_mc.gotoAndStop(1);
         this.btnNext_mc.buttonMode = true;
         this.btnNext_mc.useHandCursor = true;
      }
      
      private method_646(): any
      {
         this.txtExplination_txt.text = "";
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.method_118.bind(this));
         this.DetailedTank_mc.largeTankStats_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.method_136.bind(this));
         this.method_6(this.btnFirst_mc);
         this.method_6(this.btnPrev_mc);
         this.method_6(this.btnNext_mc);
         this.btnFirst_mc.removeEventListener(MouseEvent.CLICK, this.ReturnToFirstTank.bind(this));
         this.btnPrev_mc.removeEventListener(MouseEvent.CLICK, this.GoBackATank.bind(this));
         this.btnNext_mc.removeEventListener(MouseEvent.CLICK, this.GoToNextTank.bind(this));
         this.method_6(this.btnMainMenu_mc);
         this.method_6(this.btnEnterTankID_mc);
         this.method_6(this.btnEnterTankCode_mc);
         this.method_6(this.btnSearchForTanks_mc);
         if(this.var_23 != null)
         {
            this.method_6(this.btnMyAvatar_mc);
         }
         if(this.var_23 == null)
         {
            this.btnMainMenu_mc.removeEventListener(MouseEvent.CLICK, this.ReturnToMainMenuFromLargeView.bind(this));
         }
         else
         {
            this.btnMainMenu_mc.removeEventListener(MouseEvent.CLICK, this.method_127.bind(this));
         }
         this.btnEnterTankID_mc.removeEventListener(MouseEvent.CLICK, this.EnterLargeTankID.bind(this));
         this.btnEnterTankCode_mc.removeEventListener(MouseEvent.CLICK, this.method_135.bind(this));
         this.btnSearchForTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_434.bind(this));
         this.var_8.method_10();
         this.method_6(this.DetailedTank_mc.btnLargeDelete_mc);
         this.method_6(this.DetailedTank_mc.btnLargeBack_mc);
         this.DetailedTank_mc.btnLargeDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteLargeScreenTank.bind(this));
         this.DetailedTank_mc.btnLargeBack_mc.removeEventListener(MouseEvent.CLICK, this.method_117.bind(this));
         this.method_3(this.DetailedTank_mc.btnLargeEdit_mc);
         this.method_3(this.DetailedTank_mc.btnLargeSave);
         this.DetailedTank_mc.btnLargeSave.addEventListener(MouseEvent.CLICK, this.SaveLargeTank.bind(this));
         this.DetailedTank_mc.btnLargeEdit_mc.addEventListener(MouseEvent.CLICK, this.EditLargeTank.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.method_78();
      }
      
      private method_532(param1: Event): void
      {
         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.txtPageNumCurrent_txt.text = "";
         this.method_43();
         this.strViewerType = "AvatarLocal";
         this.arrTanksInqueue = new Array();
         this.method_86();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.btnSortTanks_mc.x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.method_33();
      }
      
      private UnHighlight4(param1: Event): void
      {
         if(this.DetailedTank_mc.sprTankData.numRating < 1)
         {
            this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 2)
         {
            this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 3)
         {
            this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 4)
         {
            this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         }
         else
         {
            this.DetailedTank_mc.btnStar4_mc.gotoAndStop(2);
         }
      }
      
      private UnHighlight5(param1: Event): void
      {
         if(this.DetailedTank_mc.sprTankData.numRating < 1)
         {
            this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 2)
         {
            this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 3)
         {
            this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 4)
         {
            this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 5)
         {
            this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         }
         else
         {
            this.DetailedTank_mc.btnStar5_mc.gotoAndStop(2);
         }
      }
      
      private method_254(param1: IOErrorEvent): void
      {
      }
      
      private ViewAllLocalAvatarSelectTanks(param1: Event): any
      {
         this.var_76 = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_43();
         this.strViewerType = "AvatarLocal";
         this.arrTanksInqueue = new Array();
         this.method_86();
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_23();
         this.method_24();
         this.TankLoad1_mc.alpha = 0;
         this.TankLoad2_mc.alpha = 0;
         this.TankLoad3_mc.alpha = 0;
         this.TankLoad4_mc.alpha = 0;
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue] != null)
         {
            this.method_5(this.TankLoad1_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 1] != null)
         {
            this.method_5(this.TankLoad2_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 2] != null)
         {
            this.method_5(this.TankLoad3_mc);
         }
         if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue + 3] != null)
         {
            this.method_5(this.TankLoad4_mc);
         }
         this.SearchForTanksScreen_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.mouseChildren = false;
         this.btnSortTanks_mc.x = this.var_131.x;
         this.GreyOutBackButton();
         this.GreyOutFirstButton();
         this.UnGreyOutNextButton();
         this.method_18();
         this.method_33();
      }
      
      private UnHighlight3(param1: Event): void
      {
         if(this.DetailedTank_mc.sprTankData.numRating < 1)
         {
            this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 2)
         {
            this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         }
         if(this.DetailedTank_mc.sprTankData.numRating < 3)
         {
            this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         }
         else
         {
            this.DetailedTank_mc.btnStar3_mc.gotoAndStop(2);
         }
      }
      
      private SaveLargeTank(param1: Event): void
      {
         let _loc3_: any = undefined;
         let _loc4_: TankData = null;
         let _loc2_: TankData = new TankData();
         if(_loc2_.ImportTankData(this.DetailedTank_mc.sprTankData.ExportTankData()))
         {
            this.method_6(this.DetailedTank_mc.btnLargeSave);
            this.DetailedTank_mc.btnLargeSave.removeEventListener(MouseEvent.CLICK, this.SaveLargeTank.bind(this));
            _loc3_ = 0;
            while(_loc3_ < this.refMain.objCurrentPlayer.arrSavedTanks.length)
            {
               _loc4_ = new TankData();
               _loc4_.ImportTankData(this.refMain.objCurrentPlayer.arrSavedTanks[_loc3_].Data);
               if(this.method_122(_loc2_,_loc4_))
               {
                  this.DetailedTank_mc.btnLargeSave.gotoAndStop(4);
                  return;
               }
               _loc3_ += 1;
            }
            this.DetailedTank_mc.btnLargeSave.gotoAndStop(3);
            this.refMain.objCurrentPlayer.method_73(this.DetailedTank_mc.sprTankData.ExportTankData());
         }
         else
         {
            this.method_83(true);
         }
      }
      
      private method_47(): void
      {
         this.method_6(this.btnCurrentPoints_mc);
         if(this.var_70 == null)
         {
            this.method_599();
            return;
         }
         if(this.var_70 == "Avatar")
         {
            this.method_646();
            return;
         }
         if(this.var_70 == "Enemy")
         {
            this.method_746();
            return;
         }
      }
      
      private method_18(): void
      {
         this.method_6(this.btnCurrentPoints_mc);
         if(this.var_70 == null)
         {
            this.method_481();
            return;
         }
         if(this.var_70 == "Avatar")
         {
            this.method_506();
            return;
         }
         if(this.var_70 == "Enemy")
         {
            this.method_666();
            return;
         }
      }
      
      private method_118(param1: Event): void
      {
         let _loc2_: any = undefined;
         param1.target.gotoAndStop(2);
         this.method_157();
         _loc2_ = 0;
         while(_loc2_ < this.var_39.length)
         {
            if(param1.target == this.var_39[_loc2_].btn)
            {
               this.txtExplination_txt.text = this.var_39[_loc2_].DescText;
            }
            _loc2_ += 1;
         }
      }
      
      private ViewCurrentProfileTanks(param1: Event): void
      {
         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener(MouseEvent.CLICK, this.method_190.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener(MouseEvent.CLICK, this.method_212.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private EditLargeTank(param1: Event): void
      {
         let _loc2_: MovieClip = null;
         if(!this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]) && this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]))
         {
            this.method_18();
            if(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue].blnAvatarTank)
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue],"Avatar");
            }
            else
            {
               this.refMain.StoreViewerSearch(this.arrSearchFilters,this.arrSearchSorts,this.arrTanksInqueue,this.intCurrentLocationInTanksQueue);
               this.refMain.TransitionTankViewer2TankCreator(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue],"Enemy");
            }
         }
         else
         {
            _loc2_ = this.var_154.method_60(new class_60(),224,196,"mainEffects");
            _loc2_.txtErrorOutputText_txt.text = "";
            if(this.refMain.objCurrentPlayer.method_17(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]))
            {
               _loc2_.txtErrorOutputText_txt.text = "Exceeds your " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]);
            }
            if(!this.refMain.objCurrentPlayer.DoesProfileHaveAllThePartsForTank(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]))
            {
               if(_loc2_.txtErrorOutputText_txt.text == "")
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have all the parts for this tank";
               }
               else
               {
                  _loc2_.txtErrorOutputText_txt.text = "Do not have the parts and exceeds " + this.refMain.objCurrentPlayer.method_27(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]);
               }
            }
         }
      }
      
      private method_506(): any
      {
         this.txtExplination_txt.text = "";
         this.method_6(this.TankLoad1_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad1_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad1_mc.var_2.btnDelete_mc);
         this.TankLoad1_mc.var_2.btnDetails_mc.removeEventListener(MouseEvent.CLICK, this.Details1.bind(this));
         this.TankLoad1_mc.var_2.btnEdit_mc.removeEventListener(MouseEvent.CLICK, this.Edit1.bind(this));
         this.TankLoad1_mc.var_2.btnDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteTank1.bind(this));
         this.method_6(this.TankLoad2_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad2_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad2_mc.var_2.btnDelete_mc);
         this.TankLoad2_mc.var_2.btnDetails_mc.removeEventListener(MouseEvent.CLICK, this.Details2.bind(this));
         this.TankLoad2_mc.var_2.btnEdit_mc.removeEventListener(MouseEvent.CLICK, this.Edit2.bind(this));
         this.TankLoad2_mc.var_2.btnDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteTank2.bind(this));
         this.method_6(this.TankLoad3_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad3_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad3_mc.var_2.btnDelete_mc);
         this.TankLoad3_mc.var_2.btnDetails_mc.removeEventListener(MouseEvent.CLICK, this.Details3.bind(this));
         this.TankLoad3_mc.var_2.btnEdit_mc.removeEventListener(MouseEvent.CLICK, this.Edit3.bind(this));
         this.TankLoad3_mc.var_2.btnDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteTank3.bind(this));
         this.method_6(this.TankLoad4_mc.var_2.btnEdit_mc);
         this.method_6(this.TankLoad4_mc.var_2.btnDetails_mc);
         this.method_6(this.TankLoad4_mc.var_2.btnDelete_mc);
         this.TankLoad4_mc.var_2.btnDetails_mc.removeEventListener(MouseEvent.CLICK, this.Details4.bind(this));
         this.TankLoad4_mc.var_2.btnEdit_mc.removeEventListener(MouseEvent.CLICK, this.Edit4.bind(this));
         this.TankLoad4_mc.var_2.btnDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteTank4.bind(this));
         this.method_6(this.btnFirst_mc);
         this.method_6(this.btnPrev_mc);
         this.method_6(this.btnNext_mc);
         this.btnFirst_mc.removeEventListener(MouseEvent.CLICK, this.method_128.bind(this));
         this.btnPrev_mc.removeEventListener(MouseEvent.CLICK, this.method_124.bind(this));
         this.btnNext_mc.removeEventListener(MouseEvent.CLICK, this.method_105.bind(this));
         this.method_6(this.btnMainMenu_mc);
         this.method_6(this.btnSearchForTanks_mc);
         this.method_6(this.btnSortTanks_mc);
         this.method_6(this.btnEnterTankID_mc);
         this.method_6(this.btnEnterTankCode_mc);
         if(this.var_23 == null)
         {
            this.btnMainMenu_mc.removeEventListener(MouseEvent.CLICK, this.method_133.bind(this));
         }
         else
         {
            this.btnMainMenu_mc.removeEventListener(MouseEvent.CLICK, this.method_126.bind(this));
         }
         this.btnSearchForTanks_mc.removeEventListener(MouseEvent.CLICK, this.SearchForAvatarSelectTanks.bind(this));
         this.btnSortTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_125.bind(this));
         this.btnEnterTankID_mc.removeEventListener(MouseEvent.CLICK, this.EnterTankID.bind(this));
         this.btnEnterTankCode_mc.removeEventListener(MouseEvent.CLICK, this.method_129.bind(this));
         this.var_8.method_10();
         this.var_39.length = 0;
         this.method_78();
      }
      
      private method_133(param1: Event): void
      {
         this.method_18();
         this.refMain.WipeArrTankViewerData();
         this.refMain.TransitionTankViewer2MainMenu();
      }
      
      private method_128(param1: Event): void
      {
         this.method_78();
         this.TankLoad1_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad1_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad2_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad2_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad3_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad3_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad4_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad4_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad1_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad2_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad3_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad4_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.intCurrentLocationInTanksQueue = 0;
         this.var_36 = 1;
         this.method_24();
         this.GreyOutFirstButton();
         this.GreyOutBackButton();
         if(this.arrTanksInqueue.length > 4)
         {
            this.UnGreyOutNextButton();
         }
         else
         {
            this.GreyOutNextButton();
         }
         this.method_23();
         this.method_18();
         this.method_33();
         this.method_98();
      }
      
      private method_124(param1: Event): void
      {
         this.method_78();
         this.TankLoad1_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad1_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad2_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad2_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad3_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad3_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad4_mc.var_2.btnSave_mc.mouseEnabled = true;
         this.TankLoad4_mc.var_2.btnSave_mc.gotoAndStop(1);
         this.TankLoad1_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad1_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad2_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad2_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad3_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad3_mc.var_2.btnCopy_mc.gotoAndStop(1);
         this.TankLoad4_mc.var_2.btnCopy_mc.mouseEnabled = true;
         this.TankLoad4_mc.var_2.btnCopy_mc.gotoAndStop(1);
         if(this.intCurrentLocationInTanksQueue - 4 >= 0)
         {
            this.intCurrentLocationInTanksQueue -= 4;
            --this.var_36;
         }
         else
         {
            this.intCurrentLocationInTanksQueue = 0;
            this.var_36 = 1;
         }
         this.method_24();
         if(this.arrTanksInqueue.length > 4)
         {
            this.UnGreyOutNextButton();
         }
         else
         {
            this.GreyOutNextButton();
         }
         if(this.intCurrentLocationInTanksQueue <= 0)
         {
            this.GreyOutBackButton();
            this.GreyOutFirstButton();
         }
         this.method_23();
         this.method_18();
         this.method_33();
         this.method_98();
      }
      
      private method_33(): void
      {
         this.method_3(this.btnCurrentPoints_mc,"Your current profile stats and points");
         let _loc1_: number = 0;
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         if(this.refMain.var_139)
         {
            _loc1_ = 12;
         }
         else
         {
            _loc1_ = this.refMain.objCurrentPlayer.gunPointsMax.method_29();
         }
         if(this.refMain.blnCheatClass)
         {
            _loc2_ = 6;
         }
         else
         {
            _loc2_ = this.refMain.objCurrentPlayer.maxClass.method_29();
         }
         if(this.refMain.var_132)
         {
            _loc3_ = 100;
         }
         else
         {
            _loc3_ = this.refMain.objCurrentPlayer.bubblePointsMax.method_29();
         }
         this.btnCurrentPoints_mc.txtClass_txt.text = _loc2_;
         this.btnCurrentPoints_mc.txtBBL_txt.text = _loc3_;
         this.btnCurrentPoints_mc.txtGP_txt.text = _loc1_;
         if(this.var_70 == null)
         {
            this.btnCreateATank_mc.alpha = 0;
            this.method_770();
            return;
         }
         if(this.var_70 == "Avatar")
         {
            if(!this.var_22)
            {
               this.method_5(this.btnCreateATank_mc);
            }
            this.method_543();
            return;
         }
         if(this.var_70 == "Enemy")
         {
            if(!this.var_22)
            {
               this.method_5(this.btnCreateATank_mc);
            }
            this.method_491();
            return;
         }
      }
      
      private method_112(param1: Event): void
      {
         if(param1.target.mouseEnabled == true)
         {
            param1.target.gotoAndStop(1);
         }
         this.txtExplination_txt.text = "";
      }
      
      private Destroy(): void
      {
         this.urlLoader.removeEventListener(Event.COMPLETE, this.method_278.bind(this));
         this.urlLoader.removeEventListener(HTTPStatusEvent.HTTP_STATUS, this.method_280.bind(this));
         this.urlLoader.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, this.method_253.bind(this));
         this.urlLoader.removeEventListener(IOErrorEvent.IO_ERROR, this.method_254.bind(this));
         while(this.numChildren > 0)
         {
            this.removeChildAt(0);
         }
         this.objGameObjectLibrary = null;
         this.var_129.length = 0;
         this.var_130.length = 0;
         this.var_116.length = 0;
         this.var_39.length = 0;
         this.arrSearchFilters.length = 0;
         this.arrSearchSorts.length = 0;
         this.arrTanksInqueue.length = 0;
         this.var_129 = null;
         this.var_130 = null;
         this.var_116 = null;
         this.var_39 = null;
         this.arrSearchFilters = null;
         this.arrSearchSorts = null;
         this.arrTanksInqueue = null;
      }
      
      private method_3(param1: any, param2: string = ""): void
      {
         param1.gotoAndStop(1);
         param1.addEventListener(MouseEvent.MOUSE_OVER, this.method_107.bind(this));
         param1.addEventListener(MouseEvent.MOUSE_OUT, this.method_112.bind(this));
         param1.mouseChildren = false;
         param1.buttonMode = true;
         param1.useHandCursor = true;
         this.var_39.push({
            "btn":param1,
            "DescText":param2
         });
      }
      
      private SubmitTankID(param1: Event): void
      {
         let _loc2_: string = null;
         this.method_6(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.SearchForTanksScreen_mc.btnBack_mc.removeEventListener(MouseEvent.CLICK, this.method_161.bind(this));
         this.SearchForTanksScreen_mc.btnSubmit_mc.removeEventListener(MouseEvent.CLICK, this.SubmitTankID.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.arrTanksInqueue = new Array();
         this.arrSearchFilters = new Array();
         this.arrSearchFilters.push("page=1");
         _loc2_ = "Enemy";
         if(this.var_70 == null)
         {
            _loc2_ = "Enemy";
            if(String(this.SearchForTanksScreen_mc.txtEnterID_txt.text).substr(0,1) == "A")
            {
               _loc2_ = "Avatar";
            }
            this.arrSearchFilters.push("type=" + _loc2_);
            this.arrSearchFilters.push("id=" + this.SearchForTanksScreen_mc.txtEnterID_txt.text);
         }
         else
         {
            if(String(this.SearchForTanksScreen_mc.txtEnterID_txt.text).substr(0,1) != this.var_70.substr(0,1))
            {
               this.ReturnToViewTanksFromSearch();
               return;
            }
            _loc2_ = "Enemy";
            if(String(this.SearchForTanksScreen_mc.txtEnterID_txt.text).substr(0,1) == "A")
            {
               _loc2_ = "Avatar";
            }
            this.arrSearchFilters.push("type=" + _loc2_);
            this.arrSearchFilters.push("id=" + this.SearchForTanksScreen_mc.txtEnterID_txt.text);
         }
         this.arrSearchSorts = new Array();
         this.arrSearchSorts.push("id descending");
         this.method_209(this.arrSearchFilters,this.arrSearchSorts);
      }
      
      private method_163(param1: TankData): void
      {
         let _loc2_: TankData = null;
         this.selectTankScreen_mc.alpha = 0;
         this.selectTankScreen_mc.objTankData = param1;
         this.method_5(this.selectTankScreen_mc);
         this.selectTankScreen_mc.mouseEnabled = true;
         this.selectTankScreen_mc.mouseChildren = true;
         _loc2_ = new TankData();
         _loc2_.ImportTankData(param1.ExportTankData());
         this.selectTankScreen_mc.addChildAt(_loc2_.method_61(),1);
         this.var_8.method_4(this.selectTankScreen_mc.btnYes_mc,true,this.CallSelectableCallBackFunction);
         this.var_8.method_4(this.selectTankScreen_mc.btnNo_mc,true,this.method_229);
      }
      
      private ViewAllLocalTanks(param1: Event): void
      {
         this.var_76 = true;
         this.method_18();
         this.method_9(this.TankLoad1_mc);
         this.method_9(this.TankLoad2_mc);
         this.method_9(this.TankLoad3_mc);
         this.method_9(this.TankLoad4_mc);
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnAvatarTanks_mc);
         this.method_3(this.SearchForTanksScreen_mc.btnEnemyTanks_mc);
         this.SearchForTanksScreen_mc.btnAvatarTanks_mc.addEventListener(MouseEvent.CLICK, this.method_171.bind(this));
         this.SearchForTanksScreen_mc.btnEnemyTanks_mc.addEventListener(MouseEvent.CLICK, this.method_200.bind(this));
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
      }
      
      private method_161(param1: Event): void
      {
         this.method_6(this.SearchForTanksScreen_mc.btnSubmit_mc);
         this.method_6(this.SearchForTanksScreen_mc.btnBack_mc);
         this.SearchForTanksScreen_mc.btnBack_mc.removeEventListener(MouseEvent.CLICK, this.method_161.bind(this));
         this.SearchForTanksScreen_mc.btnSubmit_mc.removeEventListener(MouseEvent.CLICK, this.SubmitTankID.bind(this));
         this.SearchForTanksScreen_mc.txtEnterID_txt.removeEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.ReturnToViewTanksFromSearch();
      }
      
      private method_434(param1: Event): void
      {
         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(2);
         this.method_5(this.SearchForTanksScreen_mc);
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
         this.strSortType = "Avatar";
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.SearchForTanksScreen_mc.diffRatingBG_mc.alpha = 0;
         this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.text = "";
         this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.selectable = false;
         this.SearchForTanksScreen_mc.txtDiffRating_txt.text = "";
         this.SearchForTanksScreen_mc.txtDiffRating_txt.selectable = false;
         this.SearchForTanksScreen_mc.btnSortDiffRating_mc.alpha = 0;
         this.SearchForTanksScreen_mc.btnSortDiffRating_mc.mouseEnabled = false;
         this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.alpha = 0;
         this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.mouseEnabled = false;
         this.var_36 = 1;
         this.method_3(this.SearchForTanksScreen_mc.btnSearch_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass1_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass2_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass3_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass4_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass5_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass6_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnYes_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnNo_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnFeaturedYes_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnFeaturedNo_mc);
         this.SearchForTanksScreen_mc.btnFeaturedYes_mc.addEventListener(MouseEvent.CLICK, this.FeaturedYesDown.bind(this));
         this.SearchForTanksScreen_mc.btnFeaturedNo_mc.addEventListener(MouseEvent.CLICK, this.FeaturedNoDown.bind(this));
         this.SearchForTanksScreen_mc.btnSearch_mc.addEventListener(MouseEvent.CLICK, this.SearchForATank.bind(this));
         this.SearchForTanksScreen_mc.btnClass1_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass2_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass3_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass4_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass5_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass6_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnYes_mc.addEventListener(MouseEvent.CLICK, this.HIYesDown.bind(this));
         this.SearchForTanksScreen_mc.btnNo_mc.addEventListener(MouseEvent.CLICK, this.HINoDown.bind(this));
         this.SearchForTanksScreen_mc.txtName_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtAuthor_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtGunPoints_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtBubblePoints_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.method_25(this.SearchForTanksScreen_mc.btnSortClass_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnSortGunPoints_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnSortBubblePoints_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorGP_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorBP_mc);
      }
      
      private FeaturedNoDown(param1: Event): void
      {
         this.SelectableDown(param1);
         this.SearchForTanksScreen_mc.btnFeaturedYes_mc.gotoAndStop(1);
      }
      
      private method_599(): any
      {
         this.txtExplination_txt.text = "";
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.mouseChildren = false;
         this.DetailedTank_mc.largeTankStats_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.method_118.bind(this));
         this.DetailedTank_mc.largeTankStats_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.method_136.bind(this));
         this.method_6(this.btnFirst_mc);
         this.method_6(this.btnPrev_mc);
         this.method_6(this.btnNext_mc);
         this.btnFirst_mc.removeEventListener(MouseEvent.CLICK, this.ReturnToFirstTank.bind(this));
         this.btnPrev_mc.removeEventListener(MouseEvent.CLICK, this.GoBackATank.bind(this));
         this.btnNext_mc.removeEventListener(MouseEvent.CLICK, this.GoToNextTank.bind(this));
         this.method_6(this.btnMainMenu_mc);
         this.method_6(this.btnEnterTankID_mc);
         this.method_6(this.btnEnterTankCode_mc);
         this.method_6(this.btnSearchForTanks_mc);
         if(this.var_23 != null)
         {
            this.method_6(this.btnMyAvatar_mc);
         }
         if(this.var_23 == null)
         {
            this.btnMainMenu_mc.removeEventListener(MouseEvent.CLICK, this.ReturnToMainMenuFromLargeView.bind(this));
         }
         else
         {
            this.btnMainMenu_mc.removeEventListener(MouseEvent.CLICK, this.method_127.bind(this));
         }
         this.btnEnterTankID_mc.removeEventListener(MouseEvent.CLICK, this.EnterLargeTankID.bind(this));
         this.btnEnterTankCode_mc.removeEventListener(MouseEvent.CLICK, this.method_135.bind(this));
         this.btnSearchForTanks_mc.removeEventListener(MouseEvent.CLICK, this.method_364.bind(this));
         this.var_8.method_10();
         this.method_6(this.DetailedTank_mc.btnLargeDelete_mc);
         this.method_6(this.DetailedTank_mc.btnLargeBack_mc);
         this.DetailedTank_mc.btnLargeDelete_mc.removeEventListener(MouseEvent.CLICK, this.DeleteLargeScreenTank.bind(this));
         this.DetailedTank_mc.btnLargeBack_mc.removeEventListener(MouseEvent.CLICK, this.method_117.bind(this));
         this.method_3(this.DetailedTank_mc.btnLargeEdit_mc);
         this.method_3(this.DetailedTank_mc.btnLargeSave);
         this.DetailedTank_mc.btnLargeSave.addEventListener(MouseEvent.CLICK, this.SaveLargeTank.bind(this));
         this.DetailedTank_mc.btnLargeEdit_mc.addEventListener(MouseEvent.CLICK, this.EditLargeTank.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar1.bind(this));
         this.DetailedTank_mc.btnStar1_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar2.bind(this));
         this.DetailedTank_mc.btnStar2_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar3.bind(this));
         this.DetailedTank_mc.btnStar3_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar4.bind(this));
         this.DetailedTank_mc.btnStar4_mc.gotoAndStop(1);
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OVER, this.Highlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.MOUSE_OUT, this.UnHighlight5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.removeEventListener(MouseEvent.CLICK, this.SelectStar5.bind(this));
         this.DetailedTank_mc.btnStar5_mc.gotoAndStop(1);
         this.method_78();
      }
      
      private DeleteLargeScreenTank(param1: Event): void
      {
         this.method_141(this.arrTanksInqueue[this.intCurrentLocationInTanksQueue]);
      }
      
      private method_410(param1: Event): void
      {
         this.var_76 = true;
         this.method_47();
         this.TankLoad1_mc.mouseEnabled = false;
         this.TankLoad1_mc.mouseChildren = false;
         this.TankLoad2_mc.mouseEnabled = false;
         this.TankLoad2_mc.mouseChildren = false;
         this.TankLoad3_mc.mouseEnabled = false;
         this.TankLoad3_mc.mouseChildren = false;
         this.TankLoad4_mc.mouseEnabled = false;
         this.TankLoad4_mc.mouseChildren = false;
         this.method_9(this.DetailedTank_mc);
         this.DetailedTank_mc.mouseEnabled = false;
         this.DetailedTank_mc.mouseChildren = false;
         this.SearchForTanksScreen_mc.gotoAndStop(1);
         this.method_5(this.SearchForTanksScreen_mc);
         this.method_147(param1);
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.txtPageNumCurrent_txt.text = "";
         this.method_2(this.btnFirst_mc);
         this.method_2(this.btnPrev_mc);
         this.method_2(this.btnNext_mc);
         this.method_2(this.btnSearchForTanks_mc);
         this.method_2(this.btnEnterTankCode_mc);
         this.method_2(this.btnEnterTankID_mc);
         this.method_2(this.btnSortTanks_mc);
         this.method_2(this.btnMainMenu_mc);
         this.method_2(this.btnViewLocalTanks_mc);
         if(this.var_23 != null)
         {
            this.method_2(this.btnMyAvatar_mc);
         }
         this.method_2(this.btnCreateATank_mc);
         this.method_2(this.btnCurrentPoints_mc);
         this.strSortType = "Enemy";
         this.SearchForTanksScreen_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.mouseChildren = true;
         this.SearchForTanksScreen_mc.diffRatingBG_mc.alpha = 1;
         this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.text = "Difficulty Rating";
         this.SearchForTanksScreen_mc.txtDiffRatingTitle_txt.selectable = false;
         this.SearchForTanksScreen_mc.txtDiffRating_txt.text = "Type number here";
         this.SearchForTanksScreen_mc.txtDiffRating_txt.selectable = true;
         this.SearchForTanksScreen_mc.btnSortDiffRating_mc.alpha = 1;
         this.SearchForTanksScreen_mc.btnSortDiffRating_mc.mouseEnabled = true;
         this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.alpha = 1;
         this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc.mouseEnabled = true;
         this.method_25(this.SearchForTanksScreen_mc.btnSortDiffRating_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorDiffRating_mc);
         this.SearchForTanksScreen_mc.txtDiffRating_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.var_36 = 1;
         this.method_3(this.SearchForTanksScreen_mc.btnSearch_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass1_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass2_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass3_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass4_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass5_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnClass6_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnYes_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnNo_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnFeaturedYes_mc);
         this.method_13(this.SearchForTanksScreen_mc.btnFeaturedNo_mc);
         this.SearchForTanksScreen_mc.btnFeaturedYes_mc.addEventListener(MouseEvent.CLICK, this.FeaturedYesDown.bind(this));
         this.SearchForTanksScreen_mc.btnFeaturedNo_mc.addEventListener(MouseEvent.CLICK, this.FeaturedNoDown.bind(this));
         this.SearchForTanksScreen_mc.btnSearch_mc.addEventListener(MouseEvent.CLICK, this.SearchForATank.bind(this));
         this.SearchForTanksScreen_mc.btnClass1_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass2_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass3_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass4_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass5_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnClass6_mc.addEventListener(MouseEvent.CLICK, this.SelectableDown.bind(this));
         this.SearchForTanksScreen_mc.btnYes_mc.addEventListener(MouseEvent.CLICK, this.HIYesDown.bind(this));
         this.SearchForTanksScreen_mc.btnNo_mc.addEventListener(MouseEvent.CLICK, this.HINoDown.bind(this));
         this.SearchForTanksScreen_mc.txtName_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtAuthor_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtGunPoints_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.SearchForTanksScreen_mc.txtBubblePoints_txt.addEventListener(FocusEvent.FOCUS_IN, this.method_20.bind(this));
         this.method_25(this.SearchForTanksScreen_mc.btnSortClass_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnSortGunPoints_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnSortBubblePoints_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorGP_mc);
         this.method_25(this.SearchForTanksScreen_mc.btnOperatorBP_mc);
      }
      
      private method_136(param1: Event): void
      {
         param1.target.gotoAndStop(1);
         this.method_157();
         this.txtExplination_txt.text = "";
      }
      
      private FeaturedYesDown(param1: Event): void
      {
         this.SelectableDown(param1);
         this.SearchForTanksScreen_mc.btnFeaturedNo_mc.gotoAndStop(1);
      }
      
      private method_280(param1: HTTPStatusEvent): void
      {
      }
   }
