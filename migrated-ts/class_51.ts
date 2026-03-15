// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_51 extends Bitmap{
      
      public var_365: Rectangle;
      public bf: BlurFilter;
      public bData: BitmapData;
      constructor(param1: number, param2: number){
    super(); // AUTO-INJECTED
         this.bData = new BitmapData(param1,param2,true,0);
         this.var_365 = new Rectangle(0,0,param1,param2);
         this.SetBlur(4,4,2);
         super(this.bData);
         this.pixelSnapping = "always";
         this.smoothing = true;
      }
      
      public method_795(param1: number, param2: number, param3: number, param4: number): void
      {
         let _loc5_: Rectangle = new Rectangle(param1 - param3,param2 - param3,param3,param3);
         this.bData.fillRect(_loc5_,param4);
      }
      
      public method_290(): void
      {
         let _loc1_: Point = new Point();
         this.bData.applyFilter(this.bData,this.var_365,_loc1_,this.bf);
      }
      
      public SetBlur(param1: number = 2, param2: number = 2, param3: number = 2): void
      {
         this.bf = new BlurFilter(param1,param2,param3);
      }
      
      public Data(): BitmapData
      {
         return this.bData;
      }
      
      public Draw(param1: any): void
      {
         this.bData.draw(param1);
      }
      
      public method_276(): void
      {
         this.bData.lock();
         this.bData.fillRect(this.var_365,0);
         this.bData.unlock();
      }
      
      public method_800(param1: number, param2: number): number
      {
         return this.bData.getPixel32(param1,param2);
      }
      
      public method_365(): void
      {
         this.bData.unlock();
      }
      
      public method_622(): void
      {
         this.bData.lock();
      }
      
      public method_341(param1: any, param2: any): void
      {
         this.bData.scroll(param1,param2);
      }
      
      public Destroy(): void
      {
         this.bData = null;
         this.var_365 = null;
         this.bf = null;
      }
      
      public method_168(param1: number, param2: number, param3: number, param4: number): void
      {
         let _loc5_: Rectangle = new Rectangle(param1,param2,param3,param3);
         this.bData.fillRect(_loc5_,param4);
      }
      
      public method_363(param1: number, param2: number, param3: number): void
      {
         this.bData.setPixel32(param1,param2,param3);
      }
      
      public method_463(param1: number, param2: number, param3: any, param4: number): void
      {
         let _loc5_: Rectangle = new Rectangle(param1 - param3 / 2,param2 - param3 / 2,param3 / 2,param3 / 2);
         this.bData.fillRect(_loc5_,param4);
      }
   }
