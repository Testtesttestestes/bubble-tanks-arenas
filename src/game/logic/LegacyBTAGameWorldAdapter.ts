/**
 * Transitional adapter between Phaser Scene lifecycle and legacy BTAGameWorld logic.
 *
 * The adapter intentionally keeps a tiny API surface so we can gradually swap the
 * internals from Flash-era classes to Phaser-native entities.
 */
export class LegacyBTAGameWorldAdapter {
  private rootContainer?: Phaser.GameObjects.Container;

  constructor(private readonly bootData: unknown) {}

  public assignRoot(root: Phaser.GameObjects.Container): void {
    this.rootContainer = root;
  }

  public customUpdate(_deltaMs: number): void {
    if (!this.rootContainer) {
      return;
    }

    // Placeholder for wiring legacy BTAGameWorld frame logic during migration.
  }

  public getData(): unknown {
    return this.bootData;
  }
}
