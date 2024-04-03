/* eslint-disable @typescript-eslint/no-this-alias */
import Board, { board } from './Board';
import Tile from '../objects/Tile';
import { makeScaleAnimation } from '../objects/utilities/animation';
import { ETileType, MIN_ADJACENTS } from '../config';

export let gameManager: GameManager;
export default class GameManager {
  // scene: Phaser.Scene
  board: Board | null = null;
  currentSelectedTile: Tile | null = null;

  constructor() {
    gameManager = this;
    this.board = new Board();
  }

  public async setSelectedTile(tile: Tile) {
    const matches = board.getTileMatches(tile.currentTile);

    const mathedTiles = matches.map((positionInTile) =>
        board.getTileByPosition(positionInTile),
    );

    if (mathedTiles.length >= MIN_ADJACENTS) {
      await this.destroyTiles(mathedTiles);
    }
  }

  private destroyTiles = async (tiles: Tile[]): Promise<void> => {
    await makeScaleAnimation(tiles);
  };
}
