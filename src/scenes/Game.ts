import { Scene } from 'phaser';
import { EAssets } from '../assets';

import Tile from '../objects/Tile';
import { emitEvent, onEvent } from '../utilities/EventsCenter';

// import { updateCount } from '../state/gameControllers';

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  // msg_text: Phaser.GameObjects.Text;
  count = 0;
  state: {
    board: Array<Array<number>>;
  };
  blocks: Phaser.GameObjects.Group;
  constructor() {
    super('Game');
  }

  init(): void {
    //   console.log('Game scene data', data);
    //
    //   Generate board
    this.state = {
      board: [
        [1, 1, 2],
        [2, 1, 3],
        [3, 2, 3],
      ],
    };

    // this.scene.run('GameState');
    // this.scene.run('BoardController');
  }

  create() {
    // this.camera = this.cameras.main;
    // this.camera.setBackgroundColor(0x00ff00);

    this.background = this.add.image(
      this.sys.canvas.width / 2,
      this.sys.canvas.height / 2,
      EAssets.BACK_GROUND,
    );
    this.background.setAlpha(0.5);

    this.scene.run('UI');
    this.scene.run('GameBoard');

    // store.dispatch({ type: 'counter/incremented' });

    // // @ts-expect-error dev-only
    // this.input.keyboard.on('keydown-SPACE', () => {
    //   // ++this.count;
    //   // console.log('this.count', this.count);
    //   // eventEmit('update-count', this.count);
    //   updateCount(1000);
    // });
    //
    // this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
    //   // @ts-expect-error dev-only
    //   this.input.keyboard.off('keydown-SPACE');
    // });

    const NUM_ROWS = 3;
    const NUM_COLS = 3;
    const BLOCK_SIZE = 35;
    // draw board

    //draw tiles
    this.blocks = this.add.group();

    for (let i = 0; i < NUM_ROWS; i++) {
      for (let j = 0; j < NUM_COLS; j++) {
        const x = 36 + j * (BLOCK_SIZE + 6);
        const y = 150 + i * (BLOCK_SIZE + 6);

        // this.add.image(x, y, 'cell');

        this.createBlock(x, y, {
          // asset: 'tile_' + this.state.board[i][j],
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

    this.blocks.add(tile, true);

    // } else {
    //   block.reset(x, y, data);
    // }

    // this.children.bringToTop(tile);
    // block.setActive(true);
    // block.setVisible(true);
    return tile;
  }

  pickBlock(tile: Tile) {
    // console.log('pickBlock', tile);
    //
    // const logo = this.add.image(100, 100, EAssets.TILE_GREEN);
    //
    // this.tweens.add({
    //   targets: logo,
    //   x: 600,
    //   ease: 'Power1',
    //   duration: 2000,
    // });

    // this.state.board[2][1] = 0;

    this.tweens.add({
      targets: tile,
      y: tile.y + 100,
      duration: 1000,
      ease: 'Linear',
    });

    // //only swap if the UI is not blocked
    // if(this.isBoardBlocked) {
    //   return;
    // }
    //
    // //if there is nothing selected
    // if(!this.selectedBlock) {
    //   //highlight the first block
    // tile.setScale(0.2125);
    //
    //   this.selectedBlock = block;
    // }
    // else {
    //   //second block you are selecting is target block
    //   this.targetBlock = block;
    //
    //   //only adjacent blocks can swap
    //   if(this.board.checkAdjacent(this.selectedBlock, this.targetBlock)) {
    //     //block the UI
    //     this.isBoardBlocked = true;
    //
    //     //swap blocks
    //     this.swapBlocks(this.selectedBlock, this.targetBlock);
    //   }
    //   else {
    //     this.clearSelection();
    //   }
    // }
  }
}
