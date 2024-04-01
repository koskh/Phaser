interface IGameState {
  board: IGameBoard | null;
  count: number;
  attempts: number;
}

interface IGameBoard extends Array<Array<number>> {}
