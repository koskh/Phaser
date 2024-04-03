import { ETileType } from '../../config';
import Tile from '../../objects/Tile';

export function getPseudoRandomTilesGrid(): ETileType[][] {
  return [
    [ETileType.RED, ETileType.GREEN, ETileType.GREEN],
    [ETileType.PURPLE, ETileType.RED, ETileType.YELLOW],
    [ETileType.GREEN, ETileType.GREEN, ETileType.YELLOW],
  ];
}

export function getRandomBoard(grid: ETileType[][]): Tile[][] {
  const board: Tile[][] = [];

  grid.forEach((line, rowIndex) =>
    line.forEach((tileType, columnIndex) => {
      !board[rowIndex]?.length && (board[rowIndex] = []);
      //
      board[rowIndex].push(
        new Tile(tileType, { tileX: columnIndex, tileY: rowIndex }),
      );
    }),
  );
  return board;
}

export function getTilesGrid(board: Tile[][]): ETileType[][] {
  const grid: ETileType[][] = [];

  board.forEach((line, rowIndex) =>
    line.forEach((tileType, columnIndex) => {
      !grid[rowIndex]?.length && (grid[rowIndex] = []);
      grid[rowIndex].push(board[rowIndex][columnIndex].tileType);
    }),
  );

  return grid;
}
