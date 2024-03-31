import { GameObjects } from 'phaser';
import { Game } from '../scenes/Game';

export default class Tile extends GameObjects.Sprite {
  constructor(
    scene: Game,
    x: number,
    y: number,
    data: { asset: string | Phaser.Textures.Texture },
  ) {
    super(scene, x, y, data.asset);
    // this.data = data;
    // this.row = data.row;
    // this.col = data.col;

    this.setInteractive();
    //
    this.on(
      'pointerdown',
      () => {
        // @ts-expect-error need right interface
        this.scene.pickBlock(this);
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
