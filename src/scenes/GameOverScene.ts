import { Scene } from 'phaser';

export default class GameOverScene extends Scene {
  constructor() {
    super('GameOverScene');
  }

  preload() {}

  create({
    score,
    turns,
    isWin,
  }: {
    score: number;
    turns: number;
    isWin: boolean;
  }) {
      const winColor = '#1dce1d';
      const loseColor = '#e31c1c';

      this.add
        .text(this.sys.canvas.width / 2, 300, 'Game over', {
          fontFamily: 'Arial Black',
          fontSize: 72,
          color: '#ffffff',
          stroke: '#000000',
          strokeThickness: 8,
          align: 'center',
        })
        .setOrigin(0.5)
        .setColor(isWin ? winColor : loseColor);

    this.add
      .text(this.sys.canvas.width / 2, 460, `You ${isWin ? 'win' : ' lose'}`, {
        fontFamily: 'Arial Black',
        fontSize: 72,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center',
      })
      .setOrigin(0.5)
      .setColor(isWin ? winColor : loseColor);

    this.add
      .text(
        this.sys.canvas.width / 2,
        520,
        `Your score is: ${score} for ${turns} turns`,
        {
          fontFamily: 'Arial Black',
          fontSize: 42,
          color: '#ffffff',
          stroke: '#000000',
          strokeThickness: 8,
          align: 'center',
        },
      )
      .setOrigin(0.5)
      .setColor(isWin ? winColor : loseColor);

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
