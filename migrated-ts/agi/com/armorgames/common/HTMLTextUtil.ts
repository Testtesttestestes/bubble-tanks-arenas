// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.common

export class HTMLTextUtil{
      
      constructor(){
         super();
      }
      
      public static bold(param1: string): string
      {
         return "<b>" + param1 + "</b>";
      }
      
      public static italic(param1: string): string
      {
         return "<i>" + param1 + "</i>";
      }
      
      public static underlined(param1: string): string
      {
         return "<u>" + param1 + "</u>";
      }
      
      public static color(param1: string, param2: number): string
      {
         return "<font color=\"#" + NumberUtil.toHex(param2) + "\" >" + param1 + "</font>";
      }
      
      public static link(param1: string, param2: string): string
      {
         return "<a href=\"" + param2 + "\" target=\"_blank\" >" + param1 + "</a>";
      }
   }
