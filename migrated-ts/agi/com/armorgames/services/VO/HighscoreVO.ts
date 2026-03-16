// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services.VO

export class HighscoreVO{
      
      public isOk!: boolean;
      public status!: string;
      public value!: any;
      constructor(){

      }
      
      public toObject(): Record<string, any>
      {
         var _loc1_: Record<string, any> = new Object();
         _loc1_.success = this.isOk;
         if(!this.isOk)
         {
            _loc1_.error = this.status;
         }
         if(Boolean(this.value))
         {
            _loc1_.score = this.value["score"];
            _loc1_.playerName = this.value["playerName"];
            _loc1_.countryCode = this.value["countryCode"];
            _loc1_.countryName = this.value["countryName"];
            _loc1_.avatar_url = this.value["avatar_url"];
            _loc1_.profile_url = this.value["profile_url"];
            _loc1_.time = this.value["time"];
            _loc1_.relativeTime = this.value["relativeTime"];
            _loc1_.scoreType = this.value["scoreType"];
         }
         return _loc1_;
      }
   }
