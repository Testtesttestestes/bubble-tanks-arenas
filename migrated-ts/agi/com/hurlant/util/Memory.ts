// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.util

export class Memory{
      
      constructor(){

      }
      
      public static gc(): void
      {
         try
         {
            new LocalConnection().connect("foo");
            new LocalConnection().connect("foo");
         }
         catch(e:*)
         {
         }
      }
      
      public static get used(): number
      {
         return System.totalMemory;
      }
   }
