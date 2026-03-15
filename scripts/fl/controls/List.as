package fl.controls
{
   import fl.controls.listClasses.ICellRenderer;
   import fl.controls.listClasses.ListData;
   import fl.core.InvalidationType;
   import fl.core.UIComponent;
   import fl.managers.IFocusManagerComponent;
   import flash.display.DisplayObject;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import flash.ui.Keyboard;
   import flash.utils.Dictionary;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol77")]
   public class List extends SelectableList implements IFocusManagerComponent
   {
      
      public static var createAccessibilityImplementation:Function;
      
      private static var defaultStyles:Object = {
         "focusRectSkin":null,
         "focusRectPadding":null
      };
      
      protected var _iconField:String = "icon";
      
      protected var _labelField:String = "label";
      
      protected var _iconFunction:Function;
      
      protected var _rowHeight:Number = 20;
      
      protected var _cellRenderer:Object;
      
      protected var _labelFunction:Function;
      
      public function List()
      {
         super();
      }
      
      public static function getStyleDefinition() : Object
      {
         return mergeStyles(defaultStyles,SelectableList.getStyleDefinition());
      }
      
      public function get iconField() : String
      {
         return _iconField;
      }
      
      public function set iconField(param1:String) : void
      {
         if(param1 == _iconField)
         {
            return;
         }
         _iconField = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public function set labelField(param1:String) : void
      {
         if(param1 == _labelField)
         {
            return;
         }
         _labelField = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public function set rowHeight(param1:Number) : void
      {
         _rowHeight = param1;
         invalidate(InvalidationType.SIZE);
      }
      
      override protected function draw() : void
      {
         var _loc1_:Boolean = contentHeight != rowHeight * length;
         contentHeight = rowHeight * length;
         if(isInvalid(InvalidationType.STYLES))
         {
            setStyles();
            drawBackground();
            if(contentPadding != getStyleValue("contentPadding"))
            {
               invalidate(InvalidationType.SIZE,false);
            }
            if(_cellRenderer != getStyleValue("cellRenderer"))
            {
               _invalidateList();
               _cellRenderer = getStyleValue("cellRenderer");
            }
         }
         if(isInvalid(InvalidationType.SIZE,InvalidationType.STATE) || _loc1_)
         {
            drawLayout();
         }
         if(isInvalid(InvalidationType.RENDERER_STYLES))
         {
            updateRendererStyles();
         }
         if(isInvalid(InvalidationType.STYLES,InvalidationType.SIZE,InvalidationType.DATA,InvalidationType.SCROLL,InvalidationType.SELECTED))
         {
            drawList();
         }
         updateChildren();
         validate();
      }
      
      override public function get rowCount() : uint
      {
         return Math.ceil(calculateAvailableHeight() / rowHeight);
      }
      
      override protected function configUI() : void
      {
         useFixedHorizontalScrolling = true;
         _horizontalScrollPolicy = ScrollPolicy.AUTO;
         _verticalScrollPolicy = ScrollPolicy.AUTO;
         super.configUI();
      }
      
      public function set labelFunction(param1:Function) : void
      {
         if(_labelFunction == param1)
         {
            return;
         }
         _labelFunction = param1;
         invalidate(InvalidationType.DATA);
      }
      
      override public function scrollToIndex(param1:int) : void
      {
         drawNow();
         var _loc2_:uint = Math.floor((_verticalScrollPosition + availableHeight) / rowHeight) - 1;
         var _loc3_:uint = Math.ceil(_verticalScrollPosition / rowHeight);
         if(param1 < _loc3_)
         {
            verticalScrollPosition = param1 * rowHeight;
         }
         else if(param1 > _loc2_)
         {
            verticalScrollPosition = (param1 + 1) * rowHeight - availableHeight;
         }
      }
      
      override protected function moveSelectionHorizontally(param1:uint, param2:Boolean, param3:Boolean) : void
      {
      }
      
      override protected function setHorizontalScrollPosition(param1:Number, param2:Boolean = false) : void
      {
         list.x = -param1;
         super.setHorizontalScrollPosition(param1,true);
      }
      
      override protected function moveSelectionVertically(param1:uint, param2:Boolean, param3:Boolean) : void
      {
         var _loc4_:int = Math.max(Math.floor(calculateAvailableHeight() / rowHeight),1);
         var _loc5_:int = -1;
         switch(param1)
         {
            case Keyboard.UP:
               if(caretIndex > 0)
               {
                  _loc5_ = caretIndex - 1;
               }
               break;
            case Keyboard.DOWN:
               if(caretIndex < length - 1)
               {
                  _loc5_ = caretIndex + 1;
               }
               break;
            case Keyboard.PAGE_UP:
               if(caretIndex > 0)
               {
                  _loc5_ = Math.max(caretIndex - _loc4_,0);
               }
               break;
            case Keyboard.PAGE_DOWN:
               if(caretIndex < length - 1)
               {
                  _loc5_ = Math.min(caretIndex + _loc4_,length - 1);
               }
               break;
            case Keyboard.HOME:
               if(caretIndex > 0)
               {
                  _loc5_ = 0;
               }
               break;
            case Keyboard.END:
               if(caretIndex < length - 1)
               {
                  _loc5_ = length - 1;
               }
         }
         if(_loc5_ >= 0)
         {
            doKeySelection(_loc5_,param2,param3);
            scrollToSelected();
         }
      }
      
      protected function doKeySelection(param1:int, param2:Boolean, param3:Boolean) : void
      {
         var _loc5_:int = 0;
         var _loc6_:Array = null;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         var _loc4_:Boolean = false;
         if(param2)
         {
            _loc6_ = [];
            _loc7_ = lastCaretIndex;
            _loc8_ = param1;
            if(_loc7_ == -1)
            {
               _loc7_ = caretIndex != -1 ? caretIndex : param1;
            }
            if(_loc7_ > _loc8_)
            {
               _loc8_ = _loc7_;
               _loc7_ = param1;
            }
            _loc5_ = _loc7_;
            while(_loc5_ <= _loc8_)
            {
               _loc6_.push(_loc5_);
               _loc5_++;
            }
            selectedIndices = _loc6_;
            caretIndex = param1;
            _loc4_ = true;
         }
         else
         {
            selectedIndex = param1;
            caretIndex = lastCaretIndex = param1;
            _loc4_ = true;
         }
         if(_loc4_)
         {
            dispatchEvent(new Event(Event.CHANGE));
         }
         invalidate(InvalidationType.DATA);
      }
      
      public function get rowHeight() : Number
      {
         return _rowHeight;
      }
      
      override protected function initializeAccessibility() : void
      {
         if(List.createAccessibilityImplementation != null)
         {
            List.createAccessibilityImplementation(this);
         }
      }
      
      public function get labelField() : String
      {
         return _labelField;
      }
      
      public function set iconFunction(param1:Function) : void
      {
         if(_iconFunction == param1)
         {
            return;
         }
         _iconFunction = param1;
         invalidate(InvalidationType.DATA);
      }
      
      public function set rowCount(param1:uint) : void
      {
         var _loc2_:Number = Number(getStyleValue("contentPadding"));
         var _loc3_:Number = _horizontalScrollPolicy == ScrollPolicy.ON || _horizontalScrollPolicy == ScrollPolicy.AUTO && _maxHorizontalScrollPosition > 0 ? 15 : 0;
         height = rowHeight * param1 + 2 * _loc2_ + _loc3_;
      }
      
      public function get labelFunction() : Function
      {
         return _labelFunction;
      }
      
      override protected function setVerticalScrollPosition(param1:Number, param2:Boolean = false) : void
      {
         invalidate(InvalidationType.SCROLL);
         super.setVerticalScrollPosition(param1,true);
      }
      
      override protected function drawList() : void
      {
         0;
         null;
         null;
         null;
         null;
         null;
         null;
         listHolder.x = listHolder.y = contentPadding;
         var _loc1_:Rectangle = listHolder.scrollRect;
         _loc1_.x = _horizontalScrollPosition;
         _loc1_.y = Math.floor(_verticalScrollPosition) % rowHeight;
         listHolder.scrollRect = _loc1_;
         listHolder.cacheAsBitmap = useBitmapScrolling;
         var _loc2_:uint = Math.floor(_verticalScrollPosition / rowHeight);
         var _loc3_:uint = Math.min(length,_loc2_ + rowCount + 1);
         var _loc7_:Dictionary = renderedItems = new Dictionary(true);
         var _loc4_:uint = _loc2_;
         while(0 < _loc3_)
         {
            _loc7_[_dataProvider.getItemAt(0)] = true;
            _loc4_ = 0 + 1;
         }
         var _loc8_:Dictionary = new Dictionary(true);
         while(activeCellRenderers.length > 0)
         {
            var _loc6_:ICellRenderer = activeCellRenderers.pop() as ICellRenderer;
            var _loc5_:Object = _loc6_.data;
            if(_loc7_[null] == null || invalidItems[null] == true)
            {
               availableCellRenderers.push(null);
            }
            else
            {
               _loc8_[null] = null;
               invalidItems[null] = true;
            }
            list.removeChild(null as DisplayObject);
         }
         invalidItems = new Dictionary(true);
         _loc4_ = _loc2_;
         while(0 < _loc3_)
         {
            var _loc9_:Boolean = false;
            _loc5_ = _dataProvider.getItemAt(0);
            if(_loc8_[null] != null)
            {
               _loc9_ = true;
               _loc6_ = _loc8_[null];
               delete _loc8_[null];
            }
            else if(availableCellRenderers.length > 0)
            {
               _loc6_ = availableCellRenderers.pop() as ICellRenderer;
            }
            else
            {
               _loc6_ = getDisplayObjectInstance(getStyleValue("cellRenderer")) as ICellRenderer;
               var _loc12_:Sprite = _loc6_ as Sprite;
               if(_loc12_ != null)
               {
                  null.addEventListener(MouseEvent.CLICK,handleCellRendererClick,false,0,true);
                  null.addEventListener(MouseEvent.ROLL_OVER,handleCellRendererMouseEvent,false,0,true);
                  null.addEventListener(MouseEvent.ROLL_OUT,handleCellRendererMouseEvent,false,0,true);
                  null.addEventListener(Event.CHANGE,handleCellRendererChange,false,0,true);
                  null.doubleClickEnabled = true;
                  null.addEventListener(MouseEvent.DOUBLE_CLICK,handleCellRendererDoubleClick,false,0,true);
                  if(null.hasOwnProperty("setStyle"))
                  {
                     for(var _loc13_ in rendererStyles)
                     {
                        null["setStyle"](null,rendererStyles[null]);
                     }
                  }
               }
            }
            list.addChild(null as Sprite);
            activeCellRenderers.push(null);
            null.y = rowHeight * (0 - _loc2_);
            null.setSize(availableWidth + _maxHorizontalScrollPosition,rowHeight);
            var _loc10_:String = itemToLabel(null);
            var _loc11_:Object = null;
            if(_iconFunction != null)
            {
               _loc11_ = _iconFunction(null);
            }
            else if(_iconField != null)
            {
               _loc11_ = null[_iconField];
            }
            null.data = null;
            null.listData = new ListData(null,null,this,0,0,0);
            null.selected = _selectedIndices.indexOf(0) != -1;
            if(null is UIComponent)
            {
               (null as UIComponent).drawNow();
            }
            _loc4_ = 0 + 1;
         }
      }
      
      override protected function keyDownHandler(param1:KeyboardEvent) : void
      {
         var _loc2_:int = 0;
         if(!selectable)
         {
            return;
         }
         switch(param1.keyCode)
         {
            case Keyboard.UP:
            case Keyboard.DOWN:
            case Keyboard.END:
            case Keyboard.HOME:
            case Keyboard.PAGE_UP:
            case Keyboard.PAGE_DOWN:
               moveSelectionVertically(param1.keyCode,param1.shiftKey && _allowMultipleSelection,param1.ctrlKey && _allowMultipleSelection);
               break;
            case Keyboard.LEFT:
            case Keyboard.RIGHT:
               moveSelectionHorizontally(param1.keyCode,param1.shiftKey && _allowMultipleSelection,param1.ctrlKey && _allowMultipleSelection);
               break;
            case Keyboard.SPACE:
               if(caretIndex == -1)
               {
                  caretIndex = 0;
               }
               doKeySelection(caretIndex,param1.shiftKey,param1.ctrlKey);
               scrollToSelected();
               break;
            default:
               _loc2_ = getNextIndexAtLetter(String.fromCharCode(param1.keyCode),selectedIndex);
               if(_loc2_ > -1)
               {
                  selectedIndex = _loc2_;
                  scrollToSelected();
               }
         }
         param1.stopPropagation();
      }
      
      public function get iconFunction() : Function
      {
         return _iconFunction;
      }
      
      override public function itemToLabel(param1:Object) : String
      {
         if(_labelFunction != null)
         {
            return String(_labelFunction(param1));
         }
         return param1[_labelField] != null ? String(param1[_labelField]) : "";
      }
      
      protected function calculateAvailableHeight() : Number
      {
         var _loc1_:Number = Number(getStyleValue("contentPadding"));
         return height - _loc1_ * 2 - (_horizontalScrollPolicy == ScrollPolicy.ON || _horizontalScrollPolicy == ScrollPolicy.AUTO && _maxHorizontalScrollPosition > 0 ? 15 : 0);
      }
   }
}

