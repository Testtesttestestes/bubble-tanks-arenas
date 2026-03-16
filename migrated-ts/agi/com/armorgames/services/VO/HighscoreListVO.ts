// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services.VO

export class HighscoreListVO{
      
      public isOk!: boolean;
      public status!: string;
      public value!: any;
      constructor(){

      }
      
      public toObject(): Record<string, any>
      {
         var _loc2_: HighscoreVO = null as any;
         var _loc3_: number = 0;
         var _loc1_: Record<string, any> = new Object();
         _loc1_.success = this.isOk;
         if(!this.isOk)
         {
            _loc1_.error = this.status;
         }
         if(Boolean(this.value))
         {
            _loc1_.timeFrame = this.value["interval"];
            _loc1_.scoreType = this.value["scoreType"];
            _loc1_.sortDesc = this.value["sortDesc"];
            _loc1_.currentTime = this.value["currentTime"];
            _loc1_.total = this.value["total"];
            _loc1_.average = this.value["average"];
            _loc1_.topScore = this.value["topScore"];
            _loc1_.page = this.value["page"];
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
            }
            _loc1_.list = new Array();
            _loc3_ = 0;
            while(_loc3_ < this.value["items"].length)
            {
               _loc2_ = this.value["items"][_loc3_];
               _loc1_.list.push(_loc2_.toObject());
               _loc3_++;
            }
         }
         return _loc1_;
      }
      
      public toScoreTypeObject(): Record<string, any>
      {
         var _loc2_: number = 0;
         var _loc1_: Record<string, any> = new Object();
         _loc1_.success = this.isOk;
         _loc1_.error = this.status;
         if(Boolean(this.value))
         {
            _loc1_.list = new Array();
            _loc2_ = 0;
            while(_loc2_ < this.value.length)
            {
               if(_loc1_.list.indexOf(this.value[_loc2_]) == -1)
               {
                  _loc1_.list.push(this.value[_loc2_]);
               }
               _loc2_++;
            }
         }
         return _loc1_;
      }
   }
