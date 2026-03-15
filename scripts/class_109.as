package
{
   import flash.display.*;
   import flash.events.*;
   import flash.geom.Point;
   import package_11.class_125;
   import package_11.class_126;
   
   public class class_109 extends MovieClip
   {
      
      public var effectLayer_under_mc:MovieClip;
      
      public var arrEnemies:Array;
      
      public var lifeBubbleLayer_mc:MovieClip;
      
      public var arrBullets:Vector.<class_68>;
      
      private var var_28:Vector.<MovieClip>;
      
      private var var_115:Array;
      
      public var BF_BG_mc:MovieClip;
      
      public var var_413:Boolean;
      
      public var arrBulletRemoveQueue:Vector.<class_68>;
      
      public var effect_mask_under:MovieClip;
      
      private var var_225:int;
      
      public var var_60:BTAGameWorld;
      
      private var var_159:Boolean;
      
      public var var_160:MovieClip;
      
      private var var_215:int;
      
      private var var_191:Array;
      
      private var var_285:MovieClip;
      
      public var var_323:MovieClip;
      
      public var enemyLayer_mc:MovieClip;
      
      private var var_279:Vector.<class_113>;
      
      private var var_267:Array;
      
      public var avatarUnderBubble_mc:MovieClip;
      
      private var arrBFEnemyData:Array;
      
      private var mRef:class_79;
      
      public var BF_over_detail_mc:MovieClip;
      
      private var var_352:Boolean;
      
      private var var_195:Vector.<EnemyAI>;
      
      public function class_109()
      {
         super();
         this.arrBFEnemyData = new Array();
         this.var_191 = new Array();
         this.arrEnemies = new Array();
         this.var_115 = new Array();
         this.arrBullets = new Vector.<class_68>();
         this.arrBulletRemoveQueue = new Vector.<class_68>();
         this.var_195 = new Vector.<EnemyAI>();
         this.var_279 = new Vector.<class_113>();
         this.var_28 = new Vector.<MovieClip>();
         this.var_267 = new Array();
         this.var_352 = false;
         this.var_285 = null;
         this.var_159 = false;
         this.var_413 = false;
         this.var_323 = null;
         this.var_225 = -1;
         this.var_215 = -1;
      }
      
      public function SaveTankData() : void
      {
         var _loc1_:uint = 0;
         if(this.var_159 == false)
         {
            this.method_306();
            this.method_407();
            this.var_191 = new Array();
            _loc1_ = 0;
            while(_loc1_ < this.arrEnemies.length)
            {
               this.var_191.push({
                  "mc":this.arrEnemies[_loc1_],
                  "xLoc":this.arrEnemies[_loc1_].x,
                  "yLoc":this.arrEnemies[_loc1_].y,
                  "rot":this.arrEnemies[_loc1_].rotation
               });
               this.enemyLayer_mc.removeChild(this.arrEnemies[_loc1_]);
               _loc1_++;
            }
            this.arrEnemies = new Array();
         }
      }
      
      private function RandNum(param1:Number, param2:Number) : Number
      {
         return Math.round(Math.random() * (param2 - param1 + 0.8) + param1 - 0.4);
      }
      
      public function method_246() : *
      {
         var _loc1_:uint = 0;
         if(this.var_159 == false)
         {
            _loc1_ = 0;
            while(_loc1_ < this.arrBulletRemoveQueue.length)
            {
               this.method_333(this.arrBulletRemoveQueue[_loc1_]);
               _loc1_++;
            }
            this.arrBulletRemoveQueue = new Vector.<class_68>();
         }
      }
      
      public function DeleteEnemiesInArrEnemyDeleteQueue() : *
      {
         var _loc1_:uint = 0;
         if(this.var_159 == false)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_195.length)
            {
               this.RemoveEnemy(this.var_195[_loc1_]);
               _loc1_++;
            }
            this.var_195 = new Vector.<EnemyAI>();
         }
      }
      
      public function set method_523(param1:Array) : void
      {
         if(this.var_159 == false)
         {
            this.arrBFEnemyData = new Array();
            this.arrBFEnemyData = param1;
            this.method_674();
         }
      }
      
      public function AddEffectToQueue(param1:MovieClip, param2:Number, param3:Number, param4:String, param5:Boolean, param6:Function = null) : void
      {
         if(this.var_60.var_320 == true)
         {
            this.var_267.push({
               "effectClass":param1,
               "xLoc":param2,
               "yLoc":param3,
               "layer":param4,
               "randRotation":param5,
               "EndCallBack":param6
            });
         }
      }
      
      public function method_580(param1:MovieClip) : void
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_28.length)
         {
            if(param1 == this.var_28[_loc2_])
            {
               this.var_60.objAvatarInterface.FullHealthPopUp();
               this.var_60.myAvatar.AddLife(this.var_28[_loc2_].intLifeAmount * (this.var_60.myAvatar.objData.numLife / 100));
               this.var_60.method_573();
               this.var_28.splice(_loc2_,1);
               this.lifeBubbleLayer_mc.removeChild(param1);
               break;
            }
            _loc2_++;
         }
      }
      
      public function ReAddAllTanks() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:MovieClip = null;
         if(this.var_159 == false)
         {
            this.arrEnemies = new Array();
            _loc1_ = 0;
            while(_loc1_ < this.var_191.length)
            {
               _loc2_ = this.var_191[_loc1_].mc;
               _loc2_.x = this.var_191[_loc1_].xLoc;
               _loc2_.y = this.var_191[_loc1_].yLoc;
               _loc2_.rotation = this.var_191[_loc1_].rot;
               this.enemyLayer_mc.addChild(_loc2_);
               this.arrEnemies.push(_loc2_);
               _loc1_++;
            }
            this.var_191 = new Array();
         }
      }
      
      public function method_235(param1:MovieClip) : void
      {
         this.var_285 = param1;
      }
      
      public function AreaBurstTest(param1:Number, param2:Number, param3:Number, param4:Number) : void
      {
         var _loc6_:class_6 = null;
         var _loc5_:uint = 0;
         _loc5_ = 0;
         while(_loc5_ < this.arrEnemies.length)
         {
            _loc6_ = new class_6(this.arrEnemies[_loc5_].x - param1,this.arrEnemies[_loc5_].y - param2);
            if(_loc6_.method_41() <= param3)
            {
               this.arrEnemies[_loc5_].Damage(param4);
            }
            _loc5_++;
         }
         _loc5_ = 0;
         while(_loc5_ < this.arrBullets.length)
         {
            _loc6_ = new class_6(this.arrBullets[_loc5_].x - param1,this.arrBullets[_loc5_].y - param2);
            if(this.arrBullets[_loc5_].blnEnemy && this.arrBullets[_loc5_].blnDestroyable)
            {
               if(_loc6_.method_41() <= param3)
               {
                  this.arrBulletRemoveQueue.push(this.arrBullets[_loc5_]);
               }
            }
            _loc5_++;
         }
         this.method_246();
         this.DeleteEnemiesInArrEnemyDeleteQueue();
      }
      
      public function SpawnNewBullet(param1:class_68, param2:Number, param3:Number, param4:Number, param5:Number, param6:Number, param7:int, param8:Boolean = true, param9:Object = null, param10:MovieClip = null) : class_68
      {
         if(this.var_285 != null)
         {
            if(this.var_60.var_282 == false)
            {
               param1.x = param2;
               param1.y = param3;
               param1.scaleX = param1.scaleY = param4;
               param1.rotation = param5;
               this.var_285.addChild(param1);
               param1.Setup(param6,param9,param10,param8,param7,this);
               param1.blnMoveTank = true;
               this.arrBullets.push(param1);
               if(param8 == false)
               {
                  this.var_60.method_460(1);
               }
               else
               {
                  this.var_60.method_460(2);
               }
               if(param8 == false)
               {
                  if(this.var_225 == -1)
                  {
                     this.mRef.SoundCall(new class_50());
                     this.var_225 = 5;
                  }
               }
            }
         }
         return param1;
      }
      
      public function method_690() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_28.length)
         {
            this.var_28[_loc1_].blnCollect = true;
            _loc1_++;
         }
      }
      
      private function LifeBubbleCallback(param1:MovieClip) : void
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this.var_28.length)
         {
            if(param1 == this.var_28[_loc2_])
            {
               this.var_28.splice(_loc2_,1);
               this.lifeBubbleLayer_mc.removeChild(param1);
               break;
            }
            _loc2_++;
         }
      }
      
      public function AreaDamageTest(param1:String, param2:MovieClip, param3:class_68, param4:Number, param5:Number = 0) : void
      {
         var _loc6_:uint = 0;
         if(param1 == "r")
         {
            _loc6_ = 0;
            _loc6_ = 0;
            while(_loc6_ < this.arrEnemies.length)
            {
               if(param2 != this.arrEnemies[_loc6_])
               {
                  if(this.method_388(this.arrEnemies[_loc6_],param3,param4) == true)
                  {
                     this.arrEnemies[_loc6_].Damage(param5);
                  }
               }
               _loc6_++;
            }
            _loc6_ = 0;
            while(_loc6_ < this.arrBullets.length)
            {
               if(this.arrBullets[_loc6_].blnEnemy && this.arrBullets[_loc6_].blnDestroyable)
               {
                  if(this.method_388(this.arrBullets[_loc6_],param3,param4) == true)
                  {
                     this.arrBulletRemoveQueue.push(this.arrBullets[_loc6_]);
                  }
               }
               _loc6_++;
            }
            this.method_246();
            this.DeleteEnemiesInArrEnemyDeleteQueue();
         }
      }
      
      private function method_306() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this.arrBullets.length)
         {
            this.arrBullets[_loc1_].Deactivate();
            this.var_285.removeChild(this.arrBullets[_loc1_]);
            _loc1_++;
         }
         this.arrBullets = new Vector.<class_68>();
      }
      
      private function method_662() : void
      {
         if(this.var_215 > 0)
         {
            --this.var_215;
         }
         else if(this.var_215 == 0)
         {
            this.var_215 = -1;
         }
      }
      
      public function AreaStunTest(param1:Number, param2:Number, param3:Number, param4:Number) : void
      {
         var _loc6_:class_6 = null;
         var _loc5_:uint = 0;
         while(_loc5_ < this.arrEnemies.length)
         {
            _loc6_ = new class_6(this.arrEnemies[_loc5_].x - param1,this.arrEnemies[_loc5_].y - param2);
            if(_loc6_.method_41() <= param3)
            {
               this.arrEnemies[_loc5_].StunMe(param4);
               this.arrEnemies[_loc5_].EffectMeCrazy("stun",param4,5,false);
            }
            _loc5_++;
         }
      }
      
      private function method_649(param1:class_113) : void
      {
      }
      
      public function Deactivate() : void
      {
         if(this.var_159 == false)
         {
            if(this.var_352 == false)
            {
               this.SaveTankData();
            }
            else
            {
               this.method_306();
               this.method_407();
               this.mRef = null;
               this.var_115 = null;
               this.arrBFEnemyData = null;
               this.var_191 = null;
               this.arrEnemies = null;
               this.arrBullets = new Vector.<class_68>();
               this.arrBulletRemoveQueue = new Vector.<class_68>();
               this.var_195 = null;
               this.var_279 = null;
               this.var_267 = null;
               this.var_28 = new Vector.<MovieClip>();
               this.var_159 = true;
            }
         }
      }
      
      public function SpawnNewEnemy(param1:String, param2:Number, param3:Number) : void
      {
         var _loc4_:TankData = new TankData();
         _loc4_.ImportTankData(param1);
         var _loc5_:MovieClip = _loc4_.method_61(3,this.var_60);
         _loc5_.x = param2;
         _loc5_.y = param3;
         this.enemyLayer_mc.addChild(_loc5_);
         _loc5_.SetCallback(this.TankCallback);
         _loc5_.intState = 1;
         this.arrEnemies.push(_loc5_);
      }
      
      public function method_407() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this.var_28.length)
         {
            this.lifeBubbleLayer_mc.removeChild(this.var_28[_loc1_]);
            _loc1_++;
         }
         this.var_28 = new Vector.<MovieClip>();
      }
      
      private function method_589(param1:Object) : void
      {
         if(this.var_60.var_320 == true)
         {
            this.var_60.objEffectsEngine.method_60(param1.effectClass,param1.xLoc,param1.yLoc,param1.layer,param1.randRotation,param1.EndCallBack);
         }
      }
      
      private function RemoveEnemy(param1:EnemyAI) : void
      {
         var _loc3_:uint = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < this.arrEnemies.length)
         {
            if(this.arrEnemies[_loc2_] == param1)
            {
               _loc3_ = 0;
               while(_loc3_ < this.var_115.length)
               {
                  if(param1 == this.var_115[_loc3_])
                  {
                     this.var_115.splice(_loc3_,1);
                  }
                  _loc3_++;
               }
               this.arrEnemies.splice(_loc2_,1);
               this.enemyLayer_mc.removeChild(param1);
               break;
            }
            _loc2_++;
         }
      }
      
      public function method_333(param1:class_68) : void
      {
         var var_106:Boolean = false;
         var var_56:uint = 0;
         var var_40:uint = 0;
         var var_157:uint = 0;
         var var_126:class_68 = param1;
         var var_150:uint = 0;
         while(var_150 < this.arrBullets.length)
         {
            if(this.arrBullets[var_150] != null && this.arrBullets[var_150] != undefined)
            {
               if(this.arrBullets[var_150] == var_126)
               {
                  if(var_126 != null)
                  {
                     var_106 = false;
                     var_56 = 0;
                     while(var_56 < this.var_115.length)
                     {
                        if(this.var_115[var_56] != null)
                        {
                           try
                           {
                              if(this.var_115[var_56].arrPrimaryWeapons[0] != null)
                              {
                                 var_40 = 0;
                                 while(var_40 < this.var_115[var_56].arrPrimaryWeapons.length)
                                 {
                                    if(this.var_115[var_56].arrPrimaryWeapons[var_40] != null)
                                    {
                                       if(this.var_115[var_56].arrPrimaryWeapons[var_40].blnMineLayer == true)
                                       {
                                          var_157 = 0;
                                          while(var_157 < this.var_115[var_56].arrPrimaryWeapons[var_40].arrMineRefs.length)
                                          {
                                             if(this.var_115[var_56].arrPrimaryWeapons[var_40].arrMineRefs[var_157] != null)
                                             {
                                                if(this.var_115[var_56].arrPrimaryWeapons[var_40].arrMineRefs[var_157].mc.name == var_126.name)
                                                {
                                                   var_106 = true;
                                                   this.var_115[var_56].arrPrimaryWeapons[var_40].arrMineRefs.splice(var_157,1);
                                                   break;
                                                }
                                             }
                                             var_157++;
                                          }
                                       }
                                       if(var_106 == true)
                                       {
                                          break;
                                       }
                                    }
                                    var_40++;
                                 }
                              }
                           }
                           catch(e:Error)
                           {
                           }
                           if(var_106 == true)
                           {
                              break;
                           }
                        }
                        var_56++;
                     }
                     this.arrBullets[var_150].Deactivate();
                     this.arrBullets.splice(var_150,1);
                     this.var_285.removeChild(var_126);
                     break;
                  }
               }
            }
            var_150++;
         }
      }
      
      private function method_742() : void
      {
         if(this.var_225 > 0)
         {
            --this.var_225;
         }
         else if(this.var_225 == 0)
         {
            this.var_225 = -1;
         }
      }
      
      public function Setup(param1:class_79) : void
      {
         if(this.var_159 == false)
         {
            this.mRef = param1;
         }
      }
      
      public function DroneConversionTest(param1:Number, param2:Number, param3:Boolean) : *
      {
         var _loc4_:uint = 0;
         while(_loc4_ < this.arrBullets.length)
         {
            if(this.arrBullets[_loc4_].blnEnemy != param3 && this.arrBullets[_loc4_].blnRotateTowardTarget)
            {
               this.arrBulletRemoveQueue.push(this.arrBullets[_loc4_]);
               if(param3 == true)
               {
                  this.SpawnNewBullet(new class_126(),this.arrBullets[_loc4_].x,this.arrBullets[_loc4_].y,1,this.arrBullets[_loc4_].rotation,5,1,true,null,this.arrEnemies[Math.floor(Math.random() * (this.arrEnemies.length - 1))]);
               }
               else
               {
                  this.SpawnNewBullet(new class_125(),this.arrBullets[_loc4_].x,this.arrBullets[_loc4_].y,1,this.arrBullets[_loc4_].rotation,10,15,false,null,this.arrEnemies[Math.floor(Math.random() * (this.arrEnemies.length - 1))]);
               }
            }
            _loc4_++;
         }
         this.method_246();
      }
      
      public function LifeBubbleCollisionDetection() : void
      {
         var _loc3_:Point = null;
         if(this.var_60 == null)
         {
            return;
         }
         if(this.var_60.myAvatar == null)
         {
            return;
         }
         var _loc1_:uint = 0;
         var _loc2_:Array = new Array();
         _loc1_ = 0;
         while(_loc1_ < this.var_28.length)
         {
            if(this.var_28[_loc1_] != null)
            {
               _loc3_ = new Point(this.var_28[_loc1_].x,this.var_28[_loc1_].y);
               _loc3_ = this.localToGlobal(_loc3_);
               if(Boolean(this.var_28[_loc1_].blnCollected) || this.var_60.myAvatar.hitTestPoint(_loc3_.x,_loc3_.y,true) == true)
               {
                  _loc2_.push(this.var_28[_loc1_]);
               }
            }
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ < _loc2_.length)
         {
            if(_loc2_[_loc1_] != null)
            {
               if(this.var_215 == -1)
               {
                  this.mRef.SoundCall(new class_46(),0.6);
                  this.var_215 = 4;
               }
               this.method_580(_loc2_[_loc1_]);
            }
            _loc1_++;
         }
      }
      
      public function Run() : void
      {
         var _loc1_:uint = 0;
         if(this.var_159 == false)
         {
            _loc1_ = 0;
            while(_loc1_ < this.var_195.length)
            {
               this.RemoveEnemy(this.var_195[_loc1_]);
               _loc1_++;
            }
            this.var_195 = new Vector.<EnemyAI>();
         }
         if(this.arrEnemies != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.arrEnemies.length)
            {
               this.arrEnemies[_loc1_].Run();
               _loc1_++;
            }
         }
         _loc1_ = 0;
         while(_loc1_ < this.arrBullets.length)
         {
            if(_loc1_ < this.arrBullets.length && this.arrBullets[_loc1_] != null)
            {
               if(this.arrBullets[_loc1_].blnReadyForDeleteQueue == true)
               {
                  this.arrBulletRemoveQueue.push(this.arrBullets[_loc1_]);
               }
               else if(this.arrBullets[_loc1_].Run() == true)
               {
                  if(_loc1_ < this.arrBullets.length)
                  {
                     this.arrBulletRemoveQueue.push(this.arrBullets[_loc1_]);
                  }
               }
            }
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ < this.arrBulletRemoveQueue.length)
         {
            this.method_333(this.arrBulletRemoveQueue[_loc1_]);
            _loc1_++;
         }
         this.arrBulletRemoveQueue = new Vector.<class_68>();
         if(this.var_159 == false)
         {
            this.LifeBubbleCollisionDetection();
            _loc1_ = 0;
            while(_loc1_ < this.var_28.length)
            {
               this.var_28[_loc1_].Run();
               _loc1_++;
            }
            _loc1_ = 0;
            while(_loc1_ < this.var_279.length)
            {
               this.method_649(this.var_279[_loc1_]);
               _loc1_++;
            }
            this.var_279 = new Vector.<class_113>();
            this.TestForCompletion();
         }
         _loc1_ = 0;
         while(_loc1_ < this.var_267.length)
         {
            this.method_589(this.var_267[_loc1_]);
            _loc1_++;
         }
         this.var_267 = new Array();
         this.method_742();
         this.method_662();
      }
      
      private function method_388(param1:MovieClip, param2:class_68, param3:Number) : Boolean
      {
         var _loc4_:Number = param1.x - param2.x;
         var _loc5_:Number = param1.y - param2.y;
         param3 *= 1.15;
         if(_loc4_ * _loc4_ + _loc5_ * _loc5_ < param3 * param3)
         {
            return true;
         }
         return false;
      }
      
      public function SpawnLifeBubbles(param1:Number, param2:Number, param3:int, param4:int = 1, param5:Boolean = false) : void
      {
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         var _loc11_:MovieClip = null;
         var _loc12_:uint = 0;
         var _loc13_:int = 0;
         var _loc14_:int = 0;
         var _loc6_:uint = 0;
         if(param3 < 5)
         {
            _loc6_ = 0;
            while(_loc6_ < param3)
            {
               _loc11_ = new class_134();
               _loc11_.x = param1;
               _loc11_.y = param2;
               _loc11_.rotation = this.RandNum(-180,180);
               this.lifeBubbleLayer_mc.addChild(_loc11_);
               _loc11_.Setup(1,this.LifeBubbleCallback,this.var_60.myAvatar);
               this.var_28.push(_loc11_);
               if(param5 == true)
               {
                  this.var_28[this.var_28.length - 1].blnCollect = true;
               }
               _loc6_++;
            }
         }
         else if(param3 < 50)
         {
            _loc8_ = Math.floor(param3 / 5);
            _loc6_ = 0;
            while(_loc6_ < _loc8_)
            {
               _loc11_ = new class_136();
               _loc11_.x = param1;
               _loc11_.y = param2;
               _loc11_.rotation = this.RandNum(-180,180);
               this.lifeBubbleLayer_mc.addChild(_loc11_);
               _loc11_.Setup(5,this.LifeBubbleCallback,this.var_60.myAvatar);
               this.var_28.push(_loc11_);
               if(param5 == true)
               {
                  this.var_28[this.var_28.length - 1].blnCollect = true;
               }
               if(_loc8_ > 1)
               {
                  if(_loc6_ == _loc8_ - 2)
                  {
                     if(param3 % 5 >= 5 || param3 % 5 <= 0)
                     {
                        _loc12_ = 0;
                        while(_loc12_ < 5)
                        {
                           _loc11_ = new class_134();
                           _loc11_.x = param1;
                           _loc11_.y = param2;
                           _loc11_.rotation = this.RandNum(-180,180);
                           this.lifeBubbleLayer_mc.addChild(_loc11_);
                           _loc11_.Setup(1,this.LifeBubbleCallback,this.var_60.myAvatar);
                           this.var_28.push(_loc11_);
                           if(param5 == true)
                           {
                              this.var_28[this.var_28.length - 1].blnCollect = true;
                           }
                           _loc12_++;
                        }
                        break;
                     }
                  }
               }
               _loc6_++;
            }
            _loc10_ = param3 % 5;
            if(_loc10_ < 5 && _loc10_ > 0)
            {
               _loc6_ = 0;
               while(_loc6_ < _loc10_)
               {
                  _loc11_ = new class_134();
                  _loc11_.x = param1;
                  _loc11_.y = param2;
                  _loc11_.rotation = this.RandNum(-180,180);
                  this.lifeBubbleLayer_mc.addChild(_loc11_);
                  _loc11_.Setup(1,this.LifeBubbleCallback,this.var_60.myAvatar);
                  this.var_28.push(_loc11_);
                  if(param5 == true)
                  {
                     this.var_28[this.var_28.length - 1].blnCollect = true;
                  }
                  _loc6_++;
               }
            }
         }
         else
         {
            _loc9_ = Math.floor(param3 / 50);
            _loc6_ = 0;
            while(_loc6_ < _loc9_)
            {
               _loc11_ = new class_135();
               _loc11_.x = param1;
               _loc11_.y = param2;
               _loc11_.rotation = this.RandNum(-180,180);
               this.lifeBubbleLayer_mc.addChild(_loc11_);
               _loc11_.Setup(50,this.LifeBubbleCallback,this.var_60.myAvatar);
               this.var_28.push(_loc11_);
               if(param5 == true)
               {
                  this.var_28[this.var_28.length - 1].blnCollect = true;
               }
               _loc6_++;
            }
            _loc10_ = param3 % 50;
            if(_loc10_ < 50 && _loc10_ > 0)
            {
               _loc13_ = Math.floor(_loc10_ / 5);
               _loc6_ = 0;
               while(_loc6_ < _loc13_)
               {
                  _loc11_ = new class_136();
                  _loc11_.x = param1;
                  _loc11_.y = param2;
                  _loc11_.rotation = this.RandNum(-180,180);
                  this.lifeBubbleLayer_mc.addChild(_loc11_);
                  _loc11_.Setup(5,this.LifeBubbleCallback,this.var_60.myAvatar);
                  this.var_28.push(_loc11_);
                  if(param5 == true)
                  {
                     this.var_28[this.var_28.length - 1].blnCollect = true;
                  }
                  _loc6_++;
               }
               _loc14_ = _loc13_ % 5;
               if(_loc14_ < 5 && _loc14_ > 0)
               {
                  _loc6_ = 0;
                  while(_loc6_ < _loc14_)
                  {
                     _loc11_ = new class_134();
                     _loc11_.x = param1;
                     _loc11_.y = param2;
                     _loc11_.rotation = this.RandNum(-180,180);
                     this.lifeBubbleLayer_mc.addChild(_loc11_);
                     _loc11_.Setup(1,this.LifeBubbleCallback,this.var_60.myAvatar);
                     this.var_28.push(_loc11_);
                     if(param5 == true)
                     {
                        this.var_28[this.var_28.length - 1].blnCollect = true;
                     }
                     _loc6_++;
                  }
               }
            }
         }
      }
      
      public function TestForCompletion() : void
      {
         var _loc1_:uint = 0;
         if(this.var_413 == false)
         {
            if(this.var_352 == false)
            {
               if(this.arrEnemies.length == 0)
               {
                  this.var_60.method_593();
                  this.method_690();
                  this.var_352 = true;
                  _loc1_ = 0;
                  while(_loc1_ < this.arrBullets.length)
                  {
                     if(this.arrBullets[_loc1_].blnEnemy == true)
                     {
                        if(this.arrBullets[_loc1_].blnEnemyMine == true)
                        {
                           this.arrBullets[_loc1_].blnBulletWipe = true;
                        }
                        if(this.arrBullets[_loc1_].blnSeeker == true)
                        {
                           this.arrBullets[_loc1_].blnBulletWipe = true;
                        }
                     }
                     _loc1_++;
                  }
               }
            }
         }
      }
      
      private function TankCallback(param1:class_113, param2:int) : void
      {
         if(param2 == 3)
         {
            this.var_60.TanksDefeatedIncr();
            this.var_195.push(param1);
         }
         else if(param2 != 1)
         {
            this.var_279.push(param1);
         }
      }
      
      public function set method_452(param1:BTAGameWorld) : void
      {
         if(this.var_159 == false)
         {
            this.var_60 = param1;
         }
      }
      
      private function method_674() : void
      {
         var _loc2_:uint = 0;
         var _loc3_:TankData = null;
         var _loc4_:MovieClip = null;
         var _loc5_:Array = null;
         var _loc6_:uint = 0;
         this.arrEnemies = new Array();
         var _loc1_:uint = 0;
         while(_loc1_ < this.arrBFEnemyData.length)
         {
            _loc2_ = 0;
            while(_loc2_ < this.arrBFEnemyData[_loc1_].AMT)
            {
               _loc3_ = new TankData();
               _loc3_.ImportTankData(this.arrBFEnemyData[_loc1_].DATA.ExportTankData());
               _loc3_.strID = this.arrBFEnemyData[_loc1_].ID;
               _loc4_ = _loc3_.method_61(3,this.var_60);
               _loc4_.x = this.RandNum(-250,250);
               _loc4_.y = this.RandNum(-250,250);
               _loc4_.rotation = this.RandNum(-180,180);
               this.enemyLayer_mc.addChild(_loc4_);
               _loc4_.SetCallback(this.TankCallback);
               this.arrEnemies.push(_loc4_);
               _loc5_ = _loc3_.arrTankDetails;
               _loc6_ = 0;
               while(_loc6_ < _loc5_.length)
               {
                  if(_loc5_[_loc6_].type == 4009)
                  {
                     this.var_115.push(_loc4_);
                     break;
                  }
                  _loc6_++;
               }
               _loc2_++;
            }
            _loc1_++;
         }
      }
   }
}

