package
{
   import flash.display.*;
   import flash.events.*;
   import flash.geom.Point;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol1456")]
   public class AvatarInterface extends MovieClip
   {
      
      private var var_388:Number;
      
      private var var_203:Function;
      
      private var blnMoveAvatar:Boolean;
      
      private var var_316:Stage;
      
      private var arrKeysDown:Array;
      
      public var var_472:Boolean;
      
      private var var_554:Boolean;
      
      public var fireRate_mc:MovieClip;
      
      private var var_355:Function;
      
      private var var_460:Point;
      
      private var var_396:Boolean;
      
      private var var_329:Number;
      
      private var var_20:class_6;
      
      private var var_294:Number;
      
      private var hot_DOWN:Number;
      
      private var var_303:Number;
      
      private var var_149:Array;
      
      private var var_231:int;
      
      public var objGameObjectLibrary:class_2;
      
      private var var_37:MovieClip;
      
      private var var_570:Number;
      
      private var var_341:MovieClip;
      
      private var var_356:Boolean;
      
      private var hot_RIGHT:Number;
      
      private var currentPlayerProfile:PlayerProfile;
      
      private var var_147:Number;
      
      private var numAvatarFriction:Number;
      
      private var var_205:Number;
      
      private var var_97:BTAGameWorld;
      
      private var var_419:Point;
      
      private var var_377:Point;
      
      private var var_559:Number;
      
      private var var_332:Number;
      
      public var life_mc:MovieClip;
      
      private var hot_LEFT:Number;
      
      private var var_440:Number;
      
      private var numSecondaryFirerate:Number;
      
      private var hot_UP:Number;
      
      private var var_383:Boolean;
      
      private var numPrimaryFirerate:Number;
      
      private var mRef:class_79;
      
      private var var_405:Boolean;
      
      private var var_55:TankData;
      
      public function AvatarInterface()
      {
         super();
         this.objGameObjectLibrary = class_2.getInstance();
         this.var_37 = null;
         this.var_356 = false;
         this.var_405 = false;
         this.var_554 = false;
         this.var_383 = false;
         this.var_396 = true;
         this.blnMoveAvatar = true;
         this.var_472 = false;
         this.numPrimaryFirerate = 20;
         this.numSecondaryFirerate = 40;
         this.var_570 = 0;
         this.var_205 = 0;
         this.var_303 = 75;
         this.var_332 = 75;
         this.var_231 = -1;
         this.var_294 = 0;
         this.hot_UP = 0;
         this.hot_DOWN = 0;
         this.hot_RIGHT = 0;
         this.hot_LEFT = 0;
         this.var_329 = 0.6;
         this.var_147 = 6;
         this.var_388 = this.var_147;
         this.numAvatarFriction = 0.09;
         this.var_341 = null;
         this.var_20 = new class_6();
         this.var_419 = new Point(this.life_mc.x,this.life_mc.y + 0.2);
         this.var_460 = new Point(this.fireRate_mc.x,this.fireRate_mc.y);
         this.life_mc.y += 100;
         this.fireRate_mc.y -= 100;
         this.arrKeysDown = new Array();
         this.var_149 = new Array();
         this.var_377 = new Point(mouseX,mouseY);
      }
      
      private function RandNum(param1:Number, param2:Number) : Number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      private function method_558() : void
      {
         if(this.var_231 > 0)
         {
            --this.var_231;
         }
         else if(this.var_231 == 0)
         {
            this.var_147 = this.var_388;
            this.var_388 = this.var_147;
            this.var_231 = -1;
         }
      }
      
      private function ControlAvatarDirection() : void
      {
         var _loc1_:class_6 = null;
         var _loc2_:Number = NaN;
         if(this.var_37 != null)
         {
            _loc1_ = new class_6();
            if(this.var_55.numClass <= 3)
            {
               this.var_377 = localToGlobal(new Point(mouseX,mouseY));
               _loc1_.x = this.var_377.x - (this.var_37.x + 275);
               _loc1_.y = this.var_377.y - (this.var_37.y + 225);
               this.var_37.rotation = _loc1_.method_90();
            }
            else
            {
               _loc2_ = this.var_20.method_503(this.var_37.rotation,this.var_20.method_41() / 2,0.5);
               this.var_37.rotation += _loc2_;
            }
         }
      }
      
      private function method_494() : void
      {
         var _loc1_:uint = 0;
         if(this.var_383 == true && this.var_396 == true)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_37.arrSecondaryWeapons.length)
            {
               this.var_37.arrSecondaryWeapons[_loc1_].PartCallTrigger();
               _loc1_++;
            }
            this.var_205 = this.numSecondaryFirerate;
            this.var_383 = false;
            this.var_303 = 0;
         }
      }
      
      private function InterfaceMotion() : void
      {
         if(this.var_332 < 75)
         {
            ++this.var_332;
            this.life_mc.y = this.life_mc.y * 0.8 + this.var_419.y * 0.2;
         }
         else
         {
            this.life_mc.y = this.life_mc.y * 0.8 + (this.var_419.y + 100) * 0.2;
         }
         if(this.var_303 < 75)
         {
            ++this.var_303;
            this.fireRate_mc.y = this.fireRate_mc.y * 0.8 + this.var_460.y * 0.2;
         }
         else
         {
            this.fireRate_mc.y = this.fireRate_mc.y * 0.8 + (this.var_460.y - (100 + this.fireRate_mc.height)) * 0.2;
         }
      }
      
      private function mouseUp(param1:MouseEvent) : void
      {
         this.var_356 = false;
      }
      
      public function method_708() : void
      {
         var _temp_3:* = this.var_20;
         var _temp_2:* = this.var_20;
         var _temp_1:* = 0;
         0;
         _temp_2.y = _temp_1;
         _temp_3.x = 0;
      }
      
      public function method_533() : void
      {
         var _loc1_:class_6 = new class_6(this.var_97.currentBFTarget.x,this.var_97.currentBFTarget.y);
         if(_loc1_.method_41() > this.var_97.currentBFTarget.BF_BG_mc.width / 2)
         {
            _loc1_.method_189();
            _loc1_.method_84(this.var_97.currentBFTarget.BF_BG_mc.width / 2);
            _loc1_.x = this.var_97.currentBFTarget.x - _loc1_.x;
            _loc1_.y = this.var_97.currentBFTarget.y - _loc1_.y;
            this.var_355(_loc1_);
         }
      }
      
      private function method_547() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:Boolean = false;
         var _loc3_:Boolean = false;
         var _loc4_:class_6 = null;
         var _loc5_:Boolean = false;
         var _loc6_:uint = 0;
         var _loc7_:Number = NaN;
         var _loc8_:Number = NaN;
         var _loc9_:MovieClip = null;
         var _loc10_:Boolean = false;
         if(this.var_97.var_282 == false)
         {
            _loc1_ = 0;
            _loc2_ = false;
            _loc3_ = false;
            _loc4_ = new class_6(this.var_20.x,this.var_20.y);
            _loc1_ = 0;
            while(_loc1_ < this.arrKeysDown.length)
            {
               if(this.arrKeysDown[_loc1_] == this.hot_UP)
               {
                  _loc2_ = true;
                  this.var_20.y -= this.var_329 * this.var_55.numSpeed;
                  if(this.var_20.y < this.var_147 * -1 * this.var_55.numSpeed)
                  {
                     this.var_20.y = this.var_147 * -1 * this.var_55.numSpeed;
                  }
               }
               else if(this.arrKeysDown[_loc1_] == this.hot_DOWN)
               {
                  _loc2_ = true;
                  this.var_20.y += this.var_329 * this.var_55.numSpeed;
                  if(this.var_20.y > this.var_147 * this.var_55.numSpeed)
                  {
                     this.var_20.y = this.var_147 * this.var_55.numSpeed;
                  }
               }
               if(this.arrKeysDown[_loc1_] == this.hot_LEFT)
               {
                  _loc3_ = true;
                  this.var_20.x -= this.var_329 * this.var_55.numSpeed;
                  if(this.var_20.x < this.var_147 * -1 * this.var_55.numSpeed)
                  {
                     this.var_20.x = this.var_147 * -1 * this.var_55.numSpeed;
                  }
               }
               else if(this.arrKeysDown[_loc1_] == this.hot_RIGHT)
               {
                  _loc3_ = true;
                  this.var_20.x += this.var_329 * this.var_55.numSpeed;
                  if(this.var_20.x > this.var_147 * this.var_55.numSpeed)
                  {
                     this.var_20.x = this.var_147 * this.var_55.numSpeed;
                  }
               }
               else if(this.arrKeysDown[_loc1_] == 32)
               {
                  this.var_405 = true;
               }
               _loc1_++;
            }
            _loc5_ = false;
            _loc6_ = 0;
            while(_loc6_ < this.arrKeysDown.length)
            {
               if(this.arrKeysDown[_loc6_] == 32)
               {
                  _loc5_ = true;
               }
               _loc6_++;
            }
            if(_loc5_ == false)
            {
               this.var_405 = false;
            }
            if(_loc2_ == false)
            {
               if(this.var_20.y > 0)
               {
                  this.var_20.y -= this.numAvatarFriction;
                  if(Math.abs(this.var_20.y) < 0.5)
                  {
                     this.var_20.y = 0;
                  }
               }
               else
               {
                  this.var_20.y += this.numAvatarFriction;
                  if(Math.abs(this.var_20.y) < 0.5)
                  {
                     this.var_20.y = 0;
                  }
               }
            }
            if(_loc3_ == false)
            {
               if(this.var_20.x > 0)
               {
                  this.var_20.x -= this.numAvatarFriction;
                  if(Math.abs(this.var_20.x) < 0.5)
                  {
                     this.var_20.x = 0;
                  }
               }
               else
               {
                  this.var_20.x += this.numAvatarFriction;
                  if(Math.abs(this.var_20.x) < 0.5)
                  {
                     this.var_20.x = 0;
                  }
               }
            }
            _loc7_ = this.var_97.currentBFTarget.x - _loc4_.x;
            _loc8_ = this.var_97.currentBFTarget.y - _loc4_.y;
            if(Math.sqrt(_loc7_ * _loc7_ + _loc8_ * _loc8_) >= this.var_97.currentBFTarget.BF_BG_mc.width / 2)
            {
               _loc9_ = this.var_97.method_392();
               _loc10_ = true;
               if(_loc9_.name == "BFPoint_left_mc")
               {
                  _loc1_ = 0;
                  while(_loc1_ < this.mRef.gData.var_67.length)
                  {
                     if(this.mRef.gData.var_67[_loc1_] == "left")
                     {
                        _loc10_ = false;
                     }
                     _loc1_++;
                  }
               }
               else if(_loc9_.name == "BFPoint_right_mc")
               {
                  _loc1_ = 0;
                  while(_loc1_ < this.mRef.gData.var_67.length)
                  {
                     if(this.mRef.gData.var_67[_loc1_] == "right")
                     {
                        _loc10_ = false;
                     }
                     _loc1_++;
                  }
               }
               else if(_loc9_.name == "BFPoint_top_mc")
               {
                  _loc1_ = 0;
                  while(_loc1_ < this.mRef.gData.var_67.length)
                  {
                     if(this.mRef.gData.var_67[_loc1_] == "up")
                     {
                        _loc10_ = false;
                     }
                     _loc1_++;
                  }
               }
               else if(_loc9_.name == "BFPoint_bottom_mc")
               {
                  _loc1_ = 0;
                  while(_loc1_ < this.mRef.gData.var_67.length)
                  {
                     if(this.mRef.gData.var_67[_loc1_] == "down")
                     {
                        _loc10_ = false;
                     }
                     _loc1_++;
                  }
               }
               if(_loc10_ == true)
               {
                  this.method_349();
                  this.method_533();
                  this.var_355(this.var_20);
                  this.var_20.x *= 0.9;
                  this.var_20.y *= 0.9;
               }
            }
         }
      }
      
      private function keyUp(param1:KeyboardEvent) : void
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this.arrKeysDown.length)
         {
            if(param1.keyCode == this.arrKeysDown[_loc2_])
            {
               this.arrKeysDown.splice(_loc2_,1);
            }
            _loc2_++;
         }
      }
      
      public function Setup(param1:class_79, param2:Stage, param3:Function, param4:Function) : void
      {
         this.mRef = param1;
         this.var_316 = param2;
         this.var_203 = param3;
         this.var_355 = param4;
         this.var_316.addEventListener(MouseEvent.MOUSE_DOWN,this.mouseDown);
         this.var_316.addEventListener(MouseEvent.MOUSE_UP,this.mouseUp);
         this.var_316.addEventListener(KeyboardEvent.KEY_DOWN,this.keyDown);
         this.var_316.addEventListener(KeyboardEvent.KEY_UP,this.keyUp);
      }
      
      public function method_349() : void
      {
         var _loc1_:Number = this.var_97.currentBFTarget.x - 0;
         var _loc2_:Number = this.var_97.currentBFTarget.y - 0;
         var _loc3_:Number = Math.atan2(_loc2_,_loc1_);
         var _loc4_:Number = Math.atan2(this.var_20.y,this.var_20.x);
         var _loc5_:Number = _loc4_ - _loc3_;
         var _loc6_:Number = Math.cos(_loc5_);
         var _loc7_:Number = Math.sin(_loc5_) * -1;
         _loc5_ = Math.atan2(-1 * _loc7_,-1 * _loc6_) + _loc3_;
         var _loc8_:Number = Math.sqrt(this.var_20.x * this.var_20.x + this.var_20.y * this.var_20.y);
         this.var_20.x = _loc8_ * Math.cos(_loc5_);
         this.var_20.y = _loc8_ * Math.sin(_loc5_);
      }
      
      public function Run() : void
      {
         this.var_37.blnOkToTeleport = true;
         this.ControlAvatarDirection();
         this.method_547();
         this.MoveAvatar();
         if(this.var_396 == true)
         {
            this.AvatarShootCounter();
         }
         this.AvatarShootTest();
         this.InterfaceMotion();
         this.method_700();
         this.method_558();
      }
      
      private function method_498() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_37.arrPrimaryWeapons.length)
         {
            this.var_37.arrPrimaryWeapons[_loc1_].PartCallTrigger();
            _loc1_++;
         }
         this.var_303 = 0;
      }
      
      private function method_700() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:Number = NaN;
         if(this.var_149.length > 0)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_149.length)
            {
               _loc2_ = (this.var_149[_loc1_].intFireRate - this.var_149[_loc1_].intCounter) / this.var_149[_loc1_].intFireRate;
               if(_loc2_ > 1)
               {
                  _loc2_ = 1;
               }
               if(_loc2_ < 0)
               {
                  _loc2_ = 0;
               }
               this.fireRate_mc["insidePrimary" + (_loc1_ + 1) + "_mc"].scaleX = _loc2_;
               _loc1_++;
            }
            if(this.var_37.arrSecondaryWeapons.length > 0)
            {
               this.fireRate_mc.Secondary_mc.insidePrimary1_mc.scaleX = (this.numSecondaryFirerate - this.var_205) / this.numSecondaryFirerate;
            }
         }
         else
         {
            this.fireRate_mc.insidePrimary1_mc.scaleX = (this.numSecondaryFirerate - this.var_205) / this.numSecondaryFirerate;
         }
         this.life_mc.inside.scaleX = this.var_37.intTankLife / this.var_55.numLife;
         this.life_mc.left_txt.text = "" + this.var_37.intTankLife + " Life left";
         if(this.var_440 != this.var_37.intTankLife)
         {
            this.var_332 = 0;
         }
         this.var_440 = this.var_37.intTankLife;
      }
      
      public function method_382() : void
      {
         if(this.var_341 != null)
         {
            this.var_341.width = this.var_294;
            this.var_341.height = this.var_294;
         }
         if(this.var_97.var_13 != null)
         {
            this.var_97.var_13.avatarUnderBubble_mc.width = this.var_294;
            this.var_97.var_13.avatarUnderBubble_mc.height = this.var_294;
         }
      }
      
      public function UpdateAvatar(param1:BTAGameWorld, param2:MovieClip, param3:PlayerProfile) : void
      {
         var _loc7_:Boolean = false;
         var _loc8_:Number = NaN;
         var _loc9_:uint = 0;
         var _loc10_:uint = 0;
         var _loc11_:String = null;
         this.var_37 = param2;
         this.var_55 = this.var_37.GetDataRef();
         this.var_97 = param1;
         this.currentPlayerProfile = param3;
         if(this.var_55.numClass == 1)
         {
            this.var_37.intTankLife = this.var_55.numLife = 100;
         }
         else if(this.var_55.numClass == 2)
         {
            this.var_37.intTankLife = this.var_55.numLife = 110;
         }
         else if(this.var_55.numClass == 3)
         {
            this.var_37.intTankLife = this.var_55.numLife = 120;
         }
         else if(this.var_55.numClass == 4)
         {
            this.var_37.intTankLife = this.var_55.numLife = 200;
         }
         else if(this.var_55.numClass == 5)
         {
            this.var_37.intTankLife = this.var_55.numLife = 250;
         }
         else if(this.var_55.numClass == 6)
         {
            this.var_37.intTankLife = this.var_55.numLife = 300;
         }
         this.var_559 = this.var_97.currentBFTarget.BF_BG_mc.width;
         this.fireRate_mc.gotoAndStop(this.var_37.arrPrimaryWeapons.length);
         var _loc4_:uint = 0;
         var _loc5_:Array = new Array();
         _loc4_ = 0;
         while(_loc4_ < this.var_37.arrPrimaryWeapons.length)
         {
            _loc7_ = true;
            _loc8_ = 0;
            _loc9_ = 0;
            while(_loc9_ < this.var_149.length)
            {
               if(this.var_149[_loc9_].intObjID == this.var_37.arrPrimaryWeapons[_loc4_].intObjID)
               {
                  _loc7_ = false;
                  _loc8_ = _loc9_;
                  break;
               }
               _loc9_++;
            }
            if(_loc7_ == true)
            {
               _loc10_ = this.var_149.push(this.var_37.arrPrimaryWeapons[_loc4_]);
               _loc5_.push(1);
            }
            else
            {
               ++_loc5_[_loc8_];
            }
            _loc4_++;
         }
         var _loc6_:Number = 0;
         if(this.var_37.arrSecondaryWeapons.length > 0)
         {
            _loc6_ = 1;
         }
         this.fireRate_mc.gotoAndStop(this.var_149.length);
         if(this.var_149.length > 0)
         {
            _loc4_ = 0;
            while(_loc4_ < this.var_149.length)
            {
               _loc11_ = this.objGameObjectLibrary.method_26(this.var_149[_loc4_].intObjID);
               if(_loc5_[_loc4_] < 2)
               {
                  _loc11_ = _loc11_.substr(0,-2);
               }
               this.fireRate_mc["txtPrimary" + (_loc4_ + 1) + "_txt"].text = _loc11_;
               _loc4_++;
            }
            if(_loc6_ >= 1)
            {
               this.fireRate_mc.Secondary_mc.txtPrimary1_txt.text = "2nd";
            }
            else
            {
               this.fireRate_mc.Secondary_mc.alpha = 0;
            }
         }
         else
         {
            this.fireRate_mc.Secondary_mc.alpha = 0;
            this.fireRate_mc.txtPrimary1_txt.text = "2nd";
         }
         this.hot_UP = this.mRef.gData.hot1;
         this.hot_DOWN = this.mRef.gData.hot2;
         this.hot_LEFT = this.mRef.gData.hot3;
         this.hot_RIGHT = this.mRef.gData.hot4;
         this.var_341 = param1.currentBFTarget.avatarUnderBubble_mc;
         this.method_382();
         this.life_mc.state_txt.text = this.var_55.strTankName;
         this.numSecondaryFirerate = this.RetrieveSlowestSecondaryFirerate();
         if(this.numSecondaryFirerate == 0)
         {
            this.var_396 = false;
         }
      }
      
      public function set method_386(param1:Boolean) : void
      {
         this.blnMoveAvatar = param1;
      }
      
      private function MoveAvatar() : void
      {
         if(this.blnMoveAvatar == true)
         {
            if(this.var_37 != null)
            {
               this.var_355(this.var_20);
            }
         }
      }
      
      private function Deactivate() : void
      {
         this.var_203();
      }
      
      public function FullHealthPopUp() : void
      {
         this.var_440 = 0;
      }
      
      public function UpdateAvatarHotkeys() : void
      {
         this.hot_UP = this.mRef.gData.hot1;
         this.hot_DOWN = this.mRef.gData.hot2;
         this.hot_LEFT = this.mRef.gData.hot3;
         this.hot_RIGHT = this.mRef.gData.hot4;
      }
      
      private function RetrieveSlowestSecondaryFirerate() : int
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_37.arrSecondaryWeapons.length)
         {
            if(this.var_37.arrSecondaryWeapons[_loc2_].intFireRate > 0)
            {
               var _loc1_:int = int(this.var_37.arrSecondaryWeapons[_loc2_].intFireRate);
            }
            _loc2_++;
         }
         return 0;
      }
      
      public function AvatarSticky() : void
      {
         this.var_147 = this.var_388 * 0.3;
         this.var_231 = 80;
      }
      
      private function keyDown(param1:KeyboardEvent) : void
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < this.arrKeysDown.length)
         {
            if(param1.keyCode == this.arrKeysDown[_loc3_])
            {
               _loc2_ = true;
            }
            _loc3_++;
         }
         if(_loc2_ == false)
         {
            this.arrKeysDown.push(param1.keyCode);
         }
      }
      
      private function AvatarShootTest() : void
      {
         if(this.var_472 == false)
         {
            if(this.var_356 == true)
            {
               this.method_498();
            }
            if(this.var_405 == true)
            {
               this.method_494();
            }
         }
      }
      
      private function mouseDown(param1:MouseEvent) : void
      {
         this.var_356 = true;
      }
      
      private function method_844(param1:Number) : Number
      {
         while(param1 < 0)
         {
            param1 += 360;
         }
         while(param1 > 360)
         {
            param1 += 360;
         }
         return param1;
      }
      
      private function AvatarShootCounter() : void
      {
         if(this.var_205 > 0)
         {
            --this.var_205;
         }
         else if(this.var_205 == 0)
         {
            this.var_383 = true;
            this.var_205 = -1;
         }
      }
      
      public function set method_720(param1:Number) : void
      {
         this.var_294 = param1 + 45;
      }
   }
}

