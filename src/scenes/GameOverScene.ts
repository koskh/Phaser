import { Scene } from 'phaser';

export default class GameOverScene extends Scene {
  constructor() {
    super('GameOverScene');
  }

  preload() {}

  create({ score, isWin }: { score: number; isWin: boolean }) {
    this.add
      .text(this.sys.canvas.width / 2, 300, 'Game over', {
        fontFamily: 'Arial Black',
        fontSize: 72,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center',
      })
      .setOrigin(0.5);

    this.cameras.main.setBackgroundColor(isWin ? '#1dce1d' : '#e31c1c');

    this.add
      .text(
        this.sys.canvas.width / 2,
        460,
        `You are ${isWin ? 'win' : ' lose'}`,
        {
          fontFamily: 'Arial Black',
          fontSize: 72,
          color: '#ffffff',
          stroke: '#000000',
          strokeThickness: 8,
          align: 'center',
        },
      )
      .setOrigin(0.5);

    this.add
      .text(this.sys.canvas.width / 2, 520, `Your score is: ${score}`, {
        fontFamily: 'Arial Black',
        fontSize: 42,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center',
      })
      .setOrigin(0.5);

    this.add
      .text(this.sys.canvas.width / 2, 720, 'Click  to restart', {
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
