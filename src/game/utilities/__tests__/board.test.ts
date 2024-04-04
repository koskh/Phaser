import { getRandomBoard, getTestTilesGrid, getTilesGrid } from '../board';
import { ETileType } from '../../../config';

jest.mock('../../../objects/Tile');

const TEST_GRID = {
  ROWS: 3,
  COLUMNS: 3,
};

test('can generate pseudo grid', () => {
  expect(getTestTilesGrid()).toHaveLength(TEST_GRID.ROWS);
  expect(getTestTilesGrid()[0]).toHaveLength(TEST_GRID.COLUMNS);

  expect(getTestTilesGrid()[0][0]).toEqual(ETileType.RED); // TODO: need mock
});
test('can generate random board', () => {
  const grid = getTestTilesGrid();

  expect(getRandomBoard(grid)).toHaveLength(TEST_GRID.ROWS);
  expect(getRandomBoard(grid)[0]).toHaveLength(TEST_GRID.COLUMNS);
});

test('can return grid from current board', () => {
  const grid = getTestTilesGrid();
  const board = getRandomBoard(grid);

  expect(getTilesGrid(board)).toHaveLength(grid.length);
  expect(getTilesGrid(board)[0]).toHaveLength(grid[0].length);
  // expect(getTilesGrid(board)).toEqual(ETileType.RED); // TODO: need mock
});
