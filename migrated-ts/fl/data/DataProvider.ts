// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.data

export class DataProvider extends EventDispatcher{
      
      protected data: any[];
      constructor(param1: Record<string, any> = null){
         super();
         if(param1 == null)
         {
            data = [];
         }
         else
         {
            data = getDataFromObject(param1);
         }
      }
      
      public invalidateItemAt(param1: number): void
      {
         checkIndex(param1,data.length - 1);
         dispatchChangeEvent(DataChangeType.INVALIDATE,[data[param1]],param1,param1);
      }
      
      protected dispatchPreChangeEvent(param1: string, param2: any[], param3: number, param4: number): void
      {
         this.dispatchEvent(new DataChangeEvent(DataChangeEvent.PRE_DATA_CHANGE,param1,param2,param3,param4));
      }
      
      public getItemIndex(param1: Record<string, any>): number
      {
         return data.indexOf(param1);
      }
      
      public removeItemAt(param1: number): Record<string, any>
      {
         checkIndex(param1,data.length - 1);
         dispatchPreChangeEvent(DataChangeType.REMOVE,data.slice(param1,param1 + 1),param1,param1);
         let _loc2_: any[] = data.splice(param1,1);
         dispatchChangeEvent(DataChangeType.REMOVE,_loc2_,param1,param1);
         return _loc2_[0];
      }
      
      protected getDataFromObject(param1: Record<string, any>): any[]
      {
         let _loc2_: any[] = null;
         let _loc3_: any[] = null;
         let _loc4_: number = 0;
         let _loc5_: Record<string, any> = null;
         let _loc6_: XML = null;
         let _loc7_: XMLList = null;
         let _loc8_: XML = null;
         let _loc9_: XMLList = null;
         let _loc10_: XML = null;
         let _loc11_: XMLList = null;
         let _loc12_: XML = null;
         if(param1 instanceof Array)
         {
            _loc3_ = param1  as unknown as Array;
            if(_loc3_.length > 0)
            {
               if(_loc3_[0] instanceof String || _loc3_[0] instanceof Number)
               {
                  _loc2_ = [];
                  _loc4_ = 0;
                  while(_loc4_ < _loc3_.length)
                  {
                     _loc5_ = {
                        "label":String(_loc3_[_loc4_]),
                        "data":_loc3_[_loc4_]
                     };
                     _loc2_.push(_loc5_);
                     _loc4_++;
                  }
                  return _loc2_;
               }
            }
            return param1.concat();
         }
         if(param1 instanceof DataProvider)
         {
            return param1.toArray();
         }
         if(param1 instanceof XML)
         {
            _loc6_ = param1  as unknown as XML;
            _loc2_ = [];
            _loc7_ = _loc6_._star;
            for (let _loc8_ of _loc7_)
            {
               param1 = {};
               _loc9_ = _loc8_.attributes();
               for (let _loc10_ of _loc9_)
               {
                  param1[_loc10_.localName()] = _loc10_.toString();
               }
               _loc11_ = _loc8_._star;
               for (let _loc12_ of _loc11_)
               {
                  if(_loc12_.hasSimpleContent())
                  {
                     param1[_loc12_.localName()] = _loc12_.toString();
                  }
               }
               _loc2_.push(param1);
            }
            return _loc2_;
         }
         throw new TypeError("Error: Type Coercion failed: cannot convert " + param1 + " to Array or DataProvider.");
      }
      
      public addItem(param1: Record<string, any>): void
      {
         dispatchPreChangeEvent(DataChangeType.ADD,[param1],data.length - 1,data.length - 1);
         data.push(param1);
         dispatchChangeEvent(DataChangeType.ADD,[param1],data.length - 1,data.length - 1);
      }
      
      public concat(param1: Record<string, any>): void
      {
         addItems(param1);
      }
      
      public getItemAt(param1: number): Record<string, any>
      {
         checkIndex(param1,data.length - 1);
         return data[param1];
      }
      
      public sortOn(param1: Record<string, any>, param2: Record<string, any> = null): any
      {
         dispatchPreChangeEvent(DataChangeType.SORT,data.concat(),0,data.length - 1);
         let _loc3_: any[] = data.sortOn(param1,param2);
         dispatchChangeEvent(DataChangeType.SORT,data.concat(),0,data.length - 1);
         return _loc3_;
      }
      
      public toArray(): any[]
      {
         return data.concat();
      }
      
      public addItems(param1: Record<string, any>): void
      {
         addItemsAt(param1,data.length);
      }
      
      public clone(): DataProvider
      {
         return new DataProvider(data);
      }
      
      public sort(... rest): any
      {
         dispatchPreChangeEvent(DataChangeType.SORT,data.concat(),0,data.length - 1);
         let _loc2_: any[] = data.sort.apply(data,rest);
         dispatchChangeEvent(DataChangeType.SORT,data.concat(),0,data.length - 1);
         return _loc2_;
      }
      
      public get length(): number
      {
         return data.length;
      }
      
      public addItemAt(param1: Record<string, any>, param2: number): void
      {
         checkIndex(param2,data.length);
         dispatchPreChangeEvent(DataChangeType.ADD,[param1],param2,param2);
         data.splice(param2,0,param1);
         dispatchChangeEvent(DataChangeType.ADD,[param1],param2,param2);
      }
      
      public toString(): string
      {
         return "DataProvider [" + data.join(" , ") + "]";
      }
      
      public invalidateItem(param1: Record<string, any>): void
      {
         let _loc2_: number = Math.floor(getItemIndex(param1));
         if(_loc2_ == -1)
         {
            return;
         }
         invalidateItemAt(_loc2_);
      }
      
      protected dispatchChangeEvent(param1: string, param2: any[], param3: number, param4: number): void
      {
         this.dispatchEvent(new DataChangeEvent(DataChangeEvent.DATA_CHANGE,param1,param2,param3,param4));
      }
      
      protected checkIndex(param1: number, param2: number): void
      {
         if(param1 > param2 || param1 < 0)
         {
            throw new RangeError("DataProvider index (" + param1 + ") is not in acceptable range (0 - " + param2 + ")");
         }
      }
      
      public addItemsAt(param1: Record<string, any>, param2: number): void
      {
         checkIndex(param2,data.length);
         let _loc3_: any[] = getDataFromObject(param1);
         dispatchPreChangeEvent(DataChangeType.ADD,_loc3_,param2,param2 + _loc3_.length - 1);
         data.splice.apply(data,[param2,0].concat(_loc3_));
         dispatchChangeEvent(DataChangeType.ADD,_loc3_,param2,param2 + _loc3_.length - 1);
      }
      
      public replaceItem(param1: Record<string, any>, param2: Record<string, any>): Record<string, any>
      {
         let _loc3_: number = getItemIndex(param2);
         if(_loc3_ != -1)
         {
            return replaceItemAt(param1,_loc3_);
         }
         return null;
      }
      
      public removeItem(param1: Record<string, any>): Record<string, any>
      {
         let _loc2_: number = getItemIndex(param1);
         if(_loc2_ != -1)
         {
            return removeItemAt(_loc2_);
         }
         return null;
      }
      
      public merge(param1: Record<string, any>): void
      {
         let _loc6_: Record<string, any> = null;
         let _loc2_: any[] = getDataFromObject(param1);
         let _loc3_: number = _loc2_.length;
         let _loc4_: number = data.length;
         dispatchPreChangeEvent(DataChangeType.ADD,data.slice(_loc4_,data.length),_loc4_,this.data.length - 1);
         let _loc5_: number = 0;
         while(_loc5_ < _loc3_)
         {
            _loc6_ = _loc2_[_loc5_];
            if(getItemIndex(_loc6_) == -1)
            {
               data.push(_loc6_);
            }
            _loc5_++;
         }
         if(data.length > _loc4_)
         {
            dispatchChangeEvent(DataChangeType.ADD,data.slice(_loc4_,data.length),_loc4_,this.data.length - 1);
         }
         else
         {
            dispatchChangeEvent(DataChangeType.ADD,[],-1,-1);
         }
      }
      
      public replaceItemAt(param1: Record<string, any>, param2: number): Record<string, any>
      {
         checkIndex(param2,data.length - 1);
         let _loc3_: any[] = [data[param2]];
         dispatchPreChangeEvent(DataChangeType.REPLACE,_loc3_,param2,param2);
         data[param2] = param1;
         dispatchChangeEvent(DataChangeType.REPLACE,_loc3_,param2,param2);
         return _loc3_[0];
      }
      
      public invalidate(): void
      {
         this.dispatchEvent(new DataChangeEvent(DataChangeEvent.DATA_CHANGE,DataChangeType.INVALIDATE_ALL,data.concat(),0,data.length));
      }
      
      public removeAll(): void
      {
         let _loc1_: any[] = data.concat();
         dispatchPreChangeEvent(DataChangeType.REMOVE_ALL,_loc1_,0,_loc1_.length);
         data = [];
         dispatchChangeEvent(DataChangeType.REMOVE_ALL,_loc1_,0,_loc1_.length);
      }
   }
