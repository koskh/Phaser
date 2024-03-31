import { Scene } from 'phaser';
import { onEvent } from '../utilities/EventsCenter';

export class UI extends Scene {
  labelCount: Phaser.GameObjects.Text;
  labelAttempt: Phaser.GameObjects.Text;

  constructor() {
    super('UI');
  }

  preload() {}

  create() {
    this.labelCount = this.add.text(10, 10, 'Count: 0', {
      fontSize: 32,
    });
    this.labelAttempt = this.add.text(200, 10, 'Attemts: 3', {
      fontSize: 32,
    });

    onEvent('update-count', this.updateCount, this);
  }

  updateCount(count: number) {
    this.labelCount.text = `Count: ${count}`;
  }
}
