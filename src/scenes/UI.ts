import { Scene } from 'phaser';
// import { onEvent } from '../utilities/eventsCenter';
import { EApplicationEvents } from '../utilities/ApplicationEvents';

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
    this.labelAttempt = this.add.text(200, 10, 'Attemts: 0', {
      fontSize: 32,
    });

    // onEvent(EApplicationEvents.GAME_STATE_UPDATED, this.updateCount, this);
    // onEvent(EApplicationEvents.GAME_STATE_UPDATED, this.updateAttempt, this);
  }

  updateCount({ count }: IGameState) {
    this.labelCount.text = `Count: ${count}`;
  }

  updateAttempt({ attempts }: IGameState) {
    this.labelAttempt.text = `Attemts: ${attempts}`;
  }
}
