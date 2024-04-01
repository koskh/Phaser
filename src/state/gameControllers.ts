import { emitEvent } from '../utilities/eventsCenter';
import { EApplicationEvents } from '../utilities/ApplicationEvents';

import gameState from './gameState';

function getGameState(): IGameState {
  return gameState.getState();
}

function updateCount(newCount: number): void {
  gameState.setState({ ...gameState.getState(), count: newCount });
  emitEvent(EApplicationEvents.GAME_STATE_UPDATED, getGameState());
}

export { getGameState, updateCount };
