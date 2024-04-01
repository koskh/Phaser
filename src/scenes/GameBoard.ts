import { Scene } from 'phaser';
// import { onEvent } from '../utilities/eventsCenter';
import {EApplicationEvents} from '../utilities/ApplicationEvents';
import eventsCenter from '../utilities/eventsCenter';

export class GameBoard extends Scene {
  constructor() {
    super('GameBoard');
  }

  init() {}

  preload() {
    //  Critical "first render" assets
  }

  create() {
    // onEvent(EApplicationEvents.GAME_STATE_UPDATED, this.renderScene, this);

    // this.events.on(Phaser.Scenes.Events.BOOT, () => {
    //   console.log('GameBoard');
    //
    //   // emitEvent(EApplicationEvents.GAME_STATE_UPDATED, {});
    // });

    eventsCenter.on('test', () => console.log('!@###'));
  }

  renderScene({ board }: IGameState) {
    console.log('board', board);
  }
}
