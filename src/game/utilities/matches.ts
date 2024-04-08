import { GRID, INITIAL_BOOSTER_BOMB_RADIUS } from '../../config';
import { IGameBoard, IGameGrid } from '../Board';

const RIGHT_VECTOR = [1, 0];
const LEFT_VECTOR = [-1, 0];
const UP_VECTOR = [0, 1];
const DOWN_VECTOR = [0, -1];
const VECTORS = [RIGHT_VECTOR, DOWN_VECTOR, LEFT_VECTOR, UP_VECTOR];
// const PERPENDICULAR_VECTORS = [
//   [RIGHT_VECTOR, DOWN_VECTOR],
//   [DOWN_VECTOR, LEFT_VECTOR],
//   [LEFT_VECTOR, UP_VECTOR],
//   [UP_VECTOR, RIGHT_VECTOR],
// ];

export function hasMatches(grid: IGameGrid, initialGrid = GRID): boolean {
  let hasMatches = false;

  for (let row = 0; row < initialGrid.ROWS && !hasMatches; row++) {
    for (
      let column = 0;
      column < initialGrid.COLUMNS && !hasMatches;
      column++
    ) {
      hasMatches = findMatches({ tileX: column, tileY: row }, grid).length > 1;
    }
  }

  return hasMatches;
}

export function getRadiusMatches(
  position: IPositionInCell,
  radius: number = INITIAL_BOOSTER_BOMB_RADIUS,
  grid = GRID,
): IPositionInCell[] {
  // R^2 = x^2 + y^2;
  const { ROWS: rows, COLUMNS: columns } = grid;
  const { tileX, tileY } = position;

  const squareCellsWithSelectCenter: IPositionInCell[] = [];
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (
        column >= tileX - radius &&
        column <= tileX + radius &&
        row >= tileY - radius &&
        row <= tileY + radius
      )
        squareCellsWithSelectCenter.push({
          tileX: row,
          tileY: column,
        });
    }
  }

  const adjCells: IPositionInCell[] = squareCellsWithSelectCenter.filter(
    (p) => {
      return (
        Math.pow(tileX - p.tileX, 2) + Math.pow(tileY - p.tileY, 2) <=
        Math.pow(radius, 2) // Math.pow(radius + 0.5, 2)// TODO: need collaborate with QA
      );
    },
  );

  return adjCells;
}

export function findMatches(
  position: IPositionInCell,
  grid: IGameGrid,
): IPositionInCell[] {
  const graph = findGraphForCell(position, grid);
  return getAllGraphPosition(graph);
}

export function getAllGraphPosition(graph: IGraph): IPositionInCell[] {
  const positions: string[] = [];

  getLeafs(graph);

  return positions.reverse().map((pos) => {
    const [x, y] = pos.split('_');
    return {
      tileX: parseInt(x),
      tileY: parseInt(y),
    };
  });

  function getLeafs(graph: IGraph) {
    const keys = Object.keys(graph);
    keys.map((leaf) => getLeafs(graph[leaf]));
    positions.push(...keys);
  }
}
export function findGraphForCell(
  position: IPositionInCell,
  grid: IGameGrid,
  visited: { [key: string]: boolean } = {},
): IGraph {
  const root = `${position.tileX}_${position.tileY}`;
  const r = { [root]: {} };

  visited[root] = true;

  const matchedPositions: IPositionInCell[] = findAdjacentCells(position, grid);

  matchedPositions.map((mp) => {
    const leaf = `${mp.tileX}_${mp.tileY}`;
    if (!(leaf in visited)) {
      const leaf = `${mp.tileX}_${mp.tileY}`;
      const nextRoot = findGraphForCell(mp, grid, visited);

      r[root] = { ...r[root], [leaf]: { ...nextRoot[leaf] } };
    }
  });
  return r;
}

function isCellInGrid(tileX: number, tileY: number, grid = GRID): boolean {
  return tileX >= 0 && tileX < grid.COLUMNS && tileY >= 0 && tileY < grid.ROWS;
}

export function findAdjacentCells(
  position: IPositionInCell,
  grid: IGameGrid,
): IPositionInCell[] {
  const searchedType = grid[position.tileY][position.tileX];
  const adjCells: IPositionInCell[] = [];

  for (const vector of VECTORS) {
    const [x, y] = vector;
    const probedTileX = position.tileX + x;
    const probedTileY = position.tileY + y;

    if (isCellInGrid(probedTileX, probedTileY)) {
      if (searchedType === grid[probedTileY][probedTileX]) {
        adjCells.push({
          tileX: probedTileX,
          tileY: probedTileY,
        });
      }
    }
  }

  return adjCells;
}

export function isAdjacentCells(
  first: IPositionInCell,
  second: IPositionInCell,
): boolean {
  const results: boolean[] = [];

  for (const vector of VECTORS) {
    const [x, y] = vector;
    const probedTileX = first.tileX + x;
    const probedTileY = first.tileY + y;

    results.push(probedTileX === second.tileX && probedTileY === second.tileY);
  }

  return !results.every((r) => r === false);
}
