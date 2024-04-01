import { getGameState } from '../gameControllers';

jest.mock('../gameState', () => {
  return {
    __esModule: true,
    // ...originalModule,
    default: {
      getState: jest.fn(() => 'mocked baz'),
    },
    foo: 'mocked foo',
  };
});
test('can get game state', () => {
  expect(getGameState()).toBe(3);
});
