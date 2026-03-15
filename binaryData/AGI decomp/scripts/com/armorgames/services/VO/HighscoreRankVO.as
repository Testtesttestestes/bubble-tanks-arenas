package com.armorgames.services.VO
{
   public class HighscoreRankVO
   {
      
      public var isOk:Boolean;
      
      public var status:String;
      
      public var value:*;
      
      public function HighscoreRankVO()
      {
         super();
      }
      
      public function toObject() : Object
      {
         var _loc1_:Object = new Object();
         _loc1_.success = this.isOk;
         if(!this.isOk)
         {
            _loc1_.error = this.status;
         }
         if(Boolean(this.value))
         {
            _loc1_.playerName = this.value["name"];
            _loc1_.score = this.value["score"];
            _loc1_.scoreType = this.value["scoreType"];
            _loc1_.sortDesc = this.value["sortDesc"];
            _loc1_.beatTopScore = this.value["isNewHighscore"];
            _loc1_.prevTopScore = this.value["previous_score"];
            _loc1_.prevTopScoreDate = this.value["previous_score_date"];
            _loc1_.avatar_url = this.value["avatar_url"];
            _loc1_.rank = new Object();
            if(Boolean(this.value["rank"]))
            {
               if(Boolean(this.value["rank"]["daily"]))
               {
                  _loc1_.rank.daily = new Object();
                  _loc1_.rank.daily.rank = this.value["rank"]["daily"]["rank"];
                  _loc1_.rank.daily.total = this.value["rank"]["daily"]["count"];
               }
               if(Boolean(this.value["rank"]["weekly"]))
               {
                  _loc1_.rank.weekly = new Object();
                  _loc1_.rank.weekly.rank = this.value["rank"]["weekly"]["rank"];
                  _loc1_.rank.weekly.total = this.value["rank"]["weekly"]["count"];
               }
               if(Boolean(this.value["rank"]["alltime"]))
               {
                  _loc1_.rank.alltime = new Object();
                  _loc1_.rank.alltime.rank = this.value["rank"]["alltime"]["rank"];
                  _loc1_.rank.alltime.total = this.value["rank"]["alltime"]["count"];
               }
               if(Boolean(this.value["rank"]["friends"]))
               {
                  _loc1_.rank.friends = new Object();
                  _loc1_.rank.friends.rank = this.value["rank"]["friends"]["rank"];
                  _loc1_.rank.friends.total = this.value["rank"]["friends"]["count"];
               }
            }
         }
         return _loc1_;
      }
   }
}

