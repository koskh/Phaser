import { Scene } from 'phaser';
import { EAssets } from '../assets';

import Tile from '../objects/Tile';

import { resetScoreAndLevel } from '../state/gameControllers';

import gameConfig from '../config';

export class Game extends Scene {
  background: Phaser.GameObjects.Image;
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
