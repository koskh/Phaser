import { emitEvent } from '../utilities/eventsCenter';
import { EApplicationEvents } from '../utilities/ApplicationEvents';
import { getGameState } from './gameControllers';

function gameState() {
  let state: IGameState = {
    board: null,
    count: 0,
    attempts: 0,
  };
  return {
    getState: () => state,
    setState: (newState: IGameState) => {
      state = { ...newState };
      emitEvent(EApplicationEvents.GAME_STATE_UPDATED, getGameState());
    },
  };
}

export default gameState();
