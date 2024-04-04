import {
  getNewBoard,
  getTestTilesGrid,
  getNewTilesGrid,
  getTilesGrid,
} from '../board';
import { ETileType } from '../../../config';

jest.mock('../../../objects/Tile');

const TEST_GRID = {
  ROWS: 3,
  COLUMNS: 3,
  VARIATIONS: 4,
};

test('can generate pseudo grid', () => {
  expect(getTestTilesGrid()).toHaveLength(TEST_GRID.ROWS);
  expect(getTestTilesGrid()[0]).toHaveLength(TEST_GRID.COLUMNS);
  expect(getTestTilesGrid()[0][0]).toEqual(ETileType.RED); // TODO: need mock
});

test('can generate new random grid', () => {
  const grid = getNewTilesGrid(TEST_GRID.ROWS, TEST_GRID.COLUMNS);
  expect(grid).toHaveLength(TEST_GRID.ROWS);
  expect(grid[0]).toHaveLength(TEST_GRID.COLUMNS);

  expect(grid[0][0]).not.toBeUndefined();
  expect(grid[0][0]).not.toBeNull();
});
test('can generate random board', () => {
  const grid = getTestTilesGrid();

  expect(getNewBoard(grid)).toHaveLength(TEST_GRID.ROWS);
  expect(getNewBoard(grid)[0]).toHaveLength(TEST_GRID.COLUMNS);
});

test('can return grid from current board', () => {
  const grid = getTestTilesGrid();
  const board = getNewBoard(grid);

  expect(getTilesGrid(board)).toHaveLength(grid.length);
  expect(getTilesGrid(board)[0]).toHaveLength(grid[0].length);
  // expect(getTilesGrid(board)).toEqual(ETileType.RED); // TODO: need mock
});
