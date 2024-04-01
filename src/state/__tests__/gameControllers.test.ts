import {
  getGameState,
  updateCount,
  populateGameBoard,
  resetScoreAndLevel,
} from '../gameControllers';
import { populateGrid } from '../utilities/grid';

// import { emitEvent } from '../../utilities/eventsCenter';
// jest.mock('../../utilities/eventsCenter');

import gameState from '../gameState';

//
let MOCKED_STATE: IGameState = {
  board: null,
  count: 0,
  attempts: 0,
};
jest.mock('../gameState', () => {
  return {
    __esModule: true,
    default: {
      getState: jest.fn(() => MOCKED_STATE),
      setState: jest.fn((arg0) => {
        MOCKED_STATE = arg0;
      }),
    },
  };
});
test('can get game state', () => {
  expect(getGameState()).toMatchObject(MOCKED_STATE);
  expect(gameState.getState).toHaveBeenCalled();
});

test('can update count ', () => {
  const newCount = 42;
  updateCount(newCount);

  expect(gameState.setState).toHaveBeenCalled();
  expect(gameState.setState).toHaveBeenLastCalledWith({
    ...MOCKED_STATE,
    count: newCount,
  });
  // expect(emitEvent).toHaveBeenCalled();
});

test('can populate board grid ', () => {
  const rows = 2,
    cols = 2,
    variations = 1;

  populateGameBoard(rows, cols, variations);

  expect(gameState.setState).toHaveBeenCalled();

  expect(gameState.setState).toHaveBeenLastCalledWith({
    ...MOCKED_STATE,
    board: populateGrid(rows, cols, variations),
  });
  // expect(emitEvent).toHaveBeenCalled();
});

test('can start new game, reset and populated board, reset scores etc', () => {
  const rows = 2,
    cols = 2,
    variations = 1;

  resetScoreAndLevel(rows, cols, variations);

  expect(gameState.setState).toHaveBeenCalled();

  expect(gameState.setState).toHaveBeenLastCalledWith({
    ...MOCKED_STATE,
    board: populateGrid(rows, cols, variations),
    count: 0,
    attempts: 0,
  });
  // expect(emitEvent).toHaveBeenCalled();
});
