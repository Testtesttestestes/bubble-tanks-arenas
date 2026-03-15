import { LegacyBTAGameWorldAdapter } from '../logic/LegacyBTAGameWorldAdapter';

export class BTAGameWorldScene extends Phaser.Scene {
  private worldLogic!: LegacyBTAGameWorldAdapter;

  constructor() {
    super({ key: 'BTAGameWorldScene' });
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
