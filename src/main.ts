import * as Phaser from 'phaser';
import { BTAGameWorldScene } from './game/scenes/BTAGameWorldScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: 'game-root',
  backgroundColor: '#0b1020',
  scene: [BTAGameWorldScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

void new Phaser.Game(config);
