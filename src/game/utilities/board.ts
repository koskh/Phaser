import { ETileType } from '../../config';
import Tile from '../../objects/Tile';
import { IGameBoard, IGameGrid } from '../Board';

export function getPseudoRandomTilesGrid(): IGameGrid {
  return [
    [ETileType.RED, ETileType.GREEN, ETileType.GREEN],
    [ETileType.PURPLE, ETileType.YELLOW, ETileType.YELLOW],
    [ETileType.GREEN, ETileType.YELLOW, ETileType.YELLOW],
  ];
}

export function getRandomBoard(grid: IGameGrid): IGameBoard {
  const board: IGameBoard = [];

  grid.forEach((line, rowIndex) =>
    line.forEach((tileType, columnIndex) => {
      !board[rowIndex]?.length && (board[rowIndex] = []);
      //
      board[rowIndex].push(
        tileType
          ? new Tile(tileType, { tileX: columnIndex, tileY: rowIndex })
          : null,
      );
    }),
  );
  return board;
}

export function getTilesGrid(board: IGameBoard): IGameGrid {
  const grid: IGameGrid = [];

  board.forEach((line, rowIndex) =>
    line.forEach((tileType, columnIndex) => {
      !grid[rowIndex]?.length && (grid[rowIndex] = []);
      grid[rowIndex].push(board[rowIndex][columnIndex]?.tileType || null);
    }),
  );

  return grid;
}
