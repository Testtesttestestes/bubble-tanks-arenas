// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: <root>

export class class_7{
      
      public var_485: boolean = false;
      public var_94: any[] = new Array();
      public var_451: boolean = false;
      public var_342: any;
      constructor(param1: any, param2: boolean = false){
         super();
         this.var_342 = param1;
         this.var_485 = param2;
      }
      
      public method_111(param1: number, param2: Function = null as any, param3: Function = null as any): any
      {
         this.var_94.push({
            "KeyCode":param1,
            "CallBackFunctionDown":param2,
            "CallBackFunctionUp":param3
         });
         if(!this.var_451)
         {
            this.method_479();
         }
      }
      
      public Destroy(): any
      {
         this.var_342.removeEventListener(KeyboardEvent.KEY_DOWN, this.Downs.bind(this));
         this.var_342.removeEventListener(KeyboardEvent.KEY_UP, this.Ups.bind(this));
         this.var_451 = false;
         this.var_94.length = 0;
         this.var_94 = null;
      }
      
      public method_389(param1: number): any
      {
         null;
         let _loc3_: any = 0;
         while(_loc3_ < this.var_94.length)
         {
            if(param1 == this.var_94[_loc3_].KeyCode)
            {
               this.var_94[_loc3_] = this.var_94[this.var_94.length];
               let _loc2_: Record<string, any> = this.var_94.pop();
               _loc2_ = null;
               break;
            }
            _loc3_ += 1;
         }
      }
      
      private Downs(param1: KeyboardEvent): any
      {
         if(this.var_485)
         {
         }
         let _loc2_: any = 0;
         while(_loc2_ < this.var_94.length)
         {
            if(param1.keyCode == this.var_94[_loc2_].KeyCode)
            {
               if(this.var_94[_loc2_].CallBackFunctionDown != null)
               {
                  this.var_94[_loc2_].CallBackFunctionDown();
               }
               break;
            }
            _loc2_ += 1;
         }
      }
      
      private Ups(param1: KeyboardEvent): any
      {
         let _loc2_: any = 0;
         while(_loc2_ < this.var_94.length)
         {
            if(param1.keyCode == this.var_94[_loc2_].KeyCode)
            {
               if(this.var_94[_loc2_].CallBackFunctionUp != null)
               {
                  this.var_94[_loc2_].CallBackFunctionUp();
               }
               break;
            }
            _loc2_ += 1;
         }
      }
      
      private method_479(): any
      {
         this.var_342.addEventListener(KeyboardEvent.KEY_DOWN, this.Downs.bind(this));
         this.var_342.addEventListener(KeyboardEvent.KEY_UP, this.Ups.bind(this));
         this.var_451 = true;
      }
   }
