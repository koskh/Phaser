/* eslint-disable @typescript-eslint/no-this-alias */
import { GameObjects, Scene } from 'phaser';
import { EAssetsImg } from '../../assets';
import {
  EBoosterType,
  INITIAL_BOARD_SCREEN,
  INITIAL_MOVES,
  INITIAL_RESETS,
} from '../../config';
import { gameManager } from '../../game/Manager';

export let scoreText: GameObjects.Text,
  moveText: GameObjects.Text,
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
    // const resetBtn = this.add
    //   .image(85, INITIAL_BOARD_SCREEN.HEIGHT + 120, EAssetsImg.RESET)
    //   .setDepth(1)
    //   .setOrigin(0, 0)
    //   .setScale(0.5);
    // resetBtn.setInteractive({ useHandCursor: true });
    // resetBtn.on('pointerup', () => gameManager.reset());

    teleportBtn = this.add
      .image(85, INITIAL_BOARD_SCREEN.HEIGHT + 360, EAssetsImg.TELEPORT)
      .setDepth(1)
      .setOrigin(0, 0)
      .setScale(0.5);
    teleportBtn.setInteractive({ useHandCursor: true });
    teleportBtn.on('pointerup', () =>
      gameManager.setBooster(EBoosterType.TELEPORT),
    );

    scoreText = this.add
      .text(50, INITIAL_BOARD_SCREEN.HEIGHT - 250, 'Score: 0', {
        font: 'bold 53px Geneva',
      })
      .setDepth(1);
    moveText = this.add.text(
      50,
      INITIAL_BOARD_SCREEN.HEIGHT - 200,
      `Moves: ${INITIAL_MOVES}`,
      {
        font: 'bold 53px Geneva',
      },
    );
    boosterText = this.add
      .text(50, INITIAL_BOARD_SCREEN.HEIGHT - 150, 'Booster: none', {
        font: 'bold 53px Geneva',
      })
      .setDepth(1);
    resetText = this.add
      .text(
        50,
        INITIAL_BOARD_SCREEN.HEIGHT - 100,
        `Resets: ${INITIAL_RESETS}`,
        {
          font: 'bold 53px Geneva',
        },
      )
      .setDepth(1);
  }
}
