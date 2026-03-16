// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services.VO

export class UtilsVO{
      
      public isOk!: boolean;
      public status!: string;
      public value!: Record<string, any>;
      constructor(){

      }
      
      public toContainsProfanityObject(): Record<string, any>
      {
         var _loc1_: Record<string, any> = new Object();
         _loc1_.success = this.isOk;
         if(!this.isOk)
         {
            _loc1_.error = this.status;
         }
         _loc1_.contains = Boolean(this.value);
         return _loc1_;
      }
      
      public toFilterProfanityObject(): Record<string, any>
      {
         var _loc1_: Record<string, any> = new Object();
         _loc1_.success = this.isOk;
         if(!this.isOk)
         {
            _loc1_.error = this.status;
         }
         if(Boolean(this.value))
         {
            _loc1_.str = String(this.value);
         }
         return _loc1_;
      }
   }
