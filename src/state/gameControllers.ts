import { emitEvent } from '../utilities/eventsCenter';
import { EApplicationEvents } from '../utilities/ApplicationEvents';

import gameState from './gameState';
import { populateGrid } from './utilities/grid';

export function getGameState(): IGameState {
  return gameState.getState();
}

export function populateGameBoard(
  rows: number,
  cols: number,
  variations: number,
): void {
  const board = populateGrid(rows, cols, variations);
  gameState.setState({ ...gameState.getState(), board });
  // emitEvent(EApplicationEvents.GAME_STATE_UPDATED, getGameState());
}

export function updateCount(newCount: number): void {
  gameState.setState({ ...gameState.getState(), count: newCount });
  // emitEvent(EApplicationEvents.GAME_STATE_UPDATED, getGameState());
}
