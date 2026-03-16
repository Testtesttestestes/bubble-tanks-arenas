// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: com.armorgames.services.VO

export class AmfAuthenticationVO{
      
      public token!: string;
      public gameName!: string;
      public gameUrl!: string;
      public gameUrlShort!: string;
      constructor(){

      }
      
      public toObject(): Record<string, any>
      {
         var _loc1_: Record<string, any> = new Object();
         _loc1_.token = this.token;
         _loc1_.gameName = this.gameName;
         _loc1_.gameUrl = this.gameUrl;
         _loc1_.gameUrlShort = this.gameUrlShort;
         return _loc1_;
      }
   }
