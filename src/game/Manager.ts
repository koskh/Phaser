/* eslint-disable @typescript-eslint/no-this-alias */
import Board, { board } from './Board';
import Tile from '../objects/Tile';
import {
  makeMovementAnimation,
  makeScaleAnimation,
} from '../objects/utilities/animation';
import { ETileType, GRID, MIN_ADJACENTS } from '../config';
import { tileToPosition } from './utilities/position';

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
    // Delete adjacents
    const matches = board.getTileMatches(tile.currentTile);
    const matchedTiles = matches.map((positionInTile) =>
      board.getTileByPosition(positionInTile),
    );

    // console.log('matchedTiles', matchedTiles);

    if (matchedTiles.length >= MIN_ADJACENTS) {
      // @ts-expect-error DEV-ONLY
      await this.destroyTiles(matchedTiles);
    }

    //fall dawn tiles
    if (matchedTiles.length >= MIN_ADJACENTS) {
      const tilesSortedByY = [...matches].sort((a, b) => a.tileY - b.tileY);
      // console.log('tilesSortedByY', tilesSortedByY);

      const column = 0;

      tilesSortedByY.map((cell) => {
        board.setTile(null, { tileX: column, tileY: cell.tileY });
      });
      // console.log('tempColumn', tempColumn);

      console.log('start prevMap', board.getCurrentMap());

      // swapVerticalTiles();

      // eslint-disable-next-line no-inner-declarations
      function swapVerticalTiles(curentIndex: number = 0) {
        // debugger;

        if (curentIndex < 0 || curentIndex >= GRID.ROWS) return;

        const currentTile = board.getTile({
          tileY: curentIndex,
          tileX: column,
        });

        if (currentTile === null) {
          if (curentIndex === 0) {
            const newTopTile = new Tile(ETileType.BLUE, {
              tileX: 0,
              tileY: -1,
            });

            makeMovementAnimation(
              newTopTile,
              tileToPosition({ tileX: column, tileY: 0 }),
            );
            newTopTile.updatePositionAndTile({ tileX: 0, tileY: 0 });
            // debugger;
          } else {
            const topTile = board.getTile({
              tileY: curentIndex - 1,
              tileX: column,
            });

            if (topTile) {
              makeMovementAnimation(
                topTile,
                tileToPosition({ tileX: column, tileY: curentIndex }),
              );

              topTile.updatePositionAndTile({
                tileX: column,
                tileY: curentIndex,
              });

              board.setTile(null, { tileX: column, tileY: curentIndex - 1 });
            }
            // debugger;
            swapVerticalTiles(curentIndex - 1);
          }
        } else {
          swapVerticalTiles(curentIndex + 1);
        }
      }

      // console.log('### prevMap', board.getCurrentMap());
      // console.log('### tempColumn', tempColumn);
    }
  }

  private destroyTiles = async (tiles: Tile[]): Promise<void> => {
    await makeScaleAnimation(tiles);
  };

  // private fallTails = async (tiles: Tile[]): Promise<void> => {
  //
  // };
}
