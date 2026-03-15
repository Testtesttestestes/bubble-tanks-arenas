import * as Phaser from 'phaser';
import { TankView } from '../entities/tank/TankView';
import { LegacyBTAGameWorldAdapter } from '../logic/LegacyBTAGameWorldAdapter';
import {
  MigratedPhaserPipeline,
  type MigratedManifest,
} from '../runtime/MigratedPhaserPipeline';
import migratedManifest from '../runtime/generated/migrated-manifest.json';

export class BTAGameWorldScene extends Phaser.Scene {
  private static readonly MASSIVE_BULLET_TEXTURE_KEY = 'effect_massive_bullet';

  private worldLogic!: LegacyBTAGameWorldAdapter;

  constructor() {
    super({ key: 'BTAGameWorldScene' });
  }

  public preload(): void {
    MigratedPhaserPipeline.preloadFromManifest(
      this,
      migratedManifest as MigratedManifest,
      ['class_113', 'class_90', 'class_89'],
    );

    this.load.image(
      BTAGameWorldScene.MASSIVE_BULLET_TEXTURE_KEY,
      'images/100.png',
    );

    this.load.image(TankView.HULL_TEXTURE_KEY, 'images/100.png');
    this.load.image(TankView.TURRET_TEXTURE_KEY, 'images/100.png');
  }

  public create(data: unknown): void {
    this.worldLogic = new LegacyBTAGameWorldAdapter(data);

    const rootContainer = this.add.container(0, 0);
    this.worldLogic.assignRoot(rootContainer);
  }

  public update(_time: number, delta: number): void {
    this.worldLogic.customUpdate(delta);
  }
}
