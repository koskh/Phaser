import { getGameState, updateCount } from '../gameControllers';

import { emitEvent } from '../../utilities/EventsCenter';
//
jest.mock('../../utilities/EventsCenter');

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
  expect(emitEvent).toHaveBeenCalled();
});
