import { Scene } from 'phaser';

export default class GameOverScene extends Scene {
  constructor() {
    super('GameOverScene');
  }

  preload() {}

  create() {
    this.add
      .text(this.sys.canvas.width / 2, 460, 'Game over', {
        fontFamily: 'Arial Black',
        fontSize: 64,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center',
      })
      .setOrigin(0.5);

    this.add
      .text(this.sys.canvas.width / 2, 520, 'Click here to restart', {
        fontFamily: 'Arial Black',
        fontSize: 42,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center',
      })
      .setOrigin(0.5);

    this.input.once('pointerdown', () => {
      this.scene.start('Game');
    });
  }
}
