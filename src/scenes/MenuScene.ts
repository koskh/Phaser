import { Scene, GameObjects } from 'phaser';
import {
  ASSETS_IMG,
  ASSETS_SPRITES,
  EAssetsImg,
  EAssetsSprites,
} from '../assets';
import { HALF_SCREEN } from '../config';

export default class MenuScene extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;

  constructor() {
    super('MenuScene');
  }

  preload() {
    this.showProgressBar();

    Object.keys(ASSETS_IMG).map((assetKey) => {
      const { url } = ASSETS_IMG[assetKey as EAssetsImg];
      this.load.image(assetKey, url);
    });

    Object.keys(ASSETS_SPRITES).map((assetKey) => {
      const { url, width, height } = ASSETS_SPRITES[assetKey as EAssetsSprites];

      this.load.spritesheet(assetKey, url, {
        frameWidth: width,
        frameHeight: height,
      });
    });
  }
  create() {
    // this.scene.start('Game');
  }

  showProgressBar() {
    const textureKey = 'progress_bar';
    this.load.image(textureKey, 'assets/progress_bar.png');

    const { width: w, height: h } = this.textures.get(textureKey).get();

    const img = this.add
      .image(HALF_SCREEN.WIDTH - w / 2, HALF_SCREEN.WIDTH - h / 2, textureKey)
      .setOrigin(0);

    this.load.on('progress', (v: number) =>
      img.setCrop(0, 0, Math.ceil(v * w), h),
    );
  }
}
