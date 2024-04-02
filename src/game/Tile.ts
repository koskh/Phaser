import { gameScene } from '../scenes/GameScene';
import { ETileType } from '../config';
import { EAssetsSprites } from '../assets';

export default class Tile extends Phaser.GameObjects.Sprite {
  public currentTile: IPositionInTile;
  public currentPosition: IPositionInPixel;
  public tileType: ETileType;

  constructor() {
    super(gameScene, 100, 100, EAssetsSprites.TILES, 0);
    gameScene.add.existing(this).setDepth(1).setOrigin(0.5, 0.5);
  }
}
