// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.managers

export class StyleManager{
      
      private static _instance: StyleManager;
      private classToInstancesDict: Dictionary;
      private globalStyles: Record<string, any>;
      private styleToClassesHash: Record<string, any>;
      private classToStylesDict: Dictionary;
      private classToDefaultStylesDict: Dictionary;
      constructor(){
         super();
         styleToClassesHash = {};
         classToInstancesDict = new Dictionary(true);
         classToStylesDict = new Dictionary(true);
         classToDefaultStylesDict = new Dictionary(true);
         globalStyles = UIComponent.getStyleDefinition();
      }
      
      public static clearComponentStyle(param1: Record<string, any>, param2: string): void
      {
         let _loc3_: any = getClassDef(param1);
         let _loc4_: Record<string, any> = getInstance().classToStylesDict[_loc3_];
         if(_loc4_ != null && _loc4_[param2] != null)
         {
            delete _loc4_[param2];
            invalidateComponentStyle(_loc3_,param2);
         }
      }
      
      private static getClassDef(param1: Record<string, any>): any
      {
         let component: Record<string, any> = param1;
         if(component instanceof Class)
         {
            return component  as unknown as Class;
         }
         try
         {
            return getDefinitionByName(getQualifiedClassName(component))  as unknown as Class;
         }
         catch (e: any)
         {
            if(component instanceof UIComponent)
            {
               try
               {
                  return component.loaderInfo.applicationDomain.getDefinition(getQualifiedClassName(component))  as unknown as Class;
               }
               catch (e: any)
               {
               }
            }
         }
         return null;
      }
      
      public static clearStyle(param1: string): void
      {
         setStyle(param1,null);
      }
      
      public static setComponentStyle(param1: Record<string, any>, param2: string, param3: Record<string, any>): void
      {
         let _loc4_: any = getClassDef(param1);
         let _loc5_: Record<string, any> = getInstance().classToStylesDict[_loc4_];
         if(_loc5_ == null)
         {
            let _temp_4: any = getInstance().classToStylesDict;
            let _temp_3: any = _loc4_;
            let _temp_2: any = {};
            _temp_4[_temp_3] = _temp_2;
            _loc5_ = _loc6_;
         }
         if(_loc5_ == param3)
         {
            return;
         }
         _loc5_[param2] = param3;
         invalidateComponentStyle(_loc4_,param2);
      }
      
      private static setSharedStyles(param1: UIComponent): void
      {
         let _loc5_: string = null;
         let _loc2_: StyleManager = getInstance();
         let _loc3_: any = getClassDef(param1);
         let _loc4_: Record<string, any> = _loc2_.classToDefaultStylesDict[_loc3_];
         for (let _loc5_ in _loc4_)
         {
            param1.setSharedStyle(_loc5_,getSharedStyle(param1,_loc5_));
         }
      }
      
      public static getComponentStyle(param1: Record<string, any>, param2: string): Record<string, any>
      {
         let _loc3_: any = getClassDef(param1);
         let _loc4_: Record<string, any> = getInstance().classToStylesDict[_loc3_];
         return _loc4_ == null ? null : _loc4_[param2];
      }
      
      private static getInstance(): any
      {
         if(_instance == null)
         {
            _instance = new StyleManager();
         }
         return _instance;
      }
      
      private static invalidateComponentStyle(param1: any, param2: string): void
      {
         let _loc4_: Record<string, any> = null;
         let _loc5_: UIComponent = null;
         let _loc3_: Dictionary = getInstance().classToInstancesDict[param1];
         if(_loc3_ == null)
         {
            return;
         }
         for (let _loc4_ in _loc3_)
         {
            _loc5_ = _loc4_  as unknown as UIComponent;
            if(_loc5_ != null)
            {
               _loc5_.setSharedStyle(param2,getSharedStyle(_loc5_,param2));
            }
         }
      }
      
      private static invalidateStyle(param1: string): void
      {
         let _loc3_: Record<string, any> = null;
         let _loc2_: Dictionary = getInstance().styleToClassesHash[param1];
         if(_loc2_ == null)
         {
            return;
         }
         for (let _loc3_ in _loc2_)
         {
            invalidateComponentStyle((_loc3_ as unknown as Class),param1);
         }
      }
      
      public static registerInstance(param1: UIComponent): void
      {
         let target: any = null;
         let defaultStyles: Record<string, any> = null;
         let styleToClasses: Record<string, any> = null;
         let n: string = null;
         let instance: UIComponent = param1;
         let inst: StyleManager = getInstance();
         let classDef: any = getClassDef(instance);
         if(classDef == null)
         {
            return;
         }
         if(inst.classToInstancesDict[classDef] == null)
         {
            inst.classToInstancesDict[classDef] = new Dictionary(true);
            target = classDef;
            while(defaultStyles == null)
            {
               if(target["getStyleDefinition"] != null)
               {
                  defaultStyles = target["getStyleDefinition"]();
                  break;
               }
               try
               {
                  target = instance.loaderInfo.applicationDomain.getDefinition(getQualifiedSuperclassName(target))  as unknown as Class;
               }
               catch (err: any)
               {
                  try
                  {
                     target = getDefinitionByName(getQualifiedSuperclassName(target))  as unknown as Class;
                  }
                  catch (e: any)
                  {
                     defaultStyles = UIComponent.getStyleDefinition();
                     break;
                  }
               }
            }
            styleToClasses = inst.styleToClassesHash;
            for (let n in defaultStyles)
            {
               if(styleToClasses[n] == null)
               {
                  styleToClasses[n] = new Dictionary(true);
               }
               styleToClasses[n][classDef] = true;
            }
            inst.classToDefaultStylesDict[classDef] = defaultStyles;
            if(inst.classToStylesDict[classDef] == null)
            {
               inst.classToStylesDict[classDef] = {};
            }
         }
         inst.classToInstancesDict[classDef][instance] = true;
         setSharedStyles(instance);
      }
      
      public static getStyle(param1: string): Record<string, any>
      {
         return getInstance().globalStyles[param1];
      }
      
      private static getSharedStyle(param1: UIComponent, param2: string): Record<string, any>
      {
         let _loc3_: any = getClassDef(param1);
         let _loc4_: StyleManager = getInstance();
         let _loc5_: Record<string, any> = _loc4_.classToStylesDict[_loc3_][param2];
         if(_loc5_ != null)
         {
            return _loc5_;
         }
         _loc5_ = _loc4_.globalStyles[param2];
         if(_loc5_ != null)
         {
            return _loc5_;
         }
         return _loc4_.classToDefaultStylesDict[_loc3_][param2];
      }
      
      public static setStyle(param1: string, param2: Record<string, any>): void
      {
         let _loc3_: Record<string, any> = getInstance().globalStyles;
         if(_loc3_[param1] === param2 && !(param2 instanceof TextFormat))
         {
            return;
         }
         _loc3_[param1] = param2;
         invalidateStyle(param1);
      }
   }
