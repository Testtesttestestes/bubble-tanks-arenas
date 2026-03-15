// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_114 extends MovieClip{
      
      protected static readonly const_19: string = "window.open";
      constructor(){
         super();
      }
      
      public static method_774(param1: string, param2: string = "_blank", param3: string = ""): void
      {
         ExternalInterface.call(const_19,param1,param2,param3);
      }
      
      public method_104(param1: string, param2: string = null as any): void
      {
         let var_106: string = param1;
         let var_40: string = param2;
         let var_56: URLRequest = new URLRequest(var_106);
         try
         {
            navigateToURL(var_56,var_40);
         }
         catch (e: any)
         {
         }
      }
   }
