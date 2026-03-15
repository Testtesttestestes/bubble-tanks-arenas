package com.armorgames.common
{
   public class HTMLTextUtil
   {
      
      public function HTMLTextUtil()
      {
         super();
      }
      
      public static function bold(param1:String) : String
      {
         return "<b>" + param1 + "</b>";
      }
      
      public static function italic(param1:String) : String
      {
         return "<i>" + param1 + "</i>";
      }
      
      public static function underlined(param1:String) : String
      {
         return "<u>" + param1 + "</u>";
      }
      
      public static function color(param1:String, param2:uint) : String
      {
         return "<font color=\"#" + NumberUtil.toHex(param2) + "\" >" + param1 + "</font>";
      }
      
      public static function link(param1:String, param2:String) : String
      {
         return "<a href=\"" + param2 + "\" target=\"_blank\" >" + param1 + "</a>";
      }
   }
}

