export enum EAssets {
  BACK_GROUND = 'BACK_GROUND',
  LOGO = 'LOGO',
  TILES = 'TILES',
}

export const ASSETS: { [key in EAssets]: { name: string; url: string } } = {
  [EAssets.BACK_GROUND]: { name: 'bg', url: 'assets/bg.png' },
  [EAssets.LOGO]: { name: 'logo', url: 'assets/logo.png' },
  [EAssets.TILES]: { name: 'tiles', url: 'assets/tiles.png' },
};
