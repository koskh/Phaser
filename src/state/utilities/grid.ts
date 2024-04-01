import Phaser from 'phaser';

export function getEmptyGrid(rows: number, cols: number): IGameBoard {
  const grid: IGameBoard = [];

  for (let i = 0; i < rows; i++) {
    grid.push([]);

    for (let j = 0; j < cols; j++) {
      grid[i].push(0);
    }
  }

  return grid;
}

export function populateGrid(
  rows: number,
  cols: number,
  variations: number,
): IGameBoard {
  const grid: IGameBoard = getEmptyGrid(rows, cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const variation = Phaser.Math.Between(1, variations);
      grid[i][j] = variation;
    }
  }

  return grid;
}
