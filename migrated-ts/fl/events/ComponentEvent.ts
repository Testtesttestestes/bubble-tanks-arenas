// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.events

export class ComponentEvent extends Event{
      
      public static readonly BUTTON_DOWN: string = "buttonDown";
      public static readonly LABEL_CHANGE: string = "labelChange";
      public static readonly HIDE: string = "hide";
      public static readonly SHOW: string = "show";
      public static readonly RESIZE: string = "resize";
      public static readonly MOVE: string = "move";
      public static readonly ENTER: string = "enter";
      constructor(param1: string, param2: boolean = false, param3: boolean = false){
         super(param1,param2,param3);
      }
      
      public toString(): string
      {
         return formatToString("ComponentEvent","type","bubbles","cancelable");
      }
      
      public clone(): Event
      {
         return new ComponentEvent(type,bubbles,cancelable);
      }
   }
