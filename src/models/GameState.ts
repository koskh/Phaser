import { Scene } from 'phaser';
import { eventEmit, onEvent } from '../utilities/EventsCenter';
import { EApplicationEvents } from '../utilities/ApplicationEvents';

export class GameState extends Scene {
  board: IBoard | null = null;

  constructor() {
    super('GameState');
  }

  init() {
    console.log('GameState model init');

    // onEvent(EApplicationEvents.GET_GAME_STATE, this.getGameState, this);
    onEvent(EApplicationEvents.SET_GAME_STATE, this.setGameState, this);
  }

  preload() {}

  create() {}

  getGameState() {
    console.log('getGameState');
    return this.board;
  }

  setGameState(arg0: IBoard) {
    this.board = arg0;
    eventEmit('GAME_STATE_UPDATED');
  }
}
