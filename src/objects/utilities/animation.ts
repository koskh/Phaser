import { gameScene } from '../../scenes/GameScene';
import Tile from '../Tile';

export const makeScaleAnimation = (tiles: Tile[]) =>
  new Promise<void>((resolve) => {
    gameScene.tweens.add({
      targets: tiles,
      scaleX: 0,
      scaleY: 0,
      ease: 'Linear',
      duration: 300,
      yoyo: false,
      repeat: 0,
      onComplete() {
        resolve();
      },
    });
  });

// @ts-expect-error DEV-only
export const makeMovementAnimation = (target, { x, y }, duration) =>
  new Promise<void>((resolve) => {
    gameScene.tweens.add({
      targets: target,
      x,
      y,
      ease: 'Linear',
      duration,
      repeat: 0,
      onComplete() {
        resolve();
      },
    });
  });
