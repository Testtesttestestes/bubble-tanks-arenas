package
{
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.geom.Point;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol1049")]
   public class TankLoadingBox extends Sprite
   {
      
      public var var_250:Boolean;
      
      public var sprTankData:TankData;
      
      public var btnStar2_mc:MovieClip;
      
      public var largeName_txt:TextField;
      
      public var largeTankStats_mc:MovieClip;
      
      public var txtHealth_txt:TextField;
      
      public var var_2:MovieClip;
      
      public var btnCopy_mc:MovieClip;
      
      public var btnLargeDelete_mc:MovieClip;
      
      public var btnLargeEdit_mc:MovieClip;
      
      public var btnStar5_mc:MovieClip;
      
      public var btnLargeBack_mc:MovieClip;
      
      public var btnStar1_mc:MovieClip;
      
      public var txtDiffRating_txt:TextField;
      
      public var txtTankID_txt:TextField;
      
      public var btnFlag_mc:MovieClip;
      
      public var btnStar4_mc:MovieClip;
      
      public var lines_mc:MovieClip;
      
      public var largeAuthor_txt:TextField;
      
      public var btnLargeSave:MovieClip;
      
      public var txtSpeed_txt:TextField;
      
      public var var_15:MovieClip;
      
      public var pntDeleteButtonLocation:Point = new Point();
      
      public var btnStar3_mc:MovieClip;
      
      public var objGameObjectLibrary:class_2;
      
      public var txtTankData_txt:TextField;
      
      public var txtBubblesReturned_txt:TextField;
      
      public var btnTankSelect_mc:MovieClip;
      
      public function TankLoadingBox()
      {
         super();
         if(this.var_2.btnDelete_mc != null)
         {
            this.pntDeleteButtonLocation.x = this.var_2.btnDelete_mc.x;
         }
         if(this.var_2.btnDelete_mc != null)
         {
            this.pntDeleteButtonLocation.y = this.var_2.btnDelete_mc.y;
         }
         if(this.largeTankStats_mc != null)
         {
            this.largeTankStats_mc.alpha = 0;
         }
         if(this.btnLargeDelete_mc != null)
         {
            this.btnLargeDelete_mc.alpha = 0;
         }
         if(this.btnLargeBack_mc != null)
         {
            this.btnLargeBack_mc.alpha = 0;
         }
         if(this.largeName_txt != null)
         {
            this.largeName_txt.text = "";
         }
         if(this.largeAuthor_txt != null)
         {
            this.largeAuthor_txt.text = "";
         }
         this.var_250 = false;
      }
      
      public function method_488(param1:TankLoadingBox, param2:Number = 1) : *
      {
         mouseEnabled = true;
         mouseChildren = true;
         if(this.var_15 != null)
         {
            addChild(this.var_15);
            removeChild(this.var_15);
            this.var_15 = null;
         }
         this.sprTankData = param1.sprTankData;
         this.var_15 = param1.var_15;
         addChildAt(this.var_15,1);
         if(param2 != -1)
         {
            this.var_15.scaleX = this.var_15.scaleY = param2;
         }
         if(this.largeName_txt != null)
         {
            this.largeName_txt.text = this.sprTankData.strTankName;
         }
         if(this.largeAuthor_txt != null)
         {
            this.largeAuthor_txt.text = "By " + this.sprTankData.strAuthorName;
         }
      }
      
      public function DeleteTank() : *
      {
         alpha = 0;
         if(this.var_15 != null)
         {
            if(contains(this.var_15))
            {
               removeChild(this.var_15);
            }
            this.var_15 = null;
         }
         this.var_2.txtTankName_txt.text = "";
         this.var_2.txtClass_txt.text = "";
         this.var_2.txtBubbles_txt.text = "";
         this.var_2.txtGP_txt.text = "";
         mouseEnabled = false;
         mouseChildren = false;
      }
      
      public function CopyTankData(param1:TankData) : *
      {
         mouseEnabled = true;
         mouseChildren = true;
         if(this.var_15 != null)
         {
            addChild(this.var_15);
            removeChild(this.var_15);
            this.var_15 = null;
         }
         this.sprTankData = param1;
         this.var_15 = this.sprTankData.method_61();
         addChildAt(this.var_15,1);
         if(this.largeName_txt != null)
         {
            this.largeName_txt.text = this.sprTankData.strTankName;
         }
         if(this.largeAuthor_txt != null)
         {
            this.largeAuthor_txt.text = "By " + this.sprTankData.strAuthorName;
         }
      }
      
      public function Setup(param1:TankData) : *
      {
         var _loc9_:MovieClip = null;
         var _loc11_:MovieClip = null;
         var _loc12_:MovieClip = null;
         var _loc14_:MovieClip = null;
         var _loc15_:MovieClip = null;
         alpha = 1;
         mouseEnabled = true;
         mouseChildren = true;
         var _loc2_:Boolean = false;
         var _loc3_:Array = new Array();
         _loc3_.push(param1.strID.substr(1,param1.strID.length - 1));
         var _loc4_:Number = Number(_loc3_[0]);
         var _loc5_:String = param1.strID.substr(0,1);
         if(_loc4_ >= 10000120 && _loc4_ <= 10000145 && _loc5_ == "E")
         {
            _loc2_ = true;
         }
         if(_loc4_ >= 10000181 && _loc4_ <= 10000221 && _loc5_ == "A")
         {
            _loc2_ = true;
         }
         this.var_250 = false;
         var _loc6_:Boolean = false;
         if(_loc5_ == "E")
         {
            _loc6_ = true;
         }
         if(!class_2.method_64().objCurrentPlayer.method_17(param1,_loc6_) && class_2.method_64().objCurrentPlayer.DoesProfileHaveAllThePartsForTank(param1))
         {
            this.var_250 = true;
         }
         this.var_2.CautionSign_mc.alpha = 0;
         if(_loc2_ || param1.tankType == 4)
         {
            this.var_2.btnDelete_mc.alpha = 0;
            this.var_2.btnDelete_mc.mouseEnabled = false;
         }
         else
         {
            this.var_2.btnDelete_mc.alpha = 1;
            this.var_2.btnDelete_mc.mouseEnabled = true;
         }
         if(param1.tankType == 1)
         {
            this.var_2.btnSave_mc.alpha = 0;
            this.var_2.btnSave_mc.mouseEnabled = false;
            if(this.btnLargeSave != null)
            {
               this.btnLargeSave.alpha = 0;
               this.btnLargeSave.mouseEnabled = false;
            }
         }
         else
         {
            this.var_2.btnSave_mc.alpha = 1;
            this.var_2.btnSave_mc.mouseEnabled = true;
            if(this.btnLargeSave != null)
            {
               this.btnLargeSave.alpha = 1;
               this.btnLargeSave.mouseEnabled = true;
            }
         }
         if(this.var_15 != null)
         {
            addChild(this.var_15);
            removeChild(this.var_15);
            this.var_15 = null;
         }
         this.var_15 = new MovieClip();
         this.objGameObjectLibrary = class_2.getInstance();
         this.sprTankData = param1;
         var _loc7_:Number = height - 80;
         var _loc8_:Number = width - 50;
         this.var_15 = this.sprTankData.method_61();
         addChildAt(this.var_15,1);
         _loc9_ = new class_77();
         this.var_15.addChild(_loc9_);
         _loc9_.alpha = 0;
         var _loc10_:Number = this.sprTankData.GetLargestXDistanceFromRegistration();
         _loc11_ = new class_77();
         this.var_15.addChild(_loc11_);
         _loc11_.x = _loc10_;
         _loc11_.alpha = 0;
         _loc12_ = new class_77();
         this.var_15.addChild(_loc12_);
         _loc12_.x = -1 * _loc10_;
         _loc12_.alpha = 0;
         var _loc13_:Number = this.sprTankData.GetLargestYDistanceFromRegistration();
         _loc14_ = new class_77();
         this.var_15.addChild(_loc14_);
         _loc14_.y = _loc13_;
         _loc14_.alpha = 0;
         _loc15_ = new class_77();
         this.var_15.addChild(_loc15_);
         _loc15_.y = -1 * _loc13_;
         _loc15_.alpha = 0;
         if(this.var_15.width >= _loc8_)
         {
            this.var_15.width = _loc8_;
            this.var_15.scaleY = this.var_15.scaleX;
         }
         if(this.var_15.height >= _loc7_)
         {
            this.var_15.height = _loc7_;
            this.var_15.scaleX = this.var_15.scaleY;
         }
         this.var_2.txtTankName_txt.text = this.sprTankData.strTankName;
         this.var_2.txtClass_txt.text = "Class: " + this.sprTankData.numClass;
         this.var_2.txtBubbles_txt.text = this.sprTankData.numBubbles;
         this.var_2.txtGP_txt.text = this.sprTankData.numGunPoints;
         this.var_2.addChild(this.var_2.CautionSign_mc);
      }
   }
}

