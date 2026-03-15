package
{
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.*;
   import flash.text.TextField;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol1554")]
   public class class_52 extends Sprite
   {
      
      public var btnCreateATank_mc:MovieClip;
      
      public var btnTank3_mc:MovieClip;
      
      public var btnTank1_mc:MovieClip;
      
      public var txtTank1Name_txt:TextField;
      
      internal var var_158:Number = 0;
      
      public var txtTank3Name_txt:TextField;
      
      public var txtTank2Name_txt:TextField;
      
      public var btnTank2_mc:MovieClip;
      
      internal var refMain:class_79;
      
      public var btnSearchForTanks_mc:MovieClip;
      
      public var btnBack_mc:MovieClip;
      
      internal var var_8:class_3;
      
      internal var var_35:Array;
      
      public function class_52(param1:Number = 1, param2:class_79 = null)
      {
         var _loc3_:Number = NaN;
         null;
         0;
         null;
         null;
         null;
         null;
         null;
         null;
         this.var_35 = new Array();
         super();
         if(param2 != null)
         {
            this.refMain = param2;
            this.var_8 = new class_3();
            this.var_8.Setup(null,this.method_107,this.method_112);
            this.method_584();
            _loc3_ = 0;
            var _loc4_:Array = new Array();
            var _loc5_:uint = this.refMain.gData.var_14.length - 1;
            if(this.var_158 < 0)
            {
               this.var_158 = 0;
            }
            else if(this.var_158 > 25)
            {
               this.var_158 = 25;
            }
            var _loc6_:TankData = this.refMain.RetrieveTankDataFromID(this.var_35[this.var_158].strTank1);
            var _loc7_:MovieClip = _loc6_.method_61();
            this.btnTank1_mc.addChild(null);
            this.txtTank1Name_txt.text = null.strTankName;
            this.method_300(null,this.btnTank1_mc,null);
            var _loc8_:TankData = this.refMain.RetrieveTankDataFromID(this.var_35[this.var_158].strTank2);
            var _loc9_:MovieClip = _loc8_.method_61();
            this.btnTank2_mc.addChild(null);
            this.txtTank2Name_txt.text = null.strTankName;
            this.method_300(null,this.btnTank2_mc,null);
            var _loc10_:TankData = this.refMain.RetrieveTankDataFromID(this.var_35[this.var_158].strTank3);
            var _loc11_:MovieClip = _loc10_.method_61();
            this.btnTank3_mc.addChild(null);
            this.txtTank3Name_txt.text = null.strTankName;
            this.method_300(null,this.btnTank3_mc,null);
            this.btnTank1_mc.highlight.alpha = 0;
            this.btnTank2_mc.highlight.alpha = 0;
            this.btnTank3_mc.highlight.alpha = 0;
            this.var_8.method_4(this.btnTank1_mc,true,this.Tank1Pressed,this.method_265,this.method_231);
            this.var_8.method_4(this.btnTank2_mc,true,this.Tank2Pressed,this.method_265,this.method_231);
            this.var_8.method_4(this.btnTank3_mc,true,this.Tank3Pressed,this.method_265,this.method_231);
            this.var_8.method_4(this.btnCreateATank_mc,true,this.CreateATank);
            this.var_8.method_4(this.btnSearchForTanks_mc,true,this.SearchForTanks);
            this.var_8.method_4(this.btnBack_mc,true,this.method_582);
         }
      }
      
      private function SearchForTanks(param1:Event) : *
      {
         this.refMain.TransitionQuickTanksToSeachForATank();
      }
      
      private function method_107(param1:Event) : *
      {
         param1.target.gotoAndStop(2);
      }
      
      private function method_231(param1:Event) : *
      {
         param1.target.highlight.alpha = 0;
      }
      
      private function method_265(param1:Event) : *
      {
         param1.target.highlight.alpha = 1;
      }
      
      private function method_300(param1:TankData, param2:Sprite, param3:MovieClip) : void
      {
         var _loc5_:Number = NaN;
         var _loc6_:MovieClip = null;
         var _loc8_:MovieClip = null;
         var _loc9_:MovieClip = null;
         var _loc11_:MovieClip = null;
         var _loc12_:MovieClip = null;
         var _loc4_:Number = param2.height - 80;
         _loc5_ = param2.width - 80;
         _loc6_ = new class_77();
         param3.addChild(_loc6_);
         _loc6_.alpha = 0;
         var _loc7_:Number = param1.GetLargestXDistanceFromRegistration();
         _loc8_ = new class_77();
         param3.addChild(_loc8_);
         _loc8_.x = _loc7_;
         _loc8_.alpha = 0;
         _loc9_ = new class_77();
         param3.addChild(_loc9_);
         _loc9_.x = -1 * _loc7_;
         _loc9_.alpha = 0;
         var _loc10_:Number = param1.GetLargestYDistanceFromRegistration();
         _loc11_ = new class_77();
         param3.addChild(_loc11_);
         _loc11_.y = _loc10_;
         _loc11_.alpha = 0;
         _loc12_ = new class_77();
         param3.addChild(_loc12_);
         _loc12_.y = -1 * _loc10_;
         _loc12_.alpha = 0;
         if(param3.width >= _loc5_)
         {
            param3.width = _loc5_;
            param3.scaleY = param3.scaleX;
         }
         if(param3.height >= _loc4_)
         {
            param3.height = _loc4_;
            param3.scaleX = param3.scaleY;
         }
      }
      
      private function Tank2Pressed(param1:Event) : *
      {
         this.refMain.method_181(this.refMain.RetrieveTankDataFromID(this.var_35[this.var_158].strTank2).ExportTankData());
      }
      
      public function method_584() : void
      {
         this.var_35.push({
            "strTank1":"A10000181",
            "strTank2":"A10000181",
            "strTank3":"A10000181"
         });
         this.var_35.push({
            "strTank1":"A10000182",
            "strTank2":"A10000181",
            "strTank3":"A10000183"
         });
         this.var_35.push({
            "strTank1":"A10000184",
            "strTank2":"A10000185",
            "strTank3":"A10000186"
         });
         this.var_35.push({
            "strTank1":"A10000187",
            "strTank2":"A10000185",
            "strTank3":"A10000186"
         });
         this.var_35.push({
            "strTank1":"A10000187",
            "strTank2":"A10000189",
            "strTank3":"A10000190"
         });
         this.var_35.push({
            "strTank1":"A10000191",
            "strTank2":"A10000192",
            "strTank3":"A10000193"
         });
         this.var_35.push({
            "strTank1":"A10000191",
            "strTank2":"A10000192",
            "strTank3":"A10000193"
         });
         this.var_35.push({
            "strTank1":"A10000191",
            "strTank2":"A10000192",
            "strTank3":"A10000193"
         });
         this.var_35.push({
            "strTank1":"A10000194",
            "strTank2":"A10000195",
            "strTank3":"A10000196"
         });
         this.var_35.push({
            "strTank1":"A10000194",
            "strTank2":"A10000195",
            "strTank3":"A10000196"
         });
         this.var_35.push({
            "strTank1":"A10000194",
            "strTank2":"A10000195",
            "strTank3":"A10000196"
         });
         this.var_35.push({
            "strTank1":"A10000197",
            "strTank2":"A10000198",
            "strTank3":"A10000199"
         });
         this.var_35.push({
            "strTank1":"A10000197",
            "strTank2":"A10000198",
            "strTank3":"A10000199"
         });
         this.var_35.push({
            "strTank1":"A10000197",
            "strTank2":"A10000198",
            "strTank3":"A10000199"
         });
         this.var_35.push({
            "strTank1":"A10000200",
            "strTank2":"A10000201",
            "strTank3":"A10000202"
         });
         this.var_35.push({
            "strTank1":"A10000200",
            "strTank2":"A10000201",
            "strTank3":"A10000202"
         });
         this.var_35.push({
            "strTank1":"A10000203",
            "strTank2":"A10000204",
            "strTank3":"A10000205"
         });
         this.var_35.push({
            "strTank1":"A10000203",
            "strTank2":"A10000204",
            "strTank3":"A10000205"
         });
         this.var_35.push({
            "strTank1":"A10000207",
            "strTank2":"A10000208",
            "strTank3":"A10000209"
         });
         this.var_35.push({
            "strTank1":"A10000207",
            "strTank2":"A10000208",
            "strTank3":"A10000209"
         });
         this.var_35.push({
            "strTank1":"A10000210",
            "strTank2":"A10000211",
            "strTank3":"A10000212"
         });
         this.var_35.push({
            "strTank1":"A10000210",
            "strTank2":"A10000211",
            "strTank3":"A10000212"
         });
         this.var_35.push({
            "strTank1":"A10000213",
            "strTank2":"A10000214",
            "strTank3":"A10000215"
         });
         this.var_35.push({
            "strTank1":"A10000213",
            "strTank2":"A10000214",
            "strTank3":"A10000215"
         });
         this.var_35.push({
            "strTank1":"A10000216",
            "strTank2":"A10000217",
            "strTank3":"A10000219"
         });
         this.var_35.push({
            "strTank1":"A10000222",
            "strTank2":"A10000221",
            "strTank3":"A10000220"
         });
      }
      
      public function Destroy() : *
      {
         this.var_8.method_10();
         this.var_35.length = 0;
         this.var_35 = null;
         while(numChildren > 0)
         {
            removeChildAt(0);
         }
      }
      
      private function method_112(param1:Event) : *
      {
         param1.target.gotoAndStop(1);
      }
      
      private function Tank3Pressed(param1:Event) : *
      {
         this.refMain.method_181(this.refMain.RetrieveTankDataFromID(this.var_35[this.var_158].strTank3).ExportTankData());
      }
      
      private function Tank1Pressed(param1:Event) : *
      {
         this.refMain.method_181(this.refMain.RetrieveTankDataFromID(this.var_35[this.var_158].strTank1).ExportTankData());
      }
      
      private function method_582(param1:Event) : *
      {
         this.refMain.method_181();
      }
      
      private function CreateATank(param1:Event) : *
      {
         this.refMain.TransitionQuickTanksToCreateATank();
      }
   }
}

