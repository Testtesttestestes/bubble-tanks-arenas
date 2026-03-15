// flash-shims.d.ts
// Глобальные заглушки для ActionScript 3 API.
// Они не исполняются, но позволяют TypeScript собирать проект без ошибок типов.

declare class EventTarget {
  addEventListener(type: string, listener: Function, useCapture?: boolean, priority?: number, useWeakReference?: boolean): void;
  removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
  dispatchEvent(event: Event): boolean;
  hasEventListener(type: string): boolean;
}

declare class DisplayObject extends EventTarget {
  x: number; y: number; width: number; height: number;
  alpha: number; rotation: number; scaleX: number; scaleY: number;
  parent: DisplayObjectContainer; name: string; root: DisplayObject;
  stage: Stage; mouseX: number; mouseY: number; visible: boolean;
  cacheAsBitmap: boolean; filters: any[]; blendMode: string;
  hitTestObject(obj: DisplayObject): boolean;
  hitTestPoint(x: number, y: number, shapeFlag?: boolean): boolean;
  localToGlobal(point: Point): Point;
  globalToLocal(point: Point): Point;
}

declare class InteractiveObject extends DisplayObject {
  mouseEnabled: boolean; tabEnabled: boolean; tabIndex: number; focusRect: any;
}

declare class DisplayObjectContainer extends InteractiveObject {
  addChild(child: DisplayObject): DisplayObject;
  addChildAt(child: DisplayObject, index: number): DisplayObject;
  removeChild(child: DisplayObject): DisplayObject;
  removeChildAt(index: number): DisplayObject;
  contains(child: DisplayObject): boolean;
  getChildIndex(child: DisplayObject): number;
  setChildIndex(child: DisplayObject, index: number): void;
  numChildren: number; mouseChildren: boolean;
}

declare class Sprite extends DisplayObjectContainer {
  buttonMode: boolean; useHandCursor: boolean; graphics: Graphics;
  startDrag(lockCenter?: boolean, bounds?: Rectangle): void;
  stopDrag(): void;
}

declare class MovieClip extends Sprite {
  gotoAndPlay(frame: number | string): void;
  gotoAndStop(frame: number | string): void;
  play(): void; stop(): void;
  currentFrame: number; totalFrames: number;
  addFrameScript(...args: any[]): void;
}

declare class TextField extends InteractiveObject {
  text: string; htmlText: string; textColor: number;
  autoSize: string; wordWrap: boolean; multiline: boolean;
  defaultTextFormat: TextFormat; type: string;
}

declare class SimpleButton extends InteractiveObject {
  upState: DisplayObject; overState: DisplayObject; downState: DisplayObject; hitTestState: DisplayObject;
}

declare class Point {
  x: number; y: number;
  constructor(x?: number, y?: number);
  length: number;
  static distance(pt1: Point, pt2: Point): number;
}

declare class Rectangle {
  x: number; y: number; width: number; height: number;
  constructor(x?: number, y?: number, w?: number, h?: number);
}

declare class ByteArray {
  length: number; position: number; bytesAvailable: number;
  clear(): void; readByte(): number; readBytes(bytes: ByteArray, offset?: number, length?: number): void;
  writeByte(value: number): void; writeBytes(bytes: ByteArray, offset?: number, length?: number): void;
}

declare class Dictionary { [key: string]: any; }
declare class XML { constructor(str?: string); }
declare class XMLList {}

declare class Stage extends DisplayObjectContainer {
  stageWidth: number; stageHeight: number; frameRate: number; quality: string;
}

declare class Event {
  static ENTER_FRAME: string; static ADDED_TO_STAGE: string; static REMOVED_FROM_STAGE: string;
  static CHANGE: string; static COMPLETE: string; static CLOSE: string;
  type: string; target: any; currentTarget: any;
  constructor(type: string, bubbles?: boolean, cancelable?: boolean);
}

declare class MouseEvent extends Event {
  static CLICK: string; static MOUSE_DOWN: string; static MOUSE_UP: string;
  static MOUSE_OVER: string; static MOUSE_OUT: string; static MOUSE_MOVE: string;
  stageX: number; stageY: number; delta: number;
}

declare class KeyboardEvent extends Event {
  static KEY_DOWN: string; static KEY_UP: string; keyCode: number; charCode: number;
}

declare class TextEvent extends Event { static TEXT_INPUT: string; text: string; }
declare class FocusEvent extends Event { static FOCUS_IN: string; static FOCUS_OUT: string; relatedObject: InteractiveObject; }
declare class TimerEvent extends Event { static TIMER: string; static TIMER_COMPLETE: string; }
declare class HTTPStatusEvent extends Event { status: number; }
declare class IOErrorEvent extends Event { text: string; }
declare class SecurityErrorEvent extends Event { text: string; }
declare class ProgressEvent extends Event { bytesLoaded: number; bytesTotal: number; }

declare class URLLoader extends EventTarget { data: any; dataFormat: string; load(request: URLRequest): void; }
declare class URLRequest { url: string; method: string; data: any; constructor(url?: string); }
declare class URLVariables { [key: string]: any; }
declare class SharedObject { static getLocal(name: string): SharedObject; data: any; flush(): void; clear(): void; }

declare class Sound { load(stream: URLRequest): void; play(startTime?: number, loops?: number, sndTransform?: SoundTransform): SoundChannel; }
declare class SoundChannel { stop(): void; soundTransform: SoundTransform; }
declare class SoundTransform { volume: number; panning: number; constructor(vol?: number, pan?: number); }
declare class ColorTransform { constructor(rm?: number, gm?: number, bm?: number, am?: number, ro?: number, go?: number, bo?: number, ao?: number); }
declare class Graphics { clear(): void; beginFill(color: number, alpha?: number): void; endFill(): void; drawRect(x: number, y: number, w: number, h: number): void; }
declare class TextFormat { constructor(font?: string, size?: number, color?: number, bold?: boolean, italic?: boolean, underline?: boolean, url?: string, target?: string, align?: string); }

declare class Timer extends EventTarget { constructor(delay: number, repeatCount?: number); start(): void; stop(): void; reset(): void; }
declare function getTimer(): number;

declare var stage: Stage;
declare var mouseX: number;
declare var mouseY: number;
