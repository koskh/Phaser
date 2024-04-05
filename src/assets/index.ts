import { TILE } from '../config';

export enum EAssetsImg {
  BACK_GROUND = 'BACK_GROUND',
  LOGO = 'LOGO',
  RESET = 'RESET',
  TELEPORT = 'TELEPORT',
  TURNS = 'TURNS',
  SCORE = 'SCORE',
}

export const ASSETS_IMG: {
  [key in EAssetsImg]: { name: string; url: string; type?: string };
} = {
  [EAssetsImg.BACK_GROUND]: { name: 'bg', url: 'assets/bg.png' },
  [EAssetsImg.LOGO]: { name: 'logo', url: 'assets/logo.png' },
  [EAssetsImg.RESET]: { name: 'reset_btn', url: 'assets/reset_btn.png' },
  [EAssetsImg.TELEPORT]: {
    name: 'teleport_btn',
    url: 'assets/teleport_btn.png',
  },
  [EAssetsImg.TURNS]: { name: 'turns_bg', url: 'assets/moves_bg.png' },
  [EAssetsImg.SCORE]: { name: 'score_bg', url: 'assets/score_bg.png' },
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
