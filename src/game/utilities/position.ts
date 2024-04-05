import { INITIAL_BOARD_SCREEN, TILE } from '../../config';

export function tileToPosition(
  positionInTile: IPositionInCell,
): IPositionInPixel {
  const x = positionInTile.tileX * TILE.WIDTH + INITIAL_BOARD_SCREEN.WIDTH;
  const y = positionInTile.tileY * TILE.HEIGHT + INITIAL_BOARD_SCREEN.HEIGHT;
  return { x, y };
}

export function positionToTile(
  positionInPixel: IPositionInPixel,
): IPositionInCell {
  const tileX = (positionInPixel.x - INITIAL_BOARD_SCREEN.WIDTH) / TILE.WIDTH;
  const tileY = (positionInPixel.y - INITIAL_BOARD_SCREEN.HEIGHT) / TILE.HEIGHT;
  return { tileX, tileY };
}
