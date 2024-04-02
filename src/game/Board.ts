import Tile from '../objects/Tile';
import { ETileType } from '../config';

export default class Board {
  private current: Tile[][] = [[]];

  constructor() {
    this.create();
  }

  create() {
    const board: Tile[][] = [];

    const pseudoRandomedBoard = [
      [ETileType.RED, ETileType.BLUE, ETileType.GREEN],
      [ETileType.YELLOW, ETileType.PURPLE, ETileType.YELLOW],
      [ETileType.RED, ETileType.BLUE, ETileType.GREEN],
    ];

    pseudoRandomedBoard.forEach((line, rowIndex) =>
      line.forEach((tileType, columnIndex) => {
        !board[rowIndex]?.length && (board[rowIndex] = []);
        //
        board[rowIndex].push(
          new Tile(tileType, { tileX: rowIndex, tileY: columnIndex }),
        );
      }),
    );

    this.current = board;
  }
}
