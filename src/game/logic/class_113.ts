import * as Phaser from 'phaser';
import { TankView } from '../entities/tank/TankView';

/**
 * Transitional port of migrated-ts/class_113.
 *
 * IMPORTANT: this intentionally keeps legacy naming and frame-based logic so we can
 * migrate callers incrementally before deeper refactors.
 */
export interface TankInputState {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
  targetX: number;
  targetY: number;
}

export class class_113 {
  // MovieClip-like transform state now owned by logic.
  public x = 0;
  public y = 0;
  public rotation = 0;
  public visible = true;

  public intHitTimer = -1;
  public var_232 = -1;
  public var_248: any[] = [];
  public arrSeekerCarrierRefs: any[] = [];
  public var_410 = false;
  public objMovementData: Record<string, any> = {};
  public intTankLife = 100;
  public arrPrimaryWeapons: any[] = [];
  public var_345 = false;
  public objData: any = null;
  public arrSecondaryWeapons: any[] = [];
  public blnShieled = false;
  public blnOkToTeleport = true;
  public intState = 1;
  public funCallback: ((tank: class_113, tankType: number) => void) | null = null;
  public var_349 = 0;

  private static readonly BASE_MOVE_SPEED = 0.26;
  private static readonly BASE_TURN_SPEED = 0.2;

  private currentInput: TankInputState = {
    up: false,
    down: false,
    left: false,
    right: false,
    targetX: 0,
    targetY: 0,
  };

  public constructor(public readonly view: TankView) {
    this.syncView();
  }

  /**
   * New Phaser-compatible update entry-point.
   */
  public update(_deltaMs: number): void {
    this.Run();
    this.syncView();
  }

  public Run(): void {
    switch (this.intState) {
      case 1:
        this.blnOkToTeleport = true;
        this.Move();
        this.method_642();
        this.method_472();
        break;
      case 2:
        this.method_637();
        this.method_472();
        break;
      default:
        break;
    }

    this.method_585();
  }

  public Move(): void {
    const speed = (this.objData?.numSpeed as number | undefined) ?? class_113.BASE_MOVE_SPEED;

    const horizontalAxis = Number(this.currentInput.right) - Number(this.currentInput.left);
    const verticalAxis = Number(this.currentInput.down) - Number(this.currentInput.up);

    if (horizontalAxis !== 0 || verticalAxis !== 0) {
      const angle = Math.atan2(verticalAxis, horizontalAxis);
      this.x += Math.cos(angle) * speed;
      this.y += Math.sin(angle) * speed;

      const targetRotation = Phaser.Math.RadToDeg(angle);
      const turnSpeed = (this.objData?.numSpeed as number | undefined)
        ? Math.max(2.5, speed * 12)
        : class_113.BASE_TURN_SPEED * 16;
      this.rotation = Phaser.Math.Angle.RotateTo(
        Phaser.Math.DegToRad(this.rotation),
        Phaser.Math.DegToRad(targetRotation),
        Phaser.Math.DegToRad(turnSpeed),
      );
      this.rotation = Phaser.Math.RadToDeg(this.rotation);
    }

    this.view.aimAtWorldPoint(this.currentInput.targetX, this.currentInput.targetY);
  }


  public setInput(inputData: TankInputState): void {
    this.currentInput = inputData;
  }

  public SetCallback(param1: (tank: class_113, tankType: number) => void): void {
    this.funCallback = param1;
  }

  public Damage(param1: number): void {
    if (this.blnShieled) {
      return;
    }

    this.intTankLife -= param1;
    if (this.intTankLife <= 0) {
      this.intTankLife = 0;
      this.Deactivate();
    }
  }

  public AddLife(param1: number): void {
    this.intTankLife += param1;
    if (this.objData?.numLife != null && this.intTankLife > this.objData.numLife) {
      this.intTankLife = this.objData.numLife;
    }
  }

  public RegisterPrimaryWeapon(param1: any): void {
    this.arrPrimaryWeapons.push(param1);
    if (typeof param1?.Setup === 'function') {
      param1.Setup(this);
    }
  }

  public RegisterSecondaryWeapon(param1: any): void {
    this.arrSecondaryWeapons.push(param1);
    if (typeof param1?.Setup === 'function') {
      param1.Setup(this);
    }
  }

  public StunMe(param1 = 0): void {
    if (param1 > 0) {
      this.var_345 = true;
      this.var_349 = param1;
      this.intState = 2;
    }
  }

  public method_472(): void {
    if (this.var_232 > 0) {
      this.var_232 -= 1;
    } else if (this.var_232 === 0) {
      this.method_440();
      this.var_232 = -1;
    }
  }

  public method_440(): void {
    this.var_248 = [];
  }

  public method_642(): void {
    for (const weapon of this.arrPrimaryWeapons) {
      if (typeof weapon?.Run === 'function') {
        weapon.Run();
      }
    }
  }

  public method_585(): void {
    if (this.intHitTimer > 0) {
      this.intHitTimer -= 1;
    } else if (this.intHitTimer === 0) {
      this.intHitTimer = -1;
    }
  }

  public method_637(): void {
    if (this.var_345) {
      if (this.var_349 <= 0) {
        this.intState = 1;
        this.var_345 = false;
      } else {
        this.var_349 -= 1;
      }
    } else {
      this.intState = 1;
    }
  }

  public Deactivate(): void {
    this.arrPrimaryWeapons = [];
    this.arrSecondaryWeapons = [];
    this.objData = null;
    this.objMovementData = {};
    this.var_410 = true;
    this.funCallback?.(this, 1);
  }

  private syncView(): void {
    this.view.x = this.x;
    this.view.y = this.y;
    this.view.angle = this.rotation;
    this.view.visible = this.visible;
  }
}
