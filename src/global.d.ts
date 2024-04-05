interface IPositionInPixel {
  x: number;
  y: number;
}

interface IPositionInCell {
  tileX: number;
  tileY: number;
}

interface IGraph {
  [key: string]: IGraph;
}
