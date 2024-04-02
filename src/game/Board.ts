import Tile from './Tile';

export default class Board {
  private current: Tile[][] = [[]];

  constructor() {}

  create() {
    const board: Tile[][] = [];

    const pseudoRandomedBoard = [
      ['g', 'y', 'b'],
      ['w', 'w', 'g'],
      ['w', 'g', 'r'],
    ];

    this.current = board;
  }
}
