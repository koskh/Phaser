import { TILE } from '../config';

export enum EAssetsImg {
  BACK_GROUND = 'BACK_GROUND',
  LOGO = 'LOGO',
}

export const ASSETS_IMG: {
  [key in EAssetsImg]: { name: string; url: string; type?: string };
} = {
  [EAssetsImg.BACK_GROUND]: { name: 'bg', url: 'assets/bg.png' },
  [EAssetsImg.LOGO]: { name: 'logo', url: 'assets/logo.png' },
};

export enum EAssetsSprites {
  TILES = 'TILES',
}

export const ASSETS_SPRITES: {
  [key in EAssetsSprites]: {
    name: string;
    url: string;
    type: string;
    width: number;
    height: number;
  };
} = {
  [EAssetsSprites.TILES]: {
    name: 'tiles',
    url: 'assets/tiles.png',
    type: 'spritesheet',
    width: TILE.WIDTH,
    height: TILE.HEIGHT,
  },
};
