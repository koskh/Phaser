import { ETileType } from '../../config';
import Tile from '../../objects/Tile';

export function getRandomTilesGrid(): ETileType[][] {
  return [
    [ETileType.RED, ETileType.BLUE, ETileType.GREEN],
    [ETileType.YELLOW, ETileType.PURPLE, ETileType.YELLOW],
    [ETileType.RED, ETileType.BLUE, ETileType.GREEN],
  ];
}

export function getRandomBoard(grid: ETileType[][]): Tile[][] {
  const board: Tile[][] = [];

  grid.forEach((line, rowIndex) =>
    line.forEach((tileType, columnIndex) => {
      !board[rowIndex]?.length && (board[rowIndex] = []);
      //
      board[rowIndex].push(
        new Tile(tileType, { tileX: rowIndex, tileY: columnIndex }),
      );
    }),
  );
  return board;
}
