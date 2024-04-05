import { getScore } from '../game';
import { SCORE_FOR_TILE } from '../../../config';

test('can generate pseudo grid', () => {
  const deletedTiles = 42;
  expect(getScore(deletedTiles)).toBe(deletedTiles * SCORE_FOR_TILE);
});
