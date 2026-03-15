package
{
   import flash.display.*;
   import flash.events.Event;
   import flash.filters.*;
   import flash.text.AntiAliasType;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   
   internal class class_5
   {
      
      private var var_239:int;
      
      private var var_233:Array;
      
      private var var_78:Array;
      
      public var mainRef:class_79;
      
      private var var_286:Boolean;
      
      private var var_145:Array;
      
      private var var_80:Array;
      
      public function class_5(param1:class_79)
      {
         super();
         this.mainRef = param1;
         this.var_78 = new Array();
         this.var_80 = new Array();
         this.var_145 = new Array();
         this.var_233 = new Array();
         this.var_286 = false;
         this.var_239 = 0;
      }
      
      public function method_232() : void
      {
         var _loc1_:Number = 0;
         while(_loc1_ < this.var_78.length)
         {
            this.method_296(this.var_78[_loc1_].layer).removeChild(this.var_78[_loc1_].mc);
            _loc1_++;
         }
         this.var_78.length = 0;
         var _loc2_:Number = 0;
         while(_loc2_ < this.var_80.length)
         {
            this.method_284(this.var_80[_loc2_].layer).removeChild(this.var_80[_loc2_].mc);
            _loc2_++;
         }
         this.var_80.length = 0;
      }
      
      public function method_60(param1:MovieClip, param2:Number, param3:Number, param4:String = null, param5:Boolean = false, param6:Function = null) : MovieClip
      {
         ++this.var_239;
         if(param5 == true)
         {
            param1.rotation = this.RandNum(0,360);
         }
         param1.x = param2;
         param1.y = param3;
         param1.name = "effect_" + this.var_239;
         this.method_296(param4).addChild(param1);
         this.var_78.push({
            "mc":param1,
            "layer":param4,
            "callBack":param6
         });
         return param1;
      }
      
      public function method_119(param1:String, param2:Sprite, param3:Boolean = false) : void
      {
         param2.name = param1;
         if(param3 == false)
         {
            this.var_145.push(param2);
         }
         else
         {
            this.var_233.push(param2);
         }
      }
      
      public function method_816(param1:String) : void
      {
         var _loc2_:Number = 0;
         while(_loc2_ < this.var_233.length)
         {
            if(this.var_233[_loc2_].name == param1)
            {
               this.var_145.splice(_loc2_,1);
               break;
            }
            _loc2_++;
         }
      }
      
      public function method_760(param1:Sprite) : void
      {
         var _loc2_:Number = 0;
         while(_loc2_ < this.var_80.length)
         {
            if(this.var_80[_loc2_].mc == param1)
            {
               this.method_284(this.var_80[_loc2_].layer).removeChild(this.var_80[_loc2_].mc);
               this.var_80[_loc2_].mc = null;
               this.var_80.splice(_loc2_,1);
               break;
            }
            _loc2_++;
         }
      }
      
      private function method_398(param1:String, param2:int, param3:Number, param4:Boolean = true, param5:Number = 0, param6:Number = 1) : Sprite
      {
         var _loc7_:Sprite = new Sprite();
         var _loc8_:TextField = new TextField();
         _loc8_.text = param1;
         _loc8_.autoSize = TextFieldAutoSize.LEFT;
         _loc8_.antiAliasType = AntiAliasType.ADVANCED;
         var _loc9_:TextFormat = new TextFormat();
         _loc9_.font = "Arial";
         _loc9_.size = param2;
         _loc9_.bold = true;
         _loc9_.color = param5;
         _loc8_.setTextFormat(_loc9_);
         var _loc10_:Number = 8 * param6;
         var _loc11_:Number = 3 * param6;
         var _loc12_:* = new GlowFilter(param3,1,_loc10_,_loc10_,_loc11_,2,false,param4);
         _loc8_.filters = [_loc12_];
         _loc7_.cacheAsBitmap = true;
         _loc7_.addChild(_loc8_);
         return _loc7_;
      }
      
      private function method_296(param1:String) : Sprite
      {
         var _loc2_:Number = 0;
         while(_loc2_ < this.var_145.length)
         {
            if(this.var_145[_loc2_].name == param1)
            {
               return this.var_145[_loc2_];
            }
            _loc2_++;
         }
         return null;
      }
      
      private function RandNum(param1:Number, param2:Number) : Number
      {
         return Math.round(Math.random() * (param2 - param1)) + param1;
      }
      
      public function method_793(param1:String, param2:Number, param3:Number, param4:String = null, param5:int = 60, param6:int = 26, param7:Number = 3355443, param8:Number = 1) : Sprite
      {
         null;
         ++this.var_239;
         if(param8 == 1)
         {
            var _loc9_:Sprite = this.method_398(param1,param6,param7);
         }
         else if(param8 == 2)
         {
            _loc9_ = this.method_398(param1,param6,param7,false,16777215,0.5);
         }
         null.x = param2 - Math.round(null.width / 2);
         null.y = param3 - Math.round(null.height / 2);
         null.name = "effect_" + this.var_239;
         var _loc10_:Sprite = this.method_284(param4);
         _loc10_.addChild(null);
         this.var_80.push({
            "mc":null,
            "layer":param4,
            "curFrame":1,
            "totalFrames":param5
         });
         return null;
      }
      
      public function set method_701(param1:Boolean) : void
      {
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         if(param1 == this.var_286)
         {
            return;
         }
         this.var_286 = param1;
         if(this.var_286 == true)
         {
            _loc2_ = 0;
            while(_loc2_ < this.var_78.length)
            {
               this.var_78[_loc2_].mc.stop();
               _loc2_++;
            }
         }
         else
         {
            _loc3_ = 0;
            while(_loc3_ < this.var_78.length)
            {
               this.var_78[_loc3_].mc.play();
               _loc3_++;
            }
         }
      }
      
      public function method_808() : void
      {
         var _loc1_:Number = 0;
         while(_loc1_ < this.var_145.length)
         {
            _loc1_++;
         }
      }
      
      public function method_534() : void
      {
         this.mainRef.removeEventListener(Event.ENTER_FRAME,this.Run);
      }
      
      private function method_284(param1:String) : Sprite
      {
         var _loc2_:Number = 0;
         while(_loc2_ < this.var_233.length)
         {
            if(this.var_233[_loc2_].name == param1)
            {
               return this.var_233[_loc2_];
            }
            _loc2_++;
         }
         return null;
      }
      
      public function Run() : void
      {
         if(this.var_286 == true)
         {
            return;
         }
         var _loc1_:Array = new Array();
         var _loc2_:Array = new Array();
         var _loc3_:uint = 0;
         while(_loc3_ < this.var_78.length)
         {
            if(this.var_78[_loc3_].mc.currentFrame >= this.var_78[_loc3_].mc.totalFrames)
            {
               _loc1_.push(this.var_78[_loc3_].mc);
            }
            _loc3_++;
         }
         var _loc4_:uint = 0;
         while(_loc4_ < this.var_80.length)
         {
            if(this.method_663(_loc4_) == true)
            {
               _loc2_.push(this.var_80[_loc4_].mc);
            }
            _loc4_++;
         }
         var _loc5_:uint = 0;
         while(_loc5_ < _loc1_.length)
         {
            this.method_698(_loc1_[_loc5_]);
            _loc5_++;
         }
         var _loc6_:uint = 0;
         while(_loc6_ < _loc2_.length)
         {
            this.method_760(_loc2_[_loc6_]);
            _loc6_++;
         }
      }
      
      public function get method_701() : Boolean
      {
         return this.var_286;
      }
      
      public function method_297(param1:String) : void
      {
         var _loc2_:Number = 0;
         while(_loc2_ < this.var_145.length)
         {
            if(this.var_145[_loc2_].name == param1)
            {
               this.var_145.splice(_loc2_,1);
               break;
            }
            _loc2_++;
         }
      }
      
      public function method_322(param1:Boolean) : void
      {
         if(param1 == true)
         {
            this.method_417();
         }
         this.method_232();
      }
      
      public function method_417() : void
      {
         var _loc1_:Number = 0;
         while(_loc1_ < this.var_145.length)
         {
            this.mainRef.removeChild(this.var_145[_loc1_]);
            _loc1_++;
         }
         this.var_145.length = 0;
      }
      
      public function method_698(param1:MovieClip) : void
      {
         var _loc2_:Number = 0;
         while(_loc2_ < this.var_78.length)
         {
            if(this.var_78[_loc2_].mc == param1)
            {
               if(this.var_78[_loc2_].callBack != null)
               {
                  this.var_78[_loc2_].callBack();
               }
               this.method_296(this.var_78[_loc2_].layer).removeChild(this.var_78[_loc2_].mc);
               this.var_78[_loc2_].mc = null;
               this.var_78.splice(_loc2_,1);
               break;
            }
            _loc2_++;
         }
      }
      
      private function method_663(param1:int) : Boolean
      {
         var _loc3_:Number = NaN;
         if(this.var_80[param1].curFrame >= this.var_80[param1].totalFrames)
         {
            return true;
         }
         --this.var_80[param1].mc.y;
         var _loc2_:Number = this.var_80[param1].curFrame / this.var_80[param1].totalFrames;
         if(_loc2_ >= 0.75)
         {
            this.var_80[param1].mc.cacheAsBitmap = false;
            _loc3_ = (1 - _loc2_) / 0.25;
            if(_loc3_ < 0)
            {
               _loc3_ = 0;
            }
            if(_loc3_ > 1)
            {
               _loc3_ = 1;
            }
            this.var_80[param1].mc.alpha = _loc3_;
         }
         ++this.var_80[param1].curFrame;
         return false;
      }
   }
}

