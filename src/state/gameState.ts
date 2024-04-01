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
    },
  };
}

export default gameState();
