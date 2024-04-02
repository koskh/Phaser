/* eslint-disable @typescript-eslint/no-this-alias */
import Board from './Board';

export let gameManager: GameManager;
export default class GameManager {
  board: Board;

  constructor() {
    gameManager = this;
    this.board = new Board();
  }
}
