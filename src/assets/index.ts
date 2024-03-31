export enum EAssets {
  BACK_GROUND = 'BACK_GROUND',
  LOGO = 'LOGO',
  TILE_BLUE = 'TILE_BLUE',
  TILE_GREEN = 'TILE_GREEN',
  TILE_PURPLE = 'TILE_PURPLE',
  TILE_RED = 'TILE_RED',
  BEAN_YELLOW = 'BEAN_YELLOW',
}

export const ASSETS: { [key in EAssets]: { name: string; url: string } } = {
  [EAssets.BACK_GROUND]: { name: 'bg', url: 'assets/bg.png' },
  [EAssets.LOGO]: { name: 'logo', url: 'assets/logo.png' },
  [EAssets.TILE_BLUE]: { name: 'bean_blue', url: 'assets/tile_blue.png' },
  [EAssets.TILE_GREEN]: { name: 'bean_green', url: 'assets/tile_green.png' },
  [EAssets.TILE_PURPLE]: { name: 'bean_purple', url: 'assets/tile_purple.png' },
  [EAssets.TILE_RED]: { name: 'bean_red', url: 'assets/tile_red.png' },
  [EAssets.BEAN_YELLOW]: { name: 'bean_yellow', url: 'assets/tile_yellow.png' },
};
