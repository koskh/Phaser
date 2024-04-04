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

export const GRID = {
  ROWS: 7,
  COLUMNS: 7,
};

export const VARIATIONS = Object.keys(ETileType).length / 2;

export const MIN_ADJACENTS = 2;
