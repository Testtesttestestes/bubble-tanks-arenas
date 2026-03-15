// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class SoundPlayer{
      
      private blnLocked: boolean;
      public chnSoundChannel2: SoundChannel;
      public chnSoundChannel3: SoundChannel;
      public chnSoundChannel4: SoundChannel;
      public chnSoundChannel5: SoundChannel;
      public chnSoundChannel6: SoundChannel;
      public chnSoundChannel8: SoundChannel;
      public chnSoundChannel11: SoundChannel;
      public chnSoundChannel12: SoundChannel;
      public chnSoundChannel13: SoundChannel;
      public chnSoundChannel14: SoundChannel;
      public chnSoundChannel7: SoundChannel;
      public chnSoundChannel1: SoundChannel;
      public chnSoundChannel9: SoundChannel;
      private var_43: number;
      public chnSoundChannel10: SoundChannel;
      private var_351: boolean;
      public var_122: any[];
      public var_24: any[];
      private var_308: boolean;
      constructor(){
         super();
         this.var_351 = true;
         this.var_43 = 1;
         this.var_308 = false;
         this.blnLocked = false;
         this.var_24 = new Array(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
         this.var_122 = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
      }
      
      public Channel1Complete(param1: Event): void
      {
         this.var_24[1] = false;
      }
      
      public Channel2Complete(param1: Event): void
      {
         this.var_24[2] = false;
      }
      
      public Channel3Complete(param1: Event): void
      {
         this.var_24[3] = false;
      }
      
      public Channel4Complete(param1: Event): void
      {
         this.var_24[4] = false;
      }
      
      public Channel5Complete(param1: Event): void
      {
         this.var_24[5] = false;
      }
      
      public Channel6Complete(param1: Event): void
      {
         this.var_24[6] = false;
      }
      
      public Channel9Complete(param1: Event): void
      {
         this.var_24[9] = false;
      }
      
      public PlaySound(param1: Sound, param2: number = 1, param3: string = "default", param4: number = 0): void
      {
         let _loc7_: number = NaN;
         let _loc8_: number = NaN;
         let _loc9_: number = NaN;
         if(this.var_351 == false)
         {
            return;
         }
         if(this.var_308 == true && this.blnLocked == true)
         {
            return;
         }
         if(this.var_308 == true)
         {
            this.var_308 = true;
         }
         let _loc5_: number = -1;
         if(param3 == "default")
         {
            _loc7_ = 1;
            while(_loc7_ < 7)
            {
               if(this.var_24[_loc7_] == false)
               {
                  _loc5_ = _loc7_;
                  break;
               }
               _loc7_++;
            }
            if(_loc5_ == -1)
            {
               _loc8_ = 8;
               while(_loc8_ < 12)
               {
                  if(this.var_24[_loc8_] == false)
                  {
                     _loc5_ = _loc8_;
                     break;
                  }
                  _loc8_++;
               }
            }
         }
         else if(param3 == "interface")
         {
            _loc9_ = 12;
            while(_loc9_ < 15)
            {
               if(this.var_24[_loc9_] == false)
               {
                  _loc5_ = _loc9_;
                  break;
               }
               _loc9_++;
            }
         }
         if(_loc5_ == -1)
         {
            return;
         }
         if(param2 > 1)
         {
            param2 = 1;
         }
         else if(param2 < 0)
         {
            param2 = 0;
         }
         if(param4 > 1)
         {
            param4 = 1;
         }
         else if(param4 < -1)
         {
            param4 = 1;
         }
         this.var_24[_loc5_] = true;
         this.var_122[_loc5_] = param2;
         let _loc6_: SoundTransform = new SoundTransform();
         switch(_loc5_)
         {
            case 1:
               this.chnSoundChannel1 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel1.soundTransform = _loc6_;
               this.chnSoundChannel1.addEventListener(Event.SOUND_COMPLETE, this.Channel1Complete.bind(this));
               break;
            case 2:
               this.chnSoundChannel2 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel2.soundTransform = _loc6_;
               this.chnSoundChannel2.addEventListener(Event.SOUND_COMPLETE, this.Channel2Complete.bind(this));
               break;
            case 3:
               this.chnSoundChannel3 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel3.soundTransform = _loc6_;
               this.chnSoundChannel3.addEventListener(Event.SOUND_COMPLETE, this.Channel3Complete.bind(this));
               break;
            case 4:
               this.chnSoundChannel4 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel4.soundTransform = _loc6_;
               this.chnSoundChannel4.addEventListener(Event.SOUND_COMPLETE, this.Channel4Complete.bind(this));
               break;
            case 5:
               this.chnSoundChannel5 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel5.soundTransform = _loc6_;
               this.chnSoundChannel5.addEventListener(Event.SOUND_COMPLETE, this.Channel5Complete.bind(this));
               break;
            case 6:
               this.chnSoundChannel6 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel6.soundTransform = _loc6_;
               this.chnSoundChannel6.addEventListener(Event.SOUND_COMPLETE, this.Channel6Complete.bind(this));
               break;
            case 8:
               this.chnSoundChannel8 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel8.soundTransform = _loc6_;
               this.chnSoundChannel8.addEventListener(Event.SOUND_COMPLETE, this.Channel8Complete.bind(this));
               break;
            case 9:
               this.chnSoundChannel9 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel9.soundTransform = _loc6_;
               this.chnSoundChannel9.addEventListener(Event.SOUND_COMPLETE, this.Channel9Complete.bind(this));
               break;
            case 10:
               this.chnSoundChannel10 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel10.soundTransform = _loc6_;
               this.chnSoundChannel10.addEventListener(Event.SOUND_COMPLETE, this.Channel10Complete.bind(this));
               break;
            case 11:
               this.chnSoundChannel11 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel11.soundTransform = _loc6_;
               this.chnSoundChannel11.addEventListener(Event.SOUND_COMPLETE, this.Channel11Complete.bind(this));
               break;
            case 12:
               this.chnSoundChannel12 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel12.soundTransform = _loc6_;
               this.chnSoundChannel12.addEventListener(Event.SOUND_COMPLETE, this.Channel12Complete.bind(this));
               break;
            case 13:
               this.chnSoundChannel13 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel13.soundTransform = _loc6_;
               this.chnSoundChannel13.addEventListener(Event.SOUND_COMPLETE, this.Channel13Complete.bind(this));
               break;
            case 14:
               this.chnSoundChannel14 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel14.soundTransform = _loc6_;
               this.chnSoundChannel14.addEventListener(Event.SOUND_COMPLETE, this.Channel14Complete.bind(this));
         }
      }
      
      public Channel12Complete(param1: Event): void
      {
         this.var_24[12] = false;
      }
      
      public Channel13Complete(param1: Event): void
      {
         this.var_24[13] = false;
      }
      
      public Channel8Complete(param1: Event): void
      {
         this.var_24[8] = false;
      }
      
      public Channel14Complete(param1: Event): void
      {
         this.var_24[14] = false;
      }
      
      public Channel10Complete(param1: Event): void
      {
         this.var_24[10] = false;
      }
      
      public method_764(): void
      {
         if(this.var_24[1])
         {
            this.chnSoundChannel1.stop();
         }
         if(this.var_24[2])
         {
            this.chnSoundChannel2.stop();
         }
         if(this.var_24[3])
         {
            this.chnSoundChannel3.stop();
         }
         if(this.var_24[4])
         {
            this.chnSoundChannel4.stop();
         }
         if(this.var_24[5])
         {
            this.chnSoundChannel5.stop();
         }
         if(this.var_24[6])
         {
            this.chnSoundChannel6.stop();
         }
         if(this.var_24[7])
         {
            this.chnSoundChannel7.stop();
         }
         if(this.var_24[8])
         {
            this.chnSoundChannel8.stop();
         }
         if(this.var_24[9])
         {
            this.chnSoundChannel9.stop();
         }
         if(this.var_24[10])
         {
            this.chnSoundChannel10.stop();
         }
         if(this.var_24[11])
         {
            this.chnSoundChannel11.stop();
         }
         if(this.var_24[12])
         {
            this.chnSoundChannel12.stop();
         }
         if(this.var_24[13])
         {
            this.chnSoundChannel13.stop();
         }
         if(this.var_24[14])
         {
            this.chnSoundChannel14.stop();
         }
         let _loc1_: number = 0;
         while(_loc1_ < this.var_24.length)
         {
            this.var_24[_loc1_] = false;
            _loc1_++;
         }
      }
      
      public get method_454(): boolean
      {
         return this.var_351;
      }
      
      public method_775(param1: boolean = true): void
      {
         this.var_308 = param1;
      }
      
      public set method_607(param1: number)
      {
         let _loc2_: SoundTransform = null;
         if(param1 > 1)
         {
            param1 = 1;
         }
         else if(param1 < 0)
         {
            param1 = 0;
         }
         this.var_43 = param1;
         if(this.var_24[1])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[1] * this.var_43;
            this.chnSoundChannel1.soundTransform = _loc2_;
         }
         if(this.var_24[2])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[2] * this.var_43;
            this.chnSoundChannel2.soundTransform = _loc2_;
         }
         if(this.var_24[3])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[3] * this.var_43;
            this.chnSoundChannel3.soundTransform = _loc2_;
         }
         if(this.var_24[4])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[4] * this.var_43;
            this.chnSoundChannel4.soundTransform = _loc2_;
         }
         if(this.var_24[5])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[5] * this.var_43;
            this.chnSoundChannel5.soundTransform = _loc2_;
         }
         if(this.var_24[6])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[6] * this.var_43;
            this.chnSoundChannel6.soundTransform = _loc2_;
         }
         if(this.var_24[7])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[7] * this.var_43;
            this.chnSoundChannel7.soundTransform = _loc2_;
         }
         if(this.var_24[8])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[8] * this.var_43;
            this.chnSoundChannel8.soundTransform = _loc2_;
         }
         if(this.var_24[9])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[9] * this.var_43;
            this.chnSoundChannel9.soundTransform = _loc2_;
         }
         if(this.var_24[10])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[10] * this.var_43;
            this.chnSoundChannel10.soundTransform = _loc2_;
         }
         if(this.var_24[11])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[11] * this.var_43;
            this.chnSoundChannel11.soundTransform = _loc2_;
         }
         if(this.var_24[12])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[12] * this.var_43;
            this.chnSoundChannel12.soundTransform = _loc2_;
         }
         if(this.var_24[13])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[13] * this.var_43;
            this.chnSoundChannel13.soundTransform = _loc2_;
         }
         if(this.var_24[14])
         {
            _loc2_ = new SoundTransform();
            _loc2_.volume = this.var_122[14] * this.var_43;
            this.chnSoundChannel14.soundTransform = _loc2_;
         }
      }
      
      public method_849(): void
      {
         this.var_24[7] = false;
         this.chnSoundChannel7.stop();
      }
      
      public Channel11Complete(param1: Event): void
      {
         this.var_24[11] = false;
      }
      
      public PlaySoundLoop(param1: Sound, param2: number = 1, param3: number = 0): void
      {
         if(this.var_24[7] == true)
         {
            return;
         }
         if(param2 > 1)
         {
            param2 = 1;
         }
         else if(param2 < 0)
         {
            param2 = 0;
         }
         if(param3 > 1)
         {
            param3 = 1;
         }
         else if(param3 < -1)
         {
            param3 = 1;
         }
         this.var_24[7] = true;
         let _loc4_: SoundTransform = new SoundTransform();
         this.chnSoundChannel7 = param1.play(0,99999);
         _loc4_.volume = param2 * this.var_43;
         _loc4_.pan = param3;
         this.chnSoundChannel7.soundTransform = _loc4_;
      }
      
      public set method_454(param1: boolean)
      {
         this.var_351 = param1;
         if(param1 == false)
         {
            this.method_764();
         }
      }
      
      public method_365(): void
      {
         this.blnLocked = false;
      }
      
      public get method_607(): number
      {
         return this.var_43;
      }
   }
