/* eslint-disable @typescript-eslint/no-this-alias */
import Tile from '../objects/Tile';
import {
  getRandomBoard,
  getPseudoRandomTilesGrid,
  getTilesGrid,
} from './utilities/board';
import findMatches from './utilities/matches';
import { ETileType } from '../config';

export let board: Board;
export default class Board {
  private current: Tile[][] = [[]];

  constructor() {
    board = this;
    this.create();
  }

  create() {
    const tilesGrid = getPseudoRandomTilesGrid();
    const board = getRandomBoard(tilesGrid);

    this.current = board;
  }

  public getCurrentMap() {
    return this.current;
  }

  public getCurrentGrid(): ETileType[][] {
    return getTilesGrid(this.current);
  }

  public getTileMatches(tile: IPositionInTile, tileType: ETileType) {
    console.log('currentTile', tile);

    const matches = findMatches(tile, tileType, this.getCurrentGrid());

    const RIGHT = [1, 0];
    const LEFT = [1, 0];
    const UP = [0, 1];
    const DOWN = [0, -1];

    const COLUMNS = 3;
    const ROWS = 3;

    console.log('matches', matches);
  }
}
