import { Scene, GameObjects } from 'phaser';
import {
  ASSETS_IMG,
  ASSETS_SPRITES,
  EAssetsImg,
  EAssetsSprites,
} from '../assets';

export default class MenuScene extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;

  constructor() {
    super('MenuScene');
  }

  preload() {
    Object.keys(ASSETS_IMG).map((assetKey) => {
      const { url } = ASSETS_IMG[assetKey as EAssetsImg];
      this.load.image(assetKey, url);
    });

    Object.keys(ASSETS_SPRITES).map((assetKey) => {
      // this.load.image(assetKey, ASSETS_IMG[assetKey as EAssetsSprites].url);
      const { url, width, height } = ASSETS_SPRITES[assetKey as EAssetsSprites];

      this.load.spritesheet(assetKey, url, {
        frameWidth: width,
        frameHeight: height,
      });
    });
  }
  create() {
    this.logo = this.add.image(this.sys.canvas.width / 2, 300, EAssetsImg.LOGO);

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
