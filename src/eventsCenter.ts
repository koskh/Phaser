/* eslint-disable @typescript-eslint/no-explicit-any */

import { Events } from 'phaser';

const eventsCenter = new Events.EventEmitter();

export enum EApplicationEvents {
  'UPDATE_SCORE',
  'UPDATE_TURNS',
  'SET_BOOSTER',
}

export function onEvent(
  event: string | symbol | EApplicationEvents,
  fn: (...args: any[]) => void,
  context?: Phaser.Scene,
) {
  eventsCenter.on(event as string, fn, context);

  context &&
    context.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
      eventsCenter.off(event as string, fn, context);
    });
}

export function emitEvent(
  event: string | symbol | EApplicationEvents,
  ...args: any[]
) {
  return eventsCenter.emit(event as string, ...args);
}
