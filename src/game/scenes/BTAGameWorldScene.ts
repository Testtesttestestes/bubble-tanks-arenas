import { LegacyBTAGameWorldAdapter } from '../logic/LegacyBTAGameWorldAdapter';

export class BTAGameWorldScene extends Phaser.Scene {
  private static readonly EFFECTS_ATLAS_KEY = 'effects_atlas';
  private static readonly MASSIVE_BULLET_TEXTURE_KEY = 'effect_massive_bullet';
  private static readonly MASSIVE_BULLET_IMPACT_ANIMATION_KEY =
    'effect_massive_bullet_impact';

  private worldLogic!: LegacyBTAGameWorldAdapter;

  constructor() {
    super({ key: 'BTAGameWorldScene' });
  }

  public preload(): void {
    // Temporary placeholder so effect entities can be instantiated before atlas export is ready.
    this.load.image(
      BTAGameWorldScene.MASSIVE_BULLET_TEXTURE_KEY,
      'images/100.png',
    );
  }

  public create(data: unknown): void {
    this.worldLogic = new LegacyBTAGameWorldAdapter(data);

    this.ensureMassiveBulletImpactAnimation();

    const rootContainer = this.add.container(0, 0);
    this.worldLogic.assignRoot(rootContainer);
  }

  public update(_time: number, delta: number): void {
    this.worldLogic.customUpdate(delta);
  }

  private ensureMassiveBulletImpactAnimation(): void {
    if (
      !this.textures.exists(BTAGameWorldScene.EFFECTS_ATLAS_KEY) ||
      this.anims.exists(BTAGameWorldScene.MASSIVE_BULLET_IMPACT_ANIMATION_KEY)
    ) {
      return;
    }

    this.anims.create({
      key: BTAGameWorldScene.MASSIVE_BULLET_IMPACT_ANIMATION_KEY,
      frames: this.anims.generateFrameNames(BTAGameWorldScene.EFFECTS_ATLAS_KEY, {
        prefix: 'impact_',
        end: 10,
      }),
      frameRate: 24,
      repeat: 0,
    });
  }
}
