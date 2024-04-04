/* eslint-disable @typescript-eslint/no-this-alias */
import { GameObjects, Scene } from 'phaser';
import { EAssetsImg } from '../assets';
import { EBoosterType, INITIAL_BOARD_SCREEN } from '../config';
import { gameManager } from '../game/Manager';

export let ui: Phaser.Scene;

export default class UI extends Scene {
  teleport: GameObjects.Image;

  // titleCurrentBuster: GameObjects.Text;

  constructor() {
    super('UI');

    ui = this;
  }

  preload() {}

  create() {
    const resetBtn = this.add
      .image(85, INITIAL_BOARD_SCREEN.HEIGHT + 120, EAssetsImg.RESET)
      .setDepth(1)
      .setOrigin(0, 0)
      .setScale(0.5);
    resetBtn.setInteractive({ useHandCursor: true });
    resetBtn.on('pointerup', () => gameManager.reset());

    const teleportBtn = this.add
      .image(85, INITIAL_BOARD_SCREEN.HEIGHT + 360, EAssetsImg.TELEPORT)
      .setDepth(1)
      .setOrigin(0, 0)
      .setScale(0.5);
    teleportBtn.setInteractive({ useHandCursor: true });
    teleportBtn.on('pointerup', () =>
      gameManager.setBooster(EBoosterType.TELEPORT),
    );
  }
}
