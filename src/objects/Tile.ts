import { GameObjects } from 'phaser';
// import { Game } from '../scenes/Game';

export default class Tile extends GameObjects.Sprite {
  // row;
  // col;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    data: {
      asset: string | Phaser.Textures.Texture;
      row?: number;
      col?: number;
    },
  ) {
    // super(scene, x, y, data.asset);
    super(scene, x, y, data.asset);
    // this.data = data;
    // this.row = data.row;
    // this.col = data.col;

    this.setInteractive();
    //
    this.on(
      'pointerdown',
      () => {
        // this.scene.pickBlock(this);
        console.log('pointerdown', data.row, data.col);
      },
      this,
    );
  }

  // reset(x, y, data) {
  //   this.setPosition(x, y);
  //   this.setTexture(data.asset);
  //   this.row = data.row;
  //   this.col = data.col;
  // }

  // deactivate() {
  //   this.setTexture('deadBlock');
  //   this.col = null;
  //   this.row = null;
  //
  //   this.scene.time.delayedCall(this.scene.ANIMATION_TIME / 2, () => {
  //     this.setActive(false);
  //     this.setVisible(false);
  //   });
  // }
}
