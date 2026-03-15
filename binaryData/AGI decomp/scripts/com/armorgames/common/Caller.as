package com.armorgames.common
{
   import flash.display.*;
   import flash.events.*;
   import flash.utils.*;
   
   public class Caller
   {
      
      private static var calls:Dictionary;
      
      private static var controller:Sprite;
      
      private static var ids:uint = 0;
      
      private static var paused:Boolean = false;
      
      private static var frame:uint = 0;
      
      public function Caller()
      {
         super();
      }
      
      public static function addCall(param1:uint, param2:Function, param3:Array = null, param4:uint = 1) : void
      {
         if(!calls)
         {
            calls = new Dictionary();
         }
         var _loc5_:Object = {
            "maxTime":param1,
            "elasped":0,
            "last":getTimer(),
            "func":param2,
            "funcParams":param3,
            "loops":0,
            "maxLoops":param4,
            "id":ids,
            "useFrames":false
         };
         calls[_loc5_] = ids.toString();
         ++ids;
         start();
      }
      
      public static function addFrameCall(param1:uint, param2:Function, param3:Array = null, param4:uint = 1) : void
      {
         if(!calls)
         {
            calls = new Dictionary();
         }
         var _loc5_:Object = {
            "maxTime":param1,
            "elasped":0,
            "last":frame,
            "func":param2,
            "funcParams":param3,
            "loops":0,
            "maxLoops":param4,
            "id":ids,
            "useFrames":true
         };
         calls[_loc5_] = ids.toString();
         ++ids;
         start();
      }
      
      public static function isCalling(param1:Function) : Boolean
      {
         var _loc3_:Object = null;
         if(!calls)
         {
            return false;
         }
         var _loc2_:Boolean = false;
         for(_loc3_ in calls)
         {
            if(_loc3_.func == param1)
            {
               _loc2_ = true;
            }
         }
         return _loc2_;
      }
      
      public static function removeCall(param1:Function) : void
      {
         var _loc3_:Object = null;
         if(!calls)
         {
            return;
         }
         var _loc2_:int = 0;
         for(_loc3_ in calls)
         {
            if(_loc3_.func == param1)
            {
               calls[_loc3_] = null;
               delete calls[_loc3_];
               _loc3_ = null;
            }
            _loc2_++;
         }
         if(_loc2_ == 0)
         {
            stop();
         }
      }
      
      public static function removeAllCalls() : void
      {
         var _loc1_:Object = null;
         if(!calls)
         {
            return;
         }
         for(_loc1_ in calls)
         {
            calls[_loc1_] = null;
            delete calls[_loc1_];
            _loc1_ = null;
         }
         stop();
         paused = false;
      }
      
      public static function pauseAllCalls() : void
      {
         paused = true;
      }
      
      public static function resumeAllCalls() : void
      {
         paused = false;
      }
      
      private static function start() : void
      {
         if(Boolean(controller))
         {
            return;
         }
         controller = new Sprite();
         controller.addEventListener(Event.ENTER_FRAME,update,false,0,true);
      }
      
      private static function stop() : void
      {
         if(!controller)
         {
            return;
         }
         controller.removeEventListener(Event.ENTER_FRAME,update);
         controller = null;
      }
      
      private static function update(param1:Event) : void
      {
         var _loc4_:Object = null;
         if(paused)
         {
            return;
         }
         ++frame;
         var _loc2_:uint = uint(getTimer());
         var _loc3_:int = 0;
         for(_loc4_ in calls)
         {
            if(Boolean(_loc4_.useFrames))
            {
               _loc4_.elapsed = frame - _loc4_.last;
            }
            else
            {
               _loc4_.elapsed = _loc2_ - _loc4_.last;
            }
            if(_loc4_.elapsed >= _loc4_.maxTime)
            {
               if(Boolean(_loc4_.useFrames))
               {
                  _loc4_.last = frame;
               }
               else
               {
                  _loc4_.last = _loc2_;
               }
               if(_loc4_.func != null)
               {
                  _loc4_.func.apply(_loc4_,_loc4_.funcParams);
               }
               ++_loc4_.loops;
               if(_loc4_.loops >= _loc4_.maxLoops && _loc4_.maxLoops != 0)
               {
                  calls[_loc4_] = null;
                  delete calls[_loc4_];
                  _loc4_ = null;
               }
            }
            _loc3_++;
         }
         if(_loc3_ == 0)
         {
            stop();
         }
      }
   }
}

