/* eslint-disable @typescript-eslint/no-this-alias */
import Board from './Board';
import Tile from '../objects/Tile';
import {
  makeMovementAnimation,
  makeScaleAnimation,
} from '../objects/utilities/animation';
import { EBoosterType, GRID, MIN_ADJACENTS } from '../config';

import { deleteGridCells, swapVerticalTiles } from './utilities/swaps';
import { tileToPosition } from './utilities/position';
import { isAdjacentCells } from './utilities/matches';

export let gameManager: GameManager;
export default class GameManager {
  board: Board;
  prevSelectedTile: Tile | null = null;
  currentBuster: EBoosterType | null = null;

  constructor() {
    gameManager = this;
    this.board = new Board();
  }

  public async onSelectTile(tile: Tile) {
    const matches = this.board.getTileMatches(tile.cell);

    //default
    if (this.currentBuster === null) {
      if (matches.length >= MIN_ADJACENTS) {
        await this.destroyTiles(matches);
        await this.fallDownTails();

        this.prevSelectedTile = null;
      } else {
        if (this.prevSelectedTile === null) {
          this.prevSelectedTile = tile;
        } else {
          //swap adjacement tiles
          isAdjacentCells(this.prevSelectedTile.cell, tile.cell) &&
            (await this.swapTwoTiles(this.prevSelectedTile, tile));
          this.prevSelectedTile = null;
        }
      }
    } else if (this.currentBuster === EBoosterType.TELEPORT) {
      if (this.currentBuster === EBoosterType.TELEPORT) {
        if (this.prevSelectedTile === null) {
          this.prevSelectedTile = tile;
        } else {
          //swap tiles
          await this.swapTwoTiles(this.prevSelectedTile, tile);
          this.prevSelectedTile = null;
          this.currentBuster = null;
        }
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

  private swapTwoTiles = async (
    fromTile: Tile,
    toTile: Tile,
  ): Promise<void> => {
    const fromCell = { ...fromTile.cell };
    const toCell = { ...toTile.cell };

    makeMovementAnimation(fromTile, tileToPosition(toCell));
    makeMovementAnimation(toTile, tileToPosition(fromCell));

    fromTile.updatePositionAndTile(toCell);
    toTile.updatePositionAndTile(fromCell);
  };

  public reset = async () => {
    const allTiles = this.board.getCurrentMap();
    await makeScaleAnimation(allTiles.flat() as Tile[]);

    this.board = new Board();
  };

  public setBooster(booster: EBoosterType) {
    this.currentBuster = booster;
  }
}
