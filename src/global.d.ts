interface IPositionInPixel {
  x: number;
  y: number;
}

interface IPositionInTile {
  tileX: number;
  tileY: number;
}

interface IGraph {
  [key: string]: IGraph;
}
