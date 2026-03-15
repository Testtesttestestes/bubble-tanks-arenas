import * as Phaser from 'phaser';
import { LegacyBTAGameWorldAdapter } from '../logic/LegacyBTAGameWorldAdapter';
import { TankView } from '../entities/tank/TankView';
import type { TankInputState } from '../logic/class_113';

export class BTAGameWorldScene extends Phaser.Scene {
  private static readonly EFFECTS_ATLAS_KEY = 'effects_atlas';
  private static readonly MASSIVE_BULLET_TEXTURE_KEY = 'effect_massive_bullet';
  private static readonly MASSIVE_BULLET_IMPACT_ANIMATION_KEY =
    'effect_massive_bullet_impact';

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
    // Temporary placeholder so effect entities can be instantiated before atlas export is ready.
    this.load.image(
      BTAGameWorldScene.MASSIVE_BULLET_TEXTURE_KEY,
      'images/100.png',
    );
    this.load.image(TankView.HULL_TEXTURE_KEY, 'images/100.png');
    this.load.image(TankView.TURRET_TEXTURE_KEY, 'images/100.png');
  }

  public create(data: unknown): void {
    this.worldLogic = new LegacyBTAGameWorldAdapter(data);

    this.ensureMassiveBulletImpactAnimation();

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
