export interface AgiRetrieveResponse {
  success: boolean;
  data: string;
}

export interface AgiBridge {
  init(devKey: string, gameKey: string): void;
  retrieveGameData(callback: (payload: AgiRetrieveResponse) => void): void;
  initAGUI(params: { naviX: number; naviY: number }): void;
  showGameShareSubmit(..._args: unknown[]): void;
  closeAGUI(): void;
}

/**
 * TS fallback for AGI.swf API used by class_79.
 * Mirrors the tiny subset of AGI methods that Bubble Tanks Arenas calls.
 */
export class LocalAgiBridge implements AgiBridge {
  private devKey = '';
  private gameKey = '';

  public init(devKey: string, gameKey: string): void {
    this.devKey = devKey;
    this.gameKey = gameKey;
  }

  public retrieveGameData(callback: (payload: AgiRetrieveResponse) => void): void {
    const params = new URLSearchParams(window.location.search);
    const startupData = params.get('agiData') ?? '';

    callback({
      success: startupData.length > 0,
      data: startupData,
    });
  }

  public initAGUI(_params: { naviX: number; naviY: number }): void {
    // No-op: in Flash this created off-screen ArmorGames navigation UI.
  }

  public showGameShareSubmit(..._args: unknown[]): void {
    // No-op in Phaser migration bootstrap.
  }

  public closeAGUI(): void {
    // No-op in Phaser migration bootstrap.
  }
}
