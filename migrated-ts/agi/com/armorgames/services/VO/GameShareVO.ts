// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services.VO

export class GameShareVO{
      
      public isOk!: boolean;
      public status!: string;
      public value!: Record<string, any>;
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
            _loc1_.name = this.value["gameshare_name"];
            _loc1_.data = this.value["data"];
            _loc1_.url = this.value["short_url"];
            _loc1_.long_url = this.value["long_url"];
            _loc1_.thumb_url = this.value["thumbnail_url"];
            _loc1_.share_id = this.value["flash_share_id"];
            _loc1_.timestamp = this.value["timestamp"];
            _loc1_.createdOn = this.value["createdOn"];
            _loc1_.staffPick = Boolean(this.value["staff_pick"]);
            _loc1_.funFactor = this.value["fun_factor"];
            if(Boolean(this.value["rating"]))
            {
               _loc1_.rating = new Object();
               _loc1_.likes = new Object();
               if(Boolean(this.value["rating"][AGITimeFrame.DAY]))
               {
                  _loc1_.rating.daily = new Object();
                  _loc1_.rating.daily.rating = this.value["rating"][AGITimeFrame.DAY]["rating"];
                  _loc1_.rating.daily.count = this.value["rating"][AGITimeFrame.DAY]["count"];
                  _loc1_.likes.daily = this.value["rating"][AGITimeFrame.DAY]["count"];
               }
               if(Boolean(this.value["rating"][AGITimeFrame.WEEK]))
               {
                  _loc1_.rating.weekly = new Object();
                  _loc1_.rating.weekly.rating = this.value["rating"][AGITimeFrame.WEEK]["rating"];
                  _loc1_.rating.weekly.count = this.value["rating"][AGITimeFrame.WEEK]["count"];
                  _loc1_.likes.weekly = this.value["rating"][AGITimeFrame.WEEK]["count"];
               }
               if(Boolean(this.value["rating"][AGITimeFrame.MONTH]))
               {
                  _loc1_.rating.monthly = new Object();
                  _loc1_.rating.monthly.rating = this.value["rating"][AGITimeFrame.MONTH]["rating"];
                  _loc1_.rating.monthly.count = this.value["rating"][AGITimeFrame.MONTH]["count"];
                  _loc1_.likes.monthly = this.value["rating"][AGITimeFrame.MONTH]["count"];
               }
               if(Boolean(this.value["rating"][AGITimeFrame.ALL]))
               {
                  _loc1_.rating.alltime = new Object();
                  _loc1_.rating.alltime.rating = this.value["rating"][AGITimeFrame.ALL]["rating"];
                  _loc1_.rating.alltime.count = this.value["rating"][AGITimeFrame.ALL]["count"];
                  _loc1_.likes.alltime = this.value["rating"][AGITimeFrame.ALL]["count"];
                  _loc1_.totalLikes = this.value["rating"][AGITimeFrame.ALL]["count"];
               }
            }
            if(Boolean(this.value["views"]))
            {
               _loc1_.views = new Object();
               if(Boolean(this.value["views"][AGITimeFrame.DAY]))
               {
                  _loc1_.views.daily = this.value["views"][AGITimeFrame.DAY];
               }
               if(Boolean(this.value["views"][AGITimeFrame.WEEK]))
               {
                  _loc1_.views.weekly = this.value["views"][AGITimeFrame.WEEK];
               }
               if(Boolean(this.value["views"][AGITimeFrame.MONTH]))
               {
                  _loc1_.views.monthly = this.value["views"][AGITimeFrame.MONTH];
               }
               if(Boolean(this.value["views"][AGITimeFrame.ALL]))
               {
                  _loc1_.views.alltime = this.value["views"][AGITimeFrame.ALL];
                  _loc1_.totalViews = this.value["views"][AGITimeFrame.ALL];
               }
            }
            if(Boolean(this.value["creator"]))
            {
               _loc1_.username = this.value["creator"]["username"];
               _loc1_.avatar_url = this.value["creator"]["avatar_url"];
               _loc1_.profile_url = this.value["creator"]["profile_url"];
               _loc1_.countryCode = this.value["creator"]["country_code"];
               _loc1_.countryName = this.value["creator"]["country_name"];
            }
         }
         return _loc1_;
      }
   }
