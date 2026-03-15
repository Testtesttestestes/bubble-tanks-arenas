import * as Phaser from 'phaser';
import { TankView } from '../entities/tank/TankView';

interface WeaponLike {
  intObjID?: number;
  blnSeekerCarrier?: boolean;
  Setup?: (owner: class_113) => void;
  Run?: () => void;
  Deactivate?: () => void;
}

interface TankDataLike {
  numLife: number;
  numSpeed: number;
  intType?: number;
  arrTankDetails?: Array<{ x: number; y: number }>;
  numBubblesReturned?: number;
}

export interface TankInputState {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
  targetX: number;
  targetY: number;
}

export class class_113 {
  public x = 0;
  public y = 0;
  public rotation = 0;
  public visible = true;

  public intHitTimer = -1;
  public var_232 = -1;
  public var_248: unknown[] = [];
  public arrSeekerCarrierRefs: WeaponLike[] = [];
  public var_410 = false;
  public objMovementData: Record<string, number | boolean> = {};
  public intTankLife = 100;
  public arrPrimaryWeapons: WeaponLike[] = [];
  public var_345 = false;
  public objData: TankDataLike = { numLife: 100, numSpeed: 1 };
  public arrSecondaryWeapons: WeaponLike[] = [];
  public blnShieled = false;
  public blnOkToTeleport = true;
  public intState = 1;
  public funCallback: ((tank: class_113, tankType: number) => void) | null = null;
  public var_349 = 0;

  private static readonly BASE_MOVE_SPEED = 1.8;

  private currentInput: TankInputState = {
    up: false,
    down: false,
    left: false,
    right: false,
    targetX: 0,
    targetY: 0,
  };

  public constructor(public readonly view: TankView, data?: Partial<TankDataLike>) {
    this.Setup({
      numLife: data?.numLife ?? 100,
      numSpeed: data?.numSpeed ?? class_113.BASE_MOVE_SPEED,
      intType: data?.intType ?? 1,
      arrTankDetails: data?.arrTankDetails ?? [],
      numBubblesReturned: data?.numBubblesReturned ?? 0,
    });
    this.syncView();
  }

  public update(): void {
    this.Run();
    this.syncView();
  }

  public setInput(inputData: TankInputState): void {
    this.currentInput = inputData;
  }

  public Setup(param1: TankDataLike): void {
    this.intState = 1;
    this.intHitTimer = -1;
    this.var_410 = false;
    this.objData = param1;
    this.intTankLife = this.objData.numLife;
    this.arrPrimaryWeapons = [];
    this.arrSecondaryWeapons = [];
    this.arrSeekerCarrierRefs = [];
    this.var_248 = [];
    this.blnShieled = false;
    this.var_232 = -1;
    this.blnOkToTeleport = true;
    this.var_345 = false;
    this.var_349 = 0;
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
    const speed = this.objData?.numSpeed ?? class_113.BASE_MOVE_SPEED;
    const horizontalAxis = Number(this.currentInput.right) - Number(this.currentInput.left);
    const verticalAxis = Number(this.currentInput.down) - Number(this.currentInput.up);

    if (horizontalAxis !== 0 || verticalAxis !== 0) {
      const angle = Math.atan2(verticalAxis, horizontalAxis);
      this.x += Math.cos(angle) * speed;
      this.y += Math.sin(angle) * speed;
      this.rotation = Phaser.Math.RadToDeg(angle);
    }

    this.view.aimAtWorldPoint(this.currentInput.targetX, this.currentInput.targetY);
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
    if (this.intTankLife > this.objData.numLife) {
      this.intTankLife = this.objData.numLife;
    }
  }

  public RegisterPrimaryWeapon(param1: WeaponLike): void {
    this.arrPrimaryWeapons.push(param1);
    param1.Setup?.(this);
    if (param1.blnSeekerCarrier) {
      this.arrSeekerCarrierRefs.push(param1);
    }
  }

  public RegisterSecondaryWeapon(param1: WeaponLike): void {
    this.arrSecondaryWeapons.push(param1);
    param1.Setup?.(this);
  }

  public CheckForTeleports(): void {
    let swapRef: WeaponLike | undefined;
    for (let i = 0; i < this.arrSecondaryWeapons.length; i += 1) {
      if (this.arrSecondaryWeapons[i]?.intObjID === 3011 && i !== 0) {
        swapRef = this.arrSecondaryWeapons[0];
        this.arrSecondaryWeapons[0] = this.arrSecondaryWeapons[i];
        this.arrSecondaryWeapons[i] = swapRef;
      }

      if (
        this.arrSecondaryWeapons[i]?.intObjID === 3012 &&
        i !== this.arrSecondaryWeapons.length - 1
      ) {
        swapRef = this.arrSecondaryWeapons[this.arrSecondaryWeapons.length - 1];
        this.arrSecondaryWeapons[this.arrSecondaryWeapons.length - 1] =
          this.arrSecondaryWeapons[i];
        this.arrSecondaryWeapons[i] = swapRef;
      }
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
      weapon.Run?.();
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
    const tankType = this.objData.intType ?? 1;
    for (const weapon of this.arrPrimaryWeapons) {
      weapon.Deactivate?.();
    }

    for (const weapon of this.arrSecondaryWeapons) {
      weapon.Deactivate?.();
    }

    this.arrPrimaryWeapons = [];
    this.arrSecondaryWeapons = [];
    this.objMovementData = {};
    this.var_410 = true;
    this.funCallback?.(this, tankType);
  }

  private syncView(): void {
    this.view.x = this.x;
    this.view.y = this.y;
    this.view.angle = this.rotation;
    this.view.visible = this.visible;
  }
}
