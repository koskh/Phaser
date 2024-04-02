import Tile from '../objects/Tile';

import { getRandomBoard, getRandomTilesGrid } from './utilities/board';

export default class Board {
  private current: Tile[][] = [[]];

  constructor() {
    this.create();
  }

  create() {
    const tilesGrid = getRandomTilesGrid();
    const board = getRandomBoard(tilesGrid);

    this.current = board;
  }
}
