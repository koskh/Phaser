import { tileToPosition } from '../position';
import { INITIAL_BOARD_SCREEN } from '../../../config';

test('can convert tile position to board cords', () => {
  expect(tileToPosition({ tileX: 0, tileY: 0 })).toEqual({
    x: INITIAL_BOARD_SCREEN.WIDTH,
    y: INITIAL_BOARD_SCREEN.HEIGHT,
  });
});
