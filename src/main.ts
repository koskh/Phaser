import gameScene from './scenes/GameScene';
import MenuScene from './scenes/MenuScene';

import UI from './objects/utilities/UI';

import { BACKGROUND } from './config';

import { Game, Types } from 'phaser';

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: BACKGROUND.WIDHT,
  height: BACKGROUND.HEIGHT,
  parent: 'game-container',
  backgroundColor: '#a1a1a1',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [MenuScene, gameScene, UI],
};

export default new Game(config);
