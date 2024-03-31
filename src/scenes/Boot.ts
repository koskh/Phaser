import { Scene } from 'phaser';
import { ASSETS, EAssets } from '../assets';

export class Boot extends Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    //  Critical "first render" assets
    this.load.image(EAssets.BACK_GROUND, ASSETS[EAssets.BACK_GROUND].url);
  }

  create() {
    this.scene.start('Preloader');
  }
}
