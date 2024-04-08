import { ETileType, GRID, VARIATIONS } from '../../config';
import Tile from '../../objects/Tile';
import { IGameBoard, IGameGrid } from '../Board';

export function getTestTilesGrid(): IGameGrid {
  const grid = getNewTilesGrid(GRID.ROWS, GRID.COLUMNS);
  const testPartGrid = [
    [ETileType.RED, ETileType.GREEN, ETileType.GREEN],
    [ETileType.PURPLE, ETileType.PURPLE, ETileType.YELLOW],
    [ETileType.PURPLE, ETileType.PURPLE, ETileType.GREEN],
    [ETileType.YELLOW, ETileType.BLUE, ETileType.RED],
  ];

  testPartGrid.map((row, rowIndex) => {
    row.map((cell, columnIndex) => {
      if (columnIndex < GRID.COLUMNS && rowIndex < GRID.ROWS) {
        grid[rowIndex][columnIndex] = testPartGrid[rowIndex][columnIndex];
      }
    });
  });

  return grid;
}

export function getNewTilesGrid(rows: number, cols: number): IGameGrid {
  const grid: IGameGrid = [];
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < cols; column++) {
      !grid[row]?.length && (grid[row] = []);
      grid[row].push(getNewTileType());
    }
  }
  return grid;
}

export function getNewBoard(grid: IGameGrid): IGameBoard {
  const board: IGameBoard = [];

  grid.forEach((line, rowIndex) =>
    line.forEach((tileType, columnIndex) => {
      !board[rowIndex]?.length && (board[rowIndex] = []);
      //
      board[rowIndex].push(
        tileType !== null
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

export function getNewTileType(variations = VARIATIONS): ETileType {
  const variation = Phaser.Math.Between(0, variations - 1);
  return variation as ETileType;
}
