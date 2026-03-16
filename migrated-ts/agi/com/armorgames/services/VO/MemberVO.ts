// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services.VO

export class MemberVO{
      
      public isOk: boolean;
      public status: string;
      public value: Record<string, any>;
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
         if(Boolean(this.value))
         {
            _loc1_.user_id = this.value["uid"];
            _loc1_.username = this.value["username"];
            _loc1_.avatar_url = this.value["avatar_url"];
            _loc1_.profile_url = this.value["profile_url"];
            _loc1_.countryCode = this.value["country_code"];
            _loc1_.countryName = this.value["country_name"];
         }
         else
         {
            _loc1_.success = false;
         }
         return _loc1_;
      }
   }
