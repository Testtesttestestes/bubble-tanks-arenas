// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_2

export class class_41 implements class_29, class_12
   {
      
      protected mode: class_23;
      protected var_310: class_12;
      constructor(param1: class_23){
         super();
         this.mode = param1;
         this.var_310 = param1  as unknown as class_12;
      }
      
      public encrypt(param1: ByteArray): void
      {
         this.var_310.encrypt(param1);
         let _loc2_: ByteArray = new ByteArray();
         _loc2_.writeBytes(this.mode.method_241);
         _loc2_.writeBytes(param1);
         param1.position = 0;
         param1.writeBytes(_loc2_);
      }
      
      public decrypt(param1: ByteArray): void
      {
         let _loc2_: ByteArray = new ByteArray();
         _loc2_.writeBytes(param1,0,this.method_53());
         this.mode.method_241 = _loc2_;
         _loc2_ = new ByteArray();
         _loc2_.writeBytes(param1,this.method_53());
         this.var_310.decrypt(_loc2_);
         param1.length = 0;
         param1.writeBytes(_loc2_);
      }
      
      public dispose(): void
      {
         this.mode.dispose();
         this.mode = null;
         this.var_310 = null;
         class_27.method_59();
      }
      
      public method_53(): number
      {
         return this.mode.method_53();
      }
      
      public toString(): string
      {
         return "simple-" + this.var_310.toString();
      }
   }
