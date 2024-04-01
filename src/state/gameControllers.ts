import gameState from './gameState';
import { populateGrid } from './utilities/grid';
import { emitEvent } from '../utilities/eventsCenter';
import { EApplicationEvents } from '../utilities/ApplicationEvents';

export function getGameState(): IGameState {
  return gameState.getState();
}

export function resetScoreAndLevel(
  rows: number,
  cols: number,
  variations: number,
) {
  const board = populateGrid(rows, cols, variations);
  gameState.setState({ board, count: 0, attempts: 0 });
  // emitEvent(EApplicationEvents.GAME_STATE_UPDATED, getGameState());
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
