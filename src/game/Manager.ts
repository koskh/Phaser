/* eslint-disable @typescript-eslint/no-this-alias */
import Board from './Board';
import Tile from '../objects/Tile';
import { makeScaleAnimation } from '../objects/utilities/animation';
import { GRID, MIN_ADJACENTS } from '../config';

import { deleteGridCells, swapVerticalTiles } from './utilities/swaps';

export let gameManager: GameManager;
export default class GameManager {
  board: Board;
  currentSelectedTile: Tile | null = null;

  constructor() {
    gameManager = this;
    this.board = new Board();
  }

  public async onSelectTile(tile: Tile) {
    const matches = this.board.getTileMatches(tile.cell);

    if (matches.length >= MIN_ADJACENTS) {
      await this.destroyTiles(matches);
      await this.fallDownTails();
    } else {
      if (this.currentSelectedTile === null) {
        this.currentSelectedTile = tile;
      } else {
        //swap tiles
        const fromCell = this.currentSelectedTile.cell;
      }
    }
  }

  private destroyTiles = async (
    gridPositions: IPositionInCell[],
  ): Promise<void> => {
    const matchedTiles = gridPositions.map((gridPosition) =>
      this.board.getTileByPosition(gridPosition),
    );

    await makeScaleAnimation(matchedTiles.filter((t) => t !== null) as Tile[]);

    deleteGridCells(this.board, gridPositions);
  };

  private fallDownTails = async (): Promise<void> => {
    for (let column = 0; column < GRID.COLUMNS; column++) {
      swapVerticalTiles(this.board, column);
    }
  };
}
