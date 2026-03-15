import { BaseEntity } from '../../runtime/BaseEntity';

/**
 * Minimal Phaser-native tank visual composed from hull + turret children.
 *
 * This class mirrors the old Flash display hierarchy approach, but keeps the
 * transform math explicit so converted code can safely aim in world space.
 */
export class TankView extends BaseEntity {
  public static readonly HULL_TEXTURE_KEY = 'tank_hull_placeholder';
  public static readonly TURRET_TEXTURE_KEY = 'tank_turret_placeholder';

  private readonly hull: Phaser.GameObjects.Sprite;
  private readonly turret: Phaser.GameObjects.Sprite;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);

    this.hull = this.addChild(scene.add.sprite(0, 0, TankView.HULL_TEXTURE_KEY));
    this.hull.setScale(0.55, 0.38);

    this.turret = this.addChild(
      scene.add.sprite(0, -2, TankView.TURRET_TEXTURE_KEY),
    );
    this.turret.setScale(0.4, 0.16);

    this.stop();
  }

  public setTurretRotationDegrees(value: number): void {
    this.turret.angle = value;
  }

  public aimAtWorldPoint(worldX: number, worldY: number): void {
    const worldTransform = this.getWorldTransformMatrix();
    const turretAngle = Phaser.Math.Angle.Between(
      worldTransform.tx,
      worldTransform.ty,
      worldX,
      worldY,
    );

    this.turret.rotation = turretAngle;
  }

  public spinHull(deltaMs: number): void {
    this.hull.angle += deltaMs * 0.02;
  }
}
