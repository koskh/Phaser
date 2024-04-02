import Tile from './Tile';

export default class Board {
  private current: Tile[][] = [[]];

  constructor() {
    this.create();
  }

  create() {
    const board: Tile[][] = [];

    const pseudoRandomedBoard = [
      ['g', 'y', 'b'],
      ['w', 'w', 'g'],
      ['w', 'g', 'r'],
    ];

    pseudoRandomedBoard.forEach((line, rowIndex) =>
      line.forEach((piece, columnIndex) => {
        !board[rowIndex]?.length && (board[rowIndex] = []);
        //
        board[rowIndex].push(new Tile());
      }),
    );

    this.current = board;
  }
}
