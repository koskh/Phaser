import {
  getRandomBoard,
  getPseudoRandomTilesGrid,
  getTilesGrid,
} from '../board';
import { ETileType } from '../../../config';

jest.mock('../../../objects/Tile');

test('can generate pseudo grid', () => {
  expect(getPseudoRandomTilesGrid()).toHaveLength(3);
  expect(getPseudoRandomTilesGrid()[0]).toHaveLength(3);

  expect(getPseudoRandomTilesGrid()[0][0]).toEqual(ETileType.RED); // TODO: need mock
});

test('can generate random board', () => {
  const grid = getPseudoRandomTilesGrid();

  expect(getRandomBoard(grid)).toHaveLength(3);
  expect(getRandomBoard(grid)[0]).toHaveLength(3);
});

test('can return grid from current board', () => {
  const grid = getPseudoRandomTilesGrid();
  const board = getRandomBoard(grid);

  expect(getTilesGrid(board)).toHaveLength(grid.length);
  expect(getTilesGrid(board)[0]).toHaveLength(grid[0].length);
  // expect(getTilesGrid(board)).toEqual(ETileType.RED); // TODO: need mock
});
