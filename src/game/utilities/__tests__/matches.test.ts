import { findAdjacentCells, findGraphForCell } from '../matches';

import { ETileType } from '../../../config';

const GRID = [
  [ETileType.RED, ETileType.GREEN, ETileType.GREEN],
  [ETileType.PURPLE, ETileType.PURPLE, ETileType.PURPLE],
  [ETileType.PURPLE, ETileType.PURPLE, ETileType.GREEN],
];

const CELL: IPositionInTile = { tileX: 1, tileY: 0 };
const CELL_2: IPositionInTile = { tileX: 1, tileY: 1 };
const CELL_3: IPositionInTile = { tileX: 0, tileY: 2 };
test('can find adjacements for one cell', () => {
  expect(findAdjacentCells(CELL, GRID)).toHaveLength(1);
  expect(findAdjacentCells(CELL, GRID)).toEqual([{ tileX: 2, tileY: 0 }]);

  expect(findAdjacentCells(CELL_2, GRID)).toHaveLength(3);
  expect(findAdjacentCells(CELL_2, GRID)).toEqual([
    { tileX: 2, tileY: 1 },
    { tileX: 0, tileY: 1 },
    { tileX: 1, tileY: 2 },
  ]);

  expect(findAdjacentCells(CELL_3, GRID)).toHaveLength(2);
  expect(findAdjacentCells(CELL_3, GRID)).toEqual([
    { tileX: 1, tileY: 2 },
    { tileX: 0, tileY: 1 },
  ]);
});

test('can build one-way grap for adjacent cells', () => {
  expect(findGraphForCell(CELL, GRID)).toEqual({ '1_0': { '2_0': {} } });

  expect(findGraphForCell(CELL_2, GRID)).toEqual({
    '1_1': {
      '0_1': {
        '0_2': {
          '1_2': {},
        },
      },
      '2_1': {},
    },
  });
  expect(findGraphForCell(CELL_3, GRID)).toEqual({
    '0_2': {
      '1_2': {
        '1_1': {
          '0_1': {},
          '2_1': {},
        },
      },
    },
  });
});
