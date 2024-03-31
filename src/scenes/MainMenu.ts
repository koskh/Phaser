import { Scene, GameObjects } from 'phaser';
import { EAssets } from '../assets';

export class MainMenu extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;

  constructor() {
    super('MainMenu');
  }

  create() {
    this.background = this.add.image(
      this.sys.canvas.width / 2,
      this.sys.canvas.height / 2,
      EAssets.BACK_GROUND,
    );

    this.logo = this.add.image(this.sys.canvas.width / 2, 300, EAssets.LOGO);

    this.title = this.add
      .text(this.sys.canvas.width / 2, 460, 'Click here to start game', {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center',
      })
      .setOrigin(0.5);

    this.scene.start('Game');

    // this.input.once('pointerdown', () => {
    //   this.scene.start('Game');
    // });
  }
}
