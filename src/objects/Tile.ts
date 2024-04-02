import { gameScene } from '../scenes/GameScene';
import { ETileType } from '../config';
import { EAssetsSprites } from '../assets';
import { tileToPosition } from '../game/utilities/position';
import { gameManager } from '../game/Manager';

export default class Tile extends Phaser.GameObjects.Sprite {
  public currentTile: IPositionInTile;
  public currentPosition: IPositionInPixel;
  public tileType: ETileType;

  constructor(tileType: ETileType, tilePos: IPositionInTile) {
    const { x, y } = tileToPosition(tilePos);

    super(gameScene, x, y, EAssetsSprites.TILES, tileType);
    gameScene.add.existing(this).setDepth(1).setOrigin(0.5, 0.5);

    this.currentPosition = { x, y };
    this.currentTile = tilePos;
    this.tileType = tileType;

    this.setInteractive();
    this.on('pointerdown', () => this.onPointerDown());
  }

  onPointerDown() {
    gameManager.setSelectedTile(this);
  }
}
