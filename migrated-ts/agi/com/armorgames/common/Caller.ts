// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.common

export class Caller{
      
      private static calls!: Dictionary;
      private static controller!: Sprite;
      private static ids: number = 0;
      private static paused: boolean = false;
      private static frame: number = 0;
      constructor(){

      }
      
      public static addCall(param1: number, param2: Function, param3: any[] = null, param4: number = 1): void
      {
         if(!calls)
         {
            calls = new Dictionary();
         }
         var _loc5_: Record<string, any> = {
            "maxTime":param1,
            "elasped":0,
            "last":getTimer(),
            "func":param2,
            "funcParams":param3,
            "loops":0,
            "maxLoops":param4,
            "id":ids,
            "useFrames":false
         };
         calls[_loc5_] = ids.toString();
         ++ids;
         start();
      }
      
      public static addFrameCall(param1: number, param2: Function, param3: any[] = null, param4: number = 1): void
      {
         if(!calls)
         {
            calls = new Dictionary();
         }
         var _loc5_: Record<string, any> = {
            "maxTime":param1,
            "elasped":0,
            "last":frame,
            "func":param2,
            "funcParams":param3,
            "loops":0,
            "maxLoops":param4,
            "id":ids,
            "useFrames":true
         };
         calls[_loc5_] = ids.toString();
         ++ids;
         start();
      }
      
      public static isCalling(param1: Function): boolean
      {
         var _loc3_: Record<string, any> = null as any;
         if(!calls)
         {
            return false;
         }
         var _loc2_: boolean = false;
         for (let _loc3_ in calls)
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
         var _loc3_: Record<string, any> = null as any;
         if(!calls)
         {
            return;
         }
         var _loc2_: number = 0;
         for (let _loc3_ in calls)
         {
            if(_loc3_.func == param1)
            {
               calls[_loc3_] = null as any;
               delete calls[_loc3_];
               _loc3_ = null as any;
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
         var _loc1_: Record<string, any> = null as any;
         if(!calls)
         {
            return;
         }
         for (let _loc1_ in calls)
         {
            calls[_loc1_] = null as any;
            delete calls[_loc1_];
            _loc1_ = null as any;
         }
         this.stop();
         paused = false;
      }
      
      public static pauseAllCalls(): void
      {
         paused = true;
      }
      
      public static resumeAllCalls(): void
      {
         paused = false;
      }
      
      private static start(): void
      {
         if(Boolean(controller))
         {
            return;
         }
         controller = new Sprite();
         controller.addEventListener("enterFrame", update.bind(this));
      }
      
      private static stop(): void
      {
         if(!controller)
         {
            return;
         }
         controller.removeEventListener("enterFrame", update.bind(this));
         controller = null as any;
      }
      
      private static update(param1: any): void
      {
         var _loc4_: Record<string, any> = null as any;
         if(paused)
         {
            return;
         }
         ++frame;
         var _loc2_: number = Math.floor(getTimer());
         var _loc3_: number = 0;
         for (let _loc4_ in calls)
         {
            if(Boolean(_loc4_.useFrames))
            {
               _loc4_.elapsed = frame - _loc4_.last;
            }
            else
            {
               _loc4_.elapsed = _loc2_ - _loc4_.last;
            }
            if(_loc4_.elapsed >= _loc4_.maxTime)
            {
               if(Boolean(_loc4_.useFrames))
               {
                  _loc4_.last = frame;
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
                  calls[_loc4_] = null as any;
                  delete calls[_loc4_];
                  _loc4_ = null as any;
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
