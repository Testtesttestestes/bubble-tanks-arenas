// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class MusicPlayer{
      
      private var_43: number;
      private strDefaultTransition: string;
      private var_428: number;
      private var_538: number;
      private var_208: boolean;
      private var_144: number;
      public chnMusicChannel0: SoundChannel;
      public chnMusicChannel1: SoundChannel;
      public arrChannelData: any[];
      private var_64: number;
      private var_456: number;
      private var_128: number;
      constructor(param1: Stage){
         super();
         this.var_208 = true;
         this.var_43 = 1;
         this.strDefaultTransition = "FadeOutFadeIn";
         this.var_456 = 40;
         param1.addEventListener(Event.ENTER_FRAME, this.Run.bind(this));
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
      
      public Channel0Complete(param1: Event): void
      {
         let _loc2_: SoundTransform = null;
         if(this.arrChannelData[0].blnLoop == true)
         {
            _loc2_ = new SoundTransform();
            this.chnMusicChannel0 = this.arrChannelData[0].sndMusic.play(0,1);
            _loc2_.volume = this.var_43 * this.arrChannelData[0].dblVolume;
            this.chnMusicChannel0.soundTransform = _loc2_;
            this.chnMusicChannel0.addEventListener(Event.SOUND_COMPLETE, this.Channel0Complete.bind(this));
         }
         else
         {
            this.var_64 = 0;
         }
      }
      
      public Channel1Complete(param1: Event): void
      {
         let _loc2_: SoundTransform = null;
         if(this.arrChannelData[1].blnLoop == true)
         {
            _loc2_ = new SoundTransform();
            this.chnMusicChannel1 = this.arrChannelData[1].sndMusic.play(0,1);
            _loc2_.volume = this.var_43 * this.arrChannelData[1].dblVolume;
            this.chnMusicChannel1.soundTransform = _loc2_;
            this.chnMusicChannel1.addEventListener(Event.SOUND_COMPLETE, this.Channel1Complete.bind(this));
         }
         else
         {
            this.var_64 = 0;
         }
      }
      
      public set method_352(param1: boolean)
      {
         let _loc2_: any = this.var_208;
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
      
      public method_399(): void
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
               catch (e: any)
               {
               }
               try
               {
                  this.chnMusicChannel1.stop();
               }
               catch (e: any)
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
               catch (e: any)
               {
               }
               try
               {
                  this.chnMusicChannel1.stop();
                  break;
               }
               catch (e: any)
               {
                  break;
               }
               break;
            case 9:
               this.chnMusicChannel0.stop();
               this.var_64 = 0;
         }
      }
      
      private method_197(param1: number, param2: boolean = false): void
      {
         let _loc3_: number = this.var_43 * this.arrChannelData[param1].dblVolume;
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
         let _loc4_: number = this.var_128;
         if(param2 == true)
         {
            _loc4_ = Math.round(this.var_128 / 2);
         }
         let _loc5_: number = this.var_144 / this.var_128;
         if(_loc5_ > 1)
         {
            _loc5_ = 1;
         }
         let _loc6_: number = _loc3_ * (1 - _loc5_);
         let _loc7_: SoundTransform = new SoundTransform();
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
                  this.chnMusicChannel1.addEventListener(Event.SOUND_COMPLETE, this.Channel1Complete.bind(this));
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
                  this.chnMusicChannel0.addEventListener(Event.SOUND_COMPLETE, this.Channel0Complete.bind(this));
               }
               else
               {
                  this.chnMusicChannel1.stop();
                  this.var_64 = 0;
               }
            }
         }
      }
      
      public method_796(): void
      {
         this.var_428 = 9999999999999;
      }
      
      public PlayLoopingFragment(param1: Sound, param2: number = 0, param3: number = 0, param4: number = 1): void
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
         let _loc5_: SoundTransform = new SoundTransform();
         this.chnMusicChannel0 = param1.play(param2,1);
         _loc5_.volume = param4;
         this.chnMusicChannel0.soundTransform = _loc5_;
         this.chnMusicChannel0.addEventListener(Event.SOUND_COMPLETE, this.PartialLoopComplete.bind(this));
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
      
      public Run(param1: Event): void
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
      
      private method_459(param1: number): void
      {
         let _loc2_: number = this.var_43 * this.arrChannelData[param1].dblVolume;
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
         let _loc3_: number = this.var_144 / this.var_128;
         if(_loc3_ > 1)
         {
            _loc3_ = 1;
         }
         let _loc4_: number = _loc2_ * _loc3_;
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
         let _loc5_: SoundTransform = new SoundTransform();
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
      
      public PlayMusic(param1: Sound, param2: number = 1, param3: boolean = true, param4: string = "%%%", param5: number = -1): void
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
         let _loc6_: SoundTransform = new SoundTransform();
         switch(this.var_64)
         {
            case 0:
               this.chnMusicChannel0 = param1.play(0,1);
               _loc6_.volume = 0;
               this.chnMusicChannel0.soundTransform = _loc6_;
               this.chnMusicChannel0.addEventListener(Event.SOUND_COMPLETE, this.Channel0Complete.bind(this));
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
      
      public method_797(param1: number = -1): void
      {
         let _loc2_: number = 0;
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
      
      private method_761(): void
      {
         if(this.arrChannelData[0].sndMusic == null)
         {
            return;
         }
         let _loc1_: SoundTransform = new SoundTransform();
         this.chnMusicChannel0 = this.arrChannelData[0].sndMusic.play(0,1);
         _loc1_.volume = this.var_43 * this.arrChannelData[0].dblVolume;
         this.chnMusicChannel0.soundTransform = _loc1_;
         this.chnMusicChannel0.addEventListener(Event.SOUND_COMPLETE, this.Channel0Complete.bind(this));
         if(this.var_64 != 9)
         {
            this.var_64 = 2;
         }
      }
      
      public get method_352(): boolean
      {
         return this.var_208;
      }
      
      public method_731(): void
      {
         let _loc1_: SoundTransform = null;
         if(this.chnMusicChannel0.position >= this.var_428)
         {
            this.chnMusicChannel0.stop();
            _loc1_ = new SoundTransform();
            this.chnMusicChannel0 = this.arrChannelData[0].sndMusic.play(this.var_538,1);
            _loc1_.volume = this.arrChannelData[0].dblVolume;
            this.chnMusicChannel0.soundTransform = _loc1_;
            this.chnMusicChannel0.addEventListener(Event.SOUND_COMPLETE, this.PartialLoopComplete.bind(this));
         }
      }
      
      public PartialLoopComplete(param1: Event): void
      {
         this.var_64 = 0;
      }
   }
