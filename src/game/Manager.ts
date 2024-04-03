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

    console.log('matchedTiles', matchedTiles);

    if (matchedTiles.length >= MIN_ADJACENTS) {
      await this.destroyTiles(matchedTiles);
      // await this.fallTails(matchedTiles);

      // const t = new Tile(ETileType.BLUE, {
      //   tileX: 0,
      //   tileY: -1,
      // });
      //
      // makeMovementAnimation(t, tileToPosition({ tileX: 0, tileY: 0 }));

      // t.updatePositionAndTile({ tileX: 0, tileY: 0 });
      // t.updatePositionAndTile(t,)
      // board.setTile(t, { tileY: 0, tileX: 0 });

      // const b = board.getCurrentMap();

      // t.currentTile = { tileX: 0, tileY: 0 };
      //
      // b[0][0] = t;
    }
    //fall dawn tiles
    if (matchedTiles.length >= MIN_ADJACENTS) {
      // const topTile = new Tile(ETileType.BLUE, { tileX: 0, tileY: -1 });
      //
      const tilesSortedByY = [...matches].sort((a, b) => a.tileY - b.tileY);
      console.log('tilesSortedByY', tilesSortedByY);

      const column = 0;

      const tempColumn: Array<Tile | null> = board // DEV-only work by ref
        .getCurrentMap()
        .map((row) => row[column]);
      console.log('tempColumn', tempColumn);

      tilesSortedByY.map((cell) => {
        tempColumn[cell.tileY] = null; // DEV-only work by ref
      });
      console.log('tempColumn', tempColumn);

      swapTiles(tempColumn);

      // eslint-disable-next-line no-inner-declarations
      function swapTiles(columns: Array<Tile | null>, curentIndex: number = 0) {
        // debugger;

        if (curentIndex < 0 || curentIndex >= GRID.ROWS) return;

        if (columns[curentIndex] === null) {
          if (curentIndex === 0) {
            const newTopTile = new Tile(ETileType.BLUE, {
              tileX: 0,
              tileY: -1,
            });

            makeMovementAnimation(
              newTopTile,
              tileToPosition({ tileX: column, tileY: 0 }),
            );

            // newTopTile.currentTile = { tileX: column, tileY: 0 };
            newTopTile.updatePositionAndTile({ tileX: 0, tileY: 0 });

            tempColumn[curentIndex] = newTopTile;
          } else {
            makeMovementAnimation(
              // @ts-expect-error dev-only
              tempColumn[curentIndex - 1],
              tileToPosition({ tileX: column, tileY: curentIndex }),
            );

            // @ts-ignore
            // tempColumn[curentIndex - 1].currentTile = {
            //   tileX: column,
            //   tileY: curentIndex,
            // };

            tempColumn[curentIndex] = tempColumn[curentIndex - 1];
            tempColumn[curentIndex - 1] = null;

            // @ts-ignore
            tempColumn[curentIndex].updatePositionAndTile({
              tileX: column,
              tileY: curentIndex,
            });

            swapTiles(columns, 0);
          }
        } else {
          swapTiles(columns, ++curentIndex);
        }
      }

      console.log('### prevMap', board.getCurrentMap());
      console.log('### tempColumn', tempColumn);
    }
  }

  private destroyTiles = async (tiles: Tile[]): Promise<void> => {
    await makeScaleAnimation(tiles);
  };

  // private fallTails = async (tiles: Tile[]): Promise<void> => {
  //
  // };
}
