import { emitEvent } from '../utilities/eventsCenter';
import { EApplicationEvents } from '../utilities/ApplicationEvents';

import gameState from './gameState';

function getGameState(): IGameState {
  return gameState.getState();
}

function populateGameBoard(
  rows: number,
  cols: number,
  variations: number,
): void {
  const board = populateGrid(rows, cols, variations);
}
function updateCount(newCount: number): void {
  gameState.setState({ ...gameState.getState(), count: newCount });
  emitEvent(EApplicationEvents.GAME_STATE_UPDATED, getGameState());
}

export { getGameState, updateCount };
