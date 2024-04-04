import { ETileType, GRID } from '../../config';
import { IGameGrid } from '../Board';

const RIGHT_VECTOR = [1, 0];
const LEFT_VECTOR = [-1, 0];
const UP_VECTOR = [0, 1];
const DOWN_VECTOR = [0, -1];

const { ROWS, COLUMNS } = GRID;

export default function findMatches(
  position: IPositionInTile,
  grid: IGameGrid,
): IPositionInTile[] {
  const graph = findGraphForCell(position, grid);
  return getAllGraphPosition(graph);
}

export function getAllGraphPosition(graph: IGraph): IPositionInTile[] {
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
  position: IPositionInTile,
  grid: IGameGrid,
  visited: { [key: string]: boolean } = {},
): IGraph {
  const root = `${position.tileX}_${position.tileY}`;
  const r = { [root]: {} };

  visited[root] = true;

  const matchedPositions: IPositionInTile[] = findAdjacentCells(position, grid);

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

function isCellInGrid(tileX: number, tileY: number): boolean {
  return tileX >= 0 && tileX < COLUMNS && tileY >= 0 && tileY < ROWS;
}

export function findAdjacentCells(
  position: IPositionInTile,
  grid: IGameGrid,
): IPositionInTile[] {
  const vectors = [RIGHT_VECTOR, DOWN_VECTOR, LEFT_VECTOR, UP_VECTOR];
  const searchedType = grid[position.tileY][position.tileX];

  const adjCells: IPositionInTile[] = [];

  for (const vector of vectors) {
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
