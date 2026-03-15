// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

export class MotionEvent extends Event{
      
      public static readonly MOTION_START: string = "motionStart";
      public static readonly MOTION_END: string = "motionEnd";
      public static readonly MOTION_UPDATE: string = "motionUpdate";
      public static readonly TIME_CHANGE: string = "timeChange";
      constructor(param1: string, param2: boolean = false, param3: boolean = false){
         super(param1,param2,param3);
      }
      
      public clone(): Event
      {
         return new MotionEvent(this.type,this.bubbles,this.cancelable);
      }
   }
