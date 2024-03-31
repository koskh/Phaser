import { Scene } from 'phaser';
import { gameStore } from '../state/gameModel';

export class GameBoard extends Scene {
  constructor() {
    super('GameBoard');
  }

  init() {
    gameStore.subscribe(() =>
      console.log('store.getState', gameStore.getState()),
    );
  }

  preload() {
    //  Critical "first render" assets
  }

  create() {
    // this.scene.start('Preloader');
  }

  render() {}
}
