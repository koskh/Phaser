import { createStore } from 'redux';
import gameController from './gameController';

const store = createStore(gameController);

// store.subscribe(() => console.log('store.getState', store.getState()));

export { store as gameStore, gameController };
