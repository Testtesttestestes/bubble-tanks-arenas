package
{
   import flash.events.*;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.media.SoundTransform;
   
   public class SoundPlayer
   {
      
      private var blnLocked:Boolean;
      
      internal var chnSoundChannel2:SoundChannel;
      
      internal var chnSoundChannel3:SoundChannel;
      
      internal var chnSoundChannel4:SoundChannel;
      
      internal var chnSoundChannel5:SoundChannel;
      
      internal var chnSoundChannel6:SoundChannel;
      
      internal var chnSoundChannel8:SoundChannel;
      
      internal var chnSoundChannel11:SoundChannel;
      
      internal var chnSoundChannel12:SoundChannel;
      
      internal var chnSoundChannel13:SoundChannel;
      
      internal var chnSoundChannel14:SoundChannel;
      
      internal var chnSoundChannel7:SoundChannel;
      
      internal var chnSoundChannel1:SoundChannel;
      
      internal var chnSoundChannel9:SoundChannel;
      
      private var var_43:Number;
      
      internal var chnSoundChannel10:SoundChannel;
      
      private var var_351:Boolean;
      
      internal var var_122:Array;
      
      internal var var_24:Array;
      
      private var var_308:Boolean;
      
      public function SoundPlayer()
      {
         super();
         this.var_351 = true;
         this.var_43 = 1;
         this.var_308 = false;
         this.blnLocked = false;
         this.var_24 = new Array(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
         this.var_122 = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
      }
      
      public function Channel1Complete(param1:Event) : void
      {
         this.var_24[1] = false;
      }
      
      public function Channel2Complete(param1:Event) : void
      {
         this.var_24[2] = false;
      }
      
      public function Channel3Complete(param1:Event) : void
      {
         this.var_24[3] = false;
      }
      
      public function Channel4Complete(param1:Event) : void
      {
         this.var_24[4] = false;
      }
      
      public function Channel5Complete(param1:Event) : void
      {
         this.var_24[5] = false;
      }
      
      public function Channel6Complete(param1:Event) : void
      {
         this.var_24[6] = false;
      }
      
      public function Channel9Complete(param1:Event) : void
      {
         this.var_24[9] = false;
      }
      
      public function PlaySound(param1:Sound, param2:Number = 1, param3:String = "default", param4:Number = 0) : void
      {
         var _loc7_:Number = NaN;
         var _loc8_:Number = NaN;
         var _loc9_:Number = NaN;
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
         var _loc5_:int = -1;
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
         var _loc6_:SoundTransform = new SoundTransform();
         switch(_loc5_)
         {
            case 1:
               this.chnSoundChannel1 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel1.soundTransform = _loc6_;
               this.chnSoundChannel1.addEventListener(Event.SOUND_COMPLETE,this.Channel1Complete);
               break;
            case 2:
               this.chnSoundChannel2 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel2.soundTransform = _loc6_;
               this.chnSoundChannel2.addEventListener(Event.SOUND_COMPLETE,this.Channel2Complete);
               break;
            case 3:
               this.chnSoundChannel3 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel3.soundTransform = _loc6_;
               this.chnSoundChannel3.addEventListener(Event.SOUND_COMPLETE,this.Channel3Complete);
               break;
            case 4:
               this.chnSoundChannel4 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel4.soundTransform = _loc6_;
               this.chnSoundChannel4.addEventListener(Event.SOUND_COMPLETE,this.Channel4Complete);
               break;
            case 5:
               this.chnSoundChannel5 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel5.soundTransform = _loc6_;
               this.chnSoundChannel5.addEventListener(Event.SOUND_COMPLETE,this.Channel5Complete);
               break;
            case 6:
               this.chnSoundChannel6 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel6.soundTransform = _loc6_;
               this.chnSoundChannel6.addEventListener(Event.SOUND_COMPLETE,this.Channel6Complete);
               break;
            case 8:
               this.chnSoundChannel8 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel8.soundTransform = _loc6_;
               this.chnSoundChannel8.addEventListener(Event.SOUND_COMPLETE,this.Channel8Complete);
               break;
            case 9:
               this.chnSoundChannel9 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel9.soundTransform = _loc6_;
               this.chnSoundChannel9.addEventListener(Event.SOUND_COMPLETE,this.Channel9Complete);
               break;
            case 10:
               this.chnSoundChannel10 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel10.soundTransform = _loc6_;
               this.chnSoundChannel10.addEventListener(Event.SOUND_COMPLETE,this.Channel10Complete);
               break;
            case 11:
               this.chnSoundChannel11 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel11.soundTransform = _loc6_;
               this.chnSoundChannel11.addEventListener(Event.SOUND_COMPLETE,this.Channel11Complete);
               break;
            case 12:
               this.chnSoundChannel12 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel12.soundTransform = _loc6_;
               this.chnSoundChannel12.addEventListener(Event.SOUND_COMPLETE,this.Channel12Complete);
               break;
            case 13:
               this.chnSoundChannel13 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel13.soundTransform = _loc6_;
               this.chnSoundChannel13.addEventListener(Event.SOUND_COMPLETE,this.Channel13Complete);
               break;
            case 14:
               this.chnSoundChannel14 = param1.play(0,1);
               _loc6_.volume = param2 * this.var_43;
               _loc6_.pan = param4;
               this.chnSoundChannel14.soundTransform = _loc6_;
               this.chnSoundChannel14.addEventListener(Event.SOUND_COMPLETE,this.Channel14Complete);
         }
      }
      
      public function Channel12Complete(param1:Event) : void
      {
         this.var_24[12] = false;
      }
      
      public function Channel13Complete(param1:Event) : void
      {
         this.var_24[13] = false;
      }
      
      public function Channel8Complete(param1:Event) : void
      {
         this.var_24[8] = false;
      }
      
      public function Channel14Complete(param1:Event) : void
      {
         this.var_24[14] = false;
      }
      
      public function Channel10Complete(param1:Event) : void
      {
         this.var_24[10] = false;
      }
      
      public function method_764() : void
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
         var _loc1_:int = 0;
         while(_loc1_ < this.var_24.length)
         {
            this.var_24[_loc1_] = false;
            _loc1_++;
         }
      }
      
      public function get method_454() : Boolean
      {
         return this.var_351;
      }
      
      public function method_775(param1:Boolean = true) : void
      {
         this.var_308 = param1;
      }
      
      public function set method_607(param1:Number) : void
      {
         var _loc2_:SoundTransform = null;
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
      
      public function method_849() : void
      {
         this.var_24[7] = false;
         this.chnSoundChannel7.stop();
      }
      
      public function Channel11Complete(param1:Event) : void
      {
         this.var_24[11] = false;
      }
      
      public function PlaySoundLoop(param1:Sound, param2:Number = 1, param3:Number = 0) : void
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
         var _loc4_:SoundTransform = new SoundTransform();
         this.chnSoundChannel7 = param1.play(0,99999);
         _loc4_.volume = param2 * this.var_43;
         _loc4_.pan = param3;
         this.chnSoundChannel7.soundTransform = _loc4_;
      }
      
      public function set method_454(param1:Boolean) : void
      {
         this.var_351 = param1;
         if(param1 == false)
         {
            this.method_764();
         }
      }
      
      public function method_365() : void
      {
         this.blnLocked = false;
      }
      
      public function get method_607() : Number
      {
         return this.var_43;
      }
   }
}

