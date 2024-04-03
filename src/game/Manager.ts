/* eslint-disable @typescript-eslint/no-this-alias */
import Board, { board } from './Board';
import Tile from '../objects/Tile';
import { makeScaleAnimation } from '../objects/utilities/animation';
import { ETileType } from '../config';

export let gameManager: GameManager;
export default class GameManager {
  // scene: Phaser.Scene
  board: Board | null = null;
  currentSelectedTile: Tile | null = null;

  constructor() {
    gameManager = this;
    this.board = new Board();
  }
  setSelectedTile(tile: Tile) {
    board.getTileMatches(tile.currentTile);
  }
}
