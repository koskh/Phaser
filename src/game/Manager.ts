/* eslint-disable @typescript-eslint/no-this-alias */
import Board from './Board';
import Tile from '../objects/Tile';
import {
  makeMovementAnimation,
  makeScaleAnimation,
} from '../objects/utilities/animation';
import {
  EBoosterType,
  GRID,
  HAS_MINIMAL_ONCE_GAME,
  INITIAL_RESETS,
  INITIAL_TURNS,
  MIN_ADJACENTS,
  WIN_SCORE,
} from '../config';

import { deleteGridCells, swapVerticalTiles } from './utilities/swaps';
import { tileToPosition } from './utilities/position';

import UI, { scoreText, teleportBtn, turnText } from '../objects/UI';
import { gameScene } from '../scenes/GameScene';
import { getScore } from './utilities/game';

export let gameManager: GameManager;
export default class GameManager {
  board: Board;
  ui: UI;
  prevSelectedTile: Tile | null = null;
  currentBuster: EBoosterType | null = null;
  resets: number;
  score: number = 0;
  turns: number = INITIAL_TURNS;
  constructor() {
    gameManager = this;
    this.board = new Board();
    this.resets = INITIAL_RESETS;

    while (HAS_MINIMAL_ONCE_GAME && !this.board.isPlayable()) {
      // we want gamer has minimal once game
      this.board.resetBoard();
    }
  }

  public async onSelectTile(tile: Tile) {
    // TODO: need refactoring as state machine(?)
    const matches = this.board.getTileMatches(tile.cell);

    if (this.currentBuster === null) {
      if (matches.length >= MIN_ADJACENTS) {
        await this.destroyTiles(matches);
        await this.fallDownTails();
        this.setPrevSelect(null);

        this.makeTurn(getScore(matches.length));
      }
      // else {
      //   if (this.prevSelectedTile === null) {
      //     this.setPrevSelect(tile);
      //   } else {
      //     //swap adjacement tiles
      //     CAN_SIMPLE_SWAP_TWO_ADJACENT_TILES &&
      //       isAdjacentCells(this.prevSelectedTile.cell, tile.cell) &&
      //       (await this.swapTwoTiles(this.prevSelectedTile, tile));
      //     this.setPrevSelect(null);
      //   }
      // }
    } else if (this.currentBuster === EBoosterType.TELEPORT) {
      if (this.prevSelectedTile === null) {
        this.setPrevSelect(tile);
      } else {
        //swap tiles
        await this.swapTwoTiles(this.prevSelectedTile, tile);
        this.setPrevSelect(null);
        this.setBooster(null);
      }
    }

    if (!this.board.isPlayable()) {
      await new Promise((r) => setTimeout(r, 1000)); // for visual pause after update board
      await this.reset();
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

    await Promise.all([
      makeMovementAnimation(fromTile, tileToPosition(toCell)),
      makeMovementAnimation(toTile, tileToPosition(fromCell)),
    ]);

    fromTile.updatePositionAndTile(toCell);
    toTile.updatePositionAndTile(fromCell);
  };

  public reset = async () => {
    //TODO: need visual present for  start reset board action
    const allTiles = this.board.getCurrentMap();
    await makeScaleAnimation(allTiles.flat() as Tile[]);

    this.resets = this.resets - 1;

    if (this.resets > 0) {
      this.board.resetBoard();
    } else {
      this.makeGameOver();
    }
  };

  public setBooster(booster: EBoosterType | null) {
    if (booster === EBoosterType.TELEPORT) {
      // TODO: need refactoring
      teleportBtn.setScale(0.6);
    } else {
      teleportBtn.setScale(0.5);
    }

    this.currentBuster = booster;
  }

  private setPrevSelect(tile: Tile | null) {
    tile ? tile.setAlpha(0.5) : this.prevSelectedTile?.setAlpha(1);

    this.prevSelectedTile = tile;
  }

  private makeTurn(score: number) {
    this.score = this.score + score;
    this.turns = this.turns - 1;

    if (this.turns > 0 && this.score < WIN_SCORE) {
      scoreText.setText(`${this.score}`);
      turnText.setText(`${this.turns}`);
    } else {
      this.makeGameOver();
    }
  }

  private makeGameOver() {
    gameScene.scene.stop('UI');
    gameScene.scene.start('GameOverScene', {
      score: this.score,
      isWin: this.turns > 0 && this.resets > 0,
    });
  }
}
