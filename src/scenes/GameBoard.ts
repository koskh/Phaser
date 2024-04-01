import { Scene } from 'phaser';
// import { onEvent } from '../utilities/eventsCenter';
import { EApplicationEvents } from '../utilities/ApplicationEvents';
import { onEvent } from '../utilities/eventsCenter';
import { EAssets } from '../assets';
import Tile from '../objects/Tile';

export class GameBoard extends Scene {
  tiles: Phaser.GameObjects.Group;
  constructor() {
    super('GameBoard');
  }

  init() {}

  preload() {
    //  Critical "first render" assets
  }

  create() {
    this.tiles = this.add.group();

    onEvent(EApplicationEvents.GAME_STATE_UPDATED, this.renderScene, this);
  }

  renderScene({ board }: IGameState) {
    if (!board) return;

    const rows = board.length;
    const cols = board[0].length;
    const blockSize = 35;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = 36 + j * (blockSize + 6);
        const y = 150 + i * (blockSize + 6);

        // this.add.image(x, y, 'cell');

        this.createBlock(x, y, {
          // asset: 'block' + this.board.grid[i][j],
          asset: EAssets.TILE_GREEN,
          row: i,
          col: j,
        });
      }
    }
  }

  createBlock(
    x: number,
    y: number,
    data: {
      asset: string | Phaser.Textures.Texture;
      row?: number;
      col?: number;
    },
  ) {
    // let block = this.blocks.getFirstDead(false, x, y);

    // if (block == null) {
    const tile = new Tile(this, x, y, data).setScale(0.2);

    this.tiles.add(tile, true);

    // } else {
    //   block.reset(x, y, data);
    // }

    // this.children.bringToTop(tile);
    // block.setActive(true);
    // block.setVisible(true);
    return tile;
  }
}
