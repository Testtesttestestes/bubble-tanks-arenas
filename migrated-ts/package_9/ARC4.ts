// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: package_9

export class ARC4 implements class_24, class_30
   {
      
      private S: ByteArray;
      private i: number = 0;
      private j: number = 0;
      private readonly name_2: number = 256;
      constructor(param1: ByteArray = null as any){
         super();
         this.S = new ByteArray();
         if(param1)
         {
            this.init(param1);
         }
      }
      
      public decrypt(param1: ByteArray): void
      {
         this.encrypt(param1);
      }
      
      public init(param1: ByteArray): void
      {
         let _loc2_: number = 0;
         let _loc3_: number = 0;
         let _loc4_: number = 0;
         _loc2_ = 0;
         while(_loc2_ < 256)
         {
            this.S[_loc2_] = _loc2_;
            _loc2_++;
         }
         _loc3_ = 0;
         _loc2_ = 0;
         while(_loc2_ < 256)
         {
            _loc3_ = _loc3_ + this.S[_loc2_] + param1[_loc2_ % param1.length] & 0xFF;
            _loc4_ = Math.floor(this.S[_loc2_]);
            this.S[_loc2_] = this.S[_loc3_];
            this.S[_loc3_] = _loc4_;
            _loc2_++;
         }
         this.i = 0;
         this.j = 0;
      }
      
      public method_601(): number
      {
         let _loc1_: number = 0;
         this.i = this.i + 1 & 0xFF;
         this.j = this.j + this.S[this.i] & 0xFF;
         _loc1_ = Math.floor(this.S[this.i]);
         this.S[this.i] = this.S[this.j];
         this.S[this.j] = _loc1_;
         return this.S[_loc1_ + this.S[this.i] & 0xFF];
      }
      
      public encrypt(param1: ByteArray): void
      {
         let _loc2_: number = 0;
         while(_loc2_ < param1.length)
         {
            let _temp_2: any = param1;
            let _loc3_: number = _loc2_++;
            _temp_2[_loc3_] ^= this.method_601();
         }
      }
      
      public dispose(): void
      {
         let _loc1_: number = 0;
         if(this.S != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this.S.length)
            {
               this.S[_loc1_] = Math.random() * 256;
               _loc1_++;
            }
            this.S.length = 0;
            this.S = null;
         }
         this.i = 0;
         this.j = 0;
         class_27.method_59();
      }
      
      public method_53(): number
      {
         return 1;
      }
      
      public method_752(): number
      {
         return this.name_2;
      }
      
      public toString(): string
      {
         return "rc4";
      }
   }
