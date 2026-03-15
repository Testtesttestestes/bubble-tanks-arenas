// AUTO-GENERATED AS3 TO TS CONVERSION
// Original Package: fl.managers

export interface IFocusManager{
    getFocus(): InteractiveObject;
    deactivate(): void;
    /* set defaultButton */
    /* set showFocusIndicator */
    defaultButtonEnabled: boolean;
    findFocusManagerComponent(param1: InteractiveObject): InteractiveObject;
    nextTabIndex: number;
    defaultButton: Button;
    showFocusIndicator: boolean;
    hideFocus(): void;
    activate(): void;
    showFocus(): void;
    /* set defaultButtonEnabled */
    setFocus(param1: InteractiveObject): void;
    getNextFocusManagerComponent(param1: boolean = false): InteractiveObject;
   }
