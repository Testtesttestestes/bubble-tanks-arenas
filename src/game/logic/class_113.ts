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

/**
 * Runtime-adapted port of migrated-ts/class_113.ts.
 *
 * Методики и порядок вызовов сохранены по оригинальной логике класса из Flash-версии,
 * а визуальный стейт синхронизируется через TankView.
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> aad03ca55ed52d73e0d61dd08bceb7c9e8081791
  public constructor(public readonly view: TankView, data?: Partial<TankDataLike>) {
    this.Setup({
      numLife: data?.numLife ?? 100,
      numSpeed: data?.numSpeed ?? 1.8,
      intType: data?.intType ?? 1,
      arrTankDetails: data?.arrTankDetails ?? [],
      numBubblesReturned: data?.numBubblesReturned ?? 0,
    });
<<<<<<< HEAD
>>>>>>> aad03ca55ed52d73e0d61dd08bceb7c9e8081791
=======
>>>>>>> aad03ca55ed52d73e0d61dd08bceb7c9e8081791
    this.syncView();
  }

  public update(): void {
    this.Run();
    this.syncView();
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
    this.MoveWanderSetup();
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> aad03ca55ed52d73e0d61dd08bceb7c9e8081791
    this.method_406();
  }

  public MoveWanderSetup(): void {
    this.objMovementData = {
      intFramesToTurn: 0,
      intMinFramesToHoldTurning: 0,
      numAmountToTurn: 0,
      blnSafetyTurn: false,
      numLastAngle: this.method_286(),
    };
  }

  public method_406(): void {
    const moveDistance = this.objData.numSpeed;
    const angleRad = Phaser.Math.DegToRad(this.rotation);

    this.x += Math.cos(angleRad) * moveDistance;
    this.y += Math.sin(angleRad) * moveDistance;

    const turnFrames = Number(this.objMovementData.intFramesToTurn ?? 0);
    if (turnFrames > 0) {
      this.objMovementData.intFramesToTurn = turnFrames - 1;
      this.rotation += Number(this.objMovementData.numAmountToTurn ?? 0);
      this.objMovementData.numLastAngle = this.method_286();
      return;
    }

    const holdFrames = Number(this.objMovementData.intMinFramesToHoldTurning ?? 0);
    if (holdFrames > 0) {
      this.objMovementData.intMinFramesToHoldTurning = holdFrames - 1;
      return;
    }

    if (this.RandNum(0, 1000) < 20) {
      const randomTurn = this.RandNum(-100, 100);
      const speedTurn = this.objData.numSpeed * 1.5;
      this.objMovementData.intFramesToTurn = Math.max(
        1,
        Math.round(Math.abs(randomTurn) / speedTurn),
      );
      this.objMovementData.numAmountToTurn =
        speedTurn * (randomTurn === 0 ? 1 : Math.sign(randomTurn));
      this.objMovementData.blnSafetyTurn = false;
    }
  }

  public method_286(): number {
    return Phaser.Math.RadToDeg(Math.atan2(this.y, this.x));
  }

  private RandNum(min: number, max: number): number {
    return Math.round(Math.random() * (max - min + 0.8) + min - 0.4);
<<<<<<< HEAD
>>>>>>> aad03ca55ed52d73e0d61dd08bceb7c9e8081791
=======
>>>>>>> aad03ca55ed52d73e0d61dd08bceb7c9e8081791
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
