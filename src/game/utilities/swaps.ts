import Board from '../Board';
import { ETileType, GRID } from '../../config';
import Tile from '../../objects/Tile';
import { makeMovementAnimation } from '../../objects/utilities/animation';
import { tileToPosition } from './position';
import { getNewTileType } from './board';

export function deleteGridCells(
  board: Board,
  gridPositions: IPositionInCell[],
) {
  gridPositions.map((cell) => {
    board.setTile(null, { tileX: cell.tileX, tileY: cell.tileY });
  });
}

export function swapVerticalTiles(
  board: Board,
  column: number,
  currentRow: number = 0,
) {
  if (currentRow < 0 || currentRow >= GRID.ROWS) return;

  const currentTile = board.getTile({
    tileY: currentRow,
    tileX: column,
  });

  if (currentTile !== null) {
    swapVerticalTiles(board, column, ++currentRow);
  } else {
    if (currentRow === 0) {
      const newTopTile = new Tile(getNewTileType(), {
        tileX: column,
        tileY: -1,
      });

      makeMovementAnimation(
        newTopTile,
        tileToPosition({ tileX: column, tileY: 0 }),
      );
      newTopTile.updatePositionAndTile({ tileX: column, tileY: 0 });

      swapVerticalTiles(board, column, currentRow + 1);
    } else {
      const topTile = board.getTile({
        tileY: currentRow - 1,
        tileX: column,
      });

      if (topTile) {
        makeMovementAnimation(
          topTile,
          tileToPosition({ tileX: column, tileY: currentRow }),
        );

        topTile.updatePositionAndTile({
          tileX: column,
          tileY: currentRow,
        });

        board.setTile(null, { tileX: column, tileY: currentRow - 1 });
      }
      swapVerticalTiles(board, column, currentRow - 1);
    }
  }
}
