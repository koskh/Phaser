import { Scene } from 'phaser';
import { EAssets } from '../assets';

import Tile from '../objects/Tile';
// import { populateGameBoard } from '../state/gameControllers';

import gameConfig from '../config';
import eventsCenter from '../utilities/eventsCenter';

// import { EApplicationEvents } from '../utilities/ApplicationEvents';

export class Game extends Scene {
  background: Phaser.GameObjects.Image;

  blocks: Phaser.GameObjects.Group;
  constructor() {
    super('Game');
  }

  init(): void {}

  preload() {
    //  Critical "first render" assets
  }

  create() {
    this.background = this.add.image(
      this.sys.canvas.width / 2,
      this.sys.canvas.height / 2,
      EAssets.BACK_GROUND,
    );
    this.background.setAlpha(0.5);

    this.scene.run('UI');
    this.scene.run('GameBoard');

    // emitEvent(EApplicationEvents.SET_GAME_STATE, {});
    // onEvent(EApplicationEvents.SET_GAME_STATE, this.startGame, this);

    this.startGame();
  }

  startGame() {
    console.log('Start GAme');
    // populateGameBoard(2, 2, 2);

    // emitEvent(EApplicationEvents.GAME_STATE_UPDATED, {});
    eventsCenter.emit('test');
  }

  //
  // createBlock(
  //   x: number,
  //   y: number,
  //   data: {
  //     asset: string | Phaser.Textures.Texture;
  //     row?: number;
  //     col?: number;
  //   },
  // ) {
  //   // let block = this.blocks.getFirstDead(false, x, y);
  //
  //   // if (block == null) {
  //   const tile = new Tile(this, x, y, data).setScale(0.2);
  //
  //   this.blocks.add(tile, true);
  //
  //   // } else {
  //   //   block.reset(x, y, data);
  //   // }
  //
  //   // this.children.bringToTop(tile);
  //   // block.setActive(true);
  //   // block.setVisible(true);
  //   return tile;
  // }

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
