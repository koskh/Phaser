import { emitEvent, onEvent } from '../eventsCenter';
import { EApplicationEvents } from '../ApplicationEvents';

test('emitEvent send message to Phaser.Events.EventEmitter', () => {
  expect(emitEvent(EApplicationEvents.GAME_STATE_UPDATED)).toBe(false);
});

test('onEvent get message from Phaser.Events.EventEmitter', () => {
  const phaserOnEventMock = jest.fn();
  const sceneMocked = { events: { on: phaserOnEventMock } };

  expect(onEvent(EApplicationEvents.GAME_STATE_UPDATED, () => {})).toBe(
    undefined,
  );

  expect(
    // @ts-expect-error imitate Phaser.Scene even bus
    onEvent(EApplicationEvents.GAME_STATE_UPDATED, () => {}, sceneMocked),
  ).toBe(undefined);
  expect(phaserOnEventMock).toHaveBeenCalled();
});
