export class BaseEntity extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x = 0, y = 0) {
    super(scene, x, y);
    scene.add.existing(this);
  }

  // Flash compatibility: in AS3 rotation is degrees, in Phaser rotation is radians.
  public get rotation(): number {
    return this.angle;
  }

  public set rotation(value: number) {
    this.angle = value;
  }

  public get parent(): Phaser.GameObjects.Container | null {
    return this.parentContainer ?? null;
  }

  public addChild<T extends Phaser.GameObjects.GameObject>(child: T): T {
    this.add(child);
    return child;
  }

  public removeChild<T extends Phaser.GameObjects.GameObject>(child: T): T {
    this.remove(child);
    return child;
  }

  public stop(): void {
    // Container has no timeline/animation state; this keeps converted AS3 `stop()` calls safe.
  }
}
