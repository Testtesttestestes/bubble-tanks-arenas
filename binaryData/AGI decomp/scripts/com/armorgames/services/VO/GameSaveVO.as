package com.armorgames.services.VO
{
   public class GameSaveVO
   {
      
      public var isOk:Boolean;
      
      public var status:String;
      
      public var value:*;
      
      public function GameSaveVO()
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
         _loc1_.data = this.value;
         return _loc1_;
      }
   }
}

