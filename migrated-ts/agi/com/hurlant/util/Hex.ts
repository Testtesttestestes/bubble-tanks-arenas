// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.util

export class Hex{
      
      constructor(){
         super();
      }
      
      public static fromString(str: string, colons: boolean = false): string
      {
         let a: ByteArray = null;
         a = new ByteArray();
         a.writeUTFBytes(str);
         return fromArray(a,colons);
      }
      
      public static toString(hex: string): string
      {
         let a: ByteArray = null;
         a = toArray(hex);
         return a.readUTFBytes(a.length);
      }
      
      public static toArray(hex: string): ByteArray
      {
         let a: ByteArray = null;
         let i: number = 0;
         hex = hex.replace(/\s|:/gm,"");
         a = new ByteArray();
         if(Boolean(hex.length & 1 == 1))
         {
            hex = "0" + hex;
         }
         for(i = 0; i < hex.length; i += 2)
         {
            a[i / 2] = parseInt(hex.substr(i,2),16);
         }
         return a;
      }
      
      public static fromArray(array: ByteArray, colons: boolean = false): string
      {
         let s: string = null;
         let i: number = 0;
         s = "";
         for(i = 0; i < array.length; i++)
         {
            s += ("0" + array[i].toString(16)).substr(-2,2);
            if(colons)
            {
               if(i < array.length - 1)
               {
                  s += ":";
               }
            }
         }
         return s;
      }
   }
