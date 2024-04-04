/* eslint-disable @typescript-eslint/no-this-alias */
import Tile from '../objects/Tile';
import {
  getNewTilesGrid,
  getNewBoard,
  getTestTilesGrid,
  getTilesGrid,
} from './utilities/board';
import findMatches from './utilities/matches';
import { ETileType, GRID, VARIATIONS } from '../config';

export interface IGameGrid extends Array<Array<ETileType | null>> {}

export interface IGameBoard extends Array<Array<Tile | null>> {}

export let board: Board;
export default class Board {
  private current: IGameBoard;

  constructor() {
    board = this;
    this.create();
  }

  create() {
    // const tilesGrid: IGameGrid = getTestTilesGrid();
    const tilesGrid: IGameGrid = getNewTilesGrid(GRID.ROWS, GRID.COLUMNS);

    const board: IGameBoard = getNewBoard(tilesGrid);

    this.current = board;
  }

  public getCurrentMap() {
    return this.current;
  }

  public getTileByPosition(position: IPositionInTile) {
    return this.current[position.tileY][position.tileX];
  }

  public getCurrentGrid(): IGameGrid {
    return getTilesGrid(this.current);
  }

  public getTileMatches(position: IPositionInTile) {
    return findMatches(position, this.getCurrentGrid());
  }

  public getTile(positionInTile: IPositionInTile): Tile | null {
    return this.current[positionInTile.tileY][positionInTile.tileX];
  }

  public setTile(newTile: Tile | null, positionInTile: IPositionInTile) {
    this.current[positionInTile.tileY][positionInTile.tileX] = newTile;
  }
}
