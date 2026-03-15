package com.armorgames.services.VO
{
   public class AmfAuthenticationVO
   {
      
      public var token:String;
      
      public var gameName:String;
      
      public var gameUrl:String;
      
      public var gameUrlShort:String;
      
      public function AmfAuthenticationVO()
      {
         super();
      }
      
      public function toObject() : Object
      {
         var _loc1_:Object = new Object();
         _loc1_.token = this.token;
         _loc1_.gameName = this.gameName;
         _loc1_.gameUrl = this.gameUrl;
         _loc1_.gameUrlShort = this.gameUrlShort;
         return _loc1_;
      }
   }
}

