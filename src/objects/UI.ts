/* eslint-disable @typescript-eslint/no-this-alias */
import { GameObjects } from 'phaser';
import { EAssetsImg } from '../assets';
import {
  EBoosterType,
  HALF_SCREEN,
  INITIAL_BOARD_SCREEN,
  INITIAL_TURNS,
} from '../config';
import { gameManager } from '../game/Manager';

export let scoreText: GameObjects.Text,
  turnText: GameObjects.Text,
  resetText: GameObjects.Text;

export let teleportBtn: GameObjects.Image;
export let ui: Phaser.Scene;

export default class UI extends Phaser.Scene {
  constructor() {
    super('UI');
    ui = this;
  }

  preload() {}

  create() {
    const scoreBlockX = HALF_SCREEN.WIDTH + 300,
      scoreBlockY = INITIAL_BOARD_SCREEN.HEIGHT - 275;

    this.add
      .image(scoreBlockX, scoreBlockY, EAssetsImg.SCORE)
      .setDepth(1)
      .setOrigin(0.5)
      .setScale(0.5);

    scoreText = this.add
      .text(scoreBlockX, scoreBlockY, '0', {
        font: 'bold 52px Geneva',
      })
      .setOrigin(0.5)
      .setDepth(2);

    const turnsBlockX = HALF_SCREEN.WIDTH - 300,
      turnsBlockY = scoreBlockY;

    this.add
      .image(turnsBlockX, turnsBlockY, EAssetsImg.TURNS)
      .setDepth(1)
      .setOrigin(0.5)
      .setScale(0.5);

    turnText = this.add
      .text(turnsBlockX, turnsBlockY, `${INITIAL_TURNS}`, {
        font: 'bold 52px Geneva',
      })
      .setOrigin(0.5)
      .setDepth(2);

    const teleportBlockX = 170,
      teleportBlockY = INITIAL_BOARD_SCREEN.HEIGHT + 360;

    this.add
      .text(teleportBlockX, teleportBlockY, `Teleport`, {
        font: '44px Geneva',
      })
      .setOrigin(0.5)
      .setDepth(2);

    teleportBtn = this.add
      .image(teleportBlockX, teleportBlockY, EAssetsImg.BOOSTER)
      .setDepth(1)
      .setOrigin(0.5)
      .setScale(0.5);
    teleportBtn.setInteractive({ useHandCursor: true });
    teleportBtn.on('pointerup', () =>
      gameManager.setBooster(EBoosterType.TELEPORT),
    );
  }
}
