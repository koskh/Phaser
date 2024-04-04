import {
  getNewBoard,
  getTestTilesGrid,
  getNewTilesGrid,
  getTilesGrid,
} from '../board';
import { ETileType, GRID } from '../../../config';

jest.mock('../../../objects/Tile');

test('can generate pseudo grid', () => {
  expect(getTestTilesGrid()).toHaveLength(GRID.ROWS);
  expect(getTestTilesGrid()[0]).toHaveLength(GRID.COLUMNS);
  expect(getTestTilesGrid()[0][0]).toEqual(ETileType.RED); // TODO: need mock
});

test('can generate new random grid', () => {
  const grid = getNewTilesGrid(GRID.ROWS, GRID.COLUMNS);
  expect(grid).toHaveLength(GRID.ROWS);
  expect(grid[0]).toHaveLength(GRID.COLUMNS);

  expect(grid[0][0]).not.toBeUndefined();
  expect(grid[0][0]).not.toBeNull();
});
test('can generate random board', () => {
  const grid = getTestTilesGrid();

  expect(getNewBoard(grid)).toHaveLength(GRID.ROWS);
  expect(getNewBoard(grid)[0]).toHaveLength(GRID.COLUMNS);
});

test('can return grid from current board', () => {
  const grid = getTestTilesGrid();
  const board = getNewBoard(grid);

  expect(getTilesGrid(board)).toHaveLength(grid.length);
  expect(getTilesGrid(board)[0]).toHaveLength(grid[0].length);
  // expect(getTilesGrid(board)).toEqual(ETileType.RED); // TODO: need mock
});
