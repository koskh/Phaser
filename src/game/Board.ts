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

  public getTileByPosition(position: IPositionInTile) {
    return this.current[position.tileY][position.tileX];
  }

  public getCurrentGrid(): ETileType[][] {
    return getTilesGrid(this.current);
  }

  public getTileMatches(position: IPositionInTile) {
    return findMatches(position, this.getCurrentGrid());
  }
}
