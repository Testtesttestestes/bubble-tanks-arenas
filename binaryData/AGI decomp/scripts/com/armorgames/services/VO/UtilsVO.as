package com.armorgames.services.VO
{
   public class UtilsVO
   {
      
      public var isOk:Boolean;
      
      public var status:String;
      
      public var value:Object;
      
      public function UtilsVO()
      {
         super();
      }
      
      public function toContainsProfanityObject() : Object
      {
         var _loc1_:Object = new Object();
         _loc1_.success = this.isOk;
         if(!this.isOk)
         {
            _loc1_.error = this.status;
         }
         _loc1_.contains = Boolean(this.value);
         return _loc1_;
      }
      
      public function toFilterProfanityObject() : Object
      {
         var _loc1_:Object = new Object();
         _loc1_.success = this.isOk;
         if(!this.isOk)
         {
            _loc1_.error = this.status;
         }
         if(Boolean(this.value))
         {
            _loc1_.str = String(this.value);
         }
         return _loc1_;
      }
   }
}

