package com.armorgames.services.VO
{
   public class GameShareListVO
   {
      
      public var isOk:Boolean;
      
      public var status:String;
      
      public var value:Object;
      
      public function GameShareListVO()
      {
         super();
      }
      
      public function toObject() : Object
      {
         var _loc2_:GameShareVO = null;
         var _loc3_:int = 0;
         var _loc1_:Object = new Object();
         _loc1_.success = this.isOk;
         if(!this.isOk)
         {
            _loc1_.error = this.status;
         }
         if(Boolean(this.value))
         {
            _loc1_.metric = this.value["metric"];
            _loc1_.timeFrame = this.value["interval"];
            _loc1_.total = this.value["total"];
            _loc1_.page = this.value["page"];
            _loc1_.averageFunFactor = this.value["avg_fun_factor"];
            _loc1_.totalViews = this.value["my_total_plays"];
            _loc1_.totalLikes = this.value["my_total_likes"];
            _loc1_.totalStaffPicks = this.value["my_total_staff_picks"];
            _loc1_.list = new Array();
            if(Boolean(this.value["list"]))
            {
               _loc3_ = 0;
               while(_loc3_ < this.value["list"].length)
               {
                  _loc2_ = this.value["list"][_loc3_];
                  _loc1_.list.push(_loc2_.toObject());
                  _loc3_++;
               }
            }
         }
         return _loc1_;
      }
   }
}

