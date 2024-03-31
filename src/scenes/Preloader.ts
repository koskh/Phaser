import { Scene } from 'phaser';
import { ASSETS, EAssets } from '../assets';
import {
  progressBarInnerProps,
  progressBarOuterProps,
} from '../objects/ProgressBar';

export class Preloader extends Scene {
  constructor() {
    super('Preloader');
  }

  init() {
      this.add.image(0, 0, EAssets.BACK_GROUND).setOrigin(0);

    this.add
      .rectangle(
        progressBarOuterProps.x,
        progressBarOuterProps.y,
        progressBarOuterProps.width,
        progressBarOuterProps.height,
      )
      .setStrokeStyle(
        progressBarOuterProps.stroke,
        progressBarOuterProps.color,
      );
    const progressBar = this.add.rectangle(
      progressBarInnerProps.x,
      progressBarInnerProps.y,
      progressBarInnerProps.initialWidth,
      progressBarInnerProps.height,
      progressBarInnerProps.color,
    );

    this.load.on('progress', (progress: number) => {
      progressBar.width = progressBarInnerProps.maxWidthWidth * progress;
    });
  }

  preload() {
      Object.keys(ASSETS).map((assetKey) => {
        this.load.image(assetKey, ASSETS[assetKey as EAssets].url);
      });
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.
    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start('MainMenu');
  }
}
