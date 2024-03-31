import Phaser from 'phaser';

const eventsCenter = new Phaser.Events.EventEmitter();

export function onEvent(
  event: string | symbol,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fn: (...args: any[]) => void,
  context: Phaser.Scene,
) {
  // event
  eventsCenter.on(event, fn, context);

  // clean up when Scene is shutdown
  context.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
    eventsCenter.off(event, fn, context);
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function eventEmit(event: string | symbol, ...args: any[]) {
  return eventsCenter.emit(event, ...args);
}
