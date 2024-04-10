/* eslint-disable @typescript-eslint/no-this-alias */
import Board from './Board';
import Tile from '../objects/Tile';
import {
  makeMovementAnimation,
  makeScaleAnimation,
} from '../objects/utilities/animation';
import {
  DEFAULT_SCALE,
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

import UI, {bombBtn, teleportBtn} from '../objects/UI'; // TODO: refactor need. need UI event

import { gameScene } from '../scenes/GameScene';
import { getScore } from './utilities/game';
import { EApplicationEvents, emitEvent } from '../eventsCenter';

export let gameManager: GameManager;
export default class GameManager {
  board: Board;
  ui: UI;
  prevSelectedTile: Tile | null = null;
  currentBuster: EBoosterType | null = null;
  resets: number = INITIAL_RESETS;
  score: number = 0;
  turns: number = INITIAL_TURNS;
  constructor() {
    gameManager = this;
    this.board = new Board();

    while (HAS_MINIMAL_ONCE_GAME && !this.board.isPlayable()) {
      // we want gamer has minimal once game
      this.board.resetBoard();
    }
  }

  public async onSelectTile(tile: Tile) {
    switch (this.currentBuster) {
      case EBoosterType.TELEPORT:
        if (this.prevSelectedTile === null) {
          this.setPrevSelect(tile);
        } else {
          await this.swapTwoTiles(this.prevSelectedTile, tile);
          this.setPrevSelect(null);
          this.setBooster(null);
        }
        break;
      case EBoosterType.BOMB:
        // eslint-disable-next-line no-case-declarations
        const matchesRadius = this.board.getRadiusMatches(tile.cell);
        await this.destroyTiles(matchesRadius);
        await this.fallDownTails();
        this.setPrevSelect(null);
        this.setBooster(null);
        this.makeTurn(getScore(matchesRadius.length));
        break;

      default:
        // eslint-disable-next-line no-case-declarations
        const matchesAdjacents = this.board.getTileMatches(tile.cell);
        if (matchesAdjacents.length >= MIN_ADJACENTS) {
          await this.destroyTiles(matchesAdjacents);
          await this.fallDownTails();
          this.setPrevSelect(null);

          this.makeTurn(getScore(matchesAdjacents.length));
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
    switch (booster) {
      case EBoosterType.TELEPORT:
        teleportBtn.setScale(DEFAULT_SCALE + 0.1);
        break;
      case EBoosterType.BOMB:
        bombBtn.setScale(DEFAULT_SCALE + 0.1);
        break;
      default:
        teleportBtn.setScale(DEFAULT_SCALE);
        bombBtn.setScale(DEFAULT_SCALE);
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
      emitEvent(EApplicationEvents.UPDATE_SCORE, this.score);
      emitEvent(EApplicationEvents.UPDATE_TURNS, `${this.turns}`);
    } else {
      this.makeGameOver();
    }
  }

  private makeGameOver() {
    gameScene.scene.stop('UI');
    gameScene.scene.start('GameOverScene', {
      score: this.score,
      turns: INITIAL_TURNS - this.turns,
      isWin: this.turns > 0 && this.resets > 0,
    });
  }
}
