import { SCORE_FOR_TILE } from '../../config';

export function getScore(tiles: number) {
  return tiles * SCORE_FOR_TILE;
}
