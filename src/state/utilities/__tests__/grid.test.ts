import { getEmptyGrid, populateGrid } from '../grid';

test('can generate empty grid', () => {
  const rows = 3,
    cols = 3;

  const grid = getEmptyGrid(rows, cols);
  expect(grid).toHaveLength(rows);
});
test('can generate populated grid', () => {
  const rows = 2,
    cols = 4,
    variations = 3;

  const grid = populateGrid(rows, cols, variations);
  expect(grid).toHaveLength(rows);
  expect(grid[0]).toHaveLength(cols);
});
