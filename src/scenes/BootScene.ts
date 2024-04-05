import { Scene } from 'phaser';

export default class BootScene extends Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    //  Critical "first render" assets
    this.load.image('progress_bar', 'assets/progress_bar.png');
  }

  create() {
    this.scene.start('MenuScene');
  }
}
