/* eslint-disable @typescript-eslint/no-this-alias */
import Board from './Board';
import Tile from '../objects/Tile';
import {
  makeMovementAnimation,
  makeScaleAnimation,
} from '../objects/utilities/animation';
import {
  CAN_SWAP_TWO_ADJACENT_TILES,
  EBoosterType,
  GRID,
  INITIAL_RESETS,
  MIN_ADJACENTS,
} from '../config';

import { deleteGridCells, swapVerticalTiles } from './utilities/swaps';
import { tileToPosition } from './utilities/position';
import { isAdjacentCells } from './utilities/matches';
import UI, { boosterText, resetText } from '../objects/utilities/UI';
import { gameScene } from '../scenes/GameScene';

export let gameManager: GameManager;
export default class GameManager {
  board: Board;
  ui: UI;
  prevSelectedTile: Tile | null = null;
  currentBuster: EBoosterType | null = null;
  resets: number;
  constructor() {
    gameManager = this;
    this.board = new Board();
    this.resets = INITIAL_RESETS;

    while (!this.board.isPlayable()) {
      // we want gamer has minimal once game
      this.board = new Board();
    }
  }

  public async onSelectTile(tile: Tile) {
    const matches = this.board.getTileMatches(tile.cell);

    //default
    if (this.currentBuster === null) {
      if (matches.length >= MIN_ADJACENTS) {
        this.setPrevSelect(null);

        await this.destroyTiles(matches);
        await this.fallDownTails();
      } else {
        if (this.prevSelectedTile === null) {
          this.setPrevSelect(tile);
        } else {
          //swap adjacement tiles
          CAN_SWAP_TWO_ADJACENT_TILES &&
            isAdjacentCells(this.prevSelectedTile.cell, tile.cell) &&
            (await this.swapTwoTiles(this.prevSelectedTile, tile));
          this.setPrevSelect(null);
        }
      }
    } else if (this.currentBuster === EBoosterType.TELEPORT) {
      if (this.currentBuster === EBoosterType.TELEPORT) {
        if (this.prevSelectedTile === null) {
          this.prevSelectedTile = tile;
        } else {
          //swap tiles
          await this.swapTwoTiles(this.prevSelectedTile, tile);
          this.setPrevSelect(null);
          this.setBooster(null);
        }
      }
    }

    console.log('board has MATCHES', this.board.isPlayable());
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

    this.resets = this.resets - 1;

    if (this.resets > 0) {
      resetText.setText(`Resets: ${this.resets}`);
      this.board = new Board();
    } else {
      this.makeGameOver();
    }

    console.log('board has MATCHES', this.board.isPlayable());
  };

  public setBooster(booster: EBoosterType | null) {
    boosterText.setText(
      `Booster: ${booster === null ? 'none' : EBoosterType[booster]}`,
    );
    this.currentBuster = booster;
  }

  private setPrevSelect(tile: Tile | null) {
    tile ? tile.setAlpha(0.5) : this.prevSelectedTile?.setAlpha(1);

    this.prevSelectedTile = tile;
  }

  private makeGameOver() {
    // gameScene.scene.remove('UI');
    gameScene.scene.start('GameOverScene');
  }
}
