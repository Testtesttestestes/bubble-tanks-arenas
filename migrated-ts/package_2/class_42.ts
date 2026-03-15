// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_2

export class class_42 extends class_34{
      
      protected encKey2: any[];
      protected encKey3: any[];
      protected decKey2: any[];
      protected decKey3: any[];
      constructor(param1: ByteArray){
         super(param1);
         this.encKey2 = method_67(false,param1,8);
         this.decKey2 = method_67(true,param1,8);
         if(param1.length > 16)
         {
            this.encKey3 = method_67(true,param1,16);
            this.decKey3 = method_67(false,param1,16);
         }
         else
         {
            this.encKey3 = var_242;
            this.decKey3 = var_246;
         }
      }
      
      public encrypt(param1: ByteArray, param2: number = 0): void
      {
         desFunc(var_242,param1,param2,param1,param2);
         desFunc(this.encKey2,param1,param2,param1,param2);
         desFunc(this.encKey3,param1,param2,param1,param2);
      }
      
      public dispose(): void
      {
         super.dispose();
         let _loc1_: number = 0;
         if(this.encKey2 != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.encKey2.length)
            {
               this.encKey2[_loc1_] = 0;
               _loc1_++;
            }
            this.encKey2 = null;
         }
         if(this.encKey3 != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.encKey3.length)
            {
               this.encKey3[_loc1_] = 0;
               _loc1_++;
            }
            this.encKey3 = null;
         }
         if(this.decKey2 != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.decKey2.length)
            {
               this.decKey2[_loc1_] = 0;
               _loc1_++;
            }
            this.decKey2 = null;
         }
         if(this.decKey3 != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.decKey3.length)
            {
               this.decKey3[_loc1_] = 0;
               _loc1_++;
            }
            this.decKey3 = null;
         }
         class_27.method_59();
      }
      
      public decrypt(param1: ByteArray, param2: number = 0): void
      {
         desFunc(this.decKey3,param1,param2,param1,param2);
         desFunc(this.decKey2,param1,param2,param1,param2);
         desFunc(var_246,param1,param2,param1,param2);
      }
      
      public toString(): string
      {
         return "3des";
      }
   }
