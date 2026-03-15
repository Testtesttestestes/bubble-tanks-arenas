// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class PartsUnlockedScreen extends MovieClip{
      
      public var_203: Function;
      public var_170: number;
      public blackBackground_mc: MovieClip;
      public var_228: number;
      public var_212: any[];
      public var_8: class_3;
      public var_469: number;
      public Background_mc: MovieClip;
      public back_tut: MovieClip;
      public myPart: MovieClip;
      public tutorials_mc: MovieClip;
      public var_107: boolean;
      public timer: number;
      public next_tut: MovieClip;
      public txtPartName_txt: TextField;
      public ShineEffect_mc: MovieClip;
      public Title_mc: MovieClip;
      constructor(param1: boolean = false, param2: string = "", param3: MovieClip = null as any, param4: number = 1, param5: Function = null as any, param6: string = "", param7: number = 0, param8: number = 2){
         super();
         addFrameScript(0,this.frame1,1,this.frame2,2,this.frame3,3,this.frame4,4,this.frame5,5,this.frame6,6,this.frame7,7,this.frame8,8,this.frame9,9,this.frame10,10,this.frame11,11,this.frame12,12,this.frame13,13,this.frame14,14,this.frame15,15,this.frame16);
         if(param1)
         {
            this.var_8 = new class_3();
            this.var_8.Setup(this.method_422);
            this.var_212 = new Array();
            this.var_469 = param4;
            this.var_203 = param5;
            this.var_228 = param7;
            this.var_170 = param8;
            if(this.var_228 == 1)
            {
               this.gotoAndStop(this.var_170);
               this.blackBackground_mc.alpha = 0;
               this.addEventListener(Event.ENTER_FRAME, this.method_258.bind(this));
            }
            else if(this.var_228 == 2)
            {
               if(this.var_170 != 2)
               {
                  this.gotoAndStop(this.var_170);
                  this.blackBackground_mc.alpha = 0;
                  this.addEventListener(Event.ENTER_FRAME, this.method_258.bind(this));
               }
               else
               {
                  this.var_170 = 7;
                  this.addEventListener(Event.ENTER_FRAME, this.method_183.bind(this));
               }
            }
            else
            {
               this.addEventListener(Event.ENTER_FRAME, this.method_183.bind(this));
            }
            if(this.var_228 == 1 || this.var_228 == 2 && this.var_170 != 2)
            {
               this.var_212.push({
                  "x":this.tutorials_mc.x,
                  "y":this.tutorials_mc.y
               });
               this.var_212.push({
                  "x":this.next_tut.x,
                  "y":this.next_tut.y
               });
               if(this.back_tut != null)
               {
                  this.var_212.push({
                     "x":this.back_tut.x,
                     "y":this.back_tut.y
                  });
                  this.back_tut.y = -500;
                  this.back_tut.alpha = 0;
               }
               this.tutorials_mc.y = -500;
               this.next_tut.y = -500;
            }
            this.txtPartName_txt.text = param2;
            this.myPart = param3;
            this.addChild(this.myPart);
            if(param6 != "")
            {
               this.Title_mc.txtUnlockedText_txt.text = param6;
            }
            x = 275;
            y = 225;
            if(this.var_228 == 1 || this.var_228 == 2 && this.var_170 != 2)
            {
               this.addChild(this.next_tut);
               this.var_8.method_4(this.next_tut,true);
            }
         }
      }
      
      private method_422(param1: Event): any
      {
         if(this.var_107)
         {
            this.tutorials_mc.alpha = 0;
            this.next_tut.alpha = 0;
            this.back_tut.alpha = 0;
            this.blackBackground_mc.alpha = 0;
            this.tutorials_mc.mouseEnabled = false;
            this.next_tut.mouseEnabled = false;
            this.back_tut.mouseEnabled = false;
            this.blackBackground_mc.mouseEnabled = false;
            mouseChildren = false;
            mouseEnabled = false;
            this.next_tut.removeEventListener(MouseEvent.CLICK, this.method_422.bind(this));
            this.removeEventListener(Event.ENTER_FRAME, this.method_258.bind(this));
            this.addEventListener(Event.ENTER_FRAME, this.method_183.bind(this));
         }
         else
         {
            this.gotoAndStop(currentFrame + 1);
         }
      }
      
      public method_627(): any
      {
         this.Background_mc.play();
         this.txtPartName_txt.text = "";
         this.timer = 0;
         this.addEventListener(Event.ENTER_FRAME, this.method_448.bind(this));
      }
      
      private method_448(param1: Event): any
      {
         this.Title_mc.alpha *= 0.7;
         x = x * 0.9 + (275 - 232 + (this.var_469 - 1) * 80) * 0.1;
         y = y * 0.9 + (225 + 185) * 0.1;
         this.myPart.scaleX *= 0.97;
         this.myPart.scaleY *= 0.97;
         this.timer += 1;
         if(this.timer == 30)
         {
            if(this.var_170 != 7)
            {
               this.var_170 = currentFrame + 1;
            }
            else
            {
               this.var_170 = 8;
            }
            this.removeEventListener(Event.ENTER_FRAME, this.method_448.bind(this));
            this.var_203(this.var_469,this.var_228,this.var_170);
         }
      }
      
      public method_183(param1: Event): any
      {
         if(this.ShineEffect_mc.totalFrames == this.ShineEffect_mc.currentFrame)
         {
            this.removeEventListener(Event.ENTER_FRAME, this.method_183.bind(this));
            this.method_627();
         }
      }
      
      private method_107(param1: Event): void
      {
         param1.target.gotoAndStop(2);
      }
      
      private method_112(param1: Event): void
      {
         param1.target.gotoAndStop(1);
      }
      
      public frame10(): any
      {
         this.var_107 = false;
      }
      
      public frame11(): any
      {
         this.var_107 = false;
      }
      
      public frame13(): any
      {
         this.var_107 = false;
      }
      
      public frame14(): any
      {
         this.var_107 = true;
      }
      
      public frame15(): any
      {
         this.var_107 = false;
      }
      
      public frame16(): any
      {
         this.var_107 = true;
      }
      
      public frame12(): any
      {
         this.var_107 = false;
      }
      
      public frame1(): any
      {
         this.stop();
         this.var_107 = true;
      }
      
      public frame2(): any
      {
         this.var_107 = false;
      }
      
      private method_258(param1: Event): any
      {
         if(this.blackBackground_mc.alpha != 1)
         {
            this.blackBackground_mc.alpha += 0.01;
            if(this.blackBackground_mc.alpha > 1)
            {
               this.blackBackground_mc.alpha = 1;
            }
         }
         this.tutorials_mc.y = this.tutorials_mc.y * 0.9 + this.var_212[0].y * 0.1;
         this.next_tut.y = this.next_tut.y * 0.9 + this.var_212[1].y * 0.1;
         if(this.var_212.length > 2)
         {
            this.back_tut.y = this.back_tut.y * 0.9 + this.var_212[2].y * 0.1;
         }
      }
      
      public frame4(): any
      {
         this.var_107 = false;
      }
      
      public frame5(): any
      {
         this.var_107 = true;
      }
      
      public frame6(): any
      {
         this.var_107 = false;
      }
      
      public frame7(): any
      {
         this.var_107 = true;
      }
      
      public frame8(): any
      {
         this.var_107 = false;
      }
      
      public frame9(): any
      {
         this.var_107 = true;
      }
      
      public frame3(): any
      {
         this.var_107 = false;
      }
   }
