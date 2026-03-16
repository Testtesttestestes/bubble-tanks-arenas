// flash-globals.d.ts
// Делаем базовые классы Flash глобально доступными и разрешаем динамические свойства

declare class DisplayObject {
  [key: string]: any;
  x: number;
  y: number;
  width: number;
  height: number;
  alpha: number;
  visible: boolean;
  parent: DisplayObjectContainer;
  addEventListener(type: string, listener: Function): void;
  removeEventListener(type: string, listener: Function): void;
}

declare class InteractiveObject extends DisplayObject {
  mouseEnabled: boolean;
}

declare class DisplayObjectContainer extends InteractiveObject {
  addChild(child: DisplayObject): void;
  addChildAt(child: DisplayObject, index: number): void;
  removeChild(child: DisplayObject): void;
}

declare class Sprite extends DisplayObjectContainer {
  graphics: any;
}

declare class MovieClip extends Sprite {
  gotoAndStop(frame: any): void;
  gotoAndPlay(frame: any): void;
  play(): void;
  stop(): void;
}

declare class SimpleButton extends InteractiveObject {}
declare class TextField extends InteractiveObject { text: string; }
declare class Bitmap extends DisplayObject {}
declare class ByteArray { [key: number]: number; length: number; }

declare class Event { type: string; target: any; }
declare class MouseEvent extends Event {}
declare class FocusEvent extends Event {}
declare class KeyboardEvent extends Event {}
