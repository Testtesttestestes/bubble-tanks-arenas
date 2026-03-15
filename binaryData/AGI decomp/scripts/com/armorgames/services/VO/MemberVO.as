package com.armorgames.services.VO
{
   public class MemberVO
   {
      
      public var isOk:Boolean;
      
      public var status:String;
      
      public var value:Object;
      
      public function MemberVO()
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
}

