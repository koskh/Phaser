/* eslint-disable @typescript-eslint/no-this-alias */
import Tile from '../objects/Tile';
import {
  getRandomBoard,
  getPseudoRandomTilesGrid,
  getTilesGrid,
} from './utilities/board';
import findMatches from './utilities/matches';
import { ETileType } from '../config';

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
    const tilesGrid: IGameGrid = getPseudoRandomTilesGrid();
    const board: IGameBoard = getRandomBoard(tilesGrid);

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
