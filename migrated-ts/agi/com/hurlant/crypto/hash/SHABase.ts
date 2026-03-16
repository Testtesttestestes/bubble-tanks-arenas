// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.hash

export class SHABase implements IHash
   {
      
      constructor(){

      }
      
      public getHashSize(): number
      {
         return 0;
      }
      
      public toString(): string
      {
         return "sha";
      }
      
      public getInputSize(): number
      {
         return 64;
      }
      
      public hash(src: ByteArray): ByteArray
      {
         var savedLength: number = 0;
         var savedEndian: string = null as any;
         var len: number = 0;
         var a: any[] = null as any;
         var i: number = 0;
         var h: any[] = null as any;
         var out: ByteArray = null as any;
         var words: number = 0;
         savedLength = src.length;
         savedEndian = src.endian;
         src.endian = Endian.BIG_ENDIAN;
         len = savedLength * 8;
         while(src.length % 4 != 0)
         {
            src[src.length] = 0;
         }
         src.position = 0;
         a = [];
         for(i = 0; i < src.length; i += 4)
         {
            a.push(src.readUnsignedInt());
         }
         h = core(a,len);
         out = new ByteArray();
         words = getHashSize() / 4;
         for(i = 0; i < words; i++)
         {
            out.writeUnsignedInt(h[i]);
         }
         src.length = savedLength;
         src.endian = savedEndian;
         return out;
      }
      
      protected core(x: any[], len: number): any[]
      {
         return null;
      }
   }
