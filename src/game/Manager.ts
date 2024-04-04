/* eslint-disable @typescript-eslint/no-this-alias */
import Board, { board } from './Board';
import Tile from '../objects/Tile';
import {
  makeMovementAnimation,
  makeScaleAnimation,
} from '../objects/utilities/animation';
import { ETileType, GRID, MIN_ADJACENTS } from '../config';
import { tileToPosition } from './utilities/position';
import { deleteGridCells, swapVerticalTiles } from './utilities/swaps';

export let gameManager: GameManager;
export default class GameManager {
  // scene: Phaser.Scene
  board: Board;
  currentSelectedTile: Tile | null = null;

  constructor() {
    gameManager = this;
    this.board = new Board();
  }

  public async setSelectedTile(tile: Tile) {
    // Delete adjacents
    const matches = this.board.getTileMatches(tile.currentTile);

    // console.log('matchedTiles', matchedTiles);

    if (matches.length >= MIN_ADJACENTS) {
      await this.destroyTiles(matches);
      await this.fallDownTails();
    }
  }

  private destroyTiles = async (
    gridPositions: IPositionInTile[],
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
