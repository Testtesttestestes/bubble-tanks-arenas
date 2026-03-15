import { AgiBridge, LocalAgiBridge } from './AgiBridge';

export type PortalName = 'kongregate' | 'armorgames' | 'herointeractive' | 'candystand' | 'newgrounds' | 'unknown';

export interface OriginalStartupState {
  portal: PortalName;
  agiDataReady: boolean;
  agiData: string;
}

/**
 * Restores the original class_79 startup order around AGI:
 * 1) portal detection (var_184)
 * 2) AGI init + retrieveGameData + initAGUI offscreen
 * 3) keep preloader independent from AGI completion
 */
export class OriginalStartupPipeline {
  private readonly agi: AgiBridge;
  private readonly state: OriginalStartupState;

  public constructor(agi: AgiBridge = new LocalAgiBridge()) {
    this.agi = agi;
    this.state = {
      portal: 'unknown',
      agiDataReady: false,
      agiData: '',
    };
  }

  public bootstrap(): OriginalStartupState {
    this.state.portal = this.detectPortal(window.location.hostname.toLowerCase());

    // Keys from class_79 constructor: var_526 and var_510
    this.agi.init('0e7119b0e84444cfdd62a971cf60d6c4', 'bta');
    this.agi.retrieveGameData((payload) => {
      if (!payload.success) {
        return;
      }
      this.state.agiDataReady = true;
      this.state.agiData = payload.data;
    });

    // class_79.loadComplete(): initAGUI({ naviX: -500, naviY: -500 })
    this.agi.initAGUI({ naviX: -500, naviY: -500 });

    return { ...this.state };
  }

  private detectPortal(host: string): PortalName {
    if (host.includes('kongregate.com') || host.includes('kongregatetrunk.com') || host.includes('andkon.com')) {
      return 'kongregate';
    }
    if (host.includes('armorgames.com')) {
      return 'armorgames';
    }
    if (host.includes('herointeractive.com')) {
      return 'herointeractive';
    }
    if (host.includes('candystand.com')) {
      return 'candystand';
    }
    if (host.includes('newgrounds.com')) {
      return 'newgrounds';
    }
    return 'unknown';
  }
}
