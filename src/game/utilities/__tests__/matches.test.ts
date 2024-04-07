import {
  findAdjacentCells,
  findGraphForCell,
  getAllGraphPosition,
} from '../matches';

import { getTestTilesGrid } from '../board';

const GRID = getTestTilesGrid();

const CELL: IPositionInCell = { tileX: 1, tileY: 0 };
const CELL_2: IPositionInCell = { tileX: 1, tileY: 1 };
const CELL_3: IPositionInCell = { tileX: 0, tileY: 2 };
test('can find adjacements for one cell', () => {
  expect(findAdjacentCells(CELL, GRID)).toHaveLength(1);
  expect(findAdjacentCells(CELL, GRID)).toEqual([{ tileX: 2, tileY: 0 }]);

  expect(findAdjacentCells(CELL_2, GRID)).toHaveLength(2);
  expect(findAdjacentCells(CELL_2, GRID)).toEqual([
    { tileX: 0, tileY: 1 },
    { tileX: 1, tileY: 2 },
  ]);
  //
  expect(findAdjacentCells(CELL_3, GRID)).toHaveLength(2);
  expect(findAdjacentCells(CELL_3, GRID)).toEqual([
    { tileX: 1, tileY: 2 },
    { tileX: 0, tileY: 1 },
  ]);
});

test('can build one-way graph for adjacent cells', () => {
  expect(findGraphForCell(CELL, GRID)).toEqual({
    '1_0': {
      '2_0': {},
    },
  });

  expect(findGraphForCell(CELL_2, GRID)).toEqual({
    '1_1': {
      '0_1': {
        '0_2': {
          '1_2': {},
        },
      },
    },
  });
});

test('can get grid positions from graph', () => {
  const GRAPH = findGraphForCell(CELL, GRID);
  expect(getAllGraphPosition(GRAPH)).toEqual([
    { tileX: 1, tileY: 0 },
    { tileX: 2, tileY: 0 },
  ]);

  const GRAPH_2 = findGraphForCell(CELL_2, GRID);
  expect(getAllGraphPosition(GRAPH_2)).toEqual([
    { tileX: 1, tileY: 1 },
    { tileX: 0, tileY: 1 },
    { tileX: 0, tileY: 2 },
    { tileX: 1, tileY: 2 },
  ]);
});
