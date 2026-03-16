// flash-shims.d.ts
declare class EventDispatcher {
    addEventListener(type: string, listener: Function, useCapture?: boolean, priority?: number, useWeakReference?: boolean): void;
    removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
    dispatchEvent(event: Event): boolean;
    hasEventListener(type: string): boolean;
}

declare class DisplayObject extends EventDispatcher {
    x: number; y: number; alpha: number;
    scaleX: number; scaleY: number; width: number; height: number;
    visible: boolean; name: string; parent: DisplayObjectContainer;
    [key: string]: any; // Динамический доступ
}
declare class InteractiveObject extends DisplayObject {}
declare class DisplayObjectContainer extends InteractiveObject {
    addChild(child: any): void;
    removeChild(child: any): void;
    numChildren: number;
}
declare class Sprite extends DisplayObjectContainer {}
declare class MovieClip extends Sprite {
    gotoAndStop(frame: any): void;
    gotoAndPlay(frame: any): void;
    play(): void; stop(): void;
    addFrameScript(...args: any[]): void;
}
declare class TextField extends InteractiveObject {
    text: string; selectable: boolean;
    caretIndex: number;
    replaceText(beginIndex: number, endIndex: number, newText: string): void;
    setSelection(beginIndex: number, endIndex: number): void;
}

// События
declare class Event {
    static ENTER_FRAME: string; static COMPLETE: string;
    static ADDED_TO_STAGE: string; static REMOVED_FROM_STAGE: string;
    static SOUND_COMPLETE: string; static CHANGE: string;
    static RESIZE: string; static CLOSE: string;
    type: string; target: any; currentTarget: any;
    preventDefault(): void; stopPropagation(): void;
    constructor(type: string, bubbles?: boolean, cancelable?: boolean);
}
declare class MouseEvent extends Event {
    static CLICK: string; static MOUSE_DOWN: string; static MOUSE_UP: string;
    static MOUSE_OVER: string; static MOUSE_OUT: string; static MOUSE_MOVE: string;
    static ROLL_OVER: string; static ROLL_OUT: string; static DOUBLE_CLICK: string;
}
declare class KeyboardEvent extends Event { static KEY_DOWN: string; static KEY_UP: string; }
declare class FocusEvent extends Event { static FOCUS_IN: string; static FOCUS_OUT: string; }
declare class TimerEvent extends Event {}
declare class TextEvent extends Event {}

// Сеть и утилиты
declare class ByteArray {
    [key: number]: number; length: number; position: number;
    writeUnsignedInt(val: number): void; readUnsignedInt(): number;
    writeBytes(bytes: ByteArray, offset?: number, length?: number): void;
    readBytes(bytes: ByteArray, offset?: number, length?: number): void;
    writeUTFBytes(val: string): void; readUTFBytes(length: number): string;
}
declare class SoundChannel extends EventDispatcher {}
declare class SoundTransform { pan: number; volume: number; }
declare class URLLoader extends EventDispatcher { dataFormat: string; load(req: any): void; data: any; }
declare class URLRequestMethod { static POST: string; static GET: string; }
declare class URLLoaderDataFormat { static TEXT: string; static BINARY: string; static VARIABLES: string; }
declare class XMLList { [key: string]: any; [Symbol.iterator](): IterableIterator<any>; }
declare class XML { _attr_name: any; _descendants_star_filter(func: any): any[]; [key: string]: any; }
