/* eslint-disable @typescript-eslint/no-this-alias */
import Phaser from 'phaser';

export let gameScene: Phaser.Scene;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    gameScene = this;
  }

  create() {
    this.scene.run('UI');
    this.scene.run('GameBoard');

    this.events.once(Phaser.Scenes.Events.RENDER, () => {
      this.startGame();
    });
  }

  startGame() {
    // resetScoreAndLevel(gameConfig.rows, gameConfig.cols, gameConfig.variations);
  }
}
