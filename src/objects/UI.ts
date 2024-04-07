/* eslint-disable @typescript-eslint/no-this-alias */
import { GameObjects } from 'phaser';
import { EAssetsImg } from '../assets';
import {
  DEFAULT_SCALE,
  EBoosterType,
  HALF_SCREEN,
  INITIAL_BOARD_SCREEN,
  INITIAL_TURNS,
} from '../config';
import { gameManager } from '../game/Manager';

export let scoreText: GameObjects.Text,
  turnText: GameObjects.Text,
  progressBarImg: GameObjects.Image;

export let teleportBtn: GameObjects.Image;
export let bombBtn: GameObjects.Image;
export let ui: Phaser.Scene;

export default class UI extends Phaser.Scene {
  constructor() {
    super('UI');
    ui = this;
  }

  preload() {}

  create() {
    const progressBlockX = HALF_SCREEN.WIDTH,
      progressBlockY = INITIAL_BOARD_SCREEN.HEIGHT - 325;

    this.add
      .image(progressBlockX, progressBlockY, EAssetsImg.PROGRESS_BG)
      .setDepth(1)
      .setOrigin(0.5)
      .setScale(DEFAULT_SCALE);

    progressBarImg = this.add
      .image(progressBlockX, progressBlockY + 35, EAssetsImg.PROGRESS_BAR)
      .setDepth(2)
      .setOrigin(0.5)
      .setScale(DEFAULT_SCALE)
      .setCrop(0);

    const scoreBlockX = HALF_SCREEN.WIDTH + 515,
      scoreBlockY = INITIAL_BOARD_SCREEN.HEIGHT - 290;

    this.add
      .image(scoreBlockX, scoreBlockY, EAssetsImg.SCORE)
      .setDepth(1)
      .setOrigin(0.5)
      .setScale(DEFAULT_SCALE);

    scoreText = this.add
      .text(scoreBlockX, scoreBlockY, '0', {
        font: 'bold 52px Geneva',
      })
      .setOrigin(0.5)
      .setDepth(2);

    const turnsBlockX = HALF_SCREEN.WIDTH - 500,
      turnsBlockY = scoreBlockY;

    this.add
      .image(turnsBlockX, turnsBlockY, EAssetsImg.TURNS)
      .setDepth(1)
      .setOrigin(0.5)
      .setScale(DEFAULT_SCALE);

    turnText = this.add
      .text(turnsBlockX, turnsBlockY, `${INITIAL_TURNS}`, {
        font: 'bold 52px Geneva',
      })
      .setOrigin(0.5)
      .setDepth(2);

    this.add.rectangle(
      HALF_SCREEN.WIDTH,
      INITIAL_BOARD_SCREEN.HEIGHT - 290,
      INITIAL_BOARD_SCREEN.WIDTH * 3,
      200,
      0xa1a1a1,
    );

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
      .setScale(DEFAULT_SCALE);
    teleportBtn.setInteractive({ useHandCursor: true });
    teleportBtn.on('pointerup', () =>
      gameManager.setBooster(EBoosterType.TELEPORT),
    );

      this.add
        .text(teleportBlockX, teleportBlockY + 300, `Bomb`, {
          font: '44px Geneva',
        })
        .setOrigin(0.5)
        .setDepth(2);
      bombBtn = this.add
        .image(teleportBlockX, teleportBlockY + 300, EAssetsImg.BOOSTER)
        .setDepth(1)
        .setOrigin(0.5)
        .setScale(DEFAULT_SCALE);
      bombBtn.setInteractive({ useHandCursor: true });
      bombBtn.on('pointerup', () => gameManager.setBooster(EBoosterType.BOMB));
  }
}
