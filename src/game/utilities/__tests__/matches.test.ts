import {
  findAdjacentCells,
  findGraphForCell,
  getAllGraphPosition,
  getRadiusMatches,
} from '../matches';

import { getTestTilesGrid } from '../board';

const GRID = getTestTilesGrid();

const CELL: IPositionInCell = { tileX: 1, tileY: 0 };
const CELL_1: IPositionInCell = { tileX: 0, tileY: 0 };
const CELL_2: IPositionInCell = { tileX: 1, tileY: 1 };
const CELL_3: IPositionInCell = { tileX: 0, tileY: 2 };
test('can find adjacements for one cell', () => {
  expect(findAdjacentCells(CELL, GRID)).toHaveLength(0);
  expect(findAdjacentCells(CELL, GRID)).toEqual([]);

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
    '1_0': {},
  });

  expect(findGraphForCell(CELL_1, GRID)).toEqual({
    '0_0': {},
  });
});

test('can get grid positions from graph', () => {
  const GRAPH_2 = findGraphForCell(CELL_2, GRID);
  expect(getAllGraphPosition(GRAPH_2)).toEqual([
    { tileX: 1, tileY: 1 },
    { tileX: 0, tileY: 1 },
    { tileX: 0, tileY: 2 },
    { tileX: 1, tileY: 2 },
  ]);
});

test('can get radius cells from selected', () => {
  expect(getRadiusMatches(CELL, 1)).toEqual([
    {
      tileX: 0,
      tileY: 0,
    },
    {
      tileX: 1,
      tileY: 0,
    },
    {
      tileX: 2,
      tileY: 0,
    },
    {
      tileX: 1,
      tileY: 1,
    },
  ]);

  expect(getRadiusMatches(CELL, 2)).toEqual([
    {
      tileX: 0,
      tileY: 0,
    },
    {
      tileX: 1,
      tileY: 0,
    },
    {
      tileX: 2,
      tileY: 0,
    },
    {
      tileX: 3,
      tileY: 0,
    },
    {
      tileX: 0,
      tileY: 1,
    },
    {
      tileX: 1,
      tileY: 1,
    },
    {
      tileX: 2,
      tileY: 1,
    },
    {
      tileX: 1,
      tileY: 2,
    },
  ]);
});
