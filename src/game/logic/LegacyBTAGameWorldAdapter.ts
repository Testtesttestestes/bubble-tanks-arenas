import * as Phaser from 'phaser';
import { TankView } from '../entities/tank/TankView';
import { class_113, type TankInputState } from './class_113';

/**
 * Transitional adapter between Phaser Scene lifecycle and legacy BTAGameWorld logic.
 *
 * The adapter intentionally keeps a tiny API surface so we can gradually swap the
 * internals from Flash-era classes to Phaser-native entities.
 */
export class LegacyBTAGameWorldAdapter {
  private rootContainer?: Phaser.GameObjects.Container;
  private tankView?: TankView;
  private playerTankLogic?: class_113;

  constructor(private readonly bootData: unknown) {}

  public assignRoot(root: Phaser.GameObjects.Container): void {
    this.rootContainer = root;

    const centerX = root.scene.cameras.main.centerX;
    const centerY = root.scene.cameras.main.centerY;

    this.tankView = new TankView(root.scene, centerX, centerY);
    this.rootContainer.add(this.tankView);
    this.playerTankLogic = new class_113(this.tankView);
  }

  public customUpdate(deltaMs: number, inputState: TankInputState): void {
    if (!this.rootContainer || !this.tankView) {
      return;
    }

<<<<<<< HEAD
    this.playerTankLogic?.setInput(inputState);
    this.playerTankLogic?.update(deltaMs);
=======
    const pointer = this.rootContainer.scene.input.activePointer;
    this.tankView.aimAtWorldPoint(pointer.worldX, pointer.worldY);
    this.tankView.spinHull(deltaMs);
    this.playerTankLogic?.update();
<<<<<<< HEAD
>>>>>>> aad03ca55ed52d73e0d61dd08bceb7c9e8081791
=======
>>>>>>> aad03ca55ed52d73e0d61dd08bceb7c9e8081791
  }

  public getData(): unknown {
    return this.bootData;
  }
}
