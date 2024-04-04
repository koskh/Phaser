/* eslint-disable @typescript-eslint/no-this-alias */
import { GameObjects, Scene } from 'phaser';
import { EAssetsImg } from '../assets';
import { EBoosterType, INITIAL_BOARD_SCREEN } from '../config';
import { gameManager } from '../game/Manager';

export let ui: Phaser.Scene;

export default class UI extends Scene {
  teleport: GameObjects.Image;

  // title: GameObjects.Text;

  constructor() {
    super('UI');

    ui = this;
  }

  preload() {}

  create() {
    // this.title = this.add
    //   .text(200, INITIAL_BOARD_SCREEN.HEIGHT + 120, 'Reset', {
    //     fontFamily: 'Arial Black',
    //     fontSize: 38,
    //     color: '#ffffff',
    //     stroke: '#000000',
    //     strokeThickness: 8,
    //     align: 'center',
    //   })
    //   .setOrigin(0.5);
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
