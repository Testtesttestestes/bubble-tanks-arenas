package
{
   import flash.display.Stage;
   import flash.events.*;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.media.SoundTransform;
   
   public class MusicPlayer
   {
      
      private var var_43:Number;
      
      private var strDefaultTransition:String;
      
      private var var_428:Number;
      
      private var var_538:Number;
      
      private var var_208:Boolean;
      
      private var var_144:int;
      
      internal var chnMusicChannel0:SoundChannel;
      
      internal var chnMusicChannel1:SoundChannel;
      
      internal var arrChannelData:Array;
      
      private var var_64:int;
      
      private var var_456:int;
      
      private var var_128:int;
      
      public function MusicPlayer(param1:Stage)
      {
         super();
         this.var_208 = true;
         this.var_43 = 1;
         this.strDefaultTransition = "FadeOutFadeIn";
         this.var_456 = 40;
         param1.addEventListener(Event.ENTER_FRAME,this.Run);
         this.arrChannelData = new Array();
         this.arrChannelData.push({
            "sndMusic":null,
            "dblVolume":1,
            "blnLoop":true,
            "strTransitionEffect":"",
            "intTransitionTime":2
         });
         this.arrChannelData.push({
            "sndMusic":null,
            "dblVolume":1,
            "blnLoop":true,
            "strTransitionEffect":"",
            "intTransitionTime":2
         });
      }
      
      public function Channel0Complete(param1:Event) : void
      {
         var _loc2_:SoundTransform = null;
         if(this.arrChannelData[0].blnLoop == true)
         {
            _loc2_ = new SoundTransform();
            this.chnMusicChannel0 = this.arrChannelData[0].sndMusic.play(0,1);
            _loc2_.volume = this.var_43 * this.arrChannelData[0].dblVolume;
            this.chnMusicChannel0.soundTransform = _loc2_;
            this.chnMusicChannel0.addEventListener(Event.SOUND_COMPLETE,this.Channel0Complete);
         }
         else
         {
            this.var_64 = 0;
         }
      }
      
      public function Channel1Complete(param1:Event) : void
      {
         var _loc2_:SoundTransform = null;
         if(this.arrChannelData[1].blnLoop == true)
         {
            _loc2_ = new SoundTransform();
            this.chnMusicChannel1 = this.arrChannelData[1].sndMusic.play(0,1);
            _loc2_.volume = this.var_43 * this.arrChannelData[1].dblVolume;
            this.chnMusicChannel1.soundTransform = _loc2_;
            this.chnMusicChannel1.addEventListener(Event.SOUND_COMPLETE,this.Channel1Complete);
         }
         else
         {
            this.var_64 = 0;
         }
      }
      
      public function set method_352(param1:Boolean) : void
      {
         var _loc2_:* = this.var_208;
         this.var_208 = param1;
         if(_loc2_ == param1)
         {
            return;
         }
         if(this.var_208 == true)
         {
            this.method_761();
         }
         else
         {
            this.method_399();
         }
      }
      
      public function method_399() : void
      {
         switch(this.var_64)
         {
            case 1:
            case 2:
               this.chnMusicChannel0.stop();
               this.var_64 = 0;
               break;
            case 3:
               this.chnMusicChannel0.stop();
               this.arrChannelData[0].sndMusic = null;
               break;
            case 4:
               try
               {
                  this.chnMusicChannel0.stop();
               }
               catch(e:Error)
               {
               }
               try
               {
                  this.chnMusicChannel1.stop();
               }
               catch(e:Error)
               {
               }
               this.arrChannelData[0].sndMusic = this.arrChannelData[1].sndMusic;
               this.arrChannelData[0].dblVolume = this.arrChannelData[1].dblVolume;
               this.arrChannelData[0].blnLoop = this.arrChannelData[1].blnLoop;
               this.arrChannelData[0].strTransitionEffect = this.arrChannelData[1].strTransitionEffect;
               this.arrChannelData[0].intTransitionTime = this.arrChannelData[1].intTransitionTime;
               break;
            case 5:
            case 6:
               this.chnMusicChannel1.stop();
               this.arrChannelData[0].sndMusic = this.arrChannelData[1].sndMusic;
               this.arrChannelData[0].dblVolume = this.arrChannelData[1].dblVolume;
               this.arrChannelData[0].blnLoop = this.arrChannelData[1].blnLoop;
               this.arrChannelData[0].strTransitionEffect = this.arrChannelData[1].strTransitionEffect;
               this.arrChannelData[0].intTransitionTime = this.arrChannelData[1].intTransitionTime;
               break;
            case 7:
               this.chnMusicChannel1.stop();
               this.arrChannelData[0].sndMusic = null;
               break;
            case 8:
               try
               {
                  this.chnMusicChannel0.stop();
               }
               catch(e:Error)
               {
               }
               try
               {
                  this.chnMusicChannel1.stop();
                  break;
               }
               catch(e:Error)
               {
                  break;
               }
               break;
            case 9:
               this.chnMusicChannel0.stop();
               this.var_64 = 0;
         }
      }
      
      private function method_197(param1:int, param2:Boolean = false) : void
      {
         var _loc3_:Number = this.var_43 * this.arrChannelData[param1].dblVolume;
         if(this.var_128 == 0)
         {
            if(param1 == 0)
            {
               this.chnMusicChannel0.stop();
            }
            else
            {
               this.chnMusicChannel1.stop();
            }
            this.var_64 = 0;
            return;
         }
         ++this.var_144;
         var _loc4_:int = this.var_128;
         if(param2 == true)
         {
            _loc4_ = Math.round(this.var_128 / 2);
         }
         var _loc5_:Number = this.var_144 / this.var_128;
         if(_loc5_ > 1)
         {
            _loc5_ = 1;
         }
         var _loc6_:Number = _loc3_ * (1 - _loc5_);
         var _loc7_:SoundTransform = new SoundTransform();
         _loc7_.volume = _loc6_;
         if(param1 == 0)
         {
            this.chnMusicChannel0.soundTransform = _loc7_;
         }
         else
         {
            this.chnMusicChannel1.soundTransform = _loc7_;
         }
         _loc7_ = new SoundTransform();
         if(_loc5_ == 1)
         {
            if(param1 == 0)
            {
               if(param2 == true)
               {
                  this.var_128 = Math.round(this.var_128 / 2);
                  this.var_144 = 0;
                  this.var_64 = 5;
                  this.chnMusicChannel0.stop();
                  this.chnMusicChannel1 = this.arrChannelData[1].sndMusic.play(0,1);
                  _loc7_.volume = 0;
                  this.chnMusicChannel1.soundTransform = _loc7_;
                  this.chnMusicChannel1.addEventListener(Event.SOUND_COMPLETE,this.Channel1Complete);
               }
               else
               {
                  this.chnMusicChannel0.stop();
                  this.var_64 = 0;
               }
            }
            else if(param1 == 1)
            {
               if(param2 == true)
               {
                  this.var_128 = Math.round(this.var_128 / 2);
                  this.var_144 = 0;
                  this.var_64 = 1;
                  this.chnMusicChannel1.stop();
                  this.chnMusicChannel0 = this.arrChannelData[0].sndMusic.play(0,1);
                  _loc7_.volume = 0;
                  this.chnMusicChannel0.soundTransform = _loc7_;
                  this.chnMusicChannel0.addEventListener(Event.SOUND_COMPLETE,this.Channel0Complete);
               }
               else
               {
                  this.chnMusicChannel1.stop();
                  this.var_64 = 0;
               }
            }
         }
      }
      
      public function method_796() : void
      {
         this.var_428 = 9999999999999;
      }
      
      public function PlayLoopingFragment(param1:Sound, param2:Number = 0, param3:Number = 0, param4:Number = 1) : void
      {
         if(this.var_208 == false)
         {
            return;
         }
         this.method_399();
         if(param4 < 0)
         {
            param4 = 0;
         }
         else if(param4 > 1)
         {
            param4 = 1;
         }
         var _loc5_:SoundTransform = new SoundTransform();
         this.chnMusicChannel0 = param1.play(param2,1);
         _loc5_.volume = param4;
         this.chnMusicChannel0.soundTransform = _loc5_;
         this.chnMusicChannel0.addEventListener(Event.SOUND_COMPLETE,this.PartialLoopComplete);
         this.var_64 = 9;
         this.arrChannelData[0].sndMusic = param1;
         this.arrChannelData[0].dblVolume = param4;
         this.arrChannelData[0].blnLoop = false;
         this.arrChannelData[0].strTransitionEffect = "None";
         this.arrChannelData[0].intTransitionTime = 0;
         this.var_538 = param2;
         this.var_428 = param3;
         this.var_128 = 0;
         this.var_144 = 0;
      }
      
      public function Run(param1:Event) : void
      {
         if(this.var_208 == false)
         {
            return;
         }
         switch(this.var_64)
         {
            case 1:
               if(this.arrChannelData[0].strTransitionEffect == "FadeOutFadeIn")
               {
                  this.method_459(0);
               }
               break;
            case 3:
               this.method_197(0);
               break;
            case 4:
               if(this.arrChannelData[1].strTransitionEffect == "FadeOutFadeIn")
               {
                  this.method_197(0,true);
               }
               break;
            case 5:
               if(this.arrChannelData[1].strTransitionEffect == "FadeOutFadeIn")
               {
                  this.method_459(1);
               }
               break;
            case 7:
               this.method_197(1);
               break;
            case 8:
               if(this.arrChannelData[0].strTransitionEffect == "FadeOutFadeIn")
               {
                  this.method_197(1,true);
               }
               break;
            case 9:
               this.method_731();
         }
      }
      
      private function method_459(param1:int) : void
      {
         var _loc2_:Number = this.var_43 * this.arrChannelData[param1].dblVolume;
         if(this.var_128 == 0)
         {
            if(param1 == 0)
            {
               this.var_64 = 2;
            }
            else
            {
               this.var_64 = 6;
            }
            return;
         }
         ++this.var_144;
         var _loc3_:Number = this.var_144 / this.var_128;
         if(_loc3_ > 1)
         {
            _loc3_ = 1;
         }
         var _loc4_:Number = _loc2_ * _loc3_;
         if(_loc3_ == 1)
         {
            if(param1 == 0)
            {
               this.var_64 = 2;
            }
            else
            {
               this.var_64 = 6;
            }
         }
         var _loc5_:SoundTransform = new SoundTransform();
         _loc5_.volume = _loc4_;
         if(param1 == 0)
         {
            this.chnMusicChannel0.soundTransform = _loc5_;
         }
         else
         {
            this.chnMusicChannel1.soundTransform = _loc5_;
         }
      }
      
      public function PlayMusic(param1:Sound, param2:Number = 1, param3:Boolean = true, param4:String = "%%%", param5:int = -1) : void
      {
         if(param2 < 0)
         {
            param2 = 0;
         }
         else if(param2 > 1)
         {
            param2 = 1;
         }
         if(param4 == "%%%")
         {
            param4 = this.strDefaultTransition;
         }
         if(param5 == -1)
         {
            param5 = this.var_456;
         }
         if(param5 < 0)
         {
            param5 = 0;
         }
         if(param5 == 0)
         {
            param4 = "None";
         }
         if(param4 != "FadeOutFadeIn")
         {
            param4 = this.strDefaultTransition;
         }
         if(this.var_208 == false)
         {
            this.arrChannelData[0].sndMusic = param1;
            this.arrChannelData[0].dblVolume = param2;
            this.arrChannelData[0].blnLoop = param3;
            return;
         }
         var _loc6_:SoundTransform = new SoundTransform();
         switch(this.var_64)
         {
            case 0:
               this.chnMusicChannel0 = param1.play(0,1);
               _loc6_.volume = 0;
               this.chnMusicChannel0.soundTransform = _loc6_;
               this.chnMusicChannel0.addEventListener(Event.SOUND_COMPLETE,this.Channel0Complete);
               this.var_64 = 1;
               this.arrChannelData[0].sndMusic = param1;
               this.arrChannelData[0].dblVolume = param2;
               this.arrChannelData[0].blnLoop = param3;
               this.arrChannelData[0].strTransitionEffect = param4;
               this.arrChannelData[0].intTransitionTime = param5;
               this.var_128 = param5;
               this.var_144 = 0;
               break;
            case 2:
               this.var_64 = 4;
               this.arrChannelData[1].sndMusic = param1;
               this.arrChannelData[1].dblVolume = param2;
               this.arrChannelData[1].blnLoop = param3;
               this.arrChannelData[1].strTransitionEffect = param4;
               this.arrChannelData[1].intTransitionTime = param5;
               this.var_128 = param5;
               this.var_144 = 0;
               break;
            case 6:
               this.var_64 = 8;
               this.arrChannelData[0].sndMusic = param1;
               this.arrChannelData[0].dblVolume = param2;
               this.arrChannelData[0].blnLoop = param3;
               this.arrChannelData[0].strTransitionEffect = param4;
               this.arrChannelData[0].intTransitionTime = param5;
               this.var_128 = param5;
               this.var_144 = 0;
         }
      }
      
      public function method_797(param1:int = -1) : void
      {
         var _loc2_:int = 0;
         if(param1 == -1)
         {
            param1 = this.var_456;
         }
         switch(this.var_64)
         {
            case 0:
            case 3:
            case 4:
            case 7:
            case 8:
            case 9:
               return;
            case 1:
            case 2:
               _loc2_ = 0;
               break;
            case 5:
            case 6:
               _loc2_ = 1;
         }
         if(_loc2_ == 0)
         {
            this.var_64 = 3;
         }
         else
         {
            this.var_64 = 7;
         }
         this.var_128 = param1;
         this.var_144 = 0;
      }
      
      private function method_761() : void
      {
         if(this.arrChannelData[0].sndMusic == null)
         {
            return;
         }
         var _loc1_:SoundTransform = new SoundTransform();
         this.chnMusicChannel0 = this.arrChannelData[0].sndMusic.play(0,1);
         _loc1_.volume = this.var_43 * this.arrChannelData[0].dblVolume;
         this.chnMusicChannel0.soundTransform = _loc1_;
         this.chnMusicChannel0.addEventListener(Event.SOUND_COMPLETE,this.Channel0Complete);
         if(this.var_64 != 9)
         {
            this.var_64 = 2;
         }
      }
      
      public function get method_352() : Boolean
      {
         return this.var_208;
      }
      
      public function method_731() : void
      {
         var _loc1_:SoundTransform = null;
         if(this.chnMusicChannel0.position >= this.var_428)
         {
            this.chnMusicChannel0.stop();
            _loc1_ = new SoundTransform();
            this.chnMusicChannel0 = this.arrChannelData[0].sndMusic.play(this.var_538,1);
            _loc1_.volume = this.arrChannelData[0].dblVolume;
            this.chnMusicChannel0.soundTransform = _loc1_;
            this.chnMusicChannel0.addEventListener(Event.SOUND_COMPLETE,this.PartialLoopComplete);
         }
      }
      
      public function PartialLoopComplete(param1:Event) : void
      {
         this.var_64 = 0;
      }
   }
}

