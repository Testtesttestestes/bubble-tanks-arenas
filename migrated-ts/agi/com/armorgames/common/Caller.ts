// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.common

export class Caller{
      
      private static calls: Dictionary;
      private static controller: Sprite;
      private static ids: number = 0;
      private static paused: boolean = false;
      private static frame: number = 0;
      constructor(){
         super();
      }
      
      public static addCall(param1: number, param2: Function, param3: any[] = null as any, param4: number = 1): void
      {
         if(!this.calls)
         {
            this.calls = new Dictionary();
         }
         let _loc5_: Record<string, any> = {
            "maxTime":param1,
            "elasped":0,
            "last":getTimer(),
            "func":param2,
            "funcParams":param3,
            "loops":0,
            "maxLoops":param4,
            "id":this.ids,
            "useFrames":false
         };
         this.calls[_loc5_] = this.ids.toString();
         ++this.ids;
         start();
      }
      
      public static addFrameCall(param1: number, param2: Function, param3: any[] = null as any, param4: number = 1): void
      {
         if(!this.calls)
         {
            this.calls = new Dictionary();
         }
         let _loc5_: Record<string, any> = {
            "maxTime":param1,
            "elasped":0,
            "last":this.frame,
            "func":param2,
            "funcParams":param3,
            "loops":0,
            "maxLoops":param4,
            "id":this.ids,
            "useFrames":true
         };
         this.calls[_loc5_] = this.ids.toString();
         ++this.ids;
         start();
      }
      
      public static isCalling(param1: Function): boolean
      {
         let _loc3_: Record<string, any> = null;
         if(!this.calls)
         {
            return false;
         }
         let _loc2_: boolean = false;
         for (let _loc3_ in this.calls)
         {
            if(_loc3_.func == param1)
            {
               _loc2_ = true;
            }
         }
         return _loc2_;
      }
      
      public static removeCall(param1: Function): void
      {
         let _loc3_: Record<string, any> = null;
         if(!this.calls)
         {
            return;
         }
         let _loc2_: number = 0;
         for (let _loc3_ in this.calls)
         {
            if(_loc3_.func == param1)
            {
               this.calls[_loc3_] = null;
               delete this.calls[_loc3_];
               _loc3_ = null;
            }
            _loc2_++;
         }
         if(_loc2_ == 0)
         {
            this.stop();
         }
      }
      
      public static removeAllCalls(): void
      {
         let _loc1_: Record<string, any> = null;
         if(!this.calls)
         {
            return;
         }
         for (let _loc1_ in this.calls)
         {
            this.calls[_loc1_] = null;
            delete this.calls[_loc1_];
            _loc1_ = null;
         }
         this.stop();
         this.paused = false;
      }
      
      public static pauseAllCalls(): void
      {
         this.paused = true;
      }
      
      public static resumeAllCalls(): void
      {
         this.paused = false;
      }
      
      private static start(): void
      {
         if(Boolean(this.controller))
         {
            return;
         }
         this.controller = new Sprite();
         this.controller.addEventListener(Event.ENTER_FRAME, update.bind(this));
      }
      
      private static stop(): void
      {
         if(!this.controller)
         {
            return;
         }
         this.controller.removeEventListener(Event.ENTER_FRAME, update.bind(this));
         this.controller = null;
      }
      
      private static update(param1: Event): void
      {
         let _loc4_: Record<string, any> = null;
         if(this.paused)
         {
            return;
         }
         ++this.frame;
         let _loc2_: number = Math.floor(getTimer());
         let _loc3_: number = 0;
         for (let _loc4_ in this.calls)
         {
            if(Boolean(_loc4_.useFrames))
            {
               _loc4_.elapsed = this.frame - _loc4_.last;
            }
            else
            {
               _loc4_.elapsed = _loc2_ - _loc4_.last;
            }
            if(_loc4_.elapsed >= _loc4_.maxTime)
            {
               if(Boolean(_loc4_.useFrames))
               {
                  _loc4_.last = this.frame;
               }
               else
               {
                  _loc4_.last = _loc2_;
               }
               if(_loc4_.func != null)
               {
                  _loc4_.func.apply(_loc4_,_loc4_.funcParams);
               }
               ++_loc4_.loops;
               if(_loc4_.loops >= _loc4_.maxLoops && _loc4_.maxLoops != 0)
               {
                  this.calls[_loc4_] = null;
                  delete this.calls[_loc4_];
                  _loc4_ = null;
               }
            }
            _loc3_++;
         }
         if(_loc3_ == 0)
         {
            this.stop();
         }
      }
   }
