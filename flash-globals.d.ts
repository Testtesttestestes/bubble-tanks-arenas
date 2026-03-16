// flash-globals.d.ts

declare class DisplayObject {
  [key: string]: any;
  x: number;
  y: number;
  width: number;
  height: number;
  alpha: number;
  visible: boolean;
  parent: DisplayObjectContainer;
  stage: Stage | null;
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

declare class Stage extends DisplayObjectContainer {}

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
declare class Point { x: number; y: number; constructor(x?: number, y?: number); }
declare class SoundTransform { pan: number; volume: number; }
declare class SoundChannel { soundTransform: SoundTransform; }

declare class Event { type: string; target: any; }
declare class MouseEvent extends Event {}
declare class FocusEvent extends Event {}
declare class KeyboardEvent extends Event {}

declare var stage: Stage;

interface EventTarget {
  [key: string]: any;
  gotoAndStop?(frame: any): void;
  gotoAndPlay?(frame: any): void;
  soundTransform?: SoundTransform;
  name?: string;
}
