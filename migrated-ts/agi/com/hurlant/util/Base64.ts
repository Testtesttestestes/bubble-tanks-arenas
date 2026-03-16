// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.hurlant.util

export class Base64{
      
      private static readonly BASE64_CHARS: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      public static readonly version: string = "1.0.0";
      constructor(){
         super();
         throw new Error("Base64 class instanceof static container only");
      }
      
      public static encode(data: string): string
      {
         let bytes: ByteArray = null;
         bytes = new ByteArray();
         bytes.writeUTFBytes(data);
         return encodeByteArray(bytes);
      }
      
      public static encodeByteArray(data: ByteArray): string
      {
         let output: string = null;
         let dataBuffer: any[] = null;
         let outputBuffer: any[] = null;
         let i: number = 0;
         let j: number = 0;
         let k: number = 0;
         output = "";
         outputBuffer = new Array(4);
         data.position = 0;
         while(data.bytesAvailable > 0)
         {
            dataBuffer = new Array();
            i = 0;
            while(i < 3 && data.bytesAvailable > 0)
            {
               dataBuffer[i] = data.readUnsignedByte();
               i++;
            }
            outputBuffer[0] = (dataBuffer[0] & 0xFC) >> 2;
            outputBuffer[1] = (dataBuffer[0] & 3) << 4 | dataBuffer[1] >> 4;
            outputBuffer[2] = (dataBuffer[1] & 0x0F) << 2 | dataBuffer[2] >> 6;
            outputBuffer[3] = dataBuffer[2] & 0x3F;
            for(j = dataBuffer.length; j < 3; j++)
            {
               outputBuffer[j + 1] = 64;
            }
            for(k = 0; k < outputBuffer.length; k++)
            {
               output += this.BASE64_CHARS.charAt(outputBuffer[k]);
            }
         }
         return output;
      }
      
      public static decode(data: string): string
      {
         let bytes: ByteArray = null;
         bytes = decodeToByteArray(data);
         return bytes.readUTFBytes(bytes.length);
      }
      
      public static decodeToByteArray(data: string): ByteArray
      {
         let output: ByteArray = null;
         let dataBuffer: any[] = null;
         let outputBuffer: any[] = null;
         let i: number = 0;
         let j: number = 0;
         let k: number = 0;
         output = new ByteArray();
         dataBuffer = new Array(4);
         outputBuffer = new Array(3);
         for(i = 0; i < data.length; i += 4)
         {
            j = 0;
            while(j < 4 && i + j < data.length)
            {
               dataBuffer[j] = this.BASE64_CHARS.indexOf(data.charAt(i + j));
               j++;
            }
            outputBuffer[0] = (dataBuffer[0] << 2) + ((dataBuffer[1] & 0x30) >> 4);
            outputBuffer[1] = ((dataBuffer[1] & 0x0F) << 4) + ((dataBuffer[2] & 0x3C) >> 2);
            outputBuffer[2] = ((dataBuffer[2] & 3) << 6) + dataBuffer[3];
            for(k = 0; k < outputBuffer.length; k++)
            {
               if(dataBuffer[k + 1] == 64)
               {
                  break;
               }
               output.writeByte(outputBuffer[k]);
            }
         }
         output.position = 0;
         return output;
      }
   }
