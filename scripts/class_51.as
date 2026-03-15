package
{
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.filters.BlurFilter;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   
   public class class_51 extends Bitmap
   {
      
      public var var_365:Rectangle;
      
      public var bf:BlurFilter;
      
      public var bData:BitmapData;
      
      public function class_51(param1:Number, param2:Number)
      {
         this.bData = new BitmapData(param1,param2,true,0);
         this.var_365 = new Rectangle(0,0,param1,param2);
         this.SetBlur(4,4,2);
         super(this.bData);
         this.pixelSnapping = "always";
         this.smoothing = true;
      }
      
      public function method_795(param1:Number, param2:Number, param3:Number, param4:uint) : void
      {
         var _loc5_:Rectangle = new Rectangle(param1 - param3,param2 - param3,param3,param3);
         this.bData.fillRect(_loc5_,param4);
      }
      
      public function method_290() : void
      {
         var _loc1_:Point = new Point();
         this.bData.applyFilter(this.bData,this.var_365,_loc1_,this.bf);
      }
      
      public function SetBlur(param1:Number = 2, param2:Number = 2, param3:Number = 2) : void
      {
         this.bf = new BlurFilter(param1,param2,param3);
      }
      
      public function Data() : BitmapData
      {
         return this.bData;
      }
      
      public function Draw(param1:*) : void
      {
         this.bData.draw(param1);
      }
      
      public function method_276() : void
      {
         this.bData.lock();
         this.bData.fillRect(this.var_365,0);
         this.bData.unlock();
      }
      
      public function method_800(param1:Number, param2:Number) : uint
      {
         return this.bData.getPixel32(param1,param2);
      }
      
      public function method_365() : void
      {
         this.bData.unlock();
      }
      
      public function method_622() : void
      {
         this.bData.lock();
      }
      
      public function method_341(param1:*, param2:*) : void
      {
         this.bData.scroll(param1,param2);
      }
      
      public function Destroy() : void
      {
         this.bData = null;
         this.var_365 = null;
         this.bf = null;
      }
      
      public function method_168(param1:Number, param2:Number, param3:Number, param4:uint) : void
      {
         var _loc5_:Rectangle = new Rectangle(param1,param2,param3,param3);
         this.bData.fillRect(_loc5_,param4);
      }
      
      public function method_363(param1:Number, param2:Number, param3:uint) : void
      {
         this.bData.setPixel32(param1,param2,param3);
      }
      
      public function method_463(param1:Number, param2:Number, param3:*, param4:uint) : void
      {
         var _loc5_:Rectangle = new Rectangle(param1 - param3 / 2,param2 - param3 / 2,param3 / 2,param3 / 2);
         this.bData.fillRect(_loc5_,param4);
      }
   }
}

