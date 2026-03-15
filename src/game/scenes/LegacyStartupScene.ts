import * as Phaser from 'phaser';
import { OriginalStartupPipeline } from '../runtime/legacy/OriginalStartupPipeline';

export class LegacyStartupScene extends Phaser.Scene {
  private static readonly NEXT_SCENE_KEY = 'BTAGameWorldScene';

  public constructor() {
    super({ key: 'LegacyStartupScene' });
  }

  public create(): void {
    const startup = new OriginalStartupPipeline().bootstrap();

    const cx = this.cameras.main.centerX;
    const cy = this.cameras.main.centerY;

    this.cameras.main.setBackgroundColor('#1f1812');

    this.add
      .text(cx, cy - 40, startup.portal === 'herointeractive' ? 'HEROINTERACTIVE' : 'BUBBLE TANKS ARENAS', {
        fontFamily: 'Arial Black, Arial, sans-serif',
        fontSize: '42px',
        color: '#f4d9a8',
      })
      .setOrigin(0.5);

    const subtitle = startup.agiDataReady ? 'AGI data loaded' : 'Initializing AGI…';

    this.add
      .text(cx, cy + 10, subtitle, {
        fontFamily: 'Arial, sans-serif',
        fontSize: '20px',
        color: '#d6c8a8',
      })
      .setOrigin(0.5);

    const hint = this.add
      .text(cx, cy + 58, 'Legacy flow: preload screen before main menu/game', {
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        color: '#a39b8d',
      })
      .setOrigin(0.5)
      .setAlpha(0.85);

    this.tweens.add({
      targets: hint,
      alpha: { from: 0.3, to: 0.9 },
      yoyo: true,
      duration: 700,
      repeat: 2,
    });

    this.time.delayedCall(1500, () => {
      this.scene.start(LegacyStartupScene.NEXT_SCENE_KEY);
    });
  }
}
