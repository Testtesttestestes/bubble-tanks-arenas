// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.crypto.hash

export class SHABase implements IHash
   {
      
      constructor(){
         super();
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
         let savedLength: number = 0;
         let savedEndian: string = null;
         let len: number = 0;
         let a: any[] = null;
         let i: number = 0;
         let h: any[] = null;
         let out: ByteArray = null;
         let words: number = 0;
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
