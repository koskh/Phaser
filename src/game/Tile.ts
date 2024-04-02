import { ETileType } from '../config';

export default class Tile extends Phaser.GameObjects.Sprite {
  public currentTile: IPositionInTile;
  public currentPosition: IPositionInPixel;
  public tileType: ETileType;
}
