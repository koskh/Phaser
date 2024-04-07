import { TILE } from '../config';

export enum EAssetsImg {
  BACK_GROUND = 'BACK_GROUND',
  LOGO = 'LOGO',
  RESET = 'RESET',
  BOOSTER = 'BOOSTER',
  TURNS = 'TURNS',
  SCORE = 'SCORE',
  BACKYARD = 'BACKYARD',
  BACKYARD_TOP = 'BACKYARD_TOP',
  PROGRESS_BAR = 'PROGRESS_BAR',
  PROGRESS_BG = 'PROGRESS_BG',
}

export const ASSETS_IMG: {
  [key in EAssetsImg]: { name: string; url: string; type?: string };
} = {
  [EAssetsImg.BACK_GROUND]: { name: 'bg', url: 'assets/bg.png' },
  [EAssetsImg.LOGO]: { name: 'logo', url: 'assets/logo.png' },
  [EAssetsImg.RESET]: { name: 'reset_btn', url: 'assets/reset_btn.png' },
  [EAssetsImg.BOOSTER]: {
    name: 'booster_btn',
    url: 'assets/booster_btn.png',
  },
  [EAssetsImg.TURNS]: { name: 'turns_bg', url: 'assets/moves_bg.png' },
  [EAssetsImg.SCORE]: { name: 'score_bg', url: 'assets/score_bg.png' },
  [EAssetsImg.BACKYARD]: { name: 'backyard', url: 'assets/backyard.png' },
  [EAssetsImg.BACKYARD_TOP]: {
    name: 'backyard_top',
    url: 'assets/backyard_up.png',
  },
  [EAssetsImg.PROGRESS_BAR]: {
    name: 'progress_bar',
    url: 'assets/progress_bar.png',
  },
  [EAssetsImg.PROGRESS_BG]: {
    name: 'progress_bg',
    url: 'assets/progress_bg.png',
  },
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
