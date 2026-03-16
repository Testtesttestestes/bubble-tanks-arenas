// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services.VO

export class GameSaveVO{
      
      public isOk: boolean;
      public status: string;
      public value: any;
      constructor(){
         super();
      }
      
      public toObject(): Record<string, any>
      {
         let _loc1_: Record<string, any> = new Object();
         _loc1_.success = this.isOk;
         if(!this.isOk)
         {
            _loc1_.error = this.status;
         }
         _loc1_.data = this.value;
         return _loc1_;
      }
   }
