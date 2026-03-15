// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.managers

export class FocusManager implements IFocusManager
   {
      
      private focusableObjects: Dictionary;
      private _showFocusIndicator: boolean = true;
      private defButton: Button;
      private focusableCandidates: any[];
      private _form: DisplayObjectContainer;
      private _defaultButtonEnabled: boolean = true;
      private activated: boolean = false;
      private _defaultButton: Button;
      private calculateCandidates: boolean = true;
      private lastFocus: InteractiveObject;
      private lastAction: string;
      constructor(param1: DisplayObjectContainer){
         super();
         focusableObjects = new Dictionary(true);
         if(param1 != null)
         {
            _form = param1;
            addFocusables((param1 as unknown as DisplayObject));
            param1.addEventListener(Event.ADDED, addedHandler.bind(this));
            param1.addEventListener(Event.REMOVED, removedHandler.bind(this));
            activate();
         }
      }
      
      public get showFocusIndicator(): boolean
      {
         return _showFocusIndicator;
      }
      
      private getIndexOfNextObject(param1: number, param2: boolean, param3: boolean, param4: string): number
      {
         null;
         null;
         null;
         null;
         let _loc5_: number = Math.floor(focusableCandidates.length);
         let _loc6_: number = param1;
         while(true)
         {
            if(param2)
            {
               param1--;
            }
            else
            {
               param1++;
            }
            if(param3)
            {
               if(param2 && param1 < 0)
               {
                  break;
               }
               if(!param2 && param1 == _loc5_)
               {
                  break;
               }
            }
            else
            {
               param1 = Math.floor((param1 + _loc5_) % _loc5_);
               if(_loc6_ == param1)
               {
                  break;
               }
            }
            if(isValidFocusCandidate(focusableCandidates[param1],param4))
            {
               let _loc7_: DisplayObject = (findFocusManagerComponent(focusableCandidates[param1] as unknown as DisplayObject));
               if(_loc7_ instanceof IFocusManagerGroup)
               {
                  let _loc8_: IFocusManagerGroup = (null as unknown as IFocusManagerGroup);
                  let _loc9_: number = 0;
                  while(0 < focusableCandidates.length)
                  {
                     let _loc10_: DisplayObject = focusableCandidates[0];
                     if(_loc10_ instanceof IFocusManagerGroup)
                     {
                        let _loc11_: IFocusManagerGroup = (null as unknown as IFocusManagerGroup);
                        if(_loc11_.groupName == null.groupName && Boolean(null.selected))
                        {
                           param1 = 0;
                           break;
                        }
                     }
                     _loc9_++;
                  }
               }
               return param1;
            }
         }
         return param1;
      }
      
      private mouseFocusChangeHandler(param1: FocusEvent): void
      {
         if(param1.relatedObject instanceof TextField)
         {
            return;
         }
         param1.preventDefault();
      }
      
      public set form(param1: DisplayObjectContainer)
      {
         _form = param1;
      }
      
      private addFocusables(param1: DisplayObject, param2: boolean = false): void
      {
         let focusable: IFocusManagerComponent = null;
         let io: InteractiveObject = null;
         let doc: DisplayObjectContainer = null;
         let i: number = 0;
         let child: DisplayObject = null;
         let o: DisplayObject = param1;
         let skipTopLevel: boolean = param2;
         if(!skipTopLevel)
         {
            if(o instanceof IFocusManagerComponent)
            {
               focusable = (o as unknown as IFocusManagerComponent);
               if(focusable.focusEnabled)
               {
                  if(focusable.tabEnabled && isTabVisible(o))
                  {
                     focusableObjects[o] = true;
                     calculateCandidates = true;
                  }
                  o.addEventListener(Event.TAB_ENABLED_CHANGE, tabEnabledChangeHandler.bind(this));
                  o.addEventListener(Event.TAB_INDEX_CHANGE, tabIndexChangeHandler.bind(this));
               }
            }
            else if(o instanceof InteractiveObject)
            {
               io = o  as unknown as InteractiveObject;
               if(Boolean(io) && Boolean(io.tabEnabled) && findFocusManagerComponent(io) == io)
               {
                  focusableObjects[io] = true;
                  calculateCandidates = true;
               }
               io.addEventListener(Event.TAB_ENABLED_CHANGE, tabEnabledChangeHandler.bind(this));
               io.addEventListener(Event.TAB_INDEX_CHANGE, tabIndexChangeHandler.bind(this));
            }
         }
         if(o instanceof DisplayObjectContainer)
         {
            doc = (o as unknown as DisplayObjectContainer);
            o.addEventListener(Event.TAB_CHILDREN_CHANGE, tabChildrenChangeHandler.bind(this));
            if(doc instanceof Stage || doc.parent instanceof Stage || doc.tabChildren)
            {
               i = 0;
               while(i < doc.numChildren)
               {
                  try
                  {
                     child = doc.getChildAt(i);
                     if(child != null)
                     {
                        addFocusables(doc.getChildAt(i));
                     }
                  }
                  catch (error: any)
                  {
                  }
                  i++;
               }
            }
         }
      }
      
      private getChildIndex(param1: DisplayObjectContainer, param2: DisplayObject): number
      {
         return param1.getChildIndex(param2);
      }
      
      public findFocusManagerComponent(param1: InteractiveObject): InteractiveObject
      {
         let _loc2_: InteractiveObject = param1;
         while(param1)
         {
            if(param1 instanceof IFocusManagerComponent && (param1 as unknown as IFocusManagerComponent).focusEnabled)
            {
               return param1;
            }
            param1 = param1.parent;
         }
         return _loc2_;
      }
      
      private focusOutHandler(param1: FocusEvent): void
      {
         let _loc2_: InteractiveObject = param1.target  as unknown as InteractiveObject;
      }
      
      private isValidFocusCandidate(param1: DisplayObject, param2: string): boolean
      {
         null;
         if(!isEnabledAndVisible(param1))
         {
            return false;
         }
         if(param1 instanceof IFocusManagerGroup)
         {
            let _loc3_: IFocusManagerGroup = (param1 as unknown as IFocusManagerGroup);
            if(param2 == null.groupName)
            {
               return false;
            }
         }
         return true;
      }
      
      private setFocusToNextObject(param1: FocusEvent): void
      {
         if(!hasFocusableObjects())
         {
            return;
         }
         let _loc2_: InteractiveObject = getNextFocusManagerComponent(param1.shiftKey);
         if(_loc2_)
         {
            setFocus(_loc2_);
         }
      }
      
      private sortFocusableObjectsTabIndex(): void
      {
         let _loc1_: Record<string, any> = null;
         let _loc2_: InteractiveObject = null;
         focusableCandidates = [];
         for (let _loc1_ in focusableObjects)
         {
            _loc2_ = (_loc1_ as unknown as InteractiveObject);
            if(Boolean(_loc2_.tabIndex) && !isNaN(Number(_loc2_.tabIndex)))
            {
               focusableCandidates.push(_loc2_);
            }
         }
         focusableCandidates.sort(sortByTabIndex);
      }
      
      private removeFocusables(param1: DisplayObject): void
      {
         let _loc2_: Record<string, any> = null;
         let _loc3_: DisplayObject = null;
         if(param1 instanceof DisplayObjectContainer)
         {
            param1.removeEventListener(Event.TAB_CHILDREN_CHANGE, tabChildrenChangeHandler.bind(this));
            param1.removeEventListener(Event.TAB_INDEX_CHANGE, tabIndexChangeHandler.bind(this));
            for (let _loc2_ in focusableObjects)
            {
               _loc3_ = (_loc2_ as unknown as DisplayObject);
               if((param1 as unknown as DisplayObjectContainer).contains(_loc3_))
               {
                  if(_loc3_ == lastFocus)
                  {
                     lastFocus = null;
                  }
                  _loc3_.removeEventListener(Event.TAB_ENABLED_CHANGE, tabEnabledChangeHandler.bind(this));
                  delete focusableObjects[_loc2_];
                  calculateCandidates = true;
               }
            }
         }
      }
      
      private getTopLevelFocusTarget(param1: InteractiveObject): InteractiveObject
      {
         while(param1 != (form as unknown as InteractiveObject))
         {
            if(param1 instanceof IFocusManagerComponent && (param1 as unknown as IFocusManagerComponent).focusEnabled && (param1 as unknown as IFocusManagerComponent).mouseFocusEnabled && (param1 as unknown as UIComponent).enabled)
            {
               return param1;
            }
            param1 = param1.parent;
            if(param1 == null)
            {
               break;
            }
         }
         return null;
      }
      
      public sendDefaultButtonEvent(): void
      {
         defButton.dispatchEvent(new MouseEvent(MouseEvent.CLICK));
      }
      
      private addedHandler(param1: Event): void
      {
         let _loc2_: DisplayObject = (param1.target as unknown as DisplayObject);
         if(_loc2_.stage)
         {
            addFocusables((param1.target as unknown as DisplayObject));
         }
      }
      
      private isEnabledAndVisible(param1: DisplayObject): boolean
      {
         null;
         null;
         let _loc2_: DisplayObjectContainer = (form as unknown as DisplayObject).parent;
         while(param1 != _loc2_)
         {
            if(param1 instanceof UIComponent)
            {
               if(!(param1 as unknown as UIComponent).enabled)
               {
                  return false;
               }
            }
            else if(param1 instanceof TextField)
            {
               let _loc3_: TextField = (param1 as unknown as TextField);
               if(null.type == TextFieldType.DYNAMIC || !null.selectable)
               {
                  return false;
               }
            }
            else if(param1 instanceof SimpleButton)
            {
               let _loc4_: SimpleButton = (param1 as unknown as SimpleButton);
               if(!_loc4_.enabled)
               {
                  return false;
               }
            }
            if(!param1.visible)
            {
               return false;
            }
            param1 = param1.parent;
         }
         return true;
      }
      
      private tabChildrenChangeHandler(param1: Event): void
      {
         if(param1.target != param1.currentTarget)
         {
            return;
         }
         calculateCandidates = true;
         let _loc2_: DisplayObjectContainer = (param1.target as unknown as DisplayObjectContainer);
         if(_loc2_.tabChildren)
         {
            addFocusables(_loc2_,true);
         }
         else
         {
            removeFocusables(_loc2_);
         }
      }
      
      private deactivateHandler(param1: Event): void
      {
         let _loc2_: InteractiveObject = (param1.target as unknown as InteractiveObject);
      }
      
      public setFocus(param1: InteractiveObject): void
      {
         if(param1 instanceof IFocusManagerComponent)
         {
            (param1 as unknown as IFocusManagerComponent).setFocus();
         }
         else
         {
            form.stage.focus = param1;
         }
      }
      
      public getFocus(): InteractiveObject
      {
         let _loc1_: InteractiveObject = form.stage.focus;
         return findFocusManagerComponent(_loc1_);
      }
      
      private hasFocusableObjects(): boolean
      {
         let _loc1_: Record<string, any> = null;
         let _loc2_: number = 0;
         let _loc3_: any = focusableObjects;
         for (let _loc1_ in _loc3_)
         {
            return true;
         }
         return false;
      }
      
      private tabIndexChangeHandler(param1: Event): void
      {
         calculateCandidates = true;
      }
      
      public set defaultButton(param1: Button)
      {
         let _loc2_: Button = param1 ? (param1 as unknown as Button) : null;
         if(_loc2_ != _defaultButton)
         {
            if(_defaultButton)
            {
               _defaultButton.emphasized = false;
            }
            if(defButton)
            {
               defButton.emphasized = false;
            }
            _defaultButton = _loc2_;
            defButton = _loc2_;
            if(_loc2_)
            {
               _loc2_.emphasized = true;
            }
         }
      }
      
      private sortFocusableObjects(): void
      {
         let _loc1_: Record<string, any> = null;
         let _loc2_: InteractiveObject = null;
         focusableCandidates = [];
         for (let _loc1_ in focusableObjects)
         {
            _loc2_ = (_loc1_ as unknown as InteractiveObject);
            if(Boolean(_loc2_.tabIndex) && Boolean(!isNaN(Number(_loc2_.tabIndex))) && _loc2_.tabIndex > 0)
            {
               sortFocusableObjectsTabIndex();
               return;
            }
            focusableCandidates.push(_loc2_);
         }
         focusableCandidates.sort(sortByDepth);
      }
      
      private keyFocusChangeHandler(param1: FocusEvent): void
      {
         showFocusIndicator = true;
         if((param1.keyCode == Keyboard.TAB || param1.keyCode == 0) && !param1.isDefaultPrevented())
         {
            setFocusToNextObject(param1);
            param1.preventDefault();
         }
      }
      
      private getIndexOfFocusedObject(param1: DisplayObject): number
      {
         let _loc2_: number = Math.floor(focusableCandidates.length);
         let _loc3_: number = 0;
         _loc3_ = 0;
         while(_loc3_ < _loc2_)
         {
            if(focusableCandidates[_loc3_] == param1)
            {
               return _loc3_;
            }
            _loc3_++;
         }
         return -1;
      }
      
      public hideFocus(): void
      {
      }
      
      private removedHandler(param1: Event): void
      {
         let _loc4_: InteractiveObject = null;
         let _loc3_: DisplayObject = (param1.target as unknown as DisplayObject);
         if(_loc3_ instanceof IFocusManagerComponent && focusableObjects[_loc3_] == true)
         {
            if(_loc3_ == lastFocus)
            {
               (lastFocus as unknown as IFocusManagerComponent).drawFocus(false);
               lastFocus = null;
            }
            _loc3_.removeEventListener(Event.TAB_ENABLED_CHANGE, tabEnabledChangeHandler.bind(this));
            delete focusableObjects[_loc3_];
            calculateCandidates = true;
         }
         else if(_loc3_ instanceof InteractiveObject && focusableObjects[_loc3_] == true)
         {
            _loc4_ = _loc3_  as unknown as InteractiveObject;
            if(_loc4_)
            {
               if(_loc4_ == lastFocus)
               {
                  lastFocus = null;
               }
               delete focusableObjects[_loc4_];
               calculateCandidates = true;
            }
            _loc3_.addEventListener(Event.TAB_ENABLED_CHANGE, tabEnabledChangeHandler.bind(this));
         }
         removeFocusables(_loc3_);
      }
      
      private sortByDepth(param1: InteractiveObject, param2: InteractiveObject): number
      {
         let _loc5_: number = 0;
         let _loc6_: string = null;
         let _loc7_: string = null;
         let _loc3_: string = "";
         let _loc4_: string = "";
         let _loc9_: DisplayObject = (param1 as unknown as DisplayObject);
         let _loc10_: DisplayObject = (param2 as unknown as DisplayObject);
         while(_loc9_ != (form as unknown as DisplayObject) && Boolean(_loc9_.parent))
         {
            _loc5_ = this.getChildIndex(_loc9_.parent,_loc9_);
            _loc6_ = _loc5_.toString(16);
            if(_loc6_.length < 4)
            {
               _loc7_ = "0000".substring(0,4 - _loc6_.length) + _loc6_;
            }
            _loc3_ = _loc7_ + _loc3_;
            _loc9_ = _loc9_.parent;
         }
         while(_loc10_ != (form as unknown as DisplayObject) && Boolean(_loc10_.parent))
         {
            _loc5_ = this.getChildIndex(_loc10_.parent,_loc10_);
            _loc6_ = _loc5_.toString(16);
            if(_loc6_.length < 4)
            {
               _loc7_ = "0000".substring(0,4 - _loc6_.length) + _loc6_;
            }
            _loc4_ = _loc7_ + _loc4_;
            _loc10_ = _loc10_.parent;
         }
         return _loc3_ > _loc4_ ? 1 : (_loc3_ < _loc4_ ? -1 : 0);
      }
      
      public get defaultButton(): Button
      {
         return _defaultButton;
      }
      
      private activateHandler(param1: Event): void
      {
         let _loc2_: InteractiveObject = (param1.target as unknown as InteractiveObject);
         if(lastFocus)
         {
            if(lastFocus instanceof IFocusManagerComponent)
            {
               (lastFocus as unknown as IFocusManagerComponent).setFocus();
            }
            else
            {
               form.stage.focus = lastFocus;
            }
         }
         lastAction = "ACTIVATE";
      }
      
      public showFocus(): void
      {
      }
      
      public set defaultButtonEnabled(param1: boolean)
      {
         _defaultButtonEnabled = param1;
      }
      
      public getNextFocusManagerComponent(param1: boolean = false): InteractiveObject
      {
         let _loc8_: IFocusManagerGroup = null;
         if(!hasFocusableObjects())
         {
            return null;
         }
         if(calculateCandidates)
         {
            sortFocusableObjects();
            calculateCandidates = false;
         }
         let _loc2_: DisplayObject = form.stage.focus;
         _loc2_ = (findFocusManagerComponent(InteractiveObject(_loc2_ as unknown as DisplayObject)));
         let _loc3_: string = "";
         if(_loc2_ instanceof IFocusManagerGroup)
         {
            _loc8_ = (_loc2_ as unknown as IFocusManagerGroup);
            _loc3_ = _loc8_.groupName;
         }
         let _loc4_: number = getIndexOfFocusedObject(_loc2_);
         let _loc5_: boolean = false;
         let _loc6_: number = _loc4_;
         if(_loc4_ == -1)
         {
            if(param1)
            {
               _loc4_ = Math.floor(focusableCandidates.length);
            }
            _loc5_ = true;
         }
         let _loc7_: number = getIndexOfNextObject(_loc4_,param1,_loc5_,_loc3_);
         return findFocusManagerComponent(focusableCandidates[_loc7_]);
      }
      
      private mouseDownHandler(param1: MouseEvent): void
      {
         if(param1.isDefaultPrevented())
         {
            return;
         }
         let _loc2_: InteractiveObject = getTopLevelFocusTarget((param1.target as unknown as InteractiveObject));
         if(!_loc2_)
         {
            return;
         }
         showFocusIndicator = false;
         if((_loc2_ != lastFocus || lastAction == "ACTIVATE") && !(_loc2_ instanceof TextField))
         {
            setFocus(_loc2_);
         }
         lastAction = "MOUSEDOWN";
      }
      
      private isTabVisible(param1: DisplayObject): boolean
      {
         let _loc2_: DisplayObjectContainer = param1.parent;
         while(Boolean(_loc2_) && Boolean(!(_loc2_ instanceof Stage)) && !(_loc2_.parent && _loc2_.parent instanceof Stage))
         {
            if(!_loc2_.tabChildren)
            {
               return false;
            }
            _loc2_ = _loc2_.parent;
         }
         return true;
      }
      
      public get nextTabIndex(): number
      {
         return 0;
      }
      
      private keyDownHandler(param1: KeyboardEvent): void
      {
         if(param1.keyCode == Keyboard.TAB)
         {
            lastAction = "KEY";
            if(calculateCandidates)
            {
               sortFocusableObjects();
               calculateCandidates = false;
            }
         }
         if(Boolean(defaultButtonEnabled && param1.keyCode == Keyboard.ENTER) && Boolean(defaultButton) && defButton.enabled)
         {
            sendDefaultButtonEvent();
         }
      }
      
      private focusInHandler(param1: FocusEvent): void
      {
         null;
         let _loc2_: InteractiveObject = (param1.target as unknown as InteractiveObject);
         if(form.contains(_loc2_))
         {
            lastFocus = findFocusManagerComponent((_loc2_ as unknown as InteractiveObject));
            if(lastFocus instanceof Button)
            {
               let _loc3_: Button = (lastFocus as unknown as Button);
               if(defButton)
               {
                  defButton.emphasized = false;
                  defButton = null;
                  null.emphasized = true;
               }
            }
            else if(Boolean(defButton) && defButton != _defaultButton)
            {
               defButton.emphasized = false;
               defButton = _defaultButton;
               _defaultButton.emphasized = true;
            }
         }
      }
      
      private tabEnabledChangeHandler(param1: Event): void
      {
         calculateCandidates = true;
         let _loc2_: InteractiveObject = (param1.target as unknown as InteractiveObject);
         let _loc3_: boolean = focusableObjects[_loc2_] == true;
         if(_loc2_.tabEnabled)
         {
            if(!_loc3_ && isTabVisible(_loc2_))
            {
               if(!(_loc2_ instanceof IFocusManagerComponent))
               {
                  _loc2_.focusRect = false;
               }
               focusableObjects[_loc2_] = true;
            }
         }
         else if(_loc3_)
         {
            delete focusableObjects[_loc2_];
         }
      }
      
      public set showFocusIndicator(param1: boolean)
      {
         _showFocusIndicator = param1;
      }
      
      public get form(): DisplayObjectContainer
      {
         return _form;
      }
      
      private sortByTabIndex(param1: InteractiveObject, param2: InteractiveObject): number
      {
         return param1.tabIndex > param2.tabIndex ? 1 : (param1.tabIndex < param2.tabIndex ? -1 : Math.floor(sortByDepth(param1,param2)));
      }
      
      public get defaultButtonEnabled(): boolean
      {
         return _defaultButtonEnabled;
      }
      
      public activate(): void
      {
         if(activated)
         {
            return;
         }
         form.stage.addEventListener(FocusEvent.MOUSE_FOCUS_CHANGE, mouseFocusChangeHandler.bind(this));
         form.stage.addEventListener(FocusEvent.KEY_FOCUS_CHANGE, keyFocusChangeHandler.bind(this));
         form.addEventListener(FocusEvent.FOCUS_IN, focusInHandler.bind(this));
         form.addEventListener(FocusEvent.FOCUS_OUT, focusOutHandler.bind(this));
         form.stage.addEventListener(Event.ACTIVATE, activateHandler.bind(this));
         form.stage.addEventListener(Event.DEACTIVATE, deactivateHandler.bind(this));
         form.addEventListener(MouseEvent.MOUSE_DOWN, mouseDownHandler.bind(this));
         form.addEventListener(KeyboardEvent.KEY_DOWN, keyDownHandler.bind(this));
         activated = true;
         if(lastFocus)
         {
            setFocus(lastFocus);
         }
      }
      
      public deactivate(): void
      {
         form.stage.removeEventListener(FocusEvent.MOUSE_FOCUS_CHANGE, mouseFocusChangeHandler.bind(this));
         form.stage.removeEventListener(FocusEvent.KEY_FOCUS_CHANGE, keyFocusChangeHandler.bind(this));
         form.removeEventListener(FocusEvent.FOCUS_IN, focusInHandler.bind(this));
         form.removeEventListener(FocusEvent.FOCUS_OUT, focusOutHandler.bind(this));
         form.stage.removeEventListener(Event.ACTIVATE, activateHandler.bind(this));
         form.stage.removeEventListener(Event.DEACTIVATE, deactivateHandler.bind(this));
         form.removeEventListener(MouseEvent.MOUSE_DOWN, mouseDownHandler.bind(this));
         form.removeEventListener(KeyboardEvent.KEY_DOWN, keyDownHandler.bind(this));
         activated = false;
      }
   }
