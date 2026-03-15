// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.motion

export class KeyframeBase{
      
      public y: number = NaN;
      public filters: any[];
      public skewX: number = NaN;
      public skewY: number = NaN;
      public blendMode: string = BlendMode.NORMAL;
      public useRotationConcat: boolean = false;
      public rotationX: number = NaN;
      public rotationY: number = NaN;
      public firstFrame: string;
      public cacheAsBitmap: boolean = false;
      public rotateTimes: number = 0;
      public loop: string;
      public rotationConcat: number = NaN;
      public scaleX: number = NaN;
      public scaleY: number = NaN;
      private _index: number = -1;
      public blank: boolean = false;
      public adjustColorObjects: Dictionary = null as any;
      public color: Color;
      public orientToPath: boolean = false;
      public rotateDirection: string = "auto";
      public label: string = "";
      public x: number = NaN;
      public matrix3D: Record<string, any> = null as any;
      public z: number = NaN;
      constructor(param1: XML = null as any){
         super();
         this.filters = [];
         this.adjustColorObjects = new Dictionary();
      }
      
      public set index(param1: number)
      {
         this._index = param1 < 0 ? 0 : param1;
         if(this._index == 0)
         {
            this.setDefaults();
         }
      }
      
      public getValue(param1: string): number
      {
         return Number(this[param1]);
      }
      
      public setValue(param1: string, param2: number): void
      {
         this[param1] = param2;
      }
      
      public get index(): number
      {
         return this._index;
      }
      
      private setDefaults(): void
      {
         if(isNaN(this.x))
         {
            this.x = 0;
         }
         if(isNaN(this.y))
         {
            this.y = 0;
         }
         if(isNaN(this.z))
         {
            this.z = 0;
         }
         if(isNaN(this.scaleX))
         {
            this.scaleX = 1;
         }
         if(isNaN(this.scaleY))
         {
            this.scaleY = 1;
         }
         if(isNaN(this.skewX))
         {
            this.skewX = 0;
         }
         if(isNaN(this.skewY))
         {
            this.skewY = 0;
         }
         if(isNaN(this.rotationConcat))
         {
            this.rotationConcat = 0;
         }
         if(!this.color)
         {
            this.color = new Color();
         }
      }
      
      public setAdjustColorProperty(param1: number, param2: string, param3: any): void
      {
         let _loc5_: ColorMatrixFilter = null;
         let _loc6_: any[] = null;
         if(param1 >= this.filters.length)
         {
            return;
         }
         let _loc4_: AdjustColor = this.adjustColorObjects[param1];
         if(_loc4_ == null)
         {
            _loc4_ = new AdjustColor();
            this.adjustColorObjects[param1] = _loc4_;
         }
         switch(param2)
         {
            case "adjustColorBrightness":
               _loc4_.brightness = param3;
               break;
            case "adjustColorContrast":
               _loc4_.contrast = param3;
               break;
            case "adjustColorSaturation":
               _loc4_.saturation = param3;
               break;
            case "adjustColorHue":
               _loc4_.hue = param3;
         }
         if(_loc4_.AllValuesAreSet())
         {
            _loc5_ = this.filters[param1]  as unknown as ColorMatrixFilter;
            if(_loc5_)
            {
               _loc6_ = _loc4_.CalculateFinalFlatArray();
               if(_loc6_)
               {
                  _loc5_.matrix = _loc6_;
               }
            }
         }
      }
      
      public affectsTweenable(param1: string = ""): boolean
      {
         return !param1 || !isNaN(this[param1]) || param1 == "color" && this.color || param1 == "filters" && this.filters.length || param1 == "matrix3D" && this.matrix3D || this.blank || this.hasTween();
      }
      
      public get tweensLength(): number
      {
         return 0;
      }
      
      protected hasTween(): boolean
      {
         return false;
      }
      
      public set rotation(param1: number)
      {
         if(isNaN(this.skewX) || isNaN(this.skewY))
         {
            this.skewX = param1;
         }
         else
         {
            this.skewX += param1 - this.skewY;
         }
         this.skewY = param1;
      }
      
      public get rotation(): number
      {
         return this.skewY;
      }
   }
