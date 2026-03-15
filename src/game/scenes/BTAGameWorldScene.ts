import * as Phaser from 'phaser';
import { TankView } from '../entities/tank/TankView';
import { LegacyBTAGameWorldAdapter } from '../logic/LegacyBTAGameWorldAdapter';
import type { TankInputState } from '../logic/class_113';
import {
  MigratedPhaserPipeline,
  type MigratedManifest,
} from '../runtime/MigratedPhaserPipeline';
import migratedManifest from '../runtime/generated/migrated-manifest.json';

export class BTAGameWorldScene extends Phaser.Scene {
  private static readonly MASSIVE_BULLET_TEXTURE_KEY = 'effect_massive_bullet';

  private worldLogic!: LegacyBTAGameWorldAdapter;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private wasd!: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
  };

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

    const keyboard = this.input.keyboard;
    if (!keyboard) {
      throw new Error('Keyboard plugin is unavailable for BTAGameWorldScene.');
    }

    this.cursors = keyboard.createCursorKeys();
    this.wasd = keyboard.addKeys('W,A,S,D') as BTAGameWorldScene['wasd'];

    const rootContainer = this.add.container(0, 0);
    this.worldLogic.assignRoot(rootContainer);
  }

  public update(_time: number, delta: number): void {
    const pointer = this.input.activePointer;
    const inputState: TankInputState = {
      up: this.cursors.up.isDown || this.wasd.W.isDown,
      down: this.cursors.down.isDown || this.wasd.S.isDown,
      left: this.cursors.left.isDown || this.wasd.A.isDown,
      right: this.cursors.right.isDown || this.wasd.D.isDown,
      targetX: pointer.worldX,
      targetY: pointer.worldY,
    };

    this.worldLogic.customUpdate(delta, inputState);
  }
}
