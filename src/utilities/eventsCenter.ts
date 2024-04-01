import { Events } from 'phaser';
import { EApplicationEvents } from './ApplicationEvents';

const eventsCenter = new Events.EventEmitter();

export default eventsCenter;
// export function onEvent(
//   event: string | symbol | EApplicationEvents,
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   fn: (...args: any[]) => void,
//   context?: Phaser.Scene,
// ) {
//   // event
//   eventsCenter.on(event as string, fn, context);
//
//   // clean up when Scene is shutdown
//   context &&
//     context.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
//       eventsCenter.off(event as string, fn, context);
//     });
// }
//
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function emitEvent(
//   event: string | symbol | EApplicationEvents,
//   ...args: any[]
// ) {
//   return eventsCenter.emit(event as string, ...args);
// }
