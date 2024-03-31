import { createStore, combineReducers } from 'redux';

import { gameController } from './gameController';

const gameLogic = combineReducers({
  gameController: gameController.reducer,
});

const gameStore = createStore(gameLogic);

gameStore.subscribe(() => console.log(gameStore.getState()));

export { gameStore, gameController };
