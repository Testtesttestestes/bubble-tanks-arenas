// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services

export class ClientError{
      
      public static readonly AUTH_ERROR: number = 100;
      public static readonly AUTH_FAILED: number = 101;
      public static readonly CALL_ERROR: number = 102;
      public static readonly CALL_FAILED: number = 103;
      public static readonly NOT_AUTHENTICATED: number = 104;
      public static readonly STATUS_ERROR: number = 105;
      public static readonly NETWORK_STATUS_ERROR: number = 106;
      public static readonly SECURITY_ERROR: number = 107;
      public static readonly ASYNC_ERROR: number = 108;
      public static readonly IO_ERROR: number = 109;
      public static readonly CLIENT_CONNECT_ERROR: number = 110;
      public static readonly CLIENT_TIMEOUT_ERROR: number = 111;
      protected code: number;
      protected message: string;
      protected data: Record<string, any>;
      constructor(param1: string, param2: number, param3: Record<string, any> = null){
         super();
         this.code = param2;
         this.message = param1;
         this.data = param3;
      }
      
      public getCode(): number
      {
         return this.code;
      }
      
      public getMessage(): string
      {
         return this.message;
      }
      
      public getData(): Record<string, any>
      {
         return this.data;
      }
      
      public toString(): string
      {
         return "#" + this.code + ": " + this.message;
      }
   }
