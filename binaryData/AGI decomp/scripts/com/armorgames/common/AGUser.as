package com.armorgames.common
{
   public class AGUser
   {
      
      public var user_id:String;
      
      public var username:String;
      
      public var avatar_url:String;
      
      private var profile_url:String;
      
      public var countryCode:String;
      
      private var countryName:String;
      
      public function AGUser()
      {
         super();
      }
      
      public function fromObject(param1:Object) : void
      {
         this.user_id = param1.user_id;
         this.username = param1.username;
         this.avatar_url = param1.avatar_url;
         this.profile_url = param1.profile_url;
         this.countryCode = param1.countryCode;
         this.countryName = param1.countryName;
      }
      
      public function toObject() : Object
      {
         var _loc1_:Object = new Object();
         _loc1_.username = this.username;
         _loc1_.avatar_url = this.avatar_url;
         _loc1_.profile_url = this.profile_url;
         _loc1_.countryCode = this.countryCode;
         _loc1_.countryName = this.countryName;
         return _loc1_;
      }
   }
}

