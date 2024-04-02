/* eslint-disable @typescript-eslint/no-this-alias */
import Phaser from 'phaser';

export let gameScene: Phaser.Scene;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    gameScene = this;
  }

  preload() {}

  create() {}

  startGame() {
    // resetScoreAndLevel(gameConfig.rows, gameConfig.cols, gameConfig.variations);
  }
}
