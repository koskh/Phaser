import { emitEvent } from '../utilities/EventsCenter';
import { EApplicationEvents } from '../utilities/ApplicationEvents';

let gameState: IGameState = {
  board: null,
  count: 0,
  attempts: 0,
};

function getGameState(): IGameState {
  return gameState;
}

function updateCount(newCount: number): void {
  gameState = { ...gameState, count: newCount };
  emitEvent(EApplicationEvents.GAME_STATE_UPDATED, getGameState());
}

export { getGameState, updateCount };
