import * as Phaser from 'phaser';
/**
 * Phaser replacement for `BTA_fla/effect_Massive_Bullet_125`.
 *
 * Original Flash clip stopped on frame 1 (`stop()`), so this class behaves as a
 * static sprite by default and only animates if explicitly configured.
 */
export class MassiveBulletEffect extends Phaser.GameObjects.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture = 'effect_massive_bullet',
    frame?: string | number,
  ) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
  }

  public playImpactAnimation(animKey = 'effect_massive_bullet_impact'): void {
    if (!this.scene.anims.exists(animKey)) {
      return;
    }

    this.play(animKey);
  }

  public stop(): this {
    this.anims.stop();
    return this;
  }
}
