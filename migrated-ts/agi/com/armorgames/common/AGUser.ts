// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.common

export class AGUser{
      
      public user_id: string;
      public username: string;
      public avatar_url: string;
      private profile_url: string;
      public countryCode: string;
      private countryName: string;
      constructor(){
         super();
      }
      
      public fromObject(param1: Record<string, any>): void
      {
         this.user_id = param1.user_id;
         this.username = param1.username;
         this.avatar_url = param1.avatar_url;
         this.profile_url = param1.profile_url;
         this.countryCode = param1.countryCode;
         this.countryName = param1.countryName;
      }
      
      public toObject(): Record<string, any>
      {
         let _loc1_: Record<string, any> = new Object();
         _loc1_.username = this.username;
         _loc1_.avatar_url = this.avatar_url;
         _loc1_.profile_url = this.profile_url;
         _loc1_.countryCode = this.countryCode;
         _loc1_.countryName = this.countryName;
         return _loc1_;
      }
   }
