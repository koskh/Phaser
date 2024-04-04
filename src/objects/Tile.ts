import { gameScene } from '../scenes/GameScene';
import { ETileType } from '../config';
import { EAssetsSprites } from '../assets';
import { tileToPosition } from '../game/utilities/position';
import { gameManager } from '../game/Manager';
import Board, { board } from '../game/Board';

export default class Tile extends Phaser.GameObjects.Sprite {
  public cell: IPositionInCell;
  public position: IPositionInPixel;
  public tileType: ETileType;
  private board: Board;

  constructor(tileType: ETileType, tilePos: IPositionInCell) {
    const { x, y } = tileToPosition(tilePos);

    super(gameScene, x, y, EAssetsSprites.TILES, tileType);
    gameScene.add.existing(this).setDepth(1).setOrigin(0.5, 0.5);

    this.position = { x, y };
    this.cell = tilePos;
    this.tileType = tileType;
    this.board = board;

    this.setInteractive();
    this.on('pointerdown', () => this.onPointerDown());
  }

  onPointerDown() {
    gameManager.onSelectTile(this);
  }

  public updatePositionAndTile = (tile: IPositionInCell) => {
    this.cell = tile;
    this.position = tileToPosition(tile);
    this.board.setTile(this, tile);
  };
}
