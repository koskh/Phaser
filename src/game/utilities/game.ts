import { SCORE_FOR_TILE } from '../../config';

export function getScore(tiles: number, scoreForTile = SCORE_FOR_TILE) {
  return tiles * scoreForTile;
}
