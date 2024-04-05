/* eslint-disable @typescript-eslint/no-this-alias */
import Phaser from 'phaser';
import GameManager from '../game/Manager';
import { INITIAL_BOARD_SCREEN, TILE } from '../config';
import { EAssetsImg } from '../assets';

export let gameScene: Phaser.Scene;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    gameScene = this;
  }

  preload() {}

  create() {
    this.add
      .image(
        INITIAL_BOARD_SCREEN.WIDTH - TILE.WIDTH,
        INITIAL_BOARD_SCREEN.HEIGHT - TILE.HEIGHT * 1.05,
        EAssetsImg.BACKYARD_TOP,
      )
      .setOrigin(0, 0)
      .setScale(0.85)
      .setDepth(20);

    this.add
      .image(
        INITIAL_BOARD_SCREEN.WIDTH - TILE.WIDTH,
        INITIAL_BOARD_SCREEN.HEIGHT - TILE.HEIGHT * 0.55,
        EAssetsImg.BACKYARD,
      )
      .setOrigin(0, 0)
      .setScale(0.85)
      .setDepth(1);

    this.scene.run('UI');

    new GameManager();
  }
}
