import { Scene } from 'phaser';
import { resetScoreAndLevel } from '../state/gameControllers';

import gameConfig from '../config';

export class Game extends Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.scene.run('UI');
    this.scene.run('GameBoard');

    this.events.once(Phaser.Scenes.Events.RENDER, () => {
      this.startGame();
    });
  }

  startGame() {
    resetScoreAndLevel(gameConfig.rows, gameConfig.cols, gameConfig.variations);
  }
}
