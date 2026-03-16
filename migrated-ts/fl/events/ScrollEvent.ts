// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.events

export class ScrollEvent extends Event{
      
      public static readonly SCROLL: string = "scroll";
      private _direction: string;
      private _position: number;
      private _delta: number;
      constructor(param1: string, param2: number, param3: number){
         super(ScrollEvent.SCROLL,false,false);
         this._direction = param1;
         this._delta = param2;
         this._position = param3;
      }
      
      public get position(): number
      {
         return this._position;
      }
      
      public get direction(): string
      {
         return this._direction;
      }
      
      public get delta(): number
      {
         return this._delta;
      }
      
      public toString(): string
      {
         return formatToString("ScrollEvent","type","bubbles","cancelable","direction","delta","position");
      }
      
      public clone(): Event
      {
         return new ScrollEvent(this._direction,this._delta,this._position);
      }
   }
