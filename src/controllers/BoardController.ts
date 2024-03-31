import { Scene } from 'phaser';
import { eventEmit, onEvent } from '../utilities/EventsCenter';
import { EApplicationEvents } from '../utilities/ApplicationEvents';

export class BoardController extends Scene {
  // labelCount: Phaser.GameObjects.Text;
  // labelAttempt: Phaser.GameObjects.Text;
  constructor() {
    super('BoardController');
  }

  init() {
    console.log('board controller init');
  }

  preload() {}

  create() {
    const board: IBoard = [
      [1, 1, 2],
      [2, 1, 3],
      [3, 2, 3],
    ];
    eventEmit(EApplicationEvents.SET_GAME_STATE, board);
    const t = eventEmit(EApplicationEvents.GET_GAME_STATE);

    console.log('t', t);
  }
}
