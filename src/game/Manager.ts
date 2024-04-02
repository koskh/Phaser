/* eslint-disable @typescript-eslint/no-this-alias */
import Board from './Board';
import Phaser from 'phaser';

export let gameManager: GameManager;
export default class GameManager {
  // scene: Phaser.Scene
  board: Board;

  constructor() {
    gameManager = this;
    this.board = new Board();
  }
}
