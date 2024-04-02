import { getRandomBoard, getRandomTilesGrid } from '../board';
import { ETileType } from '../../../config';

jest.mock('../../../objects/Tile');
test('can generate grid', () => {
  expect(getRandomTilesGrid()).toHaveLength(3);
  expect(getRandomTilesGrid()[0]).toHaveLength(3);

  expect(getRandomTilesGrid()[0][0]).toEqual(ETileType.RED);
});

test('can generate random board', () => {
  const grid = getRandomTilesGrid();

  expect(getRandomBoard(grid)).toHaveLength(3);
  expect(getRandomBoard(grid)[0]).toHaveLength(3);
});
