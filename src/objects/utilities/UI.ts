/* eslint-disable @typescript-eslint/no-this-alias */
import { GameObjects, Scene } from 'phaser';
import { EAssetsImg } from '../../assets';
import {
  EBoosterType,
  HALF_SCREEN,
  INITIAL_BOARD_SCREEN,
  INITIAL_TURNS,
  INITIAL_RESETS,
} from '../../config';
import { gameManager } from '../../game/Manager';

export let scoreText: GameObjects.Text,
  turnText: GameObjects.Text,
  resetText: GameObjects.Text,
  boosterText: GameObjects.Text;
export let teleportBtn: GameObjects.Image;
export let ui: Phaser.Scene;

export default class UI extends Phaser.Scene {
  teleport: GameObjects.Image;
  public titleCurrentBuster: GameObjects.Text;

  constructor() {
    super('UI');

    ui = this;
  }

  preload() {}

  create() {
    teleportBtn = this.add
      .image(85, INITIAL_BOARD_SCREEN.HEIGHT + 360, EAssetsImg.TELEPORT)
      .setDepth(1)
      .setOrigin(0, 0)
      .setScale(0.5);
    teleportBtn.setInteractive({ useHandCursor: true });
    teleportBtn.on('pointerup', () =>
      gameManager.setBooster(EBoosterType.TELEPORT),
    );

    const scoreBlockX = HALF_SCREEN.WIDTH + 300,
      scoreBlockY = INITIAL_BOARD_SCREEN.HEIGHT - 200;

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

    boosterText = this.add
      .text(50, INITIAL_BOARD_SCREEN.HEIGHT - 150, 'Booster: none', {
        font: 'bold 53px Geneva',
      })
      .setDepth(1);
  }
}
