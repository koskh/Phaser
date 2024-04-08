/* eslint-disable @typescript-eslint/no-this-alias */
import Tile from '../objects/Tile';
import { getNewTilesGrid, getNewBoard, getTilesGrid } from './utilities/board';
import { findMatches, getRadiusMatches, hasMatches } from './utilities/matches';
import { ETileType, GRID } from '../config';

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

  public resetBoard() {
    this.clearBoard();
    this.create();
  }

  public getCurrentMap() {
    return this.current;
  }

  public getTileByPosition(position: IPositionInCell) {
    return this.current[position.tileY][position.tileX];
  }

  public getCurrentGrid(): IGameGrid {
    return getTilesGrid(this.current);
  }

  public getTileMatches(position: IPositionInCell) {
    return findMatches(position, this.getCurrentGrid());
  }

  public getRadiusMatches(position: IPositionInCell) {
    return getRadiusMatches(position);
  }

  public getTile(positionInTile: IPositionInCell): Tile | null {
    return this.current[positionInTile.tileY][positionInTile.tileX];
  }

  public setTile(newTile: Tile | null, positionInTile: IPositionInCell) {
    this.current[positionInTile.tileY][positionInTile.tileX] = newTile;
  }

  public isPlayable(): boolean {
    const grid = this.getCurrentGrid();
    return hasMatches(grid);
  }

  private clearBoard() {
    this.current.flat().map((tile) => tile && tile.destroy());
  }
}
