declare namespace Phaser {
  class Scene {
    add: {
      existing(gameObject: GameObjects.GameObject): void;
      sprite(x: number, y: number, texture: string): GameObjects.Sprite;
    };
  }

  namespace Math {
    namespace Angle {
      function Between(x1: number, y1: number, x2: number, y2: number): number;
    }
  }

  namespace GameObjects {
    class GameObject {
      public visible: boolean;
      constructor(scene: Scene);
    }

    class Container extends GameObject {
      public x: number;
      public y: number;
      public angle: number;
      public rotation: number;
      public parentContainer?: Container;
      constructor(scene: Scene, x?: number, y?: number);
      add(child: GameObject): this;
      remove(child: GameObject): this;
      getWorldTransformMatrix(): { tx: number; ty: number };
    }

    class Sprite extends GameObject {
      public angle: number;
      public rotation: number;
      setScale(x: number, y?: number): this;
    }
  }
}
