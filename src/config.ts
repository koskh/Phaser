export const TILE = {
  WIDTH: 173,
  HEIGHT: 192,
};
export const BACKGROUND = {
  WIDHT: 1920,
  HEIGHT: 1720,
};

export const HALF_SCREEN = {
  WIDTH: BACKGROUND.WIDHT / 2,
  HEIGHT: BACKGROUND.HEIGHT / 2,
};

export const INITIAL_BOARD_SCREEN = {
  WIDTH: HALF_SCREEN.WIDTH / 2,
  HEIGHT: 300,
};

export enum ETileType {
  BLUE,
  PURPLE,
  RED,
  YELLOW,
  GREEN,
}

export enum EBoosterType {
  BOMB = 'BOMB',
  TELEPORT = 'TELEPORT',
  SUPER = 'SUPER',
}

export const GRID = {
  ROWS: 7,
  COLUMNS: 7,
};

export const VARIATIONS = Object.keys(ETileType).length / 2;
export const MIN_ADJACENTS = 2;

export const CAN_SIMPLE_SWAP_TWO_ADJACENT_TILES = false;
export const HAS_MINIMAL_ONCE_GAME = true;
export const INITIAL_RESETS = 3;
export const WIN_SCORE = 10;
export const INITIAL_TURNS = 3;
export const SCORE_FOR_TILE = 1;
